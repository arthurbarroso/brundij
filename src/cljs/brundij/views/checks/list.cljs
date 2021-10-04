(ns brundij.views.checks.list
  (:require [brundij.components.template :refer [template]]
            [brundij.subs :as subs]
            [brundij.utils :as utils]
            [re-frame.core :as re-frame]
            [stylefy.core :as stylefy :refer [use-style]]))

(def list-style {:list-style "none"
                 :height "48%"
                 :max-height "48%"
                 :margin-top "3%"
                 :overflow "auto"
                 :padding 0})

(def list-item-style {:border "1px solid #8db8a4"
                      :margin-top "1%"
                      :width "97%"
                      :padding "2% 1%"
                      :display "flex"
                      :align-items "center"
                      :border-radius "12px"
                      :justify-content "space-between"})

(defn list-checks-view []
  (let [checks (re-frame/subscribe [::subs/get-local-published-health-checks])]
    [template
     [:div (use-style {:display "flex"
                       ::stylefy/media {{:max-width "768px"} {:flex-direction "column"}}})
      [:div (use-style {:max-width "50%"
                        ::stylefy/media {{:max-width "768px"} {:max-width "100%"}}})
       [:h3 (use-style {:font-size "3rem" :margin 0})
        "Health checks you've published 🌎"]
       [:p (use-style {:margin 0})
        "The health checks you've published can be accessed in here. Simply click 
         one of those to grab the direct link to answer it."]
       [:div (use-style {:max-height "48%" :height "48%"})
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
                  (str (:published/uuid check))]]])))]]]

      [:div (use-style {:margin-top "10%"
                        ::stylefy/media {{:max-width "768px"} {:display "none"}}})
       [:img (use-style {:max-width "600px"}
                        {:src "assets/disk.png"})]]]]))
