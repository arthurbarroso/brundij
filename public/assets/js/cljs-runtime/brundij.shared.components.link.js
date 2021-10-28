goog.provide('brundij.shared.components.link');
brundij.shared.components.link.link = (function brundij$shared$components$link$link(p__52670){
var map__52671 = p__52670;
var map__52671__$1 = cljs.core.__destructure_map(map__52671);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52671__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52671__$1,new cljs.core.Keyword(null,"title","title",636505583));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52671__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var extra_styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52671__$1,new cljs.core.Keyword(null,"extra-styles","extra-styles",-1027557933));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click,new cljs.core.Keyword(null,"class","class",-2030961996),["link ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_styles)].join(''),new cljs.core.Keyword(null,"title","title",636505583),title], null),text], null);
});
brundij.shared.components.link.link_outlined = (function brundij$shared$components$link$link_outlined(p__52672){
var map__52673 = p__52672;
var map__52673__$1 = cljs.core.__destructure_map(map__52673);
var href = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52673__$1,new cljs.core.Keyword(null,"href","href",-793805698));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52673__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52673__$1,new cljs.core.Keyword(null,"title","title",636505583));
var extra_style_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52673__$1,new cljs.core.Keyword(null,"extra-style-class","extra-style-class",984310653));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"class","class",-2030961996),["link-outlined ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_style_class)].join(''),new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"href","href",-793805698),href], null),text], null);
});

//# sourceMappingURL=brundij.shared.components.link.js.map
