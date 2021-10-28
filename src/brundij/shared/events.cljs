(ns brundij.shared.events
  (:require [brundij.date :as date]
            [brundij.shared.ds :as ds]
            [re-frame.core :as re-frame]
            [re-frame-cljs-http.http-fx]
            ["react-toastify" :refer (toast)]))

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
   (set! (.-location js/window) route)))

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
