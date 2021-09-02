(ns cljs.brundij.first-test
  (:require [cljs.test :refer-macros [deftest is testing]]))

(deftest first-test
  (testing "first test"
    (is (= 1 1))))

(deftest second-test
  (testing "chiclete"
    (is (= 2 2))))
