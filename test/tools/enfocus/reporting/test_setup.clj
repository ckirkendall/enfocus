(ns enfocus.reporting.test-setup
  (:require [cemerick.cljs.test :refer (with-test-out)]))

(defmacro setup-tests []
  `(do
     (defmethod cemerick.cljs.test/report :fail [m#]
       (with-test-out
          (cemerick.cljs.test/inc-report-counter :fail)
          (println "\nFAIL in" (cemerick.cljs.test/testing-vars-str m#))
          (when (seq cemerick.cljs.test/*testing-contexts*) (println (cemerick.cljs.test/testing-contexts-str)))
          (when-let [message# (:message m#)] (println message#))
          (println "expected:" (pr-str (:expected m#)))
          (println "  actual:" (pr-str (:actual m#))))
       (swap! enfocus.reporting.report-generator/dom-report
              #(conj % [(str (cemerick.cljs.test/testing-vars-str m#)
                             " - "
                             (cemerick.cljs.test/testing-contexts-str))
                        :fail])))
     
     (defmethod cemerick.cljs.test/report :pass [m#]
       (with-test-out
          (cemerick.cljs.test/inc-report-counter :pass))
       (swap! enfocus.reporting.report-generator/dom-report
              #(conj % [(str (cemerick.cljs.test/testing-vars-str m#)
                             " - "
                             (cemerick.cljs.test/testing-contexts-str))
                        :pass])))
     
     (defmethod cemerick.cljs.test/report :error [m#]
       (with-test-out
          (cemerick.cljs.test/inc-report-counter :error)
          (println "\nERROR in" (cemerick.cljs.test/testing-vars-str m#))
          (when (seq cemerick.cljs.test/*testing-contexts*) (println (cemerick.cljs.test/testing-contexts-str)))
          (when-let [message# (:message m#)] (println message#))
          (println "expected:" (pr-str (:expected m#)))
          (print "  actual: ")
          (let [actual# (:actual m#)]
            (if (instance? js/Error actual#)
              (println (.-stack actual#))
              (prn actual#))))
       (swap! enfocus.reporting.report-generator/dom-report
              #(conj % [(str (cemerick.cljs.test/testing-vars-str m#)
                             " - "
                             (cemerick.cljs.test/testing-contexts-str))
                        :error])))))

