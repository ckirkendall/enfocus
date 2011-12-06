goog.provide('enfocus.example');
goog.require('cljs.core');
goog.require('enfocus.core');
enfocus.example.set_cool = (function set_cool(){
return enfocus.core.content.call(null,"this is a cool test of content").call(null,enfocus.core.css_select.call(null,document,cljs.core.Vector.fromArray(["﷐'.cool",enfocus.core.attr_EQ_.call(null,"﷐'foo","true")])));
});
enfocus.example.funtimes = (function funtimes(msg){
return (function (pnod2087){
enfocus.core.content.call(null,msg).call(null,enfocus.core.css_select.call(null,pnod2087,cljs.core.Vector.fromArray(["﷐'.cool",enfocus.core.attr_EQ_.call(null,"﷐'foo","true")])));
return pnod2087;
}).call(null,document);
});
enfocus.core.load_remote_dom.call(null,"templates/template1.html");
enfocus.example.snippit1 = (function snippit1(fruit,quantity){
var vec__2091__2092 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["﷐'tbody","﷐'>","﷑'first-child"]));
})))?(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["﷐'tbody","﷐'>","﷑'first-child"]));
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["﷐'tbody","﷐'>","﷑'first-child"]));
})]));
var id_sym2089__2093 = cljs.core.nth.call(null,vec__2091__2092,0,null);
var pnod2090__2094 = cljs.core.nth.call(null,vec__2091__2092,1,null);
var pnod2090__2095 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2090__2094):pnod2090__2094);

enfocus.core.content.call(null,fruit).call(null,enfocus.core.css_select.call(null,id_sym2089__2093,pnod2090__2095,cljs.core.Vector.fromArray(["﷐'tr","﷐'>","﷑'first-child"])));
enfocus.core.content.call(null,cljs.core.str.call(null,quantity)).call(null,enfocus.core.css_select.call(null,id_sym2089__2093,pnod2090__2095,cljs.core.Vector.fromArray(["﷐'tr","﷐'>","﷑'last-child"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2089__2093,pnod2090__2095);
return enfocus.core.remove_node_return_child.call(null,pnod2090__2095);
} else
{return pnod2090__2095;
}
});
enfocus.core.load_remote_dom.call(null,"/templates/template1.html");
enfocus.example.template1 = (function template1(fruit_data){
var vec__2098__2099 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
})]));
var id_sym2096__2100 = cljs.core.nth.call(null,vec__2098__2099,0,null);
var pnod2097__2101 = cljs.core.nth.call(null,vec__2098__2099,1,null);
var pnod2097__2102 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2097__2101):pnod2097__2101);

enfocus.core.content.call(null,"fruit").call(null,enfocus.core.css_select.call(null,id_sym2096__2100,pnod2097__2102,cljs.core.Vector.fromArray(["﷐'#heading1"])));
enfocus.core.content.call(null,"quantity").call(null,enfocus.core.css_select.call(null,id_sym2096__2100,pnod2097__2102,cljs.core.Vector.fromArray(["﷐'thead","﷐'tr","﷐'>","﷑'last-child"])));
enfocus.core.content.call(null,cljs.core.map.call(null,(function (p1__2088_SHARP_){
return enfocus.example.snippit1.call(null,p1__2088_SHARP_,fruit_data.call(null,p1__2088_SHARP_));
}),cljs.core.keys.call(null,fruit_data))).call(null,enfocus.core.css_select.call(null,id_sym2096__2100,pnod2097__2102,cljs.core.Vector.fromArray(["﷐'tbody"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2096__2100,pnod2097__2102);
return enfocus.core.remove_node_return_child.call(null,pnod2097__2102);
} else
{return pnod2097__2102;
}
});
enfocus.example.action1 = (function action1(){
return (function (pnod2103){
enfocus.core.content.call(null,enfocus.example.template1.call(null,cljs.core.ObjMap.fromObject(["apple","pear"],{"apple":5,"pear":6}))).call(null,enfocus.core.css_select.call(null,pnod2103,cljs.core.Vector.fromArray(["﷐'.cool",enfocus.core.attr_EQ_.call(null,"﷐'foo","false")])));
return pnod2103;
}).call(null,document);
});
enfocus.core.load_remote_dom.call(null,"templates/template1.html");
enfocus.example.snippit2 = (function snippit2(fruit,quantity){
var vec__2107__2108 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
})))?(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
})]));
var id_sym2105__2109 = cljs.core.nth.call(null,vec__2107__2108,0,null);
var pnod2106__2110 = cljs.core.nth.call(null,vec__2107__2108,1,null);
var pnod2106__2111 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2106__2110):pnod2106__2110);

