(ns brundij.shared.components.header
  (:require [re-frame.core :as re-frame]
            [brundij.shared.events :as events]))

(defn navigate-to-brundi-gh []
  (.open js/window "https://github.com/arthurbarroso/brundij"))

(defn header []
  [:div {:class "header-style"}
   [:a {:class "title-style"
        :href "/"}
    "brundij"]
   [:nav {:class "header-container-style"}
    [:button {:class "link-style"
              :on-click #(navigate-to-brundi-gh)}
     "About"]
    [:button {:class "link-style"
              :on-click #(re-frame/dispatch [::events/navigate "/results"])}
     "Results"]]])
