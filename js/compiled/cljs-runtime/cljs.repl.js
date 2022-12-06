goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__20529){
var map__20532 = p__20529;
var map__20532__$1 = cljs.core.__destructure_map(map__20532);
var m = map__20532__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20532__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20532__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20544_20850 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20545_20851 = null;
var count__20546_20852 = (0);
var i__20547_20853 = (0);
while(true){
if((i__20547_20853 < count__20546_20852)){
var f_20854 = chunk__20545_20851.cljs$core$IIndexed$_nth$arity$2(null,i__20547_20853);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20854], 0));


var G__20855 = seq__20544_20850;
var G__20856 = chunk__20545_20851;
var G__20857 = count__20546_20852;
var G__20858 = (i__20547_20853 + (1));
seq__20544_20850 = G__20855;
chunk__20545_20851 = G__20856;
count__20546_20852 = G__20857;
i__20547_20853 = G__20858;
continue;
} else {
var temp__5804__auto___20859 = cljs.core.seq(seq__20544_20850);
if(temp__5804__auto___20859){
var seq__20544_20860__$1 = temp__5804__auto___20859;
if(cljs.core.chunked_seq_QMARK_(seq__20544_20860__$1)){
var c__5568__auto___20861 = cljs.core.chunk_first(seq__20544_20860__$1);
var G__20862 = cljs.core.chunk_rest(seq__20544_20860__$1);
var G__20863 = c__5568__auto___20861;
var G__20864 = cljs.core.count(c__5568__auto___20861);
var G__20865 = (0);
seq__20544_20850 = G__20862;
chunk__20545_20851 = G__20863;
count__20546_20852 = G__20864;
i__20547_20853 = G__20865;
continue;
} else {
var f_20866 = cljs.core.first(seq__20544_20860__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20866], 0));


var G__20867 = cljs.core.next(seq__20544_20860__$1);
var G__20868 = null;
var G__20869 = (0);
var G__20870 = (0);
seq__20544_20850 = G__20867;
chunk__20545_20851 = G__20868;
count__20546_20852 = G__20869;
i__20547_20853 = G__20870;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20871 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20871], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20871)))?cljs.core.second(arglists_20871):arglists_20871)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__20563_20875 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__20564_20876 = null;
var count__20565_20877 = (0);
var i__20566_20878 = (0);
while(true){
if((i__20566_20878 < count__20565_20877)){
var vec__20590_20879 = chunk__20564_20876.cljs$core$IIndexed$_nth$arity$2(null,i__20566_20878);
var name_20880 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20590_20879,(0),null);
var map__20593_20881 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20590_20879,(1),null);
var map__20593_20882__$1 = cljs.core.__destructure_map(map__20593_20881);
var doc_20883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20593_20882__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20593_20882__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20880], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20884], 0));

if(cljs.core.truth_(doc_20883)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20883], 0));
} else {
}


var G__20888 = seq__20563_20875;
var G__20889 = chunk__20564_20876;
var G__20891 = count__20565_20877;
var G__20892 = (i__20566_20878 + (1));
seq__20563_20875 = G__20888;
chunk__20564_20876 = G__20889;
count__20565_20877 = G__20891;
i__20566_20878 = G__20892;
continue;
} else {
var temp__5804__auto___20893 = cljs.core.seq(seq__20563_20875);
if(temp__5804__auto___20893){
var seq__20563_20894__$1 = temp__5804__auto___20893;
if(cljs.core.chunked_seq_QMARK_(seq__20563_20894__$1)){
var c__5568__auto___20895 = cljs.core.chunk_first(seq__20563_20894__$1);
var G__20899 = cljs.core.chunk_rest(seq__20563_20894__$1);
var G__20900 = c__5568__auto___20895;
var G__20901 = cljs.core.count(c__5568__auto___20895);
var G__20902 = (0);
seq__20563_20875 = G__20899;
chunk__20564_20876 = G__20900;
count__20565_20877 = G__20901;
i__20566_20878 = G__20902;
continue;
} else {
var vec__20599_20903 = cljs.core.first(seq__20563_20894__$1);
var name_20904 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20599_20903,(0),null);
var map__20602_20905 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20599_20903,(1),null);
var map__20602_20906__$1 = cljs.core.__destructure_map(map__20602_20905);
var doc_20907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20602_20906__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20602_20906__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20904], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20908], 0));

if(cljs.core.truth_(doc_20907)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20907], 0));
} else {
}


var G__20909 = cljs.core.next(seq__20563_20894__$1);
var G__20910 = null;
var G__20911 = (0);
var G__20912 = (0);
seq__20563_20875 = G__20909;
chunk__20564_20876 = G__20910;
count__20565_20877 = G__20911;
i__20566_20878 = G__20912;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__20610 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__20611 = null;
var count__20612 = (0);
var i__20613 = (0);
while(true){
if((i__20613 < count__20612)){
var role = chunk__20611.cljs$core$IIndexed$_nth$arity$2(null,i__20613);
var temp__5804__auto___20914__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20914__$1)){
var spec_20915 = temp__5804__auto___20914__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20915)], 0));
} else {
}


var G__20916 = seq__20610;
var G__20917 = chunk__20611;
var G__20918 = count__20612;
var G__20919 = (i__20613 + (1));
seq__20610 = G__20916;
chunk__20611 = G__20917;
count__20612 = G__20918;
i__20613 = G__20919;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__20610);
if(temp__5804__auto____$1){
var seq__20610__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__20610__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20610__$1);
var G__20920 = cljs.core.chunk_rest(seq__20610__$1);
var G__20921 = c__5568__auto__;
var G__20922 = cljs.core.count(c__5568__auto__);
var G__20923 = (0);
seq__20610 = G__20920;
chunk__20611 = G__20921;
count__20612 = G__20922;
i__20613 = G__20923;
continue;
} else {
var role = cljs.core.first(seq__20610__$1);
var temp__5804__auto___20924__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20924__$2)){
var spec_20925 = temp__5804__auto___20924__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20925)], 0));
} else {
}


