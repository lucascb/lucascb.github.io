goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__21514,p__21516){
var map__21517 = p__21514;
var map__21517__$1 = cljs.core.__destructure_map(map__21517);
var svc = map__21517__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21517__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21517__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21517__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__21518 = p__21516;
var map__21518__$1 = cljs.core.__destructure_map(map__21518);
var msg = map__21518__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21518__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21518__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21518__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21518__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__21533,p__21534){
var map__21535 = p__21533;
var map__21535__$1 = cljs.core.__destructure_map(map__21535);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21535__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__21536 = p__21534;
var map__21536__$1 = cljs.core.__destructure_map(map__21536);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21536__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__21539,p__21540){
var map__21541 = p__21539;
var map__21541__$1 = cljs.core.__destructure_map(map__21541);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21541__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21541__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__21542 = p__21540;
var map__21542__$1 = cljs.core.__destructure_map(map__21542);
var msg = map__21542__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__21542__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__21545,tid){
var map__21547 = p__21545;
var map__21547__$1 = cljs.core.__destructure_map(map__21547);
var svc = map__21547__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21547__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__21558 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__21559 = null;
var count__21560 = (0);
var i__21561 = (0);
while(true){
if((i__21561 < count__21560)){
var vec__21591 = chunk__21559.cljs$core$IIndexed$_nth$arity$2(null,i__21561);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21591,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21591,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__21605 = seq__21558;
var G__21606 = chunk__21559;
var G__21607 = count__21560;
var G__21608 = (i__21561 + (1));
seq__21558 = G__21605;
chunk__21559 = G__21606;
count__21560 = G__21607;
i__21561 = G__21608;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21558);
if(temp__5804__auto__){
var seq__21558__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21558__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__21558__$1);
var G__21609 = cljs.core.chunk_rest(seq__21558__$1);
var G__21610 = c__5568__auto__;
var G__21611 = cljs.core.count(c__5568__auto__);
var G__21612 = (0);
seq__21558 = G__21609;
chunk__21559 = G__21610;
count__21560 = G__21611;
i__21561 = G__21612;
continue;
} else {
var vec__21594 = cljs.core.first(seq__21558__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21594,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21594,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__21613 = cljs.core.next(seq__21558__$1);
var G__21614 = null;
var G__21615 = (0);
var G__21616 = (0);
seq__21558 = G__21613;
chunk__21559 = G__21614;
count__21560 = G__21615;
i__21561 = G__21616;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__21553_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__21553_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__21554_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__21554_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__21555_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__21555_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__21556_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__21556_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__21597){
var map__21598 = p__21597;
var map__21598__$1 = cljs.core.__destructure_map(map__21598);
var svc = map__21598__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21598__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21598__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
