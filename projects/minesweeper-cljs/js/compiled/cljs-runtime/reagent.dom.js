goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__23295 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__23297 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__23297);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__23299 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__23300 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__23300);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__23299);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__23295);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__23304 = arguments.length;
switch (G__23304) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__23311 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23311,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23311,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__23321_23358 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__23323_23359 = null;
var count__23324_23360 = (0);
var i__23325_23361 = (0);
while(true){
if((i__23325_23361 < count__23324_23360)){
var vec__23341_23363 = chunk__23323_23359.cljs$core$IIndexed$_nth$arity$2(null,i__23325_23361);
var container_23364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23341_23363,(0),null);
var comp_23365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23341_23363,(1),null);
reagent.dom.re_render_component(comp_23365,container_23364);


var G__23366 = seq__23321_23358;
var G__23367 = chunk__23323_23359;
var G__23368 = count__23324_23360;
var G__23369 = (i__23325_23361 + (1));
seq__23321_23358 = G__23366;
chunk__23323_23359 = G__23367;
count__23324_23360 = G__23368;
i__23325_23361 = G__23369;
continue;
} else {
var temp__5804__auto___23370 = cljs.core.seq(seq__23321_23358);
if(temp__5804__auto___23370){
var seq__23321_23371__$1 = temp__5804__auto___23370;
if(cljs.core.chunked_seq_QMARK_(seq__23321_23371__$1)){
var c__5568__auto___23372 = cljs.core.chunk_first(seq__23321_23371__$1);
var G__23373 = cljs.core.chunk_rest(seq__23321_23371__$1);
var G__23374 = c__5568__auto___23372;
var G__23375 = cljs.core.count(c__5568__auto___23372);
var G__23376 = (0);
seq__23321_23358 = G__23373;
chunk__23323_23359 = G__23374;
count__23324_23360 = G__23375;
i__23325_23361 = G__23376;
continue;
} else {
var vec__23347_23377 = cljs.core.first(seq__23321_23371__$1);
var container_23378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23347_23377,(0),null);
var comp_23379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23347_23377,(1),null);
reagent.dom.re_render_component(comp_23379,container_23378);


var G__23380 = cljs.core.next(seq__23321_23371__$1);
var G__23381 = null;
var G__23382 = (0);
var G__23383 = (0);
seq__23321_23358 = G__23380;
chunk__23323_23359 = G__23381;
count__23324_23360 = G__23382;
i__23325_23361 = G__23383;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
