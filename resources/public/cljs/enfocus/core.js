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
{if(cljs.core.truth_((function (){var or__3576__auto____3270 = cljs.core.instance_QMARK_.call(null,Array,nl);

if(cljs.core.truth_(or__3576__auto____3270))
{return or__3576__auto____3270;
} else
{return cljs.core.coll_QMARK_.call(null,nl);
}
})()))
{return nl;
} else
{if(cljs.core.truth_(enfocus.core.nodelist_QMARK_.call(null,nl)))
{var iter__161__auto____3275 = (function iter__3271(s__3272){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3272__3273 = s__3272;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3272__3273)))
{var x__3274 = cljs.core.first.call(null,s__3272__3273);

return cljs.core.cons.call(null,(nl[x__3274]),iter__3271.call(null,cljs.core.rest.call(null,s__3272__3273)));
} else
{return null;
}
break;
}
})));
});

return iter__161__auto____3275.call(null,cljs.core.range.call(null,0,nl.length));
} else
{return null;
}
}
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){
return cljs.core.mapcat.call(null,(function (p1__3269_SHARP_){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__3269_SHARP_)))
{return cljs.core.Vector.fromArray([goog.dom.createTextNode.call(null,p1__3269_SHARP_)]);
} else
{if(cljs.core.truth_("﷐'else"))
{return enfocus.core.nodes__GT_coll.call(null,p1__3269_SHARP_);
} else
{return null;
}
}
}),values);
});
enfocus.core.create_sel_str = (function() {
var create_sel_str = null;
var create_sel_str__3277 = (function (css_sel){
return create_sel_str.call(null,"",css_sel);
});
var create_sel_str__3278 = (function (sym,css_sel){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__3276_SHARP_){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,p1__3276_SHARP_)))
{return enfocus.core.css_syms.call(null,p1__3276_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,p1__3276_SHARP_)))
{return cljs.core.str.call(null," ",cljs.core.name.call(null,p1__3276_SHARP_).replace("#",cljs.core.str.call(null,"#",sym)));
} else
{if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,p1__3276_SHARP_)))
{return create_sel_str.call(null,p1__3276_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__3276_SHARP_)))
{return p1__3276_SHARP_.replace("#",cljs.core.str.call(null,"#",sym));
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
return create_sel_str__3277.call(this,sym);
case  2 :
return create_sel_str__3278.call(this,sym,css_sel);
}
throw('Invalid arity: ' + arguments.length);
};
return create_sel_str;
})()
;
enfocus.core.css_select = (function() {
var css_select = null;
var css_select__3282 = (function (dom_node,css_sel){
return css_select.call(null,"",dom_node,css_sel);
});
var css_select__3283 = (function (sym,dom_node,css_sel){
var sel__3280 = clojure.string.trim.call(null,clojure.string.replace.call(null,enfocus.core.create_sel_str.call(null,sym,css_sel)," :",":"));
var ret__3281 = goog.dom.query.call(null,sel__3280,dom_node);

return ret__3281;
});
css_select = function(sym,dom_node,css_sel){
switch(arguments.length){
case  2 :
return css_select__3282.call(this,sym,dom_node);
case  3 :
return css_select__3283.call(this,sym,dom_node,css_sel);
}
throw('Invalid arity: ' + arguments.length);
};
return css_select;
})()
;
enfocus.core.tpl_cache = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
enfocus.core.create_hidden_dom = (function create_hidden_dom(child){
var div__3285 = goog.dom.createDom.call(null,"div",enfocus.core.hide_style);

div__3285.appendChild(child);
goog.dom.appendChild.call(null,goog.dom.getDocument.call(null).body,div__3285);
return div__3285;
});
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){
var child__3286 = goog.dom.getFirstElementChild.call(null,div);

goog.dom.removeNode.call(null,div);
return child__3286;
});
enfocus.core.replace_ids = (function replace_ids(text){
var re__3288 = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));
var sym__3289 = cljs.core.str.call(null,cljs.core.name.call(null,cljs.core.gensym.call(null,"id")),"_");

