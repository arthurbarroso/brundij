(ns brundij.healths.subs
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::health-id-input
 (fn [db]
   (:health-id-input db)))
