(ns brundij.answers.handlers
  (:require [brundij.answers.db :as db]
            [ring.util.response :as rr]
            [brundij.uuids :as uuids]
            [muuntaja.core :as m]
            [brundij.shared.common :as common]
            [datahike.api :as d]))

(defn create-answer! [database]
  (fn [request]
    (let [answer-params (-> request :parameters :body)
          created-answer-tx (db/create-answer! database answer-params)
          created-answer (common/extract-tx-tempid created-answer-tx)
          answer (db/extract-answer database created-answer)]
      (rr/created "" answer))))

(defn prepare-answers [answers answer-ids]
  (map-indexed
   (fn [index item]
     [{:answer/uuid (uuids/generate-uuid)
       :answer/rating (:rating item)
       :answer/trend (:trend item)
       :answer/created_at (java.util.Date.)
       :db/id (nth answer-ids index)}]
     {:db/id [:question/uuid (uuids/uuid-from-string (:question-id item))]
      :question/answer (nth answer-ids index)})
   answers))

(defn bulk-create-answers! [database]
  (fn [request]
    (let [answers (-> request :parameters :body :answers)
          answer-ids (vec (for [_i (range (count answers))] (d/tempid -1)))
          question-id (:question-id (first answers))
          answer-transactions (prepare-answers answers answer-ids)]
      (db/bulk-create-answers! database answer-transactions)
      (rr/created "" (db/extract-bulk-answers database question-id)))))

(defn answer-questions-cookie-handler [env request]
  (let [database (:database env)
        health-id (uuids/uuid-from-string (-> request :parameters :path :health-id))
        questions (db/get-health-questions database health-id)
        encoded-questions (slurp (m/encode "application/json" (map first questions)))]
    {:cookie-key "questions"
     :cookie-value encoded-questions}))
