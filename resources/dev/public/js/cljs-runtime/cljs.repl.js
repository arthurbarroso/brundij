goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__59853){
var map__59857 = p__59853;
var map__59857__$1 = cljs.core.__destructure_map(map__59857);
var m = map__59857__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59857__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59857__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__59883_60195 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59884_60196 = null;
var count__59885_60197 = (0);
var i__59886_60198 = (0);
while(true){
if((i__59886_60198 < count__59885_60197)){
var f_60199 = chunk__59884_60196.cljs$core$IIndexed$_nth$arity$2(null,i__59886_60198);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_60199], 0));


var G__60200 = seq__59883_60195;
var G__60201 = chunk__59884_60196;
var G__60202 = count__59885_60197;
var G__60203 = (i__59886_60198 + (1));
seq__59883_60195 = G__60200;
chunk__59884_60196 = G__60201;
count__59885_60197 = G__60202;
i__59886_60198 = G__60203;
continue;
} else {
var temp__5735__auto___60204 = cljs.core.seq(seq__59883_60195);
if(temp__5735__auto___60204){
var seq__59883_60205__$1 = temp__5735__auto___60204;
if(cljs.core.chunked_seq_QMARK_(seq__59883_60205__$1)){
var c__4638__auto___60206 = cljs.core.chunk_first(seq__59883_60205__$1);
var G__60207 = cljs.core.chunk_rest(seq__59883_60205__$1);
var G__60208 = c__4638__auto___60206;
var G__60209 = cljs.core.count(c__4638__auto___60206);
var G__60210 = (0);
seq__59883_60195 = G__60207;
chunk__59884_60196 = G__60208;
count__59885_60197 = G__60209;
i__59886_60198 = G__60210;
continue;
} else {
var f_60211 = cljs.core.first(seq__59883_60205__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_60211], 0));


var G__60212 = cljs.core.next(seq__59883_60205__$1);
var G__60213 = null;
var G__60214 = (0);
var G__60215 = (0);
seq__59883_60195 = G__60212;
chunk__59884_60196 = G__60213;
count__59885_60197 = G__60214;
i__59886_60198 = G__60215;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_60216 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4212__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_60216], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_60216)))?cljs.core.second(arglists_60216):arglists_60216)], 0));
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
var seq__59920_60239 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__59921_60240 = null;
var count__59922_60241 = (0);
var i__59923_60242 = (0);
while(true){
if((i__59923_60242 < count__59922_60241)){
var vec__59987_60243 = chunk__59921_60240.cljs$core$IIndexed$_nth$arity$2(null,i__59923_60242);
var name_60244 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59987_60243,(0),null);
var map__59990_60245 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__59987_60243,(1),null);
var map__59990_60246__$1 = cljs.core.__destructure_map(map__59990_60245);
var doc_60247 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59990_60246__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_60248 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59990_60246__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_60244], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_60248], 0));

if(cljs.core.truth_(doc_60247)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_60247], 0));
} else {
}


var G__60252 = seq__59920_60239;
var G__60253 = chunk__59921_60240;
var G__60254 = count__59922_60241;
var G__60255 = (i__59923_60242 + (1));
seq__59920_60239 = G__60252;
chunk__59921_60240 = G__60253;
count__59922_60241 = G__60254;
i__59923_60242 = G__60255;
continue;
} else {
var temp__5735__auto___60256 = cljs.core.seq(seq__59920_60239);
if(temp__5735__auto___60256){
var seq__59920_60257__$1 = temp__5735__auto___60256;
if(cljs.core.chunked_seq_QMARK_(seq__59920_60257__$1)){
var c__4638__auto___60258 = cljs.core.chunk_first(seq__59920_60257__$1);
var G__60259 = cljs.core.chunk_rest(seq__59920_60257__$1);
var G__60260 = c__4638__auto___60258;
var G__60261 = cljs.core.count(c__4638__auto___60258);
var G__60262 = (0);
seq__59920_60239 = G__60259;
chunk__59921_60240 = G__60260;
count__59922_60241 = G__60261;
i__59923_60242 = G__60262;
continue;
} else {
var vec__60003_60263 = cljs.core.first(seq__59920_60257__$1);
var name_60264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60003_60263,(0),null);
var map__60006_60265 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60003_60263,(1),null);
var map__60006_60266__$1 = cljs.core.__destructure_map(map__60006_60265);
var doc_60267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60006_60266__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_60268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60006_60266__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_60264], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_60268], 0));

