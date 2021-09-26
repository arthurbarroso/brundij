(ns brundij.pre-render
  (:require [brundij.html.routes :refer [server-routes]]
            [clojure.edn :as edn]
            [clojure.java.io :as io]
            [clojure.string :as string]
            [etaoin.api :as etaoin]
            [muuntaja.core :as m]
            [taoensso.timbre :as timbre :refer [info]]))

(defn check-spa-status [driver]
  (etaoin/with-wait 1
    (if (etaoin/js-execute driver "return brundij.utils.ready_QMARK_();")
      true
      (recur driver))))

(defn render-page [driver url template {:keys [route html-name]}]
  (etaoin/go driver url)
  (etaoin/js-execute driver
                     (str "brundij.utils.out_navigate(\"" (keyword route) "\");"))
  (when (check-spa-status driver)
    (let [m (m/create)
          body (etaoin/js-execute driver "return document.getElementById('app').innerHTML;")
          head (etaoin/js-execute driver "return document.querySelector('head').innerHTML;")
          app-db (->> (etaoin/js-execute driver "return brundij.utils.export_db();")
                      (clojure.edn/read-string)
                      (m/encode m "application/json")
                      (slurp))
          app-db-string (str "<script>window.__rendered_db=" app-db "</script>")]
      (info (str "\n[Brundij]: Pre-rendering route " (keyword route)))
      (spit (str "pre-render/resources/" html-name)
            (-> template
                (string/replace "{{head}}" head)
                (string/replace "{{body}}" body)
                (string/replace "{{pre-rendered-db}}" app-db-string))))))

(defn render-pages! [config]
  (let [driver (:driver config)
        url (:url config)
        template (:template config)]
    (info "\n[Brundij]: Pre-rendering pages, please wait!")
    (dorun
      (map
        #(render-page
           driver
           url
           template
           %)
        server-routes))))

(comment
  (let [template (slurp (io/resource "template.html"))
        driver (etaoin/chrome)
        url "https://brundij-demo.netlify.app/"]
    (render-page driver url template (nth server-routes 7))))

(defn -main [& _args]
  (let [config {:driver (etaoin/chrome-headless)
                :url "https://brundij-demo.netlify.app/"
                :template (slurp (io/resource "template.html"))}]
    (render-pages! config)
    (info "\n[Brundij]: Pre-rendered routes")))
