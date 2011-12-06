goog.provide('enfocus.example');
goog.require('cljs.core');
goog.require('enfocus.core');
enfocus.example.set_cool = (function set_cool(){
return enfocus.core.content.call(null,"this is a cool test of content").call(null,enfocus.core.css_select.call(null,document,cljs.core.Vector.fromArray(["﷐'.cool",enfocus.core.attr_EQ_.call(null,"﷐'foo","true")])));
});
enfocus.example.funtimes = (function funtimes(msg){
var vec__5917__5918 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,document))?document.call(null):cljs.core.Vector.fromArray(["",document]));
var id_sym5915__5919 = cljs.core.nth.call(null,vec__5917__5918,0,null);
var pnod5916__5920 = cljs.core.nth.call(null,vec__5917__5918,1,null);
var pnod5916__5921 = (cljs.core.truth_(false)?enfocus.core.create_hidden_dom.call(null,pnod5916__5920):pnod5916__5920);

enfocus.core.content.call(null,msg).call(null,enfocus.core.css_select.call(null,id_sym5915__5919,pnod5916__5921,cljs.core.Vector.fromArray(["﷐'.cool",enfocus.core.attr_EQ_.call(null,"﷐'foo","true")])));
if(cljs.core.truth_(false))
{enfocus.core.reset_ids.call(null,id_sym5915__5919,pnod5916__5921);
return enfocus.core.remove_node_return_child.call(null,pnod5916__5921);
} else
{return pnod5916__5921;
}
});
enfocus.core.load_remote_dom.call(null,"templates/template1.html");
enfocus.example.snippit1 = (function snippit1(fruit,quantity){
var vec__5925__5926 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["﷐'tbody","﷐'>","﷑'first-child"]));
})))?(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["﷐'tbody","﷐'>","﷑'first-child"]));
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["﷐'tbody","﷐'>","﷑'first-child"]));
})]));
var id_sym5923__5927 = cljs.core.nth.call(null,vec__5925__5926,0,null);
var pnod5924__5928 = cljs.core.nth.call(null,vec__5925__5926,1,null);
var pnod5924__5929 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod5924__5928):pnod5924__5928);

enfocus.core.content.call(null,fruit).call(null,enfocus.core.css_select.call(null,id_sym5923__5927,pnod5924__5929,cljs.core.Vector.fromArray(["﷐'tr","﷐'>","﷑'first-child"])));
enfocus.core.content.call(null,cljs.core.str.call(null,quantity)).call(null,enfocus.core.css_select.call(null,id_sym5923__5927,pnod5924__5929,cljs.core.Vector.fromArray(["﷐'tr","﷐'>","﷑'last-child"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym5923__5927,pnod5924__5929);
return enfocus.core.remove_node_return_child.call(null,pnod5924__5929);
} else
{return pnod5924__5929;
}
});
enfocus.core.load_remote_dom.call(null,"/templates/template1.html");
enfocus.example.template1 = (function template1(fruit_data){
var vec__5932__5933 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
})]));
var id_sym5930__5934 = cljs.core.nth.call(null,vec__5932__5933,0,null);
var pnod5931__5935 = cljs.core.nth.call(null,vec__5932__5933,1,null);
var pnod5931__5936 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod5931__5935):pnod5931__5935);

enfocus.core.content.call(null,"fruit").call(null,enfocus.core.css_select.call(null,id_sym5930__5934,pnod5931__5936,cljs.core.Vector.fromArray(["﷐'#heading1"])));
enfocus.core.content.call(null,"quantity").call(null,enfocus.core.css_select.call(null,id_sym5930__5934,pnod5931__5936,cljs.core.Vector.fromArray(["﷐'thead","﷐'tr","﷐'>","﷑'last-child"])));
enfocus.core.content.call(null,cljs.core.map.call(null,(function (p1__5922_SHARP_){
return enfocus.example.snippit1.call(null,p1__5922_SHARP_,fruit_data.call(null,p1__5922_SHARP_));
}),cljs.core.keys.call(null,fruit_data))).call(null,enfocus.core.css_select.call(null,id_sym5930__5934,pnod5931__5936,cljs.core.Vector.fromArray(["﷐'tbody"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym5930__5934,pnod5931__5936);
return enfocus.core.remove_node_return_child.call(null,pnod5931__5936);
} else
{return pnod5931__5936;
}
});
enfocus.example.action1 = (function action1(){
var vec__5939__5940 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,document))?document.call(null):cljs.core.Vector.fromArray(["",document]));
var id_sym5937__5941 = cljs.core.nth.call(null,vec__5939__5940,0,null);
var pnod5938__5942 = cljs.core.nth.call(null,vec__5939__5940,1,null);
var pnod5938__5943 = (cljs.core.truth_(false)?enfocus.core.create_hidden_dom.call(null,pnod5938__5942):pnod5938__5942);

