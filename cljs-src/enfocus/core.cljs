(ns enfocus.core
  (:require [goog.net.XhrIo :as xhr]
            [goog.dom.query :as query]
            [goog.style :as style]
            [goog.events :as events]
            [goog.dom :as dom]
            [goog.events :as events]
            [clojure.string :as string])
  (:require-macros [enfocus.macros :as em]))
(declare css-syms css-select create-sel-str)



;####################################################
; Utility functions
;####################################################

(defn node? [tst]  
  (dom/isNodeLike tst))

(defn nodelist? [tst]
  (instance? js/NodeList tst))

(defn nodes->coll 
  "coverts a nodelist, node into a collection"
  [nl]
  (cond
    (nil? nl) []
    (node? nl) [nl]
    (or (instance? js/Array nl) (coll? nl)) nl
    (nodelist? nl) (for [x (range 0 (.length nl))]
                    (aget nl x))))


(defn- flatten-nodes-coll [values]
  "takes a set of nodes and nodelists and flattens them"
  (mapcat #(cond (string? %) [(dom/createTextNode %)]
                 :else (nodes->coll %)) values))


(defn- style-set
  "Sets property name to a value on a javascript object
	Returns the original object (js-set obj :attr value) "
  ([obj values]
    (do (doseq [[attr value] (apply hash-map values)]
          (style/setStyle obj (name attr) value))
      obj)))



;####################################################
; The following functions are used to transform
; the dom structure
;####################################################

(def tpl-load-cnt 
  "this is incremented everytime a remote template is
   loaded and decremented when it is added to the dom
   cache"
  (atom 0))
     

(def tpl-cache 
  "cache for the remote templates"
  (atom {}))

(def hide-style (.strobj {"style" "display: none; width: 0px; height: 0px"}))

(defn create-hidden-dom 
  "Add a hidden div to hold the dom as we are transforming it this
   has to be done because css selectors do not work unless we have
   it in the main dom"
  [child]
  (let [div (dom/createDom "div" hide-style)]
    (. div (appendChild child))
    (dom/appendChild (.body (dom/getDocument)) div)
    div)) 
    
(defn remove-node-return-child 
  "removes the hidden div and returns the children"
  [div]
  (let [child (.childNodes div)
        frag (. js/document (createDocumentFragment))]
    (dom/append frag child)
    (dom/removeNode div)
    frag))

  
(defn replace-ids 
  "replaces all the ids in a string html fragement/template
   with a generated symbol appended on to a existing id
   this is done to make sure we don't have id colisions
   during the transformation process"
  [text]
  (let [re (js/RegExp. "(<.*?\\sid=['\"])(.*?)(['\"].*?>)" "g")
        sym (str (name (gensym "id")) "_")]
    [(str sym) (.replace text re (fn [a b c d] (str b sym c d)))]))


(defn reset-ids 
  "before adding the transformed dom back into the live dom we 
   reset the ids back to their original values"
  [sym nod]
  (let [id-nodes (css-select nod "*[id]")
        nod-col (nodes->coll id-nodes)]
    (doall (map #(let [id (. % (getAttribute "id"))
                       rid (. id (replace sym ""))]
                   (. % (setAttribute "id" rid))) nod-col))))  
    

(defn load-remote-dom 
  "loads a remote file into the cache, before adding to the
   cache we replace the ids to avoid collisions"
  [uri]
  (when (nil? (@tpl-cache uri))
    (swap! tpl-load-cnt inc)
    (let [req (new goog.net.XhrIo)
          callback (fn [req] 
                     (let [text (. req (getResponseText))
                           [sym txt] (replace-ids text)
                           data (dom/htmlToDocumentFragment txt)
                           body (first (nodes->coll (css-select data "body")))]
                       (if body
                         (let [frag (. js/document (createDocumentFragment))
                               childs (.childNodes frag)]
                           (dom/append frag childs)
                           (swap! tpl-cache assoc uri [sym frag]))
                         (swap! tpl-cache assoc uri [sym data] ))))]
      (events/listen req goog.net.EventType/COMPLETE 
                     #(do 
                        (callback req) 
                        (swap! tpl-load-cnt dec)))
      (. req (send uri "GET")))))


(defn get-cached-dom 
  "returns and dom from the cache and symbol used to scope the ids"
  [uri]
  (let [nod (@tpl-cache uri)]   
     (when nod [(first nod) (. (second nod) (cloneNode true))]))) 

(defn get-cached-snippet 
  "returns the cached snippet or creates one and adds it to the
   cache if needed"
  [uri sel]  
  (let [sel-str  (create-sel-str sel)
        cache (@tpl-cache (str (uri sel-str)))]
    (if cache [(first cache) (. (second cache) (cloneNode true))]
		  (let [[sym tdom] (get-cached-dom uri)  
		        dom (create-hidden-dom tdom)
		        tsnip (css-select dom sel-str)
            snip (if (instance? js/Array tsnip) (first tsnip) tsnip)]
		    (remove-node-return-child dom)
	      (assoc @tpl-cache (str uri sel-str) [sym snip])
		    [sym snip]))))  
 
  

