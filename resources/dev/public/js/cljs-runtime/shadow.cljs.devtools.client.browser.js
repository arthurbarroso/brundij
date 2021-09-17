goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___60898 = arguments.length;
var i__4819__auto___60899 = (0);
while(true){
if((i__4819__auto___60899 < len__4818__auto___60898)){
args__4824__auto__.push((arguments[i__4819__auto___60899]));

var G__60900 = (i__4819__auto___60899 + (1));
i__4819__auto___60899 = G__60900;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq60757){
var G__60758 = cljs.core.first(seq60757);
var seq60757__$1 = cljs.core.next(seq60757);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__60758,seq60757__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__60759 = cljs.core.seq(sources);
var chunk__60760 = null;
var count__60761 = (0);
var i__60762 = (0);
while(true){
if((i__60762 < count__60761)){
var map__60767 = chunk__60760.cljs$core$IIndexed$_nth$arity$2(null,i__60762);
var map__60767__$1 = cljs.core.__destructure_map(map__60767);
var src = map__60767__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60767__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60767__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60767__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60767__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e60768){var e_60901 = e60768;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_60901);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_60901.message)].join('')));
}

var G__60902 = seq__60759;
var G__60903 = chunk__60760;
var G__60904 = count__60761;
var G__60905 = (i__60762 + (1));
seq__60759 = G__60902;
chunk__60760 = G__60903;
count__60761 = G__60904;
i__60762 = G__60905;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60759);
if(temp__5735__auto__){
var seq__60759__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60759__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__60759__$1);
var G__60906 = cljs.core.chunk_rest(seq__60759__$1);
var G__60907 = c__4638__auto__;
var G__60908 = cljs.core.count(c__4638__auto__);
var G__60909 = (0);
seq__60759 = G__60906;
chunk__60760 = G__60907;
count__60761 = G__60908;
i__60762 = G__60909;
continue;
} else {
var map__60776 = cljs.core.first(seq__60759__$1);
var map__60776__$1 = cljs.core.__destructure_map(map__60776);
var src = map__60776__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60776__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60776__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60776__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60776__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e60777){var e_60910 = e60777;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_60910);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_60910.message)].join('')));
}

var G__60911 = cljs.core.next(seq__60759__$1);
var G__60912 = null;
var G__60913 = (0);
var G__60914 = (0);
seq__60759 = G__60911;
chunk__60760 = G__60912;
count__60761 = G__60913;
i__60762 = G__60914;
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
var seq__60778 = cljs.core.seq(js_requires);
var chunk__60779 = null;
var count__60780 = (0);
var i__60781 = (0);
while(true){
if((i__60781 < count__60780)){
var js_ns = chunk__60779.cljs$core$IIndexed$_nth$arity$2(null,i__60781);
var require_str_60915 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_60915);


var G__60916 = seq__60778;
var G__60917 = chunk__60779;
var G__60918 = count__60780;
var G__60919 = (i__60781 + (1));
seq__60778 = G__60916;
chunk__60779 = G__60917;
count__60780 = G__60918;
i__60781 = G__60919;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60778);
if(temp__5735__auto__){
var seq__60778__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60778__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__60778__$1);
var G__60920 = cljs.core.chunk_rest(seq__60778__$1);
var G__60921 = c__4638__auto__;
var G__60922 = cljs.core.count(c__4638__auto__);
var G__60923 = (0);
seq__60778 = G__60920;
chunk__60779 = G__60921;
count__60780 = G__60922;
i__60781 = G__60923;
continue;
} else {
var js_ns = cljs.core.first(seq__60778__$1);
var require_str_60924 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_60924);


