(ns brundij.components.link
  (:require [stylefy.core :as stylefy :refer [use-style]]))

(def custom-link-style {:color "#eec74c"
                        :font-weight 700
                        :cursor "pointer"})

(defn link [{:keys [on-click title text extra-styles]}]
  [:a (use-style
        custom-link-style
        {:on-click on-click
         :title title})
   text])
