(ns brundij.healths.handlers
  (:require [brundij.healths.db :as db]
            [brundij.uuids :as uuids]
            [ring.util.response :as rr]))

(defn create-health! [database]
  (fn [_request]
    (let [health-tx (db/create-health! database)
          health (->> health-tx
                      :tempids
                      (first)
                      (second)
                      (db/pull-entity database))]
      (rr/created "" health))))

(defn get-health-questions [database]
  (fn [request]
    (let [health-id (-> request :parameters :path :health-id)
          health-uuid (uuids/uuid-from-string health-id)
          healths (db/get-health-questions database health-uuid)]
      (rr/response (map first healths)))))

(defn get-health-questions-and-answers [database]
  (fn [request]
    (let [health-id (-> request :parameters :path :health-id)
          health-uuid (uuids/uuid-from-string health-id)
          healths (db/get-health-questions-and-answers database health-uuid)]
      (rr/response (map first healths)))))

(defn create-health-with-questions! [database]
  (fn [request]
    (let [incoming-health (-> request :parameters :body)
          health-uuid (:health/uuid incoming-health)]
      (db/create-health-with-questions! database incoming-health)
      (rr/created "" (db/deep-pull-health database health-uuid)))))
