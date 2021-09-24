(ns brundij.html.routes
  (:require [clojure.java.io :as io]))

(defn html-handler [route]
  (fn [_req]
    {:body (slurp (io/resource (str "resources/" route)))}))

(def server-routes
  [{:route "home" :html-name "index.html" :url ""}
   {:route "create" :html-name "create.html" :url "create"}
   {:route "questions" :html-name "questions.html" :url "questions"}
   {:route "success" :html-name "success.html" :url "success"}
   {:route "answers" :html-name "answers.html" :url "answers"}
   {:route "answers-success" :html-name "answers-success.html" :url "answers-success"}
   {:route "export-results" :html-name "results.html" :url "results"}
   {:route "list-checks" :html-name "list.html" :url "list"}])

(defn routes []
  ["/"
   (->> server-routes
        (map
          (fn [{:keys [url html-name]}]
            [url
             {:get (html-handler html-name)}])))])
