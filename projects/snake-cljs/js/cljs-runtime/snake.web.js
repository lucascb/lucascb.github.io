goog.provide('snake.web');
snake.web.grid_size = (50);
snake.web.game_clock = (70);
snake.web.canvas = document.getElementById("game-canvas");
snake.web.canvas_ctx = snake.web.canvas.getContext("2d");
snake.web.score_txt = document.getElementById("score");
snake.web.start_button = document.getElementById("start");
snake.web.game_over_text = document.getElementById("game-over");
if((typeof snake !== 'undefined') && (typeof snake.web !== 'undefined') && (typeof snake.web.game_state !== 'undefined')){
} else {
snake.web.game_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof snake !== 'undefined') && (typeof snake.web !== 'undefined') && (typeof snake.web.touch_state !== 'undefined')){
} else {
snake.web.touch_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
snake.web.change_direction_on_keydown = (function snake$web$change_direction_on_keydown(event){
var temp__5804__auto__ = (function (){var G__11345 = event.key;
switch (G__11345) {
case "ArrowLeft":
return new cljs.core.Keyword(null,"left","left",-399115937);

break;
case "ArrowUp":
return new cljs.core.Keyword(null,"up","up",-269712113);

break;
case "ArrowRight":
return new cljs.core.Keyword(null,"right","right",-452581833);

break;
case "ArrowDown":
return new cljs.core.Keyword(null,"down","down",1565245570);

break;
default:
return null;

}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var direction = temp__5804__auto__;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(snake.web.game_state,(function (p1__11344_SHARP_){
return snake.game.change_direction(p1__11344_SHARP_,direction);
}));
} else {
return null;
}
});
snake.web.get_touch_pos = (function snake$web$get_touch_pos(event){
var touch_event = cljs.core.first(event.touches);
var touch_x = touch_event.clientX;
var touch_y = touch_event.clientY;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [touch_x,touch_y], null);
});
snake.web.handle_touch_start = (function snake$web$handle_touch_start(event){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(snake.web.touch_state,(function (){
return snake.web.get_touch_pos(event);
}));
});
snake.web.handle_touch_move = (function snake$web$handle_touch_move(event){
var temp__5804__auto__ = cljs.core.seq(cljs.core.deref(snake.web.touch_state));
if(temp__5804__auto__){
var state = temp__5804__auto__;
var vec__11348 = state;
var x_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11348,(0),null);
var y_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11348,(1),null);
var vec__11351 = snake.web.get_touch_pos(event);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11351,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11351,(1),null);
var x_diff = (x_start - x);
var y_diff = (y_start - y);
var direction = (((cljs.core.abs(x_diff) > cljs.core.abs(y_diff)))?(((x_diff > (0)))?new cljs.core.Keyword(null,"left","left",-399115937):new cljs.core.Keyword(null,"right","right",-452581833)):(((y_diff > (0)))?new cljs.core.Keyword(null,"up","up",-269712113):new cljs.core.Keyword(null,"down","down",1565245570)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(snake.web.game_state,(function (p1__11347_SHARP_){
return snake.game.change_direction(p1__11347_SHARP_,direction);
}));

return cljs.core.reset_BANG_(snake.web.touch_state,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
snake.web.draw_block = (function snake$web$draw_block(p__11354,block_width,block_height){
var vec__11355 = p__11354;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11355,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11355,(1),null);
return snake.web.canvas_ctx.fillRect((x * block_width),(y * block_height),block_width,block_height);
});
snake.web.get_scores_display_text = (function snake$web$get_scores_display_text(score,high_score){
return ["Score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(score)," - High Score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(high_score)].join('');
});
snake.web.clear_screen = (function snake$web$clear_screen(){
(snake.web.canvas_ctx.fillStyle = "rgb(255,255,255)");

return snake.web.canvas_ctx.fillRect((0),(0),snake.web.canvas.width,snake.web.canvas.height);
});
snake.web.set_score = (function snake$web$set_score(score,high_score){
return (snake.web.score_txt.innerHTML = snake.web.get_scores_display_text(score,high_score));
});
snake.web.draw_game_state = (function snake$web$draw_game_state(p__11358){
var map__11359 = p__11358;
var map__11359__$1 = cljs.core.__destructure_map(map__11359);
var snake__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11359__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
var food = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11359__$1,new cljs.core.Keyword(null,"food","food",1842183121));
var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11359__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var high_score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11359__$1,new cljs.core.Keyword(null,"high-score","high-score",-1220549879));
var block_width = cljs.core.quot(snake.web.canvas.width,snake.web.grid_size);
var block_height = cljs.core.quot(snake.web.canvas.height,snake.web.grid_size);
snake.web.clear_screen();

(snake.web.canvas_ctx.fillStyle = "rgb(255,0,0)");

snake.web.draw_block(food,block_width,block_height);

(snake.web.canvas_ctx.fillStyle = "rgb(0,0,0)");

var seq__11360_11365 = cljs.core.seq(snake__$1);
var chunk__11361_11366 = null;
var count__11362_11367 = (0);
var i__11363_11368 = (0);
while(true){
if((i__11363_11368 < count__11362_11367)){
var part_11369 = chunk__11361_11366.cljs$core$IIndexed$_nth$arity$2(null,i__11363_11368);
snake.web.draw_block(part_11369,block_width,block_height);


var G__11370 = seq__11360_11365;
var G__11371 = chunk__11361_11366;
var G__11372 = count__11362_11367;
var G__11373 = (i__11363_11368 + (1));
seq__11360_11365 = G__11370;
chunk__11361_11366 = G__11371;
count__11362_11367 = G__11372;
i__11363_11368 = G__11373;
continue;
} else {
var temp__5804__auto___11374 = cljs.core.seq(seq__11360_11365);
if(temp__5804__auto___11374){
var seq__11360_11375__$1 = temp__5804__auto___11374;
if(cljs.core.chunked_seq_QMARK_(seq__11360_11375__$1)){
var c__5568__auto___11376 = cljs.core.chunk_first(seq__11360_11375__$1);
var G__11377 = cljs.core.chunk_rest(seq__11360_11375__$1);
var G__11378 = c__5568__auto___11376;
var G__11379 = cljs.core.count(c__5568__auto___11376);
var G__11380 = (0);
seq__11360_11365 = G__11377;
chunk__11361_11366 = G__11378;
count__11362_11367 = G__11379;
i__11363_11368 = G__11380;
continue;
} else {
var part_11381 = cljs.core.first(seq__11360_11375__$1);
snake.web.draw_block(part_11381,block_width,block_height);


var G__11382 = cljs.core.next(seq__11360_11375__$1);
var G__11383 = null;
var G__11384 = (0);
var G__11385 = (0);
seq__11360_11365 = G__11382;
chunk__11361_11366 = G__11383;
count__11362_11367 = G__11384;
i__11363_11368 = G__11385;
continue;
}
} else {
}
}
break;
}

return snake.web.set_score(score,high_score);
});
snake.web.game_over = (function snake$web$game_over(){
(snake.web.game_over_text.hidden = false);

return (snake.web.start_button.disabled = false);
});
snake.web.game_loop = (function snake$web$game_loop(){
var state = cljs.core.deref(snake.web.game_state);
snake.web.draw_game_state(state);

if(cljs.core.not(new cljs.core.Keyword(null,"dead","dead",-1946604091).cljs$core$IFn$_invoke$arity$1(state))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(snake.web.game_state,snake.game.get_next_state);

return setTimeout(snake.web.game_loop,snake.web.game_clock);
} else {
return snake.web.game_over();

}
});
snake.web.start_game = (function snake$web$start_game(){
var high_score = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(snake.web.game_state),new cljs.core.Keyword(null,"high-score","high-score",-1220549879),(0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(snake.web.game_state,(function (){
return snake.game.get_initial_state(snake.web.grid_size,high_score);
}));

(snake.web.game_over_text.hidden = true);

(snake.web.start_button.disabled = true);

return snake.web.game_loop();
});
snake.web.init_game_screen = (function snake$web$init_game_screen(){
snake.web.clear_screen();

snake.web.set_score((0),(0));

document.addEventListener("keydown",snake.web.change_direction_on_keydown);

document.addEventListener("touchstart",snake.web.handle_touch_start);

document.addEventListener("touchmove",snake.web.handle_touch_move);

return (snake.web.start_button.onclick = snake.web.start_game);
});
snake.web._main = (function snake$web$_main(){
return snake.web.init_game_screen();
});

//# sourceMappingURL=snake.web.js.map
