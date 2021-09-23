(ns brundij.styles
  (:require [clojure.string :refer [includes?]]
            [stylefy.core :as stylefy]
            [stylefy.reagent :as stylefy-reagent]))

(def font-family "'Roboto', sans-serif")

(defn initialize-fonts []
  (stylefy/font-face {:font-family font-family
                      :src "url('/fonts/Roboto-Regular.ttf')"}))

(defn check-if-stylefy-was-initialized []
  (includes? (.-innerHTML (.querySelector js/document "head"))
             "._stylefy_-"))

(defn initialize-styles
  []
  (when-not (check-if-stylefy-was-initialized)
    (initialize-fonts)
    (stylefy/init {:dom (stylefy-reagent/init)})))
