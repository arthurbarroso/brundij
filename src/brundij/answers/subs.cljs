(ns brundij.answers.subs
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::pre-existing-questions
 (fn [db]
   (:pre-existing-questions db)))
