(ns brundij.answers.create
  (:require [brundij.shared.components.button :refer [button]]
            [brundij.shared.components.link :refer [link]]
            [brundij.shared.layout :refer [layout]]
            [brundij.shared.events :as events]
            [brundij.answers.events :as aevts]
            [brundij.answers.options :refer [options trend-options]]
            [brundij.answers.subs :as subs]
            [re-frame.core :as re-frame]))

(defn question-link-styles [possible?]
  (if (true? possible?)
    (merge "" {:cursor "pointer"})
    (merge "" {:color "#ccc"})))

(def option-base
  {:cursor "pointer"
   :font-size "1.5rem"
   :background "none"
   :padding 0
   :border "none"})

(defn option-styles [current-rating option]
  (if (= current-rating option)
    (merge option-base
           {:border "1px solid red"
            :border-radius "50%"})
    option-base))

(defn trend-styles [current-trend trend]
  (if (= current-trend trend)
    (merge option-base {:border "1px solid red"})
    option-base))

(defn parse-questions-for-handler [questions]
  (map (fn [q]
         {:question-id (:uuid q)
          :rating (:rating q)
          :trend (:trend q)})
       questions))

(defn no-questions []
  [:div
   [:div
    [:div]
    [:h3
     "Oops! Looks like either the selected health check has no questions 
          or there is no health check selected at all 🐛"]
    [link
     {:on-click #(re-frame/dispatch [::events/navigate "/"])
      :text "Go back to home page"
      :title "Navigate to home page"}]]])

(defn option-picker [questions current-index option]
  [:button {:class
            (option-styles
             (:rating (nth questions current-index))
             (:rating option))
            :title (:title option)
            :on-click
            #(re-frame/dispatch
              [::aevts/update-question-rating-at-index
               {:rating (:rating option)
                :index current-index}])}
   [:p (:symbol option)]])

(defn trend-picker [questions current-index trend]
  [:button
   {:class
    (trend-styles (:trend (nth questions current-index))
                  (:trend trend))
    :title (:title trend)
    :on-click #(re-frame/dispatch
                [::aevts/update-question-trend-at-index
                 {:trend (:trend trend)
                  :index current-index}])}
   (:symbol trend)])

(defn question-navigator [questions current-index max-index]
  [:div
   [:p
    {:class
     (question-link-styles (> current-index 0))
     :on-click #(when (> current-index 0)
                  (re-frame/dispatch
                   [::aevts/decrement-current-question-index]))}
    "Previous question"]
   [:p
    {:class
     (question-link-styles (< current-index max-index))
     :on-click #(when (< current-index max-index)
                  (re-frame/dispatch
                   [::aevts/increment-current-question-index]))}
    "Next question"]]
  [button {:on-click
           #(re-frame/dispatch
             [::aevts/create-answers
              (parse-questions-for-handler questions)])
           :text "Submit answers"
           :extra-styles {:width "100%"
                          :color "#333"}}])

(defn create-answers []
  (let [questions @(re-frame/subscribe [::subs/pre-existing-questions])
        max-index (count questions)
        current-index @(re-frame/subscribe [::subs/current-question-index])]
    [layout {}
     ^{:key "answers"}
     [:<>]
     (if (= 0 (count questions))
       [no-questions]
       [:div
        [:div
         [:h3
          "Answering health check questions 🥝"]
         [:h4 (str "Question/topic: " (:content (nth questions current-index)))]
         [:p "Your rating:"]
         [:div
          (doall
           (for [option options]
             ^{:key (str (:rating option) "-"
                         (:uuid (nth questions current-index)) "-"
                         current-index)}
             [option-picker questions current-index option]))]
         [:p "The trend for this rating:"]
         [:div
          (doall
           (for [trend trend-options]
             ^{:key (str (:title trend) "-"
                         (:uuid (nth questions current-index)) "-"
                         current-index)}
             [trend-picker questions current-index trend]))]
         [question-navigator questions current-index max-index]]])]))
