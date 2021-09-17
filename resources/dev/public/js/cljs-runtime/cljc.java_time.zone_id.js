goog.provide('cljc.java_time.zone_id');
cljc.java_time.zone_id.short_ids = goog.object.get(java.time.ZoneId,"SHORT_IDS");
cljc.java_time.zone_id.get_available_zone_ids = (function cljc$java_time$zone_id$get_available_zone_ids(){
return cljs.core.js_invoke(java.time.ZoneId,"getAvailableZoneIds");
});
cljc.java_time.zone_id.of = (function cljc$java_time$zone_id$of(var_args){
var G__72665 = arguments.length;
switch (G__72665) {
case 1:
return cljc.java_time.zone_id.of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.zone_id.of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.zone_id.of.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_String4591){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.ZoneId,"of",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_String4591], 0));
}));

(cljc.java_time.zone_id.of.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_String4592,java_util_Map4593){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.ZoneId,"of",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_String4592,java_util_Map4593], 0));
}));

(cljc.java_time.zone_id.of.cljs$lang$maxFixedArity = 2);

cljc.java_time.zone_id.of_offset = (function cljc$java_time$zone_id$of_offset(java_lang_String4594,java_time_ZoneOffset4595){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.ZoneId,"ofOffset",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_String4594,java_time_ZoneOffset4595], 0));
});
cljc.java_time.zone_id.to_string = (function cljc$java_time$zone_id$to_string(this4596){
return this4596.toString();
});
cljc.java_time.zone_id.get_display_name = (function cljc$java_time$zone_id$get_display_name(this4597,java_time_format_TextStyle4598,java_util_Locale4599){
return this4597.displayName(java_time_format_TextStyle4598,java_util_Locale4599);
});
cljc.java_time.zone_id.get_rules = (function cljc$java_time$zone_id$get_rules(this4600){
return this4600.rules();
});
cljc.java_time.zone_id.get_id = (function cljc$java_time$zone_id$get_id(this4601){
return this4601.id();
});
cljc.java_time.zone_id.normalized = (function cljc$java_time$zone_id$normalized(this4602){
return this4602.normalized();
});
cljc.java_time.zone_id.system_default = (function cljc$java_time$zone_id$system_default(){
return cljs.core.js_invoke(java.time.ZoneId,"systemDefault");
});
cljc.java_time.zone_id.from = (function cljc$java_time$zone_id$from(java_time_temporal_TemporalAccessor4603){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.ZoneId,"from",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_temporal_TemporalAccessor4603], 0));
});
cljc.java_time.zone_id.hash_code = (function cljc$java_time$zone_id$hash_code(this4604){
return this4604.hashCode();
});
cljc.java_time.zone_id.equals = (function cljc$java_time$zone_id$equals(this4605,java_lang_Object4606){
return this4605.equals(java_lang_Object4606);
});

//# sourceMappingURL=cljc.java_time.zone_id.js.map
