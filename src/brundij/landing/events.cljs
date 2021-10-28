(ns brundij.landing.events
  (:require [brundij.date :as date]
            [brundij.shared.events :as events]
            [brundij.uuids :as uuids]
            [re-frame.core :as re-frame]))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_]
   {:is-online? true}))

(re-frame/reg-event-fx
 ::add-health-check-to-ds
 (fn [{:keys [db]} [_ _]]
   (let [uuid (uuids/generate-uuid)]
     {::events/transact! {:db/id -1
                          :health/uuid uuid
                          :health/created_at (date/get-inst)}
      ::events/navigate! ["questions"]
      :db (assoc db :health-uuid uuid :loading false)})))

(re-frame/reg-event-fx
 ::create-health
 (fn [{:keys [db]} [_ _data]]
   (if (true? (:is-online? db))
     {:db (assoc db :loading true)
      :http-cljs {:method :post
                  :url "http://localhost:4000/v1/healths"
                  :timeout 8000
                  :on-success [::health-creation-success]
                  :on-failure [::health-creation-failure]}}
     {:db (assoc db :loading true)
      :dispatch [::add-health-check-to-ds]})))

(re-frame/reg-event-fx
 ::health-creation-success
 (fn [{:keys [db]} [_ response]]
   {:db (assoc db
               :loading false
               :health-uuid (:health/uuid response))
    ::events/navigate! [(str "/questions?q=" (-> response :body :health/uuid))]}))

(re-frame/reg-event-fx
 ::health-creation-failure
 (fn [_]
   {::events/navigate! [:create]
    ::events/show-failure-toast
    {:toast-content
     "Failure creating your health check. Please try again later"}}))
