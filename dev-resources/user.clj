(ns user
  (:require [brundij.date :as date]
            [brundij.server]
            [brundij.uuids :as uuids]
            [environ.core :refer [env]]
            [hawk.core :as hawk]
            [integrant.core :as ig]
            [integrant.repl :as ig-repl]
            [integrant.repl.state :as state]
            [muuntaja.core :as m]))

(def config-map
  {:server/jetty {:handler (ig/ref :brundij/app)
                  :port (Integer/parseInt (env :port))}
   :brundij/app {:database (ig/ref :db/postgres)}
   :db/postgres {:host (env :database-host)
                 :port (env :database-port)
                 :user (env :database-user)
                 :password (env :database-password)
                 :dbname (env :database-name)}})

(ig-repl/set-prep!
  (fn [] config-map))

(def go ig-repl/go)
(def halt ig-repl/halt)
(def reset ig-repl/reset)
(def reset-all ig-repl/reset-all)

(def app (-> state/system :brundij/app))
(def db (-> state/system :db/postgres))

(defn- clojure-file? [_ {:keys [file]}]
  (re-matches #"[^.].*(\.clj|\.edn)$" (.getName file)))

(defn- auto-reset-handler [ctx _event]
  (binding [*ns* *ns*]
    (reset)
    ctx))

(defn auto-reset
  "Copied from Duct
  https://github.com/duct-framework/core/blob/master/src/duct/core/repl.clj"
  []
  (hawk/watch! [{:paths ["src/clj" "src/cljc" "dev-resources/user.clj"]
                 :filter clojure-file?
                 :handler auto-reset-handler}]))

(comment
  (go)
  (reset-all)
  (->
    (app {:request-method :post :uri "/v1/healths"})
    (m/decode-response-body)))
