goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__49936,res){
var map__49937 = p__49936;
var map__49937__$1 = cljs.core.__destructure_map(map__49937);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49937__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49937__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__49938 = res;
var G__49938__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49938,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__49938);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49938__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__49938__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__49942 = arguments.length;
switch (G__49942) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__49943,msg,handlers,timeout_after_ms){
var map__49944 = p__49943;
var map__49944__$1 = cljs.core.__destructure_map(map__49944);
var runtime = map__49944__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49944__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___50033 = arguments.length;
var i__4819__auto___50034 = (0);
while(true){
if((i__4819__auto___50034 < len__4818__auto___50033)){
args__4824__auto__.push((arguments[i__4819__auto___50034]));

var G__50035 = (i__4819__auto___50034 + (1));
i__4819__auto___50034 = G__50035;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__49959,ev,args){
var map__49960 = p__49959;
var map__49960__$1 = cljs.core.__destructure_map(map__49960);
var runtime = map__49960__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49960__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__49961 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__49964 = null;
var count__49965 = (0);
var i__49966 = (0);
while(true){
if((i__49966 < count__49965)){
var ext = chunk__49964.cljs$core$IIndexed$_nth$arity$2(null,i__49966);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__50036 = seq__49961;
var G__50037 = chunk__49964;
var G__50038 = count__49965;
var G__50039 = (i__49966 + (1));
seq__49961 = G__50036;
chunk__49964 = G__50037;
count__49965 = G__50038;
i__49966 = G__50039;
continue;
} else {
var G__50040 = seq__49961;
var G__50041 = chunk__49964;
var G__50042 = count__49965;
var G__50043 = (i__49966 + (1));
seq__49961 = G__50040;
chunk__49964 = G__50041;
count__49965 = G__50042;
i__49966 = G__50043;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49961);
if(temp__5735__auto__){
var seq__49961__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49961__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__49961__$1);
var G__50044 = cljs.core.chunk_rest(seq__49961__$1);
var G__50045 = c__4638__auto__;
var G__50046 = cljs.core.count(c__4638__auto__);
var G__50047 = (0);
seq__49961 = G__50044;
chunk__49964 = G__50045;
count__49965 = G__50046;
i__49966 = G__50047;
continue;
} else {
var ext = cljs.core.first(seq__49961__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__50048 = cljs.core.next(seq__49961__$1);
var G__50049 = null;
var G__50050 = (0);
var G__50051 = (0);
seq__49961 = G__50048;
chunk__49964 = G__50049;
count__49965 = G__50050;
i__49966 = G__50051;
continue;
} else {
var G__50052 = cljs.core.next(seq__49961__$1);
var G__50053 = null;
var G__50054 = (0);
var G__50055 = (0);
seq__49961 = G__50052;
chunk__49964 = G__50053;
count__49965 = G__50054;
i__49966 = G__50055;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq49951){
var G__49952 = cljs.core.first(seq49951);
var seq49951__$1 = cljs.core.next(seq49951);
var G__49953 = cljs.core.first(seq49951__$1);
var seq49951__$2 = cljs.core.next(seq49951__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49952,G__49953,seq49951__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__49973,p__49974){
var map__49975 = p__49973;
var map__49975__$1 = cljs.core.__destructure_map(map__49975);
var runtime = map__49975__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49975__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__49976 = p__49974;
var map__49976__$1 = cljs.core.__destructure_map(map__49976);
var msg = map__49976__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49976__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__49977 = cljs.core.deref(state_ref);
var map__49977__$1 = cljs.core.__destructure_map(map__49977);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49977__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49977__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__49979){
var map__49980 = p__49979;
var map__49980__$1 = cljs.core.__destructure_map(map__49980);
var runtime = map__49980__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49980__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__49983,msg){
var map__49984 = p__49983;
var map__49984__$1 = cljs.core.__destructure_map(map__49984);
var runtime = map__49984__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49984__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__49985,key,p__49986){
var map__49987 = p__49985;
var map__49987__$1 = cljs.core.__destructure_map(map__49987);
var state = map__49987__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49987__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__49988 = p__49986;
var map__49988__$1 = cljs.core.__destructure_map(map__49988);
var spec = map__49988__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49988__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__49989,key,spec){
var map__49990 = p__49989;
var map__49990__$1 = cljs.core.__destructure_map(map__49990);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49990__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__49991_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__49991_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__49992_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__49992_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__49993_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__49993_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__49994_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__49994_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__49995_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__49995_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__49996,key){
var map__49997 = p__49996;
var map__49997__$1 = cljs.core.__destructure_map(map__49997);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49997__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__49998,msg){
var map__50003 = p__49998;
var map__50003__$1 = cljs.core.__destructure_map(map__50003);
var runtime = map__50003__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50003__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__50013,p__50014){
var map__50015 = p__50013;
var map__50015__$1 = cljs.core.__destructure_map(map__50015);
var runtime = map__50015__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50015__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__50016 = p__50014;
var map__50016__$1 = cljs.core.__destructure_map(map__50016);
var msg = map__50016__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50016__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50016__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__50018 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__50020 = null;
var count__50021 = (0);
var i__50022 = (0);
while(true){
if((i__50022 < count__50021)){
var map__50026 = chunk__50020.cljs$core$IIndexed$_nth$arity$2(null,i__50022);
var map__50026__$1 = cljs.core.__destructure_map(map__50026);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50026__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__50063 = seq__50018;
var G__50064 = chunk__50020;
var G__50065 = count__50021;
var G__50066 = (i__50022 + (1));
seq__50018 = G__50063;
chunk__50020 = G__50064;
count__50021 = G__50065;
i__50022 = G__50066;
continue;
} else {
var G__50067 = seq__50018;
var G__50068 = chunk__50020;
var G__50069 = count__50021;
var G__50070 = (i__50022 + (1));
seq__50018 = G__50067;
chunk__50020 = G__50068;
count__50021 = G__50069;
i__50022 = G__50070;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__50018);
if(temp__5735__auto__){
var seq__50018__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50018__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__50018__$1);
var G__50071 = cljs.core.chunk_rest(seq__50018__$1);
var G__50072 = c__4638__auto__;
var G__50073 = cljs.core.count(c__4638__auto__);
var G__50074 = (0);
seq__50018 = G__50071;
chunk__50020 = G__50072;
count__50021 = G__50073;
i__50022 = G__50074;
continue;
} else {
var map__50027 = cljs.core.first(seq__50018__$1);
var map__50027__$1 = cljs.core.__destructure_map(map__50027);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50027__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__50075 = cljs.core.next(seq__50018__$1);
var G__50076 = null;
var G__50077 = (0);
var G__50078 = (0);
seq__50018 = G__50075;
chunk__50020 = G__50076;
count__50021 = G__50077;
i__50022 = G__50078;
continue;
} else {
var G__50079 = cljs.core.next(seq__50018__$1);
var G__50080 = null;
var G__50081 = (0);
var G__50082 = (0);
seq__50018 = G__50079;
chunk__50020 = G__50080;
count__50021 = G__50081;
i__50022 = G__50082;
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

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
