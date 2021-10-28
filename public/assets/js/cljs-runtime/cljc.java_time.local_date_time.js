goog.provide('cljc.java_time.local_date_time');
cljc.java_time.local_date_time.max = goog.object.get(java.time.LocalDateTime,"MAX");
cljc.java_time.local_date_time.min = goog.object.get(java.time.LocalDateTime,"MIN");
cljc.java_time.local_date_time.minus_minutes = (function cljc$java_time$local_date_time$minus_minutes(this3518,long3519){
return this3518.minusMinutes(long3519);
});
cljc.java_time.local_date_time.truncated_to = (function cljc$java_time$local_date_time$truncated_to(this3520,java_time_temporal_TemporalUnit3521){
return this3520.truncatedTo(java_time_temporal_TemporalUnit3521);
});
cljc.java_time.local_date_time.minus_weeks = (function cljc$java_time$local_date_time$minus_weeks(this3522,long3523){
return this3522.minusWeeks(long3523);
});
cljc.java_time.local_date_time.to_instant = (function cljc$java_time$local_date_time$to_instant(this3524,java_time_ZoneOffset3525){
return this3524.toInstant(java_time_ZoneOffset3525);
});
cljc.java_time.local_date_time.plus_weeks = (function cljc$java_time$local_date_time$plus_weeks(this3526,long3527){
return this3526.plusWeeks(long3527);
});
cljc.java_time.local_date_time.range = (function cljc$java_time$local_date_time$range(this3528,java_time_temporal_TemporalField3529){
return this3528.range(java_time_temporal_TemporalField3529);
});
cljc.java_time.local_date_time.of_epoch_second = (function cljc$java_time$local_date_time$of_epoch_second(long3530,int3531,java_time_ZoneOffset3532){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.LocalDateTime,"ofEpochSecond",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([long3530,int3531,java_time_ZoneOffset3532], 0));
});
cljc.java_time.local_date_time.get_hour = (function cljc$java_time$local_date_time$get_hour(this3533){
return this3533.hour();
});
cljc.java_time.local_date_time.at_offset = (function cljc$java_time$local_date_time$at_offset(this3534,java_time_ZoneOffset3535){
return this3534.atOffset(java_time_ZoneOffset3535);
});
cljc.java_time.local_date_time.minus_hours = (function cljc$java_time$local_date_time$minus_hours(this3536,long3537){
return this3536.minusHours(long3537);
});
cljc.java_time.local_date_time.of = (function cljc$java_time$local_date_time$of(var_args){
var G__54676 = arguments.length;
switch (G__54676) {
case 5:
return cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 7:
return cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 6:
return cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 2:
return cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$5 = (function (G__3539,G__3540,G__3541,G__3542,G__3543){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.LocalDateTime,"of",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__3539,G__3540,G__3541,G__3542,G__3543], 0));
}));

(cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$7 = (function (G__3545,G__3546,G__3547,G__3548,G__3549,G__3550,G__3551){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.LocalDateTime,"of",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__3545,G__3546,G__3547,G__3548,G__3549,G__3550,G__3551], 0));
}));

(cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$6 = (function (G__3553,G__3554,G__3555,G__3556,G__3557,G__3558){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.LocalDateTime,"of",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__3553,G__3554,G__3555,G__3556,G__3557,G__3558], 0));
}));

(cljc.java_time.local_date_time.of.cljs$core$IFn$_invoke$arity$2 = (function (java_time_LocalDate3559,java_time_LocalTime3560){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.LocalDateTime,"of",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_LocalDate3559,java_time_LocalTime3560], 0));
}));

(cljc.java_time.local_date_time.of.cljs$lang$maxFixedArity = 7);

