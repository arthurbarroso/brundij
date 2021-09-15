(ns brundij.views.questions.success
  (:require [brundij.components.input :refer [input]]
            [brundij.components.template :refer [template]]
            [brundij.views.questions.subs :as subs]
            [clojure.string :refer [replace]]
            [re-frame.core :as re-frame]
            [stylefy.core :as stylefy :refer [use-style]]))

(defn success-view []
  (let [health-id (re-frame/subscribe [::subs/health-uuid])
        uri (.-href js/window.location)
        final-url (replace uri "/success" (str "/?id=" @health-id))]
    [template
     [:h3 (use-style {:font-size "3rem" :margin 0})
      "Success! 🍏"]
     [:p (use-style {:max-width "70%"})
      "You should now be able to share this health check survey with your teammates 
      by pointing them to the link below. Simply click the link below to copy it 
      to your clipboard."]
     [:div {:on-click #(-> js/navigator
                           .-clipboard
                           (.writeText final-url))}
      [input {:value final-url :disabled true
              :extra-styles {:width "75%"}}]]]))
