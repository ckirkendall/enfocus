(ns enfocus.bind
  (:require
   [enfocus.core :as ef :refer [from at set-attr get-attr]]
   [goog.object :as gobj]))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;  HELPER FUNCTIONS
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def default-bindings-opts {:type :one-way
                            :event :onblur
                            :field nil})


(defn mget-in
  "gets a property in a complex obj or map. This function is similar
   to get-in except that it can get properties of objects and maps
   at any layer in the object, by passing in a seq as the field list
   [l1 l2 l3]."
  [obj field]
  (cond
   (and (map? obj) (sequential? field)) (get-in obj field val)
   (map? obj) (obj field)
   (and obj (keyword? field )) (aget obj (name field))
   (and obj (string? field)) (aget obj field)
   (and obj (sequential? field)) (apply aget obj (map name field))
   :else nil))
 
(defn mset-in
  "sets a property in a complex obj or map. This function is similar
   to assoc-in except that it can set properties of objs and maps
   at any layer in the object, by passing in a seq as the field list
   [l1 l2 l3]."
  [obj field val]
  (cond
   (and (map? obj) (sequential? field)) (assoc-in obj field val)
   (map? obj) (assoc obj field val)
   (and obj (keyword? field )) (do (aset obj (name field) val) obj)
   (and obj (string? field)) (do (aset obj field val) obj)
   (and obj (sequential? field)) (apply aset obj
                                        (concat (map name field) [val]))
   :else obj))
 
(defn key-or-props [obj]
  (if (map? obj)
    (keys obj)
    (seq (gobj/getKeys obj))))



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





