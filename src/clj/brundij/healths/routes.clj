(ns brundij.healths.routes
  (:require [brundij.healths.handlers :as handlers]))

(defn routes [environment]
  (let [database (:database environment)]
    [
     ["/healths"
      [""
       {:post {:handler (handlers/create-health! database)}}]
      ["/:health-id"
       [""
        {:get {:handler (handlers/get-health-questions database)
               :parameters {:path {:health-id string?}}}}]
       ["/answers"
        {:get {:handler (handlers/get-health-questions-and-answers database)
               :parameters {:path {:health-id string?}}}}]]]
     ["/health-with-questions"
      [""
       {:post {:handler (handlers/create-health-with-questions! database)
               :parameters {:body {:health/uuid uuid?
                                   :health/created_at inst?
                                   :health/question [{:question/uuid uuid?
                                                      :question/content string?
                                                      :question/created_at inst?}]}}}}]]]))
