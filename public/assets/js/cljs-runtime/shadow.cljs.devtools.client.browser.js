goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___52274 = arguments.length;
var i__4819__auto___52275 = (0);
while(true){
if((i__4819__auto___52275 < len__4818__auto___52274)){
args__4824__auto__.push((arguments[i__4819__auto___52275]));

var G__52276 = (i__4819__auto___52275 + (1));
i__4819__auto___52275 = G__52276;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq52071){
var G__52072 = cljs.core.first(seq52071);
var seq52071__$1 = cljs.core.next(seq52071);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52072,seq52071__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__52073 = cljs.core.seq(sources);
var chunk__52074 = null;
var count__52075 = (0);
var i__52076 = (0);
while(true){
if((i__52076 < count__52075)){
var map__52081 = chunk__52074.cljs$core$IIndexed$_nth$arity$2(null,i__52076);
var map__52081__$1 = cljs.core.__destructure_map(map__52081);
var src = map__52081__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52081__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52081__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52081__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52081__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e52082){var e_52278 = e52082;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52278);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52278.message)].join('')));
}

var G__52279 = seq__52073;
var G__52280 = chunk__52074;
var G__52281 = count__52075;
var G__52282 = (i__52076 + (1));
seq__52073 = G__52279;
chunk__52074 = G__52280;
count__52075 = G__52281;
i__52076 = G__52282;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52073);
if(temp__5735__auto__){
var seq__52073__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52073__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52073__$1);
var G__52283 = cljs.core.chunk_rest(seq__52073__$1);
var G__52284 = c__4638__auto__;
var G__52285 = cljs.core.count(c__4638__auto__);
var G__52286 = (0);
seq__52073 = G__52283;
chunk__52074 = G__52284;
count__52075 = G__52285;
i__52076 = G__52286;
continue;
} else {
var map__52083 = cljs.core.first(seq__52073__$1);
var map__52083__$1 = cljs.core.__destructure_map(map__52083);
var src = map__52083__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52083__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52083__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52083__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52083__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e52089){var e_52289 = e52089;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_52289);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_52289.message)].join('')));
}

var G__52292 = cljs.core.next(seq__52073__$1);
var G__52293 = null;
var G__52294 = (0);
var G__52295 = (0);
seq__52073 = G__52292;
chunk__52074 = G__52293;
count__52075 = G__52294;
i__52076 = G__52295;
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
var seq__52090 = cljs.core.seq(js_requires);
var chunk__52091 = null;
var count__52092 = (0);
var i__52093 = (0);
while(true){
if((i__52093 < count__52092)){
var js_ns = chunk__52091.cljs$core$IIndexed$_nth$arity$2(null,i__52093);
var require_str_52300 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_52300);


var G__52301 = seq__52090;
var G__52302 = chunk__52091;
var G__52303 = count__52092;
var G__52304 = (i__52093 + (1));
seq__52090 = G__52301;
chunk__52091 = G__52302;
count__52092 = G__52303;
i__52093 = G__52304;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52090);
if(temp__5735__auto__){
var seq__52090__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52090__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52090__$1);
var G__52305 = cljs.core.chunk_rest(seq__52090__$1);
var G__52306 = c__4638__auto__;
var G__52307 = cljs.core.count(c__4638__auto__);
var G__52308 = (0);
seq__52090 = G__52305;
chunk__52091 = G__52306;
count__52092 = G__52307;
i__52093 = G__52308;
continue;
} else {
var js_ns = cljs.core.first(seq__52090__$1);
var require_str_52309 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_52309);


