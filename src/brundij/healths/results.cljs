(ns brundij.healths.results
  (:require [re-frame.core :as re-frame]
            [brundij.shared.layout :refer [layout]]
            [brundij.shared.components.button :refer [button]]
            [brundij.shared.components.input :refer [input]]
            [brundij.healths.events :as events]
            [brundij.healths.subs :as subs]))

(defn results-view []
  (let [health-id-input (re-frame/subscribe [::subs/health-id-input])]
    [layout {}
     ^{:key "results"}
     [:div {:class "page-container"}
      [:h3 {:class "page-title"}
       "Download health check results 🧶"]
      [:div {:class "base-container health-results"}
       [:p
        "Type in your health check's id and press the button to download it's results"]
       [input {:value @health-id-input
               :on-change #(re-frame/dispatch [::events/change-health-id-input %])
               :type "text"
               :placeholder "Your health check's id"
               :extra-styles {:width "100%"}}]
       [button {:on-click #(re-frame/dispatch [::events/fetch-results @health-id-input])
                :text "Download health check's results"
                :disabled false
                :title "Download results"
                :extra-styles {:margin-top "1%"
                               :color "#333"
                               :width "100%"}}]]]]))
