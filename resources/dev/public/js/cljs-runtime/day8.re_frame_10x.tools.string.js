goog.provide('day8.re_frame_10x.tools.string');
/**
 * Return a pluralized phrase, appending an s to the singular form if no plural is provided.
 *   For example:
 *   (pluralize 5 "month") => "5 months"
 *   (pluralize 1 "month") => "1 month"
 *   (pluralize 1 "radius" "radii") => "1 radius"
 *   (pluralize 9 "radius" "radii") => "9 radii"
 *   From https://github.com/flatland/useful/blob/194950/src/flatland/useful/string.clj#L25-L33
 */
day8.re_frame_10x.tools.string.pluralize = (function day8$re_frame_10x$tools$string$pluralize(var_args){
var args__4824__auto__ = [];
var len__4818__auto___54611 = arguments.length;
var i__4819__auto___54612 = (0);
while(true){
if((i__4819__auto___54612 < len__4818__auto___54611)){
args__4824__auto__.push((arguments[i__4819__auto___54612]));

var G__54613 = (i__4819__auto___54612 + (1));
i__4819__auto___54612 = G__54613;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(day8.re_frame_10x.tools.string.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__54600){
var vec__54601 = p__54600;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54601,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num))?singular:(function (){var or__4212__auto__ = plural;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
})()))].join('');
}));

(day8.re_frame_10x.tools.string.pluralize.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize.cljs$lang$applyTo = (function (seq54597){
var G__54598 = cljs.core.first(seq54597);
var seq54597__$1 = cljs.core.next(seq54597);
var G__54599 = cljs.core.first(seq54597__$1);
var seq54597__$2 = cljs.core.next(seq54597__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54598,G__54599,seq54597__$2);
}));

/**
 * Same as pluralize, but doesn't prepend the number to the pluralized string.
 */
day8.re_frame_10x.tools.string.pluralize_ = (function day8$re_frame_10x$tools$string$pluralize_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___54614 = arguments.length;
var i__4819__auto___54615 = (0);
while(true){
if((i__4819__auto___54615 < len__4818__auto___54614)){
args__4824__auto__.push((arguments[i__4819__auto___54615]));

var G__54616 = (i__4819__auto___54615 + (1));
i__4819__auto___54615 = G__54616;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(day8.re_frame_10x.tools.string.pluralize_.cljs$core$IFn$_invoke$arity$variadic = (function (num,singular,p__54607){
var vec__54608 = p__54607;
var plural = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54608,(0),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),num)){
return singular;
} else {
var or__4212__auto__ = plural;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(singular),"s"].join('');
}
}
}));

(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(day8.re_frame_10x.tools.string.pluralize_.cljs$lang$applyTo = (function (seq54604){
var G__54605 = cljs.core.first(seq54604);
var seq54604__$1 = cljs.core.next(seq54604);
var G__54606 = cljs.core.first(seq54604__$1);
var seq54604__$2 = cljs.core.next(seq54604__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54605,G__54606,seq54604__$2);
}));


//# sourceMappingURL=day8.re_frame_10x.tools.string.js.map
