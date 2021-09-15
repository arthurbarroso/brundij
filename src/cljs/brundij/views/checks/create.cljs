(ns brundij.views.checks.create
  (:require [brundij.components.button :refer [button]]
            [brundij.components.input :refer [input]]
            [brundij.components.template :refer [template]]
            [brundij.events :as events]
            [brundij.views.checks.events :as cevts]
            [brundij.views.checks.subs :as subs]
            [re-frame.core :as re-frame]
            [stylefy.core :as stylefy :refer [use-style]]))

(def custom-buttom-style {:height "60px"
                          :color "#333"
                          :max-width "75%"})

(defn create-check-view []
  (let [health-id-input (re-frame/subscribe [::subs/health-id-input])
        pre-existing-input? (re-frame/subscribe [::subs/pre-existing-input?])]
    [template
     [:h3 (use-style {:font-size "3rem" :margin 0}) "Create a new health check 🍀"]
     [:p (use-style {:max-width "75%"})
      "Get started on running health checks by creating one. 
       It is as simple as clicking the button below. It is easy and fast"]
     [button {:on-click #(re-frame/dispatch [::cevts/create-health])
              :text "Create"
              :disabled false
              :extra-styles custom-buttom-style}]
     [:p (use-style {:max-width "75%" :cursor "pointer"}
                    {:on-click #(re-frame/dispatch [::cevts/toggle-pre-existing-input?])})
      "Want to answer a pre-existing health check instead? Click here!"]
     (when @pre-existing-input?
       [:<>
        [input {:value @health-id-input
                :on-change #(re-frame/dispatch [::cevts/change-health-id-input %])
                :type "text"
                :placeholder "Your health check's id"
                :extra-styles {:max-width "75%"}}]
        [button {:on-click #(re-frame/dispatch [::cevts/fetch-health-questions @health-id-input])
                 :text "Answer existing health check"
                 :disabled false
                 :extra-styles {:margin-top "1%"
                                :max-width "75%"
                                :color "#333"}}]])
     [:p (use-style {:max-width "75%" :cursor "pointer"}
                    {:on-click #(re-frame/dispatch [::events/navigate :export-results])})
      "Download a health check's results"]]))
