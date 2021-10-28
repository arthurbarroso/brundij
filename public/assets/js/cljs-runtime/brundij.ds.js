goog.provide('brundij.ds');
if((typeof brundij !== 'undefined') && (typeof brundij.ds !== 'undefined') && (typeof brundij.ds.database !== 'undefined')){
} else {
brundij.ds.database = reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic((function (){var G__63948 = brundij.schema.schema();
return (datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(G__63948) : datascript.core.empty_db.call(null,G__63948));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)], null)], 0));
}
/**
 * Persists a datascript database to localStorage
 */
brundij.ds.persist_BANG_ = (function brundij$ds$persist_BANG_(db){
return window.localStorage.setItem("datascript-brundij-database",datascript.transit.write_transit_str(db));
});
/**
 * Initializes datascript database. Will create a database from the data on localStoragge if possible. Also listens for changes and persists those
 */
brundij.ds.initialize_ds_BANG_ = (function brundij$ds$initialize_ds_BANG_(){
var persisted = window.localStorage.getItem("datascript-brundij-database");
var transit_persisted = datascript.transit.read_transit_str(persisted);
if((!((persisted == null)))){
datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(brundij.ds.database,transit_persisted);
} else {
}

return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(brundij.ds.database,new cljs.core.Keyword(null,"persistence","persistence",-203044807),(function (tx_report){
var temp__5735__auto__ = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(tx_report);
if(cljs.core.truth_(temp__5735__auto__)){
var db = temp__5735__auto__;
return setTimeout((function (){
return brundij.ds.persist_BANG_(db);
}),(0));
} else {
return null;
}
}));
});
brundij.ds.transact_BANG_ = (function brundij$ds$transact_BANG_(data){
if(cljs.core.seq_QMARK_(data)){
return datascript.core.transact.cljs$core$IFn$_invoke$arity$2(brundij.ds.database,data);
} else {
return datascript.core.transact.cljs$core$IFn$_invoke$arity$2(brundij.ds.database,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data], null));
}
});
brundij.ds.retract_health_entity_BANG_ = (function brundij$ds$retract_health_entity_BANG_(uuid){
return datascript.core.transact.cljs$core$IFn$_invoke$arity$2(brundij.ds.database,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("health","uuid","health/uuid",-1225821643),uuid], null)], null)], null));
});
brundij.ds.get_health_checks = (function brundij$ds$get_health_checks(){
var G__64001 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("health","question","health/question",1653464759),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("question","uuid","question/uuid",-1029592193),new cljs.core.Keyword("question","created_at","question/created_at",-554261144),new cljs.core.Keyword("question","content","question/content",-847823714)], null)], null)], null)),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("health","uuid","health/uuid",-1225821643),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
var G__64002 = cljs.core.deref(brundij.ds.database);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__64001,G__64002) : datascript.core.q.call(null,G__64001,G__64002));
});
brundij.ds.get_published_health_checks = (function brundij$ds$get_published_health_checks(){
var G__64015 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("published","uuid","published/uuid",1507725703),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
var G__64016 = cljs.core.deref(brundij.ds.database);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__64015,G__64016) : datascript.core.q.call(null,G__64015,G__64016));
});

//# sourceMappingURL=brundij.ds.js.map
