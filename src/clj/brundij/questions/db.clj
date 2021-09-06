(ns brundij.questions.db
  (:require [brundij.date :as date]
            [brundij.uuids :as uuids]
            [datahike.api :as d]))

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

(defn create-questions! [db health-id questions]
  (let [question-ids (vec (for [_i (range (count questions))] (d/tempid -1)))
        question-transactions
          (map-indexed
            (fn [index item]
              [
               {:question/uuid (uuids/generate-uuid)
                :question/content (:content item)
                :question/created_at (java.util.Date.)
                :db/id (nth question-ids index)}
               {:db/id [:health/uuid health-id]
                :health/question (nth question-ids index)}])
            questions)]
    (d/transact db (flatten question-transactions))
    (d/pull @db '[* {:health/question [:question/uuid :db/id :question/content]}] [:health/uuid health-id])))
