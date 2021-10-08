(ns brundij.lazy)

(defmacro lazy-component [the-sym]
  `(brundij.lazy/lazy-component* (shadow.lazy/loadable ~the-sym)))
