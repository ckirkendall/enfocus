(ns enfocus.bind-test
  (:require
   [enfocus.core :as ef :refer [at from content get-text html
                                set-form-input read-form-input do->
                                set-prop read-form set-form set-attr]]
   [enfocus.bind :as bind :refer [bind-view mget-in mset-in key-or-props
                                  save-form-to-atm bind-input bind-form]]
   [domina.events :as de  :refer [dispatch!]]
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

(defn by-id [id]  (.getElementById js/document id))

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


(deftest mset-in-test
  (testing "standard js-obj object"
    (let [obj (js-obj "a" (js-obj "c" "_") "b" "_")]
      (testing "simple field"
        (are [expected actual] (= expected actual)
             1 (aget (mset-in obj "b" 1) "b")
             2 (aget (mset-in obj :b 2) "b")))
      (testing "multi leve acess"
        (are [expected actual] (= expected actual)
             1 (aget (mset-in obj ["a" "c"] 1) "a" "c")
             2 (aget (mset-in obj ["a" :c] 2) "a" "c")
             3 (aget (mset-in obj [:a "c"] 3) "a" "c")
             4 (aget (mset-in obj [:a :c] 4) "a" "c")))))
  (testing "standard clojurescript map"
    (let [obj {:a {:b "bb" :c "cc" :d {:a "aa"}} :b "b"}]
      (testing "simple field"
        (is (= 2 (:b (mset-in obj :b 2)))))
      (testing "multi leve acess"
        (are [expected actual] (= expected actual)
             1 (:b (:a (mset-in obj [:a :b] 1)))
             2 (:a (:d (:a (mset-in obj [:a :d :a] 2)))))))))


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
        (is (= "updated" (from "#test-id" (get-text))))))
    (testing "complex map with mapping"
      (let [atm (atom {:a {:b {:bb 1}} :c 2})
            count (atom 0)]
        (at "#test-id" (content (html [:input {:value "_"}]))
            "input" (bind-view atm
                               #(do
                                  (at %1 (set-form-input (:bb %2)))
                                  (swap! count inc))
                               [:a :b]))
        ;initial population of view
        (is (= @count 1)) 
        (is (= "1" (from "input" (read-form-input))))
        ;update atom non mapped val
        (swap! atm assoc :c 3)
        (is (= @count 1))
        ;update atom mapped val
        (swap! atm assoc-in [:a :b] {:bb 2})
        (is (= @count 2))
        (is (= "2" (from "input" (read-form-input))))))))


