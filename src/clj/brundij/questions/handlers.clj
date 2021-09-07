(ns brundij.questions.handlers
  (:require [brundij.questions.db :as db]
            [brundij.uuids :as uuids]
            [ring.util.response :as rr]))

(defn create-question! [database]
  (fn [request]
    (let [question-params (-> request :parameters :body)
          question (db/create-question! database question-params)]
      (rr/created "" question))))

(defn bulk-create-questions! [database]
  (fn [request]
    (let [questions (-> request :parameters :body :questions)
          health-id (-> request :parameters :path :health-id)]
      (rr/created "" (db/create-questions!
                       database
                       (uuids/uuid-from-string health-id) questions)))))
