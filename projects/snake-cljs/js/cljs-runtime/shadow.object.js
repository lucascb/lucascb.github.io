goog.provide('shadow.object');
shadow.object.console_friendly = shadow.util.console_friendly;
shadow.object.log = shadow.util.log;
shadow.object.debug = shadow.util.log;
shadow.object.info = shadow.util.log;
shadow.object.warn = shadow.util.log;
shadow.object.error = shadow.util.log;
shadow.object.obj_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
shadow.object.next_id = (function shadow$object$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.obj_id,cljs.core.inc);
});
shadow.object.object_defs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.behavior_fns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instances = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_parent = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.instance_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.events = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
shadow.object.define_event = (function shadow$object$define_event(event_name,desc,args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.events,cljs.core.assoc,event_name,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),event_name,new cljs.core.Keyword(null,"description","description",-1428560544),desc,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
});
shadow.object.unmunge = (function shadow$object$unmunge(s){
return clojure.string.replace(clojure.string.replace(s,/_DOT_/,"."),/_/,"-");
});
shadow.object.define_event(new cljs.core.Keyword(null,"init","init",-1875481434),"object initialization",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"destroy","destroy",-843660405),"object descruction",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cause","cause",231901252),"cause of destruction, :parent means the parent was destroyed, :direct is default"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","init","dom/init",-1875647652),"called after the dom was created but has not entered the document yet",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dom","dom",-1236537922),"the dom that was created"], null)], null));
shadow.object.define_event(new cljs.core.Keyword("dom","entered","dom/entered",506699596),"should be called whenever a dom node is added to the document, since that\n   is not in control of this library its up to you to call this\n   use (so/notify-tree! your-obj :dom/entered) to notify the node and every child you created",cljs.core.PersistentVector.EMPTY);
shadow.object.define_event(new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160),"need to rethink this",cljs.core.PersistentVector.EMPTY);

/**
 * @interface
 */
shadow.object.IObject = function(){};

var shadow$object$IObject$_id$dyn_20167 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.object._id[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.object._id["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-id",this$);
}
}
});
shadow.object._id = (function shadow$object$_id(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_id$arity$1 == null)))))){
return this$.shadow$object$IObject$_id$arity$1(this$);
} else {
return shadow$object$IObject$_id$dyn_20167(this$);
}
});

var shadow$object$IObject$_type$dyn_20169 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.object._type[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.object._type["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-type",this$);
}
}
});
shadow.object._type = (function shadow$object$_type(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_type$arity$1 == null)))))){
return this$.shadow$object$IObject$_type$arity$1(this$);
} else {
return shadow$object$IObject$_type$dyn_20169(this$);
}
});

var shadow$object$IObject$_data$dyn_20170 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.object._data[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.object._data["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IObject.-data",this$);
}
}
});
shadow.object._data = (function shadow$object$_data(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_data$arity$1 == null)))))){
return this$.shadow$object$IObject$_data$arity$1(this$);
} else {
return shadow$object$IObject$_data$dyn_20170(this$);
}
});

var shadow$object$IObject$_update$dyn_20171 = (function (this$,update_fn){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.object._update[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__5394__auto__.call(null,this$,update_fn));
} else {
var m__5392__auto__ = (shadow.object._update["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,update_fn) : m__5392__auto__.call(null,this$,update_fn));
} else {
throw cljs.core.missing_protocol("IObject.-update",this$);
}
}
});
/**
 * update and notify watches
 */
shadow.object._update = (function shadow$object$_update(this$,update_fn){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_update$arity$2 == null)))))){
return this$.shadow$object$IObject$_update$arity$2(this$,update_fn);
} else {
return shadow$object$IObject$_update$dyn_20171(this$,update_fn);
}
});

var shadow$object$IObject$_destroy_BANG_$dyn_20175 = (function (this$,cause){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.object._destroy_BANG_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__5394__auto__.call(null,this$,cause));
} else {
var m__5392__auto__ = (shadow.object._destroy_BANG_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(this$,cause) : m__5392__auto__.call(null,this$,cause));
} else {
throw cljs.core.missing_protocol("IObject.-destroy!",this$);
}
}
});
shadow.object._destroy_BANG_ = (function shadow$object$_destroy_BANG_(this$,cause){
if((((!((this$ == null)))) && ((!((this$.shadow$object$IObject$_destroy_BANG_$arity$2 == null)))))){
return this$.shadow$object$IObject$_destroy_BANG_$arity$2(this$,cause);
} else {
return shadow$object$IObject$_destroy_BANG_$dyn_20175(this$,cause);
}
});

shadow.object.get_type = (function shadow$object$get_type(this$){
return shadow.object._type(this$);
});
shadow.object.get_type_attr = (function shadow$object$get_type_attr(var_args){
var G__19010 = arguments.length;
switch (G__19010) {
case 2:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2 = (function (oref,key){
if((oref == null)){
return null;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null));
}
}));

(shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3 = (function (oref,key,default$){
if((oref == null)){
return default$;
} else {
var type_id = (((oref instanceof cljs.core.Keyword))?oref:shadow.object._type(oref));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type_id,key], null),default$);
}
}));

(shadow.object.get_type_attr.cljs$lang$maxFixedArity = 3);

shadow.object.get_dom = (function shadow$object$get_dom(oref){
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(oref);
});
goog.exportSymbol('shadow.object.get_dom', shadow.object.get_dom);
shadow.object.get_by_id = (function shadow$object$get_by_id(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),id);
});
goog.exportSymbol('shadow.object.get_by_id', shadow.object.get_by_id);
shadow.object.get_from_dom = (function shadow$object$get_from_dom(dom){
var oid = shadow.dom.data(dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(oid)){
return shadow.object.get_by_id(parseInt(oid,(10)));
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_from_dom', shadow.object.get_from_dom);
shadow.object.is_object_QMARK_ = (function shadow$object$is_object_QMARK_(obj_or_dom){
var or__5045__auto__ = (((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return shadow.object.get_from_dom(obj_or_dom);
}
});
shadow.object.equal_QMARK_ = (function shadow$object$equal_QMARK_(obj,obj_or_dom){
if((((!((obj == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj.shadow$object$IObject$))))?true:(((!obj.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj))){
} else {
throw (new Error(["Assert failed: ","can only test objects","\n","(satisfies? IObject obj)"].join('')));
}

if((((!((obj_or_dom == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === obj_or_dom.shadow$object$IObject$))))?true:(((!obj_or_dom.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,obj_or_dom))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),shadow.object._id(obj_or_dom));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._id(obj),(function (){var temp__5804__auto__ = shadow.dom.data(obj_or_dom,new cljs.core.Keyword(null,"oid","oid",-768692334));
if(cljs.core.truth_(temp__5804__auto__)){
var oid = temp__5804__auto__;
return parseInt(oid,(10));
} else {
return null;
}
})());
}
});
shadow.object.get_parent = (function shadow$object$get_parent(oref){
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),shadow.object._id(oref));
if(cljs.core.truth_(temp__5804__auto__)){
var parent_id = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instances),parent_id);
} else {
return null;
}
});
goog.exportSymbol('shadow.object.get_parent', shadow.object.get_parent);
shadow.object.get_parent_of_type = (function shadow$object$get_parent_of_type(oref,parent_type){
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(oref);
while(true){
if(cljs.core.truth_(parent)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.object._type(parent),parent_type)){
return parent;
} else {
var G__20182 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(parent);
parent = G__20182;
continue;
}
} else {
return null;
}
break;
}
});
goog.exportSymbol('shadow.object.get_parent_of_type', shadow.object.get_parent_of_type);
shadow.object.get_children = (function shadow$object$get_children(parent){
var parent_id = shadow.object._id(parent);
var child_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(shadow.object.instance_children),parent_id,cljs.core.PersistentVector.EMPTY);
var instances = cljs.core.deref(shadow.object.instances);
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19171_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(instances,p1__19171_SHARP_);
}),child_ids));
});
goog.exportSymbol('shadow.object.get_children', shadow.object.get_children);
shadow.object.tree_seq = (function shadow$object$tree_seq(var_args){
var G__19187 = arguments.length;
switch (G__19187) {
case 1:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});
goog.exportSymbol('shadow.object.tree_seq', shadow.object.tree_seq);

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2(root,(function (node){
return true;
}));
}));

(shadow.object.tree_seq.cljs$core$IFn$_invoke$arity$2 = (function (root,branch_QMARK_){
return cljs.core.tree_seq(branch_QMARK_,shadow.object.get_children,root);
}));

