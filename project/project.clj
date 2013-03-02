(defproject enfocus "1.0.0"
  :description "DOM manipulation tool for clojurescript inspired by Enlive"
  :source-path "cljs-src"
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [domina "1.0.1" :exclusions [org.clojure/clojurescript]]]
  :dev-dependencies [[lein-eclipse "1.0.0"]
                     [lein-cljsbuild "0.2.10"]]
  :cljsbuild
  {:builds
   [{:builds nil,
     :source-path "cljs-src",
     :compiler
     {:output-dir "../testing/resources/public/cljs",
      :output-to "../testing/resources/public/cljs/enfocus.js",
      :optimizations :whitespace,
      :pretty-print true}}]})

