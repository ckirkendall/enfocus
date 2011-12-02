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
var or__3576__auto____2035 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3576__auto____2035))
{return or__3576__auto____2035;
} else
{var or__3576__auto____2036 = (p["_"]);

if(cljs.core.truth_(or__3576__auto____2036))
{return or__3576__auto____2036;
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
if(cljs.core.truth_((function (){var and__3574__auto____2037 = coll;

if(cljs.core.truth_(and__3574__auto____2037))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3574__auto____2037;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3576__auto____2038 = (_count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2038))
{return or__3576__auto____2038;
} else
{var or__3576__auto____2039 = (_count["_"]);

if(cljs.core.truth_(or__3576__auto____2039))
{return or__3576__auto____2039;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2040 = coll;

if(cljs.core.truth_(and__3574__auto____2040))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3574__auto____2040;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3576__auto____2041 = (_empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2041))
{return or__3576__auto____2041;
} else
{var or__3576__auto____2042 = (_empty["_"]);

if(cljs.core.truth_(or__3576__auto____2042))
{return or__3576__auto____2042;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3574__auto____2043 = coll;

if(cljs.core.truth_(and__3574__auto____2043))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3574__auto____2043;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3576__auto____2044 = (_conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2044))
{return or__3576__auto____2044;
} else
{var or__3576__auto____2045 = (_conj["_"]);

if(cljs.core.truth_(or__3576__auto____2045))
{return or__3576__auto____2045;
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
var _nth__2052 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3574__auto____2046 = coll;

if(cljs.core.truth_(and__3574__auto____2046))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____2046;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3576__auto____2047 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2047))
{return or__3576__auto____2047;
} else
{var or__3576__auto____2048 = (_nth["_"]);

if(cljs.core.truth_(or__3576__auto____2048))
{return or__3576__auto____2048;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__2053 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____2049 = coll;

if(cljs.core.truth_(and__3574__auto____2049))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3574__auto____2049;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3576__auto____2050 = (_nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2050))
{return or__3576__auto____2050;
} else
{var or__3576__auto____2051 = (_nth["_"]);

if(cljs.core.truth_(or__3576__auto____2051))
{return or__3576__auto____2051;
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
return _nth__2052.call(this,coll,n);
case  3 :
return _nth__2053.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2055 = coll;

if(cljs.core.truth_(and__3574__auto____2055))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3574__auto____2055;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3576__auto____2056 = (_first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2056))
{return or__3576__auto____2056;
} else
{var or__3576__auto____2057 = (_first["_"]);

if(cljs.core.truth_(or__3576__auto____2057))
{return or__3576__auto____2057;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2058 = coll;

if(cljs.core.truth_(and__3574__auto____2058))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3574__auto____2058;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3576__auto____2059 = (_rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2059))
{return or__3576__auto____2059;
} else
{var or__3576__auto____2060 = (_rest["_"]);

if(cljs.core.truth_(or__3576__auto____2060))
{return or__3576__auto____2060;
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
var _lookup__2067 = (function (o,k){
if(cljs.core.truth_((function (){var and__3574__auto____2061 = o;

if(cljs.core.truth_(and__3574__auto____2061))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____2061;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3576__auto____2062 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2062))
{return or__3576__auto____2062;
} else
{var or__3576__auto____2063 = (_lookup["_"]);

if(cljs.core.truth_(or__3576__auto____2063))
{return or__3576__auto____2063;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__2068 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3574__auto____2064 = o;

if(cljs.core.truth_(and__3574__auto____2064))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3574__auto____2064;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3576__auto____2065 = (_lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2065))
{return or__3576__auto____2065;
} else
{var or__3576__auto____2066 = (_lookup["_"]);

if(cljs.core.truth_(or__3576__auto____2066))
{return or__3576__auto____2066;
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
return _lookup__2067.call(this,o,k);
case  3 :
return _lookup__2068.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2070 = coll;

if(cljs.core.truth_(and__3574__auto____2070))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3574__auto____2070;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3576__auto____2071 = (_contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2071))
{return or__3576__auto____2071;
} else
{var or__3576__auto____2072 = (_contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3576__auto____2072))
{return or__3576__auto____2072;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3574__auto____2073 = coll;

if(cljs.core.truth_(and__3574__auto____2073))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3574__auto____2073;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3576__auto____2074 = (_assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2074))
{return or__3576__auto____2074;
} else
{var or__3576__auto____2075 = (_assoc["_"]);

if(cljs.core.truth_(or__3576__auto____2075))
{return or__3576__auto____2075;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3574__auto____2076 = coll;

if(cljs.core.truth_(and__3574__auto____2076))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3574__auto____2076;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3576__auto____2077 = (_dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2077))
{return or__3576__auto____2077;
} else
{var or__3576__auto____2078 = (_dissoc["_"]);

if(cljs.core.truth_(or__3576__auto____2078))
{return or__3576__auto____2078;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3574__auto____2079 = coll;

if(cljs.core.truth_(and__3574__auto____2079))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3574__auto____2079;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3576__auto____2080 = (_disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2080))
{return or__3576__auto____2080;
} else
{var or__3576__auto____2081 = (_disjoin["_"]);

if(cljs.core.truth_(or__3576__auto____2081))
{return or__3576__auto____2081;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2082 = coll;

if(cljs.core.truth_(and__3574__auto____2082))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3574__auto____2082;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3576__auto____2083 = (_peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2083))
{return or__3576__auto____2083;
} else
{var or__3576__auto____2084 = (_peek["_"]);

if(cljs.core.truth_(or__3576__auto____2084))
{return or__3576__auto____2084;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3574__auto____2085 = coll;

if(cljs.core.truth_(and__3574__auto____2085))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3574__auto____2085;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3576__auto____2086 = (_pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2086))
{return or__3576__auto____2086;
} else
{var or__3576__auto____2087 = (_pop["_"]);

if(cljs.core.truth_(or__3576__auto____2087))
{return or__3576__auto____2087;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3574__auto____2088 = coll;

if(cljs.core.truth_(and__3574__auto____2088))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3574__auto____2088;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3576__auto____2089 = (_assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2089))
{return or__3576__auto____2089;
} else
{var or__3576__auto____2090 = (_assoc_n["_"]);

if(cljs.core.truth_(or__3576__auto____2090))
{return or__3576__auto____2090;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3574__auto____2091 = o;

if(cljs.core.truth_(and__3574__auto____2091))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3574__auto____2091;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3576__auto____2092 = (_deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2092))
{return or__3576__auto____2092;
} else
{var or__3576__auto____2093 = (_deref["_"]);

if(cljs.core.truth_(or__3576__auto____2093))
{return or__3576__auto____2093;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3574__auto____2094 = o;

if(cljs.core.truth_(and__3574__auto____2094))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3574__auto____2094;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3576__auto____2095 = (_deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2095))
{return or__3576__auto____2095;
} else
{var or__3576__auto____2096 = (_deref_with_timeout["_"]);

if(cljs.core.truth_(or__3576__auto____2096))
{return or__3576__auto____2096;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3574__auto____2097 = o;

if(cljs.core.truth_(and__3574__auto____2097))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3574__auto____2097;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3576__auto____2098 = (_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2098))
{return or__3576__auto____2098;
} else
{var or__3576__auto____2099 = (_meta["_"]);

if(cljs.core.truth_(or__3576__auto____2099))
{return or__3576__auto____2099;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3574__auto____2100 = o;

if(cljs.core.truth_(and__3574__auto____2100))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3574__auto____2100;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3576__auto____2101 = (_with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2101))
{return or__3576__auto____2101;
} else
{var or__3576__auto____2102 = (_with_meta["_"]);

if(cljs.core.truth_(or__3576__auto____2102))
{return or__3576__auto____2102;
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
var _reduce__2109 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3574__auto____2103 = coll;

if(cljs.core.truth_(and__3574__auto____2103))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____2103;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3576__auto____2104 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2104))
{return or__3576__auto____2104;
} else
{var or__3576__auto____2105 = (_reduce["_"]);

if(cljs.core.truth_(or__3576__auto____2105))
{return or__3576__auto____2105;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__2110 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3574__auto____2106 = coll;

if(cljs.core.truth_(and__3574__auto____2106))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3574__auto____2106;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3576__auto____2107 = (_reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3576__auto____2107))
{return or__3576__auto____2107;
} else
{var or__3576__auto____2108 = (_reduce["_"]);

if(cljs.core.truth_(or__3576__auto____2108))
{return or__3576__auto____2108;
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
return _reduce__2109.call(this,coll,f);
case  3 :
return _reduce__2110.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3574__auto____2112 = o;

if(cljs.core.truth_(and__3574__auto____2112))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3574__auto____2112;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3576__auto____2113 = (_equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2113))
{return or__3576__auto____2113;
} else
{var or__3576__auto____2114 = (_equiv["_"]);

if(cljs.core.truth_(or__3576__auto____2114))
{return or__3576__auto____2114;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3574__auto____2115 = o;

if(cljs.core.truth_(and__3574__auto____2115))
{return o.cljs$core$IHash$_hash;
} else
{return and__3574__auto____2115;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3576__auto____2116 = (_hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2116))
{return or__3576__auto____2116;
} else
{var or__3576__auto____2117 = (_hash["_"]);

if(cljs.core.truth_(or__3576__auto____2117))
{return or__3576__auto____2117;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3574__auto____2118 = o;

if(cljs.core.truth_(and__3574__auto____2118))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3574__auto____2118;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3576__auto____2119 = (_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2119))
{return or__3576__auto____2119;
} else
{var or__3576__auto____2120 = (_seq["_"]);

if(cljs.core.truth_(or__3576__auto____2120))
{return or__3576__auto____2120;
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
if(cljs.core.truth_((function (){var and__3574__auto____2121 = o;

if(cljs.core.truth_(and__3574__auto____2121))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3574__auto____2121;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3576__auto____2122 = (_pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3576__auto____2122))
{return or__3576__auto____2122;
} else
{var or__3576__auto____2123 = (_pr_seq["_"]);

if(cljs.core.truth_(or__3576__auto____2123))
{return or__3576__auto____2123;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3574__auto____2124 = d;

if(cljs.core.truth_(and__3574__auto____2124))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3574__auto____2124;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3576__auto____2125 = (_realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3576__auto____2125))
{return or__3576__auto____2125;
} else
{var or__3576__auto____2126 = (_realized_QMARK_["_"]);

if(cljs.core.truth_(or__3576__auto____2126))
{return or__3576__auto____2126;
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
var G__2127 = null;
var G__2127__2128 = (function (_,n){
return null;
});
var G__2127__2129 = (function (_,n,not_found){
return not_found;
});
G__2127 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__2127__2128.call(this,_,n);
case  3 :
return G__2127__2129.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2127;
})()
);
(cljs.core.IMeta["null"] = true);
(cljs.core._meta["null"] = (function (_){
return null;
}));
(cljs.core.IReduce["null"] = true);
(cljs.core._reduce["null"] = (function() {
var G__2131 = null;
var G__2131__2132 = (function (_,f){
return f.call(null);
});
var G__2131__2133 = (function (_,f,start){
return start;
});
G__2131 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__2131__2132.call(this,_,f);
case  3 :
return G__2131__2133.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2131;
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
var G__2135 = null;
var G__2135__2136 = (function (o,k){
return null;
});
var G__2135__2137 = (function (o,k,not_found){
return not_found;
});
G__2135 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__2135__2136.call(this,o,k);
case  3 :
return G__2135__2137.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2135;
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
var ci_reduce__2145 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__2139 = cljs.core._nth.call(null,cicoll,0);
var n__2140 = 1;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2140,cljs.core._count.call(null,cicoll))))
{{
var G__2149 = f.call(null,val__2139,cljs.core._nth.call(null,cicoll,n__2140));
var G__2150 = cljs.core.inc.call(null,n__2140);
val__2139 = G__2149;
n__2140 = G__2150;
continue;
}
} else
{return val__2139;
}
break;
}
}
});
var ci_reduce__2146 = (function (cicoll,f,val){
var val__2141 = val;
var n__2142 = 0;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2142,cljs.core._count.call(null,cicoll))))
{{
var G__2151 = f.call(null,val__2141,cljs.core._nth.call(null,cicoll,n__2142));
var G__2152 = cljs.core.inc.call(null,n__2142);
val__2141 = G__2151;
n__2142 = G__2152;
continue;
}
} else
{return val__2141;
}
break;
}
});
var ci_reduce__2147 = (function (cicoll,f,val,idx){
var val__2143 = val;
var n__2144 = idx;

while(true){
if(cljs.core.truth_(cljs.core.lt_.call(null,n__2144,cljs.core._count.call(null,cicoll))))
{{
var G__2153 = f.call(null,val__2143,cljs.core._nth.call(null,cicoll,n__2144));
var G__2154 = cljs.core.inc.call(null,n__2144);
val__2143 = G__2153;
n__2144 = G__2154;
continue;
}
} else
{return val__2143;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__2145.call(this,cicoll,f);
case  3 :
return ci_reduce__2146.call(this,cicoll,f,val);
case  4 :
return ci_reduce__2147.call(this,cicoll,f,val,idx);
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
var G__2162 = null;
var G__2162__2163 = (function (coll,f){
var this__2155 = this;
return cljs.core.ci_reduce.call(null,coll,f,(this__2155.a[this__2155.i]),cljs.core.inc.call(null,this__2155.i));
});
var G__2162__2164 = (function (coll,f,start){
var this__2156 = this;
return cljs.core.ci_reduce.call(null,coll,f,start,this__2156.i);
});
G__2162 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2162__2163.call(this,coll,f);
case  3 :
return G__2162__2164.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2162;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2157 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__2158 = this;
return this__2158.a.length;
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__2159 = this;
return (this__2159.a[this__2159.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__2160 = this;
if(cljs.core.truth_(cljs.core.lt_.call(null,cljs.core.inc.call(null,this__2160.i),this__2160.a.length)))
{return (new cljs.core.IndexedSeq(this__2160.a,cljs.core.inc.call(null,this__2160.i)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__2161 = this;
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
var G__2166 = null;
var G__2166__2167 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__2166__2168 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__2166 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__2166__2167.call(this,array,f);
case  3 :
return G__2166__2168.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2166;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__2170 = null;
var G__2170__2171 = (function (array,k){
return (array[k]);
});
var G__2170__2172 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__2170 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__2170__2171.call(this,array,k);
case  3 :
return G__2170__2172.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2170;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__2174 = null;
var G__2174__2175 = (function (array,n){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__2174__2176 = (function (array,n,not_found){
if(cljs.core.truth_(cljs.core.lt_.call(null,n,array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__2174 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__2174__2175.call(this,array,n);
case  3 :
return G__2174__2176.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2174;
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
var temp__3726__auto____2178 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2178))
{var s__2179 = temp__3726__auto____2178;

return cljs.core._first.call(null,s__2179);
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
var G__2180 = cljs.core.next.call(null,s);
s = G__2180;
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
var s__2181 = cljs.core.seq.call(null,x);
var n__2182 = 0;

while(true){
if(cljs.core.truth_(s__2181))
{{
var G__2183 = cljs.core.next.call(null,s__2181);
var G__2184 = cljs.core.inc.call(null,n__2182);
s__2181 = G__2183;
n__2182 = G__2184;
continue;
}
} else
{return n__2182;
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
var conj__2185 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__2186 = (function() { 
var G__2188__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__2189 = conj.call(null,coll,x);
var G__2190 = cljs.core.first.call(null,xs);
var G__2191 = cljs.core.next.call(null,xs);
coll = G__2189;
x = G__2190;
xs = G__2191;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__2188 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2188__delegate.call(this, coll, x, xs);
};
G__2188.cljs$lang$maxFixedArity = 2;
G__2188.cljs$lang$applyTo = (function (arglist__2192){
var coll = cljs.core.first(arglist__2192);
var x = cljs.core.first(cljs.core.next(arglist__2192));
var xs = cljs.core.rest(cljs.core.next(arglist__2192));
return G__2188__delegate.call(this, coll, x, xs);
});
return G__2188;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__2185.call(this,coll,x);
default:
return conj__2186.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__2186.cljs$lang$applyTo;
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
var nth__2193 = (function (coll,n){
return cljs.core._nth.call(null,coll,n);
});
var nth__2194 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,n,not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__2193.call(this,coll,n);
case  3 :
return nth__2194.call(this,coll,n,not_found);
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
var get__2196 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__2197 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__2196.call(this,o,k);
case  3 :
return get__2197.call(this,o,k,not_found);
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
var assoc__2200 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__2201 = (function() { 
var G__2203__delegate = function (coll,k,v,kvs){
while(true){
var ret__2199 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__2204 = ret__2199;
var G__2205 = cljs.core.first.call(null,kvs);
var G__2206 = cljs.core.second.call(null,kvs);
var G__2207 = cljs.core.nnext.call(null,kvs);
coll = G__2204;
k = G__2205;
v = G__2206;
kvs = G__2207;
continue;
}
} else
{return ret__2199;
}
break;
}
};
var G__2203 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2203__delegate.call(this, coll, k, v, kvs);
};
G__2203.cljs$lang$maxFixedArity = 3;
G__2203.cljs$lang$applyTo = (function (arglist__2208){
var coll = cljs.core.first(arglist__2208);
var k = cljs.core.first(cljs.core.next(arglist__2208));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2208)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2208)));
return G__2203__delegate.call(this, coll, k, v, kvs);
});
return G__2203;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__2200.call(this,coll,k,v);
default:
return assoc__2201.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__2201.cljs$lang$applyTo;
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
var dissoc__2210 = (function (coll){
return coll;
});
var dissoc__2211 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__2212 = (function() { 
var G__2214__delegate = function (coll,k,ks){
while(true){
var ret__2209 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2215 = ret__2209;
var G__2216 = cljs.core.first.call(null,ks);
var G__2217 = cljs.core.next.call(null,ks);
coll = G__2215;
k = G__2216;
ks = G__2217;
continue;
}
} else
{return ret__2209;
}
break;
}
};
var G__2214 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2214__delegate.call(this, coll, k, ks);
};
G__2214.cljs$lang$maxFixedArity = 2;
G__2214.cljs$lang$applyTo = (function (arglist__2218){
var coll = cljs.core.first(arglist__2218);
var k = cljs.core.first(cljs.core.next(arglist__2218));
var ks = cljs.core.rest(cljs.core.next(arglist__2218));
return G__2214__delegate.call(this, coll, k, ks);
});
return G__2214;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__2210.call(this,coll);
case  2 :
return dissoc__2211.call(this,coll,k);
default:
return dissoc__2212.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__2212.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__107__auto____2219 = o;

if(cljs.core.truth_((function (){var and__3574__auto____2220 = x__107__auto____2219;

if(cljs.core.truth_(and__3574__auto____2220))
{return x__107__auto____2219.cljs$core$IMeta$;
} else
{return and__3574__auto____2220;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__107__auto____2219);
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
var disj__2222 = (function (coll){
return coll;
});
var disj__2223 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__2224 = (function() { 
var G__2226__delegate = function (coll,k,ks){
while(true){
var ret__2221 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__2227 = ret__2221;
var G__2228 = cljs.core.first.call(null,ks);
var G__2229 = cljs.core.next.call(null,ks);
coll = G__2227;
k = G__2228;
ks = G__2229;
continue;
}
} else
{return ret__2221;
}
break;
}
};
var G__2226 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2226__delegate.call(this, coll, k, ks);
};
G__2226.cljs$lang$maxFixedArity = 2;
G__2226.cljs$lang$applyTo = (function (arglist__2230){
var coll = cljs.core.first(arglist__2230);
var k = cljs.core.first(cljs.core.next(arglist__2230));
var ks = cljs.core.rest(cljs.core.next(arglist__2230));
return G__2226__delegate.call(this, coll, k, ks);
});
return G__2226;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__2222.call(this,coll);
case  2 :
return disj__2223.call(this,coll,k);
default:
return disj__2224.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__2224.cljs$lang$applyTo;
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
{var x__107__auto____2231 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2232 = x__107__auto____2231;

if(cljs.core.truth_(and__3574__auto____2232))
{return x__107__auto____2231.cljs$core$ICollection$;
} else
{return and__3574__auto____2232;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__107__auto____2231);
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
{var x__107__auto____2233 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2234 = x__107__auto____2233;

if(cljs.core.truth_(and__3574__auto____2234))
{return x__107__auto____2233.cljs$core$ISet$;
} else
{return and__3574__auto____2234;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__107__auto____2233);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__107__auto____2235 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2236 = x__107__auto____2235;

if(cljs.core.truth_(and__3574__auto____2236))
{return x__107__auto____2235.cljs$core$IAssociative$;
} else
{return and__3574__auto____2236;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__107__auto____2235);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__107__auto____2237 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2238 = x__107__auto____2237;

if(cljs.core.truth_(and__3574__auto____2238))
{return x__107__auto____2237.cljs$core$ISequential$;
} else
{return and__3574__auto____2238;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__107__auto____2237);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__107__auto____2239 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2240 = x__107__auto____2239;

if(cljs.core.truth_(and__3574__auto____2240))
{return x__107__auto____2239.cljs$core$ICounted$;
} else
{return and__3574__auto____2240;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__107__auto____2239);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return false;
} else
{var x__107__auto____2241 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2242 = x__107__auto____2241;

if(cljs.core.truth_(and__3574__auto____2242))
{return x__107__auto____2241.cljs$core$IMap$;
} else
{return and__3574__auto____2242;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__107__auto____2241);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__107__auto____2243 = x;

if(cljs.core.truth_((function (){var and__3574__auto____2244 = x__107__auto____2243;

if(cljs.core.truth_(and__3574__auto____2244))
{return x__107__auto____2243.cljs$core$IVector$;
} else
{return and__3574__auto____2244;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__107__auto____2243);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__2245 = cljs.core.array.call(null);

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__2245.push(key);
}));
return keys__2245;
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
{var x__107__auto____2246 = s;

if(cljs.core.truth_((function (){var and__3574__auto____2247 = x__107__auto____2246;

if(cljs.core.truth_(and__3574__auto____2247))
{return x__107__auto____2246.cljs$core$ISeq$;
} else
{return and__3574__auto____2247;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__107__auto____2246);
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
var and__3574__auto____2248 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2248))
{return cljs.core.not.call(null,(function (){var or__3576__auto____2249 = cljs.core._EQ_.call(null,x.charAt(0),"﷐");

if(cljs.core.truth_(or__3576__auto____2249))
{return or__3576__auto____2249;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
}
})());
} else
{return and__3574__auto____2248;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3574__auto____2250 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2250))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷐");
} else
{return and__3574__auto____2250;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3574__auto____2251 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3574__auto____2251))
{return cljs.core._EQ_.call(null,x.charAt(0),"﷑");
} else
{return and__3574__auto____2251;
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
var and__3574__auto____2252 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____2252))
{return (n == n.toFixed());
} else
{return and__3574__auto____2252;
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
if(cljs.core.truth_((function (){var and__3574__auto____2253 = coll;

if(cljs.core.truth_(and__3574__auto____2253))
{var and__3574__auto____2254 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3574__auto____2254))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3574__auto____2254;
}
} else
{return and__3574__auto____2253;
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
var distinct_QMARK___2259 = (function (x){
return true;
});
var distinct_QMARK___2260 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___2261 = (function() { 
var G__2263__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__2255 = cljs.core.set([y,x]);
var xs__2256 = more;

while(true){
var x__2257 = cljs.core.first.call(null,xs__2256);
var etc__2258 = cljs.core.next.call(null,xs__2256);

if(cljs.core.truth_(xs__2256))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__2255,x__2257)))
{return false;
} else
{{
var G__2264 = cljs.core.conj.call(null,s__2255,x__2257);
var G__2265 = etc__2258;
s__2255 = G__2264;
xs__2256 = G__2265;
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
var G__2263 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2263__delegate.call(this, x, y, more);
};
G__2263.cljs$lang$maxFixedArity = 2;
G__2263.cljs$lang$applyTo = (function (arglist__2266){
var x = cljs.core.first(arglist__2266);
var y = cljs.core.first(cljs.core.next(arglist__2266));
var more = cljs.core.rest(cljs.core.next(arglist__2266));
return G__2263__delegate.call(this, x, y, more);
});
return G__2263;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___2259.call(this,x);
case  2 :
return distinct_QMARK___2260.call(this,x,y);
default:
return distinct_QMARK___2261.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___2261.cljs$lang$applyTo;
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
var r__2267 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__2267)))
{return r__2267;
} else
{if(cljs.core.truth_(r__2267))
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
var sort__2269 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__2270 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__2268 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__2268,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__2268);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__2269.call(this,comp);
case  2 :
return sort__2270.call(this,comp,coll);
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
var sort_by__2272 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__2273 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__2272.call(this,keyfn,comp);
case  3 :
return sort_by__2273.call(this,keyfn,comp,coll);
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
var reduce__2275 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__2276 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__2275.call(this,f,val);
case  3 :
return reduce__2276.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__2282 = (function (f,coll){
var temp__3723__auto____2278 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____2278))
{var s__2279 = temp__3723__auto____2278;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__2279),cljs.core.next.call(null,s__2279));
} else
{return f.call(null);
}
});
var seq_reduce__2283 = (function (f,val,coll){
var val__2280 = val;
var coll__2281 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__2281))
{{
var G__2285 = f.call(null,val__2280,cljs.core.first.call(null,coll__2281));
var G__2286 = cljs.core.next.call(null,coll__2281);
val__2280 = G__2285;
coll__2281 = G__2286;
continue;
}
} else
{return val__2280;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__2282.call(this,f,val);
case  3 :
return seq_reduce__2283.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__2287 = null;
var G__2287__2288 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__2287__2289 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__2287 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__2287__2288.call(this,coll,f);
case  3 :
return G__2287__2289.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2287;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___2291 = (function (){
return 0;
});
var _PLUS___2292 = (function (x){
return x;
});
var _PLUS___2293 = (function (x,y){
return (x + y);
});
var _PLUS___2294 = (function() { 
var G__2296__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,_PLUS_.call(null,x,y),more);
};
var G__2296 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2296__delegate.call(this, x, y, more);
};
G__2296.cljs$lang$maxFixedArity = 2;
G__2296.cljs$lang$applyTo = (function (arglist__2297){
var x = cljs.core.first(arglist__2297);
var y = cljs.core.first(cljs.core.next(arglist__2297));
var more = cljs.core.rest(cljs.core.next(arglist__2297));
return G__2296__delegate.call(this, x, y, more);
});
return G__2296;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___2291.call(this);
case  1 :
return _PLUS___2292.call(this,x);
case  2 :
return _PLUS___2293.call(this,x,y);
default:
return _PLUS___2294.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___2294.cljs$lang$applyTo;
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
var ___2298 = (function (x){
return (- x);
});
var ___2299 = (function (x,y){
return (x - y);
});
var ___2300 = (function() { 
var G__2302__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,_.call(null,x,y),more);
};
var G__2302 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2302__delegate.call(this, x, y, more);
};
G__2302.cljs$lang$maxFixedArity = 2;
G__2302.cljs$lang$applyTo = (function (arglist__2303){
var x = cljs.core.first(arglist__2303);
var y = cljs.core.first(cljs.core.next(arglist__2303));
var more = cljs.core.rest(cljs.core.next(arglist__2303));
return G__2302__delegate.call(this, x, y, more);
});
return G__2302;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___2298.call(this,x);
case  2 :
return ___2299.call(this,x,y);
default:
return ___2300.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___2300.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___2304 = (function (){
return 1;
});
var _STAR___2305 = (function (x){
return x;
});
var _STAR___2306 = (function (x,y){
return (x * y);
});
var _STAR___2307 = (function() { 
var G__2309__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,_STAR_.call(null,x,y),more);
};
var G__2309 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2309__delegate.call(this, x, y, more);
};
G__2309.cljs$lang$maxFixedArity = 2;
G__2309.cljs$lang$applyTo = (function (arglist__2310){
var x = cljs.core.first(arglist__2310);
var y = cljs.core.first(cljs.core.next(arglist__2310));
var more = cljs.core.rest(cljs.core.next(arglist__2310));
return G__2309__delegate.call(this, x, y, more);
});
return G__2309;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___2304.call(this);
case  1 :
return _STAR___2305.call(this,x);
case  2 :
return _STAR___2306.call(this,x,y);
default:
return _STAR___2307.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___2307.cljs$lang$applyTo;
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
var _SLASH___2311 = (function (x){
return (1 / x);
});
var _SLASH___2312 = (function (x,y){
return (x / y);
});
var _SLASH___2313 = (function() { 
var G__2315__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__2315 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2315__delegate.call(this, x, y, more);
};
G__2315.cljs$lang$maxFixedArity = 2;
G__2315.cljs$lang$applyTo = (function (arglist__2316){
var x = cljs.core.first(arglist__2316);
var y = cljs.core.first(cljs.core.next(arglist__2316));
var more = cljs.core.rest(cljs.core.next(arglist__2316));
return G__2315__delegate.call(this, x, y, more);
});
return G__2315;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___2311.call(this,x);
case  2 :
return _SLASH___2312.call(this,x,y);
default:
return _SLASH___2313.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___2313.cljs$lang$applyTo;
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
var _LT___2317 = (function (x){
return true;
});
var _LT___2318 = (function (x,y){
return (x < y);
});
var _LT___2319 = (function() { 
var G__2321__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2322 = y;
var G__2323 = cljs.core.first.call(null,more);
var G__2324 = cljs.core.next.call(null,more);
x = G__2322;
y = G__2323;
more = G__2324;
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
var G__2321 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2321__delegate.call(this, x, y, more);
};
G__2321.cljs$lang$maxFixedArity = 2;
G__2321.cljs$lang$applyTo = (function (arglist__2325){
var x = cljs.core.first(arglist__2325);
var y = cljs.core.first(cljs.core.next(arglist__2325));
var more = cljs.core.rest(cljs.core.next(arglist__2325));
return G__2321__delegate.call(this, x, y, more);
});
return G__2321;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___2317.call(this,x);
case  2 :
return _LT___2318.call(this,x,y);
default:
return _LT___2319.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___2319.cljs$lang$applyTo;
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
var _LT__EQ___2326 = (function (x){
return true;
});
var _LT__EQ___2327 = (function (x,y){
return (x <= y);
});
var _LT__EQ___2328 = (function() { 
var G__2330__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_LT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2331 = y;
var G__2332 = cljs.core.first.call(null,more);
var G__2333 = cljs.core.next.call(null,more);
x = G__2331;
y = G__2332;
more = G__2333;
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
var G__2330 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2330__delegate.call(this, x, y, more);
};
G__2330.cljs$lang$maxFixedArity = 2;
G__2330.cljs$lang$applyTo = (function (arglist__2334){
var x = cljs.core.first(arglist__2334);
var y = cljs.core.first(cljs.core.next(arglist__2334));
var more = cljs.core.rest(cljs.core.next(arglist__2334));
return G__2330__delegate.call(this, x, y, more);
});
return G__2330;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___2326.call(this,x);
case  2 :
return _LT__EQ___2327.call(this,x,y);
default:
return _LT__EQ___2328.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___2328.cljs$lang$applyTo;
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
var _GT___2335 = (function (x){
return true;
});
var _GT___2336 = (function (x,y){
return (x > y);
});
var _GT___2337 = (function() { 
var G__2339__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2340 = y;
var G__2341 = cljs.core.first.call(null,more);
var G__2342 = cljs.core.next.call(null,more);
x = G__2340;
y = G__2341;
more = G__2342;
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
var G__2339 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2339__delegate.call(this, x, y, more);
};
G__2339.cljs$lang$maxFixedArity = 2;
G__2339.cljs$lang$applyTo = (function (arglist__2343){
var x = cljs.core.first(arglist__2343);
var y = cljs.core.first(cljs.core.next(arglist__2343));
var more = cljs.core.rest(cljs.core.next(arglist__2343));
return G__2339__delegate.call(this, x, y, more);
});
return G__2339;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___2335.call(this,x);
case  2 :
return _GT___2336.call(this,x,y);
default:
return _GT___2337.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___2337.cljs$lang$applyTo;
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
var _GT__EQ___2344 = (function (x){
return true;
});
var _GT__EQ___2345 = (function (x,y){
return (x >= y);
});
var _GT__EQ___2346 = (function() { 
var G__2348__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_GT__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2349 = y;
var G__2350 = cljs.core.first.call(null,more);
var G__2351 = cljs.core.next.call(null,more);
x = G__2349;
y = G__2350;
more = G__2351;
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
var G__2348 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2348__delegate.call(this, x, y, more);
};
G__2348.cljs$lang$maxFixedArity = 2;
G__2348.cljs$lang$applyTo = (function (arglist__2352){
var x = cljs.core.first(arglist__2352);
var y = cljs.core.first(cljs.core.next(arglist__2352));
var more = cljs.core.rest(cljs.core.next(arglist__2352));
return G__2348__delegate.call(this, x, y, more);
});
return G__2348;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___2344.call(this,x);
case  2 :
return _GT__EQ___2345.call(this,x,y);
default:
return _GT__EQ___2346.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___2346.cljs$lang$applyTo;
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
var max__2353 = (function (x){
return x;
});
var max__2354 = (function (x,y){
return ((x > y) ? x : y);
});
var max__2355 = (function() { 
var G__2357__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,max.call(null,x,y),more);
};
var G__2357 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2357__delegate.call(this, x, y, more);
};
G__2357.cljs$lang$maxFixedArity = 2;
G__2357.cljs$lang$applyTo = (function (arglist__2358){
var x = cljs.core.first(arglist__2358);
var y = cljs.core.first(cljs.core.next(arglist__2358));
var more = cljs.core.rest(cljs.core.next(arglist__2358));
return G__2357__delegate.call(this, x, y, more);
});
return G__2357;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__2353.call(this,x);
case  2 :
return max__2354.call(this,x,y);
default:
return max__2355.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__2355.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__2359 = (function (x){
return x;
});
var min__2360 = (function (x,y){
return ((x < y) ? x : y);
});
var min__2361 = (function() { 
var G__2363__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,min.call(null,x,y),more);
};
var G__2363 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2363__delegate.call(this, x, y, more);
};
G__2363.cljs$lang$maxFixedArity = 2;
G__2363.cljs$lang$applyTo = (function (arglist__2364){
var x = cljs.core.first(arglist__2364);
var y = cljs.core.first(cljs.core.next(arglist__2364));
var more = cljs.core.rest(cljs.core.next(arglist__2364));
return G__2363__delegate.call(this, x, y, more);
});
return G__2363;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__2359.call(this,x);
case  2 :
return min__2360.call(this,x,y);
default:
return min__2361.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__2361.cljs$lang$applyTo;
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
var rem__2365 = cljs.core.mod.call(null,n,d);

return cljs.core.fix.call(null,((n - rem__2365) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__2366 = cljs.core.quot.call(null,n,d);

return (n - (d * q__2366));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__2367 = (function (){
return Math.random.call(null);
});
var rand__2368 = (function (n){
return cljs.core._STAR_.call(null,n,rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__2367.call(this);
case  1 :
return rand__2368.call(this,n);
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
var _EQ__EQ___2370 = (function (x){
return true;
});
var _EQ__EQ___2371 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___2372 = (function() { 
var G__2374__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__2375 = y;
var G__2376 = cljs.core.first.call(null,more);
var G__2377 = cljs.core.next.call(null,more);
x = G__2375;
y = G__2376;
more = G__2377;
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
var G__2374 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2374__delegate.call(this, x, y, more);
};
G__2374.cljs$lang$maxFixedArity = 2;
G__2374.cljs$lang$applyTo = (function (arglist__2378){
var x = cljs.core.first(arglist__2378);
var y = cljs.core.first(cljs.core.next(arglist__2378));
var more = cljs.core.rest(cljs.core.next(arglist__2378));
return G__2374__delegate.call(this, x, y, more);
});
return G__2374;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___2370.call(this,x);
case  2 :
return _EQ__EQ___2371.call(this,x,y);
default:
return _EQ__EQ___2372.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___2372.cljs$lang$applyTo;
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
var n__2379 = n;
var xs__2380 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2381 = xs__2380;

if(cljs.core.truth_(and__3574__auto____2381))
{return cljs.core.pos_QMARK_.call(null,n__2379);
} else
{return and__3574__auto____2381;
}
})()))
{{
var G__2382 = cljs.core.dec.call(null,n__2379);
var G__2383 = cljs.core.next.call(null,xs__2380);
n__2379 = G__2382;
xs__2380 = G__2383;
continue;
}
} else
{return xs__2380;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__2388 = null;
var G__2388__2389 = (function (coll,n){
var temp__3723__auto____2384 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____2384))
{var xs__2385 = temp__3723__auto____2384;

return cljs.core.first.call(null,xs__2385);
} else
{throw "Index out of bounds";
}
});
var G__2388__2390 = (function (coll,n,not_found){
var temp__3723__auto____2386 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3723__auto____2386))
{var xs__2387 = temp__3723__auto____2386;

return cljs.core.first.call(null,xs__2387);
} else
{return not_found;
}
});
G__2388 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2388__2389.call(this,coll,n);
case  3 :
return G__2388__2390.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2388;
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
var str__2392 = (function (){
return "";
});
var str__2393 = (function (x){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x)))
{return "";
} else
{return x.toString();
}
});
var str__2394 = (function() { 
var G__2396__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__2397 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__2398 = cljs.core.next.call(null,more);
sb = G__2397;
more = G__2398;
continue;
}
} else
{return str.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__2396 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__2396__delegate.call(this, x, ys);
};
G__2396.cljs$lang$maxFixedArity = 1;
G__2396.cljs$lang$applyTo = (function (arglist__2399){
var x = cljs.core.first(arglist__2399);
var ys = cljs.core.rest(arglist__2399);
return G__2396__delegate.call(this, x, ys);
});
return G__2396;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__2392.call(this);
case  1 :
return str__2393.call(this,x);
default:
return str__2394.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__2394.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__2400 = (function (s,start){
return s.substring(start);
});
var subs__2401 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__2400.call(this,s,start);
case  3 :
return subs__2401.call(this,s,start,end);
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
var symbol__2403 = (function (name){
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
var symbol__2404 = (function (ns,name){
return symbol.call(null,cljs.core.str.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__2403.call(this,ns);
case  2 :
return symbol__2404.call(this,ns,name);
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
var keyword__2406 = (function (name){
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
var keyword__2407 = (function (ns,name){
return keyword.call(null,cljs.core.str.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__2406.call(this,ns);
case  2 :
return keyword__2407.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__2409 = cljs.core.seq.call(null,x);
var ys__2410 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,xs__2409)))
{return cljs.core.nil_QMARK_.call(null,ys__2410);
} else
{if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,ys__2410)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__2409),cljs.core.first.call(null,ys__2410))))
{{
var G__2411 = cljs.core.next.call(null,xs__2409);
var G__2412 = cljs.core.next.call(null,ys__2410);
xs__2409 = G__2411;
ys__2410 = G__2412;
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
return cljs.core.reduce.call(null,(function (p1__2413_SHARP_,p2__2414_SHARP_){
return cljs.core.hash_combine.call(null,p1__2413_SHARP_,cljs.core.hash.call(null,p2__2414_SHARP_));
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
var this__2415 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2416 = this;
return (new cljs.core.List(this__2416.meta,o,coll,cljs.core.inc.call(null,this__2416.count)));
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2417 = this;
return this__2417.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2418 = this;
return this__2418.rest;
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2419 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2420 = this;
return this__2420.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2421 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2422 = this;
return (new cljs.core.List(meta,this__2422.first,this__2422.rest,this__2422.count));
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2423 = this;
return cljs.core.List.EMPTY;
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2424 = this;
return this__2424.meta;
});
cljs.core.List.prototype.cljs$core$IHash$ = true;
cljs.core.List.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2425 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2426 = this;
return this__2426.count;
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
var this__2427 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2428 = this;
return (new cljs.core.List(this__2428.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2429 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2430 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2431 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2432 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2433 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2434 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2435 = this;
return coll;
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2436 = this;
return this__2436.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IHash$ = true;
cljs.core.EmptyList.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2437 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2438 = this;
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
list.cljs$lang$applyTo = (function (arglist__2439){
var items = cljs.core.seq( arglist__2439 );;
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
var this__2440 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2441 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2442 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2443 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2443.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2444 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2445 = this;
return this__2445.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2446 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,this__2446.rest)))
{return cljs.core.List.EMPTY;
} else
{return this__2446.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2447 = this;
return this__2447.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2448 = this;
return (new cljs.core.Cons(meta,this__2448.first,this__2448.rest));
});
/**
* Returns a new seq where x is the first element and seq is the rest.
*/
cljs.core.cons = (function cons(x,seq){
return (new cljs.core.Cons(null,x,seq));
});
(cljs.core.IReduce["string"] = true);
(cljs.core._reduce["string"] = (function() {
var G__2449 = null;
var G__2449__2450 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__2449__2451 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__2449 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__2449__2450.call(this,string,f);
case  3 :
return G__2449__2451.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2449;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__2453 = null;
var G__2453__2454 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__2453__2455 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__2453 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__2453__2454.call(this,string,k);
case  3 :
return G__2453__2455.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2453;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__2457 = null;
var G__2457__2458 = (function (string,n){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__2457__2459 = (function (string,n,not_found){
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__2457 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__2457__2458.call(this,string,n);
case  3 :
return G__2457__2459.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2457;
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
var G__2461 = null;
var G__2461__2462 = (function (_,coll){
return cljs.core.get.call(null,coll,this.toString());
});
var G__2461__2463 = (function (_,coll,not_found){
return cljs.core.get.call(null,coll,this.toString(),not_found);
});
G__2461 = function(_,coll,not_found){
switch(arguments.length){
case  2 :
return G__2461__2462.call(this,_,coll);
case  3 :
return G__2461__2463.call(this,_,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2461;
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
var x__2465 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__2465;
} else
{lazy_seq.x = x__2465.call(null);
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
var this__2466 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2467 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__2468 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2469 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__2469.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2470 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__2471 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__2472 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2473 = this;
return this__2473.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2474 = this;
return (new cljs.core.LazySeq(meta,this__2474.realized,this__2474.x));
});
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__2475 = cljs.core.array.call(null);

var s__2476 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__2476)))
{ary__2475.push(cljs.core.first.call(null,s__2476));
{
var G__2477 = cljs.core.next.call(null,s__2476);
s__2476 = G__2477;
continue;
}
} else
{return ary__2475;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__2478 = s;
var i__2479 = n;
var sum__2480 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____2481 = cljs.core.pos_QMARK_.call(null,i__2479);

if(cljs.core.truth_(and__3574__auto____2481))
{return cljs.core.seq.call(null,s__2478);
} else
{return and__3574__auto____2481;
}
})()))
{{
var G__2482 = cljs.core.next.call(null,s__2478);
var G__2483 = cljs.core.dec.call(null,i__2479);
var G__2484 = cljs.core.inc.call(null,sum__2480);
s__2478 = G__2482;
i__2479 = G__2483;
sum__2480 = G__2484;
continue;
}
} else
{return sum__2480;
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
var concat__2488 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__2489 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__2490 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__2485 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__2485))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__2485),concat.call(null,cljs.core.rest.call(null,s__2485),y));
} else
{return y;
}
})));
});
var concat__2491 = (function() { 
var G__2493__delegate = function (x,y,zs){
var cat__2487 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__2486 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__2486))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__2486),cat.call(null,cljs.core.rest.call(null,xys__2486),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__2487.call(null,concat.call(null,x,y),zs);
};
var G__2493 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2493__delegate.call(this, x, y, zs);
};
G__2493.cljs$lang$maxFixedArity = 2;
G__2493.cljs$lang$applyTo = (function (arglist__2494){
var x = cljs.core.first(arglist__2494);
var y = cljs.core.first(cljs.core.next(arglist__2494));
var zs = cljs.core.rest(cljs.core.next(arglist__2494));
return G__2493__delegate.call(this, x, y, zs);
});
return G__2493;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__2488.call(this);
case  1 :
return concat__2489.call(this,x);
case  2 :
return concat__2490.call(this,x,y);
default:
return concat__2491.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__2491.cljs$lang$applyTo;
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
var list_STAR___2495 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___2496 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___2497 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___2498 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___2499 = (function() { 
var G__2501__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__2501 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2501__delegate.call(this, a, b, c, d, more);
};
G__2501.cljs$lang$maxFixedArity = 4;
G__2501.cljs$lang$applyTo = (function (arglist__2502){
var a = cljs.core.first(arglist__2502);
var b = cljs.core.first(cljs.core.next(arglist__2502));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2502)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2502))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2502))));
return G__2501__delegate.call(this, a, b, c, d, more);
});
return G__2501;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___2495.call(this,a);
case  2 :
return list_STAR___2496.call(this,a,b);
case  3 :
return list_STAR___2497.call(this,a,b,c);
case  4 :
return list_STAR___2498.call(this,a,b,c,d);
default:
return list_STAR___2499.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___2499.cljs$lang$applyTo;
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
var apply__2512 = (function (f,args){
var fixed_arity__2503 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,args,cljs.core.inc.call(null,fixed_arity__2503)),fixed_arity__2503)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__2513 = (function (f,x,args){
var arglist__2504 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__2505 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2504,fixed_arity__2505),fixed_arity__2505)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2504));
} else
{return f.cljs$lang$applyTo(arglist__2504);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2504));
}
});
var apply__2514 = (function (f,x,y,args){
var arglist__2506 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__2507 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2506,fixed_arity__2507),fixed_arity__2507)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2506));
} else
{return f.cljs$lang$applyTo(arglist__2506);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2506));
}
});
var apply__2515 = (function (f,x,y,z,args){
var arglist__2508 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__2509 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2508,fixed_arity__2509),fixed_arity__2509)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2508));
} else
{return f.cljs$lang$applyTo(arglist__2508);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2508));
}
});
var apply__2516 = (function() { 
var G__2518__delegate = function (f,a,b,c,d,args){
var arglist__2510 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__2511 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_(cljs.core._LT__EQ_.call(null,cljs.core.bounded_count.call(null,arglist__2510,fixed_arity__2511),fixed_arity__2511)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__2510));
} else
{return f.cljs$lang$applyTo(arglist__2510);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__2510));
}
};
var G__2518 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__2518__delegate.call(this, f, a, b, c, d, args);
};
G__2518.cljs$lang$maxFixedArity = 5;
G__2518.cljs$lang$applyTo = (function (arglist__2519){
var f = cljs.core.first(arglist__2519);
var a = cljs.core.first(cljs.core.next(arglist__2519));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2519)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2519))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2519)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2519)))));
return G__2518__delegate.call(this, f, a, b, c, d, args);
});
return G__2518;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__2512.call(this,f,a);
case  3 :
return apply__2513.call(this,f,a,b);
case  4 :
return apply__2514.call(this,f,a,b,c);
case  5 :
return apply__2515.call(this,f,a,b,c,d);
default:
return apply__2516.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__2516.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__2520){
var obj = cljs.core.first(arglist__2520);
var f = cljs.core.first(cljs.core.next(arglist__2520));
var args = cljs.core.rest(cljs.core.next(arglist__2520));
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
var not_EQ___2521 = (function (x){
return false;
});
var not_EQ___2522 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___2523 = (function() { 
var G__2525__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__2525 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2525__delegate.call(this, x, y, more);
};
G__2525.cljs$lang$maxFixedArity = 2;
G__2525.cljs$lang$applyTo = (function (arglist__2526){
var x = cljs.core.first(arglist__2526);
var y = cljs.core.first(cljs.core.next(arglist__2526));
var more = cljs.core.rest(cljs.core.next(arglist__2526));
return G__2525__delegate.call(this, x, y, more);
});
return G__2525;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___2521.call(this,x);
case  2 :
return not_EQ___2522.call(this,x,y);
default:
return not_EQ___2523.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___2523.cljs$lang$applyTo;
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
var G__2527 = pred;
var G__2528 = cljs.core.next.call(null,coll);
pred = G__2527;
coll = G__2528;
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
{var or__3576__auto____2529 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3576__auto____2529))
{return or__3576__auto____2529;
} else
{{
var G__2530 = pred;
var G__2531 = cljs.core.next.call(null,coll);
pred = G__2530;
coll = G__2531;
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
var G__2532 = null;
var G__2532__2533 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__2532__2534 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__2532__2535 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__2532__2536 = (function() { 
var G__2538__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__2538 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2538__delegate.call(this, x, y, zs);
};
G__2538.cljs$lang$maxFixedArity = 2;
G__2538.cljs$lang$applyTo = (function (arglist__2539){
var x = cljs.core.first(arglist__2539);
var y = cljs.core.first(cljs.core.next(arglist__2539));
var zs = cljs.core.rest(cljs.core.next(arglist__2539));
return G__2538__delegate.call(this, x, y, zs);
});
return G__2538;
})()
;
G__2532 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__2532__2533.call(this);
case  1 :
return G__2532__2534.call(this,x);
case  2 :
return G__2532__2535.call(this,x,y);
default:
return G__2532__2536.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2532.cljs$lang$maxFixedArity = 2;
G__2532.cljs$lang$applyTo = G__2532__2536.cljs$lang$applyTo;
return G__2532;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__2540__delegate = function (args){
return x;
};
var G__2540 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2540__delegate.call(this, args);
};
G__2540.cljs$lang$maxFixedArity = 0;
G__2540.cljs$lang$applyTo = (function (arglist__2541){
var args = cljs.core.seq( arglist__2541 );;
return G__2540__delegate.call(this, args);
});
return G__2540;
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
var comp__2545 = (function (){
return cljs.core.identity;
});
var comp__2546 = (function (f){
return f;
});
var comp__2547 = (function (f,g){
return (function() {
var G__2551 = null;
var G__2551__2552 = (function (){
return f.call(null,g.call(null));
});
var G__2551__2553 = (function (x){
return f.call(null,g.call(null,x));
});
var G__2551__2554 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__2551__2555 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__2551__2556 = (function() { 
var G__2558__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__2558 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2558__delegate.call(this, x, y, z, args);
};
G__2558.cljs$lang$maxFixedArity = 3;
G__2558.cljs$lang$applyTo = (function (arglist__2559){
var x = cljs.core.first(arglist__2559);
var y = cljs.core.first(cljs.core.next(arglist__2559));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2559)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2559)));
return G__2558__delegate.call(this, x, y, z, args);
});
return G__2558;
})()
;
G__2551 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2551__2552.call(this);
case  1 :
return G__2551__2553.call(this,x);
case  2 :
return G__2551__2554.call(this,x,y);
case  3 :
return G__2551__2555.call(this,x,y,z);
default:
return G__2551__2556.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2551.cljs$lang$maxFixedArity = 3;
G__2551.cljs$lang$applyTo = G__2551__2556.cljs$lang$applyTo;
return G__2551;
})()
});
var comp__2548 = (function (f,g,h){
return (function() {
var G__2560 = null;
var G__2560__2561 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__2560__2562 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__2560__2563 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__2560__2564 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__2560__2565 = (function() { 
var G__2567__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__2567 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2567__delegate.call(this, x, y, z, args);
};
G__2567.cljs$lang$maxFixedArity = 3;
G__2567.cljs$lang$applyTo = (function (arglist__2568){
var x = cljs.core.first(arglist__2568);
var y = cljs.core.first(cljs.core.next(arglist__2568));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2568)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2568)));
return G__2567__delegate.call(this, x, y, z, args);
});
return G__2567;
})()
;
G__2560 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__2560__2561.call(this);
case  1 :
return G__2560__2562.call(this,x);
case  2 :
return G__2560__2563.call(this,x,y);
case  3 :
return G__2560__2564.call(this,x,y,z);
default:
return G__2560__2565.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2560.cljs$lang$maxFixedArity = 3;
G__2560.cljs$lang$applyTo = G__2560__2565.cljs$lang$applyTo;
return G__2560;
})()
});
var comp__2549 = (function() { 
var G__2569__delegate = function (f1,f2,f3,fs){
var fs__2542 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__2570__delegate = function (args){
var ret__2543 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__2542),args);
var fs__2544 = cljs.core.next.call(null,fs__2542);

while(true){
if(cljs.core.truth_(fs__2544))
{{
var G__2571 = cljs.core.first.call(null,fs__2544).call(null,ret__2543);
var G__2572 = cljs.core.next.call(null,fs__2544);
ret__2543 = G__2571;
fs__2544 = G__2572;
continue;
}
} else
{return ret__2543;
}
break;
}
};
var G__2570 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2570__delegate.call(this, args);
};
G__2570.cljs$lang$maxFixedArity = 0;
G__2570.cljs$lang$applyTo = (function (arglist__2573){
var args = cljs.core.seq( arglist__2573 );;
return G__2570__delegate.call(this, args);
});
return G__2570;
})()
;
};
var G__2569 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2569__delegate.call(this, f1, f2, f3, fs);
};
G__2569.cljs$lang$maxFixedArity = 3;
G__2569.cljs$lang$applyTo = (function (arglist__2574){
var f1 = cljs.core.first(arglist__2574);
var f2 = cljs.core.first(cljs.core.next(arglist__2574));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2574)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2574)));
return G__2569__delegate.call(this, f1, f2, f3, fs);
});
return G__2569;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__2545.call(this);
case  1 :
return comp__2546.call(this,f1);
case  2 :
return comp__2547.call(this,f1,f2);
case  3 :
return comp__2548.call(this,f1,f2,f3);
default:
return comp__2549.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__2549.cljs$lang$applyTo;
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
var partial__2575 = (function (f,arg1){
return (function() { 
var G__2580__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__2580 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2580__delegate.call(this, args);
};
G__2580.cljs$lang$maxFixedArity = 0;
G__2580.cljs$lang$applyTo = (function (arglist__2581){
var args = cljs.core.seq( arglist__2581 );;
return G__2580__delegate.call(this, args);
});
return G__2580;
})()
;
});
var partial__2576 = (function (f,arg1,arg2){
return (function() { 
var G__2582__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__2582 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2582__delegate.call(this, args);
};
G__2582.cljs$lang$maxFixedArity = 0;
G__2582.cljs$lang$applyTo = (function (arglist__2583){
var args = cljs.core.seq( arglist__2583 );;
return G__2582__delegate.call(this, args);
});
return G__2582;
})()
;
});
var partial__2577 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__2584__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__2584 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2584__delegate.call(this, args);
};
G__2584.cljs$lang$maxFixedArity = 0;
G__2584.cljs$lang$applyTo = (function (arglist__2585){
var args = cljs.core.seq( arglist__2585 );;
return G__2584__delegate.call(this, args);
});
return G__2584;
})()
;
});
var partial__2578 = (function() { 
var G__2586__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__2587__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__2587 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__2587__delegate.call(this, args);
};
G__2587.cljs$lang$maxFixedArity = 0;
G__2587.cljs$lang$applyTo = (function (arglist__2588){
var args = cljs.core.seq( arglist__2588 );;
return G__2587__delegate.call(this, args);
});
return G__2587;
})()
;
};
var G__2586 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2586__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__2586.cljs$lang$maxFixedArity = 4;
G__2586.cljs$lang$applyTo = (function (arglist__2589){
var f = cljs.core.first(arglist__2589);
var arg1 = cljs.core.first(cljs.core.next(arglist__2589));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2589)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2589))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2589))));
return G__2586__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__2586;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__2575.call(this,f,arg1);
case  3 :
return partial__2576.call(this,f,arg1,arg2);
case  4 :
return partial__2577.call(this,f,arg1,arg2,arg3);
default:
return partial__2578.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__2578.cljs$lang$applyTo;
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
var fnil__2590 = (function (f,x){
return (function() {
var G__2594 = null;
var G__2594__2595 = (function (a){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a));
});
var G__2594__2596 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b);
});
var G__2594__2597 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c);
});
var G__2594__2598 = (function() { 
var G__2600__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),b,c,ds);
};
var G__2600 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2600__delegate.call(this, a, b, c, ds);
};
G__2600.cljs$lang$maxFixedArity = 3;
G__2600.cljs$lang$applyTo = (function (arglist__2601){
var a = cljs.core.first(arglist__2601);
var b = cljs.core.first(cljs.core.next(arglist__2601));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2601)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2601)));
return G__2600__delegate.call(this, a, b, c, ds);
});
return G__2600;
})()
;
G__2594 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__2594__2595.call(this,a);
case  2 :
return G__2594__2596.call(this,a,b);
case  3 :
return G__2594__2597.call(this,a,b,c);
default:
return G__2594__2598.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2594.cljs$lang$maxFixedArity = 3;
G__2594.cljs$lang$applyTo = G__2594__2598.cljs$lang$applyTo;
return G__2594;
})()
});
var fnil__2591 = (function (f,x,y){
return (function() {
var G__2602 = null;
var G__2602__2603 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2602__2604 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c);
});
var G__2602__2605 = (function() { 
var G__2607__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),c,ds);
};
var G__2607 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2607__delegate.call(this, a, b, c, ds);
};
G__2607.cljs$lang$maxFixedArity = 3;
G__2607.cljs$lang$applyTo = (function (arglist__2608){
var a = cljs.core.first(arglist__2608);
var b = cljs.core.first(cljs.core.next(arglist__2608));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2608)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2608)));
return G__2607__delegate.call(this, a, b, c, ds);
});
return G__2607;
})()
;
G__2602 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2602__2603.call(this,a,b);
case  3 :
return G__2602__2604.call(this,a,b,c);
default:
return G__2602__2605.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2602.cljs$lang$maxFixedArity = 3;
G__2602.cljs$lang$applyTo = G__2602__2605.cljs$lang$applyTo;
return G__2602;
})()
});
var fnil__2592 = (function (f,x,y,z){
return (function() {
var G__2609 = null;
var G__2609__2610 = (function (a,b){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b));
});
var G__2609__2611 = (function (a,b,c){
return f.call(null,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c));
});
var G__2609__2612 = (function() { 
var G__2614__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,a))?x:a),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,b))?y:b),(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,c))?z:c),ds);
};
var G__2614 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2614__delegate.call(this, a, b, c, ds);
};
G__2614.cljs$lang$maxFixedArity = 3;
G__2614.cljs$lang$applyTo = (function (arglist__2615){
var a = cljs.core.first(arglist__2615);
var b = cljs.core.first(cljs.core.next(arglist__2615));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2615)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2615)));
return G__2614__delegate.call(this, a, b, c, ds);
});
return G__2614;
})()
;
G__2609 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__2609__2610.call(this,a,b);
case  3 :
return G__2609__2611.call(this,a,b,c);
default:
return G__2609__2612.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__2609.cljs$lang$maxFixedArity = 3;
G__2609.cljs$lang$applyTo = G__2609__2612.cljs$lang$applyTo;
return G__2609;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__2590.call(this,f,x);
case  3 :
return fnil__2591.call(this,f,x,y);
case  4 :
return fnil__2592.call(this,f,x,y,z);
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
var mapi__2618 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2616 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2616))
{var s__2617 = temp__3726__auto____2616;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__2617)),mpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2617)));
} else
{return null;
}
})));
});

