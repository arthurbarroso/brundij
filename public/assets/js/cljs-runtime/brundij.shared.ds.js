goog.provide('brundij.shared.ds');
if((typeof brundij !== 'undefined') && (typeof brundij.shared !== 'undefined') && (typeof brundij.shared.ds !== 'undefined') && (typeof brundij.shared.ds.database !== 'undefined')){
} else {
brundij.shared.ds.database = reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic((function (){var G__65843 = brundij.schema.schema();
return (datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$1(G__65843) : datascript.core.empty_db.call(null,G__65843));
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)], null)], 0));
}
/**
 * Persists a datascript database to localStorage
 */
brundij.shared.ds.persist_BANG_ = (function brundij$shared$ds$persist_BANG_(db){
return window.localStorage.setItem("datascript-brundij-database",datascript.transit.write_transit_str(db));
});
/**
 * Initializes datascript database. Will create a database from the data on localStoragge if possible. Also listens for changes and persists those
 */
brundij.shared.ds.initialize_ds_BANG_ = (function brundij$shared$ds$initialize_ds_BANG_(){
var persisted = window.localStorage.getItem("datascript-brundij-database");
var transit_persisted = datascript.transit.read_transit_str(persisted);
if((!((persisted == null)))){
datascript.core.reset_conn_BANG_.cljs$core$IFn$_invoke$arity$2(brundij.shared.ds.database,transit_persisted);
} else {
}

return datascript.core.listen_BANG_.cljs$core$IFn$_invoke$arity$3(brundij.shared.ds.database,new cljs.core.Keyword(null,"persistence","persistence",-203044807),(function (tx_report){
var temp__5735__auto__ = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(tx_report);
if(cljs.core.truth_(temp__5735__auto__)){
var db = temp__5735__auto__;
return setTimeout((function (){
return brundij.shared.ds.persist_BANG_(db);
}),(0));
} else {
return null;
}
}));
});
brundij.shared.ds.transact_BANG_ = (function brundij$shared$ds$transact_BANG_(data){
if(cljs.core.seq_QMARK_(data)){
return datascript.core.transact.cljs$core$IFn$_invoke$arity$2(brundij.shared.ds.database,data);
} else {
return datascript.core.transact.cljs$core$IFn$_invoke$arity$2(brundij.shared.ds.database,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [data], null));
}
});
brundij.shared.ds.retract_health_entity_BANG_ = (function brundij$shared$ds$retract_health_entity_BANG_(uuid){
return datascript.core.transact.cljs$core$IFn$_invoke$arity$2(brundij.shared.ds.database,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("health","uuid","health/uuid",-1225821643),uuid], null)], null)], null));
});
brundij.shared.ds.get_health_checks = (function brundij$shared$ds$get_health_checks(){
var G__65844 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("health","question","health/question",1653464759),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("question","uuid","question/uuid",-1029592193),new cljs.core.Keyword("question","created_at","question/created_at",-554261144),new cljs.core.Keyword("question","content","question/content",-847823714)], null)], null)], null)),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("health","uuid","health/uuid",-1225821643),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
var G__65845 = cljs.core.deref(brundij.shared.ds.database);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__65844,G__65845) : datascript.core.q.call(null,G__65844,G__65845));
});
brundij.shared.ds.get_published_health_checks = (function brundij$shared$ds$get_published_health_checks(){
var G__65846 = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),cljs.core.list(new cljs.core.Symbol(null,"pull","pull",779986722,null),new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?e","?e",-1194391683,null),new cljs.core.Keyword("published","uuid","published/uuid",1507725703),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null);
var G__65847 = cljs.core.deref(brundij.shared.ds.database);
return (datascript.core.q.cljs$core$IFn$_invoke$arity$2 ? datascript.core.q.cljs$core$IFn$_invoke$arity$2(G__65846,G__65847) : datascript.core.q.call(null,G__65846,G__65847));
});

//# sourceMappingURL=brundij.shared.ds.js.map
