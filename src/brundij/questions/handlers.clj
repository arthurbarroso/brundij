(ns brundij.questions.handlers
  (:require [brundij.questions.db :as db]
            [brundij.uuids :as uuids]
            [ring.util.response :as rr]
            [clojure.walk :as walk]))

(defn create-question! [database]
  (fn [request]
    (let [question-params (-> request :parameters :body)
          question-tx (db/create-question! database question-params)
          question (->> question-tx
                        :tempids
                        (first)
                        (second)
                        (db/pull-entity database))]
      (rr/created "" question))))

(defn bulk-create-questions! [database]
  (fn [request]
    (let [questions (-> request :parameters :body :questions)
          health-id (-> request :parameters :path :health-id)]
      (rr/created "" (db/create-questions!
                      database
                      (uuids/uuid-from-string health-id) questions)))))

(defn bulk-create-questions-using-cookie! [database]
  (fn [request]
    (let [questions (-> request :parameters :body :questions)
          health-id (-> request :cookies (walk/keywordize-keys) :health-id :value)]
      (rr/created "" (db/create-questions!
                      database
                      (uuids/uuid-from-string health-id) questions)))))
