(ns brundij.first-test
  (:require [cljs.test :refer-macros [deftest is testing]]))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(deftest first-test
  (testing "first test"
    (is (= 1 1))))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(deftest second-test
  (testing "chiclete"
    (is (= 2 2))))
