goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14330 = arguments.length;
switch (G__14330) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14331 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14331 = (function (f,blockable,meta14332){
this.f = f;
this.blockable = blockable;
this.meta14332 = meta14332;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14333,meta14332__$1){
var self__ = this;
var _14333__$1 = this;
return (new cljs.core.async.t_cljs$core$async14331(self__.f,self__.blockable,meta14332__$1));
}));

(cljs.core.async.t_cljs$core$async14331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14333){
var self__ = this;
var _14333__$1 = this;
return self__.meta14332;
}));

(cljs.core.async.t_cljs$core$async14331.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14331.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14331.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14331.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14331.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14332","meta14332",271519482,null)], null);
}));

(cljs.core.async.t_cljs$core$async14331.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14331.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14331");

(cljs.core.async.t_cljs$core$async14331.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14331");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14331.
 */
cljs.core.async.__GT_t_cljs$core$async14331 = (function cljs$core$async$__GT_t_cljs$core$async14331(f__$1,blockable__$1,meta14332){
return (new cljs.core.async.t_cljs$core$async14331(f__$1,blockable__$1,meta14332));
});

}

return (new cljs.core.async.t_cljs$core$async14331(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14357 = arguments.length;
switch (G__14357) {
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
var G__14377 = arguments.length;
switch (G__14377) {
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
var G__14385 = arguments.length;
switch (G__14385) {
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
var val_17474 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17474) : fn1.call(null,val_17474));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17474) : fn1.call(null,val_17474));
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
var G__14394 = arguments.length;
switch (G__14394) {
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
var n__5636__auto___17484 = n;
var x_17485 = (0);
while(true){
if((x_17485 < n__5636__auto___17484)){
(a[x_17485] = x_17485);

var G__17486 = (x_17485 + (1));
x_17485 = G__17486;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14398 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14398 = (function (flag,meta14399){
this.flag = flag;
this.meta14399 = meta14399;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14400,meta14399__$1){
var self__ = this;
var _14400__$1 = this;
return (new cljs.core.async.t_cljs$core$async14398(self__.flag,meta14399__$1));
}));

(cljs.core.async.t_cljs$core$async14398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14400){
var self__ = this;
var _14400__$1 = this;
return self__.meta14399;
}));

(cljs.core.async.t_cljs$core$async14398.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14398.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14398.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14398.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14398.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14399","meta14399",-1457418335,null)], null);
}));

(cljs.core.async.t_cljs$core$async14398.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14398.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14398");

(cljs.core.async.t_cljs$core$async14398.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14398");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14398.
 */
cljs.core.async.__GT_t_cljs$core$async14398 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14398(flag__$1,meta14399){
return (new cljs.core.async.t_cljs$core$async14398(flag__$1,meta14399));
});

}

return (new cljs.core.async.t_cljs$core$async14398(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14405 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14405 = (function (flag,cb,meta14406){
this.flag = flag;
this.cb = cb;
this.meta14406 = meta14406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14407,meta14406__$1){
var self__ = this;
var _14407__$1 = this;
return (new cljs.core.async.t_cljs$core$async14405(self__.flag,self__.cb,meta14406__$1));
}));

(cljs.core.async.t_cljs$core$async14405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14407){
var self__ = this;
var _14407__$1 = this;
return self__.meta14406;
}));

(cljs.core.async.t_cljs$core$async14405.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14405.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14405.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14405.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14405.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14406","meta14406",231388716,null)], null);
}));

(cljs.core.async.t_cljs$core$async14405.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14405.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14405");

(cljs.core.async.t_cljs$core$async14405.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14405");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14405.
 */
cljs.core.async.__GT_t_cljs$core$async14405 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14405(flag__$1,cb__$1,meta14406){
return (new cljs.core.async.t_cljs$core$async14405(flag__$1,cb__$1,meta14406));
});

}

