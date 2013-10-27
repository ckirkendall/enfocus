(ns enfocus.enlive.syntax)
(declare sel-to-string)

(defn sel-to-str [input]
  (let [item (first input)
        rest (rest input)
        end (if (empty? rest) '(()) (sel-to-str rest))]
    (cond
     (keyword? item) (map #(conj % (name item)) end)
     (string? item) (map #(conj % item) end)
     (set? item) (reduce (fn [r1 it]
                           (concat r1 (map #(conj % it) end)))
                         [] (flatten (sel-to-str item)))
     (coll? item) (let [x1 (sel-to-str item)
                        sub (map #(apply str %) (sel-to-str item))]
                     (for [s sub e end]
                         (do (println s e)
                             (conj e s))))
     :default input)))

(defn convert [sel]
  (if (string? sel)
    sel
    (if-let [ors (sel-to-str sel)]
      (apply str (interpose " " (apply concat (interpose "," ors)))))))

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

  
