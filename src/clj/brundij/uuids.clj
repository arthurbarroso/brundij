(ns brundij.uuids)

(defn generate-uuid []
  (java.util.UUID/randomUUID))

(defn uuid-from-string [s]
  (java.util.UUID/fromString s))
