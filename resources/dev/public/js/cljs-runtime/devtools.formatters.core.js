goog.provide('devtools.formatters.core');
devtools.formatters.core.want_value_QMARK__STAR_ = (function devtools$formatters$core$want_value_QMARK__STAR_(value){
var and__4210__auto__ = cljs.core.not(devtools.formatters.state.prevent_recursion_QMARK_());
if(and__4210__auto__){
var or__4212__auto__ = devtools.formatters.helpers.cljs_value_QMARK_(value);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return devtools.formatters.templating.surrogate_QMARK_(value);
}
} else {
return and__4210__auto__;
}
});
devtools.formatters.core.header_STAR_ = (function devtools$formatters$core$header_STAR_(value){
var json_ml = ((devtools.formatters.templating.surrogate_QMARK_(value))?devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_surrogate_header_GT_(value)):(cljs.core.truth_((function (){try{if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$format$IDevtoolsFormat$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.format.IDevtoolsFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.format.IDevtoolsFormat,value);
}
}catch (e44413){var _e__41064__auto__ = e44413;
return false;
}})())?devtools.format._header(value):(cljs.core.truth_((function (){try{if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IFormat$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.IFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.IFormat,value);
}
}catch (e44415){var _e__41064__auto__ = e44415;
return false;
}})())?devtools.protocols._header(value):devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_header_GT_(value))
)));
return devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml);
});
devtools.formatters.core.has_body_STAR_ = (function devtools$formatters$core$has_body_STAR_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.was_over_budget_QMARK__BANG_(value))){
return false;
} else {
return cljs.core.boolean$(((devtools.formatters.templating.surrogate_QMARK_(value))?(!((devtools.formatters.templating.get_surrogate_body(value) == null))):(cljs.core.truth_((function (){try{if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$format$IDevtoolsFormat$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.format.IDevtoolsFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.format.IDevtoolsFormat,value);
}
}catch (e44417){var _e__41064__auto__ = e44417;
return false;
}})())?devtools.format._has_body(value):(cljs.core.truth_((function (){try{if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IFormat$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.IFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.IFormat,value);
}
}catch (e44419){var _e__41064__auto__ = e44419;
return false;
}})())?devtools.protocols._has_body(value):false
))));
}
});
devtools.formatters.core.body_STAR_ = (function devtools$formatters$core$body_STAR_(value){
devtools.formatters.state.update_current_state_BANG_(devtools.formatters.state.reset_depth_limits);

if(devtools.formatters.templating.surrogate_QMARK_(value)){
return devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_surrogate_body_GT_(value));
} else {
if(cljs.core.truth_((function (){try{if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$format$IDevtoolsFormat$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.format.IDevtoolsFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.format.IDevtoolsFormat,value);
}
}catch (e44421){var _e__41064__auto__ = e44421;
return false;
}})())){
return devtools.format._body(value);
} else {
if(cljs.core.truth_((function (){try{if((!((value == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IFormat$)))){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(devtools.protocols.IFormat,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(devtools.protocols.IFormat,value);
}
}catch (e44423){var _e__41064__auto__ = e44423;
return false;
}})())){
return devtools.protocols._body(value);
} else {
return null;
}
}
}
});
devtools.formatters.core.config_wrapper = (function devtools$formatters$core$config_wrapper(raw_fn){
return (function (value,config){
var _STAR_current_state_STAR__orig_val__44425 = devtools.formatters.state._STAR_current_state_STAR_;
var _STAR_current_state_STAR__temp_val__44426 = (function (){var or__4212__auto__ = config;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return devtools.formatters.state.get_default_state();
}
})();
(devtools.formatters.state._STAR_current_state_STAR_ = _STAR_current_state_STAR__temp_val__44426);

try{return (raw_fn.cljs$core$IFn$_invoke$arity$1 ? raw_fn.cljs$core$IFn$_invoke$arity$1(value) : raw_fn.call(null,value));
}finally {(devtools.formatters.state._STAR_current_state_STAR_ = _STAR_current_state_STAR__orig_val__44425);
}});
});
devtools.formatters.core.want_value_QMARK_ = devtools.formatters.core.config_wrapper(devtools.formatters.core.want_value_QMARK__STAR_);
devtools.formatters.core.header = devtools.formatters.core.config_wrapper(devtools.formatters.core.header_STAR_);
devtools.formatters.core.has_body = devtools.formatters.core.config_wrapper(devtools.formatters.core.has_body_STAR_);
devtools.formatters.core.body = devtools.formatters.core.config_wrapper(devtools.formatters.core.body_STAR_);
devtools.formatters.core.wrap_with_exception_guard = (function devtools$formatters$core$wrap_with_exception_guard(f){
return (function() { 
var G__44447__delegate = function (args){
try{return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}catch (e44427){var e = e44427;
devtools.reporter.report_internal_error_BANG_.cljs$core$IFn$_invoke$arity$variadic(e,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["an exception was raised during value formatting"], 0));

return null;
}};
var G__44447 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__44448__i = 0, G__44448__a = new Array(arguments.length -  0);
while (G__44448__i < G__44448__a.length) {G__44448__a[G__44448__i] = arguments[G__44448__i + 0]; ++G__44448__i;}
  args = new cljs.core.IndexedSeq(G__44448__a,0,null);
} 
return G__44447__delegate.call(this,args);};
G__44447.cljs$lang$maxFixedArity = 0;
G__44447.cljs$lang$applyTo = (function (arglist__44449){
var args = cljs.core.seq(arglist__44449);
return G__44447__delegate(args);
});
G__44447.cljs$core$IFn$_invoke$arity$variadic = G__44447__delegate;
return G__44447;
})()
;
});
devtools.formatters.core.build_api_call = (function devtools$formatters$core$build_api_call(raw_fn,pre_handler_key,post_handler_key){

var handler = (function (value,config){
var pre_handler = (function (){var or__4212__auto__ = devtools.prefs.pref(pre_handler_key);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.identity;
}
})();
var post_handler = (function (){var or__4212__auto__ = devtools.prefs.pref(post_handler_key);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.identity;
}
})();
var preprocessed_value = (pre_handler.cljs$core$IFn$_invoke$arity$1 ? pre_handler.cljs$core$IFn$_invoke$arity$1(value) : pre_handler.call(null,value));
var result = (cljs.core.truth_(devtools.formatters.core.want_value_QMARK_(preprocessed_value,config))?(raw_fn.cljs$core$IFn$_invoke$arity$2 ? raw_fn.cljs$core$IFn$_invoke$arity$2(preprocessed_value,config) : raw_fn.call(null,preprocessed_value,config)):null);
return (post_handler.cljs$core$IFn$_invoke$arity$1 ? post_handler.cljs$core$IFn$_invoke$arity$1(result) : post_handler.call(null,result));
});
return devtools.formatters.core.wrap_with_exception_guard(handler);
});
devtools.formatters.core.header_api_call = devtools.formatters.core.build_api_call(devtools.formatters.core.header,new cljs.core.Keyword(null,"header-pre-handler","header-pre-handler",-1997722262),new cljs.core.Keyword(null,"header-post-handler","header-post-handler",514828618));
devtools.formatters.core.has_body_api_call = devtools.formatters.core.build_api_call(devtools.formatters.core.has_body,new cljs.core.Keyword(null,"has-body-pre-handler","has-body-pre-handler",1787020038),new cljs.core.Keyword(null,"has-body-post-handler","has-body-post-handler",-863451271));
devtools.formatters.core.body_api_call = devtools.formatters.core.build_api_call(devtools.formatters.core.body,new cljs.core.Keyword(null,"body-pre-handler","body-pre-handler",1211926529),new cljs.core.Keyword(null,"body-post-handler","body-post-handler",-1040905424));

//# sourceMappingURL=devtools.formatters.core.js.map