var G__60925 = cljs.core.next(seq__60778__$1);
var G__60926 = null;
var G__60927 = (0);
var G__60928 = (0);
seq__60778 = G__60925;
chunk__60779 = G__60926;
count__60780 = G__60927;
i__60781 = G__60928;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__60783){
var map__60784 = p__60783;
var map__60784__$1 = cljs.core.__destructure_map(map__60784);
var msg = map__60784__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60784__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60784__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60785(s__60786){
return (new cljs.core.LazySeq(null,(function (){
var s__60786__$1 = s__60786;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__60786__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__60791 = cljs.core.first(xs__6292__auto__);
var map__60791__$1 = cljs.core.__destructure_map(map__60791);
var src = map__60791__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60791__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60791__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4607__auto__ = ((function (s__60786__$1,map__60791,map__60791__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__60784,map__60784__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60785_$_iter__60787(s__60788){
return (new cljs.core.LazySeq(null,((function (s__60786__$1,map__60791,map__60791__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__60784,map__60784__$1,msg,info,reload_info){
return (function (){
var s__60788__$1 = s__60788;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__60788__$1);
if(temp__5735__auto____$1){
var s__60788__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__60788__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__60788__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__60790 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__60789 = (0);
while(true){
if((i__60789 < size__4610__auto__)){
var warning = cljs.core._nth(c__4609__auto__,i__60789);
cljs.core.chunk_append(b__60790,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__60929 = (i__60789 + (1));
i__60789 = G__60929;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__60790),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60785_$_iter__60787(cljs.core.chunk_rest(s__60788__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__60790),null);
}
} else {
var warning = cljs.core.first(s__60788__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60785_$_iter__60787(cljs.core.rest(s__60788__$2)));
}
} else {
return null;
}
break;
}
});})(s__60786__$1,map__60791,map__60791__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__60784,map__60784__$1,msg,info,reload_info))
,null,null));
});})(s__60786__$1,map__60791,map__60791__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__60784,map__60784__$1,msg,info,reload_info))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(warnings));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__60785(cljs.core.rest(s__60786__$1)));
} else {
var G__60931 = cljs.core.rest(s__60786__$1);
s__60786__$1 = G__60931;
continue;
}
} else {
var G__60932 = cljs.core.rest(s__60786__$1);
s__60786__$1 = G__60932;
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
var seq__60792_60933 = cljs.core.seq(warnings);
var chunk__60793_60934 = null;
var count__60794_60935 = (0);
var i__60795_60936 = (0);
while(true){
if((i__60795_60936 < count__60794_60935)){
var map__60800_60937 = chunk__60793_60934.cljs$core$IIndexed$_nth$arity$2(null,i__60795_60936);
var map__60800_60938__$1 = cljs.core.__destructure_map(map__60800_60937);
var w_60939 = map__60800_60938__$1;
var msg_60940__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60800_60938__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_60941 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60800_60938__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_60942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60800_60938__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_60943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60800_60938__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_60943)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_60941),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_60942),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_60940__$1)].join(''));


var G__60944 = seq__60792_60933;
var G__60945 = chunk__60793_60934;
var G__60946 = count__60794_60935;
var G__60947 = (i__60795_60936 + (1));
seq__60792_60933 = G__60944;
chunk__60793_60934 = G__60945;
count__60794_60935 = G__60946;
i__60795_60936 = G__60947;
continue;
} else {
var temp__5735__auto___60948 = cljs.core.seq(seq__60792_60933);
if(temp__5735__auto___60948){
var seq__60792_60949__$1 = temp__5735__auto___60948;
if(cljs.core.chunked_seq_QMARK_(seq__60792_60949__$1)){
var c__4638__auto___60950 = cljs.core.chunk_first(seq__60792_60949__$1);
var G__60951 = cljs.core.chunk_rest(seq__60792_60949__$1);
var G__60952 = c__4638__auto___60950;
var G__60953 = cljs.core.count(c__4638__auto___60950);
var G__60954 = (0);
seq__60792_60933 = G__60951;
chunk__60793_60934 = G__60952;
count__60794_60935 = G__60953;
i__60795_60936 = G__60954;
continue;
} else {
var map__60801_60955 = cljs.core.first(seq__60792_60949__$1);
var map__60801_60956__$1 = cljs.core.__destructure_map(map__60801_60955);
var w_60957 = map__60801_60956__$1;
var msg_60958__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60801_60956__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_60959 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60801_60956__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_60960 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60801_60956__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_60961 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60801_60956__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_60961)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_60959),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_60960),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_60958__$1)].join(''));


