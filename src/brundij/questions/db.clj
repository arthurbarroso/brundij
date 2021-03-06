(ns brundij.questions.db
  (:require [brundij.date :as date]
            [brundij.uuids :as uuids]
            [datahike.api :as d]))

(defn pull-entity [db eid]
  (d/pull @db '[*] eid))

(defn create-question! [db {:keys [content health-id]}]
  (d/transact db
              [{:question/uuid (uuids/generate-uuid)
                :question/content content
                :question/created_at (date/get-inst)
                :db/id -1}
               {:db/id [:health/uuid (uuids/uuid-from-string health-id)]
                :health/question -1}]))

(defn pull-all-questions [db health-id]
  (d/pull @db '[* {:health/question [:question/uuid :db/id :question/content]}] [:health/uuid health-id]))

(defn create-questions! [db question-transactions]
  (d/transact db question-transactions))
