goog.provide('dommy.core');
/**
 * Returns a selector in string format.
 * Accepts string, keyword, or collection.
 */
dommy.core.selector = (function dommy$core$selector(data){
if(cljs.core.coll_QMARK_(data)){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(dommy.core.selector,data));
} else {
if(((typeof data === 'string') || ((data instanceof cljs.core.Keyword)))){
return cljs.core.name(data);
} else {
return null;
}
}
});
dommy.core.text = (function dommy$core$text(elem){
var or__4212__auto__ = elem.textContent;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return elem.innerText;
}
});
dommy.core.html = (function dommy$core$html(elem){
return elem.innerHTML;
});
dommy.core.value = (function dommy$core$value(elem){
return elem.value;
});
dommy.core.class$ = (function dommy$core$class(elem){
return elem.className;
});
dommy.core.attr = (function dommy$core$attr(elem,k){
if(cljs.core.truth_(k)){
return elem.getAttribute(dommy.utils.as_str(k));
} else {
return null;
}
});
/**
 * The computed style of `elem`, optionally specifying the key of
 * a particular style to return
 */
dommy.core.style = (function dommy$core$style(var_args){
var G__71214 = arguments.length;
switch (G__71214) {
case 1:
return dommy.core.style.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.style.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.style.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(window.getComputedStyle(elem));
}));

(dommy.core.style.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return (window.getComputedStyle(elem)[dommy.utils.as_str(k)]);
}));

(dommy.core.style.cljs$lang$maxFixedArity = 2);

dommy.core.px = (function dommy$core$px(elem,k){

var pixels = dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,k);
if(cljs.core.seq(pixels)){
return parseInt(pixels);
} else {
return null;
}
});
/**
 * Does `elem` contain `c` in its class list
 */
dommy.core.has_class_QMARK_ = (function dommy$core$has_class_QMARK_(elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto__ = elem.classList;
if(cljs.core.truth_(temp__5733__auto__)){
var class_list = temp__5733__auto__;
return class_list.contains(c__$1);
} else {
var temp__5735__auto__ = dommy.core.class$(elem);
if(cljs.core.truth_(temp__5735__auto__)){
var class_name = temp__5735__auto__;
var temp__5735__auto____$1 = dommy.utils.class_index(class_name,c__$1);
if(cljs.core.truth_(temp__5735__auto____$1)){
var i = temp__5735__auto____$1;
return (i >= (0));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Is `elem` hidden (as associated with hide!/show!/toggle!, using display: none)
 */
dommy.core.hidden_QMARK_ = (function dommy$core$hidden_QMARK_(elem){
return (dommy.core.style.cljs$core$IFn$_invoke$arity$2(elem,new cljs.core.Keyword(null,"display","display",242065432)) === "none");
});
/**
 * Returns a map of the bounding client rect of `elem`
 * as a map with [:top :left :right :bottom :width :height]
 */
dommy.core.bounding_client_rect = (function dommy$core$bounding_client_rect(elem){
var r = elem.getBoundingClientRect();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"height","height",1025178622),r.height], null);
});
dommy.core.parent = (function dommy$core$parent(elem){
return elem.parentNode;
});
dommy.core.children = (function dommy$core$children(elem){
return elem.children;
});
/**
 * Lazy seq of the ancestors of `elem`
 */
dommy.core.ancestors = (function dommy$core$ancestors(elem){
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.iterate(dommy.core.parent,elem));
});
dommy.core.ancestor_nodes = dommy.core.ancestors;
/**
 * Returns a predicate on nodes that match `selector` at the
 * time of this `matches-pred` call (may return outdated results
 * if you fuck with the DOM)
 */
dommy.core.matches_pred = (function dommy$core$matches_pred(var_args){
var G__71219 = arguments.length;
switch (G__71219) {
case 2:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2 = (function (base,selector){
var matches = dommy.utils.__GT_Array(base.querySelectorAll(dommy.core.selector(selector)));
return (function (elem){
return (matches.indexOf(elem) >= (0));
});
}));

(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$1 = (function (selector){
return dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(document,selector);
}));

(dommy.core.matches_pred.cljs$lang$maxFixedArity = 2);

/**
 * Closest ancestor of `elem` (up to `base`, if provided)
 * that matches `selector`
 */
dommy.core.closest = (function dommy$core$closest(var_args){
var G__71246 = arguments.length;
switch (G__71246) {
case 3:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return dommy.core.closest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.closest.cljs$core$IFn$_invoke$arity$3 = (function (base,elem,selector){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(dommy.core.matches_pred.cljs$core$IFn$_invoke$arity$2(base,selector),cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__71244_SHARP_){
return (!((p1__71244_SHARP_ === base)));
}),dommy.core.ancestors(elem))));
}));

(dommy.core.closest.cljs$core$IFn$_invoke$arity$2 = (function (elem,selector){
return dommy.core.closest.cljs$core$IFn$_invoke$arity$3(document.body,elem,selector);
}));

(dommy.core.closest.cljs$lang$maxFixedArity = 3);

/**
 * Is `descendant` a descendant of `ancestor`?
 * (http://goo.gl/T8pgCX)
 */
dommy.core.descendant_QMARK_ = (function dommy$core$descendant_QMARK_(descendant,ancestor){
if(cljs.core.truth_(ancestor.contains)){
return ancestor.contains(descendant);
} else {
if(cljs.core.truth_(ancestor.compareDocumentPosition)){
return ((ancestor.compareDocumentPosition(descendant) & (1 << (4))) != 0);
} else {
return null;
}
}
});
/**
 * Set the textContent of `elem` to `text`, fall back to innerText
 */
dommy.core.set_text_BANG_ = (function dommy$core$set_text_BANG_(elem,text){
if((!((void 0 === elem.textContent)))){
(elem.textContent = text);
} else {
(elem.innerText = text);
}

return elem;
});
/**
 * Set the innerHTML of `elem` to `html`
 */
dommy.core.set_html_BANG_ = (function dommy$core$set_html_BANG_(elem,html){
(elem.innerHTML = html);

return elem;
});
/**
 * Set the value of `elem` to `value`
 */
dommy.core.set_value_BANG_ = (function dommy$core$set_value_BANG_(elem,value){
(elem.value = value);

return elem;
});
/**
 * Set the css class of `elem` to `elem`
 */
dommy.core.set_class_BANG_ = (function dommy$core$set_class_BANG_(elem,c){
return (elem.className = c);
});
/**
 * Set the style of `elem` using key-value pairs:
 * 
 *    (set-style! elem :display "block" :color "red")
 */
dommy.core.set_style_BANG_ = (function dommy$core$set_style_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___71623 = arguments.length;
var i__4819__auto___71624 = (0);
while(true){
if((i__4819__auto___71624 < len__4818__auto___71623)){
args__4824__auto__.push((arguments[i__4819__auto___71624]));

var G__71625 = (i__4819__auto___71624 + (1));
i__4819__auto___71624 = G__71625;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var style = elem.style;
var seq__71249_71626 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__71250_71627 = null;
var count__71251_71628 = (0);
var i__71252_71629 = (0);
while(true){
if((i__71252_71629 < count__71251_71628)){
var vec__71259_71630 = chunk__71250_71627.cljs$core$IIndexed$_nth$arity$2(null,i__71252_71629);
var k_71631 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71259_71630,(0),null);
var v_71632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71259_71630,(1),null);
style.setProperty(dommy.utils.as_str(k_71631),v_71632);


var G__71633 = seq__71249_71626;
var G__71634 = chunk__71250_71627;
var G__71635 = count__71251_71628;
var G__71636 = (i__71252_71629 + (1));
seq__71249_71626 = G__71633;
chunk__71250_71627 = G__71634;
count__71251_71628 = G__71635;
i__71252_71629 = G__71636;
continue;
} else {
var temp__5735__auto___71637 = cljs.core.seq(seq__71249_71626);
if(temp__5735__auto___71637){
var seq__71249_71638__$1 = temp__5735__auto___71637;
if(cljs.core.chunked_seq_QMARK_(seq__71249_71638__$1)){
var c__4638__auto___71639 = cljs.core.chunk_first(seq__71249_71638__$1);
var G__71640 = cljs.core.chunk_rest(seq__71249_71638__$1);
var G__71641 = c__4638__auto___71639;
var G__71642 = cljs.core.count(c__4638__auto___71639);
var G__71643 = (0);
seq__71249_71626 = G__71640;
chunk__71250_71627 = G__71641;
count__71251_71628 = G__71642;
i__71252_71629 = G__71643;
continue;
} else {
var vec__71265_71644 = cljs.core.first(seq__71249_71638__$1);
var k_71645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71265_71644,(0),null);
var v_71646 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71265_71644,(1),null);
style.setProperty(dommy.utils.as_str(k_71645),v_71646);


var G__71647 = cljs.core.next(seq__71249_71638__$1);
var G__71648 = null;
var G__71649 = (0);
var G__71650 = (0);
seq__71249_71626 = G__71647;
chunk__71250_71627 = G__71648;
count__71251_71628 = G__71649;
i__71252_71629 = G__71650;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_style_BANG_.cljs$lang$applyTo = (function (seq71247){
var G__71248 = cljs.core.first(seq71247);
var seq71247__$1 = cljs.core.next(seq71247);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71248,seq71247__$1);
}));

/**
 * Remove the style of `elem` using keywords:
 *   
 *    (remove-style! elem :display :color)
 */
dommy.core.remove_style_BANG_ = (function dommy$core$remove_style_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___71651 = arguments.length;
var i__4819__auto___71652 = (0);
while(true){
if((i__4819__auto___71652 < len__4818__auto___71651)){
args__4824__auto__.push((arguments[i__4819__auto___71652]));

var G__71653 = (i__4819__auto___71652 + (1));
i__4819__auto___71652 = G__71653;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(dommy.core.remove_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,keywords){
var style = elem.style;
var seq__71270_71654 = cljs.core.seq(keywords);
var chunk__71271_71655 = null;
var count__71272_71656 = (0);
var i__71273_71657 = (0);
while(true){
if((i__71273_71657 < count__71272_71656)){
var kw_71658 = chunk__71271_71655.cljs$core$IIndexed$_nth$arity$2(null,i__71273_71657);
style.removeProperty(dommy.utils.as_str(kw_71658));


var G__71659 = seq__71270_71654;
var G__71660 = chunk__71271_71655;
var G__71661 = count__71272_71656;
var G__71662 = (i__71273_71657 + (1));
seq__71270_71654 = G__71659;
chunk__71271_71655 = G__71660;
count__71272_71656 = G__71661;
i__71273_71657 = G__71662;
continue;
} else {
var temp__5735__auto___71663 = cljs.core.seq(seq__71270_71654);
if(temp__5735__auto___71663){
var seq__71270_71664__$1 = temp__5735__auto___71663;
if(cljs.core.chunked_seq_QMARK_(seq__71270_71664__$1)){
var c__4638__auto___71665 = cljs.core.chunk_first(seq__71270_71664__$1);
var G__71666 = cljs.core.chunk_rest(seq__71270_71664__$1);
var G__71667 = c__4638__auto___71665;
var G__71668 = cljs.core.count(c__4638__auto___71665);
var G__71669 = (0);
seq__71270_71654 = G__71666;
chunk__71271_71655 = G__71667;
count__71272_71656 = G__71668;
i__71273_71657 = G__71669;
continue;
} else {
var kw_71670 = cljs.core.first(seq__71270_71664__$1);
style.removeProperty(dommy.utils.as_str(kw_71670));


var G__71671 = cljs.core.next(seq__71270_71664__$1);
var G__71672 = null;
var G__71673 = (0);
var G__71674 = (0);
seq__71270_71654 = G__71671;
chunk__71271_71655 = G__71672;
count__71272_71656 = G__71673;
i__71273_71657 = G__71674;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.remove_style_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.remove_style_BANG_.cljs$lang$applyTo = (function (seq71268){
var G__71269 = cljs.core.first(seq71268);
var seq71268__$1 = cljs.core.next(seq71268);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71269,seq71268__$1);
}));

dommy.core.set_px_BANG_ = (function dommy$core$set_px_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___71675 = arguments.length;
var i__4819__auto___71676 = (0);
while(true){
if((i__4819__auto___71676 < len__4818__auto___71675)){
args__4824__auto__.push((arguments[i__4819__auto___71676]));

var G__71677 = (i__4819__auto___71676 + (1));
i__4819__auto___71676 = G__71677;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(dommy.core.set_px_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,kvs){

if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__71279_71678 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
var chunk__71280_71679 = null;
var count__71281_71680 = (0);
var i__71282_71681 = (0);
while(true){
if((i__71282_71681 < count__71281_71680)){
var vec__71289_71682 = chunk__71280_71679.cljs$core$IIndexed$_nth$arity$2(null,i__71282_71681);
var k_71683 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71289_71682,(0),null);
var v_71684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71289_71682,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_71683,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_71684),"px"].join('')], 0));


var G__71685 = seq__71279_71678;
var G__71686 = chunk__71280_71679;
var G__71687 = count__71281_71680;
var G__71688 = (i__71282_71681 + (1));
seq__71279_71678 = G__71685;
chunk__71280_71679 = G__71686;
count__71281_71680 = G__71687;
i__71282_71681 = G__71688;
continue;
} else {
var temp__5735__auto___71689 = cljs.core.seq(seq__71279_71678);
if(temp__5735__auto___71689){
var seq__71279_71690__$1 = temp__5735__auto___71689;
if(cljs.core.chunked_seq_QMARK_(seq__71279_71690__$1)){
var c__4638__auto___71691 = cljs.core.chunk_first(seq__71279_71690__$1);
var G__71692 = cljs.core.chunk_rest(seq__71279_71690__$1);
var G__71693 = c__4638__auto___71691;
var G__71694 = cljs.core.count(c__4638__auto___71691);
var G__71695 = (0);
seq__71279_71678 = G__71692;
chunk__71280_71679 = G__71693;
count__71281_71680 = G__71694;
i__71282_71681 = G__71695;
continue;
} else {
var vec__71292_71696 = cljs.core.first(seq__71279_71690__$1);
var k_71697 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71292_71696,(0),null);
var v_71698 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71292_71696,(1),null);
dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k_71697,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v_71698),"px"].join('')], 0));


var G__71699 = cljs.core.next(seq__71279_71690__$1);
var G__71700 = null;
var G__71701 = (0);
var G__71702 = (0);
seq__71279_71678 = G__71699;
chunk__71280_71679 = G__71700;
count__71281_71680 = G__71701;
i__71282_71681 = G__71702;
continue;
}
} else {
}
}
break;
}

