(ns brundij.pre-render
  (:require [clojure.core.async :refer [go-loop >! <! chan timeout] :as core.async]
            [clojure.core.async.impl.protocols :refer [closed?]]
            [clojure.edn :as edn]
            [clojure.string :as string]
            [etaoin.api :as etaoin]
            [muuntaja.core :as m]))

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

(defn prerender [driver spa-url {:keys [route html-name]}]
  (etaoin/go driver spa-url)
  (etaoin/js-execute driver
                     (str "brundij.utils.out_navigate(\"" (keyword route) "\");"))
  (core.async/go
    (when (<! (wait-for-frontend driver))
      (let [m (m/create)
            body (etaoin/js-execute driver "return document.getElementById('app').innerHTML;")
            head (etaoin/js-execute driver "return document.querySelector('head').innerHTML;")
            app-db (->> (etaoin/js-execute driver "return brundij.utils.export_db();")
                        (edn/read-string)
                        (m/encode m "application/json")
                        (slurp))
            template (slurp "pre-render/template.html")
            app-db-string (str "<script>window.__rendered_db=" app-db "</script>")]
        (spit (str "pre-render/resources/" html-name)
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

(defn render-pages! [config]
  (dorun
    (map
      #(prerender
         (:driver config)
         (:url config)
         %) server-routes)))
