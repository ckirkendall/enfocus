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

;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; Helper Functions
;;
;;;;;;;;;;;;;;;;;;;;;;;;

(defn by-id [id]
  (.getElementById js/document "test-div"))

(defn elem [typ]
  (.createElement js/document typ))

;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; Tests
;;
;;;;;;;;;;;;;;;;;;;;;;;;

(deftest sample-test
  (testing "this test should pass"
    (is (= 1 1)))
  (testing "this test should fail"
    (is (= 1 2))))


(deftest content-test
  (testing "content string"
    (ef/at "#test-div" (ef/content "testing"))
    (let [res (.-textContent (by-id "test-div"))]
      (is (= "testing" res))))
  (testing "content node"
    (ef/at "#test-div" (ef/content (elem "span")))
    (let [res (.-innerHTML (by-id "test-div"))]
      (is (= "<span></span>" res))))
  (testing "content seq of nodes"
    (ef/at "#test-div" (ef/content [(elem "span") (elem "span")]))
    (let [res (.-innerHTML (by-id "test-div"))]
      (is (= "<span></span><span></span>" res)))))

(deftest html-content-test
  (testing "html-content"
    (ef/at "#test-div" (ef/html-content "<span>testing</span>"))
    (let [res (.-firstChild (by-id "test-div"))]
      (is (= "SPAN" (.-nodeName res)))
      (is (= "testing" (.-textContent res))))))





