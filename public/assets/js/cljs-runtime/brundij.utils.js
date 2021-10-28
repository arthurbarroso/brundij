goog.provide('brundij.utils');
brundij.utils.js__GT_edn = (function brundij$utils$js__GT_edn(jso){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(jso);
});
goog.exportSymbol('brundij.utils.js__GT_edn', brundij.utils.js__GT_edn);
brundij.utils.out_navigate = (function brundij$utils$out_navigate(route){
return reitit.frontend.easy.push_state.cljs$core$IFn$_invoke$arity$3(cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(route),null,null);
});
goog.exportSymbol('brundij.utils.out_navigate', brundij.utils.out_navigate);
brundij.utils.rendered_QMARK_ = (function brundij$utils$rendered_QMARK_(){
return (!((document.getElementById("app") == null)));
});
brundij.utils.ready_QMARK_ = (function brundij$utils$ready_QMARK_(){
return ((brundij.utils.rendered_QMARK_()) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(document.readyState,"complete")));
});
goog.exportSymbol('brundij.utils.ready_QMARK_', brundij.utils.ready_QMARK_);
brundij.utils.get_rendered_db = (function brundij$utils$get_rendered_db(){
return window.rendereddb;
});
goog.exportSymbol('brundij.utils.get_rendered_db', brundij.utils.get_rendered_db);
brundij.utils.parse_to_clj = (function brundij$utils$parse_to_clj(x){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(x);
});
goog.exportSymbol('brundij.utils.parse_to_clj', brundij.utils.parse_to_clj);
brundij.utils.export_db = (function brundij$utils$export_db(){
var sb__4749__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__65621_65635 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__65622_65636 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__65623_65637 = true;
var _STAR_print_fn_STAR__temp_val__65624_65638 = (function (x__4750__auto__){
return sb__4749__auto__.append(x__4750__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__65623_65637);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__65624_65638);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("brundij.subs","db","brundij.subs/db",-1005652444)], null))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Keyword(null,"data","data",-232669377)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"coercion","coercion",904067157)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Keyword(null,"data","data",-232669377)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"view","view",1247994814)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Keyword(null,"data","data",-232669377)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"parameters","parameters",-1229919748)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-route","current-route",2067529448),new cljs.core.Keyword(null,"result","result",1415092211)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"query","query",-1288509510)));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__65622_65636);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__65621_65635);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4749__auto__);
});
goog.exportSymbol('brundij.utils.export_db', brundij.utils.export_db);
brundij.utils.dissoc_local_health_db_ids = (function brundij$utils$dissoc_local_health_db_ids(health){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(health,new cljs.core.Keyword("db","id","db/id",-1388397098)),new cljs.core.Keyword("health","question","health/question",1653464759),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__65629_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__65629_SHARP_,new cljs.core.Keyword("db","id","db/id",-1388397098));
}),new cljs.core.Keyword("health","question","health/question",1653464759).cljs$core$IFn$_invoke$arity$1(health)));
});
brundij.utils.mount_shareable_link = (function brundij$utils$mount_shareable_link(health_id){
var local_url = window.location.href;
var pred__65632 = (function (p1__65631_SHARP_,p2__65630_SHARP_){
return clojure.string.includes_QMARK_(p2__65630_SHARP_,p1__65631_SHARP_);
});
var expr__65633 = local_url;
if(pred__65632("/success",expr__65633)){
return clojure.string.replace(local_url,"/success",["?id=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(health_id)].join(''));
} else {
if(pred__65632("/list",expr__65633)){
return clojure.string.replace(local_url,"/list",["?id=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(health_id)].join(''));
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(local_url),"?id=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(health_id)].join('');
}
}
});

//# sourceMappingURL=brundij.utils.js.map
