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
{if(cljs.core.truth_((function (){var or__3576__auto____2021 = cljs.core.instance_QMARK_.call(null,Array,nl);

if(cljs.core.truth_(or__3576__auto____2021))
{return or__3576__auto____2021;
} else
{return cljs.core.coll_QMARK_.call(null,nl);
}
})()))
{return nl;
} else
{if(cljs.core.truth_(enfocus.core.nodelist_QMARK_.call(null,nl)))
{var iter__161__auto____2026 = (function iter__2022(s__2023){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2023__2024 = s__2023;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2023__2024)))
{var x__2025 = cljs.core.first.call(null,s__2023__2024);

return cljs.core.cons.call(null,(nl[x__2025]),iter__2022.call(null,cljs.core.rest.call(null,s__2023__2024)));
} else
{return null;
}
break;
}
})));
});

return iter__161__auto____2026.call(null,cljs.core.range.call(null,0,nl.length));
} else
{return null;
}
}
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){
return cljs.core.mapcat.call(null,(function (p1__2020_SHARP_){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__2020_SHARP_)))
{return cljs.core.Vector.fromArray([goog.dom.createTextNode.call(null,p1__2020_SHARP_)]);
} else
{if(cljs.core.truth_("﷐'else"))
{return enfocus.core.nodes__GT_coll.call(null,p1__2020_SHARP_);
} else
{return null;
}
}
}),values);
});
enfocus.core.create_sel_str = (function() {
var create_sel_str = null;
var create_sel_str__2028 = (function (css_sel){
return create_sel_str.call(null,"",css_sel);
});
var create_sel_str__2029 = (function (sym,css_sel){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__2027_SHARP_){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,p1__2027_SHARP_)))
{return enfocus.core.css_syms.call(null,p1__2027_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,p1__2027_SHARP_)))
{return cljs.core.str.call(null," ",cljs.core.name.call(null,p1__2027_SHARP_).replace("#",cljs.core.str.call(null,"#",sym)));
} else
{if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,p1__2027_SHARP_)))
{return create_sel_str.call(null,p1__2027_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__2027_SHARP_)))
{return p1__2027_SHARP_.replace("#",cljs.core.str.call(null,"#",sym));
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
return create_sel_str__2028.call(this,sym);
case  2 :
return create_sel_str__2029.call(this,sym,css_sel);
}
throw('Invalid arity: ' + arguments.length);
};
return create_sel_str;
})()
;
enfocus.core.css_select = (function() {
var css_select = null;
var css_select__2033 = (function (dom_node,css_sel){
return css_select.call(null,"",dom_node,css_sel);
});
var css_select__2034 = (function (sym,dom_node,css_sel){
var sel__2031 = clojure.string.trim.call(null,clojure.string.replace.call(null,enfocus.core.create_sel_str.call(null,sym,css_sel)," :",":"));
var ret__2032 = goog.dom.query.call(null,sel__2031,dom_node);

return ret__2032;
});
css_select = function(sym,dom_node,css_sel){
switch(arguments.length){
case  2 :
return css_select__2033.call(this,sym,dom_node);
case  3 :
return css_select__2034.call(this,sym,dom_node,css_sel);
}
throw('Invalid arity: ' + arguments.length);
};
return css_select;
})()
;
enfocus.core.tpl_cache = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
enfocus.core.create_hidden_dom = (function create_hidden_dom(child){
var div__2036 = goog.dom.createDom.call(null,"div",enfocus.core.hide_style);

div__2036.appendChild(child);
goog.dom.appendChild.call(null,goog.dom.getDocument.call(null).body,div__2036);
return div__2036;
});
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){
var child__2037 = goog.dom.getFirstElementChild.call(null,div);

goog.dom.removeNode.call(null,div);
return child__2037;
});
enfocus.core.replace_ids = (function replace_ids(text){
var re__2039 = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));
var sym__2040 = cljs.core.str.call(null,cljs.core.name.call(null,cljs.core.gensym.call(null,"id")),"_");

