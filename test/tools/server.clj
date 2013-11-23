(ns server
  (:require [cemerick.austin.repls :refer (browser-connected-repl-js)]
            [net.cgrand.enlive-html :as enlive]
            [compojure.core :refer (GET defroutes)]
            [compojure.route :refer  (resources)]
            [ring.adapter.jetty :as jetty]
            [clojure.java.io :as io]))

(enlive/deftemplate page
  (io/resource "public/index.html")
  []
  [:body] (enlive/append
            (enlive/html [:script (browser-connected-repl-js)])))

(defroutes site
  (resources "/")
  (GET "/*" req (page)))

(defn run
  []
  (defonce server
    (jetty/run-jetty #'site {:port 3000 :join? false}))
  server)
