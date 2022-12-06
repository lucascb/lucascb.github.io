goog.provide('minesweeper_cljs.game');
minesweeper_cljs.game.get_random_mines_pos = (function minesweeper_cljs$game$get_random_mines_pos(grid_size,number_of_mines){
var all_pos = (function (){var iter__5523__auto__ = (function minesweeper_cljs$game$get_random_mines_pos_$_iter__24106(s__24107){
return (new cljs.core.LazySeq(null,(function (){
var s__24107__$1 = s__24107;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__24107__$1);
if(temp__5804__auto__){
var s__24107__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24107__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__24107__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__24109 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__24108 = (0);
while(true){
if((i__24108 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__24108);
cljs.core.chunk_append(b__24109,(function (){var iter__5523__auto__ = ((function (i__24108,i,c__5521__auto__,size__5522__auto__,b__24109,s__24107__$2,temp__5804__auto__){
return (function minesweeper_cljs$game$get_random_mines_pos_$_iter__24106_$_iter__24111(s__24112){
return (new cljs.core.LazySeq(null,((function (i__24108,i,c__5521__auto__,size__5522__auto__,b__24109,s__24107__$2,temp__5804__auto__){
return (function (){
var s__24112__$1 = s__24112;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__24112__$1);
if(temp__5804__auto____$1){
var s__24112__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24112__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__24112__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__24114 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__24113 = (0);
while(true){
if((i__24113 < size__5522__auto____$1)){
var j = cljs.core._nth(c__5521__auto____$1,i__24113);
cljs.core.chunk_append(b__24114,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

var G__24260 = (i__24113 + (1));
i__24113 = G__24260;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24114),minesweeper_cljs$game$get_random_mines_pos_$_iter__24106_$_iter__24111(cljs.core.chunk_rest(s__24112__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24114),null);
}
} else {
var j = cljs.core.first(s__24112__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),minesweeper_cljs$game$get_random_mines_pos_$_iter__24106_$_iter__24111(cljs.core.rest(s__24112__$2)));
}
} else {
return null;
}
break;
}
});})(i__24108,i,c__5521__auto__,size__5522__auto__,b__24109,s__24107__$2,temp__5804__auto__))
,null,null));
});})(i__24108,i,c__5521__auto__,size__5522__auto__,b__24109,s__24107__$2,temp__5804__auto__))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(grid_size));
})());

var G__24262 = (i__24108 + (1));
i__24108 = G__24262;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24109),minesweeper_cljs$game$get_random_mines_pos_$_iter__24106(cljs.core.chunk_rest(s__24107__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24109),null);
}
} else {
var i = cljs.core.first(s__24107__$2);
return cljs.core.cons((function (){var iter__5523__auto__ = ((function (i,s__24107__$2,temp__5804__auto__){
return (function minesweeper_cljs$game$get_random_mines_pos_$_iter__24106_$_iter__24118(s__24119){
return (new cljs.core.LazySeq(null,(function (){
var s__24119__$1 = s__24119;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__24119__$1);
if(temp__5804__auto____$1){
var s__24119__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24119__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__24119__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__24121 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__24120 = (0);
while(true){
if((i__24120 < size__5522__auto__)){
var j = cljs.core._nth(c__5521__auto__,i__24120);
cljs.core.chunk_append(b__24121,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null));

var G__24270 = (i__24120 + (1));
i__24120 = G__24270;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24121),minesweeper_cljs$game$get_random_mines_pos_$_iter__24106_$_iter__24118(cljs.core.chunk_rest(s__24119__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24121),null);
}
} else {
var j = cljs.core.first(s__24119__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null),minesweeper_cljs$game$get_random_mines_pos_$_iter__24106_$_iter__24118(cljs.core.rest(s__24119__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(i,s__24107__$2,temp__5804__auto__))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(grid_size));
})(),minesweeper_cljs$game$get_random_mines_pos_$_iter__24106(cljs.core.rest(s__24107__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(grid_size));
})();
return cljs.core.set(cljs.core.take.cljs$core$IFn$_invoke$arity$2(number_of_mines,cljs.core.shuffle(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([all_pos], 0)))));
});
minesweeper_cljs.game.valid_pos_QMARK_ = (function minesweeper_cljs$game$valid_pos_QMARK_(grid_size,p__24124){
var vec__24125 = p__24124;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24125,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24125,(1),null);
return ((((((0) <= x)) && ((x <= (grid_size - (1)))))) && (((((0) <= y)) && ((y <= (grid_size - (1)))))));
});
minesweeper_cljs.game.get_neighbors_of_pos = (function minesweeper_cljs$game$get_neighbors_of_pos(grid_size,p__24137){
var vec__24138 = p__24137;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24138,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24138,(1),null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__24136_SHARP_){
return minesweeper_cljs.game.valid_pos_QMARK_(grid_size,p1__24136_SHARP_);
}),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(y + (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),(y - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),(y - (1))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),(y + (1))], null)], null));
});
minesweeper_cljs.game.get_number_of_neighbor_mines = (function minesweeper_cljs$game$get_number_of_neighbor_mines(grid_size,mines,pos){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__24145_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [true,(1),false,(0)], null),cljs.core.contains_QMARK_(mines,p1__24145_SHARP_));
}),minesweeper_cljs.game.get_neighbors_of_pos(grid_size,pos)));
});
minesweeper_cljs.game.get_game_grid = (function minesweeper_cljs$game$get_game_grid(grid_size,mines){
return cljs.core.vec((function (){var iter__5523__auto__ = (function minesweeper_cljs$game$get_game_grid_$_iter__24153(s__24154){
return (new cljs.core.LazySeq(null,(function (){
var s__24154__$1 = s__24154;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__24154__$1);
if(temp__5804__auto__){
var s__24154__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__24154__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__24154__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__24156 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__24155 = (0);
while(true){
if((i__24155 < size__5522__auto__)){
var i = cljs.core._nth(c__5521__auto__,i__24155);
cljs.core.chunk_append(b__24156,cljs.core.vec((function (){var iter__5523__auto__ = ((function (i__24155,i,c__5521__auto__,size__5522__auto__,b__24156,s__24154__$2,temp__5804__auto__){
return (function minesweeper_cljs$game$get_game_grid_$_iter__24153_$_iter__24157(s__24158){
return (new cljs.core.LazySeq(null,((function (i__24155,i,c__5521__auto__,size__5522__auto__,b__24156,s__24154__$2,temp__5804__auto__){
return (function (){
var s__24158__$1 = s__24158;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__24158__$1);
if(temp__5804__auto____$1){
var s__24158__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24158__$2)){
var c__5521__auto____$1 = cljs.core.chunk_first(s__24158__$2);
var size__5522__auto____$1 = cljs.core.count(c__5521__auto____$1);
var b__24160 = cljs.core.chunk_buffer(size__5522__auto____$1);
if((function (){var i__24159 = (0);
while(true){
if((i__24159 < size__5522__auto____$1)){
var j = cljs.core._nth(c__5521__auto____$1,i__24159);
cljs.core.chunk_append(b__24160,((cljs.core.contains_QMARK_(mines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?new cljs.core.Keyword(null,"mine","mine",-130428525):minesweeper_cljs.game.get_number_of_neighbor_mines(grid_size,mines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))));

var G__24277 = (i__24159 + (1));
i__24159 = G__24277;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24160),minesweeper_cljs$game$get_game_grid_$_iter__24153_$_iter__24157(cljs.core.chunk_rest(s__24158__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24160),null);
}
} else {
var j = cljs.core.first(s__24158__$2);
return cljs.core.cons(((cljs.core.contains_QMARK_(mines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?new cljs.core.Keyword(null,"mine","mine",-130428525):minesweeper_cljs.game.get_number_of_neighbor_mines(grid_size,mines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))),minesweeper_cljs$game$get_game_grid_$_iter__24153_$_iter__24157(cljs.core.rest(s__24158__$2)));
}
} else {
return null;
}
break;
}
});})(i__24155,i,c__5521__auto__,size__5522__auto__,b__24156,s__24154__$2,temp__5804__auto__))
,null,null));
});})(i__24155,i,c__5521__auto__,size__5522__auto__,b__24156,s__24154__$2,temp__5804__auto__))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(grid_size));
})()));

var G__24278 = (i__24155 + (1));
i__24155 = G__24278;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24156),minesweeper_cljs$game$get_game_grid_$_iter__24153(cljs.core.chunk_rest(s__24154__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24156),null);
}
} else {
var i = cljs.core.first(s__24154__$2);
return cljs.core.cons(cljs.core.vec((function (){var iter__5523__auto__ = ((function (i,s__24154__$2,temp__5804__auto__){
return (function minesweeper_cljs$game$get_game_grid_$_iter__24153_$_iter__24174(s__24175){
return (new cljs.core.LazySeq(null,(function (){
var s__24175__$1 = s__24175;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__24175__$1);
if(temp__5804__auto____$1){
var s__24175__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__24175__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__24175__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__24177 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__24176 = (0);
while(true){
if((i__24176 < size__5522__auto__)){
var j = cljs.core._nth(c__5521__auto__,i__24176);
cljs.core.chunk_append(b__24177,((cljs.core.contains_QMARK_(mines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?new cljs.core.Keyword(null,"mine","mine",-130428525):minesweeper_cljs.game.get_number_of_neighbor_mines(grid_size,mines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))));

var G__24284 = (i__24176 + (1));
i__24176 = G__24284;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__24177),minesweeper_cljs$game$get_game_grid_$_iter__24153_$_iter__24174(cljs.core.chunk_rest(s__24175__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__24177),null);
}
} else {
var j = cljs.core.first(s__24175__$2);
return cljs.core.cons(((cljs.core.contains_QMARK_(mines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null)))?new cljs.core.Keyword(null,"mine","mine",-130428525):minesweeper_cljs.game.get_number_of_neighbor_mines(grid_size,mines,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,j], null))),minesweeper_cljs$game$get_game_grid_$_iter__24153_$_iter__24174(cljs.core.rest(s__24175__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(i,s__24154__$2,temp__5804__auto__))
;
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(grid_size));
})()),minesweeper_cljs$game$get_game_grid_$_iter__24153(cljs.core.rest(s__24154__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(grid_size));
})());
});
minesweeper_cljs.game.empty_pos_QMARK_ = (function minesweeper_cljs$game$empty_pos_QMARK_(grid,p__24192){
var vec__24193 = p__24192;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24193,(0),null);
var j = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24193,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(grid,i),j),(0));
});
minesweeper_cljs.game.reveal_empty_pos_and_neighbors_BANG_ = (function minesweeper_cljs$game$reveal_empty_pos_and_neighbors_BANG_(grid,revealed_STAR_,pos){
if((!(cljs.core.contains_QMARK_(cljs.core.deref(revealed_STAR_),pos)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(revealed_STAR_,(function (p1__24196_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__24196_SHARP_,pos);
}));

if(minesweeper_cljs.game.empty_pos_QMARK_(grid,pos)){
var seq__24201 = cljs.core.seq(minesweeper_cljs.game.get_neighbors_of_pos(cljs.core.count(grid),pos));
var chunk__24202 = null;
var count__24203 = (0);
var i__24204 = (0);
while(true){
if((i__24204 < count__24203)){
var neighbor = chunk__24202.cljs$core$IIndexed$_nth$arity$2(null,i__24204);
(minesweeper_cljs.game.reveal_empty_pos_and_neighbors_BANG_.cljs$core$IFn$_invoke$arity$3 ? minesweeper_cljs.game.reveal_empty_pos_and_neighbors_BANG_.cljs$core$IFn$_invoke$arity$3(grid,revealed_STAR_,neighbor) : minesweeper_cljs.game.reveal_empty_pos_and_neighbors_BANG_.call(null,grid,revealed_STAR_,neighbor));


var G__24288 = seq__24201;
var G__24289 = chunk__24202;
var G__24290 = count__24203;
var G__24291 = (i__24204 + (1));
seq__24201 = G__24288;
chunk__24202 = G__24289;
count__24203 = G__24290;
i__24204 = G__24291;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__24201);
if(temp__5804__auto__){
var seq__24201__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__24201__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__24201__$1);
var G__24292 = cljs.core.chunk_rest(seq__24201__$1);
var G__24293 = c__5568__auto__;
var G__24294 = cljs.core.count(c__5568__auto__);
var G__24295 = (0);
seq__24201 = G__24292;
chunk__24202 = G__24293;
count__24203 = G__24294;
i__24204 = G__24295;
continue;
} else {
var neighbor = cljs.core.first(seq__24201__$1);
(minesweeper_cljs.game.reveal_empty_pos_and_neighbors_BANG_.cljs$core$IFn$_invoke$arity$3 ? minesweeper_cljs.game.reveal_empty_pos_and_neighbors_BANG_.cljs$core$IFn$_invoke$arity$3(grid,revealed_STAR_,neighbor) : minesweeper_cljs.game.reveal_empty_pos_and_neighbors_BANG_.call(null,grid,revealed_STAR_,neighbor));


var G__24296 = cljs.core.next(seq__24201__$1);
var G__24297 = null;
var G__24298 = (0);
var G__24299 = (0);
seq__24201 = G__24296;
chunk__24202 = G__24297;
count__24203 = G__24298;
i__24204 = G__24299;
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
} else {
return null;
}
});
minesweeper_cljs.game.reveal_pos = (function minesweeper_cljs$game$reveal_pos(grid,revealed,pos){
if((!(minesweeper_cljs.game.empty_pos_QMARK_(grid,pos)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(revealed,pos);
} else {
var revealed_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(revealed);
minesweeper_cljs.game.reveal_empty_pos_and_neighbors_BANG_(grid,revealed_STAR_,pos);

return cljs.core.deref(revealed_STAR_);
}
});
minesweeper_cljs.game.select_pos = (function minesweeper_cljs$game$select_pos(current_state,pos){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["select-pos",current_state,pos], 0));

var map__24241 = current_state;
var map__24241__$1 = cljs.core.__destructure_map(map__24241);
var revealed = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24241__$1,new cljs.core.Keyword(null,"revealed","revealed",-1090849585));
var mines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24241__$1,new cljs.core.Keyword(null,"mines","mines",-1960796490));
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24241__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var flags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24241__$1,new cljs.core.Keyword(null,"flags","flags",1775418075));
var revealed_SINGLEQUOTE_ = minesweeper_cljs.game.reveal_pos(grid,revealed,pos);
var flags_SINGLEQUOTE_ = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(flags,revealed_SINGLEQUOTE_);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(current_state,new cljs.core.Keyword(null,"revealed","revealed",-1090849585),revealed_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"flags","flags",1775418075),flags_SINGLEQUOTE_,new cljs.core.Keyword(null,"remaining-flags","remaining-flags",-927257022),(cljs.core.count(mines) - cljs.core.count(flags_SINGLEQUOTE_)),new cljs.core.Keyword(null,"game-over","game-over",-607322695),cljs.core.contains_QMARK_(mines,pos)], 0));
});
minesweeper_cljs.game.flag_pos = (function minesweeper_cljs$game$flag_pos(current_state,pos){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["flag-pos",current_state,pos], 0));

var map__24247 = current_state;
var map__24247__$1 = cljs.core.__destructure_map(map__24247);
var mines = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24247__$1,new cljs.core.Keyword(null,"mines","mines",-1960796490));
var flags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24247__$1,new cljs.core.Keyword(null,"flags","flags",1775418075));
var remaining_flags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__24247__$1,new cljs.core.Keyword(null,"remaining-flags","remaining-flags",-927257022));
if(cljs.core.contains_QMARK_(flags,pos)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(current_state,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__24244_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__24244_SHARP_,pos);
}),flags)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"remaining-flags","remaining-flags",-927257022),(remaining_flags + (1))], 0));
} else {
if((remaining_flags === (0))){
return current_state;
} else {
var flags_SINGLEQUOTE_ = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(flags,pos);
var won_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mines,flags_SINGLEQUOTE_);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(current_state,new cljs.core.Keyword(null,"flags","flags",1775418075),flags_SINGLEQUOTE_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"remaining-flags","remaining-flags",-927257022),(remaining_flags - (1)),new cljs.core.Keyword(null,"game-over","game-over",-607322695),won_QMARK_,new cljs.core.Keyword(null,"won","won",910394405),won_QMARK_], 0));

}
}
});
minesweeper_cljs.game.get_initial_state = (function minesweeper_cljs$game$get_initial_state(grid_size,number_of_mines){
var mines = minesweeper_cljs.game.get_random_mines_pos(grid_size,number_of_mines);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"number-of-mines","number-of-mines",-399435550),new cljs.core.Keyword(null,"remaining-flags","remaining-flags",-927257022),new cljs.core.Keyword(null,"won","won",910394405),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"revealed","revealed",-1090849585),new cljs.core.Keyword(null,"grid-size","grid-size",2138480144),new cljs.core.Keyword(null,"mines","mines",-1960796490),new cljs.core.Keyword(null,"game-over","game-over",-607322695),new cljs.core.Keyword(null,"flags","flags",1775418075)],[number_of_mines,number_of_mines,false,minesweeper_cljs.game.get_game_grid(grid_size,mines),cljs.core.PersistentHashSet.EMPTY,grid_size,mines,false,cljs.core.PersistentHashSet.EMPTY]);
});

//# sourceMappingURL=minesweeper_cljs.game.js.map