return elem;
}));

(dommy.core.set_px_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.set_px_BANG_.cljs$lang$applyTo = (function (seq71277){
var G__71278 = cljs.core.first(seq71277);
var seq71277__$1 = cljs.core.next(seq71277);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71278,seq71277__$1);
}));

/**
 * Sets dom attributes on and returns `elem`.
 * Attributes without values will be set to their name:
 * 
 *     (set-attr! elem :disabled)
 * 
 * With values, the function takes variadic kv pairs:
 * 
 *     (set-attr! elem :id "some-id"
 *                     :name "some-name")
 */
dommy.core.set_attr_BANG_ = (function dommy$core$set_attr_BANG_(var_args){
var G__71301 = arguments.length;
switch (G__71301) {
case 2:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___71704 = arguments.length;
var i__4819__auto___71705 = (0);
while(true){
if((i__4819__auto___71705 < len__4818__auto___71704)){
args_arr__4839__auto__.push((arguments[i__4819__auto___71705]));

var G__71706 = (i__4819__auto___71705 + (1));
i__4819__auto___71705 = G__71706;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((3)),(0),null));
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4840__auto__);

}
});

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,dommy.utils.as_str(k));
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,v){
var k__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_(v)){
if(cljs.core.fn_QMARK_(v)){
var G__71304 = elem;
(G__71304[k__$1] = v);

return G__71304;
} else {
var G__71305 = elem;
G__71305.setAttribute(k__$1,v);

return G__71305;
}
} else {
return null;
}
}));

(dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,v,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error("Assert failed: (even? (count kvs))"));
}

var seq__71306_71707 = cljs.core.seq(cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs)));
var chunk__71307_71708 = null;
var count__71308_71709 = (0);
var i__71309_71710 = (0);
while(true){
if((i__71309_71710 < count__71308_71709)){
var vec__71318_71711 = chunk__71307_71708.cljs$core$IIndexed$_nth$arity$2(null,i__71309_71710);
var k_71712__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71318_71711,(0),null);
var v_71713__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71318_71711,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_71712__$1,v_71713__$1);


var G__71714 = seq__71306_71707;
var G__71715 = chunk__71307_71708;
var G__71716 = count__71308_71709;
var G__71717 = (i__71309_71710 + (1));
seq__71306_71707 = G__71714;
chunk__71307_71708 = G__71715;
count__71308_71709 = G__71716;
i__71309_71710 = G__71717;
continue;
} else {
var temp__5735__auto___71718 = cljs.core.seq(seq__71306_71707);
if(temp__5735__auto___71718){
var seq__71306_71719__$1 = temp__5735__auto___71718;
if(cljs.core.chunked_seq_QMARK_(seq__71306_71719__$1)){
var c__4638__auto___71720 = cljs.core.chunk_first(seq__71306_71719__$1);
var G__71721 = cljs.core.chunk_rest(seq__71306_71719__$1);
var G__71722 = c__4638__auto___71720;
var G__71723 = cljs.core.count(c__4638__auto___71720);
var G__71724 = (0);
seq__71306_71707 = G__71721;
chunk__71307_71708 = G__71722;
count__71308_71709 = G__71723;
i__71309_71710 = G__71724;
continue;
} else {
var vec__71322_71725 = cljs.core.first(seq__71306_71719__$1);
var k_71726__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71322_71725,(0),null);
var v_71727__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71322_71725,(1),null);
dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k_71726__$1,v_71727__$1);


