(ns brundij.questions.db
  (:require [brundij.date :as date]
            [brundij.uuids :as uuids]
            [datahike.core :as d]))

(defn create-question! [db {:keys [content health-id]}]
  (let [tx (d/transact db [{:question/uuid (uuids/generate-uuid)
                            :question/content content
                            :question/created_at (date/get-inst)
                            :db/id -1}
                           {:db/id [:health/uuid (uuids/uuid-from-string health-id)]
                            :health/question -1}])]
    (->> @tx
         :tempids
         (first)
         (second)
         (d/pull @db '[*]))))
