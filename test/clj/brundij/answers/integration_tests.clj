(ns brundij.answers.integration-tests
  (:require [brundij.test-helpers :as th]
            [brundij.test-system :as ts]
            [clojure.test :refer [deftest testing is]]))

(deftest ^:integration answer-tests
  (testing "Creating an answer"
    (let [health-id (-> (ts/endpoint-test :post "/v1/healths") :body :health/uuid)
          question-id (->
                        (ts/endpoint-test :post "/v1/questions"
                                          {:body
                                             {:content "Test question" :health-id health-id}})
                        :body
                        :question/uuid)
          {:keys [status body]} (ts/endpoint-test :post "/v1/answers"
                                                  {:body
                                                     {:rating 5 :trend "up"
                                                      :question-id question-id}})]
      (is (= 201 status))
      (is (true? (th/match-answer-creation-response body)))))
  (testing "Creating bulk answers"
    (let [health-id (-> (ts/endpoint-test :post "/v1/healths") :body :health/uuid)
          question-id (->
                        (ts/endpoint-test :post "/v1/questions"
                                          {:body
                                             {:content "Test question" :health-id health-id}})
                        :body
                        :question/uuid)
          {:keys [status body]} (ts/endpoint-test :post "/v1/answers/bulk"
                                                  {:body
                                                     {:answers
                                                        [
                                                         {:rating 5
                                                          :trend "down"
                                                          :question-id question-id}]}})]
      (is (= 201 status))
      (is (true? (th/match-answer-bulk-creation-response body))))))
