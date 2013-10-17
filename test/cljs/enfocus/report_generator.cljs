(ns enfocus.report-generator)

(def ^:export dom-report (atom '()))

(defn ^:export  generate-summary-report [] 
  (let [frag (.createDocumentFragment js/document)]
    (doseq [[test res] @dom-report]
      (let [div (.createElement js/document "div")]
        (set! (.-className div) (name res))
        (set! (.-innerHTML div) test)
        (.appendChild frag div)))
    (.appendChild (.-body js/document) frag)))

(defn each-fixture [func]
  (let [div (.createElement js/document "div")
        pc (.createElement js/document "p")]
    (.setAttribute div "id" "test-div") 
    (.appendChild (.-body js/document) div)
    (.appendChild div pc)
    (func)
    (.removeChild (.-body js/document) div)))

