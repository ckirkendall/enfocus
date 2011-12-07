goog.provide('enfocus.example');
goog.require('cljs.core');
goog.require('enfocus.core');
enfocus.core.load_remote_dom.call(null,"templates/template1.html");
enfocus.example.snippit1 = (function snippit1(fruit,quantity){
var vec__2128__2129 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["﷐'tbody","﷐'>","﷑'first-child"]));
})))?(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["﷐'tbody","﷐'>","﷑'first-child"]));
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["﷐'tbody","﷐'>","﷑'first-child"]));
})]));
var id_sym2126__2130 = cljs.core.nth.call(null,vec__2128__2129,0,null);
var pnod2127__2131 = cljs.core.nth.call(null,vec__2128__2129,1,null);
var pnod2127__2132 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2127__2131):pnod2127__2131);

enfocus.core.content.call(null,fruit).call(null,enfocus.core.css_select.call(null,id_sym2126__2130,pnod2127__2132,cljs.core.Vector.fromArray(["﷐'tr","﷐'>","﷑'first-child"])));
enfocus.core.content.call(null,cljs.core.str.call(null,quantity)).call(null,enfocus.core.css_select.call(null,id_sym2126__2130,pnod2127__2132,cljs.core.Vector.fromArray(["﷐'tr","﷐'>","﷑'last-child"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2126__2130,pnod2127__2132);
return enfocus.core.remove_node_return_child.call(null,pnod2127__2132);
} else
{return pnod2127__2132;
}
});
enfocus.core.load_remote_dom.call(null,"/templates/template1.html");
enfocus.example.template1 = (function template1(fruit_data){
var vec__2135__2136 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
})]));
var id_sym2133__2137 = cljs.core.nth.call(null,vec__2135__2136,0,null);
var pnod2134__2138 = cljs.core.nth.call(null,vec__2135__2136,1,null);
var pnod2134__2139 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2134__2138):pnod2134__2138);

enfocus.core.content.call(null,"fruit").call(null,enfocus.core.css_select.call(null,id_sym2133__2137,pnod2134__2139,cljs.core.Vector.fromArray(["﷐'#heading1"])));
enfocus.core.content.call(null,"quantity").call(null,enfocus.core.css_select.call(null,id_sym2133__2137,pnod2134__2139,cljs.core.Vector.fromArray(["﷐'thead","﷐'tr","﷐'>","﷑'last-child"])));
enfocus.core.content.call(null,cljs.core.map.call(null,(function (p1__2125_SHARP_){
return enfocus.example.snippit1.call(null,p1__2125_SHARP_,fruit_data.call(null,p1__2125_SHARP_));
}),cljs.core.keys.call(null,fruit_data))).call(null,enfocus.core.css_select.call(null,id_sym2133__2137,pnod2134__2139,cljs.core.Vector.fromArray(["﷐'tbody"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2133__2137,pnod2134__2139);
return enfocus.core.remove_node_return_child.call(null,pnod2134__2139);
} else
{return pnod2134__2139;
}
});
enfocus.example.action1 = (function action1(){
return (function (pnod2140){
enfocus.core.content.call(null,enfocus.example.template1.call(null,cljs.core.ObjMap.fromObject(["apple","pear"],{"apple":5,"pear":6}))).call(null,enfocus.core.css_select.call(null,pnod2140,cljs.core.Vector.fromArray(["﷐'.cool",enfocus.core.attr_EQ_.call(null,"﷐'foo","false")])));
return pnod2140;
}).call(null,document);
});
enfocus.core.load_remote_dom.call(null,"templates/template1.html");
enfocus.example.snippit2 = (function snippit2(fruit,quantity){
var vec__2144__2145 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
})))?(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
})]));
var id_sym2142__2146 = cljs.core.nth.call(null,vec__2144__2145,0,null);
var pnod2143__2147 = cljs.core.nth.call(null,vec__2144__2145,1,null);
var pnod2143__2148 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2143__2147):pnod2143__2147);

