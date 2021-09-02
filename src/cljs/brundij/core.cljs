(ns brundij.core
  (:require [brundij.config :as config]
            [re-frame.core :as re-frame]
            [reagent.dom :as rdom]))

(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn ^:dev/after-load mount-root []
  (re-frame/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [:div [:h1 "Hi there!"]] root-el)))

(defn init []
  (dev-setup)
  (mount-root))
