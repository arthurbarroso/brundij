(ns brundij.views.answers.success
  (:require [brundij.components.template :refer [template]]
            [stylefy.core :as stylefy :refer [use-style]]))

(defn answers-success-view []
  [template
   [:div (use-style {:display "flex" :margin-top "10%"
                     ::stylefy/media {{:max-width "768px"} {:flex-direction "column"}}})
    [:div (use-style {:max-width "50%"
                      ::stylefy/media {{:max-width "768px"} {:max-width "100%"}}})
     [:h3 (use-style {:font-size "3rem" :margin 0
                      :max-width "50%"})
      "Questions successfully answered! 🐝"]
     [:p (use-style {:max-width "50%"})
      "There is nothing else you need to do. You've just answered all the
        questions for this health check"]]
    [:div (use-style
            {::stylefy/media {{:max-width "768px"} {:display "none"}}})
     [:img (use-style {:max-width "600px"}
                      {:src "assets/headphones.png"})]]]])
