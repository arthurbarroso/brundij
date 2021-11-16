(ns brundij.questions.success
  (:require [brundij.shared.components.input :refer [input]]
            [brundij.shared.layout :refer [layout]]
            [brundij.shared.utils :as utils]))

(defn copy-to-clipboard [text]
  (-> js/navigator
      .-clipboard
      (.writeText text)))

(defn success-view []
  (let [health-id (utils/get-cookie! "health-id")
        final-url (utils/mount-shareable-link health-id)]
    [layout {}
     ^{:key "success"}
     [:div {:class "page-container"}
      [:h3 {:class "page-title"}
       "Success!"]
      [:div {:class "base-container"}
       [:p "You should now be able to share this health
            check survey with your teammates
            by pointing them to the link below.
            Simply click the link below to copy it 
            to your clipboard."]
       [:div {:class "copy"
              :on-click #(copy-to-clipboard final-url)}
        [input {:value final-url :disabled true}]]
       [:p
        "Please save the following id as you'll need it to
         download the health check's results."]
       [:div {:class "copy"
              :on-click #(copy-to-clipboard health-id)}
        [input {:value health-id :disabled true}]]]]]))
