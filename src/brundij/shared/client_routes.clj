(ns brundij.shared.client-routes
  (:require [brundij.shared.mount :as mount]
            [brundij.answers.handlers :refer [answer-questions-cookie-handler]]))

(defn routes [env]
  [""
   ["/" (mount/mount-serve env "landing.html")]
   ["/create" (mount/mount-serve env "create.html")]
   ["/questions" (mount/mount-serve env "questions.html")]
   ["/success" (mount/mount-serve env "success.html")]
   ["/results" (mount/mount-serve env "results.html")]
   ["/answered" (mount/mount-serve env "answer-success.html")]
   ["/error" (mount/mount-serve env "error.html")]
   ["/answer/:health-id" (mount/mount-serve-cookies
                          env
                          "answer.html"
                          answer-questions-cookie-handler
                          {:path {:health-id string?}})]])