cljc.java_time.local_date_time.with_month = (function cljc$java_time$local_date_time$with_month(this3561,int3562){
return this3561.withMonth(int3562);
});
cljc.java_time.local_date_time.is_equal = (function cljc$java_time$local_date_time$is_equal(this3563,java_time_chrono_ChronoLocalDateTime3564){
return this3563.isEqual(java_time_chrono_ChronoLocalDateTime3564);
});
cljc.java_time.local_date_time.get_nano = (function cljc$java_time$local_date_time$get_nano(this3565){
return this3565.nano();
});
cljc.java_time.local_date_time.get_year = (function cljc$java_time$local_date_time$get_year(this3566){
return this3566.year();
});
cljc.java_time.local_date_time.minus_seconds = (function cljc$java_time$local_date_time$minus_seconds(this3567,long3568){
return this3567.minusSeconds(long3568);
});
cljc.java_time.local_date_time.get_second = (function cljc$java_time$local_date_time$get_second(this3569){
return this3569.second();
});
cljc.java_time.local_date_time.plus_nanos = (function cljc$java_time$local_date_time$plus_nanos(this3570,long3571){
return this3570.plusNanos(long3571);
});
cljc.java_time.local_date_time.get_day_of_year = (function cljc$java_time$local_date_time$get_day_of_year(this3572){
return this3572.dayOfYear();
});
cljc.java_time.local_date_time.plus = (function cljc$java_time$local_date_time$plus(var_args){
var G__54684 = arguments.length;
switch (G__54684) {
case 3:
return cljc.java_time.local_date_time.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.local_date_time.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_date_time.plus.cljs$core$IFn$_invoke$arity$3 = (function (this3573,long3574,java_time_temporal_TemporalUnit3575){
return this3573.plus(long3574,java_time_temporal_TemporalUnit3575);
}));

(cljc.java_time.local_date_time.plus.cljs$core$IFn$_invoke$arity$2 = (function (this3576,java_time_temporal_TemporalAmount3577){
return this3576.plus(java_time_temporal_TemporalAmount3577);
}));

(cljc.java_time.local_date_time.plus.cljs$lang$maxFixedArity = 3);

cljc.java_time.local_date_time.with_hour = (function cljc$java_time$local_date_time$with_hour(this3578,int3579){
return this3578.withHour(int3579);
});
cljc.java_time.local_date_time.with_minute = (function cljc$java_time$local_date_time$with_minute(this3580,int3581){
return this3580.withMinute(int3581);
});
cljc.java_time.local_date_time.plus_minutes = (function cljc$java_time$local_date_time$plus_minutes(this3582,long3583){
return this3582.plusMinutes(long3583);
});
cljc.java_time.local_date_time.query = (function cljc$java_time$local_date_time$query(this3584,java_time_temporal_TemporalQuery3585){
return this3584.query(java_time_temporal_TemporalQuery3585);
});
cljc.java_time.local_date_time.get_day_of_week = (function cljc$java_time$local_date_time$get_day_of_week(this3586){
return this3586.dayOfWeek();
});
cljc.java_time.local_date_time.to_string = (function cljc$java_time$local_date_time$to_string(this3587){
return this3587.toString();
});
cljc.java_time.local_date_time.plus_months = (function cljc$java_time$local_date_time$plus_months(this3588,long3589){
return this3588.plusMonths(long3589);
});
cljc.java_time.local_date_time.is_before = (function cljc$java_time$local_date_time$is_before(this3590,java_time_chrono_ChronoLocalDateTime3591){
return this3590.isBefore(java_time_chrono_ChronoLocalDateTime3591);
});
cljc.java_time.local_date_time.minus_months = (function cljc$java_time$local_date_time$minus_months(this3592,long3593){
return this3592.minusMonths(long3593);
});
cljc.java_time.local_date_time.minus = (function cljc$java_time$local_date_time$minus(var_args){
var G__54692 = arguments.length;
switch (G__54692) {
case 3:
return cljc.java_time.local_date_time.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.local_date_time.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_date_time.minus.cljs$core$IFn$_invoke$arity$3 = (function (this3594,long3595,java_time_temporal_TemporalUnit3596){
return this3594.minus(long3595,java_time_temporal_TemporalUnit3596);
}));

(cljc.java_time.local_date_time.minus.cljs$core$IFn$_invoke$arity$2 = (function (this3597,java_time_temporal_TemporalAmount3598){
return this3597.minus(java_time_temporal_TemporalAmount3598);
}));

(cljc.java_time.local_date_time.minus.cljs$lang$maxFixedArity = 3);

cljc.java_time.local_date_time.at_zone = (function cljc$java_time$local_date_time$at_zone(this3599,java_time_ZoneId3600){
return this3599.atZone(java_time_ZoneId3600);
});
cljc.java_time.local_date_time.plus_hours = (function cljc$java_time$local_date_time$plus_hours(this3601,long3602){
return this3601.plusHours(long3602);
});
cljc.java_time.local_date_time.plus_days = (function cljc$java_time$local_date_time$plus_days(this3603,long3604){
return this3603.plusDays(long3604);
});
cljc.java_time.local_date_time.to_local_time = (function cljc$java_time$local_date_time$to_local_time(this3605){
return this3605.toLocalTime();
});
cljc.java_time.local_date_time.get_long = (function cljc$java_time$local_date_time$get_long(this3606,java_time_temporal_TemporalField3607){
return this3606.getLong(java_time_temporal_TemporalField3607);
});
cljc.java_time.local_date_time.with_year = (function cljc$java_time$local_date_time$with_year(this3608,int3609){
return this3608.withYear(int3609);
});
cljc.java_time.local_date_time.with_nano = (function cljc$java_time$local_date_time$with_nano(this3610,int3611){
return this3610.withNano(int3611);
});
cljc.java_time.local_date_time.to_epoch_second = (function cljc$java_time$local_date_time$to_epoch_second(this3612,java_time_ZoneOffset3613){
return this3612.toEpochSecond(java_time_ZoneOffset3613);
});
cljc.java_time.local_date_time.until = (function cljc$java_time$local_date_time$until(this3614,java_time_temporal_Temporal3615,java_time_temporal_TemporalUnit3616){
return this3614.until(java_time_temporal_Temporal3615,java_time_temporal_TemporalUnit3616);
});
cljc.java_time.local_date_time.with_day_of_month = (function cljc$java_time$local_date_time$with_day_of_month(this3617,int3618){
return this3617.withDayOfMonth(int3618);
});
cljc.java_time.local_date_time.get_day_of_month = (function cljc$java_time$local_date_time$get_day_of_month(this3619){
return this3619.dayOfMonth();
});
cljc.java_time.local_date_time.from = (function cljc$java_time$local_date_time$from(java_time_temporal_TemporalAccessor3620){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.LocalDateTime,"from",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_temporal_TemporalAccessor3620], 0));
});
cljc.java_time.local_date_time.is_after = (function cljc$java_time$local_date_time$is_after(this3621,java_time_chrono_ChronoLocalDateTime3622){
return this3621.isAfter(java_time_chrono_ChronoLocalDateTime3622);
});
cljc.java_time.local_date_time.minus_nanos = (function cljc$java_time$local_date_time$minus_nanos(this3623,long3624){
return this3623.minusNanos(long3624);
});
cljc.java_time.local_date_time.is_supported = (function cljc$java_time$local_date_time$is_supported(this3625,G__3626){
return this3625.isSupported(G__3626);
});
cljc.java_time.local_date_time.minus_years = (function cljc$java_time$local_date_time$minus_years(this3627,long3628){
return this3627.minusYears(long3628);
});
cljc.java_time.local_date_time.get_chronology = (function cljc$java_time$local_date_time$get_chronology(this3629){
return this3629.chronology();
});
cljc.java_time.local_date_time.parse = (function cljc$java_time$local_date_time$parse(var_args){
var G__54696 = arguments.length;
switch (G__54696) {
case 1:
return cljc.java_time.local_date_time.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.local_date_time.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_date_time.parse.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_CharSequence3630){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.LocalDateTime,"parse",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_CharSequence3630], 0));
}));

