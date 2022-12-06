goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___22975 = arguments.length;
var i__5770__auto___22976 = (0);
while(true){
if((i__5770__auto___22976 < len__5769__auto___22975)){
args__5775__auto__.push((arguments[i__5770__auto___22976]));

var G__22977 = (i__5770__auto___22976 + (1));
i__5770__auto___22976 = G__22977;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq22517){
var G__22518 = cljs.core.first(seq22517);
var seq22517__$1 = cljs.core.next(seq22517);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22518,seq22517__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__22523 = cljs.core.seq(sources);
var chunk__22524 = null;
var count__22525 = (0);
var i__22526 = (0);
while(true){
if((i__22526 < count__22525)){
var map__22534 = chunk__22524.cljs$core$IIndexed$_nth$arity$2(null,i__22526);
var map__22534__$1 = cljs.core.__destructure_map(map__22534);
var src = map__22534__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22534__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22534__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22534__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22534__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22535){var e_22978 = e22535;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22978);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22978.message)].join('')));
}

var G__22979 = seq__22523;
var G__22980 = chunk__22524;
var G__22981 = count__22525;
var G__22982 = (i__22526 + (1));
seq__22523 = G__22979;
chunk__22524 = G__22980;
count__22525 = G__22981;
i__22526 = G__22982;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22523);
if(temp__5804__auto__){
var seq__22523__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22523__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22523__$1);
var G__22983 = cljs.core.chunk_rest(seq__22523__$1);
var G__22984 = c__5568__auto__;
var G__22985 = cljs.core.count(c__5568__auto__);
var G__22986 = (0);
seq__22523 = G__22983;
chunk__22524 = G__22984;
count__22525 = G__22985;
i__22526 = G__22986;
continue;
} else {
var map__22536 = cljs.core.first(seq__22523__$1);
var map__22536__$1 = cljs.core.__destructure_map(map__22536);
var src = map__22536__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22536__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22536__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22536__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22536__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e22539){var e_22987 = e22539;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_22987);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_22987.message)].join('')));
}

var G__22988 = cljs.core.next(seq__22523__$1);
var G__22989 = null;
var G__22990 = (0);
var G__22991 = (0);
seq__22523 = G__22988;
chunk__22524 = G__22989;
count__22525 = G__22990;
i__22526 = G__22991;
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
var seq__22544 = cljs.core.seq(js_requires);
var chunk__22545 = null;
var count__22546 = (0);
var i__22547 = (0);
while(true){
if((i__22547 < count__22546)){
var js_ns = chunk__22545.cljs$core$IIndexed$_nth$arity$2(null,i__22547);
var require_str_22992 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_22992);


var G__22993 = seq__22544;
var G__22994 = chunk__22545;
var G__22995 = count__22546;
var G__22996 = (i__22547 + (1));
seq__22544 = G__22993;
chunk__22545 = G__22994;
count__22546 = G__22995;
i__22547 = G__22996;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22544);
if(temp__5804__auto__){
var seq__22544__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22544__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22544__$1);
var G__22997 = cljs.core.chunk_rest(seq__22544__$1);
var G__22998 = c__5568__auto__;
var G__22999 = cljs.core.count(c__5568__auto__);
var G__23000 = (0);
seq__22544 = G__22997;
chunk__22545 = G__22998;
count__22546 = G__22999;
i__22547 = G__23000;
continue;
} else {
var js_ns = cljs.core.first(seq__22544__$1);
var require_str_23001 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_23001);


