goog.provide('brundij.shared.events');
var module$node_modules$react_toastify$dist$index=shadow.js.require("module$node_modules$react_toastify$dist$index", {});
re_frame.core.reg_fx(new cljs.core.Keyword("brundij.shared.events","aset","brundij.shared.events/aset",-795249021),(function (args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.aset,args);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.shared.events","initialize-db","brundij.shared.events/initialize-db",211093232),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
re_frame.core.reg_fx(new cljs.core.Keyword("brundij.shared.events","transact!","brundij.shared.events/transact!",-821724034),(function (data){
return brundij.shared.ds.transact_BANG_(data);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("brundij.shared.events","retract-health-entity!","brundij.shared.events/retract-health-entity!",650708743),(function (uuid){
return brundij.shared.ds.retract_health_entity_BANG_(uuid);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.shared.events","retract-health","brundij.shared.events/retract-health",-832389110),(function (_,p__49646){
var vec__49647 = p__49646;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49647,(0),null);
var uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49647,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("brundij.shared.events","retract-health-entity!","brundij.shared.events/retract-health-entity!",650708743),uuid], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.shared.events","navigate","brundij.shared.events/navigate",650336341),(function (_,p__49650){
var vec__49651 = p__49650;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49651,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49651,(1),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49651,(2),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49651,(3),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("brundij.shared.events","navigate!","brundij.shared.events/navigate!",62256156),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [route,params,query], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("brundij.shared.events","navigate!","brundij.shared.events/navigate!",62256156),(function (p__49654){
var vec__49655 = p__49654;
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49655,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49655,(1),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49655,(2),null);
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([route,params,query], 0));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("brundij.shared.events","show-toast","brundij.shared.events/show-toast",2005427407),(function (p__49658){
var map__49659 = p__49658;
var map__49659__$1 = cljs.core.__destructure_map(map__49659);
var toast_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49659__$1,new cljs.core.Keyword(null,"toast-content","toast-content",1372857885));
return module$node_modules$react_toastify$dist$index.toast(toast_content);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("brundij.shared.events","show-success-toast","brundij.shared.events/show-success-toast",-26612581),(function (p__49660){
var map__49661 = p__49660;
var map__49661__$1 = cljs.core.__destructure_map(map__49661);
var toast_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49661__$1,new cljs.core.Keyword(null,"toast-content","toast-content",1372857885));
return module$node_modules$react_toastify$dist$index.toast.success(toast_content);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("brundij.shared.events","show-failure-toast","brundij.shared.events/show-failure-toast",1390571983),(function (p__49662){
var map__49663 = p__49662;
var map__49663__$1 = cljs.core.__destructure_map(map__49663);
var toast_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49663__$1,new cljs.core.Keyword(null,"toast-content","toast-content",1372857885));
return module$node_modules$react_toastify$dist$index.toast.error(toast_content);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("brundij.shared.events","show-warn-toast","brundij.shared.events/show-warn-toast",1177169262),(function (p__49664){
var map__49665 = p__49664;
var map__49665__$1 = cljs.core.__destructure_map(map__49665);
var toast_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49665__$1,new cljs.core.Keyword(null,"toast-content","toast-content",1372857885));
return module$node_modules$react_toastify$dist$index.toast.warn(toast_content);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.shared.events","set-is-online","brundij.shared.events/set-is-online",-55574616),(function (p__49666,p__49667){
var map__49668 = p__49666;
var map__49668__$1 = cljs.core.__destructure_map(map__49668);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49668__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49669 = p__49667;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49669,(0),null);
var is_online_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49669,(1),null);
if(is_online_QMARK_ === true){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"is-online?","is-online?",-1362640037),is_online_QMARK_)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"is-online?","is-online?",-1362640037),is_online_QMARK_),new cljs.core.Keyword("brundij.shared.events","show-warn-toast","brundij.shared.events/show-warn-toast",1177169262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toast-content","toast-content",1372857885),"Looks like you're offline. \n                                         All operations will be made \n                                         locally and sent to the server \n                                         whenever you get online again."], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.shared.events","fetch-health-questions","brundij.shared.events/fetch-health-questions",1536561854),(function (p__49672,p__49673){
var map__49674 = p__49672;
var map__49674__$1 = cljs.core.__destructure_map(map__49674);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49674__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49675 = p__49673;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49675,(0),null);
var health_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49675,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),["http://localhost:4000/v1/healths/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(health_id)].join(''),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.shared.events","fetch-health-questions-success","brundij.shared.events/fetch-health-questions-success",1876968660)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.shared.events","fetch-health-questions-failure","brundij.shared.events/fetch-health-questions-failure",-685516840)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.shared.events","fetch-health-questions-success","brundij.shared.events/fetch-health-questions-success",1876968660),(function (p__49678,p__49679){
var map__49680 = p__49678;
var map__49680__$1 = cljs.core.__destructure_map(map__49680);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49680__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49681 = p__49679;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49681,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49681,(1),null);
var parsed_questions = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,item){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword("question","content","question/content",-847823714).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"index","index",-1531685915),index,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword("question","uuid","question/uuid",-1029592193).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"rating","rating",144173662),(2),new cljs.core.Keyword(null,"trend","trend",54563841),"stable"], null);
}),new cljs.core.Keyword("health","question","health/question",1653464759).cljs$core$IFn$_invoke$arity$1(cljs.core.first(response)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading","loading",-737050189),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pre-existing-questions","pre-existing-questions",1663508117),cljs.core.vec(parsed_questions)], 0)),new cljs.core.Keyword("brundij.shared.events","navigate!","brundij.shared.events/navigate!",62256156),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answers","answers",-2066449770)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.shared.events","fetch-health-questions-failure","brundij.shared.events/fetch-health-questions-failure",-685516840),(function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("brundij.shared.events","show-failure-toast","brundij.shared.events/show-failure-toast",1390571983),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toast-content","toast-content",1372857885),"Failure fetching your health check's questions"], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.shared.events","publish-local-health","brundij.shared.events/publish-local-health",70528021),(function (p__49684,p__49685){
var map__49686 = p__49684;
var map__49686__$1 = cljs.core.__destructure_map(map__49686);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49686__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49687 = p__49685;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49687,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49687,(1),null);
var health_uuid = new cljs.core.Keyword("health","uuid","health/uuid",-1225821643).cljs$core$IFn$_invoke$arity$1(data);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://localhost:4000/v1/health-with-questions",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.shared.events","local-health-publish-success","brundij.shared.events/local-health-publish-success",503204328),new cljs.core.Keyword(null,"health-uuid","health-uuid",1155806257),health_uuid], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.shared.events","local-health-failure","brundij.shared.events/local-health-failure",467593715)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.shared.events","local-health-publish-success","brundij.shared.events/local-health-publish-success",503204328),(function (p__49690,p__49691){
var map__49692 = p__49690;
var map__49692__$1 = cljs.core.__destructure_map(map__49692);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49692__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49693 = p__49691;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49693,(0),null);
var _res = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49693,(1),null);
var health_uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49693,(2),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),false),new cljs.core.Keyword("brundij.shared.events","retract-health-entity!","brundij.shared.events/retract-health-entity!",650708743),health_uuid,new cljs.core.Keyword("brundij.shared.events","transact!","brundij.shared.events/transact!",-821724034),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("published","uuid","published/uuid",1507725703),health_uuid,new cljs.core.Keyword("published","created_at","published/created_at",-1959579792),brundij.date.get_inst()], null),new cljs.core.Keyword("brundij.shared.events","show-success-toast","brundij.shared.events/show-success-toast",-26612581),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toast-content","toast-content",1372857885),["Health check with UUID ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(health_uuid)," successfully \n        published and ready to be answered by navigating to "].join('')], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.shared.events","local-health-publish-failure","brundij.shared.events/local-health-publish-failure",-1628621574),(function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("brundij.shared.events","show-failure-toast","brundij.shared.events/show-failure-toast",1390571983),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toast-content","toast-content",1372857885),"Failure creating your health check. Please try again later"], null)], null);
}));

//# sourceMappingURL=brundij.shared.events.js.map
