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
var _STAR_current_trace_STAR__orig_val__53630 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__53631 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__53631);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___53724 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___53724)){
var new_db_53725 = temp__5735__auto___53724;
var fexpr__53637_53726 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__53637_53726.cljs$core$IFn$_invoke$arity$1 ? fexpr__53637_53726.cljs$core$IFn$_invoke$arity$1(new_db_53725) : fexpr__53637_53726.call(null,new_db_53725));
} else {
}

var seq__53638 = cljs.core.seq(effects_without_db);
var chunk__53639 = null;
var count__53640 = (0);
var i__53641 = (0);
while(true){
if((i__53641 < count__53640)){
var vec__53654 = chunk__53639.cljs$core$IIndexed$_nth$arity$2(null,i__53641);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53654,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53654,(1),null);
var temp__5733__auto___53727 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53727)){
var effect_fn_53728 = temp__5733__auto___53727;
(effect_fn_53728.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53728.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53728.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53729 = seq__53638;
var G__53730 = chunk__53639;
var G__53731 = count__53640;
var G__53732 = (i__53641 + (1));
seq__53638 = G__53729;
chunk__53639 = G__53730;
count__53640 = G__53731;
i__53641 = G__53732;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53638);
if(temp__5735__auto__){
var seq__53638__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53638__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__53638__$1);
var G__53733 = cljs.core.chunk_rest(seq__53638__$1);
var G__53734 = c__4638__auto__;
var G__53735 = cljs.core.count(c__4638__auto__);
var G__53736 = (0);
seq__53638 = G__53733;
chunk__53639 = G__53734;
count__53640 = G__53735;
i__53641 = G__53736;
continue;
} else {
var vec__53657 = cljs.core.first(seq__53638__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53657,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53657,(1),null);
var temp__5733__auto___53737 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53737)){
var effect_fn_53738 = temp__5733__auto___53737;
(effect_fn_53738.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53738.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53738.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53739 = cljs.core.next(seq__53638__$1);
var G__53740 = null;
var G__53741 = (0);
var G__53742 = (0);
seq__53638 = G__53739;
chunk__53639 = G__53740;
count__53640 = G__53741;
i__53641 = G__53742;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__53321__auto___53743 = re_frame.interop.now();
var duration__53322__auto___53744 = (end__53321__auto___53743 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__53322__auto___53744,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__53321__auto___53743);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__53630);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___53745 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___53745)){
var new_db_53746 = temp__5735__auto___53745;
var fexpr__53661_53747 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__53661_53747.cljs$core$IFn$_invoke$arity$1 ? fexpr__53661_53747.cljs$core$IFn$_invoke$arity$1(new_db_53746) : fexpr__53661_53747.call(null,new_db_53746));
} else {
}

