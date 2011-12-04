goog.provide('enfocus.example');
goog.require('cljs.core');
goog.require('enfocus.core');
enfocus.example.set_cool = (function set_cool(){
return enfocus.core.content.call(null,"this is a cool test of content").call(null,enfocus.core.css_select.call(null,document,cljs.core.Vector.fromArray(["﷐'.cool",enfocus.core.attr_EQ_.call(null,"﷐'foo","true")])));
});
enfocus.example.funtimes = (function funtimes(msg){
var vec__2120__2121 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,document))?document.call(null):cljs.core.Vector.fromArray(["",document]));
var id_sym2118__2122 = cljs.core.nth.call(null,vec__2120__2121,0,null);
var pnod2119__2123 = cljs.core.nth.call(null,vec__2120__2121,1,null);
var pnod2119__2124 = (cljs.core.truth_(false)?enfocus.core.create_hidden_dom.call(null,pnod2119__2123):pnod2119__2123);

enfocus.core.content.call(null,msg).call(null,enfocus.core.css_select.call(null,id_sym2118__2122,pnod2119__2124,cljs.core.Vector.fromArray(["﷐'.cool",enfocus.core.attr_EQ_.call(null,"﷐'foo","true")])));
if(cljs.core.truth_(false))
{enfocus.core.reset_ids.call(null,id_sym2118__2122,pnod2119__2124);
return enfocus.core.remove_node_return_child.call(null,pnod2119__2124);
} else
{return pnod2119__2124;
}
});
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
var vec__2142__2143 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,document))?document.call(null):cljs.core.Vector.fromArray(["",document]));
var id_sym2140__2144 = cljs.core.nth.call(null,vec__2142__2143,0,null);
var pnod2141__2145 = cljs.core.nth.call(null,vec__2142__2143,1,null);
var pnod2141__2146 = (cljs.core.truth_(false)?enfocus.core.create_hidden_dom.call(null,pnod2141__2145):pnod2141__2145);

enfocus.core.content.call(null,enfocus.example.template1.call(null,cljs.core.ObjMap.fromObject(["apple","pear"],{"apple":5,"pear":6}))).call(null,enfocus.core.css_select.call(null,id_sym2140__2144,pnod2141__2146,cljs.core.Vector.fromArray(["﷐'.cool",enfocus.core.attr_EQ_.call(null,"﷐'foo","false")])));
if(cljs.core.truth_(false))
{enfocus.core.reset_ids.call(null,id_sym2140__2144,pnod2141__2146);
return enfocus.core.remove_node_return_child.call(null,pnod2141__2146);
} else
{return pnod2141__2146;
}
});
enfocus.core.load_remote_dom.call(null,"templates/template1.html");
enfocus.example.snippit2 = (function snippit2(fruit,quantity){
var vec__2150__2151 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
})))?(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
})]));
var id_sym2148__2152 = cljs.core.nth.call(null,vec__2150__2151,0,null);
var pnod2149__2153 = cljs.core.nth.call(null,vec__2150__2151,1,null);
var pnod2149__2154 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2149__2153):pnod2149__2153);

enfocus.core.content.call(null,fruit).call(null,enfocus.core.css_select.call(null,id_sym2148__2152,pnod2149__2154,cljs.core.Vector.fromArray(["tr > *:first-child"])));
enfocus.core.content.call(null,cljs.core.str.call(null,quantity)).call(null,enfocus.core.css_select.call(null,id_sym2148__2152,pnod2149__2154,cljs.core.Vector.fromArray(["tr > *:last-child"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2148__2152,pnod2149__2154);
return enfocus.core.remove_node_return_child.call(null,pnod2149__2154);
} else
{return pnod2149__2154;
}
});
enfocus.core.load_remote_dom.call(null,"/templates/template1.html");
enfocus.example.template2 = (function template2(fruit_data){
var vec__2157__2158 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
})]));
var id_sym2155__2159 = cljs.core.nth.call(null,vec__2157__2158,0,null);
var pnod2156__2160 = cljs.core.nth.call(null,vec__2157__2158,1,null);
var pnod2156__2161 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2156__2160):pnod2156__2160);

enfocus.core.content.call(null,"fruit").call(null,enfocus.core.css_select.call(null,id_sym2155__2159,pnod2156__2161,cljs.core.Vector.fromArray(["#heading1"])));
enfocus.core.content.call(null,"quantity").call(null,enfocus.core.css_select.call(null,id_sym2155__2159,pnod2156__2161,cljs.core.Vector.fromArray(["thead tr > *:last-child"])));
enfocus.core.content.call(null,cljs.core.map.call(null,(function (p1__2147_SHARP_){
return enfocus.example.snippit2.call(null,p1__2147_SHARP_,fruit_data.call(null,p1__2147_SHARP_));
}),cljs.core.keys.call(null,fruit_data))).call(null,enfocus.core.css_select.call(null,id_sym2155__2159,pnod2156__2161,cljs.core.Vector.fromArray(["tbody"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2155__2159,pnod2156__2161);
return enfocus.core.remove_node_return_child.call(null,pnod2156__2161);
} else
{return pnod2156__2161;
}
});
enfocus.example.action2 = (function action2(){
var vec__2164__2165 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,document))?document.call(null):cljs.core.Vector.fromArray(["",document]));
var id_sym2162__2166 = cljs.core.nth.call(null,vec__2164__2165,0,null);
var pnod2163__2167 = cljs.core.nth.call(null,vec__2164__2165,1,null);
var pnod2163__2168 = (cljs.core.truth_(false)?enfocus.core.create_hidden_dom.call(null,pnod2163__2167):pnod2163__2167);

enfocus.core.content.call(null,enfocus.example.template2.call(null,cljs.core.ObjMap.fromObject(["bannan","pineapple"],{"bannan":5,"pineapple":10}))).call(null,enfocus.core.css_select.call(null,id_sym2162__2166,pnod2163__2168,cljs.core.Vector.fromArray([".cool[foo=false]"])));
enfocus.core.set_attr.call(null,"id","new-heading1").call(null,enfocus.core.css_select.call(null,id_sym2162__2166,pnod2163__2168,cljs.core.Vector.fromArray(["#heading1"])));
if(cljs.core.truth_(false))
{enfocus.core.reset_ids.call(null,id_sym2162__2166,pnod2163__2168);
return enfocus.core.remove_node_return_child.call(null,pnod2163__2168);
} else
{return pnod2163__2168;
}
});
