(ns cljs.brundij.first-test
  (:require [brundij.components.title :refer [title]]
            [cljs.test :refer-macros [deftest is testing]]
            [reagent.dom :as rdom]))

(deftest first-test
  (testing "first test"
    (is (= 1 1))))

(deftest second-test
  (testing "chiclete"
    (is (= 2 2))))

(deftest title-component-test
  (let [comp (rdom/render [title] (.getElementById js/document "app"))]
    (println {:comp comp})
    (is (= true true))))
