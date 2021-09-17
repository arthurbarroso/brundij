goog.provide('brundij.components.error_boundary');
brundij.components.error_boundary.err_boundary = (function brundij$components$error_boundary$err_boundary(var_args){
var args__4824__auto__ = [];
var len__4818__auto___69448 = arguments.length;
var i__4819__auto___69449 = (0);
while(true){
if((i__4819__auto___69449 < len__4818__auto___69448)){
args__4824__auto__.push((arguments[i__4819__auto___69449]));

var G__69450 = (i__4819__auto___69449 + (1));
i__4819__auto___69449 = G__69450;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return brundij.components.error_boundary.err_boundary.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(brundij.components.error_boundary.err_boundary.cljs$core$IFn$_invoke$arity$variadic = (function (children){
var err_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ErrBoundary",new cljs.core.Keyword(null,"component-did-catch","component-did-catch",652725810),(function (err,info){
return cljs.core.reset_BANG_(err_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [err,info], null));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__69452__delegate = function (children__$1){
if((cljs.core.deref(err_state) == null)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),children__$1);
} else {
var vec__69445 = cljs.core.deref(err_state);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69445,(0),null);
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69445,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([info], 0))], null)], null);
}
};
var G__69452 = function (var_args){
var children__$1 = null;
if (arguments.length > 0) {
var G__69454__i = 0, G__69454__a = new Array(arguments.length -  0);
while (G__69454__i < G__69454__a.length) {G__69454__a[G__69454__i] = arguments[G__69454__i + 0]; ++G__69454__i;}
  children__$1 = new cljs.core.IndexedSeq(G__69454__a,0,null);
} 
return G__69452__delegate.call(this,children__$1);};
G__69452.cljs$lang$maxFixedArity = 0;
G__69452.cljs$lang$applyTo = (function (arglist__69455){
var children__$1 = cljs.core.seq(arglist__69455);
return G__69452__delegate(children__$1);
});
G__69452.cljs$core$IFn$_invoke$arity$variadic = G__69452__delegate;
return G__69452;
})()
], null));
}));

(brundij.components.error_boundary.err_boundary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(brundij.components.error_boundary.err_boundary.cljs$lang$applyTo = (function (seq69441){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq69441));
}));


//# sourceMappingURL=brundij.components.error_boundary.js.map
