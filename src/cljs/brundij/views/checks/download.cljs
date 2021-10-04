(ns brundij.views.checks.download
  (:require [brundij.components.button :refer [button]]
            [brundij.components.input :refer [input]]
            [brundij.components.template :refer [template]]
            [brundij.views.checks.events :as cevts]
            [brundij.views.checks.subs :as subs]
            [re-frame.core :as re-frame]
            [stylefy.core :as stylefy :refer [use-style]]))

(defn download-check-results-view []
  (let [health-id-input (re-frame/subscribe [::subs/health-id-input])]
    [template
     [:div (use-style {:margin-top "10%" :display "flex"
                       ::stylefy/media {{:max-width "768px"} {:flex-direction "column"}}})
      [:div (use-style {:max-width "50%"
                        ::stylefy/media {{:max-width "768px"} {:max-width "100%"}}})
       [:h3 (use-style {:font-size "3rem" :margin 0
                        :max-width "80%"}) "Download health check results 🧶"]
       [:p (use-style {:max-width "75%"})
        "Type in your health check's id and press the button to download it's results"]
       [input {:value @health-id-input
               :on-change #(re-frame/dispatch [::cevts/change-health-id-input %])
               :type "text"
               :placeholder "Your health check's id"
               :extra-styles {:width "100%"}}]
       [button {:on-click #(re-frame/dispatch [::cevts/fetch-results @health-id-input])
                :text "Download health check's results"
                :disabled false
                :title "Download results"
                :extra-styles {:margin-top "1%"
                               :color "#333"
                               :width "100%"}}]]
      [:div (use-style
              {::stylefy/media {{:max-width "768px"} {:display "none"}}})
       [:img (use-style {:max-width "600px"}
                        {:src "assets/processor.png"})]]]]))
