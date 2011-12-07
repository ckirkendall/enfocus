goog.provide('enfocus.example');
goog.require('cljs.core');
goog.require('enfocus.core');
enfocus.core.load_remote_dom.call(null,"templates/template1.html");
enfocus.example.snippit1 = (function snippit1(fruit,quantity){
var vec__2095__2096 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["﷐'tbody","﷐'>","﷑'first-child"]));
})))?(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["﷐'tbody","﷐'>","﷑'first-child"]));
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["﷐'tbody","﷐'>","﷑'first-child"]));
})]));
var id_sym2093__2097 = cljs.core.nth.call(null,vec__2095__2096,0,null);
var pnod2094__2098 = cljs.core.nth.call(null,vec__2095__2096,1,null);
var pnod2094__2099 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2094__2098):pnod2094__2098);

enfocus.core.content.call(null,fruit).call(null,enfocus.core.css_select.call(null,id_sym2093__2097,pnod2094__2099,cljs.core.Vector.fromArray(["﷐'tr","﷐'>","﷑'first-child"])));
enfocus.core.content.call(null,cljs.core.str.call(null,quantity)).call(null,enfocus.core.css_select.call(null,id_sym2093__2097,pnod2094__2099,cljs.core.Vector.fromArray(["﷐'tr","﷐'>","﷑'last-child"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2093__2097,pnod2094__2099);
return enfocus.core.remove_node_return_child.call(null,pnod2094__2099);
} else
{return pnod2094__2099;
}
});
enfocus.core.load_remote_dom.call(null,"/templates/template1.html");
enfocus.example.template1 = (function template1(fruit_data){
var vec__2102__2103 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
})]));
var id_sym2100__2104 = cljs.core.nth.call(null,vec__2102__2103,0,null);
var pnod2101__2105 = cljs.core.nth.call(null,vec__2102__2103,1,null);
var pnod2101__2106 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2101__2105):pnod2101__2105);

enfocus.core.content.call(null,"fruit").call(null,enfocus.core.css_select.call(null,id_sym2100__2104,pnod2101__2106,cljs.core.Vector.fromArray(["﷐'#heading1"])));
enfocus.core.content.call(null,"quantity").call(null,enfocus.core.css_select.call(null,id_sym2100__2104,pnod2101__2106,cljs.core.Vector.fromArray(["﷐'thead","﷐'tr","﷐'>","﷑'last-child"])));
enfocus.core.content.call(null,cljs.core.map.call(null,(function (p1__2092_SHARP_){
return enfocus.example.snippit1.call(null,p1__2092_SHARP_,fruit_data.call(null,p1__2092_SHARP_));
}),cljs.core.keys.call(null,fruit_data))).call(null,enfocus.core.css_select.call(null,id_sym2100__2104,pnod2101__2106,cljs.core.Vector.fromArray(["﷐'tbody"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2100__2104,pnod2101__2106);
return enfocus.core.remove_node_return_child.call(null,pnod2101__2106);
} else
{return pnod2101__2106;
}
});
enfocus.example.action1 = (function action1(){
return (function (pnod2107){
enfocus.core.content.call(null,enfocus.example.template1.call(null,cljs.core.ObjMap.fromObject(["apple","pear"],{"apple":5,"pear":6}))).call(null,enfocus.core.css_select.call(null,pnod2107,cljs.core.Vector.fromArray(["﷐'.cool",enfocus.core.attr_EQ_.call(null,"﷐'foo","false")])));
return pnod2107;
}).call(null,document);
});
enfocus.core.load_remote_dom.call(null,"templates/template1.html");
enfocus.example.snippit2 = (function snippit2(fruit,quantity){
var vec__2111__2112 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
})))?(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
})]));
var id_sym2109__2113 = cljs.core.nth.call(null,vec__2111__2112,0,null);
var pnod2110__2114 = cljs.core.nth.call(null,vec__2111__2112,1,null);
var pnod2110__2115 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2110__2114):pnod2110__2114);

