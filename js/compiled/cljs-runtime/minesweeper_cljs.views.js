goog.provide('minesweeper_cljs.views');
minesweeper_cljs.views.get_button_class = (function minesweeper_cljs$views$get_button_class(revealed,i,j,col){
return ["grid-button",(((!(cljs.core.contains_QMARK_(revealed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))))?"":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(col,new cljs.core.Keyword(null,"mine","mine",-130428525)))?" grid-button-mine":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(col,(0)))?" grid-button-empty":" grid-button-number"
)))].join('');
});
minesweeper_cljs.views.convert_col = (function minesweeper_cljs$views$convert_col(col){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(col,new cljs.core.Keyword(null,"mine","mine",-130428525))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"mine.png"], null)], null);
} else {
return col;
}
});
minesweeper_cljs.views.table_column = (function minesweeper_cljs$views$table_column(revealed,flags,game_over_QMARK_,i,j,col){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),minesweeper_cljs.views.get_button_class(revealed,i,j,col),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-pos","select-pos",1517833709),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)], null));
}),new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),(function (e){
e.preventDefault();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flag-pos","flag-pos",-2034348997),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)], null));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),game_over_QMARK_], null),((cljs.core.contains_QMARK_(revealed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?minesweeper_cljs.views.convert_col(col):((cljs.core.contains_QMARK_(flags,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),"flag.png"], null)], null):""
))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(j)].join('')], null));
});
minesweeper_cljs.views.table_row = (function minesweeper_cljs$views$table_row(revealed,flags,game_over_QMARK_,i,row){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__24643_SHARP_,p2__24644_SHARP_){
return minesweeper_cljs.views.table_column(revealed,flags,game_over_QMARK_,i,p1__24643_SHARP_,p2__24644_SHARP_);
}),row)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null));
});
minesweeper_cljs.views.game_table = (function minesweeper_cljs$views$game_table(grid,revealed,flags,game_over_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__24645_SHARP_,p2__24646_SHARP_){
return minesweeper_cljs.views.table_row(revealed,flags,game_over_QMARK_,p1__24645_SHARP_,p2__24646_SHARP_);
}),grid)], null)], null);
});
minesweeper_cljs.views.game_status = (function minesweeper_cljs$views$game_status(game_over_QMARK_,won_QMARK_,remaining_flags){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),(cljs.core.truth_(game_over_QMARK_)?(cljs.core.truth_(won_QMARK_)?"You won!":"You lost!"):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(remaining_flags)," flags remaining"].join(''))], null);
});
minesweeper_cljs.views.reset_button = (function minesweeper_cljs$views$reset_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"reset-button"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset-db","reset-db",1514534206)], null));
})], null),"Reset"], null)], null);
});
minesweeper_cljs.views.main_panel = (function minesweeper_cljs$views$main_panel(){
var map__24647 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("minesweeper-cljs.subs","game-state","minesweeper-cljs.subs/game-state",-1020814937)], null)));
var map__24647__$1 = cljs.core.__destructure_map(map__24647);
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24647__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var flags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24647__$1,new cljs.core.Keyword(null,"flags","flags",1775418075));
var revealed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24647__$1,new cljs.core.Keyword(null,"revealed","revealed",-1090849585));
var remaining_flags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24647__$1,new cljs.core.Keyword(null,"remaining-flags","remaining-flags",-927257022));
var game_over_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24647__$1,new cljs.core.Keyword(null,"game-over","game-over",-607322695));
var won_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24647__$1,new cljs.core.Keyword(null,"won","won",910394405));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"content"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Minesweeper"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Instructions: Left-click to reveal position and right-click to place a flag. \n           Place all flags where there is a mine to win."], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper_cljs.views.game_table,grid,revealed,flags,game_over_QMARK_], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper_cljs.views.game_status,game_over_QMARK_,won_QMARK_,remaining_flags], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [minesweeper_cljs.views.reset_button], null)], null);
});

//# sourceMappingURL=minesweeper_cljs.views.js.map
