(ns brundij.answers.db
  (:require [brundij.date :as date]
            [brundij.uuids :as uuids]
            [datahike.api :as d]))

(defn create-answer! [db {:keys [rating trend question-id]}]
  (d/transact db [{:answer/uuid (uuids/generate-uuid)
                   :answer/rating rating
                   :answer/trend trend
                   :answer/created_at (date/get-inst)
                   :db/id -1}
                  {:db/id [:question/uuid (uuids/uuid-from-string question-id)]
                   :question/answer -1}]))

(defn extract-answer [db eid]
  (d/pull @db '[*] eid))

(defn extract-bulk-answers [db question-id]
  (d/q
   '[:find (pull ?e [*])
     :in $ ?question-id
     :where
     [?e :health/question ?q]
     [?q :question/uuid ?question-id]]
   @db (uuids/uuid-from-string question-id)))

(defn bulk-create-answers! [db answer-transactions]
  (d/transact db (flatten answer-transactions)))

(defn get-health-questions [db health-id]
  (d/q '[:find (pull ?e [* {:health/question [:question/uuid :question/content]}])
         :in $ ?health_id
         :where
         [?e :health/uuid ?health_id]]
       @db health-id))
