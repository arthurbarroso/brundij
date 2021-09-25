(ns brundij.events
  (:require [ajax.core :as ajax]
            [brundij.config :as config]
            [brundij.date :as date]
            [brundij.db :as db]
            [brundij.ds :as ds]
            [brundij.utils :as utils]
            [cljs.reader :as reader]
            [day8.re-frame.http-fx]
            [re-frame.core :as re-frame]
            [reitit.frontend.controllers :refer [apply-controllers]]
            [reitit.frontend.easy :refer [push-state]]
            ["react-toastify" :refer (toast)]))

(re-frame/reg-fx
  ::aset
  (fn [args]
    (apply aset args)))

(re-frame/reg-event-fx
  ::initialize-db
  (fn [{:keys [_]} _]
    (let [rendered (.-rendereddb js/window)]
      (if (not (nil? rendered))
        {:db (js->clj rendered)
         ::aset [js/window "__rendered_db" nil]}
        {:db db/default-db}))))

;; ds
(re-frame/reg-fx
  ::transact!
  (fn [data]
    (ds/transact! data)))

(re-frame/reg-fx
  ::retract-health-entity!
  (fn [uuid]
    (ds/retract-health-entity! uuid)))

(re-frame/reg-event-fx
  ::retract-health
  (fn [_ [_ uuid]]
    {::retract-health-entity! uuid}))

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

;; toasts
(re-frame/reg-fx
  ::show-toast
  (fn [{:keys [toast-content]}]
    (toast toast-content)))

(re-frame/reg-fx
  ::show-success-toast
  (fn [{:keys [toast-content]}]
    (.success toast toast-content)))

(re-frame/reg-fx
  ::show-failure-toast
  (fn [{:keys [toast-content]}]
    (.error toast toast-content)))

(re-frame/reg-fx
  ::show-warn-toast
  (fn [{:keys [toast-content]}]
    (.warn toast toast-content)))

;; online check
(re-frame/reg-event-fx
  ::set-is-online
  (fn [{:keys [db]} [_ is-online?]]
    (if (true? is-online?)
      {:db (assoc db :is-online? is-online?)}
      {:db (assoc db :is-online? is-online?)
       ::show-warn-toast {:toast-content "Looks like you're offline. 
                                         All operations will be made 
                                         locally and sent to the server 
                                         whenever you get online again."}})))

;; http
(re-frame/reg-event-fx
  ::fetch-health-questions
  (fn [{:keys [db]} [_ health-id]]
    {:db (assoc db :loading true)
     :http-xhrio {:method :get
                  :uri (str config/url "/v1/healths/" health-id)
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
  (fn [_]
    {::show-failure-toast {:toast-content "Failure fetching your health check's questions"}}))

(re-frame/reg-event-fx
  ::publish-local-health
  (fn [{:keys [db]} [_ data]]
    (let [health-uuid (:health/uuid data)]
      {:db (assoc db :loading true)
       :http-xhrio {:method :post
                    :uri (str config/url "/v1/health-with-questions")
                    :format (ajax/transit-request-format)
                    :params (utils/dissoc-local-health-db-ids data)
                    :timeout 8000
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success [::local-health-publish-success :health-uuid health-uuid]
                    :on-failure [::local-health-failure]}})))

(re-frame/reg-event-fx
  ::local-health-publish-success
  (fn [{:keys [db]} [_ _res health-uuid]]
    {:db (assoc db
           :loading false)
     ::retract-health-entity! health-uuid
     ::transact! {:published/uuid health-uuid
                  :published/created_at (date/get-inst)}
     ::show-success-toast
       {:toast-content
          (str "Health check with UUID " health-uuid " successfully 
        published and ready to be answered by navigating to " (utils/mount-shareable-link health-uuid))}}))

(re-frame/reg-event-fx
  ::local-health-publish-failure
  (fn [_]
    {::show-failure-toast
       {:toast-content
          "Failure creating your health check. Please try again later"}}))

(defn ^:export go-to [route]
  (re-frame/dispatch [::navigate (reader/read-string route)]))
