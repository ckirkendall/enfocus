goog.provide('clojure.string');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
clojure.string.seq_reverse = (function seq_reverse(coll){
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.List.EMPTY,coll);
});
/**
* Returns s with its characters reversed.
*/
clojure.string.reverse = (function reverse(s){
if(cljs.core.truth_(cljs.core._EQ_.call(null,s.length,0)))
{return "";
} else
{var sb__3855 = (new goog.string.StringBuffer());

var coll__3856 = clojure.string.seq_reverse.call(null,cljs.core.seq.call(null,s.split("")));

while(true){
if(cljs.core.truth_(coll__3856))
{sb__3855.append(cljs.core.first.call(null,coll__3856));
{
var G__3857 = cljs.core.next.call(null,coll__3856);
coll__3856 = G__3857;
continue;
}
} else
{}
break;
}
return sb__3855.toString();
}
});
/**
* Replaces all instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace = (function replace(s,match,replacement){
if(cljs.core.truth_(cljs.core.string_QMARK_.call(null,match)))
{return s.replace((new RegExp(goog.string.regExpEscape.call(null,match),"g")),replacement);
} else
{if(cljs.core.truth_(match.hasOwnProperty("source")))
{return s.replace((new RegExp(match.source,"g")),replacement);
} else
{if(cljs.core.truth_("﷐'else"))
{throw cljs.core.str.call(null,"Invalid match arg: ",match);
} else
{return null;
}
}
}
});
/**
* Replaces the first instance of match with replacement in s.
* match/replacement can be:
* 
* string / string
* pattern / (string or function of match).
*/
clojure.string.replace_first = (function replace_first(s,match,replacement){
return s.replace(match,replacement);
});
/**
* Returns a string of all elements in coll, as returned by (seq coll),
* separated by an optional separator.
*/
clojure.string.join = (function() {
var join = null;
var join__3858 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__3859 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case  1 :
return join__3858.call(this,separator);
case  2 :
return join__3859.call(this,separator,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return join;
})()
;
/**
* Converts string to all upper-case.
*/
clojure.string.upper_case = (function upper_case(s){
return s.toUpperCase();
});
/**
* Converts string to all lower-case.
*/
clojure.string.lower_case = (function lower_case(s){
return s.toLowerCase();
});
/**
* Converts first character of the string to upper-case, all other
* characters to lower-case.
*/
clojure.string.capitalize = (function capitalize(s){
if(cljs.core.truth_(cljs.core._LT_.call(null,cljs.core.count.call(null,s),2)))
{return clojure.string.upper_case.call(null,s);
} else
{return cljs.core.str.call(null,clojure.string.upper_case.call(null,cljs.core.subs.call(null,s,0,1)),clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,1)));
}
});
/**
* Splits string on a regular expression. Optional argument limit is
* the maximum number of splits. Not lazy. Returns vector of the splits.
*/
clojure.string.split = (function() {
var split = null;
var split__3867 = (function (s,re){
return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
});
var split__3868 = (function (s,re,limit){
if(cljs.core.truth_(cljs.core._LT_.call(null,limit,1)))
{return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
} else
{var s__3861 = s;
var limit__3862 = limit;
var parts__3863 = cljs.core.Vector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,limit__3862,1)))
{return cljs.core.conj.call(null,parts__3863,s__3861);
} else
{var temp__3723__auto____3864 = cljs.core.re_find.call(null,re,s__3861);

if(cljs.core.truth_(temp__3723__auto____3864))
{var m__3865 = temp__3723__auto____3864;

var index__3866 = s__3861.indexOf(m__3865);

{
var G__3870 = s__3861.substring(cljs.core._PLUS_.call(null,index__3866,cljs.core.count.call(null,m__3865)));
var G__3871 = cljs.core.dec.call(null,limit__3862);
var G__3872 = cljs.core.conj.call(null,parts__3863,s__3861.substring(0,index__3866));
s__3861 = G__3870;
limit__3862 = G__3871;
parts__3863 = G__3872;
continue;
}
} else
{return cljs.core.conj.call(null,parts__3863,s__3861);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case  2 :
return split__3867.call(this,s,re);
case  3 :
return split__3868.call(this,s,re,limit);
}
throw('Invalid arity: ' + arguments.length);
};
return split;
})()
;
/**
* Splits s on
* or
* .
*/
clojure.string.split_lines = (function split_lines(s){
return clojure.string.split.call(null,s,/\n|\r\n/);
});
/**
* Removes whitespace from both ends of string.
*/
clojure.string.trim = (function trim(s){
return goog.string.trim.call(null,s);
});
/**
* Removes whitespace from the left side of string.
*/
clojure.string.triml = (function triml(s){
return goog.string.trimLeft.call(null,s);
});
/**
* Removes whitespace from the right side of string.
*/
clojure.string.trimr = (function trimr(s){
return goog.string.trimRight.call(null,s);
});
/**
* Removes all trailing newline \n or return \r characters from
* string.  Similar to Perl's chomp.
*/
clojure.string.trim_newline = (function trim_newline(s){
var index__3873 = s.length;

while(true){
if(cljs.core.truth_(cljs.core.zero_QMARK_.call(null,index__3873)))
{return "";
} else
{var ch__3874 = cljs.core.get.call(null,s,cljs.core.dec.call(null,index__3873));

if(cljs.core.truth_((function (){var or__3576__auto____3875 = cljs.core._EQ_.call(null,ch__3874,"\n");

if(cljs.core.truth_(or__3576__auto____3875))
{return or__3576__auto____3875;
} else
{return cljs.core._EQ_.call(null,ch__3874,"\r");
}
})()))
{{
var G__3876 = cljs.core.dec.call(null,index__3873);
index__3873 = G__3876;
continue;
}
} else
{return s.substring(0,index__3873);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__3877 = cljs.core.str.call(null,s);

if(cljs.core.truth_((function (){var or__3576__auto____3878 = cljs.core.not.call(null,s__3877);

if(cljs.core.truth_(or__3576__auto____3878))
{return or__3576__auto____3878;
} else
{var or__3576__auto____3879 = cljs.core._EQ_.call(null,"",s__3877);

if(cljs.core.truth_(or__3576__auto____3879))
{return or__3576__auto____3879;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__3877);
}
}
})()))
{return true;
} else
{return false;
}
});
/**
* Return a new string, using cmap to escape each character ch
* from s as follows:
* 
* If (cmap ch) is nil, append ch to the new string.
* If (cmap ch) is non-nil, append (str (cmap ch)) instead.
*/
clojure.string.escape = (function escape(s,cmap){
var buffer__3880 = (new goog.string.StringBuffer());
var length__3881 = s.length;

var index__3882 = 0;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,length__3881,index__3882)))
{return buffer__3880.toString();
} else
{var ch__3883 = s.charAt(index__3882);

var temp__3723__auto____3884 = cljs.core.get.call(null,cmap,ch__3883);

if(cljs.core.truth_(temp__3723__auto____3884))
{var replacement__3885 = temp__3723__auto____3884;

buffer__3880.append(cljs.core.str.call(null,replacement__3885));
} else
{buffer__3880.append(ch__3883);
}
{
var G__3886 = cljs.core.inc.call(null,index__3882);
index__3882 = G__3886;
continue;
}
}
break;
}
});
