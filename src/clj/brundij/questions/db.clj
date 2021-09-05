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

(defn bulk-create-questions! [db health-id questions]
  (let [to-add (map-indexed
                 (fn [index question]
                   {:question/uuid (uuids/generate-uuid)
                    :question/created_at (date/get-inst)
                    :question/content (:content question)
                    :db/id (+ index 1)})
                 questions)
        temporary-ids (map #(+ 1 %) (range (count questions)))
        transaction (conj to-add {:db/id [:health/uuid health-id]
                                  :health/question temporary-ids})]
    (d/transact db transaction)
    (d/pull @db '[* {:health/question [:question/content :question/uuid]}]
            [:health/uuid health-id])))
