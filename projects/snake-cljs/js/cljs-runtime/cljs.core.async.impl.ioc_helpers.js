goog.provide('cljs.core.async.impl.ioc_helpers');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function cljs$core$async$impl$ioc_helpers$aset_object(arr,idx,o){
return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function cljs$core$async$impl$ioc_helpers$aget_object(arr,idx){
return (arr[idx]);
});
/**
 * Returns true if the machine is in a finished state
 */
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function cljs$core$async$impl$ioc_helpers$finished_QMARK_(state_array){
return cljs.core.keyword_identical_QMARK_((state_array[(1)]),new cljs.core.Keyword(null,"finished","finished",-1018867731));
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function cljs$core$async$impl$ioc_helpers$fn_handler(f){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.ioc_helpers !== 'undefined') && (typeof cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers13987 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers13987 = (function (f,meta13988){
this.f = f;
this.meta13988 = meta13988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers13987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13989,meta13988__$1){
var self__ = this;
var _13989__$1 = this;
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers13987(self__.f,meta13988__$1));
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers13987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13989){
var self__ = this;
var _13989__$1 = this;
return self__.meta13988;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers13987.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers13987.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers13987.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers13987.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers13987.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta13988","meta13988",869177250,null)], null);
}));

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers13987.cljs$lang$type = true);

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers13987.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers13987");

(cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers13987.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers13987");
}));

/**
 * Positional factory function for cljs.core.async.impl.ioc-helpers/t_cljs$core$async$impl$ioc_helpers13987.
 */
cljs.core.async.impl.ioc_helpers.__GT_t_cljs$core$async$impl$ioc_helpers13987 = (function cljs$core$async$impl$ioc_helpers$fn_handler_$___GT_t_cljs$core$async$impl$ioc_helpers13987(f__$1,meta13988){
return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers13987(f__$1,meta13988));
});

}

return (new cljs.core.async.impl.ioc_helpers.t_cljs$core$async$impl$ioc_helpers13987(f,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function cljs$core$async$impl$ioc_helpers$run_state_machine(state){
var fexpr__14031 = cljs.core.async.impl.ioc_helpers.aget_object(state,(0));
return (fexpr__14031.cljs$core$IFn$_invoke$arity$1 ? fexpr__14031.cljs$core$IFn$_invoke$arity$1(state) : fexpr__14031.call(null,state));
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function cljs$core$async$impl$ioc_helpers$run_state_machine_wrapped(state){
try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e14037){if((e14037 instanceof Object)){
var ex = e14037;
cljs.core.async.impl.ioc_helpers.aget_object(state,(6)).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

throw ex;
} else {
throw e14037;

}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function cljs$core$async$impl$ioc_helpers$take_BANG_(state,blk,c){
var temp__5802__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){
var statearr_14047_14091 = state;
(statearr_14047_14091[(2)] = x);

(statearr_14047_14091[(1)] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__5802__auto__)){
var cb = temp__5802__auto__;
var statearr_14048_14092 = state;
(statearr_14048_14092[(2)] = cljs.core.deref(cb));

(statearr_14048_14092[(1)] = blk);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function cljs$core$async$impl$ioc_helpers$put_BANG_(state,blk,c,val){
var temp__5802__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (ret_val){
var statearr_14057_14094 = state;
(statearr_14057_14094[(2)] = ret_val);

(statearr_14057_14094[(1)] = blk);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));
if(cljs.core.truth_(temp__5802__auto__)){
var cb = temp__5802__auto__;
var statearr_14058_14095 = state;
(statearr_14058_14095[(2)] = cljs.core.deref(cb));

(statearr_14058_14095[(1)] = blk);


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});
cljs.core.async.impl.ioc_helpers.return_chan = (function cljs$core$async$impl$ioc_helpers$return_chan(state,value){
var c = (state[(6)]);
if((value == null)){
} else {
c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler((function (_){
return null;
})));
}

c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);

return c;
});

//# sourceMappingURL=cljs.core.async.impl.ioc_helpers.js.map
