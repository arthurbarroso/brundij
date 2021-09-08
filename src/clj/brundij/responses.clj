(ns brundij.responses)

(def health
  {:db/id integer?
   :health/uuid string?
   :health/created_at inst?})
