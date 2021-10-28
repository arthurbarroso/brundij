goog.provide('cljc.java_time.zoned_date_time');
cljc.java_time.zoned_date_time.minus_minutes = (function cljc$java_time$zoned_date_time$minus_minutes(this3815,long3816){
return this3815.minusMinutes(long3816);
});
cljc.java_time.zoned_date_time.truncated_to = (function cljc$java_time$zoned_date_time$truncated_to(this3817,java_time_temporal_TemporalUnit3818){
return this3817.truncatedTo(java_time_temporal_TemporalUnit3818);
});
cljc.java_time.zoned_date_time.minus_weeks = (function cljc$java_time$zoned_date_time$minus_weeks(this3819,long3820){
return this3819.minusWeeks(long3820);
});
cljc.java_time.zoned_date_time.to_instant = (function cljc$java_time$zoned_date_time$to_instant(this3821){
return this3821.toInstant();
});
cljc.java_time.zoned_date_time.plus_weeks = (function cljc$java_time$zoned_date_time$plus_weeks(this3822,long3823){
return this3822.plusWeeks(long3823);
});
cljc.java_time.zoned_date_time.range = (function cljc$java_time$zoned_date_time$range(this3824,java_time_temporal_TemporalField3825){
return this3824.range(java_time_temporal_TemporalField3825);
});
cljc.java_time.zoned_date_time.with_earlier_offset_at_overlap = (function cljc$java_time$zoned_date_time$with_earlier_offset_at_overlap(this3826){
return this3826.withEarlierOffsetAtOverlap();
});
cljc.java_time.zoned_date_time.get_hour = (function cljc$java_time$zoned_date_time$get_hour(this3827){
return this3827.hour();
});
cljc.java_time.zoned_date_time.minus_hours = (function cljc$java_time$zoned_date_time$minus_hours(this3828,long3829){
return this3828.minusHours(long3829);
});
cljc.java_time.zoned_date_time.of = (function cljc$java_time$zoned_date_time$of(var_args){
var G__54759 = arguments.length;
switch (G__54759) {
case 2:
return cljc.java_time.zoned_date_time.of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 8:
return cljc.java_time.zoned_date_time.of.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 3:
return cljc.java_time.zoned_date_time.of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.zoned_date_time.of.cljs$core$IFn$_invoke$arity$2 = (function (java_time_LocalDateTime3830,java_time_ZoneId3831){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.ZonedDateTime,"of",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_LocalDateTime3830,java_time_ZoneId3831], 0));
}));

(cljc.java_time.zoned_date_time.of.cljs$core$IFn$_invoke$arity$8 = (function (int3832,int3833,int3834,int3835,int3836,int3837,int3838,java_time_ZoneId3839){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.ZonedDateTime,"of",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([int3832,int3833,int3834,int3835,int3836,int3837,int3838,java_time_ZoneId3839], 0));
}));

(cljc.java_time.zoned_date_time.of.cljs$core$IFn$_invoke$arity$3 = (function (java_time_LocalDate3840,java_time_LocalTime3841,java_time_ZoneId3842){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.ZonedDateTime,"of",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_LocalDate3840,java_time_LocalTime3841,java_time_ZoneId3842], 0));
}));

(cljc.java_time.zoned_date_time.of.cljs$lang$maxFixedArity = 8);

