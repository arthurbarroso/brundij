(ns brundij.styles
  (:require [clojure.string :refer [includes?]]
            [stylefy.core :as stylefy]
            [stylefy.reagent :as stylefy-reagent]))

(def font-family "'Roboto', sans-serif")

(defn initialize-fonts []
  (stylefy/font-face {:font-family font-family
                      :src "url('https://fonts.googleapis.com/css2?family=Roboto&display=swap')"}))

(def app-base-style {:background "#F5F4F4"
                     :display "flex"
                     :justify-content "center"
                     :align-items "center"
                     :height "100vh"})

(defn check-if-stylefy-was-initialized []
  (includes? (.-innerHTML (.querySelector js/document "head"))
             "._stylefy_-"))

(defn initialize-styles
  []
  (initialize-fonts)
  (stylefy/init {:dom (stylefy-reagent/init)}))
