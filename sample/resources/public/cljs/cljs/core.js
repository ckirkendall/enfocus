goog.provide('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
goog.require('goog.object');
goog.require('goog.array');
/**
* Internal - do not use!
*/
cljs.core.truth_ = (function truth_(x){
return (x != null && x !== false);
});
/**
* Internal - do not use!
*/
cljs.core.type_satisfies_ = (function type_satisfies_(p,x){
var or__3576__auto____2483 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3576__auto____2483))
{return or__3576__auto____2483;
} else
{var or__3576__auto____2484 = (p["_"]);

if(cljs.core.truth_(or__3576__auto____2484))
{return or__3576__auto____2484;
} else
{return false;
}
}
});
/**
* When compiled for a command-line target, whatever
* function *main-fn* is set to will be called with the command-line
* argv as arguments
*/
cljs.core._STAR_main_cli_fn_STAR_ = null;
cljs.core.missing_protocol = (function missing_protocol(proto,obj){
return Error.call(null,"No protocol method "+proto+" defined for type "+goog.typeOf.call(null,obj)+": "+obj);
});
/**
* Returns a javascript array, cloned from the passed in array
*/
cljs.core.aclone = (function aclone(array_like){
return Array.prototype.slice.call(array_like);
});
/**
* Creates a new javascript array.
* @param {...*} var_args
*/
cljs.core.array = (function array(var_args){
return Array.prototype.slice.call(arguments);
});
/**
* Returns the value at the index.
*/
cljs.core.aget = (function aget(array,i){
return array[i];
});
/**
* Sets the value at the index.
*/
cljs.core.aset = (function aset(array,i,val){
return (array[i] = val);
});
/**
* Returns the length of the Java array. Works on arrays of all types.
*/
cljs.core.alength = (function alength(array){
return array.length;
});
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2485 = coll;

if(cljs.core.truth_(and__3574__auto____2485))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3574__auto____2485;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3576__auto____2486 = (_count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2486))
{return or__3576__auto____2486;
} else
{var or__3576__auto____2487 = (_count["_"]);

if(cljs.core.truth_(or__3576__auto____2487))
{return or__3576__auto____2487;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2488 = coll;

if(cljs.core.truth_(and__3574__auto____2488))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3574__auto____2488;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3576__auto____2489 = (_empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2489))
{return or__3576__auto____2489;
} else
{var or__3576__auto____2490 = (_empty["_"]);

if(cljs.core.truth_(or__3576__auto____2490))
{return or__3576__auto____2490;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3574__auto____2491 = coll;

if(cljs.core.truth_(and__3574__auto____2491))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3574__auto____2491;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3576__auto____2492 = (_conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2492))
{return or__3576__auto____2492;
} else
{var or__3576__auto____2493 = (_conj["_"]);

if(cljs.core.truth_(or__3576__auto____2493))
{return or__3576__auto____2493;
} else
{throw cljs.core.missing_protocol.call(null,"ICollection.-conj",coll);
}
}
})().call(null,coll,o);
}
});
cljs.core.IIndexed = {};
cljs.core._nth = (function() {
var _nth = null;
var _nth__2500 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3574__auto____2494 = coll;

if(cljs.core.truth_(and__3574__auto____2494))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____2494;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3576__auto____2495 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2495))
{return or__3576__auto____2495;
} else
{var or__3576__auto____2496 = (_nth["_"]);

if(cljs.core.truth_(or__3576__auto____2496))
{return or__3576__auto____2496;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2501 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____2497 = coll;

if(cljs.core.truth_(and__3574__auto____2497))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____2497;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3576__auto____2498 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2498))
{return or__3576__auto____2498;
} else
{var or__3576__auto____2499 = (_nth["_"]);

if(cljs.core.truth_(or__3576__auto____2499))
{return or__3576__auto____2499;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n,not_found);
}
});
_nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return _nth__2500.call(this,coll,n);
case  3 :
return _nth__2501.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2503 = coll;

