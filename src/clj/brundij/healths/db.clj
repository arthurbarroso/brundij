(ns brundij.healths.db
  (:require [brundij.date :as date]
            [brundij.uuids :as uuids]
            [datahike.api :as d]))

(defn create-health! [db]
  (let [tx (d/transact db [{:health/uuid (uuids/generate-uuid)
                            :health/created_at (date/get-inst)
                            :db/id -1}])]
    (->> tx
         :tempids
         (first)
         (second)
         (d/pull @db '[*]))))

(defn get-health-questions [db health-id]
  (->>
    (d/q '[:find (pull ?e [* {:health/question [:question/uuid :question/content]}])
           :in $ ?health_id
           :where
           [?e :health/uuid ?health_id]]
         @db health-id)
    (map first)))
