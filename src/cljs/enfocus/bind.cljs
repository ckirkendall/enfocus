(ns enfocus.bind
  (:require
   [enfocus.core :as ef :refer [from at set-attr get-attr]]
   [goog.object :as gobj]))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;  HELPER FUNCTIONS
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def default-bindings-opts {:type :one-way
                            :event :onblur
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


(defn- bind-input-view [mapping]
  (fn [node val]
    (let [nval (if mapping
                 (get-unify-prop val mapping)
                 val)]
      (when-not (= (.-value node) nval)
        (aset node "value" nval)))))


(defn- bind-input-update-atm [field delay-tracker]
  (let [delay (when delay-tracker @delay-tracker)
        update-fn (fn [e]
                    (let [val (aget e "currentTarget" "value")]
                      (swap! atm #(if field
                                    (set-unify-prop % field val)
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
  ([atm {:keys [mapping type event delay]}]
     (let [opts (merge default-binding-opts opt-map)]
       (fn [node]
         (at node (bind-view atm (bind-input-view mapping)))
         (when (= type :two-way)
           (let [tracker (when delay (atom delay))])
           (at node
               (listen event
                       (bind-input-update-atm mapping tracker))))))))




(defn save-form-to-atm [atm form field-map]
  (let [form-vals (ef/from form (ef/read-form))]
    (swap! atm (fn [cur]
                 (reduce #(let [ky (if field-map (get field-map %2) %2)
                                nval ((keyword ky) form-vals)]
                            (if nval (mset-in %1 %2 nval) %1))
                         cur
                         (or (keys field-map) (key-or-props cur)))))))



