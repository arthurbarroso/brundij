(ns brundij.answers.options)

(def options [{:rating 1
               :symbol "🔴"
               :title "Bad"}
              {:rating 2
               :symbol "🟡"
               :title "Ok"}
              {:rating 3
               :symbol "🟢"
               :title "Good"}])

(def trend-options [{:symbol "⬇️"
                     :title "Trending down"
                     :trend "down"}
                    {:symbol "➡️"
                     :title "Stable"
                     :trend "stable"}
                    {:symbol "⬆️"
                     :title "Trending up"
                     :trend "up"}])
