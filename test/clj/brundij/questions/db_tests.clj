(ns brundij.questions.db-tests
  (:require [brundij.date :as date]
            [brundij.questions.db :as database]
            [brundij.healths.db :as healths-database]
            [brundij.test-system :as ts]
            [brundij.uuids :as uuids]
            [clojure.test :refer [deftest testing is]]))

(defn create-health [db]
  (let [health-tx (healths-database/create-health! db)]
    (->> health-tx
        :tempids
        (first)
        (second)
        (healths-database/pull-entity db))))

(deftest ^:integration question-database-creation-tests
  (testing "Creating questions"
    (let [health (create-health (ts/database-atom))
          {:keys [db-after tx-data tempids]}
          (database/create-question!
            (ts/database-atom)
            {:health-id
             (str
               (:health/uuid health))
             :content "xis"})]
      (is (not (nil? db-after)))
      (is (not (nil? tx-data)))
      (is (not (nil? tempids))))))

(deftest ^:integration question-database-list-tests
  (testing "Pulling all of a health's questions"
    (let [health (create-health (ts/database-atom))
          uuid (-> health :health/uuid)
          _ (database/create-question!
              (ts/database-atom)
              {:health-id (str uuid)
               :content "xis"})
          response (database/pull-all-questions
                    (ts/database-atom)
                    uuid)]
      (is (not (nil? (:db/id response))))
      (is (not (nil? (:health/uuid response))))
      (is (= (:health/uuid response) uuid))
      (is (> (count (:health/question response)) 0)))))
