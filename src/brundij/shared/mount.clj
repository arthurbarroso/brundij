(ns brundij.shared.mount
  (:require [clojure.java.io :as io]))

(defn mount-serve [_env html-name]
  {:get
   {:handler (fn [_req]
               {:body
                (slurp (io/resource html-name))})}})
