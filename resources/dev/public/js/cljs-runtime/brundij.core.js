goog.provide('brundij.core');
brundij.core.dev_setup = (function brundij$core$dev_setup(){
if(brundij.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
brundij.core.get_current_online_status_BANG_ = (function brundij$core$get_current_online_status_BANG_(){
return window.navigator.onLine;
});
brundij.core.mount_root = (function brundij$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [brundij.router.router_component], null),root_el);
});
brundij.core.add_online_status_listener_BANG_ = (function brundij$core$add_online_status_listener_BANG_(){
window.addEventListener("online",(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.events","set-is-online","brundij.events/set-is-online",-1670971741),brundij.core.get_current_online_status_BANG_()], null));
}));

return window.addEventListener("offline",(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.events","set-is-online","brundij.events/set-is-online",-1670971741),brundij.core.get_current_online_status_BANG_()], null));
}));
});
brundij.core.init = (function brundij$core$init(){
brundij.router.init_routes_BANG_();

brundij.ds.initialize_ds_BANG_();

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.events","initialize-db","brundij.events/initialize-db",769656289)], null));

re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.events","set-is-online","brundij.events/set-is-online",-1670971741),brundij.core.get_current_online_status_BANG_()], null));

brundij.styles.initialize_styles();

brundij.core.dev_setup();

brundij.core.add_online_status_listener_BANG_();

return brundij.core.mount_root();
});

//# sourceMappingURL=brundij.core.js.map
