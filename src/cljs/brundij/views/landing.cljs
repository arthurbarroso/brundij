(ns brundij.views.landing
  (:require [brundij.components.button :refer [button]]
            [brundij.components.template :refer [template]]
            [brundij.events :as events]
            [re-frame.core :as re-frame]
            [stylefy.core :as stylefy :refer [use-style]]))

(def cta-style {:font-size "4rem"
                :color "#574A4D"
                :font-weight 400
                :margin-bottom 0
                :max-width "75%"})

(def made-easy-style {:font-size "4.5rem"
                      :color "#161313"
                      :font-weight 700})

(def desc-style {:max-width "52%"})

(def button-custom-styles {:width "38%"
                           :background "#3ec762"
                           :margin-right "3%"
                           :height "58px"})

(defn navigate-to-brundi-gh []
  (.open js/window "https://github.com/arthurbarroso/brundij"))

(defn landing-page []
  [template
   [:div (use-style {:display "flex"
                     :flex-direction "column"
                     :align-items "center"})
    [:p (use-style cta-style)
     "Squad health checks "
     [:br]
     "in just "
     [:span (use-style made-easy-style) "three clicks!"]]
    [:p (use-style desc-style)
     "Brundij is an open-source project for running squad health checks. 
     It is meant to be an open-source alternative for the current squad health 
     check tools you can find online. This also means Brundij is free and can be
     self hosted."]
    [:div (use-style {:display "flex"
                      :width "100%"
                      :max-width "40%"
                      :align-items "center"
                      :justify-content "center"})
     [button {:text "Learn more" :extra-styles button-custom-styles
              :title "Navigate to Brundij's docs"
              :on-click #(navigate-to-brundi-gh)}]
     [button {:text "Try it out"
              :title "Give Brundij a try!"
              :on-click #(re-frame/dispatch [::events/navigate :create])
              :extra-styles (merge
                              button-custom-styles {:background "#fff"
                                                    :border "1px solid #3ec762"
                                                    :color "#161313"})}]]]])
