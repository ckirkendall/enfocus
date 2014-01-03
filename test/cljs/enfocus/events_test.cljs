(ns enfocus.evets-test
  (:require
   [enfocus.core :as ef :refer [at from content get-text html
                                set-form-input read-form-input do->
                                set-prop read-form set-form set-attr]]
   [enfocus.events :as ev :refer [listen listen-live remove-listeners]]
   [domina.events :as de  :refer [dispatch! dispatch-browser!]]
   [cemerick.cljs.test :as t])
  (:require-macros
   [enfocus.macros :as em]
   [cemerick.cljs.test :refer (is are deftest testing use-fixtures)]))

(defn each-fixture [f]
  ;; initialize the environment
  (let [div (.createElement js/document "div")]
    (.setAttribute div "id" "test-id")
    (.setAttribute div "class" "test-class")
    (.appendChild (.-body js/document) div)
    ;; execute the unit test
    (f)
    ;; clear the environment 
    (.removeChild (.-body js/document) div)))

(use-fixtures :each each-fixture)

(defn by-id [id]  (.getElementById js/document id))


(defn simulate-key-event [target]
  (let [ev (.createEvent js/document "KeyboardEvents")]
    (.initKeyboardEvent ev "keydown", true, true,
                        (.-defaultView js/document), 'a', 'a')
    (.dispatchEvent target ev)))


(defn simulate-click-event [target]
  (let [ev (.createEvent js/document "MouseEvents")]
    (.initMouseEvent ev "click", true, true,
                        (.-defaultView js/document))
    (.dispatchEvent target ev)))

(deftest listen-test
  (at "#test-id" (content (html [:span
                                 [:button {:name "test-btn"
                                           :id "test-btn"}]
                                 [:input {:name "test-inp"
                                          :type "text"
                                          :id "test-inp"}]])))
  (testing "testing basic listening for click event"
    (let [atm (atom "fail")]
      (at "#test-btn" (listen :click #(reset! atm "success")))
      (at "#test-btn" simulate-click-event)
      (is (= "success" @atm))))
  (testing "testing basic listening for key event"
    (let [atm (atom "fail")]
      (at "#test-inp" (listen :keydown #(reset! atm (.-keyCode %))))
      (at "#test-inp" simulate-key-event)
      (is (= 0 @atm)))))


(deftest listen-live-test
  (testing "testing basic listening for click event"
    (let [atm (atom "fail")]
      (at "body" (listen-live :click "#test-btn" #(reset! atm "success")))
      (at "#test-id" (content (html [:button {:name "test-btn"
                                              :id "test-btn"}])))
      (at "#test-btn" simulate-click-event)
      (is (= "success" @atm))))
  (testing "testing basic listening for key event"
    (let [atm (atom "fail")]
      (at "body" (listen-live :keydown "#test-inp"
                              #(reset! atm (.-keyCode %))))
      (at "#test-id" (content (html [:input {:name "test-inp"
                                             :type "text"
                                             :id "test-inp"}])))
      (at "#test-inp" simulate-key-event)
      (is (= 0 @atm)))))


(deftest remove-listeners-test
  (testing "removing all listeners of given type"
    (let [atm (atom "fail")]
      (at "#test-id" (content (html [:button {:id "test-btn"}]))
          "#test-btn" (listen :click #(swap! atm (fn [val]
                                                   (if (= val "success")
                                                     "fail"
                                                     "success")))))
      (at "#test-btn" simulate-click-event
          "#test-btn" (remove-listeners :click)
          "#test-btn" simulate-click-event)
      (is (= "success" @atm)))))
