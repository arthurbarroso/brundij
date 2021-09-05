(ns brundij.healths.routes
  (:require [brundij.healths.handlers :as handlers]))

(defn routes [environment]
  (let [database (:database environment)]
    ["/healths"
     [""
      {:post {:handler (handlers/create-health! database)}}]
     ["/:health-id"
      {:get {:handler (handlers/get-health-questions database)}}]]))