var G__71728 = cljs.core.next(seq__71306_71719__$1);
var G__71729 = null;
var G__71730 = (0);
var G__71731 = (0);
seq__71306_71707 = G__71728;
chunk__71307_71708 = G__71729;
count__71308_71709 = G__71730;
i__71309_71710 = G__71731;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.set_attr_BANG_.cljs$lang$applyTo = (function (seq71297){
var G__71298 = cljs.core.first(seq71297);
var seq71297__$1 = cljs.core.next(seq71297);
var G__71299 = cljs.core.first(seq71297__$1);
var seq71297__$2 = cljs.core.next(seq71297__$1);
var G__71300 = cljs.core.first(seq71297__$2);
var seq71297__$3 = cljs.core.next(seq71297__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71298,G__71299,G__71300,seq71297__$3);
}));

(dommy.core.set_attr_BANG_.cljs$lang$maxFixedArity = (3));

/**
 * Removes dom attributes on and returns `elem`.
 * `class` and `classes` are special cases which clear
 * out the class name on removal.
 */
dommy.core.remove_attr_BANG_ = (function dommy$core$remove_attr_BANG_(var_args){
var G__71329 = arguments.length;
switch (G__71329) {
case 2:
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___71733 = arguments.length;
var i__4819__auto___71734 = (0);
while(true){
if((i__4819__auto___71734 < len__4818__auto___71733)){
args_arr__4839__auto__.push((arguments[i__4819__auto___71734]));

var G__71735 = (i__4819__auto___71734 + (1));
i__4819__auto___71734 = G__71735;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
var k_71736__$1 = dommy.utils.as_str(k);
if(cljs.core.truth_((function (){var fexpr__71330 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["class",null,"classes",null], null), null);
return (fexpr__71330.cljs$core$IFn$_invoke$arity$1 ? fexpr__71330.cljs$core$IFn$_invoke$arity$1(k_71736__$1) : fexpr__71330.call(null,k_71736__$1));
})())){
dommy.core.set_class_BANG_(elem,"");
} else {
elem.removeAttribute(k_71736__$1);
}

return elem;
}));

(dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,k,ks){
var seq__71331_71737 = cljs.core.seq(cljs.core.cons(k,ks));
var chunk__71332_71738 = null;
var count__71333_71739 = (0);
var i__71334_71740 = (0);
while(true){
if((i__71334_71740 < count__71333_71739)){
var k_71741__$1 = chunk__71332_71738.cljs$core$IIndexed$_nth$arity$2(null,i__71334_71740);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_71741__$1);


var G__71742 = seq__71331_71737;
var G__71743 = chunk__71332_71738;
var G__71744 = count__71333_71739;
var G__71745 = (i__71334_71740 + (1));
seq__71331_71737 = G__71742;
chunk__71332_71738 = G__71743;
count__71333_71739 = G__71744;
i__71334_71740 = G__71745;
continue;
} else {
var temp__5735__auto___71746 = cljs.core.seq(seq__71331_71737);
if(temp__5735__auto___71746){
var seq__71331_71747__$1 = temp__5735__auto___71746;
if(cljs.core.chunked_seq_QMARK_(seq__71331_71747__$1)){
var c__4638__auto___71748 = cljs.core.chunk_first(seq__71331_71747__$1);
var G__71749 = cljs.core.chunk_rest(seq__71331_71747__$1);
var G__71750 = c__4638__auto___71748;
var G__71751 = cljs.core.count(c__4638__auto___71748);
var G__71752 = (0);
seq__71331_71737 = G__71749;
chunk__71332_71738 = G__71750;
count__71333_71739 = G__71751;
i__71334_71740 = G__71752;
continue;
} else {
var k_71753__$1 = cljs.core.first(seq__71331_71747__$1);
dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k_71753__$1);


var G__71754 = cljs.core.next(seq__71331_71747__$1);
var G__71755 = null;
var G__71756 = (0);
var G__71757 = (0);
seq__71331_71737 = G__71754;
chunk__71332_71738 = G__71755;
count__71333_71739 = G__71756;
i__71334_71740 = G__71757;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.remove_attr_BANG_.cljs$lang$applyTo = (function (seq71326){
var G__71327 = cljs.core.first(seq71326);
var seq71326__$1 = cljs.core.next(seq71326);
var G__71328 = cljs.core.first(seq71326__$1);
var seq71326__$2 = cljs.core.next(seq71326__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71327,G__71328,seq71326__$2);
}));

(dommy.core.remove_attr_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Toggles a dom attribute `k` on `elem`, optionally specifying
 * the boolean value with `add?`
 */
dommy.core.toggle_attr_BANG_ = (function dommy$core$toggle_attr_BANG_(var_args){
var G__71340 = arguments.length;
switch (G__71340) {
case 2:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,k){
return dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3(elem,k,cljs.core.boolean$(dommy.core.attr(elem,k)));
}));

(dommy.core.toggle_attr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,k,add_QMARK_){
if(add_QMARK_){
return dommy.core.set_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
} else {
return dommy.core.remove_attr_BANG_.cljs$core$IFn$_invoke$arity$2(elem,k);
}
}));

(dommy.core.toggle_attr_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Add `classes` to `elem`, trying to use Element::classList, and
 * falling back to fast string parsing/manipulation
 */
dommy.core.add_class_BANG_ = (function dommy$core$add_class_BANG_(var_args){
var G__71345 = arguments.length;
switch (G__71345) {
case 2:
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___71760 = arguments.length;
var i__4819__auto___71761 = (0);
while(true){
if((i__4819__auto___71761 < len__4818__auto___71760)){
args_arr__4839__auto__.push((arguments[i__4819__auto___71761]));

var G__71762 = (i__4819__auto___71761 + (1));
i__4819__auto___71761 = G__71762;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,classes){
var classes__$1 = clojure.string.trim(dommy.utils.as_str(classes)).split(/\s+/);
if(cljs.core.seq(classes__$1)){
var temp__5733__auto___71763 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___71763)){
var class_list_71764 = temp__5733__auto___71763;
var seq__71346_71765 = cljs.core.seq(classes__$1);
var chunk__71347_71766 = null;
var count__71348_71767 = (0);
var i__71349_71768 = (0);
while(true){
if((i__71349_71768 < count__71348_71767)){
var c_71769 = chunk__71347_71766.cljs$core$IIndexed$_nth$arity$2(null,i__71349_71768);
class_list_71764.add(c_71769);


var G__71770 = seq__71346_71765;
var G__71771 = chunk__71347_71766;
var G__71772 = count__71348_71767;
var G__71773 = (i__71349_71768 + (1));
seq__71346_71765 = G__71770;
chunk__71347_71766 = G__71771;
count__71348_71767 = G__71772;
i__71349_71768 = G__71773;
continue;
} else {
var temp__5735__auto___71774 = cljs.core.seq(seq__71346_71765);
if(temp__5735__auto___71774){
var seq__71346_71775__$1 = temp__5735__auto___71774;
if(cljs.core.chunked_seq_QMARK_(seq__71346_71775__$1)){
var c__4638__auto___71776 = cljs.core.chunk_first(seq__71346_71775__$1);
var G__71777 = cljs.core.chunk_rest(seq__71346_71775__$1);
var G__71778 = c__4638__auto___71776;
var G__71779 = cljs.core.count(c__4638__auto___71776);
var G__71780 = (0);
seq__71346_71765 = G__71777;
chunk__71347_71766 = G__71778;
count__71348_71767 = G__71779;
i__71349_71768 = G__71780;
continue;
} else {
var c_71781 = cljs.core.first(seq__71346_71775__$1);
class_list_71764.add(c_71781);


var G__71782 = cljs.core.next(seq__71346_71775__$1);
var G__71783 = null;
var G__71784 = (0);
var G__71785 = (0);
seq__71346_71765 = G__71782;
chunk__71347_71766 = G__71783;
count__71348_71767 = G__71784;
i__71349_71768 = G__71785;
continue;
}
} else {
}
}
break;
}
} else {
var seq__71350_71786 = cljs.core.seq(classes__$1);
var chunk__71351_71787 = null;
var count__71352_71788 = (0);
var i__71353_71789 = (0);
while(true){
if((i__71353_71789 < count__71352_71788)){
var c_71790 = chunk__71351_71787.cljs$core$IIndexed$_nth$arity$2(null,i__71353_71789);
var class_name_71791 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_71791,c_71790))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_71791 === ""))?c_71790:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_71791)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_71790)].join('')));
}


var G__71792 = seq__71350_71786;
var G__71793 = chunk__71351_71787;
var G__71794 = count__71352_71788;
var G__71795 = (i__71353_71789 + (1));
seq__71350_71786 = G__71792;
chunk__71351_71787 = G__71793;
count__71352_71788 = G__71794;
i__71353_71789 = G__71795;
continue;
} else {
var temp__5735__auto___71796 = cljs.core.seq(seq__71350_71786);
if(temp__5735__auto___71796){
var seq__71350_71797__$1 = temp__5735__auto___71796;
if(cljs.core.chunked_seq_QMARK_(seq__71350_71797__$1)){
var c__4638__auto___71798 = cljs.core.chunk_first(seq__71350_71797__$1);
var G__71799 = cljs.core.chunk_rest(seq__71350_71797__$1);
var G__71800 = c__4638__auto___71798;
var G__71801 = cljs.core.count(c__4638__auto___71798);
var G__71802 = (0);
seq__71350_71786 = G__71799;
chunk__71351_71787 = G__71800;
count__71352_71788 = G__71801;
i__71353_71789 = G__71802;
continue;
} else {
var c_71803 = cljs.core.first(seq__71350_71797__$1);
var class_name_71804 = dommy.core.class$(elem);
if(cljs.core.truth_(dommy.utils.class_index(class_name_71804,c_71803))){
} else {
dommy.core.set_class_BANG_(elem,(((class_name_71804 === ""))?c_71803:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class_name_71804)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c_71803)].join('')));
}


