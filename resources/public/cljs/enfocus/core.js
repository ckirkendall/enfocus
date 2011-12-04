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
{if(cljs.core.truth_((function (){var or__3576__auto____3201 = cljs.core.instance_QMARK_.call(null,Array,nl);

if(cljs.core.truth_(or__3576__auto____3201))
{return or__3576__auto____3201;
} else
{return cljs.core.coll_QMARK_.call(null,nl);
}
})()))
{return nl;
} else
{if(cljs.core.truth_(enfocus.core.nodelist_QMARK_.call(null,nl)))
{var iter__161__auto____3206 = (function iter__3202(s__3203){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3203__3204 = s__3203;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3203__3204)))
{var x__3205 = cljs.core.first.call(null,s__3203__3204);

return cljs.core.cons.call(null,(nl[x__3205]),iter__3202.call(null,cljs.core.rest.call(null,s__3203__3204)));
} else
{return null;
}
break;
}
})));
});

return iter__161__auto____3206.call(null,cljs.core.range.call(null,0,nl.length));
} else
{return null;
}
}
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){
return cljs.core.mapcat.call(null,(function (p1__3200_SHARP_){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__3200_SHARP_)))
{return cljs.core.Vector.fromArray([goog.dom.createTextNode.call(null,p1__3200_SHARP_)]);
} else
{if(cljs.core.truth_("﷐'else"))
{return enfocus.core.nodes__GT_coll.call(null,p1__3200_SHARP_);
} else
{return null;
}
}
}),values);
});
enfocus.core.create_sel_str = (function() {
var create_sel_str = null;
var create_sel_str__3208 = (function (css_sel){
return create_sel_str.call(null,"",css_sel);
});
var create_sel_str__3209 = (function (sym,css_sel){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__3207_SHARP_){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,p1__3207_SHARP_)))
{return enfocus.core.css_syms.call(null,p1__3207_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,p1__3207_SHARP_)))
{return cljs.core.str.call(null," ",cljs.core.name.call(null,p1__3207_SHARP_).replace("#",cljs.core.str.call(null,"#",sym)));
} else
{if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,p1__3207_SHARP_)))
{return create_sel_str.call(null,p1__3207_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__3207_SHARP_)))
{return p1__3207_SHARP_.replace("#",cljs.core.str.call(null,"#",sym));
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
return create_sel_str__3208.call(this,sym);
case  2 :
return create_sel_str__3209.call(this,sym,css_sel);
}
throw('Invalid arity: ' + arguments.length);
};
return create_sel_str;
})()
;
enfocus.core.css_select = (function() {
var css_select = null;
var css_select__3213 = (function (dom_node,css_sel){
return css_select.call(null,"",dom_node,css_sel);
});
var css_select__3214 = (function (sym,dom_node,css_sel){
var sel__3211 = clojure.string.trim.call(null,clojure.string.replace.call(null,enfocus.core.create_sel_str.call(null,sym,css_sel)," :",":"));
var ret__3212 = goog.dom.query.call(null,sel__3211,dom_node);

return ret__3212;
});
css_select = function(sym,dom_node,css_sel){
switch(arguments.length){
case  2 :
return css_select__3213.call(this,sym,dom_node);
case  3 :
return css_select__3214.call(this,sym,dom_node,css_sel);
}
throw('Invalid arity: ' + arguments.length);
};
return css_select;
})()
;
enfocus.core.tpl_cache = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
enfocus.core.create_hidden_dom = (function create_hidden_dom(child){
var div__3216 = goog.dom.createDom.call(null,"div",enfocus.core.hide_style);

div__3216.appendChild(child);
goog.dom.appendChild.call(null,goog.dom.getDocument.call(null).body,div__3216);
return div__3216;
});
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){
var child__3217 = goog.dom.getFirstElementChild.call(null,div);

goog.dom.removeNode.call(null,div);
return child__3217;
});
enfocus.core.replace_ids = (function replace_ids(text){
var re__3219 = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));
var sym__3220 = cljs.core.str.call(null,cljs.core.name.call(null,cljs.core.gensym.call(null,"id")),"_");

