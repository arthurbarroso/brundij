(require '[integrant.repl :as ig-repl])

(def reset-all ig-repl/reset-all)

{:global-fixture (fn [f]
                   (reset-all)
                   (f))

 :selectors {:integration :integration}}
