(ns brundij.shared.error.page
  (:require [brundij.shared.components.button :refer [button-outlined]]
            [brundij.shared.layout :refer [layout]]
            [brundij.shared.events :as events]
            [re-frame.core :as re-frame]))

(defn error-view []
  (fn []
    [layout {}
     ^{:key "landing"}
     [:div {:class "page-container"}
      [:h3 {:class "landing-title"}
       "Oops! Looks like something went wrong on our end"]
      [:div {:class "base-container"}
       [:p
        "Please try again in a few minutes. We're sorry for the inconvenience"]
       [button-outlined
        {:text "Go back to Brundij's home page"
         :title "Navigate to Brundij's home page"
         :on-click #(re-frame/dispatch [::events/navigate "/"])
         :extra-style-class "button-mt-3-sized"}]]]]))
