(ns brundij.healths.events
  (:require [brundij.shared.events :as events]
            [re-frame.core :as re-frame]))

(re-frame/reg-event-fx
 ::create-health
 (fn [{:keys [db]} [_ _data]]
   {:db (assoc db :loading true)
    :http-cljs {:method :post
                :url (str  "http:://localhost:4000/v1/healths")
                :timeout 8000
                :on-success [::health-creation-success]
                :on-failure [::health-creation-failure]}
    ::events/navigate! [:questions]}))

(re-frame/reg-event-fx
 ::health-creation-success
 (fn [{:keys [db]} [_ response]]
   {:db (assoc db
               :loading false
               :health-uuid (:health/uuid response))}))

(re-frame/reg-event-fx
 ::health-creation-failure
 (fn [_]
   {::events/navigate! [:create]}))

(defn download-file!
  [data content-type file-name]
  (let [data-blob (js/Blob. #js [data] #js {:type content-type})
        link (js/document.createElement "a")]
    (set! (.-href link) (js/URL.createObjectURL data-blob))
    (.setAttribute link "download" file-name)
    (js/document.body.appendChild link)
    (.click link)
    (js/document.body.removeChild link)))

(re-frame/reg-fx
 ::download!
 (fn [response]
   (download-file!
    (.stringify js/JSON (clj->js response))
    "application/json" "results.json")
   {}))

(re-frame/reg-event-db
 ::change-health-id-input
 (fn [db [_ new-input]]
   (assoc db :health-id-input new-input)))

(re-frame/reg-event-fx
 ::fetch-results
 (fn [{:keys [db]} [_ health-id]]
   {:db (assoc db :loading true)
    :http-cljs {:method :get
                :url (str "/v1/healths/" health-id "/answers")
                :timeout 8000
                :on-success [::fetch-results-success]
                :on-failure [::fetch-results-failure]}}))

(re-frame/reg-event-fx
 ::fetch-results-success
 (fn [{:keys [db]} [_ response]]
   {:db (assoc db :loading false)
    ::download! response}))

(re-frame/reg-event-fx
 ::fetch-results-failure
 (fn [_]
   {}))
