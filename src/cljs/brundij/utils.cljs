(ns brundij.utils
  (:require [clojure.string :refer [replace includes?]]))

(defn dissoc-local-health-db-ids [health]
  (-> health
      (dissoc :db/id)
      (assoc :health/question
               (->> (:health/question health)
                    (map #(dissoc % :db/id))))))

(defn mount-shareable-link [health-id]
  (let [local-url (.-href js/window.location)]
    (if (includes? local-url "/success")
      (-> local-url
          (replace "/success" (str "?id=" health-id)))
      (str local-url "?id=" health-id))))