(cljc.java_time.local_date_time.parse.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_CharSequence3631,java_time_format_DateTimeFormatter3632){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.LocalDateTime,"parse",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_CharSequence3631,java_time_format_DateTimeFormatter3632], 0));
}));

(cljc.java_time.local_date_time.parse.cljs$lang$maxFixedArity = 2);

cljc.java_time.local_date_time.with_second = (function cljc$java_time$local_date_time$with_second(this3633,int3634){
return this3633.withSecond(int3634);
});
cljc.java_time.local_date_time.to_local_date = (function cljc$java_time$local_date_time$to_local_date(this3635){
return this3635.toLocalDate();
});
cljc.java_time.local_date_time.get_minute = (function cljc$java_time$local_date_time$get_minute(this3636){
return this3636.minute();
});
cljc.java_time.local_date_time.hash_code = (function cljc$java_time$local_date_time$hash_code(this3637){
return this3637.hashCode();
});
cljc.java_time.local_date_time.adjust_into = (function cljc$java_time$local_date_time$adjust_into(this3638,java_time_temporal_Temporal3639){
return this3638.adjustInto(java_time_temporal_Temporal3639);
});
cljc.java_time.local_date_time.with$ = (function cljc$java_time$local_date_time$with(var_args){
var G__54700 = arguments.length;
switch (G__54700) {
case 2:
return cljc.java_time.local_date_time.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.local_date_time.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_date_time.with$.cljs$core$IFn$_invoke$arity$2 = (function (this3640,java_time_temporal_TemporalAdjuster3641){
return this3640.with(java_time_temporal_TemporalAdjuster3641);
}));

(cljc.java_time.local_date_time.with$.cljs$core$IFn$_invoke$arity$3 = (function (this3642,java_time_temporal_TemporalField3643,long3644){
return this3642.with(java_time_temporal_TemporalField3643,long3644);
}));

(cljc.java_time.local_date_time.with$.cljs$lang$maxFixedArity = 3);

cljc.java_time.local_date_time.now = (function cljc$java_time$local_date_time$now(var_args){
var G__54713 = arguments.length;
switch (G__54713) {
case 0:
return cljc.java_time.local_date_time.now.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljc.java_time.local_date_time.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_date_time.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.js_invoke(java.time.LocalDateTime,"now");
}));

(cljc.java_time.local_date_time.now.cljs$core$IFn$_invoke$arity$1 = (function (G__3646){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.LocalDateTime,"now",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__3646], 0));
}));

