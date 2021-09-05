(ns brundij.views.checks.create
  (:require [brundij.components.button :refer [button]]
            [brundij.components.template :refer [template]]
            [brundij.events :as events]
            [re-frame.core :as re-frame]
            [stylefy.core :as stylefy :refer [use-style]]))

(def custom-buttom-style {:height "60px"
                          :color "#333"
                          :max-width "75%"})

(defn create-check-view []
  [template
   [:h3 (use-style {:font-size "3rem" :margin 0}) "Create a new health check 🍀"]
   [:p (use-style {:max-width "75%"})
    "Get started on running health checks by creating one. 
     It is as simple as clicking the button below. It is easy and fast"]
   [button {:on-click #(re-frame/dispatch [::events/create-health])
            :text "Create"
            :disabled false
            :extra-styles custom-buttom-style}]])