var G__52310 = cljs.core.next(seq__52090__$1);
var G__52311 = null;
var G__52312 = (0);
var G__52313 = (0);
seq__52090 = G__52310;
chunk__52091 = G__52311;
count__52092 = G__52312;
i__52093 = G__52313;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__52099){
var map__52100 = p__52099;
var map__52100__$1 = cljs.core.__destructure_map(map__52100);
var msg = map__52100__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52100__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52100__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52101(s__52102){
return (new cljs.core.LazySeq(null,(function (){
var s__52102__$1 = s__52102;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__52102__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__52110 = cljs.core.first(xs__6292__auto__);
var map__52110__$1 = cljs.core.__destructure_map(map__52110);
var src = map__52110__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52110__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52110__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__52102__$1,map__52110,map__52110__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__52100,map__52100__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52101_$_iter__52106(s__52107){
return (new cljs.core.LazySeq(null,((function (s__52102__$1,map__52110,map__52110__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__52100,map__52100__$1,msg,info,reload_info){
return (function (){
var s__52107__$1 = s__52107;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__52107__$1);
if(temp__5735__auto____$1){
var s__52107__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__52107__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__52107__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__52109 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__52108 = (0);
while(true){
if((i__52108 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__52108);
cljs.core.chunk_append(b__52109,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__52317 = (i__52108 + (1));
i__52108 = G__52317;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__52109),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52101_$_iter__52106(cljs.core.chunk_rest(s__52107__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__52109),null);
}
} else {
var warning = cljs.core.first(s__52107__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52101_$_iter__52106(cljs.core.rest(s__52107__$2)));
}
} else {
return null;
}
break;
}
});})(s__52102__$1,map__52110,map__52110__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__52100,map__52100__$1,msg,info,reload_info))
,null,null));
});})(s__52102__$1,map__52110,map__52110__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__52100,map__52100__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__52101(cljs.core.rest(s__52102__$1)));
} else {
var G__52322 = cljs.core.rest(s__52102__$1);
s__52102__$1 = G__52322;
continue;
}
} else {
var G__52323 = cljs.core.rest(s__52102__$1);
s__52102__$1 = G__52323;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__52117_52324 = cljs.core.seq(warnings);
var chunk__52118_52325 = null;
var count__52119_52326 = (0);
var i__52120_52327 = (0);
while(true){
if((i__52120_52327 < count__52119_52326)){
var map__52124_52328 = chunk__52118_52325.cljs$core$IIndexed$_nth$arity$2(null,i__52120_52327);
var map__52124_52329__$1 = cljs.core.__destructure_map(map__52124_52328);
var w_52330 = map__52124_52329__$1;
var msg_52331__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52124_52329__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_52332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52124_52329__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52124_52329__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_52334 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52124_52329__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_52334)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_52332),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_52333),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_52331__$1)].join(''));


var G__52341 = seq__52117_52324;
var G__52342 = chunk__52118_52325;
var G__52343 = count__52119_52326;
var G__52344 = (i__52120_52327 + (1));
seq__52117_52324 = G__52341;
chunk__52118_52325 = G__52342;
count__52119_52326 = G__52343;
i__52120_52327 = G__52344;
continue;
} else {
var temp__5735__auto___52345 = cljs.core.seq(seq__52117_52324);
if(temp__5735__auto___52345){
var seq__52117_52346__$1 = temp__5735__auto___52345;
if(cljs.core.chunked_seq_QMARK_(seq__52117_52346__$1)){
var c__4638__auto___52347 = cljs.core.chunk_first(seq__52117_52346__$1);
var G__52348 = cljs.core.chunk_rest(seq__52117_52346__$1);
var G__52349 = c__4638__auto___52347;
var G__52350 = cljs.core.count(c__4638__auto___52347);
var G__52351 = (0);
seq__52117_52324 = G__52348;
chunk__52118_52325 = G__52349;
count__52119_52326 = G__52350;
i__52120_52327 = G__52351;
continue;
} else {
var map__52125_52352 = cljs.core.first(seq__52117_52346__$1);
var map__52125_52353__$1 = cljs.core.__destructure_map(map__52125_52352);
var w_52354 = map__52125_52353__$1;
var msg_52355__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52125_52353__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_52356 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52125_52353__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_52357 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52125_52353__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_52358 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52125_52353__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_52358)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_52356),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_52357),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_52355__$1)].join(''));


