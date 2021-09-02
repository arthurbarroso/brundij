(ns brundij.styles
  (:require [stylefy.core :as stylefy]
            [stylefy.reagent :as stylefy-reagent]))

(def font-family "'Roboto', sans-serif")

(defn initialize-fonts []
  (stylefy/font-face {:font-family font-family
                      :src "url('/fonts/Roboto-Regular.ttf')"}))

(defn initialize-styles
  []
  (initialize-fonts)
  (stylefy/init {:dom (stylefy-reagent/init)}))
