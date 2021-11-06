(ns brundij.shared.events
  (:require [re-frame.core :as re-frame]
            [brundij.shared.utils :as utils]
            [re-frame-cljs-http.http-fx]))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_]
   {}))

(re-frame/reg-cofx
 ::cookies
 (fn [coeffects key]
   (assoc coeffects :cookies (utils/parse-json-cookie key))))

(re-frame/reg-event-fx
 ::navigate
 (fn [_ [_ route params query]]
   {::navigate! [route params query]}))

(re-frame/reg-fx
 ::navigate!
 (fn [[route]]
   (set! (.-location js/window) route)))
