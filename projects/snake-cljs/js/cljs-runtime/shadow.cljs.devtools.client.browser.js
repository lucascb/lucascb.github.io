goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21182 = arguments.length;
var i__5770__auto___21183 = (0);
while(true){
if((i__5770__auto___21183 < len__5769__auto___21182)){
args__5775__auto__.push((arguments[i__5770__auto___21183]));

var G__21184 = (i__5770__auto___21183 + (1));
i__5770__auto___21183 = G__21184;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20895){
var G__20896 = cljs.core.first(seq20895);
var seq20895__$1 = cljs.core.next(seq20895);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20896,seq20895__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20902 = cljs.core.seq(sources);
var chunk__20903 = null;
var count__20904 = (0);
var i__20905 = (0);
while(true){
if((i__20905 < count__20904)){
var map__20912 = chunk__20903.cljs$core$IIndexed$_nth$arity$2(null,i__20905);
var map__20912__$1 = cljs.core.__destructure_map(map__20912);
var src = map__20912__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20912__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20912__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20912__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20912__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20913){var e_21185 = e20913;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21185);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21185.message)].join('')));
}

var G__21186 = seq__20902;
var G__21187 = chunk__20903;
var G__21188 = count__20904;
var G__21189 = (i__20905 + (1));
seq__20902 = G__21186;
chunk__20903 = G__21187;
count__20904 = G__21188;
i__20905 = G__21189;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20902);
if(temp__5804__auto__){
var seq__20902__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20902__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20902__$1);
var G__21190 = cljs.core.chunk_rest(seq__20902__$1);
var G__21191 = c__5568__auto__;
var G__21192 = cljs.core.count(c__5568__auto__);
var G__21193 = (0);
seq__20902 = G__21190;
chunk__20903 = G__21191;
count__20904 = G__21192;
i__20905 = G__21193;
continue;
} else {
var map__20914 = cljs.core.first(seq__20902__$1);
var map__20914__$1 = cljs.core.__destructure_map(map__20914);
var src = map__20914__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20914__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20914__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20914__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20914__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20915){var e_21194 = e20915;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21194);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21194.message)].join('')));
}

var G__21195 = cljs.core.next(seq__20902__$1);
var G__21196 = null;
var G__21197 = (0);
var G__21198 = (0);
seq__20902 = G__21195;
chunk__20903 = G__21196;
count__20904 = G__21197;
i__20905 = G__21198;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20916 = cljs.core.seq(js_requires);
var chunk__20917 = null;
var count__20918 = (0);
var i__20919 = (0);
while(true){
if((i__20919 < count__20918)){
var js_ns = chunk__20917.cljs$core$IIndexed$_nth$arity$2(null,i__20919);
var require_str_21199 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21199);


var G__21200 = seq__20916;
var G__21201 = chunk__20917;
var G__21202 = count__20918;
var G__21203 = (i__20919 + (1));
seq__20916 = G__21200;
chunk__20917 = G__21201;
count__20918 = G__21202;
i__20919 = G__21203;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20916);
if(temp__5804__auto__){
var seq__20916__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20916__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20916__$1);
var G__21204 = cljs.core.chunk_rest(seq__20916__$1);
var G__21205 = c__5568__auto__;
var G__21206 = cljs.core.count(c__5568__auto__);
var G__21207 = (0);
seq__20916 = G__21204;
chunk__20917 = G__21205;
count__20918 = G__21206;
i__20919 = G__21207;
continue;
} else {
var js_ns = cljs.core.first(seq__20916__$1);
var require_str_21208 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21208);


