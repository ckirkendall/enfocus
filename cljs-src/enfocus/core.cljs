(ns enfocus.core
  (:require [goog.net.XhrIo :as xhr]
            [goog.dom.query :as query]
            [goog.dom :as dom]
            [goog.events :as events]
            [clojure.string :as string]))

(def css-syms {'first-child " *:first-child" 
               'last-child " *:last-child"})

(defn- create-sel-str [css-sel] 
  (apply str (map #(cond 
             (symbol? %) (css-syms %)
             (keyword? %) (str " " (name %))  
             (vector? %) (create-sel-str %)
             (str %) %) css-sel)))

(defn css-select [dom-node css-sel]  
  (let [sel (string/trim (string/replace (create-sel-str css-sel) " :" ":"))
        ret (dom/query sel dom-node)]
    (js/alert ret )
    (js/alert sel)
    ret))

(def tpl-cache (atom {}))

(defn create-hidden-dom [child]
  (let [div (dom/createDom "div" (.strobj {"style" "display: none; width: 0px; height: 0px"}))]
    (. div (appendChild child))
    (dom/appendChild (.body (dom/getDocument)) div)
    div))
    
(defn remove-node-return-child [div]
  (let [child (dom/getFirstElementChild div)]
    (dom/removeNode div)
    child))



(defn load-remote-dom [uri]
  (when (nil? (@tpl-cache uri))
    (let [req (new goog.net.XhrIo)
          callback (fn [req] 
                     (let [text (. req (getResponseText))
                           data (dom/htmlToDocumentFragment text)]
                       (swap! tpl-cache assoc uri data )))]
      (events/listen req goog.net.EventType/COMPLETE #(callback req))
      (. req (send uri "GET")))))

(defn get-cached-dom [uri]
  (let [nod (@tpl-cache uri)]
     (when nod (. nod (cloneNode true))))) 

(defn get-cached-snippit [uri sel]
  (let [sel-str  (create-sel-str sel)
        cache (@tpl-cache (str (uri sel-str)))]
    (if cache (. cache (cloneNode true))
		  (let [tdom (get-cached-dom uri)
		        dom (create-hidden-dom tdom)
		        tsnip (css-select dom sel-str)
            snip (if (instance? js/Array tsnip) (first tsnip) tsnip)]
		    (remove-node-return-child dom)
	      (assoc @tpl-cache (str uri sel-str) snip)
		    snip))))  
 

(defn node? [tst]
  (dom/isNodeLike tst))

(defn nodelist? [tst]
  (instance? js/NodeList tst))

  


(defn nodelist->coll [nl]
    ;; The results are a nodelist, which looks like an array, but
    ;; isn't one. We have to turn it into a collection that we can
    ;; work with. ->this was pulled from ibdknox/pinot
  (for [x (range 0 (.length nl))]
    (aget nl x)))


(defn- flatten-nodes-coll [values]
  (mapcat #(cond (string? %) [(dom/createTextNode %)]
                 (coll? %) %
                 (node? %) [%]
                 (nodelist? %) (nodelist->coll %)
                 :else nil) values))

(defn content [& values]
  (let [fnodes (flatten-nodes-coll values)]
    (fn proc [pnodes] 
      (cond (nodelist? pnodes) 
              (doall (for[idx (range 0 (.length pnodes))]
                       (let [pnod (aget pnodes idx)]
                         (dom/removeChildren pnod)
                         (doall (map #(.appendChild pnod %) fnodes)))))
            (instance? js/Array pnodes)
              (let [pnod (first pnodes)]
                (do 
                 (dom/removeChildren pnod)
                  (doall (map #(.appendChild pnod %) fnodes))))
            :else nil))))

(defn set-attr [& values] 
  (let [at-lst (partition 2 values)]
    (fn [pnodes]
      (cond (nodelist? pnodes) 
              (doall (for[idx (range 0 (.length pnodes))]
                       (let [pnod (aget pnodes idx)]
                         (doall (map #(. pnod (setAttribute (first %) (second %)) at-lst))))))
            (instance? js/Array pnodes)
              (let [pnod (first pnodes)]
                (doall (map #(. pnod (setAttribute (first %) (second %))) at-lst)))
            :else nil))))
      
(defn attr? [& kys] (apply str (mapcat #(str "[" (name %) "]") kys)))

(defn attr= ([] "")
  ([ky txt & forms] 
    (str "[" (name ky) "='" txt "']"   
         (apply attr= forms))))

  
(defn nth-child ([x] (str ":nth-child(" x ")"))
  ([x y]  (str ":nth-child(" x "n+" y ")")))

(defn nth-of-type ([x] (str ":nth-of-type(" x ")"))
  ([x y]  (str ":nth-of-type(" x "n+" y ")")))

(defn nth-last-child ([x] (str ":nth-last-child(" x ")"))
  ([x y]  (str ":nth-last-child(" x "n+" y ")")))

(defn nth-last-of-type ([x] (str ":nth-last-of-type(" x ")"))
  ([x y]  (str ":nth-last-of-type(" x "n+" y ")")))
   

  



  

   
  

               
  
