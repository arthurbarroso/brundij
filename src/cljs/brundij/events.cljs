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

(re-frame/reg-event-fx
  ::fetch-health-questions
  (fn [{:keys [db]} [_ health-id]]
    {:db (assoc db :loading true)
     :http-xhrio {:method :get
                  :uri (str "https://brundij-api-demo.herokuapp.com/v1/healths/" health-id)
                  :format (ajax/json-request-format)
                  :timeout 8000
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success [::fetch-health-questions-success]
                  :on-failure [::fetch-health-questions-failure]}}))

(re-frame/reg-event-fx
  ::fetch-health-questions-success
  (fn [{:keys [db]} [_ response]]
    (let [parsed-questions (map-indexed
                             (fn [index item]
                               {:content (:question/content item)
                                :index index
                                :uuid (:question/uuid item)
                                :rating 2
                                :trend "stable"})
                             (:health/question (first response)))]
      {:db (assoc db :loading false :pre-existing-questions (vec parsed-questions))
       ::navigate! [:answers]})))

(re-frame/reg-event-fx
  ::fetch-health-questions-failure
  (fn [data]
    (println {:kind "Failure" :response data})))
