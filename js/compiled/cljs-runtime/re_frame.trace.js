goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__23970){
var map__23971 = p__23970;
var map__23971__$1 = cljs.core.__destructure_map(map__23971);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23971__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23971__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23971__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23971__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__5045__auto__ = child_of;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__23975_24007 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__23976_24008 = null;
var count__23977_24009 = (0);
var i__23978_24010 = (0);
while(true){
if((i__23978_24010 < count__23977_24009)){
var vec__23990_24011 = chunk__23976_24008.cljs$core$IIndexed$_nth$arity$2(null,i__23978_24010);
var k_24012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23990_24011,(0),null);
var cb_24013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23990_24011,(1),null);
try{var G__23994_24014 = cljs.core.deref(re_frame.trace.traces);
(cb_24013.cljs$core$IFn$_invoke$arity$1 ? cb_24013.cljs$core$IFn$_invoke$arity$1(G__23994_24014) : cb_24013.call(null,G__23994_24014));
}catch (e23993){var e_24015 = e23993;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_24012,"while storing",cljs.core.deref(re_frame.trace.traces),e_24015], 0));
}

var G__24016 = seq__23975_24007;
var G__24017 = chunk__23976_24008;
var G__24018 = count__23977_24009;
var G__24019 = (i__23978_24010 + (1));
seq__23975_24007 = G__24016;
chunk__23976_24008 = G__24017;
count__23977_24009 = G__24018;
i__23978_24010 = G__24019;
continue;
} else {
var temp__5804__auto___24020 = cljs.core.seq(seq__23975_24007);
if(temp__5804__auto___24020){
var seq__23975_24021__$1 = temp__5804__auto___24020;
if(cljs.core.chunked_seq_QMARK_(seq__23975_24021__$1)){
var c__5568__auto___24022 = cljs.core.chunk_first(seq__23975_24021__$1);
var G__24023 = cljs.core.chunk_rest(seq__23975_24021__$1);
var G__24024 = c__5568__auto___24022;
var G__24025 = cljs.core.count(c__5568__auto___24022);
var G__24026 = (0);
seq__23975_24007 = G__24023;
chunk__23976_24008 = G__24024;
count__23977_24009 = G__24025;
i__23978_24010 = G__24026;
continue;
} else {
var vec__23995_24027 = cljs.core.first(seq__23975_24021__$1);
var k_24028 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23995_24027,(0),null);
var cb_24029 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23995_24027,(1),null);
try{var G__23999_24030 = cljs.core.deref(re_frame.trace.traces);
(cb_24029.cljs$core$IFn$_invoke$arity$1 ? cb_24029.cljs$core$IFn$_invoke$arity$1(G__23999_24030) : cb_24029.call(null,G__23999_24030));
}catch (e23998){var e_24031 = e23998;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_24028,"while storing",cljs.core.deref(re_frame.trace.traces),e_24031], 0));
}

var G__24032 = cljs.core.next(seq__23975_24021__$1);
var G__24033 = null;
var G__24034 = (0);
var G__24035 = (0);
seq__23975_24007 = G__24032;
chunk__23976_24008 = G__24033;
count__23977_24009 = G__24034;
i__23978_24010 = G__24035;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
