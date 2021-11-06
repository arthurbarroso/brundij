(ns brundij.answers.create
  (:require [brundij.shared.layout :refer [layout]]
            [brundij.answers.events :as aevts]
            [brundij.shared.components.button :refer [button]]
            [brundij.answers.options :refer [options trend-options]]
            [brundij.shared.questions :refer [base-questions]]
            [brundij.shared.utils :as utils]
            [brundij.answers.subs :as subs]
            [re-frame.core :as re-frame]))

(defn update-question [question]
  (re-frame/dispatch [::aevts/update-question-data
                      {:index (:index question)
                       :question question}]))

(defn get-option-style [{:keys [current target]}]
  (if (= current target)
    "option-selected"
    "option-not-selected"))

(defn get-values-by-option-type [{:keys [type option question]}]
  (if (= :trend type)
    {:current (:trend question)
     :target (:trend option)}
    {:current (:option question)
     :target (:rating option)}))

(defn get-question-update-by-type [{:keys [type question option]}]
  (if (= :trend type)
    (merge question {:trend (:trend option)})
    (merge question {:option (:rating option)})))

(defn option-button [{:keys [option question type]}]
  [:button
   {:class (get-option-style
            (get-values-by-option-type
             {:question question
              :type type
              :option option}))
    :on-click #(update-question
                (get-question-update-by-type
                 {:type type
                  :option option
                  :question question}))
    :title (:title option)}
   (:symbol option)])

(defn controls [question]
  [:div {:class "controls"}
   [:div {:class "option-holder"}
    (doall
     (for [option options]
       ^{:key
         (str (:question/uuid question)
              (:symbol option))}
       [option-button
        {:option option
         :question question
         :type :option}]))]
   [:div {:class "trend-option-holder"}
    (doall
     (for [option trend-options]
       ^{:key
         (str (:question/uuid question)
              (:symbol option))}
       [option-button
        {:option option
         :question question
         :type :trend}]))]])

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
       [:p "Questions answered: 0/N"]
       [:ul {:class "list"}
        (if-not (false? @questions)
          (doall
           (for [[uuid question] @questions]
             ^{:key uuid}
             [question-item question]))
          (doall
           (for [[uuid question] base-questions]
             ^{:key uuid}
             [question-item question])))]
       [button {:on-click #(println "hi")
                :text "Submit answers"
                :disabled false
                :extra-style-class "button-mt-3-sized"}]]]]))