(shadow.object.tree_seq.cljs$lang$maxFixedArity = 2);

shadow.object.get_children_of_type = (function shadow$object$get_children_of_type(oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19193_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__19193_SHARP_));
}),shadow.object.get_children(oref));
});
/**
 * basically (get-children (:parent this))
 */
shadow.object.get_siblings = (function shadow$object$get_siblings(p__19197){
var map__19202 = p__19197;
var map__19202__$1 = cljs.core.__destructure_map(map__19202);
var oref = map__19202__$1;
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19202__$1,new cljs.core.Keyword(null,"parent","parent",-878878779));
if(cljs.core.truth_(parent)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object has no parent, thus has no siblings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

return shadow.object.get_children(parent);
});
/**
 * returns set of all siblings of a common type
 */
shadow.object.get_siblings_of_type = (function shadow$object$get_siblings_of_type(var_args){
var G__19236 = arguments.length;
switch (G__19236) {
case 1:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2(oref,oref);
}));

(shadow.object.get_siblings_of_type.cljs$core$IFn$_invoke$arity$2 = (function (oref,type){
var type_kw = (((type instanceof cljs.core.Keyword))?type:shadow.object._type(type));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__19220_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type_kw,shadow.object._type(p1__19220_SHARP_));
}),shadow.object.get_siblings(oref));
}));

(shadow.object.get_siblings_of_type.cljs$lang$maxFixedArity = 2);

shadow.object.get_collection_item = (function shadow$object$get_collection_item(oref){
var item_key = new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,item_key);
});
/**
 * find the object that contains this dom node
 */
shadow.object.find_containing_object = (function shadow$object$find_containing_object(dom){
while(true){
var temp__5802__auto__ = shadow.object.get_from_dom(dom);
if(cljs.core.truth_(temp__5802__auto__)){
var obj = temp__5802__auto__;
return obj;
} else {
var temp__5804__auto__ = dom.parentElement;
if(cljs.core.truth_(temp__5804__auto__)){
var parent = temp__5804__auto__;
var G__20192 = parent;
dom = G__20192;
continue;
} else {
return null;
}
}
break;
}
});
shadow.object.notify_BANG_ = (function shadow$object$notify_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20193 = arguments.length;
var i__5770__auto___20194 = (0);
while(true){
if((i__5770__auto___20194 < len__5769__auto___20193)){
args__5775__auto__.push((arguments[i__5770__auto___20194]));

var G__20195 = (i__5770__auto___20194 + (1));
i__5770__auto___20194 = G__20195;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var temp__5804__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),ev], null));
if(cljs.core.truth_(temp__5804__auto__)){
var reactions_to_trigger = temp__5804__auto__;
var seq__19313 = cljs.core.seq(reactions_to_trigger);
var chunk__19314 = null;
var count__19315 = (0);
var i__19316 = (0);
while(true){
if((i__19316 < count__19315)){
var rfn = chunk__19314.cljs$core$IIndexed$_nth$arity$2(null,i__19316);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__20196 = seq__19313;
var G__20197 = chunk__19314;
var G__20198 = count__19315;
var G__20199 = (i__19316 + (1));
seq__19313 = G__20196;
chunk__19314 = G__20197;
count__19315 = G__20198;
i__19316 = G__20199;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19313);
if(temp__5804__auto____$1){
var seq__19313__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19313__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19313__$1);
var G__20202 = cljs.core.chunk_rest(seq__19313__$1);
var G__20203 = c__5568__auto__;
var G__20204 = cljs.core.count(c__5568__auto__);
var G__20205 = (0);
seq__19313 = G__20202;
chunk__19314 = G__20203;
count__19315 = G__20204;
i__19316 = G__20205;
continue;
} else {
var rfn = cljs.core.first(seq__19313__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(rfn,cljs.core.cons(oref,args));


var G__20208 = cljs.core.next(seq__19313__$1);
var G__20209 = null;
var G__20210 = (0);
var G__20211 = (0);
seq__19313 = G__20208;
chunk__19314 = G__20209;
count__19315 = G__20210;
i__19316 = G__20211;
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
}));

(shadow.object.notify_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_BANG_.cljs$lang$applyTo = (function (seq19289){
var G__19291 = cljs.core.first(seq19289);
var seq19289__$1 = cljs.core.next(seq19289);
var G__19292 = cljs.core.first(seq19289__$1);
var seq19289__$2 = cljs.core.next(seq19289__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19291,G__19292,seq19289__$2);
}));

shadow.object.do_notify_tree = (function shadow$object$do_notify_tree(current_obj,ev,notify_fn){
var seq__19339_20214 = cljs.core.seq(shadow.object.get_children(current_obj));
var chunk__19340_20215 = null;
var count__19341_20216 = (0);
var i__19342_20217 = (0);
while(true){
if((i__19342_20217 < count__19341_20216)){
var child_20219 = chunk__19340_20215.cljs$core$IIndexed$_nth$arity$2(null,i__19342_20217);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_20219,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_20219,ev,notify_fn));


var G__20220 = seq__19339_20214;
var G__20222 = chunk__19340_20215;
var G__20223 = count__19341_20216;
var G__20224 = (i__19342_20217 + (1));
seq__19339_20214 = G__20220;
chunk__19340_20215 = G__20222;
count__19341_20216 = G__20223;
i__19342_20217 = G__20224;
continue;
} else {
var temp__5804__auto___20225 = cljs.core.seq(seq__19339_20214);
if(temp__5804__auto___20225){
var seq__19339_20226__$1 = temp__5804__auto___20225;
if(cljs.core.chunked_seq_QMARK_(seq__19339_20226__$1)){
var c__5568__auto___20227 = cljs.core.chunk_first(seq__19339_20226__$1);
var G__20228 = cljs.core.chunk_rest(seq__19339_20226__$1);
var G__20229 = c__5568__auto___20227;
var G__20230 = cljs.core.count(c__5568__auto___20227);
var G__20231 = (0);
seq__19339_20214 = G__20228;
chunk__19340_20215 = G__20229;
count__19341_20216 = G__20230;
i__19342_20217 = G__20231;
continue;
} else {
var child_20233 = cljs.core.first(seq__19339_20226__$1);
(shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3 ? shadow.object.do_notify_tree.cljs$core$IFn$_invoke$arity$3(child_20233,ev,notify_fn) : shadow.object.do_notify_tree.call(null,child_20233,ev,notify_fn));


var G__20234 = cljs.core.next(seq__19339_20226__$1);
var G__20235 = null;
var G__20236 = (0);
var G__20237 = (0);
seq__19339_20214 = G__20234;
chunk__19340_20215 = G__20235;
count__19341_20216 = G__20236;
i__19342_20217 = G__20237;
continue;
}
} else {
}
}
break;
}

return (notify_fn.cljs$core$IFn$_invoke$arity$1 ? notify_fn.cljs$core$IFn$_invoke$arity$1(current_obj) : notify_fn.call(null,current_obj));
});
shadow.object.notify_tree_BANG_ = (function shadow$object$notify_tree_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20239 = arguments.length;
var i__5770__auto___20240 = (0);
while(true){
if((i__5770__auto___20240 < len__5769__auto___20239)){
args__5775__auto__.push((arguments[i__5770__auto___20240]));

var G__20241 = (i__5770__auto___20240 + (1));
i__5770__auto___20240 = G__20241;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.object.notify_tree_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var notify_fn = (function (obj){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,obj,ev,args);
});
return shadow.object.do_notify_tree(oref,ev,notify_fn);
}));

(shadow.object.notify_tree_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_tree_BANG_.cljs$lang$applyTo = (function (seq19355){
var G__19360 = cljs.core.first(seq19355);
var seq19355__$1 = cljs.core.next(seq19355);
var G__19361 = cljs.core.first(seq19355__$1);
var seq19355__$2 = cljs.core.next(seq19355__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19360,G__19361,seq19355__$2);
}));

shadow.object.notify_down_BANG_ = shadow.object.notify_tree_BANG_;
shadow.object.notify_up_BANG_ = (function shadow$object$notify_up_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20245 = arguments.length;
var i__5770__auto___20246 = (0);
while(true){
if((i__5770__auto___20246 < len__5769__auto___20245)){
args__5775__auto__.push((arguments[i__5770__auto___20246]));

var G__20248 = (i__5770__auto___20246 + (1));
i__5770__auto___20246 = G__20248;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.object.notify_up_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,ev,args){
var current = shadow.object.get_parent(oref);
while(true){
if(cljs.core.truth_(current)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$4(shadow.object.notify_BANG_,current,ev,args);

var G__20250 = shadow.object.get_parent(current);
current = G__20250;
continue;
} else {
return null;
}
break;
}
}));

