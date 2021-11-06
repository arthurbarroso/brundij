(ns brundij.landing.events
  (:require [brundij.shared.events :as events]
            [brundij.shared.utils :as utils]
            [re-frame.core :as re-frame]))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_]
   {:is-online? true}))

(re-frame/reg-fx
 ::set-health-cookie
 (fn [uuid]
   (utils/set-cookie! "health-id" uuid)))

(re-frame/reg-event-fx
 ::create-health
 (fn [{:keys [db]} [_ _data]]
   {:db (assoc db :loading true)
    :http-cljs {:method :post
                :url "http://localhost:4000/v1/healths"
                :timeout 8000
                :on-success [::health-creation-success]
                :on-failure [::health-creation-failure]}}))

(re-frame/reg-event-fx
 ::health-creation-success
 (fn [{:keys [db]} [_ response]]
   {:db (assoc db
               :loading false
               :health-uuid (:health/uuid response))
    ::set-health-cookie (-> response :body :health/uuid)
    ::events/navigate! ["/questions"]}))

(re-frame/reg-event-fx
 ::health-creation-failure
 (fn [_]
   {::events/navigate! [:create]}))
