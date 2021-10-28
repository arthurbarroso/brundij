(ns brundij.landing.page
  (:require [brundij.shared.components.button :refer [button button-outlined]]
            [brundij.shared.components.link :refer [link-outlined]]
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
       "Brundij"]
      [:div {:class "base-container"}
       [:p
        "Squad health checks "
        "in just "
        [:span "three clicks!"]]
       [:p
        "Brundij is an open-source project for running squad health checks. 
        It is meant to be an open-source alternative for the current squad health 
        check tools you can find online. This also means Brundij is free and can be
        self hosted."]
       [:div {:class "button-holder"}
        [button-outlined
         {:text "Learn more"
          :title "Navigate to Brundij's docs"
          :on-click #(navigate-to-brundi-gh)
          :extra-style-class "button-mt-2-sized learn-button"}]
        [button-outlined
         {:text "Try it out"
          :extra-style-class "button-mt-2-sized"
          :on-click #(re-frame/dispatch [::events/create-health])
          :title "Give Brundij a try!"}]]]]]))
