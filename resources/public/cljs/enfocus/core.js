goog.provide('enfocus.core');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('goog.dom.query');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('clojure.string');
enfocus.core.css_syms = cljs.core.HashMap.fromArrays(["﷑'first-child","﷑'last-child"],[" *:first-child"," *:last-child"]);
enfocus.core.create_sel_str = (function create_sel_str(css_sel){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__3390_SHARP_){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,p1__3390_SHARP_)))
{return enfocus.core.css_syms.call(null,p1__3390_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,p1__3390_SHARP_)))
{return cljs.core.str.call(null," ",cljs.core.name.call(null,p1__3390_SHARP_));
} else
{if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,p1__3390_SHARP_)))
{return create_sel_str.call(null,p1__3390_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.str.call(null,p1__3390_SHARP_)))
{return p1__3390_SHARP_;
} else
{return null;
}
}
}
}
}),css_sel));
});
enfocus.core.css_select = (function css_select(dom_node,css_sel){
var sel__3391 = clojure.string.trim.call(null,clojure.string.replace.call(null,enfocus.core.create_sel_str.call(null,css_sel)," :",":"));
var ret__3392 = goog.dom.query.call(null,sel__3391,dom_node);

alert.call(null,ret__3392);
alert.call(null,sel__3391);
return ret__3392;
});
enfocus.core.tpl_cache = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
enfocus.core.create_hidden_dom = (function create_hidden_dom(child){
var div__3393 = goog.dom.createDom.call(null,"div",cljs.core.ObjMap.fromObject(["style"],{"style":"display: none; width: 0px; height: 0px"}).strobj);

div__3393.appendChild(child);
goog.dom.appendChild.call(null,goog.dom.getDocument.call(null).body,div__3393);
return div__3393;
});
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){
var child__3394 = goog.dom.getFirstElementChild.call(null,div);

goog.dom.removeNode.call(null,div);
return child__3394;
});
enfocus.core.load_remote_dom = (function load_remote_dom(uri){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri))))
{var req__3395 = (new goog.net.XhrIo());
var callback__3398 = (function (req){
var text__3396 = req.getResponseText();
var data__3397 = goog.dom.htmlToDocumentFragment.call(null,text__3396);

return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,data__3397);
});

goog.events.listen.call(null,req__3395,goog.net.EventType.COMPLETE,(function (){
return callback__3398.call(null,req__3395);
}));
return req__3395.send(uri,"GET");
} else
{return null;
}
});
enfocus.core.get_cached_dom = (function get_cached_dom(uri){
var nod__3399 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);

if(cljs.core.truth_(nod__3399))
{return nod__3399.cloneNode(true);
} else
{return null;
}
});
enfocus.core.get_cached_snippit = (function get_cached_snippit(uri,sel){
var sel_str__3400 = enfocus.core.create_sel_str.call(null,sel);
var cache__3401 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,cljs.core.str.call(null,uri.call(null,sel_str__3400)));

if(cljs.core.truth_(cache__3401))
{return cache__3401.cloneNode(true);
} else
{var tdom__3402 = enfocus.core.get_cached_dom.call(null,uri);
var dom__3403 = enfocus.core.create_hidden_dom.call(null,tdom__3402);
var tsnip__3404 = enfocus.core.css_select.call(null,dom__3403,sel_str__3400);
var snip__3405 = (cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Array,tsnip__3404))?cljs.core.first.call(null,tsnip__3404):tsnip__3404);

enfocus.core.remove_node_return_child.call(null,dom__3403);
cljs.core.assoc.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache),cljs.core.str.call(null,uri,sel_str__3400),snip__3405);
return snip__3405;
}
});
enfocus.core.node_QMARK_ = (function node_QMARK_(tst){
return goog.dom.isNodeLike.call(null,tst);
});
enfocus.core.nodelist_QMARK_ = (function nodelist_QMARK_(tst){
return cljs.core.instance_QMARK_.call(null,NodeList,tst);
});
enfocus.core.nodelist__GT_coll = (function nodelist__GT_coll(nl){
var iter__161__auto____3411 = (function iter__3407(s__3408){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3408__3409 = s__3408;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3408__3409)))
{var x__3410 = cljs.core.first.call(null,s__3408__3409);

return cljs.core.cons.call(null,(nl[x__3410]),iter__3407.call(null,cljs.core.rest.call(null,s__3408__3409)));
} else
{return null;
}
break;
}
})));
});

