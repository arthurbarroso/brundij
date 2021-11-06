(ns brundij.questions.render
  (:require [brundij.shared.render :as render]
            [brundij.questions.create :as create]
            [reagent.dom.server :as dom-server]
            [brundij.questions.events :as events]
            [brundij.questions.success :as success]))

(defn ^:export hydrate-create []
  (render/hydrate create/create-questions-view ::events/initialize-db))

(defn pre-render-create []
  (render/pre-render
   (dom-server/render-to-string
    [create/create-questions-view])
   "brundij.questions.render.hydrate_create();"
   "questions"
   "<script src=\"/assets/js/shared.js\"></script>
    <script src=\"/assets/js/questions.js\"></script>"
   "Brundij"
   "<link rel=\"stylesheet\" href=\"/assets/css/brundij/questions/questions.css\">"))

;; Success view

(defn ^:export hydrate-success []
  (render/hydrate success/success-view ::events/initialize-db))

(defn pre-render-success []
  (render/pre-render
   (dom-server/render-to-string
    [success/success-view])
   "brundij.questions.render.hydrate_success();"
   "success"
   "<script src=\"/assets/js/shared.js\"></script>
    <script src=\"/assets/js/questions.js\"></script>"
   "Brundij"
   "<link rel=\"stylesheet\" href=\"/assets/css/brundij/questions/questions.css\">"))
