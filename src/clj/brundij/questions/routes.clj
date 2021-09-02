(ns brundij.questions.routes
  (:require [brundij.questions.handlers :as handlers]))

(defn routes [environment]
  (let [database (:database environment)]
    ["/questions"
     [""
      {:post {:handler (handlers/create-question! database)
              :parameters {:body {:content string?
                                  :health-id string?}}}}]]))
