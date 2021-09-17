goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__60448,p__60449){
var map__60450 = p__60448;
var map__60450__$1 = cljs.core.__destructure_map(map__60450);
var svc = map__60450__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60450__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60450__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60450__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60451 = p__60449;
var map__60451__$1 = cljs.core.__destructure_map(map__60451);
var msg = map__60451__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60451__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60451__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60451__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60451__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__60461,p__60462){
var map__60463 = p__60461;
var map__60463__$1 = cljs.core.__destructure_map(map__60463);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60463__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__60464 = p__60462;
var map__60464__$1 = cljs.core.__destructure_map(map__60464);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60464__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__60465,p__60466){
var map__60467 = p__60465;
var map__60467__$1 = cljs.core.__destructure_map(map__60467);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60467__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60467__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__60468 = p__60466;
var map__60468__$1 = cljs.core.__destructure_map(map__60468);
var msg = map__60468__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60468__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__60472,tid){
var map__60473 = p__60472;
var map__60473__$1 = cljs.core.__destructure_map(map__60473);
var svc = map__60473__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60473__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__60479 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__60480 = null;
var count__60481 = (0);
var i__60482 = (0);
while(true){
if((i__60482 < count__60481)){
var vec__60496 = chunk__60480.cljs$core$IIndexed$_nth$arity$2(null,i__60482);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60496,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60496,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60515 = seq__60479;
var G__60516 = chunk__60480;
var G__60517 = count__60481;
var G__60518 = (i__60482 + (1));
seq__60479 = G__60515;
chunk__60480 = G__60516;
count__60481 = G__60517;
i__60482 = G__60518;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__60479);
if(temp__5735__auto__){
var seq__60479__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__60479__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__60479__$1);
var G__60519 = cljs.core.chunk_rest(seq__60479__$1);
var G__60520 = c__4638__auto__;
var G__60521 = cljs.core.count(c__4638__auto__);
var G__60522 = (0);
seq__60479 = G__60519;
chunk__60480 = G__60520;
count__60481 = G__60521;
i__60482 = G__60522;
continue;
} else {
var vec__60502 = cljs.core.first(seq__60479__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60502,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60502,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__60523 = cljs.core.next(seq__60479__$1);
var G__60524 = null;
var G__60525 = (0);
var G__60526 = (0);
seq__60479 = G__60523;
chunk__60480 = G__60524;
count__60481 = G__60525;
i__60482 = G__60526;
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
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__60474_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__60474_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__60475_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__60475_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__60476_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__60476_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__60477_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__60477_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__60509){
var map__60510 = p__60509;
var map__60510__$1 = cljs.core.__destructure_map(map__60510);
var svc = map__60510__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60510__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60510__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
