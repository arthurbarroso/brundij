(ns brundij.answers.handlers
  (:require [brundij.answers.db :as db]
            [ring.util.response :as rr]))

(defn create-answer! [database]
  (fn [request]
    (let [answer-params (-> request :parameters :body)]
      (rr/created "" (db/create-answer! database answer-params)))))

(defn bulk-create-answers! [database]
  (fn [request]
    (clojure.pprint/pprint "\n\n\n RODAND O OBULK")
    (let [answers (-> request :parameters :body :answers)]
      (rr/created "" (db/bulk-create-answers!
                       database
                       answers)))))
