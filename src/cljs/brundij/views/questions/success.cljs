(ns brundij.views.questions.success
  (:require [brundij.components.input :refer [input]]
            [brundij.components.link :refer [link]]
            [brundij.components.template :refer [template]]
            [brundij.events :as events]
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
     [:div (use-style {:margin-top "10%"})]
     [:h3 (use-style {:font-size "3rem" :margin 0})
      "Health check successfully created! 🍏"]
     (if (true? @is-online?)
       [:<>
        [:p
         "You should now be able to share this health check survey with your teammates 
            by pointing them to the link below. Simply click the link below to copy it 
            to your clipboard."]
        [:div {:on-click #(-> js/navigator
                              .-clipboard
                              (.writeText final-url))}
         [input {:value final-url :disabled true
                 :extra-styles {:margin-bottom "1%" :width "100%"}}]]
        [:p (use-style {:margin 0})
         "Your health check's ID is: "
         [:span (use-style {:font-weight 700 :margin 0})
          (str @health-id)]]
        [:p (use-style {:margin 0})
         "Please save the id as you'll need it to download the health check's results.
          This ID also get's saved to your browser's storage so you're able to check
          it by navigating to your "
         [link
          {:on-click #(re-frame/dispatch [::events/navigate :list-checks])
           :text "health check list"
           :title "Navigate to my health check list"}]]]
       [:<>
        [:p (use-style {:margin 0})
         "Your health check's ID is: "
         [:span (use-style {:font-weight 700 :margin 0}) (str @health-id)]]
        [:p (use-style {:margin 0})
         "You'll be able to publish it by vising the home page with an active connection"]])]))
