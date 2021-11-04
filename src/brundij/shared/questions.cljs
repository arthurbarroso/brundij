(ns brundij.shared.questions
  (:require [brundij.uuids :as uuids]))

(defn question-list-to-hash-map [questions]
  (reduce
   (fn [acc question]
     (assoc acc (:index question)
            question))
   {}
   questions))

(defn sort-questions [questions]
  (->> questions
       (sort-by :question/content)
       (map-indexed (fn [idx i] (merge i {:index idx})))))

(def base-questions
  (->>
   [{:question/content "Support" :question/uuid (uuids/generate-uuid)}
    {:question/content "Teamwork" :question/uuid (uuids/generate-uuid)}
    {:question/content "Pawns or Players" :question/uuid (uuids/generate-uuid)}
    {:question/content "Mission" :question/uuid (uuids/generate-uuid)}
    {:question/content "Codebase health" :question/uuid (uuids/generate-uuid)}
    {:question/content "Suitable process" :question/uuid (uuids/generate-uuid)}
    {:question/content "Delivering value" :question/uuid (uuids/generate-uuid)}
    {:question/content "Learning" :question/uuid (uuids/generate-uuid)}
    {:question/content "Speed" :question/uuid (uuids/generate-uuid)}
    {:question/content "Easy to release" :question/uuid (uuids/generate-uuid)}
    {:question/content "Fun" :question/uuid (uuids/generate-uuid)}]
   sort-questions
   question-list-to-hash-map
   (into (sorted-map))))
