(ns util.pre-render
  (:require [clojure.java.shell :refer [sh]]))

(defn hook
  {:shadow.build/stage :flush}
  [build-state & _args]
  (sh "./render.sh")
  build-state)
