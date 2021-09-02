(require '[integrant.core :as ig]
         '[integrant.repl :as ig-repl]
         '[environ.core :refer [env]]
         '[datahike.api :as d])

(def config-map
  {:server/jetty {:handler (ig/ref :brundij/app)
                  :port (Integer/parseInt (env :port))}
   :brundij/app {:database (ig/ref :db/postgres)
                 :auth (ig/ref :auth/env)}
   :db/postgres {:host (env :database-host)
                 :port (env :database-port)
                 :user (env :database-user)
                 :password (env :database-password)
                 :dbname (env :database-name)}
   :auth/env {:jwt-secret (env :jwt-secret)}})

(def reset-all ig-repl/reset-all)

(defn clear-database! []
  (let [config {:store {:backend :pg
                        :host (get-in config-map [:db/postgres :host])
                        :port (get-in config-map [:db/postgres :port])
                        :username (get-in config-map [:db/postgres :user])
                        :password (get-in config-map [:db/postgres :password])
                        :path (str "/" (get-in config-map [:db/postgres :dbname]))}}]
    (d/delete-database config)
    (d/create-database config)))

{:global-fixture (fn [f]
                   (clear-database!)
                   (reset-all)
                   (f))
 :selectors {:integration :integration}}