return mapi__2618.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2619 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2619))
{var s__2620 = temp__3726__auto____2619;

var x__2621 = f.call(null,cljs.core.first.call(null,s__2620));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2621)))
{return keep.call(null,f,cljs.core.rest.call(null,s__2620));
} else
{return cljs.core.cons.call(null,x__2621,keep.call(null,f,cljs.core.rest.call(null,s__2620)));
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
var keepi__2631 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2628 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2628))
{var s__2629 = temp__3726__auto____2628;

var x__2630 = f.call(null,idx,cljs.core.first.call(null,s__2629));

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,x__2630)))
{return kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2629));
} else
{return cljs.core.cons.call(null,x__2630,kpi.call(null,cljs.core.inc.call(null,idx),cljs.core.rest.call(null,s__2629)));
}
} else
{return null;
}
})));
});

return keepi__2631.call(null,0,coll);
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
var every_pred__2676 = (function (p){
return (function() {
var ep1 = null;
var ep1__2681 = (function (){
return true;
});
var ep1__2682 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__2683 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2638 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____2638))
{return p.call(null,y);
} else
{return and__3574__auto____2638;
}
})());
});
var ep1__2684 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2639 = p.call(null,x);

if(cljs.core.truth_(and__3574__auto____2639))
{var and__3574__auto____2640 = p.call(null,y);

if(cljs.core.truth_(and__3574__auto____2640))
{return p.call(null,z);
} else
{return and__3574__auto____2640;
}
} else
{return and__3574__auto____2639;
}
})());
});
var ep1__2685 = (function() { 
var G__2687__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2641 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2641))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3574__auto____2641;
}
})());
};
var G__2687 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2687__delegate.call(this, x, y, z, args);
};
G__2687.cljs$lang$maxFixedArity = 3;
G__2687.cljs$lang$applyTo = (function (arglist__2688){
var x = cljs.core.first(arglist__2688);
var y = cljs.core.first(cljs.core.next(arglist__2688));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2688)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2688)));
return G__2687__delegate.call(this, x, y, z, args);
});
return G__2687;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__2681.call(this);
case  1 :
return ep1__2682.call(this,x);
case  2 :
return ep1__2683.call(this,x,y);
case  3 :
return ep1__2684.call(this,x,y,z);
default:
return ep1__2685.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__2685.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__2677 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__2689 = (function (){
return true;
});
var ep2__2690 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2642 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2642))
{return p2.call(null,x);
} else
{return and__3574__auto____2642;
}
})());
});
var ep2__2691 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2643 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2643))
{var and__3574__auto____2644 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2644))
{var and__3574__auto____2645 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2645))
{return p2.call(null,y);
} else
{return and__3574__auto____2645;
}
} else
{return and__3574__auto____2644;
}
} else
{return and__3574__auto____2643;
}
})());
});
var ep2__2692 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2646 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2646))
{var and__3574__auto____2647 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2647))
{var and__3574__auto____2648 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____2648))
{var and__3574__auto____2649 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2649))
{var and__3574__auto____2650 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2650))
{return p2.call(null,z);
} else
{return and__3574__auto____2650;
}
} else
{return and__3574__auto____2649;
}
} else
{return and__3574__auto____2648;
}
} else
{return and__3574__auto____2647;
}
} else
{return and__3574__auto____2646;
}
})());
});
var ep2__2693 = (function() { 
var G__2695__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2651 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2651))
{return cljs.core.every_QMARK_.call(null,(function (p1__2622_SHARP_){
var and__3574__auto____2652 = p1.call(null,p1__2622_SHARP_);

if(cljs.core.truth_(and__3574__auto____2652))
{return p2.call(null,p1__2622_SHARP_);
} else
{return and__3574__auto____2652;
}
}),args);
} else
{return and__3574__auto____2651;
}
})());
};
var G__2695 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2695__delegate.call(this, x, y, z, args);
};
G__2695.cljs$lang$maxFixedArity = 3;
G__2695.cljs$lang$applyTo = (function (arglist__2696){
var x = cljs.core.first(arglist__2696);
var y = cljs.core.first(cljs.core.next(arglist__2696));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2696)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2696)));
return G__2695__delegate.call(this, x, y, z, args);
});
return G__2695;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__2689.call(this);
case  1 :
return ep2__2690.call(this,x);
case  2 :
return ep2__2691.call(this,x,y);
case  3 :
return ep2__2692.call(this,x,y,z);
default:
return ep2__2693.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__2693.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__2678 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__2697 = (function (){
return true;
});
var ep3__2698 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2653 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2653))
{var and__3574__auto____2654 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2654))
{return p3.call(null,x);
} else
{return and__3574__auto____2654;
}
} else
{return and__3574__auto____2653;
}
})());
});
var ep3__2699 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2655 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2655))
{var and__3574__auto____2656 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2656))
{var and__3574__auto____2657 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____2657))
{var and__3574__auto____2658 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2658))
{var and__3574__auto____2659 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2659))
{return p3.call(null,y);
} else
{return and__3574__auto____2659;
}
} else
{return and__3574__auto____2658;
}
} else
{return and__3574__auto____2657;
}
} else
{return and__3574__auto____2656;
}
} else
{return and__3574__auto____2655;
}
})());
});
var ep3__2700 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2660 = p1.call(null,x);

