(ns enfocus.reporting.report-generator)

(def ^:export dom-report (atom []))

(defn ^:export  generate-summary-report [] 
  (let [frag (.createDocumentFragment js/document)]
    (doseq [[test res] @dom-report]
      (let [div (.createElement js/document "div")]
        (set! (.-className div) (name res))
        (set! (.-innerHTML div) test)
        (.appendChild frag div)))
    (.appendChild (.-body js/document) frag)))


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
