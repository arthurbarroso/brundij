goog.provide('brundij.views.questions.events');
brundij.views.questions.events.remove_from_vec = (function brundij$views$questions$events$remove_from_vec(vect,uuid){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__77486_SHARP_){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uuid,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__77486_SHARP_))));
}),vect);
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.views.questions.events","add-question","brundij.views.questions.events/add-question",974599243),(function (db,p__77487){
var vec__77488 = p__77487;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77488,(0),null);
var question = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77488,(1),null);
var current_questions = new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"questions","questions",1226225380),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_questions,question));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.views.questions.events","remove-question-by-uuid","brundij.views.questions.events/remove-question-by-uuid",1184564102),(function (db,p__77491){
var vec__77492 = p__77491;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77492,(0),null);
var uuid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77492,(1),null);
var current_questions = new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"questions","questions",1226225380),brundij.views.questions.events.remove_from_vec(current_questions,uuid));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.views.questions.events","change-question-input","brundij.views.questions.events/change-question-input",1712430214),(function (db,p__77495){
var vec__77496 = p__77495;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77496,(0),null);
var new_input = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77496,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"question-input","question-input",-1981198284),new_input);
}));
brundij.views.questions.events.mount_questions_txs = (function brundij$views$questions$events$mount_questions_txs(health_id,questions){
var question_ids = cljs.core.vec((function (){var iter__4611__auto__ = (function brundij$views$questions$events$mount_questions_txs_$_iter__77499(s__77500){
return (new cljs.core.LazySeq(null,(function (){
var s__77500__$1 = s__77500;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__77500__$1);
if(temp__5735__auto__){
var s__77500__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77500__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__77500__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__77502 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__77501 = (0);
while(true){
if((i__77501 < size__4610__auto__)){
var _i = cljs.core._nth(c__4609__auto__,i__77501);
cljs.core.chunk_append(b__77502,datascript.core.tempid.cljs$core$IFn$_invoke$arity$1((-1)));

var G__77521 = (i__77501 + (1));
i__77501 = G__77521;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77502),brundij$views$questions$events$mount_questions_txs_$_iter__77499(cljs.core.chunk_rest(s__77500__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77502),null);
}
} else {
var _i = cljs.core.first(s__77500__$2);
return cljs.core.cons(datascript.core.tempid.cljs$core$IFn$_invoke$arity$1((-1)),brundij$views$questions$events$mount_questions_txs_$_iter__77499(cljs.core.rest(s__77500__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(questions)));
})());
return cljs.core.flatten(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (item,index){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("question","uuid","question/uuid",-1029592193),brundij.uuids.generate_uuid(),new cljs.core.Keyword("question","content","question/content",-847823714),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword("db","id","db/id",-1388397098),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(question_ids,index)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("health","uuid","health/uuid",-1225821643),health_id], null),new cljs.core.Keyword("health","question","health/question",1653464759),cljs.core.nth.cljs$core$IFn$_invoke$arity$2(question_ids,index)], null)], null);
}),questions));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.views.questions.events","add-question-to-ds","brundij.views.questions.events/add-question-to-ds",198822847),(function (p__77503,p__77504){
var map__77505 = p__77503;
var map__77505__$1 = cljs.core.__destructure_map(map__77505);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77505__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__77506 = p__77504;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77506,(0),null);
var _questions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77506,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("brundij.events","transact!","brundij.events/transact!",-288195193),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("health","uuid","health/uuid",-1225821643),cljs.core.uuid,new cljs.core.Keyword("health","created_at","health/created_at",-333459566),brundij.date.get_inst()], null),new cljs.core.Keyword("brundij.events","navigate!","brundij.events/navigate!",618853207),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"questions","questions",1226225380)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.views.questions.events","create-questions","brundij.views.questions.events/create-questions",-851843738),(function (p__77509,p__77510){
var map__77511 = p__77509;
var map__77511__$1 = cljs.core.__destructure_map(map__77511);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77511__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__77512 = p__77510;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77512,(0),null);
var health_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77512,(1),null);
var questions = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77512,(2),null);
if(new cljs.core.Keyword(null,"is-online?","is-online?",-1362640037).cljs$core$IFn$_invoke$arity$1(db) === true){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),["https://brundij-api-demo.herokuapp.com/v1/questions/bulk/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(health_id)].join(''),new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"questions","questions",1226225380),questions], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.views.questions.events","question-creation-success","brundij.views.questions.events/question-creation-success",-378268533)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.views.questions.events","question-creation-failure","brundij.views.questions.events/question-creation-failure",998170966)], null)], null)], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.views.questions.events","question-creation-success","brundij.views.questions.events/question-creation-success",-378268533),(function (p__77515,p__77516){
var map__77517 = p__77515;
var map__77517__$1 = cljs.core.__destructure_map(map__77517);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77517__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__77518 = p__77516;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77518,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77518,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),false),new cljs.core.Keyword("brundij.events","navigate!","brundij.events/navigate!",618853207),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"success","success",1890645906)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.views.questions.events","question-creation-failure","brundij.views.questions.events/question-creation-failure",998170966),(function (data){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"kind","kind",-717265803),"Failure",new cljs.core.Keyword(null,"response","response",-1068424192),data], null)], 0));
}));

//# sourceMappingURL=brundij.views.questions.events.js.map
