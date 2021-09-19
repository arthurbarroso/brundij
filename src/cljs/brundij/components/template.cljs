(ns brundij.components.template
  (:require [brundij.events :as events]
            [brundij.styles :refer [font-family]]
            [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            [stylefy.core :as stylefy :refer [use-style]]))

(def outer-style {:background "#fff"
                  :display "flex"
                  :align-items "center"
                  :font-family font-family
                  :width "100%"
                  :height "100vh"})

(def column-style {:width "50%"
                   :height "100%"})

(def left-column-style (merge column-style
                              {:background "#b8fca9"
                               :display "flex"}))

(def right-column-style (merge column-style
                               {:display "flex"
                                :padding "0% 2%"
                                :flex-direction "column"}))

(defn template []
  [:div (use-style outer-style)
   [:div (use-style left-column-style)
    [:div (use-style {:padding "4%"})]]
   [:div (use-style right-column-style)
    [:div (use-style {:padding-top "4%"})
     [:h3
      (use-style
        {:font-size "4rem" :color "#333" :margin "0 0 4% 0"
         :cursor "pointer"}
        {:on-click #(re-frame/dispatch [::events/navigate :home])
         :title "Go to website's home page"})
      "Brundij 🥑"]]
    (into [:<>]
          (reagent/children (reagent/current-component)))]])
