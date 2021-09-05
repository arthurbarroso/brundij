(ns brundij.views.questions.success
  (:require [brundij.components.template :refer [template]]
            [brundij.subs :as subs]
            [re-frame.core :as re-frame]
            [stylefy.core :as stylefy :refer [use-style]]))

(defn success-view []
  (let [health-id (re-frame/subscribe [::subs/health-uuid])]
    [template
     [:h3 (use-style {:font-size "3rem" :margin 0})
      "Success! 🍏"]
     [:p (use-style {:max-width "70%"})
      "You should now be able to share this health check survey with your teammates
      by either telling them the health check's id or by pointing them to the link below"]
     [:p "Your health check ID is:"
      [:br]
      @health-id]]))