var G__60962 = cljs.core.next(seq__60792_60949__$1);
var G__60963 = null;
var G__60964 = (0);
var G__60965 = (0);
seq__60792_60933 = G__60962;
chunk__60793_60934 = G__60963;
count__60794_60935 = G__60964;
i__60795_60936 = G__60965;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__60782_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__60782_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__60804){
var map__60805 = p__60804;
var map__60805__$1 = cljs.core.__destructure_map(map__60805);
var msg = map__60805__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60805__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__60806 = cljs.core.seq(updates);
var chunk__60808 = null;
var count__60809 = (0);
var i__60810 = (0);
while(true){
if((i__60810 < count__60809)){
var path = chunk__60808.cljs$core$IIndexed$_nth$arity$2(null,i__60810);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__60844_60966 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__60848_60967 = null;
var count__60849_60968 = (0);
var i__60850_60969 = (0);
while(true){
if((i__60850_60969 < count__60849_60968)){
var node_60970 = chunk__60848_60967.cljs$core$IIndexed$_nth$arity$2(null,i__60850_60969);
if(cljs.core.not(node_60970.shadow$old)){
var path_match_60971 = shadow.cljs.devtools.client.browser.match_paths(node_60970.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60971)){
var new_link_60972 = (function (){var G__60856 = node_60970.cloneNode(true);
G__60856.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60971),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60856;
})();
(node_60970.shadow$old = true);

(new_link_60972.onload = ((function (seq__60844_60966,chunk__60848_60967,count__60849_60968,i__60850_60969,seq__60806,chunk__60808,count__60809,i__60810,new_link_60972,path_match_60971,node_60970,path,map__60805,map__60805__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_60970);
});})(seq__60844_60966,chunk__60848_60967,count__60849_60968,i__60850_60969,seq__60806,chunk__60808,count__60809,i__60810,new_link_60972,path_match_60971,node_60970,path,map__60805,map__60805__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60971], 0));

goog.dom.insertSiblingAfter(new_link_60972,node_60970);


var G__60973 = seq__60844_60966;
var G__60974 = chunk__60848_60967;
var G__60975 = count__60849_60968;
var G__60976 = (i__60850_60969 + (1));
seq__60844_60966 = G__60973;
chunk__60848_60967 = G__60974;
count__60849_60968 = G__60975;
i__60850_60969 = G__60976;
continue;
} else {
var G__60977 = seq__60844_60966;
var G__60978 = chunk__60848_60967;
var G__60979 = count__60849_60968;
var G__60980 = (i__60850_60969 + (1));
seq__60844_60966 = G__60977;
chunk__60848_60967 = G__60978;
count__60849_60968 = G__60979;
i__60850_60969 = G__60980;
continue;
}
} else {
var G__60981 = seq__60844_60966;
var G__60982 = chunk__60848_60967;
var G__60983 = count__60849_60968;
var G__60984 = (i__60850_60969 + (1));
seq__60844_60966 = G__60981;
chunk__60848_60967 = G__60982;
count__60849_60968 = G__60983;
i__60850_60969 = G__60984;
continue;
}
} else {
var temp__5735__auto___60985 = cljs.core.seq(seq__60844_60966);
if(temp__5735__auto___60985){
var seq__60844_60986__$1 = temp__5735__auto___60985;
if(cljs.core.chunked_seq_QMARK_(seq__60844_60986__$1)){
var c__4638__auto___60987 = cljs.core.chunk_first(seq__60844_60986__$1);
var G__60988 = cljs.core.chunk_rest(seq__60844_60986__$1);
var G__60989 = c__4638__auto___60987;
var G__60990 = cljs.core.count(c__4638__auto___60987);
var G__60991 = (0);
seq__60844_60966 = G__60988;
chunk__60848_60967 = G__60989;
count__60849_60968 = G__60990;
i__60850_60969 = G__60991;
continue;
} else {
var node_60992 = cljs.core.first(seq__60844_60986__$1);
if(cljs.core.not(node_60992.shadow$old)){
var path_match_60993 = shadow.cljs.devtools.client.browser.match_paths(node_60992.getAttribute("href"),path);
if(cljs.core.truth_(path_match_60993)){
var new_link_60994 = (function (){var G__60857 = node_60992.cloneNode(true);
G__60857.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_60993),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60857;
})();
(node_60992.shadow$old = true);

(new_link_60994.onload = ((function (seq__60844_60966,chunk__60848_60967,count__60849_60968,i__60850_60969,seq__60806,chunk__60808,count__60809,i__60810,new_link_60994,path_match_60993,node_60992,seq__60844_60986__$1,temp__5735__auto___60985,path,map__60805,map__60805__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_60992);
});})(seq__60844_60966,chunk__60848_60967,count__60849_60968,i__60850_60969,seq__60806,chunk__60808,count__60809,i__60810,new_link_60994,path_match_60993,node_60992,seq__60844_60986__$1,temp__5735__auto___60985,path,map__60805,map__60805__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_60993], 0));

goog.dom.insertSiblingAfter(new_link_60994,node_60992);


var G__60995 = cljs.core.next(seq__60844_60986__$1);
var G__60996 = null;
var G__60997 = (0);
var G__60998 = (0);
seq__60844_60966 = G__60995;
chunk__60848_60967 = G__60996;
count__60849_60968 = G__60997;
i__60850_60969 = G__60998;
continue;
} else {
var G__60999 = cljs.core.next(seq__60844_60986__$1);
var G__61000 = null;
var G__61001 = (0);
var G__61002 = (0);
seq__60844_60966 = G__60999;
chunk__60848_60967 = G__61000;
count__60849_60968 = G__61001;
i__60850_60969 = G__61002;
continue;
}
} else {
var G__61003 = cljs.core.next(seq__60844_60986__$1);
var G__61004 = null;
var G__61005 = (0);
var G__61006 = (0);
seq__60844_60966 = G__61003;
chunk__60848_60967 = G__61004;
count__60849_60968 = G__61005;
i__60850_60969 = G__61006;
continue;
}
}
} else {
}
}
break;
}


