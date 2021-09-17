goog.provide('brundij.events');
var module$node_modules$react_toastify$dist$index=shadow.js.require("module$node_modules$react_toastify$dist$index", {});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.events","initialize-db","brundij.events/initialize-db",769656289),((day8.re_frame.tracing.is_trace_enabled_QMARK_())?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = null;
try{day8.re_frame.debux.common.util.send_form_BANG_(cljs.core.list(new cljs.core.Symbol(null,"fn-traced*","fn-traced*",-2067995546,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null)));

var result__67771__auto__ = brundij.db.default_db;
day8.re_frame.debux.common.util.send_trace_BANG_(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"num-seen","num-seen",-1576518431),1,new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),(1),new cljs.core.Keyword(null,"result","result",1415092211),result__67771__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__67771__auto__;
}catch (e69468){var e = e69468;
throw e;
}}):(function (_,___$1){
return brundij.db.default_db;
})));
re_frame.core.reg_fx(new cljs.core.Keyword("brundij.events","transact!","brundij.events/transact!",-288195193),(function (data){
return brundij.ds.transact_BANG_(data);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.events","write-to-ds","brundij.events/write-to-ds",1418745728),(function (_,p__69469){
var vec__69470 = p__69469;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69470,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69470,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("brundij.events","transact!","brundij.events/transact!",-288195193),data], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.events","navigate","brundij.events/navigate",-2030546100),(function (_,p__69473){
var vec__69474 = p__69473;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69474,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69474,(1),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69474,(2),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69474,(3),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("brundij.events","navigate!","brundij.events/navigate!",618853207),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [route,params,query], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("brundij.events","navigate!","brundij.events/navigate!",618853207),(function (p__69477){
var vec__69478 = p__69477;
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69478,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69478,(1),null);
var query = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69478,(2),null);
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$3(route,params,query);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.events","navigated","brundij.events/navigated",-1067996067),(function (db,p__69481){
var vec__69482 = p__69481;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69482,(0),null);
var new_match = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69482,(1),null);
var old_match = new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
var controllers = reitit.frontend.controllers.apply_controllers(new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(old_match),new_match);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-route","current-route",2067529448),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new_match,new cljs.core.Keyword(null,"controllers","controllers",-1120410624),controllers));
}));
re_frame.core.reg_fx(new cljs.core.Keyword("brundij.events","show-toast","brundij.events/show-toast",-669162548),(function (p__69485){
var map__69486 = p__69485;
var map__69486__$1 = cljs.core.__destructure_map(map__69486);
var toast_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69486__$1,new cljs.core.Keyword(null,"toast-content","toast-content",1372857885));
return module$node_modules$react_toastify$dist$index.toast(toast_content);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("brundij.events","show-success-toast","brundij.events/show-success-toast",1587604382),(function (p__69487){
var map__69488 = p__69487;
var map__69488__$1 = cljs.core.__destructure_map(map__69488);
var toast_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69488__$1,new cljs.core.Keyword(null,"toast-content","toast-content",1372857885));
return module$node_modules$react_toastify$dist$index.toast.success(toast_content);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("brundij.events","show-failure-toast","brundij.events/show-failure-toast",1930387660),(function (p__69489){
var map__69490 = p__69489;
var map__69490__$1 = cljs.core.__destructure_map(map__69490);
var toast_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69490__$1,new cljs.core.Keyword(null,"toast-content","toast-content",1372857885));
return module$node_modules$react_toastify$dist$index.toast.error(toast_content);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("brundij.events","show-warn-toast","brundij.events/show-warn-toast",-1520358807),(function (p__69491){
var map__69492 = p__69491;
var map__69492__$1 = cljs.core.__destructure_map(map__69492);
var toast_content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69492__$1,new cljs.core.Keyword(null,"toast-content","toast-content",1372857885));
return module$node_modules$react_toastify$dist$index.toast.warn(toast_content);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.events","set-is-online","brundij.events/set-is-online",-1670971741),(function (p__69493,p__69494){
var map__69495 = p__69493;
var map__69495__$1 = cljs.core.__destructure_map(map__69495);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69495__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__69496 = p__69494;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69496,(0),null);
var is_online_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69496,(1),null);
if(is_online_QMARK_ === true){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"is-online?","is-online?",-1362640037),is_online_QMARK_)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"is-online?","is-online?",-1362640037),is_online_QMARK_),new cljs.core.Keyword("brundij.events","show-warn-toast","brundij.events/show-warn-toast",-1520358807),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toast-content","toast-content",1372857885),"Looks like you're offline. \n                                         All operations will be made \n                                         locally and sent to the server \n                                         whenever you get online again."], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.events","fetch-health-questions","brundij.events/fetch-health-questions",2059997625),(function (p__69499,p__69500){
var map__69505 = p__69499;
var map__69505__$1 = cljs.core.__destructure_map(map__69505);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69505__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__69506 = p__69500;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69506,(0),null);
var health_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69506,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),["https://brundij-api-demo.herokuapp.com/v1/healths/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(health_id)].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.events","fetch-health-questions-success","brundij.events/fetch-health-questions-success",1320632767)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.events","fetch-health-questions-failure","brundij.events/fetch-health-questions-failure",-45164333)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.events","fetch-health-questions-success","brundij.events/fetch-health-questions-success",1320632767),(function (p__69510,p__69511){
var map__69513 = p__69510;
var map__69513__$1 = cljs.core.__destructure_map(map__69513);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69513__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__69514 = p__69511;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69514,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69514,(1),null);
var parsed_questions = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,item){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword("question","content","question/content",-847823714).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"index","index",-1531685915),index,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword("question","uuid","question/uuid",-1029592193).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"rating","rating",144173662),(2),new cljs.core.Keyword(null,"trend","trend",54563841),"stable"], null);
}),new cljs.core.Keyword("health","question","health/question",1653464759).cljs$core$IFn$_invoke$arity$1(cljs.core.first(response)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading","loading",-737050189),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"pre-existing-questions","pre-existing-questions",1663508117),cljs.core.vec(parsed_questions)], 0)),new cljs.core.Keyword("brundij.events","navigate!","brundij.events/navigate!",618853207),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answers","answers",-2066449770)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.events","fetch-health-questions-failure","brundij.events/fetch-health-questions-failure",-45164333),(function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("brundij.events","show-failure-toast","brundij.events/show-failure-toast",1930387660),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toast-content","toast-content",1372857885),"Failure fetching your health check's questions"], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword("brundij.events","transact!","brundij.events/transact!",-288195193),(function (item){
return brundij.ds.transact_BANG_(item);
}));

//# sourceMappingURL=brundij.events.js.map
