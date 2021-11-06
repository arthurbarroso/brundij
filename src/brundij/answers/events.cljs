(ns brundij.answers.events
  (:require [brundij.shared.events :as events]
            [brundij.shared.questions :refer [question-list-to-hash-map
                                              sort-questions]]
            [clojure.walk :as w]
            [re-frame.core :as re-frame]))

(re-frame/reg-event-fx
 ::initialize-db
 [(re-frame/inject-cofx ::events/cookies "questions")]
 (fn [{:keys [cookies db]}]
   {:db (assoc db :pre-existing-questions
               (-> cookies
                   js->clj
                   first
                   w/keywordize-keys
                   :health/question
                   sort-questions
                   question-list-to-hash-map))}))

(re-frame/reg-event-db
 ::update-question-data
 (fn [db [_ {:keys [index question]}]]
   (let [current-questions (:pre-existing-questions db)]
     (assoc
      db
      :pre-existing-questions
      (assoc
       current-questions
       index
       question)))))

(defn parse-questions-for-post [questions]
  (->> questions
       (map
        (fn [[_k v]]
          (let [answer (dissoc v :index :question/content)]
            (-> answer
                (assoc :question-id (:question/uuid answer))
                (assoc :rating (:option answer))
                (dissoc :option)
                (dissoc :question/uuid)))))))

(re-frame/reg-event-fx
 ::create-answers
 (fn [{:keys [db]} [_ answers]]
   (println {:answers (parse-questions-for-post answers)})
   {:db (assoc db :loading true)
    :http-cljs {:method :post
                :url "/v1/answers/bulk"
                :timeout 8000
                :params {:answers (parse-questions-for-post answers)}
                :on-success [::answer-creation-success]
                :on-failure [::answer-creation-failure]}}))

(re-frame/reg-event-fx
 ::answer-creation-success
 (fn [{:keys [db]} [_ _response]]
   {:db (assoc db :loading false)
    ::events/navigate! ["/answered"]}))

(re-frame/reg-event-fx
 ::answer-creation-failure
 (fn [_]
   {::events/navigate! ["/error"]}))
