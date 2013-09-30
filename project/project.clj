(defproject enfocus "2.0.0-SNAPSHOT"
  :description "DOM manipulation tool for clojurescript inspired by Enlive"
  :min-lein-version "2.1.3"
  :source-paths ["src/clj"]
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-1909"]
                 [domina "1.0.2-SNAPSHOT"]
                 [org.jsoup/jsoup "1.7.2"]]
  :plugins [[lein-cljsbuild "0.3.3"]]
  :hooks [leiningen.cljsbuild]
  :cljsbuild
  {:crossovers [enfocus.enlive.syntax]
   :builds
   {:whitespace
     {:source-paths ["src/cljs"]
      :compiler
      {:output-dir "../testing/resources/public/cljs"
       :output-to "../testing/resources/public/cljs/enfocus.js"
       :optimizations :whitespace
       :pretty-print true}}}})


