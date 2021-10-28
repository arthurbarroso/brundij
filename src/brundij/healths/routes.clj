(ns brundij.healths.routes
  (:require [brundij.healths.handlers :as handlers]
            [brundij.healths.responses :as responses]
            [brundij.shared.mount :refer [mount-serve]]))

(defn routes [environment]
  (let [database (:database environment)]
    [""
     ["/create" (mount-serve environment "create.html")]
     ["/healths"
      [""
       {:post {:handler (handlers/create-health! database)
               :description "Creates a new health check"
               :responses {201 {:body responses/health-creation}}}}]
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
