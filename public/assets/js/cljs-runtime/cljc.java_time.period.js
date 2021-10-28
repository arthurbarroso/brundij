goog.provide('cljc.java_time.period');
cljc.java_time.period.zero = goog.object.get(java.time.Period,"ZERO");
cljc.java_time.period.get_months = (function cljc$java_time$period$get_months(this3090){
return this3090.months();
});
cljc.java_time.period.of_weeks = (function cljc$java_time$period$of_weeks(int3091){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Period,"ofWeeks",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([int3091], 0));
});
cljc.java_time.period.of_days = (function cljc$java_time$period$of_days(int3092){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Period,"ofDays",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([int3092], 0));
});
cljc.java_time.period.is_negative = (function cljc$java_time$period$is_negative(this3093){
return this3093.isNegative();
});
cljc.java_time.period.of = (function cljc$java_time$period$of(int3094,int3095,int3096){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Period,"of",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([int3094,int3095,int3096], 0));
});
cljc.java_time.period.is_zero = (function cljc$java_time$period$is_zero(this3097){
return this3097.isZero();
});
cljc.java_time.period.multiplied_by = (function cljc$java_time$period$multiplied_by(this3098,int3099){
return this3098.multipliedBy(int3099);
});
cljc.java_time.period.get_units = (function cljc$java_time$period$get_units(this3100){
return this3100.units();
});
cljc.java_time.period.with_days = (function cljc$java_time$period$with_days(this3101,int3102){
return this3101.withDays(int3102);
});
cljc.java_time.period.plus = (function cljc$java_time$period$plus(this3103,java_time_temporal_TemporalAmount3104){
return this3103.plus(java_time_temporal_TemporalAmount3104);
});
cljc.java_time.period.of_months = (function cljc$java_time$period$of_months(int3105){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Period,"ofMonths",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([int3105], 0));
});
cljc.java_time.period.to_string = (function cljc$java_time$period$to_string(this3106){
return this3106.toString();
});
cljc.java_time.period.plus_months = (function cljc$java_time$period$plus_months(this3107,long3108){
return this3107.plusMonths(long3108);
});
cljc.java_time.period.minus_months = (function cljc$java_time$period$minus_months(this3109,long3110){
return this3109.minusMonths(long3110);
});
cljc.java_time.period.minus = (function cljc$java_time$period$minus(this3111,java_time_temporal_TemporalAmount3112){
return this3111.minus(java_time_temporal_TemporalAmount3112);
});
cljc.java_time.period.add_to = (function cljc$java_time$period$add_to(this3113,java_time_temporal_Temporal3114){
return this3113.addTo(java_time_temporal_Temporal3114);
});
cljc.java_time.period.to_total_months = (function cljc$java_time$period$to_total_months(this3115){
return this3115.toTotalMonths();
});
cljc.java_time.period.plus_days = (function cljc$java_time$period$plus_days(this3116,long3117){
return this3116.plusDays(long3117);
});
cljc.java_time.period.of_years = (function cljc$java_time$period$of_years(int3118){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Period,"ofYears",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([int3118], 0));
});
cljc.java_time.period.get_days = (function cljc$java_time$period$get_days(this3119){
return this3119.days();
});
cljc.java_time.period.negated = (function cljc$java_time$period$negated(this3120){
return this3120.negated();
});
cljc.java_time.period.get_years = (function cljc$java_time$period$get_years(this3121){
return this3121.years();
});
cljc.java_time.period.with_years = (function cljc$java_time$period$with_years(this3122,int3123){
return this3122.withYears(int3123);
});
cljc.java_time.period.normalized = (function cljc$java_time$period$normalized(this3124){
return this3124.normalized();
});
cljc.java_time.period.with_months = (function cljc$java_time$period$with_months(this3125,int3126){
return this3125.withMonths(int3126);
});
cljc.java_time.period.between = (function cljc$java_time$period$between(java_time_LocalDate3127,java_time_LocalDate3128){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Period,"between",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_LocalDate3127,java_time_LocalDate3128], 0));
});
cljc.java_time.period.from = (function cljc$java_time$period$from(java_time_temporal_TemporalAmount3129){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Period,"from",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_temporal_TemporalAmount3129], 0));
});
cljc.java_time.period.minus_years = (function cljc$java_time$period$minus_years(this3130,long3131){
return this3130.minusYears(long3131);
});
cljc.java_time.period.get_chronology = (function cljc$java_time$period$get_chronology(this3132){
return this3132.chronology();
});
cljc.java_time.period.parse = (function cljc$java_time$period$parse(java_lang_CharSequence3133){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Period,"parse",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_CharSequence3133], 0));
});
cljc.java_time.period.hash_code = (function cljc$java_time$period$hash_code(this3134){
return this3134.hashCode();
});
cljc.java_time.period.subtract_from = (function cljc$java_time$period$subtract_from(this3135,java_time_temporal_Temporal3136){
return this3135.subtractFrom(java_time_temporal_Temporal3136);
});
cljc.java_time.period.get = (function cljc$java_time$period$get(this3137,java_time_temporal_TemporalUnit3138){
return this3137.get(java_time_temporal_TemporalUnit3138);
});
cljc.java_time.period.equals = (function cljc$java_time$period$equals(this3139,java_lang_Object3140){
return this3139.equals(java_lang_Object3140);
});
cljc.java_time.period.plus_years = (function cljc$java_time$period$plus_years(this3141,long3142){
return this3141.plusYears(long3142);
});
cljc.java_time.period.minus_days = (function cljc$java_time$period$minus_days(this3143,long3144){
return this3143.minusDays(long3144);
});

//# sourceMappingURL=cljc.java_time.period.js.map
