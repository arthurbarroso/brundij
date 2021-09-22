(ns brundij.utils
  (:require [clojure.string :refer [replace includes?]]
            [reitit.frontend.easy :refer [push-state]]))

(defn ^:export out-navigate [route]
  (push-state route nil nil))

(defn dissoc-local-health-db-ids [health]
  (-> health
      (dissoc :db/id)
      (assoc :health/question
               (->> (:health/question health)
                    (map #(dissoc % :db/id))))))

(defn mount-shareable-link [health-id]
  (let [local-url (.-href js/window.location)]
    (condp #(includes? %2 %1) local-url
      "/success" (replace local-url "/success" (str "?id=" health-id))
      "/list" (replace local-url "/list" (str "?id=" health-id))
      (str local-url "?id=" health-id))))
