(ns brundij.db)

(def base-questions
  [{:content "Support" :id (random-uuid)}
   {:content "Teamwork" :id (random-uuid)}
   {:content "Pawns or Players" :id (random-uuid)}
   {:content "Mission" :id (random-uuid)}
   {:content "Codebase health" :id (random-uuid)}
   {:content "Suitable process" :id (random-uuid)}
   {:content "Delivering value" :id (random-uuid)}
   {:content "Learning" :id (random-uuid)}
   {:content "Speed" :id (random-uuid)}
   {:content "Easy to release" :id (random-uuid)}
   {:content "Fun" :id (random-uuid)}])

(def default-db
  {:name "brundij"
   :current-route nil
   :loading false
   :error nil
   :health-uuid nil
   :questions base-questions
   :question-input nil
   :health-id-input nil
   :pre-existing-input? false
   :pre-existing-questions []})