(cljc.java_time.local_date_time.now.cljs$lang$maxFixedArity = 1);

cljc.java_time.local_date_time.get_month_value = (function cljc$java_time$local_date_time$get_month_value(this3647){
return this3647.monthValue();
});
cljc.java_time.local_date_time.with_day_of_year = (function cljc$java_time$local_date_time$with_day_of_year(this3648,int3649){
return this3648.withDayOfYear(int3649);
});
cljc.java_time.local_date_time.compare_to = (function cljc$java_time$local_date_time$compare_to(this3650,java_time_chrono_ChronoLocalDateTime3651){
return this3650.compareTo(java_time_chrono_ChronoLocalDateTime3651);
});
cljc.java_time.local_date_time.get_month = (function cljc$java_time$local_date_time$get_month(this3652){
return this3652.month();
});
cljc.java_time.local_date_time.of_instant = (function cljc$java_time$local_date_time$of_instant(java_time_Instant3653,java_time_ZoneId3654){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.LocalDateTime,"ofInstant",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_Instant3653,java_time_ZoneId3654], 0));
});
cljc.java_time.local_date_time.plus_seconds = (function cljc$java_time$local_date_time$plus_seconds(this3655,long3656){
return this3655.plusSeconds(long3656);
});
cljc.java_time.local_date_time.get = (function cljc$java_time$local_date_time$get(this3657,java_time_temporal_TemporalField3658){
return this3657.get(java_time_temporal_TemporalField3658);
});
cljc.java_time.local_date_time.equals = (function cljc$java_time$local_date_time$equals(this3659,java_lang_Object3660){
return this3659.equals(java_lang_Object3660);
});
cljc.java_time.local_date_time.format = (function cljc$java_time$local_date_time$format(this3661,java_time_format_DateTimeFormatter3662){
return this3661.format(java_time_format_DateTimeFormatter3662);
});
cljc.java_time.local_date_time.plus_years = (function cljc$java_time$local_date_time$plus_years(this3663,long3664){
return this3663.plusYears(long3664);
});
cljc.java_time.local_date_time.minus_days = (function cljc$java_time$local_date_time$minus_days(this3665,long3666){
return this3665.minusDays(long3666);
});

//# sourceMappingURL=cljc.java_time.local_date_time.js.map