enfocus.core.content.call(null,fruit).call(null,enfocus.core.css_select.call(null,id_sym2109__2113,pnod2110__2115,cljs.core.Vector.fromArray(["tr > *:first-child"])));
enfocus.core.content.call(null,cljs.core.str.call(null,quantity)).call(null,enfocus.core.css_select.call(null,id_sym2109__2113,pnod2110__2115,cljs.core.Vector.fromArray(["tr > *:last-child"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2109__2113,pnod2110__2115);
return enfocus.core.remove_node_return_child.call(null,pnod2110__2115);
} else
{return pnod2110__2115;
}
});
enfocus.core.load_remote_dom.call(null,"/templates/template1.html");
enfocus.example.template2 = (function template2(fruit_data){
var vec__2118__2119 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
})]));
var id_sym2116__2120 = cljs.core.nth.call(null,vec__2118__2119,0,null);
var pnod2117__2121 = cljs.core.nth.call(null,vec__2118__2119,1,null);
var pnod2117__2122 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2117__2121):pnod2117__2121);

enfocus.core.content.call(null,"fruit").call(null,enfocus.core.css_select.call(null,id_sym2116__2120,pnod2117__2122,cljs.core.Vector.fromArray(["#heading1"])));
enfocus.core.content.call(null,"quantity").call(null,enfocus.core.css_select.call(null,id_sym2116__2120,pnod2117__2122,cljs.core.Vector.fromArray(["thead tr > *:last-child"])));
enfocus.core.content.call(null,cljs.core.map.call(null,(function (p1__2108_SHARP_){
return enfocus.example.snippit2.call(null,p1__2108_SHARP_,fruit_data.call(null,p1__2108_SHARP_));
}),cljs.core.keys.call(null,fruit_data))).call(null,enfocus.core.css_select.call(null,id_sym2116__2120,pnod2117__2122,cljs.core.Vector.fromArray(["tbody"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2116__2120,pnod2117__2122);
return enfocus.core.remove_node_return_child.call(null,pnod2117__2122);
} else
{return pnod2117__2122;
}
});
enfocus.example.action2 = (function action2(){
return (function (pnod2123){
enfocus.core.content.call(null,enfocus.example.template2.call(null,cljs.core.ObjMap.fromObject(["bannan","pineapple"],{"bannan":5,"pineapple":10}))).call(null,enfocus.core.css_select.call(null,pnod2123,cljs.core.Vector.fromArray([".cool[foo=false]"])));
enfocus.core.set_attr.call(null,"﷐'id","new-heading1").call(null,enfocus.core.css_select.call(null,pnod2123,cljs.core.Vector.fromArray(["#heading1"])));
enfocus.core.remove_attr.call(null,"﷐'id").call(null,enfocus.core.css_select.call(null,pnod2123,cljs.core.Vector.fromArray(["#heading2"])));
enfocus.core.add_class.call(null,"cool").call(null,enfocus.core.css_select.call(null,pnod2123,cljs.core.Vector.fromArray(["#new-heading1"])));
enfocus.core.remove_class.call(null,"wow").call(null,enfocus.core.css_select.call(null,pnod2123,cljs.core.Vector.fromArray(["table"])));
enfocus.core.do__GT_.call(null,enfocus.core.content.call(null,"test"),enfocus.core.set_attr.call(null,"﷐'attr1","cool1","﷐'attr2","cool2")).call(null,enfocus.core.css_select.call(null,pnod2123,cljs.core.Vector.fromArray([".multi[bar]"])));
return pnod2123;
}).call(null,document);
});
enfocus.example.funtimes = (function funtimes(msg){
(function (pnod2124){
enfocus.core.content.call(null,msg).call(null,enfocus.core.css_select.call(null,pnod2124,cljs.core.Vector.fromArray(["﷐'.cool",enfocus.core.attr_EQ_.call(null,"﷐'foo","true")])));
return pnod2124;
}).call(null,document);
return setTimeout.call(null,(function check(){
if(cljs.core.truth_(cljs.core.zero_QMARK_.call(null,cljs.core.deref.call(null,enfocus.core.tpl_load_cnt))))
{return enfocus.example.action2.call(null);
} else
{return setTimeout.call(null,(function (){
return check.call(null);
}),100);
}
}),0);
});
