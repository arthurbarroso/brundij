(ns brundij.views.checks.subs
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
  ::health-id-input
  (fn [db]
    (:health-id-input db)))

(re-frame/reg-sub
  ::pre-existing-input?
  (fn [db]
    (:pre-existing-input? db)))
