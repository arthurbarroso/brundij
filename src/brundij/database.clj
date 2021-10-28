(ns brundij.database
  (:require [brundij.schema :refer [schema]]
            [datahike-postgres.core]
            [datahike.api :as d]))

(defn create-config [{:keys [backend id user password host port dbname]}]
  (if (= backend "mem")
    {:store {backend :mem :id id}}
    {:store {:backend :pg
             :host host
             :port port
             :username user
             :password password
             :path (str "/" dbname)}}))

(defn create-database [config]
  (d/create-database config))

(defn create-connection [environment]
  (let [config (create-config environment)]
    (when-not (d/database-exists? config)
      (create-database config))
    (let [connection (d/connect config)]
      (d/transact connection (schema))
      connection)))
