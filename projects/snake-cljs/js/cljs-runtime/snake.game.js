goog.provide('snake.game');
snake.game.get_next_food_pos = (function snake$game$get_next_food_pos(grid_size,snake__$1){
var all_pos = cljs.core.set((function (){var iter__5523__auto__ = (function snake$game$get_next_food_pos_$_iter__20745(s__20746){
return (new cljs.core.LazySeq(null,(function (){
var s__20746__$1 = s__20746;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20746__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var x = cljs.core.first(xs__6360__auto__);
var iterys__5519__auto__ = ((function (s__20746__$1,x,xs__6360__auto__,temp__5804__auto__){
return (function snake$game$get_next_food_pos_$_iter__20745_$_iter__20747(s__20748){
return (new cljs.core.LazySeq(null,((function (s__20746__$1,x,xs__6360__auto__,temp__5804__auto__){
return (function (){
var s__20748__$1 = s__20748;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20748__$1);
if(temp__5804__auto____$1){
var s__20748__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20748__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20748__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20750 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20749 = (0);
while(true){
if((i__20749 < size__5522__auto__)){
var y = cljs.core._nth(c__5521__auto__,i__20749);
cljs.core.chunk_append(b__20750,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));

var G__20833 = (i__20749 + (1));
i__20749 = G__20833;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20750),snake$game$get_next_food_pos_$_iter__20745_$_iter__20747(cljs.core.chunk_rest(s__20748__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20750),null);
}
} else {
var y = cljs.core.first(s__20748__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),snake$game$get_next_food_pos_$_iter__20745_$_iter__20747(cljs.core.rest(s__20748__$2)));
}
} else {
return null;
}
break;
}
});})(s__20746__$1,x,xs__6360__auto__,temp__5804__auto__))
,null,null));
});})(s__20746__$1,x,xs__6360__auto__,temp__5804__auto__))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(grid_size)));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,snake$game$get_next_food_pos_$_iter__20745(cljs.core.rest(s__20746__$1)));
} else {
var G__20834 = cljs.core.rest(s__20746__$1);
s__20746__$1 = G__20834;
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
snake.game.get_next_pos = (function snake$game$get_next_pos(p__20769,direction){
var vec__20770 = p__20769;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20770,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20770,(1),null);
var G__20773 = direction;
var G__20773__$1 = (((G__20773 instanceof cljs.core.Keyword))?G__20773.fqn:null);
switch (G__20773__$1) {
case "right":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (1)),y], null);

break;
case "left":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - (1)),y], null);

break;
case "up":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y - (1))], null);

break;
case "down":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(y + (1))], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__20773__$1)].join('')));

}
});
snake.game.will_get_food_QMARK_ = (function snake$game$will_get_food_QMARK_(snake__$1,direction,food){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(food,snake.game.get_next_pos(cljs.core.peek(snake__$1),direction));
});
snake.game.eat = (function snake$game$eat(state){
var map__20775 = state;
var map__20775__$1 = cljs.core.__destructure_map(map__20775);
var grid_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20775__$1,new cljs.core.Keyword(null,"grid-size","grid-size",2138480144));
var snake__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20775__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
var food = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20775__$1,new cljs.core.Keyword(null,"food","food",1842183121));
var score = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20775__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var growed_snake = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(snake__$1,food);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"snake","snake",-244377242),growed_snake,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"food","food",1842183121),snake.game.get_next_food_pos(grid_size,growed_snake),new cljs.core.Keyword(null,"score","score",-1963588780),(score + (1))], 0));
});
snake.game.move = (function snake$game$move(state){
var map__20785 = state;
var map__20785__$1 = cljs.core.__destructure_map(map__20785);
var snake__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20785__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20785__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"snake","snake",-244377242),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.rest(snake__$1)),snake.game.get_next_pos(cljs.core.peek(snake__$1),direction)));
});
snake.game.eat_or_move = (function snake$game$eat_or_move(state){
var map__20786 = state;
var map__20786__$1 = cljs.core.__destructure_map(map__20786);
var snake__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20786__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
var direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20786__$1,new cljs.core.Keyword(null,"direction","direction",-633359395));
var food = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20786__$1,new cljs.core.Keyword(null,"food","food",1842183121));
if(snake.game.will_get_food_QMARK_(snake__$1,direction,food)){
return snake.game.eat(state);
} else {
return snake.game.move(state);

}
});
snake.game.outside_screen_QMARK_ = (function snake$game$outside_screen_QMARK_(p__20801){
var map__20802 = p__20801;
var map__20802__$1 = cljs.core.__destructure_map(map__20802);
var grid_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20802__$1,new cljs.core.Keyword(null,"grid-size","grid-size",2138480144));
var snake__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20802__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
var vec__20803 = cljs.core.peek(snake__$1);
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20803,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20803,(1),null);
return (!(((((((0) < x)) && ((x < grid_size)))) && (((((0) < y)) && ((y < grid_size)))))));
});
snake.game.self_collided_QMARK_ = (function snake$game$self_collided_QMARK_(p__20811){
var map__20812 = p__20811;
var map__20812__$1 = cljs.core.__destructure_map(map__20812);
var snake__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20812__$1,new cljs.core.Keyword(null,"snake","snake",-244377242));
var snake_head = cljs.core.peek(snake__$1);
return cljs.core.boolean$(cljs.core.some((function (p1__20809_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__20809_SHARP_,snake_head);
}),cljs.core.butlast(snake__$1)));
});
snake.game.check_dead = (function snake$game$check_dead(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"dead","dead",-1946604091),((snake.game.outside_screen_QMARK_(state)) || (snake.game.self_collided_QMARK_(state))));
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
var mid_screen = (grid_size / (2));
var snake__$1 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [mid_screen,mid_screen], null)], null);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"grid-size","grid-size",2138480144),grid_size,new cljs.core.Keyword(null,"snake","snake",-244377242),snake__$1,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"food","food",1842183121),snake.game.get_next_food_pos(grid_size,snake__$1),new cljs.core.Keyword(null,"score","score",-1963588780),(0),new cljs.core.Keyword(null,"high-score","high-score",-1220549879),high_score,new cljs.core.Keyword(null,"dead","dead",-1946604091),false], null);
});
snake.game.change_direction = (function snake$game$change_direction(state,new_direction){
var forbidden_moves = cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up","up",-269712113),new cljs.core.Keyword(null,"down","down",1565245570)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"left","left",-399115937)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"down","down",1565245570),new cljs.core.Keyword(null,"up","up",-269712113)], null)]);
if((!(cljs.core.contains_QMARK_(forbidden_moves,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(state),new_direction], null))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"direction","direction",-633359395),new_direction);
} else {
return state;

}
});

//# sourceMappingURL=snake.game.js.map
