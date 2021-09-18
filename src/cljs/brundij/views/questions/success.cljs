(ns brundij.views.questions.success
  (:require [brundij.components.input :refer [input]]
            [brundij.components.template :refer [template]]
            [brundij.subs :as bsubs]
            [brundij.utils :as utils]
            [brundij.views.questions.subs :as subs]
            [re-frame.core :as re-frame]
            [stylefy.core :as stylefy :refer [use-style]]))

(defn success-view []
  (let [health-id (re-frame/subscribe [::subs/health-uuid])
        is-online? (re-frame/subscribe [::bsubs/is-online?])
        final-url (utils/mount-shareable-link @health-id)]
    [template
     [:h3 (use-style {:font-size "3rem" :margin 0})
      "Success! 🍏"]
     (if (true? @is-online?)
       [:<>
        [:p (use-style {:max-width "70%"})
         "You should now be able to share this health check survey with your teammates 
          by pointing them to the link below. Simply click the link below to copy it 
          to your clipboard."]
        [:div {:on-click #(-> js/navigator
                              .-clipboard
                              (.writeText final-url))}
         [input {:value final-url :disabled true
                 :extra-styles {:width "75%"}}]]
        [:p (use-style {:max-width "70%"})
         "Your health check's ID is: "]
        [:p (use-style {:font-weight 700 :margin 0})
         @health-id]
        [:p "Please save it as you'll need it to download results"]]
       [:<>
        [:p (use-style {:max-width "70%"})
         "Your health check's ID is: "]
        [:p (str @health-id)]
        [:p "It will be created as soon as you visit this page with an online connection"]])]))