(shadow.object.notify_up_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.notify_up_BANG_.cljs$lang$applyTo = (function (seq19375){
var G__19376 = cljs.core.first(seq19375);
var seq19375__$1 = cljs.core.next(seq19375);
var G__19377 = cljs.core.first(seq19375__$1);
var seq19375__$2 = cljs.core.next(seq19375__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19376,G__19377,seq19375__$2);
}));

shadow.object.update_BANG_ = (function shadow$object$update_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20255 = arguments.length;
var i__5770__auto___20256 = (0);
while(true){
if((i__5770__auto___20256 < len__5769__auto___20255)){
args__5775__auto__.push((arguments[i__5770__auto___20256]));

var G__20257 = (i__5770__auto___20256 + (1));
i__5770__auto___20256 = G__20257;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (oref,update_fn,args){
if(cljs.core.fn_QMARK_(update_fn)){
} else {
throw ["update! expects a fn as second arg, not ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([update_fn], 0))].join('');
}

var id = shadow.object._id(oref);
var data = shadow.object._data(oref);
var work_fn = (function (data__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(update_fn,data__$1,args);
});
return shadow.object._update(oref,work_fn);
}));

(shadow.object.update_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.update_BANG_.cljs$lang$applyTo = (function (seq19387){
var G__19388 = cljs.core.first(seq19387);
var seq19387__$1 = cljs.core.next(seq19387);
var G__19389 = cljs.core.first(seq19387__$1);
var seq19387__$2 = cljs.core.next(seq19387__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19388,G__19389,seq19387__$2);
}));

shadow.object.return_value = (function shadow$object$return_value(oref,return_value){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360),return_value], 0));
});
shadow.object.set_parent_BANG_ = (function shadow$object$set_parent_BANG_(child,parent){
var child_id = shadow.object._id(child);
var parent_id = shadow.object._id(parent);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instance_parent,cljs.core.assoc,child_id,parent_id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(shadow.object.instance_children,(function (x){
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x,parent_id,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,child_id));
}));

return true;
});
shadow.object.dom_destroy = (function shadow$object$dom_destroy(this$,cause){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause,new cljs.core.Keyword(null,"parent","parent",-878878779))){
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
} else {
var temp__5802__auto__ = shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(this$,new cljs.core.Keyword("dom","remove","dom/remove",-131527420));
if(cljs.core.truth_(temp__5802__auto__)){
var custom_remove = temp__5802__auto__;
var G__19394 = this$;
var G__19395 = new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$);
return (custom_remove.cljs$core$IFn$_invoke$arity$2 ? custom_remove.cljs$core$IFn$_invoke$arity$2(G__19394,G__19395) : custom_remove.call(null,G__19394,G__19395));
} else {
return shadow.dom.remove(new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(this$));
}
}
});
shadow.object.destroy_BANG_ = (function shadow$object$destroy_BANG_(var_args){
var G__19398 = arguments.length;
switch (G__19398) {
case 1:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (oref){
return shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword(null,"direct","direct",-1775717856));
}));

(shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,cause){
return shadow.object._destroy_BANG_(oref,cause);
}));

(shadow.object.destroy_BANG_.cljs$lang$maxFixedArity = 2);

shadow.object.bind_dom_events = (function shadow$object$bind_dom_events(oref,dom,dom_events){
if((cljs.core.rem(cljs.core.count(dom_events),(2)) === (0))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object defined invalid event",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"object-type","object-type",-1889869015),shadow.object._type(oref),new cljs.core.Keyword("dom","events","dom/events",1793437527),dom_events], null));
}

var seq__19403 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),dom_events));
var chunk__19404 = null;
var count__19405 = (0);
var i__19406 = (0);
while(true){
if((i__19406 < count__19405)){
var vec__19427 = chunk__19404.cljs$core$IIndexed$_nth$arity$2(null,i__19406);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19427,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19427,(1),null);
var ev_def = vec__19427;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_20271__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__19403,chunk__19404,count__19405,i__19406,vec__19427,ev,handler,ev_def){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__19403,chunk__19404,count__19405,i__19406,vec__19427,ev,handler,ev_def))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__19403,chunk__19404,count__19405,i__19406,handler_20271__$1,vec__19427,ev,handler,ev_def){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_20271__$1.cljs$core$IFn$_invoke$arity$3 ? handler_20271__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_20271__$1.call(null,oref,e,el));
});})(seq__19403,chunk__19404,count__19405,i__19406,handler_20271__$1,vec__19427,ev,handler,ev_def))
);


var G__20273 = seq__19403;
var G__20274 = chunk__19404;
var G__20275 = count__19405;
var G__20276 = (i__19406 + (1));
seq__19403 = G__20273;
chunk__19404 = G__20274;
count__19405 = G__20275;
i__19406 = G__20276;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19403);
if(temp__5804__auto__){
var seq__19403__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19403__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19403__$1);
var G__20277 = cljs.core.chunk_rest(seq__19403__$1);
var G__20278 = c__5568__auto__;
var G__20279 = cljs.core.count(c__5568__auto__);
var G__20280 = (0);
seq__19403 = G__20277;
chunk__19404 = G__20278;
count__19405 = G__20279;
i__19406 = G__20280;
continue;
} else {
var vec__19472 = cljs.core.first(seq__19403__$1);
var ev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19472,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19472,(1),null);
var ev_def = vec__19472;
if((handler == null)){
throw ["ev with nil handler ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ev], 0))].join('');
} else {
}

var handler_20284__$1 = (((handler instanceof cljs.core.Keyword))?((function (seq__19403,chunk__19404,count__19405,i__19406,vec__19472,ev,handler,ev_def,seq__19403__$1,temp__5804__auto__){
return (function (this$,e,el){
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,handler,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e,el], 0));
});})(seq__19403,chunk__19404,count__19405,i__19406,vec__19472,ev,handler,ev_def,seq__19403__$1,temp__5804__auto__))
:handler);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(dom,ev,((function (seq__19403,chunk__19404,count__19405,i__19406,handler_20284__$1,vec__19472,ev,handler,ev_def,seq__19403__$1,temp__5804__auto__){
return (function shadow$object$bind_dom_events_$_dom_event_handler(e,el){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("A",el.tagName)){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);
} else {
}

return (handler_20284__$1.cljs$core$IFn$_invoke$arity$3 ? handler_20284__$1.cljs$core$IFn$_invoke$arity$3(oref,e,el) : handler_20284__$1.call(null,oref,e,el));
});})(seq__19403,chunk__19404,count__19405,i__19406,handler_20284__$1,vec__19472,ev,handler,ev_def,seq__19403__$1,temp__5804__auto__))
);


var G__20297 = cljs.core.next(seq__19403__$1);
var G__20298 = null;
var G__20299 = (0);
var G__20300 = (0);
seq__19403 = G__20297;
chunk__19404 = G__20298;
count__19405 = G__20299;
i__19406 = G__20300;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.object.reaction_merge = (function shadow$object$reaction_merge(result,p__19512){
var vec__19514 = p__19512;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19514,(0),null);
var handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19514,(1),null);
if(cljs.core.truth_((function (){var and__5043__auto__ = event;
if(cljs.core.truth_(and__5043__auto__)){
return handler;
} else {
return and__5043__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid reaction",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}

var current = cljs.core.get.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.List.EMPTY);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,event,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current,handler));
});
shadow.object.merge_reactions = (function shadow$object$merge_reactions(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behaviors must be vectors",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(behavior))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid behavior",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.reaction_merge,result,cljs.core.reverse(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),behavior)));
});
shadow.object.merge_behaviors = (function shadow$object$merge_behaviors(result,behavior){
if(cljs.core.sequential_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,behavior);
} else {
if(cljs.core.map_QMARK_(behavior)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(result,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"watch","watch",380988277)], null),(function (watches){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(watches,new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("dom","events","dom/events",1793437527)], null),(function (default$){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(default$,new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(behavior,cljs.core.PersistentVector.EMPTY)));
}));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("behavior not understood",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"behavior","behavior",1202392908),behavior], null));

}
}
});
shadow.object.define = (function shadow$object$define(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20320 = arguments.length;
var i__5770__auto___20321 = (0);
while(true){
if((i__5770__auto___20321 < len__5769__auto___20320)){
args__5775__auto__.push((arguments[i__5770__auto___20321]));

var G__20322 = (i__5770__auto___20321 + (1));
i__5770__auto___20321 = G__20322;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.object.define.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.object.define.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
if((id instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("object id needs to be a keyword",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.even_QMARK_(cljs.core.count(args))){
} else {
throw ["invalid object definition ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," args: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([args], 0))].join('');
}

if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),id)){
console.warn(["object already defined ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));
} else {
}

try{var odef = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,args);
var reactions = shadow.object.merge_reactions(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY));
var odef__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(odef,new cljs.core.Keyword("shadow.object","id","shadow.object/id",-647954841),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),reactions], 0));
var odef__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(shadow.object.merge_behaviors,odef__$1,cljs.core.reverse(new cljs.core.Keyword(null,"behaviors","behaviors",120724909).cljs$core$IFn$_invoke$arity$2(odef__$1,cljs.core.PersistentVector.EMPTY)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.object_defs,cljs.core.assoc,id,odef__$2);

return odef__$2;
}catch (e19691){if((e19691 instanceof Object)){
var e = e19691;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("failed to define object",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
} else {
throw e19691;

}
}}));

