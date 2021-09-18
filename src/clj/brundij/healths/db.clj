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

(defn get-health-questions-and-answers [db health-id]
  (->>
    (d/q '[:find (pull ?e
                       [*
                        {:health/question
                           [:question/uuid
                            :db/id
                            :question/content
                            :question/created_at
                            {:question/answer [:answer/uuid
                                               :answer/created_at
                                               :answer/rating
                                               :db/id
                                               :answer/trend]}]}])
           :in $ ?health_id
           :where
           [?e :health/uuid ?health_id]]
         @db health-id)
    (map first)))

(defn create-health-with-questions! [db health-with-questions]
  (d/transact db [health-with-questions])
  (d/pull
    @db
    '[* {:health/question [:question/uuid
                           :question/created_at
                           :question/content
                           :db/id]}]
    [:health/uuid (:health/uuid health-with-questions)]))
