(ns enfocus.core 
  (:require [enfocus.enlive.syntax :as en]
            [goog.net.XhrIo :as xhr]
            [goog.dom.query :as query]
            [goog.style :as style]
            [goog.events :as events]
            [goog.dom :as dom]
            [goog.dom.classes :as classes]
            [goog.dom.ViewportSizeMonitor :as vsmonitor]
            [goog.fx :as fx]
            [goog.fx.dom :as fx-dom]
            [goog.async.Delay :as gdelay]
            [goog.Timer :as timer]
            [clojure.string :as string]
            [domina :as domina]
            [domina.css :as dcss]
            [domina.xpath :as xpath])
  (:require-macros [enfocus.macros :as em])) 
(declare css-syms css-select create-sel-str at from)

;###################################################
; Selector Protocol
;###################################################
(defprotocol ISelector
  (select [this] [this root] [this root id-mask]
    "takes root node and returns a domina node list"))

;#################################################### 
; Utility functions
;####################################################
(def debug false)

(defn log-debug [mesg] 
  (when (and debug (not (= (.-console js/window) js/undefined)))
    (.log js/console mesg)))

(defn setTimeout [func ttime]
  (timer/callOnce func ttime)) 

(defn node? [tst]  
  (dom/isNodeLike tst))  

(defn nodelist? [tst]
  (instance? js/NodeList tst))

(defn nodes->coll 
  "coverts a nodelist, node into a collection"
  [nl]
  (if (= nl js/window)
    [nl]
    (domina/nodes nl)))

(defn- flatten-nodes-coll [values]
  "takes a set of nodes and nodelists and flattens them"
  (mapcat #(cond (string? %) [(dom/createTextNode %)]
                 :else (nodes->coll %)) values))


(defn- style-set
  "Sets property name to a value on a element and	Returns the original object"
  [obj values]
    (do (doseq [[attr value] (apply hash-map values)]
          (style/setStyle obj (name attr) value))
      obj))

(defn- style-remove
  "removes the property value from an elements style obj."
  [obj values]
  (doseq [attr values]
    (if (.-IE goog/userAgent) 
      (style/setStyle obj (name attr) "")
      (.  (.-style obj) (removeProperty (name attr))))))

(defn get-eff-prop-name [etype]
  (str "__ef_effect_" etype))

(defn get-mills [] (. (js/Date.) (getMilliseconds)))


(defn child-of? 
  "returns true if the node(child) is a child of parent"
  [parent child]
  (cond 
    (not child) false
    (identical? parent child) false
    (identical? (.-parentNode child) parent) true
    :else (recur parent (.-parentNode child))))
    

(defn mouse-enter-leave 
  "this is used to build cross browser versions of :mouseenter and :mouseleave events"
  [func]
  (fn [e]
    (let [re (.-relatedTarget e)
          this (.-currentTarget e)]
      (when (and
              (not (identical? re this))
              (not (child-of? this re)))
        (func e)))))

(defn pix-round [step]
  (if (neg? step) (Math/floor step) (Math/ceil step)))

(defn add-map-attrs 
  ([elem ats]
   (when elem 
     (when (map? ats)
       (do
         (doseq [[k v] ats]
           (add-map-attrs elem k v))
         elem))))
  ([elem k v]
	   (. elem (setAttribute (name k) v))
   elem))

;####################################################
; The following functions are used to manage the
; emote dom features for templates and snippets
;####################################################

(def tpl-load-cnt 
  "this is incremented everytime a remote template is loaded and decremented when
   it is added to the dom cache"
  (atom 0))
     

(def tpl-cache 
  "cache for the remote templates"
  (atom {}))

(def hide-style (.-strobj {"style" "display: none; width: 0px; height: 0px"}))

(defn create-hidden-dom 
  "Add a hidden div to hold the dom as we are transforming it this has to be done
   because css selectors do not work unless we have it in the main dom"
  [child]
  (let [div (dom/createDom "div" hide-style)]
    (if (= (.-nodeType child) 11) 
      (dom/appendChild div child)
      (do
        (log-debug (count (domina/nodes child))) 
        (doseq [node (domina/nodes child)]
          (dom/appendChild div node))))
    (dom/appendChild (.-documentElement (dom/getDocument)) div)
    div))   
    