if(cljs.core.truth_(and__3574__auto____2660))
{var and__3574__auto____2661 = p2.call(null,x);

if(cljs.core.truth_(and__3574__auto____2661))
{var and__3574__auto____2662 = p3.call(null,x);

if(cljs.core.truth_(and__3574__auto____2662))
{var and__3574__auto____2663 = p1.call(null,y);

if(cljs.core.truth_(and__3574__auto____2663))
{var and__3574__auto____2664 = p2.call(null,y);

if(cljs.core.truth_(and__3574__auto____2664))
{var and__3574__auto____2665 = p3.call(null,y);

if(cljs.core.truth_(and__3574__auto____2665))
{var and__3574__auto____2666 = p1.call(null,z);

if(cljs.core.truth_(and__3574__auto____2666))
{var and__3574__auto____2667 = p2.call(null,z);

if(cljs.core.truth_(and__3574__auto____2667))
{return p3.call(null,z);
} else
{return and__3574__auto____2667;
}
} else
{return and__3574__auto____2666;
}
} else
{return and__3574__auto____2665;
}
} else
{return and__3574__auto____2664;
}
} else
{return and__3574__auto____2663;
}
} else
{return and__3574__auto____2662;
}
} else
{return and__3574__auto____2661;
}
} else
{return and__3574__auto____2660;
}
})());
});
var ep3__2701 = (function() { 
var G__2703__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2668 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2668))
{return cljs.core.every_QMARK_.call(null,(function (p1__2623_SHARP_){
var and__3574__auto____2669 = p1.call(null,p1__2623_SHARP_);

if(cljs.core.truth_(and__3574__auto____2669))
{var and__3574__auto____2670 = p2.call(null,p1__2623_SHARP_);

if(cljs.core.truth_(and__3574__auto____2670))
{return p3.call(null,p1__2623_SHARP_);
} else
{return and__3574__auto____2670;
}
} else
{return and__3574__auto____2669;
}
}),args);
} else
{return and__3574__auto____2668;
}
})());
};
var G__2703 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2703__delegate.call(this, x, y, z, args);
};
G__2703.cljs$lang$maxFixedArity = 3;
G__2703.cljs$lang$applyTo = (function (arglist__2704){
var x = cljs.core.first(arglist__2704);
var y = cljs.core.first(cljs.core.next(arglist__2704));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2704)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2704)));
return G__2703__delegate.call(this, x, y, z, args);
});
return G__2703;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__2697.call(this);
case  1 :
return ep3__2698.call(this,x);
case  2 :
return ep3__2699.call(this,x,y);
case  3 :
return ep3__2700.call(this,x,y,z);
default:
return ep3__2701.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__2701.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__2679 = (function() { 
var G__2705__delegate = function (p1,p2,p3,ps){
var ps__2671 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__2706 = (function (){
return true;
});
var epn__2707 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__2624_SHARP_){
return p1__2624_SHARP_.call(null,x);
}),ps__2671);
});
var epn__2708 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__2625_SHARP_){
var and__3574__auto____2672 = p1__2625_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____2672))
{return p1__2625_SHARP_.call(null,y);
} else
{return and__3574__auto____2672;
}
}),ps__2671);
});
var epn__2709 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__2626_SHARP_){
var and__3574__auto____2673 = p1__2626_SHARP_.call(null,x);

if(cljs.core.truth_(and__3574__auto____2673))
{var and__3574__auto____2674 = p1__2626_SHARP_.call(null,y);

if(cljs.core.truth_(and__3574__auto____2674))
{return p1__2626_SHARP_.call(null,z);
} else
{return and__3574__auto____2674;
}
} else
{return and__3574__auto____2673;
}
}),ps__2671);
});
var epn__2710 = (function() { 
var G__2712__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3574__auto____2675 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3574__auto____2675))
{return cljs.core.every_QMARK_.call(null,(function (p1__2627_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__2627_SHARP_,args);
}),ps__2671);
} else
{return and__3574__auto____2675;
}
})());
};
var G__2712 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2712__delegate.call(this, x, y, z, args);
};
G__2712.cljs$lang$maxFixedArity = 3;
G__2712.cljs$lang$applyTo = (function (arglist__2713){
var x = cljs.core.first(arglist__2713);
var y = cljs.core.first(cljs.core.next(arglist__2713));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2713)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2713)));
return G__2712__delegate.call(this, x, y, z, args);
});
return G__2712;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__2706.call(this);
case  1 :
return epn__2707.call(this,x);
case  2 :
return epn__2708.call(this,x,y);
case  3 :
return epn__2709.call(this,x,y,z);
default:
return epn__2710.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__2710.cljs$lang$applyTo;
return epn;
})()
};
var G__2705 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2705__delegate.call(this, p1, p2, p3, ps);
};
G__2705.cljs$lang$maxFixedArity = 3;
G__2705.cljs$lang$applyTo = (function (arglist__2714){
var p1 = cljs.core.first(arglist__2714);
var p2 = cljs.core.first(cljs.core.next(arglist__2714));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2714)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2714)));
return G__2705__delegate.call(this, p1, p2, p3, ps);
});
return G__2705;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__2676.call(this,p1);
case  2 :
return every_pred__2677.call(this,p1,p2);
case  3 :
return every_pred__2678.call(this,p1,p2,p3);
default:
return every_pred__2679.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__2679.cljs$lang$applyTo;
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
var some_fn__2754 = (function (p){
return (function() {
var sp1 = null;
var sp1__2759 = (function (){
return null;
});
var sp1__2760 = (function (x){
return p.call(null,x);
});
var sp1__2761 = (function (x,y){
var or__3576__auto____2716 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____2716))
{return or__3576__auto____2716;
} else
{return p.call(null,y);
}
});
var sp1__2762 = (function (x,y,z){
var or__3576__auto____2717 = p.call(null,x);

if(cljs.core.truth_(or__3576__auto____2717))
{return or__3576__auto____2717;
} else
{var or__3576__auto____2718 = p.call(null,y);

if(cljs.core.truth_(or__3576__auto____2718))
{return or__3576__auto____2718;
} else
{return p.call(null,z);
}
}
});
var sp1__2763 = (function() { 
var G__2765__delegate = function (x,y,z,args){
var or__3576__auto____2719 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2719))
{return or__3576__auto____2719;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__2765 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2765__delegate.call(this, x, y, z, args);
};
G__2765.cljs$lang$maxFixedArity = 3;
G__2765.cljs$lang$applyTo = (function (arglist__2766){
var x = cljs.core.first(arglist__2766);
var y = cljs.core.first(cljs.core.next(arglist__2766));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2766)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2766)));
return G__2765__delegate.call(this, x, y, z, args);
});
return G__2765;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__2759.call(this);
case  1 :
return sp1__2760.call(this,x);
case  2 :
return sp1__2761.call(this,x,y);
case  3 :
return sp1__2762.call(this,x,y,z);
default:
return sp1__2763.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__2763.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__2755 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__2767 = (function (){
return null;
});
var sp2__2768 = (function (x){
var or__3576__auto____2720 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2720))
{return or__3576__auto____2720;
} else
{return p2.call(null,x);
}
});
var sp2__2769 = (function (x,y){
var or__3576__auto____2721 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2721))
{return or__3576__auto____2721;
} else
{var or__3576__auto____2722 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2722))
{return or__3576__auto____2722;
} else
{var or__3576__auto____2723 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2723))
{return or__3576__auto____2723;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__2770 = (function (x,y,z){
var or__3576__auto____2724 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2724))
{return or__3576__auto____2724;
} else
{var or__3576__auto____2725 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2725))
{return or__3576__auto____2725;
} else
{var or__3576__auto____2726 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____2726))
{return or__3576__auto____2726;
} else
{var or__3576__auto____2727 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2727))
{return or__3576__auto____2727;
} else
{var or__3576__auto____2728 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2728))
{return or__3576__auto____2728;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__2771 = (function() { 
var G__2773__delegate = function (x,y,z,args){
var or__3576__auto____2729 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2729))
{return or__3576__auto____2729;
} else
{return cljs.core.some.call(null,(function (p1__2632_SHARP_){
var or__3576__auto____2730 = p1.call(null,p1__2632_SHARP_);

if(cljs.core.truth_(or__3576__auto____2730))
{return or__3576__auto____2730;
} else
{return p2.call(null,p1__2632_SHARP_);
}
}),args);
}
};
var G__2773 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2773__delegate.call(this, x, y, z, args);
};
G__2773.cljs$lang$maxFixedArity = 3;
G__2773.cljs$lang$applyTo = (function (arglist__2774){
var x = cljs.core.first(arglist__2774);
var y = cljs.core.first(cljs.core.next(arglist__2774));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2774)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2774)));
return G__2773__delegate.call(this, x, y, z, args);
});
return G__2773;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__2767.call(this);
case  1 :
return sp2__2768.call(this,x);
case  2 :
return sp2__2769.call(this,x,y);
case  3 :
return sp2__2770.call(this,x,y,z);
default:
return sp2__2771.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__2771.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__2756 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__2775 = (function (){
return null;
});
var sp3__2776 = (function (x){
var or__3576__auto____2731 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2731))
{return or__3576__auto____2731;
} else
{var or__3576__auto____2732 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2732))
{return or__3576__auto____2732;
} else
{return p3.call(null,x);
}
}
});
var sp3__2777 = (function (x,y){
var or__3576__auto____2733 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2733))
{return or__3576__auto____2733;
} else
{var or__3576__auto____2734 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2734))
{return or__3576__auto____2734;
} else
{var or__3576__auto____2735 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____2735))
{return or__3576__auto____2735;
} else
{var or__3576__auto____2736 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2736))
{return or__3576__auto____2736;
} else
{var or__3576__auto____2737 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2737))
{return or__3576__auto____2737;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__2778 = (function (x,y,z){
var or__3576__auto____2738 = p1.call(null,x);

if(cljs.core.truth_(or__3576__auto____2738))
{return or__3576__auto____2738;
} else
{var or__3576__auto____2739 = p2.call(null,x);

if(cljs.core.truth_(or__3576__auto____2739))
{return or__3576__auto____2739;
} else
{var or__3576__auto____2740 = p3.call(null,x);

if(cljs.core.truth_(or__3576__auto____2740))
{return or__3576__auto____2740;
} else
{var or__3576__auto____2741 = p1.call(null,y);

if(cljs.core.truth_(or__3576__auto____2741))
{return or__3576__auto____2741;
} else
{var or__3576__auto____2742 = p2.call(null,y);

if(cljs.core.truth_(or__3576__auto____2742))
{return or__3576__auto____2742;
} else
{var or__3576__auto____2743 = p3.call(null,y);

if(cljs.core.truth_(or__3576__auto____2743))
{return or__3576__auto____2743;
} else
{var or__3576__auto____2744 = p1.call(null,z);

if(cljs.core.truth_(or__3576__auto____2744))
{return or__3576__auto____2744;
} else
{var or__3576__auto____2745 = p2.call(null,z);

if(cljs.core.truth_(or__3576__auto____2745))
{return or__3576__auto____2745;
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
var sp3__2779 = (function() { 
var G__2781__delegate = function (x,y,z,args){
var or__3576__auto____2746 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2746))
{return or__3576__auto____2746;
} else
{return cljs.core.some.call(null,(function (p1__2633_SHARP_){
var or__3576__auto____2747 = p1.call(null,p1__2633_SHARP_);

if(cljs.core.truth_(or__3576__auto____2747))
{return or__3576__auto____2747;
} else
{var or__3576__auto____2748 = p2.call(null,p1__2633_SHARP_);

if(cljs.core.truth_(or__3576__auto____2748))
{return or__3576__auto____2748;
} else
{return p3.call(null,p1__2633_SHARP_);
}
}
}),args);
}
};
var G__2781 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2781__delegate.call(this, x, y, z, args);
};
G__2781.cljs$lang$maxFixedArity = 3;
G__2781.cljs$lang$applyTo = (function (arglist__2782){
var x = cljs.core.first(arglist__2782);
var y = cljs.core.first(cljs.core.next(arglist__2782));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2782)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2782)));
return G__2781__delegate.call(this, x, y, z, args);
});
return G__2781;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__2775.call(this);
case  1 :
return sp3__2776.call(this,x);
case  2 :
return sp3__2777.call(this,x,y);
case  3 :
return sp3__2778.call(this,x,y,z);
default:
return sp3__2779.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__2779.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__2757 = (function() { 
var G__2783__delegate = function (p1,p2,p3,ps){
var ps__2749 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__2784 = (function (){
return null;
});
var spn__2785 = (function (x){
return cljs.core.some.call(null,(function (p1__2634_SHARP_){
return p1__2634_SHARP_.call(null,x);
}),ps__2749);
});
var spn__2786 = (function (x,y){
return cljs.core.some.call(null,(function (p1__2635_SHARP_){
var or__3576__auto____2750 = p1__2635_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2750))
{return or__3576__auto____2750;
} else
{return p1__2635_SHARP_.call(null,y);
}
}),ps__2749);
});
var spn__2787 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__2636_SHARP_){
var or__3576__auto____2751 = p1__2636_SHARP_.call(null,x);

if(cljs.core.truth_(or__3576__auto____2751))
{return or__3576__auto____2751;
} else
{var or__3576__auto____2752 = p1__2636_SHARP_.call(null,y);

if(cljs.core.truth_(or__3576__auto____2752))
{return or__3576__auto____2752;
} else
{return p1__2636_SHARP_.call(null,z);
}
}
}),ps__2749);
});
var spn__2788 = (function() { 
var G__2790__delegate = function (x,y,z,args){
var or__3576__auto____2753 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3576__auto____2753))
{return or__3576__auto____2753;
} else
{return cljs.core.some.call(null,(function (p1__2637_SHARP_){
return cljs.core.some.call(null,p1__2637_SHARP_,args);
}),ps__2749);
}
};
var G__2790 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2790__delegate.call(this, x, y, z, args);
};
G__2790.cljs$lang$maxFixedArity = 3;
G__2790.cljs$lang$applyTo = (function (arglist__2791){
var x = cljs.core.first(arglist__2791);
var y = cljs.core.first(cljs.core.next(arglist__2791));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2791)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2791)));
return G__2790__delegate.call(this, x, y, z, args);
});
return G__2790;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__2784.call(this);
case  1 :
return spn__2785.call(this,x);
case  2 :
return spn__2786.call(this,x,y);
case  3 :
return spn__2787.call(this,x,y,z);
default:
return spn__2788.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__2788.cljs$lang$applyTo;
return spn;
})()
};
var G__2783 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__2783__delegate.call(this, p1, p2, p3, ps);
};
G__2783.cljs$lang$maxFixedArity = 3;
G__2783.cljs$lang$applyTo = (function (arglist__2792){
var p1 = cljs.core.first(arglist__2792);
var p2 = cljs.core.first(cljs.core.next(arglist__2792));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2792)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2792)));
return G__2783__delegate.call(this, p1, p2, p3, ps);
});
return G__2783;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__2754.call(this,p1);
case  2 :
return some_fn__2755.call(this,p1,p2);
case  3 :
return some_fn__2756.call(this,p1,p2,p3);
default:
return some_fn__2757.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__2757.cljs$lang$applyTo;
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
var map__2805 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2793 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2793))
{var s__2794 = temp__3726__auto____2793;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__2794)),map.call(null,f,cljs.core.rest.call(null,s__2794)));
} else
{return null;
}
})));
});
var map__2806 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2795 = cljs.core.seq.call(null,c1);
var s2__2796 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____2797 = s1__2795;

