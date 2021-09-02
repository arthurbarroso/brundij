(ns brundij.server
  (:require [brundij.database :as database]
            [brundij.router :as router]
            [environ.core :refer [env]]
            [integrant.core :as ig]
            [ring.adapter.jetty :as jetty]))

(defn app
  [environment]
  (router/routes environment))

(defmethod ig/prep-key :server/jetty
  [_ config]
  (merge config {:port (Integer/parseInt (env :port))}))

(defmethod ig/init-key :server/jetty
  [_ {:keys [handler port]}]
  (println (str "\nServer running on port " port))
  (jetty/run-jetty handler {:port port :join? false}))

(defmethod ig/init-key :brundij/app
  [_ config]
  (println "\nStarted app")
  (app config))

(defmethod ig/init-key :db/postgres
  [_ config]
  (println "\nConfigured db")
  (database/create-connection config))

(defmethod ig/halt-key! :server/jetty
  [_ jetty]
  (.stop jetty))

(defn -main
  [config-file]
  (let [config (-> config-file slurp ig/read-string)]
    (-> config ig/prep ig/init)))