(defn remove-node-return-child 
  "removes the hidden div and returns the children"
  [div]
  (let [child (.-childNodes div)
        frag (. js/document (createDocumentFragment))]
    (dom/append frag child)
    (dom/removeNode div)
    frag))

  
(defn replace-ids 
  "replaces all the ids in a string html fragement/template with a generated 
   symbol appended on to a existing id this is done to make sure we don't have
   id colisions during the transformation process"
  [text]
  (let [re (js/RegExp. "(<.*?\\sid=['\"])(.*?)(['\"].*?>)" "g")
        sym (str (name (gensym "id")) "_")]
    [(str sym) (.replace text re (fn [a b c d] (str b sym c d)))]))


(defn reset-ids 
  "before adding the dom back into the live dom we reset the masked ids to orig vals"
  [sym nod]
  (let [id-nodes (css-select nod "*[id]")
        nod-col (nodes->coll id-nodes)]
    (doall (map #(let [id (. % (getAttribute "id"))
                       rid (. id (replace sym ""))]
                   (. % (setAttribute "id" rid))) nod-col))))  


(defn load-remote-dom 
  "loads a remote file into the cache, and masks the ids to avoid collisions"
  [uri dom-key]
  (when (nil? (@tpl-cache uri))
    (swap! tpl-load-cnt inc)
    (let [req (new goog.net.XhrIo)
          callback (fn [req] 
                     (let [text (. req (getResponseText))
                           [sym txt] (replace-ids text)]
                       (swap! tpl-cache assoc dom-key [sym txt] )))]
      (events/listen req goog.net.EventType/COMPLETE 
                     #(do 
                        (callback req) 
                        (swap! tpl-load-cnt dec)))
      (. req (send uri "GET")))))

(defn html-to-dom [html]
  (let [dfa (nodes->coll (domina/html-to-dom html))
        frag (. js/document (createDocumentFragment))] 
    (log-debug (count dfa))
    (doseq [df dfa]
      (dom/append frag df))
    frag))


(defn get-cached-dom  
  "returns and dom from the cache and symbol used to scope the ids"
  [uri] 
  (let [nod (@tpl-cache uri)]   
     (when nod [(first nod) (html-to-dom (second nod))]))) 

