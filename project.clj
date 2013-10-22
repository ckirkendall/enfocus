(defproject enfocus "2.0.1-SNAPSHOT"
  :description "DOM manipulation tool for clojurescript inspired by Enlive"
  :url "http://ckirkendall.github.io/enfocus-site"
  :license {:name "Eclipse Public License - v 1.0"
            :url "http://www.eclipse.org/legal/epl-v10.html"
            :distribution :repo}
  
  :min-lein-version "2.2.0"
  
  :source-paths ["src/clj"]
  :test-paths ["test/clj"]
  
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-1847"]
                 [domina "1.0.2"]
                 [org.jsoup/jsoup "1.7.2"]]
  
  :plugins [[lein-cljsbuild "0.3.4"]]
  
  :hooks [leiningen.cljsbuild]
  
  :cljsbuild
  {:crossovers [enfocus.enlive.syntax]
   :crossover-jar true

   :builds {:deploy
            {:source-paths ["src/cljs"]
             :jar true
             :compiler
             {:output-to "dev-resources/public/js/deploy.js"
              :optimizations :whitespace
              :pretty-print true}}}}

  :profiles {:dev {:resources-paths ["dev-resources"]
                   
                   :dependencies [[ring "1.2.0"]
                                  [compojure "1.1.5"]
                                  [com.cemerick/piggieback "0.1.0"]]
                   
                   :plugins [[com.cemerick/clojurescript.test "0.1.0"]]
                   
                   :cljsbuild 
                   {:builds {:whitespace
                             {:source-paths ["src/cljs" "test/cljs" "src/brepl"]
                              :compiler
                              {:output-to "dev-resources/public/js/whitespace.js"
                               :optimizations :whitespace
                               :pretty-print true}}
                             
                             :simple
                             {:source-paths ["src/cljs" "test/cljs" "src/brepl"]
                              :compiler
                              {:output-to "dev-resources/public/js/simple.js"
                               :optimizations :simple
                               :pretty-print false}}

                             :advanced
                             {:source-paths ["src/cljs" "test/cljs"]
                              :compiler
                              {:output-to "dev-resources/public/js/advanced.js"
                               :optimizations :advanced
                               :pretty-print false}}}
                    :test-commands {"whitespace"
                                    ["phantomjs"
                                     :runner
                                     "dev-resources/public/js/whitespace.js"]
                                    
                                    "simple"
                                    ["phantomjs"
                                     :runner
                                     "dev-resources/public/js/simple.js"]
                                    
                                    "advanced"
                                    ["phantomjs" 
                                     :runner
                                     "dev-resources/public/js/advanced.js"]}}
                               
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                   :injections [(require '[cljs.repl.browser :as brepl]
                                         '[cemerick.piggieback :as pb])
                                (defn browser-repl []
                                  (pb/cljs-repl :repl-env
                                                (brepl/repl-env :port 9000)))]}})
