(ns enfocus.core 
  (:require [goog.net.XhrIo :as xhr]
            [goog.dom.query :as query]
            [goog.style :as style]
            [goog.events :as events]
            [goog.dom :as dom]
            [goog.dom.ViewportSizeMonitor :as vsmonitor]
            [goog.debug :as debug]
            [goog.debug.Logger :as glog]
            [goog.events :as events]
            [goog.async.Delay :as gdelay]
            [clojure.string :as string])
  (:require-macros [enfocus.macros :as em])) 
(declare css-syms css-select create-sel-str)


;#################################################### 
; Utility functions
;####################################################
(def debug true)

(defn log-debug [mesg] 
  (when (and debug (not (= (.console js/window) js/undefined)))
    (.log js/console mesg)))

(defn setTimeout [func ttime]
  (. (new goog.async.Delay func ttime) (start))) 

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
    (identical? js/window nl) [nl]
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
  [obj values]
    (do (doseq [[attr value] (apply hash-map values)]
          (style/setStyle obj (name attr) value))
      obj))

(defn- style-remove
  "removes the property value from an elements style obj."
  [obj values]
  (doseq [attr values]
    (if (.IE goog/userAgent) 
      (style/setStyle obj (name attr) "")
      (.  (.style obj) (removeProperty (name attr))))))

(defn get-eff-prop-name [etype]
  (str "__ef_effect_" etype))

(defn get-mills [] (. (js/Date.) (getMilliseconds)))


(defn child-of? 
  "returns true if the node(child) is a child of parent"
  [parent child]
  (cond 
    (not child) false
    (identical? parent child) false
    (identical? (.parentNode child) parent) true
    :else (recur parent (.parentNode child))))
    

