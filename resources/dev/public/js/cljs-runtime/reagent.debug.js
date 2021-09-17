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
var G__48220__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__48220 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48221__i = 0, G__48221__a = new Array(arguments.length -  0);
while (G__48221__i < G__48221__a.length) {G__48221__a[G__48221__i] = arguments[G__48221__i + 0]; ++G__48221__i;}
  args = new cljs.core.IndexedSeq(G__48221__a,0,null);
} 
return G__48220__delegate.call(this,args);};
G__48220.cljs$lang$maxFixedArity = 0;
G__48220.cljs$lang$applyTo = (function (arglist__48222){
var args = cljs.core.seq(arglist__48222);
return G__48220__delegate(args);
});
G__48220.cljs$core$IFn$_invoke$arity$variadic = G__48220__delegate;
return G__48220;
})()
);

(o.error = (function() { 
var G__48223__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__48223 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__48224__i = 0, G__48224__a = new Array(arguments.length -  0);
while (G__48224__i < G__48224__a.length) {G__48224__a[G__48224__i] = arguments[G__48224__i + 0]; ++G__48224__i;}
  args = new cljs.core.IndexedSeq(G__48224__a,0,null);
} 
return G__48223__delegate.call(this,args);};
G__48223.cljs$lang$maxFixedArity = 0;
G__48223.cljs$lang$applyTo = (function (arglist__48225){
var args = cljs.core.seq(arglist__48225);
return G__48223__delegate(args);
});
G__48223.cljs$core$IFn$_invoke$arity$variadic = G__48223__delegate;
return G__48223;
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
