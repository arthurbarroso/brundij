goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v1v1v2.re-frame.registrar/kinds kind)"));
}
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,id,handler);
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__45865 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__45866 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__45866);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___45990 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___45990)){
var new_db_45991 = temp__5735__auto___45990;
var fexpr__45867_45992 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__45867_45992.cljs$core$IFn$_invoke$arity$1 ? fexpr__45867_45992.cljs$core$IFn$_invoke$arity$1(new_db_45991) : fexpr__45867_45992.call(null,new_db_45991));
} else {
}

var seq__45868 = cljs.core.seq(effects_without_db);
var chunk__45869 = null;
var count__45870 = (0);
var i__45871 = (0);
while(true){
if((i__45871 < count__45870)){
var vec__45886 = chunk__45869.cljs$core$IIndexed$_nth$arity$2(null,i__45871);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45886,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45886,(1),null);
var temp__5733__auto___45993 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___45993)){
var effect_fn_45994 = temp__5733__auto___45993;
(effect_fn_45994.cljs$core$IFn$_invoke$arity$1 ? effect_fn_45994.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_45994.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__45995 = seq__45868;
var G__45996 = chunk__45869;
var G__45997 = count__45870;
var G__45998 = (i__45871 + (1));
seq__45868 = G__45995;
chunk__45869 = G__45996;
count__45870 = G__45997;
i__45871 = G__45998;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45868);
if(temp__5735__auto__){
var seq__45868__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45868__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__45868__$1);
var G__45999 = cljs.core.chunk_rest(seq__45868__$1);
var G__46000 = c__4638__auto__;
var G__46001 = cljs.core.count(c__4638__auto__);
var G__46002 = (0);
seq__45868 = G__45999;
chunk__45869 = G__46000;
count__45870 = G__46001;
i__45871 = G__46002;
continue;
} else {
var vec__45891 = cljs.core.first(seq__45868__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45891,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45891,(1),null);
var temp__5733__auto___46003 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46003)){
var effect_fn_46004 = temp__5733__auto___46003;
(effect_fn_46004.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46004.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46004.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46005 = cljs.core.next(seq__45868__$1);
var G__46006 = null;
var G__46007 = (0);
var G__46008 = (0);
seq__45868 = G__46005;
chunk__45869 = G__46006;
count__45870 = G__46007;
i__45871 = G__46008;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.is_trace_enabled_QMARK_()){
var end__45587__auto___46009 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now();
var duration__45588__auto___46010 = (end__45587__auto___46009 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__45588__auto___46010,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace.run_tracing_callbacks_BANG_(end__45587__auto___46009);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__45865);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___46011 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___46011)){
var new_db_46012 = temp__5735__auto___46011;
var fexpr__45902_46013 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__45902_46013.cljs$core$IFn$_invoke$arity$1 ? fexpr__45902_46013.cljs$core$IFn$_invoke$arity$1(new_db_46012) : fexpr__45902_46013.call(null,new_db_46012));
} else {
}

