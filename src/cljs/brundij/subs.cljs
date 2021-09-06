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

(re-frame/reg-sub
  ::health-id-input
  (fn [db]
    (:health-id-input db)))

(re-frame/reg-sub
  ::pre-existing-input?
  (fn [db]
    (:pre-existing-input? db)))

(re-frame/reg-sub
  ::pre-existing-questions
  (fn [db]
    (:pre-existing-questions db)))

(re-frame/reg-sub
  ::current-question-index
  (fn [db]
    (:current-question-index db)))
