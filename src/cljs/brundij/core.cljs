(ns brundij.core
  (:require [brundij.config :as config]
            [brundij.events :as events]
            [brundij.router :refer [init-routes! router-component]]
            [brundij.styles :refer [initialize-styles]]
            [re-frame.core :as re-frame]
            [reagent.dom :as rdom]))

(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn ^:dev/after-load mount-root []
  (re-frame/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [router-component] root-el)))

(defn init []
  (init-routes!)
  (re-frame/dispatch-sync [::events/initialize-db])
  (initialize-styles)
  (dev-setup)
  (mount-root))
