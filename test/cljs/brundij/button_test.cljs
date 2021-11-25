(ns brundij.button-test
  (:require [brundij.shared.components.button :refer [button]]
            [cljs.test :refer-macros [deftest is testing use-fixtures]]
            [dommy.core :as d]
            [reagent.core :as r]
            [reagent.dom :as rdom]
            ["react-dom/test-utils" :as dom-test-utils]))

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
                          :disabled false}]
                 (appended-container (.getElementById js/document "app")
                                     "button"))
    (is (= (d/html (d/sel1 :button)) "Click me"))))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(deftest button-component-click-test
  (testing "Passes `on-click` prop to the component"
    (let [ra (r/atom 1)]
      (rdom/render [button {:on-click #(swap! ra inc)
                            :text "Click me"
                            :disabled false}]
                   (appended-container (.getElementById js/document "app")
                                       "button2"))
      (.click dom-test-utils/Simulate (d/sel1 :button))
      (is (= (d/html (d/sel1 :button)) "Click me"))
      (is (= 2 @ra)))))

#_{:clj-kondo/ignore [:clojure-lsp/unused-public-var]}
(deftest button-component-class-test
  (testing "Passes `extra-style-class` prop to the component"
    (rdom/render [button {:on-click #()
                          :extra-style-class "test-class"
                          :text "Click me"
                          :disabled false}]
                 (appended-container (.getElementById js/document "app")
                                     "button2"))
    (is (= (d/html (d/sel1 :button)) "Click me"))
    (is (= (d/class (d/sel1 :button)) "test-class button"))))
