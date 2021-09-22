(ns brundij.questions.integration-tests
  (:require [brundij.test-helpers :as th]
            [brundij.test-system :as ts]
            [clojure.test :refer [deftest testing is]]))

(deftest ^:integration question-tests
  (testing "Creating a question"
    (let [health-id (-> (ts/endpoint-test :post "/v1/healths") :body :health/uuid)
          {:keys [status body]} (ts/endpoint-test :post "/v1/questions" {:body {:content "Test question" :health-id health-id}})]
      (is (= 201 status))
      (is (true? (th/match-question-creation-response body)))))
  (testing "Creating bulk questions"
    (let [health-id (-> (ts/endpoint-test :post "/v1/healths") :body :health/uuid)
          {:keys [status body]} (ts/endpoint-test
                                  :post (str "/v1/questions/bulk/" health-id)
                                  {:body {:questions [{:content "Test question"}
                                                      {:content "much tests"}]}})]
      (is (= 201 status))
      (is (true? (th/match-question-bulk-creation-response body))))))
