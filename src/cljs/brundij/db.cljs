(ns brundij.db)

(def base-questions
  [{:title "Support" :id (random-uuid)}
   {:title "Teamwork" :id (random-uuid)}
   {:title "Pawns or Players" :id (random-uuid)}
   {:title "Mission" :id (random-uuid)}
   {:title "Codebase health" :id (random-uuid)}
   {:title "Suitable process" :id (random-uuid)}
   {:title "Delivering value" :id (random-uuid)}
   {:title "Learning" :id (random-uuid)}
   {:title "Speed" :id (random-uuid)}
   {:title "Easy to release" :id (random-uuid)}
   {:title "Fun" :id (random-uuid)}])

(def default-db
  {:name "brundij"
   :current-route nil
   :loading false
   :error nil
   :health-uuid nil
   :questions base-questions
   :question-input nil})
