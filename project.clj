(defproject brundij "0.1.0"
  :description "Brundij"
  :min-lein-version "2.0.0"
  :license {:name "Eclipse Public License - v 1.0"
            :url "http://www.eclipse.org/legal/epl-v10.html"
            :distribution :repo
            :comments "The same license as CLojure"}

  :test-paths ["test/clj" "test/cljs"]

  :dependencies [[org.clojure/clojure "1.10.1"]
                 [ring "1.8.1"]
                 [integrant "0.8.0"]
                 [environ "1.2.0"]
                 [metosin/reitit "0.5.5"]
                 [org.postgresql/postgresql "42.2.14"]
                 [io.replikativ/datahike "0.3.7-SNAPSHOT"]
                 [io.replikativ/datahike-postgres "0.1.0"]
                 [tick/tick "0.4.32"]
                 [ring-cors "0.1.13"]
                 [org.clojure/core.match "1.0.0"]]

  :profiles {:uberjar {:aot :all
                       :source-paths ["src/clj" "src/cljc"]}

             :dev {:source-paths ["dev-resources"
                                  "src/clj"
                                  "src/cljc"
                                  "test/clj"]
                   :resource-paths ["dev-resources/resources" "resources"]
                   :dependencies [[ring/ring-mock "0.4.0"]
                                  [hawk "0.2.11"]
                                  [integrant/repl "0.3.1"]
                                  [circleci/circleci.test "0.5.0"]]}

             :cljs {:source-paths ["src/cljs" "src/cljc"]
                    :jvm-opts ["-Xmx6G"]
                    :resource-paths ["dev-resources/resources"]
                    :dependencies [[binaryage/devtools "1.0.2"]
                                   [prismatic/dommy "1.1.0"]
                                   [org.clojure/clojurescript "1.10.879"]
                                   [org.clojure/core.async "1.3.618"]
                                   [reagent "1.1.0"]
                                   [re-frame "1.2.0"]
                                   [day8.re-frame/tracing "0.6.2"]
                                   [day8.re-frame/re-frame-10x "1.1.7"]
                                   [day8.re-frame/http-fx "0.2.3"]
                                   [stylefy/reagent "3.0.0"]
                                   [stylefy "3.0.0"]
                                   [metosin/reitit-spec "0.5.11"]
                                   [metosin/reitit-frontend "0.5.11"]
                                   [datascript "1.1.0"]
                                   [datascript-transit "0.3.0"]
                                   [thheller/shadow-cljs "2.15.3" :scope "provided"]]}}

  :aliases {"test" ["run" "-m" "circleci.test/dir" :project/test-paths]
            "tests" ["run" "-m" "circleci.test"]
            "retest" ["run" "-m" "circleci.test.retest"]}

  :test-selectors {:integration :integration}
  :uberjar-name "brundij.jar")
