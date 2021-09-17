(ns brundij.health-tests
  (:require [brundij.date :as date]
            [brundij.test-system :as ts]
            [brundij.uuids :as uuids]
            [clojure.test :refer [deftest testing is]]))

(def health-with-question
  {:health/uuid (uuids/generate-uuid)
   :health/created_at (date/get-inst)
   :health/question [{:question/uuid (uuids/generate-uuid)
                      :question/content "Test question"
                      :question/created_at (date/get-inst)}]})

(deftest ^:integration health-tests
  (testing "Creating health-checks"
    (let [{:keys [status _body]} (ts/endpoint-test :post "/v1/healths")]
      (is (= 201 status))))
  (testing "Listing a health's questions"
    (let [health-id (-> (ts/endpoint-test :post "/v1/healths") :body :health/uuid)
          {:keys [status]} (ts/endpoint-test
                             :get (str "/v1/healths/" health-id))]
      (is (= 200 status))))
  (testing "Listing a health's questions and answers"
    (let [health-id (-> (ts/endpoint-test :post "/v1/healths") :body :health/uuid)
          {:keys [status]} (ts/endpoint-test
                             :get (str "/v1/healths/" health-id "/answers"))]
      (is (= 200 status))))
  (testing "Creates a health check with questions"
    (let [{:keys [status _body]} (ts/endpoint-test :post "/v1/health-with-questions"
                                                   {:body health-with-question})]
      (is (= 201 status)))))