if(cljs.core.truth_(and__3574__auto____2503))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3574__auto____2503;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3576__auto____2504 = (_first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2504))
{return or__3576__auto____2504;
} else
{var or__3576__auto____2505 = (_first["_"]);

if(cljs.core.truth_(or__3576__auto____2505))
{return or__3576__auto____2505;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2506 = coll;

if(cljs.core.truth_(and__3574__auto____2506))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3574__auto____2506;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3576__auto____2507 = (_rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2507))
{return or__3576__auto____2507;
} else
{var or__3576__auto____2508 = (_rest["_"]);

if(cljs.core.truth_(or__3576__auto____2508))
{return or__3576__auto____2508;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-rest",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ILookup = {};
cljs.core._lookup = (function() {
var _lookup = null;
var _lookup__2515 = (function (o,k){
if(cljs.core.truth_((function (){var and__3574__auto____2509 = o;

if(cljs.core.truth_(and__3574__auto____2509))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____2509;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3576__auto____2510 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2510))
{return or__3576__auto____2510;
} else
{var or__3576__auto____2511 = (_lookup["_"]);

if(cljs.core.truth_(or__3576__auto____2511))
{return or__3576__auto____2511;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2516 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____2512 = o;

if(cljs.core.truth_(and__3574__auto____2512))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____2512;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3576__auto____2513 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2513))
{return or__3576__auto____2513;
} else
{var or__3576__auto____2514 = (_lookup["_"]);

if(cljs.core.truth_(or__3576__auto____2514))
{return or__3576__auto____2514;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k,not_found);
}
});
_lookup = function(o,k,not_found){
switch(arguments.length){
case  2 :
return _lookup__2515.call(this,o,k);
case  3 :
return _lookup__2516.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2518 = coll;

if(cljs.core.truth_(and__3574__auto____2518))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3574__auto____2518;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3576__auto____2519 = (_contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2519))
{return or__3576__auto____2519;
} else
{var or__3576__auto____2520 = (_contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3576__auto____2520))
{return or__3576__auto____2520;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3574__auto____2521 = coll;

if(cljs.core.truth_(and__3574__auto____2521))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3574__auto____2521;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3576__auto____2522 = (_assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2522))
{return or__3576__auto____2522;
} else
{var or__3576__auto____2523 = (_assoc["_"]);

if(cljs.core.truth_(or__3576__auto____2523))
{return or__3576__auto____2523;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2524 = coll;

if(cljs.core.truth_(and__3574__auto____2524))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3574__auto____2524;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3576__auto____2525 = (_dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2525))
{return or__3576__auto____2525;
} else
{var or__3576__auto____2526 = (_dissoc["_"]);

if(cljs.core.truth_(or__3576__auto____2526))
{return or__3576__auto____2526;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3574__auto____2527 = coll;

if(cljs.core.truth_(and__3574__auto____2527))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3574__auto____2527;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3576__auto____2528 = (_disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2528))
{return or__3576__auto____2528;
} else
{var or__3576__auto____2529 = (_disjoin["_"]);

if(cljs.core.truth_(or__3576__auto____2529))
{return or__3576__auto____2529;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2530 = coll;

if(cljs.core.truth_(and__3574__auto____2530))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3574__auto____2530;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3576__auto____2531 = (_peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2531))
{return or__3576__auto____2531;
} else
{var or__3576__auto____2532 = (_peek["_"]);

if(cljs.core.truth_(or__3576__auto____2532))
{return or__3576__auto____2532;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2533 = coll;

if(cljs.core.truth_(and__3574__auto____2533))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3574__auto____2533;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3576__auto____2534 = (_pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2534))
{return or__3576__auto____2534;
} else
{var or__3576__auto____2535 = (_pop["_"]);

if(cljs.core.truth_(or__3576__auto____2535))
{return or__3576__auto____2535;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3574__auto____2536 = coll;

if(cljs.core.truth_(and__3574__auto____2536))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3574__auto____2536;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3576__auto____2537 = (_assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2537))
{return or__3576__auto____2537;
} else
{var or__3576__auto____2538 = (_assoc_n["_"]);

if(cljs.core.truth_(or__3576__auto____2538))
{return or__3576__auto____2538;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3574__auto____2539 = o;

if(cljs.core.truth_(and__3574__auto____2539))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3574__auto____2539;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3576__auto____2540 = (_deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2540))
{return or__3576__auto____2540;
} else
{var or__3576__auto____2541 = (_deref["_"]);

if(cljs.core.truth_(or__3576__auto____2541))
{return or__3576__auto____2541;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3574__auto____2542 = o;

if(cljs.core.truth_(and__3574__auto____2542))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3574__auto____2542;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3576__auto____2543 = (_deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2543))
{return or__3576__auto____2543;
} else
{var or__3576__auto____2544 = (_deref_with_timeout["_"]);

if(cljs.core.truth_(or__3576__auto____2544))
{return or__3576__auto____2544;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3574__auto____2545 = o;

if(cljs.core.truth_(and__3574__auto____2545))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3574__auto____2545;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3576__auto____2546 = (_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2546))
{return or__3576__auto____2546;
} else
{var or__3576__auto____2547 = (_meta["_"]);

if(cljs.core.truth_(or__3576__auto____2547))
{return or__3576__auto____2547;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3574__auto____2548 = o;

if(cljs.core.truth_(and__3574__auto____2548))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3574__auto____2548;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3576__auto____2549 = (_with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2549))
{return or__3576__auto____2549;
} else
{var or__3576__auto____2550 = (_with_meta["_"]);

if(cljs.core.truth_(or__3576__auto____2550))
{return or__3576__auto____2550;
} else
{throw cljs.core.missing_protocol.call(null,"IWithMeta.-with-meta",o);
}
}
})().call(null,o,meta);
}
});
cljs.core.IReduce = {};
cljs.core._reduce = (function() {
var _reduce = null;
var _reduce__2557 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3574__auto____2551 = coll;

if(cljs.core.truth_(and__3574__auto____2551))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____2551;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3576__auto____2552 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2552))
{return or__3576__auto____2552;
} else
{var or__3576__auto____2553 = (_reduce["_"]);

if(cljs.core.truth_(or__3576__auto____2553))
{return or__3576__auto____2553;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2558 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3574__auto____2554 = coll;

if(cljs.core.truth_(and__3574__auto____2554))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____2554;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3576__auto____2555 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2555))
{return or__3576__auto____2555;
} else
{var or__3576__auto____2556 = (_reduce["_"]);

if(cljs.core.truth_(or__3576__auto____2556))
{return or__3576__auto____2556;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f,start);
}
});
_reduce = function(coll,f,start){
switch(arguments.length){
case  2 :
return _reduce__2557.call(this,coll,f);
case  3 :
return _reduce__2558.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3574__auto____2560 = o;

if(cljs.core.truth_(and__3574__auto____2560))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3574__auto____2560;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3576__auto____2561 = (_equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2561))
{return or__3576__auto____2561;
} else
{var or__3576__auto____2562 = (_equiv["_"]);

if(cljs.core.truth_(or__3576__auto____2562))
{return or__3576__auto____2562;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3574__auto____2563 = o;

if(cljs.core.truth_(and__3574__auto____2563))
{return o.cljs$core$IHash$_hash;
} else
{return and__3574__auto____2563;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3576__auto____2564 = (_hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2564))
{return or__3576__auto____2564;
} else
{var or__3576__auto____2565 = (_hash["_"]);

if(cljs.core.truth_(or__3576__auto____2565))
{return or__3576__auto____2565;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3574__auto____2566 = o;

if(cljs.core.truth_(and__3574__auto____2566))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3574__auto____2566;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3576__auto____2567 = (_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2567))
{return or__3576__auto____2567;
} else
{var or__3576__auto____2568 = (_seq["_"]);

if(cljs.core.truth_(or__3576__auto____2568))
{return or__3576__auto____2568;
} else
{throw cljs.core.missing_protocol.call(null,"ISeqable.-seq",o);
}
}
})().call(null,o);
}
});
cljs.core.ISequential = {};
cljs.core.IPrintable = {};
cljs.core._pr_seq = (function _pr_seq(o,opts){
if(cljs.core.truth_((function (){var and__3574__auto____2569 = o;

if(cljs.core.truth_(and__3574__auto____2569))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3574__auto____2569;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3576__auto____2570 = (_pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2570))
{return or__3576__auto____2570;
} else
{var or__3576__auto____2571 = (_pr_seq["_"]);

if(cljs.core.truth_(or__3576__auto____2571))
{return or__3576__auto____2571;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3574__auto____2572 = d;

if(cljs.core.truth_(and__3574__auto____2572))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3574__auto____2572;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3576__auto____2573 = (_realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3576__auto____2573))
{return or__3576__auto____2573;
} else
{var or__3576__auto____2574 = (_realized_QMARK_["_"]);

if(cljs.core.truth_(or__3576__auto____2574))
{return or__3576__auto____2574;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.identical_QMARK_ = (function identical_QMARK_(x,y){
return (x === y);
});
cljs.core._EQ_ = (function _EQ_(x,y){
return cljs.core._equiv.call(null,x,y);
});
cljs.core.nil_QMARK_ = (function nil_QMARK_(x){
return cljs.core.identical_QMARK_.call(null,x,null);
});
(cljs.core.ISet["null"] = true);
(cljs.core._disjoin["null"] = (function (_,v){
return null;
}));
(cljs.core.IEquiv["null"] = true);
(cljs.core._equiv["null"] = (function (_,o){
return cljs.core.nil_QMARK_.call(null,o);
}));
(cljs.core.ICollection["null"] = true);
(cljs.core._conj["null"] = (function (_,o){
return cljs.core.list.call(null,o);
}));
(cljs.core.ISeq["null"] = true);
(cljs.core._first["null"] = (function (_){
return null;
}));
(cljs.core._rest["null"] = (function (_){
return cljs.core.list.call(null);
}));
(cljs.core.IStack["null"] = true);
(cljs.core._peek["null"] = (function (_){
return null;
}));
(cljs.core._pop["null"] = (function (_){
return null;
}));
(cljs.core.IWithMeta["null"] = true);
(cljs.core._with_meta["null"] = (function (_,meta){
return null;
}));
(cljs.core.IMap["null"] = true);
(cljs.core._dissoc["null"] = (function (_,k){
return null;
}));
(cljs.core.IEmptyableCollection["null"] = true);
(cljs.core._empty["null"] = (function (_){
return null;
}));
(cljs.core.IIndexed["null"] = true);
(cljs.core._nth["null"] = (function() {
var G__2575 = null;
var G__2575__2576 = (function (_,n){
return null;
});
var G__2575__2577 = (function (_,n,not_found){
return not_found;
});
G__2575 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2575__2576.call(this,_,n);
case  3 :
return G__2575__2577.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2575;
})()
);
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2579 = null;
var G__2579__2580 = (function (_,f){
return f.call(null);
});
var G__2579__2581 = (function (_,f,start){
return start;
});
G__2579 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2579__2580.call(this,_,f);
case  3 :
return G__2579__2581.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2579;
})()
);
(cljs.core.IHash["null"] = true);
(cljs.core._hash["null"] = (function (o){
return 0;
}));
(cljs.core.ICounted["null"] = true);
(cljs.core._count["null"] = (function (_){
return 0;
}));
(cljs.core.IAssociative["null"] = true);
(cljs.core._assoc["null"] = (function (_,k,v){
return cljs.core.hash_map.call(null,k,v);
}));
(cljs.core.ILookup["null"] = true);
(cljs.core._lookup["null"] = (function() {
var G__2583 = null;
var G__2583__2584 = (function (o,k){
return null;
});
var G__2583__2585 = (function (o,k,not_found){
return not_found;
});
G__2583 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2583__2584.call(this,o,k);
case  3 :
return G__2583__2585.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2583;
})()
);
Date.prototype.cljs$core$IEquiv$ = true;
Date.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
return cljs.core.identical_QMARK_.call(null,o.toString,other.toString);
});
(cljs.core.IHash["number"] = true);
(cljs.core._hash["number"] = (function (o){
return o;
}));
(cljs.core.IEquiv["number"] = true);
(cljs.core._equiv["number"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
(cljs.core.IHash["function"] = true);
(cljs.core._hash["function"] = (function (o){
return goog.getUid.call(null,o);
}));
/**
* Returns a number one greater than num.
*/
cljs.core.inc = (function inc(x){
return (x + 1);
});
cljs.core.lt_ = (function lt_(x,y){
return (x < y);
});
/**
* Accepts any collection which satisfies the ICount and IIndexed protocols and
* reduces them without incurring seq initialization
*/
cljs.core.ci_reduce = (function() {
var ci_reduce = null;
var ci_reduce__2593 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2587 = cljs.core._nth.call(null,cicoll,0);
var n__2588 = 1;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2588,cljs.core._count.call(null,cicoll))))
{{
var G__2597 = f.call(null,val__2587,cljs.core._nth.call(null,cicoll,n__2588));
var G__2598 = cljs.core.inc.call(null,n__2588);
val__2587 = G__2597;
n__2588 = G__2598;
continue;
}
} else
{return val__2587;
}
break;
}
}
});
var ci_reduce__2594 = (function (cicoll,f,val){
var val__2589 = val;
var n__2590 = 0;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2590,cljs.core._count.call(null,cicoll))))
{{
var G__2599 = f.call(null,val__2589,cljs.core._nth.call(null,cicoll,n__2590));
var G__2600 = cljs.core.inc.call(null,n__2590);
val__2589 = G__2599;
n__2590 = G__2600;
continue;
}
} else
{return val__2589;
}
break;
}
});
var ci_reduce__2595 = (function (cicoll,f,val,idx){
var val__2591 = val;
var n__2592 = idx;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2592,cljs.core._count.call(null,cicoll))))
{{
var G__2601 = f.call(null,val__2591,cljs.core._nth.call(null,cicoll,n__2592));
var G__2602 = cljs.core.inc.call(null,n__2592);
val__2591 = G__2601;
n__2592 = G__2602;
continue;
}
} else
{return val__2591;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2593.call(this,cicoll,f);
case  3 :
return ci_reduce__2594.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2595.call(this,cicoll,f,val,idx);
}
throw('Invalid arity: ' + arguments.length);
};
return ci_reduce;
})()
;

/**
* @constructor
*/
cljs.core.IndexedSeq = (function (a,i){
this.a = a;
this.i = i;
})
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2610 = null;
var G__2610__2611 = (function (coll,f){
var this__2603 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__2603.a[this__2603.i]),cljs.core.inc.call(null,this__2603.i));
});
var G__2610__2612 = (function (coll,f,start){
var this__2604 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__2604.i);
});
G__2610 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2610__2611.call(this,coll,f);
case  3 :
return G__2610__2612.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2610;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2605 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__2606 = this;
return this__2606.a.length;
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2607 = this;
return (this__2607.a[this__2607.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2608 = this;
if(cljs.core.truth_(cljs.core.lt_.call(null,cljs.core.inc.call(null,this__2608.i),this__2608.a.length)))
{return (new cljs.core.IndexedSeq(this__2608.a,cljs.core.inc.call(null,this__2608.i)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2609 = this;
return this$;
});
cljs.core.prim_seq = (function prim_seq(prim,i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,prim.length)))
{return null;
} else
{return (new cljs.core.IndexedSeq(prim,i));
}
});
cljs.core.array_seq = (function array_seq(array,i){
return cljs.core.prim_seq.call(null,array,i);
});
(cljs.core.IReduce["array"] = true);
(cljs.core._reduce["array"] = (function() {
var G__2614 = null;
var G__2614__2615 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2614__2616 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2614 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2614__2615.call(this,array,f);
case  3 :
return G__2614__2616.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2614;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2618 = null;
var G__2618__2619 = (function (array,k){
return (array[k]);
});
var G__2618__2620 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2618 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2618__2619.call(this,array,k);
case  3 :
return G__2618__2620.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2618;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2622 = null;
var G__2622__2623 = (function (array,n){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2622__2624 = (function (array,n,not_found){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2622 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2622__2623.call(this,array,n);
case  3 :
return G__2622__2624.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2622;
})()
);
(cljs.core.ICounted["array"] = true);
(cljs.core._count["array"] = (function (a){
return a.length;
}));
(cljs.core.ISeqable["array"] = true);
(cljs.core._seq["array"] = (function (array){
return cljs.core.array_seq.call(null,array,0);
}));
/**
* Returns a seq on the collection. If the collection is
* empty, returns nil.  (seq nil) returns nil. seq also works on
* Strings.
*/
cljs.core.seq = (function seq(coll){
if(cljs.core.truth_(coll))
{return cljs.core._seq.call(null,coll);
} else
{return null;
}
});
/**
* Returns the first item in the collection. Calls seq on its
* argument. If coll is nil, returns nil.
*/
cljs.core.first = (function first(coll){
var temp__3726__auto____2626 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2626))
{var s__2627 = temp__3726__auto____2626;

return cljs.core._first.call(null,s__2627);
} else
{return null;
}
});
/**
* Returns a possibly empty seq of the items after the first. Calls seq on its
* argument.
*/
cljs.core.rest = (function rest(coll){
return cljs.core._rest.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns a seq of the items after the first. Calls seq on its
* argument.  If there are no more items, returns nil
*/
cljs.core.next = (function next(coll){
if(cljs.core.truth_(coll))
{return cljs.core.seq.call(null,cljs.core.rest.call(null,coll));
} else
{return null;
}
});
/**
* Same as (first (next x))
*/
cljs.core.second = (function second(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (first (first x))
*/
cljs.core.ffirst = (function ffirst(coll){
return cljs.core.first.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (next (first x))
*/
cljs.core.nfirst = (function nfirst(coll){
return cljs.core.next.call(null,cljs.core.first.call(null,coll));
});
/**
* Same as (first (next x))
*/
cljs.core.fnext = (function fnext(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,coll));
});
/**
* Same as (next (next x))
*/
cljs.core.nnext = (function nnext(coll){
return cljs.core.next.call(null,cljs.core.next.call(null,coll));
});
/**
* Return the last item in coll, in linear time
*/
cljs.core.last = (function last(s){
while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s)))
{{
var G__2628 = cljs.core.next.call(null,s);
s = G__2628;
continue;
}
} else
{return cljs.core.first.call(null,s);
}
break;
}
});
(cljs.core.ICounted["_"] = true);
(cljs.core._count["_"] = (function (x){
var s__2629 = cljs.core.seq.call(null,x);
var n__2630 = 0;

while(true){
if(cljs.core.truth_(s__2629))
{{
var G__2631 = cljs.core.next.call(null,s__2629);
var G__2632 = cljs.core.inc.call(null,n__2630);
s__2629 = G__2631;
n__2630 = G__2632;
continue;
}
} else
{return n__2630;
}
break;
}
}));
(cljs.core.IEquiv["_"] = true);
(cljs.core._equiv["_"] = (function (x,o){
return cljs.core.identical_QMARK_.call(null,x,o);
}));
/**
* Returns true if x is logical false, false otherwise.
*/
cljs.core.not = (function not(x){
if(cljs.core.truth_(x))
{return false;
} else
{return true;
}
});
/**
* conj[oin]. Returns a new collection with the xs
* 'added'. (conj nil item) returns (item).  The 'addition' may
* happen at different 'places' depending on the concrete type.
* @param {...*} var_args
*/
cljs.core.conj = (function() {
var conj = null;
var conj__2633 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2634 = (function() { 
var G__2636__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2637 = conj.call(null,coll,x);
var G__2638 = cljs.core.first.call(null,xs);
var G__2639 = cljs.core.next.call(null,xs);
coll = G__2637;
x = G__2638;
xs = G__2639;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2636 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2636__delegate.call(this, coll, x, xs);
};
G__2636.cljs$lang$maxFixedArity = 2;
G__2636.cljs$lang$applyTo = (function (arglist__2640){
var coll = cljs.core.first(arglist__2640);
var x = cljs.core.first(cljs.core.next(arglist__2640));
var xs = cljs.core.rest(cljs.core.next(arglist__2640));
return G__2636__delegate.call(this, coll, x, xs);
});
return G__2636;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2633.call(this,coll,x);
default:
return conj__2634.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2634.cljs$lang$applyTo;
return conj;
})()
;
/**
* Returns an empty collection of the same category as coll, or nil
*/
cljs.core.empty = (function empty(coll){
return cljs.core._empty.call(null,coll);
});
/**
* Returns the number of items in the collection. (count nil) returns
* 0.  Also works on strings, arrays, and Maps
*/
cljs.core.count = (function count(coll){
return cljs.core._count.call(null,coll);
});
/**
* Returns the value at the index. get returns nil if index out of
* bounds, nth throws an exception unless not-found is supplied.  nth
* also works for strings, arrays, regex Matchers and Lists, and,
* in O(n) time, for sequences.
*/
cljs.core.nth = (function() {
var nth = null;
var nth__2641 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__2642 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2641.call(this,coll,n);
case  3 :
return nth__2642.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return nth;
})()
;
/**
* Returns the value mapped to key, not-found or nil if key not present.
*/
cljs.core.get = (function() {
var get = null;
var get__2644 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2645 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2644.call(this,o,k);
case  3 :
return get__2645.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get;
})()
;
/**
* assoc[iate]. When applied to a map, returns a new map of the
* same (hashed/sorted) type, that contains the mapping of key(s) to
* val(s). When applied to a vector, returns a new vector that
* contains val at index.
* @param {...*} var_args
*/
cljs.core.assoc = (function() {
var assoc = null;
var assoc__2648 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2649 = (function() { 
var G__2651__delegate = function (coll,k,v,kvs){
while(true){
var ret__2647 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2652 = ret__2647;
var G__2653 = cljs.core.first.call(null,kvs);
var G__2654 = cljs.core.second.call(null,kvs);
var G__2655 = cljs.core.nnext.call(null,kvs);
coll = G__2652;
k = G__2653;
v = G__2654;
kvs = G__2655;
continue;
}
} else
{return ret__2647;
}
break;
}
};
var G__2651 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2651__delegate.call(this, coll, k, v, kvs);
};
G__2651.cljs$lang$maxFixedArity = 3;
G__2651.cljs$lang$applyTo = (function (arglist__2656){
var coll = cljs.core.first(arglist__2656);
var k = cljs.core.first(cljs.core.next(arglist__2656));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2656)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2656)));
return G__2651__delegate.call(this, coll, k, v, kvs);
});
return G__2651;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2648.call(this,coll,k,v);
default:
return assoc__2649.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2649.cljs$lang$applyTo;
return assoc;
})()
;
/**
* dissoc[iate]. Returns a new map of the same (hashed/sorted) type,
* that does not contain a mapping for key(s).
* @param {...*} var_args
*/
cljs.core.dissoc = (function() {
var dissoc = null;
var dissoc__2658 = (function (coll){
return coll;
});
var dissoc__2659 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2660 = (function() { 
var G__2662__delegate = function (coll,k,ks){
while(true){
var ret__2657 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2663 = ret__2657;
var G__2664 = cljs.core.first.call(null,ks);
var G__2665 = cljs.core.next.call(null,ks);
coll = G__2663;
k = G__2664;
ks = G__2665;
continue;
}
} else
{return ret__2657;
}
break;
}
};
var G__2662 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2662__delegate.call(this, coll, k, ks);
};
G__2662.cljs$lang$maxFixedArity = 2;
G__2662.cljs$lang$applyTo = (function (arglist__2666){
var coll = cljs.core.first(arglist__2666);
var k = cljs.core.first(cljs.core.next(arglist__2666));
var ks = cljs.core.rest(cljs.core.next(arglist__2666));
return G__2662__delegate.call(this, coll, k, ks);
});
return G__2662;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2658.call(this,coll);
case  2 :
return dissoc__2659.call(this,coll,k);
default:
return dissoc__2660.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2660.cljs$lang$applyTo;
return dissoc;
})()
;
/**
* Returns an object of the same type and value as obj, with
* map m as its metadata.
*/
cljs.core.with_meta = (function with_meta(o,meta){
return cljs.core._with_meta.call(null,o,meta);
});
/**
* Returns the metadata of obj, returns nil if there is no metadata.
*/
cljs.core.meta = (function meta(o){
if(cljs.core.truth_((function (){var x__107__auto____2667 = o;

if(cljs.core.truth_((function (){var and__3574__auto____2668 = x__107__auto____2667;

if(cljs.core.truth_(and__3574__auto____2668))
{return x__107__auto____2667.cljs$core$IMeta$;
} else
{return and__3574__auto____2668;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__107__auto____2667);
}
})()))
{return cljs.core._meta.call(null,o);
} else
{return null;
}
});
/**
* For a list or queue, same as first, for a vector, same as, but much
* more efficient than, last. If the collection is empty, returns nil.
*/
cljs.core.peek = (function peek(coll){
return cljs.core._peek.call(null,coll);
});
/**
* For a list or queue, returns a new list/queue without the first
* item, for a vector, returns a new vector without the last item.
* Note - not the same as next/butlast.
*/
cljs.core.pop = (function pop(coll){
return cljs.core._pop.call(null,coll);
});
/**
* disj[oin]. Returns a new set of the same (hashed/sorted) type, that
* does not contain key(s).
* @param {...*} var_args
*/
cljs.core.disj = (function() {
var disj = null;
var disj__2670 = (function (coll){
return coll;
});
var disj__2671 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2672 = (function() { 
var G__2674__delegate = function (coll,k,ks){
while(true){
var ret__2669 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2675 = ret__2669;
var G__2676 = cljs.core.first.call(null,ks);
var G__2677 = cljs.core.next.call(null,ks);
coll = G__2675;
k = G__2676;
ks = G__2677;
continue;
}
} else
{return ret__2669;
}
break;
}
};
var G__2674 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2674__delegate.call(this, coll, k, ks);
};
G__2674.cljs$lang$maxFixedArity = 2;
G__2674.cljs$lang$applyTo = (function (arglist__2678){
var coll = cljs.core.first(arglist__2678);
var k = cljs.core.first(cljs.core.next(arglist__2678));
var ks = cljs.core.rest(cljs.core.next(arglist__2678));
return G__2674__delegate.call(this, coll, k, ks);
});
return G__2674;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2670.call(this,coll);
case  2 :
return disj__2671.call(this,coll,k);
default:
return disj__2672.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2672.cljs$lang$applyTo;
return disj;
})()
;
cljs.core.hash = (function hash(o){
return cljs.core._hash.call(null,o);
});
/**
* Returns true if coll has no items - same as (not (seq coll)).
* Please use the idiom (seq x) rather than (not (empty? x))
*/
cljs.core.empty_QMARK_ = (function empty_QMARK_(coll){
return cljs.core.not.call(null,cljs.core.seq.call(null,coll));
});
/**
* Returns true if x satisfies ICollection
*/
cljs.core.coll_QMARK_ = (function coll_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__107__auto____2679 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2680 = x__107__auto____2679;

if(cljs.core.truth_(and__3574__auto____2680))
{return x__107__auto____2679.cljs$core$ICollection$;
} else
{return and__3574__auto____2680;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__107__auto____2679);
}
}
});
/**
* Returns true if x satisfies ISet
*/
cljs.core.set_QMARK_ = (function set_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__107__auto____2681 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2682 = x__107__auto____2681;

if(cljs.core.truth_(and__3574__auto____2682))
{return x__107__auto____2681.cljs$core$ISet$;
} else
{return and__3574__auto____2682;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__107__auto____2681);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__107__auto____2683 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2684 = x__107__auto____2683;

if(cljs.core.truth_(and__3574__auto____2684))
{return x__107__auto____2683.cljs$core$IAssociative$;
} else
{return and__3574__auto____2684;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__107__auto____2683);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__107__auto____2685 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2686 = x__107__auto____2685;

if(cljs.core.truth_(and__3574__auto____2686))
{return x__107__auto____2685.cljs$core$ISequential$;
} else
{return and__3574__auto____2686;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__107__auto____2685);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__107__auto____2687 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2688 = x__107__auto____2687;

if(cljs.core.truth_(and__3574__auto____2688))
{return x__107__auto____2687.cljs$core$ICounted$;
} else
{return and__3574__auto____2688;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__107__auto____2687);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__107__auto____2689 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2690 = x__107__auto____2689;

if(cljs.core.truth_(and__3574__auto____2690))
{return x__107__auto____2689.cljs$core$IMap$;
} else
{return and__3574__auto____2690;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__107__auto____2689);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__107__auto____2691 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2692 = x__107__auto____2691;

if(cljs.core.truth_(and__3574__auto____2692))
{return x__107__auto____2691.cljs$core$IVector$;
} else
{return and__3574__auto____2692;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__107__auto____2691);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2693 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2693.push(key);
}));
return keys__2693;
});
cljs.core.js_delete = (function js_delete(obj,key){
return delete obj[key];
});
cljs.core.lookup_sentinel = cljs.core.js_obj.call(null);
/**
* Returns true if x is the value false, false otherwise.
*/
cljs.core.false_QMARK_ = (function false_QMARK_(x){
return x === false;
});
/**
* Returns true if x is the value true, false otherwise.
*/
cljs.core.true_QMARK_ = (function true_QMARK_(x){
return x === true;
});
cljs.core.undefined_QMARK_ = (function undefined_QMARK_(x){
return (void 0 === x);
});
cljs.core.instance_QMARK_ = (function instance_QMARK_(t,o){
return (o instanceof t);
});
/**
* Return true if s satisfies ISeq
*/
cljs.core.seq_QMARK_ = (function seq_QMARK_(s){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,s)))
{return false;
} else
{var x__107__auto____2694 = s;

if(cljs.core.truth_((function (){var and__3574__auto____2695 = x__107__auto____2694;

if(cljs.core.truth_(and__3574__auto____2695))
{return x__107__auto____2694.cljs$core$ISeq$;
} else
{return and__3574__auto____2695;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__107__auto____2694);
}
}
});
cljs.core.boolean$ = (function boolean$(x){
if(cljs.core.truth_(x))
{return true;
} else
{return false;
}
});
cljs.core.string_QMARK_ = (function string_QMARK_(x){
var and__3574__auto____2696 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2696))
{return cljs.core.not.call(null,(function (){var or__3576__auto____2697 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3576__auto____2697))
{return or__3576__auto____2697;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3574__auto____2696;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3574__auto____2698 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2698))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3574__auto____2698;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3574__auto____2699 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2699))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3574__auto____2699;
}
});
cljs.core.number_QMARK_ = (function number_QMARK_(n){
return goog.isNumber.call(null,n);
});
cljs.core.fn_QMARK_ = (function fn_QMARK_(f){
return goog.isFunction.call(null,f);
});
/**
* Returns true if n is an integer.  Warning: returns true on underflow condition.
*/
cljs.core.integer_QMARK_ = (function integer_QMARK_(n){
var and__3574__auto____2700 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____2700))
{return (n == n.toFixed());
} else
{return and__3574__auto____2700;
}
});
/**
* Returns true if key is present in the given collection, otherwise
* returns false.  Note that for numerically indexed collections like
* vectors and arrays, this tests if the numeric key is within the
* range of indexes. 'contains?' operates constant or logarithmic time;
* it will not perform a linear search for a value.  See also 'some'.
*/
cljs.core.contains_QMARK_ = (function contains_QMARK_(coll,v){
if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,cljs.core._lookup.call(null,coll,v,cljs.core.lookup_sentinel),cljs.core.lookup_sentinel)))
{return false;
} else
{return true;
}
});
/**
* Returns the map entry for key, or nil if key not present.
*/
cljs.core.find = (function find(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2701 = coll;

if(cljs.core.truth_(and__3574__auto____2701))
{var and__3574__auto____2702 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3574__auto____2702))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3574__auto____2702;
}
} else
{return and__3574__auto____2701;
}
})()))
{return cljs.core.Vector.fromArray([k,cljs.core._lookup.call(null,coll,k)]);
} else
{return null;
}
});
/**
* Returns true if no two of the arguments are =
* @param {...*} var_args
*/
cljs.core.distinct_QMARK_ = (function() {
var distinct_QMARK_ = null;
var distinct_QMARK___2707 = (function (x){
return true;
});
var distinct_QMARK___2708 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2709 = (function() { 
var G__2711__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2703 = cljs.core.set([y,x]);
var xs__2704 = more;

while(true){
var x__2705 = cljs.core.first.call(null,xs__2704);
var etc__2706 = cljs.core.next.call(null,xs__2704);

if(cljs.core.truth_(xs__2704))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2703,x__2705)))
{return false;
} else
{{
var G__2712 = cljs.core.conj.call(null,s__2703,x__2705);
var G__2713 = etc__2706;
s__2703 = G__2712;
xs__2704 = G__2713;
continue;
}
}
} else
{return true;
}
break;
}
} else
{return false;
}
};
var G__2711 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2711__delegate.call(this, x, y, more);
};
G__2711.cljs$lang$maxFixedArity = 2;
G__2711.cljs$lang$applyTo = (function (arglist__2714){
var x = cljs.core.first(arglist__2714);
var y = cljs.core.first(cljs.core.next(arglist__2714));
var more = cljs.core.rest(cljs.core.next(arglist__2714));
return G__2711__delegate.call(this, x, y, more);
});
return G__2711;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2707.call(this,x);
case  2 :
return distinct_QMARK___2708.call(this,x,y);
default:
return distinct_QMARK___2709.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2709.cljs$lang$applyTo;
return distinct_QMARK_;
})()
;
/**
* Comparator. Returns a negative number, zero, or a positive number
* when x is logically 'less than', 'equal to', or 'greater than'
* y. Uses google.array.defaultCompare.
*/
cljs.core.compare = (function compare(x,y){
return goog.array.defaultCompare.call(null,x,y);
});
/**
* Given a fn that might be boolean valued or a comparator,
* return a fn that is a comparator.
*/
cljs.core.fn__GT_comparator = (function fn__GT_comparator(f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,f,cljs.core.compare)))
{return cljs.core.compare;
} else
{return (function (x,y){
var r__2715 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2715)))
{return r__2715;
} else
{if(cljs.core.truth_(r__2715))
{return -1;
} else
{if(cljs.core.truth_(f.call(null,y,x)))
{return 1;
} else
{return 0;
}
}
}
});
}
});
/**
* Returns a sorted sequence of the items in coll. Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort = (function() {
var sort = null;
var sort__2717 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2718 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2716 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2716,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2716);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2717.call(this,comp);
case  2 :
return sort__2718.call(this,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort;
})()
;
/**
* Returns a sorted sequence of the items in coll, where the sort
* order is determined by comparing (keyfn item).  Comp can be
* boolean-valued comparison funcion, or a -/0/+ valued comparator.
* Comp defaults to compare.
*/
cljs.core.sort_by = (function() {
var sort_by = null;
var sort_by__2720 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2721 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2720.call(this,keyfn,comp);
case  3 :
return sort_by__2721.call(this,keyfn,comp,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return sort_by;
})()
;
/**
* f should be a function of 2 arguments. If val is not supplied,
* returns the result of applying f to the first 2 items in coll, then
* applying f to that result and the 3rd item, etc. If coll contains no
* items, f must accept no arguments as well, and reduce returns the
* result of calling f with no arguments.  If coll has only 1 item, it
* is returned and f is not called.  If val is supplied, returns the
* result of applying f to val and the first item in coll, then
* applying f to that result and the 2nd item, etc. If coll contains no
* items, returns val and f is not called.
*/
cljs.core.reduce = (function() {
var reduce = null;
var reduce__2723 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2724 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2723.call(this,f,val);
case  3 :
return reduce__2724.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2730 = (function (f,coll){
var temp__3723__auto____2726 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____2726))
{var s__2727 = temp__3723__auto____2726;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2727),cljs.core.next.call(null,s__2727));
} else
{return f.call(null);
}
});
var seq_reduce__2731 = (function (f,val,coll){
var val__2728 = val;
var coll__2729 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2729))
{{
var G__2733 = f.call(null,val__2728,cljs.core.first.call(null,coll__2729));
var G__2734 = cljs.core.next.call(null,coll__2729);
val__2728 = G__2733;
coll__2729 = G__2734;
continue;
}
} else
{return val__2728;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2730.call(this,f,val);
case  3 :
return seq_reduce__2731.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2735 = null;
var G__2735__2736 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2735__2737 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2735 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2735__2736.call(this,coll,f);
case  3 :
return G__2735__2737.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2735;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2739 = (function (){
return 0;
});
var _PLUS___2740 = (function (x){
return x;
});
var _PLUS___2741 = (function (x,y){
return (x + y);
});
var _PLUS___2742 = (function() { 
var G__2744__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2744 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2744__delegate.call(this, x, y, more);
};
G__2744.cljs$lang$maxFixedArity = 2;
G__2744.cljs$lang$applyTo = (function (arglist__2745){
var x = cljs.core.first(arglist__2745);
var y = cljs.core.first(cljs.core.next(arglist__2745));
var more = cljs.core.rest(cljs.core.next(arglist__2745));
return G__2744__delegate.call(this, x, y, more);
});
return G__2744;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2739.call(this);
case  1 :
return _PLUS___2740.call(this,x);
case  2 :
return _PLUS___2741.call(this,x,y);
default:
return _PLUS___2742.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2742.cljs$lang$applyTo;
return _PLUS_;
})()
;
/**
* If no ys are supplied, returns the negation of x, else subtracts
* the ys from x and returns the result.
* @param {...*} var_args
*/
cljs.core._ = (function() {
var _ = null;
var ___2746 = (function (x){
return (- x);
});
var ___2747 = (function (x,y){
return (x - y);
});
var ___2748 = (function() { 
var G__2750__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2750 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2750__delegate.call(this, x, y, more);
};
G__2750.cljs$lang$maxFixedArity = 2;
G__2750.cljs$lang$applyTo = (function (arglist__2751){
var x = cljs.core.first(arglist__2751);
var y = cljs.core.first(cljs.core.next(arglist__2751));
var more = cljs.core.rest(cljs.core.next(arglist__2751));
return G__2750__delegate.call(this, x, y, more);
});
return G__2750;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2746.call(this,x);
case  2 :
return ___2747.call(this,x,y);
default:
return ___2748.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2748.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2752 = (function (){
return 1;
});
var _STAR___2753 = (function (x){
return x;
});
var _STAR___2754 = (function (x,y){
return (x * y);
});
var _STAR___2755 = (function() { 
var G__2757__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2757 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2757__delegate.call(this, x, y, more);
};
G__2757.cljs$lang$maxFixedArity = 2;
G__2757.cljs$lang$applyTo = (function (arglist__2758){
var x = cljs.core.first(arglist__2758);
var y = cljs.core.first(cljs.core.next(arglist__2758));
var more = cljs.core.rest(cljs.core.next(arglist__2758));
return G__2757__delegate.call(this, x, y, more);
});
return G__2757;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2752.call(this);
case  1 :
return _STAR___2753.call(this,x);
case  2 :
return _STAR___2754.call(this,x,y);
default:
return _STAR___2755.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2755.cljs$lang$applyTo;
return _STAR_;
})()
;
/**
* If no denominators are supplied, returns 1/numerator,
* else returns numerator divided by all of the denominators.
* @param {...*} var_args
*/
cljs.core._SLASH_ = (function() {
var _SLASH_ = null;
var _SLASH___2759 = (function (x){
return (1 / x);
});
var _SLASH___2760 = (function (x,y){
return (x / y);
});
var _SLASH___2761 = (function() { 
var G__2763__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2763 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2763__delegate.call(this, x, y, more);
};
G__2763.cljs$lang$maxFixedArity = 2;
G__2763.cljs$lang$applyTo = (function (arglist__2764){
var x = cljs.core.first(arglist__2764);
var y = cljs.core.first(cljs.core.next(arglist__2764));
var more = cljs.core.rest(cljs.core.next(arglist__2764));
return G__2763__delegate.call(this, x, y, more);
});
return G__2763;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2759.call(this,x);
case  2 :
return _SLASH___2760.call(this,x,y);
default:
return _SLASH___2761.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2761.cljs$lang$applyTo;
return _SLASH_;
})()
;
/**
* Returns non-nil if nums are in monotonically increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT_ = (function() {
var _LT_ = null;
var _LT___2765 = (function (x){
return true;
});
var _LT___2766 = (function (x,y){
return (x < y);
});
var _LT___2767 = (function() { 
var G__2769__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2770 = y;
var G__2771 = cljs.core.first.call(null,more);
var G__2772 = cljs.core.next.call(null,more);
x = G__2770;
y = G__2771;
more = G__2772;
continue;
}
} else
{return _LT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2769 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2769__delegate.call(this, x, y, more);
};
G__2769.cljs$lang$maxFixedArity = 2;
G__2769.cljs$lang$applyTo = (function (arglist__2773){
var x = cljs.core.first(arglist__2773);
var y = cljs.core.first(cljs.core.next(arglist__2773));
var more = cljs.core.rest(cljs.core.next(arglist__2773));
return G__2769__delegate.call(this, x, y, more);
});
return G__2769;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2765.call(this,x);
case  2 :
return _LT___2766.call(this,x,y);
default:
return _LT___2767.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2767.cljs$lang$applyTo;
return _LT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._LT__EQ_ = (function() {
var _LT__EQ_ = null;
var _LT__EQ___2774 = (function (x){
return true;
});
var _LT__EQ___2775 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2776 = (function() { 
var G__2778__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2779 = y;
var G__2780 = cljs.core.first.call(null,more);
var G__2781 = cljs.core.next.call(null,more);
x = G__2779;
y = G__2780;
more = G__2781;
continue;
}
} else
{return _LT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2778 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2778__delegate.call(this, x, y, more);
};
G__2778.cljs$lang$maxFixedArity = 2;
G__2778.cljs$lang$applyTo = (function (arglist__2782){
var x = cljs.core.first(arglist__2782);
var y = cljs.core.first(cljs.core.next(arglist__2782));
var more = cljs.core.rest(cljs.core.next(arglist__2782));
return G__2778__delegate.call(this, x, y, more);
});
return G__2778;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2774.call(this,x);
case  2 :
return _LT__EQ___2775.call(this,x,y);
default:
return _LT__EQ___2776.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2776.cljs$lang$applyTo;
return _LT__EQ_;
})()
;
/**
* Returns non-nil if nums are in monotonically decreasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT_ = (function() {
var _GT_ = null;
var _GT___2783 = (function (x){
return true;
});
var _GT___2784 = (function (x,y){
return (x > y);
});
var _GT___2785 = (function() { 
var G__2787__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2788 = y;
var G__2789 = cljs.core.first.call(null,more);
var G__2790 = cljs.core.next.call(null,more);
x = G__2788;
y = G__2789;
more = G__2790;
continue;
}
} else
{return _GT_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2787 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2787__delegate.call(this, x, y, more);
};
G__2787.cljs$lang$maxFixedArity = 2;
G__2787.cljs$lang$applyTo = (function (arglist__2791){
var x = cljs.core.first(arglist__2791);
var y = cljs.core.first(cljs.core.next(arglist__2791));
var more = cljs.core.rest(cljs.core.next(arglist__2791));
return G__2787__delegate.call(this, x, y, more);
});
return G__2787;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2783.call(this,x);
case  2 :
return _GT___2784.call(this,x,y);
default:
return _GT___2785.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2785.cljs$lang$applyTo;
return _GT_;
})()
;
/**
* Returns non-nil if nums are in monotonically non-increasing order,
* otherwise false.
* @param {...*} var_args
*/
cljs.core._GT__EQ_ = (function() {
var _GT__EQ_ = null;
var _GT__EQ___2792 = (function (x){
return true;
});
var _GT__EQ___2793 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2794 = (function() { 
var G__2796__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2797 = y;
var G__2798 = cljs.core.first.call(null,more);
var G__2799 = cljs.core.next.call(null,more);
x = G__2797;
y = G__2798;
more = G__2799;
continue;
}
} else
{return _GT__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2796 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2796__delegate.call(this, x, y, more);
};
G__2796.cljs$lang$maxFixedArity = 2;
G__2796.cljs$lang$applyTo = (function (arglist__2800){
var x = cljs.core.first(arglist__2800);
var y = cljs.core.first(cljs.core.next(arglist__2800));
var more = cljs.core.rest(cljs.core.next(arglist__2800));
return G__2796__delegate.call(this, x, y, more);
});
return G__2796;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2792.call(this,x);
case  2 :
return _GT__EQ___2793.call(this,x,y);
default:
return _GT__EQ___2794.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2794.cljs$lang$applyTo;
return _GT__EQ_;
})()
;
/**
* Returns a number one less than num.
*/
cljs.core.dec = (function dec(x){
return cljs.core._.call(null,x,1);
});
/**
* Returns the greatest of the nums.
* @param {...*} var_args
*/
cljs.core.max = (function() {
var max = null;
var max__2801 = (function (x){
return x;
});
var max__2802 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2803 = (function() { 
var G__2805__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2805 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2805__delegate.call(this, x, y, more);
};
G__2805.cljs$lang$maxFixedArity = 2;
G__2805.cljs$lang$applyTo = (function (arglist__2806){
var x = cljs.core.first(arglist__2806);
var y = cljs.core.first(cljs.core.next(arglist__2806));
var more = cljs.core.rest(cljs.core.next(arglist__2806));
return G__2805__delegate.call(this, x, y, more);
});
return G__2805;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2801.call(this,x);
case  2 :
return max__2802.call(this,x,y);
default:
return max__2803.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2803.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2807 = (function (x){
return x;
});
var min__2808 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2809 = (function() { 
var G__2811__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2811 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2811__delegate.call(this, x, y, more);
};
G__2811.cljs$lang$maxFixedArity = 2;
G__2811.cljs$lang$applyTo = (function (arglist__2812){
var x = cljs.core.first(arglist__2812);
var y = cljs.core.first(cljs.core.next(arglist__2812));
var more = cljs.core.rest(cljs.core.next(arglist__2812));
return G__2811__delegate.call(this, x, y, more);
});
return G__2811;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2807.call(this,x);
case  2 :
return min__2808.call(this,x,y);
default:
return min__2809.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2809.cljs$lang$applyTo;
return min;
})()
;
cljs.core.fix = (function fix(q){
if(cljs.core.truth_(cljs.core._GT__EQ_.call(null,q,0)))
{return Math.floor.call(null,q);
} else
{return Math.ceil.call(null,q);
}
});
/**
* Modulus of num and div. Truncates toward negative infinity.
*/
cljs.core.mod = (function mod(n,d){
return (n % d);
});
/**
* quot[ient] of dividing numerator by denominator.
*/
cljs.core.quot = (function quot(n,d){
var rem__2813 = cljs.core.mod.call(null,n,d);

return cljs.core.fix.call(null,((n - rem__2813) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2814 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2814));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2815 = (function (){
return Math.random.call(null);
});
var rand__2816 = (function (n){
return cljs.core._STAR_.call(null,n,rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2815.call(this);
case  1 :
return rand__2816.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return cljs.core.fix.call(null,cljs.core.rand.call(null,n));
});
/**
* Bitwise exclusive or
*/
cljs.core.bit_xor = (function bit_xor(x,y){
return (x ^ y);
});
/**
* Bitwise and
*/
cljs.core.bit_and = (function bit_and(x,y){
return (x & y);
});
/**
* Bitwise or
*/
cljs.core.bit_or = (function bit_or(x,y){
return (x | y);
});
/**
* Bitwise and
*/
cljs.core.bit_and_not = (function bit_and_not(x,y){
return (x & ~y);
});
/**
* Clear bit at index n
*/
cljs.core.bit_clear = (function bit_clear(x,n){
return (x & ~(1 << n));
});
/**
* Flip bit at index n
*/
cljs.core.bit_flip = (function bit_flip(x,n){
return (x ^ (1 << n));
});
/**
* Bitwise complement
*/
cljs.core.bit_not = (function bit_not(x){
return (~x);
});
/**
* Set bit at index n
*/
cljs.core.bit_set = (function bit_set(x,n){
return (x | (1 << n));
});
/**
* Test bit at index n
*/
cljs.core.bit_test = (function bit_test(x,n){
return ((x & (1 << n)) != 0);
});
/**
* Bitwise shift left
*/
cljs.core.bit_shift_left = (function bit_shift_left(x,n){
return (x << n);
});
/**
* Bitwise shift right
*/
cljs.core.bit_shift_right = (function bit_shift_right(x,n){
return (x >> n);
});
/**
* Returns non-nil if nums all have the equivalent
* value (type-independent), otherwise false
* @param {...*} var_args
*/
cljs.core._EQ__EQ_ = (function() {
var _EQ__EQ_ = null;
var _EQ__EQ___2818 = (function (x){
return true;
});
var _EQ__EQ___2819 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2820 = (function() { 
var G__2822__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2823 = y;
var G__2824 = cljs.core.first.call(null,more);
var G__2825 = cljs.core.next.call(null,more);
x = G__2823;
y = G__2824;
more = G__2825;
continue;
}
} else
{return _EQ__EQ_.call(null,y,cljs.core.first.call(null,more));
}
} else
{return false;
}
break;
}
};
var G__2822 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2822__delegate.call(this, x, y, more);
};
G__2822.cljs$lang$maxFixedArity = 2;
G__2822.cljs$lang$applyTo = (function (arglist__2826){
var x = cljs.core.first(arglist__2826);
var y = cljs.core.first(cljs.core.next(arglist__2826));
var more = cljs.core.rest(cljs.core.next(arglist__2826));
return G__2822__delegate.call(this, x, y, more);
});
return G__2822;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2818.call(this,x);
case  2 :
return _EQ__EQ___2819.call(this,x,y);
default:
return _EQ__EQ___2820.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2820.cljs$lang$applyTo;
return _EQ__EQ_;
})()
;
/**
* Returns true if num is greater than zero, else false
*/
cljs.core.pos_QMARK_ = (function pos_QMARK_(n){
return cljs.core._LT_.call(null,0,n);
});
cljs.core.zero_QMARK_ = (function zero_QMARK_(n){
return cljs.core._EQ__EQ_.call(null,0,n);
});
/**
* Returns true if num is less than zero, else false
*/
cljs.core.neg_QMARK_ = (function neg_QMARK_(x){
return (x < 0);
});
/**
* Returns the nth next of coll, (seq coll) when n is 0.
*/
cljs.core.nthnext = (function nthnext(coll,n){
var n__2827 = n;
var xs__2828 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2829 = xs__2828;

if(cljs.core.truth_(and__3574__auto____2829))
{return cljs.core.pos_QMARK_.call(null,n__2827);
} else
{return and__3574__auto____2829;
}
})()))
{{
var G__2830 = cljs.core.dec.call(null,n__2827);
var G__2831 = cljs.core.next.call(null,xs__2828);
n__2827 = G__2830;
xs__2828 = G__2831;
continue;
}
} else
{return xs__2828;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2836 = null;
var G__2836__2837 = (function (coll,n){
var temp__3723__auto____2832 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____2832))
{var xs__2833 = temp__3723__auto____2832;

return cljs.core.first.call(null,xs__2833);
} else
{throw "Index out of bounds";
}
});
var G__2836__2838 = (function (coll,n,not_found){
var temp__3723__auto____2834 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____2834))
{var xs__2835 = temp__3723__auto____2834;

return cljs.core.first.call(null,xs__2835);
} else
{return not_found;
}
});
G__2836 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2836__2837.call(this,coll,n);
case  3 :
return G__2836__2838.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2836;
})()
);
/**
* With no args, returns the empty string. With one arg x, returns
* x.toString().  (str nil) returns the empty string. With more than
* one arg, returns the concatenation of the str values of the args.
* @param {...*} var_args
*/
cljs.core.str = (function() {
var str = null;
var str__2840 = (function (){
return "";
});
var str__2841 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{return x.toString();
}
});
var str__2842 = (function() { 
var G__2844__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2845 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__2846 = cljs.core.next.call(null,more);
sb = G__2845;
more = G__2846;
continue;
}
} else
{return str.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__2844 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2844__delegate.call(this, x, ys);
};
G__2844.cljs$lang$maxFixedArity = 1;
G__2844.cljs$lang$applyTo = (function (arglist__2847){
var x = cljs.core.first(arglist__2847);
var ys = cljs.core.rest(arglist__2847);
return G__2844__delegate.call(this, x, ys);
});
return G__2844;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2840.call(this);
case  1 :
return str__2841.call(this,x);
default:
return str__2842.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2842.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2848 = (function (s,start){
return s.substring(start);
});
var subs__2849 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2848.call(this,s,start);
case  3 :
return subs__2849.call(this,s,start,end);
}
throw('Invalid arity: ' + arguments.length);
};
return subs;
})()
;
/**
* Returns a Symbol with the given namespace and name.
*/
cljs.core.symbol = (function() {
var symbol = null;
var symbol__2851 = (function (name){
if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷑","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷑","'",name);
} else
{return null;
}
}
}
});
var symbol__2852 = (function (ns,name){
return symbol.call(null,cljs.core.str.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2851.call(this,ns);
case  2 :
return symbol__2852.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return symbol;
})()
;
/**
* Returns a Keyword with the given namespace and name.  Do not use :
* in the keyword strings, it will be added automatically.
*/
cljs.core.keyword = (function() {
var keyword = null;
var keyword__2854 = (function (name){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,name)))
{return name;
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,name)))
{return cljs.core.str.call(null,"﷐","'",cljs.core.subs.call(null,name,2));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.str.call(null,"﷐","'",name);
} else
{return null;
}
}
}
});
var keyword__2855 = (function (ns,name){
return keyword.call(null,cljs.core.str.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2854.call(this,ns);
case  2 :
return keyword__2855.call(this,ns,name);
}
throw('Invalid arity: ' + arguments.length);
};
return keyword;
})()
;
/**
* Assumes x is sequential. Returns true if x equals y, otherwise
* returns false.
*/
cljs.core.equiv_sequential = (function equiv_sequential(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2857 = cljs.core.seq.call(null,x);
var ys__2858 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2857)))
{return cljs.core.nil_QMARK_.call(null,ys__2858);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2858)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2857),cljs.core.first.call(null,ys__2858))))
{{
var G__2859 = cljs.core.next.call(null,xs__2857);
var G__2860 = cljs.core.next.call(null,ys__2858);
xs__2857 = G__2859;
ys__2858 = G__2860;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
}
break;
}
})():null));
});
cljs.core.hash_combine = (function hash_combine(seed,hash){
return cljs.core.bit_xor.call(null,seed,cljs.core._PLUS_.call(null,hash,2654435769,cljs.core.bit_shift_left.call(null,seed,6),cljs.core.bit_shift_right.call(null,seed,2)));
});
cljs.core.hash_coll = (function hash_coll(coll){
return cljs.core.reduce.call(null,(function (p1__2861_SHARP_,p2__2862_SHARP_){
return cljs.core.hash_combine.call(null,p1__2861_SHARP_,cljs.core.hash.call(null,p2__2862_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});

/**
* @constructor
*/
cljs.core.List = (function (meta,first,rest,count){
this.meta = meta;
this.first = first;
this.rest = rest;
this.count = count;
})
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2863 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2864 = this;
return (new cljs.core.List(this__2864.meta,o,coll,cljs.core.inc.call(null,this__2864.count)));
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2865 = this;
return this__2865.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2866 = this;
return this__2866.rest;
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2867 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2868 = this;
return this__2868.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2869 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2870 = this;
return (new cljs.core.List(meta,this__2870.first,this__2870.rest,this__2870.count));
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2871 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2872 = this;
return this__2872.meta;
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2873 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2874 = this;
return this__2874.count;
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;

/**
* @constructor
*/
cljs.core.EmptyList = (function (meta){
this.meta = meta;
})
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2875 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2876 = this;
return (new cljs.core.List(this__2876.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2877 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2878 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2879 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2880 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2881 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2882 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2883 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2884 = this;
return this__2884.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2885 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2886 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.List.EMPTY = (new cljs.core.EmptyList(null));
/**
* Returns a seq of the items in coll in reverse order. Not lazy.
*/
cljs.core.reverse = (function reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.list = (function() { 
var list__delegate = function (items){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,cljs.core.reverse.call(null,items));
};
var list = function (var_args){
var items = null;
if (goog.isDef(var_args)) {
  items = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return list__delegate.call(this, items);
};
list.cljs$lang$maxFixedArity = 0;
list.cljs$lang$applyTo = (function (arglist__2887){
var items = cljs.core.seq( arglist__2887 );;
return list__delegate.call(this, items);
});
return list;
})()
;

/**
* @constructor
*/
cljs.core.Cons = (function (meta,first,rest){
this.meta = meta;
this.first = first;
this.rest = rest;
})
cljs.core.Cons.prototype.cljs$core$ISeqable$ = true;
cljs.core.Cons.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2888 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2889 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2890 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2891 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2891.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2892 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2893 = this;
return this__2893.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2894 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2894.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2894.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2895 = this;
return this__2895.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2896 = this;
return (new cljs.core.Cons(meta,this__2896.first,this__2896.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2897 = null;
var G__2897__2898 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2897__2899 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2897 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2897__2898.call(this,string,f);
case  3 :
return G__2897__2899.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2897;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2901 = null;
var G__2901__2902 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2901__2903 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2901 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2901__2902.call(this,string,k);
case  3 :
return G__2901__2903.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2901;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2905 = null;
var G__2905__2906 = (function (string,n){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2905__2907 = (function (string,n,not_found){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2905 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2905__2906.call(this,string,n);
case  3 :
return G__2905__2907.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2905;
})()
);
(cljs.core.ICounted["string"] = true);
(cljs.core._count["string"] = (function (s){
return s.length;
}));
(cljs.core.ISeqable["string"] = true);
(cljs.core._seq["string"] = (function (string){
return cljs.core.prim_seq.call(null,string,0);
}));
(cljs.core.IHash["string"] = true);
(cljs.core._hash["string"] = (function (o){
return goog.string.hashCode.call(null,o);
}));
String['prototype']['call'] = (function() {
var G__2909 = null;
var G__2909__2910 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2909__2911 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2909 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2909__2910.call(this,_,coll);
case  3 :
return G__2909__2911.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2909;
})()
;
String['prototype']['apply'] = (function (s,args){
if(cljs.core.truth_(cljs.core._LT_.call(null,cljs.core.count.call(null,args),2)))
{return cljs.core.get.call(null,(args[0]),s);
} else
{return cljs.core.get.call(null,(args[0]),s,(args[1]));
}
});
cljs.core.lazy_seq_value = (function lazy_seq_value(lazy_seq){
var x__2913 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2913;
} else
{lazy_seq.x = x__2913.call(null);
lazy_seq.realized = true;
return lazy_seq.x;
}
});

/**
* @constructor
*/
cljs.core.LazySeq = (function (meta,realized,x){
this.meta = meta;
this.realized = realized;
this.x = x;
})
cljs.core.LazySeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2914 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2915 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2916 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2917 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2917.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2918 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2919 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2920 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2921 = this;
return this__2921.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2922 = this;
return (new cljs.core.LazySeq(meta,this__2922.realized,this__2922.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2923 = cljs.core.array.call(null);

var s__2924 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2924)))
{ary__2923.push(cljs.core.first.call(null,s__2924));
{
var G__2925 = cljs.core.next.call(null,s__2924);
s__2924 = G__2925;
continue;
}
} else
{return ary__2923;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2926 = s;
var i__2927 = n;
var sum__2928 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2929 = cljs.core.pos_QMARK_.call(null,i__2927);

if(cljs.core.truth_(and__3574__auto____2929))
{return cljs.core.seq.call(null,s__2926);
} else
{return and__3574__auto____2929;
}
})()))
{{
var G__2930 = cljs.core.next.call(null,s__2926);
var G__2931 = cljs.core.dec.call(null,i__2927);
var G__2932 = cljs.core.inc.call(null,sum__2928);
s__2926 = G__2930;
i__2927 = G__2931;
sum__2928 = G__2932;
continue;
}
} else
{return sum__2928;
}
break;
}
});
cljs.core.spread = (function spread(arglist){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,arglist)))
{return null;
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.next.call(null,arglist))))
{return cljs.core.seq.call(null,cljs.core.first.call(null,arglist));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.cons.call(null,cljs.core.first.call(null,arglist),spread.call(null,cljs.core.next.call(null,arglist)));
} else
{return null;
}
}
}
});
/**
* Returns a lazy seq representing the concatenation of the elements in the supplied colls.
* @param {...*} var_args
*/
cljs.core.concat = (function() {
var concat = null;
var concat__2936 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2937 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2938 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2933 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2933))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2933),concat.call(null,cljs.core.rest.call(null,s__2933),y));
} else
{return y;
}
})));
});
var concat__2939 = (function() { 
var G__2941__delegate = function (x,y,zs){
var cat__2935 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2934 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2934))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2934),cat.call(null,cljs.core.rest.call(null,xys__2934),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2935.call(null,concat.call(null,x,y),zs);
};
var G__2941 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2941__delegate.call(this, x, y, zs);
};
G__2941.cljs$lang$maxFixedArity = 2;
G__2941.cljs$lang$applyTo = (function (arglist__2942){
var x = cljs.core.first(arglist__2942);
var y = cljs.core.first(cljs.core.next(arglist__2942));
var zs = cljs.core.rest(cljs.core.next(arglist__2942));
return G__2941__delegate.call(this, x, y, zs);
});
return G__2941;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2936.call(this);
case  1 :
return concat__2937.call(this,x);
case  2 :
return concat__2938.call(this,x,y);
default:
return concat__2939.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__2939.cljs$lang$applyTo;
return concat;
})()
;
/**
* Creates a new list containing the items prepended to the rest, the
* last of which will be treated as a sequence.
* @param {...*} var_args
*/
cljs.core.list_STAR_ = (function() {
var list_STAR_ = null;
var list_STAR___2943 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2944 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2945 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2946 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2947 = (function() { 
var G__2949__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__2949 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2949__delegate.call(this, a, b, c, d, more);
};
G__2949.cljs$lang$maxFixedArity = 4;
G__2949.cljs$lang$applyTo = (function (arglist__2950){
var a = cljs.core.first(arglist__2950);
var b = cljs.core.first(cljs.core.next(arglist__2950));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2950)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2950))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2950))));
return G__2949__delegate.call(this, a, b, c, d, more);
});
return G__2949;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2943.call(this,a);
case  2 :
return list_STAR___2944.call(this,a,b);
case  3 :
return list_STAR___2945.call(this,a,b,c);
case  4 :
return list_STAR___2946.call(this,a,b,c,d);
default:
return list_STAR___2947.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___2947.cljs$lang$applyTo;
return list_STAR_;
})()
;
/**
* Applies fn f to the argument list formed by prepending intervening arguments to args.
* First cut.  Not lazy.  Needs to use emitted toApply.
* @param {...*} var_args
*/
cljs.core.apply = (function() {
var apply = null;
var apply__2960 = (function (f,args){
var fixed_arity__2951 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,args,cljs.core.inc.call(null,fixed_arity__2951)),fixed_arity__2951)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2961 = (function (f,x,args){
var arglist__2952 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2953 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2952,fixed_arity__2953),fixed_arity__2953)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2952));
} else
{return f.cljs$lang$applyTo(arglist__2952);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2952));
}
});
var apply__2962 = (function (f,x,y,args){
var arglist__2954 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2955 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2954,fixed_arity__2955),fixed_arity__2955)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2954));
} else
{return f.cljs$lang$applyTo(arglist__2954);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2954));
}
});
var apply__2963 = (function (f,x,y,z,args){
var arglist__2956 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2957 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2956,fixed_arity__2957),fixed_arity__2957)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2956));
} else
{return f.cljs$lang$applyTo(arglist__2956);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2956));
}
});
var apply__2964 = (function() { 
var G__2966__delegate = function (f,a,b,c,d,args){
var arglist__2958 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2959 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2958,fixed_arity__2959),fixed_arity__2959)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2958));
} else
{return f.cljs$lang$applyTo(arglist__2958);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2958));
}
};
var G__2966 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__2966__delegate.call(this, f, a, b, c, d, args);
};
G__2966.cljs$lang$maxFixedArity = 5;
G__2966.cljs$lang$applyTo = (function (arglist__2967){
var f = cljs.core.first(arglist__2967);
var a = cljs.core.first(cljs.core.next(arglist__2967));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2967)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2967))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2967)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2967)))));
return G__2966__delegate.call(this, f, a, b, c, d, args);
});
return G__2966;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2960.call(this,f,a);
case  3 :
return apply__2961.call(this,f,a,b);
case  4 :
return apply__2962.call(this,f,a,b,c);
case  5 :
return apply__2963.call(this,f,a,b,c,d);
default:
return apply__2964.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__2964.cljs$lang$applyTo;
return apply;
})()
;
/**
* Returns an object of the same type and value as obj, with
* (apply f (meta obj) args) as its metadata.
* @param {...*} var_args
*/
cljs.core.vary_meta = (function() { 
var vary_meta__delegate = function (obj,f,args){
return cljs.core.with_meta.call(null,obj,cljs.core.apply.call(null,f,cljs.core.meta.call(null,obj),args));
};
var vary_meta = function (obj,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return vary_meta__delegate.call(this, obj, f, args);
};
vary_meta.cljs$lang$maxFixedArity = 2;
vary_meta.cljs$lang$applyTo = (function (arglist__2968){
var obj = cljs.core.first(arglist__2968);
var f = cljs.core.first(cljs.core.next(arglist__2968));
var args = cljs.core.rest(cljs.core.next(arglist__2968));
return vary_meta__delegate.call(this, obj, f, args);
});
return vary_meta;
})()
;
/**
* Same as (not (= obj1 obj2))
* @param {...*} var_args
*/
cljs.core.not_EQ_ = (function() {
var not_EQ_ = null;
var not_EQ___2969 = (function (x){
return false;
});
var not_EQ___2970 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___2971 = (function() { 
var G__2973__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__2973 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2973__delegate.call(this, x, y, more);
};
G__2973.cljs$lang$maxFixedArity = 2;
G__2973.cljs$lang$applyTo = (function (arglist__2974){
var x = cljs.core.first(arglist__2974);
var y = cljs.core.first(cljs.core.next(arglist__2974));
var more = cljs.core.rest(cljs.core.next(arglist__2974));
return G__2973__delegate.call(this, x, y, more);
});
return G__2973;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2969.call(this,x);
case  2 :
return not_EQ___2970.call(this,x,y);
default:
return not_EQ___2971.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___2971.cljs$lang$applyTo;
return not_EQ_;
})()
;
/**
* If coll is empty, returns nil, else coll
*/
cljs.core.not_empty = (function not_empty(coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{return coll;
} else
{return null;
}
});
/**
* Returns true if (pred x) is logical true for every x in coll, else
* false.
*/
cljs.core.every_QMARK_ = (function every_QMARK_(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.seq.call(null,coll))))
{return true;
} else
{if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,coll))))
{{
var G__2975 = pred;
var G__2976 = cljs.core.next.call(null,coll);
pred = G__2975;
coll = G__2976;
continue;
}
} else
{if(cljs.core.truth_("﷐'else"))
{return false;
} else
{return null;
}
}
}
break;
}
});
/**
* Returns false if (pred x) is logical true for every x in
* coll, else true.
*/
cljs.core.not_every_QMARK_ = (function not_every_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.every_QMARK_.call(null,pred,coll));
});
/**
* Returns the first logical true value of (pred x) for any x in coll,
* else nil.  One common idiom is to use a set as pred, for example
* this will return :fred if :fred is in the sequence, otherwise nil:
* (some #{:fred} coll)
*/
cljs.core.some = (function some(pred,coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var or__3576__auto____2977 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3576__auto____2977))
{return or__3576__auto____2977;
} else
{{
var G__2978 = pred;
var G__2979 = cljs.core.next.call(null,coll);
pred = G__2978;
coll = G__2979;
continue;
}
}
} else
{return null;
}
break;
}
});
/**
* Returns false if (pred x) is logical true for any x in coll,
* else true.
*/
cljs.core.not_any_QMARK_ = (function not_any_QMARK_(pred,coll){
return cljs.core.not.call(null,cljs.core.some.call(null,pred,coll));
});
/**
* Returns true if n is even, throws an exception if n is not an integer
*/
cljs.core.even_QMARK_ = (function even_QMARK_(n){
if(cljs.core.truth_(cljs.core.integer_QMARK_.call(null,n)))
{return cljs.core.zero_QMARK_.call(null,cljs.core.bit_and.call(null,n,1));
} else
{throw cljs.core.str.call(null,"Argument must be an integer: ",n);
}
});
/**
* Returns true if n is odd, throws an exception if n is not an integer
*/
cljs.core.odd_QMARK_ = (function odd_QMARK_(n){
return cljs.core.not.call(null,cljs.core.even_QMARK_.call(null,n));
});
cljs.core.identity = (function identity(x){
return x;
});
/**
* Takes a fn f and returns a fn that takes the same arguments as f,
* has the same effects, if any, and returns the opposite truth value.
*/
cljs.core.complement = (function complement(f){
return (function() {
var G__2980 = null;
var G__2980__2981 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__2980__2982 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__2980__2983 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__2980__2984 = (function() { 
var G__2986__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__2986 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2986__delegate.call(this, x, y, zs);
};
G__2986.cljs$lang$maxFixedArity = 2;
G__2986.cljs$lang$applyTo = (function (arglist__2987){
var x = cljs.core.first(arglist__2987);
var y = cljs.core.first(cljs.core.next(arglist__2987));
var zs = cljs.core.rest(cljs.core.next(arglist__2987));
return G__2986__delegate.call(this, x, y, zs);
});
return G__2986;
})()
;
G__2980 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__2980__2981.call(this);
case  1 :
return G__2980__2982.call(this,x);
case  2 :
return G__2980__2983.call(this,x,y);
default:
return G__2980__2984.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2980.cljs$lang$maxFixedArity = 2;
G__2980.cljs$lang$applyTo = G__2980__2984.cljs$lang$applyTo;
return G__2980;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__2988__delegate = function (args){
return x;
};
var G__2988 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2988__delegate.call(this, args);
};
G__2988.cljs$lang$maxFixedArity = 0;
G__2988.cljs$lang$applyTo = (function (arglist__2989){
var args = cljs.core.seq( arglist__2989 );;
return G__2988__delegate.call(this, args);
});
return G__2988;
})()
;
});
/**
* Takes a set of functions and returns a fn that is the composition
* of those fns.  The returned fn takes a variable number of args,
* applies the rightmost of fns to the args, the next
* fn (right-to-left) to the result, etc.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.comp = (function() {
var comp = null;
var comp__2993 = (function (){
return cljs.core.identity;
});
var comp__2994 = (function (f){
return f;
});
var comp__2995 = (function (f,g){
return (function() {
var G__2999 = null;
var G__2999__3000 = (function (){
return f.call(null,g.call(null));
});
var G__2999__3001 = (function (x){
return f.call(null,g.call(null,x));
});
var G__2999__3002 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__2999__3003 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__2999__3004 = (function() { 
var G__3006__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3006 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3006__delegate.call(this, x, y, z, args);
};
G__3006.cljs$lang$maxFixedArity = 3;
G__3006.cljs$lang$applyTo = (function (arglist__3007){
var x = cljs.core.first(arglist__3007);
var y = cljs.core.first(cljs.core.next(arglist__3007));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3007)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3007)));
return G__3006__delegate.call(this, x, y, z, args);
});
return G__3006;
})()
;
G__2999 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2999__3000.call(this);
case  1 :
return G__2999__3001.call(this,x);
case  2 :
return G__2999__3002.call(this,x,y);
case  3 :
return G__2999__3003.call(this,x,y,z);
default:
return G__2999__3004.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2999.cljs$lang$maxFixedArity = 3;
G__2999.cljs$lang$applyTo = G__2999__3004.cljs$lang$applyTo;
return G__2999;
})()
});
var comp__2996 = (function (f,g,h){
return (function() {
var G__3008 = null;
var G__3008__3009 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__3008__3010 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__3008__3011 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__3008__3012 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__3008__3013 = (function() { 
var G__3015__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__3015 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3015__delegate.call(this, x, y, z, args);
};
G__3015.cljs$lang$maxFixedArity = 3;
G__3015.cljs$lang$applyTo = (function (arglist__3016){
var x = cljs.core.first(arglist__3016);
var y = cljs.core.first(cljs.core.next(arglist__3016));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3016)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3016)));
return G__3015__delegate.call(this, x, y, z, args);
});
return G__3015;
})()
;
G__3008 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3008__3009.call(this);
case  1 :
return G__3008__3010.call(this,x);
case  2 :
return G__3008__3011.call(this,x,y);
case  3 :
return G__3008__3012.call(this,x,y,z);
default:
return G__3008__3013.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3008.cljs$lang$maxFixedArity = 3;
G__3008.cljs$lang$applyTo = G__3008__3013.cljs$lang$applyTo;
return G__3008;
})()
});
var comp__2997 = (function() { 
var G__3017__delegate = function (f1,f2,f3,fs){
var fs__2990 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__3018__delegate = function (args){
var ret__2991 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__2990),args);
var fs__2992 = cljs.core.next.call(null,fs__2990);

while(true){
if(cljs.core.truth_(fs__2992))
{{
var G__3019 = cljs.core.first.call(null,fs__2992).call(null,ret__2991);
var G__3020 = cljs.core.next.call(null,fs__2992);
ret__2991 = G__3019;
fs__2992 = G__3020;
continue;
}
} else
{return ret__2991;
}
break;
}
};
var G__3018 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3018__delegate.call(this, args);
};
G__3018.cljs$lang$maxFixedArity = 0;
G__3018.cljs$lang$applyTo = (function (arglist__3021){
var args = cljs.core.seq( arglist__3021 );;
return G__3018__delegate.call(this, args);
});
return G__3018;
})()
;
};
var G__3017 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3017__delegate.call(this, f1, f2, f3, fs);
};
G__3017.cljs$lang$maxFixedArity = 3;
G__3017.cljs$lang$applyTo = (function (arglist__3022){
var f1 = cljs.core.first(arglist__3022);
var f2 = cljs.core.first(cljs.core.next(arglist__3022));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3022)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3022)));
return G__3017__delegate.call(this, f1, f2, f3, fs);
});
return G__3017;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__2993.call(this);
case  1 :
return comp__2994.call(this,f1);
case  2 :
return comp__2995.call(this,f1,f2);
case  3 :
return comp__2996.call(this,f1,f2,f3);
default:
return comp__2997.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__2997.cljs$lang$applyTo;
return comp;
})()
;
/**
* Takes a function f and fewer than the normal arguments to f, and
* returns a fn that takes a variable number of additional args. When
* called, the returned function calls f with args + additional args.
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.partial = (function() {
var partial = null;
var partial__3023 = (function (f,arg1){
return (function() { 
var G__3028__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__3028 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3028__delegate.call(this, args);
};
G__3028.cljs$lang$maxFixedArity = 0;
G__3028.cljs$lang$applyTo = (function (arglist__3029){
var args = cljs.core.seq( arglist__3029 );;
return G__3028__delegate.call(this, args);
});
return G__3028;
})()
;
});
var partial__3024 = (function (f,arg1,arg2){
return (function() { 
var G__3030__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__3030 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3030__delegate.call(this, args);
};
G__3030.cljs$lang$maxFixedArity = 0;
G__3030.cljs$lang$applyTo = (function (arglist__3031){
var args = cljs.core.seq( arglist__3031 );;
return G__3030__delegate.call(this, args);
});
return G__3030;
})()
;
});
var partial__3025 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__3032__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__3032 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3032__delegate.call(this, args);
};
G__3032.cljs$lang$maxFixedArity = 0;
G__3032.cljs$lang$applyTo = (function (arglist__3033){
var args = cljs.core.seq( arglist__3033 );;
return G__3032__delegate.call(this, args);
});
return G__3032;
})()
;
});
var partial__3026 = (function() { 
var G__3034__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__3035__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__3035 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3035__delegate.call(this, args);
};
G__3035.cljs$lang$maxFixedArity = 0;
G__3035.cljs$lang$applyTo = (function (arglist__3036){
var args = cljs.core.seq( arglist__3036 );;
return G__3035__delegate.call(this, args);
});
return G__3035;
})()
;
};
var G__3034 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3034__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__3034.cljs$lang$maxFixedArity = 4;
G__3034.cljs$lang$applyTo = (function (arglist__3037){
var f = cljs.core.first(arglist__3037);
var arg1 = cljs.core.first(cljs.core.next(arglist__3037));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3037)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3037))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3037))));
return G__3034__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__3034;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__3023.call(this,f,arg1);
case  3 :
return partial__3024.call(this,f,arg1,arg2);
case  4 :
return partial__3025.call(this,f,arg1,arg2,arg3);
default:
return partial__3026.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__3026.cljs$lang$applyTo;
return partial;
})()
;
/**
* Takes a function f, and returns a function that calls f, replacing
* a nil first argument to f with the supplied value x. Higher arity
* versions can replace arguments in the second and third
* positions (y, z). Note that the function f can take any number of
* arguments, not just the one(s) being nil-patched.
*/
cljs.core.fnil = (function() {
var fnil = null;
var fnil__3038 = (function (f,x){
return (function() {
var G__3042 = null;
var G__3042__3043 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__3042__3044 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__3042__3045 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__3042__3046 = (function() { 
var G__3048__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__3048 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3048__delegate.call(this, a, b, c, ds);
};
G__3048.cljs$lang$maxFixedArity = 3;
G__3048.cljs$lang$applyTo = (function (arglist__3049){
var a = cljs.core.first(arglist__3049);
var b = cljs.core.first(cljs.core.next(arglist__3049));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3049)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3049)));
return G__3048__delegate.call(this, a, b, c, ds);
});
return G__3048;
})()
;
G__3042 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__3042__3043.call(this,a);
case  2 :
return G__3042__3044.call(this,a,b);
case  3 :
return G__3042__3045.call(this,a,b,c);
default:
return G__3042__3046.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3042.cljs$lang$maxFixedArity = 3;
G__3042.cljs$lang$applyTo = G__3042__3046.cljs$lang$applyTo;
return G__3042;
})()
});
var fnil__3039 = (function (f,x,y){
return (function() {
var G__3050 = null;
var G__3050__3051 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3050__3052 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__3050__3053 = (function() { 
var G__3055__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__3055 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3055__delegate.call(this, a, b, c, ds);
};
G__3055.cljs$lang$maxFixedArity = 3;
G__3055.cljs$lang$applyTo = (function (arglist__3056){
var a = cljs.core.first(arglist__3056);
var b = cljs.core.first(cljs.core.next(arglist__3056));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3056)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3056)));
return G__3055__delegate.call(this, a, b, c, ds);
});
return G__3055;
})()
;
G__3050 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3050__3051.call(this,a,b);
case  3 :
return G__3050__3052.call(this,a,b,c);
default:
return G__3050__3053.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3050.cljs$lang$maxFixedArity = 3;
G__3050.cljs$lang$applyTo = G__3050__3053.cljs$lang$applyTo;
return G__3050;
})()
});
var fnil__3040 = (function (f,x,y,z){
return (function() {
var G__3057 = null;
var G__3057__3058 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__3057__3059 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__3057__3060 = (function() { 
var G__3062__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__3062 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3062__delegate.call(this, a, b, c, ds);
};
G__3062.cljs$lang$maxFixedArity = 3;
G__3062.cljs$lang$applyTo = (function (arglist__3063){
var a = cljs.core.first(arglist__3063);
var b = cljs.core.first(cljs.core.next(arglist__3063));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3063)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3063)));
return G__3062__delegate.call(this, a, b, c, ds);
});
return G__3062;
})()
;
G__3057 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__3057__3058.call(this,a,b);
case  3 :
return G__3057__3059.call(this,a,b,c);
default:
return G__3057__3060.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3057.cljs$lang$maxFixedArity = 3;
G__3057.cljs$lang$applyTo = G__3057__3060.cljs$lang$applyTo;
return G__3057;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__3038.call(this,f,x);
case  3 :
return fnil__3039.call(this,f,x,y);
case  4 :
return fnil__3040.call(this,f,x,y,z);
}
throw('Invalid arity: ' + arguments.length);
};
return fnil;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to 0
* and the first item of coll, followed by applying f to 1 and the second
* item in coll, etc, until coll is exhausted. Thus function f should
* accept 2 arguments, index and item.
*/
cljs.core.map_indexed = (function map_indexed(f,coll){
var mapi__3066 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3064 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3064))
{var s__3065 = temp__3726__auto____3064;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__3065)),mpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__3065)));
} else
{return null;
}
})));
});

