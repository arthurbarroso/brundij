(ns brundij.landing.page
  (:require [brundij.shared.components.button :refer [button-outlined]]
            [brundij.shared.layout :refer [layout]]
            [brundij.landing.events :as events]
            [re-frame.core :as re-frame]))

(defn navigate-to-brundi-gh []
  (.open js/window "https://github.com/arthurbarroso/brundij"))

(defn landing-page []
  (fn []
    [layout {}
     ^{:key "landing"}
     [:div {:class "page-container"}
      [:h3 {:class "landing-title"}
       "brundij"]
      [:p {:class "sub-text"}
       "Squad health checks "
       "in just "
       [:span "three clicks!"]]
      [:div {:class "base-container"}
       [:p
        "Brundij is an open-source project for running squad health checks. 
        It is meant to be an open-source alternative for the current squad health 
        check tools you can find online. This also means Brundij is free and can be
        self hosted."]
       [:p {:class "points-title"} "Brundij is:"]
       [:div {:class "points"}
        [:ul
         [:li "🔍 Open-source"]
         [:li "💸 Free"]
         [:li "🏠 Easy to self host"]
         [:li "👀 Not coupled with tracking"]
         [:li "📵 Not coupled with ads"]]]
       [:div {:class "button-holder"}
        [button-outlined
         {:text "Learn more"
          :title "Navigate to Brundij's github page"
          :on-click #(navigate-to-brundi-gh)
          :extra-style-class "learn-button"}]
        [button-outlined
         {:text "Try it out"
          :on-click #(re-frame/dispatch [::events/create-health])
          :title "Give Brundij a try!"}]]]]]))
