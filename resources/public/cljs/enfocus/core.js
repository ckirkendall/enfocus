goog.provide('enfocus.core');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('goog.dom.query');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('clojure.string');
enfocus.core.css_syms = cljs.core.HashMap.fromArrays(["﷑'first-child","﷑'last-child"],[" *:first-child"," *:last-child"]);
enfocus.core.hide_style = cljs.core.ObjMap.fromObject(["style"],{"style":"display: none; width: 0px; height: 0px"}).strobj;
enfocus.core.create_sel_str = (function create_sel_str(css_sel){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__5106_SHARP_){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,p1__5106_SHARP_)))
{return enfocus.core.css_syms.call(null,p1__5106_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,p1__5106_SHARP_)))
{return cljs.core.str.call(null," ",cljs.core.name.call(null,p1__5106_SHARP_));
} else
{if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,p1__5106_SHARP_)))
{return create_sel_str.call(null,p1__5106_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.str.call(null,p1__5106_SHARP_)))
{return p1__5106_SHARP_;
} else
{return null;
}
}
}
}
}),css_sel));
});
enfocus.core.css_select = (function css_select(dom_node,css_sel){
var sel__5107 = clojure.string.trim.call(null,clojure.string.replace.call(null,enfocus.core.create_sel_str.call(null,css_sel)," :",":"));
var ret__5108 = goog.dom.query.call(null,sel__5107,dom_node);

alert.call(null,sel__5107);
return ret__5108;
});
enfocus.core.tpl_cache = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
enfocus.core.create_hidden_dom = (function create_hidden_dom(child){
var div__5109 = goog.dom.createDom.call(null,"div",enfocus.core.hide_style);

div__5109.appendChild(child);
goog.dom.appendChild.call(null,goog.dom.getDocument.call(null).body,div__5109);
return div__5109;
});
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){
var child__5110 = goog.dom.getFirstElementChild.call(null,div);

goog.dom.removeNode.call(null,div);
return child__5110;
});
enfocus.core.load_remote_dom = (function load_remote_dom(uri){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri))))
{var req__5111 = (new goog.net.XhrIo());
var callback__5114 = (function (req){
var text__5112 = req.getResponseText();
var data__5113 = goog.dom.htmlToDocumentFragment.call(null,text__5112);

return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,data__5113);
});

goog.events.listen.call(null,req__5111,goog.net.EventType.COMPLETE,(function (){
return callback__5114.call(null,req__5111);
}));
return req__5111.send(uri,"GET");
} else
{return null;
}
});
enfocus.core.get_cached_dom = (function get_cached_dom(uri){
var nod__5115 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);

if(cljs.core.truth_(nod__5115))
{return nod__5115.cloneNode(true);
} else
{return null;
}
});
enfocus.core.get_cached_snippit = (function get_cached_snippit(uri,sel){
var sel_str__5116 = enfocus.core.create_sel_str.call(null,sel);
var cache__5117 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,cljs.core.str.call(null,uri.call(null,sel_str__5116)));

if(cljs.core.truth_(cache__5117))
{return cache__5117.cloneNode(true);
} else
{var tdom__5118 = enfocus.core.get_cached_dom.call(null,uri);
var dom__5119 = enfocus.core.create_hidden_dom.call(null,tdom__5118);
var tsnip__5120 = enfocus.core.css_select.call(null,dom__5119,sel_str__5116);
var snip__5121 = (cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Array,tsnip__5120))?cljs.core.first.call(null,tsnip__5120):tsnip__5120);

enfocus.core.remove_node_return_child.call(null,dom__5119);
cljs.core.assoc.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache),cljs.core.str.call(null,uri,sel_str__5116),snip__5121);
return snip__5121;
}
});
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
{if(cljs.core.truth_((function (){var or__3576__auto____5123 = cljs.core.instance_QMARK_.call(null,Array,nl);

if(cljs.core.truth_(or__3576__auto____5123))
{return or__3576__auto____5123;
} else
{return cljs.core.coll_QMARK_.call(null,nl);
}
})()))
{return nl;
} else
{if(cljs.core.truth_(enfocus.core.nodelist_QMARK_.call(null,nl)))
{var iter__161__auto____5128 = (function iter__5124(s__5125){
return (new cljs.core.LazySeq(null,false,(function (){
var s__5125__5126 = s__5125;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__5125__5126)))
{var x__5127 = cljs.core.first.call(null,s__5125__5126);

return cljs.core.cons.call(null,(nl[x__5127]),iter__5124.call(null,cljs.core.rest.call(null,s__5125__5126)));
} else
{return null;
}
break;
}
})));
});

