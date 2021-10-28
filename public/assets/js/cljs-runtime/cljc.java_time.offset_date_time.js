goog.provide('cljc.java_time.offset_date_time');
cljc.java_time.offset_date_time.min = goog.object.get(java.time.OffsetDateTime,"MIN");
cljc.java_time.offset_date_time.max = goog.object.get(java.time.OffsetDateTime,"MAX");
cljc.java_time.offset_date_time.minus_minutes = (function cljc$java_time$offset_date_time$minus_minutes(this4434,long4435){
return this4434.minusMinutes(long4435);
});
cljc.java_time.offset_date_time.truncated_to = (function cljc$java_time$offset_date_time$truncated_to(this4436,java_time_temporal_TemporalUnit4437){
return this4436.truncatedTo(java_time_temporal_TemporalUnit4437);
});
cljc.java_time.offset_date_time.minus_weeks = (function cljc$java_time$offset_date_time$minus_weeks(this4438,long4439){
return this4438.minusWeeks(long4439);
});
cljc.java_time.offset_date_time.to_instant = (function cljc$java_time$offset_date_time$to_instant(this4440){
return this4440.toInstant();
});
cljc.java_time.offset_date_time.plus_weeks = (function cljc$java_time$offset_date_time$plus_weeks(this4441,long4442){
return this4441.plusWeeks(long4442);
});
cljc.java_time.offset_date_time.range = (function cljc$java_time$offset_date_time$range(this4443,java_time_temporal_TemporalField4444){
return this4443.range(java_time_temporal_TemporalField4444);
});
cljc.java_time.offset_date_time.get_hour = (function cljc$java_time$offset_date_time$get_hour(this4445){
return this4445.hour();
});
cljc.java_time.offset_date_time.at_zone_same_instant = (function cljc$java_time$offset_date_time$at_zone_same_instant(this4446,java_time_ZoneId4447){
return this4446.atZoneSameInstant(java_time_ZoneId4447);
});
cljc.java_time.offset_date_time.minus_hours = (function cljc$java_time$offset_date_time$minus_hours(this4448,long4449){
return this4448.minusHours(long4449);
});
cljc.java_time.offset_date_time.of = (function cljc$java_time$offset_date_time$of(var_args){
var G__54762 = arguments.length;
switch (G__54762) {
case 3:
return cljc.java_time.offset_date_time.of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.offset_date_time.of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 8:
return cljc.java_time.offset_date_time.of.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.offset_date_time.of.cljs$core$IFn$_invoke$arity$3 = (function (java_time_LocalDate4450,java_time_LocalTime4451,java_time_ZoneOffset4452){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.OffsetDateTime,"of",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_LocalDate4450,java_time_LocalTime4451,java_time_ZoneOffset4452], 0));
}));

(cljc.java_time.offset_date_time.of.cljs$core$IFn$_invoke$arity$2 = (function (java_time_LocalDateTime4453,java_time_ZoneOffset4454){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.OffsetDateTime,"of",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_LocalDateTime4453,java_time_ZoneOffset4454], 0));
}));

(cljc.java_time.offset_date_time.of.cljs$core$IFn$_invoke$arity$8 = (function (int4455,int4456,int4457,int4458,int4459,int4460,int4461,java_time_ZoneOffset4462){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.OffsetDateTime,"of",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([int4455,int4456,int4457,int4458,int4459,int4460,int4461,java_time_ZoneOffset4462], 0));
}));

(cljc.java_time.offset_date_time.of.cljs$lang$maxFixedArity = 8);

