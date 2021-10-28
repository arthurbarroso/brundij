goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_49393 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_49393(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_49394 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_49394(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__48703 = coll;
var G__48704 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__48703,G__48704) : shadow.dom.lazy_native_coll_seq.call(null,G__48703,G__48704));
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
var G__48773 = arguments.length;
switch (G__48773) {
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
var G__48786 = arguments.length;
switch (G__48786) {
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
var G__48797 = arguments.length;
switch (G__48797) {
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
var G__48812 = arguments.length;
switch (G__48812) {
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
var G__48829 = arguments.length;
switch (G__48829) {
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
var G__48836 = arguments.length;
switch (G__48836) {
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
}catch (e48859){if((e48859 instanceof Object)){
var e = e48859;
return console.log("didnt support attachEvent",el,e);
} else {
throw e48859;

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
var seq__48874 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__48875 = null;
var count__48876 = (0);
var i__48877 = (0);
while(true){
if((i__48877 < count__48876)){
var el = chunk__48875.cljs$core$IIndexed$_nth$arity$2(null,i__48877);
var handler_49416__$1 = ((function (seq__48874,chunk__48875,count__48876,i__48877,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48874,chunk__48875,count__48876,i__48877,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_49416__$1);


var G__49420 = seq__48874;
var G__49421 = chunk__48875;
var G__49422 = count__48876;
var G__49423 = (i__48877 + (1));
seq__48874 = G__49420;
chunk__48875 = G__49421;
count__48876 = G__49422;
i__48877 = G__49423;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48874);
if(temp__5735__auto__){
var seq__48874__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48874__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__48874__$1);
var G__49424 = cljs.core.chunk_rest(seq__48874__$1);
var G__49425 = c__4638__auto__;
var G__49426 = cljs.core.count(c__4638__auto__);
var G__49427 = (0);
seq__48874 = G__49424;
chunk__48875 = G__49425;
count__48876 = G__49426;
i__48877 = G__49427;
continue;
} else {
var el = cljs.core.first(seq__48874__$1);
var handler_49428__$1 = ((function (seq__48874,chunk__48875,count__48876,i__48877,el,seq__48874__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__48874,chunk__48875,count__48876,i__48877,el,seq__48874__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_49428__$1);


var G__49429 = cljs.core.next(seq__48874__$1);
var G__49430 = null;
var G__49431 = (0);
var G__49432 = (0);
seq__48874 = G__49429;
chunk__48875 = G__49430;
count__48876 = G__49431;
i__48877 = G__49432;
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
var G__48902 = arguments.length;
switch (G__48902) {
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
var seq__48915 = cljs.core.seq(events);
var chunk__48916 = null;
var count__48917 = (0);
var i__48918 = (0);
while(true){
if((i__48918 < count__48917)){
var vec__48925 = chunk__48916.cljs$core$IIndexed$_nth$arity$2(null,i__48918);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48925,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48925,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49434 = seq__48915;
var G__49435 = chunk__48916;
var G__49436 = count__48917;
var G__49437 = (i__48918 + (1));
seq__48915 = G__49434;
chunk__48916 = G__49435;
count__48917 = G__49436;
i__48918 = G__49437;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48915);
if(temp__5735__auto__){
var seq__48915__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48915__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__48915__$1);
var G__49438 = cljs.core.chunk_rest(seq__48915__$1);
var G__49439 = c__4638__auto__;
var G__49440 = cljs.core.count(c__4638__auto__);
var G__49441 = (0);
seq__48915 = G__49438;
chunk__48916 = G__49439;
count__48917 = G__49440;
i__48918 = G__49441;
continue;
} else {
var vec__48928 = cljs.core.first(seq__48915__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48928,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48928,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__49443 = cljs.core.next(seq__48915__$1);
var G__49444 = null;
var G__49445 = (0);
var G__49446 = (0);
seq__48915 = G__49443;
chunk__48916 = G__49444;
count__48917 = G__49445;
i__48918 = G__49446;
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
var seq__48966 = cljs.core.seq(styles);
var chunk__48967 = null;
var count__48968 = (0);
var i__48969 = (0);
while(true){
if((i__48969 < count__48968)){
var vec__48979 = chunk__48967.cljs$core$IIndexed$_nth$arity$2(null,i__48969);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48979,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48979,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__49448 = seq__48966;
var G__49449 = chunk__48967;
var G__49450 = count__48968;
var G__49451 = (i__48969 + (1));
seq__48966 = G__49448;
chunk__48967 = G__49449;
count__48968 = G__49450;
i__48969 = G__49451;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48966);
if(temp__5735__auto__){
var seq__48966__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48966__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__48966__$1);
var G__49452 = cljs.core.chunk_rest(seq__48966__$1);
var G__49453 = c__4638__auto__;
var G__49454 = cljs.core.count(c__4638__auto__);
var G__49455 = (0);
seq__48966 = G__49452;
chunk__48967 = G__49453;
count__48968 = G__49454;
i__48969 = G__49455;
continue;
} else {
var vec__48984 = cljs.core.first(seq__48966__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48984,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48984,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__49456 = cljs.core.next(seq__48966__$1);
var G__49457 = null;
var G__49458 = (0);
var G__49459 = (0);
seq__48966 = G__49456;
chunk__48967 = G__49457;
count__48968 = G__49458;
i__48969 = G__49459;
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
var G__48992_49460 = key;
var G__48992_49461__$1 = (((G__48992_49460 instanceof cljs.core.Keyword))?G__48992_49460.fqn:null);
switch (G__48992_49461__$1) {
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
var ks_49463 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4212__auto__ = goog.string.startsWith(ks_49463,"data-");
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return goog.string.startsWith(ks_49463,"aria-");
}
})())){
el.setAttribute(ks_49463,value);
} else {
(el[ks_49463] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__49018){
var map__49020 = p__49018;
var map__49020__$1 = cljs.core.__destructure_map(map__49020);
var props = map__49020__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49020__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__49022 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49022,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49022,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49022,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__49025 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__49025,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__49025;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__49029 = arguments.length;
switch (G__49029) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__49062){
var vec__49064 = p__49062;
var seq__49065 = cljs.core.seq(vec__49064);
var first__49066 = cljs.core.first(seq__49065);
var seq__49065__$1 = cljs.core.next(seq__49065);
var nn = first__49066;
var first__49066__$1 = cljs.core.first(seq__49065__$1);
var seq__49065__$2 = cljs.core.next(seq__49065__$1);
var np = first__49066__$1;
var nc = seq__49065__$2;
var node = vec__49064;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49070 = nn;
var G__49071 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__49070,G__49071) : create_fn.call(null,G__49070,G__49071));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__49073 = nn;
var G__49074 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__49073,G__49074) : create_fn.call(null,G__49073,G__49074));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__49080 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49080,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49080,(1),null);
var seq__49085_49468 = cljs.core.seq(node_children);
var chunk__49086_49469 = null;
var count__49087_49470 = (0);
var i__49088_49471 = (0);
while(true){
if((i__49088_49471 < count__49087_49470)){
var child_struct_49472 = chunk__49086_49469.cljs$core$IIndexed$_nth$arity$2(null,i__49088_49471);
var children_49473 = shadow.dom.dom_node(child_struct_49472);
if(cljs.core.seq_QMARK_(children_49473)){
var seq__49131_49474 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49473));
var chunk__49133_49475 = null;
var count__49134_49476 = (0);
var i__49135_49477 = (0);
while(true){
if((i__49135_49477 < count__49134_49476)){
var child_49478 = chunk__49133_49475.cljs$core$IIndexed$_nth$arity$2(null,i__49135_49477);
if(cljs.core.truth_(child_49478)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49478);


var G__49479 = seq__49131_49474;
var G__49480 = chunk__49133_49475;
var G__49481 = count__49134_49476;
var G__49482 = (i__49135_49477 + (1));
seq__49131_49474 = G__49479;
chunk__49133_49475 = G__49480;
count__49134_49476 = G__49481;
i__49135_49477 = G__49482;
continue;
} else {
var G__49483 = seq__49131_49474;
var G__49484 = chunk__49133_49475;
var G__49485 = count__49134_49476;
var G__49486 = (i__49135_49477 + (1));
seq__49131_49474 = G__49483;
chunk__49133_49475 = G__49484;
count__49134_49476 = G__49485;
i__49135_49477 = G__49486;
continue;
}
} else {
var temp__5735__auto___49487 = cljs.core.seq(seq__49131_49474);
if(temp__5735__auto___49487){
var seq__49131_49488__$1 = temp__5735__auto___49487;
if(cljs.core.chunked_seq_QMARK_(seq__49131_49488__$1)){
var c__4638__auto___49489 = cljs.core.chunk_first(seq__49131_49488__$1);
var G__49490 = cljs.core.chunk_rest(seq__49131_49488__$1);
var G__49491 = c__4638__auto___49489;
var G__49492 = cljs.core.count(c__4638__auto___49489);
var G__49493 = (0);
seq__49131_49474 = G__49490;
chunk__49133_49475 = G__49491;
count__49134_49476 = G__49492;
i__49135_49477 = G__49493;
continue;
} else {
var child_49494 = cljs.core.first(seq__49131_49488__$1);
if(cljs.core.truth_(child_49494)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49494);


var G__49495 = cljs.core.next(seq__49131_49488__$1);
var G__49496 = null;
var G__49497 = (0);
var G__49498 = (0);
seq__49131_49474 = G__49495;
chunk__49133_49475 = G__49496;
count__49134_49476 = G__49497;
i__49135_49477 = G__49498;
continue;
} else {
var G__49499 = cljs.core.next(seq__49131_49488__$1);
var G__49500 = null;
var G__49501 = (0);
var G__49502 = (0);
seq__49131_49474 = G__49499;
chunk__49133_49475 = G__49500;
count__49134_49476 = G__49501;
i__49135_49477 = G__49502;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49473);
}


var G__49503 = seq__49085_49468;
var G__49504 = chunk__49086_49469;
var G__49505 = count__49087_49470;
var G__49506 = (i__49088_49471 + (1));
seq__49085_49468 = G__49503;
chunk__49086_49469 = G__49504;
count__49087_49470 = G__49505;
i__49088_49471 = G__49506;
continue;
} else {
var temp__5735__auto___49507 = cljs.core.seq(seq__49085_49468);
if(temp__5735__auto___49507){
var seq__49085_49508__$1 = temp__5735__auto___49507;
if(cljs.core.chunked_seq_QMARK_(seq__49085_49508__$1)){
var c__4638__auto___49509 = cljs.core.chunk_first(seq__49085_49508__$1);
var G__49510 = cljs.core.chunk_rest(seq__49085_49508__$1);
var G__49511 = c__4638__auto___49509;
var G__49512 = cljs.core.count(c__4638__auto___49509);
var G__49513 = (0);
seq__49085_49468 = G__49510;
chunk__49086_49469 = G__49511;
count__49087_49470 = G__49512;
i__49088_49471 = G__49513;
continue;
} else {
var child_struct_49514 = cljs.core.first(seq__49085_49508__$1);
var children_49515 = shadow.dom.dom_node(child_struct_49514);
if(cljs.core.seq_QMARK_(children_49515)){
var seq__49169_49516 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_49515));
var chunk__49171_49517 = null;
var count__49172_49518 = (0);
var i__49173_49519 = (0);
while(true){
if((i__49173_49519 < count__49172_49518)){
var child_49520 = chunk__49171_49517.cljs$core$IIndexed$_nth$arity$2(null,i__49173_49519);
if(cljs.core.truth_(child_49520)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49520);


var G__49521 = seq__49169_49516;
var G__49522 = chunk__49171_49517;
var G__49523 = count__49172_49518;
var G__49524 = (i__49173_49519 + (1));
seq__49169_49516 = G__49521;
chunk__49171_49517 = G__49522;
count__49172_49518 = G__49523;
i__49173_49519 = G__49524;
continue;
} else {
var G__49525 = seq__49169_49516;
var G__49526 = chunk__49171_49517;
var G__49527 = count__49172_49518;
var G__49528 = (i__49173_49519 + (1));
seq__49169_49516 = G__49525;
chunk__49171_49517 = G__49526;
count__49172_49518 = G__49527;
i__49173_49519 = G__49528;
continue;
}
} else {
var temp__5735__auto___49529__$1 = cljs.core.seq(seq__49169_49516);
if(temp__5735__auto___49529__$1){
var seq__49169_49530__$1 = temp__5735__auto___49529__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49169_49530__$1)){
var c__4638__auto___49531 = cljs.core.chunk_first(seq__49169_49530__$1);
var G__49532 = cljs.core.chunk_rest(seq__49169_49530__$1);
var G__49533 = c__4638__auto___49531;
var G__49534 = cljs.core.count(c__4638__auto___49531);
var G__49535 = (0);
seq__49169_49516 = G__49532;
chunk__49171_49517 = G__49533;
count__49172_49518 = G__49534;
i__49173_49519 = G__49535;
continue;
} else {
var child_49536 = cljs.core.first(seq__49169_49530__$1);
if(cljs.core.truth_(child_49536)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_49536);


var G__49537 = cljs.core.next(seq__49169_49530__$1);
var G__49538 = null;
var G__49539 = (0);
var G__49540 = (0);
seq__49169_49516 = G__49537;
chunk__49171_49517 = G__49538;
count__49172_49518 = G__49539;
i__49173_49519 = G__49540;
continue;
} else {
var G__49541 = cljs.core.next(seq__49169_49530__$1);
var G__49542 = null;
var G__49543 = (0);
var G__49544 = (0);
seq__49169_49516 = G__49541;
chunk__49171_49517 = G__49542;
count__49172_49518 = G__49543;
i__49173_49519 = G__49544;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_49515);
}


var G__49545 = cljs.core.next(seq__49085_49508__$1);
var G__49546 = null;
var G__49547 = (0);
var G__49548 = (0);
seq__49085_49468 = G__49545;
chunk__49086_49469 = G__49546;
count__49087_49470 = G__49547;
i__49088_49471 = G__49548;
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
var seq__49223 = cljs.core.seq(node);
var chunk__49224 = null;
var count__49225 = (0);
var i__49226 = (0);
while(true){
if((i__49226 < count__49225)){
var n = chunk__49224.cljs$core$IIndexed$_nth$arity$2(null,i__49226);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49549 = seq__49223;
var G__49550 = chunk__49224;
var G__49551 = count__49225;
var G__49552 = (i__49226 + (1));
seq__49223 = G__49549;
chunk__49224 = G__49550;
count__49225 = G__49551;
i__49226 = G__49552;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49223);
if(temp__5735__auto__){
var seq__49223__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49223__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__49223__$1);
var G__49553 = cljs.core.chunk_rest(seq__49223__$1);
var G__49554 = c__4638__auto__;
var G__49555 = cljs.core.count(c__4638__auto__);
var G__49556 = (0);
seq__49223 = G__49553;
chunk__49224 = G__49554;
count__49225 = G__49555;
i__49226 = G__49556;
continue;
} else {
var n = cljs.core.first(seq__49223__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__49557 = cljs.core.next(seq__49223__$1);
var G__49558 = null;
var G__49559 = (0);
var G__49560 = (0);
seq__49223 = G__49557;
chunk__49224 = G__49558;
count__49225 = G__49559;
i__49226 = G__49560;
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
var G__49228 = arguments.length;
switch (G__49228) {
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
var G__49230 = arguments.length;
switch (G__49230) {
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
var G__49232 = arguments.length;
switch (G__49232) {
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
var len__4818__auto___49564 = arguments.length;
var i__4819__auto___49565 = (0);
while(true){
if((i__4819__auto___49565 < len__4818__auto___49564)){
args__4824__auto__.push((arguments[i__4819__auto___49565]));

var G__49566 = (i__4819__auto___49565 + (1));
i__4819__auto___49565 = G__49566;
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
var seq__49234_49567 = cljs.core.seq(nodes);
var chunk__49235_49568 = null;
var count__49236_49569 = (0);
var i__49237_49570 = (0);
while(true){
if((i__49237_49570 < count__49236_49569)){
var node_49571 = chunk__49235_49568.cljs$core$IIndexed$_nth$arity$2(null,i__49237_49570);
fragment.appendChild(shadow.dom._to_dom(node_49571));


var G__49572 = seq__49234_49567;
var G__49573 = chunk__49235_49568;
var G__49574 = count__49236_49569;
var G__49575 = (i__49237_49570 + (1));
seq__49234_49567 = G__49572;
chunk__49235_49568 = G__49573;
count__49236_49569 = G__49574;
i__49237_49570 = G__49575;
continue;
} else {
var temp__5735__auto___49576 = cljs.core.seq(seq__49234_49567);
if(temp__5735__auto___49576){
var seq__49234_49577__$1 = temp__5735__auto___49576;
if(cljs.core.chunked_seq_QMARK_(seq__49234_49577__$1)){
var c__4638__auto___49578 = cljs.core.chunk_first(seq__49234_49577__$1);
var G__49579 = cljs.core.chunk_rest(seq__49234_49577__$1);
var G__49580 = c__4638__auto___49578;
var G__49581 = cljs.core.count(c__4638__auto___49578);
var G__49582 = (0);
seq__49234_49567 = G__49579;
chunk__49235_49568 = G__49580;
count__49236_49569 = G__49581;
i__49237_49570 = G__49582;
continue;
} else {
var node_49583 = cljs.core.first(seq__49234_49577__$1);
fragment.appendChild(shadow.dom._to_dom(node_49583));


var G__49584 = cljs.core.next(seq__49234_49577__$1);
var G__49585 = null;
var G__49586 = (0);
var G__49587 = (0);
seq__49234_49567 = G__49584;
chunk__49235_49568 = G__49585;
count__49236_49569 = G__49586;
i__49237_49570 = G__49587;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq49233){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49233));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__49238_49588 = cljs.core.seq(scripts);
var chunk__49239_49589 = null;
var count__49240_49590 = (0);
var i__49241_49591 = (0);
while(true){
if((i__49241_49591 < count__49240_49590)){
var vec__49248_49592 = chunk__49239_49589.cljs$core$IIndexed$_nth$arity$2(null,i__49241_49591);
var script_tag_49593 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49248_49592,(0),null);
var script_body_49594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49248_49592,(1),null);
eval(script_body_49594);


var G__49595 = seq__49238_49588;
var G__49596 = chunk__49239_49589;
var G__49597 = count__49240_49590;
var G__49598 = (i__49241_49591 + (1));
seq__49238_49588 = G__49595;
chunk__49239_49589 = G__49596;
count__49240_49590 = G__49597;
i__49241_49591 = G__49598;
continue;
} else {
var temp__5735__auto___49599 = cljs.core.seq(seq__49238_49588);
if(temp__5735__auto___49599){
var seq__49238_49600__$1 = temp__5735__auto___49599;
if(cljs.core.chunked_seq_QMARK_(seq__49238_49600__$1)){
var c__4638__auto___49601 = cljs.core.chunk_first(seq__49238_49600__$1);
var G__49602 = cljs.core.chunk_rest(seq__49238_49600__$1);
var G__49603 = c__4638__auto___49601;
var G__49604 = cljs.core.count(c__4638__auto___49601);
var G__49605 = (0);
seq__49238_49588 = G__49602;
chunk__49239_49589 = G__49603;
count__49240_49590 = G__49604;
i__49241_49591 = G__49605;
continue;
} else {
var vec__49251_49606 = cljs.core.first(seq__49238_49600__$1);
var script_tag_49607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49251_49606,(0),null);
var script_body_49608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49251_49606,(1),null);
eval(script_body_49608);


var G__49609 = cljs.core.next(seq__49238_49600__$1);
var G__49610 = null;
var G__49611 = (0);
var G__49612 = (0);
seq__49238_49588 = G__49609;
chunk__49239_49589 = G__49610;
count__49240_49590 = G__49611;
i__49241_49591 = G__49612;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__49254){
var vec__49255 = p__49254;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49255,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49255,(1),null);
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
var G__49259 = arguments.length;
switch (G__49259) {
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
var seq__49260 = cljs.core.seq(style_keys);
var chunk__49261 = null;
var count__49262 = (0);
var i__49263 = (0);
while(true){
if((i__49263 < count__49262)){
var it = chunk__49261.cljs$core$IIndexed$_nth$arity$2(null,i__49263);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49614 = seq__49260;
var G__49615 = chunk__49261;
var G__49616 = count__49262;
var G__49617 = (i__49263 + (1));
seq__49260 = G__49614;
chunk__49261 = G__49615;
count__49262 = G__49616;
i__49263 = G__49617;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49260);
if(temp__5735__auto__){
var seq__49260__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49260__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__49260__$1);
var G__49618 = cljs.core.chunk_rest(seq__49260__$1);
var G__49619 = c__4638__auto__;
var G__49620 = cljs.core.count(c__4638__auto__);
var G__49621 = (0);
seq__49260 = G__49618;
chunk__49261 = G__49619;
count__49262 = G__49620;
i__49263 = G__49621;
continue;
} else {
var it = cljs.core.first(seq__49260__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__49622 = cljs.core.next(seq__49260__$1);
var G__49623 = null;
var G__49624 = (0);
var G__49625 = (0);
seq__49260 = G__49622;
chunk__49261 = G__49623;
count__49262 = G__49624;
i__49263 = G__49625;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k49265,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__49269 = k49265;
var G__49269__$1 = (((G__49269 instanceof cljs.core.Keyword))?G__49269.fqn:null);
switch (G__49269__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49265,else__4464__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__49270){
var vec__49271 = p__49270;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49271,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49271,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49264){
var self__ = this;
var G__49264__$1 = this;
return (new cljs.core.RecordIter((0),G__49264__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49266,other49267){
var self__ = this;
var this49266__$1 = this;
return (((!((other49267 == null)))) && ((((this49266__$1.constructor === other49267.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49266__$1.x,other49267.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49266__$1.y,other49267.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49266__$1.__extmap,other49267.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k49265){
var self__ = this;
var this__4468__auto____$1 = this;
var G__49274 = k49265;
var G__49274__$1 = (((G__49274 instanceof cljs.core.Keyword))?G__49274.fqn:null);
switch (G__49274__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49265);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__49264){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__49275 = cljs.core.keyword_identical_QMARK_;
var expr__49276 = k__4470__auto__;
if(cljs.core.truth_((pred__49275.cljs$core$IFn$_invoke$arity$2 ? pred__49275.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__49276) : pred__49275.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__49276)))){
return (new shadow.dom.Coordinate(G__49264,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49275.cljs$core$IFn$_invoke$arity$2 ? pred__49275.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__49276) : pred__49275.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__49276)))){
return (new shadow.dom.Coordinate(self__.x,G__49264,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__49264),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__49264){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__49264,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__49268){
var extmap__4501__auto__ = (function (){var G__49278 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49268,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__49268)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49278);
} else {
return G__49278;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__49268),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__49268),null,cljs.core.not_empty(extmap__4501__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k49280,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__49284 = k49280;
var G__49284__$1 = (((G__49284 instanceof cljs.core.Keyword))?G__49284.fqn:null);
switch (G__49284__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k49280,else__4464__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__49285){
var vec__49286 = p__49285;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49286,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49286,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__49279){
var self__ = this;
var G__49279__$1 = this;
return (new cljs.core.RecordIter((0),G__49279__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this49281,other49282){
var self__ = this;
var this49281__$1 = this;
return (((!((other49282 == null)))) && ((((this49281__$1.constructor === other49282.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49281__$1.w,other49282.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49281__$1.h,other49282.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this49281__$1.__extmap,other49282.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k49280){
var self__ = this;
var this__4468__auto____$1 = this;
var G__49289 = k49280;
var G__49289__$1 = (((G__49289 instanceof cljs.core.Keyword))?G__49289.fqn:null);
switch (G__49289__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k49280);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__49279){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__49290 = cljs.core.keyword_identical_QMARK_;
var expr__49291 = k__4470__auto__;
if(cljs.core.truth_((pred__49290.cljs$core$IFn$_invoke$arity$2 ? pred__49290.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__49291) : pred__49290.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__49291)))){
return (new shadow.dom.Size(G__49279,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__49290.cljs$core$IFn$_invoke$arity$2 ? pred__49290.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__49291) : pred__49290.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__49291)))){
return (new shadow.dom.Size(self__.w,G__49279,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__49279),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__49279){
var self__ = this;
var this__4460__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__49279,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__49283){
var extmap__4501__auto__ = (function (){var G__49293 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__49283,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__49283)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__49293);
} else {
return G__49293;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__49283),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__49283),null,cljs.core.not_empty(extmap__4501__auto__),null));
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
var G__49701 = (i + (1));
var G__49702 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__49701;
ret = G__49702;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__49298){
var vec__49299 = p__49298;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49299,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49299,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__49303 = arguments.length;
switch (G__49303) {
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
var G__49725 = ps;
var G__49726 = (i + (1));
el__$1 = G__49725;
i = G__49726;
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
var vec__49308 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49308,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49308,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49308,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__49311_49728 = cljs.core.seq(props);
var chunk__49312_49729 = null;
var count__49313_49730 = (0);
var i__49314_49731 = (0);
while(true){
if((i__49314_49731 < count__49313_49730)){
var vec__49321_49732 = chunk__49312_49729.cljs$core$IIndexed$_nth$arity$2(null,i__49314_49731);
var k_49733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49321_49732,(0),null);
var v_49734 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49321_49732,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_49733);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49733),v_49734);


var G__49735 = seq__49311_49728;
var G__49736 = chunk__49312_49729;
var G__49737 = count__49313_49730;
var G__49738 = (i__49314_49731 + (1));
seq__49311_49728 = G__49735;
chunk__49312_49729 = G__49736;
count__49313_49730 = G__49737;
i__49314_49731 = G__49738;
continue;
} else {
var temp__5735__auto___49739 = cljs.core.seq(seq__49311_49728);
if(temp__5735__auto___49739){
var seq__49311_49740__$1 = temp__5735__auto___49739;
if(cljs.core.chunked_seq_QMARK_(seq__49311_49740__$1)){
var c__4638__auto___49741 = cljs.core.chunk_first(seq__49311_49740__$1);
var G__49742 = cljs.core.chunk_rest(seq__49311_49740__$1);
var G__49743 = c__4638__auto___49741;
var G__49744 = cljs.core.count(c__4638__auto___49741);
var G__49745 = (0);
seq__49311_49728 = G__49742;
chunk__49312_49729 = G__49743;
count__49313_49730 = G__49744;
i__49314_49731 = G__49745;
continue;
} else {
var vec__49324_49746 = cljs.core.first(seq__49311_49740__$1);
var k_49747 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49324_49746,(0),null);
var v_49748 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49324_49746,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_49747);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_49747),v_49748);


var G__49749 = cljs.core.next(seq__49311_49740__$1);
var G__49750 = null;
var G__49751 = (0);
var G__49752 = (0);
seq__49311_49728 = G__49749;
chunk__49312_49729 = G__49750;
count__49313_49730 = G__49751;
i__49314_49731 = G__49752;
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
var vec__49328 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49328,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49328,(1),null);
var seq__49331_49757 = cljs.core.seq(node_children);
var chunk__49333_49758 = null;
var count__49334_49759 = (0);
var i__49335_49760 = (0);
while(true){
if((i__49335_49760 < count__49334_49759)){
var child_struct_49761 = chunk__49333_49758.cljs$core$IIndexed$_nth$arity$2(null,i__49335_49760);
if((!((child_struct_49761 == null)))){
if(typeof child_struct_49761 === 'string'){
var text_49766 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49766),child_struct_49761].join(''));
} else {
var children_49767 = shadow.dom.svg_node(child_struct_49761);
if(cljs.core.seq_QMARK_(children_49767)){
var seq__49355_49772 = cljs.core.seq(children_49767);
var chunk__49357_49773 = null;
var count__49358_49774 = (0);
var i__49359_49775 = (0);
while(true){
if((i__49359_49775 < count__49358_49774)){
var child_49776 = chunk__49357_49773.cljs$core$IIndexed$_nth$arity$2(null,i__49359_49775);
if(cljs.core.truth_(child_49776)){
node.appendChild(child_49776);


var G__49777 = seq__49355_49772;
var G__49778 = chunk__49357_49773;
var G__49779 = count__49358_49774;
var G__49780 = (i__49359_49775 + (1));
seq__49355_49772 = G__49777;
chunk__49357_49773 = G__49778;
count__49358_49774 = G__49779;
i__49359_49775 = G__49780;
continue;
} else {
var G__49781 = seq__49355_49772;
var G__49782 = chunk__49357_49773;
var G__49783 = count__49358_49774;
var G__49784 = (i__49359_49775 + (1));
seq__49355_49772 = G__49781;
chunk__49357_49773 = G__49782;
count__49358_49774 = G__49783;
i__49359_49775 = G__49784;
continue;
}
} else {
var temp__5735__auto___49785 = cljs.core.seq(seq__49355_49772);
if(temp__5735__auto___49785){
var seq__49355_49786__$1 = temp__5735__auto___49785;
if(cljs.core.chunked_seq_QMARK_(seq__49355_49786__$1)){
var c__4638__auto___49787 = cljs.core.chunk_first(seq__49355_49786__$1);
var G__49788 = cljs.core.chunk_rest(seq__49355_49786__$1);
var G__49789 = c__4638__auto___49787;
var G__49790 = cljs.core.count(c__4638__auto___49787);
var G__49791 = (0);
seq__49355_49772 = G__49788;
chunk__49357_49773 = G__49789;
count__49358_49774 = G__49790;
i__49359_49775 = G__49791;
continue;
} else {
var child_49793 = cljs.core.first(seq__49355_49786__$1);
if(cljs.core.truth_(child_49793)){
node.appendChild(child_49793);


var G__49794 = cljs.core.next(seq__49355_49786__$1);
var G__49795 = null;
var G__49796 = (0);
var G__49797 = (0);
seq__49355_49772 = G__49794;
chunk__49357_49773 = G__49795;
count__49358_49774 = G__49796;
i__49359_49775 = G__49797;
continue;
} else {
var G__49798 = cljs.core.next(seq__49355_49786__$1);
var G__49799 = null;
var G__49800 = (0);
var G__49801 = (0);
seq__49355_49772 = G__49798;
chunk__49357_49773 = G__49799;
count__49358_49774 = G__49800;
i__49359_49775 = G__49801;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49767);
}
}


var G__49802 = seq__49331_49757;
var G__49803 = chunk__49333_49758;
var G__49804 = count__49334_49759;
var G__49805 = (i__49335_49760 + (1));
seq__49331_49757 = G__49802;
chunk__49333_49758 = G__49803;
count__49334_49759 = G__49804;
i__49335_49760 = G__49805;
continue;
} else {
var G__49806 = seq__49331_49757;
var G__49807 = chunk__49333_49758;
var G__49808 = count__49334_49759;
var G__49809 = (i__49335_49760 + (1));
seq__49331_49757 = G__49806;
chunk__49333_49758 = G__49807;
count__49334_49759 = G__49808;
i__49335_49760 = G__49809;
continue;
}
} else {
var temp__5735__auto___49810 = cljs.core.seq(seq__49331_49757);
if(temp__5735__auto___49810){
var seq__49331_49811__$1 = temp__5735__auto___49810;
if(cljs.core.chunked_seq_QMARK_(seq__49331_49811__$1)){
var c__4638__auto___49812 = cljs.core.chunk_first(seq__49331_49811__$1);
var G__49813 = cljs.core.chunk_rest(seq__49331_49811__$1);
var G__49814 = c__4638__auto___49812;
var G__49815 = cljs.core.count(c__4638__auto___49812);
var G__49816 = (0);
seq__49331_49757 = G__49813;
chunk__49333_49758 = G__49814;
count__49334_49759 = G__49815;
i__49335_49760 = G__49816;
continue;
} else {
var child_struct_49817 = cljs.core.first(seq__49331_49811__$1);
if((!((child_struct_49817 == null)))){
if(typeof child_struct_49817 === 'string'){
var text_49818 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_49818),child_struct_49817].join(''));
} else {
var children_49819 = shadow.dom.svg_node(child_struct_49817);
if(cljs.core.seq_QMARK_(children_49819)){
var seq__49361_49820 = cljs.core.seq(children_49819);
var chunk__49363_49821 = null;
var count__49364_49822 = (0);
var i__49365_49823 = (0);
while(true){
if((i__49365_49823 < count__49364_49822)){
var child_49824 = chunk__49363_49821.cljs$core$IIndexed$_nth$arity$2(null,i__49365_49823);
if(cljs.core.truth_(child_49824)){
node.appendChild(child_49824);


var G__49825 = seq__49361_49820;
var G__49826 = chunk__49363_49821;
var G__49827 = count__49364_49822;
var G__49828 = (i__49365_49823 + (1));
seq__49361_49820 = G__49825;
chunk__49363_49821 = G__49826;
count__49364_49822 = G__49827;
i__49365_49823 = G__49828;
continue;
} else {
var G__49829 = seq__49361_49820;
var G__49830 = chunk__49363_49821;
var G__49831 = count__49364_49822;
var G__49832 = (i__49365_49823 + (1));
seq__49361_49820 = G__49829;
chunk__49363_49821 = G__49830;
count__49364_49822 = G__49831;
i__49365_49823 = G__49832;
continue;
}
} else {
var temp__5735__auto___49833__$1 = cljs.core.seq(seq__49361_49820);
if(temp__5735__auto___49833__$1){
var seq__49361_49834__$1 = temp__5735__auto___49833__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49361_49834__$1)){
var c__4638__auto___49835 = cljs.core.chunk_first(seq__49361_49834__$1);
var G__49836 = cljs.core.chunk_rest(seq__49361_49834__$1);
var G__49837 = c__4638__auto___49835;
var G__49838 = cljs.core.count(c__4638__auto___49835);
var G__49839 = (0);
seq__49361_49820 = G__49836;
chunk__49363_49821 = G__49837;
count__49364_49822 = G__49838;
i__49365_49823 = G__49839;
continue;
} else {
var child_49840 = cljs.core.first(seq__49361_49834__$1);
if(cljs.core.truth_(child_49840)){
node.appendChild(child_49840);


var G__49841 = cljs.core.next(seq__49361_49834__$1);
var G__49842 = null;
var G__49843 = (0);
var G__49844 = (0);
seq__49361_49820 = G__49841;
chunk__49363_49821 = G__49842;
count__49364_49822 = G__49843;
i__49365_49823 = G__49844;
continue;
} else {
var G__49845 = cljs.core.next(seq__49361_49834__$1);
var G__49846 = null;
var G__49847 = (0);
var G__49848 = (0);
seq__49361_49820 = G__49845;
chunk__49363_49821 = G__49846;
count__49364_49822 = G__49847;
i__49365_49823 = G__49848;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_49819);
}
}


var G__49849 = cljs.core.next(seq__49331_49811__$1);
var G__49850 = null;
var G__49851 = (0);
var G__49852 = (0);
seq__49331_49757 = G__49849;
chunk__49333_49758 = G__49850;
count__49334_49759 = G__49851;
i__49335_49760 = G__49852;
continue;
} else {
var G__49853 = cljs.core.next(seq__49331_49811__$1);
var G__49854 = null;
var G__49855 = (0);
var G__49856 = (0);
seq__49331_49757 = G__49853;
chunk__49333_49758 = G__49854;
count__49334_49759 = G__49855;
i__49335_49760 = G__49856;
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
var len__4818__auto___49857 = arguments.length;
var i__4819__auto___49858 = (0);
while(true){
if((i__4819__auto___49858 < len__4818__auto___49857)){
args__4824__auto__.push((arguments[i__4819__auto___49858]));

var G__49859 = (i__4819__auto___49858 + (1));
i__4819__auto___49858 = G__49859;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq49371){
var G__49372 = cljs.core.first(seq49371);
var seq49371__$1 = cljs.core.next(seq49371);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49372,seq49371__$1);
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
var G__49378 = arguments.length;
switch (G__49378) {
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
var c__47148__auto___49862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47149__auto__ = (function (){var switch__47065__auto__ = (function (state_49383){
var state_val_49384 = (state_49383[(1)]);
if((state_val_49384 === (1))){
var state_49383__$1 = state_49383;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_49383__$1,(2),once_or_cleanup);
} else {
if((state_val_49384 === (2))){
var inst_49380 = (state_49383[(2)]);
var inst_49381 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_49383__$1 = (function (){var statearr_49385 = state_49383;
(statearr_49385[(7)] = inst_49380);

return statearr_49385;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_49383__$1,inst_49381);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__47066__auto__ = null;
var shadow$dom$state_machine__47066__auto____0 = (function (){
var statearr_49386 = [null,null,null,null,null,null,null,null];
(statearr_49386[(0)] = shadow$dom$state_machine__47066__auto__);

(statearr_49386[(1)] = (1));

return statearr_49386;
});
var shadow$dom$state_machine__47066__auto____1 = (function (state_49383){
while(true){
var ret_value__47067__auto__ = (function (){try{while(true){
var result__47068__auto__ = switch__47065__auto__(state_49383);
if(cljs.core.keyword_identical_QMARK_(result__47068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47068__auto__;
}
break;
}
}catch (e49387){var ex__47069__auto__ = e49387;
var statearr_49388_49863 = state_49383;
(statearr_49388_49863[(2)] = ex__47069__auto__);


if(cljs.core.seq((state_49383[(4)]))){
var statearr_49389_49864 = state_49383;
(statearr_49389_49864[(1)] = cljs.core.first((state_49383[(4)])));

} else {
throw ex__47069__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49865 = state_49383;
state_49383 = G__49865;
continue;
} else {
return ret_value__47067__auto__;
}
break;
}
});
shadow$dom$state_machine__47066__auto__ = function(state_49383){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__47066__auto____0.call(this);
case 1:
return shadow$dom$state_machine__47066__auto____1.call(this,state_49383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__47066__auto____0;
shadow$dom$state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__47066__auto____1;
return shadow$dom$state_machine__47066__auto__;
})()
})();
var state__47150__auto__ = (function (){var statearr_49390 = f__47149__auto__();
(statearr_49390[(6)] = c__47148__auto___49862);

return statearr_49390;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47150__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
