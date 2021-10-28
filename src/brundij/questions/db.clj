(ns brundij.questions.db
  (:require [brundij.common :as common]
            [brundij.date :as date]
            [brundij.uuids :as uuids]
            [datahike.api :as d]))

(defn create-question! [db {:keys [content health-id]}]
  (let [tx (d/transact db [{:question/uuid (uuids/generate-uuid)
                            :question/content content
                            :question/created_at (date/get-inst)
                            :db/id -1}
                           {:db/id [:health/uuid (uuids/uuid-from-string health-id)]
                            :health/question -1}])]
    (->> tx
         :tempids
         (first)
         (second)
         (d/pull @db '[*]))))

(defn create-questions! [db health-id questions]
  (let [question-transactions (common/mount-questions-txs health-id questions)]
    (d/transact db question-transactions)
    (d/pull @db '[* {:health/question [:question/uuid :db/id :question/content]}] [:health/uuid health-id])))
