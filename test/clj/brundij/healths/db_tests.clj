(ns brundij.healths.db-tests
  (:require [brundij.date :as date]
            [brundij.healths.db :as database]
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

(deftest ^:integration health-database-tests
  (testing "Creating health-checks"
    (let [{:keys [db-before db-after tx-data tempids]} (database/create-health! (ts/database-atom))]
      (is (not (nil? db-before)))
      (is (not (nil? db-after)))
      (is (not (nil? tx-data)))
      (is (not (nil? tempids)))))
  (testing "Creating health checks with questions"
    (let [{:keys [db-before db-after tx-data tempids]} (database/create-health-with-questions! (ts/database-atom) health-with-question)]
      (is (not (nil? db-before)))
      (is (not (nil? db-after)))
      (is (not (nil? tx-data)))
      (is (not (nil? tempids)))))
  (testing "Listing a health's questions"
    (database/create-health-with-questions! (ts/database-atom) health-with-question)
    (let [body (map first (database/get-health-questions (ts/database-atom) (:health/uuid health-with-question)))]
      (is (true? (th/match-db-health-and-question-list-response (first body)))))))