;####################################################
; The following functions are used to transform the
; dom structure. each function returns a function
; taking the a set of nodes from a selector
;####################################################

(defn multi-node-proc 
  "takes a function an returns a function that
   applys a given function on all nodes returned
   by a given selector"
  [func]
  (fn [pnodes]
    (let [pnod-col (nodes->coll pnodes)] 
       (doall (map func pnod-col )))))


(defn content-based-trans 
  "HOF to remove the duplicate code in transformation that
   handle creating a fragment and applying it in some way
   to the selected node"
  [values func]
  (let [fnodes (flatten-nodes-coll values)]
    (multi-node-proc 
      (fn [pnod]
        (let [frag (. js/document (createDocumentFragment))]
          (doall (map #(dom/appendChild frag (. % (cloneNode true))) fnodes))
          (func pnod frag))))))
    

(defn en-content 
  "Replaces the content of the element. Values can be nodes or collection of nodes."
  [& values]
  (content-based-trans
    values
    (fn [pnod frag]
      (dom/removeChildren pnod)
      (dom/appendChild pnod frag))))

(defn en-html-content
  "Replaces the content of the element with the dom structure
   represented by the html string passed"
  [txt]
  (multi-node-proc
    (fn [pnod] 
      (let [frag (dom/htmlToDocumentFragment txt)]
        (dom/removeChildren pnod)
        (dom/append pnod frag)))))


(defn en-set-attr 
  "Assocs attributes and values on the selected element."
  [& values] 
  (let [at-lst (partition 2 values)]
    (multi-node-proc 
      (fn[pnod]
        (doall (map (fn [[a v]] (. pnod (setAttribute (name a) v))) at-lst))))))


(defn en-remove-attr 
  "Dissocs attributes on the selected element."
  [& values] 
  (multi-node-proc 
    (fn[pnod]
      (doall (map #(. pnod (removeAttribute (name %))) values)))))


(defn- has-class 
  "returns true if the element has a given class"
  [el cls]
  (let [regex (js/RegExp. (str "(\\s|^)" cls "(\\s|$)"))
        cur-cls (.className el)]
    (. cur-cls (match regex))))


(defn en-add-class 
  "Adds the specified classes to the selected element." 
  [ & values]
  (multi-node-proc 
    (fn [pnod]
      (let [cur-cls (.className pnod)]
        (doall (map #(if (not (has-class pnod %))
                       (set! (.className pnod) (str cur-cls " " %)))
                       values))))))


(defn en-remove-class 
  "Removes the specified classes from the selected element." 
  [ & values]
  (multi-node-proc  
    (fn [pnod]
      (let [cur (.className pnod)]
        (doall (map #(if (has-class pnod %)
                       (let [regex (js/RegExp. (str "(\\s|^)" % "(\\s|$)"))]
                         (set! (.className pnod) (. cur (replace regex " ")))))
                         values))))))

(defn en-do-> [ & forms]
  "Chains (composes) several transformations. Applies functions from left to right."
  (multi-node-proc 
    (fn [pnod]
      (doall (map #(% pnod) forms)))))

(defn en-append
  "Appends the content of the element. Values can be nodes or collection of nodes."
  [& values]
  (content-based-trans
    values
    (fn [pnod frag]
      (dom/appendChild pnod frag))))
  

(defn en-prepend
  "Prepends the content of the element. Values can be nodes or collection of nodes."
  [& values]
  (content-based-trans
    values
    (fn [pnod frag]
      (let [nod (.firstChild pnod)]
        (. pnod (insertBefore frag nod))))))


(defn en-before
  "inserts the content before the selected node.  Values can be nodes or collection of nodes"
  [& values]
  (content-based-trans
    values
    (fn [pnod frag]
      (dom/insertSiblingBefore frag pnod))))
  

(defn en-after
  "inserts the content after the selected node.  Values can be nodes or collection of nodes"
  [& values]
  (content-based-trans
    values
    (fn [pnod frag]
      (dom/insertSiblingAfter frag pnod))))


(defn en-substitute
  "substitutes the content for the selected node.  Values can be nodes or collection of nodes"
  [& values]
  (content-based-trans
    values
    (fn [pnod frag]
      (dom/replaceNode frag pnod))))

(defn en-remove-node 
  "removes the selected nodes from the dom" 
  [& values]
  (multi-node-proc 
    (fn [pnod]
      (dom/removeNode pnod))))

(defn en-set-style 
  "set a list of style elements from the selected nodes"
  [& values]
  (multi-node-proc 
    (fn [pnod]
      (style-set pnod values))))

(defn en-remove-style 
  "remove a list style elements from the selected nodes
   note: you can only remove styles that are inline styles
   set in css need to overridden through set-style"
  [& values]
  (multi-node-proc 
    (fn [pnod]
      (doall 
        (map #(. (.style pnod) (removeProperty (name %))) values)))))

(defn en-add-event 
  "adding an event to the selected nodes"
  [event func]
  (multi-node-proc 
    (fn [pnod]
      (events/listen pnod (name event) func))))
  
(defn en-remove-event 
  "adding an event to the selected nodes"
  [& event-list]
  (multi-node-proc 
    (fn [pnod]
      (doall (map #(events/removeAll pnod (name %)) event-list)))))
  

(defn en-fade-out 
  "fade the selected nodes over a set of steps"
  [ttime steps]
  (let [incr (Math/ceil (/ 100 steps))]
    (em/effect  ttime steps
             (fn [pnod]
               (let [op (style/getOpacity pnod)]
                 (cond
                   (= "" op) (style/setOpacity pnod (- 1 incr))
                   (<= 0 op) (sytle/setOpacity pnod (- op incr))))))))

(defn en-fade-in 
  "fade the selected nodes over a set of steps"
  [ttime steps]
  (let [incr (Math/ceil (/ 100 steps))]
    (em/effect  ttime steps
             (fn [pnod]
               (let [op (style/getOpacity pnod)]
                 (cond
                   (= "" op) (style/setOpacity pnod incr)
                   (>= 1 op) (sytle/setOpacity pnod (+ op incr))))))))
  
;##################################################################
; functions involved in processing the selectors
;##################################################################
  
(defn- create-sel-str 
  "converts keywords, symbols and strings used in the enlive selector 
   syntax to a string representing a standard css selector.  It also
   takes a string to append to all ids so they do not conflict with 
   existing ids in the live dom"
  ([css-sel] (create-sel-str "" css-sel))
  ([id-scope-sym css-sel]
    (apply str (map #(cond 
                       (symbol? %) (css-syms %)
                       (keyword? %) (str " " (. (name %) (replace "#" (str "#" id-scope-sym))))
                       (vector? %) (create-sel-str %)
                       (string? %) (.replace %  "#" (str "#" id-scope-sym))) 
                    css-sel))))

(defn css-select 
  "takes either an enlive selector or a css3 selector and
   returns a set of nodes that match the selector"
  ([dom-node css-sel] (css-select "" dom-node css-sel))
  ([id-scope-sym dom-node css-sel]
    (let [sel (string/trim (string/replace (create-sel-str id-scope-sym css-sel) " :" ":"))
          ret (dom/query sel dom-node)]
      ret)))


;##################################################################
; The following functions are used to support the enlive selector
; syntax. They simply translate to the string representation to
; the standard css3 selector standard
;##################################################################

(def css-syms {'first-child " *:first-child" 
               'last-child " *:last-child"})
      
(defn  attr?
  "Matches any E element that contains att attribute: 
   css -> E[att][att2]..."
  [& kys] (apply str (mapcat #(str "[" (name %) "]") kys)))

(defn attr= 
  "Matches any E element whose att attribute value equals 'val':  
   css -> E[att=val][att2=val2]..."
  ([] "")
  ([ky txt & forms] 
    (str "[" (name ky) "='" txt "']"   
         (apply attr= forms))))

  
(defn nth-child 
  "Matches any E element that is the n-th child of its parent:
   css -> E:nth-child(x) or E:nth-child(xn+y)" 
  ([x] (str ":nth-child(" x ")"))
  ([x y]  (str ":nth-child(" x "n+" y ")")))

(defn nth-of-type 
  "Matches any E element that is the n-th sibling of its type: 
   css -> E:nth-of-type(x) or E:nth-of-type(xn+y)" 
  ([x] (str ":nth-of-type(" x ")"))
  ([x y]  (str ":nth-of-type(" x "n+" y ")")))

(defn nth-last-child 
  "Matches any E element that is the n-th child of its parent, 
   counting from the last child. 
   css -> E:nth-last-child(x) or E:nth-last-child(xn+y)"
  ([x] (str ":nth-last-child(" x ")"))
  ([x y]  (str ":nth-last-child(" x "n+" y ")")))

(defn nth-last-of-type 
  "Matches any E element that is the n-th sibling of its type
   counting from the last child: 
   css -> E:nth-last-of-type(x) or E:nth-last-of-type(xn+y)"
  ([x] (str ":nth-last-of-type(" x ")"))
  ([x y]  (str ":nth-last-of-type(" x "n+" y ")")))
   

  



  

   
  

               
  