cljc.java_time.zoned_date_time.with_month = (function cljc$java_time$zoned_date_time$with_month(this3843,int3844){
return this3843.withMonth(int3844);
});
cljc.java_time.zoned_date_time.is_equal = (function cljc$java_time$zoned_date_time$is_equal(this3845,java_time_chrono_ChronoZonedDateTime3846){
return this3845.isEqual(java_time_chrono_ChronoZonedDateTime3846);
});
cljc.java_time.zoned_date_time.get_nano = (function cljc$java_time$zoned_date_time$get_nano(this3847){
return this3847.nano();
});
cljc.java_time.zoned_date_time.of_local = (function cljc$java_time$zoned_date_time$of_local(java_time_LocalDateTime3848,java_time_ZoneId3849,java_time_ZoneOffset3850){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.ZonedDateTime,"ofLocal",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_LocalDateTime3848,java_time_ZoneId3849,java_time_ZoneOffset3850], 0));
});
cljc.java_time.zoned_date_time.get_year = (function cljc$java_time$zoned_date_time$get_year(this3851){
return this3851.year();
});
cljc.java_time.zoned_date_time.minus_seconds = (function cljc$java_time$zoned_date_time$minus_seconds(this3852,long3853){
return this3852.minusSeconds(long3853);
});
cljc.java_time.zoned_date_time.get_second = (function cljc$java_time$zoned_date_time$get_second(this3854){
return this3854.second();
});
cljc.java_time.zoned_date_time.plus_nanos = (function cljc$java_time$zoned_date_time$plus_nanos(this3855,long3856){
return this3855.plusNanos(long3856);
});
cljc.java_time.zoned_date_time.get_day_of_year = (function cljc$java_time$zoned_date_time$get_day_of_year(this3857){
return this3857.dayOfYear();
});
cljc.java_time.zoned_date_time.plus = (function cljc$java_time$zoned_date_time$plus(var_args){
var G__54764 = arguments.length;
switch (G__54764) {
case 2:
return cljc.java_time.zoned_date_time.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.zoned_date_time.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.zoned_date_time.plus.cljs$core$IFn$_invoke$arity$2 = (function (this3858,java_time_temporal_TemporalAmount3859){
return this3858.plus(java_time_temporal_TemporalAmount3859);
}));

(cljc.java_time.zoned_date_time.plus.cljs$core$IFn$_invoke$arity$3 = (function (this3860,long3861,java_time_temporal_TemporalUnit3862){
return this3860.plus(long3861,java_time_temporal_TemporalUnit3862);
}));

(cljc.java_time.zoned_date_time.plus.cljs$lang$maxFixedArity = 3);

cljc.java_time.zoned_date_time.with_hour = (function cljc$java_time$zoned_date_time$with_hour(this3863,int3864){
return this3863.withHour(int3864);
});
cljc.java_time.zoned_date_time.with_minute = (function cljc$java_time$zoned_date_time$with_minute(this3865,int3866){
return this3865.withMinute(int3866);
});
cljc.java_time.zoned_date_time.plus_minutes = (function cljc$java_time$zoned_date_time$plus_minutes(this3867,long3868){
return this3867.plusMinutes(long3868);
});
cljc.java_time.zoned_date_time.query = (function cljc$java_time$zoned_date_time$query(this3869,java_time_temporal_TemporalQuery3870){
return this3869.query(java_time_temporal_TemporalQuery3870);
});
cljc.java_time.zoned_date_time.get_day_of_week = (function cljc$java_time$zoned_date_time$get_day_of_week(this3871){
return this3871.dayOfWeek();
});
cljc.java_time.zoned_date_time.to_string = (function cljc$java_time$zoned_date_time$to_string(this3872){
return this3872.toString();
});
cljc.java_time.zoned_date_time.plus_months = (function cljc$java_time$zoned_date_time$plus_months(this3873,long3874){
return this3873.plusMonths(long3874);
});
cljc.java_time.zoned_date_time.is_before = (function cljc$java_time$zoned_date_time$is_before(this3875,java_time_chrono_ChronoZonedDateTime3876){
return this3875.isBefore(java_time_chrono_ChronoZonedDateTime3876);
});
cljc.java_time.zoned_date_time.minus_months = (function cljc$java_time$zoned_date_time$minus_months(this3877,long3878){
return this3877.minusMonths(long3878);
});
cljc.java_time.zoned_date_time.minus = (function cljc$java_time$zoned_date_time$minus(var_args){
var G__54772 = arguments.length;
switch (G__54772) {
case 2:
return cljc.java_time.zoned_date_time.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.zoned_date_time.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.zoned_date_time.minus.cljs$core$IFn$_invoke$arity$2 = (function (this3879,java_time_temporal_TemporalAmount3880){
return this3879.minus(java_time_temporal_TemporalAmount3880);
}));

(cljc.java_time.zoned_date_time.minus.cljs$core$IFn$_invoke$arity$3 = (function (this3881,long3882,java_time_temporal_TemporalUnit3883){
return this3881.minus(long3882,java_time_temporal_TemporalUnit3883);
}));

(cljc.java_time.zoned_date_time.minus.cljs$lang$maxFixedArity = 3);

cljc.java_time.zoned_date_time.with_fixed_offset_zone = (function cljc$java_time$zoned_date_time$with_fixed_offset_zone(this3884){
return this3884.withFixedOffsetZone();
});
cljc.java_time.zoned_date_time.plus_hours = (function cljc$java_time$zoned_date_time$plus_hours(this3885,long3886){
return this3885.plusHours(long3886);
});
cljc.java_time.zoned_date_time.with_zone_same_local = (function cljc$java_time$zoned_date_time$with_zone_same_local(this3887,java_time_ZoneId3888){
return this3887.withZoneSameLocal(java_time_ZoneId3888);
});
cljc.java_time.zoned_date_time.with_zone_same_instant = (function cljc$java_time$zoned_date_time$with_zone_same_instant(this3889,java_time_ZoneId3890){
return this3889.withZoneSameInstant(java_time_ZoneId3890);
});
cljc.java_time.zoned_date_time.plus_days = (function cljc$java_time$zoned_date_time$plus_days(this3891,long3892){
return this3891.plusDays(long3892);
});
cljc.java_time.zoned_date_time.to_local_time = (function cljc$java_time$zoned_date_time$to_local_time(this3893){
return this3893.toLocalTime();
});
cljc.java_time.zoned_date_time.get_long = (function cljc$java_time$zoned_date_time$get_long(this3894,java_time_temporal_TemporalField3895){
return this3894.getLong(java_time_temporal_TemporalField3895);
});
cljc.java_time.zoned_date_time.get_offset = (function cljc$java_time$zoned_date_time$get_offset(this3896){
return this3896.offset();
});
cljc.java_time.zoned_date_time.with_year = (function cljc$java_time$zoned_date_time$with_year(this3897,int3898){
return this3897.withYear(int3898);
});
cljc.java_time.zoned_date_time.with_nano = (function cljc$java_time$zoned_date_time$with_nano(this3899,int3900){
return this3899.withNano(int3900);
});
cljc.java_time.zoned_date_time.to_epoch_second = (function cljc$java_time$zoned_date_time$to_epoch_second(this3901){
return this3901.toEpochSecond();
});
cljc.java_time.zoned_date_time.to_offset_date_time = (function cljc$java_time$zoned_date_time$to_offset_date_time(this3902){
return this3902.toOffsetDateTime();
});
cljc.java_time.zoned_date_time.with_later_offset_at_overlap = (function cljc$java_time$zoned_date_time$with_later_offset_at_overlap(this3903){
return this3903.withLaterOffsetAtOverlap();
});
cljc.java_time.zoned_date_time.until = (function cljc$java_time$zoned_date_time$until(this3904,java_time_temporal_Temporal3905,java_time_temporal_TemporalUnit3906){
return this3904.until(java_time_temporal_Temporal3905,java_time_temporal_TemporalUnit3906);
});
cljc.java_time.zoned_date_time.get_zone = (function cljc$java_time$zoned_date_time$get_zone(this3907){
return this3907.zone();
});
cljc.java_time.zoned_date_time.with_day_of_month = (function cljc$java_time$zoned_date_time$with_day_of_month(this3908,int3909){
return this3908.withDayOfMonth(int3909);
});
cljc.java_time.zoned_date_time.get_day_of_month = (function cljc$java_time$zoned_date_time$get_day_of_month(this3910){
return this3910.dayOfMonth();
});
cljc.java_time.zoned_date_time.from = (function cljc$java_time$zoned_date_time$from(java_time_temporal_TemporalAccessor3911){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.ZonedDateTime,"from",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_temporal_TemporalAccessor3911], 0));
});
cljc.java_time.zoned_date_time.is_after = (function cljc$java_time$zoned_date_time$is_after(this3912,java_time_chrono_ChronoZonedDateTime3913){
return this3912.isAfter(java_time_chrono_ChronoZonedDateTime3913);
});
cljc.java_time.zoned_date_time.minus_nanos = (function cljc$java_time$zoned_date_time$minus_nanos(this3914,long3915){
return this3914.minusNanos(long3915);
});
cljc.java_time.zoned_date_time.is_supported = (function cljc$java_time$zoned_date_time$is_supported(this3916,G__3917){
return this3916.isSupported(G__3917);
});
cljc.java_time.zoned_date_time.minus_years = (function cljc$java_time$zoned_date_time$minus_years(this3918,long3919){
return this3918.minusYears(long3919);
});
cljc.java_time.zoned_date_time.get_chronology = (function cljc$java_time$zoned_date_time$get_chronology(this3920){
return this3920.chronology();
});
cljc.java_time.zoned_date_time.parse = (function cljc$java_time$zoned_date_time$parse(var_args){
var G__54784 = arguments.length;
switch (G__54784) {
case 2:
return cljc.java_time.zoned_date_time.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljc.java_time.zoned_date_time.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.zoned_date_time.parse.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_CharSequence3921,java_time_format_DateTimeFormatter3922){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.ZonedDateTime,"parse",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_CharSequence3921,java_time_format_DateTimeFormatter3922], 0));
}));