return mapi__3066.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3067 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3067))
{var s__3068 = temp__3726__auto____3067;

var x__3069 = f.call(null,cljs.core.first.call(null,s__3068));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3069)))
{return keep.call(null,f,cljs.core.rest.call(null,s__3068));
} else
{return cljs.core.cons.call(null,x__3069,keep.call(null,f,cljs.core.rest.call(null,s__3068)));
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the non-nil results of (f index item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep_indexed = (function keep_indexed(f,coll){
var keepi__3079 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3076 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3076))
{var s__3077 = temp__3726__auto____3076;

var x__3078 = f.call(null,idx,cljs.core.first.call(null,s__3077));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__3078)))
{return kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__3077));
} else
{return cljs.core.cons.call(null,x__3078,kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__3077)));
}
} else
{return null;
}
})));
});

return keepi__3079.call(null,0,coll);
});
/**
* Takes a set of predicates and returns a function f that returns true if all of its
* composing predicates return a logical true value against all of its arguments, else it returns
* false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical false result against the original predicates.
* @param {...*} var_args
*/
cljs.core.every_pred = (function() {
var every_pred = null;
var every_pred__3124 = (function (p){
return (function() {
var ep1 = null;
var ep1__3129 = (function (){
return true;
});
var ep1__3130 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__3131 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____3086 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____3086))
{return p.call(null,y);
} else
{return and__3574__auto____3086;
}
})());
});
var ep1__3132 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____3087 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____3087))
{var and__3574__auto____3088 = p.call(null,y);

if(cljs.core.truth_(and__3574__auto____3088))
{return p.call(null,z);
} else
{return and__3574__auto____3088;
}
} else
{return and__3574__auto____3087;
}
})());
});
var ep1__3133 = (function() { 
var G__3135__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____3089 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____3089))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3574__auto____3089;
}
})());
};
var G__3135 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3135__delegate.call(this, x, y, z, args);
};
G__3135.cljs$lang$maxFixedArity = 3;
G__3135.cljs$lang$applyTo = (function (arglist__3136){
var x = cljs.core.first(arglist__3136);
var y = cljs.core.first(cljs.core.next(arglist__3136));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3136)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3136)));
return G__3135__delegate.call(this, x, y, z, args);
});
return G__3135;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__3129.call(this);
case  1 :
return ep1__3130.call(this,x);
case  2 :
return ep1__3131.call(this,x,y);
case  3 :
return ep1__3132.call(this,x,y,z);
default:
return ep1__3133.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__3133.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__3125 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__3137 = (function (){
return true;
});
var ep2__3138 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____3090 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____3090))
{return p2.call(null,x);
} else
{return and__3574__auto____3090;
}
})());
});
var ep2__3139 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____3091 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____3091))
{var and__3574__auto____3092 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____3092))
{var and__3574__auto____3093 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____3093))
{return p2.call(null,y);
} else
{return and__3574__auto____3093;
}
} else
{return and__3574__auto____3092;
}
} else
{return and__3574__auto____3091;
}
})());
});
var ep2__3140 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____3094 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____3094))
{var and__3574__auto____3095 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____3095))
{var and__3574__auto____3096 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____3096))
{var and__3574__auto____3097 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____3097))
{var and__3574__auto____3098 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____3098))
{return p2.call(null,z);
} else
{return and__3574__auto____3098;
}
} else
{return and__3574__auto____3097;
}
} else
{return and__3574__auto____3096;
}
} else
{return and__3574__auto____3095;
}
} else
{return and__3574__auto____3094;
}
})());
});
var ep2__3141 = (function() { 
var G__3143__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____3099 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____3099))
{return cljs.core.every_QMARK_.call(null,(function (p1__3070_SHARP_){
var and__3574__auto____3100 = p1.call(null,p1__3070_SHARP_);

if(cljs.core.truth_(and__3574__auto____3100))
{return p2.call(null,p1__3070_SHARP_);
} else
{return and__3574__auto____3100;
}
}),args);
} else
{return and__3574__auto____3099;
}
})());
};
var G__3143 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3143__delegate.call(this, x, y, z, args);
};
G__3143.cljs$lang$maxFixedArity = 3;
G__3143.cljs$lang$applyTo = (function (arglist__3144){
var x = cljs.core.first(arglist__3144);
var y = cljs.core.first(cljs.core.next(arglist__3144));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3144)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3144)));
return G__3143__delegate.call(this, x, y, z, args);
});
return G__3143;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__3137.call(this);
case  1 :
return ep2__3138.call(this,x);
case  2 :
return ep2__3139.call(this,x,y);
case  3 :
return ep2__3140.call(this,x,y,z);
default:
return ep2__3141.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__3141.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__3126 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__3145 = (function (){
return true;
});
var ep3__3146 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____3101 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____3101))
{var and__3574__auto____3102 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____3102))
{return p3.call(null,x);
} else
{return and__3574__auto____3102;
}
} else
{return and__3574__auto____3101;
}
})());
});
var ep3__3147 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____3103 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____3103))
{var and__3574__auto____3104 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____3104))
{var and__3574__auto____3105 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____3105))
{var and__3574__auto____3106 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____3106))
{var and__3574__auto____3107 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____3107))
{return p3.call(null,y);
} else
{return and__3574__auto____3107;
}
} else
{return and__3574__auto____3106;
}
} else
{return and__3574__auto____3105;
}
} else
{return and__3574__auto____3104;
}
} else
{return and__3574__auto____3103;
}
})());
});
var ep3__3148 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____3108 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____3108))
{var and__3574__auto____3109 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____3109))
{var and__3574__auto____3110 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____3110))
{var and__3574__auto____3111 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____3111))
{var and__3574__auto____3112 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____3112))
{var and__3574__auto____3113 = p3.call(null,y);

if(cljs.core.truth_(and__3574__auto____3113))
{var and__3574__auto____3114 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____3114))
{var and__3574__auto____3115 = p2.call(null,z);

if(cljs.core.truth_(and__3574__auto____3115))
{return p3.call(null,z);
} else
{return and__3574__auto____3115;
}
} else
{return and__3574__auto____3114;
}
} else
{return and__3574__auto____3113;
}
} else
{return and__3574__auto____3112;
}
} else
{return and__3574__auto____3111;
}
} else
{return and__3574__auto____3110;
}
} else
{return and__3574__auto____3109;
}
} else
{return and__3574__auto____3108;
}
})());
});
var ep3__3149 = (function() { 
var G__3151__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____3116 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____3116))
{return cljs.core.every_QMARK_.call(null,(function (p1__3071_SHARP_){
var and__3574__auto____3117 = p1.call(null,p1__3071_SHARP_);

if(cljs.core.truth_(and__3574__auto____3117))
{var and__3574__auto____3118 = p2.call(null,p1__3071_SHARP_);

if(cljs.core.truth_(and__3574__auto____3118))
{return p3.call(null,p1__3071_SHARP_);
} else
{return and__3574__auto____3118;
}
} else
{return and__3574__auto____3117;
}
}),args);
} else
{return and__3574__auto____3116;
}
})());
};
var G__3151 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3151__delegate.call(this, x, y, z, args);
};
G__3151.cljs$lang$maxFixedArity = 3;
G__3151.cljs$lang$applyTo = (function (arglist__3152){
var x = cljs.core.first(arglist__3152);
var y = cljs.core.first(cljs.core.next(arglist__3152));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3152)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3152)));
return G__3151__delegate.call(this, x, y, z, args);
});
return G__3151;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__3145.call(this);
case  1 :
return ep3__3146.call(this,x);
case  2 :
return ep3__3147.call(this,x,y);
case  3 :
return ep3__3148.call(this,x,y,z);
default:
return ep3__3149.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__3149.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__3127 = (function() { 
var G__3153__delegate = function (p1,p2,p3,ps){
var ps__3119 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__3154 = (function (){
return true;
});
var epn__3155 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__3072_SHARP_){
return p1__3072_SHARP_.call(null,x);
}),ps__3119);
});
var epn__3156 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__3073_SHARP_){
var and__3574__auto____3120 = p1__3073_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____3120))
{return p1__3073_SHARP_.call(null,y);
} else
{return and__3574__auto____3120;
}
}),ps__3119);
});
var epn__3157 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__3074_SHARP_){
var and__3574__auto____3121 = p1__3074_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____3121))
{var and__3574__auto____3122 = p1__3074_SHARP_.call(null,y);

if(cljs.core.truth_(and__3574__auto____3122))
{return p1__3074_SHARP_.call(null,z);
} else
{return and__3574__auto____3122;
}
} else
{return and__3574__auto____3121;
}
}),ps__3119);
});
var epn__3158 = (function() { 
var G__3160__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____3123 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____3123))
{return cljs.core.every_QMARK_.call(null,(function (p1__3075_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__3075_SHARP_,args);
}),ps__3119);
} else
{return and__3574__auto____3123;
}
})());
};
var G__3160 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3160__delegate.call(this, x, y, z, args);
};
G__3160.cljs$lang$maxFixedArity = 3;
G__3160.cljs$lang$applyTo = (function (arglist__3161){
var x = cljs.core.first(arglist__3161);
var y = cljs.core.first(cljs.core.next(arglist__3161));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3161)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3161)));
return G__3160__delegate.call(this, x, y, z, args);
});
return G__3160;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__3154.call(this);
case  1 :
return epn__3155.call(this,x);
case  2 :
return epn__3156.call(this,x,y);
case  3 :
return epn__3157.call(this,x,y,z);
default:
return epn__3158.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__3158.cljs$lang$applyTo;
return epn;
})()
};
var G__3153 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3153__delegate.call(this, p1, p2, p3, ps);
};
G__3153.cljs$lang$maxFixedArity = 3;
G__3153.cljs$lang$applyTo = (function (arglist__3162){
var p1 = cljs.core.first(arglist__3162);
var p2 = cljs.core.first(cljs.core.next(arglist__3162));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3162)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3162)));
return G__3153__delegate.call(this, p1, p2, p3, ps);
});
return G__3153;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__3124.call(this,p1);
case  2 :
return every_pred__3125.call(this,p1,p2);
case  3 :
return every_pred__3126.call(this,p1,p2,p3);
default:
return every_pred__3127.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__3127.cljs$lang$applyTo;
return every_pred;
})()
;
/**
* Takes a set of predicates and returns a function f that returns the first logical true value
* returned by one of its composing predicates against any of its arguments, else it returns
* logical false. Note that f is short-circuiting in that it will stop execution on the first
* argument that triggers a logical true result against the original predicates.
* @param {...*} var_args
*/
cljs.core.some_fn = (function() {
var some_fn = null;
var some_fn__3202 = (function (p){
return (function() {
var sp1 = null;
var sp1__3207 = (function (){
return null;
});
var sp1__3208 = (function (x){
return p.call(null,x);
});
var sp1__3209 = (function (x,y){
var or__3576__auto____3164 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____3164))
{return or__3576__auto____3164;
} else
{return p.call(null,y);
}
});
var sp1__3210 = (function (x,y,z){
var or__3576__auto____3165 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____3165))
{return or__3576__auto____3165;
} else
{var or__3576__auto____3166 = p.call(null,y);

if(cljs.core.truth_(or__3576__auto____3166))
{return or__3576__auto____3166;
} else
{return p.call(null,z);
}
}
});
var sp1__3211 = (function() { 
var G__3213__delegate = function (x,y,z,args){
var or__3576__auto____3167 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____3167))
{return or__3576__auto____3167;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__3213 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3213__delegate.call(this, x, y, z, args);
};
G__3213.cljs$lang$maxFixedArity = 3;
G__3213.cljs$lang$applyTo = (function (arglist__3214){
var x = cljs.core.first(arglist__3214);
var y = cljs.core.first(cljs.core.next(arglist__3214));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3214)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3214)));
return G__3213__delegate.call(this, x, y, z, args);
});
return G__3213;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__3207.call(this);
case  1 :
return sp1__3208.call(this,x);
case  2 :
return sp1__3209.call(this,x,y);
case  3 :
return sp1__3210.call(this,x,y,z);
default:
return sp1__3211.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__3211.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__3203 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__3215 = (function (){
return null;
});
var sp2__3216 = (function (x){
var or__3576__auto____3168 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____3168))
{return or__3576__auto____3168;
} else
{return p2.call(null,x);
}
});
var sp2__3217 = (function (x,y){
var or__3576__auto____3169 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____3169))
{return or__3576__auto____3169;
} else
{var or__3576__auto____3170 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____3170))
{return or__3576__auto____3170;
} else
{var or__3576__auto____3171 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____3171))
{return or__3576__auto____3171;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__3218 = (function (x,y,z){
var or__3576__auto____3172 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____3172))
{return or__3576__auto____3172;
} else
{var or__3576__auto____3173 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____3173))
{return or__3576__auto____3173;
} else
{var or__3576__auto____3174 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____3174))
{return or__3576__auto____3174;
} else
{var or__3576__auto____3175 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____3175))
{return or__3576__auto____3175;
} else
{var or__3576__auto____3176 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____3176))
{return or__3576__auto____3176;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__3219 = (function() { 
var G__3221__delegate = function (x,y,z,args){
var or__3576__auto____3177 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____3177))
{return or__3576__auto____3177;
} else
{return cljs.core.some.call(null,(function (p1__3080_SHARP_){
var or__3576__auto____3178 = p1.call(null,p1__3080_SHARP_);

if(cljs.core.truth_(or__3576__auto____3178))
{return or__3576__auto____3178;
} else
{return p2.call(null,p1__3080_SHARP_);
}
}),args);
}
};
var G__3221 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3221__delegate.call(this, x, y, z, args);
};
G__3221.cljs$lang$maxFixedArity = 3;
G__3221.cljs$lang$applyTo = (function (arglist__3222){
var x = cljs.core.first(arglist__3222);
var y = cljs.core.first(cljs.core.next(arglist__3222));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3222)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3222)));
return G__3221__delegate.call(this, x, y, z, args);
});
return G__3221;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__3215.call(this);
case  1 :
return sp2__3216.call(this,x);
case  2 :
return sp2__3217.call(this,x,y);
case  3 :
return sp2__3218.call(this,x,y,z);
default:
return sp2__3219.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__3219.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__3204 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__3223 = (function (){
return null;
});
var sp3__3224 = (function (x){
var or__3576__auto____3179 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____3179))
{return or__3576__auto____3179;
} else
{var or__3576__auto____3180 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____3180))
{return or__3576__auto____3180;
} else
{return p3.call(null,x);
}
}
});
var sp3__3225 = (function (x,y){
var or__3576__auto____3181 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____3181))
{return or__3576__auto____3181;
} else
{var or__3576__auto____3182 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____3182))
{return or__3576__auto____3182;
} else
{var or__3576__auto____3183 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____3183))
{return or__3576__auto____3183;
} else
{var or__3576__auto____3184 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____3184))
{return or__3576__auto____3184;
} else
{var or__3576__auto____3185 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____3185))
{return or__3576__auto____3185;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__3226 = (function (x,y,z){
var or__3576__auto____3186 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____3186))
{return or__3576__auto____3186;
} else
{var or__3576__auto____3187 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____3187))
{return or__3576__auto____3187;
} else
{var or__3576__auto____3188 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____3188))
{return or__3576__auto____3188;
} else
{var or__3576__auto____3189 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____3189))
{return or__3576__auto____3189;
} else
{var or__3576__auto____3190 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____3190))
{return or__3576__auto____3190;
} else
{var or__3576__auto____3191 = p3.call(null,y);

if(cljs.core.truth_(or__3576__auto____3191))
{return or__3576__auto____3191;
} else
{var or__3576__auto____3192 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____3192))
{return or__3576__auto____3192;
} else
{var or__3576__auto____3193 = p2.call(null,z);

if(cljs.core.truth_(or__3576__auto____3193))
{return or__3576__auto____3193;
} else
{return p3.call(null,z);
}
}
}
}
}
}
}
}
});
var sp3__3227 = (function() { 
var G__3229__delegate = function (x,y,z,args){
var or__3576__auto____3194 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____3194))
{return or__3576__auto____3194;
} else
{return cljs.core.some.call(null,(function (p1__3081_SHARP_){
var or__3576__auto____3195 = p1.call(null,p1__3081_SHARP_);

if(cljs.core.truth_(or__3576__auto____3195))
{return or__3576__auto____3195;
} else
{var or__3576__auto____3196 = p2.call(null,p1__3081_SHARP_);

if(cljs.core.truth_(or__3576__auto____3196))
{return or__3576__auto____3196;
} else
{return p3.call(null,p1__3081_SHARP_);
}
}
}),args);
}
};
var G__3229 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3229__delegate.call(this, x, y, z, args);
};
G__3229.cljs$lang$maxFixedArity = 3;
G__3229.cljs$lang$applyTo = (function (arglist__3230){
var x = cljs.core.first(arglist__3230);
var y = cljs.core.first(cljs.core.next(arglist__3230));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3230)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3230)));
return G__3229__delegate.call(this, x, y, z, args);
});
return G__3229;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__3223.call(this);
case  1 :
return sp3__3224.call(this,x);
case  2 :
return sp3__3225.call(this,x,y);
case  3 :
return sp3__3226.call(this,x,y,z);
default:
return sp3__3227.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__3227.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__3205 = (function() { 
var G__3231__delegate = function (p1,p2,p3,ps){
var ps__3197 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__3232 = (function (){
return null;
});
var spn__3233 = (function (x){
return cljs.core.some.call(null,(function (p1__3082_SHARP_){
return p1__3082_SHARP_.call(null,x);
}),ps__3197);
});
var spn__3234 = (function (x,y){
return cljs.core.some.call(null,(function (p1__3083_SHARP_){
var or__3576__auto____3198 = p1__3083_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____3198))
{return or__3576__auto____3198;
} else
{return p1__3083_SHARP_.call(null,y);
}
}),ps__3197);
});
var spn__3235 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__3084_SHARP_){
var or__3576__auto____3199 = p1__3084_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____3199))
{return or__3576__auto____3199;
} else
{var or__3576__auto____3200 = p1__3084_SHARP_.call(null,y);

if(cljs.core.truth_(or__3576__auto____3200))
{return or__3576__auto____3200;
} else
{return p1__3084_SHARP_.call(null,z);
}
}
}),ps__3197);
});
var spn__3236 = (function() { 
var G__3238__delegate = function (x,y,z,args){
var or__3576__auto____3201 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____3201))
{return or__3576__auto____3201;
} else
{return cljs.core.some.call(null,(function (p1__3085_SHARP_){
return cljs.core.some.call(null,p1__3085_SHARP_,args);
}),ps__3197);
}
};
var G__3238 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3238__delegate.call(this, x, y, z, args);
};
G__3238.cljs$lang$maxFixedArity = 3;
G__3238.cljs$lang$applyTo = (function (arglist__3239){
var x = cljs.core.first(arglist__3239);
var y = cljs.core.first(cljs.core.next(arglist__3239));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3239)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3239)));
return G__3238__delegate.call(this, x, y, z, args);
});
return G__3238;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__3232.call(this);
case  1 :
return spn__3233.call(this,x);
case  2 :
return spn__3234.call(this,x,y);
case  3 :
return spn__3235.call(this,x,y,z);
default:
return spn__3236.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__3236.cljs$lang$applyTo;
return spn;
})()
};
var G__3231 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3231__delegate.call(this, p1, p2, p3, ps);
};
G__3231.cljs$lang$maxFixedArity = 3;
G__3231.cljs$lang$applyTo = (function (arglist__3240){
var p1 = cljs.core.first(arglist__3240);
var p2 = cljs.core.first(cljs.core.next(arglist__3240));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3240)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3240)));
return G__3231__delegate.call(this, p1, p2, p3, ps);
});
return G__3231;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__3202.call(this,p1);
case  2 :
return some_fn__3203.call(this,p1,p2);
case  3 :
return some_fn__3204.call(this,p1,p2,p3);
default:
return some_fn__3205.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__3205.cljs$lang$applyTo;
return some_fn;
})()
;
/**
* Returns a lazy sequence consisting of the result of applying f to the
* set of first items of each coll, followed by applying f to the set
* of second items in each coll, until any one of the colls is
* exhausted.  Any remaining items in other colls are ignored. Function
* f should accept number-of-colls arguments.
* @param {...*} var_args
*/
cljs.core.map = (function() {
var map = null;
var map__3253 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3241 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3241))
{var s__3242 = temp__3726__auto____3241;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__3242)),map.call(null,f,cljs.core.rest.call(null,s__3242)));
} else
{return null;
}
})));
});
var map__3254 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3243 = cljs.core.seq.call(null,c1);
var s2__3244 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____3245 = s1__3243;

