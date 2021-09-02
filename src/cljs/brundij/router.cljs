(ns brundij.router
  (:require [brundij.components.title :refer [title]]
            [brundij.events :as events]
            [brundij.subs :as subs]
            [re-frame.core :refer [dispatch subscribe]]
            [reitit.coercion.spec :as rss]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [stylefy.core :refer [use-style]]))

(def routes
  ["/"
   [""
    {:name :home
     :view title
     :link-text "Home"
     :requires-authentication? false}]])

(def router
  (rf/router routes {:data {:coercion rss/coercion}}))

(defn on-navigate [new-match]
  (when new-match
    (dispatch [::events/navigated new-match])))

(defn init-routes! []
  (rfe/start! router on-navigate {:use-fragment false}))

(def app-base-style {:background "#d6e3e6" :display "flex" :justify-content "center"})

(defn router-component []
  (let [current-route @(subscribe [::subs/current-route])]
    (when current-route
      [:div (use-style app-base-style)
       [(-> current-route :data :view)]])))
