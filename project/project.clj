(defproject enfocus "2.0.0-SNAPSHOT"
  :description "DOM manipulation tool for clojurescript inspired by Enlive"
  :source-paths ["cljs-src" ".generated/cljs" ".generated/clj"]
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [domina "1.0.1" :exclusions [org.clojure/clojurescript]]
                 [org.jsoup/jsoup "1.7.2"]
                 ]
  :plugins [[lein-cljsbuild "0.3.0"]
            [com.keminglabs/cljx "0.2.2"]]
  :cljx {:builds [{:source-paths ["cljx-src"]
                   :output-path ".generated/clj"
                   :rules cljx.rules/clj-rules}

                  {:source-paths ["cljx-src"]
                   :output-path ".generated/cljs"
                   :extension "cljs"
                   :rules cljx.rules/cljs-rules}]}
  :cljsbuild
  {:builds
   [{:builds nil,
     :source-paths ["cljs-src" ".generated/cljs"]
     :compiler
     {:output-dir "../testing/resources/public/cljs",
      :output-to "../testing/resources/public/cljs/enfocus.js",
      :optimizations :whitespace,
      :pretty-print true}}]}
  :hooks [cljx.hooks])

