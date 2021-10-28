goog.provide('cljc.java_time.day_of_week');
cljc.java_time.day_of_week.saturday = goog.object.get(java.time.DayOfWeek,"SATURDAY");
cljc.java_time.day_of_week.thursday = goog.object.get(java.time.DayOfWeek,"THURSDAY");
cljc.java_time.day_of_week.friday = goog.object.get(java.time.DayOfWeek,"FRIDAY");
cljc.java_time.day_of_week.wednesday = goog.object.get(java.time.DayOfWeek,"WEDNESDAY");
cljc.java_time.day_of_week.sunday = goog.object.get(java.time.DayOfWeek,"SUNDAY");
cljc.java_time.day_of_week.monday = goog.object.get(java.time.DayOfWeek,"MONDAY");
cljc.java_time.day_of_week.tuesday = goog.object.get(java.time.DayOfWeek,"TUESDAY");
cljc.java_time.day_of_week.range = (function cljc$java_time$day_of_week$range(this4641,java_time_temporal_TemporalField4642){
return this4641.range(java_time_temporal_TemporalField4642);
});
cljc.java_time.day_of_week.values = (function cljc$java_time$day_of_week$values(){
return cljs.core.js_invoke(java.time.DayOfWeek,"values");
});
cljc.java_time.day_of_week.value_of = (function cljc$java_time$day_of_week$value_of(var_args){
var G__54839 = arguments.length;
switch (G__54839) {
case 1:
return cljc.java_time.day_of_week.value_of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.day_of_week.value_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.day_of_week.value_of.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_String4643){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.DayOfWeek,"valueOf",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_String4643], 0));
}));

(cljc.java_time.day_of_week.value_of.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_Class4644,java_lang_String4645){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.DayOfWeek,"valueOf",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_Class4644,java_lang_String4645], 0));
}));

(cljc.java_time.day_of_week.value_of.cljs$lang$maxFixedArity = 2);

cljc.java_time.day_of_week.of = (function cljc$java_time$day_of_week$of(int4646){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.DayOfWeek,"of",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([int4646], 0));
});
cljc.java_time.day_of_week.ordinal = (function cljc$java_time$day_of_week$ordinal(this4647){
return this4647.ordinal();
});
cljc.java_time.day_of_week.plus = (function cljc$java_time$day_of_week$plus(this4648,long4649){
return this4648.plus(long4649);
});
cljc.java_time.day_of_week.query = (function cljc$java_time$day_of_week$query(this4650,java_time_temporal_TemporalQuery4651){
return this4650.query(java_time_temporal_TemporalQuery4651);
});
cljc.java_time.day_of_week.to_string = (function cljc$java_time$day_of_week$to_string(this4652){
return this4652.toString();
});
cljc.java_time.day_of_week.minus = (function cljc$java_time$day_of_week$minus(this4653,long4654){
return this4653.minus(long4654);
});
cljc.java_time.day_of_week.get_display_name = (function cljc$java_time$day_of_week$get_display_name(this4655,java_time_format_TextStyle4656,java_util_Locale4657){
return this4655.displayName(java_time_format_TextStyle4656,java_util_Locale4657);
});
cljc.java_time.day_of_week.get_value = (function cljc$java_time$day_of_week$get_value(this4658){
return this4658.value();
});
cljc.java_time.day_of_week.name = (function cljc$java_time$day_of_week$name(this4659){
return this4659.name();
});
cljc.java_time.day_of_week.get_long = (function cljc$java_time$day_of_week$get_long(this4660,java_time_temporal_TemporalField4661){
return this4660.getLong(java_time_temporal_TemporalField4661);
});
cljc.java_time.day_of_week.get_declaring_class = (function cljc$java_time$day_of_week$get_declaring_class(this4662){
return this4662.declaringClass();
});
cljc.java_time.day_of_week.from = (function cljc$java_time$day_of_week$from(java_time_temporal_TemporalAccessor4663){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.DayOfWeek,"from",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_temporal_TemporalAccessor4663], 0));
});
cljc.java_time.day_of_week.is_supported = (function cljc$java_time$day_of_week$is_supported(this4664,java_time_temporal_TemporalField4665){
return this4664.isSupported(java_time_temporal_TemporalField4665);
});
cljc.java_time.day_of_week.hash_code = (function cljc$java_time$day_of_week$hash_code(this4666){
return this4666.hashCode();
});
cljc.java_time.day_of_week.adjust_into = (function cljc$java_time$day_of_week$adjust_into(this4667,java_time_temporal_Temporal4668){
return this4667.adjustInto(java_time_temporal_Temporal4668);
});
cljc.java_time.day_of_week.compare_to = (function cljc$java_time$day_of_week$compare_to(this4669,java_lang_Enum4670){
return this4669.compareTo(java_lang_Enum4670);
});
cljc.java_time.day_of_week.get = (function cljc$java_time$day_of_week$get(this4671,java_time_temporal_TemporalField4672){
return this4671.get(java_time_temporal_TemporalField4672);
});
cljc.java_time.day_of_week.equals = (function cljc$java_time$day_of_week$equals(this4673,java_lang_Object4674){
return this4673.equals(java_lang_Object4674);
});

//# sourceMappingURL=cljc.java_time.day_of_week.js.map