(shadow.object.define.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.object.define.cljs$lang$applyTo = (function (seq19648){
var G__19649 = cljs.core.first(seq19648);
var seq19648__$1 = cljs.core.next(seq19648);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19649,seq19648__$1);
}));

shadow.object.merge_defaults = (function shadow$object$merge_defaults(data,type){
var defaults = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"defaults","defaults",976027214)], null));
if((defaults == null)){
return data;
} else {
if(cljs.core.map_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,data], 0));
} else {
if(cljs.core.fn_QMARK_(defaults)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(defaults.cljs$core$IFn$_invoke$arity$0 ? defaults.cljs$core$IFn$_invoke$arity$0() : defaults.call(null)),data], 0));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid object defaults",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"defaults","defaults",976027214),defaults,new cljs.core.Keyword(null,"type","type",1174270348),type], null));

}
}
}
});
shadow.object.make_dom = (function shadow$object$make_dom(var_args){
var G__19717 = arguments.length;
switch (G__19717) {
case 3:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$3 = (function (oref,dom_key,events_key){
return shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4(oref,dom_key,events_key,null);
}));

(shadow.object.make_dom.cljs$core$IFn$_invoke$arity$4 = (function (oref,dom_key,events_key,value){
var dom_fn = (((dom_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$2(oref,dom_key):dom_key);
var events = (((events_key instanceof cljs.core.Keyword))?shadow.object.get_type_attr.cljs$core$IFn$_invoke$arity$3(oref,events_key,cljs.core.PersistentVector.EMPTY):events_key);
var dom = (function (){var G__19735 = (dom_fn.cljs$core$IFn$_invoke$arity$2 ? dom_fn.cljs$core$IFn$_invoke$arity$2(oref,value) : dom_fn.call(null,oref,value));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__19735) : shadow.dom.build.call(null,G__19735));
})();
shadow.object.bind_dom_events(oref,dom,events);

return dom;
}));

(shadow.object.make_dom.cljs$lang$maxFixedArity = 4);

shadow.object.alive_QMARK_ = (function shadow$object$alive_QMARK_(obj){
return cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.instances),shadow.object._id(obj));
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
shadow.object.Watch = (function (key,handler,__meta,__extmap,__hash){
this.key = key;
this.handler = handler;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.object.Watch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k19746,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__19762 = k19746;
var G__19762__$1 = (((G__19762 instanceof cljs.core.Keyword))?G__19762.fqn:null);
switch (G__19762__$1) {
case "key":
return self__.key;

break;
case "handler":
return self__.handler;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19746,else__5346__auto__);

}
}));

(shadow.object.Watch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__19779){
var vec__19786 = p__19779;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19786,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19786,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.object.Watch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.object.Watch{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"key","key",-1516042587),self__.key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler],null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__19745){
var self__ = this;
var G__19745__$1 = this;
return (new cljs.core.RecordIter((0),G__19745__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"handler","handler",-195596612)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.object.Watch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.object.Watch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-17677043 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.object.Watch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this19747,other19748){
var self__ = this;
var this19747__$1 = this;
return (((!((other19748 == null)))) && ((((this19747__$1.constructor === other19748.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19747__$1.key,other19748.key)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19747__$1.handler,other19748.handler)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this19747__$1.__extmap,other19748.__extmap)))))))));
}));

(shadow.object.Watch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),null,new cljs.core.Keyword(null,"handler","handler",-195596612),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k19746){
var self__ = this;
var this__5350__auto____$1 = this;
var G__19821 = k19746;
var G__19821__$1 = (((G__19821 instanceof cljs.core.Keyword))?G__19821.fqn:null);
switch (G__19821__$1) {
case "key":
case "handler":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k19746);

}
}));

(shadow.object.Watch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__19745){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__19822 = cljs.core.keyword_identical_QMARK_;
var expr__19823 = k__5352__auto__;
if(cljs.core.truth_((pred__19822.cljs$core$IFn$_invoke$arity$2 ? pred__19822.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587),expr__19823) : pred__19822.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),expr__19823)))){
return (new shadow.object.Watch(G__19745,self__.handler,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__19822.cljs$core$IFn$_invoke$arity$2 ? pred__19822.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"handler","handler",-195596612),expr__19823) : pred__19822.call(null,new cljs.core.Keyword(null,"handler","handler",-195596612),expr__19823)))){
return (new shadow.object.Watch(self__.key,G__19745,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.object.Watch(self__.key,self__.handler,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__19745),null));
}
}
}));

(shadow.object.Watch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"key","key",-1516042587),self__.key,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"handler","handler",-195596612),self__.handler,null))], null),self__.__extmap));
}));

(shadow.object.Watch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__19745){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.object.Watch(self__.key,self__.handler,G__19745,self__.__extmap,self__.__hash));
}));

(shadow.object.Watch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.object.Watch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"key","key",124488940,null),new cljs.core.Symbol(null,"handler","handler",1444934915,null)], null);
}));

(shadow.object.Watch.cljs$lang$type = true);

(shadow.object.Watch.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.object/Watch",null,(1),null));
}));

(shadow.object.Watch.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.object/Watch");
}));

/**
 * Positional factory function for shadow.object/Watch.
 */
shadow.object.__GT_Watch = (function shadow$object$__GT_Watch(key,handler){
return (new shadow.object.Watch(key,handler,null,null,null));
});

/**
 * Factory function for shadow.object/Watch, taking a map of keywords to field values.
 */
shadow.object.map__GT_Watch = (function shadow$object$map__GT_Watch(G__19749){
var extmap__5385__auto__ = (function (){var G__19835 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19749,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612)], 0));
if(cljs.core.record_QMARK_(G__19749)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__19835);
} else {
return G__19835;
}
})();
return (new shadow.object.Watch(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(G__19749),new cljs.core.Keyword(null,"handler","handler",-195596612).cljs$core$IFn$_invoke$arity$1(G__19749),null,cljs.core.not_empty(extmap__5385__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IEquiv}
 * @implements {shadow.object.IObject}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {shadow.dom.SVGElement}
 * @implements {cljs.core.ILookup}
*/
shadow.object.ObjectRef = (function (id,type,data,watches,result_chan){
this.id = id;
this.type = type;
this.data = data;
this.watches = watches;
this.result_chan = result_chan;
this.cljs$lang$protocol_mask$partition0$ = 2149613824;
this.cljs$lang$protocol_mask$partition1$ = 2;
});
(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.result_chan,handler);
}));

(shadow.object.ObjectRef.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([this$], 0));
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.data,k);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,d){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent","parent",-878878779),k)){
return shadow.object.get_parent(this$__$1);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.data,k,d);
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._write(writer,["#<ObjectRef {:id ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id),", :type ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.type),"}>"].join(''));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var self__ = this;
var this$__$1 = this;
return (((other instanceof shadow.object.ObjectRef)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this$__$1.shadow$object$IObject$_id$arity$1(null),shadow.object._id(other))));
}));

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311).cljs$core$IFn$_invoke$arity$1(self__.data);
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (this$,oldval,newval){
var self__ = this;
var this$__$1 = this;
throw (new Error("who be calling?"));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (this$,key,f){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.watches,(new shadow.object.Watch(key,f,null,null,null))));
}));

