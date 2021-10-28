goog.provide('brundij.shared.layout');
brundij.shared.layout.layout = (function brundij$shared$layout$layout(var_args){
var args__4824__auto__ = [];
var len__4818__auto___53960 = arguments.length;
var i__4819__auto___53961 = (0);
while(true){
if((i__4819__auto___53961 < len__4818__auto___53960)){
args__4824__auto__.push((arguments[i__4819__auto___53961]));

var G__53962 = (i__4819__auto___53961 + (1));
i__4819__auto___53961 = G__53962;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return brundij.shared.layout.layout.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(brundij.shared.layout.layout.cljs$core$IFn$_invoke$arity$variadic = (function (_props,_children){
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function() { 
var G__53963__delegate = function (_props__$1,children){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"app-base-style"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"content-style"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [brundij.shared.components.header.header], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"container-style"], null),cljs.core.into.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [brundij.shared.components.error_boundary.err_boundary,children], null))], null)], null)], null);
};
var G__53963 = function (_props__$1,var_args){
var children = null;
if (arguments.length > 1) {
var G__53964__i = 0, G__53964__a = new Array(arguments.length -  1);
while (G__53964__i < G__53964__a.length) {G__53964__a[G__53964__i] = arguments[G__53964__i + 1]; ++G__53964__i;}
  children = new cljs.core.IndexedSeq(G__53964__a,0,null);
} 
return G__53963__delegate.call(this,_props__$1,children);};
G__53963.cljs$lang$maxFixedArity = 1;
G__53963.cljs$lang$applyTo = (function (arglist__53965){
var _props__$1 = cljs.core.first(arglist__53965);
var children = cljs.core.rest(arglist__53965);
return G__53963__delegate(_props__$1,children);
});
G__53963.cljs$core$IFn$_invoke$arity$variadic = G__53963__delegate;
return G__53963;
})()
], null));
}));

(brundij.shared.layout.layout.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(brundij.shared.layout.layout.cljs$lang$applyTo = (function (seq53958){
var G__53959 = cljs.core.first(seq53958);
var seq53958__$1 = cljs.core.next(seq53958);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53959,seq53958__$1);
}));


//# sourceMappingURL=brundij.shared.layout.js.map
