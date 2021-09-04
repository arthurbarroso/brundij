(ns brundij.views.questions.create
  (:require [brundij.components.button :refer [button]]
            [brundij.components.input :refer [input]]
            [brundij.components.template :refer [template]]
            [brundij.events :as events]
            [brundij.styles :refer [font-family]]
            [brundij.subs :as subs]
            [re-frame.core :as re-frame]
            [stylefy.core :as stylefy :refer [use-style]]))

(def list-style {:list-style "none"
                 :height "56%"
                 :width "70%"
                 :margin-top "3%"
                 :overflow "auto"})

(def list-item-style {:background "#ebf5ee"
                      :margin-top "1%"
                      :width "98%"
                      :padding "2% 1%"
                      :display "flex"
                      :align-items "center"
                      :border-radius "2%"
                      :justify-content "space-between"})

(def item-text-style-base {:margin 0
                           :font-family font-family})

(def remove-item-text-style
  (merge item-text-style-base
         {:cursor "pointer"}))

(defn add-question [question-text]
  (re-frame/dispatch [::events/add-question {:id (random-uuid)
                                             :title question-text}])
  (re-frame/dispatch [::events/change-question-input nil]))

(defn create-questions-view []
  (let [questions (re-frame/subscribe [::subs/questions])
        question-input (re-frame/subscribe [::subs/question-input])]
    [template
     [:h3 (use-style {:font-size "3rem" :margin 0})
      "Health check questions 🍃"]
     [:p (use-style {:max-width "70%"})
      "Health checks come with a few default questions. You may add or remove 
      questions as you wish"]
     [:div (use-style {:display "flex" :width "70%"})
      [input {:value @question-input
              :on-change #(re-frame/dispatch [::events/change-question-input %])
              :disabled false
              :extra-style {:width "100%"
                            :margin-right "3%"}
              :placeholder "New question"}]
      [button {:on-click #(add-question @question-input)
               :text "➕" :disabled false
               :extra-styles {:color "#333"}}]]
     [:div (use-style list-style)
      (doall
        (for [question @questions]
          ^{:key (:id question)}
          [:li (use-style list-item-style)
           [:p (use-style item-text-style-base)
            (:title question)]
           [:p
            (use-style
              remove-item-text-style
              {:on-click
                 #(re-frame/dispatch [::events/remove-question-by-uuid
                                      (:id question)])})
            "❌"]]))]
     [button {:on-click #(println "hi")
              :text "Create questions"
              :extra-styles {:color "#333"
                             :width "70%"
                             :margin-top "1%"
                             :font-weight 700}
              :disabled false}]]))
