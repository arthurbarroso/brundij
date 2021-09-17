goog.provide('brundij.views.checks.events');
brundij.views.checks.events.download_file_BANG_ = (function brundij$views$checks$events$download_file_BANG_(data,content_type,file_name){
var data_blob = (new Blob([data],({"type": content_type})));
var link = document.createElement("a");
(link.href = URL.createObjectURL(data_blob));

link.setAttribute("download",file_name);

document.body.appendChild(link);

link.click();

return document.body.removeChild(link);
});
re_frame.core.reg_fx(new cljs.core.Keyword("brundij.views.checks.events","download!","brundij.views.checks.events/download!",-173878584),(function (response){
brundij.views.checks.events.download_file_BANG_(JSON.stringify(cljs.core.clj__GT_js(response)),"application/json","results.json");

return cljs.core.PersistentArrayMap.EMPTY;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.views.checks.events","change-health-id-input","brundij.views.checks.events/change-health-id-input",907283912),(function (db,p__77400){
var vec__77403 = p__77400;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77403,(0),null);
var new_input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77403,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"health-id-input","health-id-input",-1457607078),new_input);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.views.checks.events","toggle-pre-existing-input?","brundij.views.checks.events/toggle-pre-existing-input?",-435252000),(function (db,p__77410){
var vec__77411 = p__77410;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77411,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77411,(1),null);
var current_input_state = new cljs.core.Keyword(null,"pre-existing-input?","pre-existing-input?",-127868489).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"pre-existing-input?","pre-existing-input?",-127868489),cljs.core.not(current_input_state));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.views.checks.events","fetch-results","brundij.views.checks.events/fetch-results",690503972),(function (p__77422,p__77423){
var map__77426 = p__77422;
var map__77426__$1 = cljs.core.__destructure_map(map__77426);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77426__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__77427 = p__77423;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77427,(0),null);
var health_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77427,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),["https://brundij-api-demo.herokuapp.com/v1/healths/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(health_id),"/answers"].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.views.checks.events","fetch-results-success","brundij.views.checks.events/fetch-results-success",1962011858)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.views.checks.events","fetch-results-failure","brundij.views.checks.events/fetch-results-failure",728242100)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.views.checks.events","fetch-results-success","brundij.views.checks.events/fetch-results-success",1962011858),(function (p__77436,p__77437){
var map__77440 = p__77436;
var map__77440__$1 = cljs.core.__destructure_map(map__77440);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77440__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__77441 = p__77437;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77441,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77441,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),false),new cljs.core.Keyword("brundij.views.checks.events","download!","brundij.views.checks.events/download!",-173878584),response], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.views.checks.events","fetch-results-failure","brundij.views.checks.events/fetch-results-failure",728242100),(function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("brundij.events","show-failure-toast","brundij.events/show-failure-toast",1930387660),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toast-content","toast-content",1372857885),"Failure downloading your health check's results. Please try again later"], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.views.checks.events","add-health-check-to-ds","brundij.views.checks.events/add-health-check-to-ds",-895640345),(function (p__77448,p__77449){
var map__77451 = p__77448;
var map__77451__$1 = cljs.core.__destructure_map(map__77451);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77451__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__77452 = p__77449;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77452,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77452,(1),null);
var uuid = brundij.uuids.generate_uuid();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"health-uuid","health-uuid",1155806257),uuid),new cljs.core.Keyword("brundij.events","transact!","brundij.events/transact!",-288195193),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("health","uuid","health/uuid",-1225821643),uuid,new cljs.core.Keyword("health","created_at","health/created_at",-333459566),brundij.date.get_inst()], null),new cljs.core.Keyword("brundij.events","navigate!","brundij.events/navigate!",618853207),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"questions","questions",1226225380)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.views.checks.events","create-health","brundij.views.checks.events/create-health",358646673),(function (p__77460,p__77461){
var map__77462 = p__77460;
var map__77462__$1 = cljs.core.__destructure_map(map__77462);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77462__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__77463 = p__77461;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77463,(0),null);
var _data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77463,(1),null);
if(new cljs.core.Keyword(null,"is-online?","is-online?",-1362640037).cljs$core$IFn$_invoke$arity$1(db) === true){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"https://brundij-api-demo.herokuapp.com/v1/healths",new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.views.checks.events","health-creation-success","brundij.views.checks.events/health-creation-success",2101501509)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.views.checks.events","health-creation-failure","brundij.views.checks.events/health-creation-failure",430277249)], null)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.views.checks.events","add-health-check-to-ds","brundij.views.checks.events/add-health-check-to-ds",-895640345)], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.views.checks.events","health-creation-success","brundij.views.checks.events/health-creation-success",2101501509),(function (p__77470,p__77471){
var map__77474 = p__77470;
var map__77474__$1 = cljs.core.__destructure_map(map__77474);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77474__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__77475 = p__77471;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77475,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77475,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading","loading",-737050189),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"health-uuid","health-uuid",1155806257),new cljs.core.Keyword("health","uuid","health/uuid",-1225821643).cljs$core$IFn$_invoke$arity$1(response)], 0)),new cljs.core.Keyword("brundij.events","navigate!","brundij.events/navigate!",618853207),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"questions","questions",1226225380)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.views.checks.events","health-creation-failure","brundij.views.checks.events/health-creation-failure",430277249),(function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("brundij.events","show-failure-toast","brundij.events/show-failure-toast",1930387660),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toast-content","toast-content",1372857885),"Failure creating your health check. Please try again later"], null)], null);
}));

//# sourceMappingURL=brundij.views.checks.events.js.map
