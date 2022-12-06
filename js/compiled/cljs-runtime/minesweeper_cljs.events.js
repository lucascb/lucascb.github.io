goog.provide('minesweeper_cljs.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("minesweeper-cljs.events","initialize-db","minesweeper-cljs.events/initialize-db",94519310),(function (_,___$1){
return minesweeper_cljs.db.default_db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"select-pos","select-pos",1517833709),(function (db,p__24601){
var vec__24602 = p__24601;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24602,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24602,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"game-state","game-state",935682735),minesweeper_cljs.game.select_pos(new cljs.core.Keyword(null,"game-state","game-state",935682735).cljs$core$IFn$_invoke$arity$1(db),pos));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flag-pos","flag-pos",-2034348997),(function (db,p__24605){
var vec__24608 = p__24605;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24608,(0),null);
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24608,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"game-state","game-state",935682735),minesweeper_cljs.game.flag_pos(new cljs.core.Keyword(null,"game-state","game-state",935682735).cljs$core$IFn$_invoke$arity$1(db),pos));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"reset-db","reset-db",1514534206),(function (db,p__24621){
var vec__24623 = p__24621;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"game-state","game-state",935682735),minesweeper_cljs.game.get_initial_state((9),(9)));
}));

//# sourceMappingURL=minesweeper_cljs.events.js.map
