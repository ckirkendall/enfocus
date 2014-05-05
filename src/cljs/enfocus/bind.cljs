(ns enfocus.bind
  (:require
   [enfocus.core :as ef :refer [from at set-attr get-attr
                                read-form-input set-form-input
                                ITransform apply-transform
                                nodes->coll set-form]]
   [enfocus.events :as ev :refer [listen]]
   [fresnel.lenses :as seg :refer [Lens -fetch -putback fetch putback]]
   [clojure.set :as set :refer [map-invert]]
   [goog.object :as gobj]))


;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;;  HELPER FUNCTIONS
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
(def default-bindings-opts {:binding-type :two-way ;:from,:two-way
                            :event :blur
                            ;; mappings are used to map the form values
                            ;; into our state object.  It also offers
                            ;; the ability to convert from a value
                            ;; to an object.
                            ;; {:field1 [:ky1 :ky2 :k3]
                            ;;  :field2 {:path [:ky1 :k4]
                            ;;           :to-obj (fn [val] ...)
                            ;;           :from-obj (fn [val] ...)}
                            :mapping nil
                            :delay nil})

(extend-type Keyword
    Lens
    (-fetch [seg value] 
      (if (satisfies? ILookup value)
        (get value seg)
        (aget value (name seg))))
    (-putback [seg value subval]
      (if (associative? value)
        (assoc value seg subval)
        (do (aset value (name seg) subval) value))))

(extend-type string
    Lens
    (-fetch [seg value]
      (if (satisfies? ILookup value)
        (-lookup value seg)
        (aget value seg)))
    (-putback [seg value subval]
      (if (associative? value)
        (assoc value seg subval)
        (do (aset value seg subval) value))))



(defn- key-or-props [obj]
  (if (map? obj)
    (keys obj)
    (seq (gobj/getKeys obj))))


(defn- build-key [id]
  (str "__EVB:" id))

(defn bind-view-watch-fn [id render-func mapping]
  (fn [ctx ref oval nval]
    (let [node (.getElementById js/document id)]
      (if node
        (let [[omval nmval] (if mapping
                              [(fetch oval mapping)
                               (fetch nval mapping)]
                              [oval nval])]
          (when-not  (and (or (coll? nval)
                              (number? nval)
                              (string? nval)) 
                          (= omval nmval))
            (render-func node nmval)))
        (remove-watch ref (build-key id))))))
 
 
(defn bind-view
  ([atm render-func] (bind-view atm render-func nil))
  ([atm render-func mapping]
     (fn [node]
       (let [id (from node (get-attr :id))
             nid (if (empty? id) (gensym "_EVB_") id)
             val (if mapping (fetch @atm mapping) @atm)]
         (when-not (= id nid) (at node (set-attr :id nid)))
         (render-func node val)
         (add-watch atm
                    (build-key nid)
                    (bind-view-watch-fn nid
                                        render-func
                                        mapping))))))


(defn- bind-input-render-fn [mapping]
  (fn [node val]
    (let [nval (if mapping
                 (fetch val mapping)
                 val)]
      (when-not (= (from node (read-form-input)) nval)
        (at node (set-form-input nval))))))


(defn- bind-input-update-atm [atm node-group field delay-tracker]
  (let [delay (when delay-tracker @delay-tracker)
        update-fn (fn [e]
                    (let [val (from node-group
                                    (read-form-input))]
                      (swap! atm #(cond
                                   (vector? field) (putback % field val)
                                   field (-putback field % val)
                                   :else val))))]
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
                (reduce #(let [ky (if (empty? field-map)
                                    %2
                                    (get field-map %2))
                               nval ((keyword ky) form-vals)]
                           (cond
                            (vector? %2) (putback %1 %2 nval)
                            nval (-putback %2 %1 nval)
                            :else %1))
                        cur
                        (or (keys field-map) (key-or-props cur))))))))


(defn- create-val-map [in-map mappings]
  (if (not (empty? mappings))
    (reduce #(assoc %1 %2 (fetch in-map (get mappings %2)))
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
                                                          mapping)]
                              (at node (set-form val-map)))))))
         (at form-node
             (listen :submit
                     (fn [e]
                       (.preventDefault e)
                       (save-form-to-atm atm
                                         (.-currentTarget e)
                                         inv-mapping))))))))