if(cljs.core.truth_(doc_60267)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_60267], 0));
} else {
}


var G__60269 = cljs.core.next(seq__59920_60257__$1);
var G__60270 = null;
var G__60271 = (0);
var G__60272 = (0);
seq__59920_60239 = G__60269;
chunk__59921_60240 = G__60270;
count__59922_60241 = G__60271;
i__59923_60242 = G__60272;
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

var seq__60042 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__60043 = null;
var count__60044 = (0);
var i__60045 = (0);
while(true){
if((i__60045 < count__60044)){
var role = chunk__60043.cljs$core$IIndexed$_nth$arity$2(null,i__60045);
var temp__5735__auto___60274__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___60274__$1)){
var spec_60275 = temp__5735__auto___60274__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_60275)], 0));
} else {
}


var G__60276 = seq__60042;
var G__60277 = chunk__60043;
var G__60278 = count__60044;
var G__60279 = (i__60045 + (1));
seq__60042 = G__60276;
chunk__60043 = G__60277;
count__60044 = G__60278;
i__60045 = G__60279;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__60042);
if(temp__5735__auto____$1){
var seq__60042__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__60042__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__60042__$1);
var G__60280 = cljs.core.chunk_rest(seq__60042__$1);
var G__60281 = c__4638__auto__;
var G__60282 = cljs.core.count(c__4638__auto__);
var G__60283 = (0);
seq__60042 = G__60280;
chunk__60043 = G__60281;
count__60044 = G__60282;
i__60045 = G__60283;
continue;
} else {
var role = cljs.core.first(seq__60042__$1);
var temp__5735__auto___60284__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___60284__$2)){
var spec_60285 = temp__5735__auto___60284__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_60285)], 0));
} else {
}


