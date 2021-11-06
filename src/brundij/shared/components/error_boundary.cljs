(ns brundij.shared.components.error-boundary
  (:require [reagent.core :as r]))

(defn err-boundary
  [& _children]
  (let [err-state (r/atom nil)]
    (r/create-class
     {:display-name "ErrBoundary"
      :component-did-catch (fn [err info]
                             (reset! err-state [err info]))
      :reagent-render (fn [& children]
                        (if (nil? @err-state)
                          (into [:<>] children)
                          (let [[_ info] @err-state]
                            [:pre [:code (pr-str info)]])))})))
