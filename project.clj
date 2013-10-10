(defproject enfocus "2.0.0-SNAPSHOT"
  :description "DOM manipulation tool for clojurescript inspired by Enlive"
  :url "http://ckirkendall.github.io/enfocus-site"
  :license {:name "Eclipse Public License - v 1.0"
            :url "http://www.eclipse.org/legal/epl-v10.html"
            :distribution :repo}
  :min-lein-version "2.1.2"
  :source-paths ["src/clj"]
  :test-paths ["test/clj"]
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-1913"]
                 [domina "1.0.2"]
                 [org.jsoup/jsoup "1.7.2"]
                 [com.cemerick/clojurescript.test "0.0.4"]]

  :plugins [[lein-cljsbuild "0.3.3"]]

  :hooks [leiningen.cljsbuild]
  :cljsbuild
  {:crossovers [enfocus.enlive.syntax]
   :crossover-jar true

   :builds {:whitespace
            {:source-paths ["src/cljs" "test/cljs"]
             :compiler
             {:output-to "resources/public/js/whitespace.js"
              :optimizations :whitespace
              :pretty-print true}}
     
            :simple
            {:source-paths ["src/cljs" "test/cljs"]
             :compiler
             {:output-to "resources/public/js/simple.js"
              :optimizations :simple
              :pretty-print false}}
     
            :advanced
            {:source-paths ["src/cljs" "test/cljs"]
             :compiler
             {:output-to "resources/public/js/advanced.js"
              :optimizations :advanced
              :pretty-print false}}}

   :test-commands {"whitespace"
                   ["runners/phantomjs.js" "resources/public/js/whitespace.js"]

                   "simple"
                   ["runners/phantomjs.js" "resources/public/js/simple.js"]

                   "advanced"
                   ["runners/phantomjs.js" "resources/public/js/advanced.js"]}})

