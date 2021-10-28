(ns brundij.shared.utils
  (:require [clojure.string :refer [includes? replace]]))

(defn mount-shareable-link [health-id]
  (let [local-url (.-href js/window.location)]
    (condp #(includes? %2 %1) local-url
      "/success" (replace local-url "/success" (str "?id=" health-id))
      "/list" (replace local-url "/list" (str "?id=" health-id))
      (str local-url "?id=" health-id))))

(defn get-health-id []
  (if (nil? (type js/window))
    ""
    (->> (.-search (.-location js/window))
         (re-find #"(?![\\?\\q\\=]).*"))))
