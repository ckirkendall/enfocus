(defproject enfocus "2.0.0-SNAPSHOT"
  :description "DOM manipulation tool for clojurescript inspired by Enlive"
  :source-paths ["cljs-src" ".generated/cljs" ".generated/clj"]
  :min-lein-version "2.2.0"
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-1896"]
                 [domina "1.0.2-SNAPSHOT"]
                 [org.jsoup/jsoup "1.7.2"]]
  :plugins [[lein-cljsbuild "0.3.3"]
            [com.keminglabs/cljx "0.3.0"]]
  :cljx {:builds [{:source-paths ["cljx-src"]
                   :output-path ".generated/clj"
                   :rules :clj}

                  {:source-paths ["cljx-src"]
                   :output-path ".generated/cljs"
                   :rules :cljs}]}
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