return cljs.core.Vector.fromArray([cljs.core.str.call(null,sym__2040),text.replace(re__2039,(function (a,b,c,d){
return cljs.core.str.call(null,b,sym__2040,c,d);
}))]);
});
enfocus.core.reset_ids = (function reset_ids(sym,nod){
var id_nodes__2041 = enfocus.core.css_select.call(null,nod,"*[id]");
var nod_col__2042 = enfocus.core.nodes__GT_coll.call(null,id_nodes__2041);

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2038_SHARP_){
var id__2043 = p1__2038_SHARP_.getAttribute("id");
var rid__2044 = id__2043.replace(sym,"");

return p1__2038_SHARP_.setAttribute("id",rid__2044);
}),nod_col__2042));
});
enfocus.core.load_remote_dom = (function load_remote_dom(uri){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri))))
{var req__2045 = (new goog.net.XhrIo());
var callback__2052 = (function (req){
var text__2047 = req.getResponseText();
var vec__2046__2048 = enfocus.core.replace_ids.call(null,text__2047);
var sym__2049 = cljs.core.nth.call(null,vec__2046__2048,0,null);
var txt__2050 = cljs.core.nth.call(null,vec__2046__2048,1,null);
var data__2051 = goog.dom.htmlToDocumentFragment.call(null,txt__2050);

return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,cljs.core.Vector.fromArray([sym__2049,data__2051]));
});

goog.events.listen.call(null,req__2045,goog.net.EventType.COMPLETE,(function (){
return callback__2052.call(null,req__2045);
}));
return req__2045.send(uri,"GET");
} else
{return null;
}
});
enfocus.core.get_cached_dom = (function get_cached_dom(uri){
var nod__2053 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);

if(cljs.core.truth_(nod__2053))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,nod__2053),cljs.core.second.call(null,nod__2053).cloneNode(true)]);
} else
{return null;
}
});
enfocus.core.get_cached_snippit = (function get_cached_snippit(uri,sel){
var sel_str__2054 = enfocus.core.create_sel_str.call(null,sel);
var cache__2055 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,cljs.core.str.call(null,uri.call(null,sel_str__2054)));

if(cljs.core.truth_(cache__2055))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,cache__2055),cljs.core.second.call(null,cache__2055).cloneNode(true)]);
} else
{var vec__2056__2057 = enfocus.core.get_cached_dom.call(null,uri);
var sym__2058 = cljs.core.nth.call(null,vec__2056__2057,0,null);
var tdom__2059 = cljs.core.nth.call(null,vec__2056__2057,1,null);
var dom__2060 = enfocus.core.create_hidden_dom.call(null,tdom__2059);
var tsnip__2061 = enfocus.core.css_select.call(null,dom__2060,sel_str__2054);
var snip__2062 = (cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Array,tsnip__2061))?cljs.core.first.call(null,tsnip__2061):tsnip__2061);

