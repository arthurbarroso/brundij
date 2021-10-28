goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__53341){
var map__53342 = p__53341;
var map__53342__$1 = cljs.core.__destructure_map(map__53342);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53342__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53342__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53342__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53342__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4212__auto__ = child_of;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__53343_53370 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__53344_53371 = null;
var count__53345_53372 = (0);
var i__53346_53373 = (0);
while(true){
if((i__53346_53373 < count__53345_53372)){
var vec__53357_53374 = chunk__53344_53371.cljs$core$IIndexed$_nth$arity$2(null,i__53346_53373);
var k_53375 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53357_53374,(0),null);
var cb_53376 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53357_53374,(1),null);
try{var G__53361_53377 = cljs.core.deref(re_frame.trace.traces);
(cb_53376.cljs$core$IFn$_invoke$arity$1 ? cb_53376.cljs$core$IFn$_invoke$arity$1(G__53361_53377) : cb_53376.call(null,G__53361_53377));
}catch (e53360){var e_53378 = e53360;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_53375,"while storing",cljs.core.deref(re_frame.trace.traces),e_53378], 0));
}

var G__53379 = seq__53343_53370;
var G__53380 = chunk__53344_53371;
var G__53381 = count__53345_53372;
var G__53382 = (i__53346_53373 + (1));
seq__53343_53370 = G__53379;
chunk__53344_53371 = G__53380;
count__53345_53372 = G__53381;
i__53346_53373 = G__53382;
continue;
} else {
var temp__5735__auto___53383 = cljs.core.seq(seq__53343_53370);
if(temp__5735__auto___53383){
var seq__53343_53384__$1 = temp__5735__auto___53383;
if(cljs.core.chunked_seq_QMARK_(seq__53343_53384__$1)){
var c__4638__auto___53385 = cljs.core.chunk_first(seq__53343_53384__$1);
var G__53386 = cljs.core.chunk_rest(seq__53343_53384__$1);
var G__53387 = c__4638__auto___53385;
var G__53388 = cljs.core.count(c__4638__auto___53385);
var G__53389 = (0);
seq__53343_53370 = G__53386;
chunk__53344_53371 = G__53387;
count__53345_53372 = G__53388;
i__53346_53373 = G__53389;
continue;
} else {
var vec__53362_53390 = cljs.core.first(seq__53343_53384__$1);
var k_53391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53362_53390,(0),null);
var cb_53392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53362_53390,(1),null);
try{var G__53366_53393 = cljs.core.deref(re_frame.trace.traces);
(cb_53392.cljs$core$IFn$_invoke$arity$1 ? cb_53392.cljs$core$IFn$_invoke$arity$1(G__53366_53393) : cb_53392.call(null,G__53366_53393));
}catch (e53365){var e_53394 = e53365;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_53391,"while storing",cljs.core.deref(re_frame.trace.traces),e_53394], 0));
}

var G__53395 = cljs.core.next(seq__53343_53384__$1);
var G__53396 = null;
var G__53397 = (0);
var G__53398 = (0);
seq__53343_53370 = G__53395;
chunk__53344_53371 = G__53396;
count__53345_53372 = G__53397;
i__53346_53373 = G__53398;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
