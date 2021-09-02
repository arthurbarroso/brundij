(ns brundij.health-tests
  (:require [brundij.test-system :as ts]
            [clojure.test :refer [deftest testing is]]))

(deftest ^:integration health-tests
  (testing "Listing health-checks"
    (let [{:keys [status _body]} (ts/endpoint-test :post "/v1/healths")]
      (is (= 201 status)))))