var seq__45903 = cljs.core.seq(effects_without_db);
var chunk__45904 = null;
var count__45905 = (0);
var i__45906 = (0);
while(true){
if((i__45906 < count__45905)){
var vec__45916 = chunk__45904.cljs$core$IIndexed$_nth$arity$2(null,i__45906);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45916,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45916,(1),null);
var temp__5733__auto___46014 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46014)){
var effect_fn_46035 = temp__5733__auto___46014;
(effect_fn_46035.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46035.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46035.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46036 = seq__45903;
var G__46037 = chunk__45904;
var G__46038 = count__45905;
var G__46039 = (i__45906 + (1));
seq__45903 = G__46036;
chunk__45904 = G__46037;
count__45905 = G__46038;
i__45906 = G__46039;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45903);
if(temp__5735__auto__){
var seq__45903__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45903__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__45903__$1);
var G__46040 = cljs.core.chunk_rest(seq__45903__$1);
var G__46041 = c__4638__auto__;
var G__46042 = cljs.core.count(c__4638__auto__);
var G__46043 = (0);
seq__45903 = G__46040;
chunk__45904 = G__46041;
count__45905 = G__46042;
i__45906 = G__46043;
continue;
} else {
var vec__45931 = cljs.core.first(seq__45903__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45931,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45931,(1),null);
var temp__5733__auto___46045 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46045)){
var effect_fn_46046 = temp__5733__auto___46045;
(effect_fn_46046.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46046.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46046.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__46047 = cljs.core.next(seq__45903__$1);
var G__46048 = null;
var G__46049 = (0);
var G__46050 = (0);
seq__45903 = G__46047;
chunk__45904 = G__46048;
count__45905 = G__46049;
i__45906 = G__46050;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later = (function day8$re_frame_10x$inlined_deps$re_frame$v1v1v2$re_frame$fx$dispatch_later(p__45935){
var map__45936 = p__45935;
var map__45936__$1 = cljs.core.__destructure_map(map__45936);
var effect = map__45936__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45936__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45936__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.interop.set_timeout_BANG_((function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(dispatch);
}),ms);
}
});
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(value);
} else {
var seq__45937 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__45938 = null;
var count__45939 = (0);
var i__45940 = (0);
while(true){
if((i__45940 < count__45939)){
var effect = chunk__45938.cljs$core$IIndexed$_nth$arity$2(null,i__45940);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__46054 = seq__45937;
var G__46055 = chunk__45938;
var G__46056 = count__45939;
var G__46057 = (i__45940 + (1));
seq__45937 = G__46054;
chunk__45938 = G__46055;
count__45939 = G__46056;
i__45940 = G__46057;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45937);
if(temp__5735__auto__){
var seq__45937__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45937__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__45937__$1);
var G__46058 = cljs.core.chunk_rest(seq__45937__$1);
var G__46059 = c__4638__auto__;
var G__46060 = cljs.core.count(c__4638__auto__);
var G__46061 = (0);
seq__45937 = G__46058;
chunk__45938 = G__46059;
count__45939 = G__46060;
i__45940 = G__46061;
continue;
} else {
var effect = cljs.core.first(seq__45937__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.dispatch_later(effect);


var G__46062 = cljs.core.next(seq__45937__$1);
var G__46063 = null;
var G__46064 = (0);
var G__46065 = (0);
seq__45937 = G__46062;
chunk__45938 = G__46063;
count__45939 = G__46064;
i__45940 = G__46065;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__45941 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__45942 = null;
var count__45943 = (0);
var i__45944 = (0);
while(true){
if((i__45944 < count__45943)){
var vec__45956 = chunk__45942.cljs$core$IIndexed$_nth$arity$2(null,i__45944);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45956,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45956,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___46066 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46066)){
var effect_fn_46067 = temp__5733__auto___46066;
(effect_fn_46067.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46067.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46067.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__46068 = seq__45941;
var G__46069 = chunk__45942;
var G__46070 = count__45943;
var G__46071 = (i__45944 + (1));
seq__45941 = G__46068;
chunk__45942 = G__46069;
count__45943 = G__46070;
i__45944 = G__46071;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45941);
if(temp__5735__auto__){
var seq__45941__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45941__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__45941__$1);
var G__46072 = cljs.core.chunk_rest(seq__45941__$1);
var G__46073 = c__4638__auto__;
var G__46074 = cljs.core.count(c__4638__auto__);
var G__46075 = (0);
seq__45941 = G__46072;
chunk__45942 = G__46073;
count__45943 = G__46074;
i__45944 = G__46075;
continue;
} else {
var vec__45960 = cljs.core.first(seq__45941__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45960,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45960,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___46076 = day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___46076)){
var effect_fn_46077 = temp__5733__auto___46076;
(effect_fn_46077.cljs$core$IFn$_invoke$arity$1 ? effect_fn_46077.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_46077.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__46078 = cljs.core.next(seq__45941__$1);
var G__46079 = null;
var G__46080 = (0);
var G__46081 = (0);
seq__45941 = G__46078;
chunk__45942 = G__46079;
count__45943 = G__46080;
i__45944 = G__46081;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__45963 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__45964 = null;
var count__45965 = (0);
var i__45966 = (0);
while(true){
if((i__45966 < count__45965)){
var event = chunk__45964.cljs$core$IIndexed$_nth$arity$2(null,i__45966);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__46082 = seq__45963;
var G__46083 = chunk__45964;
var G__46084 = count__45965;
var G__46085 = (i__45966 + (1));
seq__45963 = G__46082;
chunk__45964 = G__46083;
count__45965 = G__46084;
i__45966 = G__46085;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45963);
if(temp__5735__auto__){
var seq__45963__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45963__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__45963__$1);
var G__46086 = cljs.core.chunk_rest(seq__45963__$1);
var G__46087 = c__4638__auto__;
var G__46088 = cljs.core.count(c__4638__auto__);
var G__46089 = (0);
seq__45963 = G__46086;
chunk__45964 = G__46087;
count__45965 = G__46088;
i__45966 = G__46089;
continue;
} else {
var event = cljs.core.first(seq__45963__$1);
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.router.dispatch(event);


var G__46090 = cljs.core.next(seq__45963__$1);
var G__46091 = null;
var G__46092 = (0);
var G__46093 = (0);
seq__45963 = G__46090;
chunk__45964 = G__46091;
count__45965 = G__46092;
i__45966 = G__46093;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__45971 = cljs.core.seq(value);
var chunk__45972 = null;
var count__45973 = (0);
var i__45974 = (0);
while(true){
if((i__45974 < count__45973)){
var event = chunk__45972.cljs$core$IIndexed$_nth$arity$2(null,i__45974);
clear_event(event);


var G__46094 = seq__45971;
var G__46095 = chunk__45972;
var G__46096 = count__45973;
var G__46097 = (i__45974 + (1));
seq__45971 = G__46094;
chunk__45972 = G__46095;
count__45973 = G__46096;
i__45974 = G__46097;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45971);
if(temp__5735__auto__){
var seq__45971__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45971__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__45971__$1);
var G__46098 = cljs.core.chunk_rest(seq__45971__$1);
var G__46099 = c__4638__auto__;
var G__46100 = cljs.core.count(c__4638__auto__);
var G__46101 = (0);
seq__45971 = G__46098;
chunk__45972 = G__46099;
count__45973 = G__46100;
i__45974 = G__46101;
continue;
} else {
var event = cljs.core.first(seq__45971__$1);
clear_event(event);


var G__46102 = cljs.core.next(seq__45971__$1);
var G__46103 = null;
var G__46104 = (0);
var G__46105 = (0);
seq__45971 = G__46102;
chunk__45972 = G__46103;
count__45973 = G__46104;
i__45974 = G__46105;
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
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.fx.js.map
