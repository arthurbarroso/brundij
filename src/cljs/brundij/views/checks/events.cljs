(ns brundij.views.checks.events
  (:require [ajax.core :as ajax]
            [brundij.config :as config]
            [brundij.date :as date]
            [brundij.events :as events]
            [brundij.uuids :as uuids]
            [re-frame.core :as re-frame]))

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

(re-frame/reg-event-db
  ::toggle-pre-existing-input?
  (fn [db [_ _]]
    (let [current-input-state (:pre-existing-input? db)]
      (assoc db :pre-existing-input? (not current-input-state)))))

(re-frame/reg-event-fx
  ::fetch-results
  (fn [{:keys [db]} [_ health-id]]
    {:db (assoc db :loading true)
     :http-xhrio {:method :get
                  :uri (str config/url "/v1/healths/" health-id "/answers")
                  :format (ajax/json-request-format)
                  :timeout 8000
                  :response-format (ajax/json-response-format {:keywords? true})
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
    {::events/show-failure-toast
       {:toast-content
          "Failure downloading your health check's results. Please try again later"}}))

(re-frame/reg-event-fx
  ::add-health-check-to-ds
  (fn [{:keys [db]} [_ _]]
    (let [uuid (uuids/generate-uuid)]
      {:db (assoc db :health-uuid uuid)
       ::events/transact! {:db/id -1
                           :health/uuid uuid
                           :health/created_at (date/get-inst)}
       ::events/navigate! [:questions]})))

(re-frame/reg-event-fx
  ::create-health
  (fn [{:keys [db]} [_ _data]]
    (if (true? (:is-online? db))
      {:db (assoc db :loading true)
       :http-xhrio {:method :post
                    :uri (str config/url "/v1/healths")
                    :format (ajax/json-request-format)
                    :timeout 8000
                    :response-format (ajax/json-response-format {:keywords? true})
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
     ::events/navigate! [:questions]}))

(re-frame/reg-event-fx
  ::health-creation-failure
  (fn [_]
    {::events/show-failure-toast
       {:toast-content
          "Failure creating your health check. Please try again later"}}))