var G__21209 = cljs.core.next(seq__20916__$1);
var G__21210 = null;
var G__21211 = (0);
var G__21212 = (0);
seq__20916 = G__21209;
chunk__20917 = G__21210;
count__20918 = G__21211;
i__20919 = G__21212;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20921){
var map__20922 = p__20921;
var map__20922__$1 = cljs.core.__destructure_map(map__20922);
var msg = map__20922__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20922__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20922__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20923(s__20924){
return (new cljs.core.LazySeq(null,(function (){
var s__20924__$1 = s__20924;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20924__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20929 = cljs.core.first(xs__6360__auto__);
var map__20929__$1 = cljs.core.__destructure_map(map__20929);
var src = map__20929__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20929__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20929__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__20924__$1,map__20929,map__20929__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20922,map__20922__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20923_$_iter__20925(s__20926){
return (new cljs.core.LazySeq(null,((function (s__20924__$1,map__20929,map__20929__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20922,map__20922__$1,msg,info,reload_info){
return (function (){
var s__20926__$1 = s__20926;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20926__$1);
if(temp__5804__auto____$1){
var s__20926__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20926__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20926__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20928 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20927 = (0);
while(true){
if((i__20927 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__20927);
cljs.core.chunk_append(b__20928,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21213 = (i__20927 + (1));
i__20927 = G__21213;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20928),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20923_$_iter__20925(cljs.core.chunk_rest(s__20926__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20928),null);
}
} else {
var warning = cljs.core.first(s__20926__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20923_$_iter__20925(cljs.core.rest(s__20926__$2)));
}
} else {
return null;
}
break;
}
});})(s__20924__$1,map__20929,map__20929__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20922,map__20922__$1,msg,info,reload_info))
,null,null));
});})(s__20924__$1,map__20929,map__20929__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20922,map__20922__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20923(cljs.core.rest(s__20924__$1)));
} else {
var G__21214 = cljs.core.rest(s__20924__$1);
s__20924__$1 = G__21214;
continue;
}
} else {
var G__21215 = cljs.core.rest(s__20924__$1);
s__20924__$1 = G__21215;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20930_21216 = cljs.core.seq(warnings);
var chunk__20931_21217 = null;
var count__20932_21218 = (0);
var i__20933_21219 = (0);
while(true){
if((i__20933_21219 < count__20932_21218)){
var map__20936_21220 = chunk__20931_21217.cljs$core$IIndexed$_nth$arity$2(null,i__20933_21219);
var map__20936_21221__$1 = cljs.core.__destructure_map(map__20936_21220);
var w_21222 = map__20936_21221__$1;
var msg_21223__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20936_21221__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21224 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20936_21221__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20936_21221__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21226 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20936_21221__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21226)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21224),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21225),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21223__$1)].join(''));


var G__21227 = seq__20930_21216;
var G__21228 = chunk__20931_21217;
var G__21229 = count__20932_21218;
var G__21230 = (i__20933_21219 + (1));
seq__20930_21216 = G__21227;
chunk__20931_21217 = G__21228;
count__20932_21218 = G__21229;
i__20933_21219 = G__21230;
continue;
} else {
var temp__5804__auto___21231 = cljs.core.seq(seq__20930_21216);
if(temp__5804__auto___21231){
var seq__20930_21232__$1 = temp__5804__auto___21231;
if(cljs.core.chunked_seq_QMARK_(seq__20930_21232__$1)){
var c__5568__auto___21233 = cljs.core.chunk_first(seq__20930_21232__$1);
var G__21234 = cljs.core.chunk_rest(seq__20930_21232__$1);
var G__21235 = c__5568__auto___21233;
var G__21236 = cljs.core.count(c__5568__auto___21233);
var G__21237 = (0);
seq__20930_21216 = G__21234;
chunk__20931_21217 = G__21235;
count__20932_21218 = G__21236;
i__20933_21219 = G__21237;
continue;
} else {
var map__20937_21238 = cljs.core.first(seq__20930_21232__$1);
var map__20937_21239__$1 = cljs.core.__destructure_map(map__20937_21238);
var w_21240 = map__20937_21239__$1;
var msg_21241__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20937_21239__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20937_21239__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20937_21239__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21244 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20937_21239__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21244)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21242),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21243),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21241__$1)].join(''));


