goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19329){
var map__19330 = p__19329;
var map__19330__$1 = cljs.core.__destructure_map(map__19330);
var m = map__19330__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19330__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19330__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__19335_19719 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19336_19720 = null;
var count__19337_19721 = (0);
var i__19338_19722 = (0);
while(true){
if((i__19338_19722 < count__19337_19721)){
var f_19723 = chunk__19336_19720.cljs$core$IIndexed$_nth$arity$2(null,i__19338_19722);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19723], 0));


var G__19724 = seq__19335_19719;
var G__19725 = chunk__19336_19720;
var G__19726 = count__19337_19721;
var G__19727 = (i__19338_19722 + (1));
seq__19335_19719 = G__19724;
chunk__19336_19720 = G__19725;
count__19337_19721 = G__19726;
i__19338_19722 = G__19727;
continue;
} else {
var temp__5804__auto___19728 = cljs.core.seq(seq__19335_19719);
if(temp__5804__auto___19728){
var seq__19335_19729__$1 = temp__5804__auto___19728;
if(cljs.core.chunked_seq_QMARK_(seq__19335_19729__$1)){
var c__5568__auto___19730 = cljs.core.chunk_first(seq__19335_19729__$1);
var G__19731 = cljs.core.chunk_rest(seq__19335_19729__$1);
var G__19732 = c__5568__auto___19730;
var G__19733 = cljs.core.count(c__5568__auto___19730);
var G__19734 = (0);
seq__19335_19719 = G__19731;
chunk__19336_19720 = G__19732;
count__19337_19721 = G__19733;
i__19338_19722 = G__19734;
continue;
} else {
var f_19736 = cljs.core.first(seq__19335_19729__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19736], 0));


var G__19738 = cljs.core.next(seq__19335_19729__$1);
var G__19739 = null;
var G__19740 = (0);
var G__19741 = (0);
seq__19335_19719 = G__19738;
chunk__19336_19720 = G__19739;
count__19337_19721 = G__19740;
i__19338_19722 = G__19741;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19742 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19742], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19742)))?cljs.core.second(arglists_19742):arglists_19742)], 0));
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
var seq__19356_19751 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19357_19752 = null;
var count__19358_19753 = (0);
var i__19359_19754 = (0);
while(true){
if((i__19359_19754 < count__19358_19753)){
var vec__19371_19755 = chunk__19357_19752.cljs$core$IIndexed$_nth$arity$2(null,i__19359_19754);
var name_19756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19371_19755,(0),null);
var map__19374_19757 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19371_19755,(1),null);
var map__19374_19758__$1 = cljs.core.__destructure_map(map__19374_19757);
var doc_19759 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19374_19758__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19760 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19374_19758__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19756], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19760], 0));

if(cljs.core.truth_(doc_19759)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19759], 0));
} else {
}


var G__19763 = seq__19356_19751;
var G__19764 = chunk__19357_19752;
var G__19765 = count__19358_19753;
var G__19766 = (i__19359_19754 + (1));
seq__19356_19751 = G__19763;
chunk__19357_19752 = G__19764;
count__19358_19753 = G__19765;
i__19359_19754 = G__19766;
continue;
} else {
var temp__5804__auto___19768 = cljs.core.seq(seq__19356_19751);
if(temp__5804__auto___19768){
var seq__19356_19769__$1 = temp__5804__auto___19768;
if(cljs.core.chunked_seq_QMARK_(seq__19356_19769__$1)){
var c__5568__auto___19772 = cljs.core.chunk_first(seq__19356_19769__$1);
var G__19773 = cljs.core.chunk_rest(seq__19356_19769__$1);
var G__19774 = c__5568__auto___19772;
var G__19775 = cljs.core.count(c__5568__auto___19772);
var G__19776 = (0);
seq__19356_19751 = G__19773;
chunk__19357_19752 = G__19774;
count__19358_19753 = G__19775;
i__19359_19754 = G__19776;
continue;
} else {
var vec__19378_19780 = cljs.core.first(seq__19356_19769__$1);
var name_19781 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19378_19780,(0),null);
var map__19382_19782 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19378_19780,(1),null);
var map__19382_19783__$1 = cljs.core.__destructure_map(map__19382_19782);
var doc_19784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19382_19783__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19785 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19382_19783__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19781], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19785], 0));

if(cljs.core.truth_(doc_19784)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19784], 0));
} else {
}


var G__19790 = cljs.core.next(seq__19356_19769__$1);
var G__19791 = null;
var G__19792 = (0);
var G__19793 = (0);
seq__19356_19751 = G__19790;
chunk__19357_19752 = G__19791;
count__19358_19753 = G__19792;
i__19359_19754 = G__19793;
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

var seq__19383 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19384 = null;
var count__19385 = (0);
var i__19386 = (0);
while(true){
if((i__19386 < count__19385)){
var role = chunk__19384.cljs$core$IIndexed$_nth$arity$2(null,i__19386);
var temp__5804__auto___19794__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19794__$1)){
var spec_19796 = temp__5804__auto___19794__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19796)], 0));
} else {
}


