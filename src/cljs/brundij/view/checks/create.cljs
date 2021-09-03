(ns brundij.view.checks.create
  (:require [brundij.components.button :refer [button]]
            [brundij.events :as events]
            [brundij.styles :refer [font-family]]
            [re-frame.core :as re-frame]
            [stylefy.core :as stylefy :refer [use-style]]))

(def form-style {:background "#fff"
                 :display "flex"
                 :align-items "center"
                 :font-family font-family
                 :width "100%"
                 :height "100vh"})

(def custom-buttom-style {:height "60px"
                          :color "#333"
                          :max-width "75%"})

(def column-style {:width "50%"
                   :height "100%"})

(def left-column-style (merge column-style
                              {:background "#b8fca9"}))

(def right-column-style (merge column-style
                               {:padding "0% 2%"
                                :display "flex"
                                :flex-direction "column"
                                :justify-content "center"}))

(defn create-check-view []
  [:div (use-style form-style)
   [:div (use-style left-column-style)]
   [:form (use-style right-column-style)
    [:h3 (use-style {:font-size "3rem" :margin 0}) "Create a new health check 🍀"]
    [:p (use-style {:max-width "75%"}) "Get started on running health checks by creating one. It is as simple as clicking the button below. It is easy, fast and simple"]
    [button {:on-click #(re-frame/dispatch [::events/create-health])
             :text "Create"
             :disabled false
             :extra-styles custom-buttom-style}]]])