var G__21245 = cljs.core.next(seq__20930_21232__$1);
var G__21246 = null;
var G__21247 = (0);
var G__21248 = (0);
seq__20930_21216 = G__21245;
chunk__20931_21217 = G__21246;
count__20932_21218 = G__21247;
i__20933_21219 = G__21248;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20920_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20920_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20938){
var map__20939 = p__20938;
var map__20939__$1 = cljs.core.__destructure_map(map__20939);
var msg = map__20939__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20939__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20939__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20940 = cljs.core.seq(updates);
var chunk__20942 = null;
var count__20943 = (0);
var i__20944 = (0);
while(true){
if((i__20944 < count__20943)){
var path = chunk__20942.cljs$core$IIndexed$_nth$arity$2(null,i__20944);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21054_21249 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21058_21250 = null;
var count__21059_21251 = (0);
var i__21060_21252 = (0);
while(true){
if((i__21060_21252 < count__21059_21251)){
var node_21253 = chunk__21058_21250.cljs$core$IIndexed$_nth$arity$2(null,i__21060_21252);
if(cljs.core.not(node_21253.shadow$old)){
var path_match_21254 = shadow.cljs.devtools.client.browser.match_paths(node_21253.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21254)){
var new_link_21255 = (function (){var G__21086 = node_21253.cloneNode(true);
G__21086.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21254),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21086;
})();
(node_21253.shadow$old = true);

(new_link_21255.onload = ((function (seq__21054_21249,chunk__21058_21250,count__21059_21251,i__21060_21252,seq__20940,chunk__20942,count__20943,i__20944,new_link_21255,path_match_21254,node_21253,path,map__20939,map__20939__$1,msg,updates,reload_info){
return (function (e){
var seq__21087_21256 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21089_21257 = null;
var count__21090_21258 = (0);
var i__21091_21259 = (0);
while(true){
if((i__21091_21259 < count__21090_21258)){
var map__21095_21260 = chunk__21089_21257.cljs$core$IIndexed$_nth$arity$2(null,i__21091_21259);
var map__21095_21261__$1 = cljs.core.__destructure_map(map__21095_21260);
var task_21262 = map__21095_21261__$1;
var fn_str_21263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21095_21261__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21264 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21095_21261__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21265 = goog.getObjectByName(fn_str_21263,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21264)].join(''));

(fn_obj_21265.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21265.cljs$core$IFn$_invoke$arity$2(path,new_link_21255) : fn_obj_21265.call(null,path,new_link_21255));


var G__21266 = seq__21087_21256;
var G__21267 = chunk__21089_21257;
var G__21268 = count__21090_21258;
var G__21269 = (i__21091_21259 + (1));
seq__21087_21256 = G__21266;
chunk__21089_21257 = G__21267;
count__21090_21258 = G__21268;
i__21091_21259 = G__21269;
continue;
} else {
var temp__5804__auto___21270 = cljs.core.seq(seq__21087_21256);
if(temp__5804__auto___21270){
var seq__21087_21271__$1 = temp__5804__auto___21270;
if(cljs.core.chunked_seq_QMARK_(seq__21087_21271__$1)){
var c__5568__auto___21272 = cljs.core.chunk_first(seq__21087_21271__$1);
var G__21273 = cljs.core.chunk_rest(seq__21087_21271__$1);
var G__21274 = c__5568__auto___21272;
var G__21275 = cljs.core.count(c__5568__auto___21272);
var G__21276 = (0);
seq__21087_21256 = G__21273;
chunk__21089_21257 = G__21274;
count__21090_21258 = G__21275;
i__21091_21259 = G__21276;
continue;
} else {
var map__21096_21277 = cljs.core.first(seq__21087_21271__$1);
var map__21096_21278__$1 = cljs.core.__destructure_map(map__21096_21277);
var task_21279 = map__21096_21278__$1;
var fn_str_21280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21096_21278__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21096_21278__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21282 = goog.getObjectByName(fn_str_21280,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21281)].join(''));

(fn_obj_21282.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21282.cljs$core$IFn$_invoke$arity$2(path,new_link_21255) : fn_obj_21282.call(null,path,new_link_21255));


var G__21283 = cljs.core.next(seq__21087_21271__$1);
var G__21284 = null;
var G__21285 = (0);
var G__21286 = (0);
seq__21087_21256 = G__21283;
chunk__21089_21257 = G__21284;
count__21090_21258 = G__21285;
i__21091_21259 = G__21286;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21253);
});})(seq__21054_21249,chunk__21058_21250,count__21059_21251,i__21060_21252,seq__20940,chunk__20942,count__20943,i__20944,new_link_21255,path_match_21254,node_21253,path,map__20939,map__20939__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21254], 0));

goog.dom.insertSiblingAfter(new_link_21255,node_21253);


var G__21287 = seq__21054_21249;
var G__21288 = chunk__21058_21250;
var G__21289 = count__21059_21251;
var G__21290 = (i__21060_21252 + (1));
seq__21054_21249 = G__21287;
chunk__21058_21250 = G__21288;
count__21059_21251 = G__21289;
i__21060_21252 = G__21290;
continue;
} else {
var G__21291 = seq__21054_21249;
var G__21292 = chunk__21058_21250;
var G__21293 = count__21059_21251;
var G__21294 = (i__21060_21252 + (1));
seq__21054_21249 = G__21291;
chunk__21058_21250 = G__21292;
count__21059_21251 = G__21293;
i__21060_21252 = G__21294;
continue;
}
} else {
var G__21295 = seq__21054_21249;
var G__21296 = chunk__21058_21250;
var G__21297 = count__21059_21251;
var G__21298 = (i__21060_21252 + (1));
seq__21054_21249 = G__21295;
chunk__21058_21250 = G__21296;
count__21059_21251 = G__21297;
i__21060_21252 = G__21298;
continue;
}
} else {
var temp__5804__auto___21299 = cljs.core.seq(seq__21054_21249);
if(temp__5804__auto___21299){
var seq__21054_21300__$1 = temp__5804__auto___21299;
if(cljs.core.chunked_seq_QMARK_(seq__21054_21300__$1)){
var c__5568__auto___21301 = cljs.core.chunk_first(seq__21054_21300__$1);
var G__21302 = cljs.core.chunk_rest(seq__21054_21300__$1);
var G__21303 = c__5568__auto___21301;
var G__21304 = cljs.core.count(c__5568__auto___21301);
var G__21305 = (0);
seq__21054_21249 = G__21302;
chunk__21058_21250 = G__21303;
count__21059_21251 = G__21304;
i__21060_21252 = G__21305;
continue;
} else {
var node_21306 = cljs.core.first(seq__21054_21300__$1);
if(cljs.core.not(node_21306.shadow$old)){
var path_match_21307 = shadow.cljs.devtools.client.browser.match_paths(node_21306.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21307)){
var new_link_21308 = (function (){var G__21097 = node_21306.cloneNode(true);
G__21097.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21307),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21097;
})();
(node_21306.shadow$old = true);

(new_link_21308.onload = ((function (seq__21054_21249,chunk__21058_21250,count__21059_21251,i__21060_21252,seq__20940,chunk__20942,count__20943,i__20944,new_link_21308,path_match_21307,node_21306,seq__21054_21300__$1,temp__5804__auto___21299,path,map__20939,map__20939__$1,msg,updates,reload_info){
return (function (e){
var seq__21098_21309 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21100_21310 = null;
var count__21101_21311 = (0);
var i__21102_21312 = (0);
while(true){
if((i__21102_21312 < count__21101_21311)){
var map__21106_21313 = chunk__21100_21310.cljs$core$IIndexed$_nth$arity$2(null,i__21102_21312);
var map__21106_21314__$1 = cljs.core.__destructure_map(map__21106_21313);
var task_21315 = map__21106_21314__$1;
var fn_str_21316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21106_21314__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21106_21314__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21318 = goog.getObjectByName(fn_str_21316,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21317)].join(''));

(fn_obj_21318.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21318.cljs$core$IFn$_invoke$arity$2(path,new_link_21308) : fn_obj_21318.call(null,path,new_link_21308));


var G__21319 = seq__21098_21309;
var G__21320 = chunk__21100_21310;
var G__21321 = count__21101_21311;
var G__21322 = (i__21102_21312 + (1));
seq__21098_21309 = G__21319;
chunk__21100_21310 = G__21320;
count__21101_21311 = G__21321;
i__21102_21312 = G__21322;
continue;
} else {
var temp__5804__auto___21323__$1 = cljs.core.seq(seq__21098_21309);
if(temp__5804__auto___21323__$1){
var seq__21098_21324__$1 = temp__5804__auto___21323__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21098_21324__$1)){
var c__5568__auto___21325 = cljs.core.chunk_first(seq__21098_21324__$1);
var G__21326 = cljs.core.chunk_rest(seq__21098_21324__$1);
var G__21327 = c__5568__auto___21325;
var G__21328 = cljs.core.count(c__5568__auto___21325);
var G__21329 = (0);
seq__21098_21309 = G__21326;
chunk__21100_21310 = G__21327;
count__21101_21311 = G__21328;
i__21102_21312 = G__21329;
continue;
} else {
var map__21107_21330 = cljs.core.first(seq__21098_21324__$1);
var map__21107_21331__$1 = cljs.core.__destructure_map(map__21107_21330);
var task_21332 = map__21107_21331__$1;
var fn_str_21333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21107_21331__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21107_21331__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21335 = goog.getObjectByName(fn_str_21333,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21334)].join(''));

(fn_obj_21335.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21335.cljs$core$IFn$_invoke$arity$2(path,new_link_21308) : fn_obj_21335.call(null,path,new_link_21308));


var G__21336 = cljs.core.next(seq__21098_21324__$1);
var G__21337 = null;
var G__21338 = (0);
var G__21339 = (0);
seq__21098_21309 = G__21336;
chunk__21100_21310 = G__21337;
count__21101_21311 = G__21338;
i__21102_21312 = G__21339;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21306);
});})(seq__21054_21249,chunk__21058_21250,count__21059_21251,i__21060_21252,seq__20940,chunk__20942,count__20943,i__20944,new_link_21308,path_match_21307,node_21306,seq__21054_21300__$1,temp__5804__auto___21299,path,map__20939,map__20939__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21307], 0));

goog.dom.insertSiblingAfter(new_link_21308,node_21306);


var G__21340 = cljs.core.next(seq__21054_21300__$1);
var G__21341 = null;
var G__21342 = (0);
var G__21343 = (0);
seq__21054_21249 = G__21340;
chunk__21058_21250 = G__21341;
count__21059_21251 = G__21342;
i__21060_21252 = G__21343;
continue;
} else {
var G__21344 = cljs.core.next(seq__21054_21300__$1);
var G__21345 = null;
var G__21346 = (0);
var G__21347 = (0);
seq__21054_21249 = G__21344;
chunk__21058_21250 = G__21345;
count__21059_21251 = G__21346;
i__21060_21252 = G__21347;
continue;
}
} else {
var G__21348 = cljs.core.next(seq__21054_21300__$1);
var G__21349 = null;
var G__21350 = (0);
var G__21351 = (0);
seq__21054_21249 = G__21348;
chunk__21058_21250 = G__21349;
count__21059_21251 = G__21350;
i__21060_21252 = G__21351;
continue;
}
}
} else {
}
}
break;
}


