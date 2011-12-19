goog.provide('enfocus.example');
goog.require('cljs.core');
goog.require('enfocus.core');
enfocus.core.load_remote_dom.call(null,"templates/template1.html");
enfocus.example.snippet1 = (function snippet1(fruit,quantity){
var vec__2425__2426 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["﷐'tbody","﷐'>","﷑'first-child"]));
})))?(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["﷐'tbody","﷐'>","﷑'first-child"]));
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["﷐'tbody","﷐'>","﷑'first-child"]));
})]));
var id_sym2423__2427 = cljs.core.nth.call(null,vec__2425__2426,0,null);
var pnod2424__2428 = cljs.core.nth.call(null,vec__2425__2426,1,null);
var pnod2424__2429 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2424__2428):pnod2424__2428);

enfocus.core.en_content.call(null,fruit).call(null,enfocus.core.css_select.call(null,id_sym2423__2427,pnod2424__2429,cljs.core.Vector.fromArray(["﷐'tr","﷐'>","﷑'first-child"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,quantity)).call(null,enfocus.core.css_select.call(null,id_sym2423__2427,pnod2424__2429,cljs.core.Vector.fromArray(["﷐'tr","﷐'>","﷑'last-child"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2423__2427,pnod2424__2429);
return enfocus.core.remove_node_return_child.call(null,pnod2424__2429);
} else
{return pnod2424__2429;
}
});
enfocus.core.load_remote_dom.call(null,"/templates/template1.html");
enfocus.example.template1 = (function template1(fruit_data){
var vec__2432__2433 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
})]));
var id_sym2430__2434 = cljs.core.nth.call(null,vec__2432__2433,0,null);
var pnod2431__2435 = cljs.core.nth.call(null,vec__2432__2433,1,null);
var pnod2431__2436 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2431__2435):pnod2431__2435);

enfocus.core.en_content.call(null,"fruit").call(null,enfocus.core.css_select.call(null,id_sym2430__2434,pnod2431__2436,cljs.core.Vector.fromArray(["﷐'#heading1"])));
enfocus.core.en_content.call(null,"quantity").call(null,enfocus.core.css_select.call(null,id_sym2430__2434,pnod2431__2436,cljs.core.Vector.fromArray(["﷐'thead","﷐'tr","﷐'>","﷑'last-child"])));
enfocus.core.en_content.call(null,cljs.core.map.call(null,(function (p1__2422_SHARP_){
return enfocus.example.snippet1.call(null,p1__2422_SHARP_,fruit_data.call(null,p1__2422_SHARP_));
}),cljs.core.keys.call(null,fruit_data))).call(null,enfocus.core.css_select.call(null,id_sym2430__2434,pnod2431__2436,cljs.core.Vector.fromArray(["﷐'tbody"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2430__2434,pnod2431__2436);
return enfocus.core.remove_node_return_child.call(null,pnod2431__2436);
} else
{return pnod2431__2436;
}
});
enfocus.core.load_remote_dom.call(null,"templates/template1.html");
enfocus.example.snippet2 = (function snippet2(fruit,quantity){
var vec__2440__2441 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
})))?(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/template1.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
})]));
var id_sym2438__2442 = cljs.core.nth.call(null,vec__2440__2441,0,null);
var pnod2439__2443 = cljs.core.nth.call(null,vec__2440__2441,1,null);
var pnod2439__2444 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2439__2443):pnod2439__2443);

enfocus.core.en_content.call(null,fruit).call(null,enfocus.core.css_select.call(null,id_sym2438__2442,pnod2439__2444,cljs.core.Vector.fromArray(["tr > *:first-child"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,quantity)).call(null,enfocus.core.css_select.call(null,id_sym2438__2442,pnod2439__2444,cljs.core.Vector.fromArray(["tr > *:last-child"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2438__2442,pnod2439__2444);
return enfocus.core.remove_node_return_child.call(null,pnod2439__2444);
} else
{return pnod2439__2444;
}
});
enfocus.core.load_remote_dom.call(null,"/templates/template1.html");
enfocus.example.template2 = (function template2(fruit_data){
var vec__2447__2448 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"/templates/template1.html");
})]));
var id_sym2445__2449 = cljs.core.nth.call(null,vec__2447__2448,0,null);
var pnod2446__2450 = cljs.core.nth.call(null,vec__2447__2448,1,null);
var pnod2446__2451 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2446__2450):pnod2446__2450);

