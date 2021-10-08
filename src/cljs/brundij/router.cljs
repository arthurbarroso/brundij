(ns brundij.router
  (:require [brundij.components.error-boundary :refer [err-boundary]]
            [brundij.events :as events]
            [brundij.lazy :refer (lazy-component)]
            [brundij.styles :refer [app-base-style]]
            [brundij.subs :as subs]
            [brundij.views.landing :refer [landing-page]]
            [re-frame.core :refer [dispatch subscribe]]
            [reagent.core :as r]
            [reitit.coercion.spec :as rss]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [spec-tools.data-spec :as ds]
            [stylefy.core :refer [use-style]]
            ["react-toastify" :refer (ToastContainer)]
            ["react" :as react]))

(def landing (r/reactify-component landing-page))
#_{:clj-kondo/ignore [:unresolved-namespace]}
(def create-check (lazy-component brundij.views.checks.create/create-check-view))
#_{:clj-kondo/ignore [:unresolved-namespace]}
(def create-questions (lazy-component brundij.views.questions.create/create-questions-view))
#_{:clj-kondo/ignore [:unresolved-namespace]}
(def question-creation-success (lazy-component brundij.views.questions.success/success-view))
#_{:clj-kondo/ignore [:unresolved-namespace]}
(def create-answers (lazy-component brundij.views.answers.create/create-answers))
#_{:clj-kondo/ignore [:unresolved-namespace]}
(def answers-creation-success (lazy-component brundij.views.answers.success/answers-success-view))
#_{:clj-kondo/ignore [:unresolved-namespace]}
(def download-check-results (lazy-component brundij.views.checks.download/download-check-results-view))
#_{:clj-kondo/ignore [:unresolved-namespace]}
(def list-checks (lazy-component brundij.views.checks.list/list-checks-view))

(def routes
  ["/"
   [""
    {:name :home
     :view landing
     :link-text "Home"
     :parameters {:query {(ds/opt :id) string?}}}]
   ["create"
    {:name :create
     :view create-check
     :link-text "Create health check"}]
   ["questions"
    {:name :questions
     :view create-questions
     :link-text "Create question"}]
   ["success"
    {:name :success
     :view question-creation-success
     :link-text "Success"}]
   ["answers"
    {:name :answers
     :view create-answers
     :link-text "Create answers"}]
   ["answers-success"
    {:name :answers-success
     :view answers-creation-success
     :link-text "Answers success"}]
   ["results"
    {:name :export-results
     :view download-check-results
     :link-text "Export results"}]
   ["list"
    {:name :list-checks
     :view list-checks
     :link-text "List published health checks"}]])

(def server-route-matcher
  {:create {:view create-check}
   :home {:view landing}
   :questions {:view create-questions}
   :answers {:view create-answers}
   :success {:view question-creation-success}
   :answers-success {:view answers-creation-success}
   :results {:view download-check-results}
   :list {:view list-checks}})

(def router
  (rf/router routes {:data {:coercion rss/coercion}}))

(defn on-navigate [new-match]
  (when new-match
    (dispatch [::events/navigated new-match])))

(defn init-routes! []
  (rfe/start! router on-navigate {:use-fragment false}))

(defn decide-component [name view cname]
  (cond
    (not (nil? view)) [:> view]
    (not (nil? name)) [:> (-> server-route-matcher cname :view)]
    (nil? name) [:> landing]))

(defn router-component []
  (let [current-route @(subscribe [::subs/current-route])
        route-name (-> current-route :name)
        cname (-> current-route :data :name)
        route-view (-> current-route :data :view)
        query-params-id (-> current-route :parameters :query :id)]
    (when (and (= route-name :home)
               (not (nil? query-params-id)))
      (dispatch [::events/fetch-health-questions query-params-id]))
    [:<>
     [:> ToastContainer]
     [:div (use-style app-base-style)
      [:> react/Suspense {:fallback (r/as-element [:div "Loading ..."])}
       (decide-component route-name route-view cname)]]]))
