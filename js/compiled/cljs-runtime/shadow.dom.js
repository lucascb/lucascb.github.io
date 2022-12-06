goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_21049 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_21049(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_21052 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_21052(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__19845 = coll;
var G__19846 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__19845,G__19846) : shadow.dom.lazy_native_coll_seq.call(null,G__19845,G__19846));
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
var G__19900 = arguments.length;
switch (G__19900) {
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
var G__19914 = arguments.length;
switch (G__19914) {
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
var G__19929 = arguments.length;
switch (G__19929) {
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
var G__19939 = arguments.length;
switch (G__19939) {
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
var G__19961 = arguments.length;
switch (G__19961) {
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
var G__19983 = arguments.length;
switch (G__19983) {
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
}catch (e19995){if((e19995 instanceof Object)){
var e = e19995;
return console.log("didnt support attachEvent",el,e);
} else {
throw e19995;

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
var seq__20003 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__20005 = null;
var count__20006 = (0);
var i__20007 = (0);
while(true){
if((i__20007 < count__20006)){
var el = chunk__20005.cljs$core$IIndexed$_nth$arity$2(null,i__20007);
var handler_21076__$1 = ((function (seq__20003,chunk__20005,count__20006,i__20007,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__20003,chunk__20005,count__20006,i__20007,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_21076__$1);


var G__21077 = seq__20003;
var G__21078 = chunk__20005;
var G__21079 = count__20006;
var G__21080 = (i__20007 + (1));
seq__20003 = G__21077;
chunk__20005 = G__21078;
count__20006 = G__21079;
i__20007 = G__21080;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20003);
if(temp__5804__auto__){
var seq__20003__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20003__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20003__$1);
var G__21082 = cljs.core.chunk_rest(seq__20003__$1);
var G__21083 = c__5568__auto__;
var G__21084 = cljs.core.count(c__5568__auto__);
var G__21085 = (0);
seq__20003 = G__21082;
chunk__20005 = G__21083;
count__20006 = G__21084;
i__20007 = G__21085;
continue;
} else {
var el = cljs.core.first(seq__20003__$1);
var handler_21087__$1 = ((function (seq__20003,chunk__20005,count__20006,i__20007,el,seq__20003__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__20003,chunk__20005,count__20006,i__20007,el,seq__20003__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_21087__$1);


var G__21088 = cljs.core.next(seq__20003__$1);
var G__21089 = null;
var G__21090 = (0);
var G__21091 = (0);
seq__20003 = G__21088;
chunk__20005 = G__21089;
count__20006 = G__21090;
i__20007 = G__21091;
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
var G__20037 = arguments.length;
switch (G__20037) {
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
var seq__20061 = cljs.core.seq(events);
var chunk__20062 = null;
var count__20063 = (0);
var i__20064 = (0);
while(true){
if((i__20064 < count__20063)){
var vec__20082 = chunk__20062.cljs$core$IIndexed$_nth$arity$2(null,i__20064);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20082,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20082,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21099 = seq__20061;
var G__21100 = chunk__20062;
var G__21101 = count__20063;
var G__21102 = (i__20064 + (1));
seq__20061 = G__21099;
chunk__20062 = G__21100;
count__20063 = G__21101;
i__20064 = G__21102;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20061);
if(temp__5804__auto__){
var seq__20061__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20061__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20061__$1);
var G__21103 = cljs.core.chunk_rest(seq__20061__$1);
var G__21104 = c__5568__auto__;
var G__21105 = cljs.core.count(c__5568__auto__);
var G__21106 = (0);
seq__20061 = G__21103;
chunk__20062 = G__21104;
count__20063 = G__21105;
i__20064 = G__21106;
continue;
} else {
var vec__20092 = cljs.core.first(seq__20061__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20092,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20092,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__21107 = cljs.core.next(seq__20061__$1);
var G__21108 = null;
var G__21109 = (0);
var G__21110 = (0);
seq__20061 = G__21107;
chunk__20062 = G__21108;
count__20063 = G__21109;
i__20064 = G__21110;
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
var seq__20100 = cljs.core.seq(styles);
var chunk__20101 = null;
var count__20102 = (0);
var i__20103 = (0);
while(true){
if((i__20103 < count__20102)){
var vec__20125 = chunk__20101.cljs$core$IIndexed$_nth$arity$2(null,i__20103);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20125,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20125,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__21111 = seq__20100;
var G__21112 = chunk__20101;
var G__21113 = count__20102;
var G__21114 = (i__20103 + (1));
seq__20100 = G__21111;
chunk__20101 = G__21112;
count__20102 = G__21113;
i__20103 = G__21114;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20100);
if(temp__5804__auto__){
var seq__20100__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20100__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20100__$1);
var G__21115 = cljs.core.chunk_rest(seq__20100__$1);
var G__21116 = c__5568__auto__;
var G__21117 = cljs.core.count(c__5568__auto__);
var G__21118 = (0);
seq__20100 = G__21115;
chunk__20101 = G__21116;
count__20102 = G__21117;
i__20103 = G__21118;
continue;
} else {
var vec__20130 = cljs.core.first(seq__20100__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20130,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20130,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__21119 = cljs.core.next(seq__20100__$1);
var G__21120 = null;
var G__21121 = (0);
var G__21122 = (0);
seq__20100 = G__21119;
chunk__20101 = G__21120;
count__20102 = G__21121;
i__20103 = G__21122;
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
var G__20135_21123 = key;
var G__20135_21124__$1 = (((G__20135_21123 instanceof cljs.core.Keyword))?G__20135_21123.fqn:null);
switch (G__20135_21124__$1) {
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
var ks_21132 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_21132,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_21132,"aria-");
}
})())){
el.setAttribute(ks_21132,value);
} else {
(el[ks_21132] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__20188){
var map__20190 = p__20188;
var map__20190__$1 = cljs.core.__destructure_map(map__20190);
var props = map__20190__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20190__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__20195 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20195,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20195,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20195,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__20199 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__20199,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__20199;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__20206 = arguments.length;
switch (G__20206) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__20220){
var vec__20223 = p__20220;
var seq__20224 = cljs.core.seq(vec__20223);
var first__20225 = cljs.core.first(seq__20224);
var seq__20224__$1 = cljs.core.next(seq__20224);
var nn = first__20225;
var first__20225__$1 = cljs.core.first(seq__20224__$1);
var seq__20224__$2 = cljs.core.next(seq__20224__$1);
var np = first__20225__$1;
var nc = seq__20224__$2;
var node = vec__20223;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20227 = nn;
var G__20228 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20227,G__20228) : create_fn.call(null,G__20227,G__20228));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__20231 = nn;
var G__20232 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__20231,G__20232) : create_fn.call(null,G__20231,G__20232));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__20234 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20234,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20234,(1),null);
var seq__20238_21136 = cljs.core.seq(node_children);
var chunk__20239_21137 = null;
var count__20240_21138 = (0);
var i__20241_21139 = (0);
while(true){
if((i__20241_21139 < count__20240_21138)){
var child_struct_21140 = chunk__20239_21137.cljs$core$IIndexed$_nth$arity$2(null,i__20241_21139);
var children_21141 = shadow.dom.dom_node(child_struct_21140);
if(cljs.core.seq_QMARK_(children_21141)){
var seq__20274_21143 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21141));
var chunk__20276_21144 = null;
var count__20277_21145 = (0);
var i__20278_21146 = (0);
while(true){
if((i__20278_21146 < count__20277_21145)){
var child_21149 = chunk__20276_21144.cljs$core$IIndexed$_nth$arity$2(null,i__20278_21146);
if(cljs.core.truth_(child_21149)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21149);


var G__21152 = seq__20274_21143;
var G__21153 = chunk__20276_21144;
var G__21154 = count__20277_21145;
var G__21155 = (i__20278_21146 + (1));
seq__20274_21143 = G__21152;
chunk__20276_21144 = G__21153;
count__20277_21145 = G__21154;
i__20278_21146 = G__21155;
continue;
} else {
var G__21156 = seq__20274_21143;
var G__21157 = chunk__20276_21144;
var G__21158 = count__20277_21145;
var G__21159 = (i__20278_21146 + (1));
seq__20274_21143 = G__21156;
chunk__20276_21144 = G__21157;
count__20277_21145 = G__21158;
i__20278_21146 = G__21159;
continue;
}
} else {
var temp__5804__auto___21160 = cljs.core.seq(seq__20274_21143);
if(temp__5804__auto___21160){
var seq__20274_21161__$1 = temp__5804__auto___21160;
if(cljs.core.chunked_seq_QMARK_(seq__20274_21161__$1)){
var c__5568__auto___21162 = cljs.core.chunk_first(seq__20274_21161__$1);
var G__21163 = cljs.core.chunk_rest(seq__20274_21161__$1);
var G__21164 = c__5568__auto___21162;
var G__21165 = cljs.core.count(c__5568__auto___21162);
var G__21166 = (0);
seq__20274_21143 = G__21163;
chunk__20276_21144 = G__21164;
count__20277_21145 = G__21165;
i__20278_21146 = G__21166;
continue;
} else {
var child_21167 = cljs.core.first(seq__20274_21161__$1);
if(cljs.core.truth_(child_21167)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21167);


var G__21168 = cljs.core.next(seq__20274_21161__$1);
var G__21169 = null;
var G__21170 = (0);
var G__21171 = (0);
seq__20274_21143 = G__21168;
chunk__20276_21144 = G__21169;
count__20277_21145 = G__21170;
i__20278_21146 = G__21171;
continue;
} else {
var G__21172 = cljs.core.next(seq__20274_21161__$1);
var G__21173 = null;
var G__21174 = (0);
var G__21175 = (0);
seq__20274_21143 = G__21172;
chunk__20276_21144 = G__21173;
count__20277_21145 = G__21174;
i__20278_21146 = G__21175;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21141);
}


var G__21176 = seq__20238_21136;
var G__21177 = chunk__20239_21137;
var G__21178 = count__20240_21138;
var G__21179 = (i__20241_21139 + (1));
seq__20238_21136 = G__21176;
chunk__20239_21137 = G__21177;
count__20240_21138 = G__21178;
i__20241_21139 = G__21179;
continue;
} else {
var temp__5804__auto___21180 = cljs.core.seq(seq__20238_21136);
if(temp__5804__auto___21180){
var seq__20238_21181__$1 = temp__5804__auto___21180;
if(cljs.core.chunked_seq_QMARK_(seq__20238_21181__$1)){
var c__5568__auto___21182 = cljs.core.chunk_first(seq__20238_21181__$1);
var G__21183 = cljs.core.chunk_rest(seq__20238_21181__$1);
var G__21184 = c__5568__auto___21182;
var G__21185 = cljs.core.count(c__5568__auto___21182);
var G__21186 = (0);
seq__20238_21136 = G__21183;
chunk__20239_21137 = G__21184;
count__20240_21138 = G__21185;
i__20241_21139 = G__21186;
continue;
} else {
var child_struct_21187 = cljs.core.first(seq__20238_21181__$1);
var children_21188 = shadow.dom.dom_node(child_struct_21187);
if(cljs.core.seq_QMARK_(children_21188)){
var seq__20294_21189 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_21188));
var chunk__20297_21190 = null;
var count__20298_21191 = (0);
var i__20299_21192 = (0);
while(true){
if((i__20299_21192 < count__20298_21191)){
var child_21193 = chunk__20297_21190.cljs$core$IIndexed$_nth$arity$2(null,i__20299_21192);
if(cljs.core.truth_(child_21193)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21193);


var G__21194 = seq__20294_21189;
var G__21195 = chunk__20297_21190;
var G__21196 = count__20298_21191;
var G__21197 = (i__20299_21192 + (1));
seq__20294_21189 = G__21194;
chunk__20297_21190 = G__21195;
count__20298_21191 = G__21196;
i__20299_21192 = G__21197;
continue;
} else {
var G__21198 = seq__20294_21189;
var G__21199 = chunk__20297_21190;
var G__21200 = count__20298_21191;
var G__21201 = (i__20299_21192 + (1));
seq__20294_21189 = G__21198;
chunk__20297_21190 = G__21199;
count__20298_21191 = G__21200;
i__20299_21192 = G__21201;
continue;
}
} else {
var temp__5804__auto___21202__$1 = cljs.core.seq(seq__20294_21189);
if(temp__5804__auto___21202__$1){
var seq__20294_21203__$1 = temp__5804__auto___21202__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20294_21203__$1)){
var c__5568__auto___21204 = cljs.core.chunk_first(seq__20294_21203__$1);
var G__21205 = cljs.core.chunk_rest(seq__20294_21203__$1);
var G__21206 = c__5568__auto___21204;
var G__21207 = cljs.core.count(c__5568__auto___21204);
var G__21208 = (0);
seq__20294_21189 = G__21205;
chunk__20297_21190 = G__21206;
count__20298_21191 = G__21207;
i__20299_21192 = G__21208;
continue;
} else {
var child_21209 = cljs.core.first(seq__20294_21203__$1);
if(cljs.core.truth_(child_21209)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_21209);


var G__21210 = cljs.core.next(seq__20294_21203__$1);
var G__21211 = null;
var G__21212 = (0);
var G__21213 = (0);
seq__20294_21189 = G__21210;
chunk__20297_21190 = G__21211;
count__20298_21191 = G__21212;
i__20299_21192 = G__21213;
continue;
} else {
var G__21214 = cljs.core.next(seq__20294_21203__$1);
var G__21215 = null;
var G__21216 = (0);
var G__21217 = (0);
seq__20294_21189 = G__21214;
chunk__20297_21190 = G__21215;
count__20298_21191 = G__21216;
i__20299_21192 = G__21217;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_21188);
}


var G__21218 = cljs.core.next(seq__20238_21181__$1);
var G__21219 = null;
var G__21220 = (0);
var G__21221 = (0);
seq__20238_21136 = G__21218;
chunk__20239_21137 = G__21219;
count__20240_21138 = G__21220;
i__20241_21139 = G__21221;
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
var seq__20335 = cljs.core.seq(node);
var chunk__20336 = null;
var count__20337 = (0);
var i__20338 = (0);
while(true){
if((i__20338 < count__20337)){
var n = chunk__20336.cljs$core$IIndexed$_nth$arity$2(null,i__20338);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21222 = seq__20335;
var G__21223 = chunk__20336;
var G__21224 = count__20337;
var G__21225 = (i__20338 + (1));
seq__20335 = G__21222;
chunk__20336 = G__21223;
count__20337 = G__21224;
i__20338 = G__21225;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20335);
if(temp__5804__auto__){
var seq__20335__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20335__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20335__$1);
var G__21226 = cljs.core.chunk_rest(seq__20335__$1);
var G__21227 = c__5568__auto__;
var G__21228 = cljs.core.count(c__5568__auto__);
var G__21229 = (0);
seq__20335 = G__21226;
chunk__20336 = G__21227;
count__20337 = G__21228;
i__20338 = G__21229;
continue;
} else {
var n = cljs.core.first(seq__20335__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__21230 = cljs.core.next(seq__20335__$1);
var G__21231 = null;
var G__21232 = (0);
var G__21233 = (0);
seq__20335 = G__21230;
chunk__20336 = G__21231;
count__20337 = G__21232;
i__20338 = G__21233;
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
var G__20347 = arguments.length;
switch (G__20347) {
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
var G__20358 = arguments.length;
switch (G__20358) {
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
var G__20377 = arguments.length;
switch (G__20377) {
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
var len__5769__auto___21240 = arguments.length;
var i__5770__auto___21241 = (0);
while(true){
if((i__5770__auto___21241 < len__5769__auto___21240)){
args__5775__auto__.push((arguments[i__5770__auto___21241]));

var G__21242 = (i__5770__auto___21241 + (1));
i__5770__auto___21241 = G__21242;
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
var seq__20403_21243 = cljs.core.seq(nodes);
var chunk__20404_21244 = null;
var count__20405_21245 = (0);
var i__20406_21246 = (0);
while(true){
if((i__20406_21246 < count__20405_21245)){
var node_21248 = chunk__20404_21244.cljs$core$IIndexed$_nth$arity$2(null,i__20406_21246);
fragment.appendChild(shadow.dom._to_dom(node_21248));


var G__21249 = seq__20403_21243;
var G__21250 = chunk__20404_21244;
var G__21251 = count__20405_21245;
var G__21252 = (i__20406_21246 + (1));
seq__20403_21243 = G__21249;
chunk__20404_21244 = G__21250;
count__20405_21245 = G__21251;
i__20406_21246 = G__21252;
continue;
} else {
var temp__5804__auto___21253 = cljs.core.seq(seq__20403_21243);
if(temp__5804__auto___21253){
var seq__20403_21254__$1 = temp__5804__auto___21253;
if(cljs.core.chunked_seq_QMARK_(seq__20403_21254__$1)){
var c__5568__auto___21255 = cljs.core.chunk_first(seq__20403_21254__$1);
var G__21256 = cljs.core.chunk_rest(seq__20403_21254__$1);
var G__21257 = c__5568__auto___21255;
var G__21258 = cljs.core.count(c__5568__auto___21255);
var G__21259 = (0);
seq__20403_21243 = G__21256;
chunk__20404_21244 = G__21257;
count__20405_21245 = G__21258;
i__20406_21246 = G__21259;
continue;
} else {
var node_21260 = cljs.core.first(seq__20403_21254__$1);
fragment.appendChild(shadow.dom._to_dom(node_21260));


var G__21261 = cljs.core.next(seq__20403_21254__$1);
var G__21262 = null;
var G__21263 = (0);
var G__21264 = (0);
seq__20403_21243 = G__21261;
chunk__20404_21244 = G__21262;
count__20405_21245 = G__21263;
i__20406_21246 = G__21264;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq20399){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20399));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__20419_21266 = cljs.core.seq(scripts);
var chunk__20420_21267 = null;
var count__20421_21268 = (0);
var i__20422_21269 = (0);
while(true){
if((i__20422_21269 < count__20421_21268)){
var vec__20435_21270 = chunk__20420_21267.cljs$core$IIndexed$_nth$arity$2(null,i__20422_21269);
var script_tag_21271 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20435_21270,(0),null);
var script_body_21272 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20435_21270,(1),null);
eval(script_body_21272);


var G__21273 = seq__20419_21266;
var G__21274 = chunk__20420_21267;
var G__21275 = count__20421_21268;
var G__21276 = (i__20422_21269 + (1));
seq__20419_21266 = G__21273;
chunk__20420_21267 = G__21274;
count__20421_21268 = G__21275;
i__20422_21269 = G__21276;
continue;
} else {
var temp__5804__auto___21278 = cljs.core.seq(seq__20419_21266);
if(temp__5804__auto___21278){
var seq__20419_21279__$1 = temp__5804__auto___21278;
if(cljs.core.chunked_seq_QMARK_(seq__20419_21279__$1)){
var c__5568__auto___21280 = cljs.core.chunk_first(seq__20419_21279__$1);
var G__21281 = cljs.core.chunk_rest(seq__20419_21279__$1);
var G__21282 = c__5568__auto___21280;
var G__21283 = cljs.core.count(c__5568__auto___21280);
var G__21284 = (0);
seq__20419_21266 = G__21281;
chunk__20420_21267 = G__21282;
count__20421_21268 = G__21283;
i__20422_21269 = G__21284;
continue;
} else {
var vec__20440_21285 = cljs.core.first(seq__20419_21279__$1);
var script_tag_21286 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20440_21285,(0),null);
var script_body_21287 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20440_21285,(1),null);
eval(script_body_21287);


var G__21288 = cljs.core.next(seq__20419_21279__$1);
var G__21289 = null;
var G__21290 = (0);
var G__21291 = (0);
seq__20419_21266 = G__21288;
chunk__20420_21267 = G__21289;
count__20421_21268 = G__21290;
i__20422_21269 = G__21291;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__20444){
var vec__20445 = p__20444;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20445,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20445,(1),null);
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
var G__20461 = arguments.length;
switch (G__20461) {
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
var seq__20472 = cljs.core.seq(style_keys);
var chunk__20473 = null;
var count__20474 = (0);
var i__20475 = (0);
while(true){
if((i__20475 < count__20474)){
var it = chunk__20473.cljs$core$IIndexed$_nth$arity$2(null,i__20475);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21297 = seq__20472;
var G__21298 = chunk__20473;
var G__21299 = count__20474;
var G__21300 = (i__20475 + (1));
seq__20472 = G__21297;
chunk__20473 = G__21298;
count__20474 = G__21299;
i__20475 = G__21300;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20472);
if(temp__5804__auto__){
var seq__20472__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20472__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20472__$1);
var G__21304 = cljs.core.chunk_rest(seq__20472__$1);
var G__21305 = c__5568__auto__;
var G__21306 = cljs.core.count(c__5568__auto__);
var G__21307 = (0);
seq__20472 = G__21304;
chunk__20473 = G__21305;
count__20474 = G__21306;
i__20475 = G__21307;
continue;
} else {
var it = cljs.core.first(seq__20472__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__21310 = cljs.core.next(seq__20472__$1);
var G__21311 = null;
var G__21312 = (0);
var G__21313 = (0);
seq__20472 = G__21310;
chunk__20473 = G__21311;
count__20474 = G__21312;
i__20475 = G__21313;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20485,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20498 = k20485;
var G__20498__$1 = (((G__20498 instanceof cljs.core.Keyword))?G__20498.fqn:null);
switch (G__20498__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20485,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20502){
var vec__20503 = p__20502;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20503,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20503,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20484){
var self__ = this;
var G__20484__$1 = this;
return (new cljs.core.RecordIter((0),G__20484__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20487,other20488){
var self__ = this;
var this20487__$1 = this;
return (((!((other20488 == null)))) && ((((this20487__$1.constructor === other20488.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20487__$1.x,other20488.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20487__$1.y,other20488.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20487__$1.__extmap,other20488.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20485){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20526 = k20485;
var G__20526__$1 = (((G__20526 instanceof cljs.core.Keyword))?G__20526.fqn:null);
switch (G__20526__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20485);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20484){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20534 = cljs.core.keyword_identical_QMARK_;
var expr__20535 = k__5352__auto__;
if(cljs.core.truth_((pred__20534.cljs$core$IFn$_invoke$arity$2 ? pred__20534.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__20535) : pred__20534.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__20535)))){
return (new shadow.dom.Coordinate(G__20484,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20534.cljs$core$IFn$_invoke$arity$2 ? pred__20534.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__20535) : pred__20534.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__20535)))){
return (new shadow.dom.Coordinate(self__.x,G__20484,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20484),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20484){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__20484,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__20490){
var extmap__5385__auto__ = (function (){var G__20555 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20490,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__20490)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20555);
} else {
return G__20555;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__20490),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__20490),null,cljs.core.not_empty(extmap__5385__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k20576,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__20595 = k20576;
var G__20595__$1 = (((G__20595 instanceof cljs.core.Keyword))?G__20595.fqn:null);
switch (G__20595__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k20576,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__20604){
var vec__20605 = p__20604;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20605,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20605,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__20575){
var self__ = this;
var G__20575__$1 = this;
return (new cljs.core.RecordIter((0),G__20575__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this20577,other20578){
var self__ = this;
var this20577__$1 = this;
return (((!((other20578 == null)))) && ((((this20577__$1.constructor === other20578.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20577__$1.w,other20578.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20577__$1.h,other20578.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this20577__$1.__extmap,other20578.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k20576){
var self__ = this;
var this__5350__auto____$1 = this;
var G__20666 = k20576;
var G__20666__$1 = (((G__20666 instanceof cljs.core.Keyword))?G__20666.fqn:null);
switch (G__20666__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k20576);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__20575){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__20693 = cljs.core.keyword_identical_QMARK_;
var expr__20694 = k__5352__auto__;
if(cljs.core.truth_((pred__20693.cljs$core$IFn$_invoke$arity$2 ? pred__20693.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__20694) : pred__20693.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__20694)))){
return (new shadow.dom.Size(G__20575,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__20693.cljs$core$IFn$_invoke$arity$2 ? pred__20693.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__20694) : pred__20693.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__20694)))){
return (new shadow.dom.Size(self__.w,G__20575,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__20575),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__20575){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__20575,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__20584){
var extmap__5385__auto__ = (function (){var G__20731 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__20584,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__20584)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__20731);
} else {
return G__20731;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__20584),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__20584),null,cljs.core.not_empty(extmap__5385__auto__),null));
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
var G__21363 = (i + (1));
var G__21364 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__21363;
ret = G__21364;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__20776){
var vec__20777 = p__20776;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20777,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20777,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__20788 = arguments.length;
switch (G__20788) {
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
var G__21372 = ps;
var G__21373 = (i + (1));
el__$1 = G__21372;
i = G__21373;
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
var vec__20839 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20839,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20839,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20839,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__20843_21378 = cljs.core.seq(props);
var chunk__20844_21379 = null;
var count__20845_21380 = (0);
var i__20846_21381 = (0);
while(true){
if((i__20846_21381 < count__20845_21380)){
var vec__20885_21382 = chunk__20844_21379.cljs$core$IIndexed$_nth$arity$2(null,i__20846_21381);
var k_21383 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20885_21382,(0),null);
var v_21384 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20885_21382,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_21383);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21383),v_21384);


var G__21385 = seq__20843_21378;
var G__21386 = chunk__20844_21379;
var G__21387 = count__20845_21380;
var G__21388 = (i__20846_21381 + (1));
seq__20843_21378 = G__21385;
chunk__20844_21379 = G__21386;
count__20845_21380 = G__21387;
i__20846_21381 = G__21388;
continue;
} else {
var temp__5804__auto___21392 = cljs.core.seq(seq__20843_21378);
if(temp__5804__auto___21392){
var seq__20843_21393__$1 = temp__5804__auto___21392;
if(cljs.core.chunked_seq_QMARK_(seq__20843_21393__$1)){
var c__5568__auto___21394 = cljs.core.chunk_first(seq__20843_21393__$1);
var G__21395 = cljs.core.chunk_rest(seq__20843_21393__$1);
var G__21396 = c__5568__auto___21394;
var G__21397 = cljs.core.count(c__5568__auto___21394);
var G__21398 = (0);
seq__20843_21378 = G__21395;
chunk__20844_21379 = G__21396;
count__20845_21380 = G__21397;
i__20846_21381 = G__21398;
continue;
} else {
var vec__20896_21399 = cljs.core.first(seq__20843_21393__$1);
var k_21400 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20896_21399,(0),null);
var v_21401 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20896_21399,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_21400);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_21400),v_21401);


var G__21407 = cljs.core.next(seq__20843_21393__$1);
var G__21408 = null;
var G__21409 = (0);
var G__21410 = (0);
seq__20843_21378 = G__21407;
chunk__20844_21379 = G__21408;
count__20845_21380 = G__21409;
i__20846_21381 = G__21410;
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
var vec__20930 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20930,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20930,(1),null);
var seq__20933_21413 = cljs.core.seq(node_children);
var chunk__20935_21414 = null;
var count__20936_21415 = (0);
var i__20937_21416 = (0);
while(true){
if((i__20937_21416 < count__20936_21415)){
var child_struct_21417 = chunk__20935_21414.cljs$core$IIndexed$_nth$arity$2(null,i__20937_21416);
if((!((child_struct_21417 == null)))){
if(typeof child_struct_21417 === 'string'){
var text_21418 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21418),child_struct_21417].join(''));
} else {
var children_21419 = shadow.dom.svg_node(child_struct_21417);
if(cljs.core.seq_QMARK_(children_21419)){
var seq__20975_21420 = cljs.core.seq(children_21419);
var chunk__20977_21421 = null;
var count__20978_21422 = (0);
var i__20979_21423 = (0);
while(true){
if((i__20979_21423 < count__20978_21422)){
var child_21424 = chunk__20977_21421.cljs$core$IIndexed$_nth$arity$2(null,i__20979_21423);
if(cljs.core.truth_(child_21424)){
node.appendChild(child_21424);


var G__21426 = seq__20975_21420;
var G__21427 = chunk__20977_21421;
var G__21428 = count__20978_21422;
var G__21429 = (i__20979_21423 + (1));
seq__20975_21420 = G__21426;
chunk__20977_21421 = G__21427;
count__20978_21422 = G__21428;
i__20979_21423 = G__21429;
continue;
} else {
var G__21430 = seq__20975_21420;
var G__21431 = chunk__20977_21421;
var G__21432 = count__20978_21422;
var G__21433 = (i__20979_21423 + (1));
seq__20975_21420 = G__21430;
chunk__20977_21421 = G__21431;
count__20978_21422 = G__21432;
i__20979_21423 = G__21433;
continue;
}
} else {
var temp__5804__auto___21434 = cljs.core.seq(seq__20975_21420);
if(temp__5804__auto___21434){
var seq__20975_21435__$1 = temp__5804__auto___21434;
if(cljs.core.chunked_seq_QMARK_(seq__20975_21435__$1)){
var c__5568__auto___21436 = cljs.core.chunk_first(seq__20975_21435__$1);
var G__21438 = cljs.core.chunk_rest(seq__20975_21435__$1);
var G__21439 = c__5568__auto___21436;
var G__21440 = cljs.core.count(c__5568__auto___21436);
var G__21441 = (0);
seq__20975_21420 = G__21438;
chunk__20977_21421 = G__21439;
count__20978_21422 = G__21440;
i__20979_21423 = G__21441;
continue;
} else {
var child_21444 = cljs.core.first(seq__20975_21435__$1);
if(cljs.core.truth_(child_21444)){
node.appendChild(child_21444);


var G__21445 = cljs.core.next(seq__20975_21435__$1);
var G__21446 = null;
var G__21447 = (0);
var G__21448 = (0);
seq__20975_21420 = G__21445;
chunk__20977_21421 = G__21446;
count__20978_21422 = G__21447;
i__20979_21423 = G__21448;
continue;
} else {
var G__21449 = cljs.core.next(seq__20975_21435__$1);
var G__21450 = null;
var G__21451 = (0);
var G__21452 = (0);
seq__20975_21420 = G__21449;
chunk__20977_21421 = G__21450;
count__20978_21422 = G__21451;
i__20979_21423 = G__21452;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21419);
}
}


var G__21453 = seq__20933_21413;
var G__21454 = chunk__20935_21414;
var G__21455 = count__20936_21415;
var G__21456 = (i__20937_21416 + (1));
seq__20933_21413 = G__21453;
chunk__20935_21414 = G__21454;
count__20936_21415 = G__21455;
i__20937_21416 = G__21456;
continue;
} else {
var G__21457 = seq__20933_21413;
var G__21458 = chunk__20935_21414;
var G__21459 = count__20936_21415;
var G__21460 = (i__20937_21416 + (1));
seq__20933_21413 = G__21457;
chunk__20935_21414 = G__21458;
count__20936_21415 = G__21459;
i__20937_21416 = G__21460;
continue;
}
} else {
var temp__5804__auto___21461 = cljs.core.seq(seq__20933_21413);
if(temp__5804__auto___21461){
var seq__20933_21462__$1 = temp__5804__auto___21461;
if(cljs.core.chunked_seq_QMARK_(seq__20933_21462__$1)){
var c__5568__auto___21463 = cljs.core.chunk_first(seq__20933_21462__$1);
var G__21464 = cljs.core.chunk_rest(seq__20933_21462__$1);
var G__21465 = c__5568__auto___21463;
var G__21466 = cljs.core.count(c__5568__auto___21463);
var G__21467 = (0);
seq__20933_21413 = G__21464;
chunk__20935_21414 = G__21465;
count__20936_21415 = G__21466;
i__20937_21416 = G__21467;
continue;
} else {
var child_struct_21468 = cljs.core.first(seq__20933_21462__$1);
if((!((child_struct_21468 == null)))){
if(typeof child_struct_21468 === 'string'){
var text_21469 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_21469),child_struct_21468].join(''));
} else {
var children_21470 = shadow.dom.svg_node(child_struct_21468);
if(cljs.core.seq_QMARK_(children_21470)){
var seq__20990_21471 = cljs.core.seq(children_21470);
var chunk__20992_21472 = null;
var count__20993_21473 = (0);
var i__20994_21474 = (0);
while(true){
if((i__20994_21474 < count__20993_21473)){
var child_21475 = chunk__20992_21472.cljs$core$IIndexed$_nth$arity$2(null,i__20994_21474);
if(cljs.core.truth_(child_21475)){
node.appendChild(child_21475);


var G__21476 = seq__20990_21471;
var G__21477 = chunk__20992_21472;
var G__21478 = count__20993_21473;
var G__21479 = (i__20994_21474 + (1));
seq__20990_21471 = G__21476;
chunk__20992_21472 = G__21477;
count__20993_21473 = G__21478;
i__20994_21474 = G__21479;
continue;
} else {
var G__21480 = seq__20990_21471;
var G__21481 = chunk__20992_21472;
var G__21482 = count__20993_21473;
var G__21483 = (i__20994_21474 + (1));
seq__20990_21471 = G__21480;
chunk__20992_21472 = G__21481;
count__20993_21473 = G__21482;
i__20994_21474 = G__21483;
continue;
}
} else {
var temp__5804__auto___21484__$1 = cljs.core.seq(seq__20990_21471);
if(temp__5804__auto___21484__$1){
var seq__20990_21485__$1 = temp__5804__auto___21484__$1;
if(cljs.core.chunked_seq_QMARK_(seq__20990_21485__$1)){
var c__5568__auto___21486 = cljs.core.chunk_first(seq__20990_21485__$1);
var G__21487 = cljs.core.chunk_rest(seq__20990_21485__$1);
var G__21488 = c__5568__auto___21486;
var G__21489 = cljs.core.count(c__5568__auto___21486);
var G__21490 = (0);
seq__20990_21471 = G__21487;
chunk__20992_21472 = G__21488;
count__20993_21473 = G__21489;
i__20994_21474 = G__21490;
continue;
} else {
var child_21491 = cljs.core.first(seq__20990_21485__$1);
if(cljs.core.truth_(child_21491)){
node.appendChild(child_21491);


var G__21493 = cljs.core.next(seq__20990_21485__$1);
var G__21494 = null;
var G__21495 = (0);
var G__21496 = (0);
seq__20990_21471 = G__21493;
chunk__20992_21472 = G__21494;
count__20993_21473 = G__21495;
i__20994_21474 = G__21496;
continue;
} else {
var G__21497 = cljs.core.next(seq__20990_21485__$1);
var G__21498 = null;
var G__21499 = (0);
var G__21500 = (0);
seq__20990_21471 = G__21497;
chunk__20992_21472 = G__21498;
count__20993_21473 = G__21499;
i__20994_21474 = G__21500;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_21470);
}
}


var G__21504 = cljs.core.next(seq__20933_21462__$1);
var G__21505 = null;
var G__21506 = (0);
var G__21507 = (0);
seq__20933_21413 = G__21504;
chunk__20935_21414 = G__21505;
count__20936_21415 = G__21506;
i__20937_21416 = G__21507;
continue;
} else {
var G__21508 = cljs.core.next(seq__20933_21462__$1);
var G__21509 = null;
var G__21510 = (0);
var G__21511 = (0);
seq__20933_21413 = G__21508;
chunk__20935_21414 = G__21509;
count__20936_21415 = G__21510;
i__20937_21416 = G__21511;
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
var len__5769__auto___21512 = arguments.length;
var i__5770__auto___21513 = (0);
while(true){
if((i__5770__auto___21513 < len__5769__auto___21512)){
args__5775__auto__.push((arguments[i__5770__auto___21513]));

var G__21515 = (i__5770__auto___21513 + (1));
i__5770__auto___21513 = G__21515;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq21011){
var G__21012 = cljs.core.first(seq21011);
var seq21011__$1 = cljs.core.next(seq21011);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21012,seq21011__$1);
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
var G__21018 = arguments.length;
switch (G__21018) {
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
var c__17451__auto___21524 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__17452__auto__ = (function (){var switch__17259__auto__ = (function (state_21024){
var state_val_21025 = (state_21024[(1)]);
if((state_val_21025 === (1))){
var state_21024__$1 = state_21024;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21024__$1,(2),once_or_cleanup);
} else {
if((state_val_21025 === (2))){
var inst_21021 = (state_21024[(2)]);
var inst_21022 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_21024__$1 = (function (){var statearr_21027 = state_21024;
(statearr_21027[(7)] = inst_21021);

return statearr_21027;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_21024__$1,inst_21022);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__17260__auto__ = null;
var shadow$dom$state_machine__17260__auto____0 = (function (){
var statearr_21029 = [null,null,null,null,null,null,null,null];
(statearr_21029[(0)] = shadow$dom$state_machine__17260__auto__);

(statearr_21029[(1)] = (1));

return statearr_21029;
});
var shadow$dom$state_machine__17260__auto____1 = (function (state_21024){
while(true){
var ret_value__17261__auto__ = (function (){try{while(true){
var result__17262__auto__ = switch__17259__auto__(state_21024);
if(cljs.core.keyword_identical_QMARK_(result__17262__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17262__auto__;
}
break;
}
}catch (e21030){var ex__17263__auto__ = e21030;
var statearr_21031_21528 = state_21024;
(statearr_21031_21528[(2)] = ex__17263__auto__);


if(cljs.core.seq((state_21024[(4)]))){
var statearr_21032_21530 = state_21024;
(statearr_21032_21530[(1)] = cljs.core.first((state_21024[(4)])));

} else {
throw ex__17263__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__17261__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__21531 = state_21024;
state_21024 = G__21531;
continue;
} else {
return ret_value__17261__auto__;
}
break;
}
});
shadow$dom$state_machine__17260__auto__ = function(state_21024){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__17260__auto____0.call(this);
case 1:
return shadow$dom$state_machine__17260__auto____1.call(this,state_21024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__17260__auto____0;
shadow$dom$state_machine__17260__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__17260__auto____1;
return shadow$dom$state_machine__17260__auto__;
})()
})();
var state__17453__auto__ = (function (){var statearr_21036 = f__17452__auto__();
(statearr_21036[(6)] = c__17451__auto___21524);

return statearr_21036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__17453__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