(cljc.java_time.zoned_date_time.parse.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_CharSequence3923){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.ZonedDateTime,"parse",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_CharSequence3923], 0));
}));

(cljc.java_time.zoned_date_time.parse.cljs$lang$maxFixedArity = 2);

cljc.java_time.zoned_date_time.with_second = (function cljc$java_time$zoned_date_time$with_second(this3924,int3925){
return this3924.withSecond(int3925);
});
cljc.java_time.zoned_date_time.to_local_date = (function cljc$java_time$zoned_date_time$to_local_date(this3926){
return this3926.toLocalDate();
});
cljc.java_time.zoned_date_time.get_minute = (function cljc$java_time$zoned_date_time$get_minute(this3927){
return this3927.minute();
});
cljc.java_time.zoned_date_time.hash_code = (function cljc$java_time$zoned_date_time$hash_code(this3928){
return this3928.hashCode();
});
cljc.java_time.zoned_date_time.with$ = (function cljc$java_time$zoned_date_time$with(var_args){
var G__54786 = arguments.length;
switch (G__54786) {
case 2:
return cljc.java_time.zoned_date_time.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.zoned_date_time.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.zoned_date_time.with$.cljs$core$IFn$_invoke$arity$2 = (function (this3929,java_time_temporal_TemporalAdjuster3930){
return this3929.with(java_time_temporal_TemporalAdjuster3930);
}));

(cljc.java_time.zoned_date_time.with$.cljs$core$IFn$_invoke$arity$3 = (function (this3931,java_time_temporal_TemporalField3932,long3933){
return this3931.with(java_time_temporal_TemporalField3932,long3933);
}));

(cljc.java_time.zoned_date_time.with$.cljs$lang$maxFixedArity = 3);

cljc.java_time.zoned_date_time.now = (function cljc$java_time$zoned_date_time$now(var_args){
var G__54788 = arguments.length;
switch (G__54788) {
case 0:
return cljc.java_time.zoned_date_time.now.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljc.java_time.zoned_date_time.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.zoned_date_time.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.js_invoke(java.time.ZonedDateTime,"now");
}));

(cljc.java_time.zoned_date_time.now.cljs$core$IFn$_invoke$arity$1 = (function (G__3935){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.ZonedDateTime,"now",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__3935], 0));
}));