var G__60286 = cljs.core.next(seq__60042__$1);
var G__60287 = null;
var G__60288 = (0);
var G__60289 = (0);
seq__60042 = G__60286;
chunk__60043 = G__60287;
count__60044 = G__60288;
i__60045 = G__60289;
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
var G__60290 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__60291 = cljs.core.ex_cause(t);
via = G__60290;
t = G__60291;
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
var map__60091 = datafied_throwable;
var map__60091__$1 = cljs.core.__destructure_map(map__60091);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60091__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60091__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60091__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__60092 = cljs.core.last(via);
var map__60092__$1 = cljs.core.__destructure_map(map__60092);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60092__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60092__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60092__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__60097 = data;
var map__60097__$1 = cljs.core.__destructure_map(map__60097);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60097__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60097__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60097__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__60098 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__60098__$1 = cljs.core.__destructure_map(map__60098);
var top_data = map__60098__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60098__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__60103 = phase;
var G__60103__$1 = (((G__60103 instanceof cljs.core.Keyword))?G__60103.fqn:null);
switch (G__60103__$1) {
case "read-source":
var map__60104 = data;
var map__60104__$1 = cljs.core.__destructure_map(map__60104);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60104__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60104__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__60105 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__60105__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60105,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__60105);
var G__60105__$2 = (cljs.core.truth_((function (){var fexpr__60106 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__60106.cljs$core$IFn$_invoke$arity$1 ? fexpr__60106.cljs$core$IFn$_invoke$arity$1(source) : fexpr__60106.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60105__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__60105__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60105__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__60105__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__60107 = top_data;
var G__60107__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60107,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__60107);
var G__60107__$2 = (cljs.core.truth_((function (){var fexpr__60112 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__60112.cljs$core$IFn$_invoke$arity$1 ? fexpr__60112.cljs$core$IFn$_invoke$arity$1(source) : fexpr__60112.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__60107__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__60107__$1);
var G__60107__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60107__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__60107__$2);
var G__60107__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60107__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__60107__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60107__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__60107__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__60113 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60113,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60113,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60113,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60113,(3),null);
var G__60116 = top_data;
var G__60116__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60116,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__60116);
var G__60116__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60116__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__60116__$1);
var G__60116__$3 = (cljs.core.truth_((function (){var and__4210__auto__ = source__$1;
if(cljs.core.truth_(and__4210__auto__)){
return method;
} else {
return and__4210__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60116__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__60116__$2);
var G__60116__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60116__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__60116__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60116__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__60116__$4;
}

break;
case "execution":
var vec__60117 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60117,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60117,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60117,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60117,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__60078_SHARP_){
var or__4212__auto__ = (p1__60078_SHARP_ == null);
if(or__4212__auto__){
return or__4212__auto__;
} else {
var fexpr__60121 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__60121.cljs$core$IFn$_invoke$arity$1 ? fexpr__60121.cljs$core$IFn$_invoke$arity$1(p1__60078_SHARP_) : fexpr__60121.call(null,p1__60078_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4212__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return line;
}
})();
var G__60133 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__60133__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60133,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__60133);
var G__60133__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60133__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__60133__$1);
var G__60133__$3 = (cljs.core.truth_((function (){var or__4212__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60133__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4212__auto__ = fn;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__60133__$2);
var G__60133__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60133__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__60133__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__60133__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__60133__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60103__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__60145){
var map__60146 = p__60145;
var map__60146__$1 = cljs.core.__destructure_map(map__60146);
var triage_data = map__60146__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60146__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60146__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60146__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60146__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60146__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60146__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60146__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60146__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__60149 = phase;
var G__60149__$1 = (((G__60149 instanceof cljs.core.Keyword))?G__60149.fqn:null);
switch (G__60149__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__60152 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__60153 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60154 = loc;
var G__60155 = (cljs.core.truth_(spec)?(function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60157_60305 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60158_60306 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60159_60307 = true;
var _STAR_print_fn_STAR__temp_val__60160_60308 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60159_60307);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60160_60308);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60135_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__60135_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60158_60306);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60157_60305);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__60152,G__60153,G__60154,G__60155) : format.call(null,G__60152,G__60153,G__60154,G__60155));

break;
case "macroexpansion":
var G__60162 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__60163 = cause_type;
var G__60164 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60165 = loc;
var G__60166 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60162,G__60163,G__60164,G__60165,G__60166) : format.call(null,G__60162,G__60163,G__60164,G__60165,G__60166));

break;
case "compile-syntax-check":
var G__60167 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__60168 = cause_type;
var G__60169 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60170 = loc;
var G__60171 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60167,G__60168,G__60169,G__60170,G__60171) : format.call(null,G__60167,G__60168,G__60169,G__60170,G__60171));

break;
case "compilation":
var G__60172 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__60173 = cause_type;
var G__60174 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60175 = loc;
var G__60176 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60172,G__60173,G__60174,G__60175,G__60176) : format.call(null,G__60172,G__60173,G__60174,G__60175,G__60176));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__60178 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__60179 = symbol;
var G__60180 = loc;
var G__60181 = (function (){var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__60183_60314 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__60184_60315 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__60185_60316 = true;
var _STAR_print_fn_STAR__temp_val__60186_60317 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__60185_60316);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__60186_60317);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60136_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__60136_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__60184_60315);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__60183_60314);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__60178,G__60179,G__60180,G__60181) : format.call(null,G__60178,G__60179,G__60180,G__60181));
} else {
var G__60187 = "Execution error%s at %s(%s).\n%s\n";
var G__60188 = cause_type;
var G__60189 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__60190 = loc;
var G__60191 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__60187,G__60188,G__60189,G__60190,G__60191) : format.call(null,G__60187,G__60188,G__60189,G__60190,G__60191));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__60149__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
