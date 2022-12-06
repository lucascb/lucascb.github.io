goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__17543 = arguments.length;
switch (G__17543) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17545 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17545 = (function (f,blockable,meta17546){
this.f = f;
this.blockable = blockable;
this.meta17546 = meta17546;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17547,meta17546__$1){
var self__ = this;
var _17547__$1 = this;
return (new cljs.core.async.t_cljs$core$async17545(self__.f,self__.blockable,meta17546__$1));
}));

(cljs.core.async.t_cljs$core$async17545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17547){
var self__ = this;
var _17547__$1 = this;
return self__.meta17546;
}));

(cljs.core.async.t_cljs$core$async17545.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17545.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17545.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async17545.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async17545.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta17546","meta17546",-1457451191,null)], null);
}));

(cljs.core.async.t_cljs$core$async17545.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17545.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17545");

(cljs.core.async.t_cljs$core$async17545.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17545");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17545.
 */
cljs.core.async.__GT_t_cljs$core$async17545 = (function cljs$core$async$__GT_t_cljs$core$async17545(f__$1,blockable__$1,meta17546){
return (new cljs.core.async.t_cljs$core$async17545(f__$1,blockable__$1,meta17546));
});

}

return (new cljs.core.async.t_cljs$core$async17545(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__17568 = arguments.length;
switch (G__17568) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__17577 = arguments.length;
switch (G__17577) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__17594 = arguments.length;
switch (G__17594) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_19829 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19829) : fn1.call(null,val_19829));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_19829) : fn1.call(null,val_19829));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__17605 = arguments.length;
switch (G__17605) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___19833 = n;
var x_19834 = (0);
while(true){
if((x_19834 < n__5636__auto___19833)){
(a[x_19834] = x_19834);

var G__19835 = (x_19834 + (1));
x_19834 = G__19835;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17606 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17606 = (function (flag,meta17607){
this.flag = flag;
this.meta17607 = meta17607;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17608,meta17607__$1){
var self__ = this;
var _17608__$1 = this;
return (new cljs.core.async.t_cljs$core$async17606(self__.flag,meta17607__$1));
}));

(cljs.core.async.t_cljs$core$async17606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17608){
var self__ = this;
var _17608__$1 = this;
return self__.meta17607;
}));

(cljs.core.async.t_cljs$core$async17606.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17606.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17606.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17606.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async17606.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta17607","meta17607",-615129157,null)], null);
}));

(cljs.core.async.t_cljs$core$async17606.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17606.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17606");

(cljs.core.async.t_cljs$core$async17606.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17606");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17606.
 */
cljs.core.async.__GT_t_cljs$core$async17606 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async17606(flag__$1,meta17607){
return (new cljs.core.async.t_cljs$core$async17606(flag__$1,meta17607));
});

}

return (new cljs.core.async.t_cljs$core$async17606(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17613 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17613 = (function (flag,cb,meta17614){
this.flag = flag;
this.cb = cb;
this.meta17614 = meta17614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17615,meta17614__$1){
var self__ = this;
var _17615__$1 = this;
return (new cljs.core.async.t_cljs$core$async17613(self__.flag,self__.cb,meta17614__$1));
}));

(cljs.core.async.t_cljs$core$async17613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17615){
var self__ = this;
var _17615__$1 = this;
return self__.meta17614;
}));

(cljs.core.async.t_cljs$core$async17613.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17613.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async17613.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17613.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async17613.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta17614","meta17614",1104402679,null)], null);
}));

(cljs.core.async.t_cljs$core$async17613.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17613.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17613");

(cljs.core.async.t_cljs$core$async17613.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17613");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17613.
 */
cljs.core.async.__GT_t_cljs$core$async17613 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async17613(flag__$1,cb__$1,meta17614){
return (new cljs.core.async.t_cljs$core$async17613(flag__$1,cb__$1,meta17614));
});

}

