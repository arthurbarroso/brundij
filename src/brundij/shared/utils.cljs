(ns brundij.shared.utils
  (:require [clojure.string :refer [includes? replace]]
            [reagent.cookies :as cookies]))

(defn get-local-url []
  (if (nil? (type js/window))
    ""
    (.-href js/window.location)))

(defn mount-shareable-link [health-id]
  (let [local-url (get-local-url)]
    (condp #(includes? %2 %1) local-url
      "/success" (replace local-url "/success" (str "?id=" health-id))
      "/list" (replace local-url "/list" (str "?id=" health-id))
      (str local-url "?id=" health-id))))

(defn get-health-id []
  (if (nil? (type js/window))
    ""
    (->> (.-search (.-location js/window))
         (re-find #"(?![\\?\\q\\=]).*"))))

(defn set-cookie! [k content & opts]
  (cookies/set! k content opts))

(defn get-cookie! [k]
  (cookies/get k))

(defn parse-json [j]
  (-> j
      js->clj))

(defn json-parse [s]
  (.parse js/JSON s))

(defn ^:export parse-json-cookie [cookie-name]
  (-> cookie-name
      get-cookie!
      js/decodeURIComponent
      json-parse))

(defn parse-cookie-string [s]
  (if (nil? s)
    ""
    (replace s "+" " ")))
