(ns brundij.views.answers.success
  (:require [brundij.components.template :refer [template]]
            [stylefy.core :as stylefy :refer [use-style]]))

(defn answers-success-view []
  [template
   [:div (use-style {:display "flex" :margin-top "10%"})
    [:div (use-style {:max-width "50%"})
     [:h3 (use-style {:font-size "3rem" :margin 0
                      :max-width "50%"})
      "Questions successfully answered! 🐝"]
     [:p (use-style {:max-width "50%"})
      "There is nothing else you need to do. You've just answered all the
        questions for this health check"]]
    [:div
     [:img (use-style {:max-width "600px"}
                      {:src "https://user-images.githubusercontent.com/48794198/134418718-2b09cb7d-42fb-4818-954c-7e586a644caa.png"})]]]])
