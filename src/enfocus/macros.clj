(ns enfocus.macros)

;##############################################
; All main transformations and functions are 
; represented here in order to give a single 
; entry point to the main protocol.  Many of
; these are just pass throughs but some 
; transforms require a macro.
;
; macros include:                            
;    defsnippit
;    deftemplate
;    defaction
;    at
;    wait-for-load
;    content
;    set-attr
;    remove-attr
;    add-class
;    remove-class
;    do->
;##############################################

(defn- create-transform-call [id-sym pnod-sym forms]
  (map (fn [[sel tran]] (list 
                          (if tran tran  'enfocus.core/remove-all) 
                          (list 'enfocus.core/css-select id-sym pnod-sym sel)))
       (partition 2 forms)))


(defmacro create-dom-action [sym nod tmp-dom args & forms]  
  (let [id-sym (gensym "id-sym")
        pnode-sym (gensym "pnod")
        new-form (create-transform-call id-sym pnode-sym forms)]   
  `(defn ~sym ~args 
     (let [[~id-sym ~pnode-sym] (if (fn? ~nod) (~nod) ["" ~nod])
           ~pnode-sym (if ~tmp-dom (~(symbol "enfocus.core/create-hidden-dom") ~pnode-sym) ~pnode-sym)]
       ~@new-form
       (if ~tmp-dom 
         (do
           (~(symbol "enfocus.core/reset-ids") ~id-sym ~pnode-sym)
           (~(symbol "enfocus.core/remove-node-return-child") ~pnode-sym))
         ~pnode-sym)))))

(defmacro deftemplate [sym uri args & forms]
  `(do 
     (~(symbol "enfocus.core/load-remote-dom") ~uri)
     (enfocus.macros/create-dom-action 
       ~sym
       #(~(symbol "enfocus.core/get-cached-dom") ~uri) 
       true ~args ~@forms)))

(defmacro defsnippet [sym uri sel args & forms]
  `(do 
     (~(symbol "enfocus.core/load-remote-dom") ~uri)
     (enfocus.macros/create-dom-action 
       ~sym
       #(~(symbol "enfocus.core/get-cached-snippit") ~uri ~sel) 
       true ~args ~@forms)))
  
  
(defmacro defaction [sym args & forms]
  `(defn ~sym ~args (enfocus.macros/at js/document ~@forms)))


(defmacro at [nod & forms]
    (if (= 1 (count forms)) 
      `(fn [pnod#] (~@forms pnod#))
      (let [pnode-sym (gensym "pnod")
            new-form (create-transform-call "" pnode-sym forms)]
        `((fn [~pnode-sym] ~@new-form ~pnode-sym) ~nod))))

  
(defmacro wait-for-load [& forms]
	`(js/setTimeout (fn ~(symbol "check") []
	                   (if (zero? (deref ~(symbol "enfocus.core/tpl-load-cnt")))
                      (do ~@forms)
                      (js/setTimeout #(~(symbol "check")) 10))) 0))   
  

(defmacro select [& forms]
  `(~(symbol "enfocus.core/css-select") ~@forms))

(defmacro content [& forms]
  `(~(symbol "enfocus.core/en-content") ~@forms))

(defmacro html-content [& forms]
  `(~(symbol "enfocus.core/en-html-content") ~@forms))

(defmacro set-attr [& forms] 
  `(~(symbol "enfocus.core/en-set-attr") ~@forms))


(defmacro remove-attr [& forms] 
  `(~(symbol "enfocus.core/en-remove-attr") ~@forms))


(defmacro add-class [& forms]
  `(~(symbol "enfocus.core/en-add-class") ~@forms))


(defmacro remove-class [& forms]
  `(~(symbol "enfocus.core/en-remove-class") ~@forms))

(defmacro do-> [& forms]
  `(~(symbol "enfocus.core/en-do->") ~@forms))

(defmacro append [& forms]
  `(~(symbol "enfocus.core/en-append") ~@forms))

(defmacro prepend [& forms]
  `(~(symbol "enfocus.core/en-prepend") ~@forms))

(defmacro after [& forms]
  `(~(symbol "enfocus.core/en-after") ~@forms))

(defmacro before [& forms]
  `(~(symbol "enfocus.core/en-before") ~@forms))

(defmacro substitute [& forms]
  `(~(symbol "enfocus.core/en-substitute") ~@forms))

(defmacro remove-node [& forms]
  `(~(symbol "enfocus.core/en-remove-node") ~@forms))

(defmacro set-style [& forms]
  `(~(symbol "enfocus.core/en-set-style") ~@forms))

(defmacro remove-style [& forms]
  `(~(symbol "enfocus.core/en-remove-style") ~@forms))

(defmacro add-event [& forms]
  `(~(symbol "enfocus.core/en-add-event") ~@forms))


(defmacro remove-event [& forms]
  `(~(symbol "enfocus.core/en-remove-event") ~@forms))

              