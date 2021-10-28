(ns brundij.shared.mount
  (:require [clojure.java.io :as io]))

(defn mount-serve [_env html-name]
  {:get
   {:handler (fn [_req]
               (println "mont...")
               (println (io/resource html-name))
               {:body
                (slurp (io/resource html-name))})}})