var G__61007 = seq__60806;
var G__61008 = chunk__60808;
var G__61009 = count__60809;
var G__61010 = (i__60810 + (1));
seq__60806 = G__61007;
chunk__60808 = G__61008;
count__60809 = G__61009;
i__60810 = G__61010;
continue;
} else {
var G__61011 = seq__60806;
var G__61012 = chunk__60808;
var G__61013 = count__60809;
var G__61014 = (i__60810 + (1));
seq__60806 = G__61011;
chunk__60808 = G__61012;
count__60809 = G__61013;
i__60810 = G__61014;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60806);
if(temp__5735__auto__){
var seq__60806__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60806__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__60806__$1);
var G__61015 = cljs.core.chunk_rest(seq__60806__$1);
var G__61016 = c__4638__auto__;
var G__61017 = cljs.core.count(c__4638__auto__);
var G__61018 = (0);
seq__60806 = G__61015;
chunk__60808 = G__61016;
count__60809 = G__61017;
i__60810 = G__61018;
continue;
} else {
var path = cljs.core.first(seq__60806__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__60858_61019 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__60862_61020 = null;
var count__60863_61021 = (0);
var i__60864_61022 = (0);
while(true){
if((i__60864_61022 < count__60863_61021)){
var node_61023 = chunk__60862_61020.cljs$core$IIndexed$_nth$arity$2(null,i__60864_61022);
if(cljs.core.not(node_61023.shadow$old)){
var path_match_61024 = shadow.cljs.devtools.client.browser.match_paths(node_61023.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61024)){
var new_link_61025 = (function (){var G__60870 = node_61023.cloneNode(true);
G__60870.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61024),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60870;
})();
(node_61023.shadow$old = true);

(new_link_61025.onload = ((function (seq__60858_61019,chunk__60862_61020,count__60863_61021,i__60864_61022,seq__60806,chunk__60808,count__60809,i__60810,new_link_61025,path_match_61024,node_61023,path,seq__60806__$1,temp__5735__auto__,map__60805,map__60805__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_61023);
});})(seq__60858_61019,chunk__60862_61020,count__60863_61021,i__60864_61022,seq__60806,chunk__60808,count__60809,i__60810,new_link_61025,path_match_61024,node_61023,path,seq__60806__$1,temp__5735__auto__,map__60805,map__60805__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61024], 0));

goog.dom.insertSiblingAfter(new_link_61025,node_61023);


var G__61029 = seq__60858_61019;
var G__61030 = chunk__60862_61020;
var G__61031 = count__60863_61021;
var G__61032 = (i__60864_61022 + (1));
seq__60858_61019 = G__61029;
chunk__60862_61020 = G__61030;
count__60863_61021 = G__61031;
i__60864_61022 = G__61032;
continue;
} else {
var G__61033 = seq__60858_61019;
var G__61034 = chunk__60862_61020;
var G__61035 = count__60863_61021;
var G__61036 = (i__60864_61022 + (1));
seq__60858_61019 = G__61033;
chunk__60862_61020 = G__61034;
count__60863_61021 = G__61035;
i__60864_61022 = G__61036;
continue;
}
} else {
var G__61037 = seq__60858_61019;
var G__61038 = chunk__60862_61020;
var G__61039 = count__60863_61021;
var G__61040 = (i__60864_61022 + (1));
seq__60858_61019 = G__61037;
chunk__60862_61020 = G__61038;
count__60863_61021 = G__61039;
i__60864_61022 = G__61040;
continue;
}
} else {
var temp__5735__auto___61041__$1 = cljs.core.seq(seq__60858_61019);
if(temp__5735__auto___61041__$1){
var seq__60858_61042__$1 = temp__5735__auto___61041__$1;
if(cljs.core.chunked_seq_QMARK_(seq__60858_61042__$1)){
var c__4638__auto___61043 = cljs.core.chunk_first(seq__60858_61042__$1);
var G__61044 = cljs.core.chunk_rest(seq__60858_61042__$1);
var G__61045 = c__4638__auto___61043;
var G__61046 = cljs.core.count(c__4638__auto___61043);
var G__61047 = (0);
seq__60858_61019 = G__61044;
chunk__60862_61020 = G__61045;
count__60863_61021 = G__61046;
i__60864_61022 = G__61047;
continue;
} else {
var node_61048 = cljs.core.first(seq__60858_61042__$1);
if(cljs.core.not(node_61048.shadow$old)){
var path_match_61049 = shadow.cljs.devtools.client.browser.match_paths(node_61048.getAttribute("href"),path);
if(cljs.core.truth_(path_match_61049)){
var new_link_61050 = (function (){var G__60871 = node_61048.cloneNode(true);
G__60871.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_61049),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__60871;
})();
(node_61048.shadow$old = true);

(new_link_61050.onload = ((function (seq__60858_61019,chunk__60862_61020,count__60863_61021,i__60864_61022,seq__60806,chunk__60808,count__60809,i__60810,new_link_61050,path_match_61049,node_61048,seq__60858_61042__$1,temp__5735__auto___61041__$1,path,seq__60806__$1,temp__5735__auto__,map__60805,map__60805__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_61048);
});})(seq__60858_61019,chunk__60862_61020,count__60863_61021,i__60864_61022,seq__60806,chunk__60808,count__60809,i__60810,new_link_61050,path_match_61049,node_61048,seq__60858_61042__$1,temp__5735__auto___61041__$1,path,seq__60806__$1,temp__5735__auto__,map__60805,map__60805__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_61049], 0));

goog.dom.insertSiblingAfter(new_link_61050,node_61048);


var G__61051 = cljs.core.next(seq__60858_61042__$1);
var G__61052 = null;
var G__61053 = (0);
var G__61054 = (0);
seq__60858_61019 = G__61051;
chunk__60862_61020 = G__61052;
count__60863_61021 = G__61053;
i__60864_61022 = G__61054;
continue;
} else {
var G__61055 = cljs.core.next(seq__60858_61042__$1);
var G__61056 = null;
var G__61057 = (0);
var G__61058 = (0);
seq__60858_61019 = G__61055;
chunk__60862_61020 = G__61056;
count__60863_61021 = G__61057;
i__60864_61022 = G__61058;
continue;
}
} else {
var G__61059 = cljs.core.next(seq__60858_61042__$1);
var G__61060 = null;
var G__61061 = (0);
var G__61062 = (0);
seq__60858_61019 = G__61059;
chunk__60862_61020 = G__61060;
count__60863_61021 = G__61061;
i__60864_61022 = G__61062;
continue;
}
}
} else {
}
}
break;
}


