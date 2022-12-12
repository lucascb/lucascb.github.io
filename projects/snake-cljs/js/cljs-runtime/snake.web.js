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
snake.web.touch_state = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
snake.web.handle_keydown = (function snake$web$handle_keydown(event){
var temp__5804__auto__ = (function (){var G__23613 = event.key;
switch (G__23613) {
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
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(snake.web.game_state,(function (p1__23612_SHARP_){
return snake.game.change_direction(p1__23612_SHARP_,direction);
}));
} else {
return null;
}
});
snake.web.get_current_touch_pos = (function snake$web$get_current_touch_pos(event){
var touch_event = cljs.core.first(event.touches);
var touch_x = touch_event.clientX;
var touch_y = touch_event.clientY;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [touch_x,touch_y], null);
});
snake.web.handle_touch_start = (function snake$web$handle_touch_start(event){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(snake.web.touch_state,(function (){
return snake.web.get_current_touch_pos(event);
}));
});
snake.web.get_touch_direction = (function snake$web$get_touch_direction(p__23614,p__23615){
var vec__23616 = p__23614;
var x_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23616,(0),null);
var y_start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23616,(1),null);
var vec__23619 = p__23615;
var x_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23619,(0),null);
var y_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23619,(1),null);
var x_diff = (x_start - x_end);
var y_diff = (y_start - y_end);
if((cljs.core.abs(x_diff) > cljs.core.abs(y_diff))){
if((x_diff > (0))){
return new cljs.core.Keyword(null,"left","left",-399115937);
} else {
return new cljs.core.Keyword(null,"right","right",-452581833);
}
} else {
if((y_diff > (0))){
return new cljs.core.Keyword(null,"up","up",-269712113);
} else {
return new cljs.core.Keyword(null,"down","down",1565245570);
}
}
});
snake.web.handle_touch_move = (function snake$web$handle_touch_move(event){
var temp__5804__auto__ = cljs.core.deref(snake.web.touch_state);
if(cljs.core.truth_(temp__5804__auto__)){
var first_touch = temp__5804__auto__;
var direction = snake.web.get_touch_direction(first_touch,snake.web.get_current_touch_pos(event));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(snake.web.game_state,(function (p1__23622_SHARP_){
return snake.game.change_direction(p1__23622_SHARP_,direction);
}));

return cljs.core.reset_BANG_(snake.web.touch_state,null);
} else {
return null;
}
});
snake.web.draw_block = (function snake$web$draw_block(p__23623,block_width,block_height){
var vec__23624 = p__23623;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23624,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23624,(1),null);
return snake.web.canvas_ctx.fillRect((x * block_width),(y * block_height),block_width,block_height);
});
snake.web.draw_food = (function snake$web$draw_food(food_pos,block_width,block_height){
(snake.web.canvas_ctx.fillStyle = "rgb(255,0,0)");

return snake.web.draw_block(food_pos,block_width,block_height);
});
snake.web.draw_snake = (function snake$web$draw_snake(snake__$1,block_width,block_height){
(snake.web.canvas_ctx.fillStyle = "rgb(0,0,0)");

var seq__23627 = cljs.core.seq(snake__$1);
var chunk__23628 = null;
var count__23629 = (0);
var i__23630 = (0);
while(true){
if((i__23630 < count__23629)){
var part = chunk__23628.cljs$core$IIndexed$_nth$arity$2(null,i__23630);
snake.web.draw_block(part,block_width,block_height);


var G__23636 = seq__23627;
var G__23637 = chunk__23628;
var G__23638 = count__23629;
var G__23639 = (i__23630 + (1));
seq__23627 = G__23636;
chunk__23628 = G__23637;
count__23629 = G__23638;
i__23630 = G__23639;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23627);
if(temp__5804__auto__){
var seq__23627__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23627__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__23627__$1);
var G__23640 = cljs.core.chunk_rest(seq__23627__$1);
var G__23641 = c__5568__auto__;
var G__23642 = cljs.core.count(c__5568__auto__);
var G__23643 = (0);
seq__23627 = G__23640;
chunk__23628 = G__23641;
count__23629 = G__23642;
i__23630 = G__23643;
continue;
} else {
var part = cljs.core.first(seq__23627__$1);
snake.web.draw_block(part,block_width,block_height);


var G__23644 = cljs.core.next(seq__23627__$1);
var G__23645 = null;
var G__23646 = (0);
var G__23647 = (0);
seq__23627 = G__23644;
chunk__23628 = G__23645;
count__23629 = G__23646;
i__23630 = G__23647;
continue;
}
} else {
return null;
}
}
break;
}
});
snake.web.clear_screen = (function snake$web$clear_screen(){
(snake.web.canvas_ctx.fillStyle = "rgb(255,255,255)");

return snake.web.canvas_ctx.fillRect((0),(0),snake.web.canvas.width,snake.web.canvas.height);
});
snake.web.set_score_text = (function snake$web$set_score_text(score,high_score){
return (snake.web.score_txt.innerHTML = ["Score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(score)," - High Score: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(high_score)].join(''));
});
snake.web.draw_game_state = (function snake$web$draw_game_state(p__23631){
var map__23632 = p__23631;
var map__23632__$1 = cljs.core.__destructure_map(map__23632);
var snake__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23632__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
var food = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23632__$1,new cljs.core.Keyword(null,"food","food",1842183121));
var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23632__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var high_score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23632__$1,new cljs.core.Keyword(null,"high-score","high-score",-1220549879));
var block_width = cljs.core.quot(snake.web.canvas.width,snake.web.grid_size);
var block_height = cljs.core.quot(snake.web.canvas.height,snake.web.grid_size);
snake.web.clear_screen();

