(ns brundij.views.questions.events
  (:require [ajax.core :as ajax]
            [brundij.events :as events]
            [re-frame.core :as re-frame]))

(defn remove-from-vec [vect uuid]
  (filter #(not (= uuid (:id %))) vect))

(re-frame/reg-event-db
  ::add-question
  (fn [db [_ question]]
    (let [current-questions (:questions db)]
      (assoc db :questions (conj current-questions question)))))

(re-frame/reg-event-db
  ::remove-question-by-uuid
  (fn [db [_ uuid]]
    (let [current-questions (:questions db)]
      (assoc db :questions (remove-from-vec current-questions uuid)))))

(re-frame/reg-event-db
  ::change-question-input
  (fn [db [_ new-input]]
    (assoc db :question-input new-input)))

(re-frame/reg-event-fx
  ::create-questions
  (fn [{:keys [db]} [_ health-id questions]]
    {:db (assoc db :loading true)
     :http-xhrio {:method :post
                  :uri (str "https://brundij-api-demo.herokuapp.com/v1/questions/bulk/" health-id)
                  :format (ajax/json-request-format)
                  :timeout 8000
                  :params {:questions questions}
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success [::question-creation-success]
                  :on-failure [::question-creation-failure]}}))

(re-frame/reg-event-fx
  ::question-creation-success
  (fn [{:keys [db]} [_ _]]
    {:db (assoc db :loading false)
     ::events/navigate! [:success]}))

(re-frame/reg-event-fx
  ::question-creation-failure
  (fn [data]
    (println {:kind "Failure" :response data})))