if(cljs.core.truth_(and__3574__auto____3245))
{return s2__3244;
} else
{return and__3574__auto____3245;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3243),cljs.core.first.call(null,s2__3244)),map.call(null,f,cljs.core.rest.call(null,s1__3243),cljs.core.rest.call(null,s2__3244)));
} else
{return null;
}
})));
});
var map__3255 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3246 = cljs.core.seq.call(null,c1);
var s2__3247 = cljs.core.seq.call(null,c2);
var s3__3248 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3574__auto____3249 = s1__3246;

if(cljs.core.truth_(and__3574__auto____3249))
{var and__3574__auto____3250 = s2__3247;

if(cljs.core.truth_(and__3574__auto____3250))
{return s3__3248;
} else
{return and__3574__auto____3250;
}
} else
{return and__3574__auto____3249;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__3246),cljs.core.first.call(null,s2__3247),cljs.core.first.call(null,s3__3248)),map.call(null,f,cljs.core.rest.call(null,s1__3246),cljs.core.rest.call(null,s2__3247),cljs.core.rest.call(null,s3__3248)));
} else
{return null;
}
})));
});
var map__3256 = (function() { 
var G__3258__delegate = function (f,c1,c2,c3,colls){
var step__3252 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3251 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3251)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__3251),step.call(null,map.call(null,cljs.core.rest,ss__3251)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__3163_SHARP_){
return cljs.core.apply.call(null,f,p1__3163_SHARP_);
}),step__3252.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__3258 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__3258__delegate.call(this, f, c1, c2, c3, colls);
};
G__3258.cljs$lang$maxFixedArity = 4;
G__3258.cljs$lang$applyTo = (function (arglist__3259){
var f = cljs.core.first(arglist__3259);
var c1 = cljs.core.first(cljs.core.next(arglist__3259));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3259)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3259))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3259))));
return G__3258__delegate.call(this, f, c1, c2, c3, colls);
});
return G__3258;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__3253.call(this,f,c1);
case  3 :
return map__3254.call(this,f,c1,c2);
case  4 :
return map__3255.call(this,f,c1,c2,c3);
default:
return map__3256.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__3256.cljs$lang$applyTo;
return map;
})()
;
/**
* Returns a lazy sequence of the first n items in coll, or all items if
* there are fewer than n.
*/
cljs.core.take = (function take(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,n)))
{var temp__3726__auto____3260 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3260))
{var s__3261 = temp__3726__auto____3260;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3261),take.call(null,cljs.core.dec.call(null,n),cljs.core.rest.call(null,s__3261)));
} else
{return null;
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of all but the first n items in coll.
*/
cljs.core.drop = (function drop(n,coll){
var step__3264 = (function (n,coll){
while(true){
var s__3262 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____3263 = cljs.core.pos_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____3263))
{return s__3262;
} else
{return and__3574__auto____3263;
}
})()))
{{
var G__3265 = cljs.core.dec.call(null,n);
var G__3266 = cljs.core.rest.call(null,s__3262);
n = G__3265;
coll = G__3266;
continue;
}
} else
{return s__3262;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3264.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__3267 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__3268 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__3267.call(this,n);
case  2 :
return drop_last__3268.call(this,n,s);
}
throw('Invalid arity: ' + arguments.length);
};
return drop_last;
})()
;
/**
* Returns a seq of the last n items in coll.  Depending on the type
* of coll may be no better than linear time.  For vectors, see also subvec.
*/
cljs.core.take_last = (function take_last(n,coll){
var s__3270 = cljs.core.seq.call(null,coll);
var lead__3271 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__3271))
{{
var G__3272 = cljs.core.next.call(null,s__3270);
var G__3273 = cljs.core.next.call(null,lead__3271);
s__3270 = G__3272;
lead__3271 = G__3273;
continue;
}
} else
{return s__3270;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__3276 = (function (pred,coll){
while(true){
var s__3274 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____3275 = s__3274;

if(cljs.core.truth_(and__3574__auto____3275))
{return pred.call(null,cljs.core.first.call(null,s__3274));
} else
{return and__3574__auto____3275;
}
})()))
{{
var G__3277 = pred;
var G__3278 = cljs.core.rest.call(null,s__3274);
pred = G__3277;
coll = G__3278;
continue;
}
} else
{return s__3274;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__3276.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3279 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3279))
{var s__3280 = temp__3726__auto____3279;

return cljs.core.concat.call(null,s__3280,cycle.call(null,s__3280));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take n coll) (drop n coll)]
*/
cljs.core.split_at = (function split_at(n,coll){
return cljs.core.Vector.fromArray([cljs.core.take.call(null,n,coll),cljs.core.drop.call(null,n,coll)]);
});
/**
* Returns a lazy (infinite!, or length n if supplied) sequence of xs.
*/
cljs.core.repeat = (function() {
var repeat = null;
var repeat__3281 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__3282 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__3281.call(this,n);
case  2 :
return repeat__3282.call(this,n,x);
}
throw('Invalid arity: ' + arguments.length);
};
return repeat;
})()
;
/**
* Returns a lazy seq of n xs.
*/
cljs.core.replicate = (function replicate(n,x){
return cljs.core.take.call(null,n,cljs.core.repeat.call(null,x));
});
/**
* Takes a function of no args, presumably with side effects, and
* returns an infinite (or length n if supplied) lazy sequence of calls
* to it
*/
cljs.core.repeatedly = (function() {
var repeatedly = null;
var repeatedly__3284 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__3285 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__3284.call(this,n);
case  2 :
return repeatedly__3285.call(this,n,f);
}
throw('Invalid arity: ' + arguments.length);
};
return repeatedly;
})()
;
/**
* Returns a lazy sequence of x, (f x), (f (f x)) etc. f must be free of side-effects
*/
cljs.core.iterate = (function iterate(f,x){
return cljs.core.cons.call(null,x,(new cljs.core.LazySeq(null,false,(function (){
return iterate.call(null,f,f.call(null,x));
}))));
});
/**
* Returns a lazy seq of the first item in each coll, then the second etc.
* @param {...*} var_args
*/
cljs.core.interleave = (function() {
var interleave = null;
var interleave__3291 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__3287 = cljs.core.seq.call(null,c1);
var s2__3288 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____3289 = s1__3287;

if(cljs.core.truth_(and__3574__auto____3289))
{return s2__3288;
} else
{return and__3574__auto____3289;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__3287),cljs.core.cons.call(null,cljs.core.first.call(null,s2__3288),interleave.call(null,cljs.core.rest.call(null,s1__3287),cljs.core.rest.call(null,s2__3288))));
} else
{return null;
}
})));
});
var interleave__3292 = (function() { 
var G__3294__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__3290 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__3290)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__3290),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__3290)));
} else
{return null;
}
})));
};
var G__3294 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3294__delegate.call(this, c1, c2, colls);
};
G__3294.cljs$lang$maxFixedArity = 2;
G__3294.cljs$lang$applyTo = (function (arglist__3295){
var c1 = cljs.core.first(arglist__3295);
var c2 = cljs.core.first(cljs.core.next(arglist__3295));
var colls = cljs.core.rest(cljs.core.next(arglist__3295));
return G__3294__delegate.call(this, c1, c2, colls);
});
return G__3294;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__3291.call(this,c1,c2);
default:
return interleave__3292.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__3292.cljs$lang$applyTo;
return interleave;
})()
;
/**
* Returns a lazy seq of the elements of coll separated by sep
*/
cljs.core.interpose = (function interpose(sep,coll){
return cljs.core.drop.call(null,1,cljs.core.interleave.call(null,cljs.core.repeat.call(null,sep),coll));
});
/**
* Take a collection of collections, and return a lazy seq
* of items from the inner collection
*/
cljs.core.flatten1 = (function flatten1(colls){
var cat__3298 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____3296 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____3296))
{var coll__3297 = temp__3723__auto____3296;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__3297),cat.call(null,cljs.core.rest.call(null,coll__3297),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__3298.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__3299 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__3300 = (function() { 
var G__3302__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__3302 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__3302__delegate.call(this, f, coll, colls);
};
G__3302.cljs$lang$maxFixedArity = 2;
G__3302.cljs$lang$applyTo = (function (arglist__3303){
var f = cljs.core.first(arglist__3303);
var coll = cljs.core.first(cljs.core.next(arglist__3303));
var colls = cljs.core.rest(cljs.core.next(arglist__3303));
return G__3302__delegate.call(this, f, coll, colls);
});
return G__3302;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__3299.call(this,f,coll);
default:
return mapcat__3300.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__3300.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3304 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3304))
{var s__3305 = temp__3726__auto____3304;

var f__3306 = cljs.core.first.call(null,s__3305);
var r__3307 = cljs.core.rest.call(null,s__3305);

if(cljs.core.truth_(pred.call(null,f__3306)))
{return cljs.core.cons.call(null,f__3306,filter.call(null,pred,r__3307));
} else
{return filter.call(null,pred,r__3307);
}
} else
{return null;
}
})));
});
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns false. pred must be free of side-effects.
*/
cljs.core.remove = (function remove(pred,coll){
return cljs.core.filter.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
* Returns a lazy sequence of the nodes in a tree, via a depth-first walk.
* branch? must be a fn of one arg that returns true if passed a node
* that can have children (but may not).  children must be a fn of one
* arg that returns a sequence of the children. Will only be called on
* nodes for which branch? returns true. Root is the root node of the
* tree.
*/
cljs.core.tree_seq = (function tree_seq(branch_QMARK_,children,root){
var walk__3309 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__3309.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__3308_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__3308_SHARP_));
}),cljs.core.rest.call(null,cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,x)));
});
/**
* Returns a new coll consisting of to-coll with all of the items of
* from-coll conjoined.
*/
cljs.core.into = (function into(to,from){
return cljs.core.reduce.call(null,cljs.core._conj,to,from);
});
/**
* Returns a lazy sequence of lists of n items each, at offsets step
* apart. If step is not supplied, defaults to n, i.e. the partitions
* do not overlap. If a pad collection is supplied, use its elements as
* necessary to complete last partition upto n items. In case there are
* not enough padding elements, return a partition with less than n items.
*/
cljs.core.partition = (function() {
var partition = null;
var partition__3316 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__3317 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3310 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3310))
{var s__3311 = temp__3726__auto____3310;

var p__3312 = cljs.core.take.call(null,n,s__3311);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3312))))
{return cljs.core.cons.call(null,p__3312,partition.call(null,n,step,cljs.core.drop.call(null,step,s__3311)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__3318 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3313 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3313))
{var s__3314 = temp__3726__auto____3313;

var p__3315 = cljs.core.take.call(null,n,s__3314);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__3315))))
{return cljs.core.cons.call(null,p__3315,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__3314)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__3315,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__3316.call(this,n,step);
case  3 :
return partition__3317.call(this,n,step,pad);
case  4 :
return partition__3318.call(this,n,step,pad,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition;
})()
;
/**
* Returns the value in a nested associative structure,
* where ks is a sequence of ke(ys. Returns nil if the key is not present,
* or the not-found value if supplied.
*/
cljs.core.get_in = (function() {
var get_in = null;
var get_in__3324 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__3325 = (function (m,ks,not_found){
var sentinel__3320 = cljs.core.lookup_sentinel;
var m__3321 = m;
var ks__3322 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__3322))
{var m__3323 = cljs.core.get.call(null,m__3321,cljs.core.first.call(null,ks__3322),sentinel__3320);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__3320,m__3323)))
{return not_found;
} else
{{
var G__3327 = sentinel__3320;
var G__3328 = m__3323;
var G__3329 = cljs.core.next.call(null,ks__3322);
sentinel__3320 = G__3327;
m__3321 = G__3328;
ks__3322 = G__3329;
continue;
}
}
} else
{return m__3321;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__3324.call(this,m,ks);
case  3 :
return get_in__3325.call(this,m,ks,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return get_in;
})()
;
/**
* Associates a value in a nested associative structure, where ks is a
* sequence of keys and v is the new value and returns a new nested structure.
* If any levels do not exist, hash-maps will be created.
*/
cljs.core.assoc_in = (function assoc_in(m,p__3330,v){
var vec__3331__3332 = p__3330;
var k__3333 = cljs.core.nth.call(null,vec__3331__3332,0,null);
var ks__3334 = cljs.core.nthnext.call(null,vec__3331__3332,1);

if(cljs.core.truth_(ks__3334))
{return cljs.core.assoc.call(null,m,k__3333,assoc_in.call(null,cljs.core.get.call(null,m,k__3333),ks__3334,v));
} else
{return cljs.core.assoc.call(null,m,k__3333,v);
}
});
/**
* 'Updates' a value in a nested associative structure, where ks is a
* sequence of keys and f is a function that will take the old value
* and any supplied args and return the new value, and returns a new
* nested structure.  If any levels do not exist, hash-maps will be
* created.
* @param {...*} var_args
*/
cljs.core.update_in = (function() { 
var update_in__delegate = function (m,p__3335,f,args){
var vec__3336__3337 = p__3335;
var k__3338 = cljs.core.nth.call(null,vec__3336__3337,0,null);
var ks__3339 = cljs.core.nthnext.call(null,vec__3336__3337,1);

if(cljs.core.truth_(ks__3339))
{return cljs.core.assoc.call(null,m,k__3338,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__3338),ks__3339,f,args));
} else
{return cljs.core.assoc.call(null,m,k__3338,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__3338),args));
}
};
var update_in = function (m,p__3335,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__3335, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__3340){
var m = cljs.core.first(arglist__3340);
var p__3335 = cljs.core.first(cljs.core.next(arglist__3340));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3340)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3340)));
return update_in__delegate.call(this, m, p__3335, f, args);
});
return update_in;
})()
;

