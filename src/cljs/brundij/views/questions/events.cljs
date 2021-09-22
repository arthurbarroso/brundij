(ns brundij.views.questions.events
  (:require [ajax.core :as ajax]
            [brundij.common :as common]
            [brundij.config :as config]
            [brundij.date :as date]
            [brundij.events :as events]
            [re-frame.core :as re-frame]))

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

(re-frame/reg-event-fx
  ::add-question-to-ds
  (fn [{:keys [db]} [_ health-id questions]]
    {::events/transact! (concat (common/mount-questions-txs health-id questions)
                                [{:published/uuid health-id
                                  :published/created_at (date/get-inst)}])
     ::events/navigate! [:success]
     :db (assoc db :loading false)}))

(re-frame/reg-event-fx
  ::create-questions
  (fn [{:keys [db]} [_ health-id questions]]
    (if (true? (:is-online? db))
      {:db (assoc db :loading true)
       :http-xhrio {:method :post
                    :uri (str config/url "/v1/questions/bulk/" health-id)
                    :format (ajax/json-request-format)
                    :timeout 8000
                    :params {:questions questions}
                    :response-format (ajax/json-response-format {:keywords? true})
                    :on-success [::question-creation-success :health-uuid health-id]
                    :on-failure [::question-creation-failure]}
       ::events/navigate! [:success]}
      {:dispatch [::add-question-to-ds health-id questions]})))

(re-frame/reg-event-fx
  ::question-creation-success
  (fn [{:keys [db]} [_ _res health-uuid]]
    {:db (assoc db :loading false)
     ::events/transact! {:published/uuid health-uuid
                         :published/created_at (date/get-inst)}}))

(re-frame/reg-event-fx
  ::question-creation-failure
  (fn [{:keys [db]} [_ _res]]
    {:db (assoc db :loading false)
     ::events/show-failure-toast
       {:toast-content "Failure creating questions. Please try again later."}
     ::events/navigate! [:create]}))