(shadow.object.ObjectRef.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (this$,key){
var self__ = this;
var this$__$1 = this;
return (self__.watches = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19837_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(p1__19837_SHARP_));
}),self__.watches));
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_id$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.id;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_type$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.type;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_data$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_update$arity$2 = (function (this$,update_fn){
var self__ = this;
var this$__$1 = this;
var old = self__.data;
var new$ = (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(self__.data) : update_fn.call(null,self__.data));
(self__.data = new$);

var seq__19907 = cljs.core.seq(self__.watches);
var chunk__19908 = null;
var count__19909 = (0);
var i__19910 = (0);
while(true){
if((i__19910 < count__19909)){
var map__19917 = chunk__19908.cljs$core$IIndexed$_nth$arity$2(null,i__19910);
var map__19917__$1 = cljs.core.__destructure_map(map__19917);
var watch = map__19917__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19917__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19917__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__20400 = seq__19907;
var G__20401 = chunk__19908;
var G__20402 = count__19909;
var G__20403 = (i__19910 + (1));
seq__19907 = G__20400;
chunk__19908 = G__20401;
count__19909 = G__20402;
i__19910 = G__20403;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__19907);
if(temp__5804__auto__){
var seq__19907__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19907__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19907__$1);
var G__20404 = cljs.core.chunk_rest(seq__19907__$1);
var G__20405 = c__5568__auto__;
var G__20406 = cljs.core.count(c__5568__auto__);
var G__20407 = (0);
seq__19907 = G__20404;
chunk__19908 = G__20405;
count__19909 = G__20406;
i__19910 = G__20407;
continue;
} else {
var map__19923 = cljs.core.first(seq__19907__$1);
var map__19923__$1 = cljs.core.__destructure_map(map__19923);
var watch = map__19923__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19923__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19923__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(shadow.object.alive_QMARK_(this$__$1)){
(handler.cljs$core$IFn$_invoke$arity$4 ? handler.cljs$core$IFn$_invoke$arity$4(key,this$__$1,old,new$) : handler.call(null,key,this$__$1,old,new$));
} else {
}


var G__20408 = cljs.core.next(seq__19907__$1);
var G__20409 = null;
var G__20410 = (0);
var G__20411 = (0);
seq__19907 = G__20408;
chunk__19908 = G__20409;
count__19909 = G__20410;
i__19910 = G__20411;
continue;
}
} else {
return null;
}
}
break;
}
}));

(shadow.object.ObjectRef.prototype.shadow$object$IObject$_destroy_BANG_$arity$2 = (function (this$,cause){
var self__ = this;
var this$__$1 = this;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.instance_parent),self__.id);
var seq__19927_20413 = cljs.core.seq(shadow.object.get_children(this$__$1));
var chunk__19928_20414 = null;
var count__19929_20415 = (0);
var i__19930_20416 = (0);
while(true){
if((i__19930_20416 < count__19929_20415)){
var child_20417 = chunk__19928_20414.cljs$core$IIndexed$_nth$arity$2(null,i__19930_20416);
shadow.object._destroy_BANG_(child_20417,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__20418 = seq__19927_20413;
var G__20419 = chunk__19928_20414;
var G__20420 = count__19929_20415;
var G__20421 = (i__19930_20416 + (1));
seq__19927_20413 = G__20418;
chunk__19928_20414 = G__20419;
count__19929_20415 = G__20420;
i__19930_20416 = G__20421;
continue;
} else {
var temp__5804__auto___20423 = cljs.core.seq(seq__19927_20413);
if(temp__5804__auto___20423){
var seq__19927_20424__$1 = temp__5804__auto___20423;
if(cljs.core.chunked_seq_QMARK_(seq__19927_20424__$1)){
var c__5568__auto___20425 = cljs.core.chunk_first(seq__19927_20424__$1);
var G__20426 = cljs.core.chunk_rest(seq__19927_20424__$1);
var G__20427 = c__5568__auto___20425;
var G__20428 = cljs.core.count(c__5568__auto___20425);
var G__20429 = (0);
seq__19927_20413 = G__20426;
chunk__19928_20414 = G__20427;
count__19929_20415 = G__20428;
i__19930_20416 = G__20429;
continue;
} else {
var child_20431 = cljs.core.first(seq__19927_20424__$1);
shadow.object._destroy_BANG_(child_20431,new cljs.core.Keyword(null,"parent","parent",-878878779));


var G__20433 = cljs.core.next(seq__19927_20424__$1);
var G__20434 = null;
var G__20435 = (0);
var G__20436 = (0);
seq__19927_20413 = G__20433;
chunk__19928_20414 = G__20434;
count__19929_20415 = G__20435;
i__19930_20416 = G__20436;
continue;
}
} else {
}
}
break;
}

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$__$1,new cljs.core.Keyword(null,"destroy","destroy",-843660405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cause], 0));

shadow.object.dom_destroy(this$__$1,cause);

var return_value_20443 = new cljs.core.Keyword("shadow.object","return-value","shadow.object/return-value",1397593360).cljs$core$IFn$_invoke$arity$1(this$__$1);
if((return_value_20443 == null)){
} else {
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(self__.result_chan,return_value_20443);
}

cljs.core.async.close_BANG_(self__.result_chan);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instances,cljs.core.dissoc,self__.id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(shadow.object.instance_parent,cljs.core.dissoc,self__.id);

if(cljs.core.truth_(parent_id)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(shadow.object.instance_children,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null),cljs.core.disj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0));
} else {
return null;
}
}));

(shadow.object.ObjectRef.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.data;
}));

(shadow.object.ObjectRef.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"watches","watches",1367433992,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"result-chan","result-chan",3070926,null)], null);
}));

(shadow.object.ObjectRef.cljs$lang$type = true);

(shadow.object.ObjectRef.cljs$lang$ctorStr = "shadow.object/ObjectRef");

(shadow.object.ObjectRef.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.object/ObjectRef");
}));

/**
 * Positional factory function for shadow.object/ObjectRef.
 */
shadow.object.__GT_ObjectRef = (function shadow$object$__GT_ObjectRef(id,type,data,watches,result_chan){
return (new shadow.object.ObjectRef(id,type,data,watches,result_chan));
});

shadow.object.add_reaction_BANG_ = (function shadow$object$add_reaction_BANG_(var_args){
var G__19950 = arguments.length;
switch (G__19950) {
case 3:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (oref,ev,handler_fn){
return shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev,handler_fn], null));
}));

(shadow.object.add_reaction_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (oref,list){
return shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.update_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633)], null),shadow.object.merge_reactions,list], 0));
}));

(shadow.object.add_reaction_BANG_.cljs$lang$maxFixedArity = 3);

shadow.object.bind_change = (function shadow$object$bind_change(var_args){
var G__19957 = arguments.length;
switch (G__19957) {
case 3:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,callback){
return shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4(oref,attr,callback,cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind-change"));
}));

(shadow.object.bind_change.cljs$core$IFn$_invoke$arity$4 = (function (oref,attr,callback,watch_key){
if((((!((oref == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === oref.shadow$object$IObject$))))?true:(((!oref.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref):false)):cljs.core.native_satisfies_QMARK_(shadow.object.IObject,oref))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("binding currently only supports shadow objects, other atoms might leak, may add later",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref,new cljs.core.Keyword(null,"attr","attr",-604132353),attr], null));
}

var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
return cljs.core.add_watch(oref,watch_key,(function shadow$object$bind_change_watch(_,___$1,old,new$){
var ov = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old,attr__$1);
var nv = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(new$,attr__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ov,nv)){
return null;
} else {
return (callback.cljs$core$IFn$_invoke$arity$2 ? callback.cljs$core$IFn$_invoke$arity$2(ov,nv) : callback.call(null,ov,nv));
}
}));
}));

(shadow.object.bind_change.cljs$lang$maxFixedArity = 4);

