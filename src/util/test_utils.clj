(ns util.test-utils
  (:require [integrant.repl :as ig-repl]
            [taoensso.timbre :as timbre]
            [brundij.server]
            [integrant.core :as ig]
            [clojure.java.io :as io]
            [aero.core :refer [read-config]])
  (:gen-class))

(def environment-vars
  (read-config (io/resource "config.edn") {:profile :test}))

(def config-map
  {:server/jetty {:handler (ig/ref :brundij/app)
                  :port (:port environment-vars)}
   :brundij/app {:database (ig/ref :db/postgres)}
   :db/postgres {:host (:database_host environment-vars)
                 :port (:database_port environment-vars)
                 :user (:database_user environment-vars)
                 :backend (:database_backend environment-vars)
                 :id (:database_id environment-vars)
                 :password (:database_password environment-vars)
                 :dbname (:database_name environment-vars)}})

(ig-repl/set-prep!
 (fn [] config-map))

(def reset-all ig-repl/reset-all)

(defn start-fixture [config]
  (timbre/set-level! :error)
  (reset-all)
  config)
