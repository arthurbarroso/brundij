(ns brundij.shared.events
  (:require [brundij.date :as date]
            [brundij.shared.ds :as ds]
            [re-frame.core :as re-frame]
            ["react-toastify" :refer (toast)]))

(re-frame/reg-fx
 ::aset
 (fn [args]
   (apply aset args)))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_]
   {}))

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
   (println route params query)))

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
                 :uri (str  "http://localhost:4000/v1/healths/" health-id)
                 :timeout 8000
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
                   :uri (str  "http://localhost:4000/v1/health-with-questions")
                   ; :params (utils/dissoc-local-health-db-ids data)
                   :timeout 8000
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
        published and ready to be answered by navigating to ")}})); (utils/mount-shareable-link health-uuid))}}))

(re-frame/reg-event-fx
 ::local-health-publish-failure
 (fn [_]
   {::show-failure-toast
    {:toast-content
     "Failure creating your health check. Please try again later"}}))
