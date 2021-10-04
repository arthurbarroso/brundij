(ns brundij.views.answers.create
  (:require [brundij.components.button :refer [button]]
            [brundij.components.link :refer [link]]
            [brundij.components.template :refer [template]]
            [brundij.events :as events]
            [brundij.views.answers.events :as aevts]
            [brundij.views.answers.subs :as subs]
            [re-frame.core :as re-frame]
            [stylefy.core :as stylefy :refer [use-style]]))

(def question-link-base {:color "#333"})

(defn question-link-styles [possible?]
  (if (true? possible?)
    (merge question-link-base {:cursor "pointer"})
    (merge question-link-base {:color "#ccc"})))

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

(def options [{:rating 1
               :symbol "🔴"
               :title "Bad"}
              {:rating 2
               :symbol "🟡"
               :title "Ok"}
              {:rating 3
               :symbol "🟢"
               :title "Good"}])

(def trend-options [{:symbol "⬇️"
                     :title "Trending down"
                     :trend "down"}
                    {:symbol "➡️"
                     :title "Stable"
                     :trend "stable"}
                    {:symbol "⬆️"
                     :title "Trending up"
                     :trend "up"}])

(defn parse-questions-for-handler [questions]
  (map (fn [q] {:question-id (:uuid q) :rating (:rating q) :trend (:trend q)}) questions))

(defn create-answers []
  (let [questions @(re-frame/subscribe [::subs/pre-existing-questions])
        max-index (count questions)
        current-index @(re-frame/subscribe [::subs/current-question-index])]
    (if (= 0 (count questions))
      [template
       [:div (use-style {:display "flex"
                         ::stylefy/media {{:max-width "768px"} {:flex-direction "column"}}})
        [:div (use-style {:max-width "50%"
                          ::stylefy/media {{:max-width "768px"} {:max-width "100%"}}})
         [:div (use-style {:margin-top "10%"})]
         [:h3 (use-style {:font-size "3rem" :margin 0})
          "Oops! Looks like either the selected health check has no questions 
          or there is no health check selected at all 🐛"]
         [link
          {:on-click #(re-frame/dispatch [::events/navigate :home])
           :text "Go back to home page"
           :title "Navigate to home page"}]]]]
      [template
       [:div (use-style {:margin-top "10%" :display "flex"
                         ::stylefy/media {{:max-width "768px"} {:flex-direction "column"}}})
        [:div (use-style {:max-width "50%"
                          ::stylefy/media {{:max-width "768px"} {:max-width "100%"}}})
         [:h3 (use-style {:font-size "3rem" :margin 0})
          "Answering health check questions 🥝"]
         [:h4 (str "Question/topic: " (:content (nth questions current-index)))]
         [:p "Your rating:"]
         [:div (use-style {:display "flex" :align-items "center"
                           :justify-content "space-between"})
          (doall
            (for [option options]
              ^{:key (str (:rating option) "-"
                          (:uuid (nth questions current-index)) "-"
                          current-index)}
              [:button (use-style
                         (option-styles
                           (:rating (nth questions current-index))
                           (:rating option))
                         {:title (:title option)
                          :on-click
                            #(re-frame/dispatch
                               [::aevts/update-question-rating-at-index
                                {:rating (:rating option)
                                 :index current-index}])})
               [:p (use-style {:margin 0}) (:symbol option)]]))]
         [:p "The trend for this rating:"]
         [:div (use-style {:display "flex"
                           :align-items "center"
                           :justify-content "space-between"})
          (doall
            (for [trend trend-options]
              ^{:key (str (:title trend) "-"
                          (:uuid (nth questions current-index)) "-"
                          current-index)}
              [:button
               (use-style
                 (trend-styles (:trend (nth questions current-index))
                               (:trend trend))
                 {:title (:title trend)
                  :on-click #(re-frame/dispatch
                               [::aevts/update-question-trend-at-index
                                {:trend (:trend trend)
                                 :index current-index}])})
               (:symbol trend)]))]
         [:div (use-style {:display "flex"
                           :align-items "center"
                           :justify-content "space-between"})
          [:p
           (use-style
             (question-link-styles (> current-index 0))
             {:on-click #(when (> current-index 0)
                           (re-frame/dispatch
                             [::aevts/decrement-current-question-index]))})
           "Previous question"]
          [:p
           (use-style
             (question-link-styles (< current-index max-index))
             {:on-click #(when (< current-index max-index)
                           (re-frame/dispatch
                             [::aevts/increment-current-question-index]))})
           "Next question"]]
         [button {:on-click
                    #(re-frame/dispatch
                       [::aevts/create-answers
                        (parse-questions-for-handler questions)])
                  :text "Submit answers"
                  :extra-styles {:width "100%"
                                 :color "#333"}}]]
        [:div (use-style
                {::stylefy/media {{:max-width "768px"} {:display "none"}}})
         [:img (use-style {:max-width "600px"}
                          {:src "assets/button.png"})]]]])))
