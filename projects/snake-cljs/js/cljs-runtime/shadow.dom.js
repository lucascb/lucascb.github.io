goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_18869 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_18869(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_18870 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_18870(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17470 = coll;
var G__17471 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17470,G__17471) : shadow.dom.lazy_native_coll_seq.call(null,G__17470,G__17471));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__17493 = arguments.length;
switch (G__17493) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__17502 = arguments.length;
switch (G__17502) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__17509 = arguments.length;
switch (G__17509) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__17527 = arguments.length;
switch (G__17527) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__17548 = arguments.length;
switch (G__17548) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__17565 = arguments.length;
switch (G__17565) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e17575){if((e17575 instanceof Object)){
var e = e17575;
return console.log("didnt support attachEvent",el,e);
} else {
throw e17575;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__17594 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__17595 = null;
var count__17596 = (0);
var i__17597 = (0);
while(true){
if((i__17597 < count__17596)){
var el = chunk__17595.cljs$core$IIndexed$_nth$arity$2(null,i__17597);
var handler_18921__$1 = ((function (seq__17594,chunk__17595,count__17596,i__17597,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17594,chunk__17595,count__17596,i__17597,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18921__$1);


var G__18924 = seq__17594;
var G__18925 = chunk__17595;
var G__18926 = count__17596;
var G__18927 = (i__17597 + (1));
seq__17594 = G__18924;
chunk__17595 = G__18925;
count__17596 = G__18926;
i__17597 = G__18927;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17594);
if(temp__5804__auto__){
var seq__17594__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17594__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17594__$1);
var G__18931 = cljs.core.chunk_rest(seq__17594__$1);
var G__18932 = c__5568__auto__;
var G__18933 = cljs.core.count(c__5568__auto__);
var G__18934 = (0);
seq__17594 = G__18931;
chunk__17595 = G__18932;
count__17596 = G__18933;
i__17597 = G__18934;
continue;
} else {
var el = cljs.core.first(seq__17594__$1);
var handler_18935__$1 = ((function (seq__17594,chunk__17595,count__17596,i__17597,el,seq__17594__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17594,chunk__17595,count__17596,i__17597,el,seq__17594__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18935__$1);


var G__18938 = cljs.core.next(seq__17594__$1);
var G__18939 = null;
var G__18940 = (0);
var G__18941 = (0);
seq__17594 = G__18938;
chunk__17595 = G__18939;
count__17596 = G__18940;
i__17597 = G__18941;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__17649 = arguments.length;
switch (G__17649) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__17674 = cljs.core.seq(events);
var chunk__17675 = null;
var count__17676 = (0);
var i__17677 = (0);
while(true){
if((i__17677 < count__17676)){
var vec__17716 = chunk__17675.cljs$core$IIndexed$_nth$arity$2(null,i__17677);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17716,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17716,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18956 = seq__17674;
var G__18957 = chunk__17675;
var G__18958 = count__17676;
var G__18959 = (i__17677 + (1));
seq__17674 = G__18956;
chunk__17675 = G__18957;
count__17676 = G__18958;
i__17677 = G__18959;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17674);
if(temp__5804__auto__){
var seq__17674__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17674__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17674__$1);
var G__18962 = cljs.core.chunk_rest(seq__17674__$1);
var G__18963 = c__5568__auto__;
var G__18964 = cljs.core.count(c__5568__auto__);
var G__18965 = (0);
seq__17674 = G__18962;
chunk__17675 = G__18963;
count__17676 = G__18964;
i__17677 = G__18965;
continue;
} else {
var vec__17728 = cljs.core.first(seq__17674__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17728,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17728,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18966 = cljs.core.next(seq__17674__$1);
var G__18967 = null;
var G__18968 = (0);
var G__18969 = (0);
seq__17674 = G__18966;
chunk__17675 = G__18967;
count__17676 = G__18968;
i__17677 = G__18969;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__17734 = cljs.core.seq(styles);
var chunk__17735 = null;
var count__17736 = (0);
var i__17737 = (0);
while(true){
if((i__17737 < count__17736)){
var vec__17750 = chunk__17735.cljs$core$IIndexed$_nth$arity$2(null,i__17737);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17750,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17750,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18975 = seq__17734;
var G__18976 = chunk__17735;
var G__18977 = count__17736;
var G__18978 = (i__17737 + (1));
seq__17734 = G__18975;
chunk__17735 = G__18976;
count__17736 = G__18977;
i__17737 = G__18978;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17734);
if(temp__5804__auto__){
var seq__17734__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17734__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17734__$1);
var G__18983 = cljs.core.chunk_rest(seq__17734__$1);
var G__18984 = c__5568__auto__;
var G__18985 = cljs.core.count(c__5568__auto__);
var G__18986 = (0);
seq__17734 = G__18983;
chunk__17735 = G__18984;
count__17736 = G__18985;
i__17737 = G__18986;
continue;
} else {
var vec__17756 = cljs.core.first(seq__17734__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17756,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17756,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18989 = cljs.core.next(seq__17734__$1);
var G__18990 = null;
var G__18991 = (0);
var G__18992 = (0);
seq__17734 = G__18989;
chunk__17735 = G__18990;
count__17736 = G__18991;
i__17737 = G__18992;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__17762_18994 = key;
var G__17762_18995__$1 = (((G__17762_18994 instanceof cljs.core.Keyword))?G__17762_18994.fqn:null);
switch (G__17762_18995__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_19005 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_19005,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_19005,"aria-");
}
})())){
el.setAttribute(ks_19005,value);
} else {
(el[ks_19005] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__17799){
var map__17800 = p__17799;
var map__17800__$1 = cljs.core.__destructure_map(map__17800);
var props = map__17800__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17800__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__17801 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17801,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17801,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17801,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__17805 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__17805,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__17805;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__17812 = arguments.length;
switch (G__17812) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__17823){
var vec__17824 = p__17823;
var seq__17825 = cljs.core.seq(vec__17824);
var first__17826 = cljs.core.first(seq__17825);
var seq__17825__$1 = cljs.core.next(seq__17825);
var nn = first__17826;
var first__17826__$1 = cljs.core.first(seq__17825__$1);
var seq__17825__$2 = cljs.core.next(seq__17825__$1);
var np = first__17826__$1;
var nc = seq__17825__$2;
var node = vec__17824;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17832 = nn;
var G__17833 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17832,G__17833) : create_fn.call(null,G__17832,G__17833));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17835 = nn;
var G__17836 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17835,G__17836) : create_fn.call(null,G__17835,G__17836));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__17842 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17842,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17842,(1),null);
var seq__17846_19036 = cljs.core.seq(node_children);
var chunk__17847_19037 = null;
var count__17848_19038 = (0);
var i__17849_19039 = (0);
while(true){
if((i__17849_19039 < count__17848_19038)){
var child_struct_19043 = chunk__17847_19037.cljs$core$IIndexed$_nth$arity$2(null,i__17849_19039);
var children_19044 = shadow.dom.dom_node(child_struct_19043);
if(cljs.core.seq_QMARK_(children_19044)){
var seq__17896_19048 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19044));
var chunk__17898_19049 = null;
var count__17899_19050 = (0);
var i__17900_19051 = (0);
while(true){
if((i__17900_19051 < count__17899_19050)){
var child_19054 = chunk__17898_19049.cljs$core$IIndexed$_nth$arity$2(null,i__17900_19051);
if(cljs.core.truth_(child_19054)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19054);


var G__19055 = seq__17896_19048;
var G__19056 = chunk__17898_19049;
var G__19057 = count__17899_19050;
var G__19058 = (i__17900_19051 + (1));
seq__17896_19048 = G__19055;
chunk__17898_19049 = G__19056;
count__17899_19050 = G__19057;
i__17900_19051 = G__19058;
continue;
} else {
var G__19060 = seq__17896_19048;
var G__19061 = chunk__17898_19049;
var G__19062 = count__17899_19050;
var G__19063 = (i__17900_19051 + (1));
seq__17896_19048 = G__19060;
chunk__17898_19049 = G__19061;
count__17899_19050 = G__19062;
i__17900_19051 = G__19063;
continue;
}
} else {
var temp__5804__auto___19065 = cljs.core.seq(seq__17896_19048);
if(temp__5804__auto___19065){
var seq__17896_19066__$1 = temp__5804__auto___19065;
if(cljs.core.chunked_seq_QMARK_(seq__17896_19066__$1)){
var c__5568__auto___19068 = cljs.core.chunk_first(seq__17896_19066__$1);
var G__19071 = cljs.core.chunk_rest(seq__17896_19066__$1);
var G__19072 = c__5568__auto___19068;
var G__19073 = cljs.core.count(c__5568__auto___19068);
var G__19074 = (0);
seq__17896_19048 = G__19071;
chunk__17898_19049 = G__19072;
count__17899_19050 = G__19073;
i__17900_19051 = G__19074;
continue;
} else {
var child_19076 = cljs.core.first(seq__17896_19066__$1);
if(cljs.core.truth_(child_19076)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19076);


var G__19078 = cljs.core.next(seq__17896_19066__$1);
var G__19079 = null;
var G__19080 = (0);
var G__19081 = (0);
seq__17896_19048 = G__19078;
chunk__17898_19049 = G__19079;
count__17899_19050 = G__19080;
i__17900_19051 = G__19081;
continue;
} else {
var G__19082 = cljs.core.next(seq__17896_19066__$1);
var G__19083 = null;
var G__19084 = (0);
var G__19085 = (0);
seq__17896_19048 = G__19082;
chunk__17898_19049 = G__19083;
count__17899_19050 = G__19084;
i__17900_19051 = G__19085;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19044);
}


var G__19087 = seq__17846_19036;
var G__19088 = chunk__17847_19037;
var G__19089 = count__17848_19038;
var G__19090 = (i__17849_19039 + (1));
seq__17846_19036 = G__19087;
chunk__17847_19037 = G__19088;
count__17848_19038 = G__19089;
i__17849_19039 = G__19090;
continue;
} else {
var temp__5804__auto___19091 = cljs.core.seq(seq__17846_19036);
if(temp__5804__auto___19091){
var seq__17846_19093__$1 = temp__5804__auto___19091;
if(cljs.core.chunked_seq_QMARK_(seq__17846_19093__$1)){
var c__5568__auto___19098 = cljs.core.chunk_first(seq__17846_19093__$1);
var G__19099 = cljs.core.chunk_rest(seq__17846_19093__$1);
var G__19100 = c__5568__auto___19098;
var G__19101 = cljs.core.count(c__5568__auto___19098);
var G__19102 = (0);
seq__17846_19036 = G__19099;
chunk__17847_19037 = G__19100;
count__17848_19038 = G__19101;
i__17849_19039 = G__19102;
continue;
} else {
var child_struct_19103 = cljs.core.first(seq__17846_19093__$1);
var children_19105 = shadow.dom.dom_node(child_struct_19103);
if(cljs.core.seq_QMARK_(children_19105)){
var seq__17922_19110 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19105));
var chunk__17924_19111 = null;
var count__17925_19112 = (0);
var i__17926_19113 = (0);
while(true){
if((i__17926_19113 < count__17925_19112)){
var child_19119 = chunk__17924_19111.cljs$core$IIndexed$_nth$arity$2(null,i__17926_19113);
if(cljs.core.truth_(child_19119)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19119);


var G__19120 = seq__17922_19110;
var G__19121 = chunk__17924_19111;
var G__19122 = count__17925_19112;
var G__19123 = (i__17926_19113 + (1));
seq__17922_19110 = G__19120;
chunk__17924_19111 = G__19121;
count__17925_19112 = G__19122;
i__17926_19113 = G__19123;
continue;
} else {
var G__19124 = seq__17922_19110;
var G__19125 = chunk__17924_19111;
var G__19126 = count__17925_19112;
var G__19127 = (i__17926_19113 + (1));
seq__17922_19110 = G__19124;
chunk__17924_19111 = G__19125;
count__17925_19112 = G__19126;
i__17926_19113 = G__19127;
continue;
}
} else {
var temp__5804__auto___19128__$1 = cljs.core.seq(seq__17922_19110);
if(temp__5804__auto___19128__$1){
var seq__17922_19130__$1 = temp__5804__auto___19128__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17922_19130__$1)){
var c__5568__auto___19131 = cljs.core.chunk_first(seq__17922_19130__$1);
var G__19132 = cljs.core.chunk_rest(seq__17922_19130__$1);
var G__19133 = c__5568__auto___19131;
var G__19134 = cljs.core.count(c__5568__auto___19131);
var G__19135 = (0);
seq__17922_19110 = G__19132;
chunk__17924_19111 = G__19133;
count__17925_19112 = G__19134;
i__17926_19113 = G__19135;
continue;
} else {
var child_19136 = cljs.core.first(seq__17922_19130__$1);
if(cljs.core.truth_(child_19136)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19136);


var G__19137 = cljs.core.next(seq__17922_19130__$1);
var G__19138 = null;
var G__19139 = (0);
var G__19140 = (0);
seq__17922_19110 = G__19137;
chunk__17924_19111 = G__19138;
count__17925_19112 = G__19139;
i__17926_19113 = G__19140;
continue;
} else {
var G__19142 = cljs.core.next(seq__17922_19130__$1);
var G__19143 = null;
var G__19144 = (0);
var G__19145 = (0);
seq__17922_19110 = G__19142;
chunk__17924_19111 = G__19143;
count__17925_19112 = G__19144;
i__17926_19113 = G__19145;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19105);
}


var G__19147 = cljs.core.next(seq__17846_19093__$1);
var G__19148 = null;
var G__19149 = (0);
var G__19150 = (0);
seq__17846_19036 = G__19147;
chunk__17847_19037 = G__19148;
count__17848_19038 = G__19149;
i__17849_19039 = G__19150;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__17991 = cljs.core.seq(node);
var chunk__17992 = null;
var count__17993 = (0);
var i__17994 = (0);
while(true){
if((i__17994 < count__17993)){
var n = chunk__17992.cljs$core$IIndexed$_nth$arity$2(null,i__17994);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19167 = seq__17991;
var G__19168 = chunk__17992;
var G__19169 = count__17993;
var G__19170 = (i__17994 + (1));
seq__17991 = G__19167;
chunk__17992 = G__19168;
count__17993 = G__19169;
i__17994 = G__19170;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17991);
if(temp__5804__auto__){
var seq__17991__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17991__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17991__$1);
var G__19172 = cljs.core.chunk_rest(seq__17991__$1);
var G__19173 = c__5568__auto__;
var G__19174 = cljs.core.count(c__5568__auto__);
var G__19175 = (0);
seq__17991 = G__19172;
chunk__17992 = G__19173;
count__17993 = G__19174;
i__17994 = G__19175;
continue;
} else {
var n = cljs.core.first(seq__17991__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19176 = cljs.core.next(seq__17991__$1);
var G__19177 = null;
var G__19178 = (0);
var G__19179 = (0);
seq__17991 = G__19176;
chunk__17992 = G__19177;
count__17993 = G__19178;
i__17994 = G__19179;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18015 = arguments.length;
switch (G__18015) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18022 = arguments.length;
switch (G__18022) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18038 = arguments.length;
switch (G__18038) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19203 = arguments.length;
var i__5770__auto___19205 = (0);
while(true){
if((i__5770__auto___19205 < len__5769__auto___19203)){
args__5775__auto__.push((arguments[i__5770__auto___19205]));

var G__19206 = (i__5770__auto___19205 + (1));
i__5770__auto___19205 = G__19206;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18091_19212 = cljs.core.seq(nodes);
var chunk__18092_19213 = null;
var count__18093_19214 = (0);
var i__18094_19215 = (0);
while(true){
if((i__18094_19215 < count__18093_19214)){
var node_19221 = chunk__18092_19213.cljs$core$IIndexed$_nth$arity$2(null,i__18094_19215);
fragment.appendChild(shadow.dom._to_dom(node_19221));


var G__19222 = seq__18091_19212;
var G__19223 = chunk__18092_19213;
var G__19224 = count__18093_19214;
var G__19225 = (i__18094_19215 + (1));
seq__18091_19212 = G__19222;
chunk__18092_19213 = G__19223;
count__18093_19214 = G__19224;
i__18094_19215 = G__19225;
continue;
} else {
var temp__5804__auto___19227 = cljs.core.seq(seq__18091_19212);
if(temp__5804__auto___19227){
var seq__18091_19230__$1 = temp__5804__auto___19227;
if(cljs.core.chunked_seq_QMARK_(seq__18091_19230__$1)){
var c__5568__auto___19231 = cljs.core.chunk_first(seq__18091_19230__$1);
var G__19232 = cljs.core.chunk_rest(seq__18091_19230__$1);
var G__19233 = c__5568__auto___19231;
var G__19234 = cljs.core.count(c__5568__auto___19231);
var G__19235 = (0);
seq__18091_19212 = G__19232;
chunk__18092_19213 = G__19233;
count__18093_19214 = G__19234;
i__18094_19215 = G__19235;
continue;
} else {
var node_19237 = cljs.core.first(seq__18091_19230__$1);
fragment.appendChild(shadow.dom._to_dom(node_19237));


var G__19239 = cljs.core.next(seq__18091_19230__$1);
var G__19240 = null;
var G__19241 = (0);
var G__19242 = (0);
seq__18091_19212 = G__19239;
chunk__18092_19213 = G__19240;
count__18093_19214 = G__19241;
i__18094_19215 = G__19242;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq18084){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18084));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18117_19246 = cljs.core.seq(scripts);
var chunk__18118_19247 = null;
var count__18119_19248 = (0);
var i__18120_19249 = (0);
while(true){
if((i__18120_19249 < count__18119_19248)){
var vec__18135_19250 = chunk__18118_19247.cljs$core$IIndexed$_nth$arity$2(null,i__18120_19249);
var script_tag_19251 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18135_19250,(0),null);
var script_body_19252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18135_19250,(1),null);
eval(script_body_19252);


var G__19255 = seq__18117_19246;
var G__19256 = chunk__18118_19247;
var G__19257 = count__18119_19248;
var G__19258 = (i__18120_19249 + (1));
seq__18117_19246 = G__19255;
chunk__18118_19247 = G__19256;
count__18119_19248 = G__19257;
i__18120_19249 = G__19258;
continue;
} else {
var temp__5804__auto___19260 = cljs.core.seq(seq__18117_19246);
if(temp__5804__auto___19260){
var seq__18117_19262__$1 = temp__5804__auto___19260;
if(cljs.core.chunked_seq_QMARK_(seq__18117_19262__$1)){
var c__5568__auto___19263 = cljs.core.chunk_first(seq__18117_19262__$1);
var G__19264 = cljs.core.chunk_rest(seq__18117_19262__$1);
var G__19265 = c__5568__auto___19263;
var G__19266 = cljs.core.count(c__5568__auto___19263);
var G__19267 = (0);
seq__18117_19246 = G__19264;
chunk__18118_19247 = G__19265;
count__18119_19248 = G__19266;
i__18120_19249 = G__19267;
continue;
} else {
var vec__18149_19268 = cljs.core.first(seq__18117_19262__$1);
var script_tag_19269 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18149_19268,(0),null);
var script_body_19270 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18149_19268,(1),null);
eval(script_body_19270);


var G__19271 = cljs.core.next(seq__18117_19262__$1);
var G__19272 = null;
var G__19273 = (0);
var G__19274 = (0);
seq__18117_19246 = G__19271;
chunk__18118_19247 = G__19272;
count__18119_19248 = G__19273;
i__18120_19249 = G__19274;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__18154){
var vec__18156 = p__18154;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18156,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18156,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18167 = arguments.length;
switch (G__18167) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__18181 = cljs.core.seq(style_keys);
var chunk__18182 = null;
var count__18183 = (0);
var i__18184 = (0);
while(true){
if((i__18184 < count__18183)){
var it = chunk__18182.cljs$core$IIndexed$_nth$arity$2(null,i__18184);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19300 = seq__18181;
var G__19301 = chunk__18182;
var G__19302 = count__18183;
var G__19303 = (i__18184 + (1));
seq__18181 = G__19300;
chunk__18182 = G__19301;
count__18183 = G__19302;
i__18184 = G__19303;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18181);
if(temp__5804__auto__){
var seq__18181__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18181__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18181__$1);
var G__19307 = cljs.core.chunk_rest(seq__18181__$1);
var G__19309 = c__5568__auto__;
var G__19310 = cljs.core.count(c__5568__auto__);
var G__19311 = (0);
seq__18181 = G__19307;
chunk__18182 = G__19309;
count__18183 = G__19310;
i__18184 = G__19311;
continue;
} else {
var it = cljs.core.first(seq__18181__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19317 = cljs.core.next(seq__18181__$1);
var G__19318 = null;
var G__19319 = (0);
var G__19320 = (0);
seq__18181 = G__19317;
chunk__18182 = G__19318;
count__18183 = G__19319;
i__18184 = G__19320;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18196,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18212 = k18196;
var G__18212__$1 = (((G__18212 instanceof cljs.core.Keyword))?G__18212.fqn:null);
switch (G__18212__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18196,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18218){
var vec__18219 = p__18218;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18219,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18219,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18195){
var self__ = this;
var G__18195__$1 = this;
return (new cljs.core.RecordIter((0),G__18195__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18197,other18198){
var self__ = this;
var this18197__$1 = this;
return (((!((other18198 == null)))) && ((((this18197__$1.constructor === other18198.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18197__$1.x,other18198.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18197__$1.y,other18198.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18197__$1.__extmap,other18198.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18196){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18249 = k18196;
var G__18249__$1 = (((G__18249 instanceof cljs.core.Keyword))?G__18249.fqn:null);
switch (G__18249__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18196);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18195){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18259 = cljs.core.keyword_identical_QMARK_;
var expr__18260 = k__5352__auto__;
if(cljs.core.truth_((pred__18259.cljs$core$IFn$_invoke$arity$2 ? pred__18259.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__18260) : pred__18259.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__18260)))){
return (new shadow.dom.Coordinate(G__18195,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18259.cljs$core$IFn$_invoke$arity$2 ? pred__18259.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__18260) : pred__18259.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__18260)))){
return (new shadow.dom.Coordinate(self__.x,G__18195,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18195),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18195){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18195,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18199){
var extmap__5385__auto__ = (function (){var G__18274 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18199,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18199)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18274);
} else {
return G__18274;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18199),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18199),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18288,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18299 = k18288;
var G__18299__$1 = (((G__18299 instanceof cljs.core.Keyword))?G__18299.fqn:null);
switch (G__18299__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18288,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18306){
var vec__18307 = p__18306;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18307,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18307,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18287){
var self__ = this;
var G__18287__$1 = this;
return (new cljs.core.RecordIter((0),G__18287__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18289,other18290){
var self__ = this;
var this18289__$1 = this;
return (((!((other18290 == null)))) && ((((this18289__$1.constructor === other18290.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18289__$1.w,other18290.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18289__$1.h,other18290.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18289__$1.__extmap,other18290.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18288){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18349 = k18288;
var G__18349__$1 = (((G__18349 instanceof cljs.core.Keyword))?G__18349.fqn:null);
switch (G__18349__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18288);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18287){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18354 = cljs.core.keyword_identical_QMARK_;
var expr__18355 = k__5352__auto__;
if(cljs.core.truth_((pred__18354.cljs$core$IFn$_invoke$arity$2 ? pred__18354.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18355) : pred__18354.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__18355)))){
return (new shadow.dom.Size(G__18287,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18354.cljs$core$IFn$_invoke$arity$2 ? pred__18354.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18355) : pred__18354.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__18355)))){
return (new shadow.dom.Size(self__.w,G__18287,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18287),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18287){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18287,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18294){
var extmap__5385__auto__ = (function (){var G__18379 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18294,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18294)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18379);
} else {
return G__18379;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18294),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18294),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__19400 = (i + (1));
var G__19401 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19400;
ret = G__19401;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18438){
var vec__18439 = p__18438;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18439,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18439,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__18447 = arguments.length;
switch (G__18447) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19416 = ps;
var G__19417 = (i + (1));
el__$1 = G__19416;
i = G__19417;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__18540 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18540,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18540,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18540,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__18549_19430 = cljs.core.seq(props);
var chunk__18550_19431 = null;
var count__18551_19432 = (0);
var i__18552_19433 = (0);
while(true){
if((i__18552_19433 < count__18551_19432)){
var vec__18583_19434 = chunk__18550_19431.cljs$core$IIndexed$_nth$arity$2(null,i__18552_19433);
var k_19435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18583_19434,(0),null);
var v_19436 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18583_19434,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19435);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19435),v_19436);


var G__19449 = seq__18549_19430;
var G__19450 = chunk__18550_19431;
var G__19451 = count__18551_19432;
var G__19452 = (i__18552_19433 + (1));
seq__18549_19430 = G__19449;
chunk__18550_19431 = G__19450;
count__18551_19432 = G__19451;
i__18552_19433 = G__19452;
continue;
} else {
var temp__5804__auto___19453 = cljs.core.seq(seq__18549_19430);
if(temp__5804__auto___19453){
var seq__18549_19463__$1 = temp__5804__auto___19453;
if(cljs.core.chunked_seq_QMARK_(seq__18549_19463__$1)){
var c__5568__auto___19464 = cljs.core.chunk_first(seq__18549_19463__$1);
var G__19465 = cljs.core.chunk_rest(seq__18549_19463__$1);
var G__19466 = c__5568__auto___19464;
var G__19467 = cljs.core.count(c__5568__auto___19464);
var G__19468 = (0);
seq__18549_19430 = G__19465;
chunk__18550_19431 = G__19466;
count__18551_19432 = G__19467;
i__18552_19433 = G__19468;
continue;
} else {
var vec__18594_19469 = cljs.core.first(seq__18549_19463__$1);
var k_19470 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18594_19469,(0),null);
var v_19471 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18594_19469,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19470);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19470),v_19471);


var G__19478 = cljs.core.next(seq__18549_19463__$1);
var G__19479 = null;
var G__19480 = (0);
var G__19481 = (0);
seq__18549_19430 = G__19478;
chunk__18550_19431 = G__19479;
count__18551_19432 = G__19480;
i__18552_19433 = G__19481;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__18623 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18623,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18623,(1),null);
var seq__18628_19487 = cljs.core.seq(node_children);
var chunk__18631_19488 = null;
var count__18632_19489 = (0);
var i__18633_19490 = (0);
while(true){
if((i__18633_19490 < count__18632_19489)){
var child_struct_19495 = chunk__18631_19488.cljs$core$IIndexed$_nth$arity$2(null,i__18633_19490);
if((!((child_struct_19495 == null)))){
if(typeof child_struct_19495 === 'string'){
var text_19496 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19496),child_struct_19495].join(''));
} else {
var children_19497 = shadow.dom.svg_node(child_struct_19495);
if(cljs.core.seq_QMARK_(children_19497)){
var seq__18706_19498 = cljs.core.seq(children_19497);
var chunk__18708_19499 = null;
var count__18709_19500 = (0);
var i__18710_19501 = (0);
while(true){
if((i__18710_19501 < count__18709_19500)){
var child_19502 = chunk__18708_19499.cljs$core$IIndexed$_nth$arity$2(null,i__18710_19501);
if(cljs.core.truth_(child_19502)){
node.appendChild(child_19502);


var G__19503 = seq__18706_19498;
var G__19504 = chunk__18708_19499;
var G__19505 = count__18709_19500;
var G__19506 = (i__18710_19501 + (1));
seq__18706_19498 = G__19503;
chunk__18708_19499 = G__19504;
count__18709_19500 = G__19505;
i__18710_19501 = G__19506;
continue;
} else {
var G__19507 = seq__18706_19498;
var G__19508 = chunk__18708_19499;
var G__19509 = count__18709_19500;
var G__19510 = (i__18710_19501 + (1));
seq__18706_19498 = G__19507;
chunk__18708_19499 = G__19508;
count__18709_19500 = G__19509;
i__18710_19501 = G__19510;
continue;
}
} else {
var temp__5804__auto___19511 = cljs.core.seq(seq__18706_19498);
if(temp__5804__auto___19511){
var seq__18706_19513__$1 = temp__5804__auto___19511;
if(cljs.core.chunked_seq_QMARK_(seq__18706_19513__$1)){
var c__5568__auto___19515 = cljs.core.chunk_first(seq__18706_19513__$1);
var G__19518 = cljs.core.chunk_rest(seq__18706_19513__$1);
var G__19519 = c__5568__auto___19515;
var G__19520 = cljs.core.count(c__5568__auto___19515);
var G__19521 = (0);
seq__18706_19498 = G__19518;
chunk__18708_19499 = G__19519;
count__18709_19500 = G__19520;
i__18710_19501 = G__19521;
continue;
} else {
var child_19522 = cljs.core.first(seq__18706_19513__$1);
if(cljs.core.truth_(child_19522)){
node.appendChild(child_19522);


var G__19523 = cljs.core.next(seq__18706_19513__$1);
var G__19524 = null;
var G__19525 = (0);
var G__19526 = (0);
seq__18706_19498 = G__19523;
chunk__18708_19499 = G__19524;
count__18709_19500 = G__19525;
i__18710_19501 = G__19526;
continue;
} else {
var G__19527 = cljs.core.next(seq__18706_19513__$1);
var G__19528 = null;
var G__19529 = (0);
var G__19530 = (0);
seq__18706_19498 = G__19527;
chunk__18708_19499 = G__19528;
count__18709_19500 = G__19529;
i__18710_19501 = G__19530;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19497);
}
}


var G__19531 = seq__18628_19487;
var G__19532 = chunk__18631_19488;
var G__19533 = count__18632_19489;
var G__19534 = (i__18633_19490 + (1));
seq__18628_19487 = G__19531;
chunk__18631_19488 = G__19532;
count__18632_19489 = G__19533;
i__18633_19490 = G__19534;
continue;
} else {
var G__19539 = seq__18628_19487;
var G__19540 = chunk__18631_19488;
var G__19541 = count__18632_19489;
var G__19542 = (i__18633_19490 + (1));
seq__18628_19487 = G__19539;
chunk__18631_19488 = G__19540;
count__18632_19489 = G__19541;
i__18633_19490 = G__19542;
continue;
}
} else {
var temp__5804__auto___19544 = cljs.core.seq(seq__18628_19487);
if(temp__5804__auto___19544){
var seq__18628_19546__$1 = temp__5804__auto___19544;
if(cljs.core.chunked_seq_QMARK_(seq__18628_19546__$1)){
var c__5568__auto___19548 = cljs.core.chunk_first(seq__18628_19546__$1);
var G__19550 = cljs.core.chunk_rest(seq__18628_19546__$1);
var G__19551 = c__5568__auto___19548;
var G__19552 = cljs.core.count(c__5568__auto___19548);
var G__19553 = (0);
seq__18628_19487 = G__19550;
chunk__18631_19488 = G__19551;
count__18632_19489 = G__19552;
i__18633_19490 = G__19553;
continue;
} else {
var child_struct_19558 = cljs.core.first(seq__18628_19546__$1);
if((!((child_struct_19558 == null)))){
if(typeof child_struct_19558 === 'string'){
var text_19562 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19562),child_struct_19558].join(''));
} else {
var children_19563 = shadow.dom.svg_node(child_struct_19558);
if(cljs.core.seq_QMARK_(children_19563)){
var seq__18743_19565 = cljs.core.seq(children_19563);
var chunk__18745_19566 = null;
var count__18746_19567 = (0);
var i__18747_19568 = (0);
while(true){
if((i__18747_19568 < count__18746_19567)){
var child_19569 = chunk__18745_19566.cljs$core$IIndexed$_nth$arity$2(null,i__18747_19568);
if(cljs.core.truth_(child_19569)){
node.appendChild(child_19569);


var G__19570 = seq__18743_19565;
var G__19571 = chunk__18745_19566;
var G__19572 = count__18746_19567;
var G__19573 = (i__18747_19568 + (1));
seq__18743_19565 = G__19570;
chunk__18745_19566 = G__19571;
count__18746_19567 = G__19572;
i__18747_19568 = G__19573;
continue;
} else {
var G__19575 = seq__18743_19565;
var G__19576 = chunk__18745_19566;
var G__19577 = count__18746_19567;
var G__19578 = (i__18747_19568 + (1));
seq__18743_19565 = G__19575;
chunk__18745_19566 = G__19576;
count__18746_19567 = G__19577;
i__18747_19568 = G__19578;
continue;
}
} else {
var temp__5804__auto___19580__$1 = cljs.core.seq(seq__18743_19565);
if(temp__5804__auto___19580__$1){
var seq__18743_19585__$1 = temp__5804__auto___19580__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18743_19585__$1)){
var c__5568__auto___19586 = cljs.core.chunk_first(seq__18743_19585__$1);
var G__19589 = cljs.core.chunk_rest(seq__18743_19585__$1);
var G__19591 = c__5568__auto___19586;
var G__19593 = cljs.core.count(c__5568__auto___19586);
var G__19594 = (0);
seq__18743_19565 = G__19589;
chunk__18745_19566 = G__19591;
count__18746_19567 = G__19593;
i__18747_19568 = G__19594;
continue;
} else {
var child_19596 = cljs.core.first(seq__18743_19585__$1);
if(cljs.core.truth_(child_19596)){
node.appendChild(child_19596);


var G__19600 = cljs.core.next(seq__18743_19585__$1);
var G__19601 = null;
var G__19602 = (0);
var G__19604 = (0);
seq__18743_19565 = G__19600;
chunk__18745_19566 = G__19601;
count__18746_19567 = G__19602;
i__18747_19568 = G__19604;
continue;
} else {
var G__19606 = cljs.core.next(seq__18743_19585__$1);
var G__19607 = null;
var G__19608 = (0);
var G__19609 = (0);
seq__18743_19565 = G__19606;
chunk__18745_19566 = G__19607;
count__18746_19567 = G__19608;
i__18747_19568 = G__19609;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19563);
}
}


var G__19614 = cljs.core.next(seq__18628_19546__$1);
var G__19615 = null;
var G__19616 = (0);
var G__19617 = (0);
seq__18628_19487 = G__19614;
chunk__18631_19488 = G__19615;
count__18632_19489 = G__19616;
i__18633_19490 = G__19617;
continue;
} else {
var G__19627 = cljs.core.next(seq__18628_19546__$1);
var G__19628 = null;
var G__19629 = (0);
var G__19630 = (0);
seq__18628_19487 = G__19627;
chunk__18631_19488 = G__19628;
count__18632_19489 = G__19629;
i__18633_19490 = G__19630;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19641 = arguments.length;
var i__5770__auto___19642 = (0);
while(true){
if((i__5770__auto___19642 < len__5769__auto___19641)){
args__5775__auto__.push((arguments[i__5770__auto___19642]));

var G__19647 = (i__5770__auto___19642 + (1));
i__5770__auto___19642 = G__19647;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq18797){
var G__18798 = cljs.core.first(seq18797);
var seq18797__$1 = cljs.core.next(seq18797);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18798,seq18797__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__18819 = arguments.length;
switch (G__18819) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__14214__auto___19692 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14215__auto__ = (function (){var switch__13922__auto__ = (function (state_18839){
var state_val_18840 = (state_18839[(1)]);
if((state_val_18840 === (1))){
var state_18839__$1 = state_18839;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18839__$1,(2),once_or_cleanup);
} else {
if((state_val_18840 === (2))){
var inst_18836 = (state_18839[(2)]);
var inst_18837 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_18839__$1 = (function (){var statearr_18844 = state_18839;
(statearr_18844[(7)] = inst_18836);

return statearr_18844;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18839__$1,inst_18837);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13923__auto__ = null;
var shadow$dom$state_machine__13923__auto____0 = (function (){
var statearr_18845 = [null,null,null,null,null,null,null,null];
(statearr_18845[(0)] = shadow$dom$state_machine__13923__auto__);

(statearr_18845[(1)] = (1));

return statearr_18845;
});
var shadow$dom$state_machine__13923__auto____1 = (function (state_18839){
while(true){
var ret_value__13924__auto__ = (function (){try{while(true){
var result__13925__auto__ = switch__13922__auto__(state_18839);
if(cljs.core.keyword_identical_QMARK_(result__13925__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13925__auto__;
}
break;
}
}catch (e18846){var ex__13926__auto__ = e18846;
var statearr_18848_19711 = state_18839;
(statearr_18848_19711[(2)] = ex__13926__auto__);


if(cljs.core.seq((state_18839[(4)]))){
var statearr_18851_19712 = state_18839;
(statearr_18851_19712[(1)] = cljs.core.first((state_18839[(4)])));

} else {
throw ex__13926__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13924__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19714 = state_18839;
state_18839 = G__19714;
continue;
} else {
return ret_value__13924__auto__;
}
break;
}
});
shadow$dom$state_machine__13923__auto__ = function(state_18839){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13923__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13923__auto____1.call(this,state_18839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13923__auto____0;
shadow$dom$state_machine__13923__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13923__auto____1;
return shadow$dom$state_machine__13923__auto__;
})()
})();
var state__14216__auto__ = (function (){var statearr_18854 = f__14215__auto__();
(statearr_18854[(6)] = c__14214__auto___19692);

return statearr_18854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14216__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