cljc.java_time.offset_date_time.with_month = (function cljc$java_time$offset_date_time$with_month(this4463,int4464){
return this4463.withMonth(int4464);
});
cljc.java_time.offset_date_time.is_equal = (function cljc$java_time$offset_date_time$is_equal(this4465,java_time_OffsetDateTime4466){
return this4465.isEqual(java_time_OffsetDateTime4466);
});
cljc.java_time.offset_date_time.get_nano = (function cljc$java_time$offset_date_time$get_nano(this4467){
return this4467.nano();
});
cljc.java_time.offset_date_time.to_offset_time = (function cljc$java_time$offset_date_time$to_offset_time(this4468){
return this4468.toOffsetTime();
});
cljc.java_time.offset_date_time.at_zone_similar_local = (function cljc$java_time$offset_date_time$at_zone_similar_local(this4469,java_time_ZoneId4470){
return this4469.atZoneSimilarLocal(java_time_ZoneId4470);
});
cljc.java_time.offset_date_time.get_year = (function cljc$java_time$offset_date_time$get_year(this4471){
return this4471.year();
});
cljc.java_time.offset_date_time.minus_seconds = (function cljc$java_time$offset_date_time$minus_seconds(this4472,long4473){
return this4472.minusSeconds(long4473);
});
cljc.java_time.offset_date_time.get_second = (function cljc$java_time$offset_date_time$get_second(this4474){
return this4474.second();
});
cljc.java_time.offset_date_time.plus_nanos = (function cljc$java_time$offset_date_time$plus_nanos(this4475,long4476){
return this4475.plusNanos(long4476);
});
cljc.java_time.offset_date_time.get_day_of_year = (function cljc$java_time$offset_date_time$get_day_of_year(this4477){
return this4477.dayOfYear();
});
cljc.java_time.offset_date_time.plus = (function cljc$java_time$offset_date_time$plus(var_args){
var G__54768 = arguments.length;
switch (G__54768) {
case 2:
return cljc.java_time.offset_date_time.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.offset_date_time.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.offset_date_time.plus.cljs$core$IFn$_invoke$arity$2 = (function (this4478,java_time_temporal_TemporalAmount4479){
return this4478.plus(java_time_temporal_TemporalAmount4479);
}));

(cljc.java_time.offset_date_time.plus.cljs$core$IFn$_invoke$arity$3 = (function (this4480,long4481,java_time_temporal_TemporalUnit4482){
return this4480.plus(long4481,java_time_temporal_TemporalUnit4482);
}));

(cljc.java_time.offset_date_time.plus.cljs$lang$maxFixedArity = 3);

cljc.java_time.offset_date_time.time_line_order = (function cljc$java_time$offset_date_time$time_line_order(){
return cljs.core.js_invoke(java.time.OffsetDateTime,"timeLineOrder");
});
cljc.java_time.offset_date_time.with_hour = (function cljc$java_time$offset_date_time$with_hour(this4483,int4484){
return this4483.withHour(int4484);
});
cljc.java_time.offset_date_time.with_minute = (function cljc$java_time$offset_date_time$with_minute(this4485,int4486){
return this4485.withMinute(int4486);
});
cljc.java_time.offset_date_time.plus_minutes = (function cljc$java_time$offset_date_time$plus_minutes(this4487,long4488){
return this4487.plusMinutes(long4488);
});
cljc.java_time.offset_date_time.query = (function cljc$java_time$offset_date_time$query(this4489,java_time_temporal_TemporalQuery4490){
return this4489.query(java_time_temporal_TemporalQuery4490);
});
cljc.java_time.offset_date_time.with_offset_same_instant = (function cljc$java_time$offset_date_time$with_offset_same_instant(this4491,java_time_ZoneOffset4492){
return this4491.withOffsetSameInstant(java_time_ZoneOffset4492);
});
cljc.java_time.offset_date_time.get_day_of_week = (function cljc$java_time$offset_date_time$get_day_of_week(this4493){
return this4493.dayOfWeek();
});
cljc.java_time.offset_date_time.to_string = (function cljc$java_time$offset_date_time$to_string(this4494){
return this4494.toString();
});
cljc.java_time.offset_date_time.plus_months = (function cljc$java_time$offset_date_time$plus_months(this4495,long4496){
return this4495.plusMonths(long4496);
});
cljc.java_time.offset_date_time.is_before = (function cljc$java_time$offset_date_time$is_before(this4497,java_time_OffsetDateTime4498){
return this4497.isBefore(java_time_OffsetDateTime4498);
});
cljc.java_time.offset_date_time.minus_months = (function cljc$java_time$offset_date_time$minus_months(this4499,long4500){
return this4499.minusMonths(long4500);
});
cljc.java_time.offset_date_time.minus = (function cljc$java_time$offset_date_time$minus(var_args){
var G__54776 = arguments.length;
switch (G__54776) {
case 2:
return cljc.java_time.offset_date_time.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.offset_date_time.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.offset_date_time.minus.cljs$core$IFn$_invoke$arity$2 = (function (this4501,java_time_temporal_TemporalAmount4502){
return this4501.minus(java_time_temporal_TemporalAmount4502);
}));

(cljc.java_time.offset_date_time.minus.cljs$core$IFn$_invoke$arity$3 = (function (this4503,long4504,java_time_temporal_TemporalUnit4505){
return this4503.minus(long4504,java_time_temporal_TemporalUnit4505);
}));

(cljc.java_time.offset_date_time.minus.cljs$lang$maxFixedArity = 3);

cljc.java_time.offset_date_time.plus_hours = (function cljc$java_time$offset_date_time$plus_hours(this4506,long4507){
return this4506.plusHours(long4507);
});
cljc.java_time.offset_date_time.plus_days = (function cljc$java_time$offset_date_time$plus_days(this4508,long4509){
return this4508.plusDays(long4509);
});
cljc.java_time.offset_date_time.to_local_time = (function cljc$java_time$offset_date_time$to_local_time(this4510){
return this4510.toLocalTime();
});
cljc.java_time.offset_date_time.get_long = (function cljc$java_time$offset_date_time$get_long(this4511,java_time_temporal_TemporalField4512){
return this4511.getLong(java_time_temporal_TemporalField4512);
});
cljc.java_time.offset_date_time.get_offset = (function cljc$java_time$offset_date_time$get_offset(this4513){
return this4513.offset();
});
cljc.java_time.offset_date_time.to_zoned_date_time = (function cljc$java_time$offset_date_time$to_zoned_date_time(this4514){
return this4514.toZonedDateTime();
});
cljc.java_time.offset_date_time.with_year = (function cljc$java_time$offset_date_time$with_year(this4515,int4516){
return this4515.withYear(int4516);
});
cljc.java_time.offset_date_time.with_nano = (function cljc$java_time$offset_date_time$with_nano(this4517,int4518){
return this4517.withNano(int4518);
});
cljc.java_time.offset_date_time.to_epoch_second = (function cljc$java_time$offset_date_time$to_epoch_second(this4519){
return this4519.toEpochSecond();
});
cljc.java_time.offset_date_time.until = (function cljc$java_time$offset_date_time$until(this4520,java_time_temporal_Temporal4521,java_time_temporal_TemporalUnit4522){
return this4520.until(java_time_temporal_Temporal4521,java_time_temporal_TemporalUnit4522);
});
cljc.java_time.offset_date_time.with_offset_same_local = (function cljc$java_time$offset_date_time$with_offset_same_local(this4523,java_time_ZoneOffset4524){
return this4523.withOffsetSameLocal(java_time_ZoneOffset4524);
});
cljc.java_time.offset_date_time.with_day_of_month = (function cljc$java_time$offset_date_time$with_day_of_month(this4525,int4526){
return this4525.withDayOfMonth(int4526);
});
cljc.java_time.offset_date_time.get_day_of_month = (function cljc$java_time$offset_date_time$get_day_of_month(this4527){
return this4527.dayOfMonth();
});
cljc.java_time.offset_date_time.from = (function cljc$java_time$offset_date_time$from(java_time_temporal_TemporalAccessor4528){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.OffsetDateTime,"from",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_temporal_TemporalAccessor4528], 0));
});
cljc.java_time.offset_date_time.is_after = (function cljc$java_time$offset_date_time$is_after(this4529,java_time_OffsetDateTime4530){
return this4529.isAfter(java_time_OffsetDateTime4530);
});
cljc.java_time.offset_date_time.minus_nanos = (function cljc$java_time$offset_date_time$minus_nanos(this4531,long4532){
return this4531.minusNanos(long4532);
});
cljc.java_time.offset_date_time.is_supported = (function cljc$java_time$offset_date_time$is_supported(this4533,G__4534){
return this4533.isSupported(G__4534);
});
cljc.java_time.offset_date_time.minus_years = (function cljc$java_time$offset_date_time$minus_years(this4535,long4536){
return this4535.minusYears(long4536);
});
cljc.java_time.offset_date_time.parse = (function cljc$java_time$offset_date_time$parse(var_args){
var G__54792 = arguments.length;
switch (G__54792) {
case 1:
return cljc.java_time.offset_date_time.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.offset_date_time.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.offset_date_time.parse.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_CharSequence4537){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.OffsetDateTime,"parse",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_CharSequence4537], 0));
}));

