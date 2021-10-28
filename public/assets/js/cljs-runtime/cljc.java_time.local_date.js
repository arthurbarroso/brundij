goog.provide('cljc.java_time.local_date');
cljc.java_time.local_date.max = goog.object.get(java.time.LocalDate,"MAX");
cljc.java_time.local_date.min = goog.object.get(java.time.LocalDate,"MIN");
cljc.java_time.local_date.minus_weeks = (function cljc$java_time$local_date$minus_weeks(this3257,long3258){
return this3257.minusWeeks(long3258);
});
cljc.java_time.local_date.plus_weeks = (function cljc$java_time$local_date$plus_weeks(this3259,long3260){
return this3259.plusWeeks(long3260);
});
cljc.java_time.local_date.length_of_year = (function cljc$java_time$local_date$length_of_year(this3261){
return this3261.lengthOfYear();
});
cljc.java_time.local_date.range = (function cljc$java_time$local_date$range(this3262,java_time_temporal_TemporalField3263){
return this3262.range(java_time_temporal_TemporalField3263);
});
cljc.java_time.local_date.get_era = (function cljc$java_time$local_date$get_era(this3264){
return this3264.era();
});
cljc.java_time.local_date.of = (function cljc$java_time$local_date$of(G__3266,G__3267,G__3268){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.LocalDate,"of",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__3266,G__3267,G__3268], 0));
});
cljc.java_time.local_date.with_month = (function cljc$java_time$local_date$with_month(this3269,int3270){
return this3269.withMonth(int3270);
});
cljc.java_time.local_date.is_equal = (function cljc$java_time$local_date$is_equal(this3271,java_time_chrono_ChronoLocalDate3272){
return this3271.isEqual(java_time_chrono_ChronoLocalDate3272);
});
cljc.java_time.local_date.get_year = (function cljc$java_time$local_date$get_year(this3273){
return this3273.year();
});
cljc.java_time.local_date.to_epoch_day = (function cljc$java_time$local_date$to_epoch_day(this3274){
return this3274.toEpochDay();
});
cljc.java_time.local_date.get_day_of_year = (function cljc$java_time$local_date$get_day_of_year(this3275){
return this3275.dayOfYear();
});
cljc.java_time.local_date.plus = (function cljc$java_time$local_date$plus(var_args){
var G__54634 = arguments.length;
switch (G__54634) {
case 2:
return cljc.java_time.local_date.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.local_date.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_date.plus.cljs$core$IFn$_invoke$arity$2 = (function (this3276,java_time_temporal_TemporalAmount3277){
return this3276.plus(java_time_temporal_TemporalAmount3277);
}));

(cljc.java_time.local_date.plus.cljs$core$IFn$_invoke$arity$3 = (function (this3278,long3279,java_time_temporal_TemporalUnit3280){
return this3278.plus(long3279,java_time_temporal_TemporalUnit3280);
}));

(cljc.java_time.local_date.plus.cljs$lang$maxFixedArity = 3);

cljc.java_time.local_date.is_leap_year = (function cljc$java_time$local_date$is_leap_year(this3281){
return this3281.isLeapYear();
});
cljc.java_time.local_date.query = (function cljc$java_time$local_date$query(this3282,java_time_temporal_TemporalQuery3283){
return this3282.query(java_time_temporal_TemporalQuery3283);
});
cljc.java_time.local_date.get_day_of_week = (function cljc$java_time$local_date$get_day_of_week(this3284){
return this3284.dayOfWeek();
});
cljc.java_time.local_date.to_string = (function cljc$java_time$local_date$to_string(this3285){
return this3285.toString();
});
cljc.java_time.local_date.plus_months = (function cljc$java_time$local_date$plus_months(this3286,long3287){
return this3286.plusMonths(long3287);
});
cljc.java_time.local_date.is_before = (function cljc$java_time$local_date$is_before(this3288,java_time_chrono_ChronoLocalDate3289){
return this3288.isBefore(java_time_chrono_ChronoLocalDate3289);
});
cljc.java_time.local_date.minus_months = (function cljc$java_time$local_date$minus_months(this3290,long3291){
return this3290.minusMonths(long3291);
});
cljc.java_time.local_date.minus = (function cljc$java_time$local_date$minus(var_args){
var G__54645 = arguments.length;
switch (G__54645) {
case 3:
return cljc.java_time.local_date.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.local_date.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_date.minus.cljs$core$IFn$_invoke$arity$3 = (function (this3292,long3293,java_time_temporal_TemporalUnit3294){
return this3292.minus(long3293,java_time_temporal_TemporalUnit3294);
}));

(cljc.java_time.local_date.minus.cljs$core$IFn$_invoke$arity$2 = (function (this3295,java_time_temporal_TemporalAmount3296){
return this3295.minus(java_time_temporal_TemporalAmount3296);
}));

(cljc.java_time.local_date.minus.cljs$lang$maxFixedArity = 3);

cljc.java_time.local_date.plus_days = (function cljc$java_time$local_date$plus_days(this3297,long3298){
return this3297.plusDays(long3298);
});
cljc.java_time.local_date.get_long = (function cljc$java_time$local_date$get_long(this3299,java_time_temporal_TemporalField3300){
return this3299.getLong(java_time_temporal_TemporalField3300);
});
cljc.java_time.local_date.with_year = (function cljc$java_time$local_date$with_year(this3301,int3302){
return this3301.withYear(int3302);
});
cljc.java_time.local_date.length_of_month = (function cljc$java_time$local_date$length_of_month(this3303){
return this3303.lengthOfMonth();
});
cljc.java_time.local_date.until = (function cljc$java_time$local_date$until(var_args){
var G__54674 = arguments.length;
switch (G__54674) {
case 3:
return cljc.java_time.local_date.until.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.local_date.until.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_date.until.cljs$core$IFn$_invoke$arity$3 = (function (this3304,java_time_temporal_Temporal3305,java_time_temporal_TemporalUnit3306){
return this3304.until(java_time_temporal_Temporal3305,java_time_temporal_TemporalUnit3306);
}));

(cljc.java_time.local_date.until.cljs$core$IFn$_invoke$arity$2 = (function (this3307,java_time_chrono_ChronoLocalDate3308){
return this3307.until(java_time_chrono_ChronoLocalDate3308);
}));

(cljc.java_time.local_date.until.cljs$lang$maxFixedArity = 3);

cljc.java_time.local_date.of_epoch_day = (function cljc$java_time$local_date$of_epoch_day(long3309){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.LocalDate,"ofEpochDay",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([long3309], 0));
});
cljc.java_time.local_date.with_day_of_month = (function cljc$java_time$local_date$with_day_of_month(this3310,int3311){
return this3310.withDayOfMonth(int3311);
});
cljc.java_time.local_date.get_day_of_month = (function cljc$java_time$local_date$get_day_of_month(this3312){
return this3312.dayOfMonth();
});
cljc.java_time.local_date.from = (function cljc$java_time$local_date$from(java_time_temporal_TemporalAccessor3313){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.LocalDate,"from",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_temporal_TemporalAccessor3313], 0));
});
cljc.java_time.local_date.is_after = (function cljc$java_time$local_date$is_after(this3314,java_time_chrono_ChronoLocalDate3315){
return this3314.isAfter(java_time_chrono_ChronoLocalDate3315);
});
cljc.java_time.local_date.is_supported = (function cljc$java_time$local_date$is_supported(this3316,G__3317){
return this3316.isSupported(G__3317);
});
cljc.java_time.local_date.minus_years = (function cljc$java_time$local_date$minus_years(this3318,long3319){
return this3318.minusYears(long3319);
});
cljc.java_time.local_date.get_chronology = (function cljc$java_time$local_date$get_chronology(this3320){
return this3320.chronology();
});
cljc.java_time.local_date.parse = (function cljc$java_time$local_date$parse(var_args){
var G__54680 = arguments.length;
switch (G__54680) {
case 1:
return cljc.java_time.local_date.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.local_date.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_date.parse.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_CharSequence3321){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.LocalDate,"parse",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_CharSequence3321], 0));
}));

