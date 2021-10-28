goog.provide('brundij.healths.events');
brundij.healths.events.download_file_BANG_ = (function brundij$healths$events$download_file_BANG_(data,content_type,file_name){
var data_blob = (new Blob([data],({"type": content_type})));
var link = document.createElement("a");
(link.href = URL.createObjectURL(data_blob));

link.setAttribute("download",file_name);

document.body.appendChild(link);

link.click();

return document.body.removeChild(link);
});
re_frame.core.reg_fx(new cljs.core.Keyword("brundij.healths.events","download!","brundij.healths.events/download!",-1168028496),(function (response){
brundij.healths.events.download_file_BANG_(JSON.stringify(cljs.core.clj__GT_js(response)),"application/json","results.json");

return cljs.core.PersistentArrayMap.EMPTY;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.healths.events","change-health-id-input","brundij.healths.events/change-health-id-input",-1932158528),(function (db,p__49734){
var vec__49735 = p__49734;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49735,(0),null);
var new_input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49735,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"health-id-input","health-id-input",-1457607078),new_input);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.healths.events","toggle-pre-existing-input?","brundij.healths.events/toggle-pre-existing-input?",717818104),(function (db,p__49738){
var vec__49739 = p__49738;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49739,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49739,(1),null);
var current_input_state = new cljs.core.Keyword(null,"pre-existing-input?","pre-existing-input?",-127868489).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"pre-existing-input?","pre-existing-input?",-127868489),cljs.core.not(current_input_state));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.healths.events","fetch-results","brundij.healths.events/fetch-results",1340654876),(function (p__49742,p__49743){
var map__49744 = p__49742;
var map__49744__$1 = cljs.core.__destructure_map(map__49744);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49744__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49745 = p__49743;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49745,(0),null);
var health_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49745,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.healths.events","fetch-results-success","brundij.healths.events/fetch-results-success",-1380943686)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.healths.events","fetch-results-failure","brundij.healths.events/fetch-results-failure",1921350556)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.healths.events","fetch-results-success","brundij.healths.events/fetch-results-success",-1380943686),(function (p__49748,p__49749){
var map__49750 = p__49748;
var map__49750__$1 = cljs.core.__destructure_map(map__49750);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49750__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49751 = p__49749;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49751,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49751,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),false),new cljs.core.Keyword("brundij.healths.events","download!","brundij.healths.events/download!",-1168028496),response], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.healths.events","fetch-results-failure","brundij.healths.events/fetch-results-failure",1921350556),(function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("brundij.shared.events","show-failure-toast","brundij.shared.events/show-failure-toast",1390571983),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toast-content","toast-content",1372857885),"Failure downloading your health check's results. Please try again later"], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.healths.events","add-health-check-to-ds","brundij.healths.events/add-health-check-to-ds",-1822676769),(function (p__49754,p__49755){
var map__49756 = p__49754;
var map__49756__$1 = cljs.core.__destructure_map(map__49756);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49756__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49757 = p__49755;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49757,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49757,(1),null);
var uuid = brundij.uuids.generate_uuid();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("brundij.shared.events","transact!","brundij.shared.events/transact!",-821724034),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("health","uuid","health/uuid",-1225821643),uuid,new cljs.core.Keyword("health","created_at","health/created_at",-333459566),brundij.date.get_inst()], null),new cljs.core.Keyword("brundij.shared.events","navigate!","brundij.shared.events/navigate!",62256156),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"questions","questions",1226225380)], null),new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"health-uuid","health-uuid",1155806257),uuid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading","loading",-737050189),false], 0))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.healths.events","create-health","brundij.healths.events/create-health",-627019911),(function (p__49760,p__49761){
var map__49762 = p__49760;
var map__49762__$1 = cljs.core.__destructure_map(map__49762);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49762__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49763 = p__49761;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49763,(0),null);
var _data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49763,(1),null);
if(new cljs.core.Keyword(null,"is-online?","is-online?",-1362640037).cljs$core$IFn$_invoke$arity$1(db) === true){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.healths.events","health-creation-success","brundij.healths.events/health-creation-success",872673853)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.healths.events","health-creation-failure","brundij.healths.events/health-creation-failure",1315182201)], null)], null),new cljs.core.Keyword("brundij.shared.events","navigate!","brundij.shared.events/navigate!",62256156),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"questions","questions",1226225380)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.healths.events","add-health-check-to-ds","brundij.healths.events/add-health-check-to-ds",-1822676769)], null)], null);
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.healths.events","health-creation-success","brundij.healths.events/health-creation-success",872673853),(function (p__49766,p__49767){
var map__49768 = p__49766;
var map__49768__$1 = cljs.core.__destructure_map(map__49768);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49768__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__49769 = p__49767;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49769,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49769,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading","loading",-737050189),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"health-uuid","health-uuid",1155806257),new cljs.core.Keyword("health","uuid","health/uuid",-1225821643).cljs$core$IFn$_invoke$arity$1(response)], 0))], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.healths.events","health-creation-failure","brundij.healths.events/health-creation-failure",1315182201),(function (_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("brundij.shared.events","navigate!","brundij.shared.events/navigate!",62256156),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"create","create",-1301499256)], null),new cljs.core.Keyword("brundij.shared.events","show-failure-toast","brundij.shared.events/show-failure-toast",1390571983),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toast-content","toast-content",1372857885),"Failure creating your health check. Please try again later"], null)], null);
}));

//# sourceMappingURL=brundij.healths.events.js.map
