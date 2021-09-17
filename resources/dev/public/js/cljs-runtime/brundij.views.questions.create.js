goog.provide('brundij.views.questions.create');
brundij.views.questions.create.list_style = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"list-style","list-style",-809622358),"none",new cljs.core.Keyword(null,"height","height",1025178622),"56%",new cljs.core.Keyword(null,"width","width",-384071477),"70%",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"3%",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"padding","padding",1660304693),(0)], null);
brundij.views.questions.create.list_item_style = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"background","background",-863952629),"#ebf5ee",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"1%",new cljs.core.Keyword(null,"width","width",-384071477),"98%",new cljs.core.Keyword(null,"padding","padding",1660304693),"2% 1%",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"2%",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null);
brundij.views.questions.create.item_text_style_base = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin","margin",-995903681),(0),new cljs.core.Keyword(null,"font-family","font-family",-667419874),brundij.styles.font_family], null);
brundij.views.questions.create.remove_item_text_style = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([brundij.views.questions.create.item_text_style_base,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null)], 0));
brundij.views.questions.create.add_question = (function brundij$views$questions$create$add_question(question_text){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.views.questions.events","add-question","brundij.views.questions.events/add-question",974599243),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid(),new cljs.core.Keyword(null,"content","content",15833224),question_text], null)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.views.questions.events","change-question-input","brundij.views.questions.events/change-question-input",1712430214),null], null));
});
brundij.views.questions.create.create_questions_view = (function brundij$views$questions$create$create_questions_view(){
var questions = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.views.questions.subs","questions","brundij.views.questions.subs/questions",-896895894)], null));
var question_input = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.views.questions.subs","question-input","brundij.views.questions.subs/question-input",878418042)], null));
var health_id = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.views.questions.subs","health-uuid","brundij.views.questions.subs/health-uuid",-1049137969)], null));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [brundij.components.template.template,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"3rem",new cljs.core.Keyword(null,"margin","margin",-995903681),(0)], null)),"Health check questions \uD83C\uDF43"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"70%"], null)),"Health checks come with a few default questions. You may add or remove \n      questions as you wish"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"width","width",-384071477),"70%"], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [brundij.components.input.input,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(question_input),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__77522_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.views.questions.events","change-question-input","brundij.views.questions.events/change-question-input",1712430214),p1__77522_SHARP_], null));
}),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false,new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"extra-styles","extra-styles",-1027557933),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"margin-right","margin-right",809689658),"3%"], null),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"New question"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [brundij.components.button.button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return brundij.views.questions.create.add_question(cljs.core.deref(question_input));
}),new cljs.core.Keyword(null,"text","text",-1790561697),"\u2795",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false,new cljs.core.Keyword(null,"extra-styles","extra-styles",-1027557933),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"#333"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(brundij.views.questions.create.list_style),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4611__auto__ = (function brundij$views$questions$create$create_questions_view_$_iter__77523(s__77524){
return (new cljs.core.LazySeq(null,(function (){
var s__77524__$1 = s__77524;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__77524__$1);
if(temp__5735__auto__){
var s__77524__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__77524__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__77524__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__77526 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__77525 = (0);
while(true){
if((i__77525 < size__4610__auto__)){
var question = cljs.core._nth(c__4609__auto__,i__77525);
cljs.core.chunk_append(b__77526,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(brundij.views.questions.create.list_item_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(brundij.views.questions.create.item_text_style_base),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(question)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(brundij.views.questions.create.remove_item_text_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__77525,question,c__4609__auto__,size__4610__auto__,b__77526,s__77524__$2,temp__5735__auto__,questions,question_input,health_id){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.views.questions.events","remove-question-by-uuid","brundij.views.questions.events/remove-question-by-uuid",1184564102),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(question)], null));
});})(i__77525,question,c__4609__auto__,size__4610__auto__,b__77526,s__77524__$2,temp__5735__auto__,questions,question_input,health_id))
], null)),"\u274C"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(question)], null)));

var G__77528 = (i__77525 + (1));
i__77525 = G__77528;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__77526),brundij$views$questions$create$create_questions_view_$_iter__77523(cljs.core.chunk_rest(s__77524__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__77526),null);
}
} else {
var question = cljs.core.first(s__77524__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(brundij.views.questions.create.list_item_style),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$1(brundij.views.questions.create.item_text_style_base),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(question)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(brundij.views.questions.create.remove_item_text_style,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (question,s__77524__$2,temp__5735__auto__,questions,question_input,health_id){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.views.questions.events","remove-question-by-uuid","brundij.views.questions.events/remove-question-by-uuid",1184564102),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(question)], null));
});})(question,s__77524__$2,temp__5735__auto__,questions,question_input,health_id))
], null)),"\u274C"], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(question)], null)),brundij$views$questions$create$create_questions_view_$_iter__77523(cljs.core.rest(s__77524__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.deref(questions));
})())], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [brundij.components.button.button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.views.questions.events","create-questions","brundij.views.questions.events/create-questions",-851843738),cljs.core.deref(health_id),cljs.core.deref(questions)], null));
}),new cljs.core.Keyword(null,"text","text",-1790561697),"Create questions",new cljs.core.Keyword(null,"extra-styles","extra-styles",-1027557933),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),"#333",new cljs.core.Keyword(null,"width","width",-384071477),"70%",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"1%",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(700)], null),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false], null)], null)], null);
});

//# sourceMappingURL=brundij.views.questions.create.js.map
