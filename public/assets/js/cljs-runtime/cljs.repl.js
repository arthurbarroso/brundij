goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__51306){
var map__51307 = p__51306;
var map__51307__$1 = cljs.core.__destructure_map(map__51307);
var m = map__51307__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51307__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51307__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51310_51530 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51311_51531 = null;
var count__51312_51532 = (0);
var i__51313_51533 = (0);
while(true){
if((i__51313_51533 < count__51312_51532)){
var f_51534 = chunk__51311_51531.cljs$core$IIndexed$_nth$arity$2(null,i__51313_51533);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51534], 0));


var G__51535 = seq__51310_51530;
var G__51536 = chunk__51311_51531;
var G__51537 = count__51312_51532;
var G__51538 = (i__51313_51533 + (1));
seq__51310_51530 = G__51535;
chunk__51311_51531 = G__51536;
count__51312_51532 = G__51537;
i__51313_51533 = G__51538;
continue;
} else {
var temp__5735__auto___51539 = cljs.core.seq(seq__51310_51530);
if(temp__5735__auto___51539){
var seq__51310_51540__$1 = temp__5735__auto___51539;
if(cljs.core.chunked_seq_QMARK_(seq__51310_51540__$1)){
var c__4638__auto___51541 = cljs.core.chunk_first(seq__51310_51540__$1);
var G__51542 = cljs.core.chunk_rest(seq__51310_51540__$1);
var G__51543 = c__4638__auto___51541;
var G__51544 = cljs.core.count(c__4638__auto___51541);
var G__51545 = (0);
seq__51310_51530 = G__51542;
chunk__51311_51531 = G__51543;
count__51312_51532 = G__51544;
i__51313_51533 = G__51545;
continue;
} else {
var f_51546 = cljs.core.first(seq__51310_51540__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51546], 0));


var G__51547 = cljs.core.next(seq__51310_51540__$1);
var G__51548 = null;
var G__51549 = (0);
var G__51550 = (0);
seq__51310_51530 = G__51547;
chunk__51311_51531 = G__51548;
count__51312_51532 = G__51549;
i__51313_51533 = G__51550;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51551 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_51551], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_51551)))?cljs.core.second(arglists_51551):arglists_51551)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51317_51552 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51318_51553 = null;
var count__51319_51554 = (0);
var i__51320_51555 = (0);
while(true){
if((i__51320_51555 < count__51319_51554)){
var vec__51367_51556 = chunk__51318_51553.cljs$core$IIndexed$_nth$arity$2(null,i__51320_51555);
var name_51557 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51367_51556,(0),null);
var map__51370_51558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51367_51556,(1),null);
var map__51370_51559__$1 = cljs.core.__destructure_map(map__51370_51558);
var doc_51560 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51370_51559__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51561 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51370_51559__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51557], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51561], 0));

if(cljs.core.truth_(doc_51560)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51560], 0));
} else {
}


var G__51566 = seq__51317_51552;
var G__51567 = chunk__51318_51553;
var G__51568 = count__51319_51554;
var G__51569 = (i__51320_51555 + (1));
seq__51317_51552 = G__51566;
chunk__51318_51553 = G__51567;
count__51319_51554 = G__51568;
i__51320_51555 = G__51569;
continue;
} else {
var temp__5735__auto___51570 = cljs.core.seq(seq__51317_51552);
if(temp__5735__auto___51570){
var seq__51317_51572__$1 = temp__5735__auto___51570;
if(cljs.core.chunked_seq_QMARK_(seq__51317_51572__$1)){
var c__4638__auto___51573 = cljs.core.chunk_first(seq__51317_51572__$1);
var G__51574 = cljs.core.chunk_rest(seq__51317_51572__$1);
var G__51575 = c__4638__auto___51573;
var G__51576 = cljs.core.count(c__4638__auto___51573);
var G__51577 = (0);
seq__51317_51552 = G__51574;
chunk__51318_51553 = G__51575;
count__51319_51554 = G__51576;
i__51320_51555 = G__51577;
continue;
} else {
var vec__51428_51578 = cljs.core.first(seq__51317_51572__$1);
var name_51579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51428_51578,(0),null);
var map__51431_51580 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51428_51578,(1),null);
var map__51431_51581__$1 = cljs.core.__destructure_map(map__51431_51580);
var doc_51582 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51431_51581__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51583 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51431_51581__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51579], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51583], 0));

if(cljs.core.truth_(doc_51582)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51582], 0));
} else {
}


var G__51584 = cljs.core.next(seq__51317_51572__$1);
var G__51585 = null;
var G__51586 = (0);
var G__51587 = (0);
seq__51317_51552 = G__51584;
chunk__51318_51553 = G__51585;
count__51319_51554 = G__51586;
i__51320_51555 = G__51587;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__51433 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__51434 = null;
var count__51435 = (0);
var i__51436 = (0);
while(true){
if((i__51436 < count__51435)){
var role = chunk__51434.cljs$core$IIndexed$_nth$arity$2(null,i__51436);
var temp__5735__auto___51588__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___51588__$1)){
var spec_51589 = temp__5735__auto___51588__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51589)], 0));
} else {
}


