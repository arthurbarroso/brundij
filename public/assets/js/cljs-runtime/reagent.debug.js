goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__52084__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__52084 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52085__i = 0, G__52085__a = new Array(arguments.length -  0);
while (G__52085__i < G__52085__a.length) {G__52085__a[G__52085__i] = arguments[G__52085__i + 0]; ++G__52085__i;}
  args = new cljs.core.IndexedSeq(G__52085__a,0,null);
} 
return G__52084__delegate.call(this,args);};
G__52084.cljs$lang$maxFixedArity = 0;
G__52084.cljs$lang$applyTo = (function (arglist__52086){
var args = cljs.core.seq(arglist__52086);
return G__52084__delegate(args);
});
G__52084.cljs$core$IFn$_invoke$arity$variadic = G__52084__delegate;
return G__52084;
})()
);

(o.error = (function() { 
var G__52087__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__52087 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52088__i = 0, G__52088__a = new Array(arguments.length -  0);
while (G__52088__i < G__52088__a.length) {G__52088__a[G__52088__i] = arguments[G__52088__i + 0]; ++G__52088__i;}
  args = new cljs.core.IndexedSeq(G__52088__a,0,null);
} 
return G__52087__delegate.call(this,args);};
G__52087.cljs$lang$maxFixedArity = 0;
G__52087.cljs$lang$applyTo = (function (arglist__52095){
var args = cljs.core.seq(arglist__52095);
return G__52087__delegate(args);
});
G__52087.cljs$core$IFn$_invoke$arity$variadic = G__52087__delegate;
return G__52087;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