if(cljs.core.truth_(and__3574__auto____2797))
{return s2__2796;
} else
{return and__3574__auto____2797;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__2795),cljs.core.first.call(null,s2__2796)),map.call(null,f,cljs.core.rest.call(null,s1__2795),cljs.core.rest.call(null,s2__2796)));
} else
{return null;
}
})));
});
var map__2807 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2798 = cljs.core.seq.call(null,c1);
var s2__2799 = cljs.core.seq.call(null,c2);
var s3__2800 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3574__auto____2801 = s1__2798;

if(cljs.core.truth_(and__3574__auto____2801))
{var and__3574__auto____2802 = s2__2799;

if(cljs.core.truth_(and__3574__auto____2802))
{return s3__2800;
} else
{return and__3574__auto____2802;
}
} else
{return and__3574__auto____2801;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__2798),cljs.core.first.call(null,s2__2799),cljs.core.first.call(null,s3__2800)),map.call(null,f,cljs.core.rest.call(null,s1__2798),cljs.core.rest.call(null,s2__2799),cljs.core.rest.call(null,s3__2800)));
} else
{return null;
}
})));
});
var map__2808 = (function() { 
var G__2810__delegate = function (f,c1,c2,c3,colls){
var step__2804 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__2803 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__2803)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__2803),step.call(null,map.call(null,cljs.core.rest,ss__2803)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__2715_SHARP_){
return cljs.core.apply.call(null,f,p1__2715_SHARP_);
}),step__2804.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__2810 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__2810__delegate.call(this, f, c1, c2, c3, colls);
};
G__2810.cljs$lang$maxFixedArity = 4;
G__2810.cljs$lang$applyTo = (function (arglist__2811){
var f = cljs.core.first(arglist__2811);
var c1 = cljs.core.first(cljs.core.next(arglist__2811));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2811)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2811))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__2811))));
return G__2810__delegate.call(this, f, c1, c2, c3, colls);
});
return G__2810;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__2805.call(this,f,c1);
case  3 :
return map__2806.call(this,f,c1,c2);
case  4 :
return map__2807.call(this,f,c1,c2,c3);
default:
return map__2808.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__2808.cljs$lang$applyTo;
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
{var temp__3726__auto____2812 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2812))
{var s__2813 = temp__3726__auto____2812;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__2813),take.call(null,cljs.core.dec.call(null,n),cljs.core.rest.call(null,s__2813)));
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
var step__2816 = (function (n,coll){
while(true){
var s__2814 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____2815 = cljs.core.pos_QMARK_.call(null,n);

if(cljs.core.truth_(and__3574__auto____2815))
{return s__2814;
} else
{return and__3574__auto____2815;
}
})()))
{{
var G__2817 = cljs.core.dec.call(null,n);
var G__2818 = cljs.core.rest.call(null,s__2814);
n = G__2817;
coll = G__2818;
continue;
}
} else
{return s__2814;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__2816.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__2819 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__2820 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__2819.call(this,n);
case  2 :
return drop_last__2820.call(this,n,s);
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
var s__2822 = cljs.core.seq.call(null,coll);
var lead__2823 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__2823))
{{
var G__2824 = cljs.core.next.call(null,s__2822);
var G__2825 = cljs.core.next.call(null,lead__2823);
s__2822 = G__2824;
lead__2823 = G__2825;
continue;
}
} else
{return s__2822;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__2828 = (function (pred,coll){
while(true){
var s__2826 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3574__auto____2827 = s__2826;

if(cljs.core.truth_(and__3574__auto____2827))
{return pred.call(null,cljs.core.first.call(null,s__2826));
} else
{return and__3574__auto____2827;
}
})()))
{{
var G__2829 = pred;
var G__2830 = cljs.core.rest.call(null,s__2826);
pred = G__2829;
coll = G__2830;
continue;
}
} else
{return s__2826;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__2828.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2831 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2831))
{var s__2832 = temp__3726__auto____2831;

return cljs.core.concat.call(null,s__2832,cycle.call(null,s__2832));
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
var repeat__2833 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__2834 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__2833.call(this,n);
case  2 :
return repeat__2834.call(this,n,x);
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
var repeatedly__2836 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__2837 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__2836.call(this,n);
case  2 :
return repeatedly__2837.call(this,n,f);
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
var interleave__2843 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__2839 = cljs.core.seq.call(null,c1);
var s2__2840 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3574__auto____2841 = s1__2839;

if(cljs.core.truth_(and__3574__auto____2841))
{return s2__2840;
} else
{return and__3574__auto____2841;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__2839),cljs.core.cons.call(null,cljs.core.first.call(null,s2__2840),interleave.call(null,cljs.core.rest.call(null,s1__2839),cljs.core.rest.call(null,s2__2840))));
} else
{return null;
}
})));
});
var interleave__2844 = (function() { 
var G__2846__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__2842 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__2842)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__2842),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__2842)));
} else
{return null;
}
})));
};
var G__2846 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2846__delegate.call(this, c1, c2, colls);
};
G__2846.cljs$lang$maxFixedArity = 2;
G__2846.cljs$lang$applyTo = (function (arglist__2847){
var c1 = cljs.core.first(arglist__2847);
var c2 = cljs.core.first(cljs.core.next(arglist__2847));
var colls = cljs.core.rest(cljs.core.next(arglist__2847));
return G__2846__delegate.call(this, c1, c2, colls);
});
return G__2846;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__2843.call(this,c1,c2);
default:
return interleave__2844.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__2844.cljs$lang$applyTo;
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
var cat__2850 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____2848 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____2848))
{var coll__2849 = temp__3723__auto____2848;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__2849),cat.call(null,cljs.core.rest.call(null,coll__2849),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__2850.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__2851 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__2852 = (function() { 
var G__2854__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__2854 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__2854__delegate.call(this, f, coll, colls);
};
G__2854.cljs$lang$maxFixedArity = 2;
G__2854.cljs$lang$applyTo = (function (arglist__2855){
var f = cljs.core.first(arglist__2855);
var coll = cljs.core.first(cljs.core.next(arglist__2855));
var colls = cljs.core.rest(cljs.core.next(arglist__2855));
return G__2854__delegate.call(this, f, coll, colls);
});
return G__2854;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__2851.call(this,f,coll);
default:
return mapcat__2852.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__2852.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2856 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2856))
{var s__2857 = temp__3726__auto____2856;

var f__2858 = cljs.core.first.call(null,s__2857);
var r__2859 = cljs.core.rest.call(null,s__2857);

if(cljs.core.truth_(pred.call(null,f__2858)))
{return cljs.core.cons.call(null,f__2858,filter.call(null,pred,r__2859));
} else
{return filter.call(null,pred,r__2859);
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
var walk__2861 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__2861.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__2860_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__2860_SHARP_));
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
var partition__2868 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__2869 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2862 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2862))
{var s__2863 = temp__3726__auto____2862;

var p__2864 = cljs.core.take.call(null,n,s__2863);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__2864))))
{return cljs.core.cons.call(null,p__2864,partition.call(null,n,step,cljs.core.drop.call(null,step,s__2863)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__2870 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____2865 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____2865))
{var s__2866 = temp__3726__auto____2865;

var p__2867 = cljs.core.take.call(null,n,s__2866);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__2867))))
{return cljs.core.cons.call(null,p__2867,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__2866)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__2867,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__2868.call(this,n,step);
case  3 :
return partition__2869.call(this,n,step,pad);
case  4 :
return partition__2870.call(this,n,step,pad,coll);
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
var get_in__2876 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__2877 = (function (m,ks,not_found){
var sentinel__2872 = cljs.core.lookup_sentinel;
var m__2873 = m;
var ks__2874 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__2874))
{var m__2875 = cljs.core.get.call(null,m__2873,cljs.core.first.call(null,ks__2874),sentinel__2872);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,sentinel__2872,m__2875)))
{return not_found;
} else
{{
var G__2879 = sentinel__2872;
var G__2880 = m__2875;
var G__2881 = cljs.core.next.call(null,ks__2874);
sentinel__2872 = G__2879;
m__2873 = G__2880;
ks__2874 = G__2881;
continue;
}
}
} else
{return m__2873;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__2876.call(this,m,ks);
case  3 :
return get_in__2877.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__2882,v){
var vec__2883__2884 = p__2882;
var k__2885 = cljs.core.nth.call(null,vec__2883__2884,0,null);
var ks__2886 = cljs.core.nthnext.call(null,vec__2883__2884,1);

if(cljs.core.truth_(ks__2886))
{return cljs.core.assoc.call(null,m,k__2885,assoc_in.call(null,cljs.core.get.call(null,m,k__2885),ks__2886,v));
} else
{return cljs.core.assoc.call(null,m,k__2885,v);
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
var update_in__delegate = function (m,p__2887,f,args){
var vec__2888__2889 = p__2887;
var k__2890 = cljs.core.nth.call(null,vec__2888__2889,0,null);
var ks__2891 = cljs.core.nthnext.call(null,vec__2888__2889,1);

if(cljs.core.truth_(ks__2891))
{return cljs.core.assoc.call(null,m,k__2890,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__2890),ks__2891,f,args));
} else
{return cljs.core.assoc.call(null,m,k__2890,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__2890),args));
}
};
var update_in = function (m,p__2887,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__2887, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__2892){
var m = cljs.core.first(arglist__2892);
var p__2887 = cljs.core.first(cljs.core.next(arglist__2892));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__2892)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__2892)));
return update_in__delegate.call(this, m, p__2887, f, args);
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
var this__2893 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__2894 = this;
var new_array__2895 = cljs.core.aclone.call(null,this__2894.array);