var G__71805 = cljs.core.next(seq__71350_71797__$1);
var G__71806 = null;
var G__71807 = (0);
var G__71808 = (0);
seq__71350_71786 = G__71805;
chunk__71351_71787 = G__71806;
count__71352_71788 = G__71807;
i__71353_71789 = G__71808;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return elem;
}));

(dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,classes,more_classes){
var seq__71354_71809 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more_classes,classes));
var chunk__71355_71810 = null;
var count__71356_71811 = (0);
var i__71357_71812 = (0);
while(true){
if((i__71357_71812 < count__71356_71811)){
var c_71813 = chunk__71355_71810.cljs$core$IIndexed$_nth$arity$2(null,i__71357_71812);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_71813);


var G__71814 = seq__71354_71809;
var G__71815 = chunk__71355_71810;
var G__71816 = count__71356_71811;
var G__71817 = (i__71357_71812 + (1));
seq__71354_71809 = G__71814;
chunk__71355_71810 = G__71815;
count__71356_71811 = G__71816;
i__71357_71812 = G__71817;
continue;
} else {
var temp__5735__auto___71818 = cljs.core.seq(seq__71354_71809);
if(temp__5735__auto___71818){
var seq__71354_71819__$1 = temp__5735__auto___71818;
if(cljs.core.chunked_seq_QMARK_(seq__71354_71819__$1)){
var c__4638__auto___71820 = cljs.core.chunk_first(seq__71354_71819__$1);
var G__71821 = cljs.core.chunk_rest(seq__71354_71819__$1);
var G__71822 = c__4638__auto___71820;
var G__71823 = cljs.core.count(c__4638__auto___71820);
var G__71824 = (0);
seq__71354_71809 = G__71821;
chunk__71355_71810 = G__71822;
count__71356_71811 = G__71823;
i__71357_71812 = G__71824;
continue;
} else {
var c_71825 = cljs.core.first(seq__71354_71819__$1);
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c_71825);


var G__71826 = cljs.core.next(seq__71354_71819__$1);
var G__71827 = null;
var G__71828 = (0);
var G__71829 = (0);
seq__71354_71809 = G__71826;
chunk__71355_71810 = G__71827;
count__71356_71811 = G__71828;
i__71357_71812 = G__71829;
continue;
}
} else {
}
}
break;
}

return elem;
}));

/** @this {Function} */
(dommy.core.add_class_BANG_.cljs$lang$applyTo = (function (seq71342){
var G__71343 = cljs.core.first(seq71342);
var seq71342__$1 = cljs.core.next(seq71342);
var G__71344 = cljs.core.first(seq71342__$1);
var seq71342__$2 = cljs.core.next(seq71342__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71343,G__71344,seq71342__$2);
}));

(dommy.core.add_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Remove `c` from `elem` class list
 */
dommy.core.remove_class_BANG_ = (function dommy$core$remove_class_BANG_(var_args){
var G__71362 = arguments.length;
switch (G__71362) {
case 2:
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___71831 = arguments.length;
var i__4819__auto___71832 = (0);
while(true){
if((i__4819__auto___71832 < len__4818__auto___71831)){
args_arr__4839__auto__.push((arguments[i__4819__auto___71832]));

var G__71833 = (i__4819__auto___71832 + (1));
i__4819__auto___71832 = G__71833;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___71834 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___71834)){
var class_list_71835 = temp__5733__auto___71834;
class_list_71835.remove(c__$1);
} else {
var class_name_71836 = dommy.core.class$(elem);
var new_class_name_71837 = dommy.utils.remove_class_str(class_name_71836,c__$1);
if((class_name_71836 === new_class_name_71837)){
} else {
dommy.core.set_class_BANG_(elem,new_class_name_71837);
}
}

return elem;
}));

(dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,class$,classes){
var seq__71363 = cljs.core.seq(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(classes,class$));
var chunk__71364 = null;
var count__71365 = (0);
var i__71366 = (0);
while(true){
if((i__71366 < count__71365)){
var c = chunk__71364.cljs$core$IIndexed$_nth$arity$2(null,i__71366);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__71838 = seq__71363;
var G__71839 = chunk__71364;
var G__71840 = count__71365;
var G__71841 = (i__71366 + (1));
seq__71363 = G__71838;
chunk__71364 = G__71839;
count__71365 = G__71840;
i__71366 = G__71841;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__71363);
if(temp__5735__auto__){
var seq__71363__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__71363__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__71363__$1);
var G__71842 = cljs.core.chunk_rest(seq__71363__$1);
var G__71843 = c__4638__auto__;
var G__71844 = cljs.core.count(c__4638__auto__);
var G__71845 = (0);
seq__71363 = G__71842;
chunk__71364 = G__71843;
count__71365 = G__71844;
i__71366 = G__71845;
continue;
} else {
var c = cljs.core.first(seq__71363__$1);
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,c);


var G__71846 = cljs.core.next(seq__71363__$1);
var G__71847 = null;
var G__71848 = (0);
var G__71849 = (0);
seq__71363 = G__71846;
chunk__71364 = G__71847;
count__71365 = G__71848;
i__71366 = G__71849;
continue;
}
} else {
return null;
}
}
break;
}
}));

/** @this {Function} */
(dommy.core.remove_class_BANG_.cljs$lang$applyTo = (function (seq71359){
var G__71360 = cljs.core.first(seq71359);
var seq71359__$1 = cljs.core.next(seq71359);
var G__71361 = cljs.core.first(seq71359__$1);
var seq71359__$2 = cljs.core.next(seq71359__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71360,G__71361,seq71359__$2);
}));

