goog.provide('enfocus.core');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('goog.dom.query');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('clojure.string');
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
{if(cljs.core.truth_((function (){var or__3576__auto____3990 = cljs.core.instance_QMARK_.call(null,Array,nl);

if(cljs.core.truth_(or__3576__auto____3990))
{return or__3576__auto____3990;
} else
{return cljs.core.coll_QMARK_.call(null,nl);
}
})()))
{return nl;
} else
{if(cljs.core.truth_(enfocus.core.nodelist_QMARK_.call(null,nl)))
{var iter__161__auto____3995 = (function iter__3991(s__3992){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3992__3993 = s__3992;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3992__3993)))
{var x__3994 = cljs.core.first.call(null,s__3992__3993);

return cljs.core.cons.call(null,(nl[x__3994]),iter__3991.call(null,cljs.core.rest.call(null,s__3992__3993)));
} else
{return null;
}
break;
}
})));
});

return iter__161__auto____3995.call(null,cljs.core.range.call(null,0,nl.length));
} else
{return null;
}
}
}
});
enfocus.core.flatten_nodes_coll = (function flatten_nodes_coll(values){
return cljs.core.mapcat.call(null,(function (p1__3989_SHARP_){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__3989_SHARP_)))
{return cljs.core.Vector.fromArray([goog.dom.createTextNode.call(null,p1__3989_SHARP_)]);
} else
{if(cljs.core.truth_("﷐'else"))
{return enfocus.core.nodes__GT_coll.call(null,p1__3989_SHARP_);
} else
{return null;
}
}
}),values);
});
enfocus.core.create_sel_str = (function() {
var create_sel_str = null;
var create_sel_str__3997 = (function (css_sel){
return create_sel_str.call(null,"",css_sel);
});
var create_sel_str__3998 = (function (sym,css_sel){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (p1__3996_SHARP_){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,p1__3996_SHARP_)))
{return enfocus.core.css_syms.call(null,p1__3996_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,p1__3996_SHARP_)))
{return cljs.core.str.call(null," ",cljs.core.name.call(null,p1__3996_SHARP_).replace("#",cljs.core.str.call(null,"#",sym)));
} else
{if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,p1__3996_SHARP_)))
{return create_sel_str.call(null,p1__3996_SHARP_);
} else
{if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,p1__3996_SHARP_)))
{return p1__3996_SHARP_.replace("#",cljs.core.str.call(null,"#",sym));
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
return create_sel_str__3997.call(this,sym);
case  2 :
return create_sel_str__3998.call(this,sym,css_sel);
}
throw('Invalid arity: ' + arguments.length);
};
return create_sel_str;
})()
;
enfocus.core.css_select = (function() {
var css_select = null;
var css_select__4002 = (function (dom_node,css_sel){
return css_select.call(null,"",dom_node,css_sel);
});
var css_select__4003 = (function (sym,dom_node,css_sel){
var sel__4000 = clojure.string.trim.call(null,clojure.string.replace.call(null,enfocus.core.create_sel_str.call(null,sym,css_sel)," :",":"));
var ret__4001 = goog.dom.query.call(null,sel__4000,dom_node);

return ret__4001;
});
css_select = function(sym,dom_node,css_sel){
switch(arguments.length){
case  2 :
return css_select__4002.call(this,sym,dom_node);
case  3 :
return css_select__4003.call(this,sym,dom_node,css_sel);
}
throw('Invalid arity: ' + arguments.length);
};
return css_select;
})()
;
enfocus.core.tpl_load_cnt = cljs.core.atom.call(null,0);
enfocus.core.tpl_cache = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
enfocus.core.create_hidden_dom = (function create_hidden_dom(child){
var div__4005 = goog.dom.createDom.call(null,"div",enfocus.core.hide_style);

div__4005.appendChild(child);
goog.dom.appendChild.call(null,goog.dom.getDocument.call(null).body,div__4005);
return div__4005;
});
enfocus.core.remove_node_return_child = (function remove_node_return_child(div){
var child__4006 = goog.dom.getFirstElementChild.call(null,div);

goog.dom.removeNode.call(null,div);
return child__4006;
});
enfocus.core.replace_ids = (function replace_ids(text){
var re__4008 = (new RegExp("(<.*?\\sid=['\"])(.*?)(['\"].*?>)","g"));
var sym__4009 = cljs.core.str.call(null,cljs.core.name.call(null,cljs.core.gensym.call(null,"id")),"_");

return cljs.core.Vector.fromArray([cljs.core.str.call(null,sym__4009),text.replace(re__4008,(function (a,b,c,d){
return cljs.core.str.call(null,b,sym__4009,c,d);
}))]);
});
enfocus.core.reset_ids = (function reset_ids(sym,nod){
var id_nodes__4010 = enfocus.core.css_select.call(null,nod,"*[id]");
var nod_col__4011 = enfocus.core.nodes__GT_coll.call(null,id_nodes__4010);

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__4007_SHARP_){
var id__4012 = p1__4007_SHARP_.getAttribute("id");
var rid__4013 = id__4012.replace(sym,"");

return p1__4007_SHARP_.setAttribute("id",rid__4013);
}),nod_col__4011));
});
enfocus.core.load_remote_dom = (function load_remote_dom(uri){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri))))
{cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.inc);
var req__4014 = (new goog.net.XhrIo());
var callback__4021 = (function (req){
var text__4016 = req.getResponseText();
var vec__4015__4017 = enfocus.core.replace_ids.call(null,text__4016);
var sym__4018 = cljs.core.nth.call(null,vec__4015__4017,0,null);
var txt__4019 = cljs.core.nth.call(null,vec__4015__4017,1,null);
var data__4020 = goog.dom.htmlToDocumentFragment.call(null,txt__4019);

return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_cache,cljs.core.assoc,uri,cljs.core.Vector.fromArray([sym__4018,data__4020]));
});

