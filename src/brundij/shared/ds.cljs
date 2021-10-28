(ns brundij.shared.ds
  (:require [brundij.schema :refer [schema]]
            [datascript.core :as d]
            [datascript.transit :as dt]
            [reagent.core :as r]))

(defonce database (r/atom (d/empty-db (schema))
                          :meta {:listeners (atom {})}))

(defn persist!
  "Persists a datascript database to localStorage"
  [db]
  (.setItem (.-localStorage js/window) "datascript-brundij-database" (dt/write-transit-str db)))

(defn initialize-ds!
  "Initializes datascript database. Will create a database from the data on localStoragge if possible. Also listens for changes and persists those"
  []
  (let [persisted (.getItem (.-localStorage js/window) "datascript-brundij-database")
        transit-persisted (dt/read-transit-str persisted)]
    (when (not (nil? persisted))
      (d/reset-conn! database transit-persisted))
    (d/listen! database :persistence
               (fn [tx-report]
                 (when-let [db (:db-after tx-report)]
                   (js/setTimeout #(persist! db) 0))))))

(defn transact! [data]
  (if (seq? data)
    (d/transact database data)
    (d/transact database [data])))

(defn retract-health-entity! [uuid]
  (d/transact database [[:db.fn/retractEntity [:health/uuid uuid]]]))

(defn get-health-checks []
  (d/q '[:find (pull ?e [* {:health/question [:question/uuid
                                              :question/created_at
                                              :question/content]}])
         :where [?e :health/uuid _]]
       @database))

(defn get-published-health-checks []
  (d/q '[:find (pull ?e [*])
         :where [?e :published/uuid _]]
       @database))
