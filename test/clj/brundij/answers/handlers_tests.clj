(ns brundij.answers.handlers-tests
  (:require [brundij.answers.handlers :as handlers]
            [brundij.healths.db :as healths-database]
            [brundij.questions.db :as questions-database]
            [brundij.test-system :as ts]
            [clojure.test :refer [deftest testing is]]))

;; prepare-answers
;; answer-questions-cookie-handler
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

(deftest ^:integration answer-handler-creation-tests
  (testing "Creating an answer"
    (let [health-id (-> (create-health (ts/database-atom)) :health/uuid str)
          question-id (-> (create-question (ts/database-atom) health-id)
                          :question/uuid
                          str)
          {:keys [status]} ((handlers/create-answer! (ts/database-atom))
                            {:parameters {:body {:rating 1
                                                 :trend "up"
                                                 :question-id question-id}}})]
      (is (= 201 status))))
  (testing "Creating bulk answers"
    (let [health-id (-> (create-health (ts/database-atom)) :health/uuid str)
          question-id (-> (create-question (ts/database-atom) health-id)
                          :question/uuid
                          str)
          {:keys [status]} ((handlers/bulk-create-answers! (ts/database-atom))
                            {:parameters {:body {:answers [{:rating 1
                                                            :trend "up"
                                                            :question-id question-id}]}}})]
      (is (= 201 status)))))

(deftest ^:integration answer-handler-list-tests
  (testing "Gets a health's questions and answers and puts it to a cookie"
    (let [health-id (-> (create-health (ts/database-atom)) :health/uuid str)
          _ (-> (create-question (ts/database-atom) health-id)
                :question/uuid
                str)
          result (handlers/answer-questions-cookie-handler
                  {:database (ts/database-atom)}
                  {:parameters {:path {:health-id health-id}}})]
      (is (= "questions" (:cookie-key result))))))
