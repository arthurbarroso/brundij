goog.provide('brundij.styles');
brundij.styles.font_family = "'Roboto', sans-serif";
brundij.styles.initialize_fonts = (function brundij$styles$initialize_fonts(){
return stylefy.core.font_face(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),brundij.styles.font_family,new cljs.core.Keyword(null,"src","src",-1651076051),"url('/fonts/Roboto-Regular.ttf')"], null));
});
brundij.styles.initialize_styles = (function brundij$styles$initialize_styles(){
brundij.styles.initialize_fonts();

return stylefy.core.init.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dom","dom",-1236537922),stylefy.reagent.init()], null));
});

//# sourceMappingURL=brundij.styles.js.map
