(ns brundij.database
  (:require [datahike-postgres.core]
            [datahike.api :as d]))

(defn create-config [{:keys [host port user password dbname]}]
  {:store {:backend :pg
           :host host
           :port port
           :username user
           :password password
           :path (str "/" dbname)}})

(def schema [;;health-check
             ;;health/uuid
             {:db/ident :health/uuid
              :db/valueType :db.type/uuid
              :db/unique :db.unique/identity
              :db/cardinality :db.cardinality/one}
             ;;health/created_at
             {:db/ident :health/created_at
              :db/valueType :db.type/instant
              :db/cardinality :db.cardinality/one}
             ;;health/question
             {:db/ident :health/question
              :db/valueType :db.type/ref
              :db/cardinality :db.cardinality/many}
             ;;questions
             ;;question/uuid
             {:db/ident :question/uuid
              :db/valueType :db.type/uuid
              :db/unique :db.unique/identity
              :db/cardinality :db.cardinality/one}
             ;;question/created_at
             {:db/ident :question/created_at
              :db/valueType :db.type/instant
              :db/cardinality :db.cardinality/one}
             ;;question/content
             {:db/ident :question/content
              :db/valueType :db.type/string
              :db/cardinality :db.cardinality/one}
             ;;question/answer
             {:db/ident :question/answer
              :db/valueType :db.type/ref
              :db/cardinality :db.cardinality/many}
             ;;answers
             ;;answer/uuid
             {:db/ident :answer/uuid
              :db/valueType :db.type/uuid
              :db/unique :db.unique/identity
              :db/cardinality :db.cardinality/one}
             ;;answer/rating
             {:db/ident :answer/rating
              :db/valueType :db.type/bigint
              :db/cardinality :db.cardinality/one}
             ;;answer/created_at
             {:db/ident :answer/created_at
              :db/valueType :db.type/instant
              :db/cardinality :db.cardinality/one}])

(defn create-database [config]
  (d/create-database config))

(defn create-connection [environment]
  (let [config (create-config environment)]
    (when-not (d/database-exists? config)
      (create-database config))
    (let [connection (d/connect config)]
      (d/transact connection schema)
      connection)))
