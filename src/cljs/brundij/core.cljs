(ns brundij.core
  (:require [brundij.config :as config]
            [brundij.ds :refer [initialize-ds!]]
            [brundij.events :as events]
            [brundij.router :refer [init-routes! router-component]]
            [brundij.styles :refer [initialize-styles]]
            [re-frame.core :as re-frame]
            [reagent.dom :as rdom]))

(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn get-current-online-status! []
  (.-onLine (.-navigator js/window)))

(defn ^:dev/after-load mount-root []
  (re-frame/clear-subscription-cache!)
  (let [root-el (.getElementById js/document "app")]
    (rdom/unmount-component-at-node root-el)
    (rdom/render [router-component] root-el)))

(defn add-online-status-listener! []
  (.addEventListener js/window "online"
                     #(re-frame/dispatch
                        [::events/set-is-online (get-current-online-status!)]))
  (.addEventListener js/window "offline"
                     #(re-frame/dispatch
                        [::events/set-is-online (get-current-online-status!)])))

(defn ^:export init []
  (init-routes!)
  (initialize-ds!)
  (re-frame/dispatch-sync [::events/initialize-db])
  (re-frame/dispatch-sync [::events/set-is-online (get-current-online-status!)])
  (initialize-styles)
  (dev-setup)
  (add-online-status-listener!)
  (mount-root))
