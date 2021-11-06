(ns brundij.questions.events
  (:require [brundij.date :as date]
            [brundij.shared.events :as events]
            [re-frame.core :as re-frame]
            [brundij.shared.questions :refer [base-questions]]))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_]
   {:health-uuid ""
    :questions base-questions}))

(re-frame/reg-event-db
 ::add-question
 (fn [db [_ question]]
   (let [questions (:questions db)
         idxs (map (fn [[_k v]]
                     (:index v)) questions)
         max-idx (apply max idxs)
         next-idx (inc max-idx)
         new-questions (assoc questions
                              next-idx
                              (merge question
                                     {:index next-idx}))]
     (assoc db :questions new-questions))))

(re-frame/reg-event-db
 ::remove-question-by-uuid
 (fn [db [_ index]]
   (let [current-questions (:questions db)]
     (assoc db :questions (dissoc current-questions index)))))

(re-frame/reg-event-db
 ::change-question-input
 (fn [db [_ new-input]]
   (assoc db :question-input new-input)))

(defn parse-questions-for-post [questions]
  (->> questions
       (map
        (fn [[_k v]]
          v))))

(re-frame/reg-event-fx
 ::create-questions
 (fn [{:keys [db]} [_ questions]]
   {:db (assoc db :loading true)
    :http-cljs {:method :post
                :url "/v1/questions/cookies"
                :timeout 8000
                :params {:questions (parse-questions-for-post questions)}
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
    ::events/navigate! ["/"]}))
