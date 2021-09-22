(ns brundij.components.template
  (:require [brundij.events :as events]
            [brundij.styles :refer [font-family]]
            [re-frame.core :as re-frame]
            [reagent.core :as reagent]
            [stylefy.core :as stylefy :refer [use-style]]))

(def outer-style {:display "flex"
                  :background "#F5F4F4"
                  :flex-direction "column"
                  :justify-content "space-between"
                  :font-family font-family
                  :width "100%"
                  :height "100vh"
                  :max-width "1440px"})

(def title-style {:color "#161313"
                  :cursor "pointer"
                  :font-size "2rem"
                  ::stylefy/mode {:hover {:color "#3ec762"}}})

(def list-style {:display "flex"
                 :list-style "none"
                 :width "20%"})

(def nav-link-style {:margin-left "3%"
                     :font-weight 500
                     :text-transform "uppercase"
                     :color "#574A4D"
                     :cursor "pointer"
                     ::stylefy/mode {:hover {:color "#3ec762"}}})

(def footer-link-style {:margin-right "3%"
                        :font-weight 500
                        :color "#574A4D"
                        :cursor "pointer"
                        ::stylefy/mode {:hover {:color "#3ec762"}}})

(def footer-style {:border-top "1px solid #D3D3D3"
                   :display "flex"})

(defn template []
  [:div (use-style outer-style)
   [:div (use-style {;:padding "1.5%"
                     :overflow "hidden"
                     :width "100%"})
    [:nav (use-style {:display "flex"
                      :justify-content "space-between"
                      :align-items "center"})
     [:h1 (use-style
            title-style
            {:on-click #(re-frame/dispatch [::events/navigate :home])})
      "Brundij"]
     [:ul (use-style list-style)
      [:li (use-style
             nav-link-style
             {:on-click #(re-frame/dispatch [::events/navigate :create])})
       "Create"]
      [:li (use-style
             nav-link-style
             {:on-click #(re-frame/dispatch [::events/navigate :export-results])})
       "Export"]]]
    (into [:<>]
          (reagent/children (reagent/current-component)))]
   [:footer (use-style footer-style)
    [:p (use-style footer-link-style) "About Brundij"]
    [:p (use-style footer-link-style) "Self hosting"]]])
