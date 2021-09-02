(ns brundij.questions.handlers
  (:require [brundij.questions.db :as db]
            [ring.util.response :as rr]))

(defn create-question! [database]
  (fn [request]
    (let [question-params (-> request :parameters :body)
          question (db/create-question! database question-params)]
      (rr/created "" question))))
