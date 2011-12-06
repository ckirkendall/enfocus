goog.provide('enfocus.core');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('goog.dom.query');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('clojure.string');
enfocus.core._STAR_id_scope_STAR_ = "";
enfocus.core.css_syms = cljs.core.HashMap.fromArrays(["﷑'first-child","﷑'last-child"],[" *:first-child"," *:last-child"]);
enfocus.core.hide_style = cljs.core.ObjMap.fromObject(["style"],{"style":"display: none; width: 0px; height: 0px"}).strobj;
enfocus.core.node_QMARK_ = (function node_QMARK_(tst){
return goog.dom.isNodeLike.call(null,tst);
});
enfocus.core.nodelist_QMARK_ = (function nodelist_QMARK_(tst){
return cljs.core.instance_QMARK_.call(null,NodeList,tst);
});
enfocus.core.nodes__GT_coll = (function nodes__GT_coll(nl){
if(cljs.core.truth_(enfocus.core.node_QMARK_.call(null,nl)))
{return cljs.core.Vector.fromArray([nl]);
} else
{if(cljs.core.truth_((function (){var or__3576__auto____6402 = cljs.core.instance_QMARK_.call(null,Array,nl);

if(cljs.core.truth_(or__3576__auto____6402))
{return or__3576__auto____6402;
} else
{return cljs.core.coll_QMARK_.call(null,nl);
}
})()))
{return nl;
} else
{if(cljs.core.truth_(enfocus.core.nodelist_QMARK_.call(null,nl)))
{var iter__161__auto____6407 = (function iter__6403(s__6404){
return (new cljs.core.LazySeq(null,false,(function (){
var s__6404__6405 = s__6404;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__6404__6405)))
{var x__6406 = cljs.core.first.call(null,s__6404__6405);

return cljs.core.cons.call(null,(nl[x__6406]),iter__6403.call(null,cljs.core.rest.call(null,s__6404__6405)));
} else
{return null;
}
break;
}
})));
});

return iter__161__auto____6407.call(null,cljs.core.range.call(null,0,nl.length));
} else
{return null;
}
}
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){
return cljs.core.mapcat.call(null,(function (p1__6401_SHARP_){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__6401_SHARP_)))
{return cljs.core.Vector.fromArray([goog.dom.createTextNode.call(null,p1__6401_SHARP_)]);
} else
{if(cljs.core.truth_("﷐'else"))
{return enfocus.core.nodes__GT_coll.call(null,p1__6401_SHARP_);
} else
{return null;
}
}
}),values);
});
enfocus.core.create_sel_str = (function() {
var create_sel_str = null;
var create_sel_str__6409 = (function (css_sel){
return create_sel_str.call(null,"",css_sel);
});
var create_sel_str__6410 = (function (sym,css_sel){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__6408_SHARP_){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,p1__6408_SHARP_)))
{return enfocus.core.css_syms.call(null,p1__6408_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,p1__6408_SHARP_)))
{return cljs.core.str.call(null," ",cljs.core.name.call(null,p1__6408_SHARP_).replace("#",cljs.core.str.call(null,"#",sym)));
} else
{if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,p1__6408_SHARP_)))
{return create_sel_str.call(null,p1__6408_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__6408_SHARP_)))
{return p1__6408_SHARP_.replace("#",cljs.core.str.call(null,"#",sym));
} else
{return null;
}
}
}
}
}),css_sel));
});
create_sel_str = function(sym,css_sel){
switch(arguments.length){
case  1 :
return create_sel_str__6409.call(this,sym);
case  2 :
return create_sel_str__6410.call(this,sym,css_sel);
}
throw('Invalid arity: ' + arguments.length);
};
return create_sel_str;
})()
;
enfocus.core.css_select = (function() {
var css_select = null;
var css_select__6414 = (function (dom_node,css_sel){
return css_select.call(null,"",dom_node,css_sel);
});
var css_select__6415 = (function (sym,dom_node,css_sel){
var sel__6412 = clojure.string.trim.call(null,clojure.string.replace.call(null,enfocus.core.create_sel_str.call(null,sym,css_sel)," :",":"));
var ret__6413 = goog.dom.query.call(null,sel__6412,dom_node);

return ret__6413;
});
css_select = function(sym,dom_node,css_sel){
switch(arguments.length){
case  2 :
return css_select__6414.call(this,sym,dom_node);
case  3 :
return css_select__6415.call(this,sym,dom_node,css_sel);
}
throw('Invalid arity: ' + arguments.length);
};
return css_select;
})()
;
enfocus.core.tpl_cache = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
enfocus.core.create_hidden_dom = (function create_hidden_dom(child){
var div__6417 = goog.dom.createDom.call(null,"div",enfocus.core.hide_style);

div__6417.appendChild(child);
goog.dom.appendChild.call(null,goog.dom.getDocument.call(null).body,div__6417);
return div__6417;
});
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){
var child__6418 = goog.dom.getFirstElementChild.call(null,div);

goog.dom.removeNode.call(null,div);
return child__6418;
});
enfocus.core.replace_ids = (function replace_ids(text){
var re__6420 = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));
var sym__6421 = cljs.core.str.call(null,cljs.core.name.call(null,cljs.core.gensym.call(null,"id")),"_");