(defn get-cached-snippet   
  "returns the cached snippet or creates one and adds it to the cache if needed"
  [uri sel]  
  (let [sel-str  (create-sel-str sel)
        cache (@tpl-cache (str uri sel-str))]
    (if cache [(first cache) (html-to-dom (second cache))]
        (let [[sym tdom] (get-cached-dom uri)  
              dom (create-hidden-dom tdom)
              tsnip (domina/nodes (css-select sym dom sel))
              html_snip (apply str (map #(.-outerHTML %) tsnip))]
          (remove-node-return-child dom)
          (swap! tpl-cache assoc (str uri sel-str) [sym html_snip])
          [sym (html-to-dom html_snip)]))))  
 
  

;####################################################
; The following functions are used to transform the
; dom structure. each function returns a function
; taking the a set of nodes from a selector
;####################################################

(defn extr-multi-node 
  "wrapper function for extractors that maps the extraction to all nodes returned by the selector"
  [func]
  (fn trans 
    [pnodes] 
    (let [pnod-col (nodes->coll pnodes)
          result (map func pnod-col)] 
      (if (<= (count result) 1) (first result) result))))

(defn chainable-standard 
  "wrapper function for transforms, maps the transform to all nodes returned
   by the selector and provides the ability to chain transforms with the chain command."
  [func]
  (fn trans 
    ([pnodes] (trans pnodes nil))
    ([pnodes chain]
      (let [pnod-col (nodes->coll pnodes)] 
        (doall (map func pnod-col))
        (when (not (nil? chain))
          (chain pnodes))))))

(defn chainable-effect
  "wrapper function for effects, maps the effect to all nodes returned by the
   selector and provides chaining and callback functionality"
  [func callback]
  (fn trans 
    ([pnodes] (trans pnodes nil))
    ([pnodes chain]
      (let [pnod-col (nodes->coll pnodes)
            cnt (atom (count pnod-col))
            partial-cback (fn []
                            (swap! cnt dec)
                            (when (= 0 @cnt) 
                              (when (not (nil? callback)) (callback pnodes))
                              (when (not (nil? chain)) (chain pnodes))))] 
        (doseq [pnod pnod-col] (func pnod partial-cback))))))


(defn domina-chain
  "Allows standard domina functions to be chainable"
  ([func]
     (fn trans
       ([nodes] (trans nodes nil))
       ([nodes chain]
          (func nodes)
          (when (not (nil? chain)) (chain nodes))))) 
  ([values func]
     (fn trans
       ([nodes] (trans nodes nil))
       ([nodes chain]
          (let [vnodes (mapcat #(domina/nodes %) values)]
            (func nodes vnodes))
          (when (not (nil? chain)) (chain nodes))))))

;;TODO need to figure out how to make sure this stay just as
;;text and not convert to html.
(defn en-content 
  "Replaces the content of the element. Values can be nodes or collection of nodes."
  [& values]
  (domina-chain values #(do
                          (domina/destroy-children! %1)
                          (domina/append! %1 %2)))) 
  
(defn en-html-content 
  "Replaces the content of the element with the dom structure represented by the html string passed"
  [txt]
  (domina-chain #(domina/set-html! % txt)))


(defn en-set-attr 
  "Assocs attributes and values on the selected element."
  [& values] 
  (let [pairs (partition 2 values)]
    (domina-chain
     #(doseq [[name value] pairs] (domina/set-attr! % name value)))))   

(defn en-remove-attr 
  "Dissocs attributes on the selected element."
  [& values]
  (domina-chain #(doseq [name values] (domina/remove-attr! % name))))


(defn en-set-prop [& forms]
  (em/trans [node]
     (let [h (mapcat (fn [[n v]](list (name n) v)) (partition 2 forms))]
       (dom/setProperties node (apply js-obj h)))))


(defn- has-class 
  "returns true if the element has a given class"
  [el cls]
  (classes/hasClass el cls))


(defn en-add-class 
  "Adds the specified classes to the selected element." 
  [ & values]
  (domina-chain
    #(doseq [val values] (domina/add-class! % val))))


(defn en-remove-class 
  "Removes the specified classes from the selected element." 
  [ & values]
  (domina-chain
    #(doseq [val values] (domina/remove-class! % val))))


(defn en-set-class
  "Sets the specified classes on the selected element"
  [ & values]
  (domina-chain
   #(domina/set-classes! % values))) 
     

(defn en-do-> [ & forms]
  "Chains (composes) several transformations. Applies functions from left to right."
  (em/trans [pnod]
      (doseq [fun forms] (fun pnod))))

(defn en-append
  "Appends the content of the element. Values can be nodes or collection of nodes."
  [& values]
  (domina-chain values #(domina/append! %1 %2)))


(defn en-prepend
  "Prepends the content of the element. Values can be nodes or collection of nodes."
  [& values]
  (domina-chain values #(domina/prepend! %1 %2)))


(defn en-before
  "inserts the content before the selected node. Values can be nodes or collection of nodes"
  [& values]
  (domina-chain values #(domina/insert-before! %1 %2)))
  

(defn en-after
  "inserts the content after the selected node. Values can be nodes or collection of nodes"
  [& values]
  (domina-chain values #(domina/insert-after! %1 %2)))


(defn en-substitute
  "substitutes the content for the selected node. Values can be nodes or collection of nodes"
  [& values]
  (domina-chain values #(domina/swap-content! %1 %2)))


(defn en-remove-node 
  "removes the selected nodes from the dom" 
  []
  (domina-chain #(domina/detach! %1)))


(defn en-wrap 
  "wrap and element in a new element defined as :div {:class 'temp'}"
  [elm mattr]
  (em/trans [pnod]
    (let [elem (dom/createElement (name elm))]
      (add-map-attrs elem mattr)
      (at elem (em/content (.cloneNode pnod true)))
      (at pnod (em/do-> (em/after elem)
                        (em/remove-node))))))

(defn en-unwrap
  "replaces a node with all its children"
  []
  (em/trans [pnod]
    (let [frag (. js/document (createDocumentFragment))]
      (dom/append frag (.-childNodes pnod))
      (dom/replaceNode frag pnod))))
  

(defn en-set-style 
  "set a list of style elements from the selected nodes"
  [& values]
  (let [pairs (partition 2 values)]
    (domina-chain
      #(doseq [[name value] pairs] (domina/set-style! % name value)))))


(defn en-remove-style 
  "remove a list style elements from the selected nodes. note: you can only remove styles that are inline"
  [& values]
  (em/trans [pnod] 
    (style-remove pnod values)))

(defn en-focus
  "calls the focus function on the selected node"
  []
  (em/trans [node]
    (.focus node)))

(defn en-blur
  "calls the blur function on the selected node"
  []
  (em/trans [node]
    (.blur node)))


(defn en-set-data
  "addes key value pair of data to the selected nodes. Only use clojure data structures when setting"
  [ky val]
  (domina-chain #(domina/set-data! % ky val)))

(def view-port-monitor (atom nil))

(defn get-vp-monitor
  "needed to support window :resize"
  [] 
  (if @view-port-monitor @view-port-monitor
    (do
      (swap! view-port-monitor #(new goog.dom.ViewportSizeMonitor))
      @view-port-monitor)))
      

(defn gen-enter-leave-wrapper [event]
  (let [obj (new js/Object)]
    (set! (.-listen obj) 
          (fn [elm func opt-cap opt-scope opt-handler]
            (let [callback (mouse-enter-leave func)]
              (set! (.-listen callback) func)
              (set! (.-scope callback) opt-scope)
              (if opt-handler
                (.listen opt-handler elm (name event) callback)
                (events/listen elm (name event) callback)))))
    (set! (.-unlisten obj)
          (fn [elm func opt-cap opt-scope opt-handler]
            (let [listeners (events/getListeners elm (name event) false)]
              (doseq [obj listeners]
                (let[listener (.-listener obj)]
                  (when (and (or (not func) (= (.-listen listener) func))
                             (or (not opt-scope) (= (.-scope listener) opt-scope)))
                    (if opt-handler
                      (.unlisten opt-handler elm (name event) listener)
                      (events/unlisten elm (name event) listener))))) listeners)))
    obj))

(def wrapper-register {:mouseenter (gen-enter-leave-wrapper :mouseover)
                       :mouseleave (gen-enter-leave-wrapper :mouseout)})


(defn en-listen
  "adding an event to the selected nodes"
  [event func]
  (let [wrapper (wrapper-register event)]
    (chainable-standard  
      (fn [pnod]
        (if (and (= :resize event) (identical? js/window pnod)) ;support window resize
          (events/listen (get-vp-monitor) "resize" func)
          (if (nil? wrapper)
            (events/listen pnod (name event) func)
            (events/listenWithWrapper pnod wrapper func)))))))

(defn en-remove-listeners 
  "removing all listeners of a given event type from the selected nodes"
  [& event-list]
  (let [get-name #(name (cond  
                          (= % :mouseenter) :mouseover
                          (= % :mouseleave) :mouseout
                          :else %))]
    (chainable-standard  
      (fn [pnod]
        (doseq [ev event-list] (events/removeAll pnod (get-name ev)))))))


(defn en-unlisten 
  "removing a specific event from the selected nodes"
  ([event] (en-remove-listeners event))
  ([event func]
     (let [wrapper (wrapper-register event)]
       (chainable-standard  
        (fn [pnod]
          (if (nil? wrapper) 
            (events/unlisten pnod (name event) func)
            (events/unlistenWithWrapper pnod wrapper func)))))))
  



;####################################################
; effect based transforms
;####################################################
    
(defn en-fade-out 
  "fade the selected nodes over a set of steps" 
  [ttime callback accel]  
  (chainable-effect
    (fn [pnod pcallback]
      (let [anim (fx-dom/FadeOut. pnod ttime accel)]
        (when pcallback 
          (events/listen anim goog.fx.Animation.EventType/END pcallback))
        (. anim (play))))
       callback))

(defn en-fade-in  
  "fade the selected nodes over a set of steps" 
  [ttime callback accel]
  (chainable-effect
    (fn [pnod pcallback]
      (let [anim (fx-dom/FadeIn. pnod ttime accel)]
        (when pcallback 
          (events/listen anim goog.fx.Animation.EventType/END pcallback))
        (. anim (play))))
       callback))

(defn en-resize 
  "resizes the selected elements to a width and height in px optional time series data"
  [wth hgt ttime callback accel]
  (chainable-effect
    (fn [pnod pcallback]
      (let [csize (style/getContentBoxSize pnod)
            start (array (.-width csize) (.-height csize))
            wth (if (= :curwidth wth) (.-width csize) wth)
            hgt (if (= :curheight hgt) (.-height csize) hgt)
            end (array wth hgt)
            anim (fx-dom/Resize. pnod start end ttime accel)]
        (when pcallback 
          (events/listen anim goog.fx.Animation.EventType/END pcallback))
        (. anim (play))))
       callback))
  
(defn en-move
  "moves the selected elements to a x and y in px optional time series data "
  [xpos ypos ttime callback accel]
  (chainable-effect
    (fn [pnod pcallback]
      (let [cpos (style/getPosition pnod)
            start (array (.-x cpos) (.-y cpos))
            xpos (if (= :curx xpos) (.-x cpos) xpos)
            ypos (if (= :cury ypos) (.-y cpos) ypos)
            end (array xpos ypos)
            anim (fx-dom/Slide. pnod start end ttime accel)]
        (when pcallback 
          (events/listen anim goog.fx.Animation.EventType/END pcallback))
        (. anim (play))))
       callback))
  
(defn en-scroll
  "scrolls selected elements to a x and y in px optional time series data"
  [xpos ypos ttime callback accel]
  (ef/chainable-effect
    (fn [pnod pcallback]
      (let [start (array (.-scrollLeft pnod) (.-scrollTop pnod))
            xpos (if (= :curx xpos) (.-scrollLeft pnod) xpos)
            ypos (if (= :cury ypos) (.-scrollTop pnod) ypos)
            end (array xpos ypos)
            anim (fx-dom/Scroll. pnod start end ttime accel)]
        (util/log (str start) (str end))
        (when pcallback
          (events/listen anim goog.fx.Animation.EventType/END pcallback))
        (. anim (play))))
       callback))

;##################################################################
; data extractors
;##################################################################

(defn en-get-attr 
  "returns the attribute on the selected element or elements.
   in cases where more than one element is selected you will
   receive a list of values"
  [attr] 
  (extr-multi-node 
    (fn[pnod]
      (. pnod (getAttribute (name attr))))))

(defn en-get-text
  "returns the attribute on the selected element or elements.
   in cases where more than one element is selected you will
   receive a list of values"
  [] 
  (extr-multi-node 
    (fn[pnod]
      (dom/getTextContent pnod))))

(defn en-get-data
  "returns the data on a selected node for a given key. If bubble is set will look at parent"
  ([ky] (en-get-data ky false))
  ([ky bubble]
     (extr-multi-node
      (fn [node]
        (domina/get-data ky bubble))))) 


;##################################################################
; filtering - these funcitons are to make up for choosing
; css3 selectors as our selectors, not everything can 
; be selected with css selectors in all browser so this
; provides an abstract way to add additional selection
; criteria
;##################################################################

;registerd filter that can be refrenced by keyword
(def reg-filt (atom {}))

(defn en-filter 
  "filter allows you to apply function to futhur scope down what is returned by a selector"
  [tst trans]
  (fn filt
    ([pnodes] (filt pnodes nil))
    ([pnodes chain]
      (let [pnod-col (nodes->coll pnodes)
            ttest (if (keyword? tst) (@reg-filt tst) tst)
            res (filter ttest pnod-col)]
        (if (nil? chain) 
          (trans res)
          (trans res chain))))))

(defn register-filter 
  "registers a filter for a given keyword"
  [ky func]
  (swap! reg-filt assoc ky func))

(defn selected-options 
  "takes a list of options and returns the selected ones. "
  [pnod]
  (.-selected pnod))

(defn checked-radio-checkbox 
  "takes a list of radio or checkboxes and returns the checked ones"
  [pnod]
  (.-checked pnod))

(register-filter :selected selected-options)
(register-filter :checked checked-radio-checkbox)

;##################################################################
; functions involved in processing the selectors
;##################################################################
  
(defn- create-sel-str 
  "converts keywords, symbols and strings used in the enlive selector 
   syntax to a string representing a standard css selector.  It also
   applys id masking if mask provided"
  ([css-sel] (create-sel-str "" css-sel))
  ([id-mask-sym css-sel]
    (apply str (map #(cond 
                       (symbol? %) (css-syms %)
                       (keyword? %) (str " " (. (name %) (replace "#" (str "#" id-mask-sym))))
                       (vector? %) (create-sel-str %)
                       (string? %) (.replace %  "#" (str "#" id-mask-sym))) 
                    css-sel))))

(defn css-select 
  "takes either an enlive selector or a css3 selector and returns a set of nodes that match the selector"
  ([css-sel] (css-select "" js/document css-sel))
  ([dom-node css-sel] (css-select "" dom-node css-sel))
  ([id-mask-sym dom-node css-sel]
     (log-debug dom-node)
     (log-debug (pr-str css-sel))
     ;(log-debug id-mask-sym)
    (let [sel (string/trim (en/convert (create-sel-str id-mask-sym css-sel)))
          ret (dcss/sel dom-node sel)]
      ret)))

;###############################################
;  Core functions and supporting fuctions for
;  for "at" and "from"
;###############################################

(defn nil-t [func]
  (or func en-remove-node))

(defn i-at [id-mask node & trans] 
  (if (= 1 (count trans))
    ((first trans) node)
    (doseq [[sel t] (partition 2 trans)]
           ((nil-t t) (select sel node id-mask)))))

(defn at [node & trans]
  (apply i-at "" node trans)) 
 
(defn from [node & trans] 
  (if (= 1 (count trans))
    ((first trans) node)
    (apply hash-map
     (mapcat (fn [[ky sel ext]]
               [ky (ext (select sel node ""))])
             (partition 3 trans)))))

 

;##########################################
; XPATH - allow (xpath "@id
;##########################################
(defn xpath [path]
  (fn [root id-mask]
    (if (empty? id-mask)
      (xpath/xpath root path)
      (let [tmp (.replace path "@ID='" (str "@ID='" id-mask))
            mpath (.replace path "@id='" (str "@id='" id-mask))]
        (xpath/xpath root mpath)))))
    

;#########################################
; Special Selectors
;#########################################
(defn this-node [root id-mask] root)


;;domina extentions to work with enfocus

(extend-protocol domina/DomContent
  js/Text
  (nodes [content] [content])
  (single-node [content] content))
   
  
(extend-protocol ISelector
  function
  (select [this] (select this js/document ""))
  (select [this root] (select this root ""))
  (select [this root id-mask] (this root id-mask))
  PersistentVector
  (select [this] (select this js/document ""))
  (select [this root] (select this root ""))
  (select [this root id-mask] (css-select id-mask root this))
  js/String
  (select [this] (select this js/document ""))
  (select [this root] (select this root ""))
  (select [this root id-mask] (css-select id-mask root [this])))
  
               
  
