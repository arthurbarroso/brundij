goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_59004 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_59004(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_59005 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_59005(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__58307 = coll;
var G__58308 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__58307,G__58308) : shadow.dom.lazy_native_coll_seq.call(null,G__58307,G__58308));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4212__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__58335 = arguments.length;
switch (G__58335) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__58345 = arguments.length;
switch (G__58345) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__58355 = arguments.length;
switch (G__58355) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__58366 = arguments.length;
switch (G__58366) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__58379 = arguments.length;
switch (G__58379) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__58398 = arguments.length;
switch (G__58398) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e58409){if((e58409 instanceof Object)){
var e = e58409;
return console.log("didnt support attachEvent",el,e);
} else {
throw e58409;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4212__auto__ = (!((typeof document !== 'undefined')));
if(or__4212__auto__){
return or__4212__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__58420 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__58421 = null;
var count__58422 = (0);
var i__58423 = (0);
while(true){
if((i__58423 < count__58422)){
var el = chunk__58421.cljs$core$IIndexed$_nth$arity$2(null,i__58423);
var handler_59012__$1 = ((function (seq__58420,chunk__58421,count__58422,i__58423,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__58420,chunk__58421,count__58422,i__58423,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_59012__$1);


var G__59013 = seq__58420;
var G__59014 = chunk__58421;
var G__59015 = count__58422;
var G__59016 = (i__58423 + (1));
seq__58420 = G__59013;
chunk__58421 = G__59014;
count__58422 = G__59015;
i__58423 = G__59016;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58420);
if(temp__5735__auto__){
var seq__58420__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58420__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__58420__$1);
var G__59017 = cljs.core.chunk_rest(seq__58420__$1);
var G__59018 = c__4638__auto__;
var G__59019 = cljs.core.count(c__4638__auto__);
var G__59020 = (0);
seq__58420 = G__59017;
chunk__58421 = G__59018;
count__58422 = G__59019;
i__58423 = G__59020;
continue;
} else {
var el = cljs.core.first(seq__58420__$1);
var handler_59021__$1 = ((function (seq__58420,chunk__58421,count__58422,i__58423,el,seq__58420__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__58420,chunk__58421,count__58422,i__58423,el,seq__58420__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_59021__$1);


var G__59022 = cljs.core.next(seq__58420__$1);
var G__59023 = null;
var G__59024 = (0);
var G__59025 = (0);
seq__58420 = G__59022;
chunk__58421 = G__59023;
count__58422 = G__59024;
i__58423 = G__59025;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__58447 = arguments.length;
switch (G__58447) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__58458 = cljs.core.seq(events);
var chunk__58459 = null;
var count__58460 = (0);
var i__58461 = (0);
while(true){
if((i__58461 < count__58460)){
var vec__58479 = chunk__58459.cljs$core$IIndexed$_nth$arity$2(null,i__58461);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58479,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58479,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__59027 = seq__58458;
var G__59028 = chunk__58459;
var G__59029 = count__58460;
var G__59030 = (i__58461 + (1));
seq__58458 = G__59027;
chunk__58459 = G__59028;
count__58460 = G__59029;
i__58461 = G__59030;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58458);
if(temp__5735__auto__){
var seq__58458__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58458__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__58458__$1);
var G__59031 = cljs.core.chunk_rest(seq__58458__$1);
var G__59032 = c__4638__auto__;
var G__59033 = cljs.core.count(c__4638__auto__);
var G__59034 = (0);
seq__58458 = G__59031;
chunk__58459 = G__59032;
count__58460 = G__59033;
i__58461 = G__59034;
continue;
} else {
var vec__58484 = cljs.core.first(seq__58458__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58484,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58484,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__59035 = cljs.core.next(seq__58458__$1);
var G__59036 = null;
var G__59037 = (0);
var G__59038 = (0);
seq__58458 = G__59035;
chunk__58459 = G__59036;
count__58460 = G__59037;
i__58461 = G__59038;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__58489 = cljs.core.seq(styles);
var chunk__58490 = null;
var count__58491 = (0);
var i__58492 = (0);
while(true){
if((i__58492 < count__58491)){
var vec__58501 = chunk__58490.cljs$core$IIndexed$_nth$arity$2(null,i__58492);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58501,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58501,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__59039 = seq__58489;
var G__59040 = chunk__58490;
var G__59041 = count__58491;
var G__59042 = (i__58492 + (1));
seq__58489 = G__59039;
chunk__58490 = G__59040;
count__58491 = G__59041;
i__58492 = G__59042;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58489);
if(temp__5735__auto__){
var seq__58489__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58489__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__58489__$1);
var G__59043 = cljs.core.chunk_rest(seq__58489__$1);
var G__59044 = c__4638__auto__;
var G__59045 = cljs.core.count(c__4638__auto__);
var G__59046 = (0);
seq__58489 = G__59043;
chunk__58490 = G__59044;
count__58491 = G__59045;
i__58492 = G__59046;
continue;
} else {
var vec__58505 = cljs.core.first(seq__58489__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58505,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58505,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__59047 = cljs.core.next(seq__58489__$1);
var G__59048 = null;
var G__59049 = (0);
var G__59050 = (0);
seq__58489 = G__59047;
chunk__58490 = G__59048;
count__58491 = G__59049;
i__58492 = G__59050;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__58515_59051 = key;
var G__58515_59052__$1 = (((G__58515_59051 instanceof cljs.core.Keyword))?G__58515_59051.fqn:null);
switch (G__58515_59052__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_59054 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_59054,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_59054,"aria-");
}
})())){
el.setAttribute(ks_59054,value);
} else {
(el[ks_59054] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__58547){
var map__58549 = p__58547;
var map__58549__$1 = cljs.core.__destructure_map(map__58549);
var props = map__58549__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58549__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__58552 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58552,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58552,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58552,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__58559 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__58559,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__58559;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__58566 = arguments.length;
switch (G__58566) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__58576){
var vec__58577 = p__58576;
var seq__58578 = cljs.core.seq(vec__58577);
var first__58579 = cljs.core.first(seq__58578);
var seq__58578__$1 = cljs.core.next(seq__58578);
var nn = first__58579;
var first__58579__$1 = cljs.core.first(seq__58578__$1);
var seq__58578__$2 = cljs.core.next(seq__58578__$1);
var np = first__58579__$1;
var nc = seq__58578__$2;
var node = vec__58577;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58581 = nn;
var G__58582 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__58581,G__58582) : create_fn.call(null,G__58581,G__58582));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__58584 = nn;
var G__58585 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__58584,G__58585) : create_fn.call(null,G__58584,G__58585));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__58588 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58588,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58588,(1),null);
var seq__58591_59058 = cljs.core.seq(node_children);
var chunk__58592_59059 = null;
var count__58593_59060 = (0);
var i__58594_59061 = (0);
while(true){
if((i__58594_59061 < count__58593_59060)){
var child_struct_59062 = chunk__58592_59059.cljs$core$IIndexed$_nth$arity$2(null,i__58594_59061);
var children_59063 = shadow.dom.dom_node(child_struct_59062);
if(cljs.core.seq_QMARK_(children_59063)){
var seq__58623_59064 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_59063));
var chunk__58625_59065 = null;
var count__58626_59066 = (0);
var i__58627_59067 = (0);
while(true){
if((i__58627_59067 < count__58626_59066)){
var child_59068 = chunk__58625_59065.cljs$core$IIndexed$_nth$arity$2(null,i__58627_59067);
if(cljs.core.truth_(child_59068)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_59068);


var G__59069 = seq__58623_59064;
var G__59070 = chunk__58625_59065;
var G__59071 = count__58626_59066;
var G__59072 = (i__58627_59067 + (1));
seq__58623_59064 = G__59069;
chunk__58625_59065 = G__59070;
count__58626_59066 = G__59071;
i__58627_59067 = G__59072;
continue;
} else {
var G__59073 = seq__58623_59064;
var G__59074 = chunk__58625_59065;
var G__59075 = count__58626_59066;
var G__59076 = (i__58627_59067 + (1));
seq__58623_59064 = G__59073;
chunk__58625_59065 = G__59074;
count__58626_59066 = G__59075;
i__58627_59067 = G__59076;
continue;
}
} else {
var temp__5735__auto___59077 = cljs.core.seq(seq__58623_59064);
if(temp__5735__auto___59077){
var seq__58623_59078__$1 = temp__5735__auto___59077;
if(cljs.core.chunked_seq_QMARK_(seq__58623_59078__$1)){
var c__4638__auto___59079 = cljs.core.chunk_first(seq__58623_59078__$1);
var G__59080 = cljs.core.chunk_rest(seq__58623_59078__$1);
var G__59081 = c__4638__auto___59079;
var G__59082 = cljs.core.count(c__4638__auto___59079);
var G__59083 = (0);
seq__58623_59064 = G__59080;
chunk__58625_59065 = G__59081;
count__58626_59066 = G__59082;
i__58627_59067 = G__59083;
continue;
} else {
var child_59084 = cljs.core.first(seq__58623_59078__$1);
if(cljs.core.truth_(child_59084)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_59084);


var G__59085 = cljs.core.next(seq__58623_59078__$1);
var G__59086 = null;
var G__59087 = (0);
var G__59088 = (0);
seq__58623_59064 = G__59085;
chunk__58625_59065 = G__59086;
count__58626_59066 = G__59087;
i__58627_59067 = G__59088;
continue;
} else {
var G__59089 = cljs.core.next(seq__58623_59078__$1);
var G__59090 = null;
var G__59091 = (0);
var G__59092 = (0);
seq__58623_59064 = G__59089;
chunk__58625_59065 = G__59090;
count__58626_59066 = G__59091;
i__58627_59067 = G__59092;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_59063);
}


var G__59093 = seq__58591_59058;
var G__59094 = chunk__58592_59059;
var G__59095 = count__58593_59060;
var G__59096 = (i__58594_59061 + (1));
seq__58591_59058 = G__59093;
chunk__58592_59059 = G__59094;
count__58593_59060 = G__59095;
i__58594_59061 = G__59096;
continue;
} else {
var temp__5735__auto___59097 = cljs.core.seq(seq__58591_59058);
if(temp__5735__auto___59097){
var seq__58591_59098__$1 = temp__5735__auto___59097;
if(cljs.core.chunked_seq_QMARK_(seq__58591_59098__$1)){
var c__4638__auto___59099 = cljs.core.chunk_first(seq__58591_59098__$1);
var G__59100 = cljs.core.chunk_rest(seq__58591_59098__$1);
var G__59101 = c__4638__auto___59099;
var G__59102 = cljs.core.count(c__4638__auto___59099);
var G__59103 = (0);
seq__58591_59058 = G__59100;
chunk__58592_59059 = G__59101;
count__58593_59060 = G__59102;
i__58594_59061 = G__59103;
continue;
} else {
var child_struct_59104 = cljs.core.first(seq__58591_59098__$1);
var children_59105 = shadow.dom.dom_node(child_struct_59104);
if(cljs.core.seq_QMARK_(children_59105)){
var seq__58649_59106 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_59105));
var chunk__58652_59107 = null;
var count__58653_59108 = (0);
var i__58654_59109 = (0);
while(true){
if((i__58654_59109 < count__58653_59108)){
var child_59110 = chunk__58652_59107.cljs$core$IIndexed$_nth$arity$2(null,i__58654_59109);
if(cljs.core.truth_(child_59110)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_59110);


var G__59111 = seq__58649_59106;
var G__59112 = chunk__58652_59107;
var G__59113 = count__58653_59108;
var G__59114 = (i__58654_59109 + (1));
seq__58649_59106 = G__59111;
chunk__58652_59107 = G__59112;
count__58653_59108 = G__59113;
i__58654_59109 = G__59114;
continue;
} else {
var G__59115 = seq__58649_59106;
var G__59116 = chunk__58652_59107;
var G__59117 = count__58653_59108;
var G__59118 = (i__58654_59109 + (1));
seq__58649_59106 = G__59115;
chunk__58652_59107 = G__59116;
count__58653_59108 = G__59117;
i__58654_59109 = G__59118;
continue;
}
} else {
var temp__5735__auto___59119__$1 = cljs.core.seq(seq__58649_59106);
if(temp__5735__auto___59119__$1){
var seq__58649_59120__$1 = temp__5735__auto___59119__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58649_59120__$1)){
var c__4638__auto___59121 = cljs.core.chunk_first(seq__58649_59120__$1);
var G__59122 = cljs.core.chunk_rest(seq__58649_59120__$1);
var G__59123 = c__4638__auto___59121;
var G__59124 = cljs.core.count(c__4638__auto___59121);
var G__59125 = (0);
seq__58649_59106 = G__59122;
chunk__58652_59107 = G__59123;
count__58653_59108 = G__59124;
i__58654_59109 = G__59125;
continue;
} else {
var child_59126 = cljs.core.first(seq__58649_59120__$1);
if(cljs.core.truth_(child_59126)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_59126);


var G__59127 = cljs.core.next(seq__58649_59120__$1);
var G__59128 = null;
var G__59129 = (0);
var G__59130 = (0);
seq__58649_59106 = G__59127;
chunk__58652_59107 = G__59128;
count__58653_59108 = G__59129;
i__58654_59109 = G__59130;
continue;
} else {
var G__59131 = cljs.core.next(seq__58649_59120__$1);
var G__59132 = null;
var G__59133 = (0);
var G__59134 = (0);
seq__58649_59106 = G__59131;
chunk__58652_59107 = G__59132;
count__58653_59108 = G__59133;
i__58654_59109 = G__59134;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_59105);
}


var G__59135 = cljs.core.next(seq__58591_59098__$1);
var G__59136 = null;
var G__59137 = (0);
var G__59138 = (0);
seq__58591_59058 = G__59135;
chunk__58592_59059 = G__59136;
count__58593_59060 = G__59137;
i__58594_59061 = G__59138;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__58670 = cljs.core.seq(node);
var chunk__58672 = null;
var count__58673 = (0);
var i__58674 = (0);
while(true){
if((i__58674 < count__58673)){
var n = chunk__58672.cljs$core$IIndexed$_nth$arity$2(null,i__58674);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__59140 = seq__58670;
var G__59141 = chunk__58672;
var G__59142 = count__58673;
var G__59143 = (i__58674 + (1));
seq__58670 = G__59140;
chunk__58672 = G__59141;
count__58673 = G__59142;
i__58674 = G__59143;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58670);
if(temp__5735__auto__){
var seq__58670__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58670__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__58670__$1);
var G__59144 = cljs.core.chunk_rest(seq__58670__$1);
var G__59145 = c__4638__auto__;
var G__59146 = cljs.core.count(c__4638__auto__);
var G__59147 = (0);
seq__58670 = G__59144;
chunk__58672 = G__59145;
count__58673 = G__59146;
i__58674 = G__59147;
continue;
} else {
var n = cljs.core.first(seq__58670__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__59149 = cljs.core.next(seq__58670__$1);
var G__59150 = null;
var G__59151 = (0);
var G__59152 = (0);
seq__58670 = G__59149;
chunk__58672 = G__59150;
count__58673 = G__59151;
i__58674 = G__59152;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__58694 = arguments.length;
switch (G__58694) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__58702 = arguments.length;
switch (G__58702) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__58718 = arguments.length;
switch (G__58718) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4212__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4824__auto__ = [];
var len__4818__auto___59157 = arguments.length;
var i__4819__auto___59158 = (0);
while(true){
if((i__4819__auto___59158 < len__4818__auto___59157)){
args__4824__auto__.push((arguments[i__4819__auto___59158]));

var G__59159 = (i__4819__auto___59158 + (1));
i__4819__auto___59158 = G__59159;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__58744_59160 = cljs.core.seq(nodes);
var chunk__58745_59161 = null;
var count__58746_59162 = (0);
var i__58747_59163 = (0);
while(true){
if((i__58747_59163 < count__58746_59162)){
var node_59164 = chunk__58745_59161.cljs$core$IIndexed$_nth$arity$2(null,i__58747_59163);
fragment.appendChild(shadow.dom._to_dom(node_59164));


var G__59165 = seq__58744_59160;
var G__59166 = chunk__58745_59161;
var G__59167 = count__58746_59162;
var G__59168 = (i__58747_59163 + (1));
seq__58744_59160 = G__59165;
chunk__58745_59161 = G__59166;
count__58746_59162 = G__59167;
i__58747_59163 = G__59168;
continue;
} else {
var temp__5735__auto___59169 = cljs.core.seq(seq__58744_59160);
if(temp__5735__auto___59169){
var seq__58744_59170__$1 = temp__5735__auto___59169;
if(cljs.core.chunked_seq_QMARK_(seq__58744_59170__$1)){
var c__4638__auto___59171 = cljs.core.chunk_first(seq__58744_59170__$1);
var G__59172 = cljs.core.chunk_rest(seq__58744_59170__$1);
var G__59173 = c__4638__auto___59171;
var G__59174 = cljs.core.count(c__4638__auto___59171);
var G__59175 = (0);
seq__58744_59160 = G__59172;
chunk__58745_59161 = G__59173;
count__58746_59162 = G__59174;
i__58747_59163 = G__59175;
continue;
} else {
var node_59176 = cljs.core.first(seq__58744_59170__$1);
fragment.appendChild(shadow.dom._to_dom(node_59176));


var G__59177 = cljs.core.next(seq__58744_59170__$1);
var G__59178 = null;
var G__59179 = (0);
var G__59180 = (0);
seq__58744_59160 = G__59177;
chunk__58745_59161 = G__59178;
count__58746_59162 = G__59179;
i__58747_59163 = G__59180;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq58738){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq58738));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__58763_59182 = cljs.core.seq(scripts);
var chunk__58764_59183 = null;
var count__58765_59184 = (0);
var i__58766_59185 = (0);
while(true){
if((i__58766_59185 < count__58765_59184)){
var vec__58777_59186 = chunk__58764_59183.cljs$core$IIndexed$_nth$arity$2(null,i__58766_59185);
var script_tag_59187 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58777_59186,(0),null);
var script_body_59188 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58777_59186,(1),null);
eval(script_body_59188);


var G__59189 = seq__58763_59182;
var G__59190 = chunk__58764_59183;
var G__59191 = count__58765_59184;
var G__59192 = (i__58766_59185 + (1));
seq__58763_59182 = G__59189;
chunk__58764_59183 = G__59190;
count__58765_59184 = G__59191;
i__58766_59185 = G__59192;
continue;
} else {
var temp__5735__auto___59193 = cljs.core.seq(seq__58763_59182);
if(temp__5735__auto___59193){
var seq__58763_59194__$1 = temp__5735__auto___59193;
if(cljs.core.chunked_seq_QMARK_(seq__58763_59194__$1)){
var c__4638__auto___59195 = cljs.core.chunk_first(seq__58763_59194__$1);
var G__59196 = cljs.core.chunk_rest(seq__58763_59194__$1);
var G__59197 = c__4638__auto___59195;
var G__59198 = cljs.core.count(c__4638__auto___59195);
var G__59199 = (0);
seq__58763_59182 = G__59196;
chunk__58764_59183 = G__59197;
count__58765_59184 = G__59198;
i__58766_59185 = G__59199;
continue;
} else {
var vec__58780_59200 = cljs.core.first(seq__58763_59194__$1);
var script_tag_59201 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58780_59200,(0),null);
var script_body_59202 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58780_59200,(1),null);
eval(script_body_59202);


var G__59203 = cljs.core.next(seq__58763_59194__$1);
var G__59204 = null;
var G__59205 = (0);
var G__59206 = (0);
seq__58763_59182 = G__59203;
chunk__58764_59183 = G__59204;
count__58765_59184 = G__59205;
i__58766_59185 = G__59206;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__58783){
var vec__58784 = p__58783;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58784,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58784,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__58788 = arguments.length;
switch (G__58788) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__58806 = cljs.core.seq(style_keys);
var chunk__58807 = null;
var count__58808 = (0);
var i__58809 = (0);
while(true){
if((i__58809 < count__58808)){
var it = chunk__58807.cljs$core$IIndexed$_nth$arity$2(null,i__58809);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__59211 = seq__58806;
var G__59212 = chunk__58807;
var G__59213 = count__58808;
var G__59214 = (i__58809 + (1));
seq__58806 = G__59211;
chunk__58807 = G__59212;
count__58808 = G__59213;
i__58809 = G__59214;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__58806);
if(temp__5735__auto__){
var seq__58806__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58806__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__58806__$1);
var G__59215 = cljs.core.chunk_rest(seq__58806__$1);
var G__59216 = c__4638__auto__;
var G__59217 = cljs.core.count(c__4638__auto__);
var G__59218 = (0);
seq__58806 = G__59215;
chunk__58807 = G__59216;
count__58808 = G__59217;
i__58809 = G__59218;
continue;
} else {
var it = cljs.core.first(seq__58806__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__59219 = cljs.core.next(seq__58806__$1);
var G__59220 = null;
var G__59221 = (0);
var G__59222 = (0);
seq__58806 = G__59219;
chunk__58807 = G__59220;
count__58808 = G__59221;
i__58809 = G__59222;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k58821,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__58837 = k58821;
var G__58837__$1 = (((G__58837 instanceof cljs.core.Keyword))?G__58837.fqn:null);
switch (G__58837__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58821,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__58842){
var vec__58843 = p__58842;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58843,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58843,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58820){
var self__ = this;
var G__58820__$1 = this;
return (new cljs.core.RecordIter((0),G__58820__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58822,other58823){
var self__ = this;
var this58822__$1 = this;
return (((!((other58823 == null)))) && ((((this58822__$1.constructor === other58823.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58822__$1.x,other58823.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58822__$1.y,other58823.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58822__$1.__extmap,other58823.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k58821){
var self__ = this;
var this__4468__auto____$1 = this;
var G__58867 = k58821;
var G__58867__$1 = (((G__58867 instanceof cljs.core.Keyword))?G__58867.fqn:null);
switch (G__58867__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k58821);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__58820){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__58872 = cljs.core.keyword_identical_QMARK_;
var expr__58873 = k__4470__auto__;
if(cljs.core.truth_((pred__58872.cljs$core$IFn$_invoke$arity$2 ? pred__58872.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__58873) : pred__58872.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__58873)))){
return (new shadow.dom.Coordinate(G__58820,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__58872.cljs$core$IFn$_invoke$arity$2 ? pred__58872.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__58873) : pred__58872.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__58873)))){
return (new shadow.dom.Coordinate(self__.x,G__58820,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__58820),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__58820){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__58820,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__58827){
var extmap__4501__auto__ = (function (){var G__58888 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58827,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__58827)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58888);
} else {
return G__58888;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__58827),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__58827),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k58900,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__58915 = k58900;
var G__58915__$1 = (((G__58915 instanceof cljs.core.Keyword))?G__58915.fqn:null);
switch (G__58915__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k58900,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__58916){
var vec__58917 = p__58916;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58917,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58917,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#shadow.dom.Size{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__58899){
var self__ = this;
var G__58899__$1 = this;
return (new cljs.core.RecordIter((0),G__58899__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this58901,other58902){
var self__ = this;
var this58901__$1 = this;
return (((!((other58902 == null)))) && ((((this58901__$1.constructor === other58902.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58901__$1.w,other58902.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58901__$1.h,other58902.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this58901__$1.__extmap,other58902.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k58900){
var self__ = this;
var this__4468__auto____$1 = this;
var G__58920 = k58900;
var G__58920__$1 = (((G__58920 instanceof cljs.core.Keyword))?G__58920.fqn:null);
switch (G__58920__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k58900);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__58899){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__58921 = cljs.core.keyword_identical_QMARK_;
var expr__58922 = k__4470__auto__;
if(cljs.core.truth_((pred__58921.cljs$core$IFn$_invoke$arity$2 ? pred__58921.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__58922) : pred__58921.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__58922)))){
return (new shadow.dom.Size(G__58899,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__58921.cljs$core$IFn$_invoke$arity$2 ? pred__58921.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__58922) : pred__58921.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__58922)))){
return (new shadow.dom.Size(self__.w,G__58899,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__58899),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__58899){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__58899,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__58906){
var extmap__4501__auto__ = (function (){var G__58924 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__58906,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__58906)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__58924);
} else {
return G__58924;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__58906),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__58906),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4692__auto__ = opts;
var l__4693__auto__ = a__4692__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4693__auto__)){
var G__59239 = (i + (1));
var G__59240 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__59239;
ret = G__59240;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__58929){
var vec__58930 = p__58929;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58930,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58930,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__58934 = arguments.length;
switch (G__58934) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__59246 = ps;
var G__59247 = (i + (1));
el__$1 = G__59246;
i = G__59247;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__58935 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58935,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58935,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58935,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__58938_59248 = cljs.core.seq(props);
var chunk__58939_59249 = null;
var count__58940_59250 = (0);
var i__58941_59251 = (0);
while(true){
if((i__58941_59251 < count__58940_59250)){
var vec__58948_59252 = chunk__58939_59249.cljs$core$IIndexed$_nth$arity$2(null,i__58941_59251);
var k_59253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58948_59252,(0),null);
var v_59254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58948_59252,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_59253);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_59253),v_59254);


var G__59255 = seq__58938_59248;
var G__59256 = chunk__58939_59249;
var G__59257 = count__58940_59250;
var G__59258 = (i__58941_59251 + (1));
seq__58938_59248 = G__59255;
chunk__58939_59249 = G__59256;
count__58940_59250 = G__59257;
i__58941_59251 = G__59258;
continue;
} else {
var temp__5735__auto___59259 = cljs.core.seq(seq__58938_59248);
if(temp__5735__auto___59259){
var seq__58938_59260__$1 = temp__5735__auto___59259;
if(cljs.core.chunked_seq_QMARK_(seq__58938_59260__$1)){
var c__4638__auto___59261 = cljs.core.chunk_first(seq__58938_59260__$1);
var G__59262 = cljs.core.chunk_rest(seq__58938_59260__$1);
var G__59263 = c__4638__auto___59261;
var G__59264 = cljs.core.count(c__4638__auto___59261);
var G__59265 = (0);
seq__58938_59248 = G__59262;
chunk__58939_59249 = G__59263;
count__58940_59250 = G__59264;
i__58941_59251 = G__59265;
continue;
} else {
var vec__58951_59266 = cljs.core.first(seq__58938_59260__$1);
var k_59267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58951_59266,(0),null);
var v_59268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58951_59266,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_59267);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_59267),v_59268);


var G__59269 = cljs.core.next(seq__58938_59260__$1);
var G__59270 = null;
var G__59271 = (0);
var G__59272 = (0);
seq__58938_59248 = G__59269;
chunk__58939_59249 = G__59270;
count__58940_59250 = G__59271;
i__58941_59251 = G__59272;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__58955 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58955,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58955,(1),null);
var seq__58958_59276 = cljs.core.seq(node_children);
var chunk__58960_59277 = null;
var count__58961_59278 = (0);
var i__58962_59279 = (0);
while(true){
if((i__58962_59279 < count__58961_59278)){
var child_struct_59280 = chunk__58960_59277.cljs$core$IIndexed$_nth$arity$2(null,i__58962_59279);
if((!((child_struct_59280 == null)))){
if(typeof child_struct_59280 === 'string'){
var text_59281 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_59281),child_struct_59280].join(''));
} else {
var children_59282 = shadow.dom.svg_node(child_struct_59280);
if(cljs.core.seq_QMARK_(children_59282)){
var seq__58976_59283 = cljs.core.seq(children_59282);
var chunk__58978_59284 = null;
var count__58979_59285 = (0);
var i__58980_59286 = (0);
while(true){
if((i__58980_59286 < count__58979_59285)){
var child_59287 = chunk__58978_59284.cljs$core$IIndexed$_nth$arity$2(null,i__58980_59286);
if(cljs.core.truth_(child_59287)){
node.appendChild(child_59287);


var G__59288 = seq__58976_59283;
var G__59289 = chunk__58978_59284;
var G__59290 = count__58979_59285;
var G__59291 = (i__58980_59286 + (1));
seq__58976_59283 = G__59288;
chunk__58978_59284 = G__59289;
count__58979_59285 = G__59290;
i__58980_59286 = G__59291;
continue;
} else {
var G__59292 = seq__58976_59283;
var G__59293 = chunk__58978_59284;
var G__59294 = count__58979_59285;
var G__59295 = (i__58980_59286 + (1));
seq__58976_59283 = G__59292;
chunk__58978_59284 = G__59293;
count__58979_59285 = G__59294;
i__58980_59286 = G__59295;
continue;
}
} else {
var temp__5735__auto___59296 = cljs.core.seq(seq__58976_59283);
if(temp__5735__auto___59296){
var seq__58976_59297__$1 = temp__5735__auto___59296;
if(cljs.core.chunked_seq_QMARK_(seq__58976_59297__$1)){
var c__4638__auto___59298 = cljs.core.chunk_first(seq__58976_59297__$1);
var G__59299 = cljs.core.chunk_rest(seq__58976_59297__$1);
var G__59300 = c__4638__auto___59298;
var G__59301 = cljs.core.count(c__4638__auto___59298);
var G__59302 = (0);
seq__58976_59283 = G__59299;
chunk__58978_59284 = G__59300;
count__58979_59285 = G__59301;
i__58980_59286 = G__59302;
continue;
} else {
var child_59303 = cljs.core.first(seq__58976_59297__$1);
if(cljs.core.truth_(child_59303)){
node.appendChild(child_59303);


var G__59304 = cljs.core.next(seq__58976_59297__$1);
var G__59305 = null;
var G__59306 = (0);
var G__59307 = (0);
seq__58976_59283 = G__59304;
chunk__58978_59284 = G__59305;
count__58979_59285 = G__59306;
i__58980_59286 = G__59307;
continue;
} else {
var G__59308 = cljs.core.next(seq__58976_59297__$1);
var G__59309 = null;
var G__59310 = (0);
var G__59311 = (0);
seq__58976_59283 = G__59308;
chunk__58978_59284 = G__59309;
count__58979_59285 = G__59310;
i__58980_59286 = G__59311;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_59282);
}
}


var G__59312 = seq__58958_59276;
var G__59313 = chunk__58960_59277;
var G__59314 = count__58961_59278;
var G__59315 = (i__58962_59279 + (1));
seq__58958_59276 = G__59312;
chunk__58960_59277 = G__59313;
count__58961_59278 = G__59314;
i__58962_59279 = G__59315;
continue;
} else {
var G__59316 = seq__58958_59276;
var G__59317 = chunk__58960_59277;
var G__59318 = count__58961_59278;
var G__59319 = (i__58962_59279 + (1));
seq__58958_59276 = G__59316;
chunk__58960_59277 = G__59317;
count__58961_59278 = G__59318;
i__58962_59279 = G__59319;
continue;
}
} else {
var temp__5735__auto___59320 = cljs.core.seq(seq__58958_59276);
if(temp__5735__auto___59320){
var seq__58958_59321__$1 = temp__5735__auto___59320;
if(cljs.core.chunked_seq_QMARK_(seq__58958_59321__$1)){
var c__4638__auto___59322 = cljs.core.chunk_first(seq__58958_59321__$1);
var G__59323 = cljs.core.chunk_rest(seq__58958_59321__$1);
var G__59324 = c__4638__auto___59322;
var G__59325 = cljs.core.count(c__4638__auto___59322);
var G__59326 = (0);
seq__58958_59276 = G__59323;
chunk__58960_59277 = G__59324;
count__58961_59278 = G__59325;
i__58962_59279 = G__59326;
continue;
} else {
var child_struct_59327 = cljs.core.first(seq__58958_59321__$1);
if((!((child_struct_59327 == null)))){
if(typeof child_struct_59327 === 'string'){
var text_59332 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_59332),child_struct_59327].join(''));
} else {
var children_59333 = shadow.dom.svg_node(child_struct_59327);
if(cljs.core.seq_QMARK_(children_59333)){
var seq__58982_59334 = cljs.core.seq(children_59333);
var chunk__58984_59335 = null;
var count__58985_59336 = (0);
var i__58986_59337 = (0);
while(true){
if((i__58986_59337 < count__58985_59336)){
var child_59338 = chunk__58984_59335.cljs$core$IIndexed$_nth$arity$2(null,i__58986_59337);
if(cljs.core.truth_(child_59338)){
node.appendChild(child_59338);


var G__59339 = seq__58982_59334;
var G__59340 = chunk__58984_59335;
var G__59341 = count__58985_59336;
var G__59342 = (i__58986_59337 + (1));
seq__58982_59334 = G__59339;
chunk__58984_59335 = G__59340;
count__58985_59336 = G__59341;
i__58986_59337 = G__59342;
continue;
} else {
var G__59343 = seq__58982_59334;
var G__59344 = chunk__58984_59335;
var G__59345 = count__58985_59336;
var G__59346 = (i__58986_59337 + (1));
seq__58982_59334 = G__59343;
chunk__58984_59335 = G__59344;
count__58985_59336 = G__59345;
i__58986_59337 = G__59346;
continue;
}
} else {
var temp__5735__auto___59347__$1 = cljs.core.seq(seq__58982_59334);
if(temp__5735__auto___59347__$1){
var seq__58982_59348__$1 = temp__5735__auto___59347__$1;
if(cljs.core.chunked_seq_QMARK_(seq__58982_59348__$1)){
var c__4638__auto___59349 = cljs.core.chunk_first(seq__58982_59348__$1);
var G__59350 = cljs.core.chunk_rest(seq__58982_59348__$1);
var G__59351 = c__4638__auto___59349;
var G__59352 = cljs.core.count(c__4638__auto___59349);
var G__59353 = (0);
seq__58982_59334 = G__59350;
chunk__58984_59335 = G__59351;
count__58985_59336 = G__59352;
i__58986_59337 = G__59353;
continue;
} else {
var child_59354 = cljs.core.first(seq__58982_59348__$1);
if(cljs.core.truth_(child_59354)){
node.appendChild(child_59354);


var G__59358 = cljs.core.next(seq__58982_59348__$1);
var G__59359 = null;
var G__59360 = (0);
var G__59361 = (0);
seq__58982_59334 = G__59358;
chunk__58984_59335 = G__59359;
count__58985_59336 = G__59360;
i__58986_59337 = G__59361;
continue;
} else {
var G__59362 = cljs.core.next(seq__58982_59348__$1);
var G__59363 = null;
var G__59364 = (0);
var G__59365 = (0);
seq__58982_59334 = G__59362;
chunk__58984_59335 = G__59363;
count__58985_59336 = G__59364;
i__58986_59337 = G__59365;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_59333);
}
}


var G__59366 = cljs.core.next(seq__58958_59321__$1);
var G__59367 = null;
var G__59368 = (0);
var G__59369 = (0);
seq__58958_59276 = G__59366;
chunk__58960_59277 = G__59367;
count__58961_59278 = G__59368;
i__58962_59279 = G__59369;
continue;
} else {
var G__59370 = cljs.core.next(seq__58958_59321__$1);
var G__59371 = null;
var G__59372 = (0);
var G__59373 = (0);
seq__58958_59276 = G__59370;
chunk__58960_59277 = G__59371;
count__58961_59278 = G__59372;
i__58962_59279 = G__59373;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4824__auto__ = [];
var len__4818__auto___59374 = arguments.length;
var i__4819__auto___59375 = (0);
while(true){
if((i__4819__auto___59375 < len__4818__auto___59374)){
args__4824__auto__.push((arguments[i__4819__auto___59375]));

var G__59376 = (i__4819__auto___59375 + (1));
i__4819__auto___59375 = G__59376;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq58988){
var G__58989 = cljs.core.first(seq58988);
var seq58988__$1 = cljs.core.next(seq58988);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__58989,seq58988__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__58991 = arguments.length;
switch (G__58991) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4210__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4210__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4210__auto__;
}
})())){
var c__56789__auto___59379 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56790__auto__ = (function (){var switch__56661__auto__ = (function (state_58996){
var state_val_58997 = (state_58996[(1)]);
if((state_val_58997 === (1))){
var state_58996__$1 = state_58996;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58996__$1,(2),once_or_cleanup);
} else {
if((state_val_58997 === (2))){
var inst_58993 = (state_58996[(2)]);
var inst_58994 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_58996__$1 = (function (){var statearr_58998 = state_58996;
(statearr_58998[(7)] = inst_58993);

return statearr_58998;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58996__$1,inst_58994);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__56662__auto__ = null;
var shadow$dom$state_machine__56662__auto____0 = (function (){
var statearr_58999 = [null,null,null,null,null,null,null,null];
(statearr_58999[(0)] = shadow$dom$state_machine__56662__auto__);

(statearr_58999[(1)] = (1));

return statearr_58999;
});
var shadow$dom$state_machine__56662__auto____1 = (function (state_58996){
while(true){
var ret_value__56663__auto__ = (function (){try{while(true){
var result__56664__auto__ = switch__56661__auto__(state_58996);
if(cljs.core.keyword_identical_QMARK_(result__56664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56664__auto__;
}
break;
}
}catch (e59000){var ex__56665__auto__ = e59000;
var statearr_59001_59382 = state_58996;
(statearr_59001_59382[(2)] = ex__56665__auto__);


if(cljs.core.seq((state_58996[(4)]))){
var statearr_59002_59383 = state_58996;
(statearr_59002_59383[(1)] = cljs.core.first((state_58996[(4)])));

} else {
throw ex__56665__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59384 = state_58996;
state_58996 = G__59384;
continue;
} else {
return ret_value__56663__auto__;
}
break;
}
});
shadow$dom$state_machine__56662__auto__ = function(state_58996){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__56662__auto____0.call(this);
case 1:
return shadow$dom$state_machine__56662__auto____1.call(this,state_58996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__56662__auto____0;
shadow$dom$state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__56662__auto____1;
return shadow$dom$state_machine__56662__auto__;
})()
})();
var state__56791__auto__ = (function (){var statearr_59003 = f__56790__auto__();
(statearr_59003[(6)] = c__56789__auto___59379);

return statearr_59003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56791__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
