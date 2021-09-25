(ns brundij.components.table
  (:require [brundij.components.button :refer [button]]
            [brundij.events :as events]
            [brundij.subs :as subs]
            [re-frame.core :as re-frame]
            [stylefy.core :as stylefy :refer [use-style]]))

(def table-style {:border-collapse "collapse"})

(def td-style {:text-align "left" :padding "8px 8px 8px 0"})
(def td-style-right (merge td-style {:text-align "right"}))

(def icon-button-style
  {:cursor "pointer"
   :background "none"
   :padding 0
   :border "none"})

(defn healths-table []
  (let [local-health-checks (re-frame/subscribe [::subs/get-local-health-checks])]
    [:table (use-style table-style)
     [:thead
      [:tr
       [:th (use-style td-style) "UUID"]
       [:th (use-style td-style) "Created at"]
       [:th (use-style td-style) "Questions"]]]
     [:tbody
      (doall
        (for [health (flatten @local-health-checks)]
          ^{:key (:health/uuid health)}
          [:tr
           [:td (use-style td-style)
            (.toString (:health/uuid health))]
           [:td (use-style td-style-right) (count (:health/question health))]
           [:td (use-style td-style)
            [button
             {:title "Publish"
              :extra-styles icon-button-style
              :text "✅"
              :on-click #(re-frame/dispatch [::events/publish-local-health
                                             health])}]]
           [:td (use-style td-style)
            [button
             {:title "Remove"
              :extra-styles icon-button-style
              :text "❌"
              :on-click #(re-frame/dispatch [::events/retract-health
                                             (:health/uuid health)])}]]]))]]))