shadow.object.dom_enter = (function shadow$object$dom_enter(parent,child){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(parent,child);

if(cljs.core.truth_(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))){
return shadow.object.notify_tree_BANG_(child,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
} else {
return null;
}
});
shadow.object.create = (function shadow$object$create(var_args){
var args__5775__auto__ = [];
var len__5769__auto___20449 = arguments.length;
var i__5770__auto___20450 = (0);
while(true){
if((i__5770__auto___20450 < len__5769__auto___20449)){
args__5775__auto__.push((arguments[i__5770__auto___20450]));

var G__20451 = (i__5770__auto___20450 + (1));
i__5770__auto___20450 = G__20451;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.object.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.object.create.cljs$core$IFn$_invoke$arity$variadic = (function (type,args,node_children){
if(cljs.core.contains_QMARK_(cljs.core.deref(shadow.object.object_defs),type)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["cannot create unknown child type: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

if(cljs.core.map_QMARK_(args)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("so/create second arg must be a map",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"args","args",1315556576),args], null));
}

var oid = shadow.object.next_id();
var parent = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(args);
var result_chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var odef = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.object.object_defs),type);
var obj = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(shadow.object.merge_defaults(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(args,new cljs.core.Keyword("shadow.object","object-id","shadow.object/object-id",-685993804),oid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.get.cljs$core$IFn$_invoke$arity$3(odef,new cljs.core.Keyword("shadow.object","reactions","shadow.object/reactions",1966199633),cljs.core.PersistentArrayMap.EMPTY)], 0)),type),new cljs.core.Keyword(null,"parent","parent",-878878779),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"dom","dom",-1236537922)], 0));
var oref = (new shadow.object.ObjectRef(oid,type,obj,cljs.core.PersistentVector.EMPTY,result_chan));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shadow.object.instances,cljs.core.assoc,oid,oref);

if(cljs.core.truth_(parent)){
shadow.object.set_parent_BANG_(oref,parent);
} else {
}

shadow.object.notify_BANG_(oref,new cljs.core.Keyword(null,"init","init",-1875481434));

var dom_events_20454 = new cljs.core.Keyword("dom","events","dom/events",1793437527).cljs$core$IFn$_invoke$arity$2(odef,cljs.core.PersistentVector.EMPTY);
var temp__5802__auto___20455 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(args);
if(cljs.core.truth_(temp__5802__auto___20455)){
var dom_20456 = temp__5802__auto___20455;
shadow.dom.set_data(dom_20456,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.bind_dom_events(oref,dom_20456,dom_events_20454);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_20456], 0));

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_20456], 0));
} else {
var temp__5804__auto___20457 = new cljs.core.Keyword(null,"dom","dom",-1236537922).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5804__auto___20457)){
var dom_fn_20458 = temp__5804__auto___20457;
var dom_20459 = (function (){var G__19993 = (dom_fn_20458.cljs$core$IFn$_invoke$arity$2 ? dom_fn_20458.cljs$core$IFn$_invoke$arity$2(oref,node_children) : dom_fn_20458.call(null,oref,node_children));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__19993) : shadow.dom.build.call(null,G__19993));
})();
shadow.dom.set_data(dom_20459,new cljs.core.Keyword(null,"oid","oid",-768692334),oid);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("shadow.object","dom","shadow.object/dom",-1238263311),dom_20459], 0));

shadow.object.bind_dom_events(oref,dom_20459,dom_events_20454);

shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(oref,new cljs.core.Keyword("dom","init","dom/init",-1875647652),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dom_20459], 0));
} else {
}
}

var temp__5804__auto___20460 = new cljs.core.Keyword(null,"watch","watch",380988277).cljs$core$IFn$_invoke$arity$1(odef);
if(cljs.core.truth_(temp__5804__auto___20460)){
var watches_20461 = temp__5804__auto___20460;
var seq__19996_20462 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),watches_20461));
var chunk__19997_20463 = null;
var count__19998_20464 = (0);
var i__19999_20465 = (0);
while(true){
if((i__19999_20465 < count__19998_20464)){
var vec__20009_20467 = chunk__19997_20463.cljs$core$IIndexed$_nth$arity$2(null,i__19999_20465);
var attr_20468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20009_20467,(0),null);
var handler_20469 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20009_20467,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_20468,((function (seq__19996_20462,chunk__19997_20463,count__19998_20464,i__19999_20465,vec__20009_20467,attr_20468,handler_20469,watches_20461,temp__5804__auto___20460,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_20469.cljs$core$IFn$_invoke$arity$3 ? handler_20469.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_20469.call(null,oref,old,new$));
});})(seq__19996_20462,chunk__19997_20463,count__19998_20464,i__19999_20465,vec__20009_20467,attr_20468,handler_20469,watches_20461,temp__5804__auto___20460,oid,parent,result_chan,odef,obj,oref))
);


var G__20470 = seq__19996_20462;
var G__20471 = chunk__19997_20463;
var G__20472 = count__19998_20464;
var G__20473 = (i__19999_20465 + (1));
seq__19996_20462 = G__20470;
chunk__19997_20463 = G__20471;
count__19998_20464 = G__20472;
i__19999_20465 = G__20473;
continue;
} else {
var temp__5804__auto___20475__$1 = cljs.core.seq(seq__19996_20462);
if(temp__5804__auto___20475__$1){
var seq__19996_20476__$1 = temp__5804__auto___20475__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19996_20476__$1)){
var c__5568__auto___20477 = cljs.core.chunk_first(seq__19996_20476__$1);
var G__20478 = cljs.core.chunk_rest(seq__19996_20476__$1);
var G__20479 = c__5568__auto___20477;
var G__20480 = cljs.core.count(c__5568__auto___20477);
var G__20481 = (0);
seq__19996_20462 = G__20478;
chunk__19997_20463 = G__20479;
count__19998_20464 = G__20480;
i__19999_20465 = G__20481;
continue;
} else {
var vec__20014_20482 = cljs.core.first(seq__19996_20476__$1);
var attr_20483 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20014_20482,(0),null);
var handler_20484 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20014_20482,(1),null);
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr_20483,((function (seq__19996_20462,chunk__19997_20463,count__19998_20464,i__19999_20465,vec__20014_20482,attr_20483,handler_20484,seq__19996_20476__$1,temp__5804__auto___20475__$1,watches_20461,temp__5804__auto___20460,oid,parent,result_chan,odef,obj,oref){
return (function (old,new$){
return (handler_20484.cljs$core$IFn$_invoke$arity$3 ? handler_20484.cljs$core$IFn$_invoke$arity$3(oref,old,new$) : handler_20484.call(null,oref,old,new$));
});})(seq__19996_20462,chunk__19997_20463,count__19998_20464,i__19999_20465,vec__20014_20482,attr_20483,handler_20484,seq__19996_20476__$1,temp__5804__auto___20475__$1,watches_20461,temp__5804__auto___20460,oid,parent,result_chan,odef,obj,oref))
);


var G__20485 = cljs.core.next(seq__19996_20476__$1);
var G__20486 = null;
var G__20487 = (0);
var G__20488 = (0);
seq__19996_20462 = G__20485;
chunk__19997_20463 = G__20486;
count__19998_20464 = G__20487;
i__19999_20465 = G__20488;
continue;
}
} else {
}
}
break;
}
} else {
}

return oref;
}));

(shadow.object.create.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.object.create.cljs$lang$applyTo = (function (seq19976){
var G__19977 = cljs.core.first(seq19976);
var seq19976__$1 = cljs.core.next(seq19976);
var G__19978 = cljs.core.first(seq19976__$1);
var seq19976__$2 = cljs.core.next(seq19976__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19977,G__19978,seq19976__$2);
}));

/**
 * [oref attr node-gen] produces a node via (node-gen new-value)
 * watches obj for changes and replaces the generated node on change (node-gen defaults to str)
 * 
 *   only use if the node has no attached behavior like clicks, use bind with an extra object for those
 */
shadow.object.bind_simple = (function shadow$object$bind_simple(var_args){
var G__20027 = arguments.length;
switch (G__20027) {
case 2:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$2 = (function (oref,attr){
return shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3(oref,attr,cljs.core.str);
}));

(shadow.object.bind_simple.cljs$core$IFn$_invoke$arity$3 = (function (oref,attr,node_gen){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var node_get = (function (p1__20021_SHARP_){
var G__20034 = (node_gen.cljs$core$IFn$_invoke$arity$1 ? node_gen.cljs$core$IFn$_invoke$arity$1(p1__20021_SHARP_) : node_gen.call(null,p1__20021_SHARP_));
return (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(G__20034) : shadow.dom.build.call(null,G__20034));
});
var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(node_get(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1)));
var bind_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$1("bind");
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_node = node_get(new$);
var current_node = cljs.core.deref(node);
shadow.dom.replace_node(current_node,new_node);

return cljs.core.reset_BANG_(node,new_node);
}));

return cljs.core.deref(node);
}));

