goog.provide('day8.re_frame_10x.panels.event.subs');
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","root","day8.re-frame-10x.panels.event.subs/root",-909264964),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (p__54239,_){
var map__54240 = p__54239;
var map__54240__$1 = cljs.core.__destructure_map(map__54240);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54240__$1,new cljs.core.Keyword(null,"code","code",1586293142));
return code;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","code-for-epoch","day8.re-frame-10x.panels.event.subs/code-for-epoch",1888261905),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.traces.subs","filtered-by-epoch","day8.re-frame-10x.panels.traces.subs/filtered-by-epoch",2069606875)], null),(function (traces,_){
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,trace){
var temp__5739__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null));
if((temp__5739__auto__ == null)){
return null;
} else {
var code = temp__5739__auto__;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"trace-id","trace-id",681947249),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace)], 0)),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i__$1,code__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(code__$1,new cljs.core.Keyword(null,"id","id",-1388402092),i__$1);
}),code)),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
}
}),traces));
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","code-for-epoch-exists?","day8.re-frame-10x.panels.event.subs/code-for-epoch-exists?",929098522),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","code-for-epoch","day8.re-frame-10x.panels.event.subs/code-for-epoch",1888261905)], null),(function (code,_){
return cljs.core.boolean$(code);
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","fragments-for-epoch","day8.re-frame-10x.panels.event.subs/fragments-for-epoch",-10362729),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","code-for-epoch","day8.re-frame-10x.panels.event.subs/code-for-epoch",1888261905)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","execution-order?","day8.re-frame-10x.panels.event.subs/execution-order?",1536487585)], null),(function (p__54247,_){
var vec__54250 = p__54247;
var map__54253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54250,(0),null);
var map__54253__$1 = cljs.core.__destructure_map(map__54253);
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54253__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var execution_order_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54250,(1),null);
var unordered_fragments = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (line){
return cljs.core.fn_QMARK_(new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(line));
}),code);
if(cljs.core.truth_(execution_order_QMARK_)){
return unordered_fragments;
} else {
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"syntax-order","syntax-order",-990682045),unordered_fragments);
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","trace-id-for-epoch","day8.re-frame-10x.panels.event.subs/trace-id-for-epoch",728519790),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","code-for-epoch","day8.re-frame-10x.panels.event.subs/code-for-epoch",1888261905)], null),(function (p__54255,_){
var map__54256 = p__54255;
var map__54256__$1 = cljs.core.__destructure_map(map__54256);
var trace_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54256__$1,new cljs.core.Keyword(null,"trace-id","trace-id",681947249));
return trace_id;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","form-for-epoch","day8.re-frame-10x.panels.event.subs/form-for-epoch",-1506248120),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","code-for-epoch","day8.re-frame-10x.panels.event.subs/code-for-epoch",1888261905)], null),(function (p__54257,_){
var map__54258 = p__54257;
var map__54258__$1 = cljs.core.__destructure_map(map__54258);
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54258__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
return form;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","zprint-form-for-epoch","day8.re-frame-10x.panels.event.subs/zprint-form-for-epoch",279472373),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","form-for-epoch","day8.re-frame-10x.panels.event.subs/form-for-epoch",-1506248120)], null),(function (form,_){
return zprint.core.zprint_str(form);
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","execution-order?","day8.re-frame-10x.panels.event.subs/execution-order?",1536487585),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","root","day8.re-frame-10x.panels.event.subs/root",-909264964)], null),(function (code,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(code,new cljs.core.Keyword(null,"execution-order?","execution-order?",-1342177142),true);
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","code-open?","day8.re-frame-10x.panels.event.subs/code-open?",1956666991),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","root","day8.re-frame-10x.panels.event.subs/root",-909264964)], null),(function (p__54270,_){
var map__54271 = p__54270;
var map__54271__$1 = cljs.core.__destructure_map(map__54271);
var code_open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54271__$1,new cljs.core.Keyword(null,"code-open?","code-open?",1228336744));
return code_open_QMARK_;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","highlighted-form","day8.re-frame-10x.panels.event.subs/highlighted-form",1402683478),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","root","day8.re-frame-10x.panels.event.subs/root",-909264964)], null),(function (p__54272,_){
var map__54273 = p__54272;
var map__54273__$1 = cljs.core.__destructure_map(map__54273);
var highlighted_form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54273__$1,new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753));
return highlighted_form;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","show-all-code?","day8.re-frame-10x.panels.event.subs/show-all-code?",1829719373),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","root","day8.re-frame-10x.panels.event.subs/root",-909264964)], null),(function (p__54280,_){
var map__54281 = p__54280;
var map__54281__$1 = cljs.core.__destructure_map(map__54281);
var show_all_code_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54281__$1,new cljs.core.Keyword(null,"show-all-code?","show-all-code?",159571286));
return show_all_code_QMARK_;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","repl-msg-state","day8.re-frame-10x.panels.event.subs/repl-msg-state",1012951853),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","root","day8.re-frame-10x.panels.event.subs/root",-909264964)], null),(function (p__54285,_){
var map__54286 = p__54285;
var map__54286__$1 = cljs.core.__destructure_map(map__54286);
var repl_msg_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54286__$1,new cljs.core.Keyword(null,"repl-msg-state","repl-msg-state",-522274040));
return repl_msg_state;
})], 0));
day8.re_frame_10x.panels.event.subs.canvas = document.createElement("canvas");
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","single-character-width","day8.re-frame-10x.panels.event.subs/single-character-width",1463629101),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (_,___$1){
var context = day8.re_frame_10x.panels.event.subs.canvas.getContext("2d");
(context.font = "monospace 1em");

return context.measureText("T").width;
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","max-column-width","day8.re-frame-10x.panels.event.subs/max-column-width",-1175866341),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","window-width-rounded","day8.re-frame-10x.panels.settings.subs/window-width-rounded",193095108),(100)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.event.subs","single-character-width","day8.re-frame-10x.panels.event.subs/single-character-width",1463629101)], null),(function (p__54294,_){
var vec__54295 = p__54294;
var window_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54295,(0),null);
var char_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54295,(1),null);
return Math.ceil((window_width / char_width));
})], 0));

//# sourceMappingURL=day8.re_frame_10x.panels.event.subs.js.map
