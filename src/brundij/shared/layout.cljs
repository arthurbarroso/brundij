(ns brundij.shared.layout
  (:require [brundij.shared.components.error-boundary :refer [err-boundary]]
            [brundij.shared.components.header :refer [header]]
            [reagent.core :as reagent]))

(defn layout [_props & _children]
  (reagent/create-class
   {:reagent-render
    (fn [_props & children]
      [:div {:class "app-base-style"}
       [:div {:class "content-style"}
        [header]
        [:div {:class "container-style"}
         (into [err-boundary
                children])]]])}))