(deftest bind-input-test
  (let [input-frag (html
                    [:div
                     [:input {:type "text" :name "a" :value "_"}]
                     [:textarea {:name "b"} "_"]
                     [:input {:name "c" :type "checkbox" :value "c1"}]
                     [:input {:name "c" :type "checkbox" :value "c2"}]
                     [:input {:name "c" :type "checkbox" :value "c3"}]
                     [:select {:name "d"}
                      [:option {:value "d1"}]
                      [:option {:value "d2"}]
                      [:option {:value "d3"}]
                      [:option {:value "d4"}]]])]
    (at "#test-id" (content input-frag))
    (testing "binding the value of atm to a form input field"
      (testing "binding a simple value to a text field :to-way"
        (let [atm (atom "a")]
          (at "input[name='a']" (bind-input atm {:event :change}))
          (is (= "a" (from "input[name='a']" (read-form-input))))
          (reset! atm "b")
          (is (= "b" (from "input[name='a']" (read-form-input))))
          (at "input[name='a']" (do-> (set-form-input "c")
                                      #(dispatch! % :change
                                                  {:currentTarget %})))
          (is (= "c" @atm))))
      (testing "binding a simple value to a textarea field :to-way"
        (let [atm (atom "a")]
          (at "textarea" (bind-input atm {:event :change}))
          (is (= "a" (from "textarea" (read-form-input))))
          (reset! atm "b")
          (is (= "b" (from "textarea" (read-form-input))))
          (at "textarea" (do-> (set-form-input "c")
                                      #(dispatch! % :change
                                                  {:currentTarget %})))
          (is (= "c" @atm))))
      (testing "binding a simple value to a checkbox field :to-way"
        (let [atm (atom "c1")]
          (at "input[name='c']" (bind-input atm {:event :change}))
          (is (= #{"c1"} (from "input[name='c']" (read-form-input))))
          (reset! atm #{"c3"})
          (is (= #{"c3"} (from "input[name='c']" (read-form-input))))
          (reset! atm #{"c1" "c2"})
          (is (= #{"c1" "c2"} (from "input[name='c']"
                                    (read-form-input))))
          (at "input[name='c']" (do-> (set-form-input ["c2" "c3"])
                                      #(dispatch! % :change
                                                  {:currentTarget %})))
          (is (= #{"c2" "c3"} @atm))))
      (testing "binding a simple value to a select field :to-way"
        (let [atm (atom "d1")]
          (at "select" (bind-input atm {:event :change}))
          (is (= "d1" (from "select" (read-form-input))))
          (reset! atm "d2")
          (is (= "d2" (from "select" (read-form-input))))
          (at "select" (set-attr :multiple "multiple"))
          (reset! atm #{"d3" "d4"})
          (is (= #{"d3" "d4"} (from "select" (read-form-input))))
          (at "select" (do-> (set-form-input ["d2" "d1"])
                             #(dispatch! % :change
                                         {:currentTarget %})))
          (is (= #{"d2" "d1"} @atm)))))))



(deftest save-form-to-atm-test
  (let [form-frag (html [:form {:name "my-form"
                                    :id "my-form"}
                             [:input {:name "a" :value "a"}]
                             [:input {:name "b" :value "b"}]])]
    (at "#test-id" (content form-frag))
    (testing "atoms with maps"
      (testing "straight form to map mapping"
        (let [atm (atom {:a "_" :b "_" :c "c"})]
          (save-form-to-atm atm (by-id "my-form"))
          (is (= {:a "a" :b "b" :c "c"} @atm))))
      (testing "field mapping for simple map"
        (let [atm (atom {:a "_" :b "_" :c "c"})]
          (save-form-to-atm atm (by-id "my-form") {:a :b :b :a})
          (is (= {:a "b" :b "a" :c "c"} @atm))))
      (testing "field mapping for complex map"
        (let [atm (atom {:a "a" :b {:aa "aa" :bb "bb"} :c "c"})]
          (save-form-to-atm atm (by-id "my-form") {[:b :aa] :a
                                                   [:b :bb] :b})
          (is (= {:a "a" :b {:aa "a" :bb "b"} :c "c"} @atm)))))
    (testing "atoms as js-objs"
      (testing "straight form to obj mapping"
        (let [atm (atom (js-obj "a" "_" "b" "_" "c" "c"))]
          (save-form-to-atm atm (by-id "my-form"))
          (is (= "a" (aget @atm "a")))
          (is (= "b" (aget @atm "b")))
          (is (= "c" (aget  @atm "c")))))
      (testing "field mapping form to simple obj"
        (let [atm (atom (js-obj "a" "_" "b" "_" "c" "c"))]
          (save-form-to-atm atm (by-id "my-form") {:a :b :b :a})
          (is (= "b" (aget @atm "a")))
          (is (= "a" (aget @atm "b")))
          (is (= "c" (aget @atm "c")))))
      (testing "field mapping form to complex obj"
        (let [atm (atom (js-obj "a" "a"
                                "b" (js-obj "aa" "aa"  "bb" "bb")
                                "c" "c"))]
          (save-form-to-atm atm (by-id "my-form") {[:b :aa] :a
                                                   [:b :bb] :b})
          (is (= "a" (aget @atm "a")))
          (is (= "a" (aget @atm "b" "aa")))
          (is (= "b" (aget @atm "b" "bb")))
          (is (= "c" (aget @atm "c"))))))))



(deftest bind-form-test
  (let [input-frag (html
                    [:form {:id "my-form" :name "my-form"}
                     [:input {:type "text" :name "a" :value "_"}]
                     [:textarea {:name "b"} "_"]
                     [:input {:name "c" :type "checkbox" :value "c1"}]
                     [:input {:name "c" :type "checkbox" :value "c2"}]
                     [:input {:name "c" :type "checkbox" :value "c3"}]
                     [:select {:name "d" :multiple "multiple"}
                      [:option {:value "d1"}]
                      [:option {:value "d2"}]
                      [:option {:value "d3"}]
                      [:option {:value "d4"}]]])]
    (at "#test-id" (content input-frag))
    (testing "binding a form to a simple map"
      (let [atm (atom {:a "a" :b "b" :c #{"c1" "c2"} :d #{"d3" "d4"}})]
        (testing "initial bind"
          (at "form" (bind-form atm))
          (is (= @atm (from "form" (read-form)))))
        (testing "updating atom"
          (swap! atm #(assoc % :a "aa" :b "bb" :c #{"c3"} :d #{"d1" "d2"}))
          (is (= @atm (from "form" (read-form)))))
        (testing "updating form"
          (let [val-map {:a "a_" :b "b_" :c #{"c1" "c3"} :d #{"d3" "d4"}}]
            (at "form" (do-> (set-form val-map)
                             #(dispatch! % :submit
                                         {:currentTarget %})))
            (is (= @atm val-map))
            (is (= @atm (from "form" (read-form))))))))
    (at "#test-id" (content input-frag))
    (testing "binding a form to a complex map "
      (let [atm (atom {:a "a"
                       :b  {:bb "b" :c #{"c1" "c2"}}
                       :d #{"d3" "d4"}})]
        (testing "initial bind"
          (at "form" (bind-form atm {:mapping {:a [:a]
                                               :b [:b :bb]
                                               :c [:b :c]
                                               :d [:d]}}))
          (is (= {:a "a"
                  :b "b"
                  :c #{"c1" "c2"}
                  :d #{"d3" "d4"}} (from "form" (read-form)))))
        (testing "updating atom"
          (swap! atm #(-> %
                          (assoc-in [:b :bb] "bb")
                          (assoc-in [:b :c] #{"c1" "c3"})
                          (assoc :a "aa" :d #{"d1" "d2"})))
          (is (= {:a "aa"
                  :b "bb"
                  :c #{"c1" "c3"}
                  :d #{"d1" "d2"}} (from "form" (read-form)))))
        (testing "updating form"
          (let [val-map {:a "a_" :b "b_" :c #{"c1" "c3"} :d #{"d3" "d4"}}]
            (at "form" (do-> (set-form val-map)
                             #(dispatch! % :submit
                                         {:currentTarget %})))
            (is (= @atm {:a "a_"
                         :b  {:bb "b_" :c #{"c1" "c3"}}
                         :d #{"d3" "d4"}}))))))))
