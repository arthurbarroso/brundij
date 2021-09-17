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
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__59762,res){
var map__59763 = p__59762;
var map__59763__$1 = cljs.core.__destructure_map(map__59763);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59763__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59763__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__59764 = res;
var G__59764__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59764,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__59764);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__59764__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__59764__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__59770 = arguments.length;
switch (G__59770) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__59771,msg,handlers,timeout_after_ms){
var map__59772 = p__59771;
var map__59772__$1 = cljs.core.__destructure_map(map__59772);
var runtime = map__59772__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59772__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___60049 = arguments.length;
var i__4819__auto___60050 = (0);
while(true){
if((i__4819__auto___60050 < len__4818__auto___60049)){
args__4824__auto__.push((arguments[i__4819__auto___60050]));

var G__60051 = (i__4819__auto___60050 + (1));
i__4819__auto___60050 = G__60051;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__59778,ev,args){
var map__59779 = p__59778;
var map__59779__$1 = cljs.core.__destructure_map(map__59779);
var runtime = map__59779__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59779__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__59780 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__59783 = null;
var count__59784 = (0);
var i__59785 = (0);
while(true){
if((i__59785 < count__59784)){
var ext = chunk__59783.cljs$core$IIndexed$_nth$arity$2(null,i__59785);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__60052 = seq__59780;
var G__60053 = chunk__59783;
var G__60054 = count__59784;
var G__60055 = (i__59785 + (1));
seq__59780 = G__60052;
chunk__59783 = G__60053;
count__59784 = G__60054;
i__59785 = G__60055;
continue;
} else {
var G__60056 = seq__59780;
var G__60057 = chunk__59783;
var G__60058 = count__59784;
var G__60059 = (i__59785 + (1));
seq__59780 = G__60056;
chunk__59783 = G__60057;
count__59784 = G__60058;
i__59785 = G__60059;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59780);
if(temp__5735__auto__){
var seq__59780__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59780__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__59780__$1);
var G__60060 = cljs.core.chunk_rest(seq__59780__$1);
var G__60061 = c__4638__auto__;
var G__60062 = cljs.core.count(c__4638__auto__);
var G__60063 = (0);
seq__59780 = G__60060;
chunk__59783 = G__60061;
count__59784 = G__60062;
i__59785 = G__60063;
continue;
} else {
var ext = cljs.core.first(seq__59780__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__60064 = cljs.core.next(seq__59780__$1);
var G__60065 = null;
var G__60066 = (0);
var G__60067 = (0);
seq__59780 = G__60064;
chunk__59783 = G__60065;
count__59784 = G__60066;
i__59785 = G__60067;
continue;
} else {
var G__60068 = cljs.core.next(seq__59780__$1);
var G__60069 = null;
var G__60070 = (0);
var G__60071 = (0);
seq__59780 = G__60068;
chunk__59783 = G__60069;
count__59784 = G__60070;
i__59785 = G__60071;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq59774){
var G__59775 = cljs.core.first(seq59774);
var seq59774__$1 = cljs.core.next(seq59774);
var G__59776 = cljs.core.first(seq59774__$1);
var seq59774__$2 = cljs.core.next(seq59774__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__59775,G__59776,seq59774__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__59789,p__59790){
var map__59791 = p__59789;
var map__59791__$1 = cljs.core.__destructure_map(map__59791);
var runtime = map__59791__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59791__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59792 = p__59790;
var map__59792__$1 = cljs.core.__destructure_map(map__59792);
var msg = map__59792__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59792__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__59797 = cljs.core.deref(state_ref);
var map__59797__$1 = cljs.core.__destructure_map(map__59797);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59797__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59797__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__59827){
var map__59829 = p__59827;
var map__59829__$1 = cljs.core.__destructure_map(map__59829);
var runtime = map__59829__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59829__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4212__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__59831,msg){
var map__59832 = p__59831;
var map__59832__$1 = cljs.core.__destructure_map(map__59832);
var runtime = map__59832__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59832__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__59837,key,p__59838){
var map__59839 = p__59837;
var map__59839__$1 = cljs.core.__destructure_map(map__59839);
var state = map__59839__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59839__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__59840 = p__59838;
var map__59840__$1 = cljs.core.__destructure_map(map__59840);
var spec = map__59840__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59840__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__59858,key,spec){
var map__59863 = p__59858;
var map__59863__$1 = cljs.core.__destructure_map(map__59863);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59863__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__59874_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__59874_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__59875_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__59875_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__59876_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__59876_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__59877_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__59877_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__59878_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__59878_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__59900,key){
var map__59906 = p__59900;
var map__59906__$1 = cljs.core.__destructure_map(map__59906);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59906__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__59914,msg){
var map__59915 = p__59914;
var map__59915__$1 = cljs.core.__destructure_map(map__59915);
var runtime = map__59915__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59915__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__59946,p__59947){
var map__59950 = p__59946;
var map__59950__$1 = cljs.core.__destructure_map(map__59950);
var runtime = map__59950__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59950__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__59951 = p__59947;
var map__59951__$1 = cljs.core.__destructure_map(map__59951);
var msg = map__59951__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59951__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59951__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__59992 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__59994 = null;
var count__59995 = (0);
var i__59996 = (0);
while(true){
if((i__59996 < count__59995)){
var map__60046 = chunk__59994.cljs$core$IIndexed$_nth$arity$2(null,i__59996);
var map__60046__$1 = cljs.core.__destructure_map(map__60046);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60046__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60079 = seq__59992;
var G__60080 = chunk__59994;
var G__60081 = count__59995;
var G__60082 = (i__59996 + (1));
seq__59992 = G__60079;
chunk__59994 = G__60080;
count__59995 = G__60081;
i__59996 = G__60082;
continue;
} else {
var G__60083 = seq__59992;
var G__60084 = chunk__59994;
var G__60085 = count__59995;
var G__60086 = (i__59996 + (1));
seq__59992 = G__60083;
chunk__59994 = G__60084;
count__59995 = G__60085;
i__59996 = G__60086;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__59992);
if(temp__5735__auto__){
var seq__59992__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__59992__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__59992__$1);
var G__60087 = cljs.core.chunk_rest(seq__59992__$1);
var G__60088 = c__4638__auto__;
var G__60089 = cljs.core.count(c__4638__auto__);
var G__60090 = (0);
seq__59992 = G__60087;
chunk__59994 = G__60088;
count__59995 = G__60089;
i__59996 = G__60090;
continue;
} else {
var map__60047 = cljs.core.first(seq__59992__$1);
var map__60047__$1 = cljs.core.__destructure_map(map__60047);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60047__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__60093 = cljs.core.next(seq__59992__$1);
var G__60094 = null;
var G__60095 = (0);
var G__60096 = (0);
seq__59992 = G__60093;
chunk__59994 = G__60094;
count__59995 = G__60095;
i__59996 = G__60096;
continue;
} else {
var G__60099 = cljs.core.next(seq__59992__$1);
var G__60100 = null;
var G__60101 = (0);
var G__60102 = (0);
seq__59992 = G__60099;
chunk__59994 = G__60100;
count__59995 = G__60101;
i__59996 = G__60102;
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
