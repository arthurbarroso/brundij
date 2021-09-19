(ns brundij.views.checks.list
  (:require [brundij.components.template :refer [template]]
            [brundij.date :as date]
            [brundij.subs :as subs]
            [brundij.utils :as utils]
            [re-frame.core :as re-frame]
            [stylefy.core :as stylefy :refer [use-style]]))

(def list-style {:list-style "none"
                 :height "56%"
                 :width "70%"
                 :margin-top "3%"
                 :overflow "auto"
                 :padding 0})

(def list-item-style {:background "#ebf5ee"
                      :margin-top "1%"
                      :width "98%"
                      :padding "2% 1%"
                      :display "flex"
                      :align-items "center"
                      :border-radius "2%"
                      :justify-content "space-between"})

(defn list-checks-view []
  (let [checks (re-frame/subscribe [::subs/get-local-published-health-checks])]
    [template
     [:h3 (use-style {:font-size "3rem" :margin 0})
      "Health checks you've published 🌎"]
     [:p (use-style {:max-width "70%"})
      "The health checks you've published can be accessed in here."]
     [:div (use-style {:display "flex" :width "70%"})]
     [:ul (use-style list-style)
      (doall
        (for [check (flatten @checks)]
          (let [final-url (utils/mount-shareable-link (:published/uuid check))]
            ^{:key (:published/uuid check)}
            [:li (use-style list-item-style)
             [:div
              (use-style
                {:width "100%"
                 :cursor "pointer"}
                {:on-click #(-> js/navigator
                                .-clipboard
                                (.writeText final-url))
                 :title "Click to copy the URL to this health check"})
              [:p (use-style {:margin 0})
               (str (:published/uuid check))]
              [:p (use-style {:margin 0})
               (str "Pubished on " (date/format-inst (:published/created_at check)))]]])))]]))
