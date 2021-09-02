(ns brundij.answers.handlers
  (:require [brundij.answers.db :as db]
            [ring.util.response :as rr]))

(defn create-answer! [database]
  (fn [request]
    (let [answer-params (-> request :parameters :body)]
      (rr/created "" (db/create-answer! database answer-params)))))