var G__23002 = cljs.core.next(seq__22544__$1);
var G__23003 = null;
var G__23004 = (0);
var G__23005 = (0);
seq__22544 = G__23002;
chunk__22545 = G__23003;
count__22546 = G__23004;
i__22547 = G__23005;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__22556){
var map__22557 = p__22556;
var map__22557__$1 = cljs.core.__destructure_map(map__22557);
var msg = map__22557__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22557__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22557__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22558(s__22559){
return (new cljs.core.LazySeq(null,(function (){
var s__22559__$1 = s__22559;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__22559__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__22566 = cljs.core.first(xs__6360__auto__);
var map__22566__$1 = cljs.core.__destructure_map(map__22566);
var src = map__22566__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22566__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22566__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__22559__$1,map__22566,map__22566__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22557,map__22557__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22558_$_iter__22560(s__22561){
return (new cljs.core.LazySeq(null,((function (s__22559__$1,map__22566,map__22566__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22557,map__22557__$1,msg,info,reload_info){
return (function (){
var s__22561__$1 = s__22561;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__22561__$1);
if(temp__5804__auto____$1){
var s__22561__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__22561__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__22561__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__22563 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__22562 = (0);
while(true){
if((i__22562 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__22562);
cljs.core.chunk_append(b__22563,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__23006 = (i__22562 + (1));
i__22562 = G__23006;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__22563),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22558_$_iter__22560(cljs.core.chunk_rest(s__22561__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__22563),null);
}
} else {
var warning = cljs.core.first(s__22561__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22558_$_iter__22560(cljs.core.rest(s__22561__$2)));
}
} else {
return null;
}
break;
}
});})(s__22559__$1,map__22566,map__22566__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22557,map__22557__$1,msg,info,reload_info))
,null,null));
});})(s__22559__$1,map__22566,map__22566__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__22557,map__22557__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__22558(cljs.core.rest(s__22559__$1)));
} else {
var G__23007 = cljs.core.rest(s__22559__$1);
s__22559__$1 = G__23007;
continue;
}
} else {
var G__23008 = cljs.core.rest(s__22559__$1);
s__22559__$1 = G__23008;
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
var seq__22567_23009 = cljs.core.seq(warnings);
var chunk__22568_23010 = null;
var count__22569_23011 = (0);
var i__22570_23012 = (0);
while(true){
if((i__22570_23012 < count__22569_23011)){
var map__22577_23013 = chunk__22568_23010.cljs$core$IIndexed$_nth$arity$2(null,i__22570_23012);
var map__22577_23014__$1 = cljs.core.__destructure_map(map__22577_23013);
var w_23015 = map__22577_23014__$1;
var msg_23016__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22577_23014__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23017 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22577_23014__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23018 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22577_23014__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23019 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22577_23014__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23019)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23017),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23018),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23016__$1)].join(''));


var G__23021 = seq__22567_23009;
var G__23022 = chunk__22568_23010;
var G__23023 = count__22569_23011;
var G__23024 = (i__22570_23012 + (1));
seq__22567_23009 = G__23021;
chunk__22568_23010 = G__23022;
count__22569_23011 = G__23023;
i__22570_23012 = G__23024;
continue;
} else {
var temp__5804__auto___23025 = cljs.core.seq(seq__22567_23009);
if(temp__5804__auto___23025){
var seq__22567_23026__$1 = temp__5804__auto___23025;
if(cljs.core.chunked_seq_QMARK_(seq__22567_23026__$1)){
var c__5568__auto___23027 = cljs.core.chunk_first(seq__22567_23026__$1);
var G__23028 = cljs.core.chunk_rest(seq__22567_23026__$1);
var G__23029 = c__5568__auto___23027;
var G__23030 = cljs.core.count(c__5568__auto___23027);
var G__23031 = (0);
seq__22567_23009 = G__23028;
chunk__22568_23010 = G__23029;
count__22569_23011 = G__23030;
i__22570_23012 = G__23031;
continue;
} else {
var map__22578_23032 = cljs.core.first(seq__22567_23026__$1);
var map__22578_23033__$1 = cljs.core.__destructure_map(map__22578_23032);
var w_23034 = map__22578_23033__$1;
var msg_23035__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22578_23033__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_23036 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22578_23033__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_23037 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22578_23033__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_23038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22578_23033__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_23038)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_23036),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_23037),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_23035__$1)].join(''));


