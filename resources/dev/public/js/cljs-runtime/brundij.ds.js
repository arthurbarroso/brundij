goog.provide('brundij.ds');
if((typeof brundij !== 'undefined') && (typeof brundij.ds !== 'undefined') && (typeof brundij.ds.database !== 'undefined')){
} else {
brundij.ds.database = reagent.core.atom.cljs$core$IFn$_invoke$arity$variadic((datascript.core.empty_db.cljs$core$IFn$_invoke$arity$0 ? datascript.core.empty_db.cljs$core$IFn$_invoke$arity$0() : datascript.core.empty_db.call(null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY)], null)], 0));
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

//# sourceMappingURL=brundij.ds.js.map
