(ns brundij.answers.db
  (:require [brundij.date :as date]
            [brundij.uuids :as uuids]
            [datahike.api :as d]))

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

(defn bulk-create-answers! [db answers]
  (let [answer-ids (vec (for [_i (range (count answers))] (d/tempid -1)))
        answer-transactions
          (map-indexed
            (fn [index item]
              [
               {:question/uuid (uuids/generate-uuid)
                :question/content (:content item)
                :question/created_at (java.util.Date.)
                :db/id (nth answer-ids index)}
               {:db/id [:question/uuid (:question-id item)]
                :health/question (nth answer-ids index)}])
            answers)
        health (d/q '[:find (pull ?e [*])
                      :in $ ?question-id
                      :where [?e :health/question ?q]
                      [?q :question/uuid ?question-id]]
                    @db (:question-id (first answers)))]
    (d/transact db (flatten answer-transactions))
    health))
