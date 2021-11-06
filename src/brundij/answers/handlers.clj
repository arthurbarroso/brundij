(ns brundij.answers.handlers
  (:require [brundij.answers.db :as db]
            [ring.util.response :as rr]
            [brundij.uuids :as uuids]
            [muuntaja.core :as m]))

(defn create-answer! [database]
  (fn [request]
    (let [answer-params (-> request :parameters :body)]
      (rr/created "" (db/create-answer! database answer-params)))))

(defn bulk-create-answers! [database]
  (fn [request]
    (let [answers (-> request :parameters :body :answers)
          response (db/bulk-create-answers! database answers)]
      (rr/created "" response))))

(defn answer-questions-cookie-handler [env request]
  (let [database (:database env)
        health-id (uuids/uuid-from-string (-> request :parameters :path :health-id))
        questions (db/get-health-questions database health-id)
        encoded-questions (slurp (m/encode "application/json" (map first questions)))]
    {:cookie-key "questions"
     :cookie-value encoded-questions}))
