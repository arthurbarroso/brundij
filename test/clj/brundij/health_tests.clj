(ns brundij.health-tests
  (:require [brundij.healths.db :as health-db]
            [brundij.test-system :as ts]
            [clojure.test :refer [deftest testing is]]
            [integrant.repl.state :as state]))

(deftest ^:integration health-tests
  (testing "Creating health-checks"
    (let [{:keys [status _body]} (ts/endpoint-test :post "/v1/healths")]
      (is (= 201 status))))
  (testing "Health check creation"
    (let [health (health-db/create-health! (-> state/system :db/postgres))]
      (is (integer? (:db/id health)))
      (is (inst? (:health/created_at health))))))
