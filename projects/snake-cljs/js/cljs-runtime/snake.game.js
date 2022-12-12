goog.provide('snake.game');
snake.game.forbidden_moves = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"down","down",1565245570)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"left","left",-399115937)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"up","up",-269712113)], null)]);
snake.game.get_initial_snake = (function snake$game$get_initial_snake(grid_size,snake_size){
var mid_screen = cljs.core.quot(grid_size,(2));
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__23591_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(mid_screen - p1__23591_SHARP_),mid_screen],null));
}),cljs.core.reverse(cljs.core.range.cljs$core$IFn$_invoke$arity$1(snake_size)));
});
snake.game.get_next_food_pos = (function snake$game$get_next_food_pos(grid_size,snake__$1){
var all_pos = cljs.core.set((function (){var iter__5523__auto__ = (function snake$game$get_next_food_pos_$_iter__23592(s__23593){
return (new cljs.core.LazySeq(null,(function (){
var s__23593__$1 = s__23593;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__23593__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var x = cljs.core.first(xs__6360__auto__);
var iterys__5519__auto__ = ((function (s__23593__$1,x,xs__6360__auto__,temp__5804__auto__){
return (function snake$game$get_next_food_pos_$_iter__23592_$_iter__23594(s__23595){
return (new cljs.core.LazySeq(null,((function (s__23593__$1,x,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__23595__$1 = s__23595;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__23595__$1);
if(temp__5804__auto____$1){
var s__23595__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__23595__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__23595__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__23597 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__23596 = (0);
while(true){
if((i__23596 < size__5522__auto__)){
var y = cljs.core._nth(c__5521__auto__,i__23596);
cljs.core.chunk_append(b__23597,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__23609 = (i__23596 + (1));
i__23596 = G__23609;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__23597),snake$game$get_next_food_pos_$_iter__23592_$_iter__23594(cljs.core.chunk_rest(s__23595__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__23597),null);
}
} else {
var y = cljs.core.first(s__23595__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),snake$game$get_next_food_pos_$_iter__23592_$_iter__23594(cljs.core.rest(s__23595__$2)));
}
} else {
return null;
}
break;
}
});})(s__23593__$1,x,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__23593__$1,x,xs__6360__auto__,temp__5804__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(grid_size)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,snake$game$get_next_food_pos_$_iter__23592(cljs.core.rest(s__23593__$1)));
} else {
var G__23610 = cljs.core.rest(s__23593__$1);
s__23593__$1 = G__23610;
continue;
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
return cljs.core.rand_nth(cljs.core.vec(clojure.set.difference.cljs$core$IFn$_invoke$arity$2(all_pos,cljs.core.set(snake__$1))));
});
snake.game.get_next_pos = (function snake$game$get_next_pos(p__23598,direction,grid_size){
var vec__23599 = p__23598;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23599,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23599,(1),null);
var G__23602 = direction;
var G__23602__$1 = (((G__23602 instanceof cljs.core.Keyword))?G__23602.fqn:null);
switch (G__23602__$1) {
case "right":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod((x + (1)),grid_size),y], null);

break;
case "left":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.mod((x - (1)),grid_size),y], null);

break;
case "up":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.mod((y - (1)),grid_size)], null);

break;
case "down":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,cljs.core.mod((y + (1)),grid_size)], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__23602__$1)].join('')));

}
});
snake.game.will_get_food_QMARK_ = (function snake$game$will_get_food_QMARK_(snake__$1,direction,food,grid_size){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(food,snake.game.get_next_pos(cljs.core.peek(snake__$1),direction,grid_size));
});
snake.game.eat = (function snake$game$eat(state){
var map__23603 = state;
var map__23603__$1 = cljs.core.__destructure_map(map__23603);
var grid_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23603__$1,new cljs.core.Keyword(null,"grid-size","grid-size",2138480144));
var snake__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23603__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
var food = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23603__$1,new cljs.core.Keyword(null,"food","food",1842183121));
var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23603__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var growed_snake = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(snake__$1,food);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"snake","snake",-244377242),growed_snake,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"food","food",1842183121),snake.game.get_next_food_pos(grid_size,growed_snake),new cljs.core.Keyword(null,"score","score",-1963588780),(score + (1))], 0));
});
snake.game.move = (function snake$game$move(state){
var map__23604 = state;
var map__23604__$1 = cljs.core.__destructure_map(map__23604);
var snake__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23604__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23604__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var grid_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23604__$1,new cljs.core.Keyword(null,"grid-size","grid-size",2138480144));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"snake","snake",-244377242),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.rest(snake__$1)),snake.game.get_next_pos(cljs.core.peek(snake__$1),direction,grid_size)));
});
snake.game.eat_or_move = (function snake$game$eat_or_move(state){
var map__23605 = state;
var map__23605__$1 = cljs.core.__destructure_map(map__23605);
var snake__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23605__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23605__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var food = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23605__$1,new cljs.core.Keyword(null,"food","food",1842183121));
var grid_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23605__$1,new cljs.core.Keyword(null,"grid-size","grid-size",2138480144));
if(snake.game.will_get_food_QMARK_(snake__$1,direction,food,grid_size)){
return snake.game.eat(state);
} else {
return snake.game.move(state);
}
});
snake.game.self_collided_QMARK_ = (function snake$game$self_collided_QMARK_(p__23607){
var map__23608 = p__23607;
var map__23608__$1 = cljs.core.__destructure_map(map__23608);
var snake__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23608__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
var snake_head = cljs.core.peek(snake__$1);
return cljs.core.boolean$(cljs.core.some((function (p1__23606_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__23606_SHARP_,snake_head);
}),cljs.core.butlast(snake__$1)));
});
snake.game.check_dead = (function snake$game$check_dead(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"dead","dead",-1946604091),snake.game.self_collided_QMARK_(state));
});
snake.game.update_high_score = (function snake$game$update_high_score(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"high-score","high-score",-1220549879),(cljs.core.truth_(new cljs.core.Keyword(null,"dead","dead",-1946604091).cljs$core$IFn$_invoke$arity$1(state))?(function (){var x__5130__auto__ = new cljs.core.Keyword(null,"score","score",-1963588780).cljs$core$IFn$_invoke$arity$1(state);
var y__5131__auto__ = new cljs.core.Keyword(null,"high-score","high-score",-1220549879).cljs$core$IFn$_invoke$arity$1(state);
return ((x__5130__auto__ > y__5131__auto__) ? x__5130__auto__ : y__5131__auto__);
})():new cljs.core.Keyword(null,"high-score","high-score",-1220549879).cljs$core$IFn$_invoke$arity$1(state)
));
});
snake.game.get_next_state = (function snake$game$get_next_state(state){
return snake.game.update_high_score(snake.game.check_dead(snake.game.eat_or_move(state)));
});
snake.game.get_initial_state = (function snake$game$get_initial_state(grid_size,high_score){
var snake__$1 = snake.game.get_initial_snake(grid_size,(5));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"grid-size","grid-size",2138480144),grid_size,new cljs.core.Keyword(null,"snake","snake",-244377242),snake__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"food","food",1842183121),snake.game.get_next_food_pos(grid_size,snake__$1),new cljs.core.Keyword(null,"score","score",-1963588780),(0),new cljs.core.Keyword(null,"high-score","high-score",-1220549879),high_score,new cljs.core.Keyword(null,"dead","dead",-1946604091),false], null);
});
snake.game.change_direction = (function snake$game$change_direction(state,new_direction){
if((!(cljs.core.contains_QMARK_(snake.game.forbidden_moves,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(state),new_direction], null))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"direction","direction",-633359395),new_direction);
} else {
return state;
}
});

//# sourceMappingURL=snake.game.js.map
