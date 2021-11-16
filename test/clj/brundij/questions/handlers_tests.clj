(ns brundij.questions.handlers-tests
  (:require [brundij.questions.handlers :as handlers]
            [brundij.healths.db :as healths-database]
            [brundij.test-system :as ts]
            [clojure.test :refer [deftest testing is]]))

(defn create-health [db]
  (let [health-tx (healths-database/create-health! db)]
    (->> health-tx
        :tempids
        (first)
        (second)
        (healths-database/pull-entity db))))

(def questions-body
  [{:content "hi"}])


(deftest ^:integration question-handler-creation-tests
  (testing "Creating a question"
    (let [health-id (-> (create-health (ts/database-atom)) :health/uuid str)
          {:keys [status]} ((handlers/create-question! (ts/database-atom))
                            {:parameters {:body {:health-id health-id
                                                 :content "x"}}})]
      (is (= 201 status))))
  (testing "Creating bulk questions"
    (let [health-id (-> (create-health (ts/database-atom)) :health/uuid str)
          {:keys [status]} ((handlers/bulk-create-questions! (ts/database-atom))
                            {:parameters {:body {:questions questions-body}
                                          :path {:health-id health-id}}})]
      (is (= 201 status))))
  (testing "Creating bulk questions using cookie health-id"
    (let [health-id (-> (create-health (ts/database-atom)) :health/uuid str)
          {:keys [status]} ((handlers/bulk-create-questions-using-cookie!
                             (ts/database-atom))
                            {:parameters {:body {:questions questions-body}}
                             :cookies {:health-id {:value health-id}}})]
      (is (= 201 status)))))
