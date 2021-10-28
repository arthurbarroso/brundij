goog.provide('brundij.subs');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("brundij.subs","current-route","brundij.subs/current-route",1386833641),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"current-route","current-route",2067529448).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("brundij.subs","loading","brundij.subs/loading",750745808),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("brundij.subs","is-online?","brundij.subs/is-online?",1509104472),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return new cljs.core.Keyword(null,"is-online?","is-online?",-1362640037).cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub_raw(new cljs.core.Keyword("brundij.subs","get-local-health-checks","brundij.subs/get-local-health-checks",-482156877),(function (_){
return reagent.ratom.make_reaction(brundij.ds.get_health_checks);
}));
re_frame.core.reg_sub_raw(new cljs.core.Keyword("brundij.subs","get-local-published-health-checks","brundij.subs/get-local-published-health-checks",-1916130977),(function (_){
return reagent.ratom.make_reaction(brundij.ds.get_published_health_checks);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("brundij.subs","db","brundij.subs/db",-1005652444),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"questions","questions",1226225380));
})], 0));

//# sourceMappingURL=brundij.subs.js.map
