(ns enfocus.effects
  (:require [enfocus.core :as ef]
            [goog.fx :as fx]
            [goog.fx.dom :as fx-dom]
            [goog.dom.query :as query]
            [goog.events :as events]
            [goog.style :as style]))

(declare apply-transform)

(defn chainable-effect
  "wrapper function for effects, maps the effect to all nodes returned by the
   selector and provides chaining and callback functionality"
  [func callback]
  (let [trans (fn [pnodes chain]
                (let [pnod-col (ef/nodes->coll pnodes)
                      cnt (atom (count pnod-col))
                      partial-cback (fn []
                                      (swap! cnt dec)
                                      (when (= 0 @cnt)
                                        (when callback (ef/apply-transform callback pnodes))
                                        (when chain (ef/apply-transform chain pnodes))))]
                  (doseq [pnod pnod-col] (func pnod partial-cback))))]
    (reify ef/ITransform
      (apply-transform [_ nodes] (trans nodes nil))
      (apply-transform [_ nodes chain] (trans nodes chain)))))


;####################################################
; effect based transforms
;####################################################

(defn chain
  "chains a series of effects and trasforms in sequences"
  [func & chains]
  (if (empty? chains)
    (fn [pnod] (ef/apply-transform func pnod))
    (fn [pnod] (ef/apply-transform func pnod (apply chain chains)))))



(defn fade-out
  "fade the selected nodes over a set of steps"
  ([ttime] (fade-out ttime nil nil))
  ([ttime callback] (fade-out ttime callback nil))
  ([ttime callback accel]
     (chainable-effect
      (fn [pnod pcallback]
        (let [anim (fx-dom/FadeOut. pnod ttime accel)]
          (when pcallback
            (events/listen anim js/goog.fx.Animation.EventType.END pcallback))
          (. anim (play))))
      callback)))

(defn fade-in
  "fade the selected nodes over a set of steps"
  ([ttime] (fade-in ttime nil nil))
  ([ttime callback] (fade-in ttime callback nil))
  ([ttime callback accel]
     (chainable-effect
      (fn [pnod pcallback]
        (let [anim (fx-dom/FadeIn. pnod ttime accel)]
          (when pcallback
            (events/listen anim js/goog.fx.Animation.EventType.END pcallback))
          (. anim (play))))
      callback)))

(defn resize
  "resizes the selected elements to a width and height in px optional time series data"
  ([wth hgt] (resize wth hgt 0 nil nil))
  ([wth hgt ttime] (resize wth hgt ttime nil nil))
  ([wth hgt ttime callback] (resize wth hgt ttime callback nil))
  ([wth hgt ttime callback accel]
     (chainable-effect
      (fn [pnod pcallback]
        (let [csize (style/getContentBoxSize pnod)
              start (array (.-width csize) (.-height csize))
              wth (if (= :curwidth wth) (.-width csize) wth)
              hgt (if (= :curheight hgt) (.-height csize) hgt)
              end (array wth hgt)
              anim (fx-dom/Resize. pnod start end ttime accel)]
          (when pcallback
            (events/listen anim js/goog.fx.Animation.EventType.END pcallback))
          (. anim (play))))
      callback)))

(defn move
  "moves the selected elements to a x and y in px optional time series data "
  ([xpos ypos] (move xpos ypos 0 nil nil))
  ([xpos ypos ttime] (move xpos ypos ttime nil nil))
  ([xpos ypos ttime callback] (move xpos ypos ttime callback nil))
  ([xpos ypos ttime callback accel]
     (chainable-effect
      (fn [pnod pcallback]
        (let [cpos (style/getPosition pnod)
              start (array (.-x cpos) (.-y cpos))
              xpos (if (= :curx xpos) (.-x cpos) xpos)
              ypos (if (= :cury ypos) (.-y cpos) ypos)
              end (array xpos ypos)
              anim (fx-dom/Slide. pnod start end ttime accel)]
          (when pcallback
            (events/listen anim js/goog.fx.Animation.EventType.END pcallback))
          (. anim (play))))
      callback)))

