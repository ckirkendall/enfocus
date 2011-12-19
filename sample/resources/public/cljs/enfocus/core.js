goog.provide('enfocus.core');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('goog.dom.query');
goog.require('goog.style');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.debug');
goog.require('goog.debug.Logger');
goog.require('clojure.string');
enfocus.core.node_QMARK_ = (function node_QMARK_(tst){
return goog.dom.isNodeLike.call(null,tst);
});
enfocus.core.nodelist_QMARK_ = (function nodelist_QMARK_(tst){
return cljs.core.instance_QMARK_.call(null,NodeList,tst);
});
/**
* coverts a nodelist, node into a collection
*/
enfocus.core.nodes__GT_coll = (function nodes__GT_coll(nl){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,nl)))
{return cljs.core.Vector.fromArray([]);
} else
{if(cljs.core.truth_(enfocus.core.node_QMARK_.call(null,nl)))
{return cljs.core.Vector.fromArray([nl]);
} else
{if(cljs.core.truth_((function (){var or__3576__auto____2205 = cljs.core.instance_QMARK_.call(null,Array,nl);

if(cljs.core.truth_(or__3576__auto____2205))
{return or__3576__auto____2205;
} else
{return cljs.core.coll_QMARK_.call(null,nl);
}
})()))
{return nl;
} else
{if(cljs.core.truth_(enfocus.core.nodelist_QMARK_.call(null,nl)))
{var iter__161__auto____2210 = (function iter__2206(s__2207){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2207__2208 = s__2207;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2207__2208)))
{var x__2209 = cljs.core.first.call(null,s__2207__2208);

return cljs.core.cons.call(null,(nl[x__2209]),iter__2206.call(null,cljs.core.rest.call(null,s__2207__2208)));
} else
{return null;
}
break;
}
})));
});

return iter__161__auto____2210.call(null,cljs.core.range.call(null,0,nl.length));
} else
{return null;
}
}
}
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){
return cljs.core.mapcat.call(null,(function (p1__2204_SHARP_){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__2204_SHARP_)))
{return cljs.core.Vector.fromArray([goog.dom.createTextNode.call(null,p1__2204_SHARP_)]);
} else
{if(cljs.core.truth_("﷐'else"))
{return enfocus.core.nodes__GT_coll.call(null,p1__2204_SHARP_);
} else
{return null;
}
}
}),values);
});
/**
* Sets property name to a value on a javascript object
* Returns the original object (js-set obj :attr value)
*/
enfocus.core.style_set = (function style_set(obj,values){
var G__2211__2212 = cljs.core.seq.call(null,cljs.core.apply.call(null,cljs.core.hash_map,values));

while(true){
if(cljs.core.truth_(G__2211__2212))
{var vec__2213__2214 = cljs.core.first.call(null,G__2211__2212);
var attr__2215 = cljs.core.nth.call(null,vec__2213__2214,0,null);
var value__2216 = cljs.core.nth.call(null,vec__2213__2214,1,null);

goog.style.setStyle.call(null,obj,cljs.core.name.call(null,attr__2215),value__2216);
{
var G__2217 = cljs.core.next.call(null,G__2211__2212);
G__2211__2212 = G__2217;
continue;
}
} else
{}
break;
}
return obj;
});
enfocus.core.get_eff_prop_name = (function get_eff_prop_name(etype){
return cljs.core.str.call(null,"__ef_effect_",etype);
});
enfocus.core.get_mills = (function get_mills(){
return (new Date()).getMilliseconds();
});
/**
* this is incremented everytime a remote template is
* loaded and decremented when it is added to the dom
* cache
*/
enfocus.core.tpl_load_cnt = cljs.core.atom.call(null,0);
/**
* cache for the remote templates
*/
enfocus.core.tpl_cache = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
enfocus.core.hide_style = cljs.core.ObjMap.fromObject(["style"],{"style":"display: none; width: 0px; height: 0px"}).strobj;
/**
* Add a hidden div to hold the dom as we are transforming it this
* has to be done because css selectors do not work unless we have
* it in the main dom
*/
enfocus.core.create_hidden_dom = (function create_hidden_dom(child){
var div__2218 = goog.dom.createDom.call(null,"div",enfocus.core.hide_style);

div__2218.appendChild(child);
goog.dom.appendChild.call(null,goog.dom.getDocument.call(null).body,div__2218);
return div__2218;
});
/**
* removes the hidden div and returns the children
*/
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){
var child__2219 = div.childNodes;
var frag__2220 = document.createDocumentFragment();

goog.dom.append.call(null,frag__2220,child__2219);
goog.dom.removeNode.call(null,div);
return frag__2220;
});
/**
* replaces all the ids in a string html fragement/template
* with a generated symbol appended on to a existing id
* this is done to make sure we don't have id colisions
* during the transformation process
*/
enfocus.core.replace_ids = (function replace_ids(text){
var re__2222 = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));
var sym__2223 = cljs.core.str.call(null,cljs.core.name.call(null,cljs.core.gensym.call(null,"id")),"_");

return cljs.core.Vector.fromArray([cljs.core.str.call(null,sym__2223),text.replace(re__2222,(function (a,b,c,d){
return cljs.core.str.call(null,b,sym__2223,c,d);
}))]);
});
/**
* before adding the transformed dom back into the live dom we
* reset the ids back to their original values
*/
enfocus.core.reset_ids = (function reset_ids(sym,nod){
var id_nodes__2224 = enfocus.core.css_select.call(null,nod,"*[id]");
var nod_col__2225 = enfocus.core.nodes__GT_coll.call(null,id_nodes__2224);

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2221_SHARP_){
var id__2226 = p1__2221_SHARP_.getAttribute("id");
var rid__2227 = id__2226.replace(sym,"");

return p1__2221_SHARP_.setAttribute("id",rid__2227);
}),nod_col__2225));
});
/**
* loads a remote file into the cache, before adding to the
* cache we replace the ids to avoid collisions
*/
enfocus.core.load_remote_dom = (function load_remote_dom(uri){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri))))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req__2228 = (new goog.net.XhrIo());
var callback__2238 = (function (req){
var text__2230 = req.getResponseText();
var vec__2229__2231 = enfocus.core.replace_ids.call(null,text__2230);
var sym__2232 = cljs.core.nth.call(null,vec__2229__2231,0,null);
var txt__2233 = cljs.core.nth.call(null,vec__2229__2231,1,null);
var data__2234 = goog.dom.htmlToDocumentFragment.call(null,txt__2233);
var body__2235 = cljs.core.first.call(null,enfocus.core.nodes__GT_coll.call(null,enfocus.core.css_select.call(null,data__2234,"body")));

if(cljs.core.truth_(body__2235))
{var frag__2236 = document.createDocumentFragment();
var childs__2237 = frag__2236.childNodes;

goog.dom.append.call(null,frag__2236,childs__2237);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,cljs.core.Vector.fromArray([sym__2232,frag__2236]));
} else
{return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,cljs.core.Vector.fromArray([sym__2232,data__2234]));
}
});

