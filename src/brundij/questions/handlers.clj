(ns brundij.questions.handlers
  (:require [brundij.questions.db :as db]
            [brundij.uuids :as uuids]
            [ring.util.response :as rr]
            [clojure.walk :as walk]
            [brundij.date :as date]
            [datahike.api :as d]))

(defn mount-question-item-tx [question health-id]
  [{:question/uuid (uuids/generate-uuid)
    :question/content (:content question)
    :question/created_at (date/get-inst)
    :db/id (:id question)}
   {:db/id [:health/uuid health-id]
    :health/question (:id question)}])

(defn mount-questions-txs [health-id questions]
  (let [question-ids (vec (for [_i (range (count questions))] (d/tempid -1)))]
    (->> questions
         (map-indexed
          (fn [index item]
            (let [question (merge item {:id (nth question-ids index)})]
              (mount-question-item-tx question health-id))))
         (flatten))))

(defn create-question! [database]
  (fn [request]
    (let [question-params (-> request :parameters :body)
          question-tx (db/create-question! database question-params)
          question (->> question-tx
                        :tempids
                        (first)
                        (second)
                        (db/pull-entity database))]
      (rr/created "" question))))

(defn bulk-create-questions! [database]
  (fn [request]
    (let [questions (-> request :parameters :body :questions)
          health-id (-> request :parameters
                        :path :health-id uuids/uuid-from-string)
          question-txs (mount-questions-txs health-id questions)]
      (db/create-questions!
       database
       question-txs)
      (rr/created "" (db/pull-all-questions database
                                            health-id)))))

(defn bulk-create-questions-using-cookie! [database]
  (fn [request]
    (let [questions (-> request :parameters :body :questions)
          health-id (-> request
                        :cookies (walk/keywordize-keys)
                        :health-id :value
                        uuids/uuid-from-string)
          question-txs (mount-questions-txs health-id questions)]
      (db/create-questions!
       database
       question-txs)
      (rr/created "" (db/pull-all-questions database
                                            health-id)))))
