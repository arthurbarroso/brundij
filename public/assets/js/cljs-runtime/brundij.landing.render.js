goog.provide('brundij.landing.render');
brundij.landing.render.hydrate = (function brundij$landing$render$hydrate(){
return brundij.shared.render.hydrate_no_event(brundij.landing.page.landing_page);
});
goog.exportSymbol('brundij.landing.render.hydrate', brundij.landing.render.hydrate);
brundij.landing.render.pre_render = (function brundij$landing$render$pre_render(){
return brundij.shared.render.pre_render(reagent.dom.server.render_to_string.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [brundij.landing.page.landing_page], null)),"brundij.landing.render.hydrate();","landing","<script src=\"/assets/js/shared.js\"></script>\n    <script src=\"/assets/js/landing.js\"></script>","Brundij","<link rel=\"stylesheet\" href=\"/assets/css/brundij/landing/landing.css\">");
});

//# sourceMappingURL=brundij.landing.render.js.map