var seq__53662 = cljs.core.seq(effects_without_db);
var chunk__53663 = null;
var count__53664 = (0);
var i__53665 = (0);
while(true){
if((i__53665 < count__53664)){
var vec__53672 = chunk__53663.cljs$core$IIndexed$_nth$arity$2(null,i__53665);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53672,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53672,(1),null);
var temp__5733__auto___53748 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53748)){
var effect_fn_53749 = temp__5733__auto___53748;
(effect_fn_53749.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53749.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53749.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53750 = seq__53662;
var G__53751 = chunk__53663;
var G__53752 = count__53664;
var G__53753 = (i__53665 + (1));
seq__53662 = G__53750;
chunk__53663 = G__53751;
count__53664 = G__53752;
i__53665 = G__53753;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53662);
if(temp__5735__auto__){
var seq__53662__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53662__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__53662__$1);
var G__53754 = cljs.core.chunk_rest(seq__53662__$1);
var G__53755 = c__4638__auto__;
var G__53756 = cljs.core.count(c__4638__auto__);
var G__53757 = (0);
seq__53662 = G__53754;
chunk__53663 = G__53755;
count__53664 = G__53756;
i__53665 = G__53757;
continue;
} else {
var vec__53691 = cljs.core.first(seq__53662__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53691,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53691,(1),null);
var temp__5733__auto___53758 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53758)){
var effect_fn_53759 = temp__5733__auto___53758;
(effect_fn_53759.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53759.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53759.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53760 = cljs.core.next(seq__53662__$1);
var G__53761 = null;
var G__53762 = (0);
var G__53763 = (0);
seq__53662 = G__53760;
chunk__53663 = G__53761;
count__53664 = G__53762;
i__53665 = G__53763;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__53694){
var map__53695 = p__53694;
var map__53695__$1 = cljs.core.__destructure_map(map__53695);
var effect = map__53695__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53695__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53695__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__53696 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__53697 = null;
var count__53698 = (0);
var i__53699 = (0);
while(true){
if((i__53699 < count__53698)){
var effect = chunk__53697.cljs$core$IIndexed$_nth$arity$2(null,i__53699);
re_frame.fx.dispatch_later(effect);


var G__53764 = seq__53696;
var G__53765 = chunk__53697;
var G__53766 = count__53698;
var G__53767 = (i__53699 + (1));
seq__53696 = G__53764;
chunk__53697 = G__53765;
count__53698 = G__53766;
i__53699 = G__53767;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53696);
if(temp__5735__auto__){
var seq__53696__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53696__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__53696__$1);
var G__53768 = cljs.core.chunk_rest(seq__53696__$1);
var G__53769 = c__4638__auto__;
var G__53770 = cljs.core.count(c__4638__auto__);
var G__53771 = (0);
seq__53696 = G__53768;
chunk__53697 = G__53769;
count__53698 = G__53770;
i__53699 = G__53771;
continue;
} else {
var effect = cljs.core.first(seq__53696__$1);
re_frame.fx.dispatch_later(effect);


var G__53773 = cljs.core.next(seq__53696__$1);
var G__53774 = null;
var G__53775 = (0);
var G__53776 = (0);
seq__53696 = G__53773;
chunk__53697 = G__53774;
count__53698 = G__53775;
i__53699 = G__53776;
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
var seq__53700 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__53701 = null;
var count__53702 = (0);
var i__53703 = (0);
while(true){
if((i__53703 < count__53702)){
var vec__53710 = chunk__53701.cljs$core$IIndexed$_nth$arity$2(null,i__53703);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53710,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53710,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___53778 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53778)){
var effect_fn_53779 = temp__5733__auto___53778;
(effect_fn_53779.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53779.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53779.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__53780 = seq__53700;
var G__53781 = chunk__53701;
var G__53782 = count__53702;
var G__53783 = (i__53703 + (1));
seq__53700 = G__53780;
chunk__53701 = G__53781;
count__53702 = G__53782;
i__53703 = G__53783;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53700);
if(temp__5735__auto__){
var seq__53700__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53700__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__53700__$1);
var G__53784 = cljs.core.chunk_rest(seq__53700__$1);
var G__53785 = c__4638__auto__;
var G__53786 = cljs.core.count(c__4638__auto__);
var G__53787 = (0);
seq__53700 = G__53784;
chunk__53701 = G__53785;
count__53702 = G__53786;
i__53703 = G__53787;
continue;
} else {
var vec__53713 = cljs.core.first(seq__53700__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53713,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53713,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___53788 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___53788)){
var effect_fn_53789 = temp__5733__auto___53788;
(effect_fn_53789.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53789.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53789.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__53790 = cljs.core.next(seq__53700__$1);
var G__53791 = null;
var G__53792 = (0);
var G__53793 = (0);
seq__53700 = G__53790;
chunk__53701 = G__53791;
count__53702 = G__53792;
i__53703 = G__53793;
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
var seq__53716 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__53717 = null;
var count__53718 = (0);
var i__53719 = (0);
while(true){
if((i__53719 < count__53718)){
var event = chunk__53717.cljs$core$IIndexed$_nth$arity$2(null,i__53719);
re_frame.router.dispatch(event);


var G__53794 = seq__53716;
var G__53795 = chunk__53717;
var G__53796 = count__53718;
var G__53797 = (i__53719 + (1));
seq__53716 = G__53794;
chunk__53717 = G__53795;
count__53718 = G__53796;
i__53719 = G__53797;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53716);
if(temp__5735__auto__){
var seq__53716__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53716__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__53716__$1);
var G__53798 = cljs.core.chunk_rest(seq__53716__$1);
var G__53799 = c__4638__auto__;
var G__53800 = cljs.core.count(c__4638__auto__);
var G__53801 = (0);
seq__53716 = G__53798;
chunk__53717 = G__53799;
count__53718 = G__53800;
i__53719 = G__53801;
continue;
} else {
var event = cljs.core.first(seq__53716__$1);
re_frame.router.dispatch(event);


var G__53802 = cljs.core.next(seq__53716__$1);
var G__53803 = null;
var G__53804 = (0);
var G__53805 = (0);
seq__53716 = G__53802;
chunk__53717 = G__53803;
count__53718 = G__53804;
i__53719 = G__53805;
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
var seq__53720 = cljs.core.seq(value);
var chunk__53721 = null;
var count__53722 = (0);
var i__53723 = (0);
while(true){
if((i__53723 < count__53722)){
var event = chunk__53721.cljs$core$IIndexed$_nth$arity$2(null,i__53723);
clear_event(event);


var G__53806 = seq__53720;
var G__53807 = chunk__53721;
var G__53808 = count__53722;
var G__53809 = (i__53723 + (1));
seq__53720 = G__53806;
chunk__53721 = G__53807;
count__53722 = G__53808;
i__53723 = G__53809;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53720);
if(temp__5735__auto__){
var seq__53720__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53720__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__53720__$1);
var G__53810 = cljs.core.chunk_rest(seq__53720__$1);
var G__53811 = c__4638__auto__;
var G__53812 = cljs.core.count(c__4638__auto__);
var G__53813 = (0);
seq__53720 = G__53810;
chunk__53721 = G__53811;
count__53722 = G__53812;
i__53723 = G__53813;
continue;
} else {
var event = cljs.core.first(seq__53720__$1);
clear_event(event);


var G__53814 = cljs.core.next(seq__53720__$1);
var G__53815 = null;
var G__53816 = (0);
var G__53817 = (0);
seq__53720 = G__53814;
chunk__53721 = G__53815;
count__53722 = G__53816;
i__53723 = G__53817;
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