enfocus.core.content.call(null,enfocus.example.template1.call(null,cljs.core.ObjMap.fromObject(["apple","pear"],{"apple":5,"pear":6}))).call(null,enfocus.core.css_select.call(null,id_sym5937__5941,pnod5938__5943,cljs.core.Vector.fromArray(["﷐'.cool",enfocus.core.attr_EQ_.call(null,"﷐'foo","false")])));
if(cljs.core.truth_(false))
{enfocus.core.reset_ids.call(null,id_sym5937__5941,pnod5938__5943);
return enfocus.core.remove_node_return_child.call(null,pnod5938__5943);
} else
{return pnod5938__5943;
}
});
enfocus.core.load_remote_dom.call(null,"templates/template1.html");
enfocus.example.snippit2 = (function snippit2(fruit,quantity){
var vec__5947__5948 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
})))?(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_snippit.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
})]));
var id_sym5945__5949 = cljs.core.nth.call(null,vec__5947__5948,0,null);
var pnod5946__5950 = cljs.core.nth.call(null,vec__5947__5948,1,null);
var pnod5946__5951 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod5946__5950):pnod5946__5950);

enfocus.core.content.call(null,fruit).call(null,enfocus.core.css_select.call(null,id_sym5945__5949,pnod5946__5951,cljs.core.Vector.fromArray(["tr > *:first-child"])));
enfocus.core.content.call(null,cljs.core.str.call(null,quantity)).call(null,enfocus.core.css_select.call(null,id_sym5945__5949,pnod5946__5951,cljs.core.Vector.fromArray(["tr > *:last-child"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym5945__5949,pnod5946__5951);
return enfocus.core.remove_node_return_child.call(null,pnod5946__5951);
} else
{return pnod5946__5951;
}
});
enfocus.core.load_remote_dom.call(null,"/templates/template1.html");
enfocus.example.template2 = (function template2(fruit_data){
var vec__5954__5955 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
})]));
var id_sym5952__5956 = cljs.core.nth.call(null,vec__5954__5955,0,null);
var pnod5953__5957 = cljs.core.nth.call(null,vec__5954__5955,1,null);
var pnod5953__5958 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod5953__5957):pnod5953__5957);

enfocus.core.content.call(null,"fruit").call(null,enfocus.core.css_select.call(null,id_sym5952__5956,pnod5953__5958,cljs.core.Vector.fromArray(["#heading1"])));
enfocus.core.content.call(null,"quantity").call(null,enfocus.core.css_select.call(null,id_sym5952__5956,pnod5953__5958,cljs.core.Vector.fromArray(["thead tr > *:last-child"])));
enfocus.core.content.call(null,cljs.core.map.call(null,(function (p1__5944_SHARP_){
return enfocus.example.snippit2.call(null,p1__5944_SHARP_,fruit_data.call(null,p1__5944_SHARP_));
}),cljs.core.keys.call(null,fruit_data))).call(null,enfocus.core.css_select.call(null,id_sym5952__5956,pnod5953__5958,cljs.core.Vector.fromArray(["tbody"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym5952__5956,pnod5953__5958);
return enfocus.core.remove_node_return_child.call(null,pnod5953__5958);
} else
{return pnod5953__5958;
}
});
enfocus.example.action2 = (function action2(){
var vec__5961__5962 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,document))?document.call(null):cljs.core.Vector.fromArray(["",document]));
var id_sym5959__5963 = cljs.core.nth.call(null,vec__5961__5962,0,null);
var pnod5960__5964 = cljs.core.nth.call(null,vec__5961__5962,1,null);
var pnod5960__5965 = (cljs.core.truth_(false)?enfocus.core.create_hidden_dom.call(null,pnod5960__5964):pnod5960__5964);

enfocus.core.content.call(null,enfocus.example.template2.call(null,cljs.core.ObjMap.fromObject(["bannan","pineapple"],{"bannan":5,"pineapple":10}))).call(null,enfocus.core.css_select.call(null,id_sym5959__5963,pnod5960__5965,cljs.core.Vector.fromArray([".cool[foo=false]"])));
enfocus.core.set_attr.call(null,"﷐'id","new-heading1").call(null,enfocus.core.css_select.call(null,id_sym5959__5963,pnod5960__5965,cljs.core.Vector.fromArray(["#heading1"])));
enfocus.core.remove_attr.call(null,"﷐'id").call(null,enfocus.core.css_select.call(null,id_sym5959__5963,pnod5960__5965,cljs.core.Vector.fromArray(["#heading2"])));
enfocus.core.add_class.call(null,"cool").call(null,enfocus.core.css_select.call(null,id_sym5959__5963,pnod5960__5965,cljs.core.Vector.fromArray(["#new-heading1"])));
enfocus.core.remove_class.call(null,"wow").call(null,enfocus.core.css_select.call(null,id_sym5959__5963,pnod5960__5965,cljs.core.Vector.fromArray(["table"])));
enfocus.core.do__GT_.call(null,enfocus.core.content.call(null,"test"),enfocus.core.set_attr.call(null,"﷐'attr1","cool1","﷐'attr2","cool2")).call(null,enfocus.core.css_select.call(null,id_sym5959__5963,pnod5960__5965,cljs.core.Vector.fromArray([".multi[bar]"])));
if(cljs.core.truth_(false))
{enfocus.core.reset_ids.call(null,id_sym5959__5963,pnod5960__5965);
return enfocus.core.remove_node_return_child.call(null,pnod5960__5965);
} else
{return pnod5960__5965;
}
});
