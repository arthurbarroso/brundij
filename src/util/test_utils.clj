(ns util.test-utils
  (:require [integrant.repl :as ig-repl]
            [taoensso.timbre :as timbre]))

(def reset-all ig-repl/reset-all)

(defn start-fixture [config]
  (timbre/set-level! :error)
  (reset-all)
  config)
