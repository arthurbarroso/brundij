(ns cljs.brundij.first-test
  (:require [brundij.components.title :refer [title]]
            [cljs.test :refer-macros [deftest is testing use-fixtures]]
            [dommy.core :as d]
            [reagent.dom :as rdom]))

(defn dom-cleanup [f]
  (d/clear! (.getElementById js/document "app"))
  (f))

(use-fixtures :each dom-cleanup)

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(deftest first-test
  (testing "first test"
    (is (= 1 1))))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(deftest second-test
  (testing "chiclete"
    (is (= 2 2))))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(deftest title-component-test
  (rdom/render [title] (.getElementById js/document "app"))
  (is (= (d/html (d/sel1 :h1)) "Hey!")))