(cljc.java_time.offset_date_time.parse.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_CharSequence4538,java_time_format_DateTimeFormatter4539){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.OffsetDateTime,"parse",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_CharSequence4538,java_time_format_DateTimeFormatter4539], 0));
}));

(cljc.java_time.offset_date_time.parse.cljs$lang$maxFixedArity = 2);

cljc.java_time.offset_date_time.with_second = (function cljc$java_time$offset_date_time$with_second(this4540,int4541){
return this4540.withSecond(int4541);
});
cljc.java_time.offset_date_time.to_local_date = (function cljc$java_time$offset_date_time$to_local_date(this4542){
return this4542.toLocalDate();
});
cljc.java_time.offset_date_time.get_minute = (function cljc$java_time$offset_date_time$get_minute(this4543){
return this4543.minute();
});
cljc.java_time.offset_date_time.hash_code = (function cljc$java_time$offset_date_time$hash_code(this4544){
return this4544.hashCode();
});
cljc.java_time.offset_date_time.adjust_into = (function cljc$java_time$offset_date_time$adjust_into(this4545,java_time_temporal_Temporal4546){
return this4545.adjustInto(java_time_temporal_Temporal4546);
});
cljc.java_time.offset_date_time.with$ = (function cljc$java_time$offset_date_time$with(var_args){
var G__54812 = arguments.length;
switch (G__54812) {
case 2:
return cljc.java_time.offset_date_time.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.offset_date_time.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.offset_date_time.with$.cljs$core$IFn$_invoke$arity$2 = (function (this4547,java_time_temporal_TemporalAdjuster4548){
return this4547.with(java_time_temporal_TemporalAdjuster4548);
}));

(cljc.java_time.offset_date_time.with$.cljs$core$IFn$_invoke$arity$3 = (function (this4549,java_time_temporal_TemporalField4550,long4551){
return this4549.with(java_time_temporal_TemporalField4550,long4551);
}));

(cljc.java_time.offset_date_time.with$.cljs$lang$maxFixedArity = 3);

cljc.java_time.offset_date_time.now = (function cljc$java_time$offset_date_time$now(var_args){
var G__54818 = arguments.length;
switch (G__54818) {
case 1:
return cljc.java_time.offset_date_time.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return cljc.java_time.offset_date_time.now.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.offset_date_time.now.cljs$core$IFn$_invoke$arity$1 = (function (G__4553){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.OffsetDateTime,"now",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__4553], 0));
}));

(cljc.java_time.offset_date_time.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.js_invoke(java.time.OffsetDateTime,"now");
}));

