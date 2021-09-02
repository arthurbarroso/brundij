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
