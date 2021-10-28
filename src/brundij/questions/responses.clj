(ns brundij.questions.responses)

(def question-creation
  {:db/id integer?
   :question/content string?
   :question/created_at inst?
   :question/uuid uuid?})

(def bulk-question-creation
  {:db/id integer?
   :health/created_at inst?
   :health/question
   [{:question/uuid uuid?
     :db/id integer?
     :question/content string?}]})
