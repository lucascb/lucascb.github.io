goog.provide('minesweeper_cljs.core');
minesweeper_cljs.core.dev_setup = (function minesweeper_cljs$core$dev_setup(){
if(minesweeper_cljs.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
minesweeper_cljs.core.mount_root = (function minesweeper_cljs$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper_cljs.views.main_panel], null),root_el);
});
minesweeper_cljs.core.init = (function minesweeper_cljs$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("minesweeper-cljs.events","initialize-db","minesweeper-cljs.events/initialize-db",94519310)], null));

minesweeper_cljs.core.dev_setup();

return minesweeper_cljs.core.mount_root();
});

//# sourceMappingURL=minesweeper_cljs.core.js.map