(shadow.object.bind_simple.cljs$lang$maxFixedArity = 3);

/**
 * bind the given attribute a child item
 *   the item will be recreated whenever the value changes (old one will be destroyed)
 */
shadow.object.bind = (function shadow$object$bind(oref,attr,item_type,item_key,item_attrs){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var curval = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(oref,attr__$1);
var make_child_fn = (function (value){
return shadow.object.create(item_type,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_attrs,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),oref,item_key,value])], 0)));
});
var child = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(make_child_fn(curval));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(oref,attr__$1,(function (old,new$){
var new_child = make_child_fn(new$);
var current_node = cljs.core.deref(child);
shadow.dom.replace_node(current_node,new_child);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(child));

cljs.core.reset_BANG_(child,new_child);

return (shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2 ? shadow.object.notify_down_BANG_.cljs$core$IFn$_invoke$arity$2(new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)) : shadow.object.notify_down_BANG_.call(null,new_child,new cljs.core.Keyword("dom","entered","dom/entered",506699596)));
}));

return cljs.core.deref(child);
});
shadow.object.coll_destroy_children = (function shadow$object$coll_destroy_children(children,c,diff){
var seq__20045_20494 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(c + diff),c));
var chunk__20046_20495 = null;
var count__20047_20496 = (0);
var i__20048_20497 = (0);
while(true){
if((i__20048_20497 < count__20047_20496)){
var obj_20498 = chunk__20046_20495.cljs$core$IIndexed$_nth$arity$2(null,i__20048_20497);
var obj_20499__$1 = shadow.object.get_from_dom(obj_20498);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_20499__$1);


var G__20500 = seq__20045_20494;
var G__20501 = chunk__20046_20495;
var G__20502 = count__20047_20496;
var G__20503 = (i__20048_20497 + (1));
seq__20045_20494 = G__20500;
chunk__20046_20495 = G__20501;
count__20047_20496 = G__20502;
i__20048_20497 = G__20503;
continue;
} else {
var temp__5804__auto___20504 = cljs.core.seq(seq__20045_20494);
if(temp__5804__auto___20504){
var seq__20045_20505__$1 = temp__5804__auto___20504;
if(cljs.core.chunked_seq_QMARK_(seq__20045_20505__$1)){
var c__5568__auto___20506 = cljs.core.chunk_first(seq__20045_20505__$1);
var G__20507 = cljs.core.chunk_rest(seq__20045_20505__$1);
var G__20508 = c__5568__auto___20506;
var G__20509 = cljs.core.count(c__5568__auto___20506);
var G__20510 = (0);
seq__20045_20494 = G__20507;
chunk__20046_20495 = G__20508;
count__20047_20496 = G__20509;
i__20048_20497 = G__20510;
continue;
} else {
var obj_20511 = cljs.core.first(seq__20045_20505__$1);
var obj_20512__$1 = shadow.object.get_from_dom(obj_20511);
shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(obj_20512__$1);


var G__20513 = cljs.core.next(seq__20045_20505__$1);
var G__20514 = null;
var G__20515 = (0);
var G__20516 = (0);
seq__20045_20494 = G__20513;
chunk__20046_20495 = G__20514;
count__20047_20496 = G__20515;
i__20048_20497 = G__20516;
continue;
}
} else {
}
}
break;
}

return cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(children,(0),(c + diff));
});
shadow.object.bind_children = (function shadow$object$bind_children(var_args){
var G__20056 = arguments.length;
switch (G__20056) {
case 5:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$5 = (function (node,parent,attr,item_type,item_key){
return shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6(node,parent,attr,item_type,item_key,(function (p1__20054_SHARP_){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,p1__20054_SHARP_);
}));
}));

(shadow.object.bind_children.cljs$core$IFn$_invoke$arity$6 = (function (node,parent,attr,item_type,item_key,coll_transform){
var attr__$1 = ((cljs.core.sequential_QMARK_(attr))?attr:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null));
var update_children = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
var coll_dom = (shadow.dom.build.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.build.cljs$core$IFn$_invoke$arity$1(node) : shadow.dom.build.call(null,node));
var make_item_fn = (function (p__20065){
var vec__20066 = p__20065;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20066,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20066,(1),null);
var obj = shadow.object.create(item_type,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"parent","parent",-878878779),parent,new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048),attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616),key,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366),item_key,item_key,val]));
shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(obj,item_key,(function (old,new$){
var parent_key = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr__$1,new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(obj));
(shadow.object.log.cljs$core$IFn$_invoke$arity$6 ? shadow.object.log.cljs$core$IFn$_invoke$arity$6("direct child update",parent,obj,key,parent_key,new$) : shadow.object.log.call(null,"direct child update",parent,obj,key,parent_key,new$));

cljs.core.reset_BANG_(update_children,false);

shadow.object.update_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([parent_key,new$], 0));

return cljs.core.reset_BANG_(update_children,true);
}));

return obj;
});
var seq__20069_20526 = cljs.core.seq((function (){var G__20076 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,attr__$1);
return (coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(G__20076) : coll_transform.call(null,G__20076));
})());
var chunk__20070_20527 = null;
var count__20071_20528 = (0);
var i__20072_20529 = (0);
while(true){
if((i__20072_20529 < count__20071_20528)){
var item_20530 = chunk__20070_20527.cljs$core$IIndexed$_nth$arity$2(null,i__20072_20529);
shadow.object.dom_enter(coll_dom,make_item_fn(item_20530));


var G__20531 = seq__20069_20526;
var G__20532 = chunk__20070_20527;
var G__20533 = count__20071_20528;
var G__20534 = (i__20072_20529 + (1));
seq__20069_20526 = G__20531;
chunk__20070_20527 = G__20532;
count__20071_20528 = G__20533;
i__20072_20529 = G__20534;
continue;
} else {
var temp__5804__auto___20535 = cljs.core.seq(seq__20069_20526);
if(temp__5804__auto___20535){
var seq__20069_20536__$1 = temp__5804__auto___20535;
if(cljs.core.chunked_seq_QMARK_(seq__20069_20536__$1)){
var c__5568__auto___20537 = cljs.core.chunk_first(seq__20069_20536__$1);
var G__20538 = cljs.core.chunk_rest(seq__20069_20536__$1);
var G__20539 = c__5568__auto___20537;
var G__20540 = cljs.core.count(c__5568__auto___20537);
var G__20541 = (0);
seq__20069_20526 = G__20538;
chunk__20070_20527 = G__20539;
count__20071_20528 = G__20540;
i__20072_20529 = G__20541;
continue;
} else {
var item_20542 = cljs.core.first(seq__20069_20536__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_20542));


var G__20543 = cljs.core.next(seq__20069_20536__$1);
var G__20544 = null;
var G__20545 = (0);
var G__20546 = (0);
seq__20069_20526 = G__20543;
chunk__20070_20527 = G__20544;
count__20071_20528 = G__20545;
i__20072_20529 = G__20546;
continue;
}
} else {
}
}
break;
}

shadow.object.bind_change.cljs$core$IFn$_invoke$arity$3(parent,attr__$1,(function shadow$object$bind_children_watch(old,new$){
if(cljs.core.truth_(cljs.core.deref(update_children))){
var children = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,shadow.dom.children(coll_dom));
var new_coll = cljs.core.vec((coll_transform.cljs$core$IFn$_invoke$arity$1 ? coll_transform.cljs$core$IFn$_invoke$arity$1(new$) : coll_transform.call(null,new$)));
var count_children = cljs.core.count(children);
var count_new = cljs.core.count(new$);
var diff = (count_new - count_children);
var children__$1 = (((diff < (0)))?shadow.object.coll_destroy_children(children,count_children,diff):children);
var count_children__$1 = (function (){var x__5133__auto__ = count_new;
var y__5134__auto__ = count_children;
return ((x__5133__auto__ < y__5134__auto__) ? x__5133__auto__ : y__5134__auto__);
})();
var n__5636__auto___20547 = count_children__$1;
var idx_20548 = (0);
while(true){
if((idx_20548 < n__5636__auto___20547)){
var cn_20549 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(children__$1,idx_20548);
var cc_20550 = shadow.object.get_from_dom(cn_20549);
var ckey_20551 = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(cc_20550);
var cval_20552 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cc_20550,item_key);
var vec__20084_20553 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new_coll,idx_20548);
var nkey_20554 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20084_20553,(0),null);
var nval_20555 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20084_20553,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ckey_20551,nkey_20554)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cval_20552,nval_20555)))){
} else {
var new_obj_20556 = make_item_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nkey_20554,nval_20555], null));
shadow.dom.replace_node(cn_20549,new_obj_20556);