(cljc.java_time.local_date.parse.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_CharSequence3322,java_time_format_DateTimeFormatter3323){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.LocalDate,"parse",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_CharSequence3322,java_time_format_DateTimeFormatter3323], 0));
}));

(cljc.java_time.local_date.parse.cljs$lang$maxFixedArity = 2);

cljc.java_time.local_date.hash_code = (function cljc$java_time$local_date$hash_code(this3324){
return this3324.hashCode();
});
cljc.java_time.local_date.adjust_into = (function cljc$java_time$local_date$adjust_into(this3325,java_time_temporal_Temporal3326){
return this3325.adjustInto(java_time_temporal_Temporal3326);
});
cljc.java_time.local_date.with$ = (function cljc$java_time$local_date$with(var_args){
var G__54682 = arguments.length;
switch (G__54682) {
case 3:
return cljc.java_time.local_date.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.local_date.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_date.with$.cljs$core$IFn$_invoke$arity$3 = (function (this3327,java_time_temporal_TemporalField3328,long3329){
return this3327.with(java_time_temporal_TemporalField3328,long3329);
}));

(cljc.java_time.local_date.with$.cljs$core$IFn$_invoke$arity$2 = (function (this3330,java_time_temporal_TemporalAdjuster3331){
return this3330.with(java_time_temporal_TemporalAdjuster3331);
}));

(cljc.java_time.local_date.with$.cljs$lang$maxFixedArity = 3);

cljc.java_time.local_date.now = (function cljc$java_time$local_date$now(var_args){
var G__54686 = arguments.length;
switch (G__54686) {
case 0:
return cljc.java_time.local_date.now.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljc.java_time.local_date.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_date.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.js_invoke(java.time.LocalDate,"now");
}));

(cljc.java_time.local_date.now.cljs$core$IFn$_invoke$arity$1 = (function (G__3333){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.LocalDate,"now",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__3333], 0));
}));

