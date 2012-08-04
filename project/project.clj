(defproject enfocus "0.9.1-SNAPSHOT"
  :description "DOM manipulation tool for clojurescript inspired by Enlive"
  :source-path "cljs-src"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [goog-jar "1.0.0"]
                 [domina "1.0.0-beta4" :exclusions [org.clojure/clojurescript]]]
  :dev-dependencies [[lein-eclipse "1.0.0"]
                     [lein-cljsbuild "0.2.1"]]
  :cljsbuild
  {:builds
   [{:builds nil,
     :source-path "cljs-src",
     :compiler
     {:output-dir "../sample/resources/public/cljs",
      :output-to "../sample/resources/public/cljs/enfocus.js",
      :optimizations :whitespace,
      :pretty-print true}}]})
