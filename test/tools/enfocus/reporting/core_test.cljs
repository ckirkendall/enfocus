(ns tools.enfocus.reporting.core-test
  (:require
   [enfocus.core :as ef]
   [cemerick.cljs.test :as t]
   [tools.enfocus.reporting.report-generator :refer (each-fixture)])
  (:require-macros
   [tools.enfocus.reporting.test-setup :refer (setup-tests)]
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

(defn- build-form []
  (ef/html [:form
            [:input {:name "f1" :type "text"
                     :value "testing1"}]
            [:select {:name "f2"
                      :multiple "multiple"}
             [:option {:value "o1" :selected true}]
             [:option {:value "o2" :selected true}]
             [:option {:value "o1"}]]
            [:input {:name "f3" :type "checkbox"
                     :value "c1" :checked true}]
            [:input {:name "f3" :type "checkbox"
                     :value "c2"}]]))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; Standard Trandsform Tests
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

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


(deftest style-tests
  (testing "setting a single style"
    (ef/at "#test-div" (ef/set-style :background-color"#cfcfcf"))
    (let [res (-> (by-id "test-div")
                  (.-style)
                  (.-backgroundColor))]
      (is (= "rgb(207, 207, 207)" res))))
  (testing "removing a single style"
    (ef/at "#test-div" (ef/remove-style :background))
    (let [res (-> (by-id "test-div")
                  (.-style)
                  (.-background))]
      (is (= "" res))))
  (testing "setting a list styles"
    (ef/at "#test-div" (ef/set-style :background-color "#cfcfcf"
                                     :width "12px"))
    (let [res1 (-> (by-id "test-div")
                   (.-style)
                   (.-backgroundColor))
          res2 (-> (by-id "test-div")
                   (.-style)
                   (.-width))]
      (is (= "rgb(207, 207, 207)" res1))
      (is (= "12px" res2)))
    (testing "removing a list of styles"
      (ef/at "#test-div" (ef/remove-style :background :width))
      (let [res1 (-> (by-id "test-div")
                    (.-style)
                    (.-background))
            res2 (-> (by-id "test-div")
                     (.-style)
                     (.-width))]
        (is (and (empty? res1) (empty? res2)))))))


(deftest focus-blur-test
  (testing "setting the focus on an element"
    (ef/at "#test-div" (ef/content (ef/html [:input {:id "tmp"}]))
           "#tmp" (ef/focus))
    (is (= (by-id "tmp") (.-activeElement js/document))))
  (testing "setting the focus on an element"
    (ef/at "#tmp" (ef/blur))
    (is (not= (by-id "tmp") (.-activeElement js/document)))))


(deftest set-data-test
  (testing "setting data elements on a node"
    (ef/at "#test-div" (ef/set-data :my-data "testing"))
    (let [res (pr-str (.-__domina_data (by-id "test-div")))]
      (is (= "{:my-data \"testing\"}" res)))))


(deftest replace-vars-test
  (testing "replacing vars in a content"
    (ef/at "#test-div > p" (ef/do->
                            (ef/content "name: ${name}")
                            (ef/set-attr :tmp "a${id}"))
           "#test-div" (ef/replace-vars {:name "CK" :id "tmp"}))
    (let [res (.-innerHTML (by-id "test-div"))]
      (is (= "<p tmp=\"atmp\">name: CK</p>" res)))))


;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; Extractor Tests
;;
;;;;;;;;;;;;;;;;;;;;;;;;

(deftest get-attr-test
  (testing "getting an attribute from a node"
    (let [res (ef/from "#test-div" (ef/get-attr :id))]
      (is (= "test-div" res)))))


(deftest get-text-test
  (ef/at "#test-div" (ef/content "testing"))
  (testing "getting the text from a node"
    (let [res (ef/from "#test-div" (ef/get-text))]
      (is (= "testing" res)))))

(deftest get-data-test
  (ef/at "#test-div" (ef/set-data :my-data "testing"))
  (testing "getting the data from a node"
    (let [res (ef/from "#test-div" (ef/get-data :my-data))]
      (is (= "testing" res)))))

(deftest get-prop
  (ef/at "#test-div" (ef/set-prop :my-data "testing"))
  (testing "getting the a property from a node"
    (let [res (ef/from "#test-div" (ef/get-prop :my-data))]
      (is (= "testing" res)))))


(deftest form-test
  (ef/at "#test-div" (ef/content (build-form)))
  (testing "reading a form"
    (let [res (ef/from "#test-div > form" (ef/read-form))]
      (is (= {:f1 "testing1" :f2 '("o1" "o2") :f3 "c1"} res)))))

  
(deftest filter-test
  (ef/at "#test-div" (ef/content (build-form)))
  (testing "testing the filter transform"
    (let [res (ef/from "option"
                       (ef/filter #(aget % "selected")
                                  (ef/get-prop :value)))]
      (is (= '("o1" "o2") res))))
  (testing "build in filters :selected"
    (let [res (ef/from "option"
                       (ef/filter :selected (ef/get-prop :value)))]
      (is (= '("o1" "o2") res))))
  (testing "build in filters :checked"
    (let [res (ef/from "input[type='checkbox']"
                       (ef/filter :checked (ef/get-prop :value)))]
      (is (= "c1" res)))))

  
;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; at & from form Tests
;;
;;;;;;;;;;;;;;;;;;;;;;;;


(deftest at-form-test
  (testing "simple node test"
    (ef/at (by-id "test-div") (ef/content "testing1"))
    (let [res (.-innerHTML (by-id "test-div"))]
      (is (= "testing1" res))))
  (ef/at "#test-div" (ef/content ""))
  (testing "js/document single selector"
    (ef/at js/document "#test-div" (ef/content "testing2"))
    (let [res (.-innerHTML (by-id "test-div"))]
      (is (= "testing2" res))))
  (ef/at "#test-div" (ef/content ""))
  (testing "js/documnt w/ 3 sub selectors"
    (ef/at js/document
           "#test-div" (ef/content (ef/html [:p]))
           "#test-div > p" (ef/content "testing")
           "#test-div" (ef/append (ef/html [:span])))
    (let [res (.-innerHTML (by-id "test-div"))]
      (is (= "<p>testing</p><span></span>" res))))
  (ef/at "#test-div" (ef/content ""))
  (testing "single selector"
    (ef/at "#test-div" (ef/content "testing3"))
    (let [res (.-innerHTML (by-id "test-div"))]
      (is (= "testing3" res))))
  (ef/at "#test-div" (ef/content ""))
  (testing "direct 2 sub selectors"
    (ef/at "#test-div" (ef/content (ef/html [:p]))
           "#test-div > p" (ef/content "testing"))
    (let [res (.-innerHTML (by-id "test-div"))]
      (is (= "<p>testing</p>" res))))
  (ef/at "#test-div" (ef/content "")) 
  (testing "single selector 2 sub & custom selector"
    (ef/at (by-id "test-div")
           ef/this-node (ef/do->
                         (ef/content (ef/html [:p]))
                         (ef/append (ef/html [:span])))
           "p" (ef/content "testing"))
    (let [res (.-innerHTML (by-id "test-div"))]
      (is (= "<p>testing</p><span></span>" res)))))


(deftest from-tests
  (ef/at "#test-div" (ef/content (build-form)))
  (testing "simple node test"
    (let [res (ef/from (by-id "test-div") (ef/get-attr :id))]
      (is (= "test-div" res))))
  (testing "simple selector test"
    (let [res (ef/from "#test-div" (ef/get-attr :id))]
      (is (= "test-div" res))))
  (testing "node w/ several selectors"
    (let [res (ef/from (by-id "test-div")
                       :f1 "input[name='f1']" (ef/get-prop :value)
                       :f2 "option" (ef/filter :selected
                                               (ef/get-attr :value)))]
      (is (= {:f1 "testing1" :f2 '("o1" "o2")} res)))))


;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; Async Tests
;;
;;;;;;;;;;;;;;;;;;;;;;;;

(deftest delay-test
  ;because clojurescript test does not handle
  ;async behavor the testing form has to be
  ;inside delay statement.
  (let [cur (.getMilliseconds (js/Date.))]
    (ef/at "#test-div"
           (ef/delay 100
              #(testing "delay function"     
                 (let [now (.getMilliseconds (js/Date.))]
                   (println (Math/abs (- (- now cur) 100)))
                   (is (> 20 (Math/abs (- (- now cur) 100))))))))))