return iter__161__auto____3411.call(null,cljs.core.range.call(null,0,nl.length));
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){
return cljs.core.mapcat.call(null,(function (p1__3406_SHARP_){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__3406_SHARP_)))
{return cljs.core.Vector.fromArray([goog.dom.createTextNode.call(null,p1__3406_SHARP_)]);
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,p1__3406_SHARP_)))
{return p1__3406_SHARP_;
} else
{if(cljs.core.truth_(enfocus.core.node_QMARK_.call(null,p1__3406_SHARP_)))
{return cljs.core.Vector.fromArray([p1__3406_SHARP_]);
} else
{if(cljs.core.truth_(enfocus.core.nodelist_QMARK_.call(null,p1__3406_SHARP_)))
{return enfocus.core.nodelist__GT_coll.call(null,p1__3406_SHARP_);
} else
{if(cljs.core.truth_("﷐'else"))
{return null;
} else
{return null;
}
}
}
}
}
}),values);
});
/**
* @param {...*} var_args
*/
enfocus.core.content = (function() { 
var content__delegate = function (values){
var fnodes__3416 = enfocus.core.flatten_nodes_coll.call(null,values);

return (function proc(pnodes){
if(cljs.core.truth_(enfocus.core.nodelist_QMARK_.call(null,pnodes)))
{return cljs.core.doall.call(null,(function (){var iter__161__auto____3422 = (function iter__3417(s__3418){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3418__3419 = s__3418;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3418__3419)))
{var idx__3420 = cljs.core.first.call(null,s__3418__3419);

return cljs.core.cons.call(null,(function (){var pnod__3421 = (pnodes[idx__3420]);

goog.dom.removeChildren.call(null,pnod__3421);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3412_SHARP_){
return pnod__3421.appendChild(p1__3412_SHARP_);
}),fnodes__3416));
})(),iter__3417.call(null,cljs.core.rest.call(null,s__3418__3419)));
} else
{return null;
}
break;
}
})));
});

return iter__161__auto____3422.call(null,cljs.core.range.call(null,0,pnodes.length));
})());
} else
{if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Array,pnodes)))
{var pnod__3423 = cljs.core.first.call(null,pnodes);

goog.dom.removeChildren.call(null,pnod__3423);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3413_SHARP_){
return pnod__3423.appendChild(p1__3413_SHARP_);
}),fnodes__3416));
} else
{if(cljs.core.truth_("﷐'else"))
{return null;
} else
{return null;
}
}
}
});
};
var content = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return content__delegate.call(this, values);
};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__3424){
var values = cljs.core.seq( arglist__3424 );;
return content__delegate.call(this, values);
});
return content;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.set_attr = (function() { 
var set_attr__delegate = function (values){
var at_lst__3426 = cljs.core.partition.call(null,2,values);

return (function (pnodes){
if(cljs.core.truth_(enfocus.core.nodelist_QMARK_.call(null,pnodes)))
{return cljs.core.doall.call(null,(function (){var iter__161__auto____3432 = (function iter__3427(s__3428){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3428__3429 = s__3428;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3428__3429)))
{var idx__3430 = cljs.core.first.call(null,s__3428__3429);

return cljs.core.cons.call(null,(function (){var pnod__3431 = (pnodes[idx__3430]);

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3414_SHARP_){
return pnod__3431.setAttribute(cljs.core.first.call(null,p1__3414_SHARP_),cljs.core.second.call(null,p1__3414_SHARP_));
})));
})(),iter__3427.call(null,cljs.core.rest.call(null,s__3428__3429)));
} else
{return null;
}
break;
}
})));
});

