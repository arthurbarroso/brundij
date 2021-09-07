(ns brundij.health-tests
  (:require [brundij.test-system :as ts]
            [clojure.test :refer [deftest testing is]]
            [integrant.repl.state :as state]))

(deftest ^:integration health-tests
  (testing "Creating health-checks"
    (let [{:keys [status _body]} (ts/endpoint-test :post "/v1/healths")]
      (is (= 201 status))))
  (testing "Listing a health's questions"
    (let [health-id (-> (ts/endpoint-test :post "/v1/healths") :body :health/uuid)
          {:keys [status]} (ts/endpoint-test
                             :get (str "/v1/healths/" health-id))]
      (is (= 200 status)))))
