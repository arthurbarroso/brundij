(ns brundij.answers.events
  (:require [brundij.shared.events :as events]
            [re-frame.core :as re-frame]))


(re-frame/reg-event-fx
  ::initialize-db
  [(re-frame/inject-cofx ::events/cookies "questions")]
  (fn [{:keys [cookies]}]
    {:db {:pre-existing-questions cookies}}))  

(re-frame/reg-event-db
 ::update-question-rating-at-index
 (fn [db [_ {:keys [index rating]}]]
   (let [current-questions (:pre-existing-questions db)
         question-to-update (nth current-questions index)]
     (assoc
      db
      :pre-existing-questions
      (assoc
       current-questions
       index
       (assoc question-to-update :rating rating))))))

(re-frame/reg-event-db
 ::update-question-trend-at-index
 (fn [db [_ {:keys [index trend]}]]
   (let [current-questions (:pre-existing-questions db)
         question-to-update (nth current-questions index)]
     (assoc
      db
      :pre-existing-questions
      (assoc
       current-questions
       index
       (assoc question-to-update :trend trend))))))

(re-frame/reg-event-db
 ::increment-current-question-index
 (fn [db [_ _]]
   (let [current-question-index (:current-question-index db)]
     (assoc db :current-question-index (inc current-question-index)))))

(re-frame/reg-event-db
 ::decrement-current-question-index
 (fn [db [_ _]]
   (let [current-question-index (:current-question-index db)]
     (assoc db :current-question-index (dec current-question-index)))))

(re-frame/reg-event-fx
 ::create-answers
 (fn [{:keys [db]} [_ answers]]
   {:db (assoc db :loading true)
    :http-cljs {:method :post
                :uri "http://localhost:4000/v1/answers/bulk"
                :timeout 8000
                :params {:answers answers}
                :on-success [::answer-creation-success]
                :on-failure [::answer-creation-failure]}}))

(re-frame/reg-event-fx
 ::answer-creation-success
 (fn [{:keys [db]} [_ _response]]
   {:db (assoc db :loading false)
    ::events/navigate! [:answers-success]}))

(re-frame/reg-event-fx
 ::answer-creation-failure
 (fn [_]
   {::events/show-failure-toast {:toast-content "Failure creating answers. Please try again later."}}))
