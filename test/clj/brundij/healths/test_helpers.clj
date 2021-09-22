(ns brundij.healths.test-helpers
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

(defn match-db-health-and-question-list-response [body]
  (match body
         {:health/created_at _
          :health/uuid _
          :db/id _
          :health/question
            [{:question/uuid _
              :question/content _}]} true
         :else false))
