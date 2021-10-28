(ns brundij.uuids)

(defn generate-uuid []
  #?(:clj (. java.util.UUID randomUUID)
     :cljs (random-uuid)))

(defn uuid-from-string [s]
  #?(:clj (java.util.UUID/fromString s)
     :cljs (uuid s)))
