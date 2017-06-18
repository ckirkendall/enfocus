# Enfocus

Enfocus is a `DOM` manipulation and templating library for
ClojureScript. Inspired by Christophe Grand's [Enlive][1], Enfocus'
primary purpose is providing a base for building rich interfaces in
ClojureScript.

If you are unfamiliar with enlive I also recommend taking a look at
these links.

David Nolen wrote a [nice tutorial][2]

Another [tutorial][3] by Brian Marick.


# Documentation & Examples

[Documentation & Demo Site][4]

[Example Website][5]

# Where do I get support?

[On the group][6]

# Quick Start

## Setup

From any leiningen project file:

[![Clojars Project](http://clojars.org/enfocus/latest-version.svg)](http://clojars.org/enfocus)

For the best development experience, use [lein-cljsbuild][7]

### The Basics

Every great journey starts with "Hello world!"

```clj
(ns my.namespace
  (:require [enfocus.core :as ef]
            [enfocus.events :as events]
	    [enfocus.effects :as effects])
  (:require-macros [enfocus.macros :as em]))

(defn start []
  (ef/at js/document
    ["body"] (ef/content "Hello enfocus!")))

(set! (.-onload js/window) start)
```

See [hello-enfocus][15] repo.

## The `at` form

At the core to understanding Enfocus is the `at` form used in the
"Hello world!" example above.  It comes in two basic flavors listed below:

A single transform

```clj
(at a-node (transform arg1 ...))

;or with implied js/document

(at selector (transform arg1 ...))
```

and a series of transforms

```clj
(at a-node
    [selector1] (transform1 arg1 ...)
    [selector2] (transform2 arg1 ...))

;or with implied js/document

(at [selector1] (transform1 arg1 ...)
    [selector2] (transform2 arg1 ...))
```

In the first case `at` is passed a node, node set or selector and a
transform.  This form of `at` calls the transform on each element in
the node set.

A `transform` is nothing more than a function that takes a set of
arguments and returns a function that takes a set of nodes.  In case
of the `"Hello World!"` example above, we see the use of `(em/content
"Hello world!")` this call returns a function that takes node or node
set and replaces the content with `"Hello world!"`

In the second case, we see `at` is optionally passed a node or node
set and a set of selector/transform pairs. The selectors are scoped by
the node, node set or js/document, if a node is not passed in, and the
results of each selector is passed on to its partner transformation.

A `selector` is a string representing a [CSS3 compliant selector][8]

### Handling Events

Enfocus has event handling.  Below is a simple example to add an
`onclick` event handler to a button.

```clj
(em/defaction change [msg]
  ["#button1"] (ef/content msg))

(em/defaction setup []
  ["#button1"] (events/listen :click #(change "I have been clicked")))

(set! (.-onload js/window) setup)
```

The `defaction` construct is use here instead `defn`.  `defaction`
creates a function that calls the `at` form like discussed above and
passes in `js/document` as the node to be transformed.

### Effects

Enfocus has the concept of effects.  Effects are nothing more than
transformations over a period of time. Below is a simple example of a
resize effect. Notice how the effects can be chained.

```clj
(em/defaction resize-div [width]
  ["#rz-demo"] (effects/chain
                 (effects/resize width :curheight 500 20)
                 (effects/resize 5 :curheight 500 20)))

(em/defaction setup []
  ["#button2"] (events/listen #(resize-div 200)))

(set! (.-onload js/window) setup)
```

### Actions, templates and snippets

A snippet is a function that returns a seq of nodes, it can be used as
a building block for more complex templates or actions.

You define a snippet by providing a remote resource, a selector and
series of transformations.

The snippet definition below selects a table body from the remote
resource `templates/template1.html` and grabs the first row.  It then
fills the content of the row.

```clj
(em/defsnippet snippet2 "templates/template1.html" ["tbody > *:first-child"]
               [fruit quantity]
               ["tr > *:first-child"] (ef/content fruit)
               ["tr > *:last-child"] (ef/content (str quantity)))
```

A template is very similar to a snippet except it does not require a
selector to grap a sub section, instead the entire remote resource is
used as the dom.  If the remote resource is a full html document only
what is inside the body tag is brought into the template.

```clj
(em/deftemplate template2 "/templates/template1.html" [fruit-data]
                ["#heading1"] (ef/content "fruit")
                ["thead tr > *:last-child"] (ef/content "quantity")
                ["tbody"] (ef/content
                           (map #(snippit2 % (fruit-data %)) (keys fruit-data))))
```

Normally, snippets and templates are loaded via an AJAX request, but
you can also create `:compiled` templates, which will be inlined in to
resulting code at compile time:

```clj
(em/deftemplate template2 :compiled "/templates/template1.html" [fruit-data]
                ["#heading1"] (ef/content "fruit")
                ["thead tr > *:last-child"] (ef/content "quantity")
                ["tbody"] (ef/content
                           (map #(snippit2 % (fruit-data %)) (keys fruit-data))))
```

If, snippets and/or templates are loaded via AJAX it is important to
make sure the content has been loaded before calling the template or
snippit function.  Enfocus provides a convient macro that works like
an onload callback but for AJAX driven snippets and templates.

```clj
(em/wait-for-load (render-page))
```

An action is a set of transforms that take place on the live dom.
below is a definition of a an action.

```clj
(em/defaction action2 []
             [".cool[foo=false]"] (ef/content (template2 {"banana" 5 "pineapple" 10}))
             ["#heading1"] (ef/set-attr :id "new-heading1"))
```

Enfocus also support [hiccup][11] style emitters introduced in
[enlive "1.1.0"][1].

```clj
(defn hiccup-template [arg1]
  (ef/html
    [:h1#hiccup.clazz {:width arg1} "Hiccup Emitters are Cool"]))
```

## Transformations

A transformation is a function that returns either a node or
collection of node.

### Enfocus defines several helper functions for transformations:

Supported Enlive Transformations

```clj
  content            (content "xyz" a-node "abc")
  html-content       (html-content "<blink>please no</blink>")
  set-attr           (set-attr :attr1 "val1" :attr2 "val2")
  remove-attr        (remove-attr :attr1 :attr2)
  add-class          (add-class "foo" "bar")
  remove-class       (remove-class "foo" "bar")
  do->               (do-> transformation1 transformation2)
  append             (append "xyz" a-node "abc")
  prepend            (prepend "xyz" a-node "abc")
  after              (after "xyz" a-node "abc")
  before             (before "xyz" a-node "abc")
  substitute         (substitute "xyz" a-node "abc")
  clone-for          (clone-for [item items] transformation)
                     or (clone-for [item items]
                          selector1 transformation1
                          selector2 transformation2)
  wrap               (wrap :div) or (wrap :div {:class "foo"})
  unwrap             (unwrap)
  replace-vars       (replace-vars {:var1 "value" :var2 "value")
```

New Transformations

```clj
  focus              (focus)
  blur               (blur)
  set-prop           (set-prop :value "testing")
  set-style          (set-style :font-size "10px" :background "#fff")
  remove-style       (remove-style :font-size :background)
  listen             (listen :mouseover (fn [event] ...))
  remove-listeners   (remove-listeners :mouseover :mouseout)
  fade-in            (fade-in time)
                     or (fade-in time callback)
                     or (fade-in time callback accelerator)
  fade-out           (fade-out time)
                     or (fade-out time callback)
  resize             (resize width height ttime)
                     or (resize width height ttime callback)
                     or (resize width height ttime callback accelerator)
  move               (move x y ttime)
                     or (move x y ttime callback)
                     or (move x y ttime callback accelerator)
  scroll             (scroll x y ttime)
  		     or (scroll x y ttime callback)
		     or (scroll x y ttime callback accelerator)
  chain              (chain (fade-in ttime) ;serialize async effects
                            (move x y ttime)
                            (fade-out ttime)
                            ...)
  set-data           (set-data key value)
```

Currently there is one transformation that is supported by Enlive but
not Enfocus. (Patches very welcome!!)

```clj
  move               (move [:.footnote] [:#footnotes] content)
                     ;this will be called relocate in enfocus
```


## Selectors

Enfocus supports both [CSS3][8] and [XPath][12] selectors:

```clj
(ns example
  (:require [enfocus.core :as ef])
  (:require-macros [enfocus.macros :as em]))

(em/defaction action2 []
             [".cool[foo=false]"] (ef/content ....)) ;CSS3
             (ef/xpath "//tr[@id='1']/th[2]") (ef/set-attr :id "new-heading1")) ;XPATH
```


## The `from` form

The `from` form is how we get data from the dom in enfocus.  It comes
in two basic flavors listed below:

This form returns the result of the extractor.

```clj
(from a-node (extractor arg1 ...))

;or with selector

(from selector (extractor arg1 ...))
```

and this form returns a map of the form `{:key1 result1 :key2 result2}`

```clj
(from a-node
    :key1 [selector1] (extractor arg1 ...)
    :key2 [selector2] (extractor arg1 ...))

;or implied js/documnt

(from
    :key1 [selector1] (extractor arg1 ...)
    :key2 [selector2] (extractor arg1 ...))
```


## Extractors

An extractor is a function that takes a node and returns information
about.

### Enfocus defines several helper fuctions for extractors:

An extractor is a funciton that takes a node and returns information about

```clj
  get-attr           (get-attr :attr1)
  get-text           (get-text)
  get-prop           (get-prop :value)
  get-data           (get-data :key1)
  read-form          (read-form)  - returns {:field1 ("val1" "val2") :field2 val}
```

## Contributing

* Download [leiningen][9]

### Compile Enfocus

```bash
 git clone git://github.com/ckirkendall/enfocus.git
 cd enfocus
 lein do cljx once, compile
```

### Test Enfocus

After having compiled down `enfocus` as explained above

```bash
lein test
```

### bREPLing with Enfocus

After having compiled down `enfocus` as explained above issue the
following `lein` task:

```bash
 lein repl
```

Then run the http server as follows

```clj
user=> (run)
2013-10-15 12:34:33.082:INFO:oejs.Server:jetty-7.6.8.v20121106
2013-10-15 12:34:33.138:INFO:oejs.AbstractConnector:Started SelectChannelConnector@0.0.0.0:3000
#<Server org.eclipse.jetty.server.Server@7aed9585>
```

Next launch the browser-connected REPL as follows:

```clj
user=> (browser-repl)
Browser-REPL ready @ http://localhost:55211/4347/repl/start
Type `:cljs/quit` to stop the ClojureScript REPL
nil
cljs.user=>
```

Finally, visit the [http://localhost:3000/][10] URI

The page is empty and it used for bREPLin only. Wait few moments while
the connection is established and then you can start bREPLing with
Enfocus.

```clj
cljs.user=> (js/alert "Hello, Enfocus!")
```

### Final note

All the [Austin][16] use cases should work as expected.

## License

Copyright (C) 2012-2013 Creighton Kirkendall

Distributed under the Eclipse Public License, the same as Clojure.

## Special Thanks!

[Christophe Grand][14] for creating [enlive][1] and building a simple
api for dom manipulation.

[1]: http://github.com/cgrand/enlive
[2]: http://github.com/swannodette/enlive-tutorial/
[3]: https://github.com/cgrand/enlive/wiki/Table-and-Layout-Tutorial,-Part-1:-The-Goal
[4]: http:/ckirkendall.github.com/enfocus-site
[5]: http://github.com/ckirkendall/The-Great-Todo
[6]: http://groups.google.com/group/enfocus
[7]: https://github.com/emezeske/lein-cljsbuild
[8]: http://www.w3schools.com/cssref/css_selectors.asp
[9]: https://github.com/technomancy/leiningen
[10]: http://localhost:3000/
[11]: https://github.com/weavejester/hiccup
[12]: http://www.w3schools.com/xpath/xpath_syntax.asp
[13]: https://github.com/cemerick/piggieback
[14]: https://github.com/cgrand
[15]: https://github.com/magomimmo/hello-enfocus
[16]: https://github.com/cemerick/austin
