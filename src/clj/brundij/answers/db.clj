(ns brundij.answers.db
  (:require [brundij.date :as date]
            [brundij.uuids :as uuids]
            [datahike.core :as d]))

(defn create-answer! [db {:keys [rating question-id]}]
  (let [tx (d/transact db [{:answer/uuid (uuids/generate-uuid)
                            :answer/rating rating
                            :answer/created_at (date/get-inst)
                            :db/id -1}
                           {:db/id [:question/uuid (uuids/uuid-from-string question-id)]
                            :question/answer -1}])]
    (->> @tx
         :tempids
         (first)
         (second)
         (d/pull @db '[*]))))