var G__52359 = cljs.core.next(seq__52117_52346__$1);
var G__52360 = null;
var G__52361 = (0);
var G__52362 = (0);
seq__52117_52324 = G__52359;
chunk__52118_52325 = G__52360;
count__52119_52326 = G__52361;
i__52120_52327 = G__52362;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__52094_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__52094_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
var and__4210__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4210__auto__){
var and__4210__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4210__auto____$1){
return new$;
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__52126){
var map__52127 = p__52126;
var map__52127__$1 = cljs.core.__destructure_map(map__52127);
var msg = map__52127__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52127__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__52128 = cljs.core.seq(updates);
var chunk__52130 = null;
var count__52131 = (0);
var i__52132 = (0);
while(true){
if((i__52132 < count__52131)){
var path = chunk__52130.cljs$core$IIndexed$_nth$arity$2(null,i__52132);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__52167_52367 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__52171_52368 = null;
var count__52172_52369 = (0);
var i__52173_52370 = (0);
while(true){
if((i__52173_52370 < count__52172_52369)){
var node_52372 = chunk__52171_52368.cljs$core$IIndexed$_nth$arity$2(null,i__52173_52370);
if(cljs.core.not(node_52372.shadow$old)){
var path_match_52373 = shadow.cljs.devtools.client.browser.match_paths(node_52372.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52373)){
var new_link_52374 = (function (){var G__52184 = node_52372.cloneNode(true);
G__52184.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52373),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52184;
})();
(node_52372.shadow$old = true);

(new_link_52374.onload = ((function (seq__52167_52367,chunk__52171_52368,count__52172_52369,i__52173_52370,seq__52128,chunk__52130,count__52131,i__52132,new_link_52374,path_match_52373,node_52372,path,map__52127,map__52127__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_52372);
});})(seq__52167_52367,chunk__52171_52368,count__52172_52369,i__52173_52370,seq__52128,chunk__52130,count__52131,i__52132,new_link_52374,path_match_52373,node_52372,path,map__52127,map__52127__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52373], 0));

goog.dom.insertSiblingAfter(new_link_52374,node_52372);


var G__52375 = seq__52167_52367;
var G__52376 = chunk__52171_52368;
var G__52377 = count__52172_52369;
var G__52378 = (i__52173_52370 + (1));
seq__52167_52367 = G__52375;
chunk__52171_52368 = G__52376;
count__52172_52369 = G__52377;
i__52173_52370 = G__52378;
continue;
} else {
var G__52379 = seq__52167_52367;
var G__52380 = chunk__52171_52368;
var G__52381 = count__52172_52369;
var G__52382 = (i__52173_52370 + (1));
seq__52167_52367 = G__52379;
chunk__52171_52368 = G__52380;
count__52172_52369 = G__52381;
i__52173_52370 = G__52382;
continue;
}
} else {
var G__52383 = seq__52167_52367;
var G__52384 = chunk__52171_52368;
var G__52385 = count__52172_52369;
var G__52386 = (i__52173_52370 + (1));
seq__52167_52367 = G__52383;
chunk__52171_52368 = G__52384;
count__52172_52369 = G__52385;
i__52173_52370 = G__52386;
continue;
}
} else {
var temp__5735__auto___52387 = cljs.core.seq(seq__52167_52367);
if(temp__5735__auto___52387){
var seq__52167_52388__$1 = temp__5735__auto___52387;
if(cljs.core.chunked_seq_QMARK_(seq__52167_52388__$1)){
var c__4638__auto___52389 = cljs.core.chunk_first(seq__52167_52388__$1);
var G__52390 = cljs.core.chunk_rest(seq__52167_52388__$1);
var G__52391 = c__4638__auto___52389;
var G__52392 = cljs.core.count(c__4638__auto___52389);
var G__52393 = (0);
seq__52167_52367 = G__52390;
chunk__52171_52368 = G__52391;
count__52172_52369 = G__52392;
i__52173_52370 = G__52393;
continue;
} else {
var node_52394 = cljs.core.first(seq__52167_52388__$1);
if(cljs.core.not(node_52394.shadow$old)){
var path_match_52395 = shadow.cljs.devtools.client.browser.match_paths(node_52394.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52395)){
var new_link_52396 = (function (){var G__52185 = node_52394.cloneNode(true);
G__52185.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52395),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52185;
})();
(node_52394.shadow$old = true);

(new_link_52396.onload = ((function (seq__52167_52367,chunk__52171_52368,count__52172_52369,i__52173_52370,seq__52128,chunk__52130,count__52131,i__52132,new_link_52396,path_match_52395,node_52394,seq__52167_52388__$1,temp__5735__auto___52387,path,map__52127,map__52127__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_52394);
});})(seq__52167_52367,chunk__52171_52368,count__52172_52369,i__52173_52370,seq__52128,chunk__52130,count__52131,i__52132,new_link_52396,path_match_52395,node_52394,seq__52167_52388__$1,temp__5735__auto___52387,path,map__52127,map__52127__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52395], 0));

goog.dom.insertSiblingAfter(new_link_52396,node_52394);


var G__52397 = cljs.core.next(seq__52167_52388__$1);
var G__52398 = null;
var G__52399 = (0);
var G__52400 = (0);
seq__52167_52367 = G__52397;
chunk__52171_52368 = G__52398;
count__52172_52369 = G__52399;
i__52173_52370 = G__52400;
continue;
} else {
var G__52401 = cljs.core.next(seq__52167_52388__$1);
var G__52402 = null;
var G__52403 = (0);
var G__52404 = (0);
seq__52167_52367 = G__52401;
chunk__52171_52368 = G__52402;
count__52172_52369 = G__52403;
i__52173_52370 = G__52404;
continue;
}
} else {
var G__52405 = cljs.core.next(seq__52167_52388__$1);
var G__52406 = null;
var G__52407 = (0);
var G__52408 = (0);
seq__52167_52367 = G__52405;
chunk__52171_52368 = G__52406;
count__52172_52369 = G__52407;
i__52173_52370 = G__52408;
continue;
}
}
} else {
}
}
break;
}