/**
* @constructor
*/
cljs.core.Vector = (function (meta,array){
this.meta = meta;
this.array = array;
})
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3341 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3342 = this;
var new_array__3343 = cljs.core.aclone.call(null,this__3342.array);

new_array__3343.push(o);
return (new cljs.core.Vector(this__3342.meta,new_array__3343));
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3344 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__3344.array.length,0)))
{var vector_seq__3345 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core._LT_.call(null,i,this__3344.array.length)))
{return cljs.core.cons.call(null,(this__3344.array[i]),vector_seq.call(null,cljs.core.inc.call(null,i)));
} else
{return null;
}
})));
});

return vector_seq__3345.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__3346 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__3347 = this;
var count__3348 = this__3347.array.length;

if(cljs.core.truth_(cljs.core._GT_.call(null,count__3348,0)))
{return (this__3347.array[cljs.core.dec.call(null,count__3348)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__3349 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__3349.array.length,0)))
{var new_array__3350 = cljs.core.aclone.call(null,this__3349.array);

new_array__3350.pop();
return (new cljs.core.Vector(this__3349.meta,new_array__3350));
} else
{throw "Can't pop empty vector";
}
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3351 = this;
return (new cljs.core.Vector(meta,this__3351.array));
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3352 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__3352.meta);
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3366 = null;
var G__3366__3367 = (function (coll,n){
var this__3353 = this;
if(cljs.core.truth_((function (){var and__3574__auto____3354 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____3354))
{return cljs.core._LT_.call(null,n,this__3353.array.length);
} else
{return and__3574__auto____3354;
}
})()))
{return (this__3353.array[n]);
} else
{return null;
}
});
var G__3366__3368 = (function (coll,n,not_found){
var this__3355 = this;
if(cljs.core.truth_((function (){var and__3574__auto____3356 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____3356))
{return cljs.core._LT_.call(null,n,this__3355.array.length);
} else
{return and__3574__auto____3356;
}
})()))
{return (this__3355.array[n]);
} else
{return not_found;
}
});
G__3366 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__3366__3367.call(this,coll,n);
case  3 :
return G__3366__3368.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3366;
})()
;
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3357 = this;
return this__3357.meta;
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3370 = null;
var G__3370__3371 = (function (v,f){
var this__3358 = this;
return cljs.core.ci_reduce.call(null,this__3358.array,f);
});
var G__3370__3372 = (function (v,f,start){
var this__3359 = this;
return cljs.core.ci_reduce.call(null,this__3359.array,f,start);
});
G__3370 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__3370__3371.call(this,v,f);
case  3 :
return G__3370__3372.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3370;
})()
;
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3360 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3361 = this;
return this__3361.array.length;
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3362 = this;
var new_array__3363 = cljs.core.aclone.call(null,this__3362.array);