enfocus.core.content.call(null,fruit).call(null,enfocus.core.css_select.call(null,id_sym2142__2146,pnod2143__2148,cljs.core.Vector.fromArray(["tr > *:first-child"])));
enfocus.core.content.call(null,cljs.core.str.call(null,quantity)).call(null,enfocus.core.css_select.call(null,id_sym2142__2146,pnod2143__2148,cljs.core.Vector.fromArray(["tr > *:last-child"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2142__2146,pnod2143__2148);
return enfocus.core.remove_node_return_child.call(null,pnod2143__2148);
} else
{return pnod2143__2148;
}
});
enfocus.core.load_remote_dom.call(null,"/templates/template1.html");
enfocus.example.template2 = (function template2(fruit_data){
var vec__2151__2152 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
})]));
var id_sym2149__2153 = cljs.core.nth.call(null,vec__2151__2152,0,null);
var pnod2150__2154 = cljs.core.nth.call(null,vec__2151__2152,1,null);
var pnod2150__2155 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2150__2154):pnod2150__2154);

enfocus.core.content.call(null,"fruit").call(null,enfocus.core.css_select.call(null,id_sym2149__2153,pnod2150__2155,cljs.core.Vector.fromArray(["#heading1"])));
enfocus.core.content.call(null,"quantity").call(null,enfocus.core.css_select.call(null,id_sym2149__2153,pnod2150__2155,cljs.core.Vector.fromArray(["thead tr > *:last-child"])));
enfocus.core.content.call(null,cljs.core.map.call(null,(function (p1__2141_SHARP_){
return enfocus.example.snippit2.call(null,p1__2141_SHARP_,fruit_data.call(null,p1__2141_SHARP_));
}),cljs.core.keys.call(null,fruit_data))).call(null,enfocus.core.css_select.call(null,id_sym2149__2153,pnod2150__2155,cljs.core.Vector.fromArray(["tbody"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2149__2153,pnod2150__2155);
return enfocus.core.remove_node_return_child.call(null,pnod2150__2155);
} else
{return pnod2150__2155;
}
});
enfocus.example.action2 = (function action2(){
return (function (pnod2156){
enfocus.core.content.call(null,enfocus.example.template2.call(null,cljs.core.ObjMap.fromObject(["bannan","pineapple"],{"bannan":5,"pineapple":10}))).call(null,enfocus.core.css_select.call(null,pnod2156,cljs.core.Vector.fromArray([".cool[foo=false]"])));
enfocus.core.set_attr.call(null,"﷐'id","new-heading1").call(null,enfocus.core.css_select.call(null,pnod2156,cljs.core.Vector.fromArray(["#heading1"])));
enfocus.core.remove_attr.call(null,"﷐'id").call(null,enfocus.core.css_select.call(null,pnod2156,cljs.core.Vector.fromArray(["#heading2"])));
enfocus.core.add_class.call(null,"cool").call(null,enfocus.core.css_select.call(null,pnod2156,cljs.core.Vector.fromArray(["#new-heading1"])));
enfocus.core.remove_class.call(null,"wow").call(null,enfocus.core.css_select.call(null,pnod2156,cljs.core.Vector.fromArray(["table"])));
enfocus.core.do__GT_.call(null,enfocus.core.content.call(null,"test"),enfocus.core.set_attr.call(null,"﷐'attr1","cool1","﷐'attr2","cool2")).call(null,enfocus.core.css_select.call(null,pnod2156,cljs.core.Vector.fromArray([".multi[bar]"])));
return pnod2156;
}).call(null,document);
});
enfocus.example.funtimes = (function funtimes(msg){
(function (pnod2157){
enfocus.core.content.call(null,msg).call(null,enfocus.core.css_select.call(null,pnod2157,cljs.core.Vector.fromArray(["﷐'.cool",enfocus.core.attr_EQ_.call(null,"﷐'foo","true")])));
return pnod2157;
}).call(null,document);
return setTimeout.call(null,(function check(){
if(cljs.core.truth_(cljs.core.zero_QMARK_.call(null,cljs.core.deref.call(null,enfocus.core.tpl_load_cnt))))
{} else
{}
enfocus.example.action2.call(null);
return setTimeout.call(null,(function (){
return check.call(null);
}),100);
}),0);
});