return (new cljs.core.async.t_cljs$core$async17613(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17623_SHARP_){
var G__17642 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17623_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17642) : fret.call(null,G__17642));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__17624_SHARP_){
var G__17654 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__17624_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__17654) : fret.call(null,G__17654));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__19843 = (i + (1));
i = G__19843;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19847 = arguments.length;
var i__5770__auto___19848 = (0);
while(true){
if((i__5770__auto___19848 < len__5769__auto___19847)){
args__5775__auto__.push((arguments[i__5770__auto___19848]));

var G__19849 = (i__5770__auto___19848 + (1));
i__5770__auto___19848 = G__19849;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__17747){
var map__17748 = p__17747;
var map__17748__$1 = cljs.core.__destructure_map(map__17748);
var opts = map__17748__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq17740){
var G__17741 = cljs.core.first(seq17740);
var seq17740__$1 = cljs.core.next(seq17740);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17741,seq17740__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__17755 = arguments.length;
switch (G__17755) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__17451__auto___19860 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17452__auto__ = (function (){var switch__17259__auto__ = (function (state_17792){
var state_val_17793 = (state_17792[(1)]);
if((state_val_17793 === (7))){
var inst_17788 = (state_17792[(2)]);
var state_17792__$1 = state_17792;
var statearr_17797_19863 = state_17792__$1;
(statearr_17797_19863[(2)] = inst_17788);

(statearr_17797_19863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17793 === (1))){
var state_17792__$1 = state_17792;
var statearr_17798_19866 = state_17792__$1;
(statearr_17798_19866[(2)] = null);

(statearr_17798_19866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17793 === (4))){
var inst_17766 = (state_17792[(7)]);
var inst_17766__$1 = (state_17792[(2)]);
var inst_17767 = (inst_17766__$1 == null);
var state_17792__$1 = (function (){var statearr_17803 = state_17792;
(statearr_17803[(7)] = inst_17766__$1);

return statearr_17803;
})();
if(cljs.core.truth_(inst_17767)){
var statearr_17804_19867 = state_17792__$1;
(statearr_17804_19867[(1)] = (5));

} else {
var statearr_17805_19868 = state_17792__$1;
(statearr_17805_19868[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17793 === (13))){
var state_17792__$1 = state_17792;
var statearr_17807_19869 = state_17792__$1;
(statearr_17807_19869[(2)] = null);

(statearr_17807_19869[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17793 === (6))){
var inst_17766 = (state_17792[(7)]);
var state_17792__$1 = state_17792;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17792__$1,(11),to,inst_17766);
} else {
if((state_val_17793 === (3))){
var inst_17790 = (state_17792[(2)]);
var state_17792__$1 = state_17792;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17792__$1,inst_17790);
} else {
if((state_val_17793 === (12))){
var state_17792__$1 = state_17792;
var statearr_17813_19877 = state_17792__$1;
(statearr_17813_19877[(2)] = null);

(statearr_17813_19877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17793 === (2))){
var state_17792__$1 = state_17792;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17792__$1,(4),from);
} else {
if((state_val_17793 === (11))){
var inst_17781 = (state_17792[(2)]);
var state_17792__$1 = state_17792;
if(cljs.core.truth_(inst_17781)){
var statearr_17814_19878 = state_17792__$1;
(statearr_17814_19878[(1)] = (12));

} else {
var statearr_17815_19879 = state_17792__$1;
(statearr_17815_19879[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17793 === (9))){
var state_17792__$1 = state_17792;
var statearr_17816_19880 = state_17792__$1;
(statearr_17816_19880[(2)] = null);

(statearr_17816_19880[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17793 === (5))){
var state_17792__$1 = state_17792;
if(cljs.core.truth_(close_QMARK_)){
var statearr_17823_19881 = state_17792__$1;
(statearr_17823_19881[(1)] = (8));

} else {
var statearr_17824_19882 = state_17792__$1;
(statearr_17824_19882[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17793 === (14))){
var inst_17786 = (state_17792[(2)]);
var state_17792__$1 = state_17792;
var statearr_17826_19883 = state_17792__$1;
(statearr_17826_19883[(2)] = inst_17786);

(statearr_17826_19883[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17793 === (10))){
var inst_17778 = (state_17792[(2)]);
var state_17792__$1 = state_17792;
var statearr_17828_19884 = state_17792__$1;
(statearr_17828_19884[(2)] = inst_17778);

(statearr_17828_19884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17793 === (8))){
var inst_17775 = cljs.core.async.close_BANG_(to);
var state_17792__$1 = state_17792;
var statearr_17829_19886 = state_17792__$1;
(statearr_17829_19886[(2)] = inst_17775);

(statearr_17829_19886[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17260__auto__ = null;
var cljs$core$async$state_machine__17260__auto____0 = (function (){
var statearr_17831 = [null,null,null,null,null,null,null,null];
(statearr_17831[(0)] = cljs$core$async$state_machine__17260__auto__);

(statearr_17831[(1)] = (1));

return statearr_17831;
});
var cljs$core$async$state_machine__17260__auto____1 = (function (state_17792){
while(true){
var ret_value__17261__auto__ = (function (){try{while(true){
var result__17262__auto__ = switch__17259__auto__(state_17792);
if(cljs.core.keyword_identical_QMARK_(result__17262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17262__auto__;
}
break;
}
}catch (e17833){var ex__17263__auto__ = e17833;
var statearr_17834_19887 = state_17792;
(statearr_17834_19887[(2)] = ex__17263__auto__);


if(cljs.core.seq((state_17792[(4)]))){
var statearr_17835_19888 = state_17792;
(statearr_17835_19888[(1)] = cljs.core.first((state_17792[(4)])));

} else {
throw ex__17263__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19889 = state_17792;
state_17792 = G__19889;
continue;
} else {
return ret_value__17261__auto__;
}
break;
}
});
cljs$core$async$state_machine__17260__auto__ = function(state_17792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17260__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17260__auto____1.call(this,state_17792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17260__auto____0;
cljs$core$async$state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17260__auto____1;
return cljs$core$async$state_machine__17260__auto__;
})()
})();
var state__17453__auto__ = (function (){var statearr_17837 = f__17452__auto__();
(statearr_17837[(6)] = c__17451__auto___19860);

return statearr_17837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17453__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__17841){
var vec__17842 = p__17841;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17842,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17842,(1),null);
var job = vec__17842;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__17451__auto___19891 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17452__auto__ = (function (){var switch__17259__auto__ = (function (state_17852){
var state_val_17853 = (state_17852[(1)]);
if((state_val_17853 === (1))){
var state_17852__$1 = state_17852;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17852__$1,(2),res,v);
} else {
if((state_val_17853 === (2))){
var inst_17848 = (state_17852[(2)]);
var inst_17849 = cljs.core.async.close_BANG_(res);
var state_17852__$1 = (function (){var statearr_17866 = state_17852;
(statearr_17866[(7)] = inst_17848);

return statearr_17866;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17852__$1,inst_17849);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17260__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17260__auto____0 = (function (){
var statearr_17876 = [null,null,null,null,null,null,null,null];
(statearr_17876[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17260__auto__);

(statearr_17876[(1)] = (1));

return statearr_17876;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17260__auto____1 = (function (state_17852){
while(true){
var ret_value__17261__auto__ = (function (){try{while(true){
var result__17262__auto__ = switch__17259__auto__(state_17852);
if(cljs.core.keyword_identical_QMARK_(result__17262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17262__auto__;
}
break;
}
}catch (e17877){var ex__17263__auto__ = e17877;
var statearr_17878_19895 = state_17852;
(statearr_17878_19895[(2)] = ex__17263__auto__);


if(cljs.core.seq((state_17852[(4)]))){
var statearr_17879_19899 = state_17852;
(statearr_17879_19899[(1)] = cljs.core.first((state_17852[(4)])));

} else {
throw ex__17263__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19901 = state_17852;
state_17852 = G__19901;
continue;
} else {
return ret_value__17261__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17260__auto__ = function(state_17852){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17260__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17260__auto____1.call(this,state_17852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17260__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17260__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17260__auto__;
})()
})();
var state__17453__auto__ = (function (){var statearr_17880 = f__17452__auto__();
(statearr_17880[(6)] = c__17451__auto___19891);

return statearr_17880;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17453__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__17882){
var vec__17883 = p__17882;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17883,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17883,(1),null);
var job = vec__17883;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___19904 = n;
var __19905 = (0);
while(true){
if((__19905 < n__5636__auto___19904)){
var G__17886_19906 = type;
var G__17886_19907__$1 = (((G__17886_19906 instanceof cljs.core.Keyword))?G__17886_19906.fqn:null);
switch (G__17886_19907__$1) {
case "compute":
var c__17451__auto___19909 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19905,c__17451__auto___19909,G__17886_19906,G__17886_19907__$1,n__5636__auto___19904,jobs,results,process__$1,async){
return (function (){
var f__17452__auto__ = (function (){var switch__17259__auto__ = ((function (__19905,c__17451__auto___19909,G__17886_19906,G__17886_19907__$1,n__5636__auto___19904,jobs,results,process__$1,async){
return (function (state_17899){
var state_val_17900 = (state_17899[(1)]);
if((state_val_17900 === (1))){
var state_17899__$1 = state_17899;
var statearr_17902_19910 = state_17899__$1;
(statearr_17902_19910[(2)] = null);

(statearr_17902_19910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (2))){
var state_17899__$1 = state_17899;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17899__$1,(4),jobs);
} else {
if((state_val_17900 === (3))){
var inst_17897 = (state_17899[(2)]);
var state_17899__$1 = state_17899;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17899__$1,inst_17897);
} else {
if((state_val_17900 === (4))){
var inst_17889 = (state_17899[(2)]);
var inst_17890 = process__$1(inst_17889);
var state_17899__$1 = state_17899;
if(cljs.core.truth_(inst_17890)){
var statearr_17915_19912 = state_17899__$1;
(statearr_17915_19912[(1)] = (5));

} else {
var statearr_17920_19913 = state_17899__$1;
(statearr_17920_19913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (5))){
var state_17899__$1 = state_17899;
var statearr_17925_19916 = state_17899__$1;
(statearr_17925_19916[(2)] = null);

(statearr_17925_19916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (6))){
var state_17899__$1 = state_17899;
var statearr_17926_19917 = state_17899__$1;
(statearr_17926_19917[(2)] = null);

(statearr_17926_19917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17900 === (7))){
var inst_17895 = (state_17899[(2)]);
var state_17899__$1 = state_17899;
var statearr_17928_19918 = state_17899__$1;
(statearr_17928_19918[(2)] = inst_17895);

(statearr_17928_19918[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19905,c__17451__auto___19909,G__17886_19906,G__17886_19907__$1,n__5636__auto___19904,jobs,results,process__$1,async))
;
return ((function (__19905,switch__17259__auto__,c__17451__auto___19909,G__17886_19906,G__17886_19907__$1,n__5636__auto___19904,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17260__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17260__auto____0 = (function (){
var statearr_17929 = [null,null,null,null,null,null,null];
(statearr_17929[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17260__auto__);

(statearr_17929[(1)] = (1));

return statearr_17929;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17260__auto____1 = (function (state_17899){
while(true){
var ret_value__17261__auto__ = (function (){try{while(true){
var result__17262__auto__ = switch__17259__auto__(state_17899);
if(cljs.core.keyword_identical_QMARK_(result__17262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17262__auto__;
}
break;
}
}catch (e17930){var ex__17263__auto__ = e17930;
var statearr_17931_19922 = state_17899;
(statearr_17931_19922[(2)] = ex__17263__auto__);


if(cljs.core.seq((state_17899[(4)]))){
var statearr_17932_19923 = state_17899;
(statearr_17932_19923[(1)] = cljs.core.first((state_17899[(4)])));

} else {
throw ex__17263__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19924 = state_17899;
state_17899 = G__19924;
continue;
} else {
return ret_value__17261__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17260__auto__ = function(state_17899){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17260__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17260__auto____1.call(this,state_17899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17260__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17260__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17260__auto__;
})()
;})(__19905,switch__17259__auto__,c__17451__auto___19909,G__17886_19906,G__17886_19907__$1,n__5636__auto___19904,jobs,results,process__$1,async))
})();
var state__17453__auto__ = (function (){var statearr_17933 = f__17452__auto__();
(statearr_17933[(6)] = c__17451__auto___19909);

return statearr_17933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17453__auto__);
});})(__19905,c__17451__auto___19909,G__17886_19906,G__17886_19907__$1,n__5636__auto___19904,jobs,results,process__$1,async))
);


break;
case "async":
var c__17451__auto___19926 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__19905,c__17451__auto___19926,G__17886_19906,G__17886_19907__$1,n__5636__auto___19904,jobs,results,process__$1,async){
return (function (){
var f__17452__auto__ = (function (){var switch__17259__auto__ = ((function (__19905,c__17451__auto___19926,G__17886_19906,G__17886_19907__$1,n__5636__auto___19904,jobs,results,process__$1,async){
return (function (state_17947){
var state_val_17948 = (state_17947[(1)]);
if((state_val_17948 === (1))){
var state_17947__$1 = state_17947;
var statearr_17949_19928 = state_17947__$1;
(statearr_17949_19928[(2)] = null);

(statearr_17949_19928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17948 === (2))){
var state_17947__$1 = state_17947;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17947__$1,(4),jobs);
} else {
if((state_val_17948 === (3))){
var inst_17945 = (state_17947[(2)]);
var state_17947__$1 = state_17947;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17947__$1,inst_17945);
} else {
if((state_val_17948 === (4))){
var inst_17937 = (state_17947[(2)]);
var inst_17938 = async(inst_17937);
var state_17947__$1 = state_17947;
if(cljs.core.truth_(inst_17938)){
var statearr_17951_19930 = state_17947__$1;
(statearr_17951_19930[(1)] = (5));

} else {
var statearr_17952_19931 = state_17947__$1;
(statearr_17952_19931[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17948 === (5))){
var state_17947__$1 = state_17947;
var statearr_17953_19932 = state_17947__$1;
(statearr_17953_19932[(2)] = null);

(statearr_17953_19932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17948 === (6))){
var state_17947__$1 = state_17947;
var statearr_17954_19933 = state_17947__$1;
(statearr_17954_19933[(2)] = null);

(statearr_17954_19933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17948 === (7))){
var inst_17943 = (state_17947[(2)]);
var state_17947__$1 = state_17947;
var statearr_17955_19934 = state_17947__$1;
(statearr_17955_19934[(2)] = inst_17943);

(statearr_17955_19934[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__19905,c__17451__auto___19926,G__17886_19906,G__17886_19907__$1,n__5636__auto___19904,jobs,results,process__$1,async))
;
return ((function (__19905,switch__17259__auto__,c__17451__auto___19926,G__17886_19906,G__17886_19907__$1,n__5636__auto___19904,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17260__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17260__auto____0 = (function (){
var statearr_17956 = [null,null,null,null,null,null,null];
(statearr_17956[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17260__auto__);

(statearr_17956[(1)] = (1));

return statearr_17956;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17260__auto____1 = (function (state_17947){
while(true){
var ret_value__17261__auto__ = (function (){try{while(true){
var result__17262__auto__ = switch__17259__auto__(state_17947);
if(cljs.core.keyword_identical_QMARK_(result__17262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17262__auto__;
}
break;
}
}catch (e17958){var ex__17263__auto__ = e17958;
var statearr_17959_19935 = state_17947;
(statearr_17959_19935[(2)] = ex__17263__auto__);


if(cljs.core.seq((state_17947[(4)]))){
var statearr_17960_19936 = state_17947;
(statearr_17960_19936[(1)] = cljs.core.first((state_17947[(4)])));

} else {
throw ex__17263__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19937 = state_17947;
state_17947 = G__19937;
continue;
} else {
return ret_value__17261__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17260__auto__ = function(state_17947){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17260__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17260__auto____1.call(this,state_17947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17260__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17260__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17260__auto__;
})()
;})(__19905,switch__17259__auto__,c__17451__auto___19926,G__17886_19906,G__17886_19907__$1,n__5636__auto___19904,jobs,results,process__$1,async))
})();
var state__17453__auto__ = (function (){var statearr_17961 = f__17452__auto__();
(statearr_17961[(6)] = c__17451__auto___19926);

return statearr_17961;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17453__auto__);
});})(__19905,c__17451__auto___19926,G__17886_19906,G__17886_19907__$1,n__5636__auto___19904,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17886_19907__$1)].join('')));

}

var G__19940 = (__19905 + (1));
__19905 = G__19940;
continue;
} else {
}
break;
}

var c__17451__auto___19941 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17452__auto__ = (function (){var switch__17259__auto__ = (function (state_17984){
var state_val_17985 = (state_17984[(1)]);
if((state_val_17985 === (7))){
var inst_17980 = (state_17984[(2)]);
var state_17984__$1 = state_17984;
var statearr_17987_19943 = state_17984__$1;
(statearr_17987_19943[(2)] = inst_17980);

(statearr_17987_19943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17985 === (1))){
var state_17984__$1 = state_17984;
var statearr_17988_19944 = state_17984__$1;
(statearr_17988_19944[(2)] = null);

(statearr_17988_19944[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17985 === (4))){
var inst_17965 = (state_17984[(7)]);
var inst_17965__$1 = (state_17984[(2)]);
var inst_17966 = (inst_17965__$1 == null);
var state_17984__$1 = (function (){var statearr_17989 = state_17984;
(statearr_17989[(7)] = inst_17965__$1);

return statearr_17989;
})();
if(cljs.core.truth_(inst_17966)){
var statearr_17990_19949 = state_17984__$1;
(statearr_17990_19949[(1)] = (5));

} else {
var statearr_17992_19953 = state_17984__$1;
(statearr_17992_19953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17985 === (6))){
var inst_17965 = (state_17984[(7)]);
var inst_17970 = (state_17984[(8)]);
var inst_17970__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_17971 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17972 = [inst_17965,inst_17970__$1];
var inst_17973 = (new cljs.core.PersistentVector(null,2,(5),inst_17971,inst_17972,null));
var state_17984__$1 = (function (){var statearr_17993 = state_17984;
(statearr_17993[(8)] = inst_17970__$1);

return statearr_17993;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17984__$1,(8),jobs,inst_17973);
} else {
if((state_val_17985 === (3))){
var inst_17982 = (state_17984[(2)]);
var state_17984__$1 = state_17984;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17984__$1,inst_17982);
} else {
if((state_val_17985 === (2))){
var state_17984__$1 = state_17984;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17984__$1,(4),from);
} else {
if((state_val_17985 === (9))){
var inst_17977 = (state_17984[(2)]);
var state_17984__$1 = (function (){var statearr_17994 = state_17984;
(statearr_17994[(9)] = inst_17977);

return statearr_17994;
})();
var statearr_17995_19954 = state_17984__$1;
(statearr_17995_19954[(2)] = null);

(statearr_17995_19954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17985 === (5))){
var inst_17968 = cljs.core.async.close_BANG_(jobs);
var state_17984__$1 = state_17984;
var statearr_17996_19955 = state_17984__$1;
(statearr_17996_19955[(2)] = inst_17968);

(statearr_17996_19955[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17985 === (8))){
var inst_17970 = (state_17984[(8)]);
var inst_17975 = (state_17984[(2)]);
var state_17984__$1 = (function (){var statearr_17997 = state_17984;
(statearr_17997[(10)] = inst_17975);

return statearr_17997;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17984__$1,(9),results,inst_17970);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17260__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17260__auto____0 = (function (){
var statearr_17999 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17999[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17260__auto__);

(statearr_17999[(1)] = (1));

return statearr_17999;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17260__auto____1 = (function (state_17984){
while(true){
var ret_value__17261__auto__ = (function (){try{while(true){
var result__17262__auto__ = switch__17259__auto__(state_17984);
if(cljs.core.keyword_identical_QMARK_(result__17262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17262__auto__;
}
break;
}
}catch (e18000){var ex__17263__auto__ = e18000;
var statearr_18001_19957 = state_17984;
(statearr_18001_19957[(2)] = ex__17263__auto__);


if(cljs.core.seq((state_17984[(4)]))){
var statearr_18002_19958 = state_17984;
(statearr_18002_19958[(1)] = cljs.core.first((state_17984[(4)])));

} else {
throw ex__17263__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19959 = state_17984;
state_17984 = G__19959;
continue;
} else {
return ret_value__17261__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17260__auto__ = function(state_17984){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17260__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17260__auto____1.call(this,state_17984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17260__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17260__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17260__auto__;
})()
})();
var state__17453__auto__ = (function (){var statearr_18003 = f__17452__auto__();
(statearr_18003[(6)] = c__17451__auto___19941);

return statearr_18003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17453__auto__);
}));


var c__17451__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17452__auto__ = (function (){var switch__17259__auto__ = (function (state_18042){
var state_val_18043 = (state_18042[(1)]);
if((state_val_18043 === (7))){
var inst_18038 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
var statearr_18044_19962 = state_18042__$1;
(statearr_18044_19962[(2)] = inst_18038);

(statearr_18044_19962[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (20))){
var state_18042__$1 = state_18042;
var statearr_18045_19963 = state_18042__$1;
(statearr_18045_19963[(2)] = null);

(statearr_18045_19963[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (1))){
var state_18042__$1 = state_18042;
var statearr_18046_19964 = state_18042__$1;
(statearr_18046_19964[(2)] = null);

(statearr_18046_19964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (4))){
var inst_18006 = (state_18042[(7)]);
var inst_18006__$1 = (state_18042[(2)]);
var inst_18007 = (inst_18006__$1 == null);
var state_18042__$1 = (function (){var statearr_18048 = state_18042;
(statearr_18048[(7)] = inst_18006__$1);

return statearr_18048;
})();
if(cljs.core.truth_(inst_18007)){
var statearr_18049_19967 = state_18042__$1;
(statearr_18049_19967[(1)] = (5));

} else {
var statearr_18050_19968 = state_18042__$1;
(statearr_18050_19968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (15))){
var inst_18020 = (state_18042[(8)]);
var state_18042__$1 = state_18042;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18042__$1,(18),to,inst_18020);
} else {
if((state_val_18043 === (21))){
var inst_18033 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
var statearr_18051_19969 = state_18042__$1;
(statearr_18051_19969[(2)] = inst_18033);

(statearr_18051_19969[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (13))){
var inst_18035 = (state_18042[(2)]);
var state_18042__$1 = (function (){var statearr_18052 = state_18042;
(statearr_18052[(9)] = inst_18035);

return statearr_18052;
})();
var statearr_18053_19970 = state_18042__$1;
(statearr_18053_19970[(2)] = null);

(statearr_18053_19970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (6))){
var inst_18006 = (state_18042[(7)]);
var state_18042__$1 = state_18042;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18042__$1,(11),inst_18006);
} else {
if((state_val_18043 === (17))){
var inst_18028 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
if(cljs.core.truth_(inst_18028)){
var statearr_18054_19971 = state_18042__$1;
(statearr_18054_19971[(1)] = (19));

} else {
var statearr_18055_19972 = state_18042__$1;
(statearr_18055_19972[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (3))){
var inst_18040 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18042__$1,inst_18040);
} else {
if((state_val_18043 === (12))){
var inst_18016 = (state_18042[(10)]);
var state_18042__$1 = state_18042;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18042__$1,(14),inst_18016);
} else {
if((state_val_18043 === (2))){
var state_18042__$1 = state_18042;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18042__$1,(4),results);
} else {
if((state_val_18043 === (19))){
var state_18042__$1 = state_18042;
var statearr_18057_19975 = state_18042__$1;
(statearr_18057_19975[(2)] = null);

(statearr_18057_19975[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (11))){
var inst_18016 = (state_18042[(2)]);
var state_18042__$1 = (function (){var statearr_18058 = state_18042;
(statearr_18058[(10)] = inst_18016);

return statearr_18058;
})();
var statearr_18059_19976 = state_18042__$1;
(statearr_18059_19976[(2)] = null);

(statearr_18059_19976[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (9))){
var state_18042__$1 = state_18042;
var statearr_18060_19977 = state_18042__$1;
(statearr_18060_19977[(2)] = null);

(statearr_18060_19977[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (5))){
var state_18042__$1 = state_18042;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18061_19978 = state_18042__$1;
(statearr_18061_19978[(1)] = (8));

} else {
var statearr_18062_19979 = state_18042__$1;
(statearr_18062_19979[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (14))){
var inst_18022 = (state_18042[(11)]);
var inst_18020 = (state_18042[(8)]);
var inst_18020__$1 = (state_18042[(2)]);
var inst_18021 = (inst_18020__$1 == null);
var inst_18022__$1 = cljs.core.not(inst_18021);
var state_18042__$1 = (function (){var statearr_18064 = state_18042;
(statearr_18064[(11)] = inst_18022__$1);

(statearr_18064[(8)] = inst_18020__$1);

return statearr_18064;
})();
if(inst_18022__$1){
var statearr_18065_19981 = state_18042__$1;
(statearr_18065_19981[(1)] = (15));

} else {
var statearr_18066_19982 = state_18042__$1;
(statearr_18066_19982[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (16))){
var inst_18022 = (state_18042[(11)]);
var state_18042__$1 = state_18042;
var statearr_18067_19984 = state_18042__$1;
(statearr_18067_19984[(2)] = inst_18022);

(statearr_18067_19984[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (10))){
var inst_18013 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
var statearr_18068_19985 = state_18042__$1;
(statearr_18068_19985[(2)] = inst_18013);

(statearr_18068_19985[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (18))){
var inst_18025 = (state_18042[(2)]);
var state_18042__$1 = state_18042;
var statearr_18069_19987 = state_18042__$1;
(statearr_18069_19987[(2)] = inst_18025);

(statearr_18069_19987[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18043 === (8))){
var inst_18010 = cljs.core.async.close_BANG_(to);
var state_18042__$1 = state_18042;
var statearr_18070_19988 = state_18042__$1;
(statearr_18070_19988[(2)] = inst_18010);

(statearr_18070_19988[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__17260__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__17260__auto____0 = (function (){
var statearr_18072 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18072[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__17260__auto__);

(statearr_18072[(1)] = (1));

return statearr_18072;
});
var cljs$core$async$pipeline_STAR__$_state_machine__17260__auto____1 = (function (state_18042){
while(true){
var ret_value__17261__auto__ = (function (){try{while(true){
var result__17262__auto__ = switch__17259__auto__(state_18042);
if(cljs.core.keyword_identical_QMARK_(result__17262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17262__auto__;
}
break;
}
}catch (e18073){var ex__17263__auto__ = e18073;
var statearr_18074_19989 = state_18042;
(statearr_18074_19989[(2)] = ex__17263__auto__);


if(cljs.core.seq((state_18042[(4)]))){
var statearr_18075_19990 = state_18042;
(statearr_18075_19990[(1)] = cljs.core.first((state_18042[(4)])));

} else {
throw ex__17263__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19992 = state_18042;
state_18042 = G__19992;
continue;
} else {
return ret_value__17261__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__17260__auto__ = function(state_18042){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__17260__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__17260__auto____1.call(this,state_18042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__17260__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__17260__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__17260__auto__;
})()
})();
var state__17453__auto__ = (function (){var statearr_18076 = f__17452__auto__();
(statearr_18076[(6)] = c__17451__auto__);

return statearr_18076;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17453__auto__);
}));

return c__17451__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__18078 = arguments.length;
switch (G__18078) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__18081 = arguments.length;
switch (G__18081) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__18084 = arguments.length;
switch (G__18084) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__17451__auto___19997 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17452__auto__ = (function (){var switch__17259__auto__ = (function (state_18111){
var state_val_18112 = (state_18111[(1)]);
if((state_val_18112 === (7))){
var inst_18107 = (state_18111[(2)]);
var state_18111__$1 = state_18111;
var statearr_18114_19998 = state_18111__$1;
(statearr_18114_19998[(2)] = inst_18107);

(statearr_18114_19998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18112 === (1))){
var state_18111__$1 = state_18111;
var statearr_18115_19999 = state_18111__$1;
(statearr_18115_19999[(2)] = null);

(statearr_18115_19999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18112 === (4))){
var inst_18088 = (state_18111[(7)]);
var inst_18088__$1 = (state_18111[(2)]);
var inst_18089 = (inst_18088__$1 == null);
var state_18111__$1 = (function (){var statearr_18116 = state_18111;
(statearr_18116[(7)] = inst_18088__$1);

return statearr_18116;
})();
if(cljs.core.truth_(inst_18089)){
var statearr_18117_20000 = state_18111__$1;
(statearr_18117_20000[(1)] = (5));

} else {
var statearr_18118_20001 = state_18111__$1;
(statearr_18118_20001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18112 === (13))){
var state_18111__$1 = state_18111;
var statearr_18119_20002 = state_18111__$1;
(statearr_18119_20002[(2)] = null);

(statearr_18119_20002[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18112 === (6))){
var inst_18088 = (state_18111[(7)]);
var inst_18094 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_18088) : p.call(null,inst_18088));
var state_18111__$1 = state_18111;
if(cljs.core.truth_(inst_18094)){
var statearr_18120_20004 = state_18111__$1;
(statearr_18120_20004[(1)] = (9));

} else {
var statearr_18121_20008 = state_18111__$1;
(statearr_18121_20008[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18112 === (3))){
var inst_18109 = (state_18111[(2)]);
var state_18111__$1 = state_18111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18111__$1,inst_18109);
} else {
if((state_val_18112 === (12))){
var state_18111__$1 = state_18111;
var statearr_18123_20009 = state_18111__$1;
(statearr_18123_20009[(2)] = null);

(statearr_18123_20009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18112 === (2))){
var state_18111__$1 = state_18111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18111__$1,(4),ch);
} else {
if((state_val_18112 === (11))){
var inst_18088 = (state_18111[(7)]);
var inst_18098 = (state_18111[(2)]);
var state_18111__$1 = state_18111;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18111__$1,(8),inst_18098,inst_18088);
} else {
if((state_val_18112 === (9))){
var state_18111__$1 = state_18111;
var statearr_18124_20010 = state_18111__$1;
(statearr_18124_20010[(2)] = tc);

(statearr_18124_20010[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18112 === (5))){
var inst_18091 = cljs.core.async.close_BANG_(tc);
var inst_18092 = cljs.core.async.close_BANG_(fc);
var state_18111__$1 = (function (){var statearr_18125 = state_18111;
(statearr_18125[(8)] = inst_18091);

return statearr_18125;
})();
var statearr_18126_20011 = state_18111__$1;
(statearr_18126_20011[(2)] = inst_18092);

(statearr_18126_20011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18112 === (14))){
var inst_18105 = (state_18111[(2)]);
var state_18111__$1 = state_18111;
var statearr_18127_20012 = state_18111__$1;
(statearr_18127_20012[(2)] = inst_18105);

(statearr_18127_20012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18112 === (10))){
var state_18111__$1 = state_18111;
var statearr_18129_20017 = state_18111__$1;
(statearr_18129_20017[(2)] = fc);

(statearr_18129_20017[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18112 === (8))){
var inst_18100 = (state_18111[(2)]);
var state_18111__$1 = state_18111;
if(cljs.core.truth_(inst_18100)){
var statearr_18130_20018 = state_18111__$1;
(statearr_18130_20018[(1)] = (12));

} else {
var statearr_18131_20019 = state_18111__$1;
(statearr_18131_20019[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17260__auto__ = null;
var cljs$core$async$state_machine__17260__auto____0 = (function (){
var statearr_18132 = [null,null,null,null,null,null,null,null,null];
(statearr_18132[(0)] = cljs$core$async$state_machine__17260__auto__);

(statearr_18132[(1)] = (1));

return statearr_18132;
});
var cljs$core$async$state_machine__17260__auto____1 = (function (state_18111){
while(true){
var ret_value__17261__auto__ = (function (){try{while(true){
var result__17262__auto__ = switch__17259__auto__(state_18111);
if(cljs.core.keyword_identical_QMARK_(result__17262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17262__auto__;
}
break;
}
}catch (e18133){var ex__17263__auto__ = e18133;
var statearr_18134_20020 = state_18111;
(statearr_18134_20020[(2)] = ex__17263__auto__);


if(cljs.core.seq((state_18111[(4)]))){
var statearr_18135_20021 = state_18111;
(statearr_18135_20021[(1)] = cljs.core.first((state_18111[(4)])));

} else {
throw ex__17263__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20022 = state_18111;
state_18111 = G__20022;
continue;
} else {
return ret_value__17261__auto__;
}
break;
}
});
cljs$core$async$state_machine__17260__auto__ = function(state_18111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17260__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17260__auto____1.call(this,state_18111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17260__auto____0;
cljs$core$async$state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17260__auto____1;
return cljs$core$async$state_machine__17260__auto__;
})()
})();
var state__17453__auto__ = (function (){var statearr_18137 = f__17452__auto__();
(statearr_18137[(6)] = c__17451__auto___19997);

return statearr_18137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17453__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__17451__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17452__auto__ = (function (){var switch__17259__auto__ = (function (state_18160){
var state_val_18161 = (state_18160[(1)]);
if((state_val_18161 === (7))){
var inst_18155 = (state_18160[(2)]);
var state_18160__$1 = state_18160;
var statearr_18162_20024 = state_18160__$1;
(statearr_18162_20024[(2)] = inst_18155);

(statearr_18162_20024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18161 === (1))){
var inst_18138 = init;
var inst_18139 = inst_18138;
var state_18160__$1 = (function (){var statearr_18163 = state_18160;
(statearr_18163[(7)] = inst_18139);

return statearr_18163;
})();
var statearr_18164_20025 = state_18160__$1;
(statearr_18164_20025[(2)] = null);

(statearr_18164_20025[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18161 === (4))){
var inst_18142 = (state_18160[(8)]);
var inst_18142__$1 = (state_18160[(2)]);
var inst_18143 = (inst_18142__$1 == null);
var state_18160__$1 = (function (){var statearr_18165 = state_18160;
(statearr_18165[(8)] = inst_18142__$1);

return statearr_18165;
})();
if(cljs.core.truth_(inst_18143)){
var statearr_18166_20026 = state_18160__$1;
(statearr_18166_20026[(1)] = (5));

} else {
var statearr_18167_20027 = state_18160__$1;
(statearr_18167_20027[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18161 === (6))){
var inst_18139 = (state_18160[(7)]);
var inst_18142 = (state_18160[(8)]);
var inst_18146 = (state_18160[(9)]);
var inst_18146__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_18139,inst_18142) : f.call(null,inst_18139,inst_18142));
var inst_18147 = cljs.core.reduced_QMARK_(inst_18146__$1);
var state_18160__$1 = (function (){var statearr_18169 = state_18160;
(statearr_18169[(9)] = inst_18146__$1);

return statearr_18169;
})();
if(inst_18147){
var statearr_18170_20034 = state_18160__$1;
(statearr_18170_20034[(1)] = (8));

} else {
var statearr_18171_20035 = state_18160__$1;
(statearr_18171_20035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18161 === (3))){
var inst_18157 = (state_18160[(2)]);
var state_18160__$1 = state_18160;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18160__$1,inst_18157);
} else {
if((state_val_18161 === (2))){
var state_18160__$1 = state_18160;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18160__$1,(4),ch);
} else {
if((state_val_18161 === (9))){
var inst_18146 = (state_18160[(9)]);
var inst_18139 = inst_18146;
var state_18160__$1 = (function (){var statearr_18172 = state_18160;
(statearr_18172[(7)] = inst_18139);

return statearr_18172;
})();
var statearr_18173_20041 = state_18160__$1;
(statearr_18173_20041[(2)] = null);

(statearr_18173_20041[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18161 === (5))){
var inst_18139 = (state_18160[(7)]);
var state_18160__$1 = state_18160;
var statearr_18174_20042 = state_18160__$1;
(statearr_18174_20042[(2)] = inst_18139);

(statearr_18174_20042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18161 === (10))){
var inst_18153 = (state_18160[(2)]);
var state_18160__$1 = state_18160;
var statearr_18176_20043 = state_18160__$1;
(statearr_18176_20043[(2)] = inst_18153);

(statearr_18176_20043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18161 === (8))){
var inst_18146 = (state_18160[(9)]);
var inst_18149 = cljs.core.deref(inst_18146);
var state_18160__$1 = state_18160;
var statearr_18177_20044 = state_18160__$1;
(statearr_18177_20044[(2)] = inst_18149);

(statearr_18177_20044[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__17260__auto__ = null;
var cljs$core$async$reduce_$_state_machine__17260__auto____0 = (function (){
var statearr_18178 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18178[(0)] = cljs$core$async$reduce_$_state_machine__17260__auto__);

(statearr_18178[(1)] = (1));

return statearr_18178;
});
var cljs$core$async$reduce_$_state_machine__17260__auto____1 = (function (state_18160){
while(true){
var ret_value__17261__auto__ = (function (){try{while(true){
var result__17262__auto__ = switch__17259__auto__(state_18160);
if(cljs.core.keyword_identical_QMARK_(result__17262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17262__auto__;
}
break;
}
}catch (e18179){var ex__17263__auto__ = e18179;
var statearr_18180_20049 = state_18160;
(statearr_18180_20049[(2)] = ex__17263__auto__);


if(cljs.core.seq((state_18160[(4)]))){
var statearr_18181_20050 = state_18160;
(statearr_18181_20050[(1)] = cljs.core.first((state_18160[(4)])));

} else {
throw ex__17263__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20051 = state_18160;
state_18160 = G__20051;
continue;
} else {
return ret_value__17261__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__17260__auto__ = function(state_18160){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__17260__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__17260__auto____1.call(this,state_18160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__17260__auto____0;
cljs$core$async$reduce_$_state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__17260__auto____1;
return cljs$core$async$reduce_$_state_machine__17260__auto__;
})()
})();
var state__17453__auto__ = (function (){var statearr_18182 = f__17452__auto__();
(statearr_18182[(6)] = c__17451__auto__);

return statearr_18182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17453__auto__);
}));

return c__17451__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__17451__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17452__auto__ = (function (){var switch__17259__auto__ = (function (state_18189){
var state_val_18190 = (state_18189[(1)]);
if((state_val_18190 === (1))){
var inst_18184 = cljs.core.async.reduce(f__$1,init,ch);
var state_18189__$1 = state_18189;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18189__$1,(2),inst_18184);
} else {
if((state_val_18190 === (2))){
var inst_18186 = (state_18189[(2)]);
var inst_18187 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_18186) : f__$1.call(null,inst_18186));
var state_18189__$1 = state_18189;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18189__$1,inst_18187);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__17260__auto__ = null;
var cljs$core$async$transduce_$_state_machine__17260__auto____0 = (function (){
var statearr_18192 = [null,null,null,null,null,null,null];
(statearr_18192[(0)] = cljs$core$async$transduce_$_state_machine__17260__auto__);

(statearr_18192[(1)] = (1));

return statearr_18192;
});
var cljs$core$async$transduce_$_state_machine__17260__auto____1 = (function (state_18189){
while(true){
var ret_value__17261__auto__ = (function (){try{while(true){
var result__17262__auto__ = switch__17259__auto__(state_18189);
if(cljs.core.keyword_identical_QMARK_(result__17262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17262__auto__;
}
break;
}
}catch (e18193){var ex__17263__auto__ = e18193;
var statearr_18194_20058 = state_18189;
(statearr_18194_20058[(2)] = ex__17263__auto__);


if(cljs.core.seq((state_18189[(4)]))){
var statearr_18195_20059 = state_18189;
(statearr_18195_20059[(1)] = cljs.core.first((state_18189[(4)])));

} else {
throw ex__17263__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20060 = state_18189;
state_18189 = G__20060;
continue;
} else {
return ret_value__17261__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__17260__auto__ = function(state_18189){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__17260__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__17260__auto____1.call(this,state_18189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__17260__auto____0;
cljs$core$async$transduce_$_state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__17260__auto____1;
return cljs$core$async$transduce_$_state_machine__17260__auto__;
})()
})();
var state__17453__auto__ = (function (){var statearr_18196 = f__17452__auto__();
(statearr_18196[(6)] = c__17451__auto__);

return statearr_18196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17453__auto__);
}));

return c__17451__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__18199 = arguments.length;
switch (G__18199) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__17451__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17452__auto__ = (function (){var switch__17259__auto__ = (function (state_18225){
var state_val_18226 = (state_18225[(1)]);
if((state_val_18226 === (7))){
var inst_18206 = (state_18225[(2)]);
var state_18225__$1 = state_18225;
var statearr_18227_20075 = state_18225__$1;
(statearr_18227_20075[(2)] = inst_18206);

(statearr_18227_20075[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18226 === (1))){
var inst_18200 = cljs.core.seq(coll);
var inst_18201 = inst_18200;
var state_18225__$1 = (function (){var statearr_18228 = state_18225;
(statearr_18228[(7)] = inst_18201);

return statearr_18228;
})();
var statearr_18229_20076 = state_18225__$1;
(statearr_18229_20076[(2)] = null);

(statearr_18229_20076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18226 === (4))){
var inst_18201 = (state_18225[(7)]);
var inst_18204 = cljs.core.first(inst_18201);
var state_18225__$1 = state_18225;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18225__$1,(7),ch,inst_18204);
} else {
if((state_val_18226 === (13))){
var inst_18219 = (state_18225[(2)]);
var state_18225__$1 = state_18225;
var statearr_18230_20080 = state_18225__$1;
(statearr_18230_20080[(2)] = inst_18219);

(statearr_18230_20080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18226 === (6))){
var inst_18209 = (state_18225[(2)]);
var state_18225__$1 = state_18225;
if(cljs.core.truth_(inst_18209)){
var statearr_18231_20081 = state_18225__$1;
(statearr_18231_20081[(1)] = (8));

} else {
var statearr_18233_20085 = state_18225__$1;
(statearr_18233_20085[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18226 === (3))){
var inst_18223 = (state_18225[(2)]);
var state_18225__$1 = state_18225;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18225__$1,inst_18223);
} else {
if((state_val_18226 === (12))){
var state_18225__$1 = state_18225;
var statearr_18234_20086 = state_18225__$1;
(statearr_18234_20086[(2)] = null);

(statearr_18234_20086[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18226 === (2))){
var inst_18201 = (state_18225[(7)]);
var state_18225__$1 = state_18225;
if(cljs.core.truth_(inst_18201)){
var statearr_18235_20087 = state_18225__$1;
(statearr_18235_20087[(1)] = (4));

} else {
var statearr_18236_20088 = state_18225__$1;
(statearr_18236_20088[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18226 === (11))){
var inst_18216 = cljs.core.async.close_BANG_(ch);
var state_18225__$1 = state_18225;
var statearr_18237_20090 = state_18225__$1;
(statearr_18237_20090[(2)] = inst_18216);

(statearr_18237_20090[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18226 === (9))){
var state_18225__$1 = state_18225;
if(cljs.core.truth_(close_QMARK_)){
var statearr_18238_20091 = state_18225__$1;
(statearr_18238_20091[(1)] = (11));

} else {
var statearr_18239_20095 = state_18225__$1;
(statearr_18239_20095[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18226 === (5))){
var inst_18201 = (state_18225[(7)]);
var state_18225__$1 = state_18225;
var statearr_18240_20096 = state_18225__$1;
(statearr_18240_20096[(2)] = inst_18201);

(statearr_18240_20096[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18226 === (10))){
var inst_18221 = (state_18225[(2)]);
var state_18225__$1 = state_18225;
var statearr_18242_20097 = state_18225__$1;
(statearr_18242_20097[(2)] = inst_18221);

(statearr_18242_20097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18226 === (8))){
var inst_18201 = (state_18225[(7)]);
var inst_18211 = cljs.core.next(inst_18201);
var inst_18201__$1 = inst_18211;
var state_18225__$1 = (function (){var statearr_18243 = state_18225;
(statearr_18243[(7)] = inst_18201__$1);

return statearr_18243;
})();
var statearr_18244_20099 = state_18225__$1;
(statearr_18244_20099[(2)] = null);

(statearr_18244_20099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17260__auto__ = null;
var cljs$core$async$state_machine__17260__auto____0 = (function (){
var statearr_18245 = [null,null,null,null,null,null,null,null];
(statearr_18245[(0)] = cljs$core$async$state_machine__17260__auto__);

(statearr_18245[(1)] = (1));

return statearr_18245;
});
var cljs$core$async$state_machine__17260__auto____1 = (function (state_18225){
while(true){
var ret_value__17261__auto__ = (function (){try{while(true){
var result__17262__auto__ = switch__17259__auto__(state_18225);
if(cljs.core.keyword_identical_QMARK_(result__17262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17262__auto__;
}
break;
}
}catch (e18246){var ex__17263__auto__ = e18246;
var statearr_18247_20104 = state_18225;
(statearr_18247_20104[(2)] = ex__17263__auto__);


if(cljs.core.seq((state_18225[(4)]))){
var statearr_18248_20108 = state_18225;
(statearr_18248_20108[(1)] = cljs.core.first((state_18225[(4)])));

} else {
throw ex__17263__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20109 = state_18225;
state_18225 = G__20109;
continue;
} else {
return ret_value__17261__auto__;
}
break;
}
});
cljs$core$async$state_machine__17260__auto__ = function(state_18225){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17260__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17260__auto____1.call(this,state_18225);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17260__auto____0;
cljs$core$async$state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17260__auto____1;
return cljs$core$async$state_machine__17260__auto__;
})()
})();
var state__17453__auto__ = (function (){var statearr_18250 = f__17452__auto__();
(statearr_18250[(6)] = c__17451__auto__);

return statearr_18250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17453__auto__);
}));

return c__17451__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__18252 = arguments.length;
switch (G__18252) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_20119 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_20119(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_20128 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_20128(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_20129 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_20129(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_20133 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_20133(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18259 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18259 = (function (ch,cs,meta18260){
this.ch = ch;
this.cs = cs;
this.meta18260 = meta18260;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18261,meta18260__$1){
var self__ = this;
var _18261__$1 = this;
return (new cljs.core.async.t_cljs$core$async18259(self__.ch,self__.cs,meta18260__$1));
}));

(cljs.core.async.t_cljs$core$async18259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18261){
var self__ = this;
var _18261__$1 = this;
return self__.meta18260;
}));

(cljs.core.async.t_cljs$core$async18259.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18259.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18259.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18259.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async18259.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async18259.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async18259.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta18260","meta18260",-8260099,null)], null);
}));

(cljs.core.async.t_cljs$core$async18259.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18259.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18259");

(cljs.core.async.t_cljs$core$async18259.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18259");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18259.
 */
cljs.core.async.__GT_t_cljs$core$async18259 = (function cljs$core$async$mult_$___GT_t_cljs$core$async18259(ch__$1,cs__$1,meta18260){
return (new cljs.core.async.t_cljs$core$async18259(ch__$1,cs__$1,meta18260));
});

}

return (new cljs.core.async.t_cljs$core$async18259(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__17451__auto___20142 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17452__auto__ = (function (){var switch__17259__auto__ = (function (state_18398){
var state_val_18399 = (state_18398[(1)]);
if((state_val_18399 === (7))){
var inst_18394 = (state_18398[(2)]);
var state_18398__$1 = state_18398;
var statearr_18400_20143 = state_18398__$1;
(statearr_18400_20143[(2)] = inst_18394);

(statearr_18400_20143[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (20))){
var inst_18297 = (state_18398[(7)]);
var inst_18309 = cljs.core.first(inst_18297);
var inst_18310 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18309,(0),null);
var inst_18311 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18309,(1),null);
var state_18398__$1 = (function (){var statearr_18401 = state_18398;
(statearr_18401[(8)] = inst_18310);

return statearr_18401;
})();
if(cljs.core.truth_(inst_18311)){
var statearr_18402_20144 = state_18398__$1;
(statearr_18402_20144[(1)] = (22));

} else {
var statearr_18403_20145 = state_18398__$1;
(statearr_18403_20145[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (27))){
var inst_18339 = (state_18398[(9)]);
var inst_18266 = (state_18398[(10)]);
var inst_18346 = (state_18398[(11)]);
var inst_18341 = (state_18398[(12)]);
var inst_18346__$1 = cljs.core._nth(inst_18339,inst_18341);
var inst_18347 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18346__$1,inst_18266,done);
var state_18398__$1 = (function (){var statearr_18404 = state_18398;
(statearr_18404[(11)] = inst_18346__$1);

return statearr_18404;
})();
if(cljs.core.truth_(inst_18347)){
var statearr_18405_20146 = state_18398__$1;
(statearr_18405_20146[(1)] = (30));

} else {
var statearr_18406_20147 = state_18398__$1;
(statearr_18406_20147[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (1))){
var state_18398__$1 = state_18398;
var statearr_18407_20148 = state_18398__$1;
(statearr_18407_20148[(2)] = null);

(statearr_18407_20148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (24))){
var inst_18297 = (state_18398[(7)]);
var inst_18316 = (state_18398[(2)]);
var inst_18317 = cljs.core.next(inst_18297);
var inst_18275 = inst_18317;
var inst_18276 = null;
var inst_18277 = (0);
var inst_18278 = (0);
var state_18398__$1 = (function (){var statearr_18410 = state_18398;
(statearr_18410[(13)] = inst_18276);

(statearr_18410[(14)] = inst_18278);

(statearr_18410[(15)] = inst_18277);

(statearr_18410[(16)] = inst_18275);

(statearr_18410[(17)] = inst_18316);

return statearr_18410;
})();
var statearr_18412_20149 = state_18398__$1;
(statearr_18412_20149[(2)] = null);

(statearr_18412_20149[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (39))){
var state_18398__$1 = state_18398;
var statearr_18418_20150 = state_18398__$1;
(statearr_18418_20150[(2)] = null);

(statearr_18418_20150[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (4))){
var inst_18266 = (state_18398[(10)]);
var inst_18266__$1 = (state_18398[(2)]);
var inst_18267 = (inst_18266__$1 == null);
var state_18398__$1 = (function (){var statearr_18423 = state_18398;
(statearr_18423[(10)] = inst_18266__$1);

return statearr_18423;
})();
if(cljs.core.truth_(inst_18267)){
var statearr_18424_20151 = state_18398__$1;
(statearr_18424_20151[(1)] = (5));

} else {
var statearr_18425_20152 = state_18398__$1;
(statearr_18425_20152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (15))){
var inst_18276 = (state_18398[(13)]);
var inst_18278 = (state_18398[(14)]);
var inst_18277 = (state_18398[(15)]);
var inst_18275 = (state_18398[(16)]);
var inst_18293 = (state_18398[(2)]);
var inst_18294 = (inst_18278 + (1));
var tmp18413 = inst_18276;
var tmp18414 = inst_18277;
var tmp18415 = inst_18275;
var inst_18275__$1 = tmp18415;
var inst_18276__$1 = tmp18413;
var inst_18277__$1 = tmp18414;
var inst_18278__$1 = inst_18294;
var state_18398__$1 = (function (){var statearr_18426 = state_18398;
(statearr_18426[(13)] = inst_18276__$1);

(statearr_18426[(14)] = inst_18278__$1);

(statearr_18426[(15)] = inst_18277__$1);

(statearr_18426[(18)] = inst_18293);

(statearr_18426[(16)] = inst_18275__$1);

return statearr_18426;
})();
var statearr_18427_20154 = state_18398__$1;
(statearr_18427_20154[(2)] = null);

(statearr_18427_20154[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (21))){
var inst_18320 = (state_18398[(2)]);
var state_18398__$1 = state_18398;
var statearr_18431_20158 = state_18398__$1;
(statearr_18431_20158[(2)] = inst_18320);

(statearr_18431_20158[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (31))){
var inst_18346 = (state_18398[(11)]);
var inst_18350 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18346);
var state_18398__$1 = state_18398;
var statearr_18434_20159 = state_18398__$1;
(statearr_18434_20159[(2)] = inst_18350);

(statearr_18434_20159[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (32))){
var inst_18339 = (state_18398[(9)]);
var inst_18338 = (state_18398[(19)]);
var inst_18340 = (state_18398[(20)]);
var inst_18341 = (state_18398[(12)]);
var inst_18352 = (state_18398[(2)]);
var inst_18353 = (inst_18341 + (1));
var tmp18428 = inst_18339;
var tmp18429 = inst_18338;
var tmp18430 = inst_18340;
var inst_18338__$1 = tmp18429;
var inst_18339__$1 = tmp18428;
var inst_18340__$1 = tmp18430;
var inst_18341__$1 = inst_18353;
var state_18398__$1 = (function (){var statearr_18438 = state_18398;
(statearr_18438[(9)] = inst_18339__$1);

(statearr_18438[(19)] = inst_18338__$1);

(statearr_18438[(20)] = inst_18340__$1);

(statearr_18438[(21)] = inst_18352);

(statearr_18438[(12)] = inst_18341__$1);

return statearr_18438;
})();
var statearr_18439_20160 = state_18398__$1;
(statearr_18439_20160[(2)] = null);

(statearr_18439_20160[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (40))){
var inst_18367 = (state_18398[(22)]);
var inst_18371 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_18367);
var state_18398__$1 = state_18398;
var statearr_18443_20161 = state_18398__$1;
(statearr_18443_20161[(2)] = inst_18371);

(statearr_18443_20161[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (33))){
var inst_18357 = (state_18398[(23)]);
var inst_18360 = cljs.core.chunked_seq_QMARK_(inst_18357);
var state_18398__$1 = state_18398;
if(inst_18360){
var statearr_18445_20162 = state_18398__$1;
(statearr_18445_20162[(1)] = (36));

} else {
var statearr_18446_20163 = state_18398__$1;
(statearr_18446_20163[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (13))){
var inst_18287 = (state_18398[(24)]);
var inst_18290 = cljs.core.async.close_BANG_(inst_18287);
var state_18398__$1 = state_18398;
var statearr_18450_20164 = state_18398__$1;
(statearr_18450_20164[(2)] = inst_18290);

(statearr_18450_20164[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (22))){
var inst_18310 = (state_18398[(8)]);
var inst_18313 = cljs.core.async.close_BANG_(inst_18310);
var state_18398__$1 = state_18398;
var statearr_18452_20165 = state_18398__$1;
(statearr_18452_20165[(2)] = inst_18313);

(statearr_18452_20165[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (36))){
var inst_18357 = (state_18398[(23)]);
var inst_18362 = cljs.core.chunk_first(inst_18357);
var inst_18363 = cljs.core.chunk_rest(inst_18357);
var inst_18364 = cljs.core.count(inst_18362);
var inst_18338 = inst_18363;
var inst_18339 = inst_18362;
var inst_18340 = inst_18364;
var inst_18341 = (0);
var state_18398__$1 = (function (){var statearr_18456 = state_18398;
(statearr_18456[(9)] = inst_18339);

(statearr_18456[(19)] = inst_18338);

(statearr_18456[(20)] = inst_18340);

(statearr_18456[(12)] = inst_18341);

return statearr_18456;
})();
var statearr_18458_20173 = state_18398__$1;
(statearr_18458_20173[(2)] = null);

(statearr_18458_20173[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (41))){
var inst_18357 = (state_18398[(23)]);
var inst_18373 = (state_18398[(2)]);
var inst_18374 = cljs.core.next(inst_18357);
var inst_18338 = inst_18374;
var inst_18339 = null;
var inst_18340 = (0);
var inst_18341 = (0);
var state_18398__$1 = (function (){var statearr_18461 = state_18398;
(statearr_18461[(25)] = inst_18373);

(statearr_18461[(9)] = inst_18339);

(statearr_18461[(19)] = inst_18338);

(statearr_18461[(20)] = inst_18340);

(statearr_18461[(12)] = inst_18341);

return statearr_18461;
})();
var statearr_18463_20177 = state_18398__$1;
(statearr_18463_20177[(2)] = null);

(statearr_18463_20177[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (43))){
var state_18398__$1 = state_18398;
var statearr_18465_20178 = state_18398__$1;
(statearr_18465_20178[(2)] = null);

(statearr_18465_20178[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (29))){
var inst_18382 = (state_18398[(2)]);
var state_18398__$1 = state_18398;
var statearr_18467_20179 = state_18398__$1;
(statearr_18467_20179[(2)] = inst_18382);

(statearr_18467_20179[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (44))){
var inst_18391 = (state_18398[(2)]);
var state_18398__$1 = (function (){var statearr_18470 = state_18398;
(statearr_18470[(26)] = inst_18391);

return statearr_18470;
})();
var statearr_18471_20180 = state_18398__$1;
(statearr_18471_20180[(2)] = null);

(statearr_18471_20180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (6))){
var inst_18330 = (state_18398[(27)]);
var inst_18329 = cljs.core.deref(cs);
var inst_18330__$1 = cljs.core.keys(inst_18329);
var inst_18331 = cljs.core.count(inst_18330__$1);
var inst_18332 = cljs.core.reset_BANG_(dctr,inst_18331);
var inst_18337 = cljs.core.seq(inst_18330__$1);
var inst_18338 = inst_18337;
var inst_18339 = null;
var inst_18340 = (0);
var inst_18341 = (0);
var state_18398__$1 = (function (){var statearr_18476 = state_18398;
(statearr_18476[(27)] = inst_18330__$1);

(statearr_18476[(9)] = inst_18339);

(statearr_18476[(19)] = inst_18338);

(statearr_18476[(28)] = inst_18332);

(statearr_18476[(20)] = inst_18340);

(statearr_18476[(12)] = inst_18341);

return statearr_18476;
})();
var statearr_18477_20181 = state_18398__$1;
(statearr_18477_20181[(2)] = null);

(statearr_18477_20181[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (28))){
var inst_18338 = (state_18398[(19)]);
var inst_18357 = (state_18398[(23)]);
var inst_18357__$1 = cljs.core.seq(inst_18338);
var state_18398__$1 = (function (){var statearr_18479 = state_18398;
(statearr_18479[(23)] = inst_18357__$1);

return statearr_18479;
})();
if(inst_18357__$1){
var statearr_18480_20182 = state_18398__$1;
(statearr_18480_20182[(1)] = (33));

} else {
var statearr_18481_20183 = state_18398__$1;
(statearr_18481_20183[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (25))){
var inst_18340 = (state_18398[(20)]);
var inst_18341 = (state_18398[(12)]);
var inst_18343 = (inst_18341 < inst_18340);
var inst_18344 = inst_18343;
var state_18398__$1 = state_18398;
if(cljs.core.truth_(inst_18344)){
var statearr_18485_20184 = state_18398__$1;
(statearr_18485_20184[(1)] = (27));

} else {
var statearr_18486_20185 = state_18398__$1;
(statearr_18486_20185[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (34))){
var state_18398__$1 = state_18398;
var statearr_18488_20186 = state_18398__$1;
(statearr_18488_20186[(2)] = null);

(statearr_18488_20186[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (17))){
var state_18398__$1 = state_18398;
var statearr_18491_20187 = state_18398__$1;
(statearr_18491_20187[(2)] = null);

(statearr_18491_20187[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (3))){
var inst_18396 = (state_18398[(2)]);
var state_18398__$1 = state_18398;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18398__$1,inst_18396);
} else {
if((state_val_18399 === (12))){
var inst_18325 = (state_18398[(2)]);
var state_18398__$1 = state_18398;
var statearr_18494_20189 = state_18398__$1;
(statearr_18494_20189[(2)] = inst_18325);

(statearr_18494_20189[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (2))){
var state_18398__$1 = state_18398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18398__$1,(4),ch);
} else {
if((state_val_18399 === (23))){
var state_18398__$1 = state_18398;
var statearr_18498_20191 = state_18398__$1;
(statearr_18498_20191[(2)] = null);

(statearr_18498_20191[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (35))){
var inst_18380 = (state_18398[(2)]);
var state_18398__$1 = state_18398;
var statearr_18500_20198 = state_18398__$1;
(statearr_18500_20198[(2)] = inst_18380);

(statearr_18500_20198[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (19))){
var inst_18297 = (state_18398[(7)]);
var inst_18301 = cljs.core.chunk_first(inst_18297);
var inst_18302 = cljs.core.chunk_rest(inst_18297);
var inst_18303 = cljs.core.count(inst_18301);
var inst_18275 = inst_18302;
var inst_18276 = inst_18301;
var inst_18277 = inst_18303;
var inst_18278 = (0);
var state_18398__$1 = (function (){var statearr_18504 = state_18398;
(statearr_18504[(13)] = inst_18276);

(statearr_18504[(14)] = inst_18278);

(statearr_18504[(15)] = inst_18277);

(statearr_18504[(16)] = inst_18275);

return statearr_18504;
})();
var statearr_18506_20200 = state_18398__$1;
(statearr_18506_20200[(2)] = null);

(statearr_18506_20200[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (11))){
var inst_18297 = (state_18398[(7)]);
var inst_18275 = (state_18398[(16)]);
var inst_18297__$1 = cljs.core.seq(inst_18275);
var state_18398__$1 = (function (){var statearr_18510 = state_18398;
(statearr_18510[(7)] = inst_18297__$1);

return statearr_18510;
})();
if(inst_18297__$1){
var statearr_18511_20201 = state_18398__$1;
(statearr_18511_20201[(1)] = (16));

} else {
var statearr_18513_20202 = state_18398__$1;
(statearr_18513_20202[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (9))){
var inst_18327 = (state_18398[(2)]);
var state_18398__$1 = state_18398;
var statearr_18514_20203 = state_18398__$1;
(statearr_18514_20203[(2)] = inst_18327);

(statearr_18514_20203[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (5))){
var inst_18273 = cljs.core.deref(cs);
var inst_18274 = cljs.core.seq(inst_18273);
var inst_18275 = inst_18274;
var inst_18276 = null;
var inst_18277 = (0);
var inst_18278 = (0);
var state_18398__$1 = (function (){var statearr_18518 = state_18398;
(statearr_18518[(13)] = inst_18276);

(statearr_18518[(14)] = inst_18278);

(statearr_18518[(15)] = inst_18277);

(statearr_18518[(16)] = inst_18275);

return statearr_18518;
})();
var statearr_18520_20205 = state_18398__$1;
(statearr_18520_20205[(2)] = null);

(statearr_18520_20205[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (14))){
var state_18398__$1 = state_18398;
var statearr_18523_20207 = state_18398__$1;
(statearr_18523_20207[(2)] = null);

(statearr_18523_20207[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (45))){
var inst_18388 = (state_18398[(2)]);
var state_18398__$1 = state_18398;
var statearr_18525_20208 = state_18398__$1;
(statearr_18525_20208[(2)] = inst_18388);

(statearr_18525_20208[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (26))){
var inst_18330 = (state_18398[(27)]);
var inst_18384 = (state_18398[(2)]);
var inst_18385 = cljs.core.seq(inst_18330);
var state_18398__$1 = (function (){var statearr_18527 = state_18398;
(statearr_18527[(29)] = inst_18384);

return statearr_18527;
})();
if(inst_18385){
var statearr_18530_20209 = state_18398__$1;
(statearr_18530_20209[(1)] = (42));

} else {
var statearr_18532_20210 = state_18398__$1;
(statearr_18532_20210[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (16))){
var inst_18297 = (state_18398[(7)]);
var inst_18299 = cljs.core.chunked_seq_QMARK_(inst_18297);
var state_18398__$1 = state_18398;
if(inst_18299){
var statearr_18534_20211 = state_18398__$1;
(statearr_18534_20211[(1)] = (19));

} else {
var statearr_18535_20212 = state_18398__$1;
(statearr_18535_20212[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (38))){
var inst_18377 = (state_18398[(2)]);
var state_18398__$1 = state_18398;
var statearr_18538_20213 = state_18398__$1;
(statearr_18538_20213[(2)] = inst_18377);

(statearr_18538_20213[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (30))){
var state_18398__$1 = state_18398;
var statearr_18540_20214 = state_18398__$1;
(statearr_18540_20214[(2)] = null);

(statearr_18540_20214[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (10))){
var inst_18276 = (state_18398[(13)]);
var inst_18278 = (state_18398[(14)]);
var inst_18286 = cljs.core._nth(inst_18276,inst_18278);
var inst_18287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18286,(0),null);
var inst_18288 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18286,(1),null);
var state_18398__$1 = (function (){var statearr_18544 = state_18398;
(statearr_18544[(24)] = inst_18287);

return statearr_18544;
})();
if(cljs.core.truth_(inst_18288)){
var statearr_18546_20215 = state_18398__$1;
(statearr_18546_20215[(1)] = (13));

} else {
var statearr_18547_20216 = state_18398__$1;
(statearr_18547_20216[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (18))){
var inst_18323 = (state_18398[(2)]);
var state_18398__$1 = state_18398;
var statearr_18549_20217 = state_18398__$1;
(statearr_18549_20217[(2)] = inst_18323);

(statearr_18549_20217[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (42))){
var state_18398__$1 = state_18398;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18398__$1,(45),dchan);
} else {
if((state_val_18399 === (37))){
var inst_18367 = (state_18398[(22)]);
var inst_18266 = (state_18398[(10)]);
var inst_18357 = (state_18398[(23)]);
var inst_18367__$1 = cljs.core.first(inst_18357);
var inst_18368 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_18367__$1,inst_18266,done);
var state_18398__$1 = (function (){var statearr_18555 = state_18398;
(statearr_18555[(22)] = inst_18367__$1);

return statearr_18555;
})();
if(cljs.core.truth_(inst_18368)){
var statearr_18559_20218 = state_18398__$1;
(statearr_18559_20218[(1)] = (39));

} else {
var statearr_18560_20219 = state_18398__$1;
(statearr_18560_20219[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18399 === (8))){
var inst_18278 = (state_18398[(14)]);
var inst_18277 = (state_18398[(15)]);
var inst_18280 = (inst_18278 < inst_18277);
var inst_18281 = inst_18280;
var state_18398__$1 = state_18398;
if(cljs.core.truth_(inst_18281)){
var statearr_18562_20221 = state_18398__$1;
(statearr_18562_20221[(1)] = (10));

} else {
var statearr_18564_20222 = state_18398__$1;
(statearr_18564_20222[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__17260__auto__ = null;
var cljs$core$async$mult_$_state_machine__17260__auto____0 = (function (){
var statearr_18571 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18571[(0)] = cljs$core$async$mult_$_state_machine__17260__auto__);

(statearr_18571[(1)] = (1));

return statearr_18571;
});
var cljs$core$async$mult_$_state_machine__17260__auto____1 = (function (state_18398){
while(true){
var ret_value__17261__auto__ = (function (){try{while(true){
var result__17262__auto__ = switch__17259__auto__(state_18398);
if(cljs.core.keyword_identical_QMARK_(result__17262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17262__auto__;
}
break;
}
}catch (e18574){var ex__17263__auto__ = e18574;
var statearr_18575_20226 = state_18398;
(statearr_18575_20226[(2)] = ex__17263__auto__);


if(cljs.core.seq((state_18398[(4)]))){
var statearr_18579_20229 = state_18398;
(statearr_18579_20229[(1)] = cljs.core.first((state_18398[(4)])));

} else {
throw ex__17263__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20230 = state_18398;
state_18398 = G__20230;
continue;
} else {
return ret_value__17261__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__17260__auto__ = function(state_18398){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__17260__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__17260__auto____1.call(this,state_18398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__17260__auto____0;
cljs$core$async$mult_$_state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__17260__auto____1;
return cljs$core$async$mult_$_state_machine__17260__auto__;
})()
})();
var state__17453__auto__ = (function (){var statearr_18583 = f__17452__auto__();
(statearr_18583[(6)] = c__17451__auto___20142);

return statearr_18583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17453__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__18591 = arguments.length;
switch (G__18591) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_20237 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_20237(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_20242 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_20242(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_20249 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_20249(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_20250 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_20250(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_20251 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_20251(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20252 = arguments.length;
var i__5770__auto___20253 = (0);
while(true){
if((i__5770__auto___20253 < len__5769__auto___20252)){
args__5775__auto__.push((arguments[i__5770__auto___20253]));

var G__20254 = (i__5770__auto___20253 + (1));
i__5770__auto___20253 = G__20254;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__18657){
var map__18659 = p__18657;
var map__18659__$1 = cljs.core.__destructure_map(map__18659);
var opts = map__18659__$1;
var statearr_18660_20255 = state;
(statearr_18660_20255[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_18662_20256 = state;
(statearr_18662_20256[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_18666_20257 = state;
(statearr_18666_20257[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq18646){
var G__18647 = cljs.core.first(seq18646);
var seq18646__$1 = cljs.core.next(seq18646);
var G__18648 = cljs.core.first(seq18646__$1);
var seq18646__$2 = cljs.core.next(seq18646__$1);
var G__18649 = cljs.core.first(seq18646__$2);
var seq18646__$3 = cljs.core.next(seq18646__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18647,G__18648,G__18649,seq18646__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18680 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18680 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta18681){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta18681 = meta18681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18682,meta18681__$1){
var self__ = this;
var _18682__$1 = this;
return (new cljs.core.async.t_cljs$core$async18680(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta18681__$1));
}));

(cljs.core.async.t_cljs$core$async18680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18682){
var self__ = this;
var _18682__$1 = this;
return self__.meta18681;
}));

(cljs.core.async.t_cljs$core$async18680.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18680.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async18680.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18680.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18680.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18680.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18680.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18680.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async18680.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta18681","meta18681",-1199923652,null)], null);
}));

(cljs.core.async.t_cljs$core$async18680.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18680.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18680");

(cljs.core.async.t_cljs$core$async18680.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18680");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18680.
 */
cljs.core.async.__GT_t_cljs$core$async18680 = (function cljs$core$async$mix_$___GT_t_cljs$core$async18680(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18681){
return (new cljs.core.async.t_cljs$core$async18680(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta18681));
});

}

return (new cljs.core.async.t_cljs$core$async18680(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17451__auto___20271 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17452__auto__ = (function (){var switch__17259__auto__ = (function (state_18761){
var state_val_18762 = (state_18761[(1)]);
if((state_val_18762 === (7))){
var inst_18712 = (state_18761[(2)]);
var state_18761__$1 = state_18761;
if(cljs.core.truth_(inst_18712)){
var statearr_18763_20272 = state_18761__$1;
(statearr_18763_20272[(1)] = (8));

} else {
var statearr_18764_20273 = state_18761__$1;
(statearr_18764_20273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (20))){
var inst_18705 = (state_18761[(7)]);
var state_18761__$1 = state_18761;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18761__$1,(23),out,inst_18705);
} else {
if((state_val_18762 === (1))){
var inst_18688 = calc_state();
var inst_18689 = cljs.core.__destructure_map(inst_18688);
var inst_18690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18689,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18691 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18689,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18692 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18689,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_18693 = inst_18688;
var state_18761__$1 = (function (){var statearr_18772 = state_18761;
(statearr_18772[(8)] = inst_18691);

(statearr_18772[(9)] = inst_18692);

(statearr_18772[(10)] = inst_18690);

(statearr_18772[(11)] = inst_18693);

return statearr_18772;
})();
var statearr_18774_20280 = state_18761__$1;
(statearr_18774_20280[(2)] = null);

(statearr_18774_20280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (24))){
var inst_18696 = (state_18761[(12)]);
var inst_18693 = inst_18696;
var state_18761__$1 = (function (){var statearr_18775 = state_18761;
(statearr_18775[(11)] = inst_18693);

return statearr_18775;
})();
var statearr_18776_20281 = state_18761__$1;
(statearr_18776_20281[(2)] = null);

(statearr_18776_20281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (4))){
var inst_18707 = (state_18761[(13)]);
var inst_18705 = (state_18761[(7)]);
var inst_18704 = (state_18761[(2)]);
var inst_18705__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18704,(0),null);
var inst_18706 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_18704,(1),null);
var inst_18707__$1 = (inst_18705__$1 == null);
var state_18761__$1 = (function (){var statearr_18781 = state_18761;
(statearr_18781[(14)] = inst_18706);

(statearr_18781[(13)] = inst_18707__$1);

(statearr_18781[(7)] = inst_18705__$1);

return statearr_18781;
})();
if(cljs.core.truth_(inst_18707__$1)){
var statearr_18782_20282 = state_18761__$1;
(statearr_18782_20282[(1)] = (5));

} else {
var statearr_18783_20283 = state_18761__$1;
(statearr_18783_20283[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (15))){
var inst_18697 = (state_18761[(15)]);
var inst_18730 = (state_18761[(16)]);
var inst_18730__$1 = cljs.core.empty_QMARK_(inst_18697);
var state_18761__$1 = (function (){var statearr_18788 = state_18761;
(statearr_18788[(16)] = inst_18730__$1);

return statearr_18788;
})();
if(inst_18730__$1){
var statearr_18789_20284 = state_18761__$1;
(statearr_18789_20284[(1)] = (17));

} else {
var statearr_18790_20285 = state_18761__$1;
(statearr_18790_20285[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (21))){
var inst_18696 = (state_18761[(12)]);
var inst_18693 = inst_18696;
var state_18761__$1 = (function (){var statearr_18791 = state_18761;
(statearr_18791[(11)] = inst_18693);

return statearr_18791;
})();
var statearr_18795_20286 = state_18761__$1;
(statearr_18795_20286[(2)] = null);

(statearr_18795_20286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (13))){
var inst_18719 = (state_18761[(2)]);
var inst_18720 = calc_state();
var inst_18693 = inst_18720;
var state_18761__$1 = (function (){var statearr_18797 = state_18761;
(statearr_18797[(17)] = inst_18719);

(statearr_18797[(11)] = inst_18693);

return statearr_18797;
})();
var statearr_18798_20287 = state_18761__$1;
(statearr_18798_20287[(2)] = null);

(statearr_18798_20287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (22))){
var inst_18754 = (state_18761[(2)]);
var state_18761__$1 = state_18761;
var statearr_18799_20288 = state_18761__$1;
(statearr_18799_20288[(2)] = inst_18754);

(statearr_18799_20288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (6))){
var inst_18706 = (state_18761[(14)]);
var inst_18710 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_18706,change);
var state_18761__$1 = state_18761;
var statearr_18801_20289 = state_18761__$1;
(statearr_18801_20289[(2)] = inst_18710);

(statearr_18801_20289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (25))){
var state_18761__$1 = state_18761;
var statearr_18802_20290 = state_18761__$1;
(statearr_18802_20290[(2)] = null);

(statearr_18802_20290[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (17))){
var inst_18706 = (state_18761[(14)]);
var inst_18698 = (state_18761[(18)]);
var inst_18732 = (inst_18698.cljs$core$IFn$_invoke$arity$1 ? inst_18698.cljs$core$IFn$_invoke$arity$1(inst_18706) : inst_18698.call(null,inst_18706));
var inst_18733 = cljs.core.not(inst_18732);
var state_18761__$1 = state_18761;
var statearr_18803_20291 = state_18761__$1;
(statearr_18803_20291[(2)] = inst_18733);

(statearr_18803_20291[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (3))){
var inst_18758 = (state_18761[(2)]);
var state_18761__$1 = state_18761;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18761__$1,inst_18758);
} else {
if((state_val_18762 === (12))){
var state_18761__$1 = state_18761;
var statearr_18808_20292 = state_18761__$1;
(statearr_18808_20292[(2)] = null);

(statearr_18808_20292[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (2))){
var inst_18696 = (state_18761[(12)]);
var inst_18693 = (state_18761[(11)]);
var inst_18696__$1 = cljs.core.__destructure_map(inst_18693);
var inst_18697 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18696__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_18698 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18696__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_18699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18696__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_18761__$1 = (function (){var statearr_18813 = state_18761;
(statearr_18813[(15)] = inst_18697);

(statearr_18813[(12)] = inst_18696__$1);

(statearr_18813[(18)] = inst_18698);

return statearr_18813;
})();
return cljs.core.async.ioc_alts_BANG_(state_18761__$1,(4),inst_18699);
} else {
if((state_val_18762 === (23))){
var inst_18741 = (state_18761[(2)]);
var state_18761__$1 = state_18761;
if(cljs.core.truth_(inst_18741)){
var statearr_18814_20295 = state_18761__$1;
(statearr_18814_20295[(1)] = (24));

} else {
var statearr_18818_20301 = state_18761__$1;
(statearr_18818_20301[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (19))){
var inst_18736 = (state_18761[(2)]);
var state_18761__$1 = state_18761;
var statearr_18820_20302 = state_18761__$1;
(statearr_18820_20302[(2)] = inst_18736);

(statearr_18820_20302[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (11))){
var inst_18706 = (state_18761[(14)]);
var inst_18716 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_18706);
var state_18761__$1 = state_18761;
var statearr_18821_20303 = state_18761__$1;
(statearr_18821_20303[(2)] = inst_18716);

(statearr_18821_20303[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (9))){
var inst_18706 = (state_18761[(14)]);
var inst_18697 = (state_18761[(15)]);
var inst_18727 = (state_18761[(19)]);
var inst_18727__$1 = (inst_18697.cljs$core$IFn$_invoke$arity$1 ? inst_18697.cljs$core$IFn$_invoke$arity$1(inst_18706) : inst_18697.call(null,inst_18706));
var state_18761__$1 = (function (){var statearr_18826 = state_18761;
(statearr_18826[(19)] = inst_18727__$1);

return statearr_18826;
})();
if(cljs.core.truth_(inst_18727__$1)){
var statearr_18827_20304 = state_18761__$1;
(statearr_18827_20304[(1)] = (14));

} else {
var statearr_18828_20305 = state_18761__$1;
(statearr_18828_20305[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (5))){
var inst_18707 = (state_18761[(13)]);
var state_18761__$1 = state_18761;
var statearr_18829_20306 = state_18761__$1;
(statearr_18829_20306[(2)] = inst_18707);

(statearr_18829_20306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (14))){
var inst_18727 = (state_18761[(19)]);
var state_18761__$1 = state_18761;
var statearr_18834_20307 = state_18761__$1;
(statearr_18834_20307[(2)] = inst_18727);

(statearr_18834_20307[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (26))){
var inst_18750 = (state_18761[(2)]);
var state_18761__$1 = state_18761;
var statearr_18835_20308 = state_18761__$1;
(statearr_18835_20308[(2)] = inst_18750);

(statearr_18835_20308[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (16))){
var inst_18738 = (state_18761[(2)]);
var state_18761__$1 = state_18761;
if(cljs.core.truth_(inst_18738)){
var statearr_18837_20309 = state_18761__$1;
(statearr_18837_20309[(1)] = (20));

} else {
var statearr_18838_20310 = state_18761__$1;
(statearr_18838_20310[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (10))){
var inst_18756 = (state_18761[(2)]);
var state_18761__$1 = state_18761;
var statearr_18839_20311 = state_18761__$1;
(statearr_18839_20311[(2)] = inst_18756);

(statearr_18839_20311[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (18))){
var inst_18730 = (state_18761[(16)]);
var state_18761__$1 = state_18761;
var statearr_18840_20312 = state_18761__$1;
(statearr_18840_20312[(2)] = inst_18730);

(statearr_18840_20312[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18762 === (8))){
var inst_18705 = (state_18761[(7)]);
var inst_18714 = (inst_18705 == null);
var state_18761__$1 = state_18761;
if(cljs.core.truth_(inst_18714)){
var statearr_18841_20317 = state_18761__$1;
(statearr_18841_20317[(1)] = (11));

} else {
var statearr_18842_20318 = state_18761__$1;
(statearr_18842_20318[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__17260__auto__ = null;
var cljs$core$async$mix_$_state_machine__17260__auto____0 = (function (){
var statearr_18851 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18851[(0)] = cljs$core$async$mix_$_state_machine__17260__auto__);

(statearr_18851[(1)] = (1));

return statearr_18851;
});
var cljs$core$async$mix_$_state_machine__17260__auto____1 = (function (state_18761){
while(true){
var ret_value__17261__auto__ = (function (){try{while(true){
var result__17262__auto__ = switch__17259__auto__(state_18761);
if(cljs.core.keyword_identical_QMARK_(result__17262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17262__auto__;
}
break;
}
}catch (e18852){var ex__17263__auto__ = e18852;
var statearr_18853_20319 = state_18761;
(statearr_18853_20319[(2)] = ex__17263__auto__);


if(cljs.core.seq((state_18761[(4)]))){
var statearr_18854_20324 = state_18761;
(statearr_18854_20324[(1)] = cljs.core.first((state_18761[(4)])));

} else {
throw ex__17263__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20325 = state_18761;
state_18761 = G__20325;
continue;
} else {
return ret_value__17261__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__17260__auto__ = function(state_18761){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__17260__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__17260__auto____1.call(this,state_18761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__17260__auto____0;
cljs$core$async$mix_$_state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__17260__auto____1;
return cljs$core$async$mix_$_state_machine__17260__auto__;
})()
})();
var state__17453__auto__ = (function (){var statearr_18859 = f__17452__auto__();
(statearr_18859[(6)] = c__17451__auto___20271);

return statearr_18859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17453__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_20326 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_20326(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_20327 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_20327(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_20328 = (function() {
var G__20329 = null;
var G__20329__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__20329__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__20329 = function(p,v){
switch(arguments.length){
case 1:
return G__20329__1.call(this,p);
case 2:
return G__20329__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__20329.cljs$core$IFn$_invoke$arity$1 = G__20329__1;
G__20329.cljs$core$IFn$_invoke$arity$2 = G__20329__2;
return G__20329;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__18890 = arguments.length;
switch (G__18890) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20328(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_20328(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__18898 = arguments.length;
switch (G__18898) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__18895_SHARP_){
if(cljs.core.truth_((p1__18895_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__18895_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__18895_SHARP_.call(null,topic)))){
return p1__18895_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18895_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async18899 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async18899 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta18900){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta18900 = meta18900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async18899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18901,meta18900__$1){
var self__ = this;
var _18901__$1 = this;
return (new cljs.core.async.t_cljs$core$async18899(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta18900__$1));
}));

(cljs.core.async.t_cljs$core$async18899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18901){
var self__ = this;
var _18901__$1 = this;
return self__.meta18900;
}));

(cljs.core.async.t_cljs$core$async18899.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18899.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async18899.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async18899.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async18899.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async18899.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async18899.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async18899.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta18900","meta18900",89689892,null)], null);
}));

(cljs.core.async.t_cljs$core$async18899.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async18899.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async18899");

(cljs.core.async.t_cljs$core$async18899.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async18899");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async18899.
 */
cljs.core.async.__GT_t_cljs$core$async18899 = (function cljs$core$async$__GT_t_cljs$core$async18899(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18900){
return (new cljs.core.async.t_cljs$core$async18899(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta18900));
});

}

return (new cljs.core.async.t_cljs$core$async18899(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__17451__auto___20339 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17452__auto__ = (function (){var switch__17259__auto__ = (function (state_18975){
var state_val_18976 = (state_18975[(1)]);
if((state_val_18976 === (7))){
var inst_18971 = (state_18975[(2)]);
var state_18975__$1 = state_18975;
var statearr_18977_20340 = state_18975__$1;
(statearr_18977_20340[(2)] = inst_18971);

(statearr_18977_20340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18976 === (20))){
var state_18975__$1 = state_18975;
var statearr_18978_20341 = state_18975__$1;
(statearr_18978_20341[(2)] = null);

(statearr_18978_20341[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18976 === (1))){
var state_18975__$1 = state_18975;
var statearr_18979_20342 = state_18975__$1;
(statearr_18979_20342[(2)] = null);

(statearr_18979_20342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18976 === (24))){
var inst_18954 = (state_18975[(7)]);
var inst_18963 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_18954);
var state_18975__$1 = state_18975;
var statearr_18980_20343 = state_18975__$1;
(statearr_18980_20343[(2)] = inst_18963);

(statearr_18980_20343[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18976 === (4))){
var inst_18906 = (state_18975[(8)]);
var inst_18906__$1 = (state_18975[(2)]);
var inst_18907 = (inst_18906__$1 == null);
var state_18975__$1 = (function (){var statearr_18981 = state_18975;
(statearr_18981[(8)] = inst_18906__$1);

return statearr_18981;
})();
if(cljs.core.truth_(inst_18907)){
var statearr_18983_20345 = state_18975__$1;
(statearr_18983_20345[(1)] = (5));

} else {
var statearr_18985_20346 = state_18975__$1;
(statearr_18985_20346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18976 === (15))){
var inst_18948 = (state_18975[(2)]);
var state_18975__$1 = state_18975;
var statearr_18986_20348 = state_18975__$1;
(statearr_18986_20348[(2)] = inst_18948);

(statearr_18986_20348[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18976 === (21))){
var inst_18968 = (state_18975[(2)]);
var state_18975__$1 = (function (){var statearr_18987 = state_18975;
(statearr_18987[(9)] = inst_18968);

return statearr_18987;
})();
var statearr_18988_20349 = state_18975__$1;
(statearr_18988_20349[(2)] = null);

(statearr_18988_20349[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18976 === (13))){
var inst_18930 = (state_18975[(10)]);
var inst_18932 = cljs.core.chunked_seq_QMARK_(inst_18930);
var state_18975__$1 = state_18975;
if(inst_18932){
var statearr_18989_20350 = state_18975__$1;
(statearr_18989_20350[(1)] = (16));

} else {
var statearr_18990_20351 = state_18975__$1;
(statearr_18990_20351[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18976 === (22))){
var inst_18960 = (state_18975[(2)]);
var state_18975__$1 = state_18975;
if(cljs.core.truth_(inst_18960)){
var statearr_18991_20352 = state_18975__$1;
(statearr_18991_20352[(1)] = (23));

} else {
var statearr_18992_20353 = state_18975__$1;
(statearr_18992_20353[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18976 === (6))){
var inst_18906 = (state_18975[(8)]);
var inst_18956 = (state_18975[(11)]);
var inst_18954 = (state_18975[(7)]);
var inst_18954__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_18906) : topic_fn.call(null,inst_18906));
var inst_18955 = cljs.core.deref(mults);
var inst_18956__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_18955,inst_18954__$1);
var state_18975__$1 = (function (){var statearr_18993 = state_18975;
(statearr_18993[(11)] = inst_18956__$1);

(statearr_18993[(7)] = inst_18954__$1);

return statearr_18993;
})();
if(cljs.core.truth_(inst_18956__$1)){
var statearr_18995_20354 = state_18975__$1;
(statearr_18995_20354[(1)] = (19));

} else {
var statearr_18996_20355 = state_18975__$1;
(statearr_18996_20355[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18976 === (25))){
var inst_18965 = (state_18975[(2)]);
var state_18975__$1 = state_18975;
var statearr_18998_20357 = state_18975__$1;
(statearr_18998_20357[(2)] = inst_18965);

(statearr_18998_20357[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18976 === (17))){
var inst_18930 = (state_18975[(10)]);
var inst_18939 = cljs.core.first(inst_18930);
var inst_18940 = cljs.core.async.muxch_STAR_(inst_18939);
var inst_18941 = cljs.core.async.close_BANG_(inst_18940);
var inst_18942 = cljs.core.next(inst_18930);
var inst_18916 = inst_18942;
var inst_18917 = null;
var inst_18918 = (0);
var inst_18919 = (0);
var state_18975__$1 = (function (){var statearr_18999 = state_18975;
(statearr_18999[(12)] = inst_18917);

(statearr_18999[(13)] = inst_18941);

(statearr_18999[(14)] = inst_18918);

(statearr_18999[(15)] = inst_18919);

(statearr_18999[(16)] = inst_18916);

return statearr_18999;
})();
var statearr_19000_20359 = state_18975__$1;
(statearr_19000_20359[(2)] = null);

(statearr_19000_20359[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18976 === (3))){
var inst_18973 = (state_18975[(2)]);
var state_18975__$1 = state_18975;
return cljs.core.async.impl.ioc_helpers.return_chan(state_18975__$1,inst_18973);
} else {
if((state_val_18976 === (12))){
var inst_18950 = (state_18975[(2)]);
var state_18975__$1 = state_18975;
var statearr_19001_20360 = state_18975__$1;
(statearr_19001_20360[(2)] = inst_18950);

(statearr_19001_20360[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18976 === (2))){
var state_18975__$1 = state_18975;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18975__$1,(4),ch);
} else {
if((state_val_18976 === (23))){
var state_18975__$1 = state_18975;
var statearr_19004_20361 = state_18975__$1;
(statearr_19004_20361[(2)] = null);

(statearr_19004_20361[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18976 === (19))){
var inst_18906 = (state_18975[(8)]);
var inst_18956 = (state_18975[(11)]);
var inst_18958 = cljs.core.async.muxch_STAR_(inst_18956);
var state_18975__$1 = state_18975;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_18975__$1,(22),inst_18958,inst_18906);
} else {
if((state_val_18976 === (11))){
var inst_18930 = (state_18975[(10)]);
var inst_18916 = (state_18975[(16)]);
var inst_18930__$1 = cljs.core.seq(inst_18916);
var state_18975__$1 = (function (){var statearr_19005 = state_18975;
(statearr_19005[(10)] = inst_18930__$1);

return statearr_19005;
})();
if(inst_18930__$1){
var statearr_19006_20362 = state_18975__$1;
(statearr_19006_20362[(1)] = (13));

} else {
var statearr_19007_20363 = state_18975__$1;
(statearr_19007_20363[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18976 === (9))){
var inst_18952 = (state_18975[(2)]);
var state_18975__$1 = state_18975;
var statearr_19008_20364 = state_18975__$1;
(statearr_19008_20364[(2)] = inst_18952);

(statearr_19008_20364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18976 === (5))){
var inst_18913 = cljs.core.deref(mults);
var inst_18914 = cljs.core.vals(inst_18913);
var inst_18915 = cljs.core.seq(inst_18914);
var inst_18916 = inst_18915;
var inst_18917 = null;
var inst_18918 = (0);
var inst_18919 = (0);
var state_18975__$1 = (function (){var statearr_19009 = state_18975;
(statearr_19009[(12)] = inst_18917);

(statearr_19009[(14)] = inst_18918);

(statearr_19009[(15)] = inst_18919);

(statearr_19009[(16)] = inst_18916);

return statearr_19009;
})();
var statearr_19010_20365 = state_18975__$1;
(statearr_19010_20365[(2)] = null);

(statearr_19010_20365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18976 === (14))){
var state_18975__$1 = state_18975;
var statearr_19014_20366 = state_18975__$1;
(statearr_19014_20366[(2)] = null);

(statearr_19014_20366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18976 === (16))){
var inst_18930 = (state_18975[(10)]);
var inst_18934 = cljs.core.chunk_first(inst_18930);
var inst_18935 = cljs.core.chunk_rest(inst_18930);
var inst_18936 = cljs.core.count(inst_18934);
var inst_18916 = inst_18935;
var inst_18917 = inst_18934;
var inst_18918 = inst_18936;
var inst_18919 = (0);
var state_18975__$1 = (function (){var statearr_19015 = state_18975;
(statearr_19015[(12)] = inst_18917);

(statearr_19015[(14)] = inst_18918);

(statearr_19015[(15)] = inst_18919);

(statearr_19015[(16)] = inst_18916);

return statearr_19015;
})();
var statearr_19016_20367 = state_18975__$1;
(statearr_19016_20367[(2)] = null);

(statearr_19016_20367[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18976 === (10))){
var inst_18917 = (state_18975[(12)]);
var inst_18918 = (state_18975[(14)]);
var inst_18919 = (state_18975[(15)]);
var inst_18916 = (state_18975[(16)]);
var inst_18924 = cljs.core._nth(inst_18917,inst_18919);
var inst_18925 = cljs.core.async.muxch_STAR_(inst_18924);
var inst_18926 = cljs.core.async.close_BANG_(inst_18925);
var inst_18927 = (inst_18919 + (1));
var tmp19011 = inst_18917;
var tmp19012 = inst_18918;
var tmp19013 = inst_18916;
var inst_18916__$1 = tmp19013;
var inst_18917__$1 = tmp19011;
var inst_18918__$1 = tmp19012;
var inst_18919__$1 = inst_18927;
var state_18975__$1 = (function (){var statearr_19017 = state_18975;
(statearr_19017[(17)] = inst_18926);

(statearr_19017[(12)] = inst_18917__$1);

(statearr_19017[(14)] = inst_18918__$1);

(statearr_19017[(15)] = inst_18919__$1);

(statearr_19017[(16)] = inst_18916__$1);

return statearr_19017;
})();
var statearr_19018_20372 = state_18975__$1;
(statearr_19018_20372[(2)] = null);

(statearr_19018_20372[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18976 === (18))){
var inst_18945 = (state_18975[(2)]);
var state_18975__$1 = state_18975;
var statearr_19019_20373 = state_18975__$1;
(statearr_19019_20373[(2)] = inst_18945);

(statearr_19019_20373[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18976 === (8))){
var inst_18918 = (state_18975[(14)]);
var inst_18919 = (state_18975[(15)]);
var inst_18921 = (inst_18919 < inst_18918);
var inst_18922 = inst_18921;
var state_18975__$1 = state_18975;
if(cljs.core.truth_(inst_18922)){
var statearr_19022_20375 = state_18975__$1;
(statearr_19022_20375[(1)] = (10));

} else {
var statearr_19023_20376 = state_18975__$1;
(statearr_19023_20376[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17260__auto__ = null;
var cljs$core$async$state_machine__17260__auto____0 = (function (){
var statearr_19024 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19024[(0)] = cljs$core$async$state_machine__17260__auto__);

(statearr_19024[(1)] = (1));

return statearr_19024;
});
var cljs$core$async$state_machine__17260__auto____1 = (function (state_18975){
while(true){
var ret_value__17261__auto__ = (function (){try{while(true){
var result__17262__auto__ = switch__17259__auto__(state_18975);
if(cljs.core.keyword_identical_QMARK_(result__17262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17262__auto__;
}
break;
}
}catch (e19025){var ex__17263__auto__ = e19025;
var statearr_19026_20378 = state_18975;
(statearr_19026_20378[(2)] = ex__17263__auto__);


if(cljs.core.seq((state_18975[(4)]))){
var statearr_19028_20379 = state_18975;
(statearr_19028_20379[(1)] = cljs.core.first((state_18975[(4)])));

} else {
throw ex__17263__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20380 = state_18975;
state_18975 = G__20380;
continue;
} else {
return ret_value__17261__auto__;
}
break;
}
});
cljs$core$async$state_machine__17260__auto__ = function(state_18975){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17260__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17260__auto____1.call(this,state_18975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17260__auto____0;
cljs$core$async$state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17260__auto____1;
return cljs$core$async$state_machine__17260__auto__;
})()
})();
var state__17453__auto__ = (function (){var statearr_19032 = f__17452__auto__();
(statearr_19032[(6)] = c__17451__auto___20339);

return statearr_19032;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17453__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__19035 = arguments.length;
switch (G__19035) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__19041 = arguments.length;
switch (G__19041) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__19046 = arguments.length;
switch (G__19046) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__17451__auto___20387 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17452__auto__ = (function (){var switch__17259__auto__ = (function (state_19118){
var state_val_19119 = (state_19118[(1)]);
if((state_val_19119 === (7))){
var state_19118__$1 = state_19118;
var statearr_19123_20388 = state_19118__$1;
(statearr_19123_20388[(2)] = null);

(statearr_19123_20388[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19119 === (1))){
var state_19118__$1 = state_19118;
var statearr_19124_20389 = state_19118__$1;
(statearr_19124_20389[(2)] = null);

(statearr_19124_20389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19119 === (4))){
var inst_19063 = (state_19118[(7)]);
var inst_19062 = (state_19118[(8)]);
var inst_19071 = (inst_19063 < inst_19062);
var state_19118__$1 = state_19118;
if(cljs.core.truth_(inst_19071)){
var statearr_19125_20390 = state_19118__$1;
(statearr_19125_20390[(1)] = (6));

} else {
var statearr_19126_20391 = state_19118__$1;
(statearr_19126_20391[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19119 === (15))){
var inst_19101 = (state_19118[(9)]);
var inst_19109 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_19101);
var state_19118__$1 = state_19118;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19118__$1,(17),out,inst_19109);
} else {
if((state_val_19119 === (13))){
var inst_19101 = (state_19118[(9)]);
var inst_19101__$1 = (state_19118[(2)]);
var inst_19102 = cljs.core.some(cljs.core.nil_QMARK_,inst_19101__$1);
var state_19118__$1 = (function (){var statearr_19127 = state_19118;
(statearr_19127[(9)] = inst_19101__$1);

return statearr_19127;
})();
if(cljs.core.truth_(inst_19102)){
var statearr_19128_20392 = state_19118__$1;
(statearr_19128_20392[(1)] = (14));

} else {
var statearr_19130_20393 = state_19118__$1;
(statearr_19130_20393[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19119 === (6))){
var state_19118__$1 = state_19118;
var statearr_19134_20394 = state_19118__$1;
(statearr_19134_20394[(2)] = null);

(statearr_19134_20394[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19119 === (17))){
var inst_19111 = (state_19118[(2)]);
var state_19118__$1 = (function (){var statearr_19136 = state_19118;
(statearr_19136[(10)] = inst_19111);

return statearr_19136;
})();
var statearr_19137_20395 = state_19118__$1;
(statearr_19137_20395[(2)] = null);

(statearr_19137_20395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19119 === (3))){
var inst_19116 = (state_19118[(2)]);
var state_19118__$1 = state_19118;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19118__$1,inst_19116);
} else {
if((state_val_19119 === (12))){
var _ = (function (){var statearr_19138 = state_19118;
(statearr_19138[(4)] = cljs.core.rest((state_19118[(4)])));

return statearr_19138;
})();
var state_19118__$1 = state_19118;
var ex19135 = (state_19118__$1[(2)]);
var statearr_19139_20397 = state_19118__$1;
(statearr_19139_20397[(5)] = ex19135);


if((ex19135 instanceof Object)){
var statearr_19141_20398 = state_19118__$1;
(statearr_19141_20398[(1)] = (11));

(statearr_19141_20398[(5)] = null);

} else {
throw ex19135;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19119 === (2))){
var inst_19061 = cljs.core.reset_BANG_(dctr,cnt);
var inst_19062 = cnt;
var inst_19063 = (0);
var state_19118__$1 = (function (){var statearr_19147 = state_19118;
(statearr_19147[(7)] = inst_19063);

(statearr_19147[(11)] = inst_19061);

(statearr_19147[(8)] = inst_19062);

return statearr_19147;
})();
var statearr_19148_20400 = state_19118__$1;
(statearr_19148_20400[(2)] = null);

(statearr_19148_20400[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19119 === (11))){
var inst_19073 = (state_19118[(2)]);
var inst_19074 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_19118__$1 = (function (){var statearr_19150 = state_19118;
(statearr_19150[(12)] = inst_19073);

return statearr_19150;
})();
var statearr_19151_20401 = state_19118__$1;
(statearr_19151_20401[(2)] = inst_19074);

(statearr_19151_20401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19119 === (9))){
var inst_19063 = (state_19118[(7)]);
var _ = (function (){var statearr_19153 = state_19118;
(statearr_19153[(4)] = cljs.core.cons((12),(state_19118[(4)])));

return statearr_19153;
})();
var inst_19084 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_19063) : chs__$1.call(null,inst_19063));
var inst_19088 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_19063) : done.call(null,inst_19063));
var inst_19089 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_19084,inst_19088);
var ___$1 = (function (){var statearr_19154 = state_19118;
(statearr_19154[(4)] = cljs.core.rest((state_19118[(4)])));

return statearr_19154;
})();
var state_19118__$1 = state_19118;
var statearr_19155_20402 = state_19118__$1;
(statearr_19155_20402[(2)] = inst_19089);

(statearr_19155_20402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19119 === (5))){
var inst_19099 = (state_19118[(2)]);
var state_19118__$1 = (function (){var statearr_19156 = state_19118;
(statearr_19156[(13)] = inst_19099);

return statearr_19156;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19118__$1,(13),dchan);
} else {
if((state_val_19119 === (14))){
var inst_19107 = cljs.core.async.close_BANG_(out);
var state_19118__$1 = state_19118;
var statearr_19157_20407 = state_19118__$1;
(statearr_19157_20407[(2)] = inst_19107);

(statearr_19157_20407[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19119 === (16))){
var inst_19114 = (state_19118[(2)]);
var state_19118__$1 = state_19118;
var statearr_19158_20408 = state_19118__$1;
(statearr_19158_20408[(2)] = inst_19114);

(statearr_19158_20408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19119 === (10))){
var inst_19063 = (state_19118[(7)]);
var inst_19092 = (state_19118[(2)]);
var inst_19093 = (inst_19063 + (1));
var inst_19063__$1 = inst_19093;
var state_19118__$1 = (function (){var statearr_19159 = state_19118;
(statearr_19159[(14)] = inst_19092);

(statearr_19159[(7)] = inst_19063__$1);

return statearr_19159;
})();
var statearr_19160_20409 = state_19118__$1;
(statearr_19160_20409[(2)] = null);

(statearr_19160_20409[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19119 === (8))){
var inst_19097 = (state_19118[(2)]);
var state_19118__$1 = state_19118;
var statearr_19161_20410 = state_19118__$1;
(statearr_19161_20410[(2)] = inst_19097);

(statearr_19161_20410[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17260__auto__ = null;
var cljs$core$async$state_machine__17260__auto____0 = (function (){
var statearr_19162 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19162[(0)] = cljs$core$async$state_machine__17260__auto__);

(statearr_19162[(1)] = (1));

return statearr_19162;
});
var cljs$core$async$state_machine__17260__auto____1 = (function (state_19118){
while(true){
var ret_value__17261__auto__ = (function (){try{while(true){
var result__17262__auto__ = switch__17259__auto__(state_19118);
if(cljs.core.keyword_identical_QMARK_(result__17262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17262__auto__;
}
break;
}
}catch (e19163){var ex__17263__auto__ = e19163;
var statearr_19164_20414 = state_19118;
(statearr_19164_20414[(2)] = ex__17263__auto__);


if(cljs.core.seq((state_19118[(4)]))){
var statearr_19166_20415 = state_19118;
(statearr_19166_20415[(1)] = cljs.core.first((state_19118[(4)])));

} else {
throw ex__17263__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20416 = state_19118;
state_19118 = G__20416;
continue;
} else {
return ret_value__17261__auto__;
}
break;
}
});
cljs$core$async$state_machine__17260__auto__ = function(state_19118){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17260__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17260__auto____1.call(this,state_19118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17260__auto____0;
cljs$core$async$state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17260__auto____1;
return cljs$core$async$state_machine__17260__auto__;
})()
})();
var state__17453__auto__ = (function (){var statearr_19168 = f__17452__auto__();
(statearr_19168[(6)] = c__17451__auto___20387);

return statearr_19168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17453__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__19172 = arguments.length;
switch (G__19172) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17451__auto___20418 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17452__auto__ = (function (){var switch__17259__auto__ = (function (state_19208){
var state_val_19209 = (state_19208[(1)]);
if((state_val_19209 === (7))){
var inst_19187 = (state_19208[(7)]);
var inst_19188 = (state_19208[(8)]);
var inst_19187__$1 = (state_19208[(2)]);
var inst_19188__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19187__$1,(0),null);
var inst_19189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_19187__$1,(1),null);
var inst_19190 = (inst_19188__$1 == null);
var state_19208__$1 = (function (){var statearr_19210 = state_19208;
(statearr_19210[(9)] = inst_19189);

(statearr_19210[(7)] = inst_19187__$1);

(statearr_19210[(8)] = inst_19188__$1);

return statearr_19210;
})();
if(cljs.core.truth_(inst_19190)){
var statearr_19211_20426 = state_19208__$1;
(statearr_19211_20426[(1)] = (8));

} else {
var statearr_19212_20427 = state_19208__$1;
(statearr_19212_20427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19209 === (1))){
var inst_19177 = cljs.core.vec(chs);
var inst_19178 = inst_19177;
var state_19208__$1 = (function (){var statearr_19213 = state_19208;
(statearr_19213[(10)] = inst_19178);

return statearr_19213;
})();
var statearr_19214_20428 = state_19208__$1;
(statearr_19214_20428[(2)] = null);

(statearr_19214_20428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19209 === (4))){
var inst_19178 = (state_19208[(10)]);
var state_19208__$1 = state_19208;
return cljs.core.async.ioc_alts_BANG_(state_19208__$1,(7),inst_19178);
} else {
if((state_val_19209 === (6))){
var inst_19204 = (state_19208[(2)]);
var state_19208__$1 = state_19208;
var statearr_19215_20432 = state_19208__$1;
(statearr_19215_20432[(2)] = inst_19204);

(statearr_19215_20432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19209 === (3))){
var inst_19206 = (state_19208[(2)]);
var state_19208__$1 = state_19208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19208__$1,inst_19206);
} else {
if((state_val_19209 === (2))){
var inst_19178 = (state_19208[(10)]);
var inst_19180 = cljs.core.count(inst_19178);
var inst_19181 = (inst_19180 > (0));
var state_19208__$1 = state_19208;
if(cljs.core.truth_(inst_19181)){
var statearr_19217_20433 = state_19208__$1;
(statearr_19217_20433[(1)] = (4));

} else {
var statearr_19220_20434 = state_19208__$1;
(statearr_19220_20434[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19209 === (11))){
var inst_19178 = (state_19208[(10)]);
var inst_19197 = (state_19208[(2)]);
var tmp19216 = inst_19178;
var inst_19178__$1 = tmp19216;
var state_19208__$1 = (function (){var statearr_19223 = state_19208;
(statearr_19223[(11)] = inst_19197);

(statearr_19223[(10)] = inst_19178__$1);

return statearr_19223;
})();
var statearr_19224_20438 = state_19208__$1;
(statearr_19224_20438[(2)] = null);

(statearr_19224_20438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19209 === (9))){
var inst_19188 = (state_19208[(8)]);
var state_19208__$1 = state_19208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19208__$1,(11),out,inst_19188);
} else {
if((state_val_19209 === (5))){
var inst_19202 = cljs.core.async.close_BANG_(out);
var state_19208__$1 = state_19208;
var statearr_19228_20439 = state_19208__$1;
(statearr_19228_20439[(2)] = inst_19202);

(statearr_19228_20439[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19209 === (10))){
var inst_19200 = (state_19208[(2)]);
var state_19208__$1 = state_19208;
var statearr_19229_20443 = state_19208__$1;
(statearr_19229_20443[(2)] = inst_19200);

(statearr_19229_20443[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19209 === (8))){
var inst_19178 = (state_19208[(10)]);
var inst_19189 = (state_19208[(9)]);
var inst_19187 = (state_19208[(7)]);
var inst_19188 = (state_19208[(8)]);
var inst_19192 = (function (){var cs = inst_19178;
var vec__19183 = inst_19187;
var v = inst_19188;
var c = inst_19189;
return (function (p1__19169_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__19169_SHARP_);
});
})();
var inst_19193 = cljs.core.filterv(inst_19192,inst_19178);
var inst_19178__$1 = inst_19193;
var state_19208__$1 = (function (){var statearr_19230 = state_19208;
(statearr_19230[(10)] = inst_19178__$1);

return statearr_19230;
})();
var statearr_19231_20448 = state_19208__$1;
(statearr_19231_20448[(2)] = null);

(statearr_19231_20448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17260__auto__ = null;
var cljs$core$async$state_machine__17260__auto____0 = (function (){
var statearr_19234 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19234[(0)] = cljs$core$async$state_machine__17260__auto__);

(statearr_19234[(1)] = (1));

return statearr_19234;
});
var cljs$core$async$state_machine__17260__auto____1 = (function (state_19208){
while(true){
var ret_value__17261__auto__ = (function (){try{while(true){
var result__17262__auto__ = switch__17259__auto__(state_19208);
if(cljs.core.keyword_identical_QMARK_(result__17262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17262__auto__;
}
break;
}
}catch (e19235){var ex__17263__auto__ = e19235;
var statearr_19236_20449 = state_19208;
(statearr_19236_20449[(2)] = ex__17263__auto__);


if(cljs.core.seq((state_19208[(4)]))){
var statearr_19240_20450 = state_19208;
(statearr_19240_20450[(1)] = cljs.core.first((state_19208[(4)])));

} else {
throw ex__17263__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20451 = state_19208;
state_19208 = G__20451;
continue;
} else {
return ret_value__17261__auto__;
}
break;
}
});
cljs$core$async$state_machine__17260__auto__ = function(state_19208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17260__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17260__auto____1.call(this,state_19208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17260__auto____0;
cljs$core$async$state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17260__auto____1;
return cljs$core$async$state_machine__17260__auto__;
})()
})();
var state__17453__auto__ = (function (){var statearr_19241 = f__17452__auto__();
(statearr_19241[(6)] = c__17451__auto___20418);

return statearr_19241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17453__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__19243 = arguments.length;
switch (G__19243) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17451__auto___20454 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17452__auto__ = (function (){var switch__17259__auto__ = (function (state_19267){
var state_val_19268 = (state_19267[(1)]);
if((state_val_19268 === (7))){
var inst_19249 = (state_19267[(7)]);
var inst_19249__$1 = (state_19267[(2)]);
var inst_19250 = (inst_19249__$1 == null);
var inst_19251 = cljs.core.not(inst_19250);
var state_19267__$1 = (function (){var statearr_19273 = state_19267;
(statearr_19273[(7)] = inst_19249__$1);

return statearr_19273;
})();
if(inst_19251){
var statearr_19274_20456 = state_19267__$1;
(statearr_19274_20456[(1)] = (8));

} else {
var statearr_19275_20458 = state_19267__$1;
(statearr_19275_20458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19268 === (1))){
var inst_19244 = (0);
var state_19267__$1 = (function (){var statearr_19276 = state_19267;
(statearr_19276[(8)] = inst_19244);

return statearr_19276;
})();
var statearr_19277_20460 = state_19267__$1;
(statearr_19277_20460[(2)] = null);

(statearr_19277_20460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19268 === (4))){
var state_19267__$1 = state_19267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19267__$1,(7),ch);
} else {
if((state_val_19268 === (6))){
var inst_19262 = (state_19267[(2)]);
var state_19267__$1 = state_19267;
var statearr_19282_20462 = state_19267__$1;
(statearr_19282_20462[(2)] = inst_19262);

(statearr_19282_20462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19268 === (3))){
var inst_19264 = (state_19267[(2)]);
var inst_19265 = cljs.core.async.close_BANG_(out);
var state_19267__$1 = (function (){var statearr_19283 = state_19267;
(statearr_19283[(9)] = inst_19264);

return statearr_19283;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19267__$1,inst_19265);
} else {
if((state_val_19268 === (2))){
var inst_19244 = (state_19267[(8)]);
var inst_19246 = (inst_19244 < n);
var state_19267__$1 = state_19267;
if(cljs.core.truth_(inst_19246)){
var statearr_19284_20463 = state_19267__$1;
(statearr_19284_20463[(1)] = (4));

} else {
var statearr_19285_20464 = state_19267__$1;
(statearr_19285_20464[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19268 === (11))){
var inst_19244 = (state_19267[(8)]);
var inst_19254 = (state_19267[(2)]);
var inst_19255 = (inst_19244 + (1));
var inst_19244__$1 = inst_19255;
var state_19267__$1 = (function (){var statearr_19286 = state_19267;
(statearr_19286[(10)] = inst_19254);

(statearr_19286[(8)] = inst_19244__$1);

return statearr_19286;
})();
var statearr_19287_20465 = state_19267__$1;
(statearr_19287_20465[(2)] = null);

(statearr_19287_20465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19268 === (9))){
var state_19267__$1 = state_19267;
var statearr_19288_20466 = state_19267__$1;
(statearr_19288_20466[(2)] = null);

(statearr_19288_20466[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19268 === (5))){
var state_19267__$1 = state_19267;
var statearr_19289_20467 = state_19267__$1;
(statearr_19289_20467[(2)] = null);

(statearr_19289_20467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19268 === (10))){
var inst_19259 = (state_19267[(2)]);
var state_19267__$1 = state_19267;
var statearr_19290_20468 = state_19267__$1;
(statearr_19290_20468[(2)] = inst_19259);

(statearr_19290_20468[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19268 === (8))){
var inst_19249 = (state_19267[(7)]);
var state_19267__$1 = state_19267;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19267__$1,(11),out,inst_19249);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17260__auto__ = null;
var cljs$core$async$state_machine__17260__auto____0 = (function (){
var statearr_19291 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19291[(0)] = cljs$core$async$state_machine__17260__auto__);

(statearr_19291[(1)] = (1));

return statearr_19291;
});
var cljs$core$async$state_machine__17260__auto____1 = (function (state_19267){
while(true){
var ret_value__17261__auto__ = (function (){try{while(true){
var result__17262__auto__ = switch__17259__auto__(state_19267);
if(cljs.core.keyword_identical_QMARK_(result__17262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17262__auto__;
}
break;
}
}catch (e19292){var ex__17263__auto__ = e19292;
var statearr_19293_20469 = state_19267;
(statearr_19293_20469[(2)] = ex__17263__auto__);


if(cljs.core.seq((state_19267[(4)]))){
var statearr_19294_20470 = state_19267;
(statearr_19294_20470[(1)] = cljs.core.first((state_19267[(4)])));

} else {
throw ex__17263__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20471 = state_19267;
state_19267 = G__20471;
continue;
} else {
return ret_value__17261__auto__;
}
break;
}
});
cljs$core$async$state_machine__17260__auto__ = function(state_19267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17260__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17260__auto____1.call(this,state_19267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17260__auto____0;
cljs$core$async$state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17260__auto____1;
return cljs$core$async$state_machine__17260__auto__;
})()
})();
var state__17453__auto__ = (function (){var statearr_19296 = f__17452__auto__();
(statearr_19296[(6)] = c__17451__auto___20454);

return statearr_19296;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17453__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19299 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19299 = (function (f,ch,meta19300){
this.f = f;
this.ch = ch;
this.meta19300 = meta19300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19301,meta19300__$1){
var self__ = this;
var _19301__$1 = this;
return (new cljs.core.async.t_cljs$core$async19299(self__.f,self__.ch,meta19300__$1));
}));

(cljs.core.async.t_cljs$core$async19299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19301){
var self__ = this;
var _19301__$1 = this;
return self__.meta19300;
}));

(cljs.core.async.t_cljs$core$async19299.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19299.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19299.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19299.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19299.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19305 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19305 = (function (f,ch,meta19300,_,fn1,meta19306){
this.f = f;
this.ch = ch;
this.meta19300 = meta19300;
this._ = _;
this.fn1 = fn1;
this.meta19306 = meta19306;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19305.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19307,meta19306__$1){
var self__ = this;
var _19307__$1 = this;
return (new cljs.core.async.t_cljs$core$async19305(self__.f,self__.ch,self__.meta19300,self__._,self__.fn1,meta19306__$1));
}));

(cljs.core.async.t_cljs$core$async19305.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19307){
var self__ = this;
var _19307__$1 = this;
return self__.meta19306;
}));

(cljs.core.async.t_cljs$core$async19305.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19305.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async19305.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async19305.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__19298_SHARP_){
var G__19308 = (((p1__19298_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__19298_SHARP_) : self__.f.call(null,p1__19298_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__19308) : f1.call(null,G__19308));
});
}));

(cljs.core.async.t_cljs$core$async19305.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19300","meta19300",-1567377145,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async19299","cljs.core.async/t_cljs$core$async19299",1298413984,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta19306","meta19306",1065163371,null)], null);
}));

(cljs.core.async.t_cljs$core$async19305.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19305.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19305");

(cljs.core.async.t_cljs$core$async19305.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19305");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19305.
 */
cljs.core.async.__GT_t_cljs$core$async19305 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19305(f__$1,ch__$1,meta19300__$1,___$2,fn1__$1,meta19306){
return (new cljs.core.async.t_cljs$core$async19305(f__$1,ch__$1,meta19300__$1,___$2,fn1__$1,meta19306));
});

}

return (new cljs.core.async.t_cljs$core$async19305(self__.f,self__.ch,self__.meta19300,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__19309 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__19309) : self__.f.call(null,G__19309));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async19299.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19299.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async19299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19300","meta19300",-1567377145,null)], null);
}));

(cljs.core.async.t_cljs$core$async19299.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19299");

(cljs.core.async.t_cljs$core$async19299.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19299");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19299.
 */
cljs.core.async.__GT_t_cljs$core$async19299 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async19299(f__$1,ch__$1,meta19300){
return (new cljs.core.async.t_cljs$core$async19299(f__$1,ch__$1,meta19300));
});

}

return (new cljs.core.async.t_cljs$core$async19299(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19310 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19310 = (function (f,ch,meta19311){
this.f = f;
this.ch = ch;
this.meta19311 = meta19311;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19312,meta19311__$1){
var self__ = this;
var _19312__$1 = this;
return (new cljs.core.async.t_cljs$core$async19310(self__.f,self__.ch,meta19311__$1));
}));

(cljs.core.async.t_cljs$core$async19310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19312){
var self__ = this;
var _19312__$1 = this;
return self__.meta19311;
}));

(cljs.core.async.t_cljs$core$async19310.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19310.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19310.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19310.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19310.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19310.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async19310.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19311","meta19311",1024339464,null)], null);
}));

(cljs.core.async.t_cljs$core$async19310.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19310.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19310");

(cljs.core.async.t_cljs$core$async19310.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19310");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19310.
 */
cljs.core.async.__GT_t_cljs$core$async19310 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async19310(f__$1,ch__$1,meta19311){
return (new cljs.core.async.t_cljs$core$async19310(f__$1,ch__$1,meta19311));
});

}

return (new cljs.core.async.t_cljs$core$async19310(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async19313 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async19313 = (function (p,ch,meta19314){
this.p = p;
this.ch = ch;
this.meta19314 = meta19314;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async19313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19315,meta19314__$1){
var self__ = this;
var _19315__$1 = this;
return (new cljs.core.async.t_cljs$core$async19313(self__.p,self__.ch,meta19314__$1));
}));

(cljs.core.async.t_cljs$core$async19313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19315){
var self__ = this;
var _19315__$1 = this;
return self__.meta19314;
}));

(cljs.core.async.t_cljs$core$async19313.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19313.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19313.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async19313.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19313.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async19313.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async19313.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async19313.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta19314","meta19314",1193109422,null)], null);
}));

(cljs.core.async.t_cljs$core$async19313.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async19313.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async19313");

(cljs.core.async.t_cljs$core$async19313.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async19313");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async19313.
 */
cljs.core.async.__GT_t_cljs$core$async19313 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async19313(p__$1,ch__$1,meta19314){
return (new cljs.core.async.t_cljs$core$async19313(p__$1,ch__$1,meta19314));
});

}

return (new cljs.core.async.t_cljs$core$async19313(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__19321 = arguments.length;
switch (G__19321) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17451__auto___20489 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17452__auto__ = (function (){var switch__17259__auto__ = (function (state_19346){
var state_val_19347 = (state_19346[(1)]);
if((state_val_19347 === (7))){
var inst_19342 = (state_19346[(2)]);
var state_19346__$1 = state_19346;
var statearr_19348_20491 = state_19346__$1;
(statearr_19348_20491[(2)] = inst_19342);

(statearr_19348_20491[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19347 === (1))){
var state_19346__$1 = state_19346;
var statearr_19349_20492 = state_19346__$1;
(statearr_19349_20492[(2)] = null);

(statearr_19349_20492[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19347 === (4))){
var inst_19328 = (state_19346[(7)]);
var inst_19328__$1 = (state_19346[(2)]);
var inst_19329 = (inst_19328__$1 == null);
var state_19346__$1 = (function (){var statearr_19350 = state_19346;
(statearr_19350[(7)] = inst_19328__$1);

return statearr_19350;
})();
if(cljs.core.truth_(inst_19329)){
var statearr_19351_20493 = state_19346__$1;
(statearr_19351_20493[(1)] = (5));

} else {
var statearr_19352_20494 = state_19346__$1;
(statearr_19352_20494[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19347 === (6))){
var inst_19328 = (state_19346[(7)]);
var inst_19333 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_19328) : p.call(null,inst_19328));
var state_19346__$1 = state_19346;
if(cljs.core.truth_(inst_19333)){
var statearr_19353_20495 = state_19346__$1;
(statearr_19353_20495[(1)] = (8));

} else {
var statearr_19354_20496 = state_19346__$1;
(statearr_19354_20496[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19347 === (3))){
var inst_19344 = (state_19346[(2)]);
var state_19346__$1 = state_19346;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19346__$1,inst_19344);
} else {
if((state_val_19347 === (2))){
var state_19346__$1 = state_19346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19346__$1,(4),ch);
} else {
if((state_val_19347 === (11))){
var inst_19336 = (state_19346[(2)]);
var state_19346__$1 = state_19346;
var statearr_19355_20497 = state_19346__$1;
(statearr_19355_20497[(2)] = inst_19336);

(statearr_19355_20497[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19347 === (9))){
var state_19346__$1 = state_19346;
var statearr_19356_20499 = state_19346__$1;
(statearr_19356_20499[(2)] = null);

(statearr_19356_20499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19347 === (5))){
var inst_19331 = cljs.core.async.close_BANG_(out);
var state_19346__$1 = state_19346;
var statearr_19357_20500 = state_19346__$1;
(statearr_19357_20500[(2)] = inst_19331);

(statearr_19357_20500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19347 === (10))){
var inst_19339 = (state_19346[(2)]);
var state_19346__$1 = (function (){var statearr_19358 = state_19346;
(statearr_19358[(8)] = inst_19339);

return statearr_19358;
})();
var statearr_19359_20501 = state_19346__$1;
(statearr_19359_20501[(2)] = null);

(statearr_19359_20501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19347 === (8))){
var inst_19328 = (state_19346[(7)]);
var state_19346__$1 = state_19346;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19346__$1,(11),out,inst_19328);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17260__auto__ = null;
var cljs$core$async$state_machine__17260__auto____0 = (function (){
var statearr_19360 = [null,null,null,null,null,null,null,null,null];
(statearr_19360[(0)] = cljs$core$async$state_machine__17260__auto__);

(statearr_19360[(1)] = (1));

return statearr_19360;
});
var cljs$core$async$state_machine__17260__auto____1 = (function (state_19346){
while(true){
var ret_value__17261__auto__ = (function (){try{while(true){
var result__17262__auto__ = switch__17259__auto__(state_19346);
if(cljs.core.keyword_identical_QMARK_(result__17262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17262__auto__;
}
break;
}
}catch (e19361){var ex__17263__auto__ = e19361;
var statearr_19362_20506 = state_19346;
(statearr_19362_20506[(2)] = ex__17263__auto__);


if(cljs.core.seq((state_19346[(4)]))){
var statearr_19371_20507 = state_19346;
(statearr_19371_20507[(1)] = cljs.core.first((state_19346[(4)])));

} else {
throw ex__17263__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20508 = state_19346;
state_19346 = G__20508;
continue;
} else {
return ret_value__17261__auto__;
}
break;
}
});
cljs$core$async$state_machine__17260__auto__ = function(state_19346){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17260__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17260__auto____1.call(this,state_19346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17260__auto____0;
cljs$core$async$state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17260__auto____1;
return cljs$core$async$state_machine__17260__auto__;
})()
})();
var state__17453__auto__ = (function (){var statearr_19378 = f__17452__auto__();
(statearr_19378[(6)] = c__17451__auto___20489);

return statearr_19378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17453__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__19386 = arguments.length;
switch (G__19386) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__17451__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17452__auto__ = (function (){var switch__17259__auto__ = (function (state_19471){
var state_val_19472 = (state_19471[(1)]);
if((state_val_19472 === (7))){
var inst_19467 = (state_19471[(2)]);
var state_19471__$1 = state_19471;
var statearr_19473_20510 = state_19471__$1;
(statearr_19473_20510[(2)] = inst_19467);

(statearr_19473_20510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (20))){
var inst_19436 = (state_19471[(7)]);
var inst_19448 = (state_19471[(2)]);
var inst_19449 = cljs.core.next(inst_19436);
var inst_19420 = inst_19449;
var inst_19421 = null;
var inst_19422 = (0);
var inst_19423 = (0);
var state_19471__$1 = (function (){var statearr_19477 = state_19471;
(statearr_19477[(8)] = inst_19421);

(statearr_19477[(9)] = inst_19420);

(statearr_19477[(10)] = inst_19422);

(statearr_19477[(11)] = inst_19423);

(statearr_19477[(12)] = inst_19448);

return statearr_19477;
})();
var statearr_19478_20511 = state_19471__$1;
(statearr_19478_20511[(2)] = null);

(statearr_19478_20511[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (1))){
var state_19471__$1 = state_19471;
var statearr_19479_20512 = state_19471__$1;
(statearr_19479_20512[(2)] = null);

(statearr_19479_20512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (4))){
var inst_19409 = (state_19471[(13)]);
var inst_19409__$1 = (state_19471[(2)]);
var inst_19410 = (inst_19409__$1 == null);
var state_19471__$1 = (function (){var statearr_19480 = state_19471;
(statearr_19480[(13)] = inst_19409__$1);

return statearr_19480;
})();
if(cljs.core.truth_(inst_19410)){
var statearr_19481_20513 = state_19471__$1;
(statearr_19481_20513[(1)] = (5));

} else {
var statearr_19482_20514 = state_19471__$1;
(statearr_19482_20514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (15))){
var state_19471__$1 = state_19471;
var statearr_19486_20515 = state_19471__$1;
(statearr_19486_20515[(2)] = null);

(statearr_19486_20515[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (21))){
var state_19471__$1 = state_19471;
var statearr_19487_20516 = state_19471__$1;
(statearr_19487_20516[(2)] = null);

(statearr_19487_20516[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (13))){
var inst_19421 = (state_19471[(8)]);
var inst_19420 = (state_19471[(9)]);
var inst_19422 = (state_19471[(10)]);
var inst_19423 = (state_19471[(11)]);
var inst_19432 = (state_19471[(2)]);
var inst_19433 = (inst_19423 + (1));
var tmp19483 = inst_19421;
var tmp19484 = inst_19420;
var tmp19485 = inst_19422;
var inst_19420__$1 = tmp19484;
var inst_19421__$1 = tmp19483;
var inst_19422__$1 = tmp19485;
var inst_19423__$1 = inst_19433;
var state_19471__$1 = (function (){var statearr_19488 = state_19471;
(statearr_19488[(8)] = inst_19421__$1);

(statearr_19488[(14)] = inst_19432);

(statearr_19488[(9)] = inst_19420__$1);

(statearr_19488[(10)] = inst_19422__$1);

(statearr_19488[(11)] = inst_19423__$1);

return statearr_19488;
})();
var statearr_19489_20517 = state_19471__$1;
(statearr_19489_20517[(2)] = null);

(statearr_19489_20517[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (22))){
var state_19471__$1 = state_19471;
var statearr_19490_20518 = state_19471__$1;
(statearr_19490_20518[(2)] = null);

(statearr_19490_20518[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (6))){
var inst_19409 = (state_19471[(13)]);
var inst_19418 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19409) : f.call(null,inst_19409));
var inst_19419 = cljs.core.seq(inst_19418);
var inst_19420 = inst_19419;
var inst_19421 = null;
var inst_19422 = (0);
var inst_19423 = (0);
var state_19471__$1 = (function (){var statearr_19491 = state_19471;
(statearr_19491[(8)] = inst_19421);

(statearr_19491[(9)] = inst_19420);

(statearr_19491[(10)] = inst_19422);

(statearr_19491[(11)] = inst_19423);

return statearr_19491;
})();
var statearr_19492_20520 = state_19471__$1;
(statearr_19492_20520[(2)] = null);

(statearr_19492_20520[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (17))){
var inst_19436 = (state_19471[(7)]);
var inst_19440 = cljs.core.chunk_first(inst_19436);
var inst_19441 = cljs.core.chunk_rest(inst_19436);
var inst_19442 = cljs.core.count(inst_19440);
var inst_19420 = inst_19441;
var inst_19421 = inst_19440;
var inst_19422 = inst_19442;
var inst_19423 = (0);
var state_19471__$1 = (function (){var statearr_19493 = state_19471;
(statearr_19493[(8)] = inst_19421);

(statearr_19493[(9)] = inst_19420);

(statearr_19493[(10)] = inst_19422);

(statearr_19493[(11)] = inst_19423);

return statearr_19493;
})();
var statearr_19494_20522 = state_19471__$1;
(statearr_19494_20522[(2)] = null);

(statearr_19494_20522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (3))){
var inst_19469 = (state_19471[(2)]);
var state_19471__$1 = state_19471;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19471__$1,inst_19469);
} else {
if((state_val_19472 === (12))){
var inst_19457 = (state_19471[(2)]);
var state_19471__$1 = state_19471;
var statearr_19495_20524 = state_19471__$1;
(statearr_19495_20524[(2)] = inst_19457);

(statearr_19495_20524[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (2))){
var state_19471__$1 = state_19471;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19471__$1,(4),in$);
} else {
if((state_val_19472 === (23))){
var inst_19465 = (state_19471[(2)]);
var state_19471__$1 = state_19471;
var statearr_19496_20525 = state_19471__$1;
(statearr_19496_20525[(2)] = inst_19465);

(statearr_19496_20525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (19))){
var inst_19452 = (state_19471[(2)]);
var state_19471__$1 = state_19471;
var statearr_19497_20528 = state_19471__$1;
(statearr_19497_20528[(2)] = inst_19452);

(statearr_19497_20528[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (11))){
var inst_19436 = (state_19471[(7)]);
var inst_19420 = (state_19471[(9)]);
var inst_19436__$1 = cljs.core.seq(inst_19420);
var state_19471__$1 = (function (){var statearr_19498 = state_19471;
(statearr_19498[(7)] = inst_19436__$1);

return statearr_19498;
})();
if(inst_19436__$1){
var statearr_19499_20530 = state_19471__$1;
(statearr_19499_20530[(1)] = (14));

} else {
var statearr_19500_20531 = state_19471__$1;
(statearr_19500_20531[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (9))){
var inst_19459 = (state_19471[(2)]);
var inst_19460 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_19471__$1 = (function (){var statearr_19501 = state_19471;
(statearr_19501[(15)] = inst_19459);

return statearr_19501;
})();
if(cljs.core.truth_(inst_19460)){
var statearr_19502_20537 = state_19471__$1;
(statearr_19502_20537[(1)] = (21));

} else {
var statearr_19503_20538 = state_19471__$1;
(statearr_19503_20538[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (5))){
var inst_19412 = cljs.core.async.close_BANG_(out);
var state_19471__$1 = state_19471;
var statearr_19504_20539 = state_19471__$1;
(statearr_19504_20539[(2)] = inst_19412);

(statearr_19504_20539[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (14))){
var inst_19436 = (state_19471[(7)]);
var inst_19438 = cljs.core.chunked_seq_QMARK_(inst_19436);
var state_19471__$1 = state_19471;
if(inst_19438){
var statearr_19505_20541 = state_19471__$1;
(statearr_19505_20541[(1)] = (17));

} else {
var statearr_19506_20542 = state_19471__$1;
(statearr_19506_20542[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (16))){
var inst_19455 = (state_19471[(2)]);
var state_19471__$1 = state_19471;
var statearr_19507_20543 = state_19471__$1;
(statearr_19507_20543[(2)] = inst_19455);

(statearr_19507_20543[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19472 === (10))){
var inst_19421 = (state_19471[(8)]);
var inst_19423 = (state_19471[(11)]);
var inst_19430 = cljs.core._nth(inst_19421,inst_19423);
var state_19471__$1 = state_19471;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19471__$1,(13),out,inst_19430);
} else {
if((state_val_19472 === (18))){
var inst_19436 = (state_19471[(7)]);
var inst_19446 = cljs.core.first(inst_19436);
var state_19471__$1 = state_19471;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19471__$1,(20),out,inst_19446);
} else {
if((state_val_19472 === (8))){
var inst_19422 = (state_19471[(10)]);
var inst_19423 = (state_19471[(11)]);
var inst_19425 = (inst_19423 < inst_19422);
var inst_19426 = inst_19425;
var state_19471__$1 = state_19471;
if(cljs.core.truth_(inst_19426)){
var statearr_19508_20549 = state_19471__$1;
(statearr_19508_20549[(1)] = (10));

} else {
var statearr_19509_20550 = state_19471__$1;
(statearr_19509_20550[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__17260__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__17260__auto____0 = (function (){
var statearr_19510 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19510[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__17260__auto__);

(statearr_19510[(1)] = (1));

return statearr_19510;
});
var cljs$core$async$mapcat_STAR__$_state_machine__17260__auto____1 = (function (state_19471){
while(true){
var ret_value__17261__auto__ = (function (){try{while(true){
var result__17262__auto__ = switch__17259__auto__(state_19471);
if(cljs.core.keyword_identical_QMARK_(result__17262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17262__auto__;
}
break;
}
}catch (e19511){var ex__17263__auto__ = e19511;
var statearr_19512_20551 = state_19471;
(statearr_19512_20551[(2)] = ex__17263__auto__);


if(cljs.core.seq((state_19471[(4)]))){
var statearr_19513_20552 = state_19471;
(statearr_19513_20552[(1)] = cljs.core.first((state_19471[(4)])));

} else {
throw ex__17263__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20553 = state_19471;
state_19471 = G__20553;
continue;
} else {
return ret_value__17261__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__17260__auto__ = function(state_19471){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__17260__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__17260__auto____1.call(this,state_19471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__17260__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__17260__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__17260__auto__;
})()
})();
var state__17453__auto__ = (function (){var statearr_19522 = f__17452__auto__();
(statearr_19522[(6)] = c__17451__auto__);

return statearr_19522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17453__auto__);
}));

return c__17451__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__19527 = arguments.length;
switch (G__19527) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__19529 = arguments.length;
switch (G__19529) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__19531 = arguments.length;
switch (G__19531) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17451__auto___20558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17452__auto__ = (function (){var switch__17259__auto__ = (function (state_19555){
var state_val_19556 = (state_19555[(1)]);
if((state_val_19556 === (7))){
var inst_19550 = (state_19555[(2)]);
var state_19555__$1 = state_19555;
var statearr_19557_20561 = state_19555__$1;
(statearr_19557_20561[(2)] = inst_19550);

(statearr_19557_20561[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19556 === (1))){
var inst_19532 = null;
var state_19555__$1 = (function (){var statearr_19558 = state_19555;
(statearr_19558[(7)] = inst_19532);

return statearr_19558;
})();
var statearr_19560_20562 = state_19555__$1;
(statearr_19560_20562[(2)] = null);

(statearr_19560_20562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19556 === (4))){
var inst_19535 = (state_19555[(8)]);
var inst_19535__$1 = (state_19555[(2)]);
var inst_19536 = (inst_19535__$1 == null);
var inst_19537 = cljs.core.not(inst_19536);
var state_19555__$1 = (function (){var statearr_19561 = state_19555;
(statearr_19561[(8)] = inst_19535__$1);

return statearr_19561;
})();
if(inst_19537){
var statearr_19562_20567 = state_19555__$1;
(statearr_19562_20567[(1)] = (5));

} else {
var statearr_19564_20572 = state_19555__$1;
(statearr_19564_20572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19556 === (6))){
var state_19555__$1 = state_19555;
var statearr_19565_20574 = state_19555__$1;
(statearr_19565_20574[(2)] = null);

(statearr_19565_20574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19556 === (3))){
var inst_19552 = (state_19555[(2)]);
var inst_19553 = cljs.core.async.close_BANG_(out);
var state_19555__$1 = (function (){var statearr_19566 = state_19555;
(statearr_19566[(9)] = inst_19552);

return statearr_19566;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19555__$1,inst_19553);
} else {
if((state_val_19556 === (2))){
var state_19555__$1 = state_19555;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19555__$1,(4),ch);
} else {
if((state_val_19556 === (11))){
var inst_19535 = (state_19555[(8)]);
var inst_19544 = (state_19555[(2)]);
var inst_19532 = inst_19535;
var state_19555__$1 = (function (){var statearr_19567 = state_19555;
(statearr_19567[(10)] = inst_19544);

(statearr_19567[(7)] = inst_19532);

return statearr_19567;
})();
var statearr_19570_20579 = state_19555__$1;
(statearr_19570_20579[(2)] = null);

(statearr_19570_20579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19556 === (9))){
var inst_19535 = (state_19555[(8)]);
var state_19555__$1 = state_19555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19555__$1,(11),out,inst_19535);
} else {
if((state_val_19556 === (5))){
var inst_19532 = (state_19555[(7)]);
var inst_19535 = (state_19555[(8)]);
var inst_19539 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19535,inst_19532);
var state_19555__$1 = state_19555;
if(inst_19539){
var statearr_19572_20585 = state_19555__$1;
(statearr_19572_20585[(1)] = (8));

} else {
var statearr_19573_20586 = state_19555__$1;
(statearr_19573_20586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19556 === (10))){
var inst_19547 = (state_19555[(2)]);
var state_19555__$1 = state_19555;
var statearr_19575_20587 = state_19555__$1;
(statearr_19575_20587[(2)] = inst_19547);

(statearr_19575_20587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19556 === (8))){
var inst_19532 = (state_19555[(7)]);
var tmp19571 = inst_19532;
var inst_19532__$1 = tmp19571;
var state_19555__$1 = (function (){var statearr_19577 = state_19555;
(statearr_19577[(7)] = inst_19532__$1);

return statearr_19577;
})();
var statearr_19578_20589 = state_19555__$1;
(statearr_19578_20589[(2)] = null);

(statearr_19578_20589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17260__auto__ = null;
var cljs$core$async$state_machine__17260__auto____0 = (function (){
var statearr_19579 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_19579[(0)] = cljs$core$async$state_machine__17260__auto__);

(statearr_19579[(1)] = (1));

return statearr_19579;
});
var cljs$core$async$state_machine__17260__auto____1 = (function (state_19555){
while(true){
var ret_value__17261__auto__ = (function (){try{while(true){
var result__17262__auto__ = switch__17259__auto__(state_19555);
if(cljs.core.keyword_identical_QMARK_(result__17262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17262__auto__;
}
break;
}
}catch (e19580){var ex__17263__auto__ = e19580;
var statearr_19581_20596 = state_19555;
(statearr_19581_20596[(2)] = ex__17263__auto__);


if(cljs.core.seq((state_19555[(4)]))){
var statearr_19584_20597 = state_19555;
(statearr_19584_20597[(1)] = cljs.core.first((state_19555[(4)])));

} else {
throw ex__17263__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20598 = state_19555;
state_19555 = G__20598;
continue;
} else {
return ret_value__17261__auto__;
}
break;
}
});
cljs$core$async$state_machine__17260__auto__ = function(state_19555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17260__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17260__auto____1.call(this,state_19555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17260__auto____0;
cljs$core$async$state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17260__auto____1;
return cljs$core$async$state_machine__17260__auto__;
})()
})();
var state__17453__auto__ = (function (){var statearr_19585 = f__17452__auto__();
(statearr_19585[(6)] = c__17451__auto___20558);

return statearr_19585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17453__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__19587 = arguments.length;
switch (G__19587) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17451__auto___20608 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17452__auto__ = (function (){var switch__17259__auto__ = (function (state_19625){
var state_val_19626 = (state_19625[(1)]);
if((state_val_19626 === (7))){
var inst_19621 = (state_19625[(2)]);
var state_19625__$1 = state_19625;
var statearr_19630_20609 = state_19625__$1;
(statearr_19630_20609[(2)] = inst_19621);

(statearr_19630_20609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19626 === (1))){
var inst_19588 = (new Array(n));
var inst_19589 = inst_19588;
var inst_19590 = (0);
var state_19625__$1 = (function (){var statearr_19631 = state_19625;
(statearr_19631[(7)] = inst_19590);

(statearr_19631[(8)] = inst_19589);

return statearr_19631;
})();
var statearr_19632_20614 = state_19625__$1;
(statearr_19632_20614[(2)] = null);

(statearr_19632_20614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19626 === (4))){
var inst_19593 = (state_19625[(9)]);
var inst_19593__$1 = (state_19625[(2)]);
var inst_19594 = (inst_19593__$1 == null);
var inst_19595 = cljs.core.not(inst_19594);
var state_19625__$1 = (function (){var statearr_19633 = state_19625;
(statearr_19633[(9)] = inst_19593__$1);

return statearr_19633;
})();
if(inst_19595){
var statearr_19634_20615 = state_19625__$1;
(statearr_19634_20615[(1)] = (5));

} else {
var statearr_19635_20616 = state_19625__$1;
(statearr_19635_20616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19626 === (15))){
var inst_19615 = (state_19625[(2)]);
var state_19625__$1 = state_19625;
var statearr_19636_20617 = state_19625__$1;
(statearr_19636_20617[(2)] = inst_19615);

(statearr_19636_20617[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19626 === (13))){
var state_19625__$1 = state_19625;
var statearr_19637_20618 = state_19625__$1;
(statearr_19637_20618[(2)] = null);

(statearr_19637_20618[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19626 === (6))){
var inst_19590 = (state_19625[(7)]);
var inst_19611 = (inst_19590 > (0));
var state_19625__$1 = state_19625;
if(cljs.core.truth_(inst_19611)){
var statearr_19638_20619 = state_19625__$1;
(statearr_19638_20619[(1)] = (12));

} else {
var statearr_19642_20620 = state_19625__$1;
(statearr_19642_20620[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19626 === (3))){
var inst_19623 = (state_19625[(2)]);
var state_19625__$1 = state_19625;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19625__$1,inst_19623);
} else {
if((state_val_19626 === (12))){
var inst_19589 = (state_19625[(8)]);
var inst_19613 = cljs.core.vec(inst_19589);
var state_19625__$1 = state_19625;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19625__$1,(15),out,inst_19613);
} else {
if((state_val_19626 === (2))){
var state_19625__$1 = state_19625;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19625__$1,(4),ch);
} else {
if((state_val_19626 === (11))){
var inst_19605 = (state_19625[(2)]);
var inst_19606 = (new Array(n));
var inst_19589 = inst_19606;
var inst_19590 = (0);
var state_19625__$1 = (function (){var statearr_19653 = state_19625;
(statearr_19653[(7)] = inst_19590);

(statearr_19653[(8)] = inst_19589);

(statearr_19653[(10)] = inst_19605);

return statearr_19653;
})();
var statearr_19654_20638 = state_19625__$1;
(statearr_19654_20638[(2)] = null);

(statearr_19654_20638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19626 === (9))){
var inst_19589 = (state_19625[(8)]);
var inst_19603 = cljs.core.vec(inst_19589);
var state_19625__$1 = state_19625;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19625__$1,(11),out,inst_19603);
} else {
if((state_val_19626 === (5))){
var inst_19590 = (state_19625[(7)]);
var inst_19589 = (state_19625[(8)]);
var inst_19598 = (state_19625[(11)]);
var inst_19593 = (state_19625[(9)]);
var inst_19597 = (inst_19589[inst_19590] = inst_19593);
var inst_19598__$1 = (inst_19590 + (1));
var inst_19599 = (inst_19598__$1 < n);
var state_19625__$1 = (function (){var statearr_19655 = state_19625;
(statearr_19655[(12)] = inst_19597);

(statearr_19655[(11)] = inst_19598__$1);

return statearr_19655;
})();
if(cljs.core.truth_(inst_19599)){
var statearr_19663_20646 = state_19625__$1;
(statearr_19663_20646[(1)] = (8));

} else {
var statearr_19664_20647 = state_19625__$1;
(statearr_19664_20647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19626 === (14))){
var inst_19618 = (state_19625[(2)]);
var inst_19619 = cljs.core.async.close_BANG_(out);
var state_19625__$1 = (function (){var statearr_19669 = state_19625;
(statearr_19669[(13)] = inst_19618);

return statearr_19669;
})();
var statearr_19670_20648 = state_19625__$1;
(statearr_19670_20648[(2)] = inst_19619);

(statearr_19670_20648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19626 === (10))){
var inst_19609 = (state_19625[(2)]);
var state_19625__$1 = state_19625;
var statearr_19671_20649 = state_19625__$1;
(statearr_19671_20649[(2)] = inst_19609);

(statearr_19671_20649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19626 === (8))){
var inst_19589 = (state_19625[(8)]);
var inst_19598 = (state_19625[(11)]);
var tmp19665 = inst_19589;
var inst_19589__$1 = tmp19665;
var inst_19590 = inst_19598;
var state_19625__$1 = (function (){var statearr_19672 = state_19625;
(statearr_19672[(7)] = inst_19590);

(statearr_19672[(8)] = inst_19589__$1);

return statearr_19672;
})();
var statearr_19673_20655 = state_19625__$1;
(statearr_19673_20655[(2)] = null);

(statearr_19673_20655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17260__auto__ = null;
var cljs$core$async$state_machine__17260__auto____0 = (function (){
var statearr_19684 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19684[(0)] = cljs$core$async$state_machine__17260__auto__);

(statearr_19684[(1)] = (1));

return statearr_19684;
});
var cljs$core$async$state_machine__17260__auto____1 = (function (state_19625){
while(true){
var ret_value__17261__auto__ = (function (){try{while(true){
var result__17262__auto__ = switch__17259__auto__(state_19625);
if(cljs.core.keyword_identical_QMARK_(result__17262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17262__auto__;
}
break;
}
}catch (e19685){var ex__17263__auto__ = e19685;
var statearr_19689_20665 = state_19625;
(statearr_19689_20665[(2)] = ex__17263__auto__);


if(cljs.core.seq((state_19625[(4)]))){
var statearr_19690_20668 = state_19625;
(statearr_19690_20668[(1)] = cljs.core.first((state_19625[(4)])));

} else {
throw ex__17263__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20676 = state_19625;
state_19625 = G__20676;
continue;
} else {
return ret_value__17261__auto__;
}
break;
}
});
cljs$core$async$state_machine__17260__auto__ = function(state_19625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17260__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17260__auto____1.call(this,state_19625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17260__auto____0;
cljs$core$async$state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17260__auto____1;
return cljs$core$async$state_machine__17260__auto__;
})()
})();
var state__17453__auto__ = (function (){var statearr_19695 = f__17452__auto__();
(statearr_19695[(6)] = c__17451__auto___20608);

return statearr_19695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17453__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__19699 = arguments.length;
switch (G__19699) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__17451__auto___20697 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17452__auto__ = (function (){var switch__17259__auto__ = (function (state_19744){
var state_val_19745 = (state_19744[(1)]);
if((state_val_19745 === (7))){
var inst_19740 = (state_19744[(2)]);
var state_19744__$1 = state_19744;
var statearr_19746_20698 = state_19744__$1;
(statearr_19746_20698[(2)] = inst_19740);

(statearr_19746_20698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (1))){
var inst_19700 = [];
var inst_19701 = inst_19700;
var inst_19702 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_19744__$1 = (function (){var statearr_19747 = state_19744;
(statearr_19747[(7)] = inst_19702);

(statearr_19747[(8)] = inst_19701);

return statearr_19747;
})();
var statearr_19748_20706 = state_19744__$1;
(statearr_19748_20706[(2)] = null);

(statearr_19748_20706[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (4))){
var inst_19705 = (state_19744[(9)]);
var inst_19705__$1 = (state_19744[(2)]);
var inst_19706 = (inst_19705__$1 == null);
var inst_19707 = cljs.core.not(inst_19706);
var state_19744__$1 = (function (){var statearr_19749 = state_19744;
(statearr_19749[(9)] = inst_19705__$1);

return statearr_19749;
})();
if(inst_19707){
var statearr_19750_20707 = state_19744__$1;
(statearr_19750_20707[(1)] = (5));

} else {
var statearr_19751_20708 = state_19744__$1;
(statearr_19751_20708[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (15))){
var inst_19701 = (state_19744[(8)]);
var inst_19732 = cljs.core.vec(inst_19701);
var state_19744__$1 = state_19744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19744__$1,(18),out,inst_19732);
} else {
if((state_val_19745 === (13))){
var inst_19727 = (state_19744[(2)]);
var state_19744__$1 = state_19744;
var statearr_19752_20715 = state_19744__$1;
(statearr_19752_20715[(2)] = inst_19727);

(statearr_19752_20715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (6))){
var inst_19701 = (state_19744[(8)]);
var inst_19729 = inst_19701.length;
var inst_19730 = (inst_19729 > (0));
var state_19744__$1 = state_19744;
if(cljs.core.truth_(inst_19730)){
var statearr_19753_20724 = state_19744__$1;
(statearr_19753_20724[(1)] = (15));

} else {
var statearr_19754_20725 = state_19744__$1;
(statearr_19754_20725[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (17))){
var inst_19737 = (state_19744[(2)]);
var inst_19738 = cljs.core.async.close_BANG_(out);
var state_19744__$1 = (function (){var statearr_19755 = state_19744;
(statearr_19755[(10)] = inst_19737);

return statearr_19755;
})();
var statearr_19756_20726 = state_19744__$1;
(statearr_19756_20726[(2)] = inst_19738);

(statearr_19756_20726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (3))){
var inst_19742 = (state_19744[(2)]);
var state_19744__$1 = state_19744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19744__$1,inst_19742);
} else {
if((state_val_19745 === (12))){
var inst_19701 = (state_19744[(8)]);
var inst_19720 = cljs.core.vec(inst_19701);
var state_19744__$1 = state_19744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19744__$1,(14),out,inst_19720);
} else {
if((state_val_19745 === (2))){
var state_19744__$1 = state_19744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19744__$1,(4),ch);
} else {
if((state_val_19745 === (11))){
var inst_19705 = (state_19744[(9)]);
var inst_19709 = (state_19744[(11)]);
var inst_19701 = (state_19744[(8)]);
var inst_19717 = inst_19701.push(inst_19705);
var tmp19757 = inst_19701;
var inst_19701__$1 = tmp19757;
var inst_19702 = inst_19709;
var state_19744__$1 = (function (){var statearr_19760 = state_19744;
(statearr_19760[(7)] = inst_19702);

(statearr_19760[(8)] = inst_19701__$1);

(statearr_19760[(12)] = inst_19717);

return statearr_19760;
})();
var statearr_19761_20736 = state_19744__$1;
(statearr_19761_20736[(2)] = null);

(statearr_19761_20736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (9))){
var inst_19702 = (state_19744[(7)]);
var inst_19713 = cljs.core.keyword_identical_QMARK_(inst_19702,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_19744__$1 = state_19744;
var statearr_19762_20739 = state_19744__$1;
(statearr_19762_20739[(2)] = inst_19713);

(statearr_19762_20739[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (5))){
var inst_19705 = (state_19744[(9)]);
var inst_19702 = (state_19744[(7)]);
var inst_19709 = (state_19744[(11)]);
var inst_19710 = (state_19744[(13)]);
var inst_19709__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_19705) : f.call(null,inst_19705));
var inst_19710__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_19709__$1,inst_19702);
var state_19744__$1 = (function (){var statearr_19763 = state_19744;
(statearr_19763[(11)] = inst_19709__$1);

(statearr_19763[(13)] = inst_19710__$1);

return statearr_19763;
})();
if(inst_19710__$1){
var statearr_19765_20746 = state_19744__$1;
(statearr_19765_20746[(1)] = (8));

} else {
var statearr_19766_20749 = state_19744__$1;
(statearr_19766_20749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (14))){
var inst_19705 = (state_19744[(9)]);
var inst_19709 = (state_19744[(11)]);
var inst_19722 = (state_19744[(2)]);
var inst_19723 = [];
var inst_19724 = inst_19723.push(inst_19705);
var inst_19701 = inst_19723;
var inst_19702 = inst_19709;
var state_19744__$1 = (function (){var statearr_19777 = state_19744;
(statearr_19777[(7)] = inst_19702);

(statearr_19777[(14)] = inst_19722);

(statearr_19777[(8)] = inst_19701);

(statearr_19777[(15)] = inst_19724);

return statearr_19777;
})();
var statearr_19778_20750 = state_19744__$1;
(statearr_19778_20750[(2)] = null);

(statearr_19778_20750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (16))){
var state_19744__$1 = state_19744;
var statearr_19779_20751 = state_19744__$1;
(statearr_19779_20751[(2)] = null);

(statearr_19779_20751[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (10))){
var inst_19715 = (state_19744[(2)]);
var state_19744__$1 = state_19744;
if(cljs.core.truth_(inst_19715)){
var statearr_19780_20754 = state_19744__$1;
(statearr_19780_20754[(1)] = (11));

} else {
var statearr_19781_20755 = state_19744__$1;
(statearr_19781_20755[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (18))){
var inst_19734 = (state_19744[(2)]);
var state_19744__$1 = state_19744;
var statearr_19783_20758 = state_19744__$1;
(statearr_19783_20758[(2)] = inst_19734);

(statearr_19783_20758[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19745 === (8))){
var inst_19710 = (state_19744[(13)]);
var state_19744__$1 = state_19744;
var statearr_19784_20760 = state_19744__$1;
(statearr_19784_20760[(2)] = inst_19710);

(statearr_19784_20760[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__17260__auto__ = null;
var cljs$core$async$state_machine__17260__auto____0 = (function (){
var statearr_19786 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_19786[(0)] = cljs$core$async$state_machine__17260__auto__);

(statearr_19786[(1)] = (1));

return statearr_19786;
});
var cljs$core$async$state_machine__17260__auto____1 = (function (state_19744){
while(true){
var ret_value__17261__auto__ = (function (){try{while(true){
var result__17262__auto__ = switch__17259__auto__(state_19744);
if(cljs.core.keyword_identical_QMARK_(result__17262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17262__auto__;
}
break;
}
}catch (e19787){var ex__17263__auto__ = e19787;
var statearr_19788_20764 = state_19744;
(statearr_19788_20764[(2)] = ex__17263__auto__);


if(cljs.core.seq((state_19744[(4)]))){
var statearr_19789_20765 = state_19744;
(statearr_19789_20765[(1)] = cljs.core.first((state_19744[(4)])));

} else {
throw ex__17263__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__20769 = state_19744;
state_19744 = G__20769;
continue;
} else {
return ret_value__17261__auto__;
}
break;
}
});
cljs$core$async$state_machine__17260__auto__ = function(state_19744){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__17260__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__17260__auto____1.call(this,state_19744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__17260__auto____0;
cljs$core$async$state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__17260__auto____1;
return cljs$core$async$state_machine__17260__auto__;
})()
})();
var state__17453__auto__ = (function (){var statearr_19790 = f__17452__auto__();
(statearr_19790[(6)] = c__17451__auto___20697);

return statearr_19790;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17453__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