return cljs.core.Vector.fromArray([cljs.core.str.call(null,sym__3220),text.replace(re__3219,(function (a,b,c,d){
return cljs.core.str.call(null,b,sym__3220,c,d);
}))]);
});
enfocus.core.reset_ids = (function reset_ids(sym,nod){
var id_nodes__3221 = enfocus.core.css_select.call(null,nod,"*[id]");
var nod_col__3222 = enfocus.core.nodes__GT_coll.call(null,id_nodes__3221);

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3218_SHARP_){
var id__3223 = p1__3218_SHARP_.getAttribute("id");
var rid__3224 = id__3223.replace(sym,"");

alert.call(null,cljs.core.str.call(null,"node:",p1__3218_SHARP_));
return p1__3218_SHARP_.setAttribute("id",rid__3224);
}),nod_col__3222));
});
enfocus.core.load_remote_dom = (function load_remote_dom(uri){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri))))
{var req__3225 = (new goog.net.XhrIo());
var callback__3232 = (function (req){
var text__3227 = req.getResponseText();
var vec__3226__3228 = enfocus.core.replace_ids.call(null,text__3227);
var sym__3229 = cljs.core.nth.call(null,vec__3226__3228,0,null);
var txt__3230 = cljs.core.nth.call(null,vec__3226__3228,1,null);
var data__3231 = goog.dom.htmlToDocumentFragment.call(null,txt__3230);

return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,cljs.core.Vector.fromArray([sym__3229,data__3231]));
});

goog.events.listen.call(null,req__3225,goog.net.EventType.COMPLETE,(function (){
return callback__3232.call(null,req__3225);
}));
return req__3225.send(uri,"GET");
} else
{return null;
}
});
enfocus.core.get_cached_dom = (function get_cached_dom(uri){
var nod__3233 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);

if(cljs.core.truth_(nod__3233))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,nod__3233),cljs.core.second.call(null,nod__3233).cloneNode(true)]);
} else
{return null;
}
});
enfocus.core.get_cached_snippit = (function get_cached_snippit(uri,sel){
var sel_str__3234 = enfocus.core.create_sel_str.call(null,sel);
var cache__3235 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,cljs.core.str.call(null,uri.call(null,sel_str__3234)));

if(cljs.core.truth_(cache__3235))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,cache__3235),cljs.core.second.call(null,cache__3235).cloneNode(true)]);
} else
{var vec__3236__3237 = enfocus.core.get_cached_dom.call(null,uri);
var sym__3238 = cljs.core.nth.call(null,vec__3236__3237,0,null);
var tdom__3239 = cljs.core.nth.call(null,vec__3236__3237,1,null);
var dom__3240 = enfocus.core.create_hidden_dom.call(null,tdom__3239);
var tsnip__3241 = enfocus.core.css_select.call(null,dom__3240,sel_str__3234);
var snip__3242 = (cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Array,tsnip__3241))?cljs.core.first.call(null,tsnip__3241):tsnip__3241);

