(ns brundij.date
  (:require [tick.alpha.api :as t]
            [tick.timezone]
            [tick.locale-en-us]
            [tick.format]))

(defn get-inst []
  (t/inst (t/now)))

(defn format-inst [instant]
  (t/format (tick.format/formatter "MM-dd-yyyy") (t/zoned-date-time instant)))
