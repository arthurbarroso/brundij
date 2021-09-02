(ns brundij.events
  (:require [brundij.db :as db]
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

(re-frame/reg-event-db
  ::toggle-sidebar
  (fn [db [_ _]]
    (let [current-sidebar-state (:sidebar-open? db)]
      (assoc db :sidebar-open? (not current-sidebar-state)))))

(re-frame/reg-event-db
  ::toggle-modal
  (fn [db [_ _]]
    (let [current-modal-state (:modal-open? db)]
      (assoc db :modal-open? (not current-modal-state)))))