enfocus.core.en_content.call(null,"fruit").call(null,enfocus.core.css_select.call(null,id_sym2445__2449,pnod2446__2451,cljs.core.Vector.fromArray(["#heading1"])));
enfocus.core.en_content.call(null,"quantity").call(null,enfocus.core.css_select.call(null,id_sym2445__2449,pnod2446__2451,cljs.core.Vector.fromArray(["thead tr > *:last-child"])));
enfocus.core.en_content.call(null,cljs.core.map.call(null,(function (p1__2437_SHARP_){
return enfocus.example.snippet2.call(null,p1__2437_SHARP_,fruit_data.call(null,p1__2437_SHARP_));
}),cljs.core.keys.call(null,fruit_data))).call(null,enfocus.core.css_select.call(null,id_sym2445__2449,pnod2446__2451,cljs.core.Vector.fromArray(["tbody"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2445__2449,pnod2446__2451);
return enfocus.core.remove_node_return_child.call(null,pnod2446__2451);
} else
{return pnod2446__2451;
}
});
enfocus.core.load_remote_dom.call(null,"templates/test-grid.html");
enfocus.example.success = (function success(){
var vec__2454__2455 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/test-grid.html",cljs.core.Vector.fromArray(["tbody > *:first-child > td span"]));
})))?(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/test-grid.html",cljs.core.Vector.fromArray(["tbody > *:first-child > td span"]));
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/test-grid.html",cljs.core.Vector.fromArray(["tbody > *:first-child > td span"]));
})]));
var id_sym2452__2456 = cljs.core.nth.call(null,vec__2454__2455,0,null);
var pnod2453__2457 = cljs.core.nth.call(null,vec__2454__2455,1,null);
var pnod2453__2458 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2453__2457):pnod2453__2457);

if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2452__2456,pnod2453__2458);
return enfocus.core.remove_node_return_child.call(null,pnod2453__2458);
} else
{return pnod2453__2458;
}
});
enfocus.core.load_remote_dom.call(null,"templates/test-grid.html");
enfocus.example.row = (function row(test_desc,value){
var vec__2461__2462 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/test-grid.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
})))?(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/test-grid.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_snippet.call(null,"templates/test-grid.html",cljs.core.Vector.fromArray(["tbody > *:first-child"]));
})]));
var id_sym2459__2463 = cljs.core.nth.call(null,vec__2461__2462,0,null);
var pnod2460__2464 = cljs.core.nth.call(null,vec__2461__2462,1,null);
var pnod2460__2465 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2460__2464):pnod2460__2464);