new_array__2895.push(o);
return (new cljs.core.Vector(this__2894.meta,new_array__2895));
});
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2896 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__2896.array.length,0)))
{var vector_seq__2897 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_(cljs.core._LT_.call(null,i,this__2896.array.length)))
{return cljs.core.cons.call(null,(this__2896.array[i]),vector_seq.call(null,cljs.core.inc.call(null,i)));
} else
{return null;
}
})));
});

return vector_seq__2897.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__2898 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__2899 = this;
var count__2900 = this__2899.array.length;

if(cljs.core.truth_(cljs.core._GT_.call(null,count__2900,0)))
{return (this__2899.array[cljs.core.dec.call(null,count__2900)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__2901 = this;
if(cljs.core.truth_(cljs.core._GT_.call(null,this__2901.array.length,0)))
{var new_array__2902 = cljs.core.aclone.call(null,this__2901.array);

new_array__2902.pop();
return (new cljs.core.Vector(this__2901.meta,new_array__2902));
} else
{throw "Can't pop empty vector";
}
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2903 = this;
return (new cljs.core.Vector(meta,this__2903.array));
});
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2904 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__2904.meta);
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__2918 = null;
var G__2918__2919 = (function (coll,n){
var this__2905 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2906 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____2906))
{return cljs.core._LT_.call(null,n,this__2905.array.length);
} else
{return and__3574__auto____2906;
}
})()))
{return (this__2905.array[n]);
} else
{return null;
}
});
var G__2918__2920 = (function (coll,n,not_found){
var this__2907 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2908 = cljs.core._LT__EQ_.call(null,0,n);

if(cljs.core.truth_(and__3574__auto____2908))
{return cljs.core._LT_.call(null,n,this__2907.array.length);
} else
{return and__3574__auto____2908;
}
})()))
{return (this__2907.array[n]);
} else
{return not_found;
}
});
G__2918 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__2918__2919.call(this,coll,n);
case  3 :
return G__2918__2920.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2918;
})()
;
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2909 = this;
return this__2909.meta;
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__2922 = null;
var G__2922__2923 = (function (v,f){
var this__2910 = this;
return cljs.core.ci_reduce.call(null,this__2910.array,f);
});
var G__2922__2924 = (function (v,f,start){
var this__2911 = this;
return cljs.core.ci_reduce.call(null,this__2911.array,f,start);
});
G__2922 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__2922__2923.call(this,v,f);
case  3 :
return G__2922__2924.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2922;
})()
;
cljs.core.Vector.prototype.cljs$core$IHash$ = true;
cljs.core.Vector.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2912 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2913 = this;
return this__2913.array.length;
});
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2914 = this;
var new_array__2915 = cljs.core.aclone.call(null,this__2914.array);

