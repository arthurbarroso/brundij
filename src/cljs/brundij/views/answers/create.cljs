(ns brundij.views.answers.create
  (:require [brundij.components.button :refer [button]]
            [brundij.components.template :refer [template]]
            [brundij.events :as events]
            [brundij.subs :as subs]
            [re-frame.core :as re-frame]
            [stylefy.core :as stylefy :refer [use-style]]))

(def question-link-base {:color "#333"})

(defn question-link-styles [possible?]
  (if (true? possible?)
    (merge question-link-base {:cursor "pointer"})
    (merge question-link-base {:color "#ccc"})))

(defn option-styles [current-rating option]
  (println {:option-current current-rating
            :option-option option})
  (if (= current-rating option)
    {:cursor "pointer" :font-size "1.5rem"
     :border "1px solid red"
     :border-radius "50%"}
    {:cursor "pointer" :font-size "1.5rem"
     :border "none"}))

(def options [{:rating 1
               :symbol "🔴"}
              {:rating 2
               :symbol "🟡"}
              {:rating 3
               :symbol "🟢"}])

(defn parse-questions-for-handler [questions]
  (map (fn [q] {:question-id (:uuid q) :rating (:rating q)}) questions))

(defn create-answers []
  (let [questions @(re-frame/subscribe [::subs/pre-existing-questions])
        max-index (count questions)
        current-index @(re-frame/subscribe [::subs/current-question-index])]
    (if (= 0 (count questions))
      [template
       [:h3 (use-style {:font-size "3rem" :margin 0})
        "Looks like either the selected health check has no questions 
         or there is no health check selected at all 🐛"]
       [:p
        (use-style {:cursor "pointer"}
                   {:on-click #(re-frame/dispatch [::events/navigate :home])})
        "Go back to home page"]]
      [template
       [:h3 (use-style {:font-size "3rem" :margin 0})
        "Answering health check questions 🥝"]
       [:h4 (str "Question/topic: " (:content (nth questions current-index)))]
       [:p "Your rating:"]
       [:div (use-style {:display "flex" :align-items "center"
                         :justify-content "space-between"
                         :max-width "40%"})
        (doall
          (for [option options]
            ^{:key (str (:rating option) "-" (:uuid (nth questions current-index)) "-" current-index)}
            [:div (use-style
                    (option-styles
                      (:rating (nth questions current-index))
                      (:rating option))
                    {:on-click
                       #(re-frame/dispatch [::events/update-question-rating-at-index
                                            {:rating (:rating option)
                                             :index current-index}])})
             [:p (use-style {:margin 0}) (:symbol option)]]))]
       [:div (use-style {:display "flex"
                         :align-items "center"
                         :max-width "40%"
                         :justify-content "space-between"})
        [:p
         (use-style
           (question-link-styles (> current-index 0))
           {:on-click #(when (> current-index 0)
                         (re-frame/dispatch [::events/decrement-current-question-index]))})
         "Prior question"]
        [:p
         (use-style
           (question-link-styles (< current-index max-index))
           {:on-click #(when (< current-index max-index)
                         (re-frame/dispatch [::events/increment-current-question-index]))})
         "Next question"]]
       [button {:on-click #(re-frame/dispatch [::events/create-answers (parse-questions-for-handler questions)])
                :text "Submit answers"
                :extra-styles {:max-width "40%"
                               :color "#333"}}]])))
