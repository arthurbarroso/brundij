(ns brundij.events
  (:require [ajax.core :as ajax]
            [brundij.db :as db]
            [day8.re-frame.http-fx]
            [day8.re-frame.tracing :refer-macros [fn-traced]]
            [re-frame.core :as re-frame]
            [reitit.frontend.controllers :refer [apply-controllers]]
            [reitit.frontend.easy :refer [push-state]]))

(re-frame/reg-event-db
  ::initialize-db
  #_{:clj-kondo/ignore [:unresolved-symbol]}
  (fn-traced [_ _]
             db/default-db))

;; Reitit events and effects
(re-frame/reg-event-fx
  ::navigate
  (fn [_ [_ route params query]]
    {::navigate! [route params query]}))

(re-frame/reg-fx
  ::navigate!
  (fn [[route params query]]
    (push-state route params query)))

(re-frame/reg-event-db
  ::navigated
  (fn [db [_ new-match]]
    (let [old-match (:current-route db)
          controllers (apply-controllers (:controllers old-match) new-match)]
      (assoc db :current-route (assoc new-match :controllers controllers)))))

;; Http
(re-frame/reg-event-fx
  ::create-health
  (fn [{:keys [db]} [_ _data]]
    {:db (assoc db :loading true)
     :http-xhrio {:method :post
                  :uri "http://localhost:4000/v1/healths"
                  :format (ajax/json-request-format)
                  :timeout 8000
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success [::health-creation-success]
                  :on-failure [::health-creation-failure]}}))

(re-frame/reg-event-fx
  ::health-creation-success
  (fn [{:keys [db]} [_ response]]
    {:db (assoc db
           :loading false
           :health-uuid (:health/uuid response))
     ::navigate! [:questions]}))

(re-frame/reg-event-fx
  ::health-creation-failure
  (fn [_]
    (println "Request failed")))

(re-frame/reg-event-fx
  ::create-questions
  (fn [{:keys [db]} [_ health-id questions]]
    {:db (assoc db :loading true)
     :http-xhrio {:method :post
                  :uri (str "http://localhost:4000/v1/questions/bulk/" health-id)
                  :format (ajax/json-request-format)
                  :timeout 8000
                  :params {:questions questions}
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success [::question-creation-success]
                  :on-failure [::question-creation-failure]}}))

(re-frame/reg-event-fx
  ::question-creation-success
  (fn [{:keys [db]} [_ _]]
    {:db (assoc db :loading false)
     ::navigate! [:success]}))

(re-frame/reg-event-fx
  ::question-creation-failure
  (fn [data]
    (println {:kind "Failure" :response data})))

(re-frame/reg-event-fx
  ::fetch-health-questions
  (fn [{:keys [db]} [_ health-id]]
    {:db (assoc db :loading true)
     :http-xhrio {:method :get
                  :uri (str "http://localhost:4000/v1/healths/" health-id)
                  :format (ajax/json-request-format)
                  :timeout 8000
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success [::fetch-health-questions-success]
                  :on-failure [::fetch-health-questions-failure]}}))

(re-frame/reg-event-fx
  ::fetch-health-questions-success
  (fn [{:keys [db]} [_ response]]
    (let [parsed-questions (map-indexed
                             (fn [index item]
                               {:content (:question/content item)
                                :index index
                                :uuid (:question/uuid item)
                                :rating 1})
                             (:health/question (first response)))]
      {:db (assoc db :loading false :pre-existing-questions (vec parsed-questions))
       ::navigate! [:answers]})))

(re-frame/reg-event-fx
  ::fetch-health-questions-failure
  (fn [data]
    (println {:kind "Failure" :response data})))

(re-frame/reg-event-fx
  ::create-answers
  (fn [{:keys [db]} [_ answers]]
    {:db (assoc db :loading true)
     :http-xhrio {:method :post
                  :uri "http://localhost:4000/v1/answers/bulk"
                  :format (ajax/json-request-format)
                  :timeout 8000
                  :params {:answers answers}
                  :response-format (ajax/json-response-format {:keywords? true})
                  :on-success [::answer-creation-success]
                  :on-failure [::answer-creation-failure]}}))

(re-frame/reg-event-fx
  ::answer-creation-success
  (fn [{:keys [db]} [_ _response]]
    {:db (assoc db :loading false)
     ::navigate! [:answers-success]}))

(re-frame/reg-event-fx
  ::answer-creation-failure
  (fn [data]
    (println {:kind "Failure" :response data})))

;; questions page
(defn remove-from-vec [vect uuid]
  (filter #(not (= uuid (:id %))) vect))

(re-frame/reg-event-db
  ::add-question
  (fn [db [_ question]]
    (let [current-questions (:questions db)]
      (assoc db :questions (conj current-questions question)))))

(re-frame/reg-event-db
  ::remove-question-by-uuid
  (fn [db [_ uuid]]
    (let [current-questions (:questions db)]
      (assoc db :questions (remove-from-vec current-questions uuid)))))

(re-frame/reg-event-db
  ::change-question-input
  (fn [db [_ new-input]]
    (assoc db :question-input new-input)))

;; health page
(re-frame/reg-event-db
  ::change-health-id-input
  (fn [db [_ new-input]]
    (assoc db :health-id-input new-input)))

(re-frame/reg-event-db
  ::toggle-pre-existing-input?
  (fn [db [_ _]]
    (let [current-input-state (:pre-existing-input? db)]
      (assoc db :pre-existing-input? (not current-input-state)))))

(re-frame/reg-event-db
  ::increment-current-question-index
  (fn [db [_ _]]
    (let [current-question-index (:current-question-index db)]
      (assoc db :current-question-index (inc current-question-index)))))

(re-frame/reg-event-db
  ::decrement-current-question-index
  (fn [db [_ _]]
    (let [current-question-index (:current-question-index db)]
      (assoc db :current-question-index (dec current-question-index)))))

(re-frame/reg-event-db
  ::update-question-rating-at-index
  (fn [db [_ {:keys [index rating]}]]
    (let [current-questions (:pre-existing-questions db)
          question-to-update (nth current-questions index)]
      (println {:index index
                :rating rating
                :question-to-update question-to-update})
      (assoc
        db
        :pre-existing-questions
          (assoc
            current-questions
            index
              (assoc question-to-update :rating rating))))))