(defn scroll
  "scrolls selected elements to a x and y in px optional time series data"
  ([xpos ypos] (scroll xpos ypos 0 nil nil))
  ([xpos ypos ttime] (scroll xpos ypos ttime nil nil))
  ([xpos ypos ttime callback] (scroll xpos ypos ttime callback nil))
  ([xpos ypos ttime callback accel]
     (chainable-effect
      (fn [pnod pcallback]
        (let [start (array (.-scrollLeft pnod) (.-scrollTop pnod))
              xpos (if (= :curx xpos) (.-scrollLeft pnod) xpos)
              ypos (if (= :cury ypos) (.-scrollTop pnod) ypos)
              end (array xpos ypos)
              anim (fx-dom/Scroll. pnod start end ttime accel)]
          (when pcallback
            (events/listen anim js/goog.fx.Animation.EventType.END pcallback))
          (. anim (play))))
      callback)))


;#############################################
; basic accelerators/easing functions
;#############################################

(defn liner [t] t)
(defn ease-in-quad [t] (* t t))
(defn ease-out-quad [t] (* -1 (* t (- t 2))))
(defn ease-in-out-quad [t]
  (let [nt (* t 2)]
    (if (< nt 1)
      (* .5 nt nt)
      (* -0.5 (- (* (- nt 1) (- nt 2)) 1)))))
(defn ease-in-cubic [t] (* t t t))
(defn ease-out-cubic [t]
  (let [nt (- t 1)]
    (+ (* nt nt nt) 1)))
(defn ease-in-out-cubic [t]
  (let [nt (* t 2)]
    (if (< nt 1)
      (* .5 nt nt nt)
      (let [mt (- nt 2)]
        (* .5 (+ 2 (* mt mt mt)))))))
(defn ease-in-quart [t] (* t t t t))
(defn ease-out-quart [t]
  (let [nt (- t 1)]
    (* -1 (- (* nt nt nt nt) 1))))
(defn ease-in-out-quart [t]
  (let [nt (* t 2)]
    (if (< nt 1)
      (* .5 nt nt nt nt)
      (let [mt (- nt 2)]
        (* .5 (+ 2 (* mt mt mt mt)))))))
(defn ease-in-quint [t] (* t t t t))
(defn ease-out-quint [t]
  (let [nt (- t 1)]
    (+ (* nt nt nt nt) 1)))
(defn ease-in-out-quint [t]
  (let [nt (* t 2)]
    (if (< nt 1)
      (* .5 nt nt nt nt nt)
      (let [mt (- nt 2)]
        (* .5 (+ 2 (* mt mt mt mt mt)))))))
(defn sign-in [t]
  (+ (* -1 (.cos js/Math (* 0.5 (.-PI js/Math) t))) 1))
(defn sign-out [t]
  (.sin js/Math (* t (.-PI js/Math) 0.5)))
(defn sign-in-out [t]
  (* -0.5 (- (.cos js/Math (* (.-PI js/Math) t)) 1)))
(defn expo-in [t]
  (if (= t 0) 0 (.pow js/Math 2 (* 10 (- t 1)))))
(defn expo-out [t]
  (if (= t 0) 1 (+ (* -1 (.pow js/Math 2 (* -10 t))) 1)))
(defn expo-in-out [t]
  (cond
   (= t 0) 0
   (= t 1) 1
   (< t 1) (* 0.5 (.pow js/Math 2 (* 10 (- t 1))))
   :else (* 0.5 (+ (* -1 (.pow js/Math 2 (* -10 (dec t)))) 2))))
(defn circular-in [t]
  (* -1 (- (.sqrt js/Math (- 1 (.pow js/Math t 2))) 1)))
(defn circular-out [t]
  (let [nt (- t 1)]
    (.sqrt js/Math (- 1 (.pow js/Math nt 2)))))
(defn circular-in-out [t]
  (let [nt (* t 2)]
    (if (< t 1)
      (* -0.5 (- (.sqrt js/Math (- 1 (.pow js/Math nt 2))) 1))
      (let [mt (- nt 2)]
        (* -0.5 (+ (.sqrt js/Math (- 1 (.pow js/Math nt 2))) 1))))))
