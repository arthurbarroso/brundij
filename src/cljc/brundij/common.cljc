(ns brundij.common
  (:require #?(:clj  [datahike.api :as d]
               :cljs [datascript.core :as d])
            [brundij.uuids :as uuids]
            [brundij.date :as date]))


(defn mount-question-item-tx [question health-id]
  [{:question/uuid (uuids/generate-uuid)
    :question/content (:content question)
    :question/created_at (date/get-inst)
    :db/id (:id question)}
   {:db/id [:health/uuid health-id]
    :health/question (:id question)}])

(defn mount-questions-txs [health-id questions]
  (let [question-ids (vec (for [_i (range (count questions))] (d/tempid -1)))]
    (->> questions
         (map-indexed
           (fn [index item]
             (let [question (merge item {:id (nth question-ids index)})]
              (mount-question-item-tx question health-id))))
         (flatten))))
