(ns brundij.server
  (:require [brundij.database :as database]
            [brundij.router :as router]
            [environ.core :refer [env]]
            [etaoin.api :as etaoin]
            [integrant.core :as ig]
            [ring.adapter.jetty :as jetty]
            [taoensso.timbre :as timbre :refer [info]]))

(defn app
  [environment]
  (router/routes environment))

(defmethod ig/prep-key :server/jetty
  [_ config]
  (merge config {:port (Integer/parseInt (env :port))}))

(defmethod ig/init-key :server/jetty
  [_ {:keys [handler port]}]
  (info (str "\n[Brundij]: server running on port: " port))
  (jetty/run-jetty handler {:port port :join? false}))

(defmethod ig/init-key :brundij/app
  [_ config]
  (info "\n[Brundij]: started application")
  (app config))

(defmethod ig/init-key :brundij/render
  [_ config]
  (when (boolean (Boolean/valueOf (:render? config)))
    (info "\n[Brundij]: starting headless chrome for pre-rendering")
    (etaoin/chrome)))

(defmethod ig/init-key :db/postgres
  [_ config]
  (info "\n[Brundij]: configured db")
  (database/create-connection config))

(defmethod ig/halt-key! :server/jetty
  [_ jetty]
  (.stop jetty))

(defn -main []
  (let [config-map
          {:server/jetty {:handler (ig/ref :brundij/app)
                          :port (Integer/parseInt (env :port))}
           :brundij/app {:database (ig/ref :db/postgres)
                         :renderer (ig/ref :brundij/render)}
           :brundij/render {:render? (env :pre-render)}
           :db/postgres {:host (env :database-host)
                         :port (env :database-port)
                         :user (env :database-user)
                         :backend (env :database-backend)
                         :id (env :database-id)
                         :password (env :database-password)
                         :dbname (env :database-name)}}]
    (-> config-map ig/prep ig/init)))