(new_array__2915[k] = v);
return (new cljs.core.Vector(this__2914.meta,new_array__2915));
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2926 = null;
var G__2926__2927 = (function (coll,k){
var this__2916 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__2926__2928 = (function (coll,k,not_found){
var this__2917 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__2926 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__2926__2927.call(this,coll,k);
case  3 :
return G__2926__2928.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2926;
})()
;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,cljs.core.array.call(null)));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.Vector.prototype.call = (function() {
var G__2930 = null;
var G__2930__2931 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2930__2932 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2930 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2930__2931.call(this,_,k);
case  3 :
return G__2930__2932.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2930;
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
vector.cljs$lang$applyTo = (function (arglist__2934){
var args = cljs.core.seq( arglist__2934 );;
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
var this__2935 = this;
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
var len__2936 = array.length;

var i__2937 = 0;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__2937,len__2936)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__2937]))))
{return i__2937;
} else
{{
var G__2938 = cljs.core._PLUS_.call(null,i__2937,incr);
i__2937 = G__2938;
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
var obj_map_contains_key_QMARK___2940 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___2941 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3574__auto____2939 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____2939))
{return strobj.hasOwnProperty(k);
} else
{return and__3574__auto____2939;
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
return obj_map_contains_key_QMARK___2940.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___2941.call(this,k,strobj,true_val,false_val);
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
var this__2944 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__2945 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2946 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__2946.keys.length)))
{return cljs.core.map.call(null,(function (p1__2943_SHARP_){
return cljs.core.vector.call(null,p1__2943_SHARP_,(this__2946.strobj[p1__2943_SHARP_]));
}),this__2946.keys);
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2947 = this;
return (new cljs.core.ObjMap(meta,this__2947.keys,this__2947.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__2948 = this;
if(cljs.core.truth_((function (){var and__3574__auto____2949 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3574__auto____2949))
{return this__2948.strobj.hasOwnProperty(k);
} else
{return and__3574__auto____2949;
}
})()))
{var new_keys__2950 = cljs.core.aclone.call(null,this__2948.keys);
var new_strobj__2951 = goog.object.clone.call(null,this__2948.strobj);

new_keys__2950.splice(cljs.core.scan_array.call(null,1,k,new_keys__2950),1);
cljs.core.js_delete.call(null,new_strobj__2951,k);
return (new cljs.core.ObjMap(this__2948.meta,new_keys__2950,new_strobj__2951));
} else
{return coll;
}
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2952 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__2952.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2953 = this;
return this__2953.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IHash$ = true;
cljs.core.ObjMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2954 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2955 = this;
return this__2955.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2956 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__2957 = goog.object.clone.call(null,this__2956.strobj);
var overwrite_QMARK___2958 = new_strobj__2957.hasOwnProperty(k);

(new_strobj__2957[k] = v);
if(cljs.core.truth_(overwrite_QMARK___2958))
{return (new cljs.core.ObjMap(this__2956.meta,this__2956.keys,new_strobj__2957));
} else
{var new_keys__2959 = cljs.core.aclone.call(null,this__2956.keys);

new_keys__2959.push(k);
return (new cljs.core.ObjMap(this__2956.meta,new_keys__2959,new_strobj__2957));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__2956.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__2960 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__2960.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__2963 = null;
var G__2963__2964 = (function (coll,k){
var this__2961 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__2963__2965 = (function (coll,k,not_found){
var this__2962 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__2962.strobj,(this__2962.strobj[k]),not_found);
});
G__2963 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__2963__2964.call(this,coll,k);
case  3 :
return G__2963__2965.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2963;
})()
;
cljs.core.ObjMap.EMPTY = (new cljs.core.ObjMap(null,cljs.core.array.call(null),cljs.core.js_obj.call(null)));
cljs.core.ObjMap.fromObject = (function (ks,obj){
return (new cljs.core.ObjMap(null,ks,obj));
});
cljs.core.ObjMap.prototype.call = (function() {
var G__2968 = null;
var G__2968__2969 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__2968__2970 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__2968 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__2968__2969.call(this,_,k);
case  3 :
return G__2968__2970.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__2968;
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
var this__2972 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__2973 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__2974 = this;
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__2974.count)))
{var hashes__2975 = cljs.core.js_keys.call(null,this__2974.hashobj);

return cljs.core.mapcat.call(null,(function (p1__2967_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__2974.hashobj[p1__2967_SHARP_])));
}),hashes__2975);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__2976 = this;
return (new cljs.core.HashMap(meta,this__2976.count,this__2976.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__2977 = this;
var h__2978 = cljs.core.hash.call(null,k);
var bucket__2979 = (this__2977.hashobj[h__2978]);
var i__2980 = (cljs.core.truth_(bucket__2979)?cljs.core.scan_array.call(null,2,k,bucket__2979):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__2980)))
{return coll;
} else
{var new_hashobj__2981 = goog.object.clone.call(null,this__2977.hashobj);

if(cljs.core.truth_(cljs.core._GT_.call(null,3,bucket__2979.length)))
{cljs.core.js_delete.call(null,new_hashobj__2981,h__2978);
} else
{var new_bucket__2982 = cljs.core.aclone.call(null,bucket__2979);

new_bucket__2982.splice(i__2980,2);
(new_hashobj__2981[h__2978] = new_bucket__2982);
}
return (new cljs.core.HashMap(this__2977.meta,cljs.core.dec.call(null,this__2977.count),new_hashobj__2981));
}
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__2983 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__2983.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__2984 = this;
return this__2984.meta;
});
cljs.core.HashMap.prototype.cljs$core$IHash$ = true;
cljs.core.HashMap.prototype.cljs$core$IHash$_hash = (function (coll){
var this__2985 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__2986 = this;
return this__2986.count;
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__2987 = this;
var h__2988 = cljs.core.hash.call(null,k);
var bucket__2989 = (this__2987.hashobj[h__2988]);

if(cljs.core.truth_(bucket__2989))
{var new_bucket__2990 = cljs.core.aclone.call(null,bucket__2989);
var new_hashobj__2991 = goog.object.clone.call(null,this__2987.hashobj);

(new_hashobj__2991[h__2988] = new_bucket__2990);
var temp__3723__auto____2992 = cljs.core.scan_array.call(null,2,k,new_bucket__2990);

if(cljs.core.truth_(temp__3723__auto____2992))
{var i__2993 = temp__3723__auto____2992;

(new_bucket__2990[cljs.core.inc.call(null,i__2993)] = v);
return (new cljs.core.HashMap(this__2987.meta,this__2987.count,new_hashobj__2991));
} else
{new_bucket__2990.push(k,v);
return (new cljs.core.HashMap(this__2987.meta,cljs.core.inc.call(null,this__2987.count),new_hashobj__2991));
}
} else
{var new_hashobj__2994 = goog.object.clone.call(null,this__2987.hashobj);

(new_hashobj__2994[h__2988] = cljs.core.array.call(null,k,v));
return (new cljs.core.HashMap(this__2987.meta,cljs.core.inc.call(null,this__2987.count),new_hashobj__2994));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__2995 = this;
var bucket__2996 = (this__2995.hashobj[cljs.core.hash.call(null,k)]);
var i__2997 = (cljs.core.truth_(bucket__2996)?cljs.core.scan_array.call(null,2,k,bucket__2996):null);

if(cljs.core.truth_(i__2997))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3002 = null;
var G__3002__3003 = (function (coll,k){
var this__2998 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__3002__3004 = (function (coll,k,not_found){
var this__2999 = this;
var bucket__3000 = (this__2999.hashobj[cljs.core.hash.call(null,k)]);
var i__3001 = (cljs.core.truth_(bucket__3000)?cljs.core.scan_array.call(null,2,k,bucket__3000):null);

if(cljs.core.truth_(i__3001))
{return (bucket__3000[cljs.core.inc.call(null,i__3001)]);
} else
{return not_found;
}
});
G__3002 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__3002__3003.call(this,coll,k);
case  3 :
return G__3002__3004.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3002;
})()
;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__3006 = ks.length;

var i__3007 = 0;
var out__3008 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core._LT_.call(null,i__3007,len__3006)))
{{
var G__3009 = cljs.core.inc.call(null,i__3007);
var G__3010 = cljs.core.assoc.call(null,out__3008,(ks[i__3007]),(vs[i__3007]));
i__3007 = G__3009;
out__3008 = G__3010;
continue;
}
} else
{return out__3008;
}
break;
}
});
cljs.core.HashMap.prototype.call = (function() {
var G__3011 = null;
var G__3011__3012 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3011__3013 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3011 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3011__3012.call(this,_,k);
case  3 :
return G__3011__3013.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3011;
})()
;
/**
* keyval => key val
* Returns a new hash map with supplied mappings.
* @param {...*} var_args
*/
cljs.core.hash_map = (function() { 
var hash_map__delegate = function (keyvals){
var in$__3015 = cljs.core.seq.call(null,keyvals);
var out__3016 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__3015))
{{
var G__3017 = cljs.core.nnext.call(null,in$__3015);
var G__3018 = cljs.core.assoc.call(null,out__3016,cljs.core.first.call(null,in$__3015),cljs.core.second.call(null,in$__3015));
in$__3015 = G__3017;
out__3016 = G__3018;
continue;
}
} else
{return out__3016;
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
hash_map.cljs$lang$applyTo = (function (arglist__3019){
var keyvals = cljs.core.seq( arglist__3019 );;
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
{return cljs.core.reduce.call(null,(function (p1__3020_SHARP_,p2__3021_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3576__auto____3022 = p1__3020_SHARP_;

if(cljs.core.truth_(or__3576__auto____3022))
{return or__3576__auto____3022;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__3021_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__3023){
var maps = cljs.core.seq( arglist__3023 );;
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
{var merge_entry__3026 = (function (m,e){
var k__3024 = cljs.core.first.call(null,e);
var v__3025 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__3024)))
{return cljs.core.assoc.call(null,m,k__3024,f.call(null,cljs.core.get.call(null,m,k__3024),v__3025));
} else
{return cljs.core.assoc.call(null,m,k__3024,v__3025);
}
});
var merge2__3028 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__3026,(function (){var or__3576__auto____3027 = m1;

if(cljs.core.truth_(or__3576__auto____3027))
{return or__3576__auto____3027;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__3028,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__3029){
var f = cljs.core.first(arglist__3029);
var maps = cljs.core.rest(arglist__3029);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__3031 = cljs.core.ObjMap.fromObject([],{});
var keys__3032 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__3032))
{var key__3033 = cljs.core.first.call(null,keys__3032);
var entry__3034 = cljs.core.get.call(null,map,key__3033);

{
var G__3035 = (cljs.core.truth_(entry__3034)?cljs.core.assoc.call(null,ret__3031,key__3033,entry__3034):ret__3031);
var G__3036 = cljs.core.next.call(null,keys__3032);
ret__3031 = G__3035;
keys__3032 = G__3036;
continue;
}
} else
{return ret__3031;
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
var this__3037 = this;
return (new cljs.core.Set(this__3037.meta,cljs.core.dissoc.call(null,this__3037.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__3038 = this;
var and__3574__auto____3039 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3574__auto____3039))
{var and__3574__auto____3040 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3574__auto____3040))
{return cljs.core.every_QMARK_.call(null,(function (p1__3030_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__3030_SHARP_);
}),other);
} else
{return and__3574__auto____3040;
}
} else
{return and__3574__auto____3039;
}
});
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__3041 = this;
return (new cljs.core.Set(this__3041.meta,cljs.core.assoc.call(null,this__3041.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__3042 = this;
return cljs.core.keys.call(null,this__3042.hash_map);
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__3043 = this;
return (new cljs.core.Set(meta,this__3043.hash_map));
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__3044 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__3044.meta);
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__3045 = this;
return this__3045.meta;
});
cljs.core.Set.prototype.cljs$core$IHash$ = true;
cljs.core.Set.prototype.cljs$core$IHash$_hash = (function (coll){
var this__3046 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__3047 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__3050 = null;
var G__3050__3051 = (function (coll,v){
var this__3048 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__3050__3052 = (function (coll,v,not_found){
var this__3049 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__3049.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__3050 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__3050__3051.call(this,coll,v);
case  3 :
return G__3050__3052.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3050;
})()
;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
cljs.core.Set.prototype.call = (function() {
var G__3054 = null;
var G__3054__3055 = (function (_,k){
return cljs.core._lookup.call(null,this,k);
});
var G__3054__3056 = (function (_,k,not_found){
return cljs.core._lookup.call(null,this,k,not_found);
});
G__3054 = function(_,k,not_found){
switch(arguments.length){
case  2 :
return G__3054__3055.call(this,_,k);
case  3 :
return G__3054__3056.call(this,_,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3054;
})()
;
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__3059 = cljs.core.seq.call(null,coll);
var out__3060 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__3059))))
{{
var G__3061 = cljs.core.rest.call(null,in$__3059);
var G__3062 = cljs.core.conj.call(null,out__3060,cljs.core.first.call(null,in$__3059));
in$__3059 = G__3061;
out__3060 = G__3062;
continue;
}
} else
{return out__3060;
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
{var n__3063 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3723__auto____3064 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3723__auto____3064))
{var e__3065 = temp__3723__auto____3064;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__3065));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__3063,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__3058_SHARP_){
var temp__3723__auto____3066 = cljs.core.find.call(null,smap,p1__3058_SHARP_);

if(cljs.core.truth_(temp__3723__auto____3066))
{var e__3067 = temp__3723__auto____3066;

return cljs.core.second.call(null,e__3067);
} else
{return p1__3058_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__3075 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__3068,seen){
while(true){
var vec__3069__3070 = p__3068;
var f__3071 = cljs.core.nth.call(null,vec__3069__3070,0,null);
var xs__3072 = vec__3069__3070;

var temp__3726__auto____3073 = cljs.core.seq.call(null,xs__3072);

if(cljs.core.truth_(temp__3726__auto____3073))
{var s__3074 = temp__3726__auto____3073;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__3071)))
{{
var G__3076 = cljs.core.rest.call(null,s__3074);
var G__3077 = seen;
p__3068 = G__3076;
seen = G__3077;
continue;
}
} else
{return cljs.core.cons.call(null,f__3071,step.call(null,cljs.core.rest.call(null,s__3074),cljs.core.conj.call(null,seen,f__3071)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__3075.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__3078 = cljs.core.Vector.fromArray([]);
var s__3079 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__3079)))
{{
var G__3080 = cljs.core.conj.call(null,ret__3078,cljs.core.first.call(null,s__3079));
var G__3081 = cljs.core.next.call(null,s__3079);
ret__3078 = G__3080;
s__3079 = G__3081;
continue;
}
} else
{return cljs.core.seq.call(null,ret__3078);
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
{if(cljs.core.truth_((function (){var or__3576__auto____3082 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____3082))
{return or__3576__auto____3082;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3083 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._LT_.call(null,i__3083,0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,cljs.core.inc.call(null,i__3083));
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
if(cljs.core.truth_((function (){var or__3576__auto____3084 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3576__auto____3084))
{return or__3576__auto____3084;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__3085 = x.lastIndexOf("/");

if(cljs.core.truth_(cljs.core._GT_.call(null,i__3085,-1)))
{return cljs.core.subs.call(null,x,2,i__3085);
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
var map__3088 = cljs.core.ObjMap.fromObject([],{});
var ks__3089 = cljs.core.seq.call(null,keys);
var vs__3090 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3574__auto____3091 = ks__3089;

if(cljs.core.truth_(and__3574__auto____3091))
{return vs__3090;
} else
{return and__3574__auto____3091;
}
})()))
{{
var G__3092 = cljs.core.assoc.call(null,map__3088,cljs.core.first.call(null,ks__3089),cljs.core.first.call(null,vs__3090));
var G__3093 = cljs.core.next.call(null,ks__3089);
var G__3094 = cljs.core.next.call(null,vs__3090);
map__3088 = G__3092;
ks__3089 = G__3093;
vs__3090 = G__3094;
continue;
}
} else
{return map__3088;
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
var max_key__3097 = (function (k,x){
return x;
});
var max_key__3098 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._GT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__3099 = (function() { 
var G__3101__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3086_SHARP_,p2__3087_SHARP_){
return max_key.call(null,k,p1__3086_SHARP_,p2__3087_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__3101 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3101__delegate.call(this, k, x, y, more);
};
G__3101.cljs$lang$maxFixedArity = 3;
G__3101.cljs$lang$applyTo = (function (arglist__3102){
var k = cljs.core.first(arglist__3102);
var x = cljs.core.first(cljs.core.next(arglist__3102));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3102)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3102)));
return G__3101__delegate.call(this, k, x, y, more);
});
return G__3101;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__3097.call(this,k,x);
case  3 :
return max_key__3098.call(this,k,x,y);
default:
return max_key__3099.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__3099.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__3103 = (function (k,x){
return x;
});
var min_key__3104 = (function (k,x,y){
if(cljs.core.truth_(cljs.core._LT_.call(null,k.call(null,x),k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__3105 = (function() { 
var G__3107__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__3095_SHARP_,p2__3096_SHARP_){
return min_key.call(null,k,p1__3095_SHARP_,p2__3096_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__3107 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3107__delegate.call(this, k, x, y, more);
};
G__3107.cljs$lang$maxFixedArity = 3;
G__3107.cljs$lang$applyTo = (function (arglist__3108){
var k = cljs.core.first(arglist__3108);
var x = cljs.core.first(cljs.core.next(arglist__3108));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3108)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3108)));
return G__3107__delegate.call(this, k, x, y, more);
});
return G__3107;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__3103.call(this,k,x);
case  3 :
return min_key__3104.call(this,k,x,y);
default:
return min_key__3105.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__3105.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__3111 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__3112 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3109 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3109))
{var s__3110 = temp__3726__auto____3109;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__3110),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__3110)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__3111.call(this,n,step);
case  3 :
return partition_all__3112.call(this,n,step,coll);
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
var temp__3726__auto____3114 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3114))
{var s__3115 = temp__3726__auto____3114;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__3115))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__3115),take_while.call(null,pred,cljs.core.rest.call(null,s__3115)));
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
var this__3116 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__3117 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__3118 = this;
return this__3118.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__3119 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core._seq.call(null,rng)))))
{return (new cljs.core.Range(this__3119.meta,cljs.core._PLUS_.call(null,this__3119.start,this__3119.step),this__3119.end,this__3119.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__3120 = this;
var comp__3121 = (cljs.core.truth_(cljs.core.pos_QMARK_.call(null,this__3120.step))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__3121.call(null,this__3120.start,this__3120.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__3122 = this;
return (new cljs.core.Range(meta,this__3122.start,this__3122.end,this__3122.step));
});
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__3123 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__3123.meta);
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__3135 = null;
var G__3135__3136 = (function (rng,n){
var this__3124 = this;
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,rng))))
{return cljs.core._PLUS_.call(null,this__3124.start,cljs.core._STAR_.call(null,n,this__3124.step));
} else
{if(cljs.core.truth_((function (){var and__3574__auto____3125 = cljs.core._GT_.call(null,this__3124.start,this__3124.end);

if(cljs.core.truth_(and__3574__auto____3125))
{return cljs.core._EQ_.call(null,this__3124.step,0);
} else
{return and__3574__auto____3125;
}
})()))
{return this__3124.start;
} else
{throw "Index out of bounds";
}
}
});
var G__3135__3137 = (function (rng,n,not_found){
var this__3126 = this;
if(cljs.core.truth_(cljs.core._LT_.call(null,n,cljs.core._count.call(null,rng))))
{return cljs.core._PLUS_.call(null,this__3126.start,cljs.core._STAR_.call(null,n,this__3126.step));
} else
{if(cljs.core.truth_((function (){var and__3574__auto____3127 = cljs.core._GT_.call(null,this__3126.start,this__3126.end);

if(cljs.core.truth_(and__3574__auto____3127))
{return cljs.core._EQ_.call(null,this__3126.step,0);
} else
{return and__3574__auto____3127;
}
})()))
{return this__3126.start;
} else
{return not_found;
}
}
});
G__3135 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__3135__3136.call(this,rng,n);
case  3 :
return G__3135__3137.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3135;
})()
;
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__3128 = this;
return this__3128.meta;
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__3139 = null;
var G__3139__3140 = (function (rng,f){
var this__3129 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__3139__3141 = (function (rng,f,s){
var this__3130 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__3139 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__3139__3140.call(this,rng,f);
case  3 :
return G__3139__3141.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__3139;
})()
;
cljs.core.Range.prototype.cljs$core$IHash$ = true;
cljs.core.Range.prototype.cljs$core$IHash$_hash = (function (rng){
var this__3131 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__3132 = this;
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{if(cljs.core.truth_((function (){var and__3574__auto____3133 = cljs.core._EQ_.call(null,this__3132.start,0);

if(cljs.core.truth_(and__3574__auto____3133))
{var and__3574__auto____3134 = cljs.core._LT_.call(null,this__3132.start,this__3132.end);

if(cljs.core.truth_(and__3574__auto____3134))
{return cljs.core._EQ_.call(null,this__3132.step,1);
} else
{return and__3574__auto____3134;
}
} else
{return and__3574__auto____3133;
}
})()))
{return cljs.core._.call(null,this__3132.end,this__3132.start);
} else
{if(cljs.core.truth_("﷐'else"))
{return Math['ceil'].call(null,cljs.core._SLASH_.call(null,cljs.core._.call(null,this__3132.end,this__3132.start),this__3132.step));
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
var range__3143 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__3144 = (function (end){
return range.call(null,0,end,1);
});
var range__3145 = (function (start,end){
return range.call(null,start,end,1);
});
var range__3146 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__3143.call(this);
case  1 :
return range__3144.call(this,start);
case  2 :
return range__3145.call(this,start,end);
case  3 :
return range__3146.call(this,start,end,step);
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
var temp__3726__auto____3148 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3148))
{var s__3149 = temp__3726__auto____3148;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__3149),take_nth.call(null,n,cljs.core.drop.call(null,n,s__3149)));
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
var temp__3726__auto____3151 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3151))
{var s__3152 = temp__3726__auto____3151;

var fst__3153 = cljs.core.first.call(null,s__3152);
var fv__3154 = f.call(null,fst__3153);
var run__3155 = cljs.core.cons.call(null,fst__3153,cljs.core.take_while.call(null,(function (p1__3150_SHARP_){
return cljs.core._EQ_.call(null,fv__3154,f.call(null,p1__3150_SHARP_));
}),cljs.core.next.call(null,s__3152)));

return cljs.core.cons.call(null,run__3155,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__3155),s__3152))));
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
var reductions__3170 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3723__auto____3166 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3723__auto____3166))
{var s__3167 = temp__3723__auto____3166;

return reductions.call(null,f,cljs.core.first.call(null,s__3167),cljs.core.rest.call(null,s__3167));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__3171 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3726__auto____3168 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3726__auto____3168))
{var s__3169 = temp__3726__auto____3168;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__3169)),cljs.core.rest.call(null,s__3169));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__3170.call(this,f,init);
case  3 :
return reductions__3171.call(this,f,init,coll);
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
var juxt__3174 = (function (f){
return (function() {
var G__3179 = null;
var G__3179__3180 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__3179__3181 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__3179__3182 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__3179__3183 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__3179__3184 = (function() { 
var G__3186__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__3186 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3186__delegate.call(this, x, y, z, args);
};
G__3186.cljs$lang$maxFixedArity = 3;
G__3186.cljs$lang$applyTo = (function (arglist__3187){
var x = cljs.core.first(arglist__3187);
var y = cljs.core.first(cljs.core.next(arglist__3187));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3187)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3187)));
return G__3186__delegate.call(this, x, y, z, args);
});
return G__3186;
})()
;
G__3179 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3179__3180.call(this);
case  1 :
return G__3179__3181.call(this,x);
case  2 :
return G__3179__3182.call(this,x,y);
case  3 :
return G__3179__3183.call(this,x,y,z);
default:
return G__3179__3184.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3179.cljs$lang$maxFixedArity = 3;
G__3179.cljs$lang$applyTo = G__3179__3184.cljs$lang$applyTo;
return G__3179;
})()
});
var juxt__3175 = (function (f,g){
return (function() {
var G__3188 = null;
var G__3188__3189 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__3188__3190 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__3188__3191 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__3188__3192 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__3188__3193 = (function() { 
var G__3195__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__3195 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3195__delegate.call(this, x, y, z, args);
};
G__3195.cljs$lang$maxFixedArity = 3;
G__3195.cljs$lang$applyTo = (function (arglist__3196){
var x = cljs.core.first(arglist__3196);
var y = cljs.core.first(cljs.core.next(arglist__3196));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3196)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3196)));
return G__3195__delegate.call(this, x, y, z, args);
});
return G__3195;
})()
;
G__3188 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3188__3189.call(this);
case  1 :
return G__3188__3190.call(this,x);
case  2 :
return G__3188__3191.call(this,x,y);
case  3 :
return G__3188__3192.call(this,x,y,z);
default:
return G__3188__3193.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3188.cljs$lang$maxFixedArity = 3;
G__3188.cljs$lang$applyTo = G__3188__3193.cljs$lang$applyTo;
return G__3188;
})()
});
var juxt__3176 = (function (f,g,h){
return (function() {
var G__3197 = null;
var G__3197__3198 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__3197__3199 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__3197__3200 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__3197__3201 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__3197__3202 = (function() { 
var G__3204__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__3204 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3204__delegate.call(this, x, y, z, args);
};
G__3204.cljs$lang$maxFixedArity = 3;
G__3204.cljs$lang$applyTo = (function (arglist__3205){
var x = cljs.core.first(arglist__3205);
var y = cljs.core.first(cljs.core.next(arglist__3205));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3205)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3205)));
return G__3204__delegate.call(this, x, y, z, args);
});
return G__3204;
})()
;
G__3197 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3197__3198.call(this);
case  1 :
return G__3197__3199.call(this,x);
case  2 :
return G__3197__3200.call(this,x,y);
case  3 :
return G__3197__3201.call(this,x,y,z);
default:
return G__3197__3202.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3197.cljs$lang$maxFixedArity = 3;
G__3197.cljs$lang$applyTo = G__3197__3202.cljs$lang$applyTo;
return G__3197;
})()
});
var juxt__3177 = (function() { 
var G__3206__delegate = function (f,g,h,fs){
var fs__3173 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__3207 = null;
var G__3207__3208 = (function (){
return cljs.core.reduce.call(null,(function (p1__3156_SHARP_,p2__3157_SHARP_){
return cljs.core.conj.call(null,p1__3156_SHARP_,p2__3157_SHARP_.call(null));
}),cljs.core.Vector.fromArray([]),fs__3173);
});
var G__3207__3209 = (function (x){
return cljs.core.reduce.call(null,(function (p1__3158_SHARP_,p2__3159_SHARP_){
return cljs.core.conj.call(null,p1__3158_SHARP_,p2__3159_SHARP_.call(null,x));
}),cljs.core.Vector.fromArray([]),fs__3173);
});
var G__3207__3210 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__3160_SHARP_,p2__3161_SHARP_){
return cljs.core.conj.call(null,p1__3160_SHARP_,p2__3161_SHARP_.call(null,x,y));
}),cljs.core.Vector.fromArray([]),fs__3173);
});
var G__3207__3211 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__3162_SHARP_,p2__3163_SHARP_){
return cljs.core.conj.call(null,p1__3162_SHARP_,p2__3163_SHARP_.call(null,x,y,z));
}),cljs.core.Vector.fromArray([]),fs__3173);
});
var G__3207__3212 = (function() { 
var G__3214__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__3164_SHARP_,p2__3165_SHARP_){
return cljs.core.conj.call(null,p1__3164_SHARP_,cljs.core.apply.call(null,p2__3165_SHARP_,x,y,z,args));
}),cljs.core.Vector.fromArray([]),fs__3173);
};
var G__3214 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3214__delegate.call(this, x, y, z, args);
};
G__3214.cljs$lang$maxFixedArity = 3;
G__3214.cljs$lang$applyTo = (function (arglist__3215){
var x = cljs.core.first(arglist__3215);
var y = cljs.core.first(cljs.core.next(arglist__3215));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3215)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3215)));
return G__3214__delegate.call(this, x, y, z, args);
});
return G__3214;
})()
;
G__3207 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__3207__3208.call(this);
case  1 :
return G__3207__3209.call(this,x);
case  2 :
return G__3207__3210.call(this,x,y);
case  3 :
return G__3207__3211.call(this,x,y,z);
default:
return G__3207__3212.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__3207.cljs$lang$maxFixedArity = 3;
G__3207.cljs$lang$applyTo = G__3207__3212.cljs$lang$applyTo;
return G__3207;
})()
};
var G__3206 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__3206__delegate.call(this, f, g, h, fs);
};
G__3206.cljs$lang$maxFixedArity = 3;
G__3206.cljs$lang$applyTo = (function (arglist__3216){
var f = cljs.core.first(arglist__3216);
var g = cljs.core.first(cljs.core.next(arglist__3216));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3216)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__3216)));
return G__3206__delegate.call(this, f, g, h, fs);
});
return G__3206;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__3174.call(this,f);
case  2 :
return juxt__3175.call(this,f,g);
case  3 :
return juxt__3176.call(this,f,g,h);
default:
return juxt__3177.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__3177.cljs$lang$applyTo;
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
var dorun__3218 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__3221 = cljs.core.next.call(null,coll);
coll = G__3221;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__3219 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3574__auto____3217 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3574__auto____3217))
{return cljs.core.pos_QMARK_.call(null,n);
} else
{return and__3574__auto____3217;
}
})()))
{{
var G__3222 = cljs.core.dec.call(null,n);
var G__3223 = cljs.core.next.call(null,coll);
n = G__3222;
coll = G__3223;
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
return dorun__3218.call(this,n);
case  2 :
return dorun__3219.call(this,n,coll);
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
var doall__3224 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__3225 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__3224.call(this,n);
case  2 :
return doall__3225.call(this,n,coll);
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
var matches__3227 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__3227),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3227),1)))
{return cljs.core.first.call(null,matches__3227);
} else
{return cljs.core.vec.call(null,matches__3227);
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
var matches__3228 = re.exec(s);

if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,matches__3228)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__3228),1)))
{return cljs.core.first.call(null,matches__3228);
} else
{return cljs.core.vec.call(null,matches__3228);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__3229 = cljs.core.re_find.call(null,re,s);
var match_idx__3230 = s.search(re);
var match_str__3231 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__3229))?cljs.core.first.call(null,match_data__3229):match_data__3229);
var post_match__3232 = cljs.core.subs.call(null,s,cljs.core._PLUS_.call(null,match_idx__3230,cljs.core.count.call(null,match_str__3231)));

