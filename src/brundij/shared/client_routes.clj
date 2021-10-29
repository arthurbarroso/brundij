(ns brundij.shared.client-routes
  (:require [brundij.shared.mount :refer [mount-serve]]))

(defn routes [env]
  [""
   ["/" (mount-serve env "landing.html")]
   ["/create" (mount-serve env "create.html")]
   ["/questions" (mount-serve env "questions.html")]
   ["/success" (mount-serve env "success.html")]])
