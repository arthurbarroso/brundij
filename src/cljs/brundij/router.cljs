(ns brundij.router
  (:require [brundij.components.error-boundary :refer [err-boundary]]
            [brundij.events :as events]
            [brundij.subs :as subs]
            [brundij.views.answers.create :refer [create-answers]]
            [brundij.views.answers.success :refer [answers-success-view]]
            [brundij.views.checks.create :refer [create-check-view]]
            [brundij.views.checks.download :refer [download-check-results-view]]
            [brundij.views.checks.list :refer [list-checks-view]]
            [brundij.views.landing :refer [landing-page]]
            [brundij.views.questions.create :refer [create-questions-view]]
            [brundij.views.questions.success :refer [success-view]]
            [re-frame.core :refer [dispatch subscribe]]
            [reitit.coercion.spec :as rss]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [spec-tools.data-spec :as ds]
            [stylefy.core :refer [use-style]]
            ["react-toastify" :refer (ToastContainer)]))

(def routes
  ["/"
   ["create"
    {:name :create
     :view create-check-view
     :link-text "Create health check"}]
   [""
    {:name :home
     :view landing-page
     :link-text "Home"
     :parameters {:query {(ds/opt :id) string?}}}]
   ["questions"
    {:name :questions
     :view create-questions-view
     :link-text "Create question"}]
   ["success"
    {:name :success
     :view success-view
     :link-text "Success"}]
   ["answers"
    {:name :answers
     :view create-answers
     :link-text "Create answers"}]
   ["answers-success"
    {:name :answers-success
     :view answers-success-view
     :link-text "Answers success"}]
   ["results"
    {:name :export-results
     :view download-check-results-view
     :link-text "Export results"}]
   ["list"
    {:name :list-checks
     :view list-checks-view
     :link-text "List published health checks"}]])

(def server-route-matcher
  {:create {:view create-check-view}
   :home {:view landing-page}
   :questions {:view create-questions-view}
   :answers {:view create-answers}
   :success {:view success-view}
   :answers-success {:view answers-success-view}
   :results {:view download-check-results-view}
   :list {:view list-checks-view}})

(def router
  (rf/router routes {:data {:coercion rss/coercion}}))

(defn on-navigate [new-match]
  (when new-match
    (dispatch [::events/navigated new-match])))

(defn init-routes! []
  (rfe/start! router on-navigate {:use-fragment false}))

(def app-base-style {:background "#F5F4F4"
                     :display "flex"
                     :justify-content "center"
                     :align-items "center"
                     :height "100vh"})

(defn router-component []
  (let [current-route @(subscribe [::subs/current-route])]
    (println {:r (-> current-route :data :name)})
    [err-boundary
     (when (and (= (-> current-route :data :name) :home)
                (not (nil? (-> current-route :parameters :query :id))))
       (dispatch [::events/fetch-health-questions
                  (-> current-route :parameters :query :id)]))
     (if (not (nil? (-> current-route :data :view)))
       [:<>
        [:> ToastContainer]
        [:div (use-style app-base-style)
         [(-> current-route :data :view)]]]
       [:<>
        [:> ToastContainer]
        [:div (use-style app-base-style)
         [(-> server-route-matcher (-> current-route :data :name) :view)]]])]))
