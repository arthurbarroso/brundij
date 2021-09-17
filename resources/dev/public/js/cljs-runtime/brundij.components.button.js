goog.provide('brundij.components.button');
brundij.components.button.button_styles = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],[new cljs.core.Keyword(null,"uppercase","uppercase",2080890922),"#fff","1rem",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 0 5pt 2pt #ededed",new cljs.core.Keyword(null,"outline-width","outline-width",-381531602),"0px"], null)], null),(500),"pointer","0.8%",(0),"solid 1.5px #D3D3D3","2%",brundij.styles.font_family]);
brundij.components.button.button = (function brundij$components$button$button(p__72418){
var map__72419 = p__72418;
var map__72419__$1 = cljs.core.__destructure_map(map__72419);
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72419__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72419__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72419__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var extra_styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72419__$1,new cljs.core.Keyword(null,"extra-styles","extra-styles",-1027557933));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([brundij.components.button.button_styles,extra_styles], 0)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));
})], null)),text], null);
});

//# sourceMappingURL=brundij.components.button.js.map
