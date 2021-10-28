(ns brundij.healths.create
  (:require [brundij.shared.components.button :refer [button]]
            [brundij.shared.components.link :refer [link]]
            [brundij.shared.layout :refer [layout]]
            [brundij.shared.events :as events]
            [brundij.shared.subs :as subs]
            [brundij.healths.events :as cevts]
            [re-frame.core :as re-frame]))

(defn create-check-view []
  (let [is-online? (re-frame/subscribe [::subs/is-online?])]
    [layout {}
     ^{:key "landing"}
     [:div {:class "page-container"}
      [:div
       "Create a new health check in two steps only! 🍀"
       [:p
        "Get started on running health checks by creating one. 
            It is as simple as clicking the button below. It is easy and fast!"]
       [button {:on-click #(re-frame/dispatch [::cevts/create-health])
                :text "Create"
                :disabled false}]
       (when (true? @is-online?)
         [:<>
          [:p
           "Want to download a health check's results instead? "
           [link
            {:on-click #(re-frame/dispatch [::events/navigate :export-results])
             :text "Click here!"
             :title "Navigate to export resutls page"}]]
          [:p
           "Want to list checks you have published instead? "
           [link
            {:on-click #(re-frame/dispatch [::events/navigate :list-checks])
             :text "Click here!"
             :title "Navigate to my health check list"}]]])]]]))