var G__52409 = seq__52128;
var G__52410 = chunk__52130;
var G__52411 = count__52131;
var G__52412 = (i__52132 + (1));
seq__52128 = G__52409;
chunk__52130 = G__52410;
count__52131 = G__52411;
i__52132 = G__52412;
continue;
} else {
var G__52413 = seq__52128;
var G__52414 = chunk__52130;
var G__52415 = count__52131;
var G__52416 = (i__52132 + (1));
seq__52128 = G__52413;
chunk__52130 = G__52414;
count__52131 = G__52415;
i__52132 = G__52416;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52128);
if(temp__5735__auto__){
var seq__52128__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52128__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__52128__$1);
var G__52417 = cljs.core.chunk_rest(seq__52128__$1);
var G__52418 = c__4638__auto__;
var G__52419 = cljs.core.count(c__4638__auto__);
var G__52420 = (0);
seq__52128 = G__52417;
chunk__52130 = G__52418;
count__52131 = G__52419;
i__52132 = G__52420;
continue;
} else {
var path = cljs.core.first(seq__52128__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__52189_52421 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__52193_52422 = null;
var count__52194_52423 = (0);
var i__52195_52424 = (0);
while(true){
if((i__52195_52424 < count__52194_52423)){
var node_52425 = chunk__52193_52422.cljs$core$IIndexed$_nth$arity$2(null,i__52195_52424);
if(cljs.core.not(node_52425.shadow$old)){
var path_match_52426 = shadow.cljs.devtools.client.browser.match_paths(node_52425.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52426)){
var new_link_52427 = (function (){var G__52205 = node_52425.cloneNode(true);
G__52205.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52426),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52205;
})();
(node_52425.shadow$old = true);

(new_link_52427.onload = ((function (seq__52189_52421,chunk__52193_52422,count__52194_52423,i__52195_52424,seq__52128,chunk__52130,count__52131,i__52132,new_link_52427,path_match_52426,node_52425,path,seq__52128__$1,temp__5735__auto__,map__52127,map__52127__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_52425);
});})(seq__52189_52421,chunk__52193_52422,count__52194_52423,i__52195_52424,seq__52128,chunk__52130,count__52131,i__52132,new_link_52427,path_match_52426,node_52425,path,seq__52128__$1,temp__5735__auto__,map__52127,map__52127__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52426], 0));

goog.dom.insertSiblingAfter(new_link_52427,node_52425);


var G__52428 = seq__52189_52421;
var G__52429 = chunk__52193_52422;
var G__52430 = count__52194_52423;
var G__52431 = (i__52195_52424 + (1));
seq__52189_52421 = G__52428;
chunk__52193_52422 = G__52429;
count__52194_52423 = G__52430;
i__52195_52424 = G__52431;
continue;
} else {
var G__52432 = seq__52189_52421;
var G__52433 = chunk__52193_52422;
var G__52434 = count__52194_52423;
var G__52435 = (i__52195_52424 + (1));
seq__52189_52421 = G__52432;
chunk__52193_52422 = G__52433;
count__52194_52423 = G__52434;
i__52195_52424 = G__52435;
continue;
}
} else {
var G__52436 = seq__52189_52421;
var G__52437 = chunk__52193_52422;
var G__52438 = count__52194_52423;
var G__52439 = (i__52195_52424 + (1));
seq__52189_52421 = G__52436;
chunk__52193_52422 = G__52437;
count__52194_52423 = G__52438;
i__52195_52424 = G__52439;
continue;
}
} else {
var temp__5735__auto___52440__$1 = cljs.core.seq(seq__52189_52421);
if(temp__5735__auto___52440__$1){
var seq__52189_52441__$1 = temp__5735__auto___52440__$1;
if(cljs.core.chunked_seq_QMARK_(seq__52189_52441__$1)){
var c__4638__auto___52442 = cljs.core.chunk_first(seq__52189_52441__$1);
var G__52443 = cljs.core.chunk_rest(seq__52189_52441__$1);
var G__52444 = c__4638__auto___52442;
var G__52445 = cljs.core.count(c__4638__auto___52442);
var G__52446 = (0);
seq__52189_52421 = G__52443;
chunk__52193_52422 = G__52444;
count__52194_52423 = G__52445;
i__52195_52424 = G__52446;
continue;
} else {
var node_52447 = cljs.core.first(seq__52189_52441__$1);
if(cljs.core.not(node_52447.shadow$old)){
var path_match_52448 = shadow.cljs.devtools.client.browser.match_paths(node_52447.getAttribute("href"),path);
if(cljs.core.truth_(path_match_52448)){
var new_link_52449 = (function (){var G__52209 = node_52447.cloneNode(true);
G__52209.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_52448),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__52209;
})();
(node_52447.shadow$old = true);

(new_link_52449.onload = ((function (seq__52189_52421,chunk__52193_52422,count__52194_52423,i__52195_52424,seq__52128,chunk__52130,count__52131,i__52132,new_link_52449,path_match_52448,node_52447,seq__52189_52441__$1,temp__5735__auto___52440__$1,path,seq__52128__$1,temp__5735__auto__,map__52127,map__52127__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_52447);
});})(seq__52189_52421,chunk__52193_52422,count__52194_52423,i__52195_52424,seq__52128,chunk__52130,count__52131,i__52132,new_link_52449,path_match_52448,node_52447,seq__52189_52441__$1,temp__5735__auto___52440__$1,path,seq__52128__$1,temp__5735__auto__,map__52127,map__52127__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_52448], 0));

goog.dom.insertSiblingAfter(new_link_52449,node_52447);


var G__52451 = cljs.core.next(seq__52189_52441__$1);
var G__52452 = null;
var G__52453 = (0);
var G__52454 = (0);
seq__52189_52421 = G__52451;
chunk__52193_52422 = G__52452;
count__52194_52423 = G__52453;
i__52195_52424 = G__52454;
continue;
} else {
var G__52456 = cljs.core.next(seq__52189_52441__$1);
var G__52457 = null;
var G__52458 = (0);
var G__52459 = (0);
seq__52189_52421 = G__52456;
chunk__52193_52422 = G__52457;
count__52194_52423 = G__52458;
i__52195_52424 = G__52459;
continue;
}
} else {
var G__52460 = cljs.core.next(seq__52189_52441__$1);
var G__52461 = null;
var G__52462 = (0);
var G__52463 = (0);
seq__52189_52421 = G__52460;
chunk__52193_52422 = G__52461;
count__52194_52423 = G__52462;
i__52195_52424 = G__52463;
continue;
}
}
} else {
}
}
break;
}


