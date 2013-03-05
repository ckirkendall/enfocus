(defproject enfocus "1.0.1"
  :description "DOM manipulation tool for clojurescript inspired by Enlive"
  :source-path "cljs-src"
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [domina "1.0.1" :exclusions [org.clojure/clojurescript]]]
  :plugins [[lein-cljsbuild "0.3.0"]]
  :cljsbuild
  {:builds
   [{:builds nil,
     :source-paths ["cljs-src"],
     :compiler
     {:output-dir "../testing/resources/public/cljs",
      :output-to "../testing/resources/public/cljs/enfocus.js",
      :optimizations :whitespace,
      :pretty-print true}}]})