enfocus.core.content.call(null,fruit).call(null,enfocus.core.css_select.call(null,id_sym2105__2109,pnod2106__2111,cljs.core.Vector.fromArray(["tr > *:first-child"])));
enfocus.core.content.call(null,cljs.core.str.call(null,quantity)).call(null,enfocus.core.css_select.call(null,id_sym2105__2109,pnod2106__2111,cljs.core.Vector.fromArray(["tr > *:last-child"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2105__2109,pnod2106__2111);
return enfocus.core.remove_node_return_child.call(null,pnod2106__2111);
} else
{return pnod2106__2111;
}
});
enfocus.core.load_remote_dom.call(null,"/templates/template1.html");
enfocus.example.template2 = (function template2(fruit_data){
var vec__2114__2115 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
})]));
var id_sym2112__2116 = cljs.core.nth.call(null,vec__2114__2115,0,null);
var pnod2113__2117 = cljs.core.nth.call(null,vec__2114__2115,1,null);
var pnod2113__2118 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2113__2117):pnod2113__2117);

enfocus.core.content.call(null,"fruit").call(null,enfocus.core.css_select.call(null,id_sym2112__2116,pnod2113__2118,cljs.core.Vector.fromArray(["#heading1"])));
enfocus.core.content.call(null,"quantity").call(null,enfocus.core.css_select.call(null,id_sym2112__2116,pnod2113__2118,cljs.core.Vector.fromArray(["thead tr > *:last-child"])));
enfocus.core.content.call(null,cljs.core.map.call(null,(function (p1__2104_SHARP_){
return enfocus.example.snippit2.call(null,p1__2104_SHARP_,fruit_data.call(null,p1__2104_SHARP_));
}),cljs.core.keys.call(null,fruit_data))).call(null,enfocus.core.css_select.call(null,id_sym2112__2116,pnod2113__2118,cljs.core.Vector.fromArray(["tbody"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2112__2116,pnod2113__2118);
return enfocus.core.remove_node_return_child.call(null,pnod2113__2118);
} else
{return pnod2113__2118;
}
});
enfocus.example.action2 = (function action2(){
return (function (pnod2119){
enfocus.core.content.call(null,enfocus.example.template2.call(null,cljs.core.ObjMap.fromObject(["bannan","pineapple"],{"bannan":5,"pineapple":10}))).call(null,enfocus.core.css_select.call(null,pnod2119,cljs.core.Vector.fromArray([".cool[foo=false]"])));
enfocus.core.set_attr.call(null,"﷐'id","new-heading1").call(null,enfocus.core.css_select.call(null,pnod2119,cljs.core.Vector.fromArray(["#heading1"])));
enfocus.core.remove_attr.call(null,"﷐'id").call(null,enfocus.core.css_select.call(null,pnod2119,cljs.core.Vector.fromArray(["#heading2"])));
enfocus.core.add_class.call(null,"cool").call(null,enfocus.core.css_select.call(null,pnod2119,cljs.core.Vector.fromArray(["#new-heading1"])));
enfocus.core.remove_class.call(null,"wow").call(null,enfocus.core.css_select.call(null,pnod2119,cljs.core.Vector.fromArray(["table"])));
enfocus.core.do__GT_.call(null,enfocus.core.content.call(null,"test"),enfocus.core.set_attr.call(null,"﷐'attr1","cool1","﷐'attr2","cool2")).call(null,enfocus.core.css_select.call(null,pnod2119,cljs.core.Vector.fromArray([".multi[bar]"])));
return pnod2119;
}).call(null,document);
});
