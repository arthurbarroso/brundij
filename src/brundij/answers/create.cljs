(ns brundij.answers.create
  (:require [brundij.shared.layout :refer [layout]]
            [brundij.answers.events :as aevts]
            [brundij.answers.options :refer [options trend-options]]
            [brundij.shared.questions :refer [base-questions]]
            [brundij.shared.utils :as utils]
            [brundij.answers.subs :as subs]
            [re-frame.core :as re-frame]))

(defn controls [question]
  [:div {:class "controls"}
   [:div {:class "option-holder"}
    (doall
     (for [option options]
       ^{:key
         (str (:question/uuid question)
              (:symbol option))}
       [:button
        {:on-click #(re-frame/dispatch
                     [::aevts/set-answer-option
                      {:uuid (:question/uuid question)
                       :rating 1}])}
        (:symbol option)]))]
   [:div {:class "trend-option-holder"}
    (doall
     (for [option trend-options]
       ^{:key
         (str (:question/uuid question)
              (:symbol option))}
       [:button (:symbol option)]))]])

(defn question-item [question]
  [:li {:class "list-item"}
   [:p {:class "list-item-title"}
    (utils/parse-cookie-string
     (:question/content question))]
   [controls question]])

(defn create-answers []
  (let [questions (re-frame/subscribe [::subs/pre-existing-questions])]
    [layout {}
     ^{:key "answers"}
     [:div {:class "page-container"}
      [:h3 {:class "questions-title"}
       "Answering health check questions"]
      [:div {:class "base-container"}
       [:ul {:class "list"}
        (if-not (false? @questions)
          (doall
           (for [[uuid question] @questions]
             ^{:key uuid}
             [question-item question]))
          (doall
           (for [[uuid question] base-questions]
             ^{:key uuid}
             [question-item question])))]]]]))
