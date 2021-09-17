goog.provide('brundij.views.answers.create');
brundij.views.answers.create.question_link_base = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#333"], null);
brundij.views.answers.create.question_link_styles = (function brundij$views$answers$create$question_link_styles(possible_QMARK_){
if(possible_QMARK_ === true){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([brundij.views.answers.create.question_link_base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], 0));
} else {
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([brundij.views.answers.create.question_link_base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#ccc"], null)], 0));
}
});
brundij.views.answers.create.option_base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.5rem",new cljs.core.Keyword(null,"background","background",-863952629),"none",new cljs.core.Keyword(null,"padding","padding",1660304693),(0),new cljs.core.Keyword(null,"border","border",1444987323),"none"], null);
brundij.views.answers.create.option_styles = (function brundij$views$answers$create$option_styles(current_rating,option){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_rating,option)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([brundij.views.answers.create.option_base,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid red",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%"], null)], 0));
} else {
return brundij.views.answers.create.option_base;
}
});
brundij.views.answers.create.trend_styles = (function brundij$views$answers$create$trend_styles(current_trend,trend){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_trend,trend)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([brundij.views.answers.create.option_base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),"1px solid red"], null)], 0));
} else {
return brundij.views.answers.create.option_base;
}
});
brundij.views.answers.create.options = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rating","rating",144173662),(1),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"\uD83D\uDD34",new cljs.core.Keyword(null,"title","title",636505583),"Bad"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rating","rating",144173662),(2),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"\uD83D\uDFE1",new cljs.core.Keyword(null,"title","title",636505583),"Ok"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rating","rating",144173662),(3),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"\uD83D\uDFE2",new cljs.core.Keyword(null,"title","title",636505583),"Good"], null)], null);
brundij.views.answers.create.trend_options = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"\u2B07\uFE0F",new cljs.core.Keyword(null,"title","title",636505583),"Trending down",new cljs.core.Keyword(null,"trend","trend",54563841),"down"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"\u27A1\uFE0F",new cljs.core.Keyword(null,"title","title",636505583),"Stable",new cljs.core.Keyword(null,"trend","trend",54563841),"stable"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"symbol","symbol",-1038572696),"\u2B06\uFE0F",new cljs.core.Keyword(null,"title","title",636505583),"Trending up",new cljs.core.Keyword(null,"trend","trend",54563841),"up"], null)], null);
brundij.views.answers.create.parse_questions_for_handler = (function brundij$views$answers$create$parse_questions_for_handler(questions){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (q){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"question-id","question-id",529146980),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(q),new cljs.core.Keyword(null,"rating","rating",144173662),new cljs.core.Keyword(null,"rating","rating",144173662).cljs$core$IFn$_invoke$arity$1(q),new cljs.core.Keyword(null,"trend","trend",54563841),new cljs.core.Keyword(null,"trend","trend",54563841).cljs$core$IFn$_invoke$arity$1(q)], null);
}),questions);
});
brundij.views.answers.create.create_answers = (function brundij$views$answers$create$create_answers(){
var questions = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.views.answers.subs","pre-existing-questions","brundij.views.answers.subs/pre-existing-questions",-1219202985)], null)));
var max_index = cljs.core.count(questions);
var current_index = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.views.answers.subs","current-question-index","brundij.views.answers.subs/current-question-index",-1465589225)], null)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(questions))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [brundij.components.template.template,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"3rem",new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)),"Looks like either the selected health check has no questions \n         or there is no health check selected at all \uD83D\uDC1B"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.events","navigate","brundij.events/navigate",-2030546100),new cljs.core.Keyword(null,"home","home",-74557309)], null));
})], null)),"Go back to home page"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [brundij.components.template.template,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"3rem",new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)),"Answering health check questions \uD83E\uDD5D"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h4","h4",2004862993),["Question/topic: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(questions,current_index)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Your rating:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"40%"], null)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function brundij$views$answers$create$create_answers_$_iter__72450(s__72451){
return (new cljs.core.LazySeq(null,(function (){
var s__72451__$1 = s__72451;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__72451__$1);
if(temp__5735__auto__){
var s__72451__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72451__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__72451__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__72453 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__72452 = (0);
while(true){
if((i__72452 < size__4610__auto__)){
var option = cljs.core._nth(c__4609__auto__,i__72452);
cljs.core.chunk_append(b__72453,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(brundij.views.answers.create.option_styles(new cljs.core.Keyword(null,"rating","rating",144173662).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(questions,current_index)),new cljs.core.Keyword(null,"rating","rating",144173662).cljs$core$IFn$_invoke$arity$1(option)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(option),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__72452,option,c__4609__auto__,size__4610__auto__,b__72453,s__72451__$2,temp__5735__auto__,questions,max_index,current_index){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.views.answers.events","update-question-rating-at-index","brundij.views.answers.events/update-question-rating-at-index",615085094),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rating","rating",144173662),new cljs.core.Keyword(null,"rating","rating",144173662).cljs$core$IFn$_invoke$arity$1(option),new cljs.core.Keyword(null,"index","index",-1531685915),current_index], null)], null));
});})(i__72452,option,c__4609__auto__,size__4610__auto__,b__72453,s__72451__$2,temp__5735__auto__,questions,max_index,current_index))
], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(option)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rating","rating",144173662).cljs$core$IFn$_invoke$arity$1(option)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(questions,current_index))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_index)].join('')], null)));

