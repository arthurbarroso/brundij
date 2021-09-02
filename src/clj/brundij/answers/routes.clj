(ns brundij.answers.routes
  (:require [brundij.answers.handlers :as handlers]))

(defn routes [environment]
  (let [database (:database environment)]
    ["/answers"
     [""
      {:post {:handler (handlers/create-answer! database)
              :parameters {:body {:rating integer?
                                  :question-id string?}}}}]]))
