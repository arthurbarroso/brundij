(ns brundij.landing.routes
  (:require [brundij.shared.mount :refer [mount-serve]]))

(defn routes [env]
  ["/" (mount-serve env "landing.html")])
