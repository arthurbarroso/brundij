(ns brundij.landing.render
  (:require [brundij.shared.render :as render]
            [brundij.landing.page :as landing]
            [reagent.dom.server :as dom-server]))

(defn ^:export hydrate []
  (render/hydrate-no-event landing/landing-page))

(defn pre-render []
  (render/pre-render
   (dom-server/render-to-string
    [landing/landing-page])
   "brundij.landing.render.hydrate();"
   "landing"
   "<script src=\"/assets/js/shared.js\"></script>
    <script src=\"/assets/js/landing.js\"></script>"
   "Brundij"
   "<link rel=\"stylesheet\" href=\"/assets/css/brundij/landing/landing.css\">"))
