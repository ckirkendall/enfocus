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

(defmacro create-dom-action [sym nod tmp-dom args & forms]
  (let [id-sym (gensym "id-sym")
        pnode-sym (gensym "pnod")
        new-form (map #(list (second %) (list 'enfocus.core/css-select id-sym pnode-sym (first %))) 
                      (partition 2 forms))]   
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

(defmacro defsnippit [sym uri sel args & forms]
  `(do 
     (~(symbol "enfocus.core/load-remote-dom") ~uri)
     (enfocus.macros/create-dom-action 
       ~sym
       #(~(symbol "enfocus.core/get-cached-snippit") ~uri ~sel) 
       true ~args ~@forms)))
  

(defmacro defaction [sym args & forms]
  `(defn ~sym ~args (enfocus.macros/at js/document ~@forms)))


(defmacro at [nod & forms]
  (let [pnode-sym (gensym "pnod")
        new-form (map #(list (second %) (list 'enfocus.core/css-select pnode-sym (first %))) 
                      (partition 2 forms))]
        `((fn [~pnode-sym] ~@new-form ~pnode-sym) ~nod)))  

  
(defmacro wait-for-load [& forms]
	`(js/setTimeout (fn ~(symbol "check") []
	                   (if (zero? (deref ~(symbol "enfocus.core/tpl-load-cnt")))
                      (do ~@forms)
                      (js/setTimeout #(~(symbol "check")) 100))) 0))   
  

(defmacro content [& forms]
  `(~(symbol "enfocus.core/content") ~@forms))

(defmacro set-attr [& forms] 
  `(~(symbol "enfocus.core/set-attr") ~@forms))


(defmacro remove-attr [& forms] 
  `(~(symbol "enfocus.core/remove-attr") ~@forms))


(defmacro add-class [& forms]
  `(~(symbol "enfocus.core/add-class") ~@forms))


(defmacro remove-class [& forms]
  `(~(symbol "enfocus.core/remove-class") ~@forms))

(defmacro do-> [& forms]
  `(~(symbol "enfocus.core/do->") ~@forms))
  