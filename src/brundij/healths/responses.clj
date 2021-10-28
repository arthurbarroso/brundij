(ns brundij.healths.responses
  (:require [spec-tools.data-spec :as ds]))

(def health-creation
  {:db/id integer?
   :health/uuid string?
   :health/created_at inst?})