var G__21352 = seq__20940;
var G__21353 = chunk__20942;
var G__21354 = count__20943;
var G__21355 = (i__20944 + (1));
seq__20940 = G__21352;
chunk__20942 = G__21353;
count__20943 = G__21354;
i__20944 = G__21355;
continue;
} else {
var G__21356 = seq__20940;
var G__21357 = chunk__20942;
var G__21358 = count__20943;
var G__21359 = (i__20944 + (1));
seq__20940 = G__21356;
chunk__20942 = G__21357;
count__20943 = G__21358;
i__20944 = G__21359;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20940);
if(temp__5804__auto__){
var seq__20940__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20940__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20940__$1);
var G__21360 = cljs.core.chunk_rest(seq__20940__$1);
var G__21361 = c__5568__auto__;
var G__21362 = cljs.core.count(c__5568__auto__);
var G__21363 = (0);
seq__20940 = G__21360;
chunk__20942 = G__21361;
count__20943 = G__21362;
i__20944 = G__21363;
continue;
} else {
var path = cljs.core.first(seq__20940__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21108_21364 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21112_21365 = null;
var count__21113_21366 = (0);
var i__21114_21367 = (0);
while(true){
if((i__21114_21367 < count__21113_21366)){
var node_21368 = chunk__21112_21365.cljs$core$IIndexed$_nth$arity$2(null,i__21114_21367);
if(cljs.core.not(node_21368.shadow$old)){
var path_match_21369 = shadow.cljs.devtools.client.browser.match_paths(node_21368.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21369)){
var new_link_21370 = (function (){var G__21140 = node_21368.cloneNode(true);
G__21140.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21369),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21140;
})();
(node_21368.shadow$old = true);

(new_link_21370.onload = ((function (seq__21108_21364,chunk__21112_21365,count__21113_21366,i__21114_21367,seq__20940,chunk__20942,count__20943,i__20944,new_link_21370,path_match_21369,node_21368,path,seq__20940__$1,temp__5804__auto__,map__20939,map__20939__$1,msg,updates,reload_info){
return (function (e){
var seq__21141_21371 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21143_21372 = null;
var count__21144_21373 = (0);
var i__21145_21374 = (0);
while(true){
if((i__21145_21374 < count__21144_21373)){
var map__21149_21375 = chunk__21143_21372.cljs$core$IIndexed$_nth$arity$2(null,i__21145_21374);
var map__21149_21376__$1 = cljs.core.__destructure_map(map__21149_21375);
var task_21377 = map__21149_21376__$1;
var fn_str_21378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21149_21376__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21379 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21149_21376__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21380 = goog.getObjectByName(fn_str_21378,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21379)].join(''));

(fn_obj_21380.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21380.cljs$core$IFn$_invoke$arity$2(path,new_link_21370) : fn_obj_21380.call(null,path,new_link_21370));


var G__21381 = seq__21141_21371;
var G__21382 = chunk__21143_21372;
var G__21383 = count__21144_21373;
var G__21384 = (i__21145_21374 + (1));
seq__21141_21371 = G__21381;
chunk__21143_21372 = G__21382;
count__21144_21373 = G__21383;
i__21145_21374 = G__21384;
continue;
} else {
var temp__5804__auto___21385__$1 = cljs.core.seq(seq__21141_21371);
if(temp__5804__auto___21385__$1){
var seq__21141_21386__$1 = temp__5804__auto___21385__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21141_21386__$1)){
var c__5568__auto___21387 = cljs.core.chunk_first(seq__21141_21386__$1);
var G__21388 = cljs.core.chunk_rest(seq__21141_21386__$1);
var G__21389 = c__5568__auto___21387;
var G__21390 = cljs.core.count(c__5568__auto___21387);
var G__21391 = (0);
seq__21141_21371 = G__21388;
chunk__21143_21372 = G__21389;
count__21144_21373 = G__21390;
i__21145_21374 = G__21391;
continue;
} else {
var map__21150_21392 = cljs.core.first(seq__21141_21386__$1);
var map__21150_21393__$1 = cljs.core.__destructure_map(map__21150_21392);
var task_21394 = map__21150_21393__$1;
var fn_str_21395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21150_21393__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21396 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21150_21393__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21397 = goog.getObjectByName(fn_str_21395,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21396)].join(''));

(fn_obj_21397.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21397.cljs$core$IFn$_invoke$arity$2(path,new_link_21370) : fn_obj_21397.call(null,path,new_link_21370));


var G__21398 = cljs.core.next(seq__21141_21386__$1);
var G__21399 = null;
var G__21400 = (0);
var G__21401 = (0);
seq__21141_21371 = G__21398;
chunk__21143_21372 = G__21399;
count__21144_21373 = G__21400;
i__21145_21374 = G__21401;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21368);
});})(seq__21108_21364,chunk__21112_21365,count__21113_21366,i__21114_21367,seq__20940,chunk__20942,count__20943,i__20944,new_link_21370,path_match_21369,node_21368,path,seq__20940__$1,temp__5804__auto__,map__20939,map__20939__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21369], 0));

goog.dom.insertSiblingAfter(new_link_21370,node_21368);


var G__21402 = seq__21108_21364;
var G__21403 = chunk__21112_21365;
var G__21404 = count__21113_21366;
var G__21405 = (i__21114_21367 + (1));
seq__21108_21364 = G__21402;
chunk__21112_21365 = G__21403;
count__21113_21366 = G__21404;
i__21114_21367 = G__21405;
continue;
} else {
var G__21406 = seq__21108_21364;
var G__21407 = chunk__21112_21365;
var G__21408 = count__21113_21366;
var G__21409 = (i__21114_21367 + (1));
seq__21108_21364 = G__21406;
chunk__21112_21365 = G__21407;
count__21113_21366 = G__21408;
i__21114_21367 = G__21409;
continue;
}
} else {
var G__21410 = seq__21108_21364;
var G__21411 = chunk__21112_21365;
var G__21412 = count__21113_21366;
var G__21413 = (i__21114_21367 + (1));
seq__21108_21364 = G__21410;
chunk__21112_21365 = G__21411;
count__21113_21366 = G__21412;
i__21114_21367 = G__21413;
continue;
}
} else {
var temp__5804__auto___21414__$1 = cljs.core.seq(seq__21108_21364);
if(temp__5804__auto___21414__$1){
var seq__21108_21415__$1 = temp__5804__auto___21414__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21108_21415__$1)){
var c__5568__auto___21416 = cljs.core.chunk_first(seq__21108_21415__$1);
var G__21417 = cljs.core.chunk_rest(seq__21108_21415__$1);
var G__21418 = c__5568__auto___21416;
var G__21419 = cljs.core.count(c__5568__auto___21416);
var G__21420 = (0);
seq__21108_21364 = G__21417;
chunk__21112_21365 = G__21418;
count__21113_21366 = G__21419;
i__21114_21367 = G__21420;
continue;
} else {
var node_21421 = cljs.core.first(seq__21108_21415__$1);
if(cljs.core.not(node_21421.shadow$old)){
var path_match_21422 = shadow.cljs.devtools.client.browser.match_paths(node_21421.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21422)){
var new_link_21423 = (function (){var G__21151 = node_21421.cloneNode(true);
G__21151.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21422),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21151;
})();
(node_21421.shadow$old = true);

(new_link_21423.onload = ((function (seq__21108_21364,chunk__21112_21365,count__21113_21366,i__21114_21367,seq__20940,chunk__20942,count__20943,i__20944,new_link_21423,path_match_21422,node_21421,seq__21108_21415__$1,temp__5804__auto___21414__$1,path,seq__20940__$1,temp__5804__auto__,map__20939,map__20939__$1,msg,updates,reload_info){
return (function (e){
var seq__21152_21424 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21154_21425 = null;
var count__21155_21426 = (0);
var i__21156_21427 = (0);
while(true){
if((i__21156_21427 < count__21155_21426)){
var map__21160_21428 = chunk__21154_21425.cljs$core$IIndexed$_nth$arity$2(null,i__21156_21427);
var map__21160_21429__$1 = cljs.core.__destructure_map(map__21160_21428);
var task_21430 = map__21160_21429__$1;
var fn_str_21431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21160_21429__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21432 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21160_21429__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21433 = goog.getObjectByName(fn_str_21431,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21432)].join(''));

(fn_obj_21433.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21433.cljs$core$IFn$_invoke$arity$2(path,new_link_21423) : fn_obj_21433.call(null,path,new_link_21423));


var G__21434 = seq__21152_21424;
var G__21435 = chunk__21154_21425;
var G__21436 = count__21155_21426;
var G__21437 = (i__21156_21427 + (1));
seq__21152_21424 = G__21434;
chunk__21154_21425 = G__21435;
count__21155_21426 = G__21436;
i__21156_21427 = G__21437;
continue;
} else {
var temp__5804__auto___21438__$2 = cljs.core.seq(seq__21152_21424);
if(temp__5804__auto___21438__$2){
var seq__21152_21439__$1 = temp__5804__auto___21438__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21152_21439__$1)){
var c__5568__auto___21440 = cljs.core.chunk_first(seq__21152_21439__$1);
var G__21441 = cljs.core.chunk_rest(seq__21152_21439__$1);
var G__21442 = c__5568__auto___21440;
var G__21443 = cljs.core.count(c__5568__auto___21440);
var G__21444 = (0);
seq__21152_21424 = G__21441;
chunk__21154_21425 = G__21442;
count__21155_21426 = G__21443;
i__21156_21427 = G__21444;
continue;
} else {
var map__21161_21445 = cljs.core.first(seq__21152_21439__$1);
var map__21161_21446__$1 = cljs.core.__destructure_map(map__21161_21445);
var task_21447 = map__21161_21446__$1;
var fn_str_21448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21161_21446__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21449 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21161_21446__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21450 = goog.getObjectByName(fn_str_21448,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21449)].join(''));

(fn_obj_21450.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21450.cljs$core$IFn$_invoke$arity$2(path,new_link_21423) : fn_obj_21450.call(null,path,new_link_21423));


var G__21451 = cljs.core.next(seq__21152_21439__$1);
var G__21452 = null;
var G__21453 = (0);
var G__21454 = (0);
seq__21152_21424 = G__21451;
chunk__21154_21425 = G__21452;
count__21155_21426 = G__21453;
i__21156_21427 = G__21454;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21421);
});})(seq__21108_21364,chunk__21112_21365,count__21113_21366,i__21114_21367,seq__20940,chunk__20942,count__20943,i__20944,new_link_21423,path_match_21422,node_21421,seq__21108_21415__$1,temp__5804__auto___21414__$1,path,seq__20940__$1,temp__5804__auto__,map__20939,map__20939__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21422], 0));

