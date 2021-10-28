goog.provide('brundij.shared.components.error_boundary');
brundij.shared.components.error_boundary.err_boundary = (function brundij$shared$components$error_boundary$err_boundary(var_args){
var args__4824__auto__ = [];
var len__4818__auto___52784 = arguments.length;
var i__4819__auto___52785 = (0);
while(true){
if((i__4819__auto___52785 < len__4818__auto___52784)){
args__4824__auto__.push((arguments[i__4819__auto___52785]));

var G__52786 = (i__4819__auto___52785 + (1));
i__4819__auto___52785 = G__52786;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return brundij.shared.components.error_boundary.err_boundary.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(brundij.shared.components.error_boundary.err_boundary.cljs$core$IFn$_invoke$arity$variadic = (function (_children){
var err_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ErrBoundary",new cljs.core.Keyword(null,"component-did-catch","component-did-catch",652725810),(function (err,info){
return cljs.core.reset_BANG_(err_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [err,info], null));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__52787__delegate = function (children){
if((cljs.core.deref(err_state) == null)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),children);
} else {
var vec__52781 = cljs.core.deref(err_state);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52781,(0),null);
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52781,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([info], 0))], null)], null);
}
};
var G__52787 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__52789__i = 0, G__52789__a = new Array(arguments.length -  0);
while (G__52789__i < G__52789__a.length) {G__52789__a[G__52789__i] = arguments[G__52789__i + 0]; ++G__52789__i;}
  children = new cljs.core.IndexedSeq(G__52789__a,0,null);
} 
return G__52787__delegate.call(this,children);};
G__52787.cljs$lang$maxFixedArity = 0;
G__52787.cljs$lang$applyTo = (function (arglist__52790){
var children = cljs.core.seq(arglist__52790);
return G__52787__delegate(children);
});
G__52787.cljs$core$IFn$_invoke$arity$variadic = G__52787__delegate;
return G__52787;
})()
], null));
}));

(brundij.shared.components.error_boundary.err_boundary.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(brundij.shared.components.error_boundary.err_boundary.cljs$lang$applyTo = (function (seq52778){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq52778));
}));


//# sourceMappingURL=brundij.shared.components.error_boundary.js.map
