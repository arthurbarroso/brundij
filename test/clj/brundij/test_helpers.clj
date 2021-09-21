(ns brundij.test-helpers
  (:require [clojure.core.match :refer [match]]))

(defn match-health-creation-response [body]
  (match body
         {:health/created_at _
          :health/uuid _
          :db/id _} true
         :else false))

(defn match-health-list-response [body]
  (match body
         [{:health/created_at _
           :health/uuid _
           :db/id _}] true
         :else false))

(defn match-health-and-question-list-response [body]
  (match body
         {:health/created_at _
          :health/uuid _
          :db/id _
          :health/question
            [{:question/created_at _
              :question/uuid _
              :db/id _
              :question/content _}]} true
         :else false))

(defn match-question-creation-response [body]
  (match body
         {:db/id _
          :question/content _
          :question/created_at _
          :question/uuid _} true
         :else false))

(defn match-question-bulk-creation-response [body]
  (match body
         {:health/created_at _
          :health/uuid _
          :db/id _
          :health/question [{:db/id _ :question/content _ :question/uuid _}
                            {:db/id _ :question/content _ :question/uuid _}]} true
         :else false))

(defn match-answer-creation-response [body]
  (match body
         {:answer/created_at _
          :answer/rating _
          :db/id _
          :answer/uuid _
          :answer/trend _} true
         :else false))

(defn match-answer-bulk-creation-response [body]
  (match body
         [[{:health/created_at _
            :db/id _
            :health/question [{:db/id _}]}]] true
         :else false))