goog.dom.insertSiblingAfter(new_link_21423,node_21421);


var G__21455 = cljs.core.next(seq__21108_21415__$1);
var G__21456 = null;
var G__21457 = (0);
var G__21458 = (0);
seq__21108_21364 = G__21455;
chunk__21112_21365 = G__21456;
count__21113_21366 = G__21457;
i__21114_21367 = G__21458;
continue;
} else {
var G__21459 = cljs.core.next(seq__21108_21415__$1);
var G__21460 = null;
var G__21461 = (0);
var G__21462 = (0);
seq__21108_21364 = G__21459;
chunk__21112_21365 = G__21460;
count__21113_21366 = G__21461;
i__21114_21367 = G__21462;
continue;
}
} else {
var G__21463 = cljs.core.next(seq__21108_21415__$1);
var G__21464 = null;
var G__21465 = (0);
var G__21466 = (0);
seq__21108_21364 = G__21463;
chunk__21112_21365 = G__21464;
count__21113_21366 = G__21465;
i__21114_21367 = G__21466;
continue;
}
}
} else {
}
}
break;
}


var G__21467 = cljs.core.next(seq__20940__$1);
var G__21468 = null;
var G__21469 = (0);
var G__21470 = (0);
seq__20940 = G__21467;
chunk__20942 = G__21468;
count__20943 = G__21469;
i__20944 = G__21470;
continue;
} else {
var G__21471 = cljs.core.next(seq__20940__$1);
var G__21472 = null;
var G__21473 = (0);
var G__21474 = (0);
seq__20940 = G__21471;
chunk__20942 = G__21472;
count__20943 = G__21473;
i__20944 = G__21474;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__21162){
var map__21163 = p__21162;
var map__21163__$1 = cljs.core.__destructure_map(map__21163);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21163__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__21164){
var map__21165 = p__21164;
var map__21165__$1 = cljs.core.__destructure_map(map__21165);
var _ = map__21165__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21165__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21166,done,error){
var map__21167 = p__21166;
var map__21167__$1 = cljs.core.__destructure_map(map__21167);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21167__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21168,done,error){
var map__21169 = p__21168;
var map__21169__$1 = cljs.core.__destructure_map(map__21169);
var msg = map__21169__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21169__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21169__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21169__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21170){
var map__21171 = p__21170;
var map__21171__$1 = cljs.core.__destructure_map(map__21171);
var src = map__21171__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21171__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21172 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21172) : done.call(null,G__21172));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21173){
var map__21174 = p__21173;
var map__21174__$1 = cljs.core.__destructure_map(map__21174);
var msg__$1 = map__21174__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21174__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21175){var ex = e21175;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21176){
var map__21177 = p__21176;
var map__21177__$1 = cljs.core.__destructure_map(map__21177);
var env = map__21177__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21177__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21178){
var map__21179 = p__21178;
var map__21179__$1 = cljs.core.__destructure_map(map__21179);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21179__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21179__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21180){
var map__21181 = p__21180;
var map__21181__$1 = cljs.core.__destructure_map(map__21181);
var svc = map__21181__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21181__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
