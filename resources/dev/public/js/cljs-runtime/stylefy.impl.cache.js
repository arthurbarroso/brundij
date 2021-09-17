goog.provide('stylefy.impl.cache');
stylefy.impl.cache.cache_prefix = "stylefy_cache_";
stylefy.impl.cache.cache_styles_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
stylefy.impl.cache.default_cache_expiration_time_s = (((((((1) * (60)) * (60)) * cljs.core._STAR_) * (24)) * cljs.core._STAR_) * (7));
stylefy.impl.cache.cache_key_styles = (function stylefy$impl$cache$cache_key_styles(instance_id){
return [stylefy.impl.cache.cache_prefix,"styles",(cljs.core.truth_(instance_id)?["_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_id)].join(''):null)].join('');
});
stylefy.impl.cache.cache_key_created = (function stylefy$impl$cache$cache_key_created(instance_id){
return [stylefy.impl.cache.cache_prefix,"created",(cljs.core.truth_(instance_id)?["_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_id)].join(''):null)].join('');
});
stylefy.impl.cache.now_in_seconds = (function stylefy$impl$cache$now_in_seconds(){
return Math.floor((Date.now() / (1000)));
});
stylefy.impl.cache.cache_expired_QMARK_ = (function stylefy$impl$cache$cache_expired_QMARK_(cache_created,expiration_age,now){
if(cljs.core.truth_((function (){var and__4210__auto__ = cache_created;
if(cljs.core.truth_(and__4210__auto__)){
return expiration_age;
} else {
return and__4210__auto__;
}
})())){
return ((cache_created + expiration_age) < now);
} else {
return false;
}
});
/**
 * Reads the cache if caching is used.
 */
stylefy.impl.cache.read_cache_value = (function stylefy$impl$cache$read_cache_value(key){
if(cljs.core.truth_(cljs.core.deref(stylefy.impl.cache.cache_styles_QMARK_))){
var temp__5735__auto__ = window.localStorage.getItem(key);
if(cljs.core.truth_(temp__5735__auto__)){
var cache_contents = temp__5735__auto__;
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cache_contents);
} else {
return null;
}
} else {
return null;
}
});
stylefy.impl.cache.set_cache_created_time = (function stylefy$impl$cache$set_cache_created_time(var_args){
var G__71275 = arguments.length;
switch (G__71275) {
case 1:
return stylefy.impl.cache.set_cache_created_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stylefy.impl.cache.set_cache_created_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stylefy.impl.cache.set_cache_created_time.cljs$core$IFn$_invoke$arity$1 = (function (time_created){
return stylefy.impl.cache.set_cache_created_time.cljs$core$IFn$_invoke$arity$2(time_created,null);
}));

(stylefy.impl.cache.set_cache_created_time.cljs$core$IFn$_invoke$arity$2 = (function (time_created,instance_id){
return window.localStorage.setItem(stylefy.impl.cache.cache_key_created(instance_id),time_created);
}));

(stylefy.impl.cache.set_cache_created_time.cljs$lang$maxFixedArity = 2);

stylefy.impl.cache.clear_styles = (function stylefy$impl$cache$clear_styles(var_args){
var G__71295 = arguments.length;
switch (G__71295) {
case 0:
return stylefy.impl.cache.clear_styles.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return stylefy.impl.cache.clear_styles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stylefy.impl.cache.clear_styles.cljs$core$IFn$_invoke$arity$0 = (function (){
return stylefy.impl.cache.clear_styles.cljs$core$IFn$_invoke$arity$1(null);
}));

(stylefy.impl.cache.clear_styles.cljs$core$IFn$_invoke$arity$1 = (function (instance_id){
return window.localStorage.setItem(stylefy.impl.cache.cache_key_styles(instance_id),"");
}));

(stylefy.impl.cache.clear_styles.cljs$lang$maxFixedArity = 1);

stylefy.impl.cache.use_caching_BANG_ = (function stylefy$impl$cache$use_caching_BANG_(var_args){
var G__71303 = arguments.length;
switch (G__71303) {
case 1:
return stylefy.impl.cache.use_caching_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stylefy.impl.cache.use_caching_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stylefy.impl.cache.use_caching_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (cache_options){
return stylefy.impl.cache.use_caching_BANG_.cljs$core$IFn$_invoke$arity$2(cache_options,null);
}));

(stylefy.impl.cache.use_caching_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cache_options,instance_id){
cljs.core.reset_BANG_(stylefy.impl.cache.cache_styles_QMARK_,true);

if(cljs.core.truth_(stylefy.impl.cache.read_cache_value(stylefy.impl.cache.cache_key_created(instance_id)))){
} else {
stylefy.impl.cache.set_cache_created_time.cljs$core$IFn$_invoke$arity$2(stylefy.impl.cache.now_in_seconds(),instance_id);
}

if(stylefy.impl.cache.cache_expired_QMARK_(stylefy.impl.cache.read_cache_value(stylefy.impl.cache.cache_key_created(instance_id)),(function (){var or__4212__auto__ = new cljs.core.Keyword(null,"expires","expires",1393008816).cljs$core$IFn$_invoke$arity$1(cache_options);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return stylefy.impl.cache.default_cache_expiration_time_s;
}
})(),stylefy.impl.cache.now_in_seconds())){
stylefy.impl.cache.clear_styles.cljs$core$IFn$_invoke$arity$1(instance_id);

return stylefy.impl.cache.set_cache_created_time.cljs$core$IFn$_invoke$arity$2(stylefy.impl.cache.now_in_seconds(),instance_id);
} else {
return null;
}
}));

(stylefy.impl.cache.use_caching_BANG_.cljs$lang$maxFixedArity = 2);

/**
 * Caches the given style if caching is used.
 *   Throws QUOTA_EXCEEDED_ERR if the storage is full.
 */
stylefy.impl.cache.cache_styles = (function stylefy$impl$cache$cache_styles(var_args){
var G__71317 = arguments.length;
switch (G__71317) {
case 1:
return stylefy.impl.cache.cache_styles.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return stylefy.impl.cache.cache_styles.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(stylefy.impl.cache.cache_styles.cljs$core$IFn$_invoke$arity$1 = (function (styles){
return stylefy.impl.cache.cache_styles.cljs$core$IFn$_invoke$arity$2(styles,null);
}));

(stylefy.impl.cache.cache_styles.cljs$core$IFn$_invoke$arity$2 = (function (styles,instance_id){
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.deref(stylefy.impl.cache.cache_styles_QMARK_);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.map_QMARK_(styles);
} else {
return and__4210__auto__;
}
})())){
return window.localStorage.setItem(stylefy.impl.cache.cache_key_styles(instance_id),styles);
} else {
return null;
}
}));

(stylefy.impl.cache.cache_styles.cljs$lang$maxFixedArity = 2);

stylefy.impl.cache.style_cache_version_not_supported_QMARK_ = (function stylefy$impl$cache$style_cache_version_not_supported_QMARK_(cache){
var cached_maps = cljs.core.vals(cache);
return cljs.core.boolean$(cljs.core.some((function (p1__71321_SHARP_){
return cljs.core.contains_QMARK_(p1__71321_SHARP_,new cljs.core.Keyword("stylefy.impl.dom","css","stylefy.impl.dom/css",915861061));
}),cached_maps));
});
/**
 * In stylefy 3.0.0, :stylefy.impl.dom/css keywords were replaced with keyword :css while caching CSS.
 * This functions checks if the cache contains these old namespaced keywords, and if it does,
 * it clears the unsupported cache version.
 */
stylefy.impl.cache.check_cache_version_BANG_ = (function stylefy$impl$cache$check_cache_version_BANG_(key){
var temp__5735__auto__ = window.localStorage.getItem(key);
if(cljs.core.truth_(temp__5735__auto__)){
var cache_contents = temp__5735__auto__;
var cache_as_clojure_data = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cache_contents);
if(((clojure.string.starts_with_QMARK_(key,"stylefy_cache_styles")) && (((cljs.core.map_QMARK_(cache_as_clojure_data)) && (stylefy.impl.cache.style_cache_version_not_supported_QMARK_(cache_as_clojure_data)))))){
return stylefy.impl.cache.clear_styles.cljs$core$IFn$_invoke$arity$0();
} else {
return null;
}
} else {
return null;
}
});
stylefy.impl.cache.init = (function stylefy$impl$cache$init(stylefy_instance_id,options){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"use-caching?","use-caching?",427588313).cljs$core$IFn$_invoke$arity$1(options),false)){
stylefy.impl.cache.check_cache_version_BANG_(stylefy.impl.cache.cache_key_styles(stylefy_instance_id));

return stylefy.impl.cache.use_caching_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cache-options","cache-options",1443503739).cljs$core$IFn$_invoke$arity$1(options),stylefy_instance_id);
} else {
return null;
}
});

//# sourceMappingURL=stylefy.impl.cache.js.map
