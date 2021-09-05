(ns cljs.brundij.button-test
  (:require [brundij.components.button :refer [button]]
            [cljs.test :refer-macros [deftest is testing use-fixtures]]
            [dommy.core :as d]
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
(deftest button-component-text-test
  (testing "Renders correctly"
    (rdom/render [button {:on-click #(println "hi")
                          :text "Click me"
                          :disabled false
                          :extra-styles {}}]
                 (appended-container (.getElementById js/document "app")
                                     "button"))
    (is (= (d/html (d/sel1 :button)) "Click me"))
    (is (= (d/style (d/sel1 :button) :cursor) "pointer"))
    (is (= (d/style (d/sel1 :button) :font-weight) "500"))))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(deftest button-component-extra-styles-test
  (testing "Changes styles based on extra-styles"
    (rdom/render [button {:on-click #(println "hi")
                          :text "Click me"
                          :disabled false
                          :extra-styles {:font-weight 700}}]
                 (appended-container (.getElementById js/document "app")
                                     "button2"))
    (is (= (d/html (d/sel1 :button)) "Click me"))
    (is (= (d/style (d/sel1 :button) :font-weight) "700"))))