shadow.object.destroy_BANG_.cljs$core$IFn$_invoke$arity$1(cc_20550);

shadow.object.notify_tree_BANG_(new_obj_20556,new cljs.core.Keyword("dom","entered","dom/entered",506699596));
}

var G__20557 = (idx_20548 + (1));
idx_20548 = G__20557;
continue;
} else {
}
break;
}

if((diff > (0))){
var seq__20089_20558 = cljs.core.seq(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(new_coll,count_children__$1,count_new));
var chunk__20090_20559 = null;
var count__20091_20560 = (0);
var i__20092_20561 = (0);
while(true){
if((i__20092_20561 < count__20091_20560)){
var item_20562 = chunk__20090_20559.cljs$core$IIndexed$_nth$arity$2(null,i__20092_20561);
shadow.object.dom_enter(coll_dom,make_item_fn(item_20562));


var G__20563 = seq__20089_20558;
var G__20564 = chunk__20090_20559;
var G__20565 = count__20091_20560;
var G__20566 = (i__20092_20561 + (1));
seq__20089_20558 = G__20563;
chunk__20090_20559 = G__20564;
count__20091_20560 = G__20565;
i__20092_20561 = G__20566;
continue;
} else {
var temp__5804__auto___20567 = cljs.core.seq(seq__20089_20558);
if(temp__5804__auto___20567){
var seq__20089_20568__$1 = temp__5804__auto___20567;
if(cljs.core.chunked_seq_QMARK_(seq__20089_20568__$1)){
var c__5568__auto___20569 = cljs.core.chunk_first(seq__20089_20568__$1);
var G__20570 = cljs.core.chunk_rest(seq__20089_20568__$1);
var G__20571 = c__5568__auto___20569;
var G__20572 = cljs.core.count(c__5568__auto___20569);
var G__20573 = (0);
seq__20089_20558 = G__20570;
chunk__20090_20559 = G__20571;
count__20091_20560 = G__20572;
i__20092_20561 = G__20573;
continue;
} else {
var item_20574 = cljs.core.first(seq__20089_20568__$1);
shadow.object.dom_enter(coll_dom,make_item_fn(item_20574));


var G__20575 = cljs.core.next(seq__20089_20568__$1);
var G__20576 = null;
var G__20577 = (0);
var G__20578 = (0);
seq__20089_20558 = G__20575;
chunk__20090_20559 = G__20576;
count__20091_20560 = G__20577;
i__20092_20561 = G__20578;
continue;
}
} else {
}
}
break;
}
} else {
}

return shadow.object.notify_BANG_(parent,new cljs.core.Keyword(null,"bind-children-update","bind-children-update",-1610690160));
} else {
return null;
}
}));

return coll_dom;
}));

(shadow.object.bind_children.cljs$lang$maxFixedArity = 6);

shadow.object.remove_in_parent_BANG_ = (function shadow$object$remove_in_parent_BANG_(oref){
var parent = shadow.object.get_parent(oref);
var key = new cljs.core.Keyword("shadow.object","coll-key","shadow.object/coll-key",827543616).cljs$core$IFn$_invoke$arity$1(oref);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(oref,new cljs.core.Keyword("shadow.object","coll-item-key","shadow.object/coll-item-key",1888444366).cljs$core$IFn$_invoke$arity$1(oref));
var path = new cljs.core.Keyword("shadow.object","coll-path","shadow.object/coll-path",1583850048).cljs$core$IFn$_invoke$arity$1(oref);
if(cljs.core.truth_((function (){var and__5043__auto__ = key;
if(cljs.core.truth_(and__5043__auto__)){
return path;
} else {
return and__5043__auto__;
}
})())){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("remove-in-parent! should only be called from items created via so/bind-children",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oref","oref",-1547494840),oref], null));
}

var coll = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(parent,path);
var new_coll = shadow.util.remove_item_from_coll(coll,key,value);
return shadow.object.notify_BANG_.cljs$core$IFn$_invoke$arity$variadic(parent,new cljs.core.Keyword("bind","update","bind/update",1048601733),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path,new_coll], 0));
});
shadow.object.inspect_BANG_ = (function shadow$object$inspect_BANG_(oref){
var G__20106 = "inspect!";
var G__20107 = shadow.object._id(oref);
var G__20108 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.object._type(oref));
var G__20109 = cljs.core.clj__GT_js(cljs.core.deref(shadow.object._data(oref)));
return (shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__20106,G__20107,G__20108,G__20109) : shadow.object.info.call(null,G__20106,G__20107,G__20108,G__20109));
});
shadow.object.dump_BANG_ = (function shadow$object$dump_BANG_(){
(shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- LIVE OBJECTS ------------"));

var seq__20112_20583 = cljs.core.seq(cljs.core.seq(cljs.core.deref(shadow.object.instances)));
var chunk__20113_20584 = null;
var count__20114_20585 = (0);
var i__20115_20586 = (0);
while(true){
if((i__20115_20586 < count__20114_20585)){
var vec__20144_20590 = chunk__20113_20584.cljs$core$IIndexed$_nth$arity$2(null,i__20115_20586);
var id_20591 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20144_20590,(0),null);
var oref_20592 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20144_20590,(1),null);
var G__20147_20598 = "dump";
var G__20148_20599 = id_20591;
var G__20149_20600 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_20592)], 0));
var G__20150_20601 = cljs.core.deref(shadow.object._data(oref_20592));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__20147_20598,G__20148_20599,G__20149_20600,G__20150_20601) : shadow.object.info.call(null,G__20147_20598,G__20148_20599,G__20149_20600,G__20150_20601));


var G__20602 = seq__20112_20583;
var G__20603 = chunk__20113_20584;
var G__20604 = count__20114_20585;
var G__20605 = (i__20115_20586 + (1));
seq__20112_20583 = G__20602;
chunk__20113_20584 = G__20603;
count__20114_20585 = G__20604;
i__20115_20586 = G__20605;
continue;
} else {
var temp__5804__auto___20607 = cljs.core.seq(seq__20112_20583);
if(temp__5804__auto___20607){
var seq__20112_20608__$1 = temp__5804__auto___20607;
if(cljs.core.chunked_seq_QMARK_(seq__20112_20608__$1)){
var c__5568__auto___20609 = cljs.core.chunk_first(seq__20112_20608__$1);
var G__20610 = cljs.core.chunk_rest(seq__20112_20608__$1);
var G__20611 = c__5568__auto___20609;
var G__20612 = cljs.core.count(c__5568__auto___20609);
var G__20613 = (0);
seq__20112_20583 = G__20610;
chunk__20113_20584 = G__20611;
count__20114_20585 = G__20612;
i__20115_20586 = G__20613;
continue;
} else {
var vec__20156_20614 = cljs.core.first(seq__20112_20608__$1);
var id_20615 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20156_20614,(0),null);
var oref_20616 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20156_20614,(1),null);
var G__20159_20617 = "dump";
var G__20160_20618 = id_20615;
var G__20161_20619 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.object._type(oref_20616)], 0));
var G__20162_20620 = cljs.core.deref(shadow.object._data(oref_20616));
(shadow.object.info.cljs$core$IFn$_invoke$arity$4 ? shadow.object.info.cljs$core$IFn$_invoke$arity$4(G__20159_20617,G__20160_20618,G__20161_20619,G__20162_20620) : shadow.object.info.call(null,G__20159_20617,G__20160_20618,G__20161_20619,G__20162_20620));


var G__20621 = cljs.core.next(seq__20112_20608__$1);
var G__20622 = null;
var G__20623 = (0);
var G__20624 = (0);
seq__20112_20583 = G__20621;
chunk__20113_20584 = G__20622;
count__20114_20585 = G__20623;
i__20115_20586 = G__20624;
continue;
}
} else {
}
}
break;
}

return (shadow.object.info.cljs$core$IFn$_invoke$arity$1 ? shadow.object.info.cljs$core$IFn$_invoke$arity$1("--------------- //LIVE OBJECTS ------------") : shadow.object.info.call(null,"--------------- //LIVE OBJECTS ------------"));
});
goog.exportSymbol('shadow.object.dump_BANG_', shadow.object.dump_BANG_);

//# sourceMappingURL=shadow.object.js.map