var G__20926 = cljs.core.next(seq__20610__$1);
var G__20927 = null;
var G__20928 = (0);
var G__20929 = (0);
seq__20610 = G__20926;
chunk__20611 = G__20927;
count__20612 = G__20928;
i__20613 = G__20929;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20939 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__20940 = cljs.core.ex_cause(t);
via = G__20939;
t = G__20940;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__20744 = datafied_throwable;
var map__20744__$1 = cljs.core.__destructure_map(map__20744);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20744__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20744__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20744__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__20745 = cljs.core.last(via);
var map__20745__$1 = cljs.core.__destructure_map(map__20745);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20745__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20745__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20745__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__20747 = data;
var map__20747__$1 = cljs.core.__destructure_map(map__20747);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20747__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20747__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20747__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__20748 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__20748__$1 = cljs.core.__destructure_map(map__20748);
var top_data = map__20748__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20748__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20752 = phase;
var G__20752__$1 = (((G__20752 instanceof cljs.core.Keyword))?G__20752.fqn:null);
switch (G__20752__$1) {
case "read-source":
var map__20756 = data;
var map__20756__$1 = cljs.core.__destructure_map(map__20756);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20756__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20756__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__20757 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__20757__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20757,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20757);
var G__20757__$2 = (cljs.core.truth_((function (){var fexpr__20759 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20759.cljs$core$IFn$_invoke$arity$1 ? fexpr__20759.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20759.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20757__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20757__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20757__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20757__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__20762 = top_data;
var G__20762__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20762,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__20762);
var G__20762__$2 = (cljs.core.truth_((function (){var fexpr__20763 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20763.cljs$core$IFn$_invoke$arity$1 ? fexpr__20763.cljs$core$IFn$_invoke$arity$1(source) : fexpr__20763.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__20762__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__20762__$1);
var G__20762__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20762__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20762__$2);
var G__20762__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20762__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20762__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20762__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20762__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__20766 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20766,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20766,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20766,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20766,(3),null);
var G__20771 = top_data;
var G__20771__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20771,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__20771);
var G__20771__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20771__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__20771__$1);
var G__20771__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20771__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__20771__$2);
var G__20771__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20771__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__20771__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20771__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__20771__$4;
}

break;
case "execution":
var vec__20780 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20780,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20780,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20780,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20780,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__20738_SHARP_){
var or__5045__auto__ = (p1__20738_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__20784 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__20784.cljs$core$IFn$_invoke$arity$1 ? fexpr__20784.cljs$core$IFn$_invoke$arity$1(p1__20738_SHARP_) : fexpr__20784.call(null,p1__20738_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__20787 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__20787__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20787,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__20787);
var G__20787__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20787__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__20787__$1);
var G__20787__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20787__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__20787__$2);
var G__20787__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20787__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__20787__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__20787__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__20787__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20752__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__20792){
var map__20793 = p__20792;
var map__20793__$1 = cljs.core.__destructure_map(map__20793);
var triage_data = map__20793__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20793__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20793__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20793__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20793__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20793__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20793__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20793__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20793__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__20794 = phase;
var G__20794__$1 = (((G__20794 instanceof cljs.core.Keyword))?G__20794.fqn:null);
switch (G__20794__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__20799 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__20800 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20801 = loc;
var G__20802 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20803_20971 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20804_20972 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20805_20973 = true;
var _STAR_print_fn_STAR__temp_val__20806_20974 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20805_20973);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20806_20974);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20790_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20790_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20804_20972);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20803_20971);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20799,G__20800,G__20801,G__20802) : format.call(null,G__20799,G__20800,G__20801,G__20802));

break;
case "macroexpansion":
var G__20811 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__20812 = cause_type;
var G__20813 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20814 = loc;
var G__20815 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20811,G__20812,G__20813,G__20814,G__20815) : format.call(null,G__20811,G__20812,G__20813,G__20814,G__20815));

break;
case "compile-syntax-check":
var G__20816 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__20817 = cause_type;
var G__20818 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20819 = loc;
var G__20820 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20816,G__20817,G__20818,G__20819,G__20820) : format.call(null,G__20816,G__20817,G__20818,G__20819,G__20820));

break;
case "compilation":
var G__20821 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__20822 = cause_type;
var G__20823 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20824 = loc;
var G__20825 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20821,G__20822,G__20823,G__20824,G__20825) : format.call(null,G__20821,G__20822,G__20823,G__20824,G__20825));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__20826 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__20827 = symbol;
var G__20828 = loc;
var G__20829 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__20830_20982 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__20831_20983 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__20832_20984 = true;
var _STAR_print_fn_STAR__temp_val__20833_20985 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__20832_20984);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__20833_20985);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__20791_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__20791_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__20831_20983);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__20830_20982);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__20826,G__20827,G__20828,G__20829) : format.call(null,G__20826,G__20827,G__20828,G__20829));
} else {
var G__20834 = "Execution error%s at %s(%s).\n%s\n";
var G__20835 = cause_type;
var G__20836 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__20837 = loc;
var G__20838 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__20834,G__20835,G__20836,G__20837,G__20838) : format.call(null,G__20834,G__20835,G__20836,G__20837,G__20838));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20794__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
