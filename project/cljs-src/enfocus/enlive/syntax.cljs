(ns enfocus.enlive.syntax)

(defn sel-to-string [item]
  (cond
   (keyword? item) (name item)
   (string? item) item
   (coll? item) (apply str (map #(sel-to-string %) item))))

(defn convert [sel]
  (if (string? sel)
    sel
    (apply str (interpose " " (map sel-to-string sel)))))

(defn- attr-pairs [op elms]
 (let [ts (fn [[x y]] (str "[" (name x) op "='" y "']"))]
    (apply str (map ts (partition 2 elms)))))
  
(defn attr? [& elms]
  (apply str (map #(str "[" (name %) "]") elms)))

(defn attr= [& elms] (attr-pairs "" elms))

(defn attr-has [x & vals]
  (let [ts (fn [y] (str "[" (name x) "~='" y "']"))]
    (apply str (map ts vals))))

(defn attr-starts [& elms] (attr-pairs "^" elms))

(defn attr-ends [& elms] (attr-pairs "$" elms))

(defn attr-contains [& elms] (attr-pairs "*" elms))

(defn attr|= [& elms] (attr-pairs "|" elms))

(defn- nth-op
  ([op x] (str ":nth-" op "(" x ")"))
  ([op x y] (str ":nth-" op "(" x "n" (when (pos? y) "+") y)))
  
(defn nth-child
  ([x] (nth-op "child" x))
  ([x y] (nth-op "child" x y)))

(defn nth-last-child
  ([x] (nth-op "last-child" x))
  ([x y] (nth-op "last-child" x y)))

(defn nth-of-type
  ([x] (nth-op "of-type" x))
  ([x y] (nth-op "of-type" x y)))

(defn nth-last-of-type
  ([x] (nth-op "last-of-type" x))
  ([x y] (nth-op "last-of-type" x y)))

(defn but [& sel]
  (str "not(" (convert sel) ")"))

  