(cljc.java_time.offset_date_time.now.cljs$lang$maxFixedArity = 1);

cljc.java_time.offset_date_time.to_local_date_time = (function cljc$java_time$offset_date_time$to_local_date_time(this4554){
return this4554.toLocalDateTime();
});
cljc.java_time.offset_date_time.get_month_value = (function cljc$java_time$offset_date_time$get_month_value(this4555){
return this4555.monthValue();
});
cljc.java_time.offset_date_time.with_day_of_year = (function cljc$java_time$offset_date_time$with_day_of_year(this4556,int4557){
return this4556.withDayOfYear(int4557);
});
cljc.java_time.offset_date_time.compare_to = (function cljc$java_time$offset_date_time$compare_to(this4558,java_time_OffsetDateTime4559){
return this4558.compareTo(java_time_OffsetDateTime4559);
});
cljc.java_time.offset_date_time.get_month = (function cljc$java_time$offset_date_time$get_month(this4560){
return this4560.month();
});
cljc.java_time.offset_date_time.of_instant = (function cljc$java_time$offset_date_time$of_instant(java_time_Instant4561,java_time_ZoneId4562){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.OffsetDateTime,"ofInstant",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_Instant4561,java_time_ZoneId4562], 0));
});
cljc.java_time.offset_date_time.plus_seconds = (function cljc$java_time$offset_date_time$plus_seconds(this4563,long4564){
return this4563.plusSeconds(long4564);
});
cljc.java_time.offset_date_time.get = (function cljc$java_time$offset_date_time$get(this4565,java_time_temporal_TemporalField4566){
return this4565.get(java_time_temporal_TemporalField4566);
});
cljc.java_time.offset_date_time.equals = (function cljc$java_time$offset_date_time$equals(this4567,java_lang_Object4568){
return this4567.equals(java_lang_Object4568);
});
cljc.java_time.offset_date_time.format = (function cljc$java_time$offset_date_time$format(this4569,java_time_format_DateTimeFormatter4570){
return this4569.format(java_time_format_DateTimeFormatter4570);
});
cljc.java_time.offset_date_time.plus_years = (function cljc$java_time$offset_date_time$plus_years(this4571,long4572){
return this4571.plusYears(long4572);
});
cljc.java_time.offset_date_time.minus_days = (function cljc$java_time$offset_date_time$minus_days(this4573,long4574){
return this4573.minusDays(long4574);
});

//# sourceMappingURL=cljc.java_time.offset_date_time.js.map
