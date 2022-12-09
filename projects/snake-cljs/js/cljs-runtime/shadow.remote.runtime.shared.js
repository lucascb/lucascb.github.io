goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__15934,res){
var map__15935 = p__15934;
var map__15935__$1 = cljs.core.__destructure_map(map__15935);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15935__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15935__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__15937 = res;
var G__15937__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15937,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__15937);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__15937__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__15937__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__15939 = arguments.length;
switch (G__15939) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__15945,msg,handlers,timeout_after_ms){
var map__15946 = p__15945;
var map__15946__$1 = cljs.core.__destructure_map(map__15946);
var runtime = map__15946__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15946__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___16219 = arguments.length;
var i__5770__auto___16220 = (0);
while(true){
if((i__5770__auto___16220 < len__5769__auto___16219)){
args__5775__auto__.push((arguments[i__5770__auto___16220]));

var G__16221 = (i__5770__auto___16220 + (1));
i__5770__auto___16220 = G__16221;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__15951,ev,args){
var map__15952 = p__15951;
var map__15952__$1 = cljs.core.__destructure_map(map__15952);
var runtime = map__15952__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15952__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__15953 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__15956 = null;
var count__15957 = (0);
var i__15958 = (0);
while(true){
if((i__15958 < count__15957)){
var ext = chunk__15956.cljs$core$IIndexed$_nth$arity$2(null,i__15958);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__16259 = seq__15953;
var G__16260 = chunk__15956;
var G__16261 = count__15957;
var G__16262 = (i__15958 + (1));
seq__15953 = G__16259;
chunk__15956 = G__16260;
count__15957 = G__16261;
i__15958 = G__16262;
continue;
} else {
var G__16263 = seq__15953;
var G__16264 = chunk__15956;
var G__16265 = count__15957;
var G__16266 = (i__15958 + (1));
seq__15953 = G__16263;
chunk__15956 = G__16264;
count__15957 = G__16265;
i__15958 = G__16266;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__15953);
if(temp__5804__auto__){
var seq__15953__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__15953__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__15953__$1);
var G__16268 = cljs.core.chunk_rest(seq__15953__$1);
var G__16269 = c__5568__auto__;
var G__16270 = cljs.core.count(c__5568__auto__);
var G__16271 = (0);
seq__15953 = G__16268;
chunk__15956 = G__16269;
count__15957 = G__16270;
i__15958 = G__16271;
continue;
} else {
var ext = cljs.core.first(seq__15953__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__16286 = cljs.core.next(seq__15953__$1);
var G__16287 = null;
var G__16288 = (0);
var G__16289 = (0);
seq__15953 = G__16286;
chunk__15956 = G__16287;
count__15957 = G__16288;
i__15958 = G__16289;
continue;
} else {
var G__16296 = cljs.core.next(seq__15953__$1);
var G__16297 = null;
var G__16298 = (0);
var G__16299 = (0);
seq__15953 = G__16296;
chunk__15956 = G__16297;
count__15957 = G__16298;
i__15958 = G__16299;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq15948){
var G__15949 = cljs.core.first(seq15948);
var seq15948__$1 = cljs.core.next(seq15948);
var G__15950 = cljs.core.first(seq15948__$1);
var seq15948__$2 = cljs.core.next(seq15948__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15949,G__15950,seq15948__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__15974,p__15975){
var map__15976 = p__15974;
var map__15976__$1 = cljs.core.__destructure_map(map__15976);
var runtime = map__15976__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15976__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__15977 = p__15975;
var map__15977__$1 = cljs.core.__destructure_map(map__15977);
var msg = map__15977__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15977__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__15985 = cljs.core.deref(state_ref);
var map__15985__$1 = cljs.core.__destructure_map(map__15985);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15985__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15985__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__15989){
var map__15990 = p__15989;
var map__15990__$1 = cljs.core.__destructure_map(map__15990);
var runtime = map__15990__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15990__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__15994,msg){
var map__15995 = p__15994;
var map__15995__$1 = cljs.core.__destructure_map(map__15995);
var runtime = map__15995__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__15995__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__16005,key,p__16006){
var map__16007 = p__16005;
var map__16007__$1 = cljs.core.__destructure_map(map__16007);
var state = map__16007__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16007__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__16008 = p__16006;
var map__16008__$1 = cljs.core.__destructure_map(map__16008);
var spec = map__16008__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16008__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__16018,key,spec){
var map__16019 = p__16018;
var map__16019__$1 = cljs.core.__destructure_map(map__16019);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16019__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__16021_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__16021_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__16023_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__16023_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__16024_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__16024_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__16025_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__16025_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__16026_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__16026_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__16094,key){
var map__16097 = p__16094;
var map__16097__$1 = cljs.core.__destructure_map(map__16097);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16097__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__16123,msg){
var map__16124 = p__16123;
var map__16124__$1 = cljs.core.__destructure_map(map__16124);
var runtime = map__16124__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16124__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__16136,p__16137){
var map__16138 = p__16136;
var map__16138__$1 = cljs.core.__destructure_map(map__16138);
var runtime = map__16138__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16138__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__16139 = p__16137;
var map__16139__$1 = cljs.core.__destructure_map(map__16139);
var msg = map__16139__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16139__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16139__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__16154 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__16156 = null;
var count__16157 = (0);
var i__16158 = (0);
while(true){
if((i__16158 < count__16157)){
var map__16175 = chunk__16156.cljs$core$IIndexed$_nth$arity$2(null,i__16158);
var map__16175__$1 = cljs.core.__destructure_map(map__16175);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16175__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__16373 = seq__16154;
var G__16374 = chunk__16156;
var G__16375 = count__16157;
var G__16376 = (i__16158 + (1));
seq__16154 = G__16373;
chunk__16156 = G__16374;
count__16157 = G__16375;
i__16158 = G__16376;
continue;
} else {
var G__16378 = seq__16154;
var G__16379 = chunk__16156;
var G__16381 = count__16157;
var G__16382 = (i__16158 + (1));
seq__16154 = G__16378;
chunk__16156 = G__16379;
count__16157 = G__16381;
i__16158 = G__16382;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__16154);
if(temp__5804__auto__){
var seq__16154__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__16154__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__16154__$1);
var G__16384 = cljs.core.chunk_rest(seq__16154__$1);
var G__16385 = c__5568__auto__;
var G__16386 = cljs.core.count(c__5568__auto__);
var G__16387 = (0);
seq__16154 = G__16384;
chunk__16156 = G__16385;
count__16157 = G__16386;
i__16158 = G__16387;
continue;
} else {
var map__16184 = cljs.core.first(seq__16154__$1);
var map__16184__$1 = cljs.core.__destructure_map(map__16184);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__16184__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__16394 = cljs.core.next(seq__16154__$1);
var G__16395 = null;
var G__16396 = (0);
var G__16397 = (0);
seq__16154 = G__16394;
chunk__16156 = G__16395;
count__16157 = G__16396;
i__16158 = G__16397;
continue;
} else {
var G__16398 = cljs.core.next(seq__16154__$1);
var G__16399 = null;
var G__16400 = (0);
var G__16401 = (0);
seq__16154 = G__16398;
chunk__16156 = G__16399;
count__16157 = G__16400;
i__16158 = G__16401;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
