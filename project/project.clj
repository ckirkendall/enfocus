(defproject enfocus "2.0.2-SNAPSHOT"
  :description "DOM manipulation tool for clojurescript inspired by Enlive"
  :url "http://ckirkendall.github.io/enfocus-site"
  :license {:name "Eclipse Public License - v 1.0"
            :url "http://www.eclipse.org/legal/epl-v10.html"
            :distribution :repo}
  :source-paths ["cljs-src" ".generated/cljs" ".generated/clj"]
  :dependencies [[org.clojure/clojure "1.4.0"]
                 [domina "1.0.2"]
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

