(ns enfocus.bind-test
  (:require
   [enfocus.core :as ef :refer [at from content get-text]]
   [enfocus.bind :as bind :refer [bind-view]]
   [cemerick.cljs.test :as t])
  (:require-macros
   [enfocus.macros :as em]
   [cemerick.cljs.test :refer (is are deftest testing use-fixtures)]))

(defn each-fixture [f]
  ;; initialize the environment
  (let [div (.createElement js/document "div")
        pc (.createElement js/document "p")]
    (.setAttribute div "id" "test-id")
    (.setAttribute div "class" "test-class")
    (.setAttribute pc "class" "test-class")
    (.appendChild div pc)
    (.appendChild (.-body js/document) div)
    ;; execute the unit test
    (f)
    ;; clear the environment 
    (.removeChild (.-body js/document) div)))

(use-fixtures :each each-fixture)

(deftest bind-view-test
  (testing "binding a view to an atom"
    (let [atm (atom "initial")]
      (at "#test-id" (bind-view atm #(at %1 (content %2))))
      (testing "initial value set"
        (is (= "initial" (from "#test-id" (get-text)))))
      (testing "updated value set"
        (reset! atm "updated")
        (is (= "updated" (from "#test-id" (get-text))))))))
