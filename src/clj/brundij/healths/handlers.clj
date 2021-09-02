(ns brundij.healths.handlers
  (:require [brundij.healths.db :as db]
            [ring.util.response :as rr]))

(defn create-health! [database]
  (fn [_request]
    (let [health (db/create-health! database)]
      (rr/created "" health))))