(defn mouse-enter-leave 
  "this is used to build cross browser versions of
   :mouseenter and :mouseleave events"
  [func]
  (fn [e]
    (let [re (.relatedTarget e)
          this (.currentTarget e)]
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

(defn extr-multi-node 
  "takes a function an returns a function that
   applys a given function on all nodes returned
   by a given selector"
  [func]
  (fn trans 
    [pnodes] 
    (let [pnod-col (nodes->coll pnodes)
          result (doall (map func pnod-col ))] 
      (if (<= (count result) 1) (first result) result))))

(defn chainable-standard 
  "takes a function an returns a function that
   applys a given function on all nodes returned
   by a given selector"
  [func]
  (fn trans 
    ([pnodes] (trans pnodes nil))
    ([pnodes chain]
      (let [pnod-col (nodes->coll pnodes)] 
        (doall (map func pnod-col ))
        (when (not (nil? chain))
          (chain pnodes))))))

(defn chainable-effect
  "takes a function an returns a function that
   applys a given function on all nodes returned
   by a given selector"
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
        (doall (map #(func % partial-cback) pnod-col ))))))



(defn content-based-trans 
  "HOF to remove the duplicate code in transformation that
   handle creating a fragment and applying it in some way
   to the selected node"
  [values func]
  (let [fnodes (flatten-nodes-coll values)]
    (chainable-standard 
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
  (chainable-standard 
    (fn [pnod] 
      (let [frag (dom/htmlToDocumentFragment txt)]
        (dom/removeChildren pnod)
        (dom/append pnod frag)))))


(defn en-set-attr 
  "Assocs attributes and values on the selected element."
  [& values] 
  (let [at-lst (partition 2 values)]
    (chainable-standard 
      (fn[pnod]
        (doall (map (fn [[a v]] (. pnod (setAttribute (name a) v))) at-lst))))))


(defn en-remove-attr 
  "Dissocs attributes on the selected element."
  [& values] 
  (chainable-standard 
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
  (chainable-standard 
    (fn [pnod]
      (let [cur-cls (.className pnod)]
        (doall (map #(if (not (has-class pnod %))
                       (set! (.className pnod) (str cur-cls " " %)))
                       values))))))


(defn en-remove-class 
  "Removes the specified classes from the selected element." 
  [ & values]
  (chainable-standard 
    (fn [pnod]
      (let [cur (.className pnod)]
        (doall (map #(if (has-class pnod %)
                       (let [regex (js/RegExp. (str "(\\s|^)" % "(\\s|$)"))]
                         (set! (.className pnod) (. cur (replace regex " ")))))
                         values))))))

(defn en-do-> [ & forms]
  "Chains (composes) several transformations. Applies functions from left to right."
  (chainable-standard  
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
  (chainable-standard  
    (fn [pnod]
      (dom/removeNode pnod))))

(defn en-wrap 
  "wrap and element in a new element defined as :div {:class 'temp'}"
  [elm mattr]
  (chainable-standard
    (fn [pnod]
      (let [elem (dom/createElement (name elm))]
        (add-map-attrs elem mattr)
        (em/at elem (em/content (.cloneNode pnod true)))
        (em/at pnod (em/do-> (em/after elem)
                             (em/remove-node)))))))

(defn en-unwrap
  "replaces a node with all its children"
  []
  (chainable-standard
    (fn [pnod]
      (let [frag (. js/document (createDocumentFragment))]
         (em/at frag (em/append (.childNodes pnod)))
         (log-debug frag)
         (log-debug pnod)
         (log-debug (.childNodes pnod))
         (dom/replaceNode frag pnod)))))
  

(defn en-set-style 
  "set a list of style elements from the selected nodes"
  [& values]
  (chainable-standard 
    (fn [pnod]
      (style-set pnod values))))

(defn en-remove-style 
  "remove a list style elements from the selected nodes
   note: you can only remove styles that are inline styles
   set in css need to overridden through set-style"
  [& values]
  (chainable-standard  
    (fn [pnod]
      (style-remove pnod values))))

(def view-port-monitor (atom nil))

(defn get-vp-monitor
  "needed to support window :resize"
  [] 
  (if @view-port-monitor @view-port-monitor
    (do
      (swap! view-port-monitor #(new goog.dom.ViewportSizeMonitor))
      @view-port-monitor)))
      

(defn en-listen
  "adding an event to the selected nodes"
  [event func]
  (cond 
    (= :mouseenter event) (en-listen :mouseover (mouse-enter-leave func))
    (= :mouseleave event) (en-listen :mouseout (mouse-enter-leave func))
    :else (chainable-standard   
            (fn [pnod]
              (if (and (= :resize event) (identical? js/window pnod)) ;support window resize
                (events/listen (get-vp-monitor) "resize" func)
                (events/listen pnod (name event) func))))))
  
(defn en-remove-listener 
  "adding an event to the selected nodes"
  [& event-list]
  (let [get-name #(name (cond  
                          (= % :mouseenter) :mouseover
                          (= % :mouseleave) :mouseout
                          :else %))]
    (chainable-standard  
      (fn [pnod]
        (doall (map #(events/removeAll pnod (get-name %)) event-list))))))


;####################################################
; these functions have to do with effects
;#################################################### 


(defn start-effect [pnod etype]
  (log-debug (str "start-effect" pnod ":" etype))
  (let [effs (aget pnod (get-eff-prop-name etype))
        eff-id (gensym "efid_")]
    (if effs 
      (do (swap! effs conj eff-id) eff-id)
      (do (aset pnod (get-eff-prop-name etype) (atom #{eff-id})) eff-id))))

(defn check-effect [pnod etype sym]
  (let [effs (aget pnod (get-eff-prop-name etype))]
    (if (and effs (contains? @effs sym)) true false)))

(defn finish-effect [pnod etype sym]
  (log-debug (str "finish-effect" pnod ":" etype ":" sym))
  (let [effs (aget pnod (get-eff-prop-name etype))]
    (when effs (swap! effs disj sym))))
 

;####################################################
; effect based transforms
;####################################################

(defn en-stop-effect [& etypes]
  (fn [pnod]
    (log-debug (pr-str "stop-effect" pnod ":" etypes))
    (doall (map #(aset pnod (get-eff-prop-name %) (atom #{})) etypes)))) 

    
(defn en-fade-out 
  "fade the selected nodes over a set of steps" 
  [ttime step callback]  
  (let [incr (/ 1 (/ ttime step))]
    (em/effect step :fade-out [:fade-in] callback
               (fn [pnod etime] 
                 (let [op (style/getOpacity pnod)
                       op (if (or (= op js/undefined) (= "" op)) 1 op)]
                   (if (<= (- op incr) 0) 
                     (do
                       (style/setOpacity pnod 0)
                       true)
                     false)))
               (fn [pnod]
                 (let [op (style/getOpacity pnod)
                       op (if (= op js/undefined) 1 op)]
                   (cond
                     (= "" op) (style/setOpacity pnod (- 1 incr))
                     (< 0 op) (style/setOpacity pnod (- op incr))))))))

(defn en-fade-in  
  "fade the selected nodes over a set of steps" 
  [ttime step callback]
  (let [incr (/ 1 (/ ttime step))]
    (em/effect step :fade-in [:fade-out] callback
               (fn [pnod etime] 
                 (let [op (style/getOpacity pnod)] 
                   (if (>= (+ op incr) 1) 
                     (do
                       (style/setOpacity pnod 1)
                       true)
                     false)))
               (fn [pnod]
                 (let [op (style/getOpacity pnod)]  
                   (cond
                     (= "" op) (style/setOpacity pnod incr)
                     (> 1 op) (style/setOpacity pnod (+ op incr))))))))

(defn en-resize 
  "resizes the selected elements to a width and height in px
   optional time series data"
  [wth hgt ttime step callback]
  (let [orig-sym (gensym "orig-size")
        steps (if (or (zero? ttime) (zero? step) (<= ttime step)) 1 (/ ttime step))]
    (em/effect step :resize [:resize] callback
               (fn [pnod etime] true
                 (let [csize (style/getSize pnod)
                       osize (aget pnod (name orig-sym))
                       osize (if osize osize (aset pnod (name orig-sym) csize))
                       wth (if (= :curwidth wth) (.width osize) wth)
                       hgt (if (= :curheight hgt) (.height osize) hgt)
                       wstep (pix-round (/ (- wth (.width osize)) steps))
                       hstep (pix-round (/ (- hgt (.height osize)) steps))]
                   (if (and
                         (or 
                           (zero? wstep)
                           (and (neg? wstep) (>= wth (.width csize)))
                           (and (pos? wstep) (<= wth (.width csize))))
                         (or 
                           (zero? hstep)
                           (and (neg? hstep) (>= hgt (.height csize)))
                           (and (pos? hstep) (<= hgt (.height csize)))))
                     (do 
                       (aset pnod (name orig-sym) nil) 
                       (style/setWidth pnod wth)
                       (style/setHeight pnod hgt)
                       true)
                     false)))
               (fn [pnod]
                 (let [csize (style/getSize pnod)
                       osize (aget pnod (name orig-sym))
                       osize (if osize osize (aset pnod (name orig-sym) csize))
                       wth (if (= :curwidth wth) (.width osize) wth)
                       hgt (if (= :curheight hgt) (.height osize) hgt)
                       wstep (pix-round (/ (- wth (.width osize)) steps))
                       hstep (pix-round (/ (- hgt (.height osize)) steps))]
                   (when (or 
                           (and (neg? wstep) (< wth (.width csize)))
                           (and (pos? wstep) (> wth (.width csize))))
                     (style/setWidth pnod (+ (.width csize) wstep)))
                   (when (or 
                           (and (neg? hstep) (< hgt (.height csize)))
                           (and (pos? hstep) (> hgt (.height csize))))
                     (style/setHeight pnod (+ (.height csize) hstep))))))))


(defn en-move
  "moves the selected elements to a x and y in px
   optional time series data "
  [xpos ypos ttime step callback]
  (let [orig-sym (gensym "orig-pos")
        steps (if (or (zero? ttime) (zero? step) (<= ttime step)) 1 (/ ttime step))]
    (em/effect step :move [:move] callback
               (fn [pnod etime] true
                 (let [cpos (style/getPosition pnod)
                       opos (aget pnod (name orig-sym))
                       opos (if opos opos (aset pnod (name orig-sym) cpos))
                       xpos (if (= :curx xpos) (.x opos) xpos)
                       ypos (if (= :cury ypos) (.y opos) ypos)
                       xstep (pix-round (/ (- xpos (.x opos)) steps))
                       ystep (pix-round (/ (- ypos (.y opos)) steps))
                       clone (.clone cpos)]
                   (if (and
                         (or 
                           (zero? xstep)
                           (and (neg? xstep) (>= xpos (.x cpos)))
                           (and (pos? xstep) (<= xpos (.x cpos))))
                         (or 
                           (zero? ystep)
                           (and (neg? ystep) (>= ypos (.y cpos)))
                           (and (pos? ystep) (<= ypos (.y cpos)))))
                     (do 
                       (aset pnod (name orig-sym) nil) 
                       (set! (.x clone) xpos)
                       (set! (.y clone) ypos)
                       (style/setPosition pnod (.x clone) (.y clone))
                       true)
                     false)))
               (fn [pnod]
                 (let [cpos (style/getPosition pnod)
                       opos (aget pnod (name orig-sym))
                       opos (if opos opos (aset pnod (name orig-sym) cpos))
                       xpos (if (= :curx xpos) (.x opos) xpos)
                       ypos (if (= :cury ypos) (.y opos) ypos)
                       xstep (pix-round (/ (- xpos (.x opos)) steps))
                       ystep (pix-round (/ (- ypos (.y opos)) steps))
                       clone (.clone cpos)]
                   (when (or 
                           (and (neg? xstep) (< xpos (.x cpos)))
                           (and (pos? xstep) (> xpos (.x cpos))))
                     (set! (.x clone) (+ (.x cpos) xstep)))
                   (when (or 
                           (and (neg? ystep) (< ypos (.y cpos)))
                           (and (pos? ystep) (> ypos (.y cpos))))
                     (set! (.y clone) (+ (.y cpos) ystep)))
                   (style/setPosition pnod (.x clone) (.y clone)))))))              



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
  "filter allows you to apply function to futhur scope
   down what is returned by a selector"
  [tst trans]
  (fn filt
    ([pnodes] (filt pnodes nil))
    ([pnodes chain]
      (let [pnod-col (nodes->coll pnodes)
            ttest (if (keyword? tst) (@reg-filt tst) tst)
            res (filter ttest pnod-col)]
        (log-debug (pr-str res))
        (if (nil? chain) 
          (trans res)
          (trans res chain))))))

(defn register-filter 
  "registers a filter for a given keyword"
  [ky func]
  (swap! reg-filt assoc ky func))

(defn selected-options 
  "takes a list of options and returns the selected ones
   will return an empty list if passed nodes that are 
   no options"
  [pnod]
  (.selected pnod))

(defn checked-radio-checkbox 
  "takes a list of options and returns the selected ones
   will return an empty list if passed nodes that are 
   no options"
  [pnod]
  (.checked pnod))

(register-filter :selected selected-options)
(register-filter :checked checked-radio-checkbox)

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
  ([css-sel] (css-select "" js/document css-sel))
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
   

  



  

   
  

               
  
