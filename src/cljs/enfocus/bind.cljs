(ns enfocus.bind
  (:require
   [enfocus.core :as ef :refer [from at set-attr get-attr
                                read-form-input set-form-input
                                ITransform apply-transform
                                nodes->coll set-form]]
   [enfocus.events :as ev :refer [listen]]
   [clojure.set :as set :refer [map-invert]]
   [goog.object :as gobj]))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;  HELPER FUNCTIONS
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def default-bindings-opts {:binding-type :two-way ;:from,:two-way
                            :event :blur
                            :mapping nil
                            :delay nil})


(defn- mget-in
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
 
(defn- mset-in
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
   (and obj (sequential? field)) (do
                                   (apply aset obj
                                          (concat (map name field)
                                                  [val]))
                                   obj)
   :else obj))
 
(defn- key-or-props [obj]
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


(defn- bind-input-render-fn [mapping]
  (fn [node val]
    (let [nval (if mapping
                 (mget-in val mapping)
                 val)]
      (when-not (= (from node (read-form-input)) nval)
        (at node (set-form-input nval))))))


(defn- bind-input-update-atm [atm node-group field delay-tracker]
  (let [delay (when delay-tracker @delay-tracker)
        update-fn (fn [e]
                    (let [val (from node-group
                                    (read-form-input))]
                      (swap! atm #(if field
                                    (mset-in % field val)
                                    val))))]
    (fn [e]
      (if delay-tracker
        (do
          (reset! delay-tracker (.now js/Date))
          (js/setTimeout #(when (>= (- (.now js/Date)
                                       @delay-tracker)
                                    delay)
                            (update-fn e) delay)))
        (update-fn e)))))
  

(defn bind-input
  ([atm] (bind-input atm nil))
  ([atm opt-map]
     (let [{:keys [mapping binding-type event delay]}
           (merge default-bindings-opts opt-map)
           trans (fn [nodes chain]
                   (let [nod-col (nodes->coll nodes)]
                     (when (= binding-type :two-way)
                       (at nodes
                           (bind-view atm
                                      (bind-input-render-fn mapping))))
                     (let [tracker (when (pos? delay) (atom delay))]
                       (at nodes
                           (listen event
                                   (bind-input-update-atm atm
                                                          nod-col
                                                          mapping
                                                          tracker)))))
                   (if chain (apply-transform chain nodes)))]
       
       (reify
         ITransform
         (apply-transform [_ nodes] (trans nodes nil))
         (apply-transform [_ nodes chain] (trans nodes chain))
         IFn
         (-invoke [_ nodes] (trans nodes nil))
         (-invoke [_ nodes chain] (trans nodes chain)))
       )))




(defn- save-form-to-atm
  ([atm form] (save-form-to-atm atm form nil))
  ([atm form field-map]
     (let [form-vals (ef/from form (ef/read-form))]
       (swap! atm
              (fn [cur]
                (reduce #(let [ky (if field-map (get field-map %2) %2)
                               nval ((keyword ky) form-vals)]
                           (if nval (mset-in %1 %2 nval) %1))
                        cur
                        (or (keys field-map) (key-or-props cur))))))))


(defn- create-val-map [in-map mappings]
  (if (not (empty? mappings))
    (reduce #(assoc %1 %2 (mget-in in-map (get mappings %2)))
            {}
            (keys mappings))
    in-map))


(defn bind-form
  ([atm] (bind-form atm nil))
  ([atm opt-map]
     (let [{:keys [mapping binding-type]}
           (merge default-bindings-opts opt-map)
           inv-mapping (map-invert mapping)]
       (fn [form-node]
         (when (= binding-type :two-way)
           (at form-node
               (bind-view atm
                          (fn [node val]
                            (let [val-map (create-val-map val
                                                          inv-mapping)]
                              (at node (set-form val-map)))))))
         (at form-node
             (listen :submit
                     (fn [e]
                       (.preventDefault e)
                       (save-form-to-atm atm
                                         (.-currentTarget e)
                                         mapping))))))))