var G__51590 = seq__51433;
var G__51591 = chunk__51434;
var G__51592 = count__51435;
var G__51593 = (i__51436 + (1));
seq__51433 = G__51590;
chunk__51434 = G__51591;
count__51435 = G__51592;
i__51436 = G__51593;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__51433);
if(temp__5735__auto____$1){
var seq__51433__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__51433__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__51433__$1);
var G__51594 = cljs.core.chunk_rest(seq__51433__$1);
var G__51595 = c__4638__auto__;
var G__51596 = cljs.core.count(c__4638__auto__);
var G__51597 = (0);
seq__51433 = G__51594;
chunk__51434 = G__51595;
count__51435 = G__51596;
i__51436 = G__51597;
continue;
} else {
var role = cljs.core.first(seq__51433__$1);
var temp__5735__auto___51598__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___51598__$2)){
var spec_51599 = temp__5735__auto___51598__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51599)], 0));
} else {
}


var G__51600 = cljs.core.next(seq__51433__$1);
var G__51601 = null;
var G__51602 = (0);
var G__51603 = (0);
seq__51433 = G__51600;
chunk__51434 = G__51601;
count__51435 = G__51602;
i__51436 = G__51603;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__51605 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__51606 = cljs.core.ex_cause(t);
via = G__51605;
t = G__51606;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__51454 = datafied_throwable;
var map__51454__$1 = cljs.core.__destructure_map(map__51454);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51454__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51454__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51454__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__51455 = cljs.core.last(via);
var map__51455__$1 = cljs.core.__destructure_map(map__51455);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51455__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51455__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51455__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__51456 = data;
var map__51456__$1 = cljs.core.__destructure_map(map__51456);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51456__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51456__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51456__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__51457 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__51457__$1 = cljs.core.__destructure_map(map__51457);
var top_data = map__51457__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51457__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__51458 = phase;
var G__51458__$1 = (((G__51458 instanceof cljs.core.Keyword))?G__51458.fqn:null);
switch (G__51458__$1) {
case "read-source":
var map__51459 = data;
var map__51459__$1 = cljs.core.__destructure_map(map__51459);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51459__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51459__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__51460 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__51460__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51460,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51460);
var G__51460__$2 = (cljs.core.truth_((function (){var fexpr__51461 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51461.cljs$core$IFn$_invoke$arity$1 ? fexpr__51461.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51461.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51460__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51460__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51460__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51460__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__51462 = top_data;
var G__51462__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51462,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51462);
var G__51462__$2 = (cljs.core.truth_((function (){var fexpr__51463 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51463.cljs$core$IFn$_invoke$arity$1 ? fexpr__51463.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51463.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51462__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51462__$1);
var G__51462__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51462__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51462__$2);
var G__51462__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51462__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51462__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51462__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51462__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__51464 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51464,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51464,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51464,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51464,(3),null);
var G__51467 = top_data;
var G__51467__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51467,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__51467);
var G__51467__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51467__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__51467__$1);
var G__51467__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51467__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__51467__$2);
var G__51467__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51467__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51467__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51467__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51467__$4;
}

break;
case "execution":
var vec__51469 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51469,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51469,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51469,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51469,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__51451_SHARP_){
var or__4212__auto__ = (p1__51451_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__51474 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51474.cljs$core$IFn$_invoke$arity$1 ? fexpr__51474.cljs$core$IFn$_invoke$arity$1(p1__51451_SHARP_) : fexpr__51474.call(null,p1__51451_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__51477 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__51477__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51477,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__51477);
var G__51477__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51477__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51477__$1);
var G__51477__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51477__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__51477__$2);
var G__51477__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51477__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__51477__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51477__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51477__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51458__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__51480){
var map__51481 = p__51480;
var map__51481__$1 = cljs.core.__destructure_map(map__51481);
var triage_data = map__51481__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51481__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51481__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51481__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51481__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51481__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51481__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51481__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51481__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = source;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4212__auto__ = line;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4212__auto__ = class$;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__51484 = phase;
var G__51484__$1 = (((G__51484 instanceof cljs.core.Keyword))?G__51484.fqn:null);
switch (G__51484__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__51485 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__51486 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51487 = loc;
var G__51488 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51489_51624 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51490_51625 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51491_51626 = true;
var _STAR_print_fn_STAR__temp_val__51492_51627 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51491_51626);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51492_51627);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51478_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51478_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51490_51625);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51489_51624);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51485,G__51486,G__51487,G__51488) : format.call(null,G__51485,G__51486,G__51487,G__51488));

break;
case "macroexpansion":
var G__51493 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__51494 = cause_type;
var G__51495 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51496 = loc;
var G__51497 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51493,G__51494,G__51495,G__51496,G__51497) : format.call(null,G__51493,G__51494,G__51495,G__51496,G__51497));

break;
case "compile-syntax-check":
var G__51498 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__51499 = cause_type;
var G__51500 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51501 = loc;
var G__51502 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51498,G__51499,G__51500,G__51501,G__51502) : format.call(null,G__51498,G__51499,G__51500,G__51501,G__51502));

break;
case "compilation":
var G__51503 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__51504 = cause_type;
var G__51505 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51506 = loc;
var G__51507 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51503,G__51504,G__51505,G__51506,G__51507) : format.call(null,G__51503,G__51504,G__51505,G__51506,G__51507));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__51508 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__51509 = symbol;
var G__51510 = loc;
var G__51511 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51512_51632 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51513_51633 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51514_51634 = true;
var _STAR_print_fn_STAR__temp_val__51515_51635 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51514_51634);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51515_51635);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51479_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51479_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51513_51633);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51512_51632);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51508,G__51509,G__51510,G__51511) : format.call(null,G__51508,G__51509,G__51510,G__51511));
} else {
var G__51523 = "Execution error%s at %s(%s).\n%s\n";
var G__51524 = cause_type;
var G__51525 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51526 = loc;
var G__51527 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51523,G__51524,G__51525,G__51526,G__51527) : format.call(null,G__51523,G__51524,G__51525,G__51526,G__51527));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51484__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
