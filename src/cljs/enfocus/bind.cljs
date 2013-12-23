(ns enfocus.bind
  (:require
   [enfocus.core :as ef :refer [from at set-attr get-attr]]))

(defn- build-key [id]
  (str "__EVB:" id))

(defn bind-view-watch-fn [id render-func]
  (fn [ctx ref oval nval]
    (let [node (.getElementById js/document id)]
      (if node
        (render-func node nval)
        (remove-watch ref (build-key id))))))
 
 
 
(defn bind-view [atm render-func]
  (fn [node]
    (let [id (from node (get-attr :id))
          nid (if (empty? id) (gensym "_EVB_") id)]
      (when-not (= id nid) (at node (set-attr :id nid)))
      (render-func node @atm)
      (add-watch atm
                 (build-key nid)
                 (bind-view-watch-fn nid render-func)))))





