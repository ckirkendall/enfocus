(ns enfocus.core-test
  (:require
   [enfocus.core :as ef]
   [cemerick.cljs.test :as t]
   [enfocus.reporting.report-generator :refer (each-fixture)])
  (:require-macros
   [enfocus.macros :as em]
   [enfocus.reporting.test-setup :refer (setup-tests)]
   [cemerick.cljs.test :refer (is are deftest testing use-fixtures)]))



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
             [:option {:value "o3"}]]
            [:input {:name "f3" :type "checkbox"
                     :value "c1" :checked true}]
            [:input {:name "f3" :type "checkbox"
                     :value "c2"}]]))


;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; at & from forms
;;
;;;;;;;;;;;;;;;;;;;;;;;;

(deftest at-test
  (testing "Unit Test for the (at ...) form\n"

    (testing "Border Cases\n"

      (testing "(at selector (transform arg1 ...))\n"
        (are [expected actual] (= expected actual)

             ;; the transformer is nil 
             nil (ef/at "body" nil)
             nil (ef/at "div" nil)
             nil (ef/at "p" nil)
             nil (ef/at "#test-id" nil)
             nil (ef/at ".test-class" nil)
             ;; the selector is nil too
             nil (ef/at nil nil)))

      (testing "(at a-node (transform arg1 ...))\n"
        (are [expected actual] (= expected actual)
             ;; the transformer is nil
             js/document (ef/at js/document nil)
             "Error" (try 
                       (ef/at js/not-a-node nil)
                       (catch js/Error e
                         "Error")) ; Can't find variable: not-a-node
             ))
      
      (testing "(at a-node\n\t[selector1] (transform1 arg1 ...)\n\t[selector2] (transform2 arg1 ...))\n"
        (are [expected actual] (= expected actual)

             ;; the node is nil
             nil (ef/at nil [] nil)
             nil (ef/at nil ["body"] nil)
             nil (ef/at nil [] (ef/content "which ever content"))
             
             ;; the selector is nil
             nil (ef/at js/document nil (ef/content "which ever content")) 
             nil (ef/at js/document nil nil) 
             "Error" (try (ef/at js/not-a-node nil (ef/content "which ever content"))
                      (catch js/Error e
                        "Error")) ; Can't find variable: not a node

             ;; the transformer is nil
             nil (ef/at js/document [] nil)
             nil (ef/at js/document ["body"] nil)
             nil (ef/at js/document ["not a selector"] nil) ;should rise an exception?
             "Error" (try (ef/at js/not-a-node ["body"] nil)
                      (catch js/Error e
                        "Error")) ; Can't find variable: not a node

             ;; every arg is nil
             nil (ef/at nil nil nil)))
      
      (testing "(at [selector1] (transform1 arg1 ...)\n\t[selector2] (transform2 arg1 ...))\n"
        (are [expected actual] (= expected actual) 
             
             ;; the tranformer is nil
             nil (ef/at ["body"] nil)
             nil (ef/at ["div"] nil)
             nil (ef/at [""] nil)
             nil (ef/at ["not a selector"] nil) ;should rise an exception?
             nil (ef/at [nil] nil))))
    
    (testing "Standard Cases\n"
      (testing "simple node test"
        (ef/at (by-id "test-id") (ef/content "testing1"))
        (let [res (.-innerHTML (by-id "test-id"))]
          (is (= "testing1" res))))
      
      (ef/at "#test-id" (ef/content ""))
      (testing "js/document single selector"
        (ef/at js/document "#test-id" (ef/content "testing2"))
        (let [res (.-innerHTML (by-id "test-id"))]
          (is (= "testing2" res))))

      (ef/at "#test-id" (ef/content ""))
      (testing "js/documnt w/ 3 sub selectors"
        (ef/at js/document
               "#test-id" (ef/content (ef/html [:p]))
               "#test-id > p" (ef/content "testing")
               "#test-id" (ef/append (ef/html [:span])))
        (let [res (.-innerHTML (by-id "test-id"))]
          (is (= "<p>testing</p><span></span>" res))))

      (ef/at "#test-id" (ef/content ""))
      (testing "single selector"
        (ef/at "#test-id" (ef/content "testing3"))
        (let [res (.-innerHTML (by-id "test-id"))]
          (is (= "testing3" res))))

      (ef/at "#test-id" (ef/content ""))
      (testing "direct 2 sub selectors"
        (ef/at "#test-id" (ef/content (ef/html [:p]))
               "#test-id > p" (ef/content "testing"))
        (let [res (.-innerHTML (by-id "test-id"))]
          (is (= "<p>testing</p>" res))))

      (ef/at "#test-id" (ef/content "")) 
      (testing "single selector 2 sub & custom selector"
        (ef/at (by-id "test-id")
               ef/this-node (ef/do->
                             (ef/content (ef/html [:p]))
                             (ef/append (ef/html [:span])))
               "p" (ef/content "testing"))
        (let [res (.-innerHTML (by-id "test-id"))]
          (is (= "<p>testing</p><span></span>" res)))))))