return iter__161__auto____3432.call(null,cljs.core.range.call(null,0,pnodes.length));
})());
} else
{if(cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Array,pnodes)))
{var pnod__3433 = cljs.core.first.call(null,pnodes);

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3415_SHARP_){
return pnod__3433.setAttribute(cljs.core.first.call(null,p1__3415_SHARP_),cljs.core.second.call(null,p1__3415_SHARP_));
}),at_lst__3426));
} else
{if(cljs.core.truth_("﷐'else"))
{return null;
} else
{return null;
}
}
}
});
};
var set_attr = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return set_attr__delegate.call(this, values);
};
set_attr.cljs$lang$maxFixedArity = 0;
set_attr.cljs$lang$applyTo = (function (arglist__3434){
var values = cljs.core.seq( arglist__3434 );;
return set_attr__delegate.call(this, values);
});
return set_attr;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.attr_QMARK_ = (function() { 
var attr_QMARK___delegate = function (kys){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p1__3425_SHARP_){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,p1__3425_SHARP_),"]");
}),kys));
};
var attr_QMARK_ = function (var_args){
var kys = null;
if (goog.isDef(var_args)) {
  kys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return attr_QMARK___delegate.call(this, kys);
};
attr_QMARK_.cljs$lang$maxFixedArity = 0;
attr_QMARK_.cljs$lang$applyTo = (function (arglist__3435){
var kys = cljs.core.seq( arglist__3435 );;
return attr_QMARK___delegate.call(this, kys);
});
return attr_QMARK_;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.attr_EQ_ = (function() {
var attr_EQ_ = null;
var attr_EQ___3436 = (function (){
return "";
});
var attr_EQ___3437 = (function() { 
var G__3439__delegate = function (ky,txt,forms){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,ky),"='",txt,"']",cljs.core.apply.call(null,attr_EQ_,forms));
};
var G__3439 = function (ky,txt,var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3439__delegate.call(this, ky, txt, forms);
};
G__3439.cljs$lang$maxFixedArity = 2;
G__3439.cljs$lang$applyTo = (function (arglist__3440){
var ky = cljs.core.first(arglist__3440);
var txt = cljs.core.first(cljs.core.next(arglist__3440));
var forms = cljs.core.rest(cljs.core.next(arglist__3440));
return G__3439__delegate.call(this, ky, txt, forms);
});
return G__3439;
})()
;
attr_EQ_ = function(ky,txt,var_args){
var forms = var_args;
switch(arguments.length){
case  0 :
return attr_EQ___3436.call(this);
default:
return attr_EQ___3437.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
attr_EQ_.cljs$lang$maxFixedArity = 2;
attr_EQ_.cljs$lang$applyTo = attr_EQ___3437.cljs$lang$applyTo;
return attr_EQ_;
})()
;
enfocus.core.nth_child = (function() {
var nth_child = null;
var nth_child__3441 = (function (x){
return cljs.core.str.call(null,":nth-child(",x,")");
});
var nth_child__3442 = (function (x,y){
return cljs.core.str.call(null,":nth-child(",x,"n+",y,")");
});
nth_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_child__3441.call(this,x);
case  2 :
return nth_child__3442.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_child;
})()
;
enfocus.core.nth_of_type = (function() {
var nth_of_type = null;
var nth_of_type__3444 = (function (x){
return cljs.core.str.call(null,":nth-of-type(",x,")");
});
var nth_of_type__3445 = (function (x,y){
return cljs.core.str.call(null,":nth-of-type(",x,"n+",y,")");
});
nth_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_of_type__3444.call(this,x);
case  2 :
return nth_of_type__3445.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_of_type;
})()
;
enfocus.core.nth_last_child = (function() {
var nth_last_child = null;
var nth_last_child__3447 = (function (x){
return cljs.core.str.call(null,":nth-last-child(",x,")");
});
var nth_last_child__3448 = (function (x,y){
return cljs.core.str.call(null,":nth-last-child(",x,"n+",y,")");
});
nth_last_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_child__3447.call(this,x);
case  2 :
return nth_last_child__3448.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_child;
})()
;
enfocus.core.nth_last_of_type = (function() {
var nth_last_of_type = null;
var nth_last_of_type__3450 = (function (x){
return cljs.core.str.call(null,":nth-last-of-type(",x,")");
});
var nth_last_of_type__3451 = (function (x,y){
return cljs.core.str.call(null,":nth-last-of-type(",x,"n+",y,")");
});
nth_last_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_of_type__3450.call(this,x);
case  2 :
return nth_last_of_type__3451.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_of_type;
})()
;