(cljc.java_time.zoned_date_time.now.cljs$lang$maxFixedArity = 1);

cljc.java_time.zoned_date_time.to_local_date_time = (function cljc$java_time$zoned_date_time$to_local_date_time(this3936){
return this3936.toLocalDateTime();
});
cljc.java_time.zoned_date_time.get_month_value = (function cljc$java_time$zoned_date_time$get_month_value(this3937){
return this3937.monthValue();
});
cljc.java_time.zoned_date_time.with_day_of_year = (function cljc$java_time$zoned_date_time$with_day_of_year(this3938,int3939){
return this3938.withDayOfYear(int3939);
});
cljc.java_time.zoned_date_time.compare_to = (function cljc$java_time$zoned_date_time$compare_to(this3940,java_time_chrono_ChronoZonedDateTime3941){
return this3940.compareTo(java_time_chrono_ChronoZonedDateTime3941);
});
cljc.java_time.zoned_date_time.of_strict = (function cljc$java_time$zoned_date_time$of_strict(java_time_LocalDateTime3942,java_time_ZoneOffset3943,java_time_ZoneId3944){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.ZonedDateTime,"ofStrict",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_LocalDateTime3942,java_time_ZoneOffset3943,java_time_ZoneId3944], 0));
});
cljc.java_time.zoned_date_time.get_month = (function cljc$java_time$zoned_date_time$get_month(this3945){
return this3945.month();
});
cljc.java_time.zoned_date_time.of_instant = (function cljc$java_time$zoned_date_time$of_instant(var_args){
var G__54799 = arguments.length;
switch (G__54799) {
case 3:
return cljc.java_time.zoned_date_time.of_instant.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.zoned_date_time.of_instant.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.zoned_date_time.of_instant.cljs$core$IFn$_invoke$arity$3 = (function (java_time_LocalDateTime3946,java_time_ZoneOffset3947,java_time_ZoneId3948){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.ZonedDateTime,"ofInstant",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_LocalDateTime3946,java_time_ZoneOffset3947,java_time_ZoneId3948], 0));
}));

