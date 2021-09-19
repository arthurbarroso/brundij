(ns brundij.views.checks.create
  (:require [brundij.components.button :refer [button]]
            [brundij.components.table :refer [healths-table]]
            [brundij.components.template :refer [template]]
            [brundij.events :as events]
            [brundij.subs :as subs]
            [brundij.views.checks.events :as cevts]
            [re-frame.core :as re-frame]
            [stylefy.core :as stylefy :refer [use-style]]))

(def custom-buttom-style {:height "60px"
                          :color "#333"
                          :width "100%"
                          :max-width "75%"})

(def custom-link-style {:color "#3b782e"
                        :cursor "pointer"})

(def link-p-style {:max-width "75%"
                   :margin 0
                   :margin-top "1%"})

(defn create-check-view []
  (let [is-online? (re-frame/subscribe [::subs/is-online?])
        local-health-checks (re-frame/subscribe [::subs/get-local-health-checks])]
    [template
     [:h3 (use-style {:font-size "3rem" :margin 0}) "Create a new health check 🍀"]
     [:p (use-style {:max-width "75%"})
      "Get started on running health checks by creating one. 
           It is as simple as clicking the button below. It is easy, fast and free!"]
     [button {:on-click #(re-frame/dispatch [::cevts/create-health])
              :text "Create"
              :disabled false
              :extra-styles custom-buttom-style}]
     (when (true? @is-online?)
       [:<>
        [:p (use-style link-p-style
                       {:on-click #(re-frame/dispatch
                                     [::events/navigate :export-results])})
         "Want to download a health check's results instead? "
         [:a (use-style custom-link-style)
          "Click here!"]]
        [:p (use-style link-p-style
                       {:on-click #(re-frame/dispatch
                                     [::events/navigate :list-checks])})
         "Want to list checks you have published instead? "
         [:a (use-style custom-link-style)
          "Click here!"]]])
     (when (> (count @local-health-checks) 0)
       [:div (use-style {:max-width "85%"})
        [:h4 "Local health checks"]
        [:p "These health checks haven't been pushed to the web yet. 
                You can choose to publish or delete them."]
        [healths-table]])]))
