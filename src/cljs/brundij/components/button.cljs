(ns brundij.components.button
  (:require [brundij.styles :refer [font-family]]
            [stylefy.core :as stylefy :refer [use-style]]))

(def button-styles {:outline 0
                    :font-size "1rem"
                    :cursor "pointer"
                    :padding "0.8%"
                    :border-radius "12px"
                    :border "solid 1.5px #D3D3D3"
                    :font-weight 500
                    :font-family font-family
                    :color "#fff"
                    :text-transform :uppercase
                    ::stylefy/mode {:hover {:box-shadow "0 0 5pt 2pt #ededed"
                                            :outline-width "0px"}}})

(defn button [{:keys [on-click text disabled extra-styles title]}]
  [:button (use-style (merge button-styles extra-styles)
                      {:type "button"
                       :disabled disabled
                       :title title
                       :on-click #(on-click)})
   text])
