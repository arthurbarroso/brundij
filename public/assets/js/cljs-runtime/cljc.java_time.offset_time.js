goog.provide('cljc.java_time.offset_time');
cljc.java_time.offset_time.min = goog.object.get(java.time.OffsetTime,"MIN");
cljc.java_time.offset_time.max = goog.object.get(java.time.OffsetTime,"MAX");
cljc.java_time.offset_time.minus_minutes = (function cljc$java_time$offset_time$minus_minutes(this4060,long4061){
return this4060.minusMinutes(long4061);
});
cljc.java_time.offset_time.truncated_to = (function cljc$java_time$offset_time$truncated_to(this4062,java_time_temporal_TemporalUnit4063){
return this4062.truncatedTo(java_time_temporal_TemporalUnit4063);
});
cljc.java_time.offset_time.range = (function cljc$java_time$offset_time$range(this4064,java_time_temporal_TemporalField4065){
return this4064.range(java_time_temporal_TemporalField4065);
});
cljc.java_time.offset_time.get_hour = (function cljc$java_time$offset_time$get_hour(this4066){
return this4066.hour();
});
cljc.java_time.offset_time.minus_hours = (function cljc$java_time$offset_time$minus_hours(this4067,long4068){
return this4067.minusHours(long4068);
});
cljc.java_time.offset_time.of = (function cljc$java_time$offset_time$of(var_args){
var G__54766 = arguments.length;
switch (G__54766) {
case 5:
return cljc.java_time.offset_time.of.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 2:
return cljc.java_time.offset_time.of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.offset_time.of.cljs$core$IFn$_invoke$arity$5 = (function (int4069,int4070,int4071,int4072,java_time_ZoneOffset4073){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.OffsetTime,"of",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([int4069,int4070,int4071,int4072,java_time_ZoneOffset4073], 0));
}));

(cljc.java_time.offset_time.of.cljs$core$IFn$_invoke$arity$2 = (function (java_time_LocalTime4074,java_time_ZoneOffset4075){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.OffsetTime,"of",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_LocalTime4074,java_time_ZoneOffset4075], 0));
}));

(cljc.java_time.offset_time.of.cljs$lang$maxFixedArity = 5);