if(cljs.core.truth_(match_data__3229))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__3229,re_seq.call(null,re,post_match__3232));
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
return cljs.core.concat.call(null,cljs.core.Vector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.Vector.fromArray([sep]),cljs.core.map.call(null,(function (p1__3233_SHARP_){
return print_one.call(null,p1__3233_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3574__auto____3234 = cljs.core.get.call(null,opts,"﷐'meta");

if(cljs.core.truth_(and__3574__auto____3234))
{var and__3574__auto____3237 = (function (){var x__107__auto____3235 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____3236 = x__107__auto____3235;

if(cljs.core.truth_(and__3574__auto____3236))
{return x__107__auto____3235.cljs$core$IMeta$;
} else
{return and__3574__auto____3236;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__107__auto____3235);
}
})();

if(cljs.core.truth_(and__3574__auto____3237))
{return cljs.core.meta.call(null,obj);
} else
{return and__3574__auto____3237;
}
} else
{return and__3574__auto____3234;
}
})())?cljs.core.concat.call(null,cljs.core.Vector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.Vector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__107__auto____3238 = obj;

if(cljs.core.truth_((function (){var and__3574__auto____3239 = x__107__auto____3238;

if(cljs.core.truth_(and__3574__auto____3239))
{return x__107__auto____3238.cljs$core$IPrintable$;
} else
{return and__3574__auto____3239;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__107__auto____3238);
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
var first_obj__3240 = cljs.core.first.call(null,objs);
var sb__3241 = (new goog.string.StringBuffer());

var G__3242__3243 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3242__3243))
{var obj__3244 = cljs.core.first.call(null,G__3242__3243);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3244,first_obj__3240)))
{} else
{sb__3241.append(" ");
}
var G__3245__3246 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3244,opts));

while(true){
if(cljs.core.truth_(G__3245__3246))
{var string__3247 = cljs.core.first.call(null,G__3245__3246);

sb__3241.append(string__3247);
{
var G__3248 = cljs.core.next.call(null,G__3245__3246);
G__3245__3246 = G__3248;
continue;
}
} else
{}
break;
}
{
var G__3249 = cljs.core.next.call(null,G__3242__3243);
G__3242__3243 = G__3249;
continue;
}
} else
{}
break;
}
return cljs.core.str.call(null,sb__3241);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__3250 = cljs.core.first.call(null,objs);

var G__3251__3252 = cljs.core.seq.call(null,objs);

