(ns brundij.views.checks.create
  (:require [brundij.components.button :refer [button]]
            [brundij.components.link :refer [link]]
            [brundij.components.table :refer [healths-table]]
            [brundij.components.template :refer [template]]
            [brundij.events :as events]
            [brundij.subs :as subs]
            [brundij.views.checks.events :as cevts]
            [re-frame.core :as re-frame]
            [stylefy.core :as stylefy :refer [use-style]]))

(def custom-buttom-style {:height "60px"
                          :color "#333"
                          :width "100%"})

(def link-p-style {:margin 0})

(defn create-check-view []
  (let [is-online? (re-frame/subscribe [::subs/is-online?])
        loading? (re-frame/subscribe [::subs/loading])
        local-health-checks (re-frame/subscribe [::subs/get-local-health-checks])]
    [template
     [:div (use-style {:margin-top "10%" :display "flex"})
      [:div (use-style {:max-width "50%"})
       [:h3 (use-style {:font-size "3rem" :margin 0})
        "Create a new health check in two steps only! 🍀"]
       [:p
        "Get started on running health checks by creating one. 
            It is as simple as clicking the button below. It is easy and fast!"]
       [button {:on-click #(re-frame/dispatch [::cevts/create-health])
                :text "Create"
                :disabled false
                :extra-styles custom-buttom-style}]
       (when (true? @is-online?)
         [:<>
          [:p (use-style (merge link-p-style {:margin-top "1%"}))
           "Want to download a health check's results instead? "
           [link
            {:on-click #(re-frame/dispatch [::events/navigate :export-results])
             :text "Click here!"
             :title "Navigate to export resutls page"}]]
          [:p (use-style link-p-style)
           "Want to list checks you have published instead? "
           [link
            {:on-click #(re-frame/dispatch [::events/navigate :list-checks])
             :text "Click here!"
             :title "Navigate to my health check list"}]]])]
      [:div
       [:img (use-style {:max-width "600px"}
                        {:src "assets/mic.png"})]]
      (when (and (pos? (count @local-health-checks)) (not @loading?))
        [:div
         [:h4 "Local health checks"]
         [:p "These health checks haven't been pushed to the web yet. 
                    You can choose to publish or delete them."]
         [healths-table]])]]))