(dommy.core.remove_class_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * (toggle-class! elem class) will add-class! if elem does not have class
 * and remove-class! otherwise.
 * (toggle-class! elem class add?) will add-class! if add? is truthy,
 * otherwise it will remove-class!
 */
dommy.core.toggle_class_BANG_ = (function dommy$core$toggle_class_BANG_(var_args){
var G__71368 = arguments.length;
switch (G__71368) {
case 2:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,c){
var c__$1 = dommy.utils.as_str(c);
var temp__5733__auto___71851 = elem.classList;
if(cljs.core.truth_(temp__5733__auto___71851)){
var class_list_71852 = temp__5733__auto___71851;
class_list_71852.toggle(c__$1);
} else {
dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3(elem,c__$1,(!(dommy.core.has_class_QMARK_(elem,c__$1))));
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (elem,class$,add_QMARK_){
if(add_QMARK_){
dommy.core.add_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
} else {
dommy.core.remove_class_BANG_.cljs$core$IFn$_invoke$arity$2(elem,class$);
}

return elem;
}));

(dommy.core.toggle_class_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Display or hide the given `elem` (using display: none).
 * Takes an optional boolean `show?`
 */
dommy.core.toggle_BANG_ = (function dommy$core$toggle_BANG_(var_args){
var G__71370 = arguments.length;
switch (G__71370) {
case 2:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (elem,show_QMARK_){
return dommy.core.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display","display",242065432),((show_QMARK_)?"":"none")], 0));
}));

(dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,dommy.core.hidden_QMARK_(elem));
}));

(dommy.core.toggle_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.hide_BANG_ = (function dommy$core$hide_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,false);
});
dommy.core.show_BANG_ = (function dommy$core$show_BANG_(elem){
return dommy.core.toggle_BANG_.cljs$core$IFn$_invoke$arity$2(elem,true);
});
dommy.core.scroll_into_view = (function dommy$core$scroll_into_view(elem,align_with_top_QMARK_){
var top = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(dommy.core.bounding_client_rect(elem));
if((window.innerHeight < (top + elem.offsetHeight))){
return elem.scrollIntoView(align_with_top_QMARK_);
} else {
return null;
}
});
dommy.core.create_element = (function dommy$core$create_element(var_args){
var G__71372 = arguments.length;
switch (G__71372) {
case 1:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.create_element.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$1 = (function (tag){
return document.createElement(dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$core$IFn$_invoke$arity$2 = (function (tag_ns,tag){
return document.createElementNS(dommy.utils.as_str(tag_ns),dommy.utils.as_str(tag));
}));

(dommy.core.create_element.cljs$lang$maxFixedArity = 2);

dommy.core.create_text_node = (function dommy$core$create_text_node(text){
return document.createTextNode(text);
});
/**
 * Clears all children from `elem`
 */
dommy.core.clear_BANG_ = (function dommy$core$clear_BANG_(elem){
return dommy.core.set_html_BANG_(elem,"");
});
/**
 * Append `child` to `parent`
 */
dommy.core.append_BANG_ = (function dommy$core$append_BANG_(var_args){
var G__71377 = arguments.length;
switch (G__71377) {
case 2:
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___71856 = arguments.length;
var i__4819__auto___71857 = (0);
while(true){
if((i__4819__auto___71857 < len__4818__auto___71856)){
args_arr__4839__auto__.push((arguments[i__4819__auto___71857]));

var G__71858 = (i__4819__auto___71857 + (1));
i__4819__auto___71857 = G__71858;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__71378 = parent;
G__71378.appendChild(child);

return G__71378;
}));

(dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__71379_71859 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__71380_71860 = null;
var count__71381_71861 = (0);
var i__71382_71862 = (0);
while(true){
if((i__71382_71862 < count__71381_71861)){
var c_71863 = chunk__71380_71860.cljs$core$IIndexed$_nth$arity$2(null,i__71382_71862);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_71863);


var G__71864 = seq__71379_71859;
var G__71865 = chunk__71380_71860;
var G__71866 = count__71381_71861;
var G__71867 = (i__71382_71862 + (1));
seq__71379_71859 = G__71864;
chunk__71380_71860 = G__71865;
count__71381_71861 = G__71866;
i__71382_71862 = G__71867;
continue;
} else {
var temp__5735__auto___71868 = cljs.core.seq(seq__71379_71859);
if(temp__5735__auto___71868){
var seq__71379_71869__$1 = temp__5735__auto___71868;
if(cljs.core.chunked_seq_QMARK_(seq__71379_71869__$1)){
var c__4638__auto___71870 = cljs.core.chunk_first(seq__71379_71869__$1);
var G__71871 = cljs.core.chunk_rest(seq__71379_71869__$1);
var G__71872 = c__4638__auto___71870;
var G__71873 = cljs.core.count(c__4638__auto___71870);
var G__71874 = (0);
seq__71379_71859 = G__71871;
chunk__71380_71860 = G__71872;
count__71381_71861 = G__71873;
i__71382_71862 = G__71874;
continue;
} else {
var c_71875 = cljs.core.first(seq__71379_71869__$1);
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_71875);


var G__71876 = cljs.core.next(seq__71379_71869__$1);
var G__71877 = null;
var G__71878 = (0);
var G__71879 = (0);
seq__71379_71859 = G__71876;
chunk__71380_71860 = G__71877;
count__71381_71861 = G__71878;
i__71382_71862 = G__71879;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.append_BANG_.cljs$lang$applyTo = (function (seq71374){
var G__71375 = cljs.core.first(seq71374);
var seq71374__$1 = cljs.core.next(seq71374);
var G__71376 = cljs.core.first(seq71374__$1);
var seq71374__$2 = cljs.core.next(seq71374__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71375,G__71376,seq71374__$2);
}));

(dommy.core.append_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Prepend `child` to `parent`
 */
dommy.core.prepend_BANG_ = (function dommy$core$prepend_BANG_(var_args){
var G__71387 = arguments.length;
switch (G__71387) {
case 2:
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___71881 = arguments.length;
var i__4819__auto___71882 = (0);
while(true){
if((i__4819__auto___71882 < len__4818__auto___71881)){
args_arr__4839__auto__.push((arguments[i__4819__auto___71882]));

var G__71883 = (i__4819__auto___71882 + (1));
i__4819__auto___71882 = G__71883;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (parent,child){
var G__71388 = parent;
G__71388.insertBefore(child,parent.firstChild);

return G__71388;
}));

(dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (parent,child,more_children){
var seq__71389_71884 = cljs.core.seq(cljs.core.cons(child,more_children));
var chunk__71390_71885 = null;
var count__71391_71886 = (0);
var i__71392_71887 = (0);
while(true){
if((i__71392_71887 < count__71391_71886)){
var c_71888 = chunk__71390_71885.cljs$core$IIndexed$_nth$arity$2(null,i__71392_71887);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_71888);


var G__71889 = seq__71389_71884;
var G__71890 = chunk__71390_71885;
var G__71891 = count__71391_71886;
var G__71892 = (i__71392_71887 + (1));
seq__71389_71884 = G__71889;
chunk__71390_71885 = G__71890;
count__71391_71886 = G__71891;
i__71392_71887 = G__71892;
continue;
} else {
var temp__5735__auto___71893 = cljs.core.seq(seq__71389_71884);
if(temp__5735__auto___71893){
var seq__71389_71894__$1 = temp__5735__auto___71893;
if(cljs.core.chunked_seq_QMARK_(seq__71389_71894__$1)){
var c__4638__auto___71895 = cljs.core.chunk_first(seq__71389_71894__$1);
var G__71896 = cljs.core.chunk_rest(seq__71389_71894__$1);
var G__71897 = c__4638__auto___71895;
var G__71898 = cljs.core.count(c__4638__auto___71895);
var G__71899 = (0);
seq__71389_71884 = G__71896;
chunk__71390_71885 = G__71897;
count__71391_71886 = G__71898;
i__71392_71887 = G__71899;
continue;
} else {
var c_71900 = cljs.core.first(seq__71389_71894__$1);
dommy.core.prepend_BANG_.cljs$core$IFn$_invoke$arity$2(parent,c_71900);


var G__71901 = cljs.core.next(seq__71389_71894__$1);
var G__71902 = null;
var G__71903 = (0);
var G__71904 = (0);
seq__71389_71884 = G__71901;
chunk__71390_71885 = G__71902;
count__71391_71886 = G__71903;
i__71392_71887 = G__71904;
continue;
}
} else {
}
}
break;
}

return parent;
}));

/** @this {Function} */
(dommy.core.prepend_BANG_.cljs$lang$applyTo = (function (seq71384){
var G__71385 = cljs.core.first(seq71384);
var seq71384__$1 = cljs.core.next(seq71384);
var G__71386 = cljs.core.first(seq71384__$1);
var seq71384__$2 = cljs.core.next(seq71384__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71385,G__71386,seq71384__$2);
}));

(dommy.core.prepend_BANG_.cljs$lang$maxFixedArity = (2));

/**
 * Insert `elem` before `other`, `other` must have a parent
 */
dommy.core.insert_before_BANG_ = (function dommy$core$insert_before_BANG_(elem,other){
var p = dommy.core.parent(other);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.insertBefore(elem,other);

return elem;
});
/**
 * Insert `elem` after `other`, `other` must have a parent
 */
dommy.core.insert_after_BANG_ = (function dommy$core$insert_after_BANG_(elem,other){
var temp__5733__auto___71905 = other.nextSibling;
if(cljs.core.truth_(temp__5733__auto___71905)){
var next_71906 = temp__5733__auto___71905;
dommy.core.insert_before_BANG_(elem,next_71906);
} else {
dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.parent(other),elem);
}

return elem;
});
/**
 * Replace `elem` with `new`, return `new`
 */
dommy.core.replace_BANG_ = (function dommy$core$replace_BANG_(elem,new$){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

p.replaceChild(new$,elem);

return new$;
});
/**
 * Replace children of `elem` with `child`
 */
dommy.core.replace_contents_BANG_ = (function dommy$core$replace_contents_BANG_(p,child){
return dommy.core.append_BANG_.cljs$core$IFn$_invoke$arity$2(dommy.core.clear_BANG_(p),child);
});
/**
 * Remove `elem` from `parent`, return `parent`
 */
dommy.core.remove_BANG_ = (function dommy$core$remove_BANG_(var_args){
var G__71394 = arguments.length;
switch (G__71394) {
case 1:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (elem){
var p = dommy.core.parent(elem);
if(cljs.core.truth_(p)){
} else {
throw (new Error(["Assert failed: ","Target element must have a parent","\n","p"].join('')));
}

return dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2(p,elem);
}));

(dommy.core.remove_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (p,elem){
var G__71395 = p;
G__71395.removeChild(elem);

return G__71395;
}));

(dommy.core.remove_BANG_.cljs$lang$maxFixedArity = 2);

dommy.core.special_listener_makers = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__71396){
var vec__71397 = p__71396;
var special_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71397,(0),null);
var real_mouse_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71397,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [special_mouse_event,cljs.core.PersistentArrayMap.createAsIfByAssoc([real_mouse_event,(function (f){
return (function (event){
var related_target = event.relatedTarget;
var listener_target = (function (){var or__4212__auto__ = event.selectedTarget;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return event.currentTarget;
}
})();
if(cljs.core.truth_((function (){var and__4210__auto__ = related_target;
if(cljs.core.truth_(and__4210__auto__)){
return dommy.core.descendant_QMARK_(related_target,listener_target);
} else {
return and__4210__auto__;
}
})())){
return null;
} else {
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
}
});
})])], null);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mouseenter","mouseenter",-1792413560),new cljs.core.Keyword(null,"mouseover","mouseover",-484272303),new cljs.core.Keyword(null,"mouseleave","mouseleave",531566580),new cljs.core.Keyword(null,"mouseout","mouseout",2049446890)], null)));
/**
 * fires f if event.target is found with `selector`
 */
dommy.core.live_listener = (function dommy$core$live_listener(elem,selector,f){
return (function (event){
var selected_target = dommy.core.closest.cljs$core$IFn$_invoke$arity$3(elem,event.target,selector);
if(cljs.core.truth_((function (){var and__4210__auto__ = selected_target;
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not(dommy.core.attr(selected_target,new cljs.core.Keyword(null,"disabled","disabled",-1529784218)));
} else {
return and__4210__auto__;
}
})())){
(event.selectedTarget = selected_target);

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(event) : f.call(null,event));
} else {
return null;
}
});
});
/**
 * Returns a nested map of event listeners on `elem`
 */
dommy.core.event_listeners = (function dommy$core$event_listeners(elem){
var or__4212__auto__ = elem.dommyEventListeners;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
dommy.core.update_event_listeners_BANG_ = (function dommy$core$update_event_listeners_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___71913 = arguments.length;
var i__4819__auto___71914 = (0);
while(true){
if((i__4819__auto___71914 < len__4818__auto___71913)){
args__4824__auto__.push((arguments[i__4819__auto___71914]));

var G__71915 = (i__4819__auto___71914 + (1));
i__4819__auto___71914 = G__71915;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((2) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((2)),(0),null)):null);
return dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4825__auto__);
});

(dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem,f,args){
var elem__$1 = elem;
return (elem__$1.dommyEventListeners = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,dommy.core.event_listeners(elem__$1),args));
}));

(dommy.core.update_event_listeners_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(dommy.core.update_event_listeners_BANG_.cljs$lang$applyTo = (function (seq71400){
var G__71401 = cljs.core.first(seq71400);
var seq71400__$1 = cljs.core.next(seq71400);
var G__71402 = cljs.core.first(seq71400__$1);
var seq71400__$2 = cljs.core.next(seq71400__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71401,G__71402,seq71400__$2);
}));

dommy.core.elem_and_selector = (function dommy$core$elem_and_selector(elem_sel){
if(cljs.core.sequential_QMARK_(elem_sel)){
return cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.rest)(elem_sel);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [elem_sel,null], null);
}
});
/**
 * Adds `f` as a listener for events of type `event-type` on
 * `elem-sel`, which must either be a DOM node, or a sequence
 * whose first item is a DOM node.
 * 
 * In other words, the call to `listen!` can take two forms:
 * 
 * If `elem-sel` is a DOM node, i.e., you're doing something like:
 * 
 *     (listen! elem :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on the `elem`.
 * 
 * If `elem-sel` is a sequence:
 * 
 *     (listen! [elem :.selector.for :.some.descendants] :click click-handler)
 * 
 * then `click-handler` will be set as a listener for `click` events
 * on descendants of `elem` that match the selector
 * 
 * Also accepts any number of event-type and handler pairs for setting
 * multiple listeners at once:
 * 
 *     (listen! some-elem :click click-handler :hover hover-handler)
 */
dommy.core.listen_BANG_ = (function dommy$core$listen_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___71917 = arguments.length;
var i__4819__auto___71918 = (0);
while(true){
if((i__4819__auto___71918 < len__4818__auto___71917)){
args__4824__auto__.push((arguments[i__4819__auto___71918]));

var G__71919 = (i__4819__auto___71918 + (1));
i__4819__auto___71918 = G__71919;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__71405_71920 = dommy.core.elem_and_selector(elem_sel);
var elem_71921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71405_71920,(0),null);
var selector_71922 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71405_71920,(1),null);
var seq__71408_71923 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__71415_71924 = null;
var count__71416_71925 = (0);
var i__71417_71926 = (0);
while(true){
if((i__71417_71926 < count__71416_71925)){
var vec__71470_71927 = chunk__71415_71924.cljs$core$IIndexed$_nth$arity$2(null,i__71417_71926);
var orig_type_71928 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71470_71927,(0),null);
var f_71929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71470_71927,(1),null);
var seq__71418_71930 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_71928,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_71928,cljs.core.identity])));
var chunk__71420_71931 = null;
var count__71421_71932 = (0);
var i__71422_71933 = (0);
while(true){
if((i__71422_71933 < count__71421_71932)){
var vec__71483_71934 = chunk__71420_71931.cljs$core$IIndexed$_nth$arity$2(null,i__71422_71933);
var actual_type_71935 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71483_71934,(0),null);
var factory_71936 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71483_71934,(1),null);
var canonical_f_71937 = (function (){var G__71487 = (factory_71936.cljs$core$IFn$_invoke$arity$1 ? factory_71936.cljs$core$IFn$_invoke$arity$1(f_71929) : factory_71936.call(null,f_71929));
var fexpr__71486 = (cljs.core.truth_(selector_71922)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_71921,selector_71922):cljs.core.identity);
return (fexpr__71486.cljs$core$IFn$_invoke$arity$1 ? fexpr__71486.cljs$core$IFn$_invoke$arity$1(G__71487) : fexpr__71486.call(null,G__71487));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_71921,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_71922,actual_type_71935,f_71929], null),canonical_f_71937], 0));