goog.events.listen.call(null,req__4014,goog.net.EventType.COMPLETE,(function (){
callback__4021.call(null,req__4014);
return cljs.core.swap_BANG_.call(null,enfocus.core.tpl_load_cnt,cljs.core.dec);
}));
return req__4014.send(uri,"GET");
} else
{return null;
}
});
enfocus.core.get_cached_dom = (function get_cached_dom(uri){
var nod__4022 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,uri);

if(cljs.core.truth_(nod__4022))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,nod__4022),cljs.core.second.call(null,nod__4022).cloneNode(true)]);
} else
{return null;
}
});
enfocus.core.get_cached_snippit = (function get_cached_snippit(uri,sel){
var sel_str__4023 = enfocus.core.create_sel_str.call(null,sel);
var cache__4024 = cljs.core.deref.call(null,enfocus.core.tpl_cache).call(null,cljs.core.str.call(null,uri.call(null,sel_str__4023)));

if(cljs.core.truth_(cache__4024))
{return cljs.core.Vector.fromArray([cljs.core.first.call(null,cache__4024),cljs.core.second.call(null,cache__4024).cloneNode(true)]);
} else
{var vec__4025__4026 = enfocus.core.get_cached_dom.call(null,uri);
var sym__4027 = cljs.core.nth.call(null,vec__4025__4026,0,null);
var tdom__4028 = cljs.core.nth.call(null,vec__4025__4026,1,null);
var dom__4029 = enfocus.core.create_hidden_dom.call(null,tdom__4028);
var tsnip__4030 = enfocus.core.css_select.call(null,dom__4029,sel_str__4023);
var snip__4031 = (cljs.core.truth_(cljs.core.instance_QMARK_.call(null,Array,tsnip__4030))?cljs.core.first.call(null,tsnip__4030):tsnip__4030);

enfocus.core.remove_node_return_child.call(null,dom__4029);
cljs.core.assoc.call(null,cljs.core.deref.call(null,enfocus.core.tpl_cache),cljs.core.str.call(null,uri,sel_str__4023),cljs.core.Vector.fromArray([sym__4027,snip__4031]));
return cljs.core.Vector.fromArray([sym__4027,snip__4031]);
}
});
enfocus.core.multi_node_proc = (function multi_node_proc(func){
return (function (pnodes){
var pnod_col__4033 = enfocus.core.nodes__GT_coll.call(null,pnodes);

return cljs.core.doall.call(null,cljs.core.map.call(null,func,pnod_col__4033));
});
});
/**
* @param {...*} var_args
*/
enfocus.core.content = (function() { 
var content__delegate = function (values){
var fnodes__4034 = enfocus.core.flatten_nodes_coll.call(null,values);

return enfocus.core.multi_node_proc.call(null,(function (pnod){
var frag__4035 = document.createDocumentFragment();

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__4032_SHARP_){
return goog.dom.appendChild.call(null,frag__4035,p1__4032_SHARP_.cloneNode(true));
}),fnodes__4034));
goog.dom.removeChildren.call(null,pnod);
return goog.dom.appendChild.call(null,pnod,frag__4035);
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
content.cljs$lang$applyTo = (function (arglist__4036){
var values = cljs.core.seq( arglist__4036 );;
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
var at_lst__4038 = cljs.core.partition.call(null,2,values);

return enfocus.core.multi_node_proc.call(null,(function (pnod){
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p__4039){
var vec__4040__4041 = p__4039;
var a__4042 = cljs.core.nth.call(null,vec__4040__4041,0,null);
var v__4043 = cljs.core.nth.call(null,vec__4040__4041,1,null);

return pnod.setAttribute(cljs.core.name.call(null,a__4042),v__4043);
}),at_lst__4038));
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
set_attr.cljs$lang$applyTo = (function (arglist__4044){
var values = cljs.core.seq( arglist__4044 );;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__4037_SHARP_){
return pnod.removeAttribute(cljs.core.name.call(null,p1__4037_SHARP_));
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
remove_attr.cljs$lang$applyTo = (function (arglist__4045){
var values = cljs.core.seq( arglist__4045 );;
return remove_attr__delegate.call(this, values);
});
return remove_attr;
})()
;
enfocus.core.has_class = (function has_class(el,cls){
var regex__4047 = (new RegExp(cljs.core.str.call(null,"(\\s|^)",cls,"(\\s|$)")));
var cur_cls__4048 = el.className;

return cur_cls__4048.match(regex__4047);
});
/**
* @param {...*} var_args
*/
enfocus.core.add_class = (function() { 
var add_class__delegate = function (values){
return enfocus.core.multi_node_proc.call(null,(function (pnod){
var cur_cls__4050 = pnod.className;

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__4046_SHARP_){
if(cljs.core.truth_(cljs.core.not.call(null,enfocus.core.has_class.call(null,pnod,p1__4046_SHARP_))))
{return pnod.className = cljs.core.str.call(null,cur_cls__4050," ",p1__4046_SHARP_);
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
add_class.cljs$lang$applyTo = (function (arglist__4051){
var values = cljs.core.seq( arglist__4051 );;
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
var cur__4053 = pnod.className;

return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__4049_SHARP_){
if(cljs.core.truth_(enfocus.core.has_class.call(null,pnod,p1__4049_SHARP_)))
{var regex__4054 = (new RegExp(cljs.core.str.call(null,"(\\s|^)",p1__4049_SHARP_,"(\\s|$)")));

return pnod.className = cur__4053.replace(regex__4054," ");
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
remove_class.cljs$lang$applyTo = (function (arglist__4055){
var values = cljs.core.seq( arglist__4055 );;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__4052_SHARP_){
return p1__4052_SHARP_.call(null,pnod);
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
do__GT_.cljs$lang$applyTo = (function (arglist__4057){
var forms = cljs.core.seq( arglist__4057 );;
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
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (p1__4056_SHARP_){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,p1__4056_SHARP_),"]");
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
attr_QMARK_.cljs$lang$applyTo = (function (arglist__4058){
var kys = cljs.core.seq( arglist__4058 );;
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
var attr_EQ___4059 = (function (){
return "";
});
var attr_EQ___4060 = (function() { 
var G__4062__delegate = function (ky,txt,forms){
return cljs.core.str.call(null,"[",cljs.core.name.call(null,ky),"='",txt,"']",cljs.core.apply.call(null,attr_EQ_,forms));
};
var G__4062 = function (ky,txt,var_args){
var forms = null;
if (goog.isDef(var_args)) {
  forms = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__4062__delegate.call(this, ky, txt, forms);
};
G__4062.cljs$lang$maxFixedArity = 2;
G__4062.cljs$lang$applyTo = (function (arglist__4063){
var ky = cljs.core.first(arglist__4063);
var txt = cljs.core.first(cljs.core.next(arglist__4063));
var forms = cljs.core.rest(cljs.core.next(arglist__4063));
return G__4062__delegate.call(this, ky, txt, forms);
});
return G__4062;
})()
;
attr_EQ_ = function(ky,txt,var_args){
var forms = var_args;
switch(arguments.length){
case  0 :
return attr_EQ___4059.call(this);
default:
return attr_EQ___4060.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
attr_EQ_.cljs$lang$maxFixedArity = 2;
attr_EQ_.cljs$lang$applyTo = attr_EQ___4060.cljs$lang$applyTo;
return attr_EQ_;
})()
;
enfocus.core.nth_child = (function() {
var nth_child = null;
var nth_child__4064 = (function (x){
return cljs.core.str.call(null,":nth-child(",x,")");
});
var nth_child__4065 = (function (x,y){
return cljs.core.str.call(null,":nth-child(",x,"n+",y,")");
});
nth_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_child__4064.call(this,x);
case  2 :
return nth_child__4065.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_child;
})()
;
enfocus.core.nth_of_type = (function() {
var nth_of_type = null;
var nth_of_type__4067 = (function (x){
return cljs.core.str.call(null,":nth-of-type(",x,")");
});
var nth_of_type__4068 = (function (x,y){
return cljs.core.str.call(null,":nth-of-type(",x,"n+",y,")");
});
nth_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_of_type__4067.call(this,x);
case  2 :
return nth_of_type__4068.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_of_type;
})()
;
enfocus.core.nth_last_child = (function() {
var nth_last_child = null;
var nth_last_child__4070 = (function (x){
return cljs.core.str.call(null,":nth-last-child(",x,")");
});
var nth_last_child__4071 = (function (x,y){
return cljs.core.str.call(null,":nth-last-child(",x,"n+",y,")");
});
nth_last_child = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_child__4070.call(this,x);
case  2 :
return nth_last_child__4071.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_child;
})()
;
enfocus.core.nth_last_of_type = (function() {
var nth_last_of_type = null;
var nth_last_of_type__4073 = (function (x){
return cljs.core.str.call(null,":nth-last-of-type(",x,")");
});
var nth_last_of_type__4074 = (function (x,y){
return cljs.core.str.call(null,":nth-last-of-type(",x,"n+",y,")");
});
nth_last_of_type = function(x,y){
switch(arguments.length){
case  1 :
return nth_last_of_type__4073.call(this,x);
case  2 :
return nth_last_of_type__4074.call(this,x,y);
}
throw('Invalid arity: ' + arguments.length);
};
return nth_last_of_type;
})()
;
