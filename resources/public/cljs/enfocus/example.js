goog.provide('enfocus.example');
goog.require('cljs.core');
goog.require('enfocus.core');
enfocus.example.set_cool = (function set_cool(){
return enfocus.core.content.call(null,"this is a cool test of content").call(null,enfocus.core.css_select.call(null,document,cljs.core.Vector.fromArray(["﷐'.cool",enfocus.core.attr_EQ_.call(null,"﷐'foo","true")])));
});
enfocus.example.funtimes = (function funtimes(msg){
var pnod3367__3368 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,document))?document.call(null):document);
var pnod3367__3369 = (cljs.core.truth_(false)?enfocus.core.create_hidden_dom.call(null,pnod3367__3368):pnod3367__3368);

enfocus.core.content.call(null,msg).call(null,enfocus.core.css_select.call(null,pnod3367__3369,cljs.core.Vector.fromArray(["﷐'.cool",enfocus.core.attr_EQ_.call(null,"﷐'foo","true")])));
if(cljs.core.truth_(false))
{return enfocus.core.remove_node_return_child.call(null,pnod3367__3369);
} else
{return pnod3367__3369;
}
});
enfocus.core.load_remote_dom.call(null,"templates/template1.html");
enfocus.example.snippit1 = (function snippit1(fruit,quantity){
var pnod3371__3372 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["﷐'tbody","﷐'>","﷑'first-child"]));
})))?(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["﷐'tbody","﷐'>","﷑'first-child"]));
}).call(null):(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["﷐'tbody","﷐'>","﷑'first-child"]));
}));
var pnod3371__3373 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod3371__3372):pnod3371__3372);

enfocus.core.content.call(null,fruit).call(null,enfocus.core.css_select.call(null,pnod3371__3373,cljs.core.Vector.fromArray(["﷐'tr","﷐'>","﷑'first-child"])));
enfocus.core.content.call(null,cljs.core.str.call(null,quantity)).call(null,enfocus.core.css_select.call(null,pnod3371__3373,cljs.core.Vector.fromArray(["﷐'tr","﷐'>","﷑'last-child"])));
if(cljs.core.truth_(true))
{return enfocus.core.remove_node_return_child.call(null,pnod3371__3373);
} else
{return pnod3371__3373;
}
});
enfocus.core.load_remote_dom.call(null,"/templates/template1.html");
enfocus.example.template1 = (function template1(fruit_data){
var pnod3374__3375 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
}).call(null):(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
}));
var pnod3374__3376 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod3374__3375):pnod3374__3375);

enfocus.core.content.call(null,"fruit").call(null,enfocus.core.css_select.call(null,pnod3374__3376,cljs.core.Vector.fromArray(["﷐'#heading1"])));
enfocus.core.content.call(null,"quantity").call(null,enfocus.core.css_select.call(null,pnod3374__3376,cljs.core.Vector.fromArray(["﷐'thead","﷐'tr","﷐'>","﷑'last-child"])));
enfocus.core.content.call(null,cljs.core.map.call(null,(function (p1__3370_SHARP_){
return enfocus.example.snippit1.call(null,p1__3370_SHARP_,fruit_data.call(null,p1__3370_SHARP_));
}),cljs.core.keys.call(null,fruit_data))).call(null,enfocus.core.css_select.call(null,pnod3374__3376,cljs.core.Vector.fromArray(["﷐'tbody"])));
if(cljs.core.truth_(true))
{return enfocus.core.remove_node_return_child.call(null,pnod3374__3376);
} else
{return pnod3374__3376;
}
});
enfocus.example.action1 = (function action1(){
var pnod3377__3378 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,document))?document.call(null):document);
var pnod3377__3379 = (cljs.core.truth_(false)?enfocus.core.create_hidden_dom.call(null,pnod3377__3378):pnod3377__3378);

enfocus.core.content.call(null,enfocus.example.template1.call(null,cljs.core.ObjMap.fromObject(["apple","pear"],{"apple":5,"pear":6}))).call(null,enfocus.core.css_select.call(null,pnod3377__3379,cljs.core.Vector.fromArray(["﷐'.cool",enfocus.core.attr_EQ_.call(null,"﷐'foo","false")])));
if(cljs.core.truth_(false))
{return enfocus.core.remove_node_return_child.call(null,pnod3377__3379);
} else
{return pnod3377__3379;
}
});
enfocus.core.load_remote_dom.call(null,"templates/template1.html");
enfocus.example.snippit2 = (function snippit2(fruit,quantity){
var pnod3381__3382 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
})))?(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
}).call(null):(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
}));
var pnod3381__3383 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod3381__3382):pnod3381__3382);

enfocus.core.content.call(null,fruit).call(null,enfocus.core.css_select.call(null,pnod3381__3383,cljs.core.Vector.fromArray(["tr > *:first-child"])));
enfocus.core.content.call(null,cljs.core.str.call(null,quantity)).call(null,enfocus.core.css_select.call(null,pnod3381__3383,cljs.core.Vector.fromArray(["tr > *:last-child"])));
if(cljs.core.truth_(true))
{return enfocus.core.remove_node_return_child.call(null,pnod3381__3383);
} else
{return pnod3381__3383;
}
});
enfocus.core.load_remote_dom.call(null,"/templates/template1.html");
enfocus.example.template2 = (function template2(fruit_data){
var pnod3384__3385 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
}).call(null):(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
}));
var pnod3384__3386 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod3384__3385):pnod3384__3385);

enfocus.core.content.call(null,"fruit").call(null,enfocus.core.css_select.call(null,pnod3384__3386,cljs.core.Vector.fromArray(["#heading1"])));
enfocus.core.content.call(null,"quantity").call(null,enfocus.core.css_select.call(null,pnod3384__3386,cljs.core.Vector.fromArray(["thead tr > *:last-child"])));
enfocus.core.content.call(null,cljs.core.map.call(null,(function (p1__3380_SHARP_){
return enfocus.example.snippit2.call(null,p1__3380_SHARP_,fruit_data.call(null,p1__3380_SHARP_));
}),cljs.core.keys.call(null,fruit_data))).call(null,enfocus.core.css_select.call(null,pnod3384__3386,cljs.core.Vector.fromArray(["tbody"])));
if(cljs.core.truth_(true))
{return enfocus.core.remove_node_return_child.call(null,pnod3384__3386);
} else
{return pnod3384__3386;
}
});
enfocus.example.action2 = (function action2(){
var pnod3387__3388 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,document))?document.call(null):document);
var pnod3387__3389 = (cljs.core.truth_(false)?enfocus.core.create_hidden_dom.call(null,pnod3387__3388):pnod3387__3388);

enfocus.core.content.call(null,enfocus.example.template1.call(null,cljs.core.ObjMap.fromObject(["bannan","pineapple"],{"bannan":5,"pineapple":10}))).call(null,enfocus.core.css_select.call(null,pnod3387__3389,cljs.core.Vector.fromArray([".cool[foo=false]"])));
enfocus.core.set_attr.call(null,"id","new-heading1").call(null,enfocus.core.css_select.call(null,pnod3387__3389,cljs.core.Vector.fromArray(["#heading1"])));
if(cljs.core.truth_(false))
{return enfocus.core.remove_node_return_child.call(null,pnod3387__3389);
} else
{return pnod3387__3389;
}
});
