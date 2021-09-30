(ns brundij.date
  (:require [tick.alpha.api :as t]))

(defn get-inst []
  (t/inst (t/now)))
