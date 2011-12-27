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
;    append
;    prepend
;    after 
;    before
;    substitute
;    remove-node
;    set-style
;    remove-style
;    add-event
;    remove-event
;    effect
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
           ~pnode-sym (if ~tmp-dom (enfocus.core/create-hidden-dom ~pnode-sym) ~pnode-sym)]
       ~@new-form
       (if ~tmp-dom 
         (do
           (enfocus.core/reset-ids ~id-sym ~pnode-sym)
           (enfocus.core/remove-node-return-child ~pnode-sym))
         ~pnode-sym)))))

(defmacro deftemplate [sym uri args & forms]
  `(do 
     (enfocus.core/load-remote-dom ~uri)
     (enfocus.macros/create-dom-action 
       ~sym
       #(enfocus.core/get-cached-dom ~uri) 
       true ~args ~@forms)))

(defmacro defsnippet [sym uri sel args & forms]
  `(do 
     (enfocus.core/load-remote-dom ~uri)
     (enfocus.macros/create-dom-action 
       ~sym
       #(enfocus.core/get-cached-snippet ~uri ~sel) 
       true ~args ~@forms)))
  
  
(defmacro defaction [sym args & forms]
  `(defn ~sym ~args (enfocus.macros/at js/document ~@forms)))


(defmacro at [nod & forms]
    (if (= 1 (count forms)) 
      `(~@forms ~nod)
      (let [pnode-sym (gensym "pnod")
            new-form (create-transform-call "" pnode-sym forms)]
        `((fn [~pnode-sym] ~@new-form ~pnode-sym) ~nod))))

  
(defmacro wait-for-load [& forms]
	`(enfocus.core/setTimeout (fn check# []
	                   (if (zero? (deref enfocus.core/tpl-load-cnt))
                      (do ~@forms)
                      (enfocus.core/setTimeout #(check#) 10))) 0))   
  

(defmacro select [& forms]
  `(enfocus.core/css-select ~@forms))

(defmacro content [& forms]
  `(enfocus.core/en-content ~@forms))

(defmacro html-content [& forms]
  `(enfocus.core/en-html-content ~@forms))

(defmacro set-attr [& forms] 
  `(enfocus.core/en-set-attr ~@forms))


(defmacro remove-attr [& forms] 
  `(enfocus.core/en-remove-attr ~@forms))


(defmacro add-class [& forms]
  `(enfocus.core/en-add-class ~@forms))


(defmacro remove-class [& forms]
  `(enfocus.core/en-remove-class ~@forms))

(defmacro do-> [& forms]
  `(enfocus.core/en-do-> ~@forms))

(defmacro append [& forms]
  `(enfocus.core/en-append ~@forms))

(defmacro prepend [& forms]
  `(enfocus.core/en-prepend ~@forms))

(defmacro after [& forms]
  `(enfocus.core/en-after ~@forms))

(defmacro before [& forms]
  `(enfocus.core/en-before ~@forms))

(defmacro substitute [& forms]
  `(enfocus.core/en-substitute ~@forms))

(defmacro remove-node [& forms]
  `(enfocus.core/en-remove-node ~@forms))

(defmacro set-style [& forms]
  `(enfocus.core/en-set-style ~@forms))

(defmacro remove-style [& forms]
  `(enfocus.core/en-remove-style ~@forms))

(defmacro add-event [& forms]
  `(enfocus.core/en-add-event ~@forms))

(defmacro remove-event [& forms]
  `(enfocus.core/en-remove-event ~@forms))

(defmacro timed-effect [ttime num-steps & forms]
  `(enfocus.core/multi-node-proc
    (fn [pnod#]
      (let [incr# (~(symbol "Math/ceil") (/ ~ttime ~num-steps))
            eff# (fn run# [tm#] 
                   (when (<= tm# ~ttime) 
                    ((enfocus.macros/at ~@forms) pnod#)
                    (enfocus.core/setTimeout #(run# (+ tm# incr#)) incr#)))]
        (eff# 0))))) 
 
(defmacro effect [step etype bad-etypes test-func & forms]
  `(enfocus.core/multi-node-proc
    (fn [pnod#]
      ((enfocus.macros/stop-effect ~@bad-etypes) pnod#)
      (let [start# (enfocus.core/get-mills)
            eff-id# (enfocus.core/start-effect pnod# ~etype) 
            eff# (fn run# [] 
                   (if (and
                         (enfocus.core/check-effect pnod# ~etype eff-id#)
                         (not (~test-func pnod# (-  (enfocus.core/get-mills) start#)) ))
                     (do
                       ((enfocus.macros/at ~@forms) pnod#)
                       (enfocus.core/setTimeout #(run#) ~step))
                     (enfocus.core/finish-effect pnod# ~etype eff-id#)
                     ))]
        (eff# 0)))))  

(defmacro stop-effect [& etypes]
  `(enfocus.core/en-stop-effect ~@etypes))  
      
(defmacro fade-out [ttime num-steps]
  `(enfocus.core/en-fade-out ~ttime ~num-steps))  

(defmacro fade-in [ttime num-steps]
  `(enfocus.core/en-fade-in ~ttime ~num-steps)) 

(defmacro delay [ttime & forms]
  `(enfocus.core/multi-node-proc
    (fn [pnod#] 
      (enfocus.core/setTimeout #((enfocus.macros/at ~@forms) pnod#) ~ttime))))

(defmacro resize [width height ttime step]
  `(enfocus.core/en-resize ~width ~height ~ttime ~step)) 

(defmacro move [xpos ypos ttime step]
  `(enfocus.core/en-move ~xpos ~ypos ~ttime ~step)) 