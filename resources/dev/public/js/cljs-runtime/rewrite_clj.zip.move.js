goog.provide('rewrite_clj.zip.move');
/**
 * Move right to next non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.right = (function rewrite_clj$zip$move$right(zloc){
var G__52473 = zloc;
var G__52473__$1 = (((G__52473 == null))?null:clojure.zip.right(G__52473));
if((G__52473__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(G__52473__$1);
}
});
/**
 * Move left to next non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.left = (function rewrite_clj$zip$move$left(zloc){
var G__52474 = zloc;
var G__52474__$1 = (((G__52474 == null))?null:clojure.zip.left(G__52474));
if((G__52474__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace_left(G__52474__$1);
}
});
/**
 * Move down to next non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.down = (function rewrite_clj$zip$move$down(zloc){
var G__52475 = zloc;
var G__52475__$1 = (((G__52475 == null))?null:clojure.zip.down(G__52475));
if((G__52475__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(G__52475__$1);
}
});
/**
 * Move up to next non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.up = (function rewrite_clj$zip$move$up(zloc){
var G__52477 = zloc;
var G__52477__$1 = (((G__52477 == null))?null:clojure.zip.up(G__52477));
if((G__52477__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace_left(G__52477__$1);
}
});
/**
 * Move to the next non-whitespace/non-comment location in a depth-first manner.
 */
rewrite_clj.zip.move.next = (function rewrite_clj$zip$move$next(zloc){
if(cljs.core.truth_(zloc)){
var or__4212__auto__ = (function (){var G__52479 = zloc;
var G__52479__$1 = (((G__52479 == null))?null:clojure.zip.next(G__52479));
if((G__52479__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2(clojure.zip.next,G__52479__$1);
}
})();
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(zloc,cljs.core.assoc,new cljs.core.Keyword("rewrite-clj.zip.move","end?","rewrite-clj.zip.move/end?",891526475),true);
}
} else {
return null;
}
});
/**
 * Check whether the given node is at the end of the depth-first traversal.
 */
rewrite_clj.zip.move.end_QMARK_ = (function rewrite_clj$zip$move$end_QMARK_(zloc){
var or__4212__auto__ = cljs.core.not(zloc);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var or__4212__auto____$1 = clojure.zip.end_QMARK_(zloc);
if(or__4212__auto____$1){
return or__4212__auto____$1;
} else {
return new cljs.core.Keyword("rewrite-clj.zip.move","end?","rewrite-clj.zip.move/end?",891526475).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(zloc));
}
}
});
/**
 * Check if the given location represents the leftmost non-whitespace/
 * non-comment one.
 */
rewrite_clj.zip.move.rightmost_QMARK_ = (function rewrite_clj$zip$move$rightmost_QMARK_(zloc){
return (rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(clojure.zip.right(zloc)) == null);
});
/**
 * Check if the given location represents the leftmost non-whitespace/
 * non-comment one.
 */
rewrite_clj.zip.move.leftmost_QMARK_ = (function rewrite_clj$zip$move$leftmost_QMARK_(zloc){
return (rewrite_clj.zip.whitespace.skip_whitespace_left(clojure.zip.left(zloc)) == null);
});
/**
 * Move to the next non-whitespace/non-comment location in a depth-first manner.
 */
rewrite_clj.zip.move.prev = (function rewrite_clj$zip$move$prev(zloc){
var G__52480 = zloc;
var G__52480__$1 = (((G__52480 == null))?null:clojure.zip.prev(G__52480));
if((G__52480__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2(clojure.zip.prev,G__52480__$1);
}
});
/**
 * Move to the leftmost non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.leftmost = (function rewrite_clj$zip$move$leftmost(zloc){
var G__52486 = zloc;
var G__52486__$1 = (((G__52486 == null))?null:clojure.zip.leftmost(G__52486));
if((G__52486__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1(G__52486__$1);
}
});
/**
 * Move to the rightmost non-whitespace/non-comment location.
 */
rewrite_clj.zip.move.rightmost = (function rewrite_clj$zip$move$rightmost(zloc){
var G__52487 = zloc;
var G__52487__$1 = (((G__52487 == null))?null:clojure.zip.rightmost(G__52487));
if((G__52487__$1 == null)){
return null;
} else {
return rewrite_clj.zip.whitespace.skip_whitespace_left(G__52487__$1);
}
});

//# sourceMappingURL=rewrite_clj.zip.move.js.map