(cljc.java_time.zoned_date_time.of_instant.cljs$core$IFn$_invoke$arity$2 = (function (java_time_Instant3949,java_time_ZoneId3950){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.ZonedDateTime,"ofInstant",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_Instant3949,java_time_ZoneId3950], 0));
}));

(cljc.java_time.zoned_date_time.of_instant.cljs$lang$maxFixedArity = 3);

cljc.java_time.zoned_date_time.plus_seconds = (function cljc$java_time$zoned_date_time$plus_seconds(this3951,long3952){
return this3951.plusSeconds(long3952);
});
cljc.java_time.zoned_date_time.get = (function cljc$java_time$zoned_date_time$get(this3953,java_time_temporal_TemporalField3954){
return this3953.get(java_time_temporal_TemporalField3954);
});
cljc.java_time.zoned_date_time.equals = (function cljc$java_time$zoned_date_time$equals(this3955,java_lang_Object3956){
return this3955.equals(java_lang_Object3956);
});
cljc.java_time.zoned_date_time.format = (function cljc$java_time$zoned_date_time$format(this3957,java_time_format_DateTimeFormatter3958){
return this3957.format(java_time_format_DateTimeFormatter3958);
});
cljc.java_time.zoned_date_time.plus_years = (function cljc$java_time$zoned_date_time$plus_years(this3959,long3960){
return this3959.plusYears(long3960);
});
cljc.java_time.zoned_date_time.minus_days = (function cljc$java_time$zoned_date_time$minus_days(this3961,long3962){
return this3961.minusDays(long3962);
});

//# sourceMappingURL=cljc.java_time.zoned_date_time.js.map
