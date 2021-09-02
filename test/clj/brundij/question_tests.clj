(ns brundij.question-tests
  (:require [brundij.test-system :as ts]
            [clojure.test :refer [deftest testing is]]))

(deftest ^:integration question-tests
  (testing "Creating a question"
    (let [health-id (-> (ts/endpoint-test :post "/v1/healths") :body :health/uuid)
          {:keys [status]} (ts/endpoint-test :post "/v1/questions" {:body {:content "Test question" :health-id health-id}})]
      (is (= 201 status)))))