var G__61063 = cljs.core.next(seq__60806__$1);
var G__61064 = null;
var G__61065 = (0);
var G__61066 = (0);
seq__60806 = G__61063;
chunk__60808 = G__61064;
count__60809 = G__61065;
i__60810 = G__61066;
continue;
} else {
var G__61067 = cljs.core.next(seq__60806__$1);
var G__61068 = null;
var G__61069 = (0);
var G__61070 = (0);
seq__60806 = G__61067;
chunk__60808 = G__61068;
count__60809 = G__61069;
i__60810 = G__61070;
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
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__60872){
var map__60873 = p__60872;
var map__60873__$1 = cljs.core.__destructure_map(map__60873);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60873__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
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

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__60874){
var map__60875 = p__60874;
var map__60875__$1 = cljs.core.__destructure_map(map__60875);
var _ = map__60875__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60875__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__60876,done,error){
var map__60877 = p__60876;
var map__60877__$1 = cljs.core.__destructure_map(map__60877);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60877__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__60880,done,error){
var map__60881 = p__60880;
var map__60881__$1 = cljs.core.__destructure_map(map__60881);
var msg = map__60881__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60881__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60881__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60881__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__60882){
var map__60883 = p__60882;
var map__60883__$1 = cljs.core.__destructure_map(map__60883);
var src = map__60883__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60883__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4210__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4210__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__60884 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__60884) : done.call(null,G__60884));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__60885){
var map__60886 = p__60885;
var map__60886__$1 = cljs.core.__destructure_map(map__60886);
var msg__$1 = map__60886__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60886__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e60887){var ex = e60887;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__60888){
var map__60889 = p__60888;
var map__60889__$1 = cljs.core.__destructure_map(map__60889);
var env = map__60889__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60889__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__60891){
var map__60892 = p__60891;
var map__60892__$1 = cljs.core.__destructure_map(map__60892);
var msg = map__60892__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60892__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__60894){
var map__60895 = p__60894;
var map__60895__$1 = cljs.core.__destructure_map(map__60895);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60895__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60895__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__60896){
var map__60897 = p__60896;
var map__60897__$1 = cljs.core.__destructure_map(map__60897);
var svc = map__60897__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60897__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
