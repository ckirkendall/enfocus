(ns enfocus.core-test
  (:require
   [enfocus.core :as ef]
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

;;;;;;;;;;;;;;;;;;;;;;;;
;;
;; at form
;;
;;;;;;;;;;;;;;;;;;;;;;;;

(deftest at-test
  (testing "Unit Test for the *at* form"

    (testing "Border Cases"

      (testing "(at selector (transform arg1 ...))"
        (are [expected actual] (= expected actual)

             ;; the transformer is nil 
             nil (ef/at "body" nil)
             nil (ef/at "div" nil)
             nil (ef/at "p" nil)
             nil (ef/at "#test-id" nil)
             nil (ef/at ".test-class" nil)
             nil (ef/at "not a selector" nil) ;should rise an exception

             ;; the selector is nil too
             nil (ef/at nil nil)))      ; ITransform not supported

      (testing "(at a-node (transform arg1 ...))"
        (are [expected actual] (= expected actual)
             
             ;; the transformer is nil
             nil (ef/at js/document nil) ; ITransform not supported
             nil (ef/at js/not-a-node nil) ; Can't find variable: not-a-node
             ))
      
      (testing "(at a-node
                   [selector1] (transform1 arg1 ...)
                   [selector2] (transform2 arg1 ...))"
        (are [expected actual] (= expected actual)

             ;; the node is nil
             nil (ef/at nil [] nil)
             nil (ef/at nil ["body"] nil)
             nil (ef/at nil ["not a selector"] nil) ; should rise an exception?
             nil (ef/at nil [] (ef/content "which ever content"))
             
             ;; the selector is nil
             nil (ef/at js/document nil (ef/content "which ever content")) ; ISelector not supported
             nil (ef/at js/document nil nil) ; ISelector not supported
             nil (ef/at js/not-a-node nil (ef/content "which ever content")) ; Can't find variable: not a node

             ;; the transformer is nil
             nil (ef/at js/document [] nil)
             nil (ef/at js/document ["body"] nil)
             nil (ef/at js/document ["not a selector"] nil) ;should rise an exception?
             nil (ef/at js/not-a-node ["body"] nil) ; Can't find variable: not a node

             ;; every arg is nil
             nil (ef/at nil nil nil)    ;ISelector not supported
             ))
      
      (testing "(at [selector1] (transform1 arg1 ...)
                    [selector2] (transform2 arg1 ...))"
        (are [expected actual] (= expected actual) 
             
             ;; the tranformer is nil
             nil (ef/at ["body"] nil)
             nil (ef/at ["div"] nil)
             nil (ef/at [""] nil)
             nil (ef/at ["not a selector"] nil) ;should rise an exception?
             nil (ef/at [nil] nil))))
    
    (testing "Standard cases"

      (testing "add all the standard cases"
        (are [expected actual] (= expected actual)
             
             ;; add standard cases
             nil true
             )))))

