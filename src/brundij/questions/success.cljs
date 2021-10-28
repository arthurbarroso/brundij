(ns brundij.questions.success
  (:require [brundij.shared.components.input :refer [input]]
            [brundij.shared.components.link :refer [link]]
            [brundij.shared.layout :refer [layout]]
            [brundij.shared.events :as events]
            [brundij.shared.utils :as utils]
            [re-frame.core :as re-frame]))

(defn success-view []
  (let [search (.-search (.-location js/window))
        health-id (re-find #"(?![\\?\\q\\=]).*" search)
        final-url (utils/mount-shareable-link health-id)]
    [layout {}
     ^{:key "success"}
     [:div
      [:h3
       "Health check successfully created!"]
      [:p
       "You should now be able to share this health
          check survey with your teammates
          by pointing them to the link below.
          Simply click the link below to copy it 
          to your clipboard."]
      [:div {:on-click #(-> js/navigator
                            .-clipboard
                            (.writeText final-url))}
       [input {:value final-url :disabled true}]]
      [:p
       "Your health check's ID is: "
       [:span
        (str health-id)]]
      [:p
       "Please save the id as you'll need it to
          download the health check's results.
          This ID also get's saved to your
          browser's storage so you're able to check
          it by navigating to your "
       [link
        {:on-click #(re-frame/dispatch [::events/navigate :list-checks])
         :text "health check list"
         :title "Navigate to my health check list"}]]]]))
