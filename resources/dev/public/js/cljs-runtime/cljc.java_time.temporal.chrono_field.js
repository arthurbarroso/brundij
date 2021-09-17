goog.provide('cljc.java_time.temporal.chrono_field');
cljc.java_time.temporal.chrono_field.milli_of_second = goog.object.get(java.time.temporal.ChronoField,"MILLI_OF_SECOND");
cljc.java_time.temporal.chrono_field.year_of_era = goog.object.get(java.time.temporal.ChronoField,"YEAR_OF_ERA");
cljc.java_time.temporal.chrono_field.clock_hour_of_day = goog.object.get(java.time.temporal.ChronoField,"CLOCK_HOUR_OF_DAY");
cljc.java_time.temporal.chrono_field.era = goog.object.get(java.time.temporal.ChronoField,"ERA");
cljc.java_time.temporal.chrono_field.instant_seconds = goog.object.get(java.time.temporal.ChronoField,"INSTANT_SECONDS");
cljc.java_time.temporal.chrono_field.ampm_of_day = goog.object.get(java.time.temporal.ChronoField,"AMPM_OF_DAY");
cljc.java_time.temporal.chrono_field.offset_seconds = goog.object.get(java.time.temporal.ChronoField,"OFFSET_SECONDS");
cljc.java_time.temporal.chrono_field.nano_of_second = goog.object.get(java.time.temporal.ChronoField,"NANO_OF_SECOND");
cljc.java_time.temporal.chrono_field.nano_of_day = goog.object.get(java.time.temporal.ChronoField,"NANO_OF_DAY");
cljc.java_time.temporal.chrono_field.aligned_day_of_week_in_month = goog.object.get(java.time.temporal.ChronoField,"ALIGNED_DAY_OF_WEEK_IN_MONTH");
cljc.java_time.temporal.chrono_field.month_of_year = goog.object.get(java.time.temporal.ChronoField,"MONTH_OF_YEAR");
cljc.java_time.temporal.chrono_field.hour_of_ampm = goog.object.get(java.time.temporal.ChronoField,"HOUR_OF_AMPM");
cljc.java_time.temporal.chrono_field.year = goog.object.get(java.time.temporal.ChronoField,"YEAR");
cljc.java_time.temporal.chrono_field.micro_of_second = goog.object.get(java.time.temporal.ChronoField,"MICRO_OF_SECOND");
cljc.java_time.temporal.chrono_field.aligned_week_of_year = goog.object.get(java.time.temporal.ChronoField,"ALIGNED_WEEK_OF_YEAR");
cljc.java_time.temporal.chrono_field.proleptic_month = goog.object.get(java.time.temporal.ChronoField,"PROLEPTIC_MONTH");
cljc.java_time.temporal.chrono_field.day_of_month = goog.object.get(java.time.temporal.ChronoField,"DAY_OF_MONTH");
cljc.java_time.temporal.chrono_field.second_of_minute = goog.object.get(java.time.temporal.ChronoField,"SECOND_OF_MINUTE");
cljc.java_time.temporal.chrono_field.second_of_day = goog.object.get(java.time.temporal.ChronoField,"SECOND_OF_DAY");
cljc.java_time.temporal.chrono_field.epoch_day = goog.object.get(java.time.temporal.ChronoField,"EPOCH_DAY");
cljc.java_time.temporal.chrono_field.day_of_year = goog.object.get(java.time.temporal.ChronoField,"DAY_OF_YEAR");
cljc.java_time.temporal.chrono_field.aligned_week_of_month = goog.object.get(java.time.temporal.ChronoField,"ALIGNED_WEEK_OF_MONTH");
cljc.java_time.temporal.chrono_field.day_of_week = goog.object.get(java.time.temporal.ChronoField,"DAY_OF_WEEK");
cljc.java_time.temporal.chrono_field.clock_hour_of_ampm = goog.object.get(java.time.temporal.ChronoField,"CLOCK_HOUR_OF_AMPM");
cljc.java_time.temporal.chrono_field.minute_of_day = goog.object.get(java.time.temporal.ChronoField,"MINUTE_OF_DAY");
cljc.java_time.temporal.chrono_field.aligned_day_of_week_in_year = goog.object.get(java.time.temporal.ChronoField,"ALIGNED_DAY_OF_WEEK_IN_YEAR");
cljc.java_time.temporal.chrono_field.minute_of_hour = goog.object.get(java.time.temporal.ChronoField,"MINUTE_OF_HOUR");
cljc.java_time.temporal.chrono_field.hour_of_day = goog.object.get(java.time.temporal.ChronoField,"HOUR_OF_DAY");
cljc.java_time.temporal.chrono_field.milli_of_day = goog.object.get(java.time.temporal.ChronoField,"MILLI_OF_DAY");
cljc.java_time.temporal.chrono_field.micro_of_day = goog.object.get(java.time.temporal.ChronoField,"MICRO_OF_DAY");
cljc.java_time.temporal.chrono_field.get_range_unit = (function cljc$java_time$temporal$chrono_field$get_range_unit(this5759){
return this5759.rangeUnit();
});
cljc.java_time.temporal.chrono_field.range = (function cljc$java_time$temporal$chrono_field$range(this5760){
return this5760.range();
});
cljc.java_time.temporal.chrono_field.values = (function cljc$java_time$temporal$chrono_field$values(){
return cljs.core.js_invoke(java.time.temporal.ChronoField,"values");
});
cljc.java_time.temporal.chrono_field.value_of = (function cljc$java_time$temporal$chrono_field$value_of(var_args){
var G__72788 = arguments.length;
switch (G__72788) {
case 1:
return cljc.java_time.temporal.chrono_field.value_of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.temporal.chrono_field.value_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.temporal.chrono_field.value_of.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_String5761){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.temporal.ChronoField,"valueOf",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_String5761], 0));
}));

