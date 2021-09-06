(ns brundij.views.answers.success
  (:require [brundij.components.template :refer [template]]
            [stylefy.core :as stylefy :refer [use-style]]))

(defn answers-success-view []
  [template
   [:h3 (use-style {:font-size "3rem" :margin 0
                    :max-width "50%"})
    "Questions successfully answered! 🐝"]
   [:p (use-style {:max-width "50%"})
    "There is nothing else you need to do. You've just answered all the
      questions for this health check"]])