enfocus.core.en_content.call(null,test_desc).call(null,enfocus.core.css_select.call(null,id_sym2459__2463,pnod2460__2465,cljs.core.Vector.fromArray(["tr > *:first-child"])));
enfocus.core.en_content.call(null,value).call(null,enfocus.core.css_select.call(null,id_sym2459__2463,pnod2460__2465,cljs.core.Vector.fromArray(["tr > *:last-child > span"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2459__2463,pnod2460__2465);
return enfocus.core.remove_node_return_child.call(null,pnod2460__2465);
} else
{return pnod2460__2465;
}
});
enfocus.core.load_remote_dom.call(null,"templates/test-grid.html");
enfocus.example.test_cases = (function test_cases(){
var vec__2472__2473 = (cljs.core.truth_(cljs.core.fn_QMARK_.call(null,(function (){
return enfocus.core.get_cached_dom.call(null,"templates/test-grid.html");
})))?(function (){
return enfocus.core.get_cached_dom.call(null,"templates/test-grid.html");
}).call(null):cljs.core.Vector.fromArray(["",(function (){
return enfocus.core.get_cached_dom.call(null,"templates/test-grid.html");
})]));
var id_sym2470__2474 = cljs.core.nth.call(null,vec__2472__2473,0,null);
var pnod2471__2475 = cljs.core.nth.call(null,vec__2472__2473,1,null);
var pnod2471__2476 = (cljs.core.truth_(true)?enfocus.core.create_hidden_dom.call(null,pnod2471__2475):pnod2471__2475);

enfocus.core.en_content.call(null,enfocus.example.success.call(null)).call(null,enfocus.core.css_select.call(null,id_sym2470__2474,pnod2471__2476,cljs.core.Vector.fromArray(["#test3 > *:last-child"])));
enfocus.core.en_content.call(null,enfocus.example.success.call(null)).call(null,enfocus.core.css_select.call(null,id_sym2470__2474,pnod2471__2476,cljs.core.Vector.fromArray(["#test4 > *:last-child"])));
enfocus.core.en_html_content.call(null,"<span class='success'>success</span>").call(null,enfocus.core.css_select.call(null,id_sym2470__2474,pnod2471__2476,cljs.core.Vector.fromArray(["#test5 > *:last-child"])));
enfocus.core.en_set_attr.call(null,"﷐'test6","cool").call(null,enfocus.core.css_select.call(null,id_sym2470__2474,pnod2471__2476,cljs.core.Vector.fromArray(["#test6 > *:last-child"])));
enfocus.core.en_content.call(null,enfocus.example.success.call(null)).call(null,enfocus.core.css_select.call(null,id_sym2470__2474,pnod2471__2476,cljs.core.Vector.fromArray(["td[test6='cool']"])));
enfocus.core.en_remove_attr.call(null,"﷐'foo").call(null,enfocus.core.css_select.call(null,id_sym2470__2474,pnod2471__2476,cljs.core.Vector.fromArray(["#test7"])));
enfocus.core.en_content.call(null,enfocus.example.success.call(null)).call(null,enfocus.core.css_select.call(null,id_sym2470__2474,pnod2471__2476,cljs.core.Vector.fromArray(["#test7 > *:last-child"])));
enfocus.core.en_html_content.call(null,"<span class='fail'>fail</span>").call(null,enfocus.core.css_select.call(null,id_sym2470__2474,pnod2471__2476,cljs.core.Vector.fromArray(["tr[foo]"])));
enfocus.core.en_add_class.call(null,"test8").call(null,enfocus.core.css_select.call(null,id_sym2470__2474,pnod2471__2476,cljs.core.Vector.fromArray(["#test8 > *:last-child"])));
enfocus.core.en_content.call(null,enfocus.example.success.call(null)).call(null,enfocus.core.css_select.call(null,id_sym2470__2474,pnod2471__2476,cljs.core.Vector.fromArray([".test8"])));
enfocus.core.en_remove_class.call(null,"bad").call(null,enfocus.core.css_select.call(null,id_sym2470__2474,pnod2471__2476,cljs.core.Vector.fromArray(["#test9"])));
enfocus.core.en_content.call(null,enfocus.example.success.call(null)).call(null,enfocus.core.css_select.call(null,id_sym2470__2474,pnod2471__2476,cljs.core.Vector.fromArray(["#test9 > *:last-child"])));
enfocus.core.en_html_content.call(null,"<span class='fail'>fail</span>").call(null,enfocus.core.css_select.call(null,id_sym2470__2474,pnod2471__2476,cljs.core.Vector.fromArray([".bad > *:last-child"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_after.call(null,enfocus.example.success.call(null)),enfocus.core.en_remove_node.call(null)).call(null,enfocus.core.css_select.call(null,id_sym2470__2474,pnod2471__2476,cljs.core.Vector.fromArray(["#test10 td span"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_before.call(null,enfocus.example.success.call(null)),enfocus.core.en_remove_node.call(null)).call(null,enfocus.core.css_select.call(null,id_sym2470__2474,pnod2471__2476,cljs.core.Vector.fromArray(["#test11 td span"])));
enfocus.core.en_substitute.call(null,enfocus.example.success.call(null)).call(null,enfocus.core.css_select.call(null,id_sym2470__2474,pnod2471__2476,cljs.core.Vector.fromArray(["#test12 td span"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,"a:"),enfocus.core.en_append.call(null,enfocus.example.success.call(null))).call(null,enfocus.core.css_select.call(null,id_sym2470__2474,pnod2471__2476,cljs.core.Vector.fromArray(["#test13 > *:last-child"])));
enfocus.core.en_do__GT_.call(null,enfocus.core.en_content.call(null,":p"),enfocus.core.en_prepend.call(null,enfocus.example.success.call(null))).call(null,enfocus.core.css_select.call(null,id_sym2470__2474,pnod2471__2476,cljs.core.Vector.fromArray(["#test14 > *:last-child"])));
if(cljs.core.truth_(true))
{enfocus.core.reset_ids.call(null,id_sym2470__2474,pnod2471__2476);
return enfocus.core.remove_node_return_child.call(null,pnod2471__2476);
} else
{return pnod2471__2476;
}
});
enfocus.example.test_grid = (function test_grid(){
return (function (pnod2477){
enfocus.core.en_content.call(null,enfocus.example.test_cases.call(null)).call(null,enfocus.core.css_select.call(null,"",pnod2477,cljs.core.Vector.fromArray(["#test-content"])));
enfocus.core.en_add_class.call(null,"even").call(null,enfocus.core.css_select.call(null,"",pnod2477,cljs.core.Vector.fromArray(["#test-content tbody tr:nth-of-type(even)"])));
enfocus.core.en_add_event.call(null,"﷐'mouseover",(function (p1__2466_SHARP_){
return enfocus.core.en_add_class.call(null,"highlight").call(null,p1__2466_SHARP_.currentTarget);
})).call(null,enfocus.core.css_select.call(null,"",pnod2477,cljs.core.Vector.fromArray(["#test-content tbody tr"])));
enfocus.core.en_add_event.call(null,"﷐'mouseout",(function (p1__2467_SHARP_){
return enfocus.core.en_remove_class.call(null,"highlight").call(null,p1__2467_SHARP_.currentTarget);
})).call(null,enfocus.core.css_select.call(null,"",pnod2477,cljs.core.Vector.fromArray(["#test-content tbody tr"])));
enfocus.core.en_content.call(null,enfocus.example.template2.call(null,cljs.core.ObjMap.fromObject(["bannan","pineapple"],{"bannan":5,"pineapple":10}))).call(null,enfocus.core.css_select.call(null,"",pnod2477,cljs.core.Vector.fromArray(["#test-content2"])));
enfocus.core.en_set_attr.call(null,"﷐'id","new-heading1").call(null,enfocus.core.css_select.call(null,"",pnod2477,cljs.core.Vector.fromArray(["#heading1"])));
enfocus.core.en_set_attr.call(null,"﷐'id","new-heading2").call(null,enfocus.core.css_select.call(null,"",pnod2477,cljs.core.Vector.fromArray(["#heading2"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,15)).call(null,enfocus.core.css_select.call(null,"",pnod2477,cljs.core.Vector.fromArray(["#test-content2 tfoot tr > *:last-child"])));
enfocus.core.en_content.call(null,enfocus.example.template1.call(null,cljs.core.ObjMap.fromObject(["apple","pear"],{"apple":5,"pear":6}))).call(null,enfocus.core.css_select.call(null,"",pnod2477,cljs.core.Vector.fromArray(["﷐'#test-content3"])));
enfocus.core.en_content.call(null,cljs.core.str.call(null,11)).call(null,enfocus.core.css_select.call(null,"",pnod2477,cljs.core.Vector.fromArray(["﷐'#test-content3","﷐'tfoot","﷐'tr","﷐'>","﷑'last-child"])));
enfocus.core.en_set_style.call(null,"﷐'background","#00dd00","﷐'font-size","10px").call(null,enfocus.core.css_select.call(null,"",pnod2477,cljs.core.Vector.fromArray(["#test-content4"])));
enfocus.core.en_set_style.call(null,"﷐'background","#dd0000","﷐'font-size","10px").call(null,enfocus.core.css_select.call(null,"",pnod2477,cljs.core.Vector.fromArray(["#test-content5"])));
enfocus.core.en_remove_style.call(null,"﷐'background","﷐'font-size").call(null,enfocus.core.css_select.call(null,"",pnod2477,cljs.core.Vector.fromArray(["#test-content5"])));
enfocus.core.en_add_event.call(null,"﷐'mouseover",(function (p1__2468_SHARP_){
return enfocus.core.en_fade_out.call(null,500,20).call(null,p1__2468_SHARP_.currentTarget);
})).call(null,enfocus.core.css_select.call(null,"",pnod2477,cljs.core.Vector.fromArray(["#test-content6"])));
enfocus.core.en_add_event.call(null,"﷐'mouseout",(function (p1__2469_SHARP_){
return enfocus.core.en_fade_in.call(null,500,20).call(null,p1__2469_SHARP_.currentTarget);
})).call(null,enfocus.core.css_select.call(null,"",pnod2477,cljs.core.Vector.fromArray(["#test-content6"])));
enfocus.core.en_add_event.call(null,"﷐'click",(function (){
return (function (pnod2478){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_resize.call(null,2,30,500,20),enfocus.core.multi_node_proc.call(null,(function (pnod__2188__auto__){
return setTimeout.call(null,(function (){
return (function (pnod2479){
return pnod2479;
}).call(null,enfocus.core.en_resize.call(null,200,30,500,20)).call(null,pnod__2188__auto__);
}),520);
}))).call(null,enfocus.core.css_select.call(null,"",pnod2478,cljs.core.Vector.fromArray(["#sz-tst"])));
return pnod2478;
}).call(null,document);
})).call(null,enfocus.core.css_select.call(null,"",pnod2477,cljs.core.Vector.fromArray(["#click"])));
enfocus.core.en_add_event.call(null,"﷐'click",(function (){
return (function (pnod2480){
enfocus.core.en_do__GT_.call(null,enfocus.core.en_move.call(null,300,300,500,20),enfocus.core.multi_node_proc.call(null,(function (pnod__2188__auto__){
return setTimeout.call(null,(function (){
return (function (pnod2481){
return pnod2481;
}).call(null,enfocus.core.en_move.call(null,0,0,500,20)).call(null,pnod__2188__auto__);
}),520);
}))).call(null,enfocus.core.css_select.call(null,"",pnod2480,cljs.core.Vector.fromArray(["#mv-tst"])));
return pnod2480;
}).call(null,document);
})).call(null,enfocus.core.css_select.call(null,"",pnod2477,cljs.core.Vector.fromArray(["#mclick"])));
return pnod2477;
}).call(null,document);
});
enfocus.example.funtimes = (function funtimes(msg){
(function (pnod2482){
enfocus.core.en_content.call(null,msg).call(null,enfocus.core.css_select.call(null,"",pnod2482,cljs.core.Vector.fromArray(["﷐'.heading",enfocus.core.attr_EQ_.call(null,"﷐'foo","true")])));
return pnod2482;
}).call(null,document);
return setTimeout.call(null,(function check__2057__auto__(){
if(cljs.core.truth_(cljs.core.zero_QMARK_.call(null,cljs.core.deref.call(null,enfocus.core.tpl_load_cnt))))
{return enfocus.example.test_grid.call(null);
} else
{return setTimeout.call(null,(function (){
return check__2057__auto__.call(null);
}),10);
}
}),0);
});
window.onload = (function (){
return enfocus.example.funtimes.call(null,"THIS IS A TEST");
});