return iter__161__auto____5128.call(null,cljs.core.range.call(null,0,nl.length));
} else
{return null;
}
}
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){
return cljs.core.mapcat.call(null,(function (p1__5122_SHARP_){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__5122_SHARP_)))
{return cljs.core.Vector.fromArray([goog.dom.createTextNode.call(null,p1__5122_SHARP_)]);
} else
{if(cljs.core.truth_("﷐'else"))
{return enfocus.core.nodes__GT_coll.call(null,p1__5122_SHARP_);
} else
{return null;
}
}
}),values);
});
enfocus.core.multi_node_proc = (function multi_node_proc(func){
return (function (pnodes){
var pnod_col__5130 = enfocus.core.nodes__GT_coll.call(null,pnodes);

return cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__5130));
});
});
/**
* @param {...*} var_args
*/
enfocus.core.content = (function() { 
var content__delegate = function (values){
var fnodes__5132 = enfocus.core.flatten_nodes_coll.call(null,values);

return enfocus.core.multi_node_proc.call(null,(function (pnod){
goog.dom.removeChildren.call(null,pnod);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__5129_SHARP_){
return pnod.appendChild(p1__5129_SHARP_);
}),fnodes__5132));
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
content.cljs$lang$applyTo = (function (arglist__5133){
var values = cljs.core.seq( arglist__5133 );;
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
alert.call(null,cljs.core.str.call(null,"values: ",values));
var at_lst__5135 = cljs.core.partition.call(null,2,values);

return enfocus.core.multi_node_proc.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__5131_SHARP_){
return pnod.setAttribute(cljs.core.first.call(null,p1__5131_SHARP_),cljs.core.second.call(null,p1__5131_SHARP_));
}),at_lst__5135));
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
set_attr.cljs$lang$applyTo = (function (arglist__5136){
var values = cljs.core.seq( arglist__5136 );;
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p1__5134_SHARP_){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,p1__5134_SHARP_),"]");
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
attr_QMARK_.cljs$lang$applyTo = (function (arglist__5137){
var kys = cljs.core.seq( arglist__5137 );;
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
var attr_EQ___5138 = (function (){
return "";
});
var attr_EQ___5139 = (function() { 
var G__5141__delegate = function (ky,txt,forms){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,ky),"='",txt,"']",cljs.core.apply.call(null,attr_EQ_,forms));
};
var G__5141 = function (ky,txt,var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__5141__delegate.call(this, ky, txt, forms);
};
G__5141.cljs$lang$maxFixedArity = 2;
G__5141.cljs$lang$applyTo = (function (arglist__5142){
var ky = cljs.core.first(arglist__5142);
var txt = cljs.core.first(cljs.core.next(arglist__5142));
var forms = cljs.core.rest(cljs.core.next(arglist__5142));
return G__5141__delegate.call(this, ky, txt, forms);
});
return G__5141;
})()
;
attr_EQ_ = function(ky,txt,var_args){
var forms = var_args;
switch(arguments.length){
case  0 :
return attr_EQ___5138.call(this);
default:
return attr_EQ___5139.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
attr_EQ_.cljs$lang$maxFixedArity = 2;
attr_EQ_.cljs$lang$applyTo = attr_EQ___5139.cljs$lang$applyTo;
return attr_EQ_;
})()
;
enfocus.core.nth_child = (function() {
var nth_child = null;
var nth_child__5143 = (function (x){
return cljs.core.str.call(null,":nth-child(",x,")");
});
var nth_child__5144 = (function (x,y){
return cljs.core.str.call(null,":nth-child(",x,"n+",y,")");
});
nth_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_child__5143.call(this,x);
case  2 :
return nth_child__5144.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_child;
})()
;
enfocus.core.nth_of_type = (function() {
var nth_of_type = null;
var nth_of_type__5146 = (function (x){
return cljs.core.str.call(null,":nth-of-type(",x,")");
});
var nth_of_type__5147 = (function (x,y){
return cljs.core.str.call(null,":nth-of-type(",x,"n+",y,")");
});
nth_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_of_type__5146.call(this,x);
case  2 :
return nth_of_type__5147.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_of_type;
})()
;
enfocus.core.nth_last_child = (function() {
var nth_last_child = null;
var nth_last_child__5149 = (function (x){
return cljs.core.str.call(null,":nth-last-child(",x,")");
});
var nth_last_child__5150 = (function (x,y){
return cljs.core.str.call(null,":nth-last-child(",x,"n+",y,")");
});
nth_last_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_child__5149.call(this,x);
case  2 :
return nth_last_child__5150.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_child;
})()
;
enfocus.core.nth_last_of_type = (function() {
var nth_last_of_type = null;
var nth_last_of_type__5152 = (function (x){
return cljs.core.str.call(null,":nth-last-of-type(",x,")");
});
var nth_last_of_type__5153 = (function (x,y){
return cljs.core.str.call(null,":nth-last-of-type(",x,"n+",y,")");
});
nth_last_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_of_type__5152.call(this,x);
case  2 :
return nth_last_of_type__5153.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_of_type;
})()
;