if(cljs.core.truth_(elem_71921.addEventListener)){
elem_71921.addEventListener(cljs.core.name(actual_type_71935),canonical_f_71937);
} else {
elem_71921.attachEvent(cljs.core.name(actual_type_71935),canonical_f_71937);
}


var G__71939 = seq__71418_71930;
var G__71940 = chunk__71420_71931;
var G__71941 = count__71421_71932;
var G__71942 = (i__71422_71933 + (1));
seq__71418_71930 = G__71939;
chunk__71420_71931 = G__71940;
count__71421_71932 = G__71941;
i__71422_71933 = G__71942;
continue;
} else {
var temp__5735__auto___71943 = cljs.core.seq(seq__71418_71930);
if(temp__5735__auto___71943){
var seq__71418_71944__$1 = temp__5735__auto___71943;
if(cljs.core.chunked_seq_QMARK_(seq__71418_71944__$1)){
var c__4638__auto___71945 = cljs.core.chunk_first(seq__71418_71944__$1);
var G__71946 = cljs.core.chunk_rest(seq__71418_71944__$1);
var G__71947 = c__4638__auto___71945;
var G__71948 = cljs.core.count(c__4638__auto___71945);
var G__71949 = (0);
seq__71418_71930 = G__71946;
chunk__71420_71931 = G__71947;
count__71421_71932 = G__71948;
i__71422_71933 = G__71949;
continue;
} else {
var vec__71488_71950 = cljs.core.first(seq__71418_71944__$1);
var actual_type_71951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71488_71950,(0),null);
var factory_71952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71488_71950,(1),null);
var canonical_f_71953 = (function (){var G__71492 = (factory_71952.cljs$core$IFn$_invoke$arity$1 ? factory_71952.cljs$core$IFn$_invoke$arity$1(f_71929) : factory_71952.call(null,f_71929));
var fexpr__71491 = (cljs.core.truth_(selector_71922)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_71921,selector_71922):cljs.core.identity);
return (fexpr__71491.cljs$core$IFn$_invoke$arity$1 ? fexpr__71491.cljs$core$IFn$_invoke$arity$1(G__71492) : fexpr__71491.call(null,G__71492));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_71921,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_71922,actual_type_71951,f_71929], null),canonical_f_71953], 0));

if(cljs.core.truth_(elem_71921.addEventListener)){
elem_71921.addEventListener(cljs.core.name(actual_type_71951),canonical_f_71953);
} else {
elem_71921.attachEvent(cljs.core.name(actual_type_71951),canonical_f_71953);
}


var G__71958 = cljs.core.next(seq__71418_71944__$1);
var G__71959 = null;
var G__71960 = (0);
var G__71961 = (0);
seq__71418_71930 = G__71958;
chunk__71420_71931 = G__71959;
count__71421_71932 = G__71960;
i__71422_71933 = G__71961;
continue;
}
} else {
}
}
break;
}

var G__71962 = seq__71408_71923;
var G__71963 = chunk__71415_71924;
var G__71964 = count__71416_71925;
var G__71965 = (i__71417_71926 + (1));
seq__71408_71923 = G__71962;
chunk__71415_71924 = G__71963;
count__71416_71925 = G__71964;
i__71417_71926 = G__71965;
continue;
} else {
var temp__5735__auto___71966 = cljs.core.seq(seq__71408_71923);
if(temp__5735__auto___71966){
var seq__71408_71967__$1 = temp__5735__auto___71966;
if(cljs.core.chunked_seq_QMARK_(seq__71408_71967__$1)){
var c__4638__auto___71968 = cljs.core.chunk_first(seq__71408_71967__$1);
var G__71969 = cljs.core.chunk_rest(seq__71408_71967__$1);
var G__71970 = c__4638__auto___71968;
var G__71971 = cljs.core.count(c__4638__auto___71968);
var G__71972 = (0);
seq__71408_71923 = G__71969;
chunk__71415_71924 = G__71970;
count__71416_71925 = G__71971;
i__71417_71926 = G__71972;
continue;
} else {
var vec__71493_71973 = cljs.core.first(seq__71408_71967__$1);
var orig_type_71974 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71493_71973,(0),null);
var f_71975 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71493_71973,(1),null);
var seq__71409_71976 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_71974,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_71974,cljs.core.identity])));
var chunk__71411_71977 = null;
var count__71412_71978 = (0);
var i__71413_71979 = (0);
while(true){
if((i__71413_71979 < count__71412_71978)){
var vec__71506_71980 = chunk__71411_71977.cljs$core$IIndexed$_nth$arity$2(null,i__71413_71979);
var actual_type_71981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71506_71980,(0),null);
var factory_71982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71506_71980,(1),null);
var canonical_f_71983 = (function (){var G__71510 = (factory_71982.cljs$core$IFn$_invoke$arity$1 ? factory_71982.cljs$core$IFn$_invoke$arity$1(f_71975) : factory_71982.call(null,f_71975));
var fexpr__71509 = (cljs.core.truth_(selector_71922)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_71921,selector_71922):cljs.core.identity);
return (fexpr__71509.cljs$core$IFn$_invoke$arity$1 ? fexpr__71509.cljs$core$IFn$_invoke$arity$1(G__71510) : fexpr__71509.call(null,G__71510));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_71921,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_71922,actual_type_71981,f_71975], null),canonical_f_71983], 0));

