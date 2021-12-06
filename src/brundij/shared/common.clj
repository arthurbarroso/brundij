(ns brundij.shared.common)

(defn extract-tx-tempid [created-tx]
  (-> created-tx :tempids first second))