(new_array__3363[k] = v);
return (new cljs.core.Vector(this__3362.meta,new_array__3363));
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3374 = null;
var G__3374__3375 = (function (coll,k){
var this__3364 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__3374__3376 = (function (coll,k,not_found){
var this__3365 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__3374 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3374__3375.call(this,coll,k);
case  3 :
return G__3374__3376.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3374;
})()
;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__3378 = null;
var G__3378__3379 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3378__3380 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3378 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3378__3379.call(this,_,k);
case  3 :
return G__3378__3380.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3378;
})()
;
cljs.core.vec = (function vec(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.Vector.EMPTY,coll);
});
/**
* @param {...*} var_args
*/
cljs.core.vector = (function() { 
var vector__delegate = function (args){
return cljs.core.vec.call(null,args);
};
var vector = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return vector__delegate.call(this, args);
};
vector.cljs$lang$maxFixedArity = 0;
vector.cljs$lang$applyTo = (function (arglist__3382){
var args = cljs.core.seq( arglist__3382 );;
return vector__delegate.call(this, args);
});
return vector;
})()
;

/**
* @constructor
*/
cljs.core.NeverEquiv = (function (){
})
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$ = true;
cljs.core.NeverEquiv.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3383 = this;
return false;
});
cljs.core.never_equiv = (new cljs.core.NeverEquiv());
/**
* Assumes y is a map. Returns true if x equals y, otherwise returns
* false.
*/
cljs.core.equiv_map = (function equiv_map(x,y){
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.map_QMARK_.call(null,y))?(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,y)))?cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (xkv){
return cljs.core._EQ_.call(null,cljs.core.get.call(null,y,cljs.core.first.call(null,xkv),cljs.core.never_equiv),cljs.core.second.call(null,xkv));
}),x)):null):null));
});
cljs.core.scan_array = (function scan_array(incr,k,array){
var len__3384 = array.length;

var i__3385 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__3385,len__3384)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__3385]))))
{return i__3385;
} else
{{
var G__3386 = cljs.core._PLUS_.call(null,i__3385,incr);
i__3385 = G__3386;
continue;
}
}
} else
{return null;
}
break;
}
});
cljs.core.obj_map_contains_key_QMARK_ = (function() {
var obj_map_contains_key_QMARK_ = null;
var obj_map_contains_key_QMARK___3388 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___3389 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3574__auto____3387 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____3387))
{return strobj.hasOwnProperty(k);
} else
{return and__3574__auto____3387;
}
})()))
{return true_val;
} else
{return false_val;
}
});
obj_map_contains_key_QMARK_ = function(k,strobj,true_val,false_val){
switch(arguments.length){
case  2 :
return obj_map_contains_key_QMARK___3388.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___3389.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;

/**
* @constructor
*/
cljs.core.ObjMap = (function (meta,keys,strobj){
this.meta = meta;
this.keys = keys;
this.strobj = strobj;
})
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3392 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3393 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3394 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__3394.keys.length)))
{return cljs.core.map.call(null,(function (p1__3391_SHARP_){
return cljs.core.vector.call(null,p1__3391_SHARP_,(this__3394.strobj[p1__3391_SHARP_]));
}),this__3394.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3395 = this;
return (new cljs.core.ObjMap(meta,this__3395.keys,this__3395.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3396 = this;
if(cljs.core.truth_((function (){var and__3574__auto____3397 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____3397))
{return this__3396.strobj.hasOwnProperty(k);
} else
{return and__3574__auto____3397;
}
})()))
{var new_keys__3398 = cljs.core.aclone.call(null,this__3396.keys);
var new_strobj__3399 = goog.object.clone.call(null,this__3396.strobj);

new_keys__3398.splice(cljs.core.scan_array.call(null,1,k,new_keys__3398),1);
cljs.core.js_delete.call(null,new_strobj__3399,k);
return (new cljs.core.ObjMap(this__3396.meta,new_keys__3398,new_strobj__3399));
} else
{return coll;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3400 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__3400.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3401 = this;
return this__3401.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3402 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3403 = this;
return this__3403.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3404 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__3405 = goog.object.clone.call(null,this__3404.strobj);
var overwrite_QMARK___3406 = new_strobj__3405.hasOwnProperty(k);

(new_strobj__3405[k] = v);
if(cljs.core.truth_(overwrite_QMARK___3406))
{return (new cljs.core.ObjMap(this__3404.meta,this__3404.keys,new_strobj__3405));
} else
{var new_keys__3407 = cljs.core.aclone.call(null,this__3404.keys);

new_keys__3407.push(k);
return (new cljs.core.ObjMap(this__3404.meta,new_keys__3407,new_strobj__3405));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__3404.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3408 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3408.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3411 = null;
var G__3411__3412 = (function (coll,k){
var this__3409 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3411__3413 = (function (coll,k,not_found){
var this__3410 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__3410.strobj,(this__3410.strobj[k]),not_found);
});
G__3411 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3411__3412.call(this,coll,k);
case  3 :
return G__3411__3413.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3411;
})()
;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__3416 = null;
var G__3416__3417 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3416__3418 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3416 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3416__3417.call(this,_,k);
case  3 :
return G__3416__3418.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3416;
})()
;

/**
* @constructor
*/
cljs.core.HashMap = (function (meta,count,hashobj){
this.meta = meta;
this.count = count;
this.hashobj = hashobj;
})
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3420 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__3421 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3422 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__3422.count)))
{var hashes__3423 = cljs.core.js_keys.call(null,this__3422.hashobj);

return cljs.core.mapcat.call(null,(function (p1__3415_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__3422.hashobj[p1__3415_SHARP_])));
}),hashes__3423);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3424 = this;
return (new cljs.core.HashMap(meta,this__3424.count,this__3424.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__3425 = this;
var h__3426 = cljs.core.hash.call(null,k);
var bucket__3427 = (this__3425.hashobj[h__3426]);
var i__3428 = (cljs.core.truth_(bucket__3427)?cljs.core.scan_array.call(null,2,k,bucket__3427):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__3428)))
{return coll;
} else
{var new_hashobj__3429 = goog.object.clone.call(null,this__3425.hashobj);

if(cljs.core.truth_(cljs.core._GT_.call(null,3,bucket__3427.length)))
{cljs.core.js_delete.call(null,new_hashobj__3429,h__3426);
} else
{var new_bucket__3430 = cljs.core.aclone.call(null,bucket__3427);

new_bucket__3430.splice(i__3428,2);
(new_hashobj__3429[h__3426] = new_bucket__3430);
}
return (new cljs.core.HashMap(this__3425.meta,cljs.core.dec.call(null,this__3425.count),new_hashobj__3429));
}
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3431 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__3431.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3432 = this;
return this__3432.meta;
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3433 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3434 = this;
return this__3434.count;
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__3435 = this;
var h__3436 = cljs.core.hash.call(null,k);
var bucket__3437 = (this__3435.hashobj[h__3436]);

if(cljs.core.truth_(bucket__3437))
{var new_bucket__3438 = cljs.core.aclone.call(null,bucket__3437);
var new_hashobj__3439 = goog.object.clone.call(null,this__3435.hashobj);

(new_hashobj__3439[h__3436] = new_bucket__3438);
var temp__3723__auto____3440 = cljs.core.scan_array.call(null,2,k,new_bucket__3438);

if(cljs.core.truth_(temp__3723__auto____3440))
{var i__3441 = temp__3723__auto____3440;

(new_bucket__3438[cljs.core.inc.call(null,i__3441)] = v);
return (new cljs.core.HashMap(this__3435.meta,this__3435.count,new_hashobj__3439));
} else
{new_bucket__3438.push(k,v);
return (new cljs.core.HashMap(this__3435.meta,cljs.core.inc.call(null,this__3435.count),new_hashobj__3439));
}
} else
{var new_hashobj__3442 = goog.object.clone.call(null,this__3435.hashobj);

(new_hashobj__3442[h__3436] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__3435.meta,cljs.core.inc.call(null,this__3435.count),new_hashobj__3442));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__3443 = this;
var bucket__3444 = (this__3443.hashobj[cljs.core.hash.call(null,k)]);
var i__3445 = (cljs.core.truth_(bucket__3444)?cljs.core.scan_array.call(null,2,k,bucket__3444):null);

if(cljs.core.truth_(i__3445))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3450 = null;
var G__3450__3451 = (function (coll,k){
var this__3446 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3450__3452 = (function (coll,k,not_found){
var this__3447 = this;
var bucket__3448 = (this__3447.hashobj[cljs.core.hash.call(null,k)]);
var i__3449 = (cljs.core.truth_(bucket__3448)?cljs.core.scan_array.call(null,2,k,bucket__3448):null);

if(cljs.core.truth_(i__3449))
{return (bucket__3448[cljs.core.inc.call(null,i__3449)]);
} else
{return not_found;
}
});
G__3450 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3450__3451.call(this,coll,k);
case  3 :
return G__3450__3452.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3450;
})()
;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3454 = ks.length;

var i__3455 = 0;
var out__3456 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__3455,len__3454)))
{{
var G__3457 = cljs.core.inc.call(null,i__3455);
var G__3458 = cljs.core.assoc.call(null,out__3456,(ks[i__3455]),(vs[i__3455]));
i__3455 = G__3457;
out__3456 = G__3458;
continue;
}
} else
{return out__3456;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3459 = null;
var G__3459__3460 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3459__3461 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3459 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3459__3460.call(this,_,k);
case  3 :
return G__3459__3461.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3459;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__3463 = cljs.core.seq.call(null,keyvals);
var out__3464 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3463))
{{
var G__3465 = cljs.core.nnext.call(null,in$__3463);
var G__3466 = cljs.core.assoc.call(null,out__3464,cljs.core.first.call(null,in$__3463),cljs.core.second.call(null,in$__3463));
in$__3463 = G__3465;
out__3464 = G__3466;
continue;
}
} else
{return out__3464;
}
break;
}
};
var hash_map = function (var_args){
var keyvals = null;
if (goog.isDef(var_args)) {
  keyvals = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return hash_map__delegate.call(this, keyvals);
};
hash_map.cljs$lang$maxFixedArity = 0;
hash_map.cljs$lang$applyTo = (function (arglist__3467){
var keyvals = cljs.core.seq( arglist__3467 );;
return hash_map__delegate.call(this, keyvals);
});
return hash_map;
})()
;
/**
* Returns a sequence of the map's keys.
*/
cljs.core.keys = (function keys(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,hash_map));
});
/**
* Returns a sequence of the map's values.
*/
cljs.core.vals = (function vals(hash_map){
return cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,hash_map));
});
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping from
* the latter (left-to-right) will be the mapping in the result.
* @param {...*} var_args
*/
cljs.core.merge = (function() { 
var merge__delegate = function (maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{return cljs.core.reduce.call(null,(function (p1__3468_SHARP_,p2__3469_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3576__auto____3470 = p1__3468_SHARP_;

if(cljs.core.truth_(or__3576__auto____3470))
{return or__3576__auto____3470;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3469_SHARP_);
}),maps);
} else
{return null;
}
};
var merge = function (var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return merge__delegate.call(this, maps);
};
merge.cljs$lang$maxFixedArity = 0;
merge.cljs$lang$applyTo = (function (arglist__3471){
var maps = cljs.core.seq( arglist__3471 );;
return merge__delegate.call(this, maps);
});
return merge;
})()
;
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by calling (f val-in-result val-in-latter).
* @param {...*} var_args
*/
cljs.core.merge_with = (function() { 
var merge_with__delegate = function (f,maps){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,maps)))
{var merge_entry__3474 = (function (m,e){
var k__3472 = cljs.core.first.call(null,e);
var v__3473 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__3472)))
{return cljs.core.assoc.call(null,m,k__3472,f.call(null,cljs.core.get.call(null,m,k__3472),v__3473));
} else
{return cljs.core.assoc.call(null,m,k__3472,v__3473);
}
});
var merge2__3476 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__3474,(function (){var or__3576__auto____3475 = m1;

if(cljs.core.truth_(or__3576__auto____3475))
{return or__3576__auto____3475;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__3476,maps);
} else
{return null;
}
};
var merge_with = function (f,var_args){
var maps = null;
if (goog.isDef(var_args)) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return merge_with__delegate.call(this, f, maps);
};
merge_with.cljs$lang$maxFixedArity = 1;
merge_with.cljs$lang$applyTo = (function (arglist__3477){
var f = cljs.core.first(arglist__3477);
var maps = cljs.core.rest(arglist__3477);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3479 = cljs.core.ObjMap.fromObject([],{});
var keys__3480 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3480))
{var key__3481 = cljs.core.first.call(null,keys__3480);
var entry__3482 = cljs.core.get.call(null,map,key__3481);

{
var G__3483 = (cljs.core.truth_(entry__3482)?cljs.core.assoc.call(null,ret__3479,key__3481,entry__3482):ret__3479);
var G__3484 = cljs.core.next.call(null,keys__3480);
ret__3479 = G__3483;
keys__3480 = G__3484;
continue;
}
} else
{return ret__3479;
}
break;
}
});

/**
* @constructor
*/
cljs.core.Set = (function (meta,hash_map){
this.meta = meta;
this.hash_map = hash_map;
})
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__3485 = this;
return (new cljs.core.Set(this__3485.meta,cljs.core.dissoc.call(null,this__3485.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3486 = this;
var and__3574__auto____3487 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3574__auto____3487))
{var and__3574__auto____3488 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3574__auto____3488))
{return cljs.core.every_QMARK_.call(null,(function (p1__3478_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3478_SHARP_);
}),other);
} else
{return and__3574__auto____3488;
}
} else
{return and__3574__auto____3487;
}
});
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3489 = this;
return (new cljs.core.Set(this__3489.meta,cljs.core.assoc.call(null,this__3489.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3490 = this;
return cljs.core.keys.call(null,this__3490.hash_map);
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3491 = this;
return (new cljs.core.Set(meta,this__3491.hash_map));
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3492 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3492.meta);
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3493 = this;
return this__3493.meta;
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3494 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3495 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3498 = null;
var G__3498__3499 = (function (coll,v){
var this__3496 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3498__3500 = (function (coll,v,not_found){
var this__3497 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3497.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3498 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3498__3499.call(this,coll,v);
case  3 :
return G__3498__3500.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3498;
})()
;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3502 = null;
var G__3502__3503 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3502__3504 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3502 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3502__3503.call(this,_,k);
case  3 :
return G__3502__3504.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3502;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3507 = cljs.core.seq.call(null,coll);
var out__3508 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3507))))
{{
var G__3509 = cljs.core.rest.call(null,in$__3507);
var G__3510 = cljs.core.conj.call(null,out__3508,cljs.core.first.call(null,in$__3507));
in$__3507 = G__3509;
out__3508 = G__3510;
continue;
}
} else
{return out__3508;
}
break;
}
});
/**
* Given a map of replacement pairs and a vector/collection, returns a
* vector/seq with any elements = a key in smap replaced with the
* corresponding val in smap
*/
cljs.core.replace = (function replace(smap,coll){
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,coll)))
{var n__3511 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3723__auto____3512 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3723__auto____3512))
{var e__3513 = temp__3723__auto____3512;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3513));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3511,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3506_SHARP_){
var temp__3723__auto____3514 = cljs.core.find.call(null,smap,p1__3506_SHARP_);

if(cljs.core.truth_(temp__3723__auto____3514))
{var e__3515 = temp__3723__auto____3514;

return cljs.core.second.call(null,e__3515);
} else
{return p1__3506_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3523 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3516,seen){
while(true){
var vec__3517__3518 = p__3516;
var f__3519 = cljs.core.nth.call(null,vec__3517__3518,0,null);
var xs__3520 = vec__3517__3518;

var temp__3726__auto____3521 = cljs.core.seq.call(null,xs__3520);

if(cljs.core.truth_(temp__3726__auto____3521))
{var s__3522 = temp__3726__auto____3521;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3519)))
{{
var G__3524 = cljs.core.rest.call(null,s__3522);
var G__3525 = seen;
p__3516 = G__3524;
seen = G__3525;
continue;
}
} else
{return cljs.core.cons.call(null,f__3519,step.call(null,cljs.core.rest.call(null,s__3522),cljs.core.conj.call(null,seen,f__3519)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3523.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3526 = cljs.core.Vector.fromArray([]);
var s__3527 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3527)))
{{
var G__3528 = cljs.core.conj.call(null,ret__3526,cljs.core.first.call(null,s__3527));
var G__3529 = cljs.core.next.call(null,s__3527);
ret__3526 = G__3528;
s__3527 = G__3529;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3526);
}
break;
}
});
/**
* Returns the name String of a string, symbol or keyword.
*/
cljs.core.name = (function name(x){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,x)))
{return x;
} else
{if(cljs.core.truth_((function (){var or__3576__auto____3530 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____3530))
{return or__3576__auto____3530;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3531 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._LT_.call(null,i__3531,0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,cljs.core.inc.call(null,i__3531));
}
} else
{if(cljs.core.truth_("﷐'else"))
{return null;
} else
{return null;
}
}
}
});
/**
* Returns the namespace String of a symbol or keyword, or nil if not present.
*/
cljs.core.namespace = (function namespace(x){
if(cljs.core.truth_((function (){var or__3576__auto____3532 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____3532))
{return or__3576__auto____3532;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3533 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._GT_.call(null,i__3533,-1)))
{return cljs.core.subs.call(null,x,2,i__3533);
} else
{return null;
}
} else
{return "﷐'else";
}
});
/**
* Returns a map with the keys mapped to the corresponding vals.
*/
cljs.core.zipmap = (function zipmap(keys,vals){
var map__3536 = cljs.core.ObjMap.fromObject([],{});
var ks__3537 = cljs.core.seq.call(null,keys);
var vs__3538 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____3539 = ks__3537;

if(cljs.core.truth_(and__3574__auto____3539))
{return vs__3538;
} else
{return and__3574__auto____3539;
}
})()))
{{
var G__3540 = cljs.core.assoc.call(null,map__3536,cljs.core.first.call(null,ks__3537),cljs.core.first.call(null,vs__3538));
var G__3541 = cljs.core.next.call(null,ks__3537);
var G__3542 = cljs.core.next.call(null,vs__3538);
map__3536 = G__3540;
ks__3537 = G__3541;
vs__3538 = G__3542;
continue;
}
} else
{return map__3536;
}
break;
}
});
/**
* Returns the x for which (k x), a number, is greatest.
* @param {...*} var_args
*/
cljs.core.max_key = (function() {
var max_key = null;
var max_key__3545 = (function (k,x){
return x;
});
var max_key__3546 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._GT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3547 = (function() { 
var G__3549__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3534_SHARP_,p2__3535_SHARP_){
return max_key.call(null,k,p1__3534_SHARP_,p2__3535_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3549 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3549__delegate.call(this, k, x, y, more);
};
G__3549.cljs$lang$maxFixedArity = 3;
G__3549.cljs$lang$applyTo = (function (arglist__3550){
var k = cljs.core.first(arglist__3550);
var x = cljs.core.first(cljs.core.next(arglist__3550));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3550)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3550)));
return G__3549__delegate.call(this, k, x, y, more);
});
return G__3549;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3545.call(this,k,x);
case  3 :
return max_key__3546.call(this,k,x,y);
default:
return max_key__3547.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3547.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3551 = (function (k,x){
return x;
});
var min_key__3552 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._LT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3553 = (function() { 
var G__3555__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3543_SHARP_,p2__3544_SHARP_){
return min_key.call(null,k,p1__3543_SHARP_,p2__3544_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3555 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3555__delegate.call(this, k, x, y, more);
};
G__3555.cljs$lang$maxFixedArity = 3;
G__3555.cljs$lang$applyTo = (function (arglist__3556){
var k = cljs.core.first(arglist__3556);
var x = cljs.core.first(cljs.core.next(arglist__3556));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3556)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3556)));
return G__3555__delegate.call(this, k, x, y, more);
});
return G__3555;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3551.call(this,k,x);
case  3 :
return min_key__3552.call(this,k,x,y);
default:
return min_key__3553.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3553.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3559 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3560 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3557 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3557))
{var s__3558 = temp__3726__auto____3557;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3558),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3558)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3559.call(this,n,step);
case  3 :
return partition_all__3560.call(this,n,step,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return partition_all;
})()
;
/**
* Returns a lazy sequence of successive items from coll while
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.take_while = (function take_while(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3562 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3562))
{var s__3563 = temp__3726__auto____3562;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3563))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3563),take_while.call(null,pred,cljs.core.rest.call(null,s__3563)));
} else
{return null;
}
} else
{return null;
}
})));
});

/**
* @constructor
*/
cljs.core.Range = (function (meta,start,end,step){
this.meta = meta;
this.start = start;
this.end = end;
this.step = step;
})
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__3564 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__3565 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__3566 = this;
return this__3566.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__3567 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core._seq.call(null,rng)))))
{return (new cljs.core.Range(this__3567.meta,cljs.core._PLUS_.call(null,this__3567.start,this__3567.step),this__3567.end,this__3567.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__3568 = this;
var comp__3569 = (cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__3568.step))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__3569.call(null,this__3568.start,this__3568.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__3570 = this;
return (new cljs.core.Range(meta,this__3570.start,this__3570.end,this__3570.step));
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__3571 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3571.meta);
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3583 = null;
var G__3583__3584 = (function (rng,n){
var this__3572 = this;
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,rng))))
{return cljs.core._PLUS_.call(null,this__3572.start,cljs.core._STAR_.call(null,n,this__3572.step));
} else
{if(cljs.core.truth_((function (){var and__3574__auto____3573 = cljs.core._GT_.call(null,this__3572.start,this__3572.end);

if(cljs.core.truth_(and__3574__auto____3573))
{return cljs.core._EQ_.call(null,this__3572.step,0);
} else
{return and__3574__auto____3573;
}
})()))
{return this__3572.start;
} else
{throw "Index out of bounds";
}
}
});
var G__3583__3585 = (function (rng,n,not_found){
var this__3574 = this;
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,rng))))
{return cljs.core._PLUS_.call(null,this__3574.start,cljs.core._STAR_.call(null,n,this__3574.step));
} else
{if(cljs.core.truth_((function (){var and__3574__auto____3575 = cljs.core._GT_.call(null,this__3574.start,this__3574.end);

if(cljs.core.truth_(and__3574__auto____3575))
{return cljs.core._EQ_.call(null,this__3574.step,0);
} else
{return and__3574__auto____3575;
}
})()))
{return this__3574.start;
} else
{return not_found;
}
}
});
G__3583 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__3583__3584.call(this,rng,n);
case  3 :
return G__3583__3585.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3583;
})()
;
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__3576 = this;
return this__3576.meta;
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3587 = null;
var G__3587__3588 = (function (rng,f){
var this__3577 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__3587__3589 = (function (rng,f,s){
var this__3578 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__3587 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__3587__3588.call(this,rng,f);
case  3 :
return G__3587__3589.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3587;
})()
;
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__3579 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__3580 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{if(cljs.core.truth_((function (){var and__3574__auto____3581 = cljs.core._EQ_.call(null,this__3580.start,0);

if(cljs.core.truth_(and__3574__auto____3581))
{var and__3574__auto____3582 = cljs.core._LT_.call(null,this__3580.start,this__3580.end);

if(cljs.core.truth_(and__3574__auto____3582))
{return cljs.core._EQ_.call(null,this__3580.step,1);
} else
{return and__3574__auto____3582;
}
} else
{return and__3574__auto____3581;
}
})()))
{return cljs.core._.call(null,this__3580.end,this__3580.start);
} else
{if(cljs.core.truth_("﷐'else"))
{return Math['ceil'].call(null,cljs.core._SLASH_.call(null,cljs.core._.call(null,this__3580.end,this__3580.start),this__3580.step));
} else
{return null;
}
}
}
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__3591 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__3592 = (function (end){
return range.call(null,0,end,1);
});
var range__3593 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3594 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__3591.call(this);
case  1 :
return range__3592.call(this,start);
case  2 :
return range__3593.call(this,start,end);
case  3 :
return range__3594.call(this,start,end,step);
}
throw('Invalid arity: ' + arguments.length);
};
return range;
})()
;
/**
* Returns a lazy seq of every nth item in coll.
*/
cljs.core.take_nth = (function take_nth(n,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3596 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3596))
{var s__3597 = temp__3726__auto____3596;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3597),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3597)));
} else
{return null;
}
})));
});
/**
* Returns a vector of [(take-while pred coll) (drop-while pred coll)]
*/
cljs.core.split_with = (function split_with(pred,coll){
return cljs.core.Vector.fromArray([cljs.core.take_while.call(null,pred,coll),cljs.core.drop_while.call(null,pred,coll)]);
});
/**
* Applies f to each value in coll, splitting it each time f returns
* a new value.  Returns a lazy seq of partitions.
*/
cljs.core.partition_by = (function partition_by(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3599 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3599))
{var s__3600 = temp__3726__auto____3599;

var fst__3601 = cljs.core.first.call(null,s__3600);
var fv__3602 = f.call(null,fst__3601);
var run__3603 = cljs.core.cons.call(null,fst__3601,cljs.core.take_while.call(null,(function (p1__3598_SHARP_){
return cljs.core._EQ_.call(null,fv__3602,f.call(null,p1__3598_SHARP_));
}),cljs.core.next.call(null,s__3600)));

return cljs.core.cons.call(null,run__3603,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3603),s__3600))));
} else
{return null;
}
})));
});
/**
* Returns a map from distinct items in coll to the number of times
* they appear.
*/
cljs.core.frequencies = (function frequencies(coll){
return cljs.core.reduce.call(null,(function (counts,x){
return cljs.core.assoc.call(null,counts,x,cljs.core.inc.call(null,cljs.core.get.call(null,counts,x,0)));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Returns a lazy seq of the intermediate values of the reduction (as
* per reduce) of coll by f, starting with init.
*/
cljs.core.reductions = (function() {
var reductions = null;
var reductions__3618 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____3614 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____3614))
{var s__3615 = temp__3723__auto____3614;

return reductions.call(null,f,cljs.core.first.call(null,s__3615),cljs.core.rest.call(null,s__3615));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3619 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3616 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3616))
{var s__3617 = temp__3726__auto____3616;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3617)),cljs.core.rest.call(null,s__3617));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3618.call(this,f,init);
case  3 :
return reductions__3619.call(this,f,init,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reductions;
})()
;
/**
* Takes a set of functions and returns a fn that is the juxtaposition
* of those fns.  The returned fn takes a variable number of args, and
* returns a vector containing the result of applying each fn to the
* args (left-to-right).
* ((juxt a b c) x) => [(a x) (b x) (c x)]
* 
* TODO: Implement apply
* @param {...*} var_args
*/
cljs.core.juxt = (function() {
var juxt = null;
var juxt__3622 = (function (f){
return (function() {
var G__3627 = null;
var G__3627__3628 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3627__3629 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3627__3630 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3627__3631 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3627__3632 = (function() { 
var G__3634__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3634 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3634__delegate.call(this, x, y, z, args);
};
G__3634.cljs$lang$maxFixedArity = 3;
G__3634.cljs$lang$applyTo = (function (arglist__3635){
var x = cljs.core.first(arglist__3635);
var y = cljs.core.first(cljs.core.next(arglist__3635));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3635)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3635)));
return G__3634__delegate.call(this, x, y, z, args);
});
return G__3634;
})()
;
G__3627 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3627__3628.call(this);
case  1 :
return G__3627__3629.call(this,x);
case  2 :
return G__3627__3630.call(this,x,y);
case  3 :
return G__3627__3631.call(this,x,y,z);
default:
return G__3627__3632.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3627.cljs$lang$maxFixedArity = 3;
G__3627.cljs$lang$applyTo = G__3627__3632.cljs$lang$applyTo;
return G__3627;
})()
});
var juxt__3623 = (function (f,g){
return (function() {
var G__3636 = null;
var G__3636__3637 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3636__3638 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3636__3639 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3636__3640 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3636__3641 = (function() { 
var G__3643__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3643 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3643__delegate.call(this, x, y, z, args);
};
G__3643.cljs$lang$maxFixedArity = 3;
G__3643.cljs$lang$applyTo = (function (arglist__3644){
var x = cljs.core.first(arglist__3644);
var y = cljs.core.first(cljs.core.next(arglist__3644));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3644)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3644)));
return G__3643__delegate.call(this, x, y, z, args);
});
return G__3643;
})()
;
G__3636 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3636__3637.call(this);
case  1 :
return G__3636__3638.call(this,x);
case  2 :
return G__3636__3639.call(this,x,y);
case  3 :
return G__3636__3640.call(this,x,y,z);
default:
return G__3636__3641.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3636.cljs$lang$maxFixedArity = 3;
G__3636.cljs$lang$applyTo = G__3636__3641.cljs$lang$applyTo;
return G__3636;
})()
});
var juxt__3624 = (function (f,g,h){
return (function() {
var G__3645 = null;
var G__3645__3646 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3645__3647 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3645__3648 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3645__3649 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3645__3650 = (function() { 
var G__3652__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3652 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3652__delegate.call(this, x, y, z, args);
};
G__3652.cljs$lang$maxFixedArity = 3;
G__3652.cljs$lang$applyTo = (function (arglist__3653){
var x = cljs.core.first(arglist__3653);
var y = cljs.core.first(cljs.core.next(arglist__3653));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3653)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3653)));
return G__3652__delegate.call(this, x, y, z, args);
});
return G__3652;
})()
;
G__3645 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3645__3646.call(this);
case  1 :
return G__3645__3647.call(this,x);
case  2 :
return G__3645__3648.call(this,x,y);
case  3 :
return G__3645__3649.call(this,x,y,z);
default:
return G__3645__3650.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3645.cljs$lang$maxFixedArity = 3;
G__3645.cljs$lang$applyTo = G__3645__3650.cljs$lang$applyTo;
return G__3645;
})()
});
var juxt__3625 = (function() { 
var G__3654__delegate = function (f,g,h,fs){
var fs__3621 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3655 = null;
var G__3655__3656 = (function (){
return cljs.core.reduce.call(null,(function (p1__3604_SHARP_,p2__3605_SHARP_){
return cljs.core.conj.call(null,p1__3604_SHARP_,p2__3605_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3621);
});
var G__3655__3657 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3606_SHARP_,p2__3607_SHARP_){
return cljs.core.conj.call(null,p1__3606_SHARP_,p2__3607_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3621);
});
var G__3655__3658 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3608_SHARP_,p2__3609_SHARP_){
return cljs.core.conj.call(null,p1__3608_SHARP_,p2__3609_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3621);
});
var G__3655__3659 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3610_SHARP_,p2__3611_SHARP_){
return cljs.core.conj.call(null,p1__3610_SHARP_,p2__3611_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3621);
});
var G__3655__3660 = (function() { 
var G__3662__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3612_SHARP_,p2__3613_SHARP_){
return cljs.core.conj.call(null,p1__3612_SHARP_,cljs.core.apply.call(null,p2__3613_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3621);
};
var G__3662 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3662__delegate.call(this, x, y, z, args);
};
G__3662.cljs$lang$maxFixedArity = 3;
G__3662.cljs$lang$applyTo = (function (arglist__3663){
var x = cljs.core.first(arglist__3663);
var y = cljs.core.first(cljs.core.next(arglist__3663));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3663)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3663)));
return G__3662__delegate.call(this, x, y, z, args);
});
return G__3662;
})()
;
G__3655 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3655__3656.call(this);
case  1 :
return G__3655__3657.call(this,x);
case  2 :
return G__3655__3658.call(this,x,y);
case  3 :
return G__3655__3659.call(this,x,y,z);
default:
return G__3655__3660.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3655.cljs$lang$maxFixedArity = 3;
G__3655.cljs$lang$applyTo = G__3655__3660.cljs$lang$applyTo;
return G__3655;
})()
};
var G__3654 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3654__delegate.call(this, f, g, h, fs);
};
G__3654.cljs$lang$maxFixedArity = 3;
G__3654.cljs$lang$applyTo = (function (arglist__3664){
var f = cljs.core.first(arglist__3664);
var g = cljs.core.first(cljs.core.next(arglist__3664));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3664)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3664)));
return G__3654__delegate.call(this, f, g, h, fs);
});
return G__3654;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3622.call(this,f);
case  2 :
return juxt__3623.call(this,f,g);
case  3 :
return juxt__3624.call(this,f,g,h);
default:
return juxt__3625.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3625.cljs$lang$applyTo;
return juxt;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. dorun can
* be used to force any effects. Walks through the successive nexts of
* the seq, does not retain the head and returns nil.
*/
cljs.core.dorun = (function() {
var dorun = null;
var dorun__3666 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3669 = cljs.core.next.call(null,coll);
coll = G__3669;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3667 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3574__auto____3665 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3574__auto____3665))
{return cljs.core.pos_QMARK_.call(null,n);
} else
{return and__3574__auto____3665;
}
})()))
{{
var G__3670 = cljs.core.dec.call(null,n);
var G__3671 = cljs.core.next.call(null,coll);
n = G__3670;
coll = G__3671;
continue;
}
} else
{return null;
}
break;
}
});
dorun = function(n,coll){
switch(arguments.length){
case  1 :
return dorun__3666.call(this,n);
case  2 :
return dorun__3667.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return dorun;
})()
;
/**
* When lazy sequences are produced via functions that have side
* effects, any effects other than those needed to produce the first
* element in the seq do not occur until the seq is consumed. doall can
* be used to force any effects. Walks through the successive nexts of
* the seq, retains the head and returns it, thus causing the entire
* seq to reside in memory at one time.
*/
cljs.core.doall = (function() {
var doall = null;
var doall__3672 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3673 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3672.call(this,n);
case  2 :
return doall__3673.call(this,n,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return doall;
})()
;
/**
* Returns the result of (re-find re s) if re fully matches s.
*/
cljs.core.re_matches = (function re_matches(re,s){
var matches__3675 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3675),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3675),1)))
{return cljs.core.first.call(null,matches__3675);
} else
{return cljs.core.vec.call(null,matches__3675);
}
} else
{return null;
}
});
/**
* Returns the first regex match, if any, of s to re, using
* re.exec(s). Returns a vector, containing first the matching
* substring, then any capturing groups if the regular expression contains
* capturing groups.
*/
cljs.core.re_find = (function re_find(re,s){
var matches__3676 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3676)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3676),1)))
{return cljs.core.first.call(null,matches__3676);
} else
{return cljs.core.vec.call(null,matches__3676);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3677 = cljs.core.re_find.call(null,re,s);
var match_idx__3678 = s.search(re);
var match_str__3679 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3677))?cljs.core.first.call(null,match_data__3677):match_data__3677);
var post_match__3680 = cljs.core.subs.call(null,s,cljs.core._PLUS_.call(null,match_idx__3678,cljs.core.count.call(null,match_str__3679)));