goog.events.listen.call(null,req__2228,goog.net.EventType.COMPLETE,(function (){
callback__2238.call(null,req__2228);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.dec);
}));
return req__2228.send(uri,"GET");
} else
{return null;
}
});
/**
* returns and dom from the cache and symbol used to scope the ids
*/
enfocus.core.get_cached_dom = (function get_cached_dom(uri){
var nod__2239 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);

if(cljs.core.truth_(nod__2239))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,nod__2239),cljs.core.second.call(null,nod__2239).cloneNode(true)]);
} else
{return null;
}
});
/**
* returns the cached snippet or creates one and adds it to the
* cache if needed
*/
enfocus.core.get_cached_snippet = (function get_cached_snippet(uri,sel){
var sel_str__2240 = enfocus.core.create_sel_str.call(null,sel);
var cache__2241 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,cljs.core.str.call(null,uri.call(null,sel_str__2240)));

if(cljs.core.truth_(cache__2241))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,cache__2241),cljs.core.second.call(null,cache__2241).cloneNode(true)]);
} else
{var vec__2242__2243 = enfocus.core.get_cached_dom.call(null,uri);
var sym__2244 = cljs.core.nth.call(null,vec__2242__2243,0,null);
var tdom__2245 = cljs.core.nth.call(null,vec__2242__2243,1,null);
var dom__2246 = enfocus.core.create_hidden_dom.call(null,tdom__2245);
var tsnip__2247 = enfocus.core.css_select.call(null,dom__2246,sel_str__2240);
var snip__2248 = (cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Array,tsnip__2247))?cljs.core.first.call(null,tsnip__2247):tsnip__2247);

