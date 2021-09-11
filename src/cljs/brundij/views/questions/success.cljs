(ns brundij.views.questions.success
  (:require [brundij.components.template :refer [template]]
            [brundij.views.questions.subs :as subs]
            [re-frame.core :as re-frame]
            [stylefy.core :as stylefy :refer [use-style]]))

(def base-url "http://localhost:8280")

(def p-style {:margin 0})

(defn success-view []
  (let [health-id (re-frame/subscribe [::subs/health-uuid])]
    [template
     [:h3 (use-style {:font-size "3rem" :margin 0})
      "Success! 🍏"]
     [:p (use-style {:max-width "70%"})
      "You should now be able to share this health check survey with your teammates
      by either telling them the health check's id or by pointing them to the link below. Simply click those to copy them to your clipboard."]
     [:p (use-style (merge p-style {:font-weight 700}))
      "Your health check ID is:"]
     [:p
      (use-style
        (merge p-style {:cursor "pointer"})
        {:on-click #(-> js/navigator .-clipboard (.writeText @health-id))})
      @health-id]
     [:p (use-style (merge p-style {:font-weight 700}))
      "And can be answered by navigating to"]
     [:p
      (use-style
        (merge p-style {:cursor "pointer"})
        {:on-click #(-> js/navigator
                        .-clipboard
                        (.writeText
                          (str base-url "/?id="
                               @health-id)))})
      (str base-url "/?id=" @health-id)]]))
