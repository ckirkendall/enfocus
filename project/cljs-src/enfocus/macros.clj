(ns enfocus.macros
  (:refer-clojure :exclude [filter delay])
  (:require [clojure.java.io :as io]
            [enfocus.enlive.syntax :as syn])
  (:import [org.jsoup.Jsoup]))


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


(def url-cache (ref {}))

(defn get-key [key]
  (dosync
   (when-not (@url-cache key)
     (let [id  (str (gensym "en") "_")]
       (alter url-cache assoc key id))))
  (@url-cache key))



(defn load-local-dom
  "same as 'load-remote-dom', but work for local files"
  ([path dom-key] (load-local-dom path dom-key nil))
  ([path dom-key sel]
     (let [text (slurp (io/reader (find-url path)))
           id-mask (get-key dom-key)
           text (if sel 
                   (-> (org.jsoup.Jsoup/parse text)
                       (.select (syn/convert sel))
                       (.outerHtml))
                   text)] 
       `(when (nil? (@enfocus.core/tpl-cache ~dom-key))
          (let [[sym# txt#] (enfocus.core/replace-ids ~id-mask ~text)]
            (swap! enfocus.core/tpl-cache assoc ~dom-key [sym# txt#]))))))

(defn load-remote-dom
  "returns macro code for loading remote dom"
  [uri dom-key]
  `(do
     (enfocus.core/load-remote-dom ~uri ~dom-key ~(get-key dom-key))
     (when (nil? (@enfocus.core/tpl-cache ~dom-key))
       (swap! enfocus.core/tpl-cache assoc ~dom-key ["" "NOT_LOADED"]))))

(defmacro deftemplate [sym & body]
  (let [[mode uri args & forms] (ensure-mode body)
        dom-key (str (name mode) uri)]
    `(do
       ~(case mode
          :remote   (load-remote-dom uri dom-key)
          :compiled (load-local-dom uri dom-key))
       (enfocus.macros/create-dom-action
        ~sym
        #(enfocus.core/get-cached-dom ~dom-key)
        ~args ~@forms))))


(defmacro defsnippet [sym & body]
  (let [[mode uri sel args & forms] (ensure-mode body)
        dom-key (case mode
                   :remote (str (name mode) uri)
                   :compiled (str (name mode) uri sel))]
    `(do
       ~(case mode
          :remote   (load-remote-dom uri dom-key)
          :compiled (load-local-dom uri dom-key sel))
       (enfocus.macros/create-dom-action
        ~sym
        ~(case mode
           :remote  `(fn [] (enfocus.core/get-cached-snippet ~dom-key ~sel))
           :compiled `(fn [] (enfocus.core/get-cached-dom ~dom-key))) 
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


