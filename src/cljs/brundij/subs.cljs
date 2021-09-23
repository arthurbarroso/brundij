(ns brundij.subs
  (:require [brundij.ds :as ds]
            [re-frame.core :as re-frame]
            [reagent.ratom :as ratom]))

(re-frame/reg-sub
  ::current-route
  (fn [db]
    (:current-route db)))

(re-frame/reg-sub
  ::loading
  (fn [db]
    (:loading db)))

(re-frame/reg-sub
  ::is-online?
  (fn [db]
    (:is-online? db)))

;; raw subs for ds
(re-frame/reg-sub-raw
  ::get-local-health-checks
  (fn [_]
    (ratom/make-reaction ds/get-health-checks)))

(re-frame/reg-sub-raw
  ::get-local-published-health-checks
  (fn [_]
    (ratom/make-reaction ds/get-published-health-checks)))

(re-frame/reg-sub
  ::db
  (fn [db]
    (dissoc db :questions)))
