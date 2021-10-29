(ns brundij.healths.integration-tests
  (:require [brundij.date :as date]
            [brundij.healths.test-helpers :as th]
            [brundij.test-system :as ts]
            [brundij.uuids :as uuids]
            [clojure.test :refer [deftest testing is]]))

(def health-with-question
  {:health/uuid (uuids/generate-uuid)
   :health/created_at (date/get-inst)
   :health/question [{:question/uuid (uuids/generate-uuid)
                      :question/content "Test question"
                      :question/created_at (date/get-inst)}]})

(comment
  (println health-with-question))

(deftest ^:integration health-tests
  (testing "Creating health-checks"
    (let [{:keys [status body]} (ts/endpoint-test :post "/v1/healths")]
      (is (= 201 status))
      (is (true? (th/match-health-creation-response body)))))
  (testing "Listing a health's questions"
    (let [health-id (-> (ts/endpoint-test :post "/v1/healths") :body :health/uuid)
          {:keys [status body]} (ts/endpoint-test
                                 :get (str "/v1/healths/" health-id))]
      (is (= 200 status))
      (is (true? (th/match-health-list-response body)))))
  (testing "Listing a health's questions and answers"
    (let [health-id (-> (ts/endpoint-test :post "/v1/healths") :body :health/uuid)
          {:keys [status body]} (ts/endpoint-test
                                 :get (str "/v1/healths/" health-id "/answers"))]
      (is (= 200 status))
      (is (true? (th/match-health-list-response body)))))
  (testing "Creates a health check with questions"
    (let [{:keys [status body]} (ts/endpoint-test :post "/v1/health-with-questions"
                                                  {:body health-with-question})]
      (is (= 201 status))
      (is (true? (th/match-health-and-question-list-response body))))))