cljc.java_time.offset_time.is_equal = (function cljc$java_time$offset_time$is_equal(this4076,java_time_OffsetTime4077){
return this4076.isEqual(java_time_OffsetTime4077);
});
cljc.java_time.offset_time.get_nano = (function cljc$java_time$offset_time$get_nano(this4078){
return this4078.nano();
});
cljc.java_time.offset_time.minus_seconds = (function cljc$java_time$offset_time$minus_seconds(this4079,long4080){
return this4079.minusSeconds(long4080);
});
cljc.java_time.offset_time.get_second = (function cljc$java_time$offset_time$get_second(this4081){
return this4081.second();
});
cljc.java_time.offset_time.plus_nanos = (function cljc$java_time$offset_time$plus_nanos(this4082,long4083){
return this4082.plusNanos(long4083);
});
cljc.java_time.offset_time.plus = (function cljc$java_time$offset_time$plus(var_args){
var G__54770 = arguments.length;
switch (G__54770) {
case 2:
return cljc.java_time.offset_time.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.offset_time.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.offset_time.plus.cljs$core$IFn$_invoke$arity$2 = (function (this4084,java_time_temporal_TemporalAmount4085){
return this4084.plus(java_time_temporal_TemporalAmount4085);
}));

(cljc.java_time.offset_time.plus.cljs$core$IFn$_invoke$arity$3 = (function (this4086,long4087,java_time_temporal_TemporalUnit4088){
return this4086.plus(long4087,java_time_temporal_TemporalUnit4088);
}));

(cljc.java_time.offset_time.plus.cljs$lang$maxFixedArity = 3);

cljc.java_time.offset_time.with_hour = (function cljc$java_time$offset_time$with_hour(this4089,int4090){
return this4089.withHour(int4090);
});
cljc.java_time.offset_time.with_minute = (function cljc$java_time$offset_time$with_minute(this4091,int4092){
return this4091.withMinute(int4092);
});
cljc.java_time.offset_time.plus_minutes = (function cljc$java_time$offset_time$plus_minutes(this4093,long4094){
return this4093.plusMinutes(long4094);
});
cljc.java_time.offset_time.query = (function cljc$java_time$offset_time$query(this4095,java_time_temporal_TemporalQuery4096){
return this4095.query(java_time_temporal_TemporalQuery4096);
});
cljc.java_time.offset_time.at_date = (function cljc$java_time$offset_time$at_date(this4097,java_time_LocalDate4098){
return this4097.atDate(java_time_LocalDate4098);
});
cljc.java_time.offset_time.with_offset_same_instant = (function cljc$java_time$offset_time$with_offset_same_instant(this4099,java_time_ZoneOffset4100){
return this4099.withOffsetSameInstant(java_time_ZoneOffset4100);
});
cljc.java_time.offset_time.to_string = (function cljc$java_time$offset_time$to_string(this4101){
return this4101.toString();
});
cljc.java_time.offset_time.is_before = (function cljc$java_time$offset_time$is_before(this4102,java_time_OffsetTime4103){
return this4102.isBefore(java_time_OffsetTime4103);
});
cljc.java_time.offset_time.minus = (function cljc$java_time$offset_time$minus(var_args){
var G__54774 = arguments.length;
switch (G__54774) {
case 3:
return cljc.java_time.offset_time.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.offset_time.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.offset_time.minus.cljs$core$IFn$_invoke$arity$3 = (function (this4104,long4105,java_time_temporal_TemporalUnit4106){
return this4104.minus(long4105,java_time_temporal_TemporalUnit4106);
}));

(cljc.java_time.offset_time.minus.cljs$core$IFn$_invoke$arity$2 = (function (this4107,java_time_temporal_TemporalAmount4108){
return this4107.minus(java_time_temporal_TemporalAmount4108);
}));

(cljc.java_time.offset_time.minus.cljs$lang$maxFixedArity = 3);

cljc.java_time.offset_time.plus_hours = (function cljc$java_time$offset_time$plus_hours(this4109,long4110){
return this4109.plusHours(long4110);
});
cljc.java_time.offset_time.to_local_time = (function cljc$java_time$offset_time$to_local_time(this4111){
return this4111.toLocalTime();
});
cljc.java_time.offset_time.get_long = (function cljc$java_time$offset_time$get_long(this4112,java_time_temporal_TemporalField4113){
return this4112.getLong(java_time_temporal_TemporalField4113);
});
cljc.java_time.offset_time.get_offset = (function cljc$java_time$offset_time$get_offset(this4114){
return this4114.offset();
});
cljc.java_time.offset_time.with_nano = (function cljc$java_time$offset_time$with_nano(this4115,int4116){
return this4115.withNano(int4116);
});
cljc.java_time.offset_time.until = (function cljc$java_time$offset_time$until(this4117,java_time_temporal_Temporal4118,java_time_temporal_TemporalUnit4119){
return this4117.until(java_time_temporal_Temporal4118,java_time_temporal_TemporalUnit4119);
});
cljc.java_time.offset_time.with_offset_same_local = (function cljc$java_time$offset_time$with_offset_same_local(this4120,java_time_ZoneOffset4121){
return this4120.withOffsetSameLocal(java_time_ZoneOffset4121);
});
cljc.java_time.offset_time.from = (function cljc$java_time$offset_time$from(java_time_temporal_TemporalAccessor4122){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.OffsetTime,"from",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_temporal_TemporalAccessor4122], 0));
});
cljc.java_time.offset_time.is_after = (function cljc$java_time$offset_time$is_after(this4123,java_time_OffsetTime4124){
return this4123.isAfter(java_time_OffsetTime4124);
});
cljc.java_time.offset_time.minus_nanos = (function cljc$java_time$offset_time$minus_nanos(this4125,long4126){
return this4125.minusNanos(long4126);
});
cljc.java_time.offset_time.is_supported = (function cljc$java_time$offset_time$is_supported(this4127,G__4128){
return this4127.isSupported(G__4128);
});
cljc.java_time.offset_time.parse = (function cljc$java_time$offset_time$parse(var_args){
var G__54782 = arguments.length;
switch (G__54782) {
case 1:
return cljc.java_time.offset_time.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.offset_time.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.offset_time.parse.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_CharSequence4129){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.OffsetTime,"parse",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_CharSequence4129], 0));
}));

