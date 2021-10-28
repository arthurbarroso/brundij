(ns brundij.healths.render
  (:require [brundij.shared.render :as render]
            [brundij.healths.create :as create]
            [reagent.dom.server :as dom-server]))

(defn ^:export hydrate-create []
  (render/hydrate-no-event create/create-check-view))

(defn pre-render-create []
  (render/pre-render
   (dom-server/render-to-string
    [create/create-check-view])
   "brundij.healths.render.hydrate_create();"
   "create"
   "<script src=\"/assets/js/shared.js\"></script>
    <script src=\"/assets/js/healths.js\"></script>"
   "Brundij"
   ""))