var G__23039 = cljs.core.next(seq__22567_23026__$1);
var G__23040 = null;
var G__23041 = (0);
var G__23042 = (0);
seq__22567_23009 = G__23039;
chunk__22568_23010 = G__23040;
count__22569_23011 = G__23041;
i__22570_23012 = G__23042;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__22554_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__22554_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__22586){
var map__22587 = p__22586;
var map__22587__$1 = cljs.core.__destructure_map(map__22587);
var msg = map__22587__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22587__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22587__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__22588 = cljs.core.seq(updates);
var chunk__22590 = null;
var count__22591 = (0);
var i__22592 = (0);
while(true){
if((i__22592 < count__22591)){
var path = chunk__22590.cljs$core$IIndexed$_nth$arity$2(null,i__22592);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22758_23044 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22766_23045 = null;
var count__22767_23046 = (0);
var i__22768_23047 = (0);
while(true){
if((i__22768_23047 < count__22767_23046)){
var node_23048 = chunk__22766_23045.cljs$core$IIndexed$_nth$arity$2(null,i__22768_23047);
if(cljs.core.not(node_23048.shadow$old)){
var path_match_23049 = shadow.cljs.devtools.client.browser.match_paths(node_23048.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23049)){
var new_link_23050 = (function (){var G__22841 = node_23048.cloneNode(true);
G__22841.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23049),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22841;
})();
(node_23048.shadow$old = true);

(new_link_23050.onload = ((function (seq__22758_23044,chunk__22766_23045,count__22767_23046,i__22768_23047,seq__22588,chunk__22590,count__22591,i__22592,new_link_23050,path_match_23049,node_23048,path,map__22587,map__22587__$1,msg,updates,reload_info){
return (function (e){
var seq__22843_23051 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22845_23052 = null;
var count__22846_23053 = (0);
var i__22847_23054 = (0);
while(true){
if((i__22847_23054 < count__22846_23053)){
var map__22851_23055 = chunk__22845_23052.cljs$core$IIndexed$_nth$arity$2(null,i__22847_23054);
var map__22851_23056__$1 = cljs.core.__destructure_map(map__22851_23055);
var task_23057 = map__22851_23056__$1;
var fn_str_23058 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22851_23056__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23059 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22851_23056__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23060 = goog.getObjectByName(fn_str_23058,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23059)].join(''));

(fn_obj_23060.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23060.cljs$core$IFn$_invoke$arity$2(path,new_link_23050) : fn_obj_23060.call(null,path,new_link_23050));


var G__23061 = seq__22843_23051;
var G__23062 = chunk__22845_23052;
var G__23063 = count__22846_23053;
var G__23064 = (i__22847_23054 + (1));
seq__22843_23051 = G__23061;
chunk__22845_23052 = G__23062;
count__22846_23053 = G__23063;
i__22847_23054 = G__23064;
continue;
} else {
var temp__5804__auto___23065 = cljs.core.seq(seq__22843_23051);
if(temp__5804__auto___23065){
var seq__22843_23066__$1 = temp__5804__auto___23065;
if(cljs.core.chunked_seq_QMARK_(seq__22843_23066__$1)){
var c__5568__auto___23067 = cljs.core.chunk_first(seq__22843_23066__$1);
var G__23068 = cljs.core.chunk_rest(seq__22843_23066__$1);
var G__23069 = c__5568__auto___23067;
var G__23070 = cljs.core.count(c__5568__auto___23067);
var G__23071 = (0);
seq__22843_23051 = G__23068;
chunk__22845_23052 = G__23069;
count__22846_23053 = G__23070;
i__22847_23054 = G__23071;
continue;
} else {
var map__22852_23072 = cljs.core.first(seq__22843_23066__$1);
var map__22852_23073__$1 = cljs.core.__destructure_map(map__22852_23072);
var task_23074 = map__22852_23073__$1;
var fn_str_23075 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22852_23073__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22852_23073__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23077 = goog.getObjectByName(fn_str_23075,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23076)].join(''));

(fn_obj_23077.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23077.cljs$core$IFn$_invoke$arity$2(path,new_link_23050) : fn_obj_23077.call(null,path,new_link_23050));


var G__23079 = cljs.core.next(seq__22843_23066__$1);
var G__23080 = null;
var G__23081 = (0);
var G__23082 = (0);
seq__22843_23051 = G__23079;
chunk__22845_23052 = G__23080;
count__22846_23053 = G__23081;
i__22847_23054 = G__23082;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23048);
});})(seq__22758_23044,chunk__22766_23045,count__22767_23046,i__22768_23047,seq__22588,chunk__22590,count__22591,i__22592,new_link_23050,path_match_23049,node_23048,path,map__22587,map__22587__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23049], 0));

goog.dom.insertSiblingAfter(new_link_23050,node_23048);


var G__23083 = seq__22758_23044;
var G__23084 = chunk__22766_23045;
var G__23085 = count__22767_23046;
var G__23086 = (i__22768_23047 + (1));
seq__22758_23044 = G__23083;
chunk__22766_23045 = G__23084;
count__22767_23046 = G__23085;
i__22768_23047 = G__23086;
continue;
} else {
var G__23087 = seq__22758_23044;
var G__23088 = chunk__22766_23045;
var G__23089 = count__22767_23046;
var G__23090 = (i__22768_23047 + (1));
seq__22758_23044 = G__23087;
chunk__22766_23045 = G__23088;
count__22767_23046 = G__23089;
i__22768_23047 = G__23090;
continue;
}
} else {
var G__23091 = seq__22758_23044;
var G__23092 = chunk__22766_23045;
var G__23093 = count__22767_23046;
var G__23094 = (i__22768_23047 + (1));
seq__22758_23044 = G__23091;
chunk__22766_23045 = G__23092;
count__22767_23046 = G__23093;
i__22768_23047 = G__23094;
continue;
}
} else {
var temp__5804__auto___23095 = cljs.core.seq(seq__22758_23044);
if(temp__5804__auto___23095){
var seq__22758_23096__$1 = temp__5804__auto___23095;
if(cljs.core.chunked_seq_QMARK_(seq__22758_23096__$1)){
var c__5568__auto___23097 = cljs.core.chunk_first(seq__22758_23096__$1);
var G__23098 = cljs.core.chunk_rest(seq__22758_23096__$1);
var G__23099 = c__5568__auto___23097;
var G__23100 = cljs.core.count(c__5568__auto___23097);
var G__23101 = (0);
seq__22758_23044 = G__23098;
chunk__22766_23045 = G__23099;
count__22767_23046 = G__23100;
i__22768_23047 = G__23101;
continue;
} else {
var node_23102 = cljs.core.first(seq__22758_23096__$1);
if(cljs.core.not(node_23102.shadow$old)){
var path_match_23103 = shadow.cljs.devtools.client.browser.match_paths(node_23102.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23103)){
var new_link_23104 = (function (){var G__22853 = node_23102.cloneNode(true);
G__22853.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23103),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22853;
})();
(node_23102.shadow$old = true);

(new_link_23104.onload = ((function (seq__22758_23044,chunk__22766_23045,count__22767_23046,i__22768_23047,seq__22588,chunk__22590,count__22591,i__22592,new_link_23104,path_match_23103,node_23102,seq__22758_23096__$1,temp__5804__auto___23095,path,map__22587,map__22587__$1,msg,updates,reload_info){
return (function (e){
var seq__22854_23105 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22856_23106 = null;
var count__22857_23107 = (0);
var i__22858_23108 = (0);
while(true){
if((i__22858_23108 < count__22857_23107)){
var map__22862_23109 = chunk__22856_23106.cljs$core$IIndexed$_nth$arity$2(null,i__22858_23108);
var map__22862_23110__$1 = cljs.core.__destructure_map(map__22862_23109);
var task_23111 = map__22862_23110__$1;
var fn_str_23112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22862_23110__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22862_23110__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23115 = goog.getObjectByName(fn_str_23112,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23113)].join(''));

(fn_obj_23115.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23115.cljs$core$IFn$_invoke$arity$2(path,new_link_23104) : fn_obj_23115.call(null,path,new_link_23104));


var G__23116 = seq__22854_23105;
var G__23117 = chunk__22856_23106;
var G__23118 = count__22857_23107;
var G__23119 = (i__22858_23108 + (1));
seq__22854_23105 = G__23116;
chunk__22856_23106 = G__23117;
count__22857_23107 = G__23118;
i__22858_23108 = G__23119;
continue;
} else {
var temp__5804__auto___23120__$1 = cljs.core.seq(seq__22854_23105);
if(temp__5804__auto___23120__$1){
var seq__22854_23121__$1 = temp__5804__auto___23120__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22854_23121__$1)){
var c__5568__auto___23122 = cljs.core.chunk_first(seq__22854_23121__$1);
var G__23123 = cljs.core.chunk_rest(seq__22854_23121__$1);
var G__23124 = c__5568__auto___23122;
var G__23125 = cljs.core.count(c__5568__auto___23122);
var G__23126 = (0);
seq__22854_23105 = G__23123;
chunk__22856_23106 = G__23124;
count__22857_23107 = G__23125;
i__22858_23108 = G__23126;
continue;
} else {
var map__22865_23127 = cljs.core.first(seq__22854_23121__$1);
var map__22865_23128__$1 = cljs.core.__destructure_map(map__22865_23127);
var task_23129 = map__22865_23128__$1;
var fn_str_23130 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22865_23128__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23131 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22865_23128__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23132 = goog.getObjectByName(fn_str_23130,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23131)].join(''));

(fn_obj_23132.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23132.cljs$core$IFn$_invoke$arity$2(path,new_link_23104) : fn_obj_23132.call(null,path,new_link_23104));


var G__23133 = cljs.core.next(seq__22854_23121__$1);
var G__23134 = null;
var G__23135 = (0);
var G__23136 = (0);
seq__22854_23105 = G__23133;
chunk__22856_23106 = G__23134;
count__22857_23107 = G__23135;
i__22858_23108 = G__23136;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23102);
});})(seq__22758_23044,chunk__22766_23045,count__22767_23046,i__22768_23047,seq__22588,chunk__22590,count__22591,i__22592,new_link_23104,path_match_23103,node_23102,seq__22758_23096__$1,temp__5804__auto___23095,path,map__22587,map__22587__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23103], 0));

goog.dom.insertSiblingAfter(new_link_23104,node_23102);


var G__23138 = cljs.core.next(seq__22758_23096__$1);
var G__23139 = null;
var G__23140 = (0);
var G__23141 = (0);
seq__22758_23044 = G__23138;
chunk__22766_23045 = G__23139;
count__22767_23046 = G__23140;
i__22768_23047 = G__23141;
continue;
} else {
var G__23142 = cljs.core.next(seq__22758_23096__$1);
var G__23143 = null;
var G__23144 = (0);
var G__23145 = (0);
seq__22758_23044 = G__23142;
chunk__22766_23045 = G__23143;
count__22767_23046 = G__23144;
i__22768_23047 = G__23145;
continue;
}
} else {
var G__23146 = cljs.core.next(seq__22758_23096__$1);
var G__23147 = null;
var G__23148 = (0);
var G__23149 = (0);
seq__22758_23044 = G__23146;
chunk__22766_23045 = G__23147;
count__22767_23046 = G__23148;
i__22768_23047 = G__23149;
continue;
}
}
} else {
}
}
break;
}


