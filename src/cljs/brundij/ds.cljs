(ns brundij.ds
  (:require [datascript.core :as d]
            [datascript.transit :as dt]
            [reagent.core :as r]))

(defonce database (r/atom (d/empty-db)
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
