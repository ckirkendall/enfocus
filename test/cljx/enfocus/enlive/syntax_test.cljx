#+clj (ns enfocus.enlive.syntax-test
        (:require [clojure.test :refer [deftest testing are]]
                  [enfocus.enlive.syntax :refer [convert]]))

#+cljs (ns enfocus.enlive.syntax-test
         (:require-macros [cemerick.cljs.test :refer (deftest is are testing)])
         (:require [cemerick.cljs.test :as t]
                   [enfocus.enlive.syntax :refer [convert]]))

(deftest convert-test 
  (testing "Unit Test for (convert arg)\n"
    
    (testing "Edge Cases\n"
      
      (testing "(convert a-val)" 
               (are [expected actual] (= expected actual)
                    
                    ;; extreme values for considered input type
                    nil (convert nil)
                    "" (convert "")
                    " " (convert " ")
                    "" (convert ())
                    "" (convert [])
                    "" (convert {})
                    "" (convert #{}))))))



