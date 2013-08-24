(ns enfocus.testing
  (:use [enfocus.enlive.syntax :only [attr=]])
  (:require [enfocus.core :as ef]
            [enfocus.effects :as effects]
            [enfocus.events :as events])
  (:require-macros [enfocus.macros :as em]))
  

 
(defn test-from []
  (let [form-vals (ef/from js/document
                        :test1 ["#ftest1"] (ef/get-prop :value) 
                        :test2 ["#ftest2"] (ef/get-prop :value)
                        :test3 ["#from-form > input[type=checkbox]"] (ef/filter #(.-checked %)
                                                                                (ef/get-prop :value))
                        :test4 ["#from-form option"] (ef/filter :selected
                                                                (ef/get-prop :value)))
        form-read (ef/from "#from-form" (ef/read-form))
        from-val (ef/from "#ftest1" (ef/get-attr :value))]
    (ef/at "#test-from-div" (ef/do-> (ef/content (pr-str form-vals)
                                                 (ef/html [:br])
                                                 (pr-str form-read)
                                                 (ef/html [:br]))
                                     (ef/append from-val)))))
  
(defn test-get-text []
  (let [from-text (ef/from (ef/select ["#ftext-test"]) (ef/get-text))]
    (ef/log-debug (str "from-text:" from-text))
    (ef/at js/document
           ["#ftext-test-result"] (ef/content from-text))))



(defn test-callback [pnods]
  (ef/at pnods (ef/do-> 
                 (ef/content "callback successful")
                 (ef/set-style :color "#fff"))))

(em/defsnippet snippet2 "templates/template1.html" ["tbody > *:first-child"] 
               [fruit quantity] 
               ["tr > *:first-child"] (ef/content fruit)
               ["tr > *:last-child"] (ef/content (str quantity)))
  