var G__23150 = seq__22588;
var G__23151 = chunk__22590;
var G__23152 = count__22591;
var G__23153 = (i__22592 + (1));
seq__22588 = G__23150;
chunk__22590 = G__23151;
count__22591 = G__23152;
i__22592 = G__23153;
continue;
} else {
var G__23154 = seq__22588;
var G__23155 = chunk__22590;
var G__23156 = count__22591;
var G__23157 = (i__22592 + (1));
seq__22588 = G__23154;
chunk__22590 = G__23155;
count__22591 = G__23156;
i__22592 = G__23157;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22588);
if(temp__5804__auto__){
var seq__22588__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22588__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__22588__$1);
var G__23158 = cljs.core.chunk_rest(seq__22588__$1);
var G__23159 = c__5568__auto__;
var G__23160 = cljs.core.count(c__5568__auto__);
var G__23161 = (0);
seq__22588 = G__23158;
chunk__22590 = G__23159;
count__22591 = G__23160;
i__22592 = G__23161;
continue;
} else {
var path = cljs.core.first(seq__22588__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__22869_23162 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__22873_23163 = null;
var count__22874_23164 = (0);
var i__22875_23165 = (0);
while(true){
if((i__22875_23165 < count__22874_23164)){
var node_23166 = chunk__22873_23163.cljs$core$IIndexed$_nth$arity$2(null,i__22875_23165);
if(cljs.core.not(node_23166.shadow$old)){
var path_match_23167 = shadow.cljs.devtools.client.browser.match_paths(node_23166.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23167)){
var new_link_23168 = (function (){var G__22908 = node_23166.cloneNode(true);
G__22908.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23167),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22908;
})();
(node_23166.shadow$old = true);

(new_link_23168.onload = ((function (seq__22869_23162,chunk__22873_23163,count__22874_23164,i__22875_23165,seq__22588,chunk__22590,count__22591,i__22592,new_link_23168,path_match_23167,node_23166,path,seq__22588__$1,temp__5804__auto__,map__22587,map__22587__$1,msg,updates,reload_info){
return (function (e){
var seq__22909_23169 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22911_23170 = null;
var count__22912_23171 = (0);
var i__22913_23172 = (0);
while(true){
if((i__22913_23172 < count__22912_23171)){
var map__22921_23173 = chunk__22911_23170.cljs$core$IIndexed$_nth$arity$2(null,i__22913_23172);
var map__22921_23174__$1 = cljs.core.__destructure_map(map__22921_23173);
var task_23175 = map__22921_23174__$1;
var fn_str_23176 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22921_23174__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23177 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22921_23174__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23178 = goog.getObjectByName(fn_str_23176,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23177)].join(''));

(fn_obj_23178.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23178.cljs$core$IFn$_invoke$arity$2(path,new_link_23168) : fn_obj_23178.call(null,path,new_link_23168));


var G__23179 = seq__22909_23169;
var G__23180 = chunk__22911_23170;
var G__23181 = count__22912_23171;
var G__23182 = (i__22913_23172 + (1));
seq__22909_23169 = G__23179;
chunk__22911_23170 = G__23180;
count__22912_23171 = G__23181;
i__22913_23172 = G__23182;
continue;
} else {
var temp__5804__auto___23183__$1 = cljs.core.seq(seq__22909_23169);
if(temp__5804__auto___23183__$1){
var seq__22909_23184__$1 = temp__5804__auto___23183__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22909_23184__$1)){
var c__5568__auto___23185 = cljs.core.chunk_first(seq__22909_23184__$1);
var G__23186 = cljs.core.chunk_rest(seq__22909_23184__$1);
var G__23187 = c__5568__auto___23185;
var G__23188 = cljs.core.count(c__5568__auto___23185);
var G__23189 = (0);
seq__22909_23169 = G__23186;
chunk__22911_23170 = G__23187;
count__22912_23171 = G__23188;
i__22913_23172 = G__23189;
continue;
} else {
var map__22922_23190 = cljs.core.first(seq__22909_23184__$1);
var map__22922_23191__$1 = cljs.core.__destructure_map(map__22922_23190);
var task_23192 = map__22922_23191__$1;
var fn_str_23193 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22922_23191__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23194 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22922_23191__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23195 = goog.getObjectByName(fn_str_23193,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23194)].join(''));

(fn_obj_23195.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23195.cljs$core$IFn$_invoke$arity$2(path,new_link_23168) : fn_obj_23195.call(null,path,new_link_23168));


var G__23196 = cljs.core.next(seq__22909_23184__$1);
var G__23197 = null;
var G__23198 = (0);
var G__23199 = (0);
seq__22909_23169 = G__23196;
chunk__22911_23170 = G__23197;
count__22912_23171 = G__23198;
i__22913_23172 = G__23199;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23166);
});})(seq__22869_23162,chunk__22873_23163,count__22874_23164,i__22875_23165,seq__22588,chunk__22590,count__22591,i__22592,new_link_23168,path_match_23167,node_23166,path,seq__22588__$1,temp__5804__auto__,map__22587,map__22587__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23167], 0));

goog.dom.insertSiblingAfter(new_link_23168,node_23166);


var G__23200 = seq__22869_23162;
var G__23201 = chunk__22873_23163;
var G__23202 = count__22874_23164;
var G__23203 = (i__22875_23165 + (1));
seq__22869_23162 = G__23200;
chunk__22873_23163 = G__23201;
count__22874_23164 = G__23202;
i__22875_23165 = G__23203;
continue;
} else {
var G__23207 = seq__22869_23162;
var G__23208 = chunk__22873_23163;
var G__23209 = count__22874_23164;
var G__23210 = (i__22875_23165 + (1));
seq__22869_23162 = G__23207;
chunk__22873_23163 = G__23208;
count__22874_23164 = G__23209;
i__22875_23165 = G__23210;
continue;
}
} else {
var G__23211 = seq__22869_23162;
var G__23212 = chunk__22873_23163;
var G__23213 = count__22874_23164;
var G__23214 = (i__22875_23165 + (1));
seq__22869_23162 = G__23211;
chunk__22873_23163 = G__23212;
count__22874_23164 = G__23213;
i__22875_23165 = G__23214;
continue;
}
} else {
var temp__5804__auto___23215__$1 = cljs.core.seq(seq__22869_23162);
if(temp__5804__auto___23215__$1){
var seq__22869_23216__$1 = temp__5804__auto___23215__$1;
if(cljs.core.chunked_seq_QMARK_(seq__22869_23216__$1)){
var c__5568__auto___23217 = cljs.core.chunk_first(seq__22869_23216__$1);
var G__23218 = cljs.core.chunk_rest(seq__22869_23216__$1);
var G__23219 = c__5568__auto___23217;
var G__23220 = cljs.core.count(c__5568__auto___23217);
var G__23221 = (0);
seq__22869_23162 = G__23218;
chunk__22873_23163 = G__23219;
count__22874_23164 = G__23220;
i__22875_23165 = G__23221;
continue;
} else {
var node_23222 = cljs.core.first(seq__22869_23216__$1);
if(cljs.core.not(node_23222.shadow$old)){
var path_match_23223 = shadow.cljs.devtools.client.browser.match_paths(node_23222.getAttribute("href"),path);
if(cljs.core.truth_(path_match_23223)){
var new_link_23224 = (function (){var G__22924 = node_23222.cloneNode(true);
G__22924.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_23223),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__22924;
})();
(node_23222.shadow$old = true);

(new_link_23224.onload = ((function (seq__22869_23162,chunk__22873_23163,count__22874_23164,i__22875_23165,seq__22588,chunk__22590,count__22591,i__22592,new_link_23224,path_match_23223,node_23222,seq__22869_23216__$1,temp__5804__auto___23215__$1,path,seq__22588__$1,temp__5804__auto__,map__22587,map__22587__$1,msg,updates,reload_info){
return (function (e){
var seq__22925_23225 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__22927_23226 = null;
var count__22928_23227 = (0);
var i__22929_23228 = (0);
while(true){
if((i__22929_23228 < count__22928_23227)){
var map__22933_23229 = chunk__22927_23226.cljs$core$IIndexed$_nth$arity$2(null,i__22929_23228);
var map__22933_23230__$1 = cljs.core.__destructure_map(map__22933_23229);
var task_23231 = map__22933_23230__$1;
var fn_str_23232 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22933_23230__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23233 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22933_23230__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23234 = goog.getObjectByName(fn_str_23232,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23233)].join(''));

(fn_obj_23234.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23234.cljs$core$IFn$_invoke$arity$2(path,new_link_23224) : fn_obj_23234.call(null,path,new_link_23224));


var G__23235 = seq__22925_23225;
var G__23236 = chunk__22927_23226;
var G__23237 = count__22928_23227;
var G__23238 = (i__22929_23228 + (1));
seq__22925_23225 = G__23235;
chunk__22927_23226 = G__23236;
count__22928_23227 = G__23237;
i__22929_23228 = G__23238;
continue;
} else {
var temp__5804__auto___23239__$2 = cljs.core.seq(seq__22925_23225);
if(temp__5804__auto___23239__$2){
var seq__22925_23240__$1 = temp__5804__auto___23239__$2;
if(cljs.core.chunked_seq_QMARK_(seq__22925_23240__$1)){
var c__5568__auto___23241 = cljs.core.chunk_first(seq__22925_23240__$1);
var G__23242 = cljs.core.chunk_rest(seq__22925_23240__$1);
var G__23243 = c__5568__auto___23241;
var G__23244 = cljs.core.count(c__5568__auto___23241);
var G__23245 = (0);
seq__22925_23225 = G__23242;
chunk__22927_23226 = G__23243;
count__22928_23227 = G__23244;
i__22929_23228 = G__23245;
continue;
} else {
var map__22934_23246 = cljs.core.first(seq__22925_23240__$1);
var map__22934_23247__$1 = cljs.core.__destructure_map(map__22934_23246);
var task_23248 = map__22934_23247__$1;
var fn_str_23249 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22934_23247__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_23250 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22934_23247__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_23251 = goog.getObjectByName(fn_str_23249,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_23250)].join(''));

(fn_obj_23251.cljs$core$IFn$_invoke$arity$2 ? fn_obj_23251.cljs$core$IFn$_invoke$arity$2(path,new_link_23224) : fn_obj_23251.call(null,path,new_link_23224));


var G__23252 = cljs.core.next(seq__22925_23240__$1);
var G__23253 = null;
var G__23254 = (0);
var G__23255 = (0);
seq__22925_23225 = G__23252;
chunk__22927_23226 = G__23253;
count__22928_23227 = G__23254;
i__22929_23228 = G__23255;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_23222);
});})(seq__22869_23162,chunk__22873_23163,count__22874_23164,i__22875_23165,seq__22588,chunk__22590,count__22591,i__22592,new_link_23224,path_match_23223,node_23222,seq__22869_23216__$1,temp__5804__auto___23215__$1,path,seq__22588__$1,temp__5804__auto__,map__22587,map__22587__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_23223], 0));

goog.dom.insertSiblingAfter(new_link_23224,node_23222);


var G__23256 = cljs.core.next(seq__22869_23216__$1);
var G__23257 = null;
var G__23258 = (0);
var G__23259 = (0);
seq__22869_23162 = G__23256;
chunk__22873_23163 = G__23257;
count__22874_23164 = G__23258;
i__22875_23165 = G__23259;
continue;
} else {
var G__23260 = cljs.core.next(seq__22869_23216__$1);
var G__23261 = null;
var G__23262 = (0);
var G__23263 = (0);
seq__22869_23162 = G__23260;
chunk__22873_23163 = G__23261;
count__22874_23164 = G__23262;
i__22875_23165 = G__23263;
continue;
}
} else {
var G__23264 = cljs.core.next(seq__22869_23216__$1);
var G__23265 = null;
var G__23266 = (0);
var G__23267 = (0);
seq__22869_23162 = G__23264;
chunk__22873_23163 = G__23265;
count__22874_23164 = G__23266;
i__22875_23165 = G__23267;
continue;
}
}
} else {
}
}
break;
}