(cljc.java_time.local_date.now.cljs$lang$maxFixedArity = 1);

cljc.java_time.local_date.at_start_of_day = (function cljc$java_time$local_date$at_start_of_day(var_args){
var G__54688 = arguments.length;
switch (G__54688) {
case 1:
return cljc.java_time.local_date.at_start_of_day.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.local_date.at_start_of_day.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_date.at_start_of_day.cljs$core$IFn$_invoke$arity$1 = (function (this3334){
return this3334.atStartOfDay();
}));

(cljc.java_time.local_date.at_start_of_day.cljs$core$IFn$_invoke$arity$2 = (function (this3335,java_time_ZoneId3336){
return this3335.atStartOfDay(java_time_ZoneId3336);
}));

(cljc.java_time.local_date.at_start_of_day.cljs$lang$maxFixedArity = 2);

cljc.java_time.local_date.get_month_value = (function cljc$java_time$local_date$get_month_value(this3337){
return this3337.monthValue();
});
cljc.java_time.local_date.with_day_of_year = (function cljc$java_time$local_date$with_day_of_year(this3338,int3339){
return this3338.withDayOfYear(int3339);
});
cljc.java_time.local_date.compare_to = (function cljc$java_time$local_date$compare_to(this3340,java_time_chrono_ChronoLocalDate3341){
return this3340.compareTo(java_time_chrono_ChronoLocalDate3341);
});
cljc.java_time.local_date.get_month = (function cljc$java_time$local_date$get_month(this3342){
return this3342.month();
});
cljc.java_time.local_date.of_year_day = (function cljc$java_time$local_date$of_year_day(int3343,int3344){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.LocalDate,"ofYearDay",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([int3343,int3344], 0));
});
cljc.java_time.local_date.get = (function cljc$java_time$local_date$get(this3345,java_time_temporal_TemporalField3346){
return this3345.get(java_time_temporal_TemporalField3346);
});
cljc.java_time.local_date.equals = (function cljc$java_time$local_date$equals(this3347,java_lang_Object3348){
return this3347.equals(java_lang_Object3348);
});
cljc.java_time.local_date.at_time = (function cljc$java_time$local_date$at_time(var_args){
var G__54694 = arguments.length;
switch (G__54694) {
case 4:
return cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 5:
return cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 2:
return cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$4 = (function (this3349,int3350,int3351,int3352){
return this3349.atTime(int3350,int3351,int3352);
}));

(cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$3 = (function (this3353,int3354,int3355){
return this3353.atTime(int3354,int3355);
}));

(cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$5 = (function (this3356,int3357,int3358,int3359,int3360){
return this3356.atTime(int3357,int3358,int3359,int3360);
}));

(cljc.java_time.local_date.at_time.cljs$core$IFn$_invoke$arity$2 = (function (this3361,G__3362){
return this3361.atTime(G__3362);
}));

(cljc.java_time.local_date.at_time.cljs$lang$maxFixedArity = 5);

cljc.java_time.local_date.format = (function cljc$java_time$local_date$format(this3363,java_time_format_DateTimeFormatter3364){
return this3363.format(java_time_format_DateTimeFormatter3364);
});
cljc.java_time.local_date.plus_years = (function cljc$java_time$local_date$plus_years(this3365,long3366){
return this3365.plusYears(long3366);
});
cljc.java_time.local_date.minus_days = (function cljc$java_time$local_date$minus_days(this3367,long3368){
return this3367.minusDays(long3368);
});

//# sourceMappingURL=cljc.java_time.local_date.js.map
