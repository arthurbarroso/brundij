(ns brundij.answers.render
  (:require [brundij.shared.render :as render]
            [brundij.answers.create :as create]
            [brundij.answers.success :as success]
            [brundij.answers.events :as events]
            [reagent.dom.server :as dom-server]))

(defn ^:export hydrate-create []
  (render/hydrate create/create-answers ::events/initialize-db))

(defn pre-render-create []
  (render/pre-render
   (dom-server/render-to-string
    [create/create-answers])
   "brundij.answers.render.hydrate_create();"
   "answer"
   "<script src=\"/assets/js/shared.js\"></script>
    <script src=\"/assets/js/answers.js\"></script>"
   "Brundij"
   "<link rel=\"stylesheet\" href=\"/assets/css/brundij/answers/answers.css\">"))

(defn ^:export hydrate-success []
  (render/hydrate-no-event success/success-view))

(defn pre-render-success []
  (render/pre-render
   (dom-server/render-to-string
    [success/success-view])
   "brundij.answers.render.hydrate_success();"
   "answer-success"
   "<script src=\"/assets/js/shared.js\"></script>
    <script src=\"/assets/js/answers.js\"></script>"
   "Brundij"
   "<link rel=\"stylesheet\" href=\"/assets/css/brundij/answers/answers.css\">"))
