goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__49164 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__49165 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__49165);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___49346 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___49346)){
var new_db_49347 = temp__5735__auto___49346;
var fexpr__49177_49348 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__49177_49348.cljs$core$IFn$_invoke$arity$1 ? fexpr__49177_49348.cljs$core$IFn$_invoke$arity$1(new_db_49347) : fexpr__49177_49348.call(null,new_db_49347));
} else {
}

var seq__49179 = cljs.core.seq(effects_without_db);
var chunk__49180 = null;
var count__49181 = (0);
var i__49182 = (0);
while(true){
if((i__49182 < count__49181)){
var vec__49201 = chunk__49180.cljs$core$IIndexed$_nth$arity$2(null,i__49182);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49201,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49201,(1),null);
var temp__5733__auto___49349 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49349)){
var effect_fn_49350 = temp__5733__auto___49349;
(effect_fn_49350.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49350.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49350.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49351 = seq__49179;
var G__49352 = chunk__49180;
var G__49353 = count__49181;
var G__49354 = (i__49182 + (1));
seq__49179 = G__49351;
chunk__49180 = G__49352;
count__49181 = G__49353;
i__49182 = G__49354;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49179);
if(temp__5735__auto__){
var seq__49179__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49179__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__49179__$1);
var G__49355 = cljs.core.chunk_rest(seq__49179__$1);
var G__49356 = c__4638__auto__;
var G__49357 = cljs.core.count(c__4638__auto__);
var G__49358 = (0);
seq__49179 = G__49355;
chunk__49180 = G__49356;
count__49181 = G__49357;
i__49182 = G__49358;
continue;
} else {
var vec__49208 = cljs.core.first(seq__49179__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49208,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49208,(1),null);
var temp__5733__auto___49359 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49359)){
var effect_fn_49360 = temp__5733__auto___49359;
(effect_fn_49360.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49360.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49360.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49361 = cljs.core.next(seq__49179__$1);
var G__49362 = null;
var G__49363 = (0);
var G__49364 = (0);
seq__49179 = G__49361;
chunk__49180 = G__49362;
count__49181 = G__49363;
i__49182 = G__49364;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__48880__auto___49365 = re_frame.interop.now();
var duration__48881__auto___49366 = (end__48880__auto___49365 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__48881__auto___49366,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__48880__auto___49365);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__49164);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___49367 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___49367)){
var new_db_49368 = temp__5735__auto___49367;
var fexpr__49215_49369 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__49215_49369.cljs$core$IFn$_invoke$arity$1 ? fexpr__49215_49369.cljs$core$IFn$_invoke$arity$1(new_db_49368) : fexpr__49215_49369.call(null,new_db_49368));
} else {
}