(cljc.java_time.temporal.chrono_field.value_of.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_Class5762,java_lang_String5763){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.temporal.ChronoField,"valueOf",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_Class5762,java_lang_String5763], 0));
}));

(cljc.java_time.temporal.chrono_field.value_of.cljs$lang$maxFixedArity = 2);

cljc.java_time.temporal.chrono_field.resolve = (function cljc$java_time$temporal$chrono_field$resolve(this5764,java_util_Map5765,java_time_temporal_TemporalAccessor5766,java_time_format_ResolverStyle5767){
return this5764.resolve(java_util_Map5765,java_time_temporal_TemporalAccessor5766,java_time_format_ResolverStyle5767);
});
cljc.java_time.temporal.chrono_field.ordinal = (function cljc$java_time$temporal$chrono_field$ordinal(this5768){
return this5768.ordinal();
});
cljc.java_time.temporal.chrono_field.check_valid_int_value = (function cljc$java_time$temporal$chrono_field$check_valid_int_value(this5769,long5770){
return this5769.checkValidIntValue(long5770);
});
cljc.java_time.temporal.chrono_field.get_base_unit = (function cljc$java_time$temporal$chrono_field$get_base_unit(this5771){
return this5771.baseUnit();
});
cljc.java_time.temporal.chrono_field.to_string = (function cljc$java_time$temporal$chrono_field$to_string(this5772){
return this5772.toString();
});
cljc.java_time.temporal.chrono_field.is_date_based = (function cljc$java_time$temporal$chrono_field$is_date_based(this5773){
return this5773.isDateBased();
});
cljc.java_time.temporal.chrono_field.get_display_name = (function cljc$java_time$temporal$chrono_field$get_display_name(this5774,java_util_Locale5775){
return this5774.displayName(java_util_Locale5775);
});
cljc.java_time.temporal.chrono_field.name = (function cljc$java_time$temporal$chrono_field$name(this5776){
return this5776.name();
});
cljc.java_time.temporal.chrono_field.is_supported_by = (function cljc$java_time$temporal$chrono_field$is_supported_by(this5777,java_time_temporal_TemporalAccessor5778){
return this5777.isSupportedBy(java_time_temporal_TemporalAccessor5778);
});
cljc.java_time.temporal.chrono_field.range_refined_by = (function cljc$java_time$temporal$chrono_field$range_refined_by(this5779,java_time_temporal_TemporalAccessor5780){
return this5779.rangeRefinedBy(java_time_temporal_TemporalAccessor5780);
});
cljc.java_time.temporal.chrono_field.get_declaring_class = (function cljc$java_time$temporal$chrono_field$get_declaring_class(this5781){
return this5781.declaringClass();
});
cljc.java_time.temporal.chrono_field.hash_code = (function cljc$java_time$temporal$chrono_field$hash_code(this5782){
return this5782.hashCode();
});
cljc.java_time.temporal.chrono_field.adjust_into = (function cljc$java_time$temporal$chrono_field$adjust_into(this5783,java_time_temporal_Temporal5784,long5785){
return this5783.adjustInto(java_time_temporal_Temporal5784,long5785);
});
cljc.java_time.temporal.chrono_field.get_from = (function cljc$java_time$temporal$chrono_field$get_from(this5786,java_time_temporal_TemporalAccessor5787){
return this5786.from(java_time_temporal_TemporalAccessor5787);
});
cljc.java_time.temporal.chrono_field.compare_to = (function cljc$java_time$temporal$chrono_field$compare_to(this5788,java_lang_Enum5789){
return this5788.compareTo(java_lang_Enum5789);
});
cljc.java_time.temporal.chrono_field.equals = (function cljc$java_time$temporal$chrono_field$equals(this5790,java_lang_Object5791){
return this5790.equals(java_lang_Object5791);
});
cljc.java_time.temporal.chrono_field.is_time_based = (function cljc$java_time$temporal$chrono_field$is_time_based(this5792){
return this5792.isTimeBased();
});
cljc.java_time.temporal.chrono_field.check_valid_value = (function cljc$java_time$temporal$chrono_field$check_valid_value(this5793,long5794){
return this5793.checkValidValue(long5794);
});

//# sourceMappingURL=cljc.java_time.temporal.chrono_field.js.map
