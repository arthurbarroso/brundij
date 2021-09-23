(ns user
  (:require [brundij.server]
            [clojure.core.async :refer [go-loop >! <! chan timeout close! alts!] :as core.async]
            [clojure.core.async.impl.protocols :refer [closed?]]
            [environ.core :refer [env]]
            [etaoin.api :as etaoin]
            [hawk.core :as hawk]
            [integrant.core :as ig]
            [integrant.repl :as ig-repl]
            [integrant.repl.state :as state]))

(def config-map
  {:server/jetty {:handler (ig/ref :brundij/app)
                  :port (Integer/parseInt (env :port))}
   :brundij/app {:database (ig/ref :db/postgres)
                 :renderer (ig/ref :brundij/render)}
   :brundij/render {}
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
(def driver (-> state/system :brundij/render))
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
          [message ch] (core.async/alts! [poll-ch
                                          (core.async/timeout 4000)])]
      (if (= ch poll-ch)
        true
        (core.async/close! poll-ch)))))

(defn prerender [route]
  (etaoin/go driver "https://brundij-demo.netlify.app/")
  (etaoin/js-execute driver
                     (str "brundij.utils.out_navigate(\"" (keyword route) "\");"))
  (core.async/go
    (when (<! (wait-for-frontend driver))
      (let [url (subs (etaoin/js-execute driver "return document.location.pathname;") 1)]
        (clojure.pprint/pprint (etaoin/js-execute driver "return document.getElementById('app').innerHTML;"))))))

(comment
  (go)
  (reset-all)
  (prerender "create")
  (etaoin/go driver "https://brundij-demo.netlify.app/")
  (etaoin/js-execute driver "brundij.utils.out_navigate(\":create\")")
  (etaoin/js-execute driver "return brundij.utils.ready_QMARK_();")
  (auto-reset))
