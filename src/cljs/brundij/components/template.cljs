(ns brundij.components.template
  (:require [brundij.styles :refer [font-family]]
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
                              {:background "#b8fca9"}))

(def right-column-style (merge column-style
                               {:padding "0% 2%"
                                :display "flex"
                                :flex-direction "column"
                                :justify-content "center"}))

(defn template []
  [:div (use-style outer-style)
   [:div (use-style left-column-style)]
   [:div (use-style right-column-style)
    (into [:<>]
          (reagent/children (reagent/current-component)))]])
