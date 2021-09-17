(ns brundij.healths.handlers
  (:require [brundij.healths.db :as db]
            [brundij.uuids :as uuids]
            [ring.util.response :as rr]))

(defn create-health! [database]
  (fn [_request]
    (let [health (db/create-health! database)]
      (rr/created "" health))))

(defn get-health-questions [database]
  (fn [request]
    (let [health-id (-> request :parameters :path :health-id)]
      (rr/response (db/get-health-questions
                     database (uuids/uuid-from-string health-id))))))

(defn get-health-questions-and-answers [database]
  (fn [request]
    (let [health-id (-> request :parameters :path :health-id)]
      (rr/response (db/get-health-questions-and-answers
                     database (uuids/uuid-from-string health-id))))))

(defn create-health-with-questions! [database]
  (fn [request]
    (let [incoming-health (-> request :parameters :body :health)
          health (db/create-health-with-questions! database incoming-health)]
      (rr/created "" {:ok true}))))
