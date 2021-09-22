(ns brundij.components.link
  (:require [stylefy.core :as stylefy :refer [use-style]]))

(def custom-link-style {:color "#3ec762"
                        :font-weight 700
                        :cursor "pointer"})

(defn link [{:keys [on-click title text extra-styles]}]
  [:a (use-style
        (merge custom-link-style
               extra-styles)
        {:on-click on-click
         :title title})
   text])
