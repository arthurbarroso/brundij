(ns brundij.views.answers.events
  (:require [ajax.core :as ajax]
            [brundij.events :as events]
            [day8.re-frame.http-fx]
            [re-frame.core :as re-frame]))

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
     :http-xhrio {:method :post
                  :uri "https://brundij-api-demo.herokuapp.com/v1/answers/bulk"
                  :format (ajax/json-request-format)
                  :timeout 8000
                  :params {:answers answers}
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success [::answer-creation-success]
                  :on-failure [::answer-creation-failure]}}))

(re-frame/reg-event-fx
  ::answer-creation-success
  (fn [{:keys [db]} [_ _response]]
    {:db (assoc db :loading false)
     ::events/navigate! [:answers-success]}))

(re-frame/reg-event-fx
  ::answer-creation-failure
  (fn [data]
    (println {:kind "Failure" :response data})))
