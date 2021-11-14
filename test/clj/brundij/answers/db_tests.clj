(ns brundij.answers.db-tests
  (:require [brundij.answers.db :as database]
            [brundij.healths.db :as healths-database]
            [brundij.questions.db :as questions-database]
            [brundij.test-system :as ts]
            [clojure.test :refer [deftest testing is]]))

(defn create-health [db]
  (let [health-tx (healths-database/create-health! db)]
    (->> health-tx
        :tempids
        (first)
        (second)
        (healths-database/pull-entity db))))

(defn create-question [db health-id]
  (->> {:health-id (str health-id)
        :content "xis"}
       (questions-database/create-question! db)
       :tempids
       first
       second
       (questions-database/pull-entity db)
       :question/uuid))

(deftest ^:integration answers-database-creation-tests
  (testing "Creating answers"
    (let [health (:health/uuid (create-health (ts/database-atom)))
          question (create-question (ts/database-atom) health)
          answer (database/create-answer!
                  (ts/database-atom)
                  {:rating 1 :trend "up"
                   :question-id (str question)})]
      (is (not (nil? (:db-after answer))))
      (is (not (nil? (:tx-data answer))))
      (is (not (nil? (:tempids answer)))))))