var G__52464 = cljs.core.next(seq__52128__$1);
var G__52465 = null;
var G__52466 = (0);
var G__52467 = (0);
seq__52128 = G__52464;
chunk__52130 = G__52465;
count__52131 = G__52466;
i__52132 = G__52467;
continue;
} else {
var G__52468 = cljs.core.next(seq__52128__$1);
var G__52469 = null;
var G__52470 = (0);
var G__52471 = (0);
seq__52128 = G__52468;
chunk__52130 = G__52469;
count__52131 = G__52470;
i__52132 = G__52471;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__52212){
var map__52213 = p__52212;
var map__52213__$1 = cljs.core.__destructure_map(map__52213);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52213__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__52214){
var map__52215 = p__52214;
var map__52215__$1 = cljs.core.__destructure_map(map__52215);
var _ = map__52215__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52215__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__52220,done,error){
var map__52221 = p__52220;
var map__52221__$1 = cljs.core.__destructure_map(map__52221);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52221__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__52222,done,error){
var map__52223 = p__52222;
var map__52223__$1 = cljs.core.__destructure_map(map__52223);
var msg = map__52223__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52223__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52223__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52223__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__52235){
var map__52236 = p__52235;
var map__52236__$1 = cljs.core.__destructure_map(map__52236);
var src = map__52236__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52236__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__52237 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__52237) : done.call(null,G__52237));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__52238){
var map__52239 = p__52238;
var map__52239__$1 = cljs.core.__destructure_map(map__52239);
var msg__$1 = map__52239__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52239__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e52240){var ex = e52240;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__52241){
var map__52242 = p__52241;
var map__52242__$1 = cljs.core.__destructure_map(map__52242);
var env = map__52242__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52242__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__52253){
var map__52254 = p__52253;
var map__52254__$1 = cljs.core.__destructure_map(map__52254);
var msg = map__52254__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52254__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__52265){
var map__52266 = p__52265;
var map__52266__$1 = cljs.core.__destructure_map(map__52266);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52266__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52266__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__52267){
var map__52268 = p__52267;
var map__52268__$1 = cljs.core.__destructure_map(map__52268);
var svc = map__52268__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52268__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
