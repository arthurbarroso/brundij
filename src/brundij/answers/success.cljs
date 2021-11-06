(ns brundij.answers.success
  (:require [brundij.shared.layout :refer [layout]]))

(defn success-view []
  [layout {}
   ^{:key "landing"}
   [:div {:class "page-container"}
    [:h3 {:class "page-title"}
     "Questions successfully answered! 🐝"]
    [:div {:class "base-container"}
     [:p
      "There is nothing else you need to do. You've just answered all the
            questions for this health check"]]]])
