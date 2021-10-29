(ns brundij.questions.events
  (:require [brundij.common :as common]
            [brundij.date :as date]
            [brundij.shared.events :as events]
            [re-frame.core :as re-frame]
            [brundij.uuids :as uuids]))

(defn remove-from-vec [vect uuid]
  (filter #(not (= uuid (:id %))) vect))

(def base-questions
  [{:content "Support" :id (uuids/generate-uuid)}
   {:content "Teamwork" :id (uuids/generate-uuid)}
   {:content "Pawns or Players" :id (uuids/generate-uuid)}
   {:content "Mission" :id (uuids/generate-uuid)}
   {:content "Codebase health" :id (uuids/generate-uuid)}
   {:content "Suitable process" :id (uuids/generate-uuid)}
   {:content "Delivering value" :id (uuids/generate-uuid)}
   {:content "Learning" :id (uuids/generate-uuid)}
   {:content "Speed" :id (uuids/generate-uuid)}
   {:content "Easy to release" :id (uuids/generate-uuid)}
   {:content "Fun" :id (uuids/generate-uuid)}])

(re-frame/reg-event-db
 ::initialize-db
 (fn [_]
   {:is-online? true
    :health-uuid ""
    :questions base-questions}))

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
 (fn [{:keys [db]} [_ questions]]
   {:db (assoc db :loading true)
    :http-cljs {:method :post
                :url "/v1/questions/cookies"
                :timeout 8000
                :params {:questions questions}
                :on-success [::question-creation-success :health-uuid]
                :on-failure [::question-creation-failure]}}))

(re-frame/reg-event-fx
 ::question-creation-success
 (fn [{:keys [db]} [_ _res health-uuid]]
   {:db (assoc db :loading false)
    ::events/transact! {:published/uuid health-uuid
                        :published/created_at (date/get-inst)}
    ::events/navigate! ["/success"]}))

(re-frame/reg-event-fx
 ::question-creation-failure
 (fn [{:keys [db]} [_ _res]]
   {:db (assoc db :loading false)
    ::events/show-failure-toast
    {:toast-content "Failure creating questions. Please try again later."}
    ::events/navigate! ["/"]}))