return cljs.core.Vector.fromArray([cljs.core.str.call(null,sym__3289),text.replace(re__3288,(function (a,b,c,d){
return cljs.core.str.call(null,b,sym__3289,c,d);
}))]);
});
enfocus.core.reset_ids = (function reset_ids(sym,nod){
var id_nodes__3290 = enfocus.core.css_select.call(null,nod,"*[id]");
var nod_col__3291 = enfocus.core.nodes__GT_coll.call(null,id_nodes__3290);

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3287_SHARP_){
var id__3292 = p1__3287_SHARP_.getAttribute("id");
var rid__3293 = id__3292.replace(sym,"");

alert.call(null,cljs.core.str.call(null,"node:",p1__3287_SHARP_));
return p1__3287_SHARP_.setAttribute("id",rid__3293);
}),nod_col__3291));
});
enfocus.core.load_remote_dom = (function load_remote_dom(uri){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri))))
{var req__3294 = (new goog.net.XhrIo());
var callback__3301 = (function (req){
var text__3296 = req.getResponseText();
var vec__3295__3297 = enfocus.core.replace_ids.call(null,text__3296);
var sym__3298 = cljs.core.nth.call(null,vec__3295__3297,0,null);
var txt__3299 = cljs.core.nth.call(null,vec__3295__3297,1,null);
var data__3300 = goog.dom.htmlToDocumentFragment.call(null,txt__3299);

return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,cljs.core.Vector.fromArray([sym__3298,data__3300]));
});

goog.events.listen.call(null,req__3294,goog.net.EventType.COMPLETE,(function (){
return callback__3301.call(null,req__3294);
}));
return req__3294.send(uri,"GET");
} else
{return null;
}
});
enfocus.core.get_cached_dom = (function get_cached_dom(uri){
var nod__3302 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);

if(cljs.core.truth_(nod__3302))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,nod__3302),cljs.core.second.call(null,nod__3302).cloneNode(true)]);
} else
{return null;
}
});
enfocus.core.get_cached_snippit = (function get_cached_snippit(uri,sel){
var sel_str__3303 = enfocus.core.create_sel_str.call(null,sel);
var cache__3304 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,cljs.core.str.call(null,uri.call(null,sel_str__3303)));

if(cljs.core.truth_(cache__3304))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,cache__3304),cljs.core.second.call(null,cache__3304).cloneNode(true)]);
} else
{var vec__3305__3306 = enfocus.core.get_cached_dom.call(null,uri);
var sym__3307 = cljs.core.nth.call(null,vec__3305__3306,0,null);
var tdom__3308 = cljs.core.nth.call(null,vec__3305__3306,1,null);
var dom__3309 = enfocus.core.create_hidden_dom.call(null,tdom__3308);
var tsnip__3310 = enfocus.core.css_select.call(null,dom__3309,sel_str__3303);
var snip__3311 = (cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Array,tsnip__3310))?cljs.core.first.call(null,tsnip__3310):tsnip__3310);