(em/deftemplate template2 "templates/template1.html" [fruit-data] 
                ["#heading1"] (ef/content "fruit")  
                ["thead tr > *:last-child"] (ef/content "quantity")
                ["tbody"] (ef/content
                           (map #(snippet2 % (fruit-data %)) (keys fruit-data))))

(em/deftemplate template3 :compiled "../testing/resources/public/templates/template1.html" [fruit-data]
  ["#heading1"] (ef/content "fruit")
  ["thead tr > *:last-child"] (ef/content "quantity")
  ["tbody > tr:not(:first-child)"] (ef/remove-node)
  ["tbody"] #(ef/at % ["tr:first-of-type"]
                    (em/clone-for [[f q] (vec fruit-data)]
                                  ["*:first-child"] (ef/content f)
                                  ["*:last-child"] (ef/content (str q)))))
    
  
(em/defsnippet success :compiled "enfocus/html/test-grid.html"
  ["tbody > *:first-child > td span"] [])

(em/defsnippet row "templates/test-grid.html"  ["tbody > *:first-child"] 
           [test-desc value]
           ["tr > *:first-child"] (ef/content test-desc)
           ["tr > *:last-child > span"] (ef/content value))

       
(em/deftemplate test-cases "templates/test-grid.html" []
                ["#test3 > *:last-child"] (ef/content (success)) 
                ["#test4 > *:last-child"] (ef/content (success))
                ["#test5 > *:last-child"] (ef/html-content "<span class='success'>success</span>")
                ["#test6 > *:last-child"] (ef/set-attr :test6 "cool")
                ["td[test6='cool']"] (ef/content (success))
                ;[[:td (attr= :test6 "cool")]] (ef/content (success))
                ["#test7"] (ef/remove-attr :foo)  
                ["#test7 > *:last-child"] (ef/content (success))
                ["tr[foo]"] (ef/html-content "<span class='fail'>fail</span>") ;should do nothing
                ["#test8 > *:last-child"] (ef/add-class "test8")
                [".test8"] (ef/content (success))
                ["#test9"] (ef/remove-class "bad")
                ["#test9 > *:last-child"] (ef/content (success))
                [".bad > *:last-child"] (ef/html-content "<span class='fail'>fail</span>") ;should do nothing
                ["#test10 td span"] (ef/do->
                                         (ef/after (success))
                                         (ef/remove-node))
                ["#test11 td span"] (ef/do->
                                         (ef/before (success)) 
                                         (ef/remove-node))
                ["#test12 td span"] (ef/substitute(success)) 
                ["#test13 > *:last-child"] (ef/do-> 
                                             (ef/content "a:")
                                             (ef/append (success)))
                ["#test14 > *:last-child"] (ef/do->  
                                             (ef/content ":p")
                                             (ef/prepend (success)))
              ["#wrap-span"] (ef/wrap :span {:class "success"})
              ["#test15 > *:last-child > .success > span"] (ef/content "success")
              ["#wrapper"] (ef/unwrap)
              (ef/xpath "//tr[@id='test17']/td[2]") (ef/content (success))
              ["#test18 > *:last-child"] #(ef/at % ef/this-node (ef/content (success)))
              "#test19 > *:last-child" (ef/content (success)))    

(defn fade-in [event]
  (ef/at (.-currentTarget event) (effects/fade-in 500)))

(defn fade-out [event]
  (ef/at (.-currentTarget event) (effects/fade-out 500)))

  
(em/defaction test-grid []    
              ["#test-content"] (ef/content (test-cases))
              ["#test-content tbody tr:nth-of-type(even)"] (ef/add-class "even")
              ["body"] (events/listen-live 
                        :mouseover 
                        "#test-content tbody tr"
                        #(ef/at (.-currentTarget %) (ef/add-class "highlight")))
              ["body"] (events/listen-live  
                        :mouseout
                        "#test-content tbody tr"
                        #(ef/at (.-currentTarget %) (ef/remove-class "highlight")))
              ["#test-content2"] (ef/content (template2 {"banana" 5 "pineapple" 10 "apple" 5}))
              ["#heading1"] (ef/set-attr :id "new-heading1") 
              ["#heading2"] (ef/set-attr :id "new-heading2")
              ["#test-content2 tfoot tr > *:last-child"] (ef/content (str 20))
              ["#test-content3"] (ef/content (template3 {"pear" 22 "banana" 12 "apple" 6}))
              ["#test-content4"] (ef/set-style :background "#00dd00" :font-size "10px")
              ["#test-content5"] (ef/set-style :background "#dd0000" :font-size "10px")
              ["#test-content5"] (ef/remove-style :background :font-size)
              ["#test-content6"] (events/listen :mouseover fade-out)
              ["#test-content6"] (events/listen :mouseout fade-in)
              ["#test-remove-listeners"] (events/listen  
                                   :click 
                                   #(ef/at js/document 
                                           ["#test-content6"] (events/remove-listeners :mouseover :mouseout)))
              ["#test-content6_5"] (events/listen :mouseenter fade-out)
              ["#test-content6_5"] (events/listen :mouseleave  fade-in)
              ["#test-unlisten"] (events/listen  
                                   :click 
                                   #(ef/at js/document  
                                           ["#test-content6_5"] (ef/do->
                                                                  (events/unlisten :mouseenter fade-out)
                                                                  (events/unlisten :mouseleave fade-in))))  
              ["#click"] (events/listen
                          :click 
                          #(ef/at js/document
                               ["#sz-tst"] (effects/chain 
                                             (effects/resize 2 30 500)
                                             (effects/resize 200 30 500 test-callback))))
              ["#delay-click"] (events/listen
                          :click 
                          #(ef/at js/document
                               ["#dly-tst"] (effects/chain 
                                             (effects/resize 2 30 500)
                                             (ef/delay 2000 (effects/resize 200 30 500)))))
              ["#mclick"] (events/listen  
                          :click 
                          #(ef/at js/document 
                               ["#mv-tst"] (effects/move 300 305 500 
                                                    (effects/move 0 0 500))))
              ["#ftest2"] (ef/focus) 
              ["#test-from"] (events/listen :click test-from)
              ["#test-get-text"] (events/listen :click test-get-text)
              ["#cb1"] (ef/set-prop :checked true)
              ["#test-content tbody"] (ef/append (ef/html [:tr#test20.even '([:td "hiccup emmiter"] [:td.success "success"])]))
              ["#test-content tbody"] (ef/append (ef/html [:tr#test21.odd '([:td "replace-vars"] [:td {:class "${val}"} "${val}"])]))
              ["#test21"] (ef/replace-vars {:val "success"}))
    
;(ef/defaction test-suite [])
   
  
 
(defn funtimes [msg]
  (ef/at js/window (events/listen :resize #(ef/log-debug (str "you resized your window:" %))))
  (ef/at js/document
      [:.heading (attr= :foo "true")] (ef/content msg))
  (em/wait-for-load (test-grid)))   
                               
(set! (.-onload js/window) #(funtimes "THIS IS A TEST"))