(cljc.java_time.offset_time.parse.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_CharSequence4130,java_time_format_DateTimeFormatter4131){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.OffsetTime,"parse",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_CharSequence4130,java_time_format_DateTimeFormatter4131], 0));
}));

(cljc.java_time.offset_time.parse.cljs$lang$maxFixedArity = 2);

cljc.java_time.offset_time.with_second = (function cljc$java_time$offset_time$with_second(this4132,int4133){
return this4132.withSecond(int4133);
});
cljc.java_time.offset_time.get_minute = (function cljc$java_time$offset_time$get_minute(this4134){
return this4134.minute();
});
cljc.java_time.offset_time.hash_code = (function cljc$java_time$offset_time$hash_code(this4135){
return this4135.hashCode();
});
cljc.java_time.offset_time.adjust_into = (function cljc$java_time$offset_time$adjust_into(this4136,java_time_temporal_Temporal4137){
return this4136.adjustInto(java_time_temporal_Temporal4137);
});
cljc.java_time.offset_time.with$ = (function cljc$java_time$offset_time$with(var_args){
var G__54790 = arguments.length;
switch (G__54790) {
case 2:
return cljc.java_time.offset_time.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.offset_time.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.offset_time.with$.cljs$core$IFn$_invoke$arity$2 = (function (this4138,java_time_temporal_TemporalAdjuster4139){
return this4138.with(java_time_temporal_TemporalAdjuster4139);
}));

(cljc.java_time.offset_time.with$.cljs$core$IFn$_invoke$arity$3 = (function (this4140,java_time_temporal_TemporalField4141,long4142){
return this4140.with(java_time_temporal_TemporalField4141,long4142);
}));

(cljc.java_time.offset_time.with$.cljs$lang$maxFixedArity = 3);

cljc.java_time.offset_time.now = (function cljc$java_time$offset_time$now(var_args){
var G__54794 = arguments.length;
switch (G__54794) {
case 0:
return cljc.java_time.offset_time.now.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljc.java_time.offset_time.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.offset_time.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.js_invoke(java.time.OffsetTime,"now");
}));

(cljc.java_time.offset_time.now.cljs$core$IFn$_invoke$arity$1 = (function (G__4144){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.OffsetTime,"now",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__4144], 0));
}));

(cljc.java_time.offset_time.now.cljs$lang$maxFixedArity = 1);

cljc.java_time.offset_time.compare_to = (function cljc$java_time$offset_time$compare_to(this4145,java_time_OffsetTime4146){
return this4145.compareTo(java_time_OffsetTime4146);
});
cljc.java_time.offset_time.of_instant = (function cljc$java_time$offset_time$of_instant(java_time_Instant4147,java_time_ZoneId4148){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.OffsetTime,"ofInstant",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_Instant4147,java_time_ZoneId4148], 0));
});
cljc.java_time.offset_time.plus_seconds = (function cljc$java_time$offset_time$plus_seconds(this4149,long4150){
return this4149.plusSeconds(long4150);
});
cljc.java_time.offset_time.get = (function cljc$java_time$offset_time$get(this4151,java_time_temporal_TemporalField4152){
return this4151.get(java_time_temporal_TemporalField4152);
});
cljc.java_time.offset_time.equals = (function cljc$java_time$offset_time$equals(this4153,java_lang_Object4154){
return this4153.equals(java_lang_Object4154);
});
cljc.java_time.offset_time.format = (function cljc$java_time$offset_time$format(this4155,java_time_format_DateTimeFormatter4156){
return this4155.format(java_time_format_DateTimeFormatter4156);
});

//# sourceMappingURL=cljc.java_time.offset_time.js.map