enfocus.core.remove_node_return_child.call(null,dom__2060);
cljs.core.assoc.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache),cljs.core.str.call(null,uri,sel_str__2054),cljs.core.Vector.fromArray([sym__2058,snip__2062]));
return cljs.core.Vector.fromArray([sym__2058,snip__2062]);
}
});
enfocus.core.multi_node_proc = (function multi_node_proc(func){
return (function (pnodes){
var pnod_col__2064 = enfocus.core.nodes__GT_coll.call(null,pnodes);

return cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__2064));
});
});
/**
* @param {...*} var_args
*/
enfocus.core.content = (function() { 
var content__delegate = function (values){
var fnodes__2065 = enfocus.core.flatten_nodes_coll.call(null,values);

return enfocus.core.multi_node_proc.call(null,(function (pnod){
var frag__2066 = document.createDocumentFragment();

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2063_SHARP_){
return goog.dom.appendChild.call(null,frag__2066,p1__2063_SHARP_.cloneNode(true));
}),fnodes__2065));
goog.dom.removeChildren.call(null,pnod);
return goog.dom.appendChild.call(null,pnod,frag__2066);
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
content.cljs$lang$applyTo = (function (arglist__2067){
var values = cljs.core.seq( arglist__2067 );;
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
var at_lst__2069 = cljs.core.partition.call(null,2,values);

return enfocus.core.multi_node_proc.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__2070){
var vec__2071__2072 = p__2070;
var a__2073 = cljs.core.nth.call(null,vec__2071__2072,0,null);
var v__2074 = cljs.core.nth.call(null,vec__2071__2072,1,null);

return pnod.setAttribute(cljs.core.name.call(null,a__2073),v__2074);
}),at_lst__2069));
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
set_attr.cljs$lang$applyTo = (function (arglist__2075){
var values = cljs.core.seq( arglist__2075 );;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2068_SHARP_){
return pnod.removeAttribute(cljs.core.name.call(null,p1__2068_SHARP_));
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
remove_attr.cljs$lang$applyTo = (function (arglist__2076){
var values = cljs.core.seq( arglist__2076 );;
return remove_attr__delegate.call(this, values);
});
return remove_attr;
})()
;
enfocus.core.has_class = (function has_class(el,cls){
var regex__2078 = (new RegExp(cljs.core.str.call(null,"(\\s|^)",cls,"(\\s|$)")));
var cur_cls__2079 = el.className;

return cur_cls__2079.match(regex__2078);
});
/**
* @param {...*} var_args
*/
enfocus.core.add_class = (function() { 
var add_class__delegate = function (values){
return enfocus.core.multi_node_proc.call(null,(function (pnod){
var cur_cls__2081 = pnod.className;

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2077_SHARP_){
if(cljs.core.truth_(cljs.core.not.call(null,enfocus.core.has_class.call(null,pnod,p1__2077_SHARP_))))
{return pnod.className = cljs.core.str.call(null,cur_cls__2081," ",p1__2077_SHARP_);
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
add_class.cljs$lang$applyTo = (function (arglist__2082){
var values = cljs.core.seq( arglist__2082 );;
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
var cur__2084 = pnod.className;

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2080_SHARP_){
if(cljs.core.truth_(enfocus.core.has_class.call(null,pnod,p1__2080_SHARP_)))
{var regex__2085 = (new RegExp(cljs.core.str.call(null,"(\\s|^)",p1__2080_SHARP_,"(\\s|$)")));

return pnod.className = cur__2084.replace(regex__2085," ");
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
remove_class.cljs$lang$applyTo = (function (arglist__2086){
var values = cljs.core.seq( arglist__2086 );;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2083_SHARP_){
return p1__2083_SHARP_.call(null,pnod);
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
do__GT_.cljs$lang$applyTo = (function (arglist__2088){
var forms = cljs.core.seq( arglist__2088 );;
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p1__2087_SHARP_){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,p1__2087_SHARP_),"]");
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
attr_QMARK_.cljs$lang$applyTo = (function (arglist__2089){
var kys = cljs.core.seq( arglist__2089 );;
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
var attr_EQ___2090 = (function (){
return "";
});
var attr_EQ___2091 = (function() { 
var G__2093__delegate = function (ky,txt,forms){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,ky),"='",txt,"']",cljs.core.apply.call(null,attr_EQ_,forms));
};
var G__2093 = function (ky,txt,var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2093__delegate.call(this, ky, txt, forms);
};
G__2093.cljs$lang$maxFixedArity = 2;
G__2093.cljs$lang$applyTo = (function (arglist__2094){
var ky = cljs.core.first(arglist__2094);
var txt = cljs.core.first(cljs.core.next(arglist__2094));
var forms = cljs.core.rest(cljs.core.next(arglist__2094));
return G__2093__delegate.call(this, ky, txt, forms);
});
return G__2093;
})()
;
attr_EQ_ = function(ky,txt,var_args){
var forms = var_args;
switch(arguments.length){
case  0 :
return attr_EQ___2090.call(this);
default:
return attr_EQ___2091.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
attr_EQ_.cljs$lang$maxFixedArity = 2;
attr_EQ_.cljs$lang$applyTo = attr_EQ___2091.cljs$lang$applyTo;
return attr_EQ_;
})()
;
enfocus.core.nth_child = (function() {
var nth_child = null;
var nth_child__2095 = (function (x){
return cljs.core.str.call(null,":nth-child(",x,")");
});
var nth_child__2096 = (function (x,y){
return cljs.core.str.call(null,":nth-child(",x,"n+",y,")");
});
nth_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_child__2095.call(this,x);
case  2 :
return nth_child__2096.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_child;
})()
;
enfocus.core.nth_of_type = (function() {
var nth_of_type = null;
var nth_of_type__2098 = (function (x){
return cljs.core.str.call(null,":nth-of-type(",x,")");
});
var nth_of_type__2099 = (function (x,y){
return cljs.core.str.call(null,":nth-of-type(",x,"n+",y,")");
});
nth_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_of_type__2098.call(this,x);
case  2 :
return nth_of_type__2099.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_of_type;
})()
;
enfocus.core.nth_last_child = (function() {
var nth_last_child = null;
var nth_last_child__2101 = (function (x){
return cljs.core.str.call(null,":nth-last-child(",x,")");
});
var nth_last_child__2102 = (function (x,y){
return cljs.core.str.call(null,":nth-last-child(",x,"n+",y,")");
});
nth_last_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_child__2101.call(this,x);
case  2 :
return nth_last_child__2102.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_child;
})()
;
enfocus.core.nth_last_of_type = (function() {
var nth_last_of_type = null;
var nth_last_of_type__2104 = (function (x){
return cljs.core.str.call(null,":nth-last-of-type(",x,")");
});
var nth_last_of_type__2105 = (function (x,y){
return cljs.core.str.call(null,":nth-last-of-type(",x,"n+",y,")");
});
nth_last_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_of_type__2104.call(this,x);
case  2 :
return nth_last_of_type__2105.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_of_type;
})()
;