snake.web.draw_food(food,block_width,block_height);

snake.web.draw_snake(snake__$1,block_width,block_height);

return snake.web.set_score_text(score,high_score);
});
snake.web.game_over = (function snake$web$game_over(p__23633){
var map__23634 = p__23633;
var map__23634__$1 = cljs.core.__destructure_map(map__23634);
var high_score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23634__$1,new cljs.core.Keyword(null,"high-score","high-score",-1220549879));
(snake.web.game_over_text.style.visibility = "visible");

(snake.web.start_button.disabled = false);

return localStorage.setItem("high-score",high_score);
});
snake.web.game_loop = (function snake$web$game_loop(){
var state = cljs.core.deref(snake.web.game_state);
snake.web.draw_game_state(state);

if(cljs.core.not(new cljs.core.Keyword(null,"dead","dead",-1946604091).cljs$core$IFn$_invoke$arity$1(state))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(snake.web.game_state,snake.game.get_next_state);

return setTimeout(snake.web.game_loop,snake.web.game_clock);
} else {
return snake.web.game_over(state);
}
});
snake.web.start_game = (function snake$web$start_game(high_score){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(snake.web.game_state,(function (){
return snake.game.get_initial_state(snake.web.grid_size,high_score);
}));

(snake.web.game_over_text.style.visibility = "hidden");

(snake.web.start_button.disabled = true);

return snake.web.game_loop();
});
snake.web.get_current_high_score = (function snake$web$get_current_high_score(){
var or__5045__auto__ = localStorage.getItem("high-score");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
});
snake.web.init_game_screen = (function snake$web$init_game_screen(){
var high_score = snake.web.get_current_high_score();
snake.web.clear_screen();

snake.web.set_score_text((0),high_score);

document.addEventListener("keydown",snake.web.handle_keydown);

document.addEventListener("touchstart",snake.web.handle_touch_start);

document.addEventListener("touchmove",snake.web.handle_touch_move);

return (snake.web.start_button.onclick = (function (){
return snake.web.start_game(high_score);
}));
});
snake.web._main = (function snake$web$_main(){
return snake.web.init_game_screen();
});

//# sourceMappingURL=snake.web.js.map