return (new cljs.core.async.t_cljs$core$async14405(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__14413_SHARP_){
var G__14419 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14413_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14419) : fret.call(null,G__14419));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14414_SHARP_){
var G__14420 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14414_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14420) : fret.call(null,G__14420));
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
var G__17511 = (i + (1));
i = G__17511;
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
var len__5769__auto___17512 = arguments.length;
var i__5770__auto___17513 = (0);
while(true){
if((i__5770__auto___17513 < len__5769__auto___17512)){
args__5775__auto__.push((arguments[i__5770__auto___17513]));

var G__17518 = (i__5770__auto___17513 + (1));
i__5770__auto___17513 = G__17518;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14458){
var map__14459 = p__14458;
var map__14459__$1 = cljs.core.__destructure_map(map__14459);
var opts = map__14459__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14433){
var G__14434 = cljs.core.first(seq14433);
var seq14433__$1 = cljs.core.next(seq14433);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14434,seq14433__$1);
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
var G__14480 = arguments.length;
switch (G__14480) {
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
var c__14214__auto___17544 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14215__auto__ = (function (){var switch__13922__auto__ = (function (state_14511){
var state_val_14512 = (state_14511[(1)]);
if((state_val_14512 === (7))){
var inst_14507 = (state_14511[(2)]);
var state_14511__$1 = state_14511;
var statearr_14516_17545 = state_14511__$1;
(statearr_14516_17545[(2)] = inst_14507);

(statearr_14516_17545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14512 === (1))){
var state_14511__$1 = state_14511;
var statearr_14519_17546 = state_14511__$1;
(statearr_14519_17546[(2)] = null);

(statearr_14519_17546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14512 === (4))){
var inst_14485 = (state_14511[(7)]);
var inst_14485__$1 = (state_14511[(2)]);
var inst_14490 = (inst_14485__$1 == null);
var state_14511__$1 = (function (){var statearr_14524 = state_14511;
(statearr_14524[(7)] = inst_14485__$1);

return statearr_14524;
})();
if(cljs.core.truth_(inst_14490)){
var statearr_14528_17549 = state_14511__$1;
(statearr_14528_17549[(1)] = (5));

} else {
var statearr_14529_17550 = state_14511__$1;
(statearr_14529_17550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14512 === (13))){
var state_14511__$1 = state_14511;
var statearr_14531_17551 = state_14511__$1;
(statearr_14531_17551[(2)] = null);

(statearr_14531_17551[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14512 === (6))){
var inst_14485 = (state_14511[(7)]);
var state_14511__$1 = state_14511;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14511__$1,(11),to,inst_14485);
} else {
if((state_val_14512 === (3))){
var inst_14509 = (state_14511[(2)]);
var state_14511__$1 = state_14511;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14511__$1,inst_14509);
} else {
if((state_val_14512 === (12))){
var state_14511__$1 = state_14511;
var statearr_14533_17553 = state_14511__$1;
(statearr_14533_17553[(2)] = null);

(statearr_14533_17553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14512 === (2))){
var state_14511__$1 = state_14511;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14511__$1,(4),from);
} else {
if((state_val_14512 === (11))){
var inst_14500 = (state_14511[(2)]);
var state_14511__$1 = state_14511;
if(cljs.core.truth_(inst_14500)){
var statearr_14534_17559 = state_14511__$1;
(statearr_14534_17559[(1)] = (12));

} else {
var statearr_14535_17560 = state_14511__$1;
(statearr_14535_17560[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14512 === (9))){
var state_14511__$1 = state_14511;
var statearr_14536_17561 = state_14511__$1;
(statearr_14536_17561[(2)] = null);

(statearr_14536_17561[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14512 === (5))){
var state_14511__$1 = state_14511;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14537_17562 = state_14511__$1;
(statearr_14537_17562[(1)] = (8));

} else {
var statearr_14538_17563 = state_14511__$1;
(statearr_14538_17563[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14512 === (14))){
var inst_14505 = (state_14511[(2)]);
var state_14511__$1 = state_14511;
var statearr_14539_17566 = state_14511__$1;
(statearr_14539_17566[(2)] = inst_14505);

(statearr_14539_17566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14512 === (10))){
var inst_14497 = (state_14511[(2)]);
var state_14511__$1 = state_14511;
var statearr_14540_17567 = state_14511__$1;
(statearr_14540_17567[(2)] = inst_14497);

(statearr_14540_17567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14512 === (8))){
var inst_14493 = cljs.core.async.close_BANG_(to);
var state_14511__$1 = state_14511;
var statearr_14542_17568 = state_14511__$1;
(statearr_14542_17568[(2)] = inst_14493);

(statearr_14542_17568[(1)] = (10));


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
var cljs$core$async$state_machine__13923__auto__ = null;
var cljs$core$async$state_machine__13923__auto____0 = (function (){
var statearr_14546 = [null,null,null,null,null,null,null,null];
(statearr_14546[(0)] = cljs$core$async$state_machine__13923__auto__);

(statearr_14546[(1)] = (1));

return statearr_14546;
});
var cljs$core$async$state_machine__13923__auto____1 = (function (state_14511){
while(true){
var ret_value__13924__auto__ = (function (){try{while(true){
var result__13925__auto__ = switch__13922__auto__(state_14511);
if(cljs.core.keyword_identical_QMARK_(result__13925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13925__auto__;
}
break;
}
}catch (e14547){var ex__13926__auto__ = e14547;
var statearr_14548_17569 = state_14511;
(statearr_14548_17569[(2)] = ex__13926__auto__);


if(cljs.core.seq((state_14511[(4)]))){
var statearr_14549_17572 = state_14511;
(statearr_14549_17572[(1)] = cljs.core.first((state_14511[(4)])));

} else {
throw ex__13926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17573 = state_14511;
state_14511 = G__17573;
continue;
} else {
return ret_value__13924__auto__;
}
break;
}
});
cljs$core$async$state_machine__13923__auto__ = function(state_14511){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13923__auto____1.call(this,state_14511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13923__auto____0;
cljs$core$async$state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13923__auto____1;
return cljs$core$async$state_machine__13923__auto__;
})()
})();
var state__14216__auto__ = (function (){var statearr_14550 = f__14215__auto__();
(statearr_14550[(6)] = c__14214__auto___17544);

return statearr_14550;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14216__auto__);
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
var process__$1 = (function (p__14551){
var vec__14552 = p__14551;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14552,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14552,(1),null);
var job = vec__14552;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14214__auto___17576 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14215__auto__ = (function (){var switch__13922__auto__ = (function (state_14561){
var state_val_14562 = (state_14561[(1)]);
if((state_val_14562 === (1))){
var state_14561__$1 = state_14561;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14561__$1,(2),res,v);
} else {
if((state_val_14562 === (2))){
var inst_14558 = (state_14561[(2)]);
var inst_14559 = cljs.core.async.close_BANG_(res);
var state_14561__$1 = (function (){var statearr_14566 = state_14561;
(statearr_14566[(7)] = inst_14558);

return statearr_14566;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14561__$1,inst_14559);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13923__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13923__auto____0 = (function (){
var statearr_14574 = [null,null,null,null,null,null,null,null];
(statearr_14574[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13923__auto__);

(statearr_14574[(1)] = (1));

return statearr_14574;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13923__auto____1 = (function (state_14561){
while(true){
var ret_value__13924__auto__ = (function (){try{while(true){
var result__13925__auto__ = switch__13922__auto__(state_14561);
if(cljs.core.keyword_identical_QMARK_(result__13925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13925__auto__;
}
break;
}
}catch (e14575){var ex__13926__auto__ = e14575;
var statearr_14576_17586 = state_14561;
(statearr_14576_17586[(2)] = ex__13926__auto__);


if(cljs.core.seq((state_14561[(4)]))){
var statearr_14577_17593 = state_14561;
(statearr_14577_17593[(1)] = cljs.core.first((state_14561[(4)])));

} else {
throw ex__13926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17598 = state_14561;
state_14561 = G__17598;
continue;
} else {
return ret_value__13924__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13923__auto__ = function(state_14561){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13923__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13923__auto____1.call(this,state_14561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13923__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13923__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13923__auto__;
})()
})();
var state__14216__auto__ = (function (){var statearr_14580 = f__14215__auto__();
(statearr_14580[(6)] = c__14214__auto___17576);

return statearr_14580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14216__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14586){
var vec__14590 = p__14586;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14590,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14590,(1),null);
var job = vec__14590;
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
var n__5636__auto___17609 = n;
var __17610 = (0);
while(true){
if((__17610 < n__5636__auto___17609)){
var G__14593_17611 = type;
var G__14593_17612__$1 = (((G__14593_17611 instanceof cljs.core.Keyword))?G__14593_17611.fqn:null);
switch (G__14593_17612__$1) {
case "compute":
var c__14214__auto___17615 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17610,c__14214__auto___17615,G__14593_17611,G__14593_17612__$1,n__5636__auto___17609,jobs,results,process__$1,async){
return (function (){
var f__14215__auto__ = (function (){var switch__13922__auto__ = ((function (__17610,c__14214__auto___17615,G__14593_17611,G__14593_17612__$1,n__5636__auto___17609,jobs,results,process__$1,async){
return (function (state_14612){
var state_val_14613 = (state_14612[(1)]);
if((state_val_14613 === (1))){
var state_14612__$1 = state_14612;
var statearr_14614_17617 = state_14612__$1;
(statearr_14614_17617[(2)] = null);

(statearr_14614_17617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14613 === (2))){
var state_14612__$1 = state_14612;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14612__$1,(4),jobs);
} else {
if((state_val_14613 === (3))){
var inst_14607 = (state_14612[(2)]);
var state_14612__$1 = state_14612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14612__$1,inst_14607);
} else {
if((state_val_14613 === (4))){
var inst_14599 = (state_14612[(2)]);
var inst_14600 = process__$1(inst_14599);
var state_14612__$1 = state_14612;
if(cljs.core.truth_(inst_14600)){
var statearr_14622_17632 = state_14612__$1;
(statearr_14622_17632[(1)] = (5));

} else {
var statearr_14623_17633 = state_14612__$1;
(statearr_14623_17633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14613 === (5))){
var state_14612__$1 = state_14612;
var statearr_14624_17634 = state_14612__$1;
(statearr_14624_17634[(2)] = null);

(statearr_14624_17634[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14613 === (6))){
var state_14612__$1 = state_14612;
var statearr_14625_17637 = state_14612__$1;
(statearr_14625_17637[(2)] = null);

(statearr_14625_17637[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14613 === (7))){
var inst_14605 = (state_14612[(2)]);
var state_14612__$1 = state_14612;
var statearr_14627_17644 = state_14612__$1;
(statearr_14627_17644[(2)] = inst_14605);

(statearr_14627_17644[(1)] = (3));


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
});})(__17610,c__14214__auto___17615,G__14593_17611,G__14593_17612__$1,n__5636__auto___17609,jobs,results,process__$1,async))
;
return ((function (__17610,switch__13922__auto__,c__14214__auto___17615,G__14593_17611,G__14593_17612__$1,n__5636__auto___17609,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13923__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13923__auto____0 = (function (){
var statearr_14628 = [null,null,null,null,null,null,null];
(statearr_14628[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13923__auto__);

(statearr_14628[(1)] = (1));

return statearr_14628;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13923__auto____1 = (function (state_14612){
while(true){
var ret_value__13924__auto__ = (function (){try{while(true){
var result__13925__auto__ = switch__13922__auto__(state_14612);
if(cljs.core.keyword_identical_QMARK_(result__13925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13925__auto__;
}
break;
}
}catch (e14629){var ex__13926__auto__ = e14629;
var statearr_14630_17645 = state_14612;
(statearr_14630_17645[(2)] = ex__13926__auto__);


if(cljs.core.seq((state_14612[(4)]))){
var statearr_14632_17646 = state_14612;
(statearr_14632_17646[(1)] = cljs.core.first((state_14612[(4)])));

} else {
throw ex__13926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17648 = state_14612;
state_14612 = G__17648;
continue;
} else {
return ret_value__13924__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13923__auto__ = function(state_14612){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13923__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13923__auto____1.call(this,state_14612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13923__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13923__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13923__auto__;
})()
;})(__17610,switch__13922__auto__,c__14214__auto___17615,G__14593_17611,G__14593_17612__$1,n__5636__auto___17609,jobs,results,process__$1,async))
})();
var state__14216__auto__ = (function (){var statearr_14641 = f__14215__auto__();
(statearr_14641[(6)] = c__14214__auto___17615);

return statearr_14641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14216__auto__);
});})(__17610,c__14214__auto___17615,G__14593_17611,G__14593_17612__$1,n__5636__auto___17609,jobs,results,process__$1,async))
);


break;
case "async":
var c__14214__auto___17650 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17610,c__14214__auto___17650,G__14593_17611,G__14593_17612__$1,n__5636__auto___17609,jobs,results,process__$1,async){
return (function (){
var f__14215__auto__ = (function (){var switch__13922__auto__ = ((function (__17610,c__14214__auto___17650,G__14593_17611,G__14593_17612__$1,n__5636__auto___17609,jobs,results,process__$1,async){
return (function (state_14654){
var state_val_14655 = (state_14654[(1)]);
if((state_val_14655 === (1))){
var state_14654__$1 = state_14654;
var statearr_14657_17653 = state_14654__$1;
(statearr_14657_17653[(2)] = null);

(statearr_14657_17653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14655 === (2))){
var state_14654__$1 = state_14654;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14654__$1,(4),jobs);
} else {
if((state_val_14655 === (3))){
var inst_14652 = (state_14654[(2)]);
var state_14654__$1 = state_14654;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14654__$1,inst_14652);
} else {
if((state_val_14655 === (4))){
var inst_14644 = (state_14654[(2)]);
var inst_14645 = async(inst_14644);
var state_14654__$1 = state_14654;
if(cljs.core.truth_(inst_14645)){
var statearr_14665_17659 = state_14654__$1;
(statearr_14665_17659[(1)] = (5));

} else {
var statearr_14666_17660 = state_14654__$1;
(statearr_14666_17660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14655 === (5))){
var state_14654__$1 = state_14654;
var statearr_14667_17661 = state_14654__$1;
(statearr_14667_17661[(2)] = null);

(statearr_14667_17661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14655 === (6))){
var state_14654__$1 = state_14654;
var statearr_14669_17663 = state_14654__$1;
(statearr_14669_17663[(2)] = null);

(statearr_14669_17663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14655 === (7))){
var inst_14650 = (state_14654[(2)]);
var state_14654__$1 = state_14654;
var statearr_14673_17665 = state_14654__$1;
(statearr_14673_17665[(2)] = inst_14650);

(statearr_14673_17665[(1)] = (3));


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
});})(__17610,c__14214__auto___17650,G__14593_17611,G__14593_17612__$1,n__5636__auto___17609,jobs,results,process__$1,async))
;
return ((function (__17610,switch__13922__auto__,c__14214__auto___17650,G__14593_17611,G__14593_17612__$1,n__5636__auto___17609,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13923__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13923__auto____0 = (function (){
var statearr_14676 = [null,null,null,null,null,null,null];
(statearr_14676[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13923__auto__);

(statearr_14676[(1)] = (1));

return statearr_14676;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13923__auto____1 = (function (state_14654){
while(true){
var ret_value__13924__auto__ = (function (){try{while(true){
var result__13925__auto__ = switch__13922__auto__(state_14654);
if(cljs.core.keyword_identical_QMARK_(result__13925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13925__auto__;
}
break;
}
}catch (e14677){var ex__13926__auto__ = e14677;
var statearr_14678_17698 = state_14654;
(statearr_14678_17698[(2)] = ex__13926__auto__);


if(cljs.core.seq((state_14654[(4)]))){
var statearr_14679_17702 = state_14654;
(statearr_14679_17702[(1)] = cljs.core.first((state_14654[(4)])));

} else {
throw ex__13926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17703 = state_14654;
state_14654 = G__17703;
continue;
} else {
return ret_value__13924__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13923__auto__ = function(state_14654){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13923__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13923__auto____1.call(this,state_14654);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13923__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13923__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13923__auto__;
})()
;})(__17610,switch__13922__auto__,c__14214__auto___17650,G__14593_17611,G__14593_17612__$1,n__5636__auto___17609,jobs,results,process__$1,async))
})();
var state__14216__auto__ = (function (){var statearr_14682 = f__14215__auto__();
(statearr_14682[(6)] = c__14214__auto___17650);

return statearr_14682;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14216__auto__);
});})(__17610,c__14214__auto___17650,G__14593_17611,G__14593_17612__$1,n__5636__auto___17609,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14593_17612__$1)].join('')));

}

var G__17707 = (__17610 + (1));
__17610 = G__17707;
continue;
} else {
}
break;
}

var c__14214__auto___17708 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14215__auto__ = (function (){var switch__13922__auto__ = (function (state_14710){
var state_val_14711 = (state_14710[(1)]);
if((state_val_14711 === (7))){
var inst_14706 = (state_14710[(2)]);
var state_14710__$1 = state_14710;
var statearr_14719_17712 = state_14710__$1;
(statearr_14719_17712[(2)] = inst_14706);

(statearr_14719_17712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14711 === (1))){
var state_14710__$1 = state_14710;
var statearr_14721_17713 = state_14710__$1;
(statearr_14721_17713[(2)] = null);

(statearr_14721_17713[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14711 === (4))){
var inst_14686 = (state_14710[(7)]);
var inst_14686__$1 = (state_14710[(2)]);
var inst_14687 = (inst_14686__$1 == null);
var state_14710__$1 = (function (){var statearr_14725 = state_14710;
(statearr_14725[(7)] = inst_14686__$1);

return statearr_14725;
})();
if(cljs.core.truth_(inst_14687)){
var statearr_14726_17719 = state_14710__$1;
(statearr_14726_17719[(1)] = (5));

} else {
var statearr_14727_17720 = state_14710__$1;
(statearr_14727_17720[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14711 === (6))){
var inst_14686 = (state_14710[(7)]);
var inst_14691 = (state_14710[(8)]);
var inst_14691__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14692 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14694 = [inst_14686,inst_14691__$1];
var inst_14695 = (new cljs.core.PersistentVector(null,2,(5),inst_14692,inst_14694,null));
var state_14710__$1 = (function (){var statearr_14734 = state_14710;
(statearr_14734[(8)] = inst_14691__$1);

return statearr_14734;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14710__$1,(8),jobs,inst_14695);
} else {
if((state_val_14711 === (3))){
var inst_14708 = (state_14710[(2)]);
var state_14710__$1 = state_14710;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14710__$1,inst_14708);
} else {
if((state_val_14711 === (2))){
var state_14710__$1 = state_14710;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14710__$1,(4),from);
} else {
if((state_val_14711 === (9))){
var inst_14703 = (state_14710[(2)]);
var state_14710__$1 = (function (){var statearr_14738 = state_14710;
(statearr_14738[(9)] = inst_14703);

return statearr_14738;
})();
var statearr_14741_17731 = state_14710__$1;
(statearr_14741_17731[(2)] = null);

(statearr_14741_17731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14711 === (5))){
var inst_14689 = cljs.core.async.close_BANG_(jobs);
var state_14710__$1 = state_14710;
var statearr_14743_17732 = state_14710__$1;
(statearr_14743_17732[(2)] = inst_14689);

(statearr_14743_17732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14711 === (8))){
var inst_14691 = (state_14710[(8)]);
var inst_14698 = (state_14710[(2)]);
var state_14710__$1 = (function (){var statearr_14744 = state_14710;
(statearr_14744[(10)] = inst_14698);

return statearr_14744;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14710__$1,(9),results,inst_14691);
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
var cljs$core$async$pipeline_STAR__$_state_machine__13923__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13923__auto____0 = (function (){
var statearr_14745 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14745[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13923__auto__);

(statearr_14745[(1)] = (1));

return statearr_14745;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13923__auto____1 = (function (state_14710){
while(true){
var ret_value__13924__auto__ = (function (){try{while(true){
var result__13925__auto__ = switch__13922__auto__(state_14710);
if(cljs.core.keyword_identical_QMARK_(result__13925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13925__auto__;
}
break;
}
}catch (e14746){var ex__13926__auto__ = e14746;
var statearr_14747_17741 = state_14710;
(statearr_14747_17741[(2)] = ex__13926__auto__);


if(cljs.core.seq((state_14710[(4)]))){
var statearr_14748_17742 = state_14710;
(statearr_14748_17742[(1)] = cljs.core.first((state_14710[(4)])));

} else {
throw ex__13926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17743 = state_14710;
state_14710 = G__17743;
continue;
} else {
return ret_value__13924__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13923__auto__ = function(state_14710){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13923__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13923__auto____1.call(this,state_14710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13923__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13923__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13923__auto__;
})()
})();
var state__14216__auto__ = (function (){var statearr_14752 = f__14215__auto__();
(statearr_14752[(6)] = c__14214__auto___17708);

return statearr_14752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14216__auto__);
}));


var c__14214__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14215__auto__ = (function (){var switch__13922__auto__ = (function (state_14812){
var state_val_14813 = (state_14812[(1)]);
if((state_val_14813 === (7))){
var inst_14808 = (state_14812[(2)]);
var state_14812__$1 = state_14812;
var statearr_14823_17747 = state_14812__$1;
(statearr_14823_17747[(2)] = inst_14808);

(statearr_14823_17747[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (20))){
var state_14812__$1 = state_14812;
var statearr_14832_17748 = state_14812__$1;
(statearr_14832_17748[(2)] = null);

(statearr_14832_17748[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (1))){
var state_14812__$1 = state_14812;
var statearr_14834_17749 = state_14812__$1;
(statearr_14834_17749[(2)] = null);

(statearr_14834_17749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (4))){
var inst_14770 = (state_14812[(7)]);
var inst_14770__$1 = (state_14812[(2)]);
var inst_14772 = (inst_14770__$1 == null);
var state_14812__$1 = (function (){var statearr_14836 = state_14812;
(statearr_14836[(7)] = inst_14770__$1);

return statearr_14836;
})();
if(cljs.core.truth_(inst_14772)){
var statearr_14842_17753 = state_14812__$1;
(statearr_14842_17753[(1)] = (5));

} else {
var statearr_14844_17754 = state_14812__$1;
(statearr_14844_17754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (15))){
var inst_14789 = (state_14812[(8)]);
var state_14812__$1 = state_14812;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14812__$1,(18),to,inst_14789);
} else {
if((state_val_14813 === (21))){
var inst_14803 = (state_14812[(2)]);
var state_14812__$1 = state_14812;
var statearr_14855_17755 = state_14812__$1;
(statearr_14855_17755[(2)] = inst_14803);

(statearr_14855_17755[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (13))){
var inst_14805 = (state_14812[(2)]);
var state_14812__$1 = (function (){var statearr_14862 = state_14812;
(statearr_14862[(9)] = inst_14805);

return statearr_14862;
})();
var statearr_14863_17759 = state_14812__$1;
(statearr_14863_17759[(2)] = null);

(statearr_14863_17759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (6))){
var inst_14770 = (state_14812[(7)]);
var state_14812__$1 = state_14812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14812__$1,(11),inst_14770);
} else {
if((state_val_14813 === (17))){
var inst_14797 = (state_14812[(2)]);
var state_14812__$1 = state_14812;
if(cljs.core.truth_(inst_14797)){
var statearr_14882_17760 = state_14812__$1;
(statearr_14882_17760[(1)] = (19));

} else {
var statearr_14884_17761 = state_14812__$1;
(statearr_14884_17761[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (3))){
var inst_14810 = (state_14812[(2)]);
var state_14812__$1 = state_14812;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14812__$1,inst_14810);
} else {
if((state_val_14813 === (12))){
var inst_14786 = (state_14812[(10)]);
var state_14812__$1 = state_14812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14812__$1,(14),inst_14786);
} else {
if((state_val_14813 === (2))){
var state_14812__$1 = state_14812;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14812__$1,(4),results);
} else {
if((state_val_14813 === (19))){
var state_14812__$1 = state_14812;
var statearr_14889_17763 = state_14812__$1;
(statearr_14889_17763[(2)] = null);

(statearr_14889_17763[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (11))){
var inst_14786 = (state_14812[(2)]);
var state_14812__$1 = (function (){var statearr_14892 = state_14812;
(statearr_14892[(10)] = inst_14786);

return statearr_14892;
})();
var statearr_14893_17764 = state_14812__$1;
(statearr_14893_17764[(2)] = null);

(statearr_14893_17764[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (9))){
var state_14812__$1 = state_14812;
var statearr_14896_17765 = state_14812__$1;
(statearr_14896_17765[(2)] = null);

(statearr_14896_17765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (5))){
var state_14812__$1 = state_14812;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14897_17766 = state_14812__$1;
(statearr_14897_17766[(1)] = (8));

} else {
var statearr_14898_17767 = state_14812__$1;
(statearr_14898_17767[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (14))){
var inst_14789 = (state_14812[(8)]);
var inst_14791 = (state_14812[(11)]);
var inst_14789__$1 = (state_14812[(2)]);
var inst_14790 = (inst_14789__$1 == null);
var inst_14791__$1 = cljs.core.not(inst_14790);
var state_14812__$1 = (function (){var statearr_14900 = state_14812;
(statearr_14900[(8)] = inst_14789__$1);

(statearr_14900[(11)] = inst_14791__$1);

return statearr_14900;
})();
if(inst_14791__$1){
var statearr_14901_17768 = state_14812__$1;
(statearr_14901_17768[(1)] = (15));

} else {
var statearr_14903_17769 = state_14812__$1;
(statearr_14903_17769[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (16))){
var inst_14791 = (state_14812[(11)]);
var state_14812__$1 = state_14812;
var statearr_14905_17770 = state_14812__$1;
(statearr_14905_17770[(2)] = inst_14791);

(statearr_14905_17770[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (10))){
var inst_14779 = (state_14812[(2)]);
var state_14812__$1 = state_14812;
var statearr_14906_17771 = state_14812__$1;
(statearr_14906_17771[(2)] = inst_14779);

(statearr_14906_17771[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (18))){
var inst_14794 = (state_14812[(2)]);
var state_14812__$1 = state_14812;
var statearr_14907_17772 = state_14812__$1;
(statearr_14907_17772[(2)] = inst_14794);

(statearr_14907_17772[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14813 === (8))){
var inst_14775 = cljs.core.async.close_BANG_(to);
var state_14812__$1 = state_14812;
var statearr_14908_17773 = state_14812__$1;
(statearr_14908_17773[(2)] = inst_14775);

(statearr_14908_17773[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__13923__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13923__auto____0 = (function (){
var statearr_14914 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14914[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13923__auto__);

(statearr_14914[(1)] = (1));

return statearr_14914;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13923__auto____1 = (function (state_14812){
while(true){
var ret_value__13924__auto__ = (function (){try{while(true){
var result__13925__auto__ = switch__13922__auto__(state_14812);
if(cljs.core.keyword_identical_QMARK_(result__13925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13925__auto__;
}
break;
}
}catch (e14916){var ex__13926__auto__ = e14916;
var statearr_14918_17782 = state_14812;
(statearr_14918_17782[(2)] = ex__13926__auto__);


if(cljs.core.seq((state_14812[(4)]))){
var statearr_14920_17783 = state_14812;
(statearr_14920_17783[(1)] = cljs.core.first((state_14812[(4)])));

} else {
throw ex__13926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17784 = state_14812;
state_14812 = G__17784;
continue;
} else {
return ret_value__13924__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13923__auto__ = function(state_14812){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13923__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13923__auto____1.call(this,state_14812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13923__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13923__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13923__auto__;
})()
})();
var state__14216__auto__ = (function (){var statearr_14925 = f__14215__auto__();
(statearr_14925[(6)] = c__14214__auto__);

return statearr_14925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14216__auto__);
}));

return c__14214__auto__;
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
var G__14930 = arguments.length;
switch (G__14930) {
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
var G__14937 = arguments.length;
switch (G__14937) {
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
var G__14975 = arguments.length;
switch (G__14975) {
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
var c__14214__auto___17804 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14215__auto__ = (function (){var switch__13922__auto__ = (function (state_15004){
var state_val_15005 = (state_15004[(1)]);
if((state_val_15005 === (7))){
var inst_14999 = (state_15004[(2)]);
var state_15004__$1 = state_15004;
var statearr_15012_17809 = state_15004__$1;
(statearr_15012_17809[(2)] = inst_14999);

(statearr_15012_17809[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15005 === (1))){
var state_15004__$1 = state_15004;
var statearr_15020_17810 = state_15004__$1;
(statearr_15020_17810[(2)] = null);

(statearr_15020_17810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15005 === (4))){
var inst_14980 = (state_15004[(7)]);
var inst_14980__$1 = (state_15004[(2)]);
var inst_14981 = (inst_14980__$1 == null);
var state_15004__$1 = (function (){var statearr_15034 = state_15004;
(statearr_15034[(7)] = inst_14980__$1);

return statearr_15034;
})();
if(cljs.core.truth_(inst_14981)){
var statearr_15038_17813 = state_15004__$1;
(statearr_15038_17813[(1)] = (5));

} else {
var statearr_15039_17814 = state_15004__$1;
(statearr_15039_17814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15005 === (13))){
var state_15004__$1 = state_15004;
var statearr_15040_17815 = state_15004__$1;
(statearr_15040_17815[(2)] = null);

(statearr_15040_17815[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15005 === (6))){
var inst_14980 = (state_15004[(7)]);
var inst_14986 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_14980) : p.call(null,inst_14980));
var state_15004__$1 = state_15004;
if(cljs.core.truth_(inst_14986)){
var statearr_15044_17818 = state_15004__$1;
(statearr_15044_17818[(1)] = (9));

} else {
var statearr_15049_17820 = state_15004__$1;
(statearr_15049_17820[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15005 === (3))){
var inst_15001 = (state_15004[(2)]);
var state_15004__$1 = state_15004;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15004__$1,inst_15001);
} else {
if((state_val_15005 === (12))){
var state_15004__$1 = state_15004;
var statearr_15056_17821 = state_15004__$1;
(statearr_15056_17821[(2)] = null);

(statearr_15056_17821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15005 === (2))){
var state_15004__$1 = state_15004;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15004__$1,(4),ch);
} else {
if((state_val_15005 === (11))){
var inst_14980 = (state_15004[(7)]);
var inst_14990 = (state_15004[(2)]);
var state_15004__$1 = state_15004;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15004__$1,(8),inst_14990,inst_14980);
} else {
if((state_val_15005 === (9))){
var state_15004__$1 = state_15004;
var statearr_15064_17831 = state_15004__$1;
(statearr_15064_17831[(2)] = tc);

(statearr_15064_17831[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15005 === (5))){
var inst_14983 = cljs.core.async.close_BANG_(tc);
var inst_14984 = cljs.core.async.close_BANG_(fc);
var state_15004__$1 = (function (){var statearr_15070 = state_15004;
(statearr_15070[(8)] = inst_14983);

return statearr_15070;
})();
var statearr_15071_17834 = state_15004__$1;
(statearr_15071_17834[(2)] = inst_14984);

(statearr_15071_17834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15005 === (14))){
var inst_14997 = (state_15004[(2)]);
var state_15004__$1 = state_15004;
var statearr_15072_17837 = state_15004__$1;
(statearr_15072_17837[(2)] = inst_14997);

(statearr_15072_17837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15005 === (10))){
var state_15004__$1 = state_15004;
var statearr_15073_17838 = state_15004__$1;
(statearr_15073_17838[(2)] = fc);

(statearr_15073_17838[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15005 === (8))){
var inst_14992 = (state_15004[(2)]);
var state_15004__$1 = state_15004;
if(cljs.core.truth_(inst_14992)){
var statearr_15075_17841 = state_15004__$1;
(statearr_15075_17841[(1)] = (12));

} else {
var statearr_15076_17844 = state_15004__$1;
(statearr_15076_17844[(1)] = (13));

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
var cljs$core$async$state_machine__13923__auto__ = null;
var cljs$core$async$state_machine__13923__auto____0 = (function (){
var statearr_15085 = [null,null,null,null,null,null,null,null,null];
(statearr_15085[(0)] = cljs$core$async$state_machine__13923__auto__);

(statearr_15085[(1)] = (1));

return statearr_15085;
});
var cljs$core$async$state_machine__13923__auto____1 = (function (state_15004){
while(true){
var ret_value__13924__auto__ = (function (){try{while(true){
var result__13925__auto__ = switch__13922__auto__(state_15004);
if(cljs.core.keyword_identical_QMARK_(result__13925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13925__auto__;
}
break;
}
}catch (e15091){var ex__13926__auto__ = e15091;
var statearr_15092_17859 = state_15004;
(statearr_15092_17859[(2)] = ex__13926__auto__);


if(cljs.core.seq((state_15004[(4)]))){
var statearr_15097_17861 = state_15004;
(statearr_15097_17861[(1)] = cljs.core.first((state_15004[(4)])));

} else {
throw ex__13926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17862 = state_15004;
state_15004 = G__17862;
continue;
} else {
return ret_value__13924__auto__;
}
break;
}
});
cljs$core$async$state_machine__13923__auto__ = function(state_15004){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13923__auto____1.call(this,state_15004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13923__auto____0;
cljs$core$async$state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13923__auto____1;
return cljs$core$async$state_machine__13923__auto__;
})()
})();
var state__14216__auto__ = (function (){var statearr_15100 = f__14215__auto__();
(statearr_15100[(6)] = c__14214__auto___17804);

return statearr_15100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14216__auto__);
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
var c__14214__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14215__auto__ = (function (){var switch__13922__auto__ = (function (state_15130){
var state_val_15131 = (state_15130[(1)]);
if((state_val_15131 === (7))){
var inst_15126 = (state_15130[(2)]);
var state_15130__$1 = state_15130;
var statearr_15142_17870 = state_15130__$1;
(statearr_15142_17870[(2)] = inst_15126);

(statearr_15142_17870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15131 === (1))){
var inst_15109 = init;
var inst_15110 = inst_15109;
var state_15130__$1 = (function (){var statearr_15143 = state_15130;
(statearr_15143[(7)] = inst_15110);

return statearr_15143;
})();
var statearr_15144_17875 = state_15130__$1;
(statearr_15144_17875[(2)] = null);

(statearr_15144_17875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15131 === (4))){
var inst_15113 = (state_15130[(8)]);
var inst_15113__$1 = (state_15130[(2)]);
var inst_15114 = (inst_15113__$1 == null);
var state_15130__$1 = (function (){var statearr_15145 = state_15130;
(statearr_15145[(8)] = inst_15113__$1);

return statearr_15145;
})();
if(cljs.core.truth_(inst_15114)){
var statearr_15146_17876 = state_15130__$1;
(statearr_15146_17876[(1)] = (5));

} else {
var statearr_15147_17877 = state_15130__$1;
(statearr_15147_17877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15131 === (6))){
var inst_15110 = (state_15130[(7)]);
var inst_15117 = (state_15130[(9)]);
var inst_15113 = (state_15130[(8)]);
var inst_15117__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15110,inst_15113) : f.call(null,inst_15110,inst_15113));
var inst_15118 = cljs.core.reduced_QMARK_(inst_15117__$1);
var state_15130__$1 = (function (){var statearr_15150 = state_15130;
(statearr_15150[(9)] = inst_15117__$1);

return statearr_15150;
})();
if(inst_15118){
var statearr_15154_17878 = state_15130__$1;
(statearr_15154_17878[(1)] = (8));

} else {
var statearr_15155_17879 = state_15130__$1;
(statearr_15155_17879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15131 === (3))){
var inst_15128 = (state_15130[(2)]);
var state_15130__$1 = state_15130;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15130__$1,inst_15128);
} else {
if((state_val_15131 === (2))){
var state_15130__$1 = state_15130;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15130__$1,(4),ch);
} else {
if((state_val_15131 === (9))){
var inst_15117 = (state_15130[(9)]);
var inst_15110 = inst_15117;
var state_15130__$1 = (function (){var statearr_15163 = state_15130;
(statearr_15163[(7)] = inst_15110);

return statearr_15163;
})();
var statearr_15165_17886 = state_15130__$1;
(statearr_15165_17886[(2)] = null);

(statearr_15165_17886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15131 === (5))){
var inst_15110 = (state_15130[(7)]);
var state_15130__$1 = state_15130;
var statearr_15170_17887 = state_15130__$1;
(statearr_15170_17887[(2)] = inst_15110);

(statearr_15170_17887[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15131 === (10))){
var inst_15124 = (state_15130[(2)]);
var state_15130__$1 = state_15130;
var statearr_15171_17888 = state_15130__$1;
(statearr_15171_17888[(2)] = inst_15124);

(statearr_15171_17888[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15131 === (8))){
var inst_15117 = (state_15130[(9)]);
var inst_15120 = cljs.core.deref(inst_15117);
var state_15130__$1 = state_15130;
var statearr_15172_17889 = state_15130__$1;
(statearr_15172_17889[(2)] = inst_15120);

(statearr_15172_17889[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__13923__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13923__auto____0 = (function (){
var statearr_15177 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15177[(0)] = cljs$core$async$reduce_$_state_machine__13923__auto__);

(statearr_15177[(1)] = (1));

return statearr_15177;
});
var cljs$core$async$reduce_$_state_machine__13923__auto____1 = (function (state_15130){
while(true){
var ret_value__13924__auto__ = (function (){try{while(true){
var result__13925__auto__ = switch__13922__auto__(state_15130);
if(cljs.core.keyword_identical_QMARK_(result__13925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13925__auto__;
}
break;
}
}catch (e15182){var ex__13926__auto__ = e15182;
var statearr_15183_17890 = state_15130;
(statearr_15183_17890[(2)] = ex__13926__auto__);


if(cljs.core.seq((state_15130[(4)]))){
var statearr_15185_17891 = state_15130;
(statearr_15185_17891[(1)] = cljs.core.first((state_15130[(4)])));

} else {
throw ex__13926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17892 = state_15130;
state_15130 = G__17892;
continue;
} else {
return ret_value__13924__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13923__auto__ = function(state_15130){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13923__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13923__auto____1.call(this,state_15130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13923__auto____0;
cljs$core$async$reduce_$_state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13923__auto____1;
return cljs$core$async$reduce_$_state_machine__13923__auto__;
})()
})();
var state__14216__auto__ = (function (){var statearr_15186 = f__14215__auto__();
(statearr_15186[(6)] = c__14214__auto__);

return statearr_15186;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14216__auto__);
}));

return c__14214__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14214__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14215__auto__ = (function (){var switch__13922__auto__ = (function (state_15192){
var state_val_15193 = (state_15192[(1)]);
if((state_val_15193 === (1))){
var inst_15187 = cljs.core.async.reduce(f__$1,init,ch);
var state_15192__$1 = state_15192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15192__$1,(2),inst_15187);
} else {
if((state_val_15193 === (2))){
var inst_15189 = (state_15192[(2)]);
var inst_15190 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15189) : f__$1.call(null,inst_15189));
var state_15192__$1 = state_15192;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15192__$1,inst_15190);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13923__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13923__auto____0 = (function (){
var statearr_15194 = [null,null,null,null,null,null,null];
(statearr_15194[(0)] = cljs$core$async$transduce_$_state_machine__13923__auto__);

(statearr_15194[(1)] = (1));

return statearr_15194;
});
var cljs$core$async$transduce_$_state_machine__13923__auto____1 = (function (state_15192){
while(true){
var ret_value__13924__auto__ = (function (){try{while(true){
var result__13925__auto__ = switch__13922__auto__(state_15192);
if(cljs.core.keyword_identical_QMARK_(result__13925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13925__auto__;
}
break;
}
}catch (e15195){var ex__13926__auto__ = e15195;
var statearr_15196_17902 = state_15192;
(statearr_15196_17902[(2)] = ex__13926__auto__);


if(cljs.core.seq((state_15192[(4)]))){
var statearr_15197_17903 = state_15192;
(statearr_15197_17903[(1)] = cljs.core.first((state_15192[(4)])));

} else {
throw ex__13926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17904 = state_15192;
state_15192 = G__17904;
continue;
} else {
return ret_value__13924__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13923__auto__ = function(state_15192){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13923__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13923__auto____1.call(this,state_15192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13923__auto____0;
cljs$core$async$transduce_$_state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13923__auto____1;
return cljs$core$async$transduce_$_state_machine__13923__auto__;
})()
})();
var state__14216__auto__ = (function (){var statearr_15198 = f__14215__auto__();
(statearr_15198[(6)] = c__14214__auto__);

return statearr_15198;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14216__auto__);
}));

return c__14214__auto__;
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
var G__15200 = arguments.length;
switch (G__15200) {
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
var c__14214__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14215__auto__ = (function (){var switch__13922__auto__ = (function (state_15226){
var state_val_15227 = (state_15226[(1)]);
if((state_val_15227 === (7))){
var inst_15208 = (state_15226[(2)]);
var state_15226__$1 = state_15226;
var statearr_15235_17910 = state_15226__$1;
(statearr_15235_17910[(2)] = inst_15208);

(statearr_15235_17910[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15227 === (1))){
var inst_15202 = cljs.core.seq(coll);
var inst_15203 = inst_15202;
var state_15226__$1 = (function (){var statearr_15238 = state_15226;
(statearr_15238[(7)] = inst_15203);

return statearr_15238;
})();
var statearr_15239_17914 = state_15226__$1;
(statearr_15239_17914[(2)] = null);

(statearr_15239_17914[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15227 === (4))){
var inst_15203 = (state_15226[(7)]);
var inst_15206 = cljs.core.first(inst_15203);
var state_15226__$1 = state_15226;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15226__$1,(7),ch,inst_15206);
} else {
if((state_val_15227 === (13))){
var inst_15220 = (state_15226[(2)]);
var state_15226__$1 = state_15226;
var statearr_15240_17919 = state_15226__$1;
(statearr_15240_17919[(2)] = inst_15220);

(statearr_15240_17919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15227 === (6))){
var inst_15211 = (state_15226[(2)]);
var state_15226__$1 = state_15226;
if(cljs.core.truth_(inst_15211)){
var statearr_15241_17920 = state_15226__$1;
(statearr_15241_17920[(1)] = (8));

} else {
var statearr_15242_17921 = state_15226__$1;
(statearr_15242_17921[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15227 === (3))){
var inst_15224 = (state_15226[(2)]);
var state_15226__$1 = state_15226;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15226__$1,inst_15224);
} else {
if((state_val_15227 === (12))){
var state_15226__$1 = state_15226;
var statearr_15243_17931 = state_15226__$1;
(statearr_15243_17931[(2)] = null);

(statearr_15243_17931[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15227 === (2))){
var inst_15203 = (state_15226[(7)]);
var state_15226__$1 = state_15226;
if(cljs.core.truth_(inst_15203)){
var statearr_15244_17932 = state_15226__$1;
(statearr_15244_17932[(1)] = (4));

} else {
var statearr_15245_17933 = state_15226__$1;
(statearr_15245_17933[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15227 === (11))){
var inst_15217 = cljs.core.async.close_BANG_(ch);
var state_15226__$1 = state_15226;
var statearr_15249_17934 = state_15226__$1;
(statearr_15249_17934[(2)] = inst_15217);

(statearr_15249_17934[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15227 === (9))){
var state_15226__$1 = state_15226;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15250_17935 = state_15226__$1;
(statearr_15250_17935[(1)] = (11));

} else {
var statearr_15251_17936 = state_15226__$1;
(statearr_15251_17936[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15227 === (5))){
var inst_15203 = (state_15226[(7)]);
var state_15226__$1 = state_15226;
var statearr_15252_17937 = state_15226__$1;
(statearr_15252_17937[(2)] = inst_15203);

(statearr_15252_17937[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15227 === (10))){
var inst_15222 = (state_15226[(2)]);
var state_15226__$1 = state_15226;
var statearr_15254_17938 = state_15226__$1;
(statearr_15254_17938[(2)] = inst_15222);

(statearr_15254_17938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15227 === (8))){
var inst_15203 = (state_15226[(7)]);
var inst_15213 = cljs.core.next(inst_15203);
var inst_15203__$1 = inst_15213;
var state_15226__$1 = (function (){var statearr_15255 = state_15226;
(statearr_15255[(7)] = inst_15203__$1);

return statearr_15255;
})();
var statearr_15256_17940 = state_15226__$1;
(statearr_15256_17940[(2)] = null);

(statearr_15256_17940[(1)] = (2));


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
var cljs$core$async$state_machine__13923__auto__ = null;
var cljs$core$async$state_machine__13923__auto____0 = (function (){
var statearr_15263 = [null,null,null,null,null,null,null,null];
(statearr_15263[(0)] = cljs$core$async$state_machine__13923__auto__);

(statearr_15263[(1)] = (1));

return statearr_15263;
});
var cljs$core$async$state_machine__13923__auto____1 = (function (state_15226){
while(true){
var ret_value__13924__auto__ = (function (){try{while(true){
var result__13925__auto__ = switch__13922__auto__(state_15226);
if(cljs.core.keyword_identical_QMARK_(result__13925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13925__auto__;
}
break;
}
}catch (e15264){var ex__13926__auto__ = e15264;
var statearr_15266_17950 = state_15226;
(statearr_15266_17950[(2)] = ex__13926__auto__);


if(cljs.core.seq((state_15226[(4)]))){
var statearr_15267_17951 = state_15226;
(statearr_15267_17951[(1)] = cljs.core.first((state_15226[(4)])));

} else {
throw ex__13926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17952 = state_15226;
state_15226 = G__17952;
continue;
} else {
return ret_value__13924__auto__;
}
break;
}
});
cljs$core$async$state_machine__13923__auto__ = function(state_15226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13923__auto____1.call(this,state_15226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13923__auto____0;
cljs$core$async$state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13923__auto____1;
return cljs$core$async$state_machine__13923__auto__;
})()
})();
var state__14216__auto__ = (function (){var statearr_15272 = f__14215__auto__();
(statearr_15272[(6)] = c__14214__auto__);

return statearr_15272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14216__auto__);
}));

return c__14214__auto__;
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
var G__15279 = arguments.length;
switch (G__15279) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_17973 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_17973(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17977 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_17977(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17986 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_17986(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17990 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_17990(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15307 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15307 = (function (ch,cs,meta15308){
this.ch = ch;
this.cs = cs;
this.meta15308 = meta15308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15309,meta15308__$1){
var self__ = this;
var _15309__$1 = this;
return (new cljs.core.async.t_cljs$core$async15307(self__.ch,self__.cs,meta15308__$1));
}));

(cljs.core.async.t_cljs$core$async15307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15309){
var self__ = this;
var _15309__$1 = this;
return self__.meta15308;
}));

(cljs.core.async.t_cljs$core$async15307.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15307.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15307.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15307.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15307.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15307.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15307.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15308","meta15308",-581842711,null)], null);
}));

(cljs.core.async.t_cljs$core$async15307.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15307");

(cljs.core.async.t_cljs$core$async15307.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15307");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15307.
 */
cljs.core.async.__GT_t_cljs$core$async15307 = (function cljs$core$async$mult_$___GT_t_cljs$core$async15307(ch__$1,cs__$1,meta15308){
return (new cljs.core.async.t_cljs$core$async15307(ch__$1,cs__$1,meta15308));
});

}

return (new cljs.core.async.t_cljs$core$async15307(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__14214__auto___18007 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14215__auto__ = (function (){var switch__13922__auto__ = (function (state_15487){
var state_val_15488 = (state_15487[(1)]);
if((state_val_15488 === (7))){
var inst_15483 = (state_15487[(2)]);
var state_15487__$1 = state_15487;
var statearr_15489_18010 = state_15487__$1;
(statearr_15489_18010[(2)] = inst_15483);

(statearr_15489_18010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (20))){
var inst_15375 = (state_15487[(7)]);
var inst_15391 = cljs.core.first(inst_15375);
var inst_15392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15391,(0),null);
var inst_15393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15391,(1),null);
var state_15487__$1 = (function (){var statearr_15490 = state_15487;
(statearr_15490[(8)] = inst_15392);

return statearr_15490;
})();
if(cljs.core.truth_(inst_15393)){
var statearr_15492_18011 = state_15487__$1;
(statearr_15492_18011[(1)] = (22));

} else {
var statearr_15494_18012 = state_15487__$1;
(statearr_15494_18012[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (27))){
var inst_15336 = (state_15487[(9)]);
var inst_15431 = (state_15487[(10)]);
var inst_15426 = (state_15487[(11)]);
var inst_15424 = (state_15487[(12)]);
var inst_15431__$1 = cljs.core._nth(inst_15424,inst_15426);
var inst_15432 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15431__$1,inst_15336,done);
var state_15487__$1 = (function (){var statearr_15496 = state_15487;
(statearr_15496[(10)] = inst_15431__$1);

return statearr_15496;
})();
if(cljs.core.truth_(inst_15432)){
var statearr_15498_18014 = state_15487__$1;
(statearr_15498_18014[(1)] = (30));

} else {
var statearr_15499_18016 = state_15487__$1;
(statearr_15499_18016[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (1))){
var state_15487__$1 = state_15487;
var statearr_15502_18017 = state_15487__$1;
(statearr_15502_18017[(2)] = null);

(statearr_15502_18017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (24))){
var inst_15375 = (state_15487[(7)]);
var inst_15398 = (state_15487[(2)]);
var inst_15399 = cljs.core.next(inst_15375);
var inst_15347 = inst_15399;
var inst_15348 = null;
var inst_15349 = (0);
var inst_15350 = (0);
var state_15487__$1 = (function (){var statearr_15503 = state_15487;
(statearr_15503[(13)] = inst_15398);

(statearr_15503[(14)] = inst_15348);

(statearr_15503[(15)] = inst_15350);

(statearr_15503[(16)] = inst_15347);

(statearr_15503[(17)] = inst_15349);

return statearr_15503;
})();
var statearr_15514_18018 = state_15487__$1;
(statearr_15514_18018[(2)] = null);

(statearr_15514_18018[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (39))){
var state_15487__$1 = state_15487;
var statearr_15525_18019 = state_15487__$1;
(statearr_15525_18019[(2)] = null);

(statearr_15525_18019[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (4))){
var inst_15336 = (state_15487[(9)]);
var inst_15336__$1 = (state_15487[(2)]);
var inst_15338 = (inst_15336__$1 == null);
var state_15487__$1 = (function (){var statearr_15528 = state_15487;
(statearr_15528[(9)] = inst_15336__$1);

return statearr_15528;
})();
if(cljs.core.truth_(inst_15338)){
var statearr_15529_18021 = state_15487__$1;
(statearr_15529_18021[(1)] = (5));

} else {
var statearr_15531_18023 = state_15487__$1;
(statearr_15531_18023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (15))){
var inst_15348 = (state_15487[(14)]);
var inst_15350 = (state_15487[(15)]);
var inst_15347 = (state_15487[(16)]);
var inst_15349 = (state_15487[(17)]);
var inst_15367 = (state_15487[(2)]);
var inst_15368 = (inst_15350 + (1));
var tmp15516 = inst_15348;
var tmp15517 = inst_15347;
var tmp15518 = inst_15349;
var inst_15347__$1 = tmp15517;
var inst_15348__$1 = tmp15516;
var inst_15349__$1 = tmp15518;
var inst_15350__$1 = inst_15368;
var state_15487__$1 = (function (){var statearr_15536 = state_15487;
(statearr_15536[(14)] = inst_15348__$1);

(statearr_15536[(15)] = inst_15350__$1);

(statearr_15536[(18)] = inst_15367);

(statearr_15536[(16)] = inst_15347__$1);

(statearr_15536[(17)] = inst_15349__$1);

return statearr_15536;
})();
var statearr_15538_18024 = state_15487__$1;
(statearr_15538_18024[(2)] = null);

(statearr_15538_18024[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (21))){
var inst_15402 = (state_15487[(2)]);
var state_15487__$1 = state_15487;
var statearr_15543_18025 = state_15487__$1;
(statearr_15543_18025[(2)] = inst_15402);

(statearr_15543_18025[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (31))){
var inst_15431 = (state_15487[(10)]);
var inst_15435 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15431);
var state_15487__$1 = state_15487;
var statearr_15548_18028 = state_15487__$1;
(statearr_15548_18028[(2)] = inst_15435);

(statearr_15548_18028[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (32))){
var inst_15423 = (state_15487[(19)]);
var inst_15426 = (state_15487[(11)]);
var inst_15425 = (state_15487[(20)]);
var inst_15424 = (state_15487[(12)]);
var inst_15437 = (state_15487[(2)]);
var inst_15438 = (inst_15426 + (1));
var tmp15539 = inst_15423;
var tmp15540 = inst_15425;
var tmp15541 = inst_15424;
var inst_15423__$1 = tmp15539;
var inst_15424__$1 = tmp15541;
var inst_15425__$1 = tmp15540;
var inst_15426__$1 = inst_15438;
var state_15487__$1 = (function (){var statearr_15552 = state_15487;
(statearr_15552[(19)] = inst_15423__$1);

(statearr_15552[(11)] = inst_15426__$1);

(statearr_15552[(20)] = inst_15425__$1);

(statearr_15552[(21)] = inst_15437);

(statearr_15552[(12)] = inst_15424__$1);

return statearr_15552;
})();
var statearr_15554_18030 = state_15487__$1;
(statearr_15554_18030[(2)] = null);

(statearr_15554_18030[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (40))){
var inst_15452 = (state_15487[(22)]);
var inst_15457 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15452);
var state_15487__$1 = state_15487;
var statearr_15555_18031 = state_15487__$1;
(statearr_15555_18031[(2)] = inst_15457);

(statearr_15555_18031[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (33))){
var inst_15442 = (state_15487[(23)]);
var inst_15444 = cljs.core.chunked_seq_QMARK_(inst_15442);
var state_15487__$1 = state_15487;
if(inst_15444){
var statearr_15556_18032 = state_15487__$1;
(statearr_15556_18032[(1)] = (36));

} else {
var statearr_15557_18033 = state_15487__$1;
(statearr_15557_18033[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (13))){
var inst_15361 = (state_15487[(24)]);
var inst_15364 = cljs.core.async.close_BANG_(inst_15361);
var state_15487__$1 = state_15487;
var statearr_15558_18036 = state_15487__$1;
(statearr_15558_18036[(2)] = inst_15364);

(statearr_15558_18036[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (22))){
var inst_15392 = (state_15487[(8)]);
var inst_15395 = cljs.core.async.close_BANG_(inst_15392);
var state_15487__$1 = state_15487;
var statearr_15560_18042 = state_15487__$1;
(statearr_15560_18042[(2)] = inst_15395);

(statearr_15560_18042[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (36))){
var inst_15442 = (state_15487[(23)]);
var inst_15446 = cljs.core.chunk_first(inst_15442);
var inst_15447 = cljs.core.chunk_rest(inst_15442);
var inst_15448 = cljs.core.count(inst_15446);
var inst_15423 = inst_15447;
var inst_15424 = inst_15446;
var inst_15425 = inst_15448;
var inst_15426 = (0);
var state_15487__$1 = (function (){var statearr_15561 = state_15487;
(statearr_15561[(19)] = inst_15423);

(statearr_15561[(11)] = inst_15426);

(statearr_15561[(20)] = inst_15425);

(statearr_15561[(12)] = inst_15424);

return statearr_15561;
})();
var statearr_15562_18055 = state_15487__$1;
(statearr_15562_18055[(2)] = null);

(statearr_15562_18055[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (41))){
var inst_15442 = (state_15487[(23)]);
var inst_15459 = (state_15487[(2)]);
var inst_15461 = cljs.core.next(inst_15442);
var inst_15423 = inst_15461;
var inst_15424 = null;
var inst_15425 = (0);
var inst_15426 = (0);
var state_15487__$1 = (function (){var statearr_15563 = state_15487;
(statearr_15563[(19)] = inst_15423);

(statearr_15563[(25)] = inst_15459);

(statearr_15563[(11)] = inst_15426);

(statearr_15563[(20)] = inst_15425);

(statearr_15563[(12)] = inst_15424);

return statearr_15563;
})();
var statearr_15564_18070 = state_15487__$1;
(statearr_15564_18070[(2)] = null);

(statearr_15564_18070[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (43))){
var state_15487__$1 = state_15487;
var statearr_15565_18073 = state_15487__$1;
(statearr_15565_18073[(2)] = null);

(statearr_15565_18073[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (29))){
var inst_15469 = (state_15487[(2)]);
var state_15487__$1 = state_15487;
var statearr_15568_18075 = state_15487__$1;
(statearr_15568_18075[(2)] = inst_15469);

(statearr_15568_18075[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (44))){
var inst_15480 = (state_15487[(2)]);
var state_15487__$1 = (function (){var statearr_15569 = state_15487;
(statearr_15569[(26)] = inst_15480);

return statearr_15569;
})();
var statearr_15570_18079 = state_15487__$1;
(statearr_15570_18079[(2)] = null);

(statearr_15570_18079[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (6))){
var inst_15412 = (state_15487[(27)]);
var inst_15411 = cljs.core.deref(cs);
var inst_15412__$1 = cljs.core.keys(inst_15411);
var inst_15413 = cljs.core.count(inst_15412__$1);
var inst_15414 = cljs.core.reset_BANG_(dctr,inst_15413);
var inst_15422 = cljs.core.seq(inst_15412__$1);
var inst_15423 = inst_15422;
var inst_15424 = null;
var inst_15425 = (0);
var inst_15426 = (0);
var state_15487__$1 = (function (){var statearr_15572 = state_15487;
(statearr_15572[(19)] = inst_15423);

(statearr_15572[(27)] = inst_15412__$1);

(statearr_15572[(28)] = inst_15414);

(statearr_15572[(11)] = inst_15426);

(statearr_15572[(20)] = inst_15425);

(statearr_15572[(12)] = inst_15424);

return statearr_15572;
})();
var statearr_15582_18085 = state_15487__$1;
(statearr_15582_18085[(2)] = null);

(statearr_15582_18085[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (28))){
var inst_15442 = (state_15487[(23)]);
var inst_15423 = (state_15487[(19)]);
var inst_15442__$1 = cljs.core.seq(inst_15423);
var state_15487__$1 = (function (){var statearr_15583 = state_15487;
(statearr_15583[(23)] = inst_15442__$1);

return statearr_15583;
})();
if(inst_15442__$1){
var statearr_15585_18086 = state_15487__$1;
(statearr_15585_18086[(1)] = (33));

} else {
var statearr_15586_18087 = state_15487__$1;
(statearr_15586_18087[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (25))){
var inst_15426 = (state_15487[(11)]);
var inst_15425 = (state_15487[(20)]);
var inst_15428 = (inst_15426 < inst_15425);
var inst_15429 = inst_15428;
var state_15487__$1 = state_15487;
if(cljs.core.truth_(inst_15429)){
var statearr_15592_18095 = state_15487__$1;
(statearr_15592_18095[(1)] = (27));

} else {
var statearr_15593_18096 = state_15487__$1;
(statearr_15593_18096[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (34))){
var state_15487__$1 = state_15487;
var statearr_15595_18098 = state_15487__$1;
(statearr_15595_18098[(2)] = null);

(statearr_15595_18098[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (17))){
var state_15487__$1 = state_15487;
var statearr_15596_18099 = state_15487__$1;
(statearr_15596_18099[(2)] = null);

(statearr_15596_18099[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (3))){
var inst_15485 = (state_15487[(2)]);
var state_15487__$1 = state_15487;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15487__$1,inst_15485);
} else {
if((state_val_15488 === (12))){
var inst_15407 = (state_15487[(2)]);
var state_15487__$1 = state_15487;
var statearr_15597_18103 = state_15487__$1;
(statearr_15597_18103[(2)] = inst_15407);

(statearr_15597_18103[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (2))){
var state_15487__$1 = state_15487;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15487__$1,(4),ch);
} else {
if((state_val_15488 === (23))){
var state_15487__$1 = state_15487;
var statearr_15602_18106 = state_15487__$1;
(statearr_15602_18106[(2)] = null);

(statearr_15602_18106[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (35))){
var inst_15467 = (state_15487[(2)]);
var state_15487__$1 = state_15487;
var statearr_15603_18109 = state_15487__$1;
(statearr_15603_18109[(2)] = inst_15467);

(statearr_15603_18109[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (19))){
var inst_15375 = (state_15487[(7)]);
var inst_15383 = cljs.core.chunk_first(inst_15375);
var inst_15384 = cljs.core.chunk_rest(inst_15375);
var inst_15385 = cljs.core.count(inst_15383);
var inst_15347 = inst_15384;
var inst_15348 = inst_15383;
var inst_15349 = inst_15385;
var inst_15350 = (0);
var state_15487__$1 = (function (){var statearr_15606 = state_15487;
(statearr_15606[(14)] = inst_15348);

(statearr_15606[(15)] = inst_15350);

(statearr_15606[(16)] = inst_15347);

(statearr_15606[(17)] = inst_15349);

return statearr_15606;
})();
var statearr_15608_18113 = state_15487__$1;
(statearr_15608_18113[(2)] = null);

(statearr_15608_18113[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (11))){
var inst_15375 = (state_15487[(7)]);
var inst_15347 = (state_15487[(16)]);
var inst_15375__$1 = cljs.core.seq(inst_15347);
var state_15487__$1 = (function (){var statearr_15610 = state_15487;
(statearr_15610[(7)] = inst_15375__$1);

return statearr_15610;
})();
if(inst_15375__$1){
var statearr_15615_18121 = state_15487__$1;
(statearr_15615_18121[(1)] = (16));

} else {
var statearr_15616_18122 = state_15487__$1;
(statearr_15616_18122[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (9))){
var inst_15409 = (state_15487[(2)]);
var state_15487__$1 = state_15487;
var statearr_15619_18128 = state_15487__$1;
(statearr_15619_18128[(2)] = inst_15409);

(statearr_15619_18128[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (5))){
var inst_15345 = cljs.core.deref(cs);
var inst_15346 = cljs.core.seq(inst_15345);
var inst_15347 = inst_15346;
var inst_15348 = null;
var inst_15349 = (0);
var inst_15350 = (0);
var state_15487__$1 = (function (){var statearr_15626 = state_15487;
(statearr_15626[(14)] = inst_15348);

(statearr_15626[(15)] = inst_15350);

(statearr_15626[(16)] = inst_15347);

(statearr_15626[(17)] = inst_15349);

return statearr_15626;
})();
var statearr_15628_18132 = state_15487__$1;
(statearr_15628_18132[(2)] = null);

(statearr_15628_18132[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (14))){
var state_15487__$1 = state_15487;
var statearr_15630_18133 = state_15487__$1;
(statearr_15630_18133[(2)] = null);

(statearr_15630_18133[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (45))){
var inst_15477 = (state_15487[(2)]);
var state_15487__$1 = state_15487;
var statearr_15631_18134 = state_15487__$1;
(statearr_15631_18134[(2)] = inst_15477);

(statearr_15631_18134[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (26))){
var inst_15412 = (state_15487[(27)]);
var inst_15471 = (state_15487[(2)]);
var inst_15472 = cljs.core.seq(inst_15412);
var state_15487__$1 = (function (){var statearr_15632 = state_15487;
(statearr_15632[(29)] = inst_15471);

return statearr_15632;
})();
if(inst_15472){
var statearr_15635_18138 = state_15487__$1;
(statearr_15635_18138[(1)] = (42));

} else {
var statearr_15636_18139 = state_15487__$1;
(statearr_15636_18139[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (16))){
var inst_15375 = (state_15487[(7)]);
var inst_15377 = cljs.core.chunked_seq_QMARK_(inst_15375);
var state_15487__$1 = state_15487;
if(inst_15377){
var statearr_15640_18152 = state_15487__$1;
(statearr_15640_18152[(1)] = (19));

} else {
var statearr_15641_18153 = state_15487__$1;
(statearr_15641_18153[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (38))){
var inst_15464 = (state_15487[(2)]);
var state_15487__$1 = state_15487;
var statearr_15642_18155 = state_15487__$1;
(statearr_15642_18155[(2)] = inst_15464);

(statearr_15642_18155[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (30))){
var state_15487__$1 = state_15487;
var statearr_15647_18159 = state_15487__$1;
(statearr_15647_18159[(2)] = null);

(statearr_15647_18159[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (10))){
var inst_15348 = (state_15487[(14)]);
var inst_15350 = (state_15487[(15)]);
var inst_15360 = cljs.core._nth(inst_15348,inst_15350);
var inst_15361 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15360,(0),null);
var inst_15362 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15360,(1),null);
var state_15487__$1 = (function (){var statearr_15648 = state_15487;
(statearr_15648[(24)] = inst_15361);

return statearr_15648;
})();
if(cljs.core.truth_(inst_15362)){
var statearr_15649_18161 = state_15487__$1;
(statearr_15649_18161[(1)] = (13));

} else {
var statearr_15650_18162 = state_15487__$1;
(statearr_15650_18162[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (18))){
var inst_15405 = (state_15487[(2)]);
var state_15487__$1 = state_15487;
var statearr_15652_18163 = state_15487__$1;
(statearr_15652_18163[(2)] = inst_15405);

(statearr_15652_18163[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (42))){
var state_15487__$1 = state_15487;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15487__$1,(45),dchan);
} else {
if((state_val_15488 === (37))){
var inst_15442 = (state_15487[(23)]);
var inst_15336 = (state_15487[(9)]);
var inst_15452 = (state_15487[(22)]);
var inst_15452__$1 = cljs.core.first(inst_15442);
var inst_15453 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15452__$1,inst_15336,done);
var state_15487__$1 = (function (){var statearr_15655 = state_15487;
(statearr_15655[(22)] = inst_15452__$1);

return statearr_15655;
})();
if(cljs.core.truth_(inst_15453)){
var statearr_15656_18164 = state_15487__$1;
(statearr_15656_18164[(1)] = (39));

} else {
var statearr_15657_18165 = state_15487__$1;
(statearr_15657_18165[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15488 === (8))){
var inst_15350 = (state_15487[(15)]);
var inst_15349 = (state_15487[(17)]);
var inst_15352 = (inst_15350 < inst_15349);
var inst_15353 = inst_15352;
var state_15487__$1 = state_15487;
if(cljs.core.truth_(inst_15353)){
var statearr_15658_18168 = state_15487__$1;
(statearr_15658_18168[(1)] = (10));

} else {
var statearr_15659_18169 = state_15487__$1;
(statearr_15659_18169[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__13923__auto__ = null;
var cljs$core$async$mult_$_state_machine__13923__auto____0 = (function (){
var statearr_15665 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15665[(0)] = cljs$core$async$mult_$_state_machine__13923__auto__);

(statearr_15665[(1)] = (1));

return statearr_15665;
});
var cljs$core$async$mult_$_state_machine__13923__auto____1 = (function (state_15487){
while(true){
var ret_value__13924__auto__ = (function (){try{while(true){
var result__13925__auto__ = switch__13922__auto__(state_15487);
if(cljs.core.keyword_identical_QMARK_(result__13925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13925__auto__;
}
break;
}
}catch (e15668){var ex__13926__auto__ = e15668;
var statearr_15669_18172 = state_15487;
(statearr_15669_18172[(2)] = ex__13926__auto__);


if(cljs.core.seq((state_15487[(4)]))){
var statearr_15676_18173 = state_15487;
(statearr_15676_18173[(1)] = cljs.core.first((state_15487[(4)])));

} else {
throw ex__13926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18174 = state_15487;
state_15487 = G__18174;
continue;
} else {
return ret_value__13924__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13923__auto__ = function(state_15487){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13923__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13923__auto____1.call(this,state_15487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13923__auto____0;
cljs$core$async$mult_$_state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13923__auto____1;
return cljs$core$async$mult_$_state_machine__13923__auto__;
})()
})();
var state__14216__auto__ = (function (){var statearr_15680 = f__14215__auto__();
(statearr_15680[(6)] = c__14214__auto___18007);

return statearr_15680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14216__auto__);
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
var G__15682 = arguments.length;
switch (G__15682) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_18178 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_18178(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18179 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_18179(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18185 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18185(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18190 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_18190(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18193 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18193(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18200 = arguments.length;
var i__5770__auto___18201 = (0);
while(true){
if((i__5770__auto___18201 < len__5769__auto___18200)){
args__5775__auto__.push((arguments[i__5770__auto___18201]));

var G__18202 = (i__5770__auto___18201 + (1));
i__5770__auto___18201 = G__18202;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15732){
var map__15735 = p__15732;
var map__15735__$1 = cljs.core.__destructure_map(map__15735);
var opts = map__15735__$1;
var statearr_15736_18211 = state;
(statearr_15736_18211[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15738_18213 = state;
(statearr_15738_18213[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15742_18217 = state;
(statearr_15742_18217[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15725){
var G__15726 = cljs.core.first(seq15725);
var seq15725__$1 = cljs.core.next(seq15725);
var G__15727 = cljs.core.first(seq15725__$1);
var seq15725__$2 = cljs.core.next(seq15725__$1);
var G__15728 = cljs.core.first(seq15725__$2);
var seq15725__$3 = cljs.core.next(seq15725__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15726,G__15727,G__15728,seq15725__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15755 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15755 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15756){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15756 = meta15756;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15757,meta15756__$1){
var self__ = this;
var _15757__$1 = this;
return (new cljs.core.async.t_cljs$core$async15755(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15756__$1));
}));

(cljs.core.async.t_cljs$core$async15755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15757){
var self__ = this;
var _15757__$1 = this;
return self__.meta15756;
}));

(cljs.core.async.t_cljs$core$async15755.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15755.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15755.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15755.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15755.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15755.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15755.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15755.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15755.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15756","meta15756",-1853240239,null)], null);
}));

(cljs.core.async.t_cljs$core$async15755.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15755.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15755");

(cljs.core.async.t_cljs$core$async15755.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15755");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15755.
 */
cljs.core.async.__GT_t_cljs$core$async15755 = (function cljs$core$async$mix_$___GT_t_cljs$core$async15755(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15756){
return (new cljs.core.async.t_cljs$core$async15755(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15756));
});

}

return (new cljs.core.async.t_cljs$core$async15755(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14214__auto___18270 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14215__auto__ = (function (){var switch__13922__auto__ = (function (state_15846){
var state_val_15847 = (state_15846[(1)]);
if((state_val_15847 === (7))){
var inst_15806 = (state_15846[(2)]);
var state_15846__$1 = state_15846;
if(cljs.core.truth_(inst_15806)){
var statearr_15852_18272 = state_15846__$1;
(statearr_15852_18272[(1)] = (8));

} else {
var statearr_15853_18273 = state_15846__$1;
(statearr_15853_18273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (20))){
var inst_15795 = (state_15846[(7)]);
var state_15846__$1 = state_15846;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15846__$1,(23),out,inst_15795);
} else {
if((state_val_15847 === (1))){
var inst_15777 = calc_state();
var inst_15778 = cljs.core.__destructure_map(inst_15777);
var inst_15779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15778,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15778,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15781 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15778,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15782 = inst_15777;
var state_15846__$1 = (function (){var statearr_15857 = state_15846;
(statearr_15857[(8)] = inst_15782);

(statearr_15857[(9)] = inst_15781);

(statearr_15857[(10)] = inst_15779);

(statearr_15857[(11)] = inst_15780);

return statearr_15857;
})();
var statearr_15858_18275 = state_15846__$1;
(statearr_15858_18275[(2)] = null);

(statearr_15858_18275[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (24))){
var inst_15786 = (state_15846[(12)]);
var inst_15782 = inst_15786;
var state_15846__$1 = (function (){var statearr_15864 = state_15846;
(statearr_15864[(8)] = inst_15782);

return statearr_15864;
})();
var statearr_15865_18276 = state_15846__$1;
(statearr_15865_18276[(2)] = null);

(statearr_15865_18276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (4))){
var inst_15795 = (state_15846[(7)]);
var inst_15797 = (state_15846[(13)]);
var inst_15794 = (state_15846[(2)]);
var inst_15795__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15794,(0),null);
var inst_15796 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15794,(1),null);
var inst_15797__$1 = (inst_15795__$1 == null);
var state_15846__$1 = (function (){var statearr_15873 = state_15846;
(statearr_15873[(7)] = inst_15795__$1);

(statearr_15873[(14)] = inst_15796);

(statearr_15873[(13)] = inst_15797__$1);

return statearr_15873;
})();
if(cljs.core.truth_(inst_15797__$1)){
var statearr_15874_18285 = state_15846__$1;
(statearr_15874_18285[(1)] = (5));

} else {
var statearr_15875_18286 = state_15846__$1;
(statearr_15875_18286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (15))){
var inst_15787 = (state_15846[(15)]);
var inst_15820 = (state_15846[(16)]);
var inst_15820__$1 = cljs.core.empty_QMARK_(inst_15787);
var state_15846__$1 = (function (){var statearr_15879 = state_15846;
(statearr_15879[(16)] = inst_15820__$1);

return statearr_15879;
})();
if(inst_15820__$1){
var statearr_15880_18291 = state_15846__$1;
(statearr_15880_18291[(1)] = (17));

} else {
var statearr_15881_18292 = state_15846__$1;
(statearr_15881_18292[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (21))){
var inst_15786 = (state_15846[(12)]);
var inst_15782 = inst_15786;
var state_15846__$1 = (function (){var statearr_15882 = state_15846;
(statearr_15882[(8)] = inst_15782);

return statearr_15882;
})();
var statearr_15883_18295 = state_15846__$1;
(statearr_15883_18295[(2)] = null);

(statearr_15883_18295[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (13))){
var inst_15813 = (state_15846[(2)]);
var inst_15814 = calc_state();
var inst_15782 = inst_15814;
var state_15846__$1 = (function (){var statearr_15889 = state_15846;
(statearr_15889[(8)] = inst_15782);

(statearr_15889[(17)] = inst_15813);

return statearr_15889;
})();
var statearr_15890_18296 = state_15846__$1;
(statearr_15890_18296[(2)] = null);

(statearr_15890_18296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (22))){
var inst_15840 = (state_15846[(2)]);
var state_15846__$1 = state_15846;
var statearr_15891_18297 = state_15846__$1;
(statearr_15891_18297[(2)] = inst_15840);

(statearr_15891_18297[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (6))){
var inst_15796 = (state_15846[(14)]);
var inst_15804 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15796,change);
var state_15846__$1 = state_15846;
var statearr_15892_18303 = state_15846__$1;
(statearr_15892_18303[(2)] = inst_15804);

(statearr_15892_18303[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (25))){
var state_15846__$1 = state_15846;
var statearr_15893_18305 = state_15846__$1;
(statearr_15893_18305[(2)] = null);

(statearr_15893_18305[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (17))){
var inst_15796 = (state_15846[(14)]);
var inst_15788 = (state_15846[(18)]);
var inst_15822 = (inst_15788.cljs$core$IFn$_invoke$arity$1 ? inst_15788.cljs$core$IFn$_invoke$arity$1(inst_15796) : inst_15788.call(null,inst_15796));
var inst_15823 = cljs.core.not(inst_15822);
var state_15846__$1 = state_15846;
var statearr_15894_18312 = state_15846__$1;
(statearr_15894_18312[(2)] = inst_15823);

(statearr_15894_18312[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (3))){
var inst_15844 = (state_15846[(2)]);
var state_15846__$1 = state_15846;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15846__$1,inst_15844);
} else {
if((state_val_15847 === (12))){
var state_15846__$1 = state_15846;
var statearr_15895_18313 = state_15846__$1;
(statearr_15895_18313[(2)] = null);

(statearr_15895_18313[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (2))){
var inst_15782 = (state_15846[(8)]);
var inst_15786 = (state_15846[(12)]);
var inst_15786__$1 = cljs.core.__destructure_map(inst_15782);
var inst_15787 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15786__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15788 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15786__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15789 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15786__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15846__$1 = (function (){var statearr_15899 = state_15846;
(statearr_15899[(15)] = inst_15787);

(statearr_15899[(12)] = inst_15786__$1);

(statearr_15899[(18)] = inst_15788);

return statearr_15899;
})();
return cljs.core.async.ioc_alts_BANG_(state_15846__$1,(4),inst_15789);
} else {
if((state_val_15847 === (23))){
var inst_15831 = (state_15846[(2)]);
var state_15846__$1 = state_15846;
if(cljs.core.truth_(inst_15831)){
var statearr_15900_18314 = state_15846__$1;
(statearr_15900_18314[(1)] = (24));

} else {
var statearr_15901_18315 = state_15846__$1;
(statearr_15901_18315[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (19))){
var inst_15826 = (state_15846[(2)]);
var state_15846__$1 = state_15846;
var statearr_15904_18319 = state_15846__$1;
(statearr_15904_18319[(2)] = inst_15826);

(statearr_15904_18319[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (11))){
var inst_15796 = (state_15846[(14)]);
var inst_15810 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15796);
var state_15846__$1 = state_15846;
var statearr_15908_18322 = state_15846__$1;
(statearr_15908_18322[(2)] = inst_15810);

(statearr_15908_18322[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (9))){
var inst_15787 = (state_15846[(15)]);
var inst_15796 = (state_15846[(14)]);
var inst_15817 = (state_15846[(19)]);
var inst_15817__$1 = (inst_15787.cljs$core$IFn$_invoke$arity$1 ? inst_15787.cljs$core$IFn$_invoke$arity$1(inst_15796) : inst_15787.call(null,inst_15796));
var state_15846__$1 = (function (){var statearr_15909 = state_15846;
(statearr_15909[(19)] = inst_15817__$1);

return statearr_15909;
})();
if(cljs.core.truth_(inst_15817__$1)){
var statearr_15910_18330 = state_15846__$1;
(statearr_15910_18330[(1)] = (14));

} else {
var statearr_15911_18332 = state_15846__$1;
(statearr_15911_18332[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (5))){
var inst_15797 = (state_15846[(13)]);
var state_15846__$1 = state_15846;
var statearr_15912_18336 = state_15846__$1;
(statearr_15912_18336[(2)] = inst_15797);

(statearr_15912_18336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (14))){
var inst_15817 = (state_15846[(19)]);
var state_15846__$1 = state_15846;
var statearr_15913_18339 = state_15846__$1;
(statearr_15913_18339[(2)] = inst_15817);

(statearr_15913_18339[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (26))){
var inst_15836 = (state_15846[(2)]);
var state_15846__$1 = state_15846;
var statearr_15914_18342 = state_15846__$1;
(statearr_15914_18342[(2)] = inst_15836);

(statearr_15914_18342[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (16))){
var inst_15828 = (state_15846[(2)]);
var state_15846__$1 = state_15846;
if(cljs.core.truth_(inst_15828)){
var statearr_15916_18343 = state_15846__$1;
(statearr_15916_18343[(1)] = (20));

} else {
var statearr_15917_18348 = state_15846__$1;
(statearr_15917_18348[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (10))){
var inst_15842 = (state_15846[(2)]);
var state_15846__$1 = state_15846;
var statearr_15918_18350 = state_15846__$1;
(statearr_15918_18350[(2)] = inst_15842);

(statearr_15918_18350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (18))){
var inst_15820 = (state_15846[(16)]);
var state_15846__$1 = state_15846;
var statearr_15919_18353 = state_15846__$1;
(statearr_15919_18353[(2)] = inst_15820);

(statearr_15919_18353[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15847 === (8))){
var inst_15795 = (state_15846[(7)]);
var inst_15808 = (inst_15795 == null);
var state_15846__$1 = state_15846;
if(cljs.core.truth_(inst_15808)){
var statearr_15920_18359 = state_15846__$1;
(statearr_15920_18359[(1)] = (11));

} else {
var statearr_15921_18361 = state_15846__$1;
(statearr_15921_18361[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__13923__auto__ = null;
var cljs$core$async$mix_$_state_machine__13923__auto____0 = (function (){
var statearr_15924 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15924[(0)] = cljs$core$async$mix_$_state_machine__13923__auto__);

(statearr_15924[(1)] = (1));

return statearr_15924;
});
var cljs$core$async$mix_$_state_machine__13923__auto____1 = (function (state_15846){
while(true){
var ret_value__13924__auto__ = (function (){try{while(true){
var result__13925__auto__ = switch__13922__auto__(state_15846);
if(cljs.core.keyword_identical_QMARK_(result__13925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13925__auto__;
}
break;
}
}catch (e15925){var ex__13926__auto__ = e15925;
var statearr_15926_18369 = state_15846;
(statearr_15926_18369[(2)] = ex__13926__auto__);


if(cljs.core.seq((state_15846[(4)]))){
var statearr_15927_18371 = state_15846;
(statearr_15927_18371[(1)] = cljs.core.first((state_15846[(4)])));

} else {
throw ex__13926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18372 = state_15846;
state_15846 = G__18372;
continue;
} else {
return ret_value__13924__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13923__auto__ = function(state_15846){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13923__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13923__auto____1.call(this,state_15846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13923__auto____0;
cljs$core$async$mix_$_state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13923__auto____1;
return cljs$core$async$mix_$_state_machine__13923__auto__;
})()
})();
var state__14216__auto__ = (function (){var statearr_15931 = f__14215__auto__();
(statearr_15931[(6)] = c__14214__auto___18270);

return statearr_15931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14216__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_18389 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_18389(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18400 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_18400(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18424 = (function() {
var G__18425 = null;
var G__18425__1 = (function (p){
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
var G__18425__2 = (function (p,v){
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
G__18425 = function(p,v){
switch(arguments.length){
case 1:
return G__18425__1.call(this,p);
case 2:
return G__18425__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18425.cljs$core$IFn$_invoke$arity$1 = G__18425__1;
G__18425.cljs$core$IFn$_invoke$arity$2 = G__18425__2;
return G__18425;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15963 = arguments.length;
switch (G__15963) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18424(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18424(p,v);
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
var G__15986 = arguments.length;
switch (G__15986) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15968_SHARP_){
if(cljs.core.truth_((p1__15968_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15968_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15968_SHARP_.call(null,topic)))){
return p1__15968_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15968_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15991 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15991 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15992){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15992 = meta15992;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15993,meta15992__$1){
var self__ = this;
var _15993__$1 = this;
return (new cljs.core.async.t_cljs$core$async15991(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15992__$1));
}));

(cljs.core.async.t_cljs$core$async15991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15993){
var self__ = this;
var _15993__$1 = this;
return self__.meta15992;
}));

(cljs.core.async.t_cljs$core$async15991.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15991.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15991.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15991.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15991.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async15991.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15991.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15991.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15992","meta15992",-82428574,null)], null);
}));

(cljs.core.async.t_cljs$core$async15991.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15991.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15991");

(cljs.core.async.t_cljs$core$async15991.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15991");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15991.
 */
cljs.core.async.__GT_t_cljs$core$async15991 = (function cljs$core$async$__GT_t_cljs$core$async15991(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15992){
return (new cljs.core.async.t_cljs$core$async15991(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15992));
});

}

return (new cljs.core.async.t_cljs$core$async15991(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14214__auto___18470 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14215__auto__ = (function (){var switch__13922__auto__ = (function (state_16117){
var state_val_16118 = (state_16117[(1)]);
if((state_val_16118 === (7))){
var inst_16112 = (state_16117[(2)]);
var state_16117__$1 = state_16117;
var statearr_16127_18472 = state_16117__$1;
(statearr_16127_18472[(2)] = inst_16112);

(statearr_16127_18472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (20))){
var state_16117__$1 = state_16117;
var statearr_16129_18476 = state_16117__$1;
(statearr_16129_18476[(2)] = null);

(statearr_16129_18476[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (1))){
var state_16117__$1 = state_16117;
var statearr_16132_18482 = state_16117__$1;
(statearr_16132_18482[(2)] = null);

(statearr_16132_18482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (24))){
var inst_16091 = (state_16117[(7)]);
var inst_16103 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16091);
var state_16117__$1 = state_16117;
var statearr_16135_18489 = state_16117__$1;
(statearr_16135_18489[(2)] = inst_16103);

(statearr_16135_18489[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (4))){
var inst_16029 = (state_16117[(8)]);
var inst_16029__$1 = (state_16117[(2)]);
var inst_16030 = (inst_16029__$1 == null);
var state_16117__$1 = (function (){var statearr_16141 = state_16117;
(statearr_16141[(8)] = inst_16029__$1);

return statearr_16141;
})();
if(cljs.core.truth_(inst_16030)){
var statearr_16142_18501 = state_16117__$1;
(statearr_16142_18501[(1)] = (5));

} else {
var statearr_16143_18502 = state_16117__$1;
(statearr_16143_18502[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (15))){
var inst_16085 = (state_16117[(2)]);
var state_16117__$1 = state_16117;
var statearr_16146_18504 = state_16117__$1;
(statearr_16146_18504[(2)] = inst_16085);

(statearr_16146_18504[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (21))){
var inst_16109 = (state_16117[(2)]);
var state_16117__$1 = (function (){var statearr_16148 = state_16117;
(statearr_16148[(9)] = inst_16109);

return statearr_16148;
})();
var statearr_16149_18509 = state_16117__$1;
(statearr_16149_18509[(2)] = null);

(statearr_16149_18509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (13))){
var inst_16061 = (state_16117[(10)]);
var inst_16067 = cljs.core.chunked_seq_QMARK_(inst_16061);
var state_16117__$1 = state_16117;
if(inst_16067){
var statearr_16153_18512 = state_16117__$1;
(statearr_16153_18512[(1)] = (16));

} else {
var statearr_16160_18513 = state_16117__$1;
(statearr_16160_18513[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (22))){
var inst_16100 = (state_16117[(2)]);
var state_16117__$1 = state_16117;
if(cljs.core.truth_(inst_16100)){
var statearr_16166_18516 = state_16117__$1;
(statearr_16166_18516[(1)] = (23));

} else {
var statearr_16167_18519 = state_16117__$1;
(statearr_16167_18519[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (6))){
var inst_16093 = (state_16117[(11)]);
var inst_16029 = (state_16117[(8)]);
var inst_16091 = (state_16117[(7)]);
var inst_16091__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16029) : topic_fn.call(null,inst_16029));
var inst_16092 = cljs.core.deref(mults);
var inst_16093__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16092,inst_16091__$1);
var state_16117__$1 = (function (){var statearr_16169 = state_16117;
(statearr_16169[(11)] = inst_16093__$1);

(statearr_16169[(7)] = inst_16091__$1);

return statearr_16169;
})();
if(cljs.core.truth_(inst_16093__$1)){
var statearr_16171_18524 = state_16117__$1;
(statearr_16171_18524[(1)] = (19));

} else {
var statearr_16172_18526 = state_16117__$1;
(statearr_16172_18526[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (25))){
var inst_16106 = (state_16117[(2)]);
var state_16117__$1 = state_16117;
var statearr_16173_18530 = state_16117__$1;
(statearr_16173_18530[(2)] = inst_16106);

(statearr_16173_18530[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (17))){
var inst_16061 = (state_16117[(10)]);
var inst_16076 = cljs.core.first(inst_16061);
var inst_16077 = cljs.core.async.muxch_STAR_(inst_16076);
var inst_16078 = cljs.core.async.close_BANG_(inst_16077);
var inst_16079 = cljs.core.next(inst_16061);
var inst_16043 = inst_16079;
var inst_16044 = null;
var inst_16045 = (0);
var inst_16046 = (0);
var state_16117__$1 = (function (){var statearr_16174 = state_16117;
(statearr_16174[(12)] = inst_16043);

(statearr_16174[(13)] = inst_16078);

(statearr_16174[(14)] = inst_16045);

(statearr_16174[(15)] = inst_16044);

(statearr_16174[(16)] = inst_16046);

return statearr_16174;
})();
var statearr_16176_18539 = state_16117__$1;
(statearr_16176_18539[(2)] = null);

(statearr_16176_18539[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (3))){
var inst_16114 = (state_16117[(2)]);
var state_16117__$1 = state_16117;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16117__$1,inst_16114);
} else {
if((state_val_16118 === (12))){
var inst_16087 = (state_16117[(2)]);
var state_16117__$1 = state_16117;
var statearr_16178_18544 = state_16117__$1;
(statearr_16178_18544[(2)] = inst_16087);

(statearr_16178_18544[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (2))){
var state_16117__$1 = state_16117;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16117__$1,(4),ch);
} else {
if((state_val_16118 === (23))){
var state_16117__$1 = state_16117;
var statearr_16181_18548 = state_16117__$1;
(statearr_16181_18548[(2)] = null);

(statearr_16181_18548[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (19))){
var inst_16093 = (state_16117[(11)]);
var inst_16029 = (state_16117[(8)]);
var inst_16098 = cljs.core.async.muxch_STAR_(inst_16093);
var state_16117__$1 = state_16117;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16117__$1,(22),inst_16098,inst_16029);
} else {
if((state_val_16118 === (11))){
var inst_16061 = (state_16117[(10)]);
var inst_16043 = (state_16117[(12)]);
var inst_16061__$1 = cljs.core.seq(inst_16043);
var state_16117__$1 = (function (){var statearr_16185 = state_16117;
(statearr_16185[(10)] = inst_16061__$1);

return statearr_16185;
})();
if(inst_16061__$1){
var statearr_16187_18561 = state_16117__$1;
(statearr_16187_18561[(1)] = (13));

} else {
var statearr_16188_18565 = state_16117__$1;
(statearr_16188_18565[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (9))){
var inst_16089 = (state_16117[(2)]);
var state_16117__$1 = state_16117;
var statearr_16189_18567 = state_16117__$1;
(statearr_16189_18567[(2)] = inst_16089);

(statearr_16189_18567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (5))){
var inst_16040 = cljs.core.deref(mults);
var inst_16041 = cljs.core.vals(inst_16040);
var inst_16042 = cljs.core.seq(inst_16041);
var inst_16043 = inst_16042;
var inst_16044 = null;
var inst_16045 = (0);
var inst_16046 = (0);
var state_16117__$1 = (function (){var statearr_16193 = state_16117;
(statearr_16193[(12)] = inst_16043);

(statearr_16193[(14)] = inst_16045);

(statearr_16193[(15)] = inst_16044);

(statearr_16193[(16)] = inst_16046);

return statearr_16193;
})();
var statearr_16199_18579 = state_16117__$1;
(statearr_16199_18579[(2)] = null);

(statearr_16199_18579[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (14))){
var state_16117__$1 = state_16117;
var statearr_16203_18582 = state_16117__$1;
(statearr_16203_18582[(2)] = null);

(statearr_16203_18582[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (16))){
var inst_16061 = (state_16117[(10)]);
var inst_16071 = cljs.core.chunk_first(inst_16061);
var inst_16072 = cljs.core.chunk_rest(inst_16061);
var inst_16073 = cljs.core.count(inst_16071);
var inst_16043 = inst_16072;
var inst_16044 = inst_16071;
var inst_16045 = inst_16073;
var inst_16046 = (0);
var state_16117__$1 = (function (){var statearr_16205 = state_16117;
(statearr_16205[(12)] = inst_16043);

(statearr_16205[(14)] = inst_16045);

(statearr_16205[(15)] = inst_16044);

(statearr_16205[(16)] = inst_16046);

return statearr_16205;
})();
var statearr_16206_18591 = state_16117__$1;
(statearr_16206_18591[(2)] = null);

(statearr_16206_18591[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (10))){
var inst_16043 = (state_16117[(12)]);
var inst_16045 = (state_16117[(14)]);
var inst_16044 = (state_16117[(15)]);
var inst_16046 = (state_16117[(16)]);
var inst_16052 = cljs.core._nth(inst_16044,inst_16046);
var inst_16056 = cljs.core.async.muxch_STAR_(inst_16052);
var inst_16057 = cljs.core.async.close_BANG_(inst_16056);
var inst_16058 = (inst_16046 + (1));
var tmp16200 = inst_16043;
var tmp16201 = inst_16045;
var tmp16202 = inst_16044;
var inst_16043__$1 = tmp16200;
var inst_16044__$1 = tmp16202;
var inst_16045__$1 = tmp16201;
var inst_16046__$1 = inst_16058;
var state_16117__$1 = (function (){var statearr_16212 = state_16117;
(statearr_16212[(17)] = inst_16057);

(statearr_16212[(12)] = inst_16043__$1);

(statearr_16212[(14)] = inst_16045__$1);

(statearr_16212[(15)] = inst_16044__$1);

(statearr_16212[(16)] = inst_16046__$1);

return statearr_16212;
})();
var statearr_16214_18607 = state_16117__$1;
(statearr_16214_18607[(2)] = null);

(statearr_16214_18607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (18))){
var inst_16082 = (state_16117[(2)]);
var state_16117__$1 = state_16117;
var statearr_16216_18612 = state_16117__$1;
(statearr_16216_18612[(2)] = inst_16082);

(statearr_16216_18612[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16118 === (8))){
var inst_16045 = (state_16117[(14)]);
var inst_16046 = (state_16117[(16)]);
var inst_16048 = (inst_16046 < inst_16045);
var inst_16049 = inst_16048;
var state_16117__$1 = state_16117;
if(cljs.core.truth_(inst_16049)){
var statearr_16217_18618 = state_16117__$1;
(statearr_16217_18618[(1)] = (10));

} else {
var statearr_16218_18620 = state_16117__$1;
(statearr_16218_18620[(1)] = (11));

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
var cljs$core$async$state_machine__13923__auto__ = null;
var cljs$core$async$state_machine__13923__auto____0 = (function (){
var statearr_16222 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16222[(0)] = cljs$core$async$state_machine__13923__auto__);

(statearr_16222[(1)] = (1));

return statearr_16222;
});
var cljs$core$async$state_machine__13923__auto____1 = (function (state_16117){
while(true){
var ret_value__13924__auto__ = (function (){try{while(true){
var result__13925__auto__ = switch__13922__auto__(state_16117);
if(cljs.core.keyword_identical_QMARK_(result__13925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13925__auto__;
}
break;
}
}catch (e16223){var ex__13926__auto__ = e16223;
var statearr_16224_18629 = state_16117;
(statearr_16224_18629[(2)] = ex__13926__auto__);


if(cljs.core.seq((state_16117[(4)]))){
var statearr_16226_18635 = state_16117;
(statearr_16226_18635[(1)] = cljs.core.first((state_16117[(4)])));

} else {
throw ex__13926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18638 = state_16117;
state_16117 = G__18638;
continue;
} else {
return ret_value__13924__auto__;
}
break;
}
});
cljs$core$async$state_machine__13923__auto__ = function(state_16117){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13923__auto____1.call(this,state_16117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13923__auto____0;
cljs$core$async$state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13923__auto____1;
return cljs$core$async$state_machine__13923__auto__;
})()
})();
var state__14216__auto__ = (function (){var statearr_16235 = f__14215__auto__();
(statearr_16235[(6)] = c__14214__auto___18470);

return statearr_16235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14216__auto__);
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
var G__16243 = arguments.length;
switch (G__16243) {
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
var G__16249 = arguments.length;
switch (G__16249) {
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
var G__16251 = arguments.length;
switch (G__16251) {
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
var c__14214__auto___18663 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14215__auto__ = (function (){var switch__13922__auto__ = (function (state_16315){
var state_val_16316 = (state_16315[(1)]);
if((state_val_16316 === (7))){
var state_16315__$1 = state_16315;
var statearr_16318_18666 = state_16315__$1;
(statearr_16318_18666[(2)] = null);

(statearr_16318_18666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (1))){
var state_16315__$1 = state_16315;
var statearr_16319_18669 = state_16315__$1;
(statearr_16319_18669[(2)] = null);

(statearr_16319_18669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (4))){
var inst_16254 = (state_16315[(7)]);
var inst_16255 = (state_16315[(8)]);
var inst_16257 = (inst_16255 < inst_16254);
var state_16315__$1 = state_16315;
if(cljs.core.truth_(inst_16257)){
var statearr_16320_18679 = state_16315__$1;
(statearr_16320_18679[(1)] = (6));

} else {
var statearr_16321_18681 = state_16315__$1;
(statearr_16321_18681[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (15))){
var inst_16301 = (state_16315[(9)]);
var inst_16306 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16301);
var state_16315__$1 = state_16315;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16315__$1,(17),out,inst_16306);
} else {
if((state_val_16316 === (13))){
var inst_16301 = (state_16315[(9)]);
var inst_16301__$1 = (state_16315[(2)]);
var inst_16302 = cljs.core.some(cljs.core.nil_QMARK_,inst_16301__$1);
var state_16315__$1 = (function (){var statearr_16322 = state_16315;
(statearr_16322[(9)] = inst_16301__$1);

return statearr_16322;
})();
if(cljs.core.truth_(inst_16302)){
var statearr_16323_18685 = state_16315__$1;
(statearr_16323_18685[(1)] = (14));

} else {
var statearr_16324_18686 = state_16315__$1;
(statearr_16324_18686[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (6))){
var state_16315__$1 = state_16315;
var statearr_16325_18687 = state_16315__$1;
(statearr_16325_18687[(2)] = null);

(statearr_16325_18687[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (17))){
var inst_16308 = (state_16315[(2)]);
var state_16315__$1 = (function (){var statearr_16335 = state_16315;
(statearr_16335[(10)] = inst_16308);

return statearr_16335;
})();
var statearr_16337_18692 = state_16315__$1;
(statearr_16337_18692[(2)] = null);

(statearr_16337_18692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (3))){
var inst_16313 = (state_16315[(2)]);
var state_16315__$1 = state_16315;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16315__$1,inst_16313);
} else {
if((state_val_16316 === (12))){
var _ = (function (){var statearr_16340 = state_16315;
(statearr_16340[(4)] = cljs.core.rest((state_16315[(4)])));

return statearr_16340;
})();
var state_16315__$1 = state_16315;
var ex16326 = (state_16315__$1[(2)]);
var statearr_16341_18699 = state_16315__$1;
(statearr_16341_18699[(5)] = ex16326);


if((ex16326 instanceof Object)){
var statearr_16344_18701 = state_16315__$1;
(statearr_16344_18701[(1)] = (11));

(statearr_16344_18701[(5)] = null);

} else {
throw ex16326;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (2))){
var inst_16253 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16254 = cnt;
var inst_16255 = (0);
var state_16315__$1 = (function (){var statearr_16350 = state_16315;
(statearr_16350[(7)] = inst_16254);

(statearr_16350[(11)] = inst_16253);

(statearr_16350[(8)] = inst_16255);

return statearr_16350;
})();
var statearr_16351_18702 = state_16315__$1;
(statearr_16351_18702[(2)] = null);

(statearr_16351_18702[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (11))){
var inst_16272 = (state_16315[(2)]);
var inst_16273 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16315__$1 = (function (){var statearr_16353 = state_16315;
(statearr_16353[(12)] = inst_16272);

return statearr_16353;
})();
var statearr_16354_18712 = state_16315__$1;
(statearr_16354_18712[(2)] = inst_16273);

(statearr_16354_18712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (9))){
var inst_16255 = (state_16315[(8)]);
var _ = (function (){var statearr_16355 = state_16315;
(statearr_16355[(4)] = cljs.core.cons((12),(state_16315[(4)])));

return statearr_16355;
})();
var inst_16279 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16255) : chs__$1.call(null,inst_16255));
var inst_16280 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16255) : done.call(null,inst_16255));
var inst_16281 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16279,inst_16280);
var ___$1 = (function (){var statearr_16356 = state_16315;
(statearr_16356[(4)] = cljs.core.rest((state_16315[(4)])));

return statearr_16356;
})();
var state_16315__$1 = state_16315;
var statearr_16357_18721 = state_16315__$1;
(statearr_16357_18721[(2)] = inst_16281);

(statearr_16357_18721[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (5))){
var inst_16295 = (state_16315[(2)]);
var state_16315__$1 = (function (){var statearr_16358 = state_16315;
(statearr_16358[(13)] = inst_16295);

return statearr_16358;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16315__$1,(13),dchan);
} else {
if((state_val_16316 === (14))){
var inst_16304 = cljs.core.async.close_BANG_(out);
var state_16315__$1 = state_16315;
var statearr_16361_18725 = state_16315__$1;
(statearr_16361_18725[(2)] = inst_16304);

(statearr_16361_18725[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (16))){
var inst_16311 = (state_16315[(2)]);
var state_16315__$1 = state_16315;
var statearr_16364_18729 = state_16315__$1;
(statearr_16364_18729[(2)] = inst_16311);

(statearr_16364_18729[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (10))){
var inst_16255 = (state_16315[(8)]);
var inst_16284 = (state_16315[(2)]);
var inst_16285 = (inst_16255 + (1));
var inst_16255__$1 = inst_16285;
var state_16315__$1 = (function (){var statearr_16369 = state_16315;
(statearr_16369[(14)] = inst_16284);

(statearr_16369[(8)] = inst_16255__$1);

return statearr_16369;
})();
var statearr_16371_18731 = state_16315__$1;
(statearr_16371_18731[(2)] = null);

(statearr_16371_18731[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16316 === (8))){
var inst_16293 = (state_16315[(2)]);
var state_16315__$1 = state_16315;
var statearr_16372_18738 = state_16315__$1;
(statearr_16372_18738[(2)] = inst_16293);

(statearr_16372_18738[(1)] = (5));


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
var cljs$core$async$state_machine__13923__auto__ = null;
var cljs$core$async$state_machine__13923__auto____0 = (function (){
var statearr_16388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16388[(0)] = cljs$core$async$state_machine__13923__auto__);

(statearr_16388[(1)] = (1));

return statearr_16388;
});
var cljs$core$async$state_machine__13923__auto____1 = (function (state_16315){
while(true){
var ret_value__13924__auto__ = (function (){try{while(true){
var result__13925__auto__ = switch__13922__auto__(state_16315);
if(cljs.core.keyword_identical_QMARK_(result__13925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13925__auto__;
}
break;
}
}catch (e16391){var ex__13926__auto__ = e16391;
var statearr_16392_18751 = state_16315;
(statearr_16392_18751[(2)] = ex__13926__auto__);


if(cljs.core.seq((state_16315[(4)]))){
var statearr_16402_18752 = state_16315;
(statearr_16402_18752[(1)] = cljs.core.first((state_16315[(4)])));

} else {
throw ex__13926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18757 = state_16315;
state_16315 = G__18757;
continue;
} else {
return ret_value__13924__auto__;
}
break;
}
});
cljs$core$async$state_machine__13923__auto__ = function(state_16315){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13923__auto____1.call(this,state_16315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13923__auto____0;
cljs$core$async$state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13923__auto____1;
return cljs$core$async$state_machine__13923__auto__;
})()
})();
var state__14216__auto__ = (function (){var statearr_16407 = f__14215__auto__();
(statearr_16407[(6)] = c__14214__auto___18663);

return statearr_16407;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14216__auto__);
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
var G__16413 = arguments.length;
switch (G__16413) {
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
var c__14214__auto___18762 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14215__auto__ = (function (){var switch__13922__auto__ = (function (state_16453){
var state_val_16454 = (state_16453[(1)]);
if((state_val_16454 === (7))){
var inst_16431 = (state_16453[(7)]);
var inst_16432 = (state_16453[(8)]);
var inst_16431__$1 = (state_16453[(2)]);
var inst_16432__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16431__$1,(0),null);
var inst_16433 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16431__$1,(1),null);
var inst_16434 = (inst_16432__$1 == null);
var state_16453__$1 = (function (){var statearr_16459 = state_16453;
(statearr_16459[(7)] = inst_16431__$1);

(statearr_16459[(9)] = inst_16433);

(statearr_16459[(8)] = inst_16432__$1);

return statearr_16459;
})();
if(cljs.core.truth_(inst_16434)){
var statearr_16464_18767 = state_16453__$1;
(statearr_16464_18767[(1)] = (8));

} else {
var statearr_16465_18768 = state_16453__$1;
(statearr_16465_18768[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16454 === (1))){
var inst_16421 = cljs.core.vec(chs);
var inst_16422 = inst_16421;
var state_16453__$1 = (function (){var statearr_16472 = state_16453;
(statearr_16472[(10)] = inst_16422);

return statearr_16472;
})();
var statearr_16474_18774 = state_16453__$1;
(statearr_16474_18774[(2)] = null);

(statearr_16474_18774[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16454 === (4))){
var inst_16422 = (state_16453[(10)]);
var state_16453__$1 = state_16453;
return cljs.core.async.ioc_alts_BANG_(state_16453__$1,(7),inst_16422);
} else {
if((state_val_16454 === (6))){
var inst_16449 = (state_16453[(2)]);
var state_16453__$1 = state_16453;
var statearr_16481_18779 = state_16453__$1;
(statearr_16481_18779[(2)] = inst_16449);

(statearr_16481_18779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16454 === (3))){
var inst_16451 = (state_16453[(2)]);
var state_16453__$1 = state_16453;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16453__$1,inst_16451);
} else {
if((state_val_16454 === (2))){
var inst_16422 = (state_16453[(10)]);
var inst_16424 = cljs.core.count(inst_16422);
var inst_16425 = (inst_16424 > (0));
var state_16453__$1 = state_16453;
if(cljs.core.truth_(inst_16425)){
var statearr_16486_18780 = state_16453__$1;
(statearr_16486_18780[(1)] = (4));

} else {
var statearr_16488_18781 = state_16453__$1;
(statearr_16488_18781[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16454 === (11))){
var inst_16422 = (state_16453[(10)]);
var inst_16442 = (state_16453[(2)]);
var tmp16482 = inst_16422;
var inst_16422__$1 = tmp16482;
var state_16453__$1 = (function (){var statearr_16489 = state_16453;
(statearr_16489[(11)] = inst_16442);

(statearr_16489[(10)] = inst_16422__$1);

return statearr_16489;
})();
var statearr_16490_18784 = state_16453__$1;
(statearr_16490_18784[(2)] = null);

(statearr_16490_18784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16454 === (9))){
var inst_16432 = (state_16453[(8)]);
var state_16453__$1 = state_16453;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16453__$1,(11),out,inst_16432);
} else {
if((state_val_16454 === (5))){
var inst_16447 = cljs.core.async.close_BANG_(out);
var state_16453__$1 = state_16453;
var statearr_16497_18785 = state_16453__$1;
(statearr_16497_18785[(2)] = inst_16447);

(statearr_16497_18785[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16454 === (10))){
var inst_16445 = (state_16453[(2)]);
var state_16453__$1 = state_16453;
var statearr_16499_18786 = state_16453__$1;
(statearr_16499_18786[(2)] = inst_16445);

(statearr_16499_18786[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16454 === (8))){
var inst_16431 = (state_16453[(7)]);
var inst_16433 = (state_16453[(9)]);
var inst_16422 = (state_16453[(10)]);
var inst_16432 = (state_16453[(8)]);
var inst_16437 = (function (){var cs = inst_16422;
var vec__16427 = inst_16431;
var v = inst_16432;
var c = inst_16433;
return (function (p1__16410_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16410_SHARP_);
});
})();
var inst_16438 = cljs.core.filterv(inst_16437,inst_16422);
var inst_16422__$1 = inst_16438;
var state_16453__$1 = (function (){var statearr_16503 = state_16453;
(statearr_16503[(10)] = inst_16422__$1);

return statearr_16503;
})();
var statearr_16505_18790 = state_16453__$1;
(statearr_16505_18790[(2)] = null);

(statearr_16505_18790[(1)] = (2));


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
var cljs$core$async$state_machine__13923__auto__ = null;
var cljs$core$async$state_machine__13923__auto____0 = (function (){
var statearr_16506 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16506[(0)] = cljs$core$async$state_machine__13923__auto__);

(statearr_16506[(1)] = (1));

return statearr_16506;
});
var cljs$core$async$state_machine__13923__auto____1 = (function (state_16453){
while(true){
var ret_value__13924__auto__ = (function (){try{while(true){
var result__13925__auto__ = switch__13922__auto__(state_16453);
if(cljs.core.keyword_identical_QMARK_(result__13925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13925__auto__;
}
break;
}
}catch (e16509){var ex__13926__auto__ = e16509;
var statearr_16510_18802 = state_16453;
(statearr_16510_18802[(2)] = ex__13926__auto__);


if(cljs.core.seq((state_16453[(4)]))){
var statearr_16514_18803 = state_16453;
(statearr_16514_18803[(1)] = cljs.core.first((state_16453[(4)])));

} else {
throw ex__13926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18806 = state_16453;
state_16453 = G__18806;
continue;
} else {
return ret_value__13924__auto__;
}
break;
}
});
cljs$core$async$state_machine__13923__auto__ = function(state_16453){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13923__auto____1.call(this,state_16453);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13923__auto____0;
cljs$core$async$state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13923__auto____1;
return cljs$core$async$state_machine__13923__auto__;
})()
})();
var state__14216__auto__ = (function (){var statearr_16522 = f__14215__auto__();
(statearr_16522[(6)] = c__14214__auto___18762);

return statearr_16522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14216__auto__);
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
var G__16528 = arguments.length;
switch (G__16528) {
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
var c__14214__auto___18809 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14215__auto__ = (function (){var switch__13922__auto__ = (function (state_16558){
var state_val_16559 = (state_16558[(1)]);
if((state_val_16559 === (7))){
var inst_16539 = (state_16558[(7)]);
var inst_16539__$1 = (state_16558[(2)]);
var inst_16540 = (inst_16539__$1 == null);
var inst_16541 = cljs.core.not(inst_16540);
var state_16558__$1 = (function (){var statearr_16565 = state_16558;
(statearr_16565[(7)] = inst_16539__$1);

return statearr_16565;
})();
if(inst_16541){
var statearr_16567_18810 = state_16558__$1;
(statearr_16567_18810[(1)] = (8));

} else {
var statearr_16568_18811 = state_16558__$1;
(statearr_16568_18811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16559 === (1))){
var inst_16534 = (0);
var state_16558__$1 = (function (){var statearr_16569 = state_16558;
(statearr_16569[(8)] = inst_16534);

return statearr_16569;
})();
var statearr_16570_18812 = state_16558__$1;
(statearr_16570_18812[(2)] = null);

(statearr_16570_18812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16559 === (4))){
var state_16558__$1 = state_16558;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16558__$1,(7),ch);
} else {
if((state_val_16559 === (6))){
var inst_16553 = (state_16558[(2)]);
var state_16558__$1 = state_16558;
var statearr_16574_18818 = state_16558__$1;
(statearr_16574_18818[(2)] = inst_16553);

(statearr_16574_18818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16559 === (3))){
var inst_16555 = (state_16558[(2)]);
var inst_16556 = cljs.core.async.close_BANG_(out);
var state_16558__$1 = (function (){var statearr_16577 = state_16558;
(statearr_16577[(9)] = inst_16555);

return statearr_16577;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16558__$1,inst_16556);
} else {
if((state_val_16559 === (2))){
var inst_16534 = (state_16558[(8)]);
var inst_16536 = (inst_16534 < n);
var state_16558__$1 = state_16558;
if(cljs.core.truth_(inst_16536)){
var statearr_16579_18820 = state_16558__$1;
(statearr_16579_18820[(1)] = (4));

} else {
var statearr_16580_18821 = state_16558__$1;
(statearr_16580_18821[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16559 === (11))){
var inst_16534 = (state_16558[(8)]);
var inst_16544 = (state_16558[(2)]);
var inst_16546 = (inst_16534 + (1));
var inst_16534__$1 = inst_16546;
var state_16558__$1 = (function (){var statearr_16584 = state_16558;
(statearr_16584[(10)] = inst_16544);

(statearr_16584[(8)] = inst_16534__$1);

return statearr_16584;
})();
var statearr_16585_18828 = state_16558__$1;
(statearr_16585_18828[(2)] = null);

(statearr_16585_18828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16559 === (9))){
var state_16558__$1 = state_16558;
var statearr_16590_18829 = state_16558__$1;
(statearr_16590_18829[(2)] = null);

(statearr_16590_18829[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16559 === (5))){
var state_16558__$1 = state_16558;
var statearr_16592_18830 = state_16558__$1;
(statearr_16592_18830[(2)] = null);

(statearr_16592_18830[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16559 === (10))){
var inst_16550 = (state_16558[(2)]);
var state_16558__$1 = state_16558;
var statearr_16597_18831 = state_16558__$1;
(statearr_16597_18831[(2)] = inst_16550);

(statearr_16597_18831[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16559 === (8))){
var inst_16539 = (state_16558[(7)]);
var state_16558__$1 = state_16558;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16558__$1,(11),out,inst_16539);
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
var cljs$core$async$state_machine__13923__auto__ = null;
var cljs$core$async$state_machine__13923__auto____0 = (function (){
var statearr_16603 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16603[(0)] = cljs$core$async$state_machine__13923__auto__);

(statearr_16603[(1)] = (1));

return statearr_16603;
});
var cljs$core$async$state_machine__13923__auto____1 = (function (state_16558){
while(true){
var ret_value__13924__auto__ = (function (){try{while(true){
var result__13925__auto__ = switch__13922__auto__(state_16558);
if(cljs.core.keyword_identical_QMARK_(result__13925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13925__auto__;
}
break;
}
}catch (e16605){var ex__13926__auto__ = e16605;
var statearr_16606_18832 = state_16558;
(statearr_16606_18832[(2)] = ex__13926__auto__);


if(cljs.core.seq((state_16558[(4)]))){
var statearr_16607_18833 = state_16558;
(statearr_16607_18833[(1)] = cljs.core.first((state_16558[(4)])));

} else {
throw ex__13926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18834 = state_16558;
state_16558 = G__18834;
continue;
} else {
return ret_value__13924__auto__;
}
break;
}
});
cljs$core$async$state_machine__13923__auto__ = function(state_16558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13923__auto____1.call(this,state_16558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13923__auto____0;
cljs$core$async$state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13923__auto____1;
return cljs$core$async$state_machine__13923__auto__;
})()
})();
var state__14216__auto__ = (function (){var statearr_16611 = f__14215__auto__();
(statearr_16611[(6)] = c__14214__auto___18809);

return statearr_16611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14216__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16624 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16624 = (function (f,ch,meta16625){
this.f = f;
this.ch = ch;
this.meta16625 = meta16625;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16624.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16626,meta16625__$1){
var self__ = this;
var _16626__$1 = this;
return (new cljs.core.async.t_cljs$core$async16624(self__.f,self__.ch,meta16625__$1));
}));

(cljs.core.async.t_cljs$core$async16624.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16626){
var self__ = this;
var _16626__$1 = this;
return self__.meta16625;
}));

(cljs.core.async.t_cljs$core$async16624.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16624.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16624.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16624.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16624.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16649 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16649 = (function (f,ch,meta16625,_,fn1,meta16650){
this.f = f;
this.ch = ch;
this.meta16625 = meta16625;
this._ = _;
this.fn1 = fn1;
this.meta16650 = meta16650;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16651,meta16650__$1){
var self__ = this;
var _16651__$1 = this;
return (new cljs.core.async.t_cljs$core$async16649(self__.f,self__.ch,self__.meta16625,self__._,self__.fn1,meta16650__$1));
}));

(cljs.core.async.t_cljs$core$async16649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16651){
var self__ = this;
var _16651__$1 = this;
return self__.meta16650;
}));

(cljs.core.async.t_cljs$core$async16649.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16649.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16649.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16649.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16621_SHARP_){
var G__16663 = (((p1__16621_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16621_SHARP_) : self__.f.call(null,p1__16621_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16663) : f1.call(null,G__16663));
});
}));

(cljs.core.async.t_cljs$core$async16649.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16625","meta16625",15446278,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16624","cljs.core.async/t_cljs$core$async16624",987483643,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16650","meta16650",1039298513,null)], null);
}));

(cljs.core.async.t_cljs$core$async16649.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16649.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16649");

(cljs.core.async.t_cljs$core$async16649.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16649");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16649.
 */
cljs.core.async.__GT_t_cljs$core$async16649 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16649(f__$1,ch__$1,meta16625__$1,___$2,fn1__$1,meta16650){
return (new cljs.core.async.t_cljs$core$async16649(f__$1,ch__$1,meta16625__$1,___$2,fn1__$1,meta16650));
});

}

return (new cljs.core.async.t_cljs$core$async16649(self__.f,self__.ch,self__.meta16625,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16679 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16679) : self__.f.call(null,G__16679));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16624.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16624.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16624.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16625","meta16625",15446278,null)], null);
}));

(cljs.core.async.t_cljs$core$async16624.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16624.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16624");

(cljs.core.async.t_cljs$core$async16624.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16624");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16624.
 */
cljs.core.async.__GT_t_cljs$core$async16624 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16624(f__$1,ch__$1,meta16625){
return (new cljs.core.async.t_cljs$core$async16624(f__$1,ch__$1,meta16625));
});

}

return (new cljs.core.async.t_cljs$core$async16624(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16697 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16697 = (function (f,ch,meta16698){
this.f = f;
this.ch = ch;
this.meta16698 = meta16698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16699,meta16698__$1){
var self__ = this;
var _16699__$1 = this;
return (new cljs.core.async.t_cljs$core$async16697(self__.f,self__.ch,meta16698__$1));
}));

(cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16699){
var self__ = this;
var _16699__$1 = this;
return self__.meta16698;
}));

(cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16697.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16697.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16698","meta16698",805224014,null)], null);
}));

(cljs.core.async.t_cljs$core$async16697.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16697");

(cljs.core.async.t_cljs$core$async16697.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16697");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16697.
 */
cljs.core.async.__GT_t_cljs$core$async16697 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16697(f__$1,ch__$1,meta16698){
return (new cljs.core.async.t_cljs$core$async16697(f__$1,ch__$1,meta16698));
});

}

return (new cljs.core.async.t_cljs$core$async16697(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16729 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16729 = (function (p,ch,meta16730){
this.p = p;
this.ch = ch;
this.meta16730 = meta16730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16731,meta16730__$1){
var self__ = this;
var _16731__$1 = this;
return (new cljs.core.async.t_cljs$core$async16729(self__.p,self__.ch,meta16730__$1));
}));

(cljs.core.async.t_cljs$core$async16729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16731){
var self__ = this;
var _16731__$1 = this;
return self__.meta16730;
}));

(cljs.core.async.t_cljs$core$async16729.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16729.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16729.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16729.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16729.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16729.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16729.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16729.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16730","meta16730",-628622941,null)], null);
}));

(cljs.core.async.t_cljs$core$async16729.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16729.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16729");

(cljs.core.async.t_cljs$core$async16729.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16729");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16729.
 */
cljs.core.async.__GT_t_cljs$core$async16729 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16729(p__$1,ch__$1,meta16730){
return (new cljs.core.async.t_cljs$core$async16729(p__$1,ch__$1,meta16730));
});

}

return (new cljs.core.async.t_cljs$core$async16729(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__16772 = arguments.length;
switch (G__16772) {
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
var c__14214__auto___18874 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14215__auto__ = (function (){var switch__13922__auto__ = (function (state_16814){
var state_val_16816 = (state_16814[(1)]);
if((state_val_16816 === (7))){
var inst_16810 = (state_16814[(2)]);
var state_16814__$1 = state_16814;
var statearr_16822_18876 = state_16814__$1;
(statearr_16822_18876[(2)] = inst_16810);

(statearr_16822_18876[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16816 === (1))){
var state_16814__$1 = state_16814;
var statearr_16825_18877 = state_16814__$1;
(statearr_16825_18877[(2)] = null);

(statearr_16825_18877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16816 === (4))){
var inst_16791 = (state_16814[(7)]);
var inst_16791__$1 = (state_16814[(2)]);
var inst_16793 = (inst_16791__$1 == null);
var state_16814__$1 = (function (){var statearr_16828 = state_16814;
(statearr_16828[(7)] = inst_16791__$1);

return statearr_16828;
})();
if(cljs.core.truth_(inst_16793)){
var statearr_16832_18883 = state_16814__$1;
(statearr_16832_18883[(1)] = (5));

} else {
var statearr_16834_18884 = state_16814__$1;
(statearr_16834_18884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16816 === (6))){
var inst_16791 = (state_16814[(7)]);
var inst_16798 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16791) : p.call(null,inst_16791));
var state_16814__$1 = state_16814;
if(cljs.core.truth_(inst_16798)){
var statearr_16837_18886 = state_16814__$1;
(statearr_16837_18886[(1)] = (8));

} else {
var statearr_16839_18887 = state_16814__$1;
(statearr_16839_18887[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16816 === (3))){
var inst_16812 = (state_16814[(2)]);
var state_16814__$1 = state_16814;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16814__$1,inst_16812);
} else {
if((state_val_16816 === (2))){
var state_16814__$1 = state_16814;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16814__$1,(4),ch);
} else {
if((state_val_16816 === (11))){
var inst_16804 = (state_16814[(2)]);
var state_16814__$1 = state_16814;
var statearr_16842_18890 = state_16814__$1;
(statearr_16842_18890[(2)] = inst_16804);

(statearr_16842_18890[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16816 === (9))){
var state_16814__$1 = state_16814;
var statearr_16844_18892 = state_16814__$1;
(statearr_16844_18892[(2)] = null);

(statearr_16844_18892[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16816 === (5))){
var inst_16795 = cljs.core.async.close_BANG_(out);
var state_16814__$1 = state_16814;
var statearr_16848_18896 = state_16814__$1;
(statearr_16848_18896[(2)] = inst_16795);

(statearr_16848_18896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16816 === (10))){
var inst_16807 = (state_16814[(2)]);
var state_16814__$1 = (function (){var statearr_16853 = state_16814;
(statearr_16853[(8)] = inst_16807);

return statearr_16853;
})();
var statearr_16855_18897 = state_16814__$1;
(statearr_16855_18897[(2)] = null);

(statearr_16855_18897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16816 === (8))){
var inst_16791 = (state_16814[(7)]);
var state_16814__$1 = state_16814;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16814__$1,(11),out,inst_16791);
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
var cljs$core$async$state_machine__13923__auto__ = null;
var cljs$core$async$state_machine__13923__auto____0 = (function (){
var statearr_16859 = [null,null,null,null,null,null,null,null,null];
(statearr_16859[(0)] = cljs$core$async$state_machine__13923__auto__);

(statearr_16859[(1)] = (1));

return statearr_16859;
});
var cljs$core$async$state_machine__13923__auto____1 = (function (state_16814){
while(true){
var ret_value__13924__auto__ = (function (){try{while(true){
var result__13925__auto__ = switch__13922__auto__(state_16814);
if(cljs.core.keyword_identical_QMARK_(result__13925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13925__auto__;
}
break;
}
}catch (e16861){var ex__13926__auto__ = e16861;
var statearr_16862_18899 = state_16814;
(statearr_16862_18899[(2)] = ex__13926__auto__);


if(cljs.core.seq((state_16814[(4)]))){
var statearr_16864_18900 = state_16814;
(statearr_16864_18900[(1)] = cljs.core.first((state_16814[(4)])));

} else {
throw ex__13926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18901 = state_16814;
state_16814 = G__18901;
continue;
} else {
return ret_value__13924__auto__;
}
break;
}
});
cljs$core$async$state_machine__13923__auto__ = function(state_16814){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13923__auto____1.call(this,state_16814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13923__auto____0;
cljs$core$async$state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13923__auto____1;
return cljs$core$async$state_machine__13923__auto__;
})()
})();
var state__14216__auto__ = (function (){var statearr_16869 = f__14215__auto__();
(statearr_16869[(6)] = c__14214__auto___18874);

return statearr_16869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14216__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16873 = arguments.length;
switch (G__16873) {
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
var c__14214__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14215__auto__ = (function (){var switch__13922__auto__ = (function (state_16948){
var state_val_16949 = (state_16948[(1)]);
if((state_val_16949 === (7))){
var inst_16944 = (state_16948[(2)]);
var state_16948__$1 = state_16948;
var statearr_16950_18906 = state_16948__$1;
(statearr_16950_18906[(2)] = inst_16944);

(statearr_16950_18906[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16949 === (20))){
var inst_16914 = (state_16948[(7)]);
var inst_16925 = (state_16948[(2)]);
var inst_16926 = cljs.core.next(inst_16914);
var inst_16900 = inst_16926;
var inst_16901 = null;
var inst_16902 = (0);
var inst_16903 = (0);
var state_16948__$1 = (function (){var statearr_16951 = state_16948;
(statearr_16951[(8)] = inst_16900);

(statearr_16951[(9)] = inst_16901);

(statearr_16951[(10)] = inst_16925);

(statearr_16951[(11)] = inst_16902);

(statearr_16951[(12)] = inst_16903);

return statearr_16951;
})();
var statearr_16956_18908 = state_16948__$1;
(statearr_16956_18908[(2)] = null);

(statearr_16956_18908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16949 === (1))){
var state_16948__$1 = state_16948;
var statearr_16962_18912 = state_16948__$1;
(statearr_16962_18912[(2)] = null);

(statearr_16962_18912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16949 === (4))){
var inst_16886 = (state_16948[(13)]);
var inst_16886__$1 = (state_16948[(2)]);
var inst_16889 = (inst_16886__$1 == null);
var state_16948__$1 = (function (){var statearr_16963 = state_16948;
(statearr_16963[(13)] = inst_16886__$1);

return statearr_16963;
})();
if(cljs.core.truth_(inst_16889)){
var statearr_16964_18915 = state_16948__$1;
(statearr_16964_18915[(1)] = (5));

} else {
var statearr_16965_18916 = state_16948__$1;
(statearr_16965_18916[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16949 === (15))){
var state_16948__$1 = state_16948;
var statearr_16973_18917 = state_16948__$1;
(statearr_16973_18917[(2)] = null);

(statearr_16973_18917[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16949 === (21))){
var state_16948__$1 = state_16948;
var statearr_16974_18918 = state_16948__$1;
(statearr_16974_18918[(2)] = null);

(statearr_16974_18918[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16949 === (13))){
var inst_16900 = (state_16948[(8)]);
var inst_16901 = (state_16948[(9)]);
var inst_16902 = (state_16948[(11)]);
var inst_16903 = (state_16948[(12)]);
var inst_16910 = (state_16948[(2)]);
var inst_16911 = (inst_16903 + (1));
var tmp16970 = inst_16900;
var tmp16971 = inst_16901;
var tmp16972 = inst_16902;
var inst_16900__$1 = tmp16970;
var inst_16901__$1 = tmp16971;
var inst_16902__$1 = tmp16972;
var inst_16903__$1 = inst_16911;
var state_16948__$1 = (function (){var statearr_16975 = state_16948;
(statearr_16975[(8)] = inst_16900__$1);

(statearr_16975[(9)] = inst_16901__$1);

(statearr_16975[(11)] = inst_16902__$1);

(statearr_16975[(14)] = inst_16910);

(statearr_16975[(12)] = inst_16903__$1);

return statearr_16975;
})();
var statearr_16976_18923 = state_16948__$1;
(statearr_16976_18923[(2)] = null);

(statearr_16976_18923[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16949 === (22))){
var state_16948__$1 = state_16948;
var statearr_16977_18929 = state_16948__$1;
(statearr_16977_18929[(2)] = null);

(statearr_16977_18929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16949 === (6))){
var inst_16886 = (state_16948[(13)]);
var inst_16898 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16886) : f.call(null,inst_16886));
var inst_16899 = cljs.core.seq(inst_16898);
var inst_16900 = inst_16899;
var inst_16901 = null;
var inst_16902 = (0);
var inst_16903 = (0);
var state_16948__$1 = (function (){var statearr_16980 = state_16948;
(statearr_16980[(8)] = inst_16900);

(statearr_16980[(9)] = inst_16901);

(statearr_16980[(11)] = inst_16902);

(statearr_16980[(12)] = inst_16903);

return statearr_16980;
})();
var statearr_16981_18937 = state_16948__$1;
(statearr_16981_18937[(2)] = null);

(statearr_16981_18937[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16949 === (17))){
var inst_16914 = (state_16948[(7)]);
var inst_16918 = cljs.core.chunk_first(inst_16914);
var inst_16919 = cljs.core.chunk_rest(inst_16914);
var inst_16920 = cljs.core.count(inst_16918);
var inst_16900 = inst_16919;
var inst_16901 = inst_16918;
var inst_16902 = inst_16920;
var inst_16903 = (0);
var state_16948__$1 = (function (){var statearr_16982 = state_16948;
(statearr_16982[(8)] = inst_16900);

(statearr_16982[(9)] = inst_16901);

(statearr_16982[(11)] = inst_16902);

(statearr_16982[(12)] = inst_16903);

return statearr_16982;
})();
var statearr_16983_18946 = state_16948__$1;
(statearr_16983_18946[(2)] = null);

(statearr_16983_18946[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16949 === (3))){
var inst_16946 = (state_16948[(2)]);
var state_16948__$1 = state_16948;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16948__$1,inst_16946);
} else {
if((state_val_16949 === (12))){
var inst_16934 = (state_16948[(2)]);
var state_16948__$1 = state_16948;
var statearr_16984_18948 = state_16948__$1;
(statearr_16984_18948[(2)] = inst_16934);

(statearr_16984_18948[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16949 === (2))){
var state_16948__$1 = state_16948;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16948__$1,(4),in$);
} else {
if((state_val_16949 === (23))){
var inst_16942 = (state_16948[(2)]);
var state_16948__$1 = state_16948;
var statearr_16986_18951 = state_16948__$1;
(statearr_16986_18951[(2)] = inst_16942);

(statearr_16986_18951[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16949 === (19))){
var inst_16929 = (state_16948[(2)]);
var state_16948__$1 = state_16948;
var statearr_16987_18955 = state_16948__$1;
(statearr_16987_18955[(2)] = inst_16929);

(statearr_16987_18955[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16949 === (11))){
var inst_16900 = (state_16948[(8)]);
var inst_16914 = (state_16948[(7)]);
var inst_16914__$1 = cljs.core.seq(inst_16900);
var state_16948__$1 = (function (){var statearr_16990 = state_16948;
(statearr_16990[(7)] = inst_16914__$1);

return statearr_16990;
})();
if(inst_16914__$1){
var statearr_16991_18960 = state_16948__$1;
(statearr_16991_18960[(1)] = (14));

} else {
var statearr_16992_18961 = state_16948__$1;
(statearr_16992_18961[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16949 === (9))){
var inst_16936 = (state_16948[(2)]);
var inst_16937 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16948__$1 = (function (){var statearr_16994 = state_16948;
(statearr_16994[(15)] = inst_16936);

return statearr_16994;
})();
if(cljs.core.truth_(inst_16937)){
var statearr_16996_18970 = state_16948__$1;
(statearr_16996_18970[(1)] = (21));

} else {
var statearr_16997_18971 = state_16948__$1;
(statearr_16997_18971[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16949 === (5))){
var inst_16891 = cljs.core.async.close_BANG_(out);
var state_16948__$1 = state_16948;
var statearr_17000_18972 = state_16948__$1;
(statearr_17000_18972[(2)] = inst_16891);

(statearr_17000_18972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16949 === (14))){
var inst_16914 = (state_16948[(7)]);
var inst_16916 = cljs.core.chunked_seq_QMARK_(inst_16914);
var state_16948__$1 = state_16948;
if(inst_16916){
var statearr_17005_18974 = state_16948__$1;
(statearr_17005_18974[(1)] = (17));

} else {
var statearr_17008_18979 = state_16948__$1;
(statearr_17008_18979[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16949 === (16))){
var inst_16932 = (state_16948[(2)]);
var state_16948__$1 = state_16948;
var statearr_17009_18982 = state_16948__$1;
(statearr_17009_18982[(2)] = inst_16932);

(statearr_17009_18982[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16949 === (10))){
var inst_16901 = (state_16948[(9)]);
var inst_16903 = (state_16948[(12)]);
var inst_16908 = cljs.core._nth(inst_16901,inst_16903);
var state_16948__$1 = state_16948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16948__$1,(13),out,inst_16908);
} else {
if((state_val_16949 === (18))){
var inst_16914 = (state_16948[(7)]);
var inst_16923 = cljs.core.first(inst_16914);
var state_16948__$1 = state_16948;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16948__$1,(20),out,inst_16923);
} else {
if((state_val_16949 === (8))){
var inst_16902 = (state_16948[(11)]);
var inst_16903 = (state_16948[(12)]);
var inst_16905 = (inst_16903 < inst_16902);
var inst_16906 = inst_16905;
var state_16948__$1 = state_16948;
if(cljs.core.truth_(inst_16906)){
var statearr_17012_18997 = state_16948__$1;
(statearr_17012_18997[(1)] = (10));

} else {
var statearr_17013_18998 = state_16948__$1;
(statearr_17013_18998[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__13923__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13923__auto____0 = (function (){
var statearr_17019 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17019[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13923__auto__);

(statearr_17019[(1)] = (1));

return statearr_17019;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13923__auto____1 = (function (state_16948){
while(true){
var ret_value__13924__auto__ = (function (){try{while(true){
var result__13925__auto__ = switch__13922__auto__(state_16948);
if(cljs.core.keyword_identical_QMARK_(result__13925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13925__auto__;
}
break;
}
}catch (e17020){var ex__13926__auto__ = e17020;
var statearr_17021_19000 = state_16948;
(statearr_17021_19000[(2)] = ex__13926__auto__);


if(cljs.core.seq((state_16948[(4)]))){
var statearr_17022_19002 = state_16948;
(statearr_17022_19002[(1)] = cljs.core.first((state_16948[(4)])));

} else {
throw ex__13926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19004 = state_16948;
state_16948 = G__19004;
continue;
} else {
return ret_value__13924__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13923__auto__ = function(state_16948){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13923__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13923__auto____1.call(this,state_16948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13923__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13923__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13923__auto__;
})()
})();
var state__14216__auto__ = (function (){var statearr_17025 = f__14215__auto__();
(statearr_17025[(6)] = c__14214__auto__);

return statearr_17025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14216__auto__);
}));

return c__14214__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17038 = arguments.length;
switch (G__17038) {
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
var G__17058 = arguments.length;
switch (G__17058) {
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
var G__17065 = arguments.length;
switch (G__17065) {
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
var c__14214__auto___19020 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14215__auto__ = (function (){var switch__13922__auto__ = (function (state_17107){
var state_val_17108 = (state_17107[(1)]);
if((state_val_17108 === (7))){
var inst_17098 = (state_17107[(2)]);
var state_17107__$1 = state_17107;
var statearr_17111_19022 = state_17107__$1;
(statearr_17111_19022[(2)] = inst_17098);

(statearr_17111_19022[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17108 === (1))){
var inst_17073 = null;
var state_17107__$1 = (function (){var statearr_17113 = state_17107;
(statearr_17113[(7)] = inst_17073);

return statearr_17113;
})();
var statearr_17114_19024 = state_17107__$1;
(statearr_17114_19024[(2)] = null);

(statearr_17114_19024[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17108 === (4))){
var inst_17079 = (state_17107[(8)]);
var inst_17079__$1 = (state_17107[(2)]);
var inst_17083 = (inst_17079__$1 == null);
var inst_17085 = cljs.core.not(inst_17083);
var state_17107__$1 = (function (){var statearr_17115 = state_17107;
(statearr_17115[(8)] = inst_17079__$1);

return statearr_17115;
})();
if(inst_17085){
var statearr_17116_19025 = state_17107__$1;
(statearr_17116_19025[(1)] = (5));

} else {
var statearr_17117_19026 = state_17107__$1;
(statearr_17117_19026[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17108 === (6))){
var state_17107__$1 = state_17107;
var statearr_17119_19027 = state_17107__$1;
(statearr_17119_19027[(2)] = null);

(statearr_17119_19027[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17108 === (3))){
var inst_17100 = (state_17107[(2)]);
var inst_17102 = cljs.core.async.close_BANG_(out);
var state_17107__$1 = (function (){var statearr_17122 = state_17107;
(statearr_17122[(9)] = inst_17100);

return statearr_17122;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17107__$1,inst_17102);
} else {
if((state_val_17108 === (2))){
var state_17107__$1 = state_17107;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17107__$1,(4),ch);
} else {
if((state_val_17108 === (11))){
var inst_17079 = (state_17107[(8)]);
var inst_17092 = (state_17107[(2)]);
var inst_17073 = inst_17079;
var state_17107__$1 = (function (){var statearr_17123 = state_17107;
(statearr_17123[(7)] = inst_17073);

(statearr_17123[(10)] = inst_17092);

return statearr_17123;
})();
var statearr_17124_19028 = state_17107__$1;
(statearr_17124_19028[(2)] = null);

(statearr_17124_19028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17108 === (9))){
var inst_17079 = (state_17107[(8)]);
var state_17107__$1 = state_17107;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17107__$1,(11),out,inst_17079);
} else {
if((state_val_17108 === (5))){
var inst_17073 = (state_17107[(7)]);
var inst_17079 = (state_17107[(8)]);
var inst_17087 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17079,inst_17073);
var state_17107__$1 = state_17107;
if(inst_17087){
var statearr_17130_19029 = state_17107__$1;
(statearr_17130_19029[(1)] = (8));

} else {
var statearr_17131_19031 = state_17107__$1;
(statearr_17131_19031[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17108 === (10))){
var inst_17095 = (state_17107[(2)]);
var state_17107__$1 = state_17107;
var statearr_17133_19032 = state_17107__$1;
(statearr_17133_19032[(2)] = inst_17095);

(statearr_17133_19032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17108 === (8))){
var inst_17073 = (state_17107[(7)]);
var tmp17126 = inst_17073;
var inst_17073__$1 = tmp17126;
var state_17107__$1 = (function (){var statearr_17135 = state_17107;
(statearr_17135[(7)] = inst_17073__$1);

return statearr_17135;
})();
var statearr_17136_19042 = state_17107__$1;
(statearr_17136_19042[(2)] = null);

(statearr_17136_19042[(1)] = (2));


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
var cljs$core$async$state_machine__13923__auto__ = null;
var cljs$core$async$state_machine__13923__auto____0 = (function (){
var statearr_17139 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17139[(0)] = cljs$core$async$state_machine__13923__auto__);

(statearr_17139[(1)] = (1));

return statearr_17139;
});
var cljs$core$async$state_machine__13923__auto____1 = (function (state_17107){
while(true){
var ret_value__13924__auto__ = (function (){try{while(true){
var result__13925__auto__ = switch__13922__auto__(state_17107);
if(cljs.core.keyword_identical_QMARK_(result__13925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13925__auto__;
}
break;
}
}catch (e17140){var ex__13926__auto__ = e17140;
var statearr_17145_19059 = state_17107;
(statearr_17145_19059[(2)] = ex__13926__auto__);


if(cljs.core.seq((state_17107[(4)]))){
var statearr_17150_19064 = state_17107;
(statearr_17150_19064[(1)] = cljs.core.first((state_17107[(4)])));

} else {
throw ex__13926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19069 = state_17107;
state_17107 = G__19069;
continue;
} else {
return ret_value__13924__auto__;
}
break;
}
});
cljs$core$async$state_machine__13923__auto__ = function(state_17107){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13923__auto____1.call(this,state_17107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13923__auto____0;
cljs$core$async$state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13923__auto____1;
return cljs$core$async$state_machine__13923__auto__;
})()
})();
var state__14216__auto__ = (function (){var statearr_17160 = f__14215__auto__();
(statearr_17160[(6)] = c__14214__auto___19020);

return statearr_17160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14216__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17172 = arguments.length;
switch (G__17172) {
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
var c__14214__auto___19104 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14215__auto__ = (function (){var switch__13922__auto__ = (function (state_17230){
var state_val_17231 = (state_17230[(1)]);
if((state_val_17231 === (7))){
var inst_17226 = (state_17230[(2)]);
var state_17230__$1 = state_17230;
var statearr_17234_19118 = state_17230__$1;
(statearr_17234_19118[(2)] = inst_17226);

(statearr_17234_19118[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17231 === (1))){
var inst_17181 = (new Array(n));
var inst_17182 = inst_17181;
var inst_17183 = (0);
var state_17230__$1 = (function (){var statearr_17239 = state_17230;
(statearr_17239[(7)] = inst_17183);

(statearr_17239[(8)] = inst_17182);

return statearr_17239;
})();
var statearr_17243_19129 = state_17230__$1;
(statearr_17243_19129[(2)] = null);

(statearr_17243_19129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17231 === (4))){
var inst_17192 = (state_17230[(9)]);
var inst_17192__$1 = (state_17230[(2)]);
var inst_17193 = (inst_17192__$1 == null);
var inst_17194 = cljs.core.not(inst_17193);
var state_17230__$1 = (function (){var statearr_17247 = state_17230;
(statearr_17247[(9)] = inst_17192__$1);

return statearr_17247;
})();
if(inst_17194){
var statearr_17248_19141 = state_17230__$1;
(statearr_17248_19141[(1)] = (5));

} else {
var statearr_17249_19146 = state_17230__$1;
(statearr_17249_19146[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17231 === (15))){
var inst_17220 = (state_17230[(2)]);
var state_17230__$1 = state_17230;
var statearr_17253_19155 = state_17230__$1;
(statearr_17253_19155[(2)] = inst_17220);

(statearr_17253_19155[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17231 === (13))){
var state_17230__$1 = state_17230;
var statearr_17254_19156 = state_17230__$1;
(statearr_17254_19156[(2)] = null);

(statearr_17254_19156[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17231 === (6))){
var inst_17183 = (state_17230[(7)]);
var inst_17216 = (inst_17183 > (0));
var state_17230__$1 = state_17230;
if(cljs.core.truth_(inst_17216)){
var statearr_17255_19157 = state_17230__$1;
(statearr_17255_19157[(1)] = (12));

} else {
var statearr_17257_19158 = state_17230__$1;
(statearr_17257_19158[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17231 === (3))){
var inst_17228 = (state_17230[(2)]);
var state_17230__$1 = state_17230;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17230__$1,inst_17228);
} else {
if((state_val_17231 === (12))){
var inst_17182 = (state_17230[(8)]);
var inst_17218 = cljs.core.vec(inst_17182);
var state_17230__$1 = state_17230;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17230__$1,(15),out,inst_17218);
} else {
if((state_val_17231 === (2))){
var state_17230__$1 = state_17230;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17230__$1,(4),ch);
} else {
if((state_val_17231 === (11))){
var inst_17204 = (state_17230[(2)]);
var inst_17205 = (new Array(n));
var inst_17182 = inst_17205;
var inst_17183 = (0);
var state_17230__$1 = (function (){var statearr_17259 = state_17230;
(statearr_17259[(7)] = inst_17183);

(statearr_17259[(8)] = inst_17182);

(statearr_17259[(10)] = inst_17204);

return statearr_17259;
})();
var statearr_17262_19166 = state_17230__$1;
(statearr_17262_19166[(2)] = null);

(statearr_17262_19166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17231 === (9))){
var inst_17182 = (state_17230[(8)]);
var inst_17202 = cljs.core.vec(inst_17182);
var state_17230__$1 = state_17230;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17230__$1,(11),out,inst_17202);
} else {
if((state_val_17231 === (5))){
var inst_17197 = (state_17230[(11)]);
var inst_17183 = (state_17230[(7)]);
var inst_17192 = (state_17230[(9)]);
var inst_17182 = (state_17230[(8)]);
var inst_17196 = (inst_17182[inst_17183] = inst_17192);
var inst_17197__$1 = (inst_17183 + (1));
var inst_17198 = (inst_17197__$1 < n);
var state_17230__$1 = (function (){var statearr_17269 = state_17230;
(statearr_17269[(11)] = inst_17197__$1);

(statearr_17269[(12)] = inst_17196);

return statearr_17269;
})();
if(cljs.core.truth_(inst_17198)){
var statearr_17270_19180 = state_17230__$1;
(statearr_17270_19180[(1)] = (8));

} else {
var statearr_17271_19181 = state_17230__$1;
(statearr_17271_19181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17231 === (14))){
var inst_17223 = (state_17230[(2)]);
var inst_17224 = cljs.core.async.close_BANG_(out);
var state_17230__$1 = (function (){var statearr_17273 = state_17230;
(statearr_17273[(13)] = inst_17223);

return statearr_17273;
})();
var statearr_17274_19183 = state_17230__$1;
(statearr_17274_19183[(2)] = inst_17224);

(statearr_17274_19183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17231 === (10))){
var inst_17208 = (state_17230[(2)]);
var state_17230__$1 = state_17230;
var statearr_17275_19185 = state_17230__$1;
(statearr_17275_19185[(2)] = inst_17208);

(statearr_17275_19185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17231 === (8))){
var inst_17197 = (state_17230[(11)]);
var inst_17182 = (state_17230[(8)]);
var tmp17272 = inst_17182;
var inst_17182__$1 = tmp17272;
var inst_17183 = inst_17197;
var state_17230__$1 = (function (){var statearr_17276 = state_17230;
(statearr_17276[(7)] = inst_17183);

(statearr_17276[(8)] = inst_17182__$1);

return statearr_17276;
})();
var statearr_17277_19189 = state_17230__$1;
(statearr_17277_19189[(2)] = null);

(statearr_17277_19189[(1)] = (2));


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
var cljs$core$async$state_machine__13923__auto__ = null;
var cljs$core$async$state_machine__13923__auto____0 = (function (){
var statearr_17282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17282[(0)] = cljs$core$async$state_machine__13923__auto__);

(statearr_17282[(1)] = (1));

return statearr_17282;
});
var cljs$core$async$state_machine__13923__auto____1 = (function (state_17230){
while(true){
var ret_value__13924__auto__ = (function (){try{while(true){
var result__13925__auto__ = switch__13922__auto__(state_17230);
if(cljs.core.keyword_identical_QMARK_(result__13925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13925__auto__;
}
break;
}
}catch (e17283){var ex__13926__auto__ = e17283;
var statearr_17284_19190 = state_17230;
(statearr_17284_19190[(2)] = ex__13926__auto__);


if(cljs.core.seq((state_17230[(4)]))){
var statearr_17285_19191 = state_17230;
(statearr_17285_19191[(1)] = cljs.core.first((state_17230[(4)])));

} else {
throw ex__13926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19194 = state_17230;
state_17230 = G__19194;
continue;
} else {
return ret_value__13924__auto__;
}
break;
}
});
cljs$core$async$state_machine__13923__auto__ = function(state_17230){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13923__auto____1.call(this,state_17230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13923__auto____0;
cljs$core$async$state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13923__auto____1;
return cljs$core$async$state_machine__13923__auto__;
})()
})();
var state__14216__auto__ = (function (){var statearr_17290 = f__14215__auto__();
(statearr_17290[(6)] = c__14214__auto___19104);

return statearr_17290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14216__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17298 = arguments.length;
switch (G__17298) {
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
var c__14214__auto___19196 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14215__auto__ = (function (){var switch__13922__auto__ = (function (state_17346){
var state_val_17349 = (state_17346[(1)]);
if((state_val_17349 === (7))){
var inst_17342 = (state_17346[(2)]);
var state_17346__$1 = state_17346;
var statearr_17356_19204 = state_17346__$1;
(statearr_17356_19204[(2)] = inst_17342);

(statearr_17356_19204[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17349 === (1))){
var inst_17302 = [];
var inst_17303 = inst_17302;
var inst_17304 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17346__$1 = (function (){var statearr_17361 = state_17346;
(statearr_17361[(7)] = inst_17303);

(statearr_17361[(8)] = inst_17304);

return statearr_17361;
})();
var statearr_17362_19211 = state_17346__$1;
(statearr_17362_19211[(2)] = null);

(statearr_17362_19211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17349 === (4))){
var inst_17307 = (state_17346[(9)]);
var inst_17307__$1 = (state_17346[(2)]);
var inst_17308 = (inst_17307__$1 == null);
var inst_17309 = cljs.core.not(inst_17308);
var state_17346__$1 = (function (){var statearr_17366 = state_17346;
(statearr_17366[(9)] = inst_17307__$1);

return statearr_17366;
})();
if(inst_17309){
var statearr_17367_19226 = state_17346__$1;
(statearr_17367_19226[(1)] = (5));

} else {
var statearr_17368_19229 = state_17346__$1;
(statearr_17368_19229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17349 === (15))){
var inst_17303 = (state_17346[(7)]);
var inst_17334 = cljs.core.vec(inst_17303);
var state_17346__$1 = state_17346;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17346__$1,(18),out,inst_17334);
} else {
if((state_val_17349 === (13))){
var inst_17329 = (state_17346[(2)]);
var state_17346__$1 = state_17346;
var statearr_17373_19238 = state_17346__$1;
(statearr_17373_19238[(2)] = inst_17329);

(statearr_17373_19238[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17349 === (6))){
var inst_17303 = (state_17346[(7)]);
var inst_17331 = inst_17303.length;
var inst_17332 = (inst_17331 > (0));
var state_17346__$1 = state_17346;
if(cljs.core.truth_(inst_17332)){
var statearr_17375_19244 = state_17346__$1;
(statearr_17375_19244[(1)] = (15));

} else {
var statearr_17376_19245 = state_17346__$1;
(statearr_17376_19245[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17349 === (17))){
var inst_17339 = (state_17346[(2)]);
var inst_17340 = cljs.core.async.close_BANG_(out);
var state_17346__$1 = (function (){var statearr_17377 = state_17346;
(statearr_17377[(10)] = inst_17339);

return statearr_17377;
})();
var statearr_17378_19253 = state_17346__$1;
(statearr_17378_19253[(2)] = inst_17340);

(statearr_17378_19253[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17349 === (3))){
var inst_17344 = (state_17346[(2)]);
var state_17346__$1 = state_17346;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17346__$1,inst_17344);
} else {
if((state_val_17349 === (12))){
var inst_17303 = (state_17346[(7)]);
var inst_17322 = cljs.core.vec(inst_17303);
var state_17346__$1 = state_17346;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17346__$1,(14),out,inst_17322);
} else {
if((state_val_17349 === (2))){
var state_17346__$1 = state_17346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17346__$1,(4),ch);
} else {
if((state_val_17349 === (11))){
var inst_17303 = (state_17346[(7)]);
var inst_17311 = (state_17346[(11)]);
var inst_17307 = (state_17346[(9)]);
var inst_17319 = inst_17303.push(inst_17307);
var tmp17381 = inst_17303;
var inst_17303__$1 = tmp17381;
var inst_17304 = inst_17311;
var state_17346__$1 = (function (){var statearr_17382 = state_17346;
(statearr_17382[(7)] = inst_17303__$1);

(statearr_17382[(12)] = inst_17319);

(statearr_17382[(8)] = inst_17304);

return statearr_17382;
})();
var statearr_17383_19277 = state_17346__$1;
(statearr_17383_19277[(2)] = null);

(statearr_17383_19277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17349 === (9))){
var inst_17304 = (state_17346[(8)]);
var inst_17315 = cljs.core.keyword_identical_QMARK_(inst_17304,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17346__$1 = state_17346;
var statearr_17384_19279 = state_17346__$1;
(statearr_17384_19279[(2)] = inst_17315);

(statearr_17384_19279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17349 === (5))){
var inst_17312 = (state_17346[(13)]);
var inst_17311 = (state_17346[(11)]);
var inst_17304 = (state_17346[(8)]);
var inst_17307 = (state_17346[(9)]);
var inst_17311__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17307) : f.call(null,inst_17307));
var inst_17312__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17311__$1,inst_17304);
var state_17346__$1 = (function (){var statearr_17385 = state_17346;
(statearr_17385[(13)] = inst_17312__$1);

(statearr_17385[(11)] = inst_17311__$1);

return statearr_17385;
})();
if(inst_17312__$1){
var statearr_17386_19284 = state_17346__$1;
(statearr_17386_19284[(1)] = (8));

} else {
var statearr_17387_19285 = state_17346__$1;
(statearr_17387_19285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17349 === (14))){
var inst_17311 = (state_17346[(11)]);
var inst_17307 = (state_17346[(9)]);
var inst_17324 = (state_17346[(2)]);
var inst_17325 = [];
var inst_17326 = inst_17325.push(inst_17307);
var inst_17303 = inst_17325;
var inst_17304 = inst_17311;
var state_17346__$1 = (function (){var statearr_17390 = state_17346;
(statearr_17390[(7)] = inst_17303);

(statearr_17390[(8)] = inst_17304);

(statearr_17390[(14)] = inst_17326);

(statearr_17390[(15)] = inst_17324);

return statearr_17390;
})();
var statearr_17392_19288 = state_17346__$1;
(statearr_17392_19288[(2)] = null);

(statearr_17392_19288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17349 === (16))){
var state_17346__$1 = state_17346;
var statearr_17393_19295 = state_17346__$1;
(statearr_17393_19295[(2)] = null);

(statearr_17393_19295[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17349 === (10))){
var inst_17317 = (state_17346[(2)]);
var state_17346__$1 = state_17346;
if(cljs.core.truth_(inst_17317)){
var statearr_17394_19297 = state_17346__$1;
(statearr_17394_19297[(1)] = (11));

} else {
var statearr_17395_19298 = state_17346__$1;
(statearr_17395_19298[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17349 === (18))){
var inst_17336 = (state_17346[(2)]);
var state_17346__$1 = state_17346;
var statearr_17396_19299 = state_17346__$1;
(statearr_17396_19299[(2)] = inst_17336);

(statearr_17396_19299[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17349 === (8))){
var inst_17312 = (state_17346[(13)]);
var state_17346__$1 = state_17346;
var statearr_17400_19305 = state_17346__$1;
(statearr_17400_19305[(2)] = inst_17312);

(statearr_17400_19305[(1)] = (10));


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
var cljs$core$async$state_machine__13923__auto__ = null;
var cljs$core$async$state_machine__13923__auto____0 = (function (){
var statearr_17408 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17408[(0)] = cljs$core$async$state_machine__13923__auto__);

(statearr_17408[(1)] = (1));

return statearr_17408;
});
var cljs$core$async$state_machine__13923__auto____1 = (function (state_17346){
while(true){
var ret_value__13924__auto__ = (function (){try{while(true){
var result__13925__auto__ = switch__13922__auto__(state_17346);
if(cljs.core.keyword_identical_QMARK_(result__13925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13925__auto__;
}
break;
}
}catch (e17410){var ex__13926__auto__ = e17410;
var statearr_17411_19321 = state_17346;
(statearr_17411_19321[(2)] = ex__13926__auto__);


if(cljs.core.seq((state_17346[(4)]))){
var statearr_17413_19322 = state_17346;
(statearr_17413_19322[(1)] = cljs.core.first((state_17346[(4)])));

} else {
throw ex__13926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19326 = state_17346;
state_17346 = G__19326;
continue;
} else {
return ret_value__13924__auto__;
}
break;
}
});
cljs$core$async$state_machine__13923__auto__ = function(state_17346){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13923__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13923__auto____1.call(this,state_17346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13923__auto____0;
cljs$core$async$state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13923__auto____1;
return cljs$core$async$state_machine__13923__auto__;
})()
})();
var state__14216__auto__ = (function (){var statearr_17414 = f__14215__auto__();
(statearr_17414[(6)] = c__14214__auto___19196);

return statearr_17414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14216__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
