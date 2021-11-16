(ns brundij.healths.handlers-tests
  (:require [brundij.healths.handlers :as handlers]
            [brundij.healths.db :as healths-database]
            [brundij.questions.db :as questions-database]
            [brundij.answers.db :as answers-database]
            [brundij.test-system :as ts]
            [clojure.test :refer [deftest testing is]]
            [brundij.uuids :as uuids]
            [brundij.date :as date]))

(defn create-health [db]
  (let [health-tx (healths-database/create-health! db)]
    (->> health-tx
        :tempids
        (first)
        (second)
        (healths-database/pull-entity db))))

(defn create-question [db health-uuid]
  (let [question-tx (questions-database/create-question!
                     db
                     {:content "chiclete" :health-id health-uuid})]
    (->> question-tx
         :tempids
         (first)
         (second)
         (questions-database/pull-entity db))))

(defn create-answer [db question-uuid]
  (answers-database/create-answer!
   db
   {:rating 1
    :trend "up"
    :question-id question-uuid}))

(deftest ^:integration health-handler-creation-tests
  (testing "Creating a health check"
    (let [{:keys [status]} ((handlers/create-health! (ts/database-atom)) {})]
      (is (= 201 status))))
  (testing "Creating a health check with questions"
    (let [health {:health/uuid (uuids/generate-uuid)
                  :health/created_at (date/get-inst)
                  :health/question [{:question/uuid (uuids/generate-uuid)
                                     :question/content "hi"
                                     :question/created_at (date/get-inst)}]}
          {:keys [status]} ((handlers/create-health-with-questions! (ts/database-atom))
                            {:parameters {:body health}})]
      (is (= 201 status)))))

(deftest ^:integration health-handler-list-tests
  (testing "Retrieving a health check's questions"
    (let [health-id (-> (create-health (ts/database-atom)) :health/uuid str)
          _ (create-question (ts/database-atom) health-id)
          {:keys [status]} ((handlers/get-health-questions
                             (ts/database-atom))
                            {:parameters {:path {:health-id health-id}}})]
      (is (= 200 status))))
  (testing "Retrieving a health check's questions and answers"
    (let [health-id (-> (create-health (ts/database-atom)) :health/uuid str)
          question-id (-> (create-question (ts/database-atom) health-id)
                          :question/uuid str)
          _ (create-answer (ts/database-atom) question-id)
          {:keys [status]} ((handlers/get-health-questions-and-answers
                             (ts/database-atom))
                            {:parameters {:path {:health-id health-id}}})]
      (is (= 200 status)))))
