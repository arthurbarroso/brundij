(ns user
  (:require [brundij.server]
            [clojure.core.async :refer [go-loop >! <! chan timeout] :as core.async]
            [clojure.core.async.impl.protocols :refer [closed?]]
            [clojure.string :as string]
            [environ.core :refer [env]]
            [etaoin.api :as etaoin]
            [hawk.core :as hawk]
            [integrant.core :as ig]
            [integrant.repl :as ig-repl]
            [integrant.repl.state :as state]
            [muuntaja.core :as m]))

(def config-map
  {:server/jetty {:handler (ig/ref :brundij/app)
                  :port (Integer/parseInt (env :port))}
   :brundij/app {:database (ig/ref :db/postgres)
                 :renderer (ig/ref :brundij/render)}
   :brundij/render {:render? (env :pre-render)}
   :db/postgres {:host (env :database-host)
                 :port (env :database-port)
                 :user (env :database-user)
                 :backend (env :database-backend)
                 :id (env :database-id)
                 :password (env :database-password)
                 :dbname (env :database-name)}})

(ig-repl/set-prep!
  (fn [] config-map))

(def app (-> state/system :brundij/app))
(def go ig-repl/go)
(def reset ig-repl/reset)
(def reset-all ig-repl/reset-all)

(defn- clojure-file? [_ {:keys [file]}]
  (re-matches #"[^.].*(\.clj|\.edn)$" (.getName file)))

(defn- auto-reset-handler [ctx _event]
  (binding [*ns* *ns*]
    (reset)
    ctx))

(defn auto-reset
  "Copied from Duct
  https://github.com/duct-framework/core/blob/master/src/duct/core/repl.clj"
  []
  (hawk/watch! [{:paths ["src/clj" "src/cljc" "dev-resources/user.clj"]
                 :filter clojure-file?
                 :handler auto-reset-handler}]))

(defn- poll-frontend [driver]
  (let [ch (chan)]
    (go-loop []
             (if (etaoin/js-execute driver "return brundij.utils.ready_QMARK_();")
               (>! ch true)
               (do (<! (timeout 400))
                   (when-not (closed? ch)
                     (recur)))))
    ch))

(defn- wait-for-frontend [driver]
  (core.async/go
    (let [poll-ch (poll-frontend driver)
          [_message ch] (core.async/alts! [poll-ch
                                           (core.async/timeout 4000)])]
      (if (= ch poll-ch)
        true
        (core.async/close! poll-ch)))))

(defn prerender [driver {:keys [route html-name]}]
  (etaoin/go driver "https://brundij-demo.netlify.app/")
  (etaoin/js-execute driver
                     (str "brundij.utils.out_navigate(\"" (keyword route) "\");"))
  (core.async/go
    (when (<! (wait-for-frontend driver))
      (let [url (subs (etaoin/js-execute driver "return document.location.pathname;") 1)
            m (m/create)
            body (etaoin/js-execute driver "return document.getElementById('app').innerHTML;")
            head (etaoin/js-execute driver "return document.querySelector('head').innerHTML;")
            template (slurp "dev-resources/resources/template.html")
            app-db (->> (etaoin/js-execute driver "return brundij.utils.export_db();")
                        (clojure.edn/read-string)
                        (m/encode m "application/json")
                        (slurp))
            app-db-string (str "<script>window.__rendered_db=" app-db "</script>")]
        (spit (str "dev-resources/resources/" html-name)
              (-> template
                  (string/replace "{{head}}" head)
                  (string/replace "{{body}}" body)
                  (string/replace "{{pre-rendered-db}}" app-db-string)))))))

(def server-routes
  [{:route "home" :html-name "index.html"}
   {:route "create" :html-name "create.html"}
   {:route "questions" :html-name "questions.html"}
   {:route "success" :html-name "success.html"}
   {:route "answers" :html-name "answers.html"}
   {:route "answers-success" :html-name "answers-success.html"}
   {:route "export-results" :html-name "results.html"}
   {:route "list-checks" :html-name "list.html"}])

(comment
  (go)
  (reset-all)
  (nth server-routes 0)
  (def driver (-> state/system :brundij/render))
  (prerender driver (nth server-routes 7)) ;;7
  (prerender driver "create")
  (etaoin/go driver "https://brundij-demo.netlify.app/")
  (etaoin/js-execute driver "brundij.utils.out_navigate(\":create\")")
  (etaoin/js-execute driver "return brundij.utils.ready_QMARK_();")
  (auto-reset))
