(ns brundij.healths.render
  (:require [brundij.shared.render :as render]
            [brundij.healths.create :as create]
            [brundij.healths.results :as results]
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

(defn ^:export hydrate-results []
  (render/hydrate-no-event results/results-view))

(defn pre-render-results []
  (render/pre-render
   (dom-server/render-to-string
    [results/results-view])
   "brundij.healths.render.hydrate_results();"
   "results"
   "<script src=\"/assets/js/shared.js\"></script>
    <script src=\"/assets/js/healths.js\"></script>"
   "Brundij"
   "<link rel=\"stylesheet\" href=\"/assets/css/brundij/healths/healths.css\">"))
