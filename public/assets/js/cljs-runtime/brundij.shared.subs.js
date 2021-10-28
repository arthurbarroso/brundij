goog.provide('brundij.shared.subs');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("brundij.shared.subs","loading","brundij.shared.subs/loading",-1590006391),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("brundij.shared.subs","is-online?","brundij.shared.subs/is-online?",-982501615),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"is-online?","is-online?",-1362640037).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub_raw(new cljs.core.Keyword("brundij.shared.subs","get-local-health-checks","brundij.shared.subs/get-local-health-checks",-809117192),(function (_){
return reagent.ratom.make_reaction(brundij.shared.ds.get_health_checks);
}));
re_frame.core.reg_sub_raw(new cljs.core.Keyword("brundij.shared.subs","get-local-published-health-checks","brundij.shared.subs/get-local-published-health-checks",5186980),(function (_){
return reagent.ratom.make_reaction(brundij.shared.ds.get_published_health_checks);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("brundij.shared.subs","db","brundij.shared.subs/db",1284225501),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"questions","questions",1226225380));
})], 0));

//# sourceMappingURL=brundij.shared.subs.js.map