var seq__49216 = cljs.core.seq(effects_without_db);
var chunk__49217 = null;
var count__49218 = (0);
var i__49219 = (0);
while(true){
if((i__49219 < count__49218)){
var vec__49231 = chunk__49217.cljs$core$IIndexed$_nth$arity$2(null,i__49219);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49231,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49231,(1),null);
var temp__5733__auto___49370 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49370)){
var effect_fn_49371 = temp__5733__auto___49370;
(effect_fn_49371.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49371.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49371.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49372 = seq__49216;
var G__49373 = chunk__49217;
var G__49374 = count__49218;
var G__49375 = (i__49219 + (1));
seq__49216 = G__49372;
chunk__49217 = G__49373;
count__49218 = G__49374;
i__49219 = G__49375;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49216);
if(temp__5735__auto__){
var seq__49216__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49216__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__49216__$1);
var G__49376 = cljs.core.chunk_rest(seq__49216__$1);
var G__49377 = c__4638__auto__;
var G__49378 = cljs.core.count(c__4638__auto__);
var G__49379 = (0);
seq__49216 = G__49376;
chunk__49217 = G__49377;
count__49218 = G__49378;
i__49219 = G__49379;
continue;
} else {
var vec__49239 = cljs.core.first(seq__49216__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49239,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49239,(1),null);
var temp__5733__auto___49380 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49380)){
var effect_fn_49381 = temp__5733__auto___49380;
(effect_fn_49381.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49381.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49381.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__49382 = cljs.core.next(seq__49216__$1);
var G__49383 = null;
var G__49384 = (0);
var G__49385 = (0);
seq__49216 = G__49382;
chunk__49217 = G__49383;
count__49218 = G__49384;
i__49219 = G__49385;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__49244){
var map__49245 = p__49244;
var map__49245__$1 = cljs.core.__destructure_map(map__49245);
var effect = map__49245__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49245__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49245__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__49271 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__49272 = null;
var count__49273 = (0);
var i__49274 = (0);
while(true){
if((i__49274 < count__49273)){
var effect = chunk__49272.cljs$core$IIndexed$_nth$arity$2(null,i__49274);
re_frame.fx.dispatch_later(effect);


var G__49386 = seq__49271;
var G__49387 = chunk__49272;
var G__49388 = count__49273;
var G__49389 = (i__49274 + (1));
seq__49271 = G__49386;
chunk__49272 = G__49387;
count__49273 = G__49388;
i__49274 = G__49389;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49271);
if(temp__5735__auto__){
var seq__49271__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49271__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__49271__$1);
var G__49390 = cljs.core.chunk_rest(seq__49271__$1);
var G__49391 = c__4638__auto__;
var G__49392 = cljs.core.count(c__4638__auto__);
var G__49393 = (0);
seq__49271 = G__49390;
chunk__49272 = G__49391;
count__49273 = G__49392;
i__49274 = G__49393;
continue;
} else {
var effect = cljs.core.first(seq__49271__$1);
re_frame.fx.dispatch_later(effect);


var G__49394 = cljs.core.next(seq__49271__$1);
var G__49395 = null;
var G__49396 = (0);
var G__49397 = (0);
seq__49271 = G__49394;
chunk__49272 = G__49395;
count__49273 = G__49396;
i__49274 = G__49397;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__49297 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__49298 = null;
var count__49299 = (0);
var i__49300 = (0);
while(true){
if((i__49300 < count__49299)){
var vec__49312 = chunk__49298.cljs$core$IIndexed$_nth$arity$2(null,i__49300);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49312,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49312,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___49398 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49398)){
var effect_fn_49399 = temp__5733__auto___49398;
(effect_fn_49399.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49399.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49399.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__49400 = seq__49297;
var G__49401 = chunk__49298;
var G__49402 = count__49299;
var G__49403 = (i__49300 + (1));
seq__49297 = G__49400;
chunk__49298 = G__49401;
count__49299 = G__49402;
i__49300 = G__49403;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49297);
if(temp__5735__auto__){
var seq__49297__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49297__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__49297__$1);
var G__49404 = cljs.core.chunk_rest(seq__49297__$1);
var G__49405 = c__4638__auto__;
var G__49406 = cljs.core.count(c__4638__auto__);
var G__49407 = (0);
seq__49297 = G__49404;
chunk__49298 = G__49405;
count__49299 = G__49406;
i__49300 = G__49407;
continue;
} else {
var vec__49316 = cljs.core.first(seq__49297__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49316,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49316,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___49408 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___49408)){
var effect_fn_49409 = temp__5733__auto___49408;
(effect_fn_49409.cljs$core$IFn$_invoke$arity$1 ? effect_fn_49409.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_49409.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__49410 = cljs.core.next(seq__49297__$1);
var G__49411 = null;
var G__49412 = (0);
var G__49413 = (0);
seq__49297 = G__49410;
chunk__49298 = G__49411;
count__49299 = G__49412;
i__49300 = G__49413;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__49323 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__49324 = null;
var count__49325 = (0);
var i__49326 = (0);
while(true){
if((i__49326 < count__49325)){
var event = chunk__49324.cljs$core$IIndexed$_nth$arity$2(null,i__49326);
re_frame.router.dispatch(event);


var G__49414 = seq__49323;
var G__49415 = chunk__49324;
var G__49416 = count__49325;
var G__49417 = (i__49326 + (1));
seq__49323 = G__49414;
chunk__49324 = G__49415;
count__49325 = G__49416;
i__49326 = G__49417;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49323);
if(temp__5735__auto__){
var seq__49323__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49323__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__49323__$1);
var G__49419 = cljs.core.chunk_rest(seq__49323__$1);
var G__49420 = c__4638__auto__;
var G__49421 = cljs.core.count(c__4638__auto__);
var G__49422 = (0);
seq__49323 = G__49419;
chunk__49324 = G__49420;
count__49325 = G__49421;
i__49326 = G__49422;
continue;
} else {
var event = cljs.core.first(seq__49323__$1);
re_frame.router.dispatch(event);


var G__49423 = cljs.core.next(seq__49323__$1);
var G__49424 = null;
var G__49425 = (0);
var G__49426 = (0);
seq__49323 = G__49423;
chunk__49324 = G__49424;
count__49325 = G__49425;
i__49326 = G__49426;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__49333 = cljs.core.seq(value);
var chunk__49334 = null;
var count__49335 = (0);
var i__49336 = (0);
while(true){
if((i__49336 < count__49335)){
var event = chunk__49334.cljs$core$IIndexed$_nth$arity$2(null,i__49336);
clear_event(event);


var G__49427 = seq__49333;
var G__49428 = chunk__49334;
var G__49429 = count__49335;
var G__49430 = (i__49336 + (1));
seq__49333 = G__49427;
chunk__49334 = G__49428;
count__49335 = G__49429;
i__49336 = G__49430;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49333);
if(temp__5735__auto__){
var seq__49333__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49333__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__49333__$1);
var G__49431 = cljs.core.chunk_rest(seq__49333__$1);
var G__49432 = c__4638__auto__;
var G__49433 = cljs.core.count(c__4638__auto__);
var G__49434 = (0);
seq__49333 = G__49431;
chunk__49334 = G__49432;
count__49335 = G__49433;
i__49336 = G__49434;
continue;
} else {
var event = cljs.core.first(seq__49333__$1);
clear_event(event);


var G__49435 = cljs.core.next(seq__49333__$1);
var G__49436 = null;
var G__49437 = (0);
var G__49438 = (0);
seq__49333 = G__49435;
chunk__49334 = G__49436;
count__49335 = G__49437;
i__49336 = G__49438;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