if(cljs.core.truth_(elem_71921.addEventListener)){
elem_71921.addEventListener(cljs.core.name(actual_type_71981),canonical_f_71983);
} else {
elem_71921.attachEvent(cljs.core.name(actual_type_71981),canonical_f_71983);
}


var G__71984 = seq__71409_71976;
var G__71985 = chunk__71411_71977;
var G__71986 = count__71412_71978;
var G__71987 = (i__71413_71979 + (1));
seq__71409_71976 = G__71984;
chunk__71411_71977 = G__71985;
count__71412_71978 = G__71986;
i__71413_71979 = G__71987;
continue;
} else {
var temp__5735__auto___71988__$1 = cljs.core.seq(seq__71409_71976);
if(temp__5735__auto___71988__$1){
var seq__71409_71989__$1 = temp__5735__auto___71988__$1;
if(cljs.core.chunked_seq_QMARK_(seq__71409_71989__$1)){
var c__4638__auto___71990 = cljs.core.chunk_first(seq__71409_71989__$1);
var G__71991 = cljs.core.chunk_rest(seq__71409_71989__$1);
var G__71992 = c__4638__auto___71990;
var G__71993 = cljs.core.count(c__4638__auto___71990);
var G__71994 = (0);
seq__71409_71976 = G__71991;
chunk__71411_71977 = G__71992;
count__71412_71978 = G__71993;
i__71413_71979 = G__71994;
continue;
} else {
var vec__71511_71995 = cljs.core.first(seq__71409_71989__$1);
var actual_type_71996 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71511_71995,(0),null);
var factory_71997 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71511_71995,(1),null);
var canonical_f_71998 = (function (){var G__71515 = (factory_71997.cljs$core$IFn$_invoke$arity$1 ? factory_71997.cljs$core$IFn$_invoke$arity$1(f_71975) : factory_71997.call(null,f_71975));
var fexpr__71514 = (cljs.core.truth_(selector_71922)?cljs.core.partial.cljs$core$IFn$_invoke$arity$3(dommy.core.live_listener,elem_71921,selector_71922):cljs.core.identity);
return (fexpr__71514.cljs$core$IFn$_invoke$arity$1 ? fexpr__71514.cljs$core$IFn$_invoke$arity$1(G__71515) : fexpr__71514.call(null,G__71515));
})();
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_71921,cljs.core.assoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_71922,actual_type_71996,f_71975], null),canonical_f_71998], 0));

if(cljs.core.truth_(elem_71921.addEventListener)){
elem_71921.addEventListener(cljs.core.name(actual_type_71996),canonical_f_71998);
} else {
elem_71921.attachEvent(cljs.core.name(actual_type_71996),canonical_f_71998);
}


var G__71999 = cljs.core.next(seq__71409_71989__$1);
var G__72000 = null;
var G__72001 = (0);
var G__72002 = (0);
seq__71409_71976 = G__71999;
chunk__71411_71977 = G__72000;
count__71412_71978 = G__72001;
i__71413_71979 = G__72002;
continue;
}
} else {
}
}
break;
}

var G__72003 = cljs.core.next(seq__71408_71967__$1);
var G__72004 = null;
var G__72005 = (0);
var G__72006 = (0);
seq__71408_71923 = G__72003;
chunk__71415_71924 = G__72004;
count__71416_71925 = G__72005;
i__71417_71926 = G__72006;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_BANG_.cljs$lang$applyTo = (function (seq71403){
var G__71404 = cljs.core.first(seq71403);
var seq71403__$1 = cljs.core.next(seq71403);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71404,seq71403__$1);
}));

/**
 * Removes event listener for the element defined in `elem-sel`,
 * which is the same format as listen!.
 * 
 *   The following forms are allowed, and will remove all handlers
 *   that match the parameters passed in:
 * 
 *    (unlisten! [elem :.selector] :click event-listener)
 * 
 *    (unlisten! [elem :.selector]
 *      :click event-listener
 *      :mouseover other-event-listener)
 */
dommy.core.unlisten_BANG_ = (function dommy$core$unlisten_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___72007 = arguments.length;
var i__4819__auto___72008 = (0);
while(true){
if((i__4819__auto___72008 < len__4818__auto___72007)){
args__4824__auto__.push((arguments[i__4819__auto___72008]));

var G__72009 = (i__4819__auto___72008 + (1));
i__4819__auto___72008 = G__72009;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__71518_72010 = dommy.core.elem_and_selector(elem_sel);
var elem_72011 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71518_72010,(0),null);
var selector_72012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71518_72010,(1),null);
var seq__71521_72013 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__71528_72014 = null;
var count__71529_72015 = (0);
var i__71530_72016 = (0);
while(true){
if((i__71530_72016 < count__71529_72015)){
var vec__71567_72017 = chunk__71528_72014.cljs$core$IIndexed$_nth$arity$2(null,i__71530_72016);
var orig_type_72018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71567_72017,(0),null);
var f_72019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71567_72017,(1),null);
var seq__71531_72020 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_72018,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_72018,cljs.core.identity])));
var chunk__71533_72021 = null;
var count__71534_72022 = (0);
var i__71535_72023 = (0);
while(true){
if((i__71535_72023 < count__71534_72022)){
var vec__71576_72024 = chunk__71533_72021.cljs$core$IIndexed$_nth$arity$2(null,i__71535_72023);
var actual_type_72025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71576_72024,(0),null);
var __72026 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71576_72024,(1),null);
var keys_72027 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_72012,actual_type_72025,f_72019], null);
var canonical_f_72028 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_72011),keys_72027);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_72011,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_72027], 0));

if(cljs.core.truth_(elem_72011.removeEventListener)){
elem_72011.removeEventListener(cljs.core.name(actual_type_72025),canonical_f_72028);
} else {
elem_72011.detachEvent(cljs.core.name(actual_type_72025),canonical_f_72028);
}


var G__72029 = seq__71531_72020;
var G__72030 = chunk__71533_72021;
var G__72031 = count__71534_72022;
var G__72032 = (i__71535_72023 + (1));
seq__71531_72020 = G__72029;
chunk__71533_72021 = G__72030;
count__71534_72022 = G__72031;
i__71535_72023 = G__72032;
continue;
} else {
var temp__5735__auto___72033 = cljs.core.seq(seq__71531_72020);
if(temp__5735__auto___72033){
var seq__71531_72034__$1 = temp__5735__auto___72033;
if(cljs.core.chunked_seq_QMARK_(seq__71531_72034__$1)){
var c__4638__auto___72035 = cljs.core.chunk_first(seq__71531_72034__$1);
var G__72036 = cljs.core.chunk_rest(seq__71531_72034__$1);
var G__72037 = c__4638__auto___72035;
var G__72038 = cljs.core.count(c__4638__auto___72035);
var G__72039 = (0);
seq__71531_72020 = G__72036;
chunk__71533_72021 = G__72037;
count__71534_72022 = G__72038;
i__71535_72023 = G__72039;
continue;
} else {
var vec__71579_72040 = cljs.core.first(seq__71531_72034__$1);
var actual_type_72041 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71579_72040,(0),null);
var __72042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71579_72040,(1),null);
var keys_72043 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_72012,actual_type_72041,f_72019], null);
var canonical_f_72044 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_72011),keys_72043);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_72011,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_72043], 0));

if(cljs.core.truth_(elem_72011.removeEventListener)){
elem_72011.removeEventListener(cljs.core.name(actual_type_72041),canonical_f_72044);
} else {
elem_72011.detachEvent(cljs.core.name(actual_type_72041),canonical_f_72044);
}


var G__72045 = cljs.core.next(seq__71531_72034__$1);
var G__72046 = null;
var G__72047 = (0);
var G__72048 = (0);
seq__71531_72020 = G__72045;
chunk__71533_72021 = G__72046;
count__71534_72022 = G__72047;
i__71535_72023 = G__72048;
continue;
}
} else {
}
}
break;
}

