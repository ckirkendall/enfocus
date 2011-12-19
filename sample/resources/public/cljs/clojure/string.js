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
{var sb__3878 = (new goog.string.StringBuffer());

var coll__3879 = clojure.string.seq_reverse.call(null,cljs.core.seq.call(null,s.split("")));

while(true){
if(cljs.core.truth_(coll__3879))
{sb__3878.append(cljs.core.first.call(null,coll__3879));
{
var G__3880 = cljs.core.next.call(null,coll__3879);
coll__3879 = G__3880;
continue;
}
} else
{}
break;
}
return sb__3878.toString();
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
var join__3881 = (function (coll){
return cljs.core.apply.call(null,cljs.core.str,coll);
});
var join__3882 = (function (separator,coll){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,separator,coll));
});
join = function(separator,coll){
switch(arguments.length){
case  1 :
return join__3881.call(this,separator);
case  2 :
return join__3882.call(this,separator,coll);
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
var split__3890 = (function (s,re){
return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
});
var split__3891 = (function (s,re,limit){
if(cljs.core.truth_(cljs.core._LT_.call(null,limit,1)))
{return cljs.core.vec.call(null,cljs.core.str.call(null,s).split(re));
} else
{var s__3884 = s;
var limit__3885 = limit;
var parts__3886 = cljs.core.Vector.fromArray([]);

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,limit__3885,1)))
{return cljs.core.conj.call(null,parts__3886,s__3884);
} else
{var temp__3723__auto____3887 = cljs.core.re_find.call(null,re,s__3884);

if(cljs.core.truth_(temp__3723__auto____3887))
{var m__3888 = temp__3723__auto____3887;

var index__3889 = s__3884.indexOf(m__3888);

{
var G__3893 = s__3884.substring(cljs.core._PLUS_.call(null,index__3889,cljs.core.count.call(null,m__3888)));
var G__3894 = cljs.core.dec.call(null,limit__3885);
var G__3895 = cljs.core.conj.call(null,parts__3886,s__3884.substring(0,index__3889));
s__3884 = G__3893;
limit__3885 = G__3894;
parts__3886 = G__3895;
continue;
}
} else
{return cljs.core.conj.call(null,parts__3886,s__3884);
}
}
break;
}
}
});
split = function(s,re,limit){
switch(arguments.length){
case  2 :
return split__3890.call(this,s,re);
case  3 :
return split__3891.call(this,s,re,limit);
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
var index__3896 = s.length;

while(true){
if(cljs.core.truth_(cljs.core.zero_QMARK_.call(null,index__3896)))
{return "";
} else
{var ch__3897 = cljs.core.get.call(null,s,cljs.core.dec.call(null,index__3896));

if(cljs.core.truth_((function (){var or__3576__auto____3898 = cljs.core._EQ_.call(null,ch__3897,"\n");

if(cljs.core.truth_(or__3576__auto____3898))
{return or__3576__auto____3898;
} else
{return cljs.core._EQ_.call(null,ch__3897,"\r");
}
})()))
{{
var G__3899 = cljs.core.dec.call(null,index__3896);
index__3896 = G__3899;
continue;
}
} else
{return s.substring(0,index__3896);
}
}
break;
}
});
/**
* True is s is nil, empty, or contains only whitespace.
*/
clojure.string.blank_QMARK_ = (function blank_QMARK_(s){
var s__3900 = cljs.core.str.call(null,s);

if(cljs.core.truth_((function (){var or__3576__auto____3901 = cljs.core.not.call(null,s__3900);

if(cljs.core.truth_(or__3576__auto____3901))
{return or__3576__auto____3901;
} else
{var or__3576__auto____3902 = cljs.core._EQ_.call(null,"",s__3900);

if(cljs.core.truth_(or__3576__auto____3902))
{return or__3576__auto____3902;
} else
{return cljs.core.re_matches.call(null,/\s+/,s__3900);
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
var buffer__3903 = (new goog.string.StringBuffer());
var length__3904 = s.length;

var index__3905 = 0;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,length__3904,index__3905)))
{return buffer__3903.toString();
} else
{var ch__3906 = s.charAt(index__3905);

var temp__3723__auto____3907 = cljs.core.get.call(null,cmap,ch__3906);

if(cljs.core.truth_(temp__3723__auto____3907))
{var replacement__3908 = temp__3723__auto____3907;

buffer__3903.append(cljs.core.str.call(null,replacement__3908));
} else
{buffer__3903.append(ch__3906);
}
{
var G__3909 = cljs.core.inc.call(null,index__3905);
index__3905 = G__3909;
continue;
}
}
break;
}
});
