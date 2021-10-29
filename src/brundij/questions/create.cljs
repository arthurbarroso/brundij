(ns brundij.questions.create
  (:require [brundij.shared.components.button :refer [button]]
            [brundij.shared.components.input :refer [input]]
            [brundij.shared.layout :refer [layout]]
            [brundij.uuids :as uuids]
            [brundij.questions.events :as qevts]
            [brundij.questions.subs :as subs]
            [re-frame.core :as re-frame]))

(defn add-question [question-text]
  (re-frame/dispatch [::qevts/add-question {:id (uuids/generate-uuid)
                                            :content question-text}])
  (re-frame/dispatch [::qevts/change-question-input nil]))

(defn question-item [question]
  [:<>
   [:li {:class "list-item"}
    [:p
     (:content question)]
    [:p
     {:on-click
      #(re-frame/dispatch [::qevts/remove-question-by-uuid
                           (:id question)])}
     "❌"]]])

(defn create-questions-view []
  (let [questions (re-frame/subscribe [::subs/questions])
        question-input (re-frame/subscribe [::subs/question-input])]
    (fn []
      [layout {}
       ^{:key "create-questions"}
       [:div {:class "page-container"}
        [:h3 {:class "questions-title"}
         "Add questions/topics to your health check"]
        [:div {:class "base-container"}
         [:p "Health checks come with a few default questions. You may add or remove questions as you wish"]
         [:div {:class "input-holder"}
          [input {:value @question-input
                  :on-change #(re-frame/dispatch [::qevts/change-question-input %])
                  :disabled false
                  :type "text"
                  :placeholder "New question"}]
          [button {:on-click #(add-question @question-input)
                   :text "➕" :disabled false}]]
         [:ul {:class "list"}
          (if-not (false? @questions)
            (doall
             (for [question @questions]
               ^{:key (:id question)}
               [question-item question]))
            (doall
             (for [question qevts/base-questions]
               ^{:key (:id question)}
               [question-item question])))]
         [button {:on-click #(re-frame/dispatch [::qevts/create-questions
                                                 @questions])
                  :text "Create questions"
                  :disabled false
                  :extra-style-class "button-mt-3-sized"}]]]])))
