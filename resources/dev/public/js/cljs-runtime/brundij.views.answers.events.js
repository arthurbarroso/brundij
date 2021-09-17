goog.provide('brundij.views.answers.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.views.answers.events","update-question-rating-at-index","brundij.views.answers.events/update-question-rating-at-index",615085094),(function (db,p__72420){
var vec__72421 = p__72420;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72421,(0),null);
var map__72424 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72421,(1),null);
var map__72424__$1 = cljs.core.__destructure_map(map__72424);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72424__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var rating = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72424__$1,new cljs.core.Keyword(null,"rating","rating",144173662));
var current_questions = new cljs.core.Keyword(null,"pre-existing-questions","pre-existing-questions",1663508117).cljs$core$IFn$_invoke$arity$1(db);
var question_to_update = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(current_questions,index);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"pre-existing-questions","pre-existing-questions",1663508117),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(current_questions,index,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(question_to_update,new cljs.core.Keyword(null,"rating","rating",144173662),rating)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.views.answers.events","update-question-trend-at-index","brundij.views.answers.events/update-question-trend-at-index",-580796926),(function (db,p__72425){
var vec__72426 = p__72425;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72426,(0),null);
var map__72429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72426,(1),null);
var map__72429__$1 = cljs.core.__destructure_map(map__72429);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72429__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var trend = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72429__$1,new cljs.core.Keyword(null,"trend","trend",54563841));
var current_questions = new cljs.core.Keyword(null,"pre-existing-questions","pre-existing-questions",1663508117).cljs$core$IFn$_invoke$arity$1(db);
var question_to_update = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(current_questions,index);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"pre-existing-questions","pre-existing-questions",1663508117),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(current_questions,index,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(question_to_update,new cljs.core.Keyword(null,"trend","trend",54563841),trend)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.views.answers.events","increment-current-question-index","brundij.views.answers.events/increment-current-question-index",-434712020),(function (db,p__72430){
var vec__72431 = p__72430;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72431,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72431,(1),null);
var current_question_index = new cljs.core.Keyword(null,"current-question-index","current-question-index",-848015207).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-question-index","current-question-index",-848015207),(current_question_index + (1)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.views.answers.events","decrement-current-question-index","brundij.views.answers.events/decrement-current-question-index",-1919280674),(function (db,p__72434){
var vec__72435 = p__72434;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72435,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72435,(1),null);
var current_question_index = new cljs.core.Keyword(null,"current-question-index","current-question-index",-848015207).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-question-index","current-question-index",-848015207),(current_question_index - (1)));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.views.answers.events","create-answers","brundij.views.answers.events/create-answers",-278626436),(function (p__72438,p__72439){
var map__72440 = p__72438;
var map__72440__$1 = cljs.core.__destructure_map(map__72440);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72440__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__72441 = p__72439;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72441,(0),null);
var answers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72441,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"https://brundij-api-demo.herokuapp.com/v1/answers/bulk",new cljs.core.Keyword(null,"format","format",-1306924766),ajax.core.json_request_format(),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"answers","answers",-2066449770),answers], null),new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.views.answers.events","answer-creation-success","brundij.views.answers.events/answer-creation-success",-577586258)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.views.answers.events","answer-creation-failure","brundij.views.answers.events/answer-creation-failure",-1469115289)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.views.answers.events","answer-creation-success","brundij.views.answers.events/answer-creation-success",-577586258),(function (p__72444,p__72445){
var map__72446 = p__72444;
var map__72446__$1 = cljs.core.__destructure_map(map__72446);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72446__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__72447 = p__72445;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72447,(0),null);
var _response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72447,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading","loading",-737050189),false),new cljs.core.Keyword("brundij.events","navigate!","brundij.events/navigate!",618853207),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"answers-success","answers-success",1113637328)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("brundij.views.answers.events","answer-creation-failure","brundij.views.answers.events/answer-creation-failure",-1469115289),(function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("brundij.events","show-failure-toast","brundij.events/show-failure-toast",1930387660),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toast-content","toast-content",1372857885),"Failure creating answers. Please try again later."], null)], null);
}));

//# sourceMappingURL=brundij.views.answers.events.js.map
