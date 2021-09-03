(ns brundij.components.input
  (:require [stylefy.core :as stylefy :refer [use-style]]))

(def input-style {:color "#333"
                  :padding "0.8%"
                  :border-radius "0.2rem"
                  :background-color "rgb(255, 255, 255)"
                  :border "solid 1.5px #D3D3D3"
                  :text-ident "5px"
                  :font-size "16px"
                  ::stylefy/mode {:hover {:box-shadow "0 0 5pt 2pt #ededed"}
                                  :focus {:box-shadow "0 0 5pt 2pt #ededed"
                                          :outline-width "0px"}}})

(defn input
  [{:keys [value on-change type disabled extra-style placeholder]}]
  [:input
   (use-style
     (merge input-style extra-style)
     {:type type
      :value value
      :placeholder placeholder
      :disabled disabled
      :on-change #(on-change (-> % .-target .-value))})])
