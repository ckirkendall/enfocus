(defproject enfocus "0.9.1-SNAPSHOT"
  :description "DOM manipulation tool for clojurescript inspired by Enlive"
  :source-path "cljs-src"
  :dependencies [[org.clojure/clojure "1.3.0"]
                 [goog-jar "1.0.0"]
                 [domina "1.0.0-SNAPSHOT"]]
  :dev-dependencies [[lein-eclipse "1.0.0"]
                     [lein-cljsbuild "0.2.1"]]
  :cljsbuild {
    ; The path to the top-level ClojureScript source directory:
    :source-path "cljs-src"
    ; The standard ClojureScript compiler options:
    ; (See the ClojureScript compiler documentation for details.)
    :compiler {
      :output-dir "../sample/resources/public/cljs" 
      :output-to "../sample/resources/public/cljs/enfocus.js"         
      :optimizations :whitespace
      :pretty-print true}})
