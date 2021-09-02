(ns brundij.test-system
  (:require [integrant.repl.state :as state]
            [muuntaja.core :as m]
            [ring.mock.request :as mock]))

(defn endpoint-test
  ([method uri]
   (endpoint-test method uri {}))
  ([method uri opts]
   (let [app (-> state/system :brundij/app)
         request (app (-> (mock/request method uri)
                          (cond-> (:auth opts) (mock/header :Authorization (str "Token " (:token (:auth opts))))
                                  (:body opts) (mock/json-body (:body opts)))))]
     (update request :body (partial m/decode "application/json")))))