enfocus.core.remove_node_return_child.call(null,dom__3240);
cljs.core.assoc.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache),cljs.core.str.call(null,uri,sel_str__3234),cljs.core.Vector.fromArray([sym__3238,snip__3242]));
return cljs.core.Vector.fromArray([sym__3238,snip__3242]);
}
});
enfocus.core.multi_node_proc = (function multi_node_proc(func){
return (function (pnodes){
var pnod_col__3244 = enfocus.core.nodes__GT_coll.call(null,pnodes);

return cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__3244));
});
});
/**
* @param {...*} var_args
*/
enfocus.core.content = (function() { 
var content__delegate = function (values){
var fnodes__3246 = enfocus.core.flatten_nodes_coll.call(null,values);

return enfocus.core.multi_node_proc.call(null,(function (pnod){
goog.dom.removeChildren.call(null,pnod);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3243_SHARP_){
return pnod.appendChild(p1__3243_SHARP_);
}),fnodes__3246));
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
content.cljs$lang$applyTo = (function (arglist__3247){
var values = cljs.core.seq( arglist__3247 );;
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
var at_lst__3249 = cljs.core.partition.call(null,2,values);

return enfocus.core.multi_node_proc.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3245_SHARP_){
return pnod.setAttribute(cljs.core.first.call(null,p1__3245_SHARP_),cljs.core.second.call(null,p1__3245_SHARP_));
}),at_lst__3249));
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
set_attr.cljs$lang$applyTo = (function (arglist__3250){
var values = cljs.core.seq( arglist__3250 );;
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p1__3248_SHARP_){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,p1__3248_SHARP_),"]");
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
attr_QMARK_.cljs$lang$applyTo = (function (arglist__3251){
var kys = cljs.core.seq( arglist__3251 );;
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
var attr_EQ___3252 = (function (){
return "";
});
var attr_EQ___3253 = (function() { 
var G__3255__delegate = function (ky,txt,forms){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,ky),"='",txt,"']",cljs.core.apply.call(null,attr_EQ_,forms));
};
var G__3255 = function (ky,txt,var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3255__delegate.call(this, ky, txt, forms);
};
G__3255.cljs$lang$maxFixedArity = 2;
G__3255.cljs$lang$applyTo = (function (arglist__3256){
var ky = cljs.core.first(arglist__3256);
var txt = cljs.core.first(cljs.core.next(arglist__3256));
var forms = cljs.core.rest(cljs.core.next(arglist__3256));
return G__3255__delegate.call(this, ky, txt, forms);
});
return G__3255;
})()
;
attr_EQ_ = function(ky,txt,var_args){
var forms = var_args;
switch(arguments.length){
case  0 :
return attr_EQ___3252.call(this);
default:
return attr_EQ___3253.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
attr_EQ_.cljs$lang$maxFixedArity = 2;
attr_EQ_.cljs$lang$applyTo = attr_EQ___3253.cljs$lang$applyTo;
return attr_EQ_;
})()
;
enfocus.core.nth_child = (function() {
var nth_child = null;
var nth_child__3257 = (function (x){
return cljs.core.str.call(null,":nth-child(",x,")");
});
var nth_child__3258 = (function (x,y){
return cljs.core.str.call(null,":nth-child(",x,"n+",y,")");
});
nth_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_child__3257.call(this,x);
case  2 :
return nth_child__3258.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_child;
})()
;
enfocus.core.nth_of_type = (function() {
var nth_of_type = null;
var nth_of_type__3260 = (function (x){
return cljs.core.str.call(null,":nth-of-type(",x,")");
});
var nth_of_type__3261 = (function (x,y){
return cljs.core.str.call(null,":nth-of-type(",x,"n+",y,")");
});
nth_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_of_type__3260.call(this,x);
case  2 :
return nth_of_type__3261.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_of_type;
})()
;
enfocus.core.nth_last_child = (function() {
var nth_last_child = null;
var nth_last_child__3263 = (function (x){
return cljs.core.str.call(null,":nth-last-child(",x,")");
});
var nth_last_child__3264 = (function (x,y){
return cljs.core.str.call(null,":nth-last-child(",x,"n+",y,")");
});
nth_last_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_child__3263.call(this,x);
case  2 :
return nth_last_child__3264.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_child;
})()
;
enfocus.core.nth_last_of_type = (function() {
var nth_last_of_type = null;
var nth_last_of_type__3266 = (function (x){
return cljs.core.str.call(null,":nth-last-of-type(",x,")");
});
var nth_last_of_type__3267 = (function (x,y){
return cljs.core.str.call(null,":nth-last-of-type(",x,"n+",y,")");
});
nth_last_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_of_type__3266.call(this,x);
case  2 :
return nth_last_of_type__3267.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_of_type;
})()
;
