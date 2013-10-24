# Testing strategy

In generale la mia strategia e' di testare le API di ogni
namespace. Le API di un namespace sono tutti i suoi simboli
pubblici. Tuttavia in questo si rischia di dovere scrivere troppi
test. Per diminuirne il numero comincerei a scegliere all'intenro di
un namespace quei simboli che vengono usati da altri namespace.

Prendiamo il caso di `enfocus.core`. Quali sono i simboli usati negli
altri due namespce? Ecco un primo elenco:

## Simboli di enfocus.core da testare

Ecco l'elenco dei simboli del namespace `enfocus.core` utilizzati dal
namespace `enfocus.events`:

* at
* filter
* match?

Questi tre simboli sono utilizzati tutti nella funzione
`enfocus.events/listen-live`.

Vediamo ora quali sono i simboli di `enfocus.core` utilizzati dal
namespace `enfocus.effects`:

* nodes->coll

Un solo simbolo utilizzato. In prima approssimazione dovremmo quindi
cominciare a testare questi tre simboli ai quali, pero' bisogna
oaggiungere tutti quei simboli che verranno presumibilmente utilizzati
direttamente dal programmatore:

* select
* xpath
* from
* css-select
* checked-radio-checkbox
* selected-options
* read-form
* get-prop
* get-data
* get-text
* get-attr
* html
* delay
* set-data
* blur
* focus
* remove-style
* set-style
* unwrap
* remove-node
* substitute
* after
* before
* prepend
* append
* do->
* set-class
* remove-class
* add-class
* set-prop
* remove-prop
* html-content
* html-to-dom
* load-remote-dom
