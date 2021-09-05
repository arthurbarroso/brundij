(ns brundij.questions.routes
  (:require [brundij.questions.handlers :as handlers]))

(defn routes [environment]
  (let [database (:database environment)]
    ["/questions"
     [""
      {:post {:handler (handlers/create-question! database)
              :parameters {:body {:content string?
                                  :health-id string?}}}}]
     ["/bulk"
      ["/:health-id"
       {:post {:handler (handlers/bulk-create-questions! database)
               :parameters {:body {:questions [{:content string?}]}
                            :path {:health-id string?}}}}]]]))
