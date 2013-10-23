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
                               :pretty-print false}}

                             ;; for reporting
                             :ws
                             {:source-paths ["test/reporting" "src/cljs"]
                              :compiler
                              {:output-to "dev-resources/public/js/rep_ws.js"
                               :optimizations :whitespace
                               :pretty-print true}}

                             :smp
                             {:source-paths ["test/reporting" "src/cljs"]
                              :compiler
                              {:output-to "dev-resources/public/js/rep_smp.js"
                               :optimizations :simple
                               :pretty-print false}}

                             :adv
                             {:source-paths ["test/reporting" "src/cljs"]
                              :compiler
                              {:output-to "dev-resources/public/js/rep_adv.js"
                               :optimizations :advanced
                               :pretty-print false}}}

                    :test-commands {"slimerjs-ws"
                                    ["slimerjs"
                                     :runner
                                     "dev-resources/public/js/whitespace.js"]

                                    "slimerjs-simple"
                                    ["slimerjs"
                                     :runner
                                     "dev-resources/public/js/simple.js"]

                                    "slimerjs-advanced"
                                    ["slimerjs"
                                     :runner
                                     "dev-resources/public/js/advanced.js"]

                                    "phantomjs-ws"
                                    ["phantomjs"
                                     :runner
                                     "dev-resources/public/js/whitespace.js"]

                                    "phantomjs-simple"
                                    ["phantomjs"
                                     :runner
                                     "dev-resources/public/js/simple.js"]

                                    "phantomjs-advanced"
                                    ["phantomjs"
                                     :runner
                                     "dev-resources/public/js/advanced.js"]

                                    ;; for reporting
                                    "whitespace"
                                    ["runners/phantomjs.js"
                                     "dev-resources/public/test_ws.html"]

                                    "simple"
                                    ["runners/phantomjs.js"
                                     "dev-resources/public/test_simple.html"]

                                    "advanced"
                                    ["runners/phantomjs.js"
                                     "dev-resources/public/test_advanced.html"]}}

                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}
                   :injections [(require '[cljs.repl.browser :as brepl]
                                         '[cemerick.piggieback :as pb])
                                (defn browser-repl []
                                  (pb/cljs-repl :repl-env
                                                (brepl/repl-env :port 9000)))]}})
