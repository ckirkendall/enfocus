(ns enfocus.macros)


(defmacro create-dom-action [sym nod tmp-dom args & forms]
  (let [pnode-sym (gensym "pnod")
        new-form (map #(list (second %) (list 'enfocus.core/css-select pnode-sym (first %))) 
                      (partition 2 forms))]   
  `(defn ~sym ~args 
     (let [~pnode-sym (if (fn? ~nod) (~nod) ~nod)
           ~pnode-sym (if ~tmp-dom (~(symbol "enfocus.core/create-hidden-dom") ~pnode-sym) ~pnode-sym)]
       ~@new-form
       (if ~tmp-dom 
         (~(symbol "enfocus.core/remove-node-return-child") ~pnode-sym)
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
  `(enfocus.macros/create-dom-action ~sym js/document false ~args ~@forms))