if(cljs.core.truth_(match_data__3677))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3677,re_seq.call(null,re,post_match__3680));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
return (new RegExp(s));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3681_SHARP_){
return print_one.call(null,p1__3681_SHARP_,opts);
}),coll))),cljs.core.Vector.fromArray([end]));
});
cljs.core.string_print = (function string_print(x){
print.call(null,x);
return null;
});
cljs.core.flush = (function flush(){
return null;
});
cljs.core.pr_seq = (function pr_seq(obj,opts){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"nil");
} else
{if(cljs.core.truth_(cljs.core.undefined_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,"#<undefined>");
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3574__auto____3682 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3574__auto____3682))
{var and__3574__auto____3685 = (function (){var x__107__auto____3683 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____3684 = x__107__auto____3683;

if(cljs.core.truth_(and__3574__auto____3684))
{return x__107__auto____3683.cljs$core$IMeta$;
} else
{return and__3574__auto____3684;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__107__auto____3683);
}
})();

if(cljs.core.truth_(and__3574__auto____3685))
{return cljs.core.meta.call(null,obj);
} else
{return and__3574__auto____3685;
}
} else
{return and__3574__auto____3682;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__107__auto____3686 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____3687 = x__107__auto____3686;

if(cljs.core.truth_(and__3574__auto____3687))
{return x__107__auto____3686.cljs$core$IPrintable$;
} else
{return and__3574__auto____3687;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__107__auto____3686);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
/**
* Prints a sequence of objects to a string, observing all the
* options given in opts
*/
cljs.core.pr_str_with_opts = (function pr_str_with_opts(objs,opts){
var first_obj__3688 = cljs.core.first.call(null,objs);
var sb__3689 = (new goog.string.StringBuffer());

var G__3690__3691 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3690__3691))
{var obj__3692 = cljs.core.first.call(null,G__3690__3691);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3692,first_obj__3688)))
{} else
{sb__3689.append(" ");
}
var G__3693__3694 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3692,opts));

while(true){
if(cljs.core.truth_(G__3693__3694))
{var string__3695 = cljs.core.first.call(null,G__3693__3694);

sb__3689.append(string__3695);
{
var G__3696 = cljs.core.next.call(null,G__3693__3694);
G__3693__3694 = G__3696;
continue;
}
} else
{}
break;
}
{
var G__3697 = cljs.core.next.call(null,G__3690__3691);
G__3690__3691 = G__3697;
continue;
}
} else
{}
break;
}
return cljs.core.str.call(null,sb__3689);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3698 = cljs.core.first.call(null,objs);

var G__3699__3700 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3699__3700))
{var obj__3701 = cljs.core.first.call(null,G__3699__3700);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3701,first_obj__3698)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3702__3703 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3701,opts));

while(true){
if(cljs.core.truth_(G__3702__3703))
{var string__3704 = cljs.core.first.call(null,G__3702__3703);

cljs.core.string_print.call(null,string__3704);
{
var G__3705 = cljs.core.next.call(null,G__3702__3703);
G__3702__3703 = G__3705;
continue;
}
} else
{}
break;
}
{
var G__3706 = cljs.core.next.call(null,G__3699__3700);
G__3699__3700 = G__3706;
continue;
}
} else
{return null;
}
break;
}
});
cljs.core.newline = (function newline(opts){
cljs.core.string_print.call(null,"\n");
if(cljs.core.truth_(cljs.core.get.call(null,opts,"﷐'flush-on-newline")))
{return cljs.core.flush.call(null);
} else
{return null;
}
});
cljs.core._STAR_flush_on_newline_STAR_ = true;
cljs.core._STAR_print_readably_STAR_ = true;
cljs.core._STAR_print_meta_STAR_ = false;
cljs.core._STAR_print_dup_STAR_ = false;
cljs.core.pr_opts = (function pr_opts(){
return cljs.core.ObjMap.fromObject(["﷐'flush-on-newline","﷐'readably","﷐'meta","﷐'dup"],{"﷐'flush-on-newline":cljs.core._STAR_flush_on_newline_STAR_,"﷐'readably":cljs.core._STAR_print_readably_STAR_,"﷐'meta":cljs.core._STAR_print_meta_STAR_,"﷐'dup":cljs.core._STAR_print_dup_STAR_});
});
/**
* pr to a string, returning it. Fundamental entrypoint to IPrintable.
* @param {...*} var_args
*/
cljs.core.pr_str = (function() { 
var pr_str__delegate = function (objs){
return cljs.core.pr_str_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr_str = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr_str__delegate.call(this, objs);
};
pr_str.cljs$lang$maxFixedArity = 0;
pr_str.cljs$lang$applyTo = (function (arglist__3707){
var objs = cljs.core.seq( arglist__3707 );;
return pr_str__delegate.call(this, objs);
});
return pr_str;
})()
;
/**
* Prints the object(s) using string-print.  Prints the
* object(s), separated by spaces if there is more than one.
* By default, pr and prn print in a way that objects can be
* read by the reader
* @param {...*} var_args
*/
cljs.core.pr = (function() { 
var pr__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
};
var pr = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return pr__delegate.call(this, objs);
};
pr.cljs$lang$maxFixedArity = 0;
pr.cljs$lang$applyTo = (function (arglist__3708){
var objs = cljs.core.seq( arglist__3708 );;
return pr__delegate.call(this, objs);
});
return pr;
})()
;
/**
* Prints the object(s) using string-print.
* print and println produce output for human consumption.
* @param {...*} var_args
*/
cljs.core.print = (function() { 
var cljs_core_print__delegate = function (objs){
return cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
};
var cljs_core_print = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return cljs_core_print__delegate.call(this, objs);
};
cljs_core_print.cljs$lang$maxFixedArity = 0;
cljs_core_print.cljs$lang$applyTo = (function (arglist__3709){
var objs = cljs.core.seq( arglist__3709 );;
return cljs_core_print__delegate.call(this, objs);
});
return cljs_core_print;
})()
;
/**
* Same as print followed by (newline)
* @param {...*} var_args
*/
cljs.core.println = (function() { 
var println__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.assoc.call(null,cljs.core.pr_opts.call(null),"﷐'readably",false));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var println = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return println__delegate.call(this, objs);
};
println.cljs$lang$maxFixedArity = 0;
println.cljs$lang$applyTo = (function (arglist__3710){
var objs = cljs.core.seq( arglist__3710 );;
return println__delegate.call(this, objs);
});
return println;
})()
;
/**
* Same as pr followed by (newline).
* @param {...*} var_args
*/
cljs.core.prn = (function() { 
var prn__delegate = function (objs){
cljs.core.pr_with_opts.call(null,objs,cljs.core.pr_opts.call(null));
return cljs.core.newline.call(null,cljs.core.pr_opts.call(null));
};
var prn = function (var_args){
var objs = null;
if (goog.isDef(var_args)) {
  objs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return prn__delegate.call(this, objs);
};
prn.cljs$lang$maxFixedArity = 0;
prn.cljs$lang$applyTo = (function (arglist__3711){
var objs = cljs.core.seq( arglist__3711 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3712 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3712,"{",", ","}",opts,coll);
});
(cljs.core.IPrintable["number"] = true);
(cljs.core._pr_seq["number"] = (function (n,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,n));
}));
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IPrintable$ = true;
cljs.core.LazySeq.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["boolean"] = true);
(cljs.core._pr_seq["boolean"] = (function (bool,opts){
return cljs.core.list.call(null,cljs.core.str.call(null,bool));
}));
cljs.core.Set.prototype.cljs$core$IPrintable$ = true;
cljs.core.Set.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#{"," ","}",opts,coll);
});
(cljs.core.IPrintable["string"] = true);
(cljs.core._pr_seq["string"] = (function (obj,opts){
if(cljs.core.truth_(cljs.core.keyword_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3726__auto____3713 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____3713))
{var nspc__3714 = temp__3726__auto____3713;

return cljs.core.str.call(null,nspc__3714,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3726__auto____3715 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____3715))
{var nspc__3716 = temp__3726__auto____3715;

return cljs.core.str.call(null,nspc__3716,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_("﷐'else"))
{return cljs.core.list.call(null,(cljs.core.truth_("﷐'readably".call(null,opts))?goog.string.quote.call(null,obj):obj));
} else
{return null;
}
}
}
}));
cljs.core.Vector.prototype.cljs$core$IPrintable$ = true;
cljs.core.Vector.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"["," ","]",opts,coll);
});
cljs.core.List.prototype.cljs$core$IPrintable$ = true;
cljs.core.List.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
(cljs.core.IPrintable["array"] = true);
(cljs.core._pr_seq["array"] = (function (a,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"#<Array [",", ","]>",opts,a);
}));
cljs.core.EmptyList.prototype.cljs$core$IPrintable$ = true;
cljs.core.EmptyList.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.list.call(null,"()");
});
cljs.core.Cons.prototype.cljs$core$IPrintable$ = true;
cljs.core.Cons.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.Range.prototype.cljs$core$IPrintable$ = true;
cljs.core.Range.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,"("," ",")",opts,coll);
});
cljs.core.ObjMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.ObjMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3717 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3717,"{",", ","}",opts,coll);
});

/**
* @constructor
*/
cljs.core.Atom = (function (state,meta,validator){
this.state = state;
this.meta = meta;
this.validator = validator;
})
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__3718 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3718.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3719 = this;
return this__3719.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3720 = this;
return this__3720.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3721 = this;
return cljs.core.identical_QMARK_.call(null,o,other);
});
/**
* Creates and returns an Atom with an initial value of x and zero or
* more options (in any order):
* 
* :meta metadata-map
* 
* :validator validate-fn
* 
* If metadata-map is supplied, it will be come the metadata on the
* atom. validate-fn must be nil or a side-effect-free fn of one
* argument, which will be passed the intended new state on any state
* change. If the new state is unacceptable, the validate-fn should
* return false or throw an exception.
* @param {...*} var_args
*/
cljs.core.atom = (function() {
var atom = null;
var atom__3728 = (function (x){
return (new cljs.core.Atom(x,null,null));
});
var atom__3729 = (function() { 
var G__3731__delegate = function (x,p__3722){
var map__3723__3724 = p__3722;
var map__3723__3725 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3723__3724))?cljs.core.apply.call(null,cljs.core.hash_map,map__3723__3724):map__3723__3724);
var validator__3726 = cljs.core.get.call(null,map__3723__3725,"﷐'validator");
var meta__3727 = cljs.core.get.call(null,map__3723__3725,"﷐'meta");

return (new cljs.core.Atom(x,meta__3727,validator__3726));
};
var G__3731 = function (x,var_args){
var p__3722 = null;
if (goog.isDef(var_args)) {
  p__3722 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3731__delegate.call(this, x, p__3722);
};
G__3731.cljs$lang$maxFixedArity = 1;
G__3731.cljs$lang$applyTo = (function (arglist__3732){
var x = cljs.core.first(arglist__3732);
var p__3722 = cljs.core.rest(arglist__3732);
return G__3731__delegate.call(this, x, p__3722);
});
return G__3731;
})()
;
atom = function(x,var_args){
var p__3722 = var_args;
switch(arguments.length){
case  1 :
return atom__3728.call(this,x);
default:
return atom__3729.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3729.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,newval){
var temp__3726__auto____3733 = a.validator;

if(cljs.core.truth_(temp__3726__auto____3733))
{var v__3734 = temp__3726__auto____3733;

if(cljs.core.truth_(v__3734.call(null,newval)))
{} else
{throw "Validator rejected reference state";
}
} else
{}
return a.state = newval;
});
/**
* Atomically swaps the value of atom to be:
* (apply f current-value-of-atom args). Note that f may be called
* multiple times, and thus should be free of side effects.  Returns
* the value that was swapped in.
* @param {...*} var_args
*/
cljs.core.swap_BANG_ = (function() {
var swap_BANG_ = null;
var swap_BANG___3735 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3736 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3737 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3738 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3739 = (function() { 
var G__3741__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3741 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3741__delegate.call(this, a, f, x, y, z, more);
};
G__3741.cljs$lang$maxFixedArity = 5;
G__3741.cljs$lang$applyTo = (function (arglist__3742){
var a = cljs.core.first(arglist__3742);
var f = cljs.core.first(cljs.core.next(arglist__3742));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3742)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3742))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3742)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3742)))));
return G__3741__delegate.call(this, a, f, x, y, z, more);
});
return G__3741;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3735.call(this,a,f);
case  3 :
return swap_BANG___3736.call(this,a,f,x);
case  4 :
return swap_BANG___3737.call(this,a,f,x,y);
case  5 :
return swap_BANG___3738.call(this,a,f,x,y,z);
default:
return swap_BANG___3739.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3739.cljs$lang$applyTo;
return swap_BANG_;
})()
;
/**
* Atomically sets the value of atom to newval if and only if the
* current value of the atom is identical to oldval. Returns true if
* set happened, else false.
*/
cljs.core.compare_and_set_BANG_ = (function compare_and_set_BANG_(a,oldval,newval){
if(cljs.core.truth_(cljs.core._EQ_.call(null,a.state,oldval)))
{cljs.core.reset_BANG_.call(null,a,newval);
return true;
} else
{return false;
}
});
cljs.core.deref = (function deref(o){
return cljs.core._deref.call(null,o);
});
/**
* Sets the validator-fn for a var/ref/agent/atom. validator-fn must be nil or a
* side-effect-free fn of one argument, which will be passed the intended
* new state on any state change. If the new state is unacceptable, the
* validator-fn should return false or throw an exception. If the current state (root
* value if var) is not acceptable to the new validator, an exception
* will be thrown and the validator will not be changed.
*/
cljs.core.set_validator_BANG_ = (function set_validator_BANG_(iref,val){
return iref.validator = val;
});
/**
* Gets the validator-fn for a var/ref/agent/atom.
*/
cljs.core.get_validator = (function get_validator(iref){
return iref.validator;
});
/**
* Atomically sets the metadata for a namespace/var/ref/agent/atom to be:
* 
* (apply f its-current-meta args)
* 
* f must be free of side-effects
* @param {...*} var_args
*/
cljs.core.alter_meta_BANG_ = (function() { 
var alter_meta_BANG___delegate = function (iref,f,args){
return iref.meta = cljs.core.apply.call(null,f,iref.meta,args);
};
var alter_meta_BANG_ = function (iref,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return alter_meta_BANG___delegate.call(this, iref, f, args);
};
alter_meta_BANG_.cljs$lang$maxFixedArity = 2;
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3743){
var iref = cljs.core.first(arglist__3743);
var f = cljs.core.first(cljs.core.next(arglist__3743));
var args = cljs.core.rest(cljs.core.next(arglist__3743));
return alter_meta_BANG___delegate.call(this, iref, f, args);
});
return alter_meta_BANG_;
})()
;
/**
* Atomically resets the metadata for a namespace/var/ref/agent/atom
*/
cljs.core.reset_meta_BANG_ = (function reset_meta_BANG_(iref,m){
return iref.meta = m;
});
cljs.core.gensym_counter = null;
/**
* Returns a new symbol with a unique name. If a prefix string is
* supplied, the name is prefix# where # is some unique number. If
* prefix is not supplied, the prefix is 'G__'.
*/
cljs.core.gensym = (function() {
var gensym = null;
var gensym__3744 = (function (){
return gensym.call(null,"G__");
});
var gensym__3745 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3744.call(this);
case  1 :
return gensym__3745.call(this,prefix_string);
}
throw('Invalid arity: ' + arguments.length);
};
return gensym;
})()
;
cljs.core.fixture1 = 1;
cljs.core.fixture2 = 2;

