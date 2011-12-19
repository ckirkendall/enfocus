(ns enfocus.ring
  (:use ring.middleware.file
        ring.handler.dump))


 (def app
  (wrap-file handle-dump "resources/public"))
 
 