(ns brundij.views.answers.subs
  (:require [re-frame.core :as re-frame]))

(re-frame/reg-sub
  ::pre-existing-questions
  (fn [db]
    (:pre-existing-questions db)))

(re-frame/reg-sub
  ::current-question-index
  (fn [db]
    (:current-question-index db)))
