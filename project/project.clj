(defproject enfocus "1.0.0-beta2"
  :description "DOM manipulation tool for clojurescript inspired by Enlive"
  :source-path "cljs-src"
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [domina "1.0.0" :exclusions [org.clojure/clojurescript]]]
  :dev-dependencies [[lein-eclipse "1.0.0"]
                     [lein-cljsbuild "0.2.9"]]
  :cljsbuild
  {:builds
   [{:builds nil,
     :source-path "cljs-src",
     :compiler
     {:output-dir "../sample/resources/public/cljs",
      :output-to "../sample/resources/public/cljs/enfocus.js",
      :optimizations :whitespace,
      :pretty-print true}}]})

