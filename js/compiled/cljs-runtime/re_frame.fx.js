goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__24357 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__24358 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__24358);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___24439 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___24439)){
var new_db_24440 = temp__5804__auto___24439;
var fexpr__24359_24441 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24359_24441.cljs$core$IFn$_invoke$arity$1 ? fexpr__24359_24441.cljs$core$IFn$_invoke$arity$1(new_db_24440) : fexpr__24359_24441.call(null,new_db_24440));
} else {
}

var seq__24360 = cljs.core.seq(effects_without_db);
var chunk__24361 = null;
var count__24362 = (0);
var i__24363 = (0);
while(true){
if((i__24363 < count__24362)){
var vec__24373 = chunk__24361.cljs$core$IIndexed$_nth$arity$2(null,i__24363);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24373,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24373,(1),null);
var temp__5802__auto___24442 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24442)){
var effect_fn_24443 = temp__5802__auto___24442;
(effect_fn_24443.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24443.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24443.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24444 = seq__24360;
var G__24445 = chunk__24361;
var G__24446 = count__24362;
var G__24447 = (i__24363 + (1));
seq__24360 = G__24444;
chunk__24361 = G__24445;
count__24362 = G__24446;
i__24363 = G__24447;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24360);
if(temp__5804__auto__){
var seq__24360__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24360__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24360__$1);
var G__24448 = cljs.core.chunk_rest(seq__24360__$1);
var G__24449 = c__5568__auto__;
var G__24450 = cljs.core.count(c__5568__auto__);
var G__24451 = (0);
seq__24360 = G__24448;
chunk__24361 = G__24449;
count__24362 = G__24450;
i__24363 = G__24451;
continue;
} else {
var vec__24376 = cljs.core.first(seq__24360__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24376,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24376,(1),null);
var temp__5802__auto___24452 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24452)){
var effect_fn_24453 = temp__5802__auto___24452;
(effect_fn_24453.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24453.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24453.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24454 = cljs.core.next(seq__24360__$1);
var G__24455 = null;
var G__24456 = (0);
var G__24457 = (0);
seq__24360 = G__24454;
chunk__24361 = G__24455;
count__24362 = G__24456;
i__24363 = G__24457;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__23948__auto___24458 = re_frame.interop.now();
var duration__23949__auto___24459 = (end__23948__auto___24458 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__23949__auto___24459,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__23948__auto___24458);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__24357);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___24460 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___24460)){
var new_db_24461 = temp__5804__auto___24460;
var fexpr__24380_24462 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__24380_24462.cljs$core$IFn$_invoke$arity$1 ? fexpr__24380_24462.cljs$core$IFn$_invoke$arity$1(new_db_24461) : fexpr__24380_24462.call(null,new_db_24461));
} else {
}

