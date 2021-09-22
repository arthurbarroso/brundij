(require '[integrant.repl :as ig-repl]
         '[taoensso.timbre :as timbre])

(def reset-all ig-repl/reset-all)

{:global-fixture (fn [f]
                   (timbre/set-level! :error)
                   (reset-all)
                   (f))

 :selectors {:integration :integration}}