enfocus.core.remove_node_return_child.call(null,dom__2246);
cljs.core.assoc.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache),cljs.core.str.call(null,uri,sel_str__2240),cljs.core.Vector.fromArray([sym__2244,snip__2248]));
return cljs.core.Vector.fromArray([sym__2244,snip__2248]);
}
});
/**
* takes a function an returns a function that
* applys a given function on all nodes returned
* by a given selector
*/
enfocus.core.multi_node_proc = (function multi_node_proc(func){
return (function (pnodes){
var pnod_col__2250 = enfocus.core.nodes__GT_coll.call(null,pnodes);

return cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__2250));
});
});
/**
* HOF to remove the duplicate code in transformation that
* handle creating a fragment and applying it in some way
* to the selected node
*/
enfocus.core.content_based_trans = (function content_based_trans(values,func){
var fnodes__2251 = enfocus.core.flatten_nodes_coll.call(null,values);

return enfocus.core.multi_node_proc.call(null,(function (pnod){
var frag__2252 = document.createDocumentFragment();

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2249_SHARP_){
return goog.dom.appendChild.call(null,frag__2252,p1__2249_SHARP_.cloneNode(true));
}),fnodes__2251));
return func.call(null,pnod,frag__2252);
}));
});
/**
* Replaces the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.en_content = (function() { 
var en_content__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
goog.dom.removeChildren.call(null,pnod);
return goog.dom.appendChild.call(null,pnod,frag);
}));
};
var en_content = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_content__delegate.call(this, values);
};
en_content.cljs$lang$maxFixedArity = 0;
en_content.cljs$lang$applyTo = (function (arglist__2253){
var values = cljs.core.seq( arglist__2253 );;
return en_content__delegate.call(this, values);
});
return en_content;
})()
;
/**
* Replaces the content of the element with the dom structure
* represented by the html string passed
*/
enfocus.core.en_html_content = (function en_html_content(txt){
return enfocus.core.multi_node_proc.call(null,(function (pnod){
var frag__2254 = goog.dom.htmlToDocumentFragment.call(null,txt);

goog.dom.removeChildren.call(null,pnod);
return goog.dom.append.call(null,pnod,frag__2254);
}));
});
/**
* Assocs attributes and values on the selected element.
* @param {...*} var_args
*/
enfocus.core.en_set_attr = (function() { 
var en_set_attr__delegate = function (values){
var at_lst__2256 = cljs.core.partition.call(null,2,values);

return enfocus.core.multi_node_proc.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__2257){
var vec__2258__2259 = p__2257;
var a__2260 = cljs.core.nth.call(null,vec__2258__2259,0,null);
var v__2261 = cljs.core.nth.call(null,vec__2258__2259,1,null);

return pnod.setAttribute(cljs.core.name.call(null,a__2260),v__2261);
}),at_lst__2256));
}));
};
var en_set_attr = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_set_attr__delegate.call(this, values);
};
en_set_attr.cljs$lang$maxFixedArity = 0;
en_set_attr.cljs$lang$applyTo = (function (arglist__2262){
var values = cljs.core.seq( arglist__2262 );;
return en_set_attr__delegate.call(this, values);
});
return en_set_attr;
})()
;
/**
* Dissocs attributes on the selected element.
* @param {...*} var_args
*/
enfocus.core.en_remove_attr = (function() { 
var en_remove_attr__delegate = function (values){
return enfocus.core.multi_node_proc.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2255_SHARP_){
return pnod.removeAttribute(cljs.core.name.call(null,p1__2255_SHARP_));
}),values));
}));
};
var en_remove_attr = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_attr__delegate.call(this, values);
};
en_remove_attr.cljs$lang$maxFixedArity = 0;
en_remove_attr.cljs$lang$applyTo = (function (arglist__2263){
var values = cljs.core.seq( arglist__2263 );;
return en_remove_attr__delegate.call(this, values);
});
return en_remove_attr;
})()
;
/**
* returns true if the element has a given class
*/
enfocus.core.has_class = (function has_class(el,cls){
var regex__2265 = (new RegExp(cljs.core.str.call(null,"(\\s|^)",cls,"(\\s|$)")));
var cur_cls__2266 = el.className;

return cur_cls__2266.match(regex__2265);
});
/**
* Adds the specified classes to the selected element.
* @param {...*} var_args
*/
enfocus.core.en_add_class = (function() { 
var en_add_class__delegate = function (values){
return enfocus.core.multi_node_proc.call(null,(function (pnod){
var cur_cls__2268 = pnod.className;

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2264_SHARP_){
if(cljs.core.truth_(cljs.core.not.call(null,enfocus.core.has_class.call(null,pnod,p1__2264_SHARP_))))
{return pnod.className = cljs.core.str.call(null,cur_cls__2268," ",p1__2264_SHARP_);
} else
{return null;
}
}),values));
}));
};
var en_add_class = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_add_class__delegate.call(this, values);
};
en_add_class.cljs$lang$maxFixedArity = 0;
en_add_class.cljs$lang$applyTo = (function (arglist__2269){
var values = cljs.core.seq( arglist__2269 );;
return en_add_class__delegate.call(this, values);
});
return en_add_class;
})()
;
/**
* Removes the specified classes from the selected element.
* @param {...*} var_args
*/
enfocus.core.en_remove_class = (function() { 
var en_remove_class__delegate = function (values){
return enfocus.core.multi_node_proc.call(null,(function (pnod){
var cur__2271 = pnod.className;

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2267_SHARP_){
if(cljs.core.truth_(enfocus.core.has_class.call(null,pnod,p1__2267_SHARP_)))
{var regex__2272 = (new RegExp(cljs.core.str.call(null,"(\\s|^)",p1__2267_SHARP_,"(\\s|$)")));

return pnod.className = cur__2271.replace(regex__2272," ");
} else
{return null;
}
}),values));
}));
};
var en_remove_class = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_class__delegate.call(this, values);
};
en_remove_class.cljs$lang$maxFixedArity = 0;
en_remove_class.cljs$lang$applyTo = (function (arglist__2273){
var values = cljs.core.seq( arglist__2273 );;
return en_remove_class__delegate.call(this, values);
});
return en_remove_class;
})()
;
/**
* @param {...*} var_args
*/
enfocus.core.en_do__GT_ = (function() { 
var en_do__GT___delegate = function (forms){
return enfocus.core.multi_node_proc.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2270_SHARP_){
return p1__2270_SHARP_.call(null,pnod);
}),forms));
}));
};
var en_do__GT_ = function (var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_do__GT___delegate.call(this, forms);
};
en_do__GT_.cljs$lang$maxFixedArity = 0;
en_do__GT_.cljs$lang$applyTo = (function (arglist__2274){
var forms = cljs.core.seq( arglist__2274 );;
return en_do__GT___delegate.call(this, forms);
});
return en_do__GT_;
})()
;
/**
* Appends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.en_append = (function() { 
var en_append__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
return goog.dom.appendChild.call(null,pnod,frag);
}));
};
var en_append = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_append__delegate.call(this, values);
};
en_append.cljs$lang$maxFixedArity = 0;
en_append.cljs$lang$applyTo = (function (arglist__2275){
var values = cljs.core.seq( arglist__2275 );;
return en_append__delegate.call(this, values);
});
return en_append;
})()
;
/**
* Prepends the content of the element. Values can be nodes or collection of nodes.
* @param {...*} var_args
*/
enfocus.core.en_prepend = (function() { 
var en_prepend__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
var nod__2276 = pnod.firstChild;

return pnod.insertBefore(frag,nod__2276);
}));
};
var en_prepend = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_prepend__delegate.call(this, values);
};
en_prepend.cljs$lang$maxFixedArity = 0;
en_prepend.cljs$lang$applyTo = (function (arglist__2277){
var values = cljs.core.seq( arglist__2277 );;
return en_prepend__delegate.call(this, values);
});
return en_prepend;
})()
;
/**
* inserts the content before the selected node.  Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.en_before = (function() { 
var en_before__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
return goog.dom.insertSiblingBefore.call(null,frag,pnod);
}));
};
var en_before = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_before__delegate.call(this, values);
};
en_before.cljs$lang$maxFixedArity = 0;
en_before.cljs$lang$applyTo = (function (arglist__2278){
var values = cljs.core.seq( arglist__2278 );;
return en_before__delegate.call(this, values);
});
return en_before;
})()
;
/**
* inserts the content after the selected node.  Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.en_after = (function() { 
var en_after__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
return goog.dom.insertSiblingAfter.call(null,frag,pnod);
}));
};
var en_after = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_after__delegate.call(this, values);
};
en_after.cljs$lang$maxFixedArity = 0;
en_after.cljs$lang$applyTo = (function (arglist__2279){
var values = cljs.core.seq( arglist__2279 );;
return en_after__delegate.call(this, values);
});
return en_after;
})()
;
/**
* substitutes the content for the selected node.  Values can be nodes or collection of nodes
* @param {...*} var_args
*/
enfocus.core.en_substitute = (function() { 
var en_substitute__delegate = function (values){
return enfocus.core.content_based_trans.call(null,values,(function (pnod,frag){
return goog.dom.replaceNode.call(null,frag,pnod);
}));
};
var en_substitute = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_substitute__delegate.call(this, values);
};
en_substitute.cljs$lang$maxFixedArity = 0;
en_substitute.cljs$lang$applyTo = (function (arglist__2280){
var values = cljs.core.seq( arglist__2280 );;
return en_substitute__delegate.call(this, values);
});
return en_substitute;
})()
;
/**
* removes the selected nodes from the dom
* @param {...*} var_args
*/
enfocus.core.en_remove_node = (function() { 
var en_remove_node__delegate = function (values){
return enfocus.core.multi_node_proc.call(null,(function (pnod){
return goog.dom.removeNode.call(null,pnod);
}));
};
var en_remove_node = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_node__delegate.call(this, values);
};
en_remove_node.cljs$lang$maxFixedArity = 0;
en_remove_node.cljs$lang$applyTo = (function (arglist__2281){
var values = cljs.core.seq( arglist__2281 );;
return en_remove_node__delegate.call(this, values);
});
return en_remove_node;
})()
;
/**
* set a list of style elements from the selected nodes
* @param {...*} var_args
*/
enfocus.core.en_set_style = (function() { 
var en_set_style__delegate = function (values){
return enfocus.core.multi_node_proc.call(null,(function (pnod){
return enfocus.core.style_set.call(null,pnod,values);
}));
};
var en_set_style = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_set_style__delegate.call(this, values);
};
en_set_style.cljs$lang$maxFixedArity = 0;
en_set_style.cljs$lang$applyTo = (function (arglist__2283){
var values = cljs.core.seq( arglist__2283 );;
return en_set_style__delegate.call(this, values);
});
return en_set_style;
})()
;
/**
* remove a list style elements from the selected nodes
* note: you can only remove styles that are inline styles
* set in css need to overridden through set-style
* @param {...*} var_args
*/
enfocus.core.en_remove_style = (function() { 
var en_remove_style__delegate = function (values){
return enfocus.core.multi_node_proc.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2282_SHARP_){
return pnod.style.removeProperty(cljs.core.name.call(null,p1__2282_SHARP_));
}),values));
}));
};
var en_remove_style = function (var_args){
var values = null;
if (goog.isDef(var_args)) {
  values = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_style__delegate.call(this, values);
};
en_remove_style.cljs$lang$maxFixedArity = 0;
en_remove_style.cljs$lang$applyTo = (function (arglist__2284){
var values = cljs.core.seq( arglist__2284 );;
return en_remove_style__delegate.call(this, values);
});
return en_remove_style;
})()
;
/**
* adding an event to the selected nodes
*/
enfocus.core.en_add_event = (function en_add_event(event,func){
return enfocus.core.multi_node_proc.call(null,(function (pnod){
return goog.events.listen.call(null,pnod,cljs.core.name.call(null,event),func);
}));
});
/**
* adding an event to the selected nodes
* @param {...*} var_args
*/
enfocus.core.en_remove_event = (function() { 
var en_remove_event__delegate = function (event_list){
return enfocus.core.multi_node_proc.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2285_SHARP_){
return goog.events.removeAll.call(null,pnod,cljs.core.name.call(null,p1__2285_SHARP_));
}),event_list));
}));
};
var en_remove_event = function (var_args){
var event_list = null;
if (goog.isDef(var_args)) {
  event_list = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_remove_event__delegate.call(this, event_list);
};
en_remove_event.cljs$lang$maxFixedArity = 0;
en_remove_event.cljs$lang$applyTo = (function (arglist__2286){
var event_list = cljs.core.seq( arglist__2286 );;
return en_remove_event__delegate.call(this, event_list);
});
return en_remove_event;
})()
;
enfocus.core.start_effect = (function start_effect(pnod,etype){
console.log(cljs.core.str.call(null,"start-effect",pnod,":",etype));
var effs__2287 = (pnod[enfocus.core.get_eff_prop_name.call(null,etype)]);
var eff_id__2288 = cljs.core.gensym.call(null,"efid_");

if(cljs.core.truth_(effs__2287))
{cljs.core.swap_BANG_.call(null,effs__2287,cljs.core.conj,eff_id__2288);
return eff_id__2288;
} else
{(pnod[enfocus.core.get_eff_prop_name.call(null,etype)] = cljs.core.atom.call(null,cljs.core.set([eff_id__2288])));
return eff_id__2288;
}
});
enfocus.core.check_effect = (function check_effect(pnod,etype,sym){
var effs__2289 = (pnod[enfocus.core.get_eff_prop_name.call(null,etype)]);

if(cljs.core.truth_((function (){var and__3574__auto____2290 = effs__2289;

if(cljs.core.truth_(and__3574__auto____2290))
{return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,effs__2289),sym);
} else
{return and__3574__auto____2290;
}
})()))
{return true;
} else
{return false;
}
});
enfocus.core.finish_effect = (function finish_effect(pnod,etype,sym){
console.log(cljs.core.str.call(null,"finish-effect",pnod,":",etype,":",sym));
var effs__2292 = (pnod[enfocus.core.get_eff_prop_name.call(null,etype)]);

if(cljs.core.truth_(effs__2292))
{return cljs.core.swap_BANG_.call(null,effs__2292,cljs.core.disj,sym);
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
enfocus.core.en_stop_effect = (function() { 
var en_stop_effect__delegate = function (etypes){
return (function (pnod){
console.log(cljs.core.pr_str.call(null,"stop-effect",pnod,":",etypes));
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__2291_SHARP_){
return (pnod[enfocus.core.get_eff_prop_name.call(null,p1__2291_SHARP_)] = cljs.core.atom.call(null,cljs.core.set([])));
}),etypes));
});
};
var en_stop_effect = function (var_args){
var etypes = null;
if (goog.isDef(var_args)) {
  etypes = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return en_stop_effect__delegate.call(this, etypes);
};
en_stop_effect.cljs$lang$maxFixedArity = 0;
en_stop_effect.cljs$lang$applyTo = (function (arglist__2293){
var etypes = cljs.core.seq( arglist__2293 );;
return en_stop_effect__delegate.call(this, etypes);
});
return en_stop_effect;
})()
;
/**
* fade the selected nodes over a set of steps
*/
enfocus.core.en_fade_out = (function en_fade_out(ttime,step){
var incr__2294 = cljs.core._SLASH_.call(null,1,cljs.core._SLASH_.call(null,ttime,step));

return enfocus.core.multi_node_proc.call(null,(function (pnod__2163__auto__){
enfocus.core.en_stop_effect.call(null,"﷐'fade-in").call(null,pnod__2163__auto__);
var start__2164__auto____2295 = enfocus.core.get_mills.call(null);
var eff_id__2165__auto____2296 = enfocus.core.start_effect.call(null,pnod__2163__auto__,"﷐'fade-out");
var eff__2166__auto____2301 = (function run__2167__auto__(){
if(cljs.core.truth_((function (){var and__3574__auto____2297 = enfocus.core.check_effect.call(null,pnod__2163__auto__,"﷐'fade-out",eff_id__2165__auto____2296);

if(cljs.core.truth_(and__3574__auto____2297))
{return cljs.core.not.call(null,(function (pnod,etime){
var op__2298 = goog.style.getOpacity.call(null,pnod);

return cljs.core._LT__EQ_.call(null,op__2298,0);
}).call(null,pnod__2163__auto__,cljs.core._.call(null,enfocus.core.get_mills.call(null),start__2164__auto____2295)));
} else
{return and__3574__auto____2297;
}
})()))
{(function (pnod2299){
return pnod2299;
}).call(null,(function (pnod){
var op__2300 = goog.style.getOpacity.call(null,pnod);

if(cljs.core.truth_(cljs.core._EQ_.call(null,"",op__2300)))
{return goog.style.setOpacity.call(null,pnod,cljs.core._.call(null,1,incr__2294));
} else
{if(cljs.core.truth_(cljs.core._LT_.call(null,0,op__2300)))
{return goog.style.setOpacity.call(null,pnod,cljs.core._.call(null,op__2300,incr__2294));
} else
{return null;
}
}
})).call(null,pnod__2163__auto__);
return setTimeout.call(null,(function (){
return run__2167__auto__.call(null);
}),step);
} else
{return enfocus.core.finish_effect.call(null,pnod__2163__auto__,"﷐'fade-out",eff_id__2165__auto____2296);
}
});

return eff__2166__auto____2301.call(null,0);
}));
});
/**
* fade the selected nodes over a set of steps
*/
enfocus.core.en_fade_in = (function en_fade_in(ttime,step){
var incr__2302 = cljs.core._SLASH_.call(null,1,cljs.core._SLASH_.call(null,ttime,step));

return enfocus.core.multi_node_proc.call(null,(function (pnod__2163__auto__){
enfocus.core.en_stop_effect.call(null,"﷐'fade-out").call(null,pnod__2163__auto__);
var start__2164__auto____2303 = enfocus.core.get_mills.call(null);
var eff_id__2165__auto____2304 = enfocus.core.start_effect.call(null,pnod__2163__auto__,"﷐'fade-in");
var eff__2166__auto____2309 = (function run__2167__auto__(){
if(cljs.core.truth_((function (){var and__3574__auto____2305 = enfocus.core.check_effect.call(null,pnod__2163__auto__,"﷐'fade-in",eff_id__2165__auto____2304);

if(cljs.core.truth_(and__3574__auto____2305))
{return cljs.core.not.call(null,(function (pnod,etime){
var op__2306 = goog.style.getOpacity.call(null,pnod);

return cljs.core._GT__EQ_.call(null,op__2306,1);
}).call(null,pnod__2163__auto__,cljs.core._.call(null,enfocus.core.get_mills.call(null),start__2164__auto____2303)));
} else
{return and__3574__auto____2305;
}
})()))
{(function (pnod2307){
return pnod2307;
}).call(null,(function (pnod){
var op__2308 = goog.style.getOpacity.call(null,pnod);

if(cljs.core.truth_(cljs.core._EQ_.call(null,"",op__2308)))
{return goog.style.setOpacity.call(null,pnod,incr__2302);
} else
{if(cljs.core.truth_(cljs.core._GT_.call(null,1,op__2308)))
{return goog.style.setOpacity.call(null,pnod,cljs.core._PLUS_.call(null,op__2308,incr__2302));
} else
{return null;
}
}
})).call(null,pnod__2163__auto__);
return setTimeout.call(null,(function (){
return run__2167__auto__.call(null);
}),step);
} else
{return enfocus.core.finish_effect.call(null,pnod__2163__auto__,"﷐'fade-in",eff_id__2165__auto____2304);
}
});

return eff__2166__auto____2309.call(null,0);
}));
});
/**
* resizes the selected elements to a width and height in px
* optional time series data
*/
enfocus.core.en_resize = (function() {
var en_resize = null;
var en_resize__2348 = (function (wth,hgt){
return en_resize.call(null,wth,hgt,0,0);
});
var en_resize__2349 = (function (wth,hgt,ttime,step){
var orig_sym__2310 = cljs.core.gensym.call(null,"orig-size");
var steps__2313 = (cljs.core.truth_((function (){var or__3576__auto____2311 = cljs.core.zero_QMARK_.call(null,ttime);

if(cljs.core.truth_(or__3576__auto____2311))
{return or__3576__auto____2311;
} else
{var or__3576__auto____2312 = cljs.core.zero_QMARK_.call(null,step);

if(cljs.core.truth_(or__3576__auto____2312))
{return or__3576__auto____2312;
} else
{return cljs.core._LT__EQ_.call(null,ttime,step);
}
}
})())?1:cljs.core._SLASH_.call(null,ttime,step));

return enfocus.core.multi_node_proc.call(null,(function (pnod__2163__auto__){
enfocus.core.en_stop_effect.call(null,"﷐'resize").call(null,pnod__2163__auto__);
var start__2164__auto____2314 = enfocus.core.get_mills.call(null);
var eff_id__2165__auto____2315 = enfocus.core.start_effect.call(null,pnod__2163__auto__,"﷐'resize");
var eff__2166__auto____2347 = (function run__2167__auto__(){
if(cljs.core.truth_((function (){var and__3574__auto____2316 = enfocus.core.check_effect.call(null,pnod__2163__auto__,"﷐'resize",eff_id__2165__auto____2315);

if(cljs.core.truth_(and__3574__auto____2316))
{return cljs.core.not.call(null,(function (pnod,etime){
var csize__2317 = goog.style.getSize.call(null,pnod);
var osize__2318 = (pnod[cljs.core.name.call(null,orig_sym__2310)]);
var osize__2319 = (cljs.core.truth_(osize__2318)?osize__2318:(pnod[cljs.core.name.call(null,orig_sym__2310)] = csize__2317));
var wth__2320 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curwidth",wth))?osize__2319.width:wth);
var hgt__2321 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curheight",hgt))?osize__2319.height:hgt);
var wstep__2322 = cljs.core._SLASH_.call(null,cljs.core._.call(null,wth__2320,osize__2319.width),steps__2313);
var hstep__2323 = cljs.core._SLASH_.call(null,cljs.core._.call(null,hgt__2321,osize__2319.height),steps__2313);

if(cljs.core.truth_((function (){var and__3574__auto____2328 = (function (){var or__3576__auto____2324 = cljs.core.zero_QMARK_.call(null,wstep__2322);

if(cljs.core.truth_(or__3576__auto____2324))
{return or__3576__auto____2324;
} else
{var or__3576__auto____2326 = (function (){var and__3574__auto____2325 = cljs.core.neg_QMARK_.call(null,wstep__2322);

if(cljs.core.truth_(and__3574__auto____2325))
{return cljs.core._GT__EQ_.call(null,wth__2320,csize__2317.width);
} else
{return and__3574__auto____2325;
}
})();

if(cljs.core.truth_(or__3576__auto____2326))
{return or__3576__auto____2326;
} else
{var and__3574__auto____2327 = cljs.core.pos_QMARK_.call(null,wstep__2322);

if(cljs.core.truth_(and__3574__auto____2327))
{return cljs.core._LT__EQ_.call(null,wth__2320,csize__2317.width);
} else
{return and__3574__auto____2327;
}
}
}
})();

if(cljs.core.truth_(and__3574__auto____2328))
{var or__3576__auto____2329 = cljs.core.zero_QMARK_.call(null,hstep__2323);

if(cljs.core.truth_(or__3576__auto____2329))
{return or__3576__auto____2329;
} else
{var or__3576__auto____2331 = (function (){var and__3574__auto____2330 = cljs.core.neg_QMARK_.call(null,hstep__2323);

if(cljs.core.truth_(and__3574__auto____2330))
{return cljs.core._GT__EQ_.call(null,hgt__2321,csize__2317.height);
} else
{return and__3574__auto____2330;
}
})();

if(cljs.core.truth_(or__3576__auto____2331))
{return or__3576__auto____2331;
} else
{var and__3574__auto____2332 = cljs.core.pos_QMARK_.call(null,hstep__2323);

if(cljs.core.truth_(and__3574__auto____2332))
{return cljs.core._LT__EQ_.call(null,hgt__2321,csize__2317.height);
} else
{return and__3574__auto____2332;
}
}
}
} else
{return and__3574__auto____2328;
}
})()))
{(pnod[cljs.core.name.call(null,orig_sym__2310)] = null);
goog.style.setWidth.call(null,pnod,wth__2320);
goog.style.setHeight.call(null,pnod,hgt__2321);
return true;
} else
{return false;
}
}).call(null,pnod__2163__auto__,cljs.core._.call(null,enfocus.core.get_mills.call(null),start__2164__auto____2314)));
} else
{return and__3574__auto____2316;
}
})()))
{(function (pnod2333){
return pnod2333;
}).call(null,(function (pnod){
var csize__2334 = goog.style.getSize.call(null,pnod);
var osize__2335 = (pnod[cljs.core.name.call(null,orig_sym__2310)]);
var osize__2336 = (cljs.core.truth_(osize__2335)?osize__2335:(pnod[cljs.core.name.call(null,orig_sym__2310)] = csize__2334));
var wth__2337 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curwidth",wth))?osize__2336.width:wth);
var hgt__2338 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curheight",hgt))?osize__2336.height:hgt);
var wstep__2339 = cljs.core._SLASH_.call(null,cljs.core._.call(null,wth__2337,osize__2336.width),steps__2313);
var hstep__2340 = cljs.core._SLASH_.call(null,cljs.core._.call(null,hgt__2338,osize__2336.height),steps__2313);

if(cljs.core.truth_((function (){var or__3576__auto____2342 = (function (){var and__3574__auto____2341 = cljs.core.neg_QMARK_.call(null,wstep__2339);

if(cljs.core.truth_(and__3574__auto____2341))
{return cljs.core._LT_.call(null,wth__2337,csize__2334.width);
} else
{return and__3574__auto____2341;
}
})();

if(cljs.core.truth_(or__3576__auto____2342))
{return or__3576__auto____2342;
} else
{var and__3574__auto____2343 = cljs.core.pos_QMARK_.call(null,wstep__2339);

if(cljs.core.truth_(and__3574__auto____2343))
{return cljs.core._GT_.call(null,wth__2337,csize__2334.width);
} else
{return and__3574__auto____2343;
}
}
})()))
{goog.style.setWidth.call(null,pnod,cljs.core._PLUS_.call(null,csize__2334.width,wstep__2339));
} else
{}
if(cljs.core.truth_((function (){var or__3576__auto____2345 = (function (){var and__3574__auto____2344 = cljs.core.neg_QMARK_.call(null,hstep__2340);

if(cljs.core.truth_(and__3574__auto____2344))
{return cljs.core._LT_.call(null,hgt__2338,csize__2334.height);
} else
{return and__3574__auto____2344;
}
})();

if(cljs.core.truth_(or__3576__auto____2345))
{return or__3576__auto____2345;
} else
{var and__3574__auto____2346 = cljs.core.pos_QMARK_.call(null,hstep__2340);

if(cljs.core.truth_(and__3574__auto____2346))
{return cljs.core._GT_.call(null,hgt__2338,csize__2334.height);
} else
{return and__3574__auto____2346;
}
}
})()))
{return goog.style.setHeight.call(null,pnod,cljs.core._PLUS_.call(null,csize__2334.height,hstep__2340));
} else
{return null;
}
})).call(null,pnod__2163__auto__);
return setTimeout.call(null,(function (){
return run__2167__auto__.call(null);
}),step);
} else
{return enfocus.core.finish_effect.call(null,pnod__2163__auto__,"﷐'resize",eff_id__2165__auto____2315);
}
});

return eff__2166__auto____2347.call(null,0);
}));
});
en_resize = function(wth,hgt,ttime,step){
switch(arguments.length){
case  2 :
return en_resize__2348.call(this,wth,hgt);
case  4 :
return en_resize__2349.call(this,wth,hgt,ttime,step);
}
throw('Invalid arity: ' + arguments.length);
};
return en_resize;
})()
;
/**
* moves the selected elements to a x and y in px
* optional time series data
*/
enfocus.core.en_move = (function() {
var en_move = null;
var en_move__2392 = (function (xpos,ypos){
return en_move.call(null,xpos,ypos,0,0);
});
var en_move__2393 = (function (xpos,ypos,ttime,step){
var orig_sym__2352 = cljs.core.gensym.call(null,"orig-pos");
var steps__2355 = (cljs.core.truth_((function (){var or__3576__auto____2353 = cljs.core.zero_QMARK_.call(null,ttime);

if(cljs.core.truth_(or__3576__auto____2353))
{return or__3576__auto____2353;
} else
{var or__3576__auto____2354 = cljs.core.zero_QMARK_.call(null,step);

if(cljs.core.truth_(or__3576__auto____2354))
{return or__3576__auto____2354;
} else
{return cljs.core._LT__EQ_.call(null,ttime,step);
}
}
})())?1:cljs.core._SLASH_.call(null,ttime,step));

return enfocus.core.multi_node_proc.call(null,(function (pnod__2163__auto__){
enfocus.core.en_stop_effect.call(null,"﷐'move").call(null,pnod__2163__auto__);
var start__2164__auto____2356 = enfocus.core.get_mills.call(null);
var eff_id__2165__auto____2357 = enfocus.core.start_effect.call(null,pnod__2163__auto__,"﷐'move");
var eff__2166__auto____2391 = (function run__2167__auto__(){
if(cljs.core.truth_((function (){var and__3574__auto____2358 = enfocus.core.check_effect.call(null,pnod__2163__auto__,"﷐'move",eff_id__2165__auto____2357);

if(cljs.core.truth_(and__3574__auto____2358))
{return cljs.core.not.call(null,(function (pnod,etime){
var cpos__2359 = goog.style.getPosition.call(null,pnod);
var opos__2360 = (pnod[cljs.core.name.call(null,orig_sym__2352)]);
var opos__2361 = (cljs.core.truth_(opos__2360)?opos__2360:(pnod[cljs.core.name.call(null,orig_sym__2352)] = cpos__2359));
var xpos__2362 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curx",xpos))?opos__2361.x:xpos);
var ypos__2363 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'cury",ypos))?opos__2361.y:ypos);
var xstep__2364 = cljs.core._SLASH_.call(null,cljs.core._.call(null,xpos__2362,opos__2361.x),steps__2355);
var ystep__2365 = cljs.core._SLASH_.call(null,cljs.core._.call(null,ypos__2363,opos__2361.y),steps__2355);
var clone__2366 = cpos__2359.clone;

if(cljs.core.truth_((function (){var and__3574__auto____2371 = (function (){var or__3576__auto____2367 = cljs.core.zero_QMARK_.call(null,xstep__2364);

if(cljs.core.truth_(or__3576__auto____2367))
{return or__3576__auto____2367;
} else
{var or__3576__auto____2369 = (function (){var and__3574__auto____2368 = cljs.core.neg_QMARK_.call(null,xstep__2364);

if(cljs.core.truth_(and__3574__auto____2368))
{return cljs.core._GT__EQ_.call(null,xpos__2362,cpos__2359.x);
} else
{return and__3574__auto____2368;
}
})();

if(cljs.core.truth_(or__3576__auto____2369))
{return or__3576__auto____2369;
} else
{var and__3574__auto____2370 = cljs.core.pos_QMARK_.call(null,xstep__2364);

if(cljs.core.truth_(and__3574__auto____2370))
{return cljs.core._LT__EQ_.call(null,xpos__2362,cpos__2359.x);
} else
{return and__3574__auto____2370;
}
}
}
})();

if(cljs.core.truth_(and__3574__auto____2371))
{var or__3576__auto____2372 = cljs.core.zero_QMARK_.call(null,ystep__2365);

if(cljs.core.truth_(or__3576__auto____2372))
{return or__3576__auto____2372;
} else
{var or__3576__auto____2374 = (function (){var and__3574__auto____2373 = cljs.core.neg_QMARK_.call(null,ystep__2365);

if(cljs.core.truth_(and__3574__auto____2373))
{return cljs.core._GT__EQ_.call(null,ypos__2363,cpos__2359.y);
} else
{return and__3574__auto____2373;
}
})();

if(cljs.core.truth_(or__3576__auto____2374))
{return or__3576__auto____2374;
} else
{var and__3574__auto____2375 = cljs.core.pos_QMARK_.call(null,ystep__2365);

if(cljs.core.truth_(and__3574__auto____2375))
{return cljs.core._LT__EQ_.call(null,ypos__2363,cpos__2359.y);
} else
{return and__3574__auto____2375;
}
}
}
} else
{return and__3574__auto____2371;
}
})()))
{(pnod[cljs.core.name.call(null,orig_sym__2352)] = null);
clone__2366.x = xpos__2362;
clone__2366.y = ypos__2363;
goog.style.setPosition.call(null,pnod,clone__2366.x,clone__2366.y);
return true;
} else
{return false;
}
}).call(null,pnod__2163__auto__,cljs.core._.call(null,enfocus.core.get_mills.call(null),start__2164__auto____2356)));
} else
{return and__3574__auto____2358;
}
})()))
{(function (pnod2376){
return pnod2376;
}).call(null,(function (pnod){
var cpos__2377 = goog.style.getPosition.call(null,pnod);
var opos__2378 = (pnod[cljs.core.name.call(null,orig_sym__2352)]);
var opos__2379 = (cljs.core.truth_(opos__2378)?opos__2378:(pnod[cljs.core.name.call(null,orig_sym__2352)] = cpos__2377));
var xpos__2380 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'curx",xpos))?opos__2379.x:xpos);
var ypos__2381 = (cljs.core.truth_(cljs.core._EQ_.call(null,"﷐'cury",ypos))?opos__2379.y:ypos);
var xstep__2382 = cljs.core._SLASH_.call(null,cljs.core._.call(null,xpos__2380,opos__2379.x),steps__2355);
var ystep__2383 = cljs.core._SLASH_.call(null,cljs.core._.call(null,ypos__2381,opos__2379.y),steps__2355);
var clone__2384 = cpos__2377.clone;

if(cljs.core.truth_((function (){var or__3576__auto____2386 = (function (){var and__3574__auto____2385 = cljs.core.neg_QMARK_.call(null,xstep__2382);

if(cljs.core.truth_(and__3574__auto____2385))
{return cljs.core._LT_.call(null,xpos__2380,cpos__2377.x);
} else
{return and__3574__auto____2385;
}
})();

if(cljs.core.truth_(or__3576__auto____2386))
{return or__3576__auto____2386;
} else
{var and__3574__auto____2387 = cljs.core.pos_QMARK_.call(null,xstep__2382);

if(cljs.core.truth_(and__3574__auto____2387))
{return cljs.core._GT_.call(null,xpos__2380,cpos__2377.x);
} else
{return and__3574__auto____2387;
}
}
})()))
{clone__2384.x = cljs.core._PLUS_.call(null,cpos__2377.x,xstep__2382);
} else
{}
if(cljs.core.truth_((function (){var or__3576__auto____2389 = (function (){var and__3574__auto____2388 = cljs.core.neg_QMARK_.call(null,ystep__2383);

if(cljs.core.truth_(and__3574__auto____2388))
{return cljs.core._LT_.call(null,ypos__2381,cpos__2377.y);
} else
{return and__3574__auto____2388;
}
})();

if(cljs.core.truth_(or__3576__auto____2389))
{return or__3576__auto____2389;
} else
{var and__3574__auto____2390 = cljs.core.pos_QMARK_.call(null,ystep__2383);

if(cljs.core.truth_(and__3574__auto____2390))
{return cljs.core._GT_.call(null,ypos__2381,cpos__2377.y);
} else
{return and__3574__auto____2390;
}
}
})()))
{clone__2384.y = cljs.core._PLUS_.call(null,cpos__2377.y,ystep__2383);
} else
{}
return goog.style.setPosition.call(null,pnod,clone__2384.x,clone__2384.y);
})).call(null,pnod__2163__auto__);
return setTimeout.call(null,(function (){
return run__2167__auto__.call(null);
}),step);
} else
{return enfocus.core.finish_effect.call(null,pnod__2163__auto__,"﷐'move",eff_id__2165__auto____2357);
}
});

return eff__2166__auto____2391.call(null,0);
}));
});
en_move = function(xpos,ypos,ttime,step){
switch(arguments.length){
case  2 :
return en_move__2392.call(this,xpos,ypos);
case  4 :
return en_move__2393.call(this,xpos,ypos,ttime,step);
}
throw('Invalid arity: ' + arguments.length);
};
return en_move;
})()
;
/**
* converts keywords, symbols and strings used in the enlive selector
* syntax to a string representing a standard css selector.  It also
* takes a string to append to all ids so they do not conflict with
* existing ids in the live dom
*/
enfocus.core.create_sel_str = (function() {
var create_sel_str = null;
var create_sel_str__2395 = (function (css_sel){
return create_sel_str.call(null,"",css_sel);
});
var create_sel_str__2396 = (function (id_scope_sym,css_sel){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__2351_SHARP_){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,p1__2351_SHARP_)))
{return enfocus.core.css_syms.call(null,p1__2351_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,p1__2351_SHARP_)))
{return cljs.core.str.call(null," ",cljs.core.name.call(null,p1__2351_SHARP_).replace("#",cljs.core.str.call(null,"#",id_scope_sym)));
} else
{if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,p1__2351_SHARP_)))
{return create_sel_str.call(null,p1__2351_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__2351_SHARP_)))
{return p1__2351_SHARP_.replace("#",cljs.core.str.call(null,"#",id_scope_sym));
} else
{return null;
}
}
}
}
}),css_sel));
});
create_sel_str = function(id_scope_sym,css_sel){
switch(arguments.length){
case  1 :
return create_sel_str__2395.call(this,id_scope_sym);
case  2 :
return create_sel_str__2396.call(this,id_scope_sym,css_sel);
}
throw('Invalid arity: ' + arguments.length);
};
return create_sel_str;
})()
;
/**
* takes either an enlive selector or a css3 selector and
* returns a set of nodes that match the selector
*/
enfocus.core.css_select = (function() {
var css_select = null;
var css_select__2400 = (function (dom_node,css_sel){
return css_select.call(null,"",dom_node,css_sel);
});
var css_select__2401 = (function (id_scope_sym,dom_node,css_sel){
var sel__2398 = clojure.string.trim.call(null,clojure.string.replace.call(null,enfocus.core.create_sel_str.call(null,id_scope_sym,css_sel)," :",":"));
var ret__2399 = goog.dom.query.call(null,sel__2398,dom_node);

return ret__2399;
});
css_select = function(id_scope_sym,dom_node,css_sel){
switch(arguments.length){
case  2 :
return css_select__2400.call(this,id_scope_sym,dom_node);
case  3 :
return css_select__2401.call(this,id_scope_sym,dom_node,css_sel);
}
throw('Invalid arity: ' + arguments.length);
};
return css_select;
})()
;
enfocus.core.css_syms = cljs.core.HashMap.fromArrays(["﷑'first-child","﷑'last-child"],[" *:first-child"," *:last-child"]);
/**
* Matches any E element that contains att attribute:
* css -> E[att][att2]...
* @param {...*} var_args
*/
enfocus.core.attr_QMARK_ = (function() { 
var attr_QMARK___delegate = function (kys){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p1__2403_SHARP_){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,p1__2403_SHARP_),"]");
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
attr_QMARK_.cljs$lang$applyTo = (function (arglist__2404){
var kys = cljs.core.seq( arglist__2404 );;
return attr_QMARK___delegate.call(this, kys);
});
return attr_QMARK_;
})()
;
/**
* Matches any E element whose att attribute value equals 'val':
* css -> E[att=val][att2=val2]...
* @param {...*} var_args
*/
enfocus.core.attr_EQ_ = (function() {
var attr_EQ_ = null;
var attr_EQ___2405 = (function (){
return "";
});
var attr_EQ___2406 = (function() { 
var G__2408__delegate = function (ky,txt,forms){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,ky),"='",txt,"']",cljs.core.apply.call(null,attr_EQ_,forms));
};
var G__2408 = function (ky,txt,var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2408__delegate.call(this, ky, txt, forms);
};
G__2408.cljs$lang$maxFixedArity = 2;
G__2408.cljs$lang$applyTo = (function (arglist__2409){
var ky = cljs.core.first(arglist__2409);
var txt = cljs.core.first(cljs.core.next(arglist__2409));
var forms = cljs.core.rest(cljs.core.next(arglist__2409));
return G__2408__delegate.call(this, ky, txt, forms);
});
return G__2408;
})()
;
attr_EQ_ = function(ky,txt,var_args){
var forms = var_args;
switch(arguments.length){
case  0 :
return attr_EQ___2405.call(this);
default:
return attr_EQ___2406.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
attr_EQ_.cljs$lang$maxFixedArity = 2;
attr_EQ_.cljs$lang$applyTo = attr_EQ___2406.cljs$lang$applyTo;
return attr_EQ_;
})()
;
/**
* Matches any E element that is the n-th child of its parent:
* css -> E:nth-child(x) or E:nth-child(xn+y)
*/
enfocus.core.nth_child = (function() {
var nth_child = null;
var nth_child__2410 = (function (x){
return cljs.core.str.call(null,":nth-child(",x,")");
});
var nth_child__2411 = (function (x,y){
return cljs.core.str.call(null,":nth-child(",x,"n+",y,")");
});
nth_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_child__2410.call(this,x);
case  2 :
return nth_child__2411.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_child;
})()
;
/**
* Matches any E element that is the n-th sibling of its type:
* css -> E:nth-of-type(x) or E:nth-of-type(xn+y)
*/
enfocus.core.nth_of_type = (function() {
var nth_of_type = null;
var nth_of_type__2413 = (function (x){
return cljs.core.str.call(null,":nth-of-type(",x,")");
});
var nth_of_type__2414 = (function (x,y){
return cljs.core.str.call(null,":nth-of-type(",x,"n+",y,")");
});
nth_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_of_type__2413.call(this,x);
case  2 :
return nth_of_type__2414.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_of_type;
})()
;
/**
* Matches any E element that is the n-th child of its parent,
* counting from the last child.
* css -> E:nth-last-child(x) or E:nth-last-child(xn+y)
*/
enfocus.core.nth_last_child = (function() {
var nth_last_child = null;
var nth_last_child__2416 = (function (x){
return cljs.core.str.call(null,":nth-last-child(",x,")");
});
var nth_last_child__2417 = (function (x,y){
return cljs.core.str.call(null,":nth-last-child(",x,"n+",y,")");
});
nth_last_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_child__2416.call(this,x);
case  2 :
return nth_last_child__2417.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_child;
})()
;
/**
* Matches any E element that is the n-th sibling of its type
* counting from the last child:
* css -> E:nth-last-of-type(x) or E:nth-last-of-type(xn+y)
*/
enfocus.core.nth_last_of_type = (function() {
var nth_last_of_type = null;
var nth_last_of_type__2419 = (function (x){
return cljs.core.str.call(null,":nth-last-of-type(",x,")");
});
var nth_last_of_type__2420 = (function (x,y){
return cljs.core.str.call(null,":nth-last-of-type(",x,"n+",y,")");
});
nth_last_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_of_type__2419.call(this,x);
case  2 :
return nth_last_of_type__2420.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_of_type;
})()
;