var seq__24381 = cljs.core.seq(effects_without_db);
var chunk__24382 = null;
var count__24383 = (0);
var i__24384 = (0);
while(true){
if((i__24384 < count__24383)){
var vec__24399 = chunk__24382.cljs$core$IIndexed$_nth$arity$2(null,i__24384);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24399,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24399,(1),null);
var temp__5802__auto___24463 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24463)){
var effect_fn_24464 = temp__5802__auto___24463;
(effect_fn_24464.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24464.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24464.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24465 = seq__24381;
var G__24466 = chunk__24382;
var G__24467 = count__24383;
var G__24468 = (i__24384 + (1));
seq__24381 = G__24465;
chunk__24382 = G__24466;
count__24383 = G__24467;
i__24384 = G__24468;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24381);
if(temp__5804__auto__){
var seq__24381__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24381__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24381__$1);
var G__24469 = cljs.core.chunk_rest(seq__24381__$1);
var G__24470 = c__5568__auto__;
var G__24471 = cljs.core.count(c__5568__auto__);
var G__24472 = (0);
seq__24381 = G__24469;
chunk__24382 = G__24470;
count__24383 = G__24471;
i__24384 = G__24472;
continue;
} else {
var vec__24406 = cljs.core.first(seq__24381__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24406,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24406,(1),null);
var temp__5802__auto___24473 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24473)){
var effect_fn_24474 = temp__5802__auto___24473;
(effect_fn_24474.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24474.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24474.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__24475 = cljs.core.next(seq__24381__$1);
var G__24476 = null;
var G__24477 = (0);
var G__24478 = (0);
seq__24381 = G__24475;
chunk__24382 = G__24476;
count__24383 = G__24477;
i__24384 = G__24478;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__24409){
var map__24410 = p__24409;
var map__24410__$1 = cljs.core.__destructure_map(map__24410);
var effect = map__24410__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24410__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24410__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__24411 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24412 = null;
var count__24413 = (0);
var i__24414 = (0);
while(true){
if((i__24414 < count__24413)){
var effect = chunk__24412.cljs$core$IIndexed$_nth$arity$2(null,i__24414);
re_frame.fx.dispatch_later(effect);


var G__24479 = seq__24411;
var G__24480 = chunk__24412;
var G__24481 = count__24413;
var G__24482 = (i__24414 + (1));
seq__24411 = G__24479;
chunk__24412 = G__24480;
count__24413 = G__24481;
i__24414 = G__24482;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24411);
if(temp__5804__auto__){
var seq__24411__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24411__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24411__$1);
var G__24483 = cljs.core.chunk_rest(seq__24411__$1);
var G__24484 = c__5568__auto__;
var G__24485 = cljs.core.count(c__5568__auto__);
var G__24486 = (0);
seq__24411 = G__24483;
chunk__24412 = G__24484;
count__24413 = G__24485;
i__24414 = G__24486;
continue;
} else {
var effect = cljs.core.first(seq__24411__$1);
re_frame.fx.dispatch_later(effect);


var G__24487 = cljs.core.next(seq__24411__$1);
var G__24488 = null;
var G__24489 = (0);
var G__24490 = (0);
seq__24411 = G__24487;
chunk__24412 = G__24488;
count__24413 = G__24489;
i__24414 = G__24490;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__24415 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__24416 = null;
var count__24417 = (0);
var i__24418 = (0);
while(true){
if((i__24418 < count__24417)){
var vec__24425 = chunk__24416.cljs$core$IIndexed$_nth$arity$2(null,i__24418);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24425,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24425,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___24491 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24491)){
var effect_fn_24492 = temp__5802__auto___24491;
(effect_fn_24492.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24492.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24492.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24493 = seq__24415;
var G__24494 = chunk__24416;
var G__24495 = count__24417;
var G__24496 = (i__24418 + (1));
seq__24415 = G__24493;
chunk__24416 = G__24494;
count__24417 = G__24495;
i__24418 = G__24496;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24415);
if(temp__5804__auto__){
var seq__24415__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24415__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24415__$1);
var G__24497 = cljs.core.chunk_rest(seq__24415__$1);
var G__24498 = c__5568__auto__;
var G__24499 = cljs.core.count(c__5568__auto__);
var G__24500 = (0);
seq__24415 = G__24497;
chunk__24416 = G__24498;
count__24417 = G__24499;
i__24418 = G__24500;
continue;
} else {
var vec__24428 = cljs.core.first(seq__24415__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24428,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24428,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___24501 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___24501)){
var effect_fn_24502 = temp__5802__auto___24501;
(effect_fn_24502.cljs$core$IFn$_invoke$arity$1 ? effect_fn_24502.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_24502.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__24503 = cljs.core.next(seq__24415__$1);
var G__24504 = null;
var G__24505 = (0);
var G__24506 = (0);
seq__24415 = G__24503;
chunk__24416 = G__24504;
count__24417 = G__24505;
i__24418 = G__24506;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__24431 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__24432 = null;
var count__24433 = (0);
var i__24434 = (0);
while(true){
if((i__24434 < count__24433)){
var event = chunk__24432.cljs$core$IIndexed$_nth$arity$2(null,i__24434);
re_frame.router.dispatch(event);


var G__24509 = seq__24431;
var G__24510 = chunk__24432;
var G__24511 = count__24433;
var G__24512 = (i__24434 + (1));
seq__24431 = G__24509;
chunk__24432 = G__24510;
count__24433 = G__24511;
i__24434 = G__24512;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24431);
if(temp__5804__auto__){
var seq__24431__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24431__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24431__$1);
var G__24513 = cljs.core.chunk_rest(seq__24431__$1);
var G__24514 = c__5568__auto__;
var G__24515 = cljs.core.count(c__5568__auto__);
var G__24516 = (0);
seq__24431 = G__24513;
chunk__24432 = G__24514;
count__24433 = G__24515;
i__24434 = G__24516;
continue;
} else {
var event = cljs.core.first(seq__24431__$1);
re_frame.router.dispatch(event);


var G__24517 = cljs.core.next(seq__24431__$1);
var G__24518 = null;
var G__24519 = (0);
var G__24520 = (0);
seq__24431 = G__24517;
chunk__24432 = G__24518;
count__24433 = G__24519;
i__24434 = G__24520;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__24435 = cljs.core.seq(value);
var chunk__24436 = null;
var count__24437 = (0);
var i__24438 = (0);
while(true){
if((i__24438 < count__24437)){
var event = chunk__24436.cljs$core$IIndexed$_nth$arity$2(null,i__24438);
clear_event(event);


var G__24521 = seq__24435;
var G__24522 = chunk__24436;
var G__24523 = count__24437;
var G__24524 = (i__24438 + (1));
seq__24435 = G__24521;
chunk__24436 = G__24522;
count__24437 = G__24523;
i__24438 = G__24524;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24435);
if(temp__5804__auto__){
var seq__24435__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24435__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24435__$1);
var G__24525 = cljs.core.chunk_rest(seq__24435__$1);
var G__24526 = c__5568__auto__;
var G__24527 = cljs.core.count(c__5568__auto__);
var G__24528 = (0);
seq__24435 = G__24525;
chunk__24436 = G__24526;
count__24437 = G__24527;
i__24438 = G__24528;
continue;
} else {
var event = cljs.core.first(seq__24435__$1);
clear_event(event);


var G__24529 = cljs.core.next(seq__24435__$1);
var G__24530 = null;
var G__24531 = (0);
var G__24532 = (0);
seq__24435 = G__24529;
chunk__24436 = G__24530;
count__24437 = G__24531;
i__24438 = G__24532;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
