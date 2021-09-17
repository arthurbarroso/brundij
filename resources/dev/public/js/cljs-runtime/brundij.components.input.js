goog.provide('brundij.components.input');
brundij.components.input.input_style = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"text-ident","text-ident",40842982),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword("stylefy.core","mode","stylefy.core/mode",-1757530234),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["border-box","#333","5px","1rem",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hover","hover",-341141711),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 0 5pt 2pt #ededed"], null),new cljs.core.Keyword(null,"focus","focus",234677911),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 0 5pt 2pt #ededed",new cljs.core.Keyword(null,"outline-width","outline-width",-381531602),"0px"], null)], null),(500),"rgb(255, 255, 255)","0.8%","solid 1.5px #D3D3D3","2%",brundij.styles.font_family]);
brundij.components.input.input = (function brundij$components$input$input(p__77482){
var map__77483 = p__77482;
var map__77483__$1 = cljs.core.__destructure_map(map__77483);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77483__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77483__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77483__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77483__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var extra_styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77483__$1,new cljs.core.Keyword(null,"extra-styles","extra-styles",-1027557933));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77483__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),stylefy.core.use_style.cljs$core$IFn$_invoke$arity$2(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([brundij.components.input.input_style,extra_styles], 0)),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__77481_SHARP_){
var G__77484 = p1__77481_SHARP_.target.value;
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__77484) : on_change.call(null,G__77484));
})], null))], null);
});

//# sourceMappingURL=brundij.components.input.js.map
