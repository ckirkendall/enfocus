(ns enfocus.events
  (:require [goog.events :as events]
            [goog.dom :as dom]
            [enfocus.core :as ef]
            [goog.object :as obj]))

(declare child-of? mouse-enter-leave)

;####################################################
; event based transforms
;####################################################

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


(defn listen
  "adding an event to the selected nodes"
  [event func]
  (let [wrapper (wrapper-register event)]  
    (fn [pnod]
      (if (and (= :resize event) (identical? js/window pnod)) 
        (events/listen (get-vp-monitor) "resize" func)
        (if (nil? wrapper)
          (events/listen pnod (name event) func)
          (events/listenWithWrapper pnod wrapper func))))))

(defn remove-listeners 
  "removing all listeners of a given event type from the selected nodes"
  [& event-list]
  (let [get-name #(name (cond  
                          (= % :mouseenter) :mouseover
                          (= % :mouseleave) :mouseout
                          :else %))]
    (fn [pnod]
      (doseq [ev event-list] (events/removeAll pnod (get-name ev))))))


(defn unlisten 
  "removing a specific event from the selected nodes"
  ([event] (remove-listeners event))
  ([event func]
     (let [wrapper (wrapper-register event)]
       (fn [pnod]
         (if (nil? wrapper) 
           (events/unlisten pnod (name event) func)
           (events/unlistenWithWrapper pnod wrapper func))))))


(defn- get-node-chain [top node]
  (if (or (nil? node) (= node top))
    ()
    (conj (get-node-chain top (.-parentNode node)) node)))

(defn- create-event [cur cur-event]
  (let [event (obj/clone cur-event)]
    (set! (.-currentTarget event) cur)
    event))

(defn listen-live [event selector func]
  (fn [node]
    (ef/at node
     (listen event
       #(doseq [el (get-node-chain node (.-target %))]
          (ef/at el
                 (ef/filter (ef/match? selector)
                            (fn [node]
                              (let [event-copy (create-event el %)]
                                (func event-copy)
                                (when (.-defaultPrevented event-copy)
                                  (.preventDefault %))
                                (when (.-propagationStopped event-copy)
                                  (.stopPropagation %)))))))))))


;###################################################
; utilies
;###################################################


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
