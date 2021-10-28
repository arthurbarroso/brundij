goog.provide('brundij.healths.render');
brundij.healths.render.hydrate_create = (function brundij$healths$render$hydrate_create(){
return brundij.shared.render.hydrate_no_event(brundij.healths.create.create_check_view);
});
goog.exportSymbol('brundij.healths.render.hydrate_create', brundij.healths.render.hydrate_create);
brundij.healths.render.pre_render_create = (function brundij$healths$render$pre_render_create(){
return brundij.shared.render.pre_render(reagent.dom.server.render_to_string.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [brundij.healths.create.create_check_view], null)),"brundij.healths.render.hydrate_create();","create","<script src=\"/assets/js/shared.js\"></script>\n    <script src=\"/assets/js/healths.js\"></script>","Brundij","");
});

//# sourceMappingURL=brundij.healths.render.js.map