enfocus.core.remove_node_return_child.call(null,dom__3309);
cljs.core.assoc.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache),cljs.core.str.call(null,uri,sel_str__3303),cljs.core.Vector.fromArray([sym__3307,snip__3311]));
return cljs.core.Vector.fromArray([sym__3307,snip__3311]);
}
});
enfocus.core.multi_node_proc = (function multi_node_proc(func){
return (function (pnodes){
var pnod_col__3313 = enfocus.core.nodes__GT_coll.call(null,pnodes);

return cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__3313));
});
});
/**
* @param {...*} var_args
*/
enfocus.core.content = (function() { 
var content__delegate = function (values){
var fnodes__3315 = enfocus.core.flatten_nodes_coll.call(null,values);

return enfocus.core.multi_node_proc.call(null,(function (pnod){
var frag__3316 = document.createDocumentFragment();

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3312_SHARP_){
return frag__3316.appendChild(p1__3312_SHARP_);
}),fnodes__3315));
goog.dom.removeChildren.call(null,pnod);
return pnod.appendChild(frag__3316);
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
content.cljs$lang$applyTo = (function (arglist__3317){
var values = cljs.core.seq( arglist__3317 );;
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
var at_lst__3319 = cljs.core.partition.call(null,2,values);

return enfocus.core.multi_node_proc.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__3314_SHARP_){
return pnod.setAttribute(cljs.core.first.call(null,p1__3314_SHARP_),cljs.core.second.call(null,p1__3314_SHARP_));
}),at_lst__3319));
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
set_attr.cljs$lang$applyTo = (function (arglist__3320){
var values = cljs.core.seq( arglist__3320 );;
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p1__3318_SHARP_){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,p1__3318_SHARP_),"]");
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
attr_QMARK_.cljs$lang$applyTo = (function (arglist__3321){
var kys = cljs.core.seq( arglist__3321 );;
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
var attr_EQ___3322 = (function (){
return "";
});
var attr_EQ___3323 = (function() { 
var G__3325__delegate = function (ky,txt,forms){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,ky),"='",txt,"']",cljs.core.apply.call(null,attr_EQ_,forms));
};
var G__3325 = function (ky,txt,var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3325__delegate.call(this, ky, txt, forms);
};
G__3325.cljs$lang$maxFixedArity = 2;
G__3325.cljs$lang$applyTo = (function (arglist__3326){
var ky = cljs.core.first(arglist__3326);
var txt = cljs.core.first(cljs.core.next(arglist__3326));
var forms = cljs.core.rest(cljs.core.next(arglist__3326));
return G__3325__delegate.call(this, ky, txt, forms);
});
return G__3325;
})()
;
attr_EQ_ = function(ky,txt,var_args){
var forms = var_args;
switch(arguments.length){
case  0 :
return attr_EQ___3322.call(this);
default:
return attr_EQ___3323.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
attr_EQ_.cljs$lang$maxFixedArity = 2;
attr_EQ_.cljs$lang$applyTo = attr_EQ___3323.cljs$lang$applyTo;
return attr_EQ_;
})()
;
enfocus.core.nth_child = (function() {
var nth_child = null;
var nth_child__3327 = (function (x){
return cljs.core.str.call(null,":nth-child(",x,")");
});
var nth_child__3328 = (function (x,y){
return cljs.core.str.call(null,":nth-child(",x,"n+",y,")");
});
nth_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_child__3327.call(this,x);
case  2 :
return nth_child__3328.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_child;
})()
;
enfocus.core.nth_of_type = (function() {
var nth_of_type = null;
var nth_of_type__3330 = (function (x){
return cljs.core.str.call(null,":nth-of-type(",x,")");
});
var nth_of_type__3331 = (function (x,y){
return cljs.core.str.call(null,":nth-of-type(",x,"n+",y,")");
});
nth_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_of_type__3330.call(this,x);
case  2 :
return nth_of_type__3331.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_of_type;
})()
;
enfocus.core.nth_last_child = (function() {
var nth_last_child = null;
var nth_last_child__3333 = (function (x){
return cljs.core.str.call(null,":nth-last-child(",x,")");
});
var nth_last_child__3334 = (function (x,y){
return cljs.core.str.call(null,":nth-last-child(",x,"n+",y,")");
});
nth_last_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_child__3333.call(this,x);
case  2 :
return nth_last_child__3334.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_child;
})()
;
enfocus.core.nth_last_of_type = (function() {
var nth_last_of_type = null;
var nth_last_of_type__3336 = (function (x){
return cljs.core.str.call(null,":nth-last-of-type(",x,")");
});
var nth_last_of_type__3337 = (function (x,y){
return cljs.core.str.call(null,":nth-last-of-type(",x,"n+",y,")");
});
nth_last_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_of_type__3336.call(this,x);
case  2 :
return nth_last_of_type__3337.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_of_type;
})()
;
