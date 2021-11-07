(ns brundij.server
  (:require [brundij.database :as database]
            [brundij.router :as router]
            [integrant.core :as ig]
            [ring.adapter.jetty :as jetty]
            [taoensso.timbre :as timbre :refer [info]]
            [clojure.java.io :as io]
            [aero.core :refer [read-config]]))

(defn app
  [environment]
  (router/routes environment))

(defmethod ig/prep-key :server/jetty
  [_ config]
  (merge config {:port 4000}))

(defmethod ig/init-key :server/jetty
  [_ {:keys [handler port]}]
  (info (str "\n[Brundij]: server running on port: " port))
  (jetty/run-jetty handler {:port port :join? false}))

(defmethod ig/init-key :brundij/app
  [_ config]
  (info "\n[Brundij]: started application")
  (app config))

(defmethod ig/init-key :db/postgres
  [_ config]
  (info "\n[Brundij]: configured db")
  (database/create-connection config))

(defmethod ig/halt-key! :server/jetty
  [_ jetty]
  (.stop jetty))

(defn -main []
  (let [environment-vars (read-config (io/resource "config.edn"))
        config-map
        {:server/jetty {:handler (ig/ref :brundij/app)
                        :port (:port environment-vars)}
         :brundij/app {:database (ig/ref :db/postgres)}
         :db/postgres {:host (:database_host environment-vars)
                       :port (:database_port environment-vars)
                       :user (:database_user environment-vars)
                       :backend (:database_backend environment-vars)
                       :id (:database_id environment-vars)
                       :password (:database_password environment-vars)
                       :dbname (:database_name environment-vars)}}]
    (-> config-map ig/prep ig/init)))
