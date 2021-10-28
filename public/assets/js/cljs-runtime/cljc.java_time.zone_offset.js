goog.provide('cljc.java_time.zone_offset');
cljc.java_time.zone_offset.max = goog.object.get(java.time.ZoneOffset,"MAX");
cljc.java_time.zone_offset.min = goog.object.get(java.time.ZoneOffset,"MIN");
cljc.java_time.zone_offset.utc = goog.object.get(java.time.ZoneOffset,"UTC");
cljc.java_time.zone_offset.get_available_zone_ids = (function cljc$java_time$zone_offset$get_available_zone_ids(){
return cljs.core.js_invoke(java.time.ZoneOffset,"getAvailableZoneIds");
});
cljc.java_time.zone_offset.range = (function cljc$java_time$zone_offset$range(this5547,java_time_temporal_TemporalField5548){
return this5547.range(java_time_temporal_TemporalField5548);
});
cljc.java_time.zone_offset.of_total_seconds = (function cljc$java_time$zone_offset$of_total_seconds(int5549){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.ZoneOffset,"ofTotalSeconds",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([int5549], 0));
});
cljc.java_time.zone_offset.of = (function cljc$java_time$zone_offset$of(var_args){
var G__54757 = arguments.length;
switch (G__54757) {
case 1:
return cljc.java_time.zone_offset.of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.zone_offset.of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.zone_offset.of.cljs$core$IFn$_invoke$arity$1 = (function (G__5551){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.ZoneOffset,"of",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__5551], 0));
}));

(cljc.java_time.zone_offset.of.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_String5552,java_util_Map5553){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.ZoneOffset,"of",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_String5552,java_util_Map5553], 0));
}));

(cljc.java_time.zone_offset.of.cljs$lang$maxFixedArity = 2);

cljc.java_time.zone_offset.of_offset = (function cljc$java_time$zone_offset$of_offset(java_lang_String5554,java_time_ZoneOffset5555){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.ZoneOffset,"ofOffset",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_String5554,java_time_ZoneOffset5555], 0));
});
cljc.java_time.zone_offset.query = (function cljc$java_time$zone_offset$query(this5556,java_time_temporal_TemporalQuery5557){
return this5556.query(java_time_temporal_TemporalQuery5557);
});
cljc.java_time.zone_offset.to_string = (function cljc$java_time$zone_offset$to_string(this5558){
return this5558.toString();
});
cljc.java_time.zone_offset.get_display_name = (function cljc$java_time$zone_offset$get_display_name(this5559,java_time_format_TextStyle5560,java_util_Locale5561){
return this5559.displayName(java_time_format_TextStyle5560,java_util_Locale5561);
});
cljc.java_time.zone_offset.get_long = (function cljc$java_time$zone_offset$get_long(this5562,java_time_temporal_TemporalField5563){
return this5562.getLong(java_time_temporal_TemporalField5563);
});
cljc.java_time.zone_offset.get_rules = (function cljc$java_time$zone_offset$get_rules(this5564){
return this5564.rules();
});
cljc.java_time.zone_offset.of_hours = (function cljc$java_time$zone_offset$of_hours(int5565){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.ZoneOffset,"ofHours",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([int5565], 0));
});
cljc.java_time.zone_offset.get_id = (function cljc$java_time$zone_offset$get_id(this5566){
return this5566.id();
});
cljc.java_time.zone_offset.normalized = (function cljc$java_time$zone_offset$normalized(this5567){
return this5567.normalized();
});
cljc.java_time.zone_offset.system_default = (function cljc$java_time$zone_offset$system_default(){
return cljs.core.js_invoke(java.time.ZoneOffset,"systemDefault");
});
cljc.java_time.zone_offset.from = (function cljc$java_time$zone_offset$from(G__5569){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.ZoneOffset,"from",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__5569], 0));
});
cljc.java_time.zone_offset.of_hours_minutes_seconds = (function cljc$java_time$zone_offset$of_hours_minutes_seconds(int5570,int5571,int5572){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.ZoneOffset,"ofHoursMinutesSeconds",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([int5570,int5571,int5572], 0));
});
cljc.java_time.zone_offset.is_supported = (function cljc$java_time$zone_offset$is_supported(this5573,java_time_temporal_TemporalField5574){
return this5573.isSupported(java_time_temporal_TemporalField5574);
});
cljc.java_time.zone_offset.hash_code = (function cljc$java_time$zone_offset$hash_code(this5575){
return this5575.hashCode();
});
cljc.java_time.zone_offset.get_total_seconds = (function cljc$java_time$zone_offset$get_total_seconds(this5576){
return this5576.totalSeconds();
});
cljc.java_time.zone_offset.adjust_into = (function cljc$java_time$zone_offset$adjust_into(this5577,java_time_temporal_Temporal5578){
return this5577.adjustInto(java_time_temporal_Temporal5578);
});
cljc.java_time.zone_offset.of_hours_minutes = (function cljc$java_time$zone_offset$of_hours_minutes(int5579,int5580){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.ZoneOffset,"ofHoursMinutes",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([int5579,int5580], 0));
});
cljc.java_time.zone_offset.compare_to = (function cljc$java_time$zone_offset$compare_to(this5581,java_time_ZoneOffset5582){
return this5581.compareTo(java_time_ZoneOffset5582);
});
cljc.java_time.zone_offset.get = (function cljc$java_time$zone_offset$get(this5583,java_time_temporal_TemporalField5584){
return this5583.get(java_time_temporal_TemporalField5584);
});
cljc.java_time.zone_offset.equals = (function cljc$java_time$zone_offset$equals(this5585,java_lang_Object5586){
return this5585.equals(java_lang_Object5586);
});

//# sourceMappingURL=cljc.java_time.zone_offset.js.map
