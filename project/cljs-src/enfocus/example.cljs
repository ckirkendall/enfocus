(ns enfocus.example
  (:require [enfocus.core :as ef])
  (:require-macros [enfocus.macros :as em])) 
  


(defn test-from []
  (let [form-vals (em/from js/document
                        :test1 ["#ftest1"] (em/get-attr :value)
                        :test2 ["#ftest2"] (em/get-attr :value))]
    (em/at js/document 
        ["#test-from-div"] (em/content (pr-str form-vals)))))


(defn test-callback [pnods]
  (em/at pnods (em/do-> 
                 (em/content "callback successful")
                 (em/set-style :color "#fff"))))

(em/defsnippet snippet2 "templates/template1.html" ["tbody > *:first-child"] 
               [fruit quantity] 
               ["tr > *:first-child"] (em/content fruit)
               ["tr > *:last-child"] (em/content (str quantity)))
  
(em/deftemplate template2 "/templates/template1.html" [fruit-data] 
                ["#heading1"] (em/content "fruit")  
                ["thead tr > *:last-child"] (em/content "quantity")
                ["tbody"] (em/content
                           (map #(snippet2 % (fruit-data %)) (keys fruit-data))))

(em/deftemplate template3 "/templates/template1.html" [fruit-data] 
                ["#heading1"] (em/content "fruit")  
                ["thead tr > *:last-child"] (em/content "quantity")
                ["tbody > tr:not(:first-child)"] (em/remove-node)
                ["tbody"] #(em/at % ["tr:first-of-type"] 
                                  (em/clone-for [fr (vec fruit-data)]
                                                ["*:first-child"] (em/content (first fr))
                                                ["*:last-child"] (em/content (str (second fr))))))
  
  
(em/defsnippet success "templates/test-grid.html"  ["tbody > *:first-child > td span"] [] )

(em/defsnippet row "templates/test-grid.html"  ["tbody > *:first-child"] 
           [test-desc value]
           ["tr > *:first-child"] (em/content test-desc)
           ["tr > *:last-child > span"] (em/content value))

   
(em/deftemplate test-cases "templates/test-grid.html" []
                ["#test3 > *:last-child"] (em/content (success)) 
                ["#test4 > *:last-child"] (em/content (success))
                ["#test5 > *:last-child"] (em/html-content "<span class='success'>success</span>")
                ["#test6 > *:last-child"] (em/set-attr :test6 "cool")
                ["td[test6='cool']"] (em/content (success))
                ["#test7"] (em/remove-attr :foo)
                ["#test7 > *:last-child"] (em/content (success))
                ["tr[foo]"] (em/html-content "<span class='fail'>fail</span>") ;should do nothing
                ["#test8 > *:last-child"] (em/add-class "test8")
                [".test8"] (em/content (success))
                ["#test9"] (em/remove-class "bad")
                ["#test9 > *:last-child"] (em/content (success))
                [".bad > *:last-child"] (em/html-content "<span class='fail'>fail</span>") ;should do nothing
                ["#test10 td span"] (em/do->
                                         (em/after (success))
                                         (em/remove-node))
                ["#test11 td span"] (em/do->
                                         (em/before (success)) 
                                         (em/remove-node))
                ["#test12 td span"] (em/substitute(success)) 
                ["#test13 > *:last-child"] (em/do-> 
                                             (em/content "a:")
                                             (em/append (success)))
                ["#test14 > *:last-child"] (em/do->  
                                             (em/content ":p")
                                             (em/prepend (success)))
              ["#wrap-span"] (em/wrap :span {:class "success"})
              ["#test15 > *:last-child > .success > span"] (em/content "success")
              ["#wrapper"] (em/unwrap))  
  
(em/defaction test-grid []    
              ["#test-content"] (em/content (test-cases))
              ["#test-content tbody tr:nth-of-type(even)"] (em/add-class "even")
              ["#test-content tbody tr"] (em/listen 
                                           :mouseover 
                                           #((em/add-class "highlight") (.currentTarget %)))
              ["#test-content tbody tr"] (em/listen  
                                           :mouseout 
                                           #((em/remove-class "highlight") (.currentTarget %)))
              ["#test-content2"] (em/content (template2 {"banana" 5 "pineapple" 10 "apple" 5}))
              ["#heading1"] (em/set-attr :id "new-heading1")
              ["#heading2"] (em/set-attr :id "new-heading2")
              ["#test-content2 tfoot tr > *:last-child"] (em/content (str 20))
              ["#test-content3"] (em/content (template3 {"banana" 12 "apple" 6}))
              ["#test-content4"] (em/set-style :background "#00dd00" :font-size "10px")
              ["#test-content5"] (em/set-style :background "#dd0000" :font-size "10px")
              ["#test-content5"] (em/remove-style :background :font-size)
              ["#test-content6"] (em/listen
                                   :mouseover
                                   #((em/fade-out 500 20) (.currentTarget %)))
              ["#test-content6"] (em/listen
                                   :mouseout 
                                   #((em/fade-in 500 20) (.currentTarget %)))
              ["#test-content6_5"] (em/listen
                                   :mouseenter
                                   #((em/fade-out 500 20) (.currentTarget %)))
              ["#test-content6_5"] (em/listen
                                   :mouseleave  
                                   #((em/fade-in 500 20) (.currentTarget %)))
              ["#click"] (em/listen
                          :click 
                          #(em/at js/document
                               ["#sz-tst"] (em/chain 
                                             (em/resize 2 30 500 20)
                                             (em/resize 200 30 500 20 test-callback))))
              ["#mclick"] (em/listen  
                          :click 
                          #(em/at js/document
                               ["#mv-tst"] (em/move 300 305 500 20 
                                                    (em/move 0 0 500 20))))
              ["#test-from"] (em/listen :click test-from))
    
;(em/defaction test-suite [])
  
  

(defn funtimes [msg]
  (em/at js/window (em/listen :resize #(js/alert (str "you resized your window:" %))))
  (em/at js/document
      [:.heading (ef/attr= :foo "true")] (em/content msg))
  (em/wait-for-load (test-grid)))   
                              
(set! (.onload js/window) #(funtimes "THIS IS A TEST"))