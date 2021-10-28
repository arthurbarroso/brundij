(ns brundij.questions.routes
  (:require [brundij.questions.handlers :as handlers]
            [brundij.questions.responses :as responses]))

(defn routes [environment]
  (let [database (:database environment)]
    ["/questions"
     [""
      {:post {:handler (handlers/create-question! database)
              :parameters {:body {:content string?
                                  :health-id string?}}
              :description "Adds a question to a health check"
              :responses {201 {:body responses/question-creation}}}}]
     ["/bulk"
      ["/:health-id"
       {:post {:handler (handlers/bulk-create-questions! database)
               :parameters {:body {:questions [{:content string?}]}
                            :path {:health-id string?}}
               :description "Adds multiple questions to a health check"
               :responses {201 {:body responses/bulk-question-creation}}}}]]]))
