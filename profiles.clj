{:dev {:resources-paths ["dev-resources"]
       :test-paths ["test/clj" 
                    "target/test/clj" 
                    "test/tools"
                    
                    ;; from cljs
                    "test/cljs"
                    "target/test/cljs"
                    "src/brepl"]

       :dependencies [[ring "1.2.1"]
                      [compojure "1.1.6"]
                      [enlive "1.1.4"]]

       :plugins [[com.cemerick/clojurescript.test "0.2.1"]
                 [com.cemerick/austin "0.1.3"]
                 [com.keminglabs/cljx "0.3.0"]]

       :cljx {:builds [{:source-paths ["test/cljx"]
                        :output-path "target/test/clj"
                        :rules :clj}

                       {:source-paths ["test/cljx"]
                        :output-path "target/test/cljs"
                        :rules :cljs}]}

       :cljsbuild
       {:builds {:whitespace
                 {:source-paths ["test/tools" "src/cljs" "test/cljs" "target/test/cljs" "src/brepl"]
                  :compiler
                  {:output-to "dev-resources/public/js/whitespace.js"
                   :optimizations :whitespace
                   :pretty-print true}}

                 :simple
                 {:source-paths ["test/tools" "src/cljs" "test/cljs" "target/test/cljs" "src/brepl"]
                  :compiler
                  {:output-to "dev-resources/public/js/simple.js"
                   :optimizations :simple
                   :pretty-print false}}

                 :advanced
                 {:source-paths ["test/tools" "src/cljs" "test/cljs" "target/test/cljs"]
                  :compiler
                  {:output-to "dev-resources/public/js/advanced.js"
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
       :injections [(require '[server :as http :refer [run]]
                             'cemerick.austin.repls)
                    (defn browser-repl []
                      (cemerick.austin.repls/cljs-repl (reset! cemerick.austin.repls/browser-repl-env
                                                               (cemerick.austin/repl-env))))]}}
