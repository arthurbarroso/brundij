(ns brundij.views.questions.create
  (:require [brundij.components.button :refer [button]]
            [brundij.components.input :refer [input]]
            [brundij.components.template :refer [template]]
            [brundij.styles :refer [font-family]]
            [brundij.views.questions.events :as qevts]
            [brundij.views.questions.subs :as subs]
            [re-frame.core :as re-frame]
            [stylefy.core :as stylefy :refer [use-style]]))

(def list-style {:list-style "none"
                 :height "48%"
                 :max-height "48%"
                 :margin-top "3%"
                 :overflow "auto"
                 :padding 0})

(def list-item-style {:background "#faf7e8"
                      :margin-top "1%"
                      :width "98%"
                      :padding "2% 1%"
                      :display "flex"
                      :align-items "center"
                      :border-radius "12px"
                      :justify-content "space-between"})

(def item-text-style-base {:margin 0
                           :font-family font-family})

(def remove-item-text-style
  (merge item-text-style-base
         {:cursor "pointer"}))

(defn add-question [question-text]
  (re-frame/dispatch [::qevts/add-question {:id (random-uuid)
                                            :content question-text}])
  (re-frame/dispatch [::qevts/change-question-input nil]))

(defn create-questions-view []
  (let [questions (re-frame/subscribe [::subs/questions])
        question-input (re-frame/subscribe [::subs/question-input])
        health-id (re-frame/subscribe [::subs/health-uuid])]
    [template
     [:h3 (use-style {:font-size "3rem" :margin 0})
      "Add questions/topics to the health check 🍃"]
     [:p (use-style {:max-width "70%"})
      "Health checks come with a few default questions. You may add or remove 
        questions as you wish"]
     [:div (use-style {:display "flex"})
      [input {:value @question-input
              :on-change #(re-frame/dispatch [::qevts/change-question-input %])
              :disabled false
              :type "text"
              :extra-styles {:width "100%"
                             :margin-right "3%"}
              :placeholder "New question"}]
      [button {:on-click #(add-question @question-input)
               :text "➕" :disabled false
               :extra-styles {:color "#333"}}]]
     [:ul (use-style list-style)
      (doall
        (for [question @questions]
          ^{:key (:id question)}
          [:li (use-style list-item-style)
           [:p (use-style item-text-style-base)
            (:content question)]
           [:p
            (use-style
              remove-item-text-style
              {:on-click
                 #(re-frame/dispatch [::qevts/remove-question-by-uuid
                                      (:id question)])})
            "❌"]]))]
     [button {:on-click #(re-frame/dispatch [::qevts/create-questions @health-id @questions])
              :text "Create questions"
              :extra-styles {:color "#333"
                             :width "100%"
                             :font-weight 700}
              :disabled false}]]))