var G__19797 = seq__19383;
var G__19798 = chunk__19384;
var G__19799 = count__19385;
var G__19800 = (i__19386 + (1));
seq__19383 = G__19797;
chunk__19384 = G__19798;
count__19385 = G__19799;
i__19386 = G__19800;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19383);
if(temp__5804__auto____$1){
var seq__19383__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19383__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19383__$1);
var G__19803 = cljs.core.chunk_rest(seq__19383__$1);
var G__19804 = c__5568__auto__;
var G__19805 = cljs.core.count(c__5568__auto__);
var G__19806 = (0);
seq__19383 = G__19803;
chunk__19384 = G__19804;
count__19385 = G__19805;
i__19386 = G__19806;
continue;
} else {
var role = cljs.core.first(seq__19383__$1);
var temp__5804__auto___19809__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19809__$2)){
var spec_19810 = temp__5804__auto___19809__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19810)], 0));
} else {
}


var G__19811 = cljs.core.next(seq__19383__$1);
var G__19812 = null;
var G__19813 = (0);
var G__19814 = (0);
seq__19383 = G__19811;
chunk__19384 = G__19812;
count__19385 = G__19813;
i__19386 = G__19814;
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
var G__19819 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__19820 = cljs.core.ex_cause(t);
via = G__19819;
t = G__19820;
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
var map__19412 = datafied_throwable;
var map__19412__$1 = cljs.core.__destructure_map(map__19412);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19412__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19412__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19412__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19413 = cljs.core.last(via);
var map__19413__$1 = cljs.core.__destructure_map(map__19413);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19413__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19413__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19413__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19414 = data;
var map__19414__$1 = cljs.core.__destructure_map(map__19414);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19414__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19414__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19414__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19415 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19415__$1 = cljs.core.__destructure_map(map__19415);
var top_data = map__19415__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19415__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19421 = phase;
var G__19421__$1 = (((G__19421 instanceof cljs.core.Keyword))?G__19421.fqn:null);
switch (G__19421__$1) {
case "read-source":
var map__19422 = data;
var map__19422__$1 = cljs.core.__destructure_map(map__19422);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19422__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19422__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19423 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19423__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19423,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19423);
var G__19423__$2 = (cljs.core.truth_((function (){var fexpr__19424 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19424.cljs$core$IFn$_invoke$arity$1 ? fexpr__19424.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19424.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19423__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19423__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19423__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19423__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19425 = top_data;
var G__19425__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19425,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19425);
var G__19425__$2 = (cljs.core.truth_((function (){var fexpr__19426 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19426.cljs$core$IFn$_invoke$arity$1 ? fexpr__19426.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19426.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19425__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19425__$1);
var G__19425__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19425__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19425__$2);
var G__19425__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19425__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19425__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19425__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19425__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19441 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19441,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19441,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19441,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19441,(3),null);
var G__19448 = top_data;
var G__19448__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19448,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19448);
var G__19448__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19448__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19448__$1);
var G__19448__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19448__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19448__$2);
var G__19448__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19448__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19448__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19448__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19448__$4;
}

break;
case "execution":
var vec__19475 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19475,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19475,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19475,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19475,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19408_SHARP_){
var or__5045__auto__ = (p1__19408_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__19482 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19482.cljs$core$IFn$_invoke$arity$1 ? fexpr__19482.cljs$core$IFn$_invoke$arity$1(p1__19408_SHARP_) : fexpr__19482.call(null,p1__19408_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__19491 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19491__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19491,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19491);
var G__19491__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19491__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19491__$1);
var G__19491__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19491__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19491__$2);
var G__19491__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19491__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19491__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19491__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19491__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19421__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19574){
var map__19579 = p__19574;
var map__19579__$1 = cljs.core.__destructure_map(map__19579);
var triage_data = map__19579__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19579__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19579__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19579__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19579__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19579__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19579__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19579__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19579__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__19631 = phase;
var G__19631__$1 = (((G__19631 instanceof cljs.core.Keyword))?G__19631.fqn:null);
switch (G__19631__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19632 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19633 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19634 = loc;
var G__19635 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19636_19903 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19637_19904 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19638_19905 = true;
var _STAR_print_fn_STAR__temp_val__19639_19906 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19638_19905);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19639_19906);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19545_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19545_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19637_19904);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19636_19903);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19632,G__19633,G__19634,G__19635) : format.call(null,G__19632,G__19633,G__19634,G__19635));

break;
case "macroexpansion":
var G__19653 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19654 = cause_type;
var G__19655 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19656 = loc;
var G__19657 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19653,G__19654,G__19655,G__19656,G__19657) : format.call(null,G__19653,G__19654,G__19655,G__19656,G__19657));

break;
case "compile-syntax-check":
var G__19659 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19660 = cause_type;
var G__19661 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19662 = loc;
var G__19663 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19659,G__19660,G__19661,G__19662,G__19663) : format.call(null,G__19659,G__19660,G__19661,G__19662,G__19663));

break;
case "compilation":
var G__19664 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19665 = cause_type;
var G__19666 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19667 = loc;
var G__19668 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19664,G__19665,G__19666,G__19667,G__19668) : format.call(null,G__19664,G__19665,G__19666,G__19667,G__19668));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19676 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19677 = symbol;
var G__19678 = loc;
var G__19679 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19687_19918 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19688_19919 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19689_19920 = true;
var _STAR_print_fn_STAR__temp_val__19690_19921 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19689_19920);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19690_19921);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19564_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19564_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19688_19919);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19687_19918);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19676,G__19677,G__19678,G__19679) : format.call(null,G__19676,G__19677,G__19678,G__19679));
} else {
var G__19697 = "Execution error%s at %s(%s).\n%s\n";
var G__19698 = cause_type;
var G__19699 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19700 = loc;
var G__19701 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19697,G__19698,G__19699,G__19700,G__19701) : format.call(null,G__19697,G__19698,G__19699,G__19700,G__19701));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19631__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