var G__72049 = seq__71521_72013;
var G__72050 = chunk__71528_72014;
var G__72051 = count__71529_72015;
var G__72052 = (i__71530_72016 + (1));
seq__71521_72013 = G__72049;
chunk__71528_72014 = G__72050;
count__71529_72015 = G__72051;
i__71530_72016 = G__72052;
continue;
} else {
var temp__5735__auto___72053 = cljs.core.seq(seq__71521_72013);
if(temp__5735__auto___72053){
var seq__71521_72054__$1 = temp__5735__auto___72053;
if(cljs.core.chunked_seq_QMARK_(seq__71521_72054__$1)){
var c__4638__auto___72055 = cljs.core.chunk_first(seq__71521_72054__$1);
var G__72056 = cljs.core.chunk_rest(seq__71521_72054__$1);
var G__72057 = c__4638__auto___72055;
var G__72058 = cljs.core.count(c__4638__auto___72055);
var G__72059 = (0);
seq__71521_72013 = G__72056;
chunk__71528_72014 = G__72057;
count__71529_72015 = G__72058;
i__71530_72016 = G__72059;
continue;
} else {
var vec__71582_72060 = cljs.core.first(seq__71521_72054__$1);
var orig_type_72061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71582_72060,(0),null);
var f_72062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71582_72060,(1),null);
var seq__71522_72063 = cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$3(dommy.core.special_listener_makers,orig_type_72061,cljs.core.PersistentArrayMap.createAsIfByAssoc([orig_type_72061,cljs.core.identity])));
var chunk__71524_72064 = null;
var count__71525_72065 = (0);
var i__71526_72066 = (0);
while(true){
if((i__71526_72066 < count__71525_72065)){
var vec__71591_72067 = chunk__71524_72064.cljs$core$IIndexed$_nth$arity$2(null,i__71526_72066);
var actual_type_72068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71591_72067,(0),null);
var __72069 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71591_72067,(1),null);
var keys_72070 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_72012,actual_type_72068,f_72062], null);
var canonical_f_72071 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_72011),keys_72070);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_72011,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_72070], 0));

if(cljs.core.truth_(elem_72011.removeEventListener)){
elem_72011.removeEventListener(cljs.core.name(actual_type_72068),canonical_f_72071);
} else {
elem_72011.detachEvent(cljs.core.name(actual_type_72068),canonical_f_72071);
}


var G__72072 = seq__71522_72063;
var G__72073 = chunk__71524_72064;
var G__72074 = count__71525_72065;
var G__72075 = (i__71526_72066 + (1));
seq__71522_72063 = G__72072;
chunk__71524_72064 = G__72073;
count__71525_72065 = G__72074;
i__71526_72066 = G__72075;
continue;
} else {
var temp__5735__auto___72076__$1 = cljs.core.seq(seq__71522_72063);
if(temp__5735__auto___72076__$1){
var seq__71522_72077__$1 = temp__5735__auto___72076__$1;
if(cljs.core.chunked_seq_QMARK_(seq__71522_72077__$1)){
var c__4638__auto___72078 = cljs.core.chunk_first(seq__71522_72077__$1);
var G__72079 = cljs.core.chunk_rest(seq__71522_72077__$1);
var G__72080 = c__4638__auto___72078;
var G__72081 = cljs.core.count(c__4638__auto___72078);
var G__72082 = (0);
seq__71522_72063 = G__72079;
chunk__71524_72064 = G__72080;
count__71525_72065 = G__72081;
i__71526_72066 = G__72082;
continue;
} else {
var vec__71594_72083 = cljs.core.first(seq__71522_72077__$1);
var actual_type_72084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71594_72083,(0),null);
var __72085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71594_72083,(1),null);
var keys_72086 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selector_72012,actual_type_72084,f_72062], null);
var canonical_f_72087 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(dommy.core.event_listeners(elem_72011),keys_72086);
dommy.core.update_event_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_72011,dommy.utils.dissoc_in,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([keys_72086], 0));

if(cljs.core.truth_(elem_72011.removeEventListener)){
elem_72011.removeEventListener(cljs.core.name(actual_type_72084),canonical_f_72087);
} else {
elem_72011.detachEvent(cljs.core.name(actual_type_72084),canonical_f_72087);
}


var G__72088 = cljs.core.next(seq__71522_72077__$1);
var G__72089 = null;
var G__72090 = (0);
var G__72091 = (0);
seq__71522_72063 = G__72088;
chunk__71524_72064 = G__72089;
count__71525_72065 = G__72090;
i__71526_72066 = G__72091;
continue;
}
} else {
}
}
break;
}

var G__72092 = cljs.core.next(seq__71521_72054__$1);
var G__72093 = null;
var G__72094 = (0);
var G__72095 = (0);
seq__71521_72013 = G__72092;
chunk__71528_72014 = G__72093;
count__71529_72015 = G__72094;
i__71530_72016 = G__72095;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.unlisten_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.unlisten_BANG_.cljs$lang$applyTo = (function (seq71516){
var G__71517 = cljs.core.first(seq71516);
var seq71516__$1 = cljs.core.next(seq71516);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71517,seq71516__$1);
}));

/**
 * Behaves like `listen!`, but removes the listener after the first event occurs.
 */
dommy.core.listen_once_BANG_ = (function dommy$core$listen_once_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___72096 = arguments.length;
var i__4819__auto___72097 = (0);
while(true){
if((i__4819__auto___72097 < len__4818__auto___72096)){
args__4824__auto__.push((arguments[i__4819__auto___72097]));

var G__72098 = (i__4819__auto___72097 + (1));
i__4819__auto___72097 = G__72098;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(dommy.core.listen_once_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (elem_sel,type_fs){
if(cljs.core.even_QMARK_(cljs.core.count(type_fs))){
} else {
throw (new Error("Assert failed: (even? (count type-fs))"));
}

var vec__71599_72099 = dommy.core.elem_and_selector(elem_sel);
var elem_72100 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71599_72099,(0),null);
var selector_72101 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71599_72099,(1),null);
var seq__71602_72102 = cljs.core.seq(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),type_fs));
var chunk__71603_72103 = null;
var count__71604_72104 = (0);
var i__71605_72105 = (0);
while(true){
if((i__71605_72105 < count__71604_72104)){
var vec__71612_72106 = chunk__71603_72103.cljs$core$IIndexed$_nth$arity$2(null,i__71605_72105);
var type_72107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71612_72106,(0),null);
var f_72108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71612_72106,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_72107,((function (seq__71602_72102,chunk__71603_72103,count__71604_72104,i__71605_72105,vec__71612_72106,type_72107,f_72108,vec__71599_72099,elem_72100,selector_72101){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_72107,dommy$core$this_fn], 0));

return (f_72108.cljs$core$IFn$_invoke$arity$1 ? f_72108.cljs$core$IFn$_invoke$arity$1(e) : f_72108.call(null,e));
});})(seq__71602_72102,chunk__71603_72103,count__71604_72104,i__71605_72105,vec__71612_72106,type_72107,f_72108,vec__71599_72099,elem_72100,selector_72101))
], 0));


var G__72109 = seq__71602_72102;
var G__72110 = chunk__71603_72103;
var G__72111 = count__71604_72104;
var G__72112 = (i__71605_72105 + (1));
seq__71602_72102 = G__72109;
chunk__71603_72103 = G__72110;
count__71604_72104 = G__72111;
i__71605_72105 = G__72112;
continue;
} else {
var temp__5735__auto___72113 = cljs.core.seq(seq__71602_72102);
if(temp__5735__auto___72113){
var seq__71602_72114__$1 = temp__5735__auto___72113;
if(cljs.core.chunked_seq_QMARK_(seq__71602_72114__$1)){
var c__4638__auto___72115 = cljs.core.chunk_first(seq__71602_72114__$1);
var G__72116 = cljs.core.chunk_rest(seq__71602_72114__$1);
var G__72117 = c__4638__auto___72115;
var G__72118 = cljs.core.count(c__4638__auto___72115);
var G__72119 = (0);
seq__71602_72102 = G__72116;
chunk__71603_72103 = G__72117;
count__71604_72104 = G__72118;
i__71605_72105 = G__72119;
continue;
} else {
var vec__71615_72120 = cljs.core.first(seq__71602_72114__$1);
var type_72121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71615_72120,(0),null);
var f_72122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71615_72120,(1),null);
dommy.core.listen_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_72121,((function (seq__71602_72102,chunk__71603_72103,count__71604_72104,i__71605_72105,vec__71615_72120,type_72121,f_72122,seq__71602_72114__$1,temp__5735__auto___72113,vec__71599_72099,elem_72100,selector_72101){
return (function dommy$core$this_fn(e){
dommy.core.unlisten_BANG_.cljs$core$IFn$_invoke$arity$variadic(elem_sel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([type_72121,dommy$core$this_fn], 0));

return (f_72122.cljs$core$IFn$_invoke$arity$1 ? f_72122.cljs$core$IFn$_invoke$arity$1(e) : f_72122.call(null,e));
});})(seq__71602_72102,chunk__71603_72103,count__71604_72104,i__71605_72105,vec__71615_72120,type_72121,f_72122,seq__71602_72114__$1,temp__5735__auto___72113,vec__71599_72099,elem_72100,selector_72101))
], 0));


var G__72123 = cljs.core.next(seq__71602_72114__$1);
var G__72124 = null;
var G__72125 = (0);
var G__72126 = (0);
seq__71602_72102 = G__72123;
chunk__71603_72103 = G__72124;
count__71604_72104 = G__72125;
i__71605_72105 = G__72126;
continue;
}
} else {
}
}
break;
}

return elem_sel;
}));

(dommy.core.listen_once_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(dommy.core.listen_once_BANG_.cljs$lang$applyTo = (function (seq71597){
var G__71598 = cljs.core.first(seq71597);
var seq71597__$1 = cljs.core.next(seq71597);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71598,seq71597__$1);
}));


//# sourceMappingURL=dommy.core.js.map
