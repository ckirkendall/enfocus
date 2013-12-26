(ns enfocus.bind-test
  (:require
   [enfocus.core :as ef :refer [at from content get-text]]
   [enfocus.bind :as bind :refer [bind-view mget-in mset-in key-or-props]]
   [cemerick.cljs.test :as t])
  (:require-macros
   [enfocus.macros :as em]
   [cemerick.cljs.test :refer (is are deftest testing use-fixtures)]))

(defn each-fixture [f]
  ;; initialize the environment
  (let [div (.createElement js/document "div")]
    (.setAttribute div "id" "test-id")
    (.setAttribute div "class" "test-class")
    (.appendChild (.-body js/document) div)
    ;; execute the unit test
    (f)
    ;; clear the environment 
    (.removeChild (.-body js/document) div)))

(use-fixtures :each each-fixture)


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; HELPER FUNC TESTS
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(deftest mget-in-test
  (testing "standard js-obj object"
    (let [obj (js-obj "a" (js-obj "c" 3) "b" 4)]
      (testing "simple field"
        (are [expected actual] (= expected actual)
             4 (mget-in obj "b")
             4 (mget-in obj :b)))
      (testing "multi leve acess"
        (are [expected actual] (= expected actual)
             3 (mget-in obj ["a" "c"])
             3 (mget-in obj [:a :c])
             3 (mget-in obj [:a "c"])
             3 (mget-in obj ["a" :c])))))
  (testing "standard clojurescript map"
    (let [obj {:a {:b 3 :c 4 :d {:a 5}} :b 2}]
      (testing "simple field"
        (is (= 2 (mget-in obj :b))))
      (testing "multi leve acess"
        (are [expected actual] (= expected actual)
             3 (mget-in obj [:a :b])
             5 (mget-in obj [:a :d :a]))))))

(deftest key-or-prop-test
  (testing "getting the keys from an obj or map"
    (is (= [:a :b] (key-or-props {:a 2 :b 3})))
    (is (= ["a" "b"] (key-or-props (js-obj "a" 2 "b" 3))))))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;   MAIN TESTS
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(deftest bind-view-test
  (testing "binding a view to an atom"
    (let [atm (atom "initial")]
      (at "#test-id" (bind-view atm #(at %1 (content %2))))
      (testing "initial value set"
        (is (= "initial" (from "#test-id" (get-text)))))
      (testing "updated value set"
        (reset! atm "updated")
        (is (= "updated" (from "#test-id" (get-text))))))))
