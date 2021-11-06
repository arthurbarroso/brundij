(ns brundij.shared.error.render
  (:require [brundij.shared.render :as render]
            [brundij.shared.error.page :as error]
            [reagent.dom.server :as dom-server]))

(defn ^:export hydrate-error []
  (render/hydrate-no-event error/error-view))

(defn pre-render-error []
  (render/pre-render
   (dom-server/render-to-string
    [error/error-view])
   "brundij.shared.error.render.hydrate_error();"
   "error"
   "<script src=\"/assets/js/shared.js\"></script>
   <script src=\"/assets/js/error.js\"></script>"
   "Brundij"
   ""))