return cljs.core.Vector.fromArray([cljs.core.str.call(null,sym__6421),text.replace(re__6420,(function (a,b,c,d){
return cljs.core.str.call(null,b,sym__6421,c,d);
}))]);
});
enfocus.core.reset_ids = (function reset_ids(sym,nod){
var id_nodes__6422 = enfocus.core.css_select.call(null,nod,"*[id]");
var nod_col__6423 = enfocus.core.nodes__GT_coll.call(null,id_nodes__6422);

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__6419_SHARP_){
var id__6424 = p1__6419_SHARP_.getAttribute("id");
var rid__6425 = id__6424.replace(sym,"");

return p1__6419_SHARP_.setAttribute("id",rid__6425);
}),nod_col__6423));
});
enfocus.core.load_remote_dom = (function load_remote_dom(uri){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri))))
{var req__6426 = (new goog.net.XhrIo());
var callback__6433 = (function (req){
var text__6428 = req.getResponseText();
var vec__6427__6429 = enfocus.core.replace_ids.call(null,text__6428);
var sym__6430 = cljs.core.nth.call(null,vec__6427__6429,0,null);
var txt__6431 = cljs.core.nth.call(null,vec__6427__6429,1,null);
var data__6432 = goog.dom.htmlToDocumentFragment.call(null,txt__6431);

return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,cljs.core.Vector.fromArray([sym__6430,data__6432]));
});

goog.events.listen.call(null,req__6426,goog.net.EventType.COMPLETE,(function (){
return callback__6433.call(null,req__6426);
}));
return req__6426.send(uri,"GET");
} else
{return null;
}
});
enfocus.core.get_cached_dom = (function get_cached_dom(uri){
var nod__6434 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);

if(cljs.core.truth_(nod__6434))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,nod__6434),cljs.core.second.call(null,nod__6434).cloneNode(true)]);
} else
{return null;
}
});
enfocus.core.get_cached_snippit = (function get_cached_snippit(uri,sel){
var sel_str__6435 = enfocus.core.create_sel_str.call(null,sel);
var cache__6436 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,cljs.core.str.call(null,uri.call(null,sel_str__6435)));

if(cljs.core.truth_(cache__6436))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,cache__6436),cljs.core.second.call(null,cache__6436).cloneNode(true)]);
} else
{var vec__6437__6438 = enfocus.core.get_cached_dom.call(null,uri);
var sym__6439 = cljs.core.nth.call(null,vec__6437__6438,0,null);
var tdom__6440 = cljs.core.nth.call(null,vec__6437__6438,1,null);
var dom__6441 = enfocus.core.create_hidden_dom.call(null,tdom__6440);
var tsnip__6442 = enfocus.core.css_select.call(null,dom__6441,sel_str__6435);
var snip__6443 = (cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Array,tsnip__6442))?cljs.core.first.call(null,tsnip__6442):tsnip__6442);

