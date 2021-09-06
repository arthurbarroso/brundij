(ns brundij.router
  (:require [brundij.events :as events]
            [brundij.subs :as subs]
            [brundij.views.answers.create :refer [create-answers]]
            [brundij.views.answers.success :refer [answers-success-view]]
            [brundij.views.checks.create :refer [create-check-view]]
            [brundij.views.questions.create :refer [create-questions-view]]
            [brundij.views.questions.success :refer [success-view]]
            [re-frame.core :refer [dispatch subscribe]]
            [reitit.coercion.spec :as rss]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [stylefy.core :refer [use-style]]))

(def routes
  ["/"
   [""
    {:name :home
     :view create-check-view
     :link-text "Home"}]
   ["questions"
    {:name :questions
     :view create-questions-view
     :link-text "Create question"}]
   ["success"
    {:name :success
     :view success-view
     :link-text "Success"}]
   ["answers"
    {:name :answers
     :view create-answers
     :link-text "Create answers"}]
   ["answers-success"
    {:name :answers-success
     :view answers-success-view
     :link-text "Answers success"}]])

(def router
  (rf/router routes {:data {:coercion rss/coercion}}))

(defn on-navigate [new-match]
  (when new-match
    (dispatch [::events/navigated new-match])))

(defn init-routes! []
  (rfe/start! router on-navigate {:use-fragment false}))

(def app-base-style {:background "#d6e3e6"
                     :display "flex"
                     :justify-content "center"
                     :align-items "center"
                     :height "100vh"})

(defn router-component []
  (let [current-route @(subscribe [::subs/current-route])]
    (when current-route
      [:div (use-style app-base-style)
       [(-> current-route :data :view)]])))
