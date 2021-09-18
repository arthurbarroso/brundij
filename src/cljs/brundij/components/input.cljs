(ns brundij.components.input
  (:require [brundij.styles :refer [font-family]]
            [stylefy.core :as stylefy :refer [use-style]]))

(def input-style {:color "#333"
                  :padding "0.8%"
                  :border-radius "2%"
                  :font-size "1rem"
                  :border "solid 1.5px #D3D3D3"
                  :font-weight 500
                  :font-family font-family
                  :background-color "rgb(255, 255, 255)"
                  :text-ident "5px"
                  :box-sizing "border-box"
                  ::stylefy/mode {:hover {:box-shadow "0 0 5pt 2pt #ededed"}
                                  :focus {:box-shadow "0 0 5pt 2pt #ededed"
                                          :outline-width "0px"}}})

(defn input
  [{:keys [value on-change type disabled extra-styles placeholder]}]
  [:input
   (use-style
     (merge input-style extra-styles)
     {:type type
      :value value
      :placeholder placeholder
      :disabled disabled
      :on-change #(on-change (-> % .-target .-value))})])
