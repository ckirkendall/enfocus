(ns enfocus.core-test
  (:require
   [enfocus.core :as ef]
   [cemerick.cljs.test :as t]
   [enfocus.report-generator :refer (each-fixture)])
  (:require-macros
   [enfocus.test-setup :refer (setup-tests)]
   [cemerick.cljs.test :refer (is deftest testing use-fixtures)]))


(setup-tests)
(use-fixtures :each each-fixture)

(deftest sample-test
  (testing "this test should pass"
    (is (= 1 1)))
  (testing "this test should fail"
    (is (= 1 2))))


(deftest content-test
  (testing "content string"
    (ef/at "#test-div" (ef/content "testing"))
    (let [res (.-textContent (.getElementById js/document "test-div"))]
      (is (= "testing" res))))
  (testing "content node"
    (ef/at "#test-div" (ef/content (.createElement js/document "span")))
    (let [res (.-innerHTML (.getElementById js/document "test-div"))]
      (is (= "<span></span>" res)))))


