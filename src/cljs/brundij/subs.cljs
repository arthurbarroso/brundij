(ns brundij.subs
  (:require [re-frame.core :as re-frame]))

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