enfocus.core.remove_node_return_child.call(null,dom__6441);
cljs.core.assoc.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache),cljs.core.str.call(null,uri,sel_str__6435),cljs.core.Vector.fromArray([sym__6439,snip__6443]));
return cljs.core.Vector.fromArray([sym__6439,snip__6443]);
}
});
enfocus.core.multi_node_proc = (function multi_node_proc(func){
return (function (pnodes){
var pnod_col__6445 = enfocus.core.nodes__GT_coll.call(null,pnodes);

return cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__6445));
});
});
/**
* @param {...*} var_args
*/
enfocus.core.content = (function() { 
var content__delegate = function (values){
var fnodes__6446 = enfocus.core.flatten_nodes_coll.call(null,values);

return enfocus.core.multi_node_proc.call(null,(function (pnod){
var frag__6447 = document.createDocumentFragment();

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__6444_SHARP_){
return goog.dom.appendChild.call(null,frag__6447,p1__6444_SHARP_.cloneNode(true));
}),fnodes__6446));
goog.dom.removeChildren.call(null,pnod);
return goog.dom.appendChild.call(null,pnod,frag__6447);
}));
};
var content = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return content__delegate.call(this, values);
};
content.cljs$lang$maxFixedArity = 0;
content.cljs$lang$applyTo = (function (arglist__6448){
var values = cljs.core.seq( arglist__6448 );;
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
var at_lst__6450 = cljs.core.partition.call(null,2,values);

return enfocus.core.multi_node_proc.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__6451){
var vec__6452__6453 = p__6451;
var a__6454 = cljs.core.nth.call(null,vec__6452__6453,0,null);
var v__6455 = cljs.core.nth.call(null,vec__6452__6453,1,null);

return pnod.setAttribute(cljs.core.name.call(null,a__6454),v__6455);
}),at_lst__6450));
}));
};
var set_attr = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return set_attr__delegate.call(this, values);
};
set_attr.cljs$lang$maxFixedArity = 0;
set_attr.cljs$lang$applyTo = (function (arglist__6456){
var values = cljs.core.seq( arglist__6456 );;
return set_attr__delegate.call(this, values);
});
return set_attr;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.remove_attr = (function() { 
var remove_attr__delegate = function (values){
return enfocus.core.multi_node_proc.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__6449_SHARP_){
return pnod.removeAttribute(cljs.core.name.call(null,p1__6449_SHARP_));
}),values));
}));
};
var remove_attr = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return remove_attr__delegate.call(this, values);
};
remove_attr.cljs$lang$maxFixedArity = 0;
remove_attr.cljs$lang$applyTo = (function (arglist__6457){
var values = cljs.core.seq( arglist__6457 );;
return remove_attr__delegate.call(this, values);
});
return remove_attr;
})()
;
enfocus.core.has_class = (function has_class(el,cls){
var regex__6459 = (new RegExp(cljs.core.str.call(null,"(\\s|^)",cls,"(\\s|$)")));
var cur_cls__6460 = el.className;

return cur_cls__6460.match(regex__6459);
});
/**
* @param {...*} var_args
*/
enfocus.core.add_class = (function() { 
var add_class__delegate = function (values){
return enfocus.core.multi_node_proc.call(null,(function (pnod){
var cur_cls__6462 = pnod.className;

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__6458_SHARP_){
if(cljs.core.truth_(cljs.core.not.call(null,enfocus.core.has_class.call(null,pnod,p1__6458_SHARP_))))
{return pnod.className = cljs.core.str.call(null,cur_cls__6462," ",p1__6458_SHARP_);
} else
{return null;
}
}),values));
}));
};
var add_class = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return add_class__delegate.call(this, values);
};
add_class.cljs$lang$maxFixedArity = 0;
add_class.cljs$lang$applyTo = (function (arglist__6463){
var values = cljs.core.seq( arglist__6463 );;
return add_class__delegate.call(this, values);
});
return add_class;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.remove_class = (function() { 
var remove_class__delegate = function (values){
return enfocus.core.multi_node_proc.call(null,(function (pnod){
var cur__6465 = pnod.className;

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__6461_SHARP_){
if(cljs.core.truth_(enfocus.core.has_class.call(null,pnod,p1__6461_SHARP_)))
{var regex__6466 = (new RegExp(cljs.core.str.call(null,"(\\s|^)",p1__6461_SHARP_,"(\\s|$)")));

return pnod.className = cur__6465.replace(regex__6466," ");
} else
{return null;
}
}),values));
}));
};
var remove_class = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return remove_class__delegate.call(this, values);
};
remove_class.cljs$lang$maxFixedArity = 0;
remove_class.cljs$lang$applyTo = (function (arglist__6467){
var values = cljs.core.seq( arglist__6467 );;
return remove_class__delegate.call(this, values);
});
return remove_class;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.do__GT_ = (function() { 
var do__GT___delegate = function (forms){
return enfocus.core.multi_node_proc.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__6464_SHARP_){
return p1__6464_SHARP_.call(null,pnod);
}),forms));
}));
};
var do__GT_ = function (var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return do__GT___delegate.call(this, forms);
};
do__GT_.cljs$lang$maxFixedArity = 0;
do__GT_.cljs$lang$applyTo = (function (arglist__6469){
var forms = cljs.core.seq( arglist__6469 );;
return do__GT___delegate.call(this, forms);
});
return do__GT_;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.attr_QMARK_ = (function() { 
var attr_QMARK___delegate = function (kys){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p1__6468_SHARP_){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,p1__6468_SHARP_),"]");
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
attr_QMARK_.cljs$lang$applyTo = (function (arglist__6470){
var kys = cljs.core.seq( arglist__6470 );;
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
var attr_EQ___6471 = (function (){
return "";
});
var attr_EQ___6472 = (function() { 
var G__6474__delegate = function (ky,txt,forms){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,ky),"='",txt,"']",cljs.core.apply.call(null,attr_EQ_,forms));
};
var G__6474 = function (ky,txt,var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__6474__delegate.call(this, ky, txt, forms);
};
G__6474.cljs$lang$maxFixedArity = 2;
G__6474.cljs$lang$applyTo = (function (arglist__6475){
var ky = cljs.core.first(arglist__6475);
var txt = cljs.core.first(cljs.core.next(arglist__6475));
var forms = cljs.core.rest(cljs.core.next(arglist__6475));
return G__6474__delegate.call(this, ky, txt, forms);
});
return G__6474;
})()
;
attr_EQ_ = function(ky,txt,var_args){
var forms = var_args;
switch(arguments.length){
case  0 :
return attr_EQ___6471.call(this);
default:
return attr_EQ___6472.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
attr_EQ_.cljs$lang$maxFixedArity = 2;
attr_EQ_.cljs$lang$applyTo = attr_EQ___6472.cljs$lang$applyTo;
return attr_EQ_;
})()
;
enfocus.core.nth_child = (function() {
var nth_child = null;
var nth_child__6476 = (function (x){
return cljs.core.str.call(null,":nth-child(",x,")");
});
var nth_child__6477 = (function (x,y){
return cljs.core.str.call(null,":nth-child(",x,"n+",y,")");
});
nth_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_child__6476.call(this,x);
case  2 :
return nth_child__6477.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_child;
})()
;
enfocus.core.nth_of_type = (function() {
var nth_of_type = null;
var nth_of_type__6479 = (function (x){
return cljs.core.str.call(null,":nth-of-type(",x,")");
});
var nth_of_type__6480 = (function (x,y){
return cljs.core.str.call(null,":nth-of-type(",x,"n+",y,")");
});
nth_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_of_type__6479.call(this,x);
case  2 :
return nth_of_type__6480.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_of_type;
})()
;
enfocus.core.nth_last_child = (function() {
var nth_last_child = null;
var nth_last_child__6482 = (function (x){
return cljs.core.str.call(null,":nth-last-child(",x,")");
});
var nth_last_child__6483 = (function (x,y){
return cljs.core.str.call(null,":nth-last-child(",x,"n+",y,")");
});
nth_last_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_child__6482.call(this,x);
case  2 :
return nth_last_child__6483.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_child;
})()
;
enfocus.core.nth_last_of_type = (function() {
var nth_last_of_type = null;
var nth_last_of_type__6485 = (function (x){
return cljs.core.str.call(null,":nth-last-of-type(",x,")");
});
var nth_last_of_type__6486 = (function (x,y){
return cljs.core.str.call(null,":nth-last-of-type(",x,"n+",y,")");
});
nth_last_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_of_type__6485.call(this,x);
case  2 :
return nth_last_of_type__6486.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_of_type;
})()
;
