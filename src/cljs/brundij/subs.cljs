(ns brundij.subs
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
  ::name
  (fn [db]
    (:name db)))

(re-frame/reg-sub
  ::current-route
  (fn [db]
    (:current-route db)))

(re-frame/reg-sub
  ::loading
  (fn [db]
    (:loading db)))

(re-frame/reg-sub
  ::questions
  (fn [db]
    (:questions db)))

(re-frame/reg-sub
  ::question-input
  (fn [db]
    (:question-input db)))

(re-frame/reg-sub
  ::health-uuid
  (fn [db]
    (:health-uuid db)))