var G__72458 = (i__72452 + (1));
i__72452 = G__72458;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72453),brundij$views$answers$create$create_answers_$_iter__72450(cljs.core.chunk_rest(s__72451__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72453),null);
}
} else {
var option = cljs.core.first(s__72451__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(brundij.views.answers.create.option_styles(new cljs.core.Keyword(null,"rating","rating",144173662).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(questions,current_index)),new cljs.core.Keyword(null,"rating","rating",144173662).cljs$core$IFn$_invoke$arity$1(option)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(option),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (option,s__72451__$2,temp__5735__auto__,questions,max_index,current_index){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.views.answers.events","update-question-rating-at-index","brundij.views.answers.events/update-question-rating-at-index",615085094),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"rating","rating",144173662),new cljs.core.Keyword(null,"rating","rating",144173662).cljs$core$IFn$_invoke$arity$1(option),new cljs.core.Keyword(null,"index","index",-1531685915),current_index], null)], null));
});})(option,s__72451__$2,temp__5735__auto__,questions,max_index,current_index))
], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(option)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rating","rating",144173662).cljs$core$IFn$_invoke$arity$1(option)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(questions,current_index))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_index)].join('')], null)),brundij$views$answers$create$create_answers_$_iter__72450(cljs.core.rest(s__72451__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(brundij.views.answers.create.options);
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"The trend for this rating:"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"40%"], null)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function brundij$views$answers$create$create_answers_$_iter__72454(s__72455){
return (new cljs.core.LazySeq(null,(function (){
var s__72455__$1 = s__72455;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__72455__$1);
if(temp__5735__auto__){
var s__72455__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__72455__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__72455__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__72457 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__72456 = (0);
while(true){
if((i__72456 < size__4610__auto__)){
var trend = cljs.core._nth(c__4609__auto__,i__72456);
cljs.core.chunk_append(b__72457,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(brundij.views.answers.create.trend_styles(new cljs.core.Keyword(null,"trend","trend",54563841).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(questions,current_index)),new cljs.core.Keyword(null,"trend","trend",54563841).cljs$core$IFn$_invoke$arity$1(trend)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(trend),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__72456,trend,c__4609__auto__,size__4610__auto__,b__72457,s__72455__$2,temp__5735__auto__,questions,max_index,current_index){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.views.answers.events","update-question-trend-at-index","brundij.views.answers.events/update-question-trend-at-index",-580796926),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"trend","trend",54563841),new cljs.core.Keyword(null,"trend","trend",54563841).cljs$core$IFn$_invoke$arity$1(trend),new cljs.core.Keyword(null,"index","index",-1531685915),current_index], null)], null));
});})(i__72456,trend,c__4609__auto__,size__4610__auto__,b__72457,s__72455__$2,temp__5735__auto__,questions,max_index,current_index))
], null)),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(trend)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(trend)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(questions,current_index))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_index)].join('')], null)));

var G__72459 = (i__72456 + (1));
i__72456 = G__72459;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__72457),brundij$views$answers$create$create_answers_$_iter__72454(cljs.core.chunk_rest(s__72455__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__72457),null);
}
} else {
var trend = cljs.core.first(s__72455__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(brundij.views.answers.create.trend_styles(new cljs.core.Keyword(null,"trend","trend",54563841).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(questions,current_index)),new cljs.core.Keyword(null,"trend","trend",54563841).cljs$core$IFn$_invoke$arity$1(trend)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(trend),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (trend,s__72455__$2,temp__5735__auto__,questions,max_index,current_index){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.views.answers.events","update-question-trend-at-index","brundij.views.answers.events/update-question-trend-at-index",-580796926),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"trend","trend",54563841),new cljs.core.Keyword(null,"trend","trend",54563841).cljs$core$IFn$_invoke$arity$1(trend),new cljs.core.Keyword(null,"index","index",-1531685915),current_index], null)], null));
});})(trend,s__72455__$2,temp__5735__auto__,questions,max_index,current_index))
], null)),new cljs.core.Keyword(null,"symbol","symbol",-1038572696).cljs$core$IFn$_invoke$arity$1(trend)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(trend)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(questions,current_index))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_index)].join('')], null)),brundij$views$answers$create$create_answers_$_iter__72454(cljs.core.rest(s__72455__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(brundij.views.answers.create.trend_options);
})())], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"40%",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(brundij.views.answers.create.question_link_styles((current_index > (0))),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if((current_index > (0))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.views.answers.events","decrement-current-question-index","brundij.views.answers.events/decrement-current-question-index",-1919280674)], null));
} else {
return null;
}
})], null)),"Prior question"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(brundij.views.answers.create.question_link_styles((current_index < max_index)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if((current_index < max_index)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.views.answers.events","increment-current-question-index","brundij.views.answers.events/increment-current-question-index",-434712020)], null));
} else {
return null;
}
})], null)),"Next question"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [brundij.components.button.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.views.answers.events","create-answers","brundij.views.answers.events/create-answers",-278626436),brundij.views.answers.create.parse_questions_for_handler(questions)], null));
}),new cljs.core.Keyword(null,"text","text",-1790561697),"Submit answers",new cljs.core.Keyword(null,"extra-styles","extra-styles",-1027557933),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"40%",new cljs.core.Keyword(null,"color","color",1011675173),"#333"], null)], null)], null)], null);
}
});

//# sourceMappingURL=brundij.views.answers.create.js.map
