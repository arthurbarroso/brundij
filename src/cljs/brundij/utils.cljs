(ns brundij.utils
  (:require [brundij.subs :as subs]
            [cljs.reader :as reader]
            [clojure.string :refer [replace includes?]]
            [re-frame.core :as re-frame]
            [reitit.frontend.easy :refer [push-state]]))

(defn ^:export js->edn [jso]
  (js->clj jso))

(defn ^:export out-navigate [route]
  (push-state (reader/read-string route) nil nil))

(defn rendered? []
  (not (nil? (.getElementById js/document "app"))))

(defn ^:export ready? []
  (and
    (rendered?)
    (= (.-readyState js/document) "complete")))

(defn ^:export export-db []
  (let [app-db @(re-frame/subscribe [::subs/db])]
    (clj->js app-db)))

(defn dissoc-local-health-db-ids [health]
  (-> health
      (dissoc :db/id)
      (assoc :health/question
               (->> (:health/question health)
                    (map #(dissoc % :db/id))))))

(defn mount-shareable-link [health-id]
  (let [local-url (.-href js/window.location)]
    (condp #(includes? %2 %1) local-url
      "/success" (replace local-url "/success" (str "?id=" health-id))
      "/list" (replace local-url "/list" (str "?id=" health-id))
      (str local-url "?id=" health-id))))
