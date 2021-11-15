(ns user
  (:require [brundij.server]
            [integrant.core :as ig]
            [integrant.repl :as ig-repl]
            [integrant.repl.state :as state]
            [clojure.java.io :as io]
            [aero.core :refer [read-config]]))

(def environment-vars
  (read-config (io/resource "config.edn") {:profile :dev}))

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

(def app (-> state/system :brundij/app))
(def go ig-repl/go)
(def reset ig-repl/reset)
(def reset-all ig-repl/reset-all)

(comment
  (go)
  (reset-all))