var G__23268 = cljs.core.next(seq__22588__$1);
var G__23269 = null;
var G__23270 = (0);
var G__23271 = (0);
seq__22588 = G__23268;
chunk__22590 = G__23269;
count__22591 = G__23270;
i__22592 = G__23271;
continue;
} else {
var G__23272 = cljs.core.next(seq__22588__$1);
var G__23273 = null;
var G__23274 = (0);
var G__23275 = (0);
seq__22588 = G__23272;
chunk__22590 = G__23273;
count__22591 = G__23274;
i__22592 = G__23275;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__22936){
var map__22938 = p__22936;
var map__22938__$1 = cljs.core.__destructure_map(map__22938);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22938__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__22950){
var map__22951 = p__22950;
var map__22951__$1 = cljs.core.__destructure_map(map__22951);
var _ = map__22951__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22951__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__22952,done,error){
var map__22953 = p__22952;
var map__22953__$1 = cljs.core.__destructure_map(map__22953);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22953__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__22954,done,error){
var map__22955 = p__22954;
var map__22955__$1 = cljs.core.__destructure_map(map__22955);
var msg = map__22955__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22955__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22955__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22955__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__22956){
var map__22957 = p__22956;
var map__22957__$1 = cljs.core.__destructure_map(map__22957);
var src = map__22957__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22957__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__22959 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__22959) : done.call(null,G__22959));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__22960){
var map__22961 = p__22960;
var map__22961__$1 = cljs.core.__destructure_map(map__22961);
var msg__$1 = map__22961__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22961__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e22962){var ex = e22962;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__22963){
var map__22964 = p__22963;
var map__22964__$1 = cljs.core.__destructure_map(map__22964);
var env = map__22964__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22964__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__22971){
var map__22972 = p__22971;
var map__22972__$1 = cljs.core.__destructure_map(map__22972);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22972__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22972__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__22973){
var map__22974 = p__22973;
var map__22974__$1 = cljs.core.__destructure_map(map__22974);
var svc = map__22974__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22974__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