(deftest from-tests
  (ef/at "#test-id" (ef/content (build-form)))
  (testing "simple node test"
    (let [res (ef/from (by-id "test-id") (ef/get-attr :id))]
      (is (= "test-id" res))))

  (testing "simple selector test"
    (let [res (ef/from "#test-id" (ef/get-attr :id))]
      (is (= "test-id" res))))

  (testing "node w/ several selectors"
    (let [res (ef/from (by-id "test-id")
                       :f1 "input[name='f1']" (ef/get-prop :value)
                       :f2 "option" (ef/filter :selected
                                               (ef/get-attr :value)))]
      (is (= {:f1 "testing1" :f2 '("o1" "o2")} res)))))



;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; Standard Trandsform Tests
;;
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;


(deftest content-test
  (testing "content string"
    (ef/at "#test-id" (ef/content "testing"))
    (let [res (.-textContent (by-id "test-id"))]
      (is (= "testing" res))))

  (testing "content node"
    (ef/at "#test-id" (ef/content (elem "span")))
    (let [res (.-innerHTML (by-id "test-id"))]
      (is (= "<span></span>" res))))

  (testing "content seq of nodes"
    (ef/at "#test-id" (ef/content [(elem "span") (elem "span")]))
    (let [res (.-innerHTML (by-id "test-id"))]
      (is (= "<span></span><span></span>" res)))))


(deftest html-content-test
  (testing "html-content"
    (ef/at "#test-id" (ef/html-content "<span>testing</span>"))
    (let [res (.-firstChild (by-id "test-id"))]
      (is (= "SPAN" (.-nodeName res)))
      (is (= "testing" (.-textContent res))))))


(deftest html-hiccup-test
  (testing "html(hiccup)"
    (ef/at "#test-id" (ef/content
                        (ef/html [:span {:id "tmp"} "testing"])))
    (let [res (.-innerHTML (by-id "test-id"))]
      (is (= "<span id=\"tmp\">testing</span>" res)))))


(deftest attributes-test
  (ef/at "#test-id" (ef/content (ef/html [:p])))
  (testing "setting an attribute"
    (ef/at "#test-id > p" (ef/set-attr :id "tmp"))
    (let [res (.-innerHTML (by-id "test-id"))]
      (is (= "<p id=\"tmp\"></p>" res))))

  (testing "removing an attribute"
    (ef/at "#test-id > p" (ef/remove-attr :id))
    (let [res (.-innerHTML (by-id "test-id"))]
      (is (= "<p></p>")))))

(deftest prop-test
  (testing "setting a property"
    (ef/at "#test-id" (ef/set-prop :my-prop "testing"))
    (let [res (aget (by-id "test-id") "my-prop")]
      (is (= "testing" res)))))


(deftest class-test
  (ef/at "#test-id" (ef/content (ef/html [:p])))
  (testing "adding a class"
    (ef/at "#test-id" (ef/add-class "my-class"))
    (let [res (.-className (by-id "test-id"))]
      (is (= "test-class my-class" res))))

  (ef/at "#test-id" (ef/add-class "second-class"))
  (let [res1 (.-className (by-id "test-id"))]
    (ef/at "#test-id" (ef/remove-class "second-class"))
    (testing "adding a second class"
      (is (= res1 "test-class my-class second-class")))
    (let [res2 (.-className (by-id "test-id"))]
      (testing "removing a class"
        (is (= res2 "test-class my-class")))))

  (testing "setting the class"
    (ef/at "#test-id" (ef/set-class "test1" "test2"))
    (let [res (.-className (by-id "test-id"))]
      (is (= "test1 test2" res)))))


(deftest do->test
  (ef/at "#test-id" (ef/content (ef/html [:p])))
  (testing "chaining using do->"
    (ef/at "#test-id > p" (ef/do->
                            (ef/content "testing")
                            (ef/set-attr :id "tmp")))
    (let [res (.-innerHTML (by-id "test-id"))]
      (is (= "<p id=\"tmp\">testing</p>" res)))))


(deftest appending-test
  (ef/at "#test-id" (ef/content (ef/html [:p])))
  (testing "prepending content"
    (ef/at "#test-id" (ef/prepend (ef/html [:span])))
    (let [res (.-innerHTML (by-id "test-id"))]
      (is (= "<span></span><p></p>" res))))

  (testing "appending content"
    (ef/at "#test-id" (ef/append (ef/html [:span])))
    (let [res (.-innerHTML (by-id "test-id"))]
      (is (= "<span></span><p></p><span></span>" res)))))


(deftest before-after-test
  (ef/at "#test-id" (ef/content (ef/html [:p])))
  (testing "adding content before"
    (ef/at "#test-id > p" (ef/before (ef/html [:span])))
    (let [res (.-innerHTML (by-id "test-id"))]
      (is (= "<span></span><p></p>" res))))

  (testing "adding content after"
    (ef/at "#test-id > p" (ef/after (ef/html [:span])))
    (let [res (.-innerHTML (by-id "test-id"))]
      (is (= "<span></span><p></p><span></span>" res)))))
 

(deftest substitute-test
  (testing "substituting content"
    (ef/at "#test-id > p" (ef/substitute (ef/html [:span])))
    (let [res (.-innerHTML (by-id "test-id"))]
      (is (= "<span></span>" res)))))

(deftest remove-test
  (testing "removing a node"
    (ef/at "#test-id > p" (ef/remove-node))
    (let [res (.-innerHTML (by-id "test-id"))]
      (is (= "" res)))))

(deftest wrap-unwrap-test
  (ef/at "#test-id" (ef/content (ef/html [:p])))
  (testing "wrapping content"
    (ef/at "#test-id > p" (ef/wrap :span {:id "tmp"}))
    (let [res (.-innerHTML (by-id "test-id"))]
      (is (= "<span id=\"tmp\"><p></p></span>" res))))

  (testing "unwrapping content"
    (ef/at "#test-id > span" (ef/unwrap))
    (let [res (.-innerHTML (by-id "test-id"))]
      (is (= "<p></p>" res)))))


(deftest style-tests
  (testing "setting a single style"
    (ef/at "#test-id" (ef/set-style :background-color"#cfcfcf"))
    (let [res (-> (by-id "test-id")
                  (.-style)
                  (.-backgroundColor))]
      (is (= "rgb(207, 207, 207)" res))))

  (testing "removing a single style"
    (ef/at "#test-id" (ef/remove-style :background))
    (let [res (-> (by-id "test-id")
                  (.-style)
                  (.-background))]
      (is (= "" res))))

  (testing "setting a list styles"
    (ef/at "#test-id" (ef/set-style :background-color "#cfcfcf"
                                     :width "12px"))
    (let [res1 (-> (by-id "test-id")
                   (.-style)
                   (.-backgroundColor))
          res2 (-> (by-id "test-id")
                   (.-style)
                   (.-width))]
      (is (= "rgb(207, 207, 207)" res1))
      (is (= "12px" res2)))
    (testing "removing a list of styles"
      (ef/at "#test-id" (ef/remove-style :background :width))
      (let [res1 (-> (by-id "test-id")
                    (.-style)
                    (.-background))
            res2 (-> (by-id "test-id")
                     (.-style)
                     (.-width))]
        (is (and (empty? res1) (empty? res2)))))))


(deftest focus-blur-test
  (testing "setting the focus on an element"
    (ef/at "#test-id" (ef/content (ef/html [:input {:id "tmp"}]))
           "#tmp" (ef/focus))
    (is (= (by-id "tmp") (.-activeElement js/document))))

  (testing "setting the focus on an element"
    (ef/at "#tmp" (ef/blur))
    (is (not= (by-id "tmp") (.-activeElement js/document)))))


(deftest set-data-test
  (testing "setting data elements on a node"
    (ef/at "#test-id" (ef/set-data :my-data "testing"))
    (let [res (pr-str (.-__domina_data (by-id "test-id")))]
      (is (= "{:my-data \"testing\"}" res)))))


(deftest replace-vars-test
  (ef/at "#test-id" (ef/content (ef/html [:p])))
  (testing "replacing vars in a content"
    (ef/at "#test-id > p" (ef/do->
                            (ef/content "name: ${name}")
                            (ef/set-attr :tmp "a${id}"))
           "#test-id" (ef/replace-vars {:name "CK" :id "tmp"}))
    (let [res (.-innerHTML (by-id "test-id"))]
      (is (= "<p tmp=\"atmp\">name: CK</p>" res)))))


(deftest set-form-input-test
  (ef/at "#test-id" (ef/content (build-form)))
  (testing "setting a select input"
    (ef/at "select" (ef/set-form-input ["o2" "o3"]))
    (let [res (ef/from "select" (ef/read-form-input))]
      (is (= #{"o2" "o3"} res))))
  (testing "setting a text input"
    (ef/at "input[type='text']" (ef/set-form-input "test"))
    (let [res (ef/from "input[type='text']"
                       (ef/read-form-input))]
      (is (= "test" res))))
  (testing "setting a checkbox input"
    (ef/at "input[type='checkbox']" (ef/set-form-input "c2"))
    (let [res (ef/from "input[type='checkbox']"
                       (ef/read-form-input))]
      (is (= "c2" res)))))

(deftest set-form-test
  (ef/at "#test-id" (ef/content (build-form)))
  (testing "setting form values using a map"
    (testing "setting single text input value"
      (ef/at "#test-id > form" (ef/set-form {:f1 "v1"}))
      (let [vals (ef/from "#test-id > form" (ef/read-form))]
        (is (= {:f1 "v1" :f2 #{"o1" "o2"} :f3 "c1"} vals))))
    (testing "setting multi value select input"
      (ef/at "#test-id > form" (ef/set-form {:f2 ["o1" "o3"]}))
      (let [vals (ef/from "#test-id > form" (ef/read-form))]
        (is (= {:f1 "v1" :f2 #{"o1" "o3"} :f3 "c1"} vals))))
    (testing "setting multi value check-box input"
      (ef/at "#test-id > form" (ef/set-form {:f3 ["c2" "c1"]}))
      (let [vals (ef/from "#test-id > form" (ef/read-form))]
        (is (= {:f1 "v1" :f2 #{"o1" "o3"} :f3 #{"c1" "c2"}} vals))))
    (testing "setting single value select input"
      (ef/at "#test-id > form" (ef/set-form {:f2 "o1"}))
      (let [vals (ef/from "#test-id > form" (ef/read-form))]
        (is (= {:f1 "v1" :f2 "o1" :f3 #{"c1" "c2"}} vals))))
    (testing "setting single value check-box input"
      (ef/at "#test-id > form" (ef/set-form {:f3 "c2"}))
      (let [vals (ef/from "#test-id > form" (ef/read-form))]
        (is (= {:f1 "v1" :f2 "o1" :f3 "c2"} vals))))
    (testing "setting single value check-box input"
      (ef/at "#test-id > form" (ef/set-form {:f1 "n1"
                                             :f2 ["o2" "o1"]
                                             :f3 ["c1"]}))
      (let [vals (ef/from "#test-id > form" (ef/read-form))]
        (is (= {:f1 "n1" :f2 #{"o1" "o2"} :f3 "c1"} vals))))))


;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; Extractor Tests
;;
;;;;;;;;;;;;;;;;;;;;;;;;

(deftest get-attr-test
  (testing "getting an attribute from a node"
    (let [res (ef/from "#test-id" (ef/get-attr :id))]
      (is (= "test-id" res)))))


(deftest get-text-test
  (ef/at "#test-id" (ef/content "testing"))
  (testing "getting the text from a node"
    (let [res (ef/from "#test-id" (ef/get-text))]
      (is (= "testing" res)))))

(deftest get-data-test
  (ef/at "#test-id" (ef/set-data :my-data "testing"))
  (testing "getting the data from a node"
    (let [res (ef/from "#test-id" (ef/get-data :my-data))]
      (is (= "testing" res)))))

(deftest get-prop
  (ef/at "#test-id" (ef/set-prop :my-data "testing"))
  (testing "getting the a property from a node"
    (let [res (ef/from "#test-id" (ef/get-prop :my-data))]
      (is (= "testing" res)))))

(deftest read-form-input-test
  (ef/at "#test-id" (ef/content (build-form)))
  (testing "reading from a select input"
    (let [res (ef/from "select" (ef/read-form-input))]
      (is (= #{"o1" "o2"} res))))
  (testing "reading from a text input"
    (let [res (ef/from "input[type='text']"
                       (ef/read-form-input))]
      (is (= "testing1" res))))
  (testing "reading from a checkbox input"t
    (let [res (ef/from "input[type='checkbox']"
                       (ef/read-form-input))]
      (is (= "c1" res)))))


(deftest read-form-test
  (ef/at "#test-id" (ef/content (build-form)))
  (testing "reading a form"
    (let [res (ef/from "#test-id > form" (ef/read-form))]
      (is (= {:f1 "testing1" :f2 #{"o1" "o2"} :f3 "c1"} res)))))


  
(deftest filter-test
  (ef/at "#test-id" (ef/content (build-form)))
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
;; Async Tests
;;
;;;;;;;;;;;;;;;;;;;;;;;;

(deftest delay-test
  ;because clojurescript test does not handle
  ;async behavor the testing form has to be
  ;inside delay statement.
  (let [cur (.getMilliseconds (js/Date.))]
    (ef/at "#test-id"
           (ef/delay 100
              #(testing "delay function"     
                 (let [now (.getMilliseconds (js/Date.))]
                   (println (Math/abs (- (- now cur) 100)))
                   (is (> 20 (Math/abs (- (- now cur) 100))))))))))
