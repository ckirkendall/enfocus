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
  (.getElementById js/document id))

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


(deftest html-hiccup-test
  (testing "html(hiccup)"
    (ef/at "#test-div" (ef/content
                        (ef/html [:span {:id "tmp"} "testing"])))
    (let [res (.-innerHTML (by-id "test-div"))]
      (is (= "<span id=\"tmp\">testing</span>" res)))))


(deftest attributes-test
  (testing "setting an attribute"
    (ef/at "#test-div > p" (ef/set-attr :id "tmp"))
    (let [res (.-innerHTML (by-id "test-div"))]
      (is (= "<p id=\"tmp\"></p>" res))))
  (testing "removing an attribute"
    (ef/at "#test-div > p" (ef/remove-attr :id))
    (let [res (.-innerHTML (by-id "test-div"))]
      (is (= "<p></p>")))))

(deftest prop-test
  (testing "setting a property"
    (ef/at "#test-div" (ef/set-prop :my-prop "testing"))
    (let [res (aget (by-id "test-div") "my-prop")]
      (is (= "testing" res)))))


(deftest class-test
  (testing "adding a class"
    (ef/at "#test-div" (ef/add-class "my-class"))
    (let [res (.-className (by-id "test-div"))]
      (is (= "my-class" res))))
  (ef/at "#test-div" (ef/add-class "second-class"))
  (let [res1 (.-className (by-id "test-div"))]
    (ef/at "#test-div" (ef/remove-class "second-class"))
    (testing "adding a second class"
      (is (= res1 "my-class second-class")))
    (let [res2 (.-className (by-id "test-div"))]
      (testing "removing a class"
        (is (= res2 "my-class")))))
  (testing "setting the class"
    (ef/at "#test-div" (ef/set-class "test1" "test2"))
    (let [res (.-className (by-id "test-div"))]
      (is (= "test1 test2" res)))))


(deftest do->test
  (testing "chaining using do->"
    (ef/at "#test-div > p" (ef/do->
                            (ef/content "testing")
                            (ef/set-attr :id "tmp")))
    (let [res (.-innerHTML (by-id "test-div"))]
      (is (= "<p id=\"tmp\">testing</p>" res)))))


(deftest appending-test
  (testing "prepending content"
    (ef/at "#test-div" (ef/prepend (ef/html [:span])))
    (let [res (.-innerHTML (by-id "test-div"))]
      (is (= "<span></span><p></p>" res))))
  (testing "appending content"
    (ef/at "#test-div" (ef/append (ef/html [:span])))
    (let [res (.-innerHTML (by-id "test-div"))]
      (is (= "<span></span><p></p><span></span>" res)))))

(deftest before-after-test
  (testing "adding content before"
    (ef/at "#test-div > p" (ef/before (ef/html [:span])))
    (let [res (.-innerHTML (by-id "test-div"))]
      (is (= "<span></span><p></p>" res))))
  (testing "adding content after"
    (ef/at "#test-div > p" (ef/after (ef/html [:span])))
    (let [res (.-innerHTML (by-id "test-div"))]
      (is (= "<span></span><p></p><span></span>" res)))))
 

(deftest substitute-test
  (testing "substituting content"
    (ef/at "#test-div > p" (ef/substitute (ef/html [:span])))
    (let [res (.-innerHTML (by-id "test-div"))]
      (is (= "<span></span>" res)))))

(deftest remove-test
  (testing "removing a node"
    (ef/at "#test-div > p" (ef/remove-node))
    (let [res (.-innerHTML (by-id "test-div"))]
      (is (= "" res)))))

(deftest wrap-unwrap-test
  (testing "wrapping content"
    (ef/at "#test-div > p" (ef/wrap :span {:id "tmp"}))
    (let [res (.-innerHTML (by-id "test-div"))]
      (is (= "<span id=\"tmp\"><p></p></span>" res))))
  (testing "unwrapping content"
    (ef/at "#test-div > span" (ef/unwrap))
    (let [res (.-innerHTML (by-id "test-div"))]
      (is (= "<p></p>" res)))))


(deftest focus-blur-test
  (testing "setting the focus on an element"
    (ef/at "#test-div" (ef/content (ef/html [:input {:id "tmp"}]))
           "#tmp" (ef/focus))
    (is (= (by-id "tmp") (.-activeElement js/document))))
  (testing "setting the focus on an element"
    (ef/at "#tmp" (ef/blur))
    (is (not= (by-id "tmp") (.-activeElement js/document)))))












