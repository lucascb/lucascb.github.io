goog.provide('snake.web');
snake.web.grid_size = (60);
snake.web.block_size = (snake.web.grid_size / (10));
snake.web.canvas_size = (snake.web.grid_size * snake.web.block_size);
snake.web.mid_screen = (snake.web.canvas_size / (2));
snake.web.game_clock = (70);
snake.web.canvas = document.getElementById("game-canvas");
snake.web.canvas_ctx = snake.web.canvas.getContext("2d");
snake.web.score_txt = document.getElementById("score");
snake.web.start_button = document.getElementById("start");
if((typeof snake !== 'undefined') && (typeof snake.web !== 'undefined') && (typeof snake.web.game_state !== 'undefined')){
} else {
snake.web.game_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof snake !== 'undefined') && (typeof snake.web !== 'undefined') && (typeof snake.web.touch_state !== 'undefined')){
} else {
snake.web.touch_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
snake.web.change_direction_on_keydown = (function snake$web$change_direction_on_keydown(event){
var temp__5804__auto__ = (function (){var G__22582 = event.key;
switch (G__22582) {
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
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(snake.web.game_state,(function (p1__22581_SHARP_){
return snake.game.change_direction(p1__22581_SHARP_,direction);
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
var vec__22584 = state;
var x_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22584,(0),null);
var y_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22584,(1),null);
var vec__22587 = snake.web.get_touch_pos(event);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22587,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22587,(1),null);
var x_diff = (x_start - x);
var y_diff = (y_start - y);
var direction = (((cljs.core.abs(x_diff) > cljs.core.abs(y_diff)))?(((x_diff > (0)))?new cljs.core.Keyword(null,"left","left",-399115937):new cljs.core.Keyword(null,"right","right",-452581833)):(((y_diff > (0)))?new cljs.core.Keyword(null,"up","up",-269712113):new cljs.core.Keyword(null,"down","down",1565245570)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(snake.web.game_state,(function (p1__22583_SHARP_){
return snake.game.change_direction(p1__22583_SHARP_,direction);
}));

return cljs.core.reset_BANG_(snake.web.touch_state,cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
snake.web.draw_block = (function snake$web$draw_block(p__22590){
var vec__22591 = p__22590;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22591,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22591,(1),null);
return snake.web.canvas_ctx.fillRect((x * snake.web.block_size),(y * snake.web.block_size),snake.web.block_size,snake.web.block_size);
});
snake.web.get_scores_display_text = (function snake$web$get_scores_display_text(score,high_score){
return ["Score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(score)," - High Score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(high_score)].join('');
});
snake.web.clear_screen = (function snake$web$clear_screen(){
(snake.web.canvas_ctx.fillStyle = "rgb(255,255,255)");

return snake.web.canvas_ctx.fillRect((0),(0),snake.web.canvas_size,snake.web.canvas_size);
});
snake.web.set_score = (function snake$web$set_score(score,high_score){
return (snake.web.score_txt.innerHTML = snake.web.get_scores_display_text(score,high_score));
});
snake.web.draw_game_state = (function snake$web$draw_game_state(p__22594){
var map__22595 = p__22594;
var map__22595__$1 = cljs.core.__destructure_map(map__22595);
var snake__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22595__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
var food = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22595__$1,new cljs.core.Keyword(null,"food","food",1842183121));
var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22595__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var high_score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22595__$1,new cljs.core.Keyword(null,"high-score","high-score",-1220549879));
snake.web.clear_screen();

(snake.web.canvas_ctx.fillStyle = "rgb(255,0,0)");

snake.web.draw_block(food);

(snake.web.canvas_ctx.fillStyle = "rgb(0,0,0)");

var seq__22596_22601 = cljs.core.seq(snake__$1);
var chunk__22597_22602 = null;
var count__22598_22603 = (0);
var i__22599_22604 = (0);
while(true){
if((i__22599_22604 < count__22598_22603)){
var part_22605 = chunk__22597_22602.cljs$core$IIndexed$_nth$arity$2(null,i__22599_22604);
snake.web.draw_block(part_22605);


var G__22606 = seq__22596_22601;
var G__22607 = chunk__22597_22602;
var G__22608 = count__22598_22603;
var G__22609 = (i__22599_22604 + (1));
seq__22596_22601 = G__22606;
chunk__22597_22602 = G__22607;
count__22598_22603 = G__22608;
i__22599_22604 = G__22609;
continue;
} else {
var temp__5804__auto___22610 = cljs.core.seq(seq__22596_22601);
if(temp__5804__auto___22610){
var seq__22596_22611__$1 = temp__5804__auto___22610;
if(cljs.core.chunked_seq_QMARK_(seq__22596_22611__$1)){
var c__5568__auto___22612 = cljs.core.chunk_first(seq__22596_22611__$1);
var G__22613 = cljs.core.chunk_rest(seq__22596_22611__$1);
var G__22614 = c__5568__auto___22612;
var G__22615 = cljs.core.count(c__5568__auto___22612);
var G__22616 = (0);
seq__22596_22601 = G__22613;
chunk__22597_22602 = G__22614;
count__22598_22603 = G__22615;
i__22599_22604 = G__22616;
continue;
} else {
var part_22617 = cljs.core.first(seq__22596_22611__$1);
snake.web.draw_block(part_22617);


var G__22618 = cljs.core.next(seq__22596_22611__$1);
var G__22619 = null;
var G__22620 = (0);
var G__22621 = (0);
seq__22596_22601 = G__22618;
chunk__22597_22602 = G__22619;
count__22598_22603 = G__22620;
i__22599_22604 = G__22621;
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
(snake.web.canvas_ctx.font = "30px Lucida");

snake.web.canvas_ctx.fillText("Game Over!",(snake.web.mid_screen - (80)),snake.web.mid_screen);

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

(snake.web.start_button.disabled = true);

return snake.web.game_loop();
});
snake.web.init_game_screen = (function snake$web$init_game_screen(){
(snake.web.canvas.width = snake.web.canvas_size);

(snake.web.canvas.height = snake.web.canvas_size);

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
