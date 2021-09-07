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
      (rr/response (db/get-health-questions database (uuids/uuid-from-string health-id))))))
