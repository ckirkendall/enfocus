(ns enfocus.example
  (:require [enfocus.core :as ef])
  (:require-macros [enfocus.macros :as em]))
  


(em/defsnippit snippit1 "templates/template1.html" [:tbody :> 'first-child] 
               [fruit quantity]   
               [:tr :> 'first-child] (em/content fruit)
               [:tr :> 'last-child] (em/content (str quantity)))
  
(em/deftemplate template1 "/templates/template1.html" [fruit-data] 
                [:#heading1] (em/content "fruit")  
                [:thead :tr :> 'last-child] (em/content "quantity")
                [:tbody] (em/content
                           (map #(snippit1 % (fruit-data %)) (keys fruit-data))))
   
(em/defaction action1 [] 
             [:.cool (ef/attr= :foo "false")] (em/content (template1 {"apple" 5 "pear" 6}))) 
 
    

(em/defsnippit snippit2 "templates/template1.html" ["tbody > *:first-child"] 
               [fruit quantity] 
               ["tr > *:first-child"] (em/content fruit)
               ["tr > *:last-child"] (em/content (str quantity)))
  
(em/deftemplate template2 "/templates/template1.html" [fruit-data] 
                ["#heading1"] (em/content "fruit")  
                ["thead tr > *:last-child"] (em/content "quantity")
                ["tbody"] (em/content
                           (map #(snippit2 % (fruit-data %)) (keys fruit-data))))
 
(em/defaction action2 [] 
             [".cool[foo=false]"] (em/content (template2 {"bannan" 5 "pineapple" 10}))
             ["#heading1"] (em/set-attr :id "new-heading1")
             ["#heading2"] (em/remove-attr :id) 
             ["#new-heading1"] (em/add-class "cool")
             ["table"] (em/remove-class "wow")
             [".multi[bar]"] (em/do-> 
                               (em/content "test")
                               (em/set-attr :attr1 "cool1" :attr2 "cool2"))
             [".cool[foo=true]"] (em/do->
                                    (em/append " very cool")
                                    (em/prepend "even better "))
             [".cool[foo=false]"] (em/do->
                                    (em/after " testing-after")
                                    (em/before "testing-before "))
             ["#sub"] (em/substitute "I substituted here")
             ["#html-content"] (em/html-content "this is built from an <b>html</b> string."))
  
    
(defn funtimes [msg]  
  (em/at js/document
      [:.cool (ef/attr= :foo "true")] (em/content msg))
  (em/wait-for-load (action2)))   
                              
