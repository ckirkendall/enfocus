(defproject enfocus "2.0.1-SNAPSHOT"
  :description "DOM manipulation tool for clojurescript inspired by Enlive"
  :min-lein-version "2.1.3"
  :source-paths ["src/clj"]
  :test-paths ["test/clj"]
  
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-1835"]
                 [domina "1.0.2"]
                 [org.jsoup/jsoup "1.7.2"]
                 [com.cemerick/clojurescript.test "0.0.5-SNAPSHOT"]
                 [ring "1.2.0"]]
  
  :plugins [[lein-cljsbuild "0.3.3"]]
  :hooks [leiningen.cljsbuild]
  
  :cljsbuild
  {:crossovers [enfocus.enlive.syntax]
   :crossover-jar true
   
   :builds
   {:whitespace
    {:source-paths ["test/clj" "src/cljs" "test/cljs"] 
     :compiler
     {:output-to "resources/public/js/testable_ws.js"
      :optimizations :whitespace
      :pretty-print true}}
    
    :simple
    {:source-paths ["test/clj" "src/cljs" "test/cljs"]
     :compiler
     {:output-to "resources/public/js/testable_simple.js"
      :optimizations :simple
      :pretty-print false}}
    
    :advanced
    {:source-paths ["test/clj" "src/cljs" "test/cljs"]
     :compiler
     {:output-to "resources/public/js/testable_advanced.js"
      :optimizations :advanced
      :pretty-print false}}}
   
   :test-commands {"whitespace"
                   ["runners/phantomjs.js" 
                    "resources/public/test_ws.html"]
                                               
                   "simple"
                   ["runners/phantomjs.js" 
                    "resources/public/test_simple.html"]
                                               
                   "advanced"
                   ["runners/phantomjs.js" 
                    "resources/public/test_advanced.html"]}})


