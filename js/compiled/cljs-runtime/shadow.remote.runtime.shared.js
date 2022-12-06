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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__17609,res){
var map__17610 = p__17609;
var map__17610__$1 = cljs.core.__destructure_map(map__17610);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17610__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17610__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__17611 = res;
var G__17611__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17611,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__17611);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17611__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__17611__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__17616 = arguments.length;
switch (G__17616) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__17618,msg,handlers,timeout_after_ms){
var map__17619 = p__17618;
var map__17619__$1 = cljs.core.__destructure_map(map__17619);
var runtime = map__17619__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17619__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17845 = arguments.length;
var i__5770__auto___17846 = (0);
while(true){
if((i__5770__auto___17846 < len__5769__auto___17845)){
args__5775__auto__.push((arguments[i__5770__auto___17846]));

var G__17851 = (i__5770__auto___17846 + (1));
i__5770__auto___17846 = G__17851;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__17625,ev,args){
var map__17626 = p__17625;
var map__17626__$1 = cljs.core.__destructure_map(map__17626);
var runtime = map__17626__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17626__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__17627 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17630 = null;
var count__17631 = (0);
var i__17632 = (0);
while(true){
if((i__17632 < count__17631)){
var ext = chunk__17630.cljs$core$IIndexed$_nth$arity$2(null,i__17632);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17854 = seq__17627;
var G__17855 = chunk__17630;
var G__17856 = count__17631;
var G__17857 = (i__17632 + (1));
seq__17627 = G__17854;
chunk__17630 = G__17855;
count__17631 = G__17856;
i__17632 = G__17857;
continue;
} else {
var G__17858 = seq__17627;
var G__17859 = chunk__17630;
var G__17860 = count__17631;
var G__17861 = (i__17632 + (1));
seq__17627 = G__17858;
chunk__17630 = G__17859;
count__17631 = G__17860;
i__17632 = G__17861;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17627);
if(temp__5804__auto__){
var seq__17627__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17627__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17627__$1);
var G__17862 = cljs.core.chunk_rest(seq__17627__$1);
var G__17863 = c__5568__auto__;
var G__17864 = cljs.core.count(c__5568__auto__);
var G__17865 = (0);
seq__17627 = G__17862;
chunk__17630 = G__17863;
count__17631 = G__17864;
i__17632 = G__17865;
continue;
} else {
var ext = cljs.core.first(seq__17627__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__17867 = cljs.core.next(seq__17627__$1);
var G__17868 = null;
var G__17869 = (0);
var G__17870 = (0);
seq__17627 = G__17867;
chunk__17630 = G__17868;
count__17631 = G__17869;
i__17632 = G__17870;
continue;
} else {
var G__17871 = cljs.core.next(seq__17627__$1);
var G__17872 = null;
var G__17873 = (0);
var G__17874 = (0);
seq__17627 = G__17871;
chunk__17630 = G__17872;
count__17631 = G__17873;
i__17632 = G__17874;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq17620){
var G__17621 = cljs.core.first(seq17620);
var seq17620__$1 = cljs.core.next(seq17620);
var G__17622 = cljs.core.first(seq17620__$1);
var seq17620__$2 = cljs.core.next(seq17620__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17621,G__17622,seq17620__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__17742,p__17743){
var map__17744 = p__17742;
var map__17744__$1 = cljs.core.__destructure_map(map__17744);
var runtime = map__17744__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17744__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17745 = p__17743;
var map__17745__$1 = cljs.core.__destructure_map(map__17745);
var msg = map__17745__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17745__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__17746 = cljs.core.deref(state_ref);
var map__17746__$1 = cljs.core.__destructure_map(map__17746);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17746__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17746__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__17749){
var map__17750 = p__17749;
var map__17750__$1 = cljs.core.__destructure_map(map__17750);
var runtime = map__17750__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17750__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__17752,msg){
var map__17753 = p__17752;
var map__17753__$1 = cljs.core.__destructure_map(map__17753);
var runtime = map__17753__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17753__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__17757,key,p__17758){
var map__17759 = p__17757;
var map__17759__$1 = cljs.core.__destructure_map(map__17759);
var state = map__17759__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17759__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__17760 = p__17758;
var map__17760__$1 = cljs.core.__destructure_map(map__17760);
var spec = map__17760__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17760__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__17763,key,spec){
var map__17764 = p__17763;
var map__17764__$1 = cljs.core.__destructure_map(map__17764);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17764__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__17768_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__17768_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__17770_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__17770_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__17771_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__17771_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__17772_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__17772_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__17774_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__17774_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__17794,key){
var map__17795 = p__17794;
var map__17795__$1 = cljs.core.__destructure_map(map__17795);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17795__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__17800,msg){
var map__17801 = p__17800;
var map__17801__$1 = cljs.core.__destructure_map(map__17801);
var runtime = map__17801__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17801__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__17808,p__17809){
var map__17810 = p__17808;
var map__17810__$1 = cljs.core.__destructure_map(map__17810);
var runtime = map__17810__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17810__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17811 = p__17809;
var map__17811__$1 = cljs.core.__destructure_map(map__17811);
var msg = map__17811__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17811__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17811__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__17817 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17819 = null;
var count__17820 = (0);
var i__17821 = (0);
while(true){
if((i__17821 < count__17820)){
var map__17832 = chunk__17819.cljs$core$IIndexed$_nth$arity$2(null,i__17821);
var map__17832__$1 = cljs.core.__destructure_map(map__17832);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17832__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17903 = seq__17817;
var G__17904 = chunk__17819;
var G__17905 = count__17820;
var G__17906 = (i__17821 + (1));
seq__17817 = G__17903;
chunk__17819 = G__17904;
count__17820 = G__17905;
i__17821 = G__17906;
continue;
} else {
var G__17907 = seq__17817;
var G__17908 = chunk__17819;
var G__17909 = count__17820;
var G__17910 = (i__17821 + (1));
seq__17817 = G__17907;
chunk__17819 = G__17908;
count__17820 = G__17909;
i__17821 = G__17910;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17817);
if(temp__5804__auto__){
var seq__17817__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17817__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17817__$1);
var G__17911 = cljs.core.chunk_rest(seq__17817__$1);
var G__17912 = c__5568__auto__;
var G__17913 = cljs.core.count(c__5568__auto__);
var G__17914 = (0);
seq__17817 = G__17911;
chunk__17819 = G__17912;
count__17820 = G__17913;
i__17821 = G__17914;
continue;
} else {
var map__17836 = cljs.core.first(seq__17817__$1);
var map__17836__$1 = cljs.core.__destructure_map(map__17836);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17836__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__17916 = cljs.core.next(seq__17817__$1);
var G__17917 = null;
var G__17918 = (0);
var G__17919 = (0);
seq__17817 = G__17916;
chunk__17819 = G__17917;
count__17820 = G__17918;
i__17821 = G__17919;
continue;
} else {
var G__17921 = cljs.core.next(seq__17817__$1);
var G__17922 = null;
var G__17923 = (0);
var G__17924 = (0);
seq__17817 = G__17921;
chunk__17819 = G__17922;
count__17820 = G__17923;
i__17821 = G__17924;
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
