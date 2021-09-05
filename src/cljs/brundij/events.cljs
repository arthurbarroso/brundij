(ns brundij.events
  (:require [ajax.core :as ajax]
            [brundij.db :as db]
            [day8.re-frame.http-fx]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [re-frame.core :as re-frame]
            [reitit.frontend.controllers :refer [apply-controllers]]
            [reitit.frontend.easy :refer [push-state]]))

(re-frame/reg-event-db
  ::initialize-db
  #_{:clj-kondo/ignore [:unresolved-symbol]}
  (fn-traced [_ _]
             db/default-db))

;; Reitit events and effects
(re-frame/reg-event-fx
  ::navigate
  (fn [_ [_ route params query]]
    {::navigate! [route params query]}))

(re-frame/reg-fx
  ::navigate!
  (fn [[route params query]]
    (push-state route params query)))

(re-frame/reg-event-db
  ::navigated
  (fn [db [_ new-match]]
    (let [old-match (:current-route db)
          controllers (apply-controllers (:controllers old-match) new-match)]
      (assoc db :current-route (assoc new-match :controllers controllers)))))

;; Http
(re-frame/reg-event-fx
  ::create-health
  (fn [{:keys [db]} [_ _data]]
    {:db (assoc db :loading true)
     :http-xhrio {:method :post
                  :uri "http://localhost:4000/v1/healths"
                  :format (ajax/json-request-format)
                  :timeout 8000
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success [::health-creation-success]
                  :on-failure [::health-creation-failure]}}))

(re-frame/reg-event-fx
  ::health-creation-success
  (fn [{:keys [db]} [_ response]]
    {:db (assoc db
           :loading false
           :health-uuid (:health/uuid response))
     ::navigate! [:questions]}))

(re-frame/reg-event-fx
  ::health-creation-failure
  (fn [_]
    (println "Request failed")))

(re-frame/reg-event-fx
  ::create-questions
  (fn [{:keys [db]} [_ health-id questions]]
    {:db (assoc db :loading true)
     :http-xhrio {:method :post
                  :uri (str "http://localhost:4000/v1/questions/bulk/" health-id)
                  :format (ajax/json-request-format)
                  :timeout 8000
                  :params {:questions questions}
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success [::question-creation-success]
                  :on-failure [::question-creation-failure]}}))

(re-frame/reg-event-fx
  ::question-creation-success
  (fn [_ [_ _]]
    {::navigate! [:success]}))

(re-frame/reg-event-fx
  ::question-creation-failure
  (fn [data]
    (println {:kind "Failure" :response data})))

;; questions page
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