while(true){
if(cljs.core.truth_(G__3251__3252))
{var obj__3253 = cljs.core.first.call(null,G__3251__3252);

if(cljs.core.truth_(cljs.core.identical_QMARK_.call(null,obj__3253,first_obj__3250)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__3254__3255 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__3253,opts));

while(true){
if(cljs.core.truth_(G__3254__3255))
{var string__3256 = cljs.core.first.call(null,G__3254__3255);

cljs.core.string_print.call(null,string__3256);
{
var G__3257 = cljs.core.next.call(null,G__3254__3255);
G__3254__3255 = G__3257;
continue;
}
} else
{}
break;
}
{
var G__3258 = cljs.core.next.call(null,G__3251__3252);
G__3251__3252 = G__3258;
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
pr_str.cljs$lang$applyTo = (function (arglist__3259){
var objs = cljs.core.seq( arglist__3259 );;
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
pr.cljs$lang$applyTo = (function (arglist__3260){
var objs = cljs.core.seq( arglist__3260 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__3261){
var objs = cljs.core.seq( arglist__3261 );;
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
println.cljs$lang$applyTo = (function (arglist__3262){
var objs = cljs.core.seq( arglist__3262 );;
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
prn.cljs$lang$applyTo = (function (arglist__3263){
var objs = cljs.core.seq( arglist__3263 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__3264 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3264,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3726__auto____3265 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____3265))
{var nspc__3266 = temp__3726__auto____3265;

return cljs.core.str.call(null,nspc__3266,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3726__auto____3267 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3726__auto____3267))
{var nspc__3268 = temp__3726__auto____3267;

return cljs.core.str.call(null,nspc__3268,"/");
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
var pr_pair__3269 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__3269,"{",", ","}",opts,coll);
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
var this__3270 = this;
return cljs.core.concat.call(null,cljs.core.Vector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__3270.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__3271 = this;
return this__3271.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3272 = this;
return this__3272.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__3273 = this;
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
var atom__3280 = (function (x){
return (new cljs.core.Atom(x,null,null));
});
var atom__3281 = (function() { 
var G__3283__delegate = function (x,p__3274){
var map__3275__3276 = p__3274;
var map__3275__3277 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3275__3276))?cljs.core.apply.call(null,cljs.core.hash_map,map__3275__3276):map__3275__3276);
var validator__3278 = cljs.core.get.call(null,map__3275__3277,"﷐'validator");
var meta__3279 = cljs.core.get.call(null,map__3275__3277,"﷐'meta");

return (new cljs.core.Atom(x,meta__3279,validator__3278));
};
var G__3283 = function (x,var_args){
var p__3274 = null;
if (goog.isDef(var_args)) {
  p__3274 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3283__delegate.call(this, x, p__3274);
};
G__3283.cljs$lang$maxFixedArity = 1;
G__3283.cljs$lang$applyTo = (function (arglist__3284){
var x = cljs.core.first(arglist__3284);
var p__3274 = cljs.core.rest(arglist__3284);
return G__3283__delegate.call(this, x, p__3274);
});
return G__3283;
})()
;
atom = function(x,var_args){
var p__3274 = var_args;
switch(arguments.length){
case  1 :
return atom__3280.call(this,x);
default:
return atom__3281.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__3281.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,newval){
var temp__3726__auto____3285 = a.validator;

if(cljs.core.truth_(temp__3726__auto____3285))
{var v__3286 = temp__3726__auto____3285;

if(cljs.core.truth_(v__3286.call(null,newval)))
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
var swap_BANG___3287 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___3288 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___3289 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___3290 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___3291 = (function() { 
var G__3293__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__3293 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__3293__delegate.call(this, a, f, x, y, z, more);
};
G__3293.cljs$lang$maxFixedArity = 5;
G__3293.cljs$lang$applyTo = (function (arglist__3294){
var a = cljs.core.first(arglist__3294);
var f = cljs.core.first(cljs.core.next(arglist__3294));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__3294)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3294))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3294)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__3294)))));
return G__3293__delegate.call(this, a, f, x, y, z, more);
});
return G__3293;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___3287.call(this,a,f);
case  3 :
return swap_BANG___3288.call(this,a,f,x);
case  4 :
return swap_BANG___3289.call(this,a,f,x,y);
case  5 :
return swap_BANG___3290.call(this,a,f,x,y,z);
default:
return swap_BANG___3291.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___3291.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__3295){
var iref = cljs.core.first(arglist__3295);
var f = cljs.core.first(cljs.core.next(arglist__3295));
var args = cljs.core.rest(cljs.core.next(arglist__3295));
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
var gensym__3296 = (function (){
return gensym.call(null,"G__");
});
var gensym__3297 = (function (prefix_string){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,cljs.core.gensym_counter)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__3296.call(this);
case  1 :
return gensym__3297.call(this,prefix_string);
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
var this__3299 = this;
return cljs.core.not.call(null,cljs.core.nil_QMARK_.call(null,cljs.core.deref.call(null,this__3299.state)));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__3300 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,this__3300.state)))
{} else
{cljs.core.swap_BANG_.call(null,this__3300.state,this__3300.f);
}
return cljs.core.deref.call(null,this__3300.state);
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
delay.cljs$lang$applyTo = (function (arglist__3301){
var body = cljs.core.seq( arglist__3301 );;
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
var map__3302__3303 = options;
var map__3302__3304 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3302__3303))?cljs.core.apply.call(null,cljs.core.hash_map,map__3302__3303):map__3302__3303);
var keywordize_keys__3305 = cljs.core.get.call(null,map__3302__3304,"﷐'keywordize-keys");
var keyfn__3306 = (cljs.core.truth_(keywordize_keys__3305)?cljs.core.keyword:cljs.core.str);
var f__3312 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__161__auto____3311 = (function iter__3307(s__3308){
return (new cljs.core.LazySeq(null,false,(function (){
var s__3308__3309 = s__3308;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__3308__3309)))
{var k__3310 = cljs.core.first.call(null,s__3308__3309);

return cljs.core.cons.call(null,cljs.core.Vector.fromArray([keyfn__3306.call(null,k__3310),thisfn.call(null,(x[k__3310]))]),iter__3307.call(null,cljs.core.rest.call(null,s__3308__3309)));
} else
{return null;
}
break;
}
})));
});

return iter__161__auto____3311.call(null,cljs.core.js_keys.call(null,x));
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

return f__3312.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__3313){
var x = cljs.core.first(arglist__3313);
var options = cljs.core.rest(arglist__3313);
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
var mem__3314 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__3318__delegate = function (args){
var temp__3723__auto____3315 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__3314),args);

if(cljs.core.truth_(temp__3723__auto____3315))
{var v__3316 = temp__3723__auto____3315;

return v__3316;
} else
{var ret__3317 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__3314,cljs.core.assoc,args,ret__3317);
return ret__3317;
}
};
var G__3318 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__3318__delegate.call(this, args);
};
G__3318.cljs$lang$maxFixedArity = 0;
G__3318.cljs$lang$applyTo = (function (arglist__3319){
var args = cljs.core.seq( arglist__3319 );;
return G__3318__delegate.call(this, args);
});
return G__3318;
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
var trampoline__3321 = (function (f){
while(true){
var ret__3320 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__3320)))
{{
var G__3324 = ret__3320;
f = G__3324;
continue;
}
} else
{return ret__3320;
}
break;
}
});
var trampoline__3322 = (function() { 
var G__3325__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__3325 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3325__delegate.call(this, f, args);
};
G__3325.cljs$lang$maxFixedArity = 1;
G__3325.cljs$lang$applyTo = (function (arglist__3326){
var f = cljs.core.first(arglist__3326);
var args = cljs.core.rest(arglist__3326);
return G__3325__delegate.call(this, f, args);
});
return G__3325;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__3321.call(this,f);
default:
return trampoline__3322.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__3322.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__3327 = (function (){
return rand.call(null,1);
});
var rand__3328 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__3327.call(this);
case  1 :
return rand__3328.call(this,n);
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
var k__3330 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__3330,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__3330,cljs.core.Vector.fromArray([])),x));
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
var isa_QMARK___3339 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___3340 = (function (h,child,parent){
var or__3576__auto____3331 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3576__auto____3331))
{return or__3576__auto____3331;
} else
{var or__3576__auto____3332 = cljs.core.contains_QMARK_.call(null,"﷐'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3576__auto____3332))
{return or__3576__auto____3332;
} else
{var and__3574__auto____3333 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3574__auto____3333))
{var and__3574__auto____3334 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3574__auto____3334))
{var and__3574__auto____3335 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3574__auto____3335))
{var ret__3336 = true;
var i__3337 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3576__auto____3338 = cljs.core.not.call(null,ret__3336);

if(cljs.core.truth_(or__3576__auto____3338))
{return or__3576__auto____3338;
} else
{return cljs.core._EQ_.call(null,i__3337,cljs.core.count.call(null,parent));
}
})()))
{return ret__3336;
} else
{{
var G__3342 = isa_QMARK_.call(null,h,child.call(null,i__3337),parent.call(null,i__3337));
var G__3343 = cljs.core.inc.call(null,i__3337);
ret__3336 = G__3342;
i__3337 = G__3343;
continue;
}
}
break;
}
} else
{return and__3574__auto____3335;
}
} else
{return and__3574__auto____3334;
}
} else
{return and__3574__auto____3333;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___3339.call(this,h,child);
case  3 :
return isa_QMARK___3340.call(this,h,child,parent);
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
var parents__3344 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__3345 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__3344.call(this,h);
case  2 :
return parents__3345.call(this,h,tag);
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
var ancestors__3347 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__3348 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__3347.call(this,h);
case  2 :
return ancestors__3348.call(this,h,tag);
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
var descendants__3350 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__3351 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"﷐'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__3350.call(this,h);
case  2 :
return descendants__3351.call(this,h,tag);
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
var derive__3361 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'namespace","﷑'parent")));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__3362 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.list("﷑'not=","﷑'tag","﷑'parent")));
}
var tp__3356 = "﷐'parents".call(null,h);
var td__3357 = "﷐'descendants".call(null,h);
var ta__3358 = "﷐'ancestors".call(null,h);
var tf__3359 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3576__auto____3360 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__3356.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3358.call(null,tag),parent)))
{throw cljs.core.str.call(null,tag,"already has",parent,"as ancestor");
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__3358.call(null,parent),tag)))
{throw cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor");
} else
{}
return cljs.core.ObjMap.fromObject(["﷐'parents","﷐'ancestors","﷐'descendants"],{"﷐'parents":cljs.core.assoc.call(null,"﷐'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__3356,tag,cljs.core.set([])),parent)),"﷐'ancestors":tf__3359.call(null,"﷐'ancestors".call(null,h),tag,td__3357,parent,ta__3358),"﷐'descendants":tf__3359.call(null,"﷐'descendants".call(null,h),parent,ta__3358,tag,td__3357)});
})());

if(cljs.core.truth_(or__3576__auto____3360))
{return or__3576__auto____3360;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__3361.call(this,h,tag);
case  3 :
return derive__3362.call(this,h,tag,parent);
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
var underive__3368 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__3369 = (function (h,tag,parent){
var parentMap__3364 = "﷐'parents".call(null,h);
var childsParents__3365 = (cljs.core.truth_(parentMap__3364.call(null,tag))?cljs.core.disj.call(null,parentMap__3364.call(null,tag),parent):cljs.core.set([]));
var newParents__3366 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__3365))?cljs.core.assoc.call(null,parentMap__3364,tag,childsParents__3365):cljs.core.dissoc.call(null,parentMap__3364,tag));
var deriv_seq__3367 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__3353_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__3353_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__3353_SHARP_),cljs.core.second.call(null,p1__3353_SHARP_)));
}),cljs.core.seq.call(null,newParents__3366)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__3364.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__3354_SHARP_,p2__3355_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__3354_SHARP_,p2__3355_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__3367));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__3368.call(this,h,tag);
case  3 :
return underive__3369.call(this,h,tag,parent);
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
var xprefs__3371 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3576__auto____3373 = (cljs.core.truth_((function (){var and__3574__auto____3372 = xprefs__3371;

if(cljs.core.truth_(and__3574__auto____3372))
{return xprefs__3371.call(null,y);
} else
{return and__3574__auto____3372;
}
})())?true:null);

if(cljs.core.truth_(or__3576__auto____3373))
{return or__3576__auto____3373;
} else
{var or__3576__auto____3375 = (function (){var ps__3374 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,ps__3374))))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__3374),prefer_table)))
{} else
{}
{
var G__3378 = cljs.core.rest.call(null,ps__3374);
ps__3374 = G__3378;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3576__auto____3375))
{return or__3576__auto____3375;
} else
{var or__3576__auto____3377 = (function (){var ps__3376 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_(cljs.core.pos_QMARK_.call(null,cljs.core.count.call(null,ps__3376))))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__3376),y,prefer_table)))
{} else
{}
{
var G__3379 = cljs.core.rest.call(null,ps__3376);
ps__3376 = G__3379;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3576__auto____3377))
{return or__3576__auto____3377;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3576__auto____3380 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3576__auto____3380))
{return or__3576__auto____3380;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__3389 = cljs.core.reduce.call(null,(function (be,p__3381){
var vec__3382__3383 = p__3381;
var k__3384 = cljs.core.nth.call(null,vec__3382__3383,0,null);
var ___3385 = cljs.core.nth.call(null,vec__3382__3383,1,null);
var e__3386 = vec__3382__3383;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__3384)))
{var be2__3388 = (cljs.core.truth_((function (){var or__3576__auto____3387 = cljs.core.nil_QMARK_.call(null,be);

if(cljs.core.truth_(or__3576__auto____3387))
{return or__3576__auto____3387;
} else
{return cljs.core.dominates.call(null,k__3384,cljs.core.first.call(null,be),prefer_table);
}
})())?e__3386:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__3388),k__3384,prefer_table)))
{} else
{throw cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__3384," and ",cljs.core.first.call(null,be2__3388),", and neither is preferred");
}
return be2__3388;
} else
{return null;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__3389))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__3389));
return cljs.core.second.call(null,best_entry__3389);
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
if(cljs.core.truth_((function (){var and__3574__auto____3390 = mf;

if(cljs.core.truth_(and__3574__auto____3390))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3574__auto____3390;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3576__auto____3391 = (_reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3391))
{return or__3576__auto____3391;
} else
{var or__3576__auto____3392 = (_reset["_"]);

if(cljs.core.truth_(or__3576__auto____3392))
{return or__3576__auto____3392;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3574__auto____3393 = mf;

if(cljs.core.truth_(and__3574__auto____3393))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3574__auto____3393;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3576__auto____3394 = (_add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3394))
{return or__3576__auto____3394;
} else
{var or__3576__auto____3395 = (_add_method["_"]);

if(cljs.core.truth_(or__3576__auto____3395))
{return or__3576__auto____3395;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3574__auto____3396 = mf;

if(cljs.core.truth_(and__3574__auto____3396))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3574__auto____3396;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3576__auto____3397 = (_remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3397))
{return or__3576__auto____3397;
} else
{var or__3576__auto____3398 = (_remove_method["_"]);

if(cljs.core.truth_(or__3576__auto____3398))
{return or__3576__auto____3398;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3574__auto____3399 = mf;

if(cljs.core.truth_(and__3574__auto____3399))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3574__auto____3399;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3576__auto____3400 = (_prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3400))
{return or__3576__auto____3400;
} else
{var or__3576__auto____3401 = (_prefer_method["_"]);

if(cljs.core.truth_(or__3576__auto____3401))
{return or__3576__auto____3401;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3574__auto____3402 = mf;

if(cljs.core.truth_(and__3574__auto____3402))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3574__auto____3402;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3576__auto____3403 = (_get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3403))
{return or__3576__auto____3403;
} else
{var or__3576__auto____3404 = (_get_method["_"]);

if(cljs.core.truth_(or__3576__auto____3404))
{return or__3576__auto____3404;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3574__auto____3405 = mf;

if(cljs.core.truth_(and__3574__auto____3405))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3574__auto____3405;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3576__auto____3406 = (_methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3406))
{return or__3576__auto____3406;
} else
{var or__3576__auto____3407 = (_methods["_"]);

if(cljs.core.truth_(or__3576__auto____3407))
{return or__3576__auto____3407;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3574__auto____3408 = mf;

if(cljs.core.truth_(and__3574__auto____3408))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3574__auto____3408;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3576__auto____3409 = (_prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3409))
{return or__3576__auto____3409;
} else
{var or__3576__auto____3410 = (_prefers["_"]);

if(cljs.core.truth_(or__3576__auto____3410))
{return or__3576__auto____3410;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._invoke = (function _invoke(mf,args){
if(cljs.core.truth_((function (){var and__3574__auto____3411 = mf;

if(cljs.core.truth_(and__3574__auto____3411))
{return mf.cljs$core$IMultiFn$_invoke;
} else
{return and__3574__auto____3411;
}
})()))
{return mf.cljs$core$IMultiFn$_invoke(mf,args);
} else
{return (function (){var or__3576__auto____3412 = (_invoke[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3576__auto____3412))
{return or__3576__auto____3412;
} else
{var or__3576__auto____3413 = (_invoke["_"]);

if(cljs.core.truth_(or__3576__auto____3413))
{return or__3576__auto____3413;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-invoke",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_invoke = (function do_invoke(mf,dispatch_fn,args){
var dispatch_val__3414 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__3415 = cljs.core._get_method.call(null,mf,dispatch_val__3414);

if(cljs.core.truth_(target_fn__3415))
{} else
{throw cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__3414);
}
return cljs.core.apply.call(null,target_fn__3415,args);
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
var this__3416 = this;
cljs.core.swap_BANG_.call(null,this__3416.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3416.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3416.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__3416.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__3417 = this;
cljs.core.swap_BANG_.call(null,this__3417.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__3417.method_cache,this__3417.method_table,this__3417.cached_hierarchy,this__3417.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__3418 = this;
cljs.core.swap_BANG_.call(null,this__3418.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__3418.method_cache,this__3418.method_table,this__3418.cached_hierarchy,this__3418.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__3419 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__3419.cached_hierarchy),cljs.core.deref.call(null,this__3419.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__3419.method_cache,this__3419.method_table,this__3419.cached_hierarchy,this__3419.hierarchy);
}
var temp__3723__auto____3420 = cljs.core.deref.call(null,this__3419.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3723__auto____3420))
{var target_fn__3421 = temp__3723__auto____3420;

return target_fn__3421;
} else
{var temp__3723__auto____3422 = cljs.core.find_and_cache_best_method.call(null,this__3419.name,dispatch_val,this__3419.hierarchy,this__3419.method_table,this__3419.prefer_table,this__3419.method_cache,this__3419.cached_hierarchy);

if(cljs.core.truth_(temp__3723__auto____3422))
{var target_fn__3423 = temp__3723__auto____3422;

return target_fn__3423;
} else
{return cljs.core.deref.call(null,this__3419.method_table).call(null,this__3419.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__3424 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__3424.prefer_table)))
{throw cljs.core.str.call(null,"Preference conflict in multimethod '",this__3424.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x);
} else
{}
cljs.core.swap_BANG_.call(null,this__3424.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__3424.method_cache,this__3424.method_table,this__3424.cached_hierarchy,this__3424.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__3425 = this;
return cljs.core.deref.call(null,this__3425.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__3426 = this;
return cljs.core.deref.call(null,this__3426.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_invoke = (function (mf,args){
var this__3427 = this;
return cljs.core.do_invoke.call(null,mf,this__3427.dispatch_fn,args);
});
cljs.core.MultiFn.prototype.call = (function() { 
var G__3428__delegate = function (_,args){
return cljs.core._invoke.call(null,this,args);
};
var G__3428 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__3428__delegate.call(this, _, args);
};
G__3428.cljs$lang$maxFixedArity = 1;
G__3428.cljs$lang$applyTo = (function (arglist__3429){
var _ = cljs.core.first(arglist__3429);
var args = cljs.core.rest(arglist__3429);
return G__3428__delegate.call(this, _, args);
});
return G__3428;
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
