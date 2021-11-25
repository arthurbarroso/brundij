(ns brundij.input-test
  (:require [brundij.shared.components.input :refer [input]]
            [cljs.test :refer-macros [deftest is testing use-fixtures]]
            [dommy.core :as d]
            [reagent.core :as r]
            [reagent.dom :as rdom]))

(defn create-app-element [f]
  (.appendChild (.-body js/document)
                (doto (.createElement js/document "div")
                  (-> (.setAttribute "id" "app"))))
  (f))

(defn dom-cleanup [f]
  (d/clear! (.getElementById js/document "app"))
  (f))

(use-fixtures :once create-app-element)
(use-fixtures :each dom-cleanup)

(defn appended-container [target id]
  (let [container (.getElementById js/document id)]
    (if container
      container
      (.appendChild target (doto (.createElement js/document "div")
                             (-> (.setAttribute "id" id)))))))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(deftest input-component-test
  (testing "renders correctly"
    (let [ra @(r/atom "chiclete")]
      (rdom/render [input {:value ra
                           :on-change #(println "x")
                           :disabled false
                           :type "text"
                           :placeholder "input placeholder"}]
                   (appended-container (d/sel1 :#app)
                                       "input"))
      (is (= (d/attr (d/sel1 :input) :placeholder) "input placeholder"))
      (is (= (d/value (d/sel1 :input)) "chiclete")))))
