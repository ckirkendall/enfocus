(ns enfocus.macros
  (:refer-clojure :exclude [filter delay])
  (:require [clojure.java.io :as io]))

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

(defmacro create-dom-action [sym nod args & forms]  
  (let [id-sym (gensym "id-sym")
        pnode-sym (gensym "pnod")
        new-form `(enfocus.core/i-at ~id-sym ~pnode-sym ~@forms)]   
  `(defn ~sym ~args 
     (let [[~id-sym ~pnode-sym] (~nod)
           ~pnode-sym (enfocus.core/create-hidden-dom ~pnode-sym)]
       ~new-form
        (enfocus.core/reset-ids ~id-sym ~pnode-sym)
        (enfocus.core/remove-node-return-child ~pnode-sym)))))

(defn find-url
  "Given a string, returns a URL. Attempts to resolve as a classpath-relative
  path, then as a path relative to the working directory or a URL string"
  [path-or-url]
  (or (io/resource path-or-url)
      (try (io/as-url path-or-url)
           (catch java.net.MalformedURLException e
             false))
      (io/as-url (io/as-file path-or-url))))


(defn ensure-mode
  " 'mode' argument is not required and defaults to :remote, for
    backward compatability"
  [[mode & _ :as body]]
  (if (keyword? mode)
    body
    (cons :remote body)))


(defn load-local-dom
  "same as 'load-remote-dom', but work for local files"
  [path dom-key]
  (let [text (slurp (io/reader (find-url path)))]
    `(when (nil? (@enfocus.core/tpl-cache ~path))
       (let [[sym# txt#] (enfocus.core/replace-ids ~text)]
         (swap! enfocus.core/tpl-cache assoc ~dom-key [sym# txt#])))))


(defmacro deftemplate [sym & body]
  (let [[mode uri args & forms] (ensure-mode body)
        dom-key (str (name sym) uri)]
    `(do
       ~(case mode
          :remote   `(enfocus.core/load-remote-dom ~uri ~dom-key)
          :compiled (load-local-dom uri dom-key))
       (enfocus.macros/create-dom-action
        ~sym
        #(enfocus.core/get-cached-dom ~dom-key)
        ~args ~@forms))))


(defmacro defsnippet [sym & body]
  (let [[mode uri sel args & forms] (ensure-mode body)
        dom-key (str (name sym) uri)]
    `(do
       ~(case mode
          :remote   `(enfocus.core/load-remote-dom ~uri ~dom-key)
          :compiled (load-local-dom uri dom-key))
       (enfocus.macros/create-dom-action
        ~sym
        #(enfocus.core/get-cached-snippet ~dom-key ~sel)
        ~args ~@forms))))


(defmacro defaction [sym args & forms]
  `(defn ~sym ~args (enfocus.core/at js/document ~@forms)))


(defmacro transform 
  ([nod trans] `(enfocus.core/at ~nod ~trans))
  ([nod sel trans] `(enfocus.core/at ~nod ~sel ~trans)))


(defmacro wait-for-load [& forms]
	`(enfocus.core/setTimeout (fn check# []
	                   (if (zero? (deref enfocus.core/tpl-load-cnt))
                      (do ~@forms)
                      (enfocus.core/setTimeout #(check#) 10))) 0))   
  

(defmacro clone-for [[sym lst] & forms]
  `(fn [pnod#]
     (let [div# (enfocus.core/create-hidden-dom 
                 (. js/document (~(symbol "createDocumentFragment"))))]
       (doseq [~sym ~lst]
         (do 
           (enfocus.core/at div#  (enfocus.core/append (. pnod# (~(symbol "cloneNode") true))))
           (enfocus.core/at (goog.dom/getLastElementChild div#) ~@forms)))
       (enfocus.core/log-debug div#)
       (enfocus.core/at 
        pnod# 
        (enfocus.core/do-> (enfocus.core/after (enfocus.core/remove-node-return-child div#))
                           (enfocus.core/remove-node))))))


