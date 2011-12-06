(ns enfocus.example
  (:require [enfocus.core :as ef])
  (:require-macros [enfocus.macros :as em]))
  
(defn set-cool [] 
  ((ef/content "this is a cool test of content") 
    (ef/css-select js/document [:.cool (ef/attr= :foo "true")])))


(em/create-dom-action 
  funtimes js/document false
  [msg]
  [:.cool (ef/attr= :foo "true")] (ef/content msg))   
 
  

(em/defsnippit snippit1 "templates/template1.html" [:tbody :> 'first-child] 
               [fruit quantity]   
               [:tr :> 'first-child] (ef/content fruit)
               [:tr :> 'last-child] (ef/content (str quantity)))
  
(em/deftemplate template1 "/templates/template1.html" [fruit-data] 
                [:#heading1] (ef/content "fruit")  
                [:thead :tr :> 'last-child] (ef/content "quantity")
                [:tbody] (ef/content
                           (map #(snippit1 % (fruit-data %)) (keys fruit-data))))

(em/defaction action1 [] 
             [:.cool (ef/attr= :foo "false")] (ef/content (template1 {"apple" 5 "pear" 6}))) 

  

(em/defsnippit snippit2 "templates/template1.html" ["tbody > *:first-child"] 
               [fruit quantity] 
               ["tr > *:first-child"] (ef/content fruit)
               ["tr > *:last-child"] (ef/content (str quantity)))
  
(em/deftemplate template2 "/templates/template1.html" [fruit-data] 
                ["#heading1"] (ef/content "fruit")  
                ["thead tr > *:last-child"] (ef/content "quantity")
                ["tbody"] (ef/content
                           (map #(snippit2 % (fruit-data %)) (keys fruit-data))))

(em/defaction action2 [] 
             [".cool[foo=false]"] (ef/content (template2 {"bannan" 5 "pineapple" 10}))
             ["#heading1"] (ef/set-attr :id "new-heading1")
             ["#heading2"] (ef/remove-attr :id) 
             ["#new-heading1"] (ef/add-class "cool")
             ["table"] (ef/remove-class "wow")
             [".multi[bar]"] (ef/do-> 
                               (ef/content "test")
                               (ef/set-attr :attr1 "cool1" :attr2 "cool2")))
                              