/**
* @constructor
*/
cljs.core.Delay = (function (f,state){
this.f = f;
this.state = state;
})
cljs.core.Delay.prototype.cljs$core$IPending$ = true;
cljs.core.Delay.prototype.cljs$core$IPending$_realized_QMARK_ = (function (d){
var this__3747 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3747.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3748 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3748.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3748.state,this__3748.f);
}
return cljs.core.deref.call(null,this__3748.state);
});
/**
* Takes a body of expressions and yields a Delay object that will
* invoke the body only the first time it is forced (with force or deref/@), and
* will cache the result and return it on all subsequent force
* calls.
* @param {...*} var_args
*/
cljs.core.delay = (function() { 
var delay__delegate = function (body){
return (new cljs.core.Delay((function (){
return cljs.core.apply.call(null,cljs.core.identity,body);
}),cljs.core.atom.call(null,null)));
};
var delay = function (var_args){
var body = null;
if (goog.isDef(var_args)) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return delay__delegate.call(this, body);
};
delay.cljs$lang$maxFixedArity = 0;
delay.cljs$lang$applyTo = (function (arglist__3749){
var body = cljs.core.seq( arglist__3749 );;
return delay__delegate.call(this, body);
});
return delay;
})()
;
/**
* returns true if x is a Delay created with delay
*/
cljs.core.delay_QMARK_ = (function delay_QMARK_(x){
return cljs.core.instance_QMARK_.call(null,cljs.core.Delay,x);
});
/**
* If x is a Delay, returns the (possibly cached) value of its expression, else returns x
*/
cljs.core.force = (function force(x){
if(cljs.core.truth_(cljs.core.delay_QMARK_.call(null,x)))
{return cljs.core.deref.call(null,x);
} else
{return x;
}
});
/**
* Returns true if a value has been produced for a promise, delay, future or lazy sequence.
*/
cljs.core.realized_QMARK_ = (function realized_QMARK_(d){
return cljs.core._realized_QMARK_.call(null,d);
});
/**
* Recursively transforms JavaScript arrays into ClojureScript
* vectors, and JavaScript objects into ClojureScript maps.  With
* option ':keywordize-keys true' will convert object fields from
* strings to keywords.
* @param {...*} var_args
*/
cljs.core.js__GT_clj = (function() { 
var js__GT_clj__delegate = function (x,options){
var map__3750__3751 = options;
var map__3750__3752 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3750__3751))?cljs.core.apply.call(null,cljs.core.hash_map,map__3750__3751):map__3750__3751);
var keywordize_keys__3753 = cljs.core.get.call(null,map__3750__3752,"﷐'keywordize-keys");
var keyfn__3754 = (cljs.core.truth_(keywordize_keys__3753)?cljs.core.keyword:cljs.core.str);
var f__3760 = (function thisfn(x){
if(cljs.core.truth_(cljs.core.seq_QMARK_.call(null,x)))
{return cljs.core.doall.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(cljs.core.coll_QMARK_.call(null,x)))
{return cljs.core.into.call(null,cljs.core.empty.call(null,x),cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isArray.call(null,x)))
{return cljs.core.vec.call(null,cljs.core.map.call(null,thisfn,x));
} else
{if(cljs.core.truth_(goog.isObject.call(null,x)))
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__161__auto____3759 = (function iter__3755(s__3756){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3756__3757 = s__3756;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3756__3757)))
{var k__3758 = cljs.core.first.call(null,s__3756__3757);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3754.call(null,k__3758),thisfn.call(null,(x[k__3758]))]),iter__3755.call(null,cljs.core.rest.call(null,s__3756__3757)));
} else
{return null;
}
break;
}
})));
});

return iter__161__auto____3759.call(null,cljs.core.js_keys.call(null,x));
})());
} else
{if(cljs.core.truth_("﷐'else"))
{return x;
} else
{return null;
}
}
}
}
}
});

return f__3760.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3761){
var x = cljs.core.first(arglist__3761);
var options = cljs.core.rest(arglist__3761);
return js__GT_clj__delegate.call(this, x, options);
});
return js__GT_clj;
})()
;
/**
* Returns a memoized version of a referentially transparent function. The
* memoized version of the function keeps a cache of the mapping from arguments
* to results and, when calls with the same arguments are repeated often, has
* higher performance at the expense of higher memory use.
*/
cljs.core.memoize = (function memoize(f){
var mem__3762 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3766__delegate = function (args){
var temp__3723__auto____3763 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3762),args);

if(cljs.core.truth_(temp__3723__auto____3763))
{var v__3764 = temp__3723__auto____3763;

return v__3764;
} else
{var ret__3765 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3762,cljs.core.assoc,args,ret__3765);
return ret__3765;
}
};
var G__3766 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3766__delegate.call(this, args);
};
G__3766.cljs$lang$maxFixedArity = 0;
G__3766.cljs$lang$applyTo = (function (arglist__3767){
var args = cljs.core.seq( arglist__3767 );;
return G__3766__delegate.call(this, args);
});
return G__3766;
})()
;
});
/**
* trampoline can be used to convert algorithms requiring mutual
* recursion without stack consumption. Calls f with supplied args, if
* any. If f returns a fn, calls that fn with no arguments, and
* continues to repeat, until the return value is not a fn, then
* returns that non-fn value. Note that if you want to return a fn as a
* final value, you must wrap it in some data structure and unpack it
* after trampoline returns.
* @param {...*} var_args
*/
cljs.core.trampoline = (function() {
var trampoline = null;
var trampoline__3769 = (function (f){
while(true){
var ret__3768 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3768)))
{{
var G__3772 = ret__3768;
f = G__3772;
continue;
}
} else
{return ret__3768;
}
break;
}
});
var trampoline__3770 = (function() { 
var G__3773__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3773 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3773__delegate.call(this, f, args);
};
G__3773.cljs$lang$maxFixedArity = 1;
G__3773.cljs$lang$applyTo = (function (arglist__3774){
var f = cljs.core.first(arglist__3774);
var args = cljs.core.rest(arglist__3774);
return G__3773__delegate.call(this, f, args);
});
return G__3773;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3769.call(this,f);
default:
return trampoline__3770.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3770.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3775 = (function (){
return rand.call(null,1);
});
var rand__3776 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3775.call(this);
case  1 :
return rand__3776.call(this,n);
}
throw('Invalid arity: ' + arguments.length);
};
return rand;
})()
;
/**
* Returns a random integer between 0 (inclusive) and n (exclusive).
*/
cljs.core.rand_int = (function rand_int(n){
return Math.floor(Math.random() * n);
});
/**
* Return a random element of the (sequential) collection. Will have
* the same performance characteristics as nth for the given
* collection.
*/
cljs.core.rand_nth = (function rand_nth(coll){
return cljs.core.nth.call(null,coll,cljs.core.rand_int.call(null,cljs.core.count.call(null,coll)));
});
/**
* Returns a map of the elements of coll keyed by the result of
* f on each element. The value at each key will be a vector of the
* corresponding elements, in the order they appeared in coll.
*/
cljs.core.group_by = (function group_by(f,coll){
return cljs.core.reduce.call(null,(function (ret,x){
var k__3778 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3778,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3778,cljs.core.Vector.fromArray([])),x));
}),cljs.core.ObjMap.fromObject([],{}),coll);
});
/**
* Creates a hierarchy object for use with derive, isa? etc.
*/
cljs.core.make_hierarchy = (function make_hierarchy(){
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'descendants","﷐'ancestors"],{"﷐'parents":cljs.core.ObjMap.fromObject([],{}),"﷐'descendants":cljs.core.ObjMap.fromObject([],{}),"﷐'ancestors":cljs.core.ObjMap.fromObject([],{})});
});
cljs.core.global_hierarchy = cljs.core.atom.call(null,cljs.core.make_hierarchy.call(null));
/**
* Returns true if (= child parent), or child is directly or indirectly derived from
* parent, either via a Java type inheritance relationship or a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy
*/
cljs.core.isa_QMARK_ = (function() {
var isa_QMARK_ = null;
var isa_QMARK___3787 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3788 = (function (h,child,parent){
var or__3576__auto____3779 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3576__auto____3779))
{return or__3576__auto____3779;
} else
{var or__3576__auto____3780 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3576__auto____3780))
{return or__3576__auto____3780;
} else
{var and__3574__auto____3781 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3574__auto____3781))
{var and__3574__auto____3782 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3574__auto____3782))
{var and__3574__auto____3783 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3574__auto____3783))
{var ret__3784 = true;
var i__3785 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3576__auto____3786 = cljs.core.not.call(null,ret__3784);

if(cljs.core.truth_(or__3576__auto____3786))
{return or__3576__auto____3786;
} else
{return cljs.core._EQ_.call(null,i__3785,cljs.core.count.call(null,parent));
}
})()))
{return ret__3784;
} else
{{
var G__3790 = isa_QMARK_.call(null,h,child.call(null,i__3785),parent.call(null,i__3785));
var G__3791 = cljs.core.inc.call(null,i__3785);
ret__3784 = G__3790;
i__3785 = G__3791;
continue;
}
}
break;
}
} else
{return and__3574__auto____3783;
}
} else
{return and__3574__auto____3782;
}
} else
{return and__3574__auto____3781;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___3787.call(this,h,child);
case  3 :
return isa_QMARK___3788.call(this,h,child,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return isa_QMARK_;
})()
;
/**
* Returns the immediate parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.parents = (function() {
var parents = null;
var parents__3792 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__3793 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__3792.call(this,h);
case  2 :
return parents__3793.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return parents;
})()
;
/**
* Returns the immediate and indirect parents of tag, either via a Java type
* inheritance relationship or a relationship established via derive. h
* must be a hierarchy obtained from make-hierarchy, if not supplied
* defaults to the global hierarchy
*/
cljs.core.ancestors = (function() {
var ancestors = null;
var ancestors__3795 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__3796 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__3795.call(this,h);
case  2 :
return ancestors__3796.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return ancestors;
})()
;
/**
* Returns the immediate and indirect children of tag, through a
* relationship established via derive. h must be a hierarchy obtained
* from make-hierarchy, if not supplied defaults to the global
* hierarchy. Note: does not work on Java type inheritance
* relationships.
*/
cljs.core.descendants = (function() {
var descendants = null;
var descendants__3798 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__3799 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__3798.call(this,h);
case  2 :
return descendants__3799.call(this,h,tag);
}
throw('Invalid arity: ' + arguments.length);
};
return descendants;
})()
;
/**
* Establishes a parent/child relationship between parent and
* tag. Parent must be a namespace-qualified symbol or keyword and
* child can be either a namespace-qualified symbol or keyword or a
* class. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.derive = (function() {
var derive = null;
var derive__3809 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'namespace","﷑'parent")));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3810 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'tag","﷑'parent")));
}
var tp__3804 = "﷐'parents".call(null,h);
var td__3805 = "﷐'descendants".call(null,h);
var ta__3806 = "﷐'ancestors".call(null,h);
var tf__3807 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3576__auto____3808 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__3804.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3806.call(null,tag),parent)))
{throw cljs.core.str.call(null,tag,"already has",parent,"as ancestor");
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3806.call(null,parent),tag)))
{throw cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor");
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__3804,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__3807.call(null,"﷐'ancestors".call(null,h),tag,td__3805,parent,ta__3806),"﷐'descendants":tf__3807.call(null,"﷐'descendants".call(null,h),parent,ta__3806,tag,td__3805)});
})());

if(cljs.core.truth_(or__3576__auto____3808))
{return or__3576__auto____3808;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__3809.call(this,h,tag);
case  3 :
return derive__3810.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return derive;
})()
;
/**
* Removes a parent/child relationship between parent and
* tag. h must be a hierarchy obtained from make-hierarchy, if not
* supplied defaults to, and modifies, the global hierarchy.
*/
cljs.core.underive = (function() {
var underive = null;
var underive__3816 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3817 = (function (h,tag,parent){
var parentMap__3812 = "﷐'parents".call(null,h);
var childsParents__3813 = (cljs.core.truth_(parentMap__3812.call(null,tag))?cljs.core.disj.call(null,parentMap__3812.call(null,tag),parent):cljs.core.set([]));
var newParents__3814 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__3813))?cljs.core.assoc.call(null,parentMap__3812,tag,childsParents__3813):cljs.core.dissoc.call(null,parentMap__3812,tag));
var deriv_seq__3815 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3801_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__3801_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__3801_SHARP_),cljs.core.second.call(null,p1__3801_SHARP_)));
}),cljs.core.seq.call(null,newParents__3814)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__3812.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__3802_SHARP_,p2__3803_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__3802_SHARP_,p2__3803_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__3815));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__3816.call(this,h,tag);
case  3 :
return underive__3817.call(this,h,tag,parent);
}
throw('Invalid arity: ' + arguments.length);
};
return underive;
})()
;
cljs.core.reset_cache = (function reset_cache(method_cache,method_table,cached_hierarchy,hierarchy){
cljs.core.swap_BANG_.call(null,method_cache,(function (_){
return cljs.core.deref.call(null,method_table);
}));
return cljs.core.swap_BANG_.call(null,cached_hierarchy,(function (_){
return cljs.core.deref.call(null,hierarchy);
}));
});
cljs.core.prefers_STAR_ = (function prefers_STAR_(x,y,prefer_table){
var xprefs__3819 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3576__auto____3821 = (cljs.core.truth_((function (){var and__3574__auto____3820 = xprefs__3819;

if(cljs.core.truth_(and__3574__auto____3820))
{return xprefs__3819.call(null,y);
} else
{return and__3574__auto____3820;
}
})())?true:null);

if(cljs.core.truth_(or__3576__auto____3821))
{return or__3576__auto____3821;
} else
{var or__3576__auto____3823 = (function (){var ps__3822 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,ps__3822))))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__3822),prefer_table)))
{} else
{}
{
var G__3826 = cljs.core.rest.call(null,ps__3822);
ps__3822 = G__3826;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3576__auto____3823))
{return or__3576__auto____3823;
} else
{var or__3576__auto____3825 = (function (){var ps__3824 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,ps__3824))))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__3824),y,prefer_table)))
{} else
{}
{
var G__3827 = cljs.core.rest.call(null,ps__3824);
ps__3824 = G__3827;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3576__auto____3825))
{return or__3576__auto____3825;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3576__auto____3828 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3576__auto____3828))
{return or__3576__auto____3828;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__3837 = cljs.core.reduce.call(null,(function (be,p__3829){
var vec__3830__3831 = p__3829;
var k__3832 = cljs.core.nth.call(null,vec__3830__3831,0,null);
var ___3833 = cljs.core.nth.call(null,vec__3830__3831,1,null);
var e__3834 = vec__3830__3831;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__3832)))
{var be2__3836 = (cljs.core.truth_((function (){var or__3576__auto____3835 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3576__auto____3835))
{return or__3576__auto____3835;
} else
{return cljs.core.dominates.call(null,k__3832,cljs.core.first.call(null,be),prefer_table);
}
})())?e__3834:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__3836),k__3832,prefer_table)))
{} else
{throw cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__3832," and ",cljs.core.first.call(null,be2__3836),", and neither is preferred");
}
return be2__3836;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__3837))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__3837));
return cljs.core.second.call(null,best_entry__3837);
} else
{cljs.core.reset_cache.call(null,method_cache,method_table,cached_hierarchy,hierarchy);
return find_and_cache_best_method.call(null,name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy);
}
} else
{return null;
}
});
cljs.core.IMultiFn = {};
cljs.core._reset = (function _reset(mf){
if(cljs.core.truth_((function (){var and__3574__auto____3838 = mf;

if(cljs.core.truth_(and__3574__auto____3838))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3574__auto____3838;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3576__auto____3839 = (_reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3839))
{return or__3576__auto____3839;
} else
{var or__3576__auto____3840 = (_reset["_"]);

if(cljs.core.truth_(or__3576__auto____3840))
{return or__3576__auto____3840;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3574__auto____3841 = mf;

if(cljs.core.truth_(and__3574__auto____3841))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3574__auto____3841;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3576__auto____3842 = (_add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3842))
{return or__3576__auto____3842;
} else
{var or__3576__auto____3843 = (_add_method["_"]);

if(cljs.core.truth_(or__3576__auto____3843))
{return or__3576__auto____3843;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3574__auto____3844 = mf;

if(cljs.core.truth_(and__3574__auto____3844))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3574__auto____3844;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3576__auto____3845 = (_remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3845))
{return or__3576__auto____3845;
} else
{var or__3576__auto____3846 = (_remove_method["_"]);

if(cljs.core.truth_(or__3576__auto____3846))
{return or__3576__auto____3846;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3574__auto____3847 = mf;

if(cljs.core.truth_(and__3574__auto____3847))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3574__auto____3847;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3576__auto____3848 = (_prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3848))
{return or__3576__auto____3848;
} else
{var or__3576__auto____3849 = (_prefer_method["_"]);

if(cljs.core.truth_(or__3576__auto____3849))
{return or__3576__auto____3849;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3574__auto____3850 = mf;

if(cljs.core.truth_(and__3574__auto____3850))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3574__auto____3850;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3576__auto____3851 = (_get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3851))
{return or__3576__auto____3851;
} else
{var or__3576__auto____3852 = (_get_method["_"]);

if(cljs.core.truth_(or__3576__auto____3852))
{return or__3576__auto____3852;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3574__auto____3853 = mf;

if(cljs.core.truth_(and__3574__auto____3853))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3574__auto____3853;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3576__auto____3854 = (_methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3854))
{return or__3576__auto____3854;
} else
{var or__3576__auto____3855 = (_methods["_"]);

if(cljs.core.truth_(or__3576__auto____3855))
{return or__3576__auto____3855;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3574__auto____3856 = mf;

if(cljs.core.truth_(and__3574__auto____3856))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3574__auto____3856;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3576__auto____3857 = (_prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3857))
{return or__3576__auto____3857;
} else
{var or__3576__auto____3858 = (_prefers["_"]);

if(cljs.core.truth_(or__3576__auto____3858))
{return or__3576__auto____3858;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3574__auto____3859 = mf;

if(cljs.core.truth_(and__3574__auto____3859))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3574__auto____3859;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3576__auto____3860 = (_invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3860))
{return or__3576__auto____3860;
} else
{var or__3576__auto____3861 = (_invoke["_"]);

if(cljs.core.truth_(or__3576__auto____3861))
{return or__3576__auto____3861;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__3862 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__3863 = cljs.core._get_method.call(null,mf,dispatch_val__3862);

if(cljs.core.truth_(target_fn__3863))
{} else
{throw cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__3862);
}
return cljs.core.apply.call(null,target_fn__3863,args);
});

/**
* @constructor
*/
cljs.core.MultiFn = (function (name,dispatch_fn,default_dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
this.name = name;
this.dispatch_fn = dispatch_fn;
this.default_dispatch_val = default_dispatch_val;
this.hierarchy = hierarchy;
this.method_table = method_table;
this.prefer_table = prefer_table;
this.method_cache = method_cache;
this.cached_hierarchy = cached_hierarchy;
})
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__3864 = this;
cljs.core.swap_BANG_.call(null,this__3864.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3864.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3864.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3864.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__3865 = this;
cljs.core.swap_BANG_.call(null,this__3865.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__3865.method_cache,this__3865.method_table,this__3865.cached_hierarchy,this__3865.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__3866 = this;
cljs.core.swap_BANG_.call(null,this__3866.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__3866.method_cache,this__3866.method_table,this__3866.cached_hierarchy,this__3866.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__3867 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__3867.cached_hierarchy),cljs.core.deref.call(null,this__3867.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__3867.method_cache,this__3867.method_table,this__3867.cached_hierarchy,this__3867.hierarchy);
}
var temp__3723__auto____3868 = cljs.core.deref.call(null,this__3867.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3723__auto____3868))
{var target_fn__3869 = temp__3723__auto____3868;

return target_fn__3869;
} else
{var temp__3723__auto____3870 = cljs.core.find_and_cache_best_method.call(null,this__3867.name,dispatch_val,this__3867.hierarchy,this__3867.method_table,this__3867.prefer_table,this__3867.method_cache,this__3867.cached_hierarchy);

if(cljs.core.truth_(temp__3723__auto____3870))
{var target_fn__3871 = temp__3723__auto____3870;

return target_fn__3871;
} else
{return cljs.core.deref.call(null,this__3867.method_table).call(null,this__3867.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__3872 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__3872.prefer_table)))
{throw cljs.core.str.call(null,"Preference conflict in multimethod '",this__3872.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x);
} else
{}
cljs.core.swap_BANG_.call(null,this__3872.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__3872.method_cache,this__3872.method_table,this__3872.cached_hierarchy,this__3872.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__3873 = this;
return cljs.core.deref.call(null,this__3873.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__3874 = this;
return cljs.core.deref.call(null,this__3874.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__3875 = this;
return cljs.core.do_invoke.call(null,mf,this__3875.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__3876__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__3876 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3876__delegate.call(this, _, args);
};
G__3876.cljs$lang$maxFixedArity = 1;
G__3876.cljs$lang$applyTo = (function (arglist__3877){
var _ = cljs.core.first(arglist__3877);
var args = cljs.core.rest(arglist__3877);
return G__3876__delegate.call(this, _, args);
});
return G__3876;
})()
;
/**
* Removes all of the methods of multimethod.
*/
cljs.core.remove_all_methods = (function remove_all_methods(multifn){
return cljs.core._reset.call(null,multifn);
});
/**
* Removes the method of multimethod associated with dispatch-value.
*/
cljs.core.remove_method = (function remove_method(multifn,dispatch_val){
return cljs.core._remove_method.call(null,multifn,dispatch_val);
});
/**
* Causes the multimethod to prefer matches of dispatch-val-x over dispatch-val-y
* when there is a conflict
*/
cljs.core.prefer_method = (function prefer_method(multifn,dispatch_val_x,dispatch_val_y){
return cljs.core._prefer_method.call(null,multifn,dispatch_val_x,dispatch_val_y);
});
/**
* Given a multimethod, returns a map of dispatch values -> dispatch fns
*/
cljs.core.methods$ = (function methods$(multifn){
return cljs.core._methods.call(null,multifn);
});
/**
* Given a multimethod and a dispatch value, returns the dispatch fn
* that would apply to that value, or nil if none apply and no default
*/
cljs.core.get_method = (function get_method(multifn,dispatch_val){
return cljs.core._get_method.call(null,multifn,dispatch_val);
});
/**
* Given a multimethod, returns a map of preferred value -> set of other values
*/
cljs.core.prefers = (function prefers(multifn){
return cljs.core._prefers.call(null,multifn);
});
