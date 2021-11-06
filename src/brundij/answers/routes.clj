(ns brundij.answers.routes
  (:require [brundij.answers.handlers :as handlers]))

(defn routes [environment]
  (let [database (:database environment)]
    ["/answers"
     [""
      {:post {:handler (handlers/create-answer! database)
              :parameters {:body {:rating integer?
                                  :question-id string?
                                  :trend string?}}}}]
     ["/bulk"
      {:post {:handler (handlers/bulk-create-answers! database)
              :parameters {:body {:answers [{:rating integer?
                                             :question-id string?
                                             :trend string?}]}}}}]]))
