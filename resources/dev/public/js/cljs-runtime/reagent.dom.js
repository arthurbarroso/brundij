goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__50792 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__50793 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__50793);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__50794 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__50795 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__50795);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__50794);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__50792);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__50797 = arguments.length;
switch (G__50797) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__50798 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50798,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50798,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__50801_50831 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__50802_50832 = null;
var count__50803_50833 = (0);
var i__50804_50834 = (0);
while(true){
if((i__50804_50834 < count__50803_50833)){
var vec__50811_50835 = chunk__50802_50832.cljs$core$IIndexed$_nth$arity$2(null,i__50804_50834);
var container_50836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50811_50835,(0),null);
var comp_50837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50811_50835,(1),null);
reagent.dom.re_render_component(comp_50837,container_50836);


var G__50838 = seq__50801_50831;
var G__50839 = chunk__50802_50832;
var G__50840 = count__50803_50833;
var G__50841 = (i__50804_50834 + (1));
seq__50801_50831 = G__50838;
chunk__50802_50832 = G__50839;
count__50803_50833 = G__50840;
i__50804_50834 = G__50841;
continue;
} else {
var temp__5735__auto___50842 = cljs.core.seq(seq__50801_50831);
if(temp__5735__auto___50842){
var seq__50801_50843__$1 = temp__5735__auto___50842;
if(cljs.core.chunked_seq_QMARK_(seq__50801_50843__$1)){
var c__4638__auto___50844 = cljs.core.chunk_first(seq__50801_50843__$1);
var G__50845 = cljs.core.chunk_rest(seq__50801_50843__$1);
var G__50846 = c__4638__auto___50844;
var G__50847 = cljs.core.count(c__4638__auto___50844);
var G__50848 = (0);
seq__50801_50831 = G__50845;
chunk__50802_50832 = G__50846;
count__50803_50833 = G__50847;
i__50804_50834 = G__50848;
continue;
} else {
var vec__50814_50849 = cljs.core.first(seq__50801_50843__$1);
var container_50850 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50814_50849,(0),null);
var comp_50851 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50814_50849,(1),null);
reagent.dom.re_render_component(comp_50851,container_50850);


var G__50852 = cljs.core.next(seq__50801_50843__$1);
var G__50853 = null;
var G__50854 = (0);
var G__50855 = (0);
seq__50801_50831 = G__50852;
chunk__50802_50832 = G__50853;
count__50803_50833 = G__50854;
i__50804_50834 = G__50855;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
