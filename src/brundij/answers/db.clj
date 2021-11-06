(ns brundij.answers.db
  (:require [brundij.date :as date]
            [brundij.uuids :as uuids]
            [datahike.api :as d]))

(defn create-answer! [db {:keys [rating trend question-id]}]
  (let [tx (d/transact db [{:answer/uuid (uuids/generate-uuid)
                            :answer/rating rating
                            :answer/trend trend
                            :answer/created_at (date/get-inst)
                            :db/id -1}
                           {:db/id [:question/uuid (uuids/uuid-from-string question-id)]
                            :question/answer -1}])]
    (->> tx
         :tempids
         (first)
         (second)
         (d/pull @db '[*]))))

(defn bulk-create-answers! [db answers]
  (let [answer-ids (vec (for [_i (range (count answers))] (d/tempid -1)))
        answer-transactions
        (map-indexed
         (fn [index item]
           [{:answer/uuid (uuids/generate-uuid)
             :answer/rating (:rating item)
             :answer/trend (:trend item)
             :answer/created_at (java.util.Date.)
             :db/id (nth answer-ids index)}
            {:db/id [:question/uuid (uuids/uuid-from-string (:question-id item))]
             :question/answer (nth answer-ids index)}])
         answers)]
    (d/transact db (flatten answer-transactions))
    (d/q
     '[:find (pull ?e [*])
       :in $ ?question-id
       :where
       [?e :health/question ?q]
       [?q :question/uuid ?question-id]]
     @db (uuids/uuid-from-string (:question-id (first answers))))))

(defn get-health-questions [db health-id]
  (d/q '[:find (pull ?e [* {:health/question [:question/uuid :question/content]}])
         :in $ ?health_id
         :where
         [?e :health/uuid ?health_id]]
       @db health-id))
