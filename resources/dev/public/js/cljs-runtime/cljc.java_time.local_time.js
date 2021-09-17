goog.provide('cljc.java_time.local_time');
cljc.java_time.local_time.max = goog.object.get(java.time.LocalTime,"MAX");
cljc.java_time.local_time.noon = goog.object.get(java.time.LocalTime,"NOON");
cljc.java_time.local_time.midnight = goog.object.get(java.time.LocalTime,"MIDNIGHT");
cljc.java_time.local_time.min = goog.object.get(java.time.LocalTime,"MIN");
cljc.java_time.local_time.minus_minutes = (function cljc$java_time$local_time$minus_minutes(this4770,long4771){
return this4770.minusMinutes(long4771);
});
cljc.java_time.local_time.truncated_to = (function cljc$java_time$local_time$truncated_to(this4772,java_time_temporal_TemporalUnit4773){
return this4772.truncatedTo(java_time_temporal_TemporalUnit4773);
});
cljc.java_time.local_time.range = (function cljc$java_time$local_time$range(this4774,java_time_temporal_TemporalField4775){
return this4774.range(java_time_temporal_TemporalField4775);
});
cljc.java_time.local_time.get_hour = (function cljc$java_time$local_time$get_hour(this4776){
return this4776.hour();
});
cljc.java_time.local_time.at_offset = (function cljc$java_time$local_time$at_offset(this4777,java_time_ZoneOffset4778){
return this4777.atOffset(java_time_ZoneOffset4778);
});
cljc.java_time.local_time.minus_hours = (function cljc$java_time$local_time$minus_hours(this4779,long4780){
return this4779.minusHours(long4780);
});
cljc.java_time.local_time.of = (function cljc$java_time$local_time$of(var_args){
var G__72535 = arguments.length;
switch (G__72535) {
case 4:
return cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 2:
return cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$4 = (function (int4781,int4782,int4783,int4784){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.LocalTime,"of",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([int4781,int4782,int4783,int4784], 0));
}));

(cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$2 = (function (int4785,int4786){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.LocalTime,"of",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([int4785,int4786], 0));
}));

(cljc.java_time.local_time.of.cljs$core$IFn$_invoke$arity$3 = (function (int4787,int4788,int4789){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.LocalTime,"of",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([int4787,int4788,int4789], 0));
}));

(cljc.java_time.local_time.of.cljs$lang$maxFixedArity = 4);

cljc.java_time.local_time.get_nano = (function cljc$java_time$local_time$get_nano(this4790){
return this4790.nano();
});
cljc.java_time.local_time.minus_seconds = (function cljc$java_time$local_time$minus_seconds(this4791,long4792){
return this4791.minusSeconds(long4792);
});
cljc.java_time.local_time.get_second = (function cljc$java_time$local_time$get_second(this4793){
return this4793.second();
});
cljc.java_time.local_time.plus_nanos = (function cljc$java_time$local_time$plus_nanos(this4794,long4795){
return this4794.plusNanos(long4795);
});
cljc.java_time.local_time.plus = (function cljc$java_time$local_time$plus(var_args){
var G__72553 = arguments.length;
switch (G__72553) {
case 3:
return cljc.java_time.local_time.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.local_time.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_time.plus.cljs$core$IFn$_invoke$arity$3 = (function (this4796,long4797,java_time_temporal_TemporalUnit4798){
return this4796.plus(long4797,java_time_temporal_TemporalUnit4798);
}));

(cljc.java_time.local_time.plus.cljs$core$IFn$_invoke$arity$2 = (function (this4799,java_time_temporal_TemporalAmount4800){
return this4799.plus(java_time_temporal_TemporalAmount4800);
}));

(cljc.java_time.local_time.plus.cljs$lang$maxFixedArity = 3);

cljc.java_time.local_time.with_hour = (function cljc$java_time$local_time$with_hour(this4801,int4802){
return this4801.withHour(int4802);
});
cljc.java_time.local_time.with_minute = (function cljc$java_time$local_time$with_minute(this4803,int4804){
return this4803.withMinute(int4804);
});
cljc.java_time.local_time.plus_minutes = (function cljc$java_time$local_time$plus_minutes(this4805,long4806){
return this4805.plusMinutes(long4806);
});
cljc.java_time.local_time.query = (function cljc$java_time$local_time$query(this4807,java_time_temporal_TemporalQuery4808){
return this4807.query(java_time_temporal_TemporalQuery4808);
});
cljc.java_time.local_time.at_date = (function cljc$java_time$local_time$at_date(this4809,java_time_LocalDate4810){
return this4809.atDate(java_time_LocalDate4810);
});
cljc.java_time.local_time.to_string = (function cljc$java_time$local_time$to_string(this4811){
return this4811.toString();
});
cljc.java_time.local_time.is_before = (function cljc$java_time$local_time$is_before(this4812,java_time_LocalTime4813){
return this4812.isBefore(java_time_LocalTime4813);
});
cljc.java_time.local_time.minus = (function cljc$java_time$local_time$minus(var_args){
var G__72561 = arguments.length;
switch (G__72561) {
case 3:
return cljc.java_time.local_time.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.local_time.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_time.minus.cljs$core$IFn$_invoke$arity$3 = (function (this4814,long4815,java_time_temporal_TemporalUnit4816){
return this4814.minus(long4815,java_time_temporal_TemporalUnit4816);
}));

(cljc.java_time.local_time.minus.cljs$core$IFn$_invoke$arity$2 = (function (this4817,java_time_temporal_TemporalAmount4818){
return this4817.minus(java_time_temporal_TemporalAmount4818);
}));

(cljc.java_time.local_time.minus.cljs$lang$maxFixedArity = 3);

cljc.java_time.local_time.plus_hours = (function cljc$java_time$local_time$plus_hours(this4819,long4820){
return this4819.plusHours(long4820);
});
cljc.java_time.local_time.to_second_of_day = (function cljc$java_time$local_time$to_second_of_day(this4821){
return this4821.toSecondOfDay();
});
cljc.java_time.local_time.get_long = (function cljc$java_time$local_time$get_long(this4822,java_time_temporal_TemporalField4823){
return this4822.getLong(java_time_temporal_TemporalField4823);
});
cljc.java_time.local_time.with_nano = (function cljc$java_time$local_time$with_nano(this4824,int4825){
return this4824.withNano(int4825);
});
cljc.java_time.local_time.until = (function cljc$java_time$local_time$until(this4826,java_time_temporal_Temporal4827,java_time_temporal_TemporalUnit4828){
return this4826.until(java_time_temporal_Temporal4827,java_time_temporal_TemporalUnit4828);
});
cljc.java_time.local_time.of_nano_of_day = (function cljc$java_time$local_time$of_nano_of_day(long4829){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.LocalTime,"ofNanoOfDay",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([long4829], 0));
});
cljc.java_time.local_time.from = (function cljc$java_time$local_time$from(java_time_temporal_TemporalAccessor4830){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.LocalTime,"from",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_temporal_TemporalAccessor4830], 0));
});
cljc.java_time.local_time.is_after = (function cljc$java_time$local_time$is_after(this4831,java_time_LocalTime4832){
return this4831.isAfter(java_time_LocalTime4832);
});
cljc.java_time.local_time.minus_nanos = (function cljc$java_time$local_time$minus_nanos(this4833,long4834){
return this4833.minusNanos(long4834);
});
cljc.java_time.local_time.is_supported = (function cljc$java_time$local_time$is_supported(this4835,G__4836){
return this4835.isSupported(G__4836);
});
cljc.java_time.local_time.parse = (function cljc$java_time$local_time$parse(var_args){
var G__72572 = arguments.length;
switch (G__72572) {
case 2:
return cljc.java_time.local_time.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljc.java_time.local_time.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_time.parse.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_CharSequence4837,java_time_format_DateTimeFormatter4838){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.LocalTime,"parse",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_CharSequence4837,java_time_format_DateTimeFormatter4838], 0));
}));

(cljc.java_time.local_time.parse.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_CharSequence4839){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.LocalTime,"parse",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_CharSequence4839], 0));
}));

(cljc.java_time.local_time.parse.cljs$lang$maxFixedArity = 2);

cljc.java_time.local_time.with_second = (function cljc$java_time$local_time$with_second(this4840,int4841){
return this4840.withSecond(int4841);
});
cljc.java_time.local_time.get_minute = (function cljc$java_time$local_time$get_minute(this4842){
return this4842.minute();
});
cljc.java_time.local_time.hash_code = (function cljc$java_time$local_time$hash_code(this4843){
return this4843.hashCode();
});
cljc.java_time.local_time.adjust_into = (function cljc$java_time$local_time$adjust_into(this4844,java_time_temporal_Temporal4845){
return this4844.adjustInto(java_time_temporal_Temporal4845);
});
cljc.java_time.local_time.with$ = (function cljc$java_time$local_time$with(var_args){
var G__72606 = arguments.length;
switch (G__72606) {
case 3:
return cljc.java_time.local_time.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.local_time.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_time.with$.cljs$core$IFn$_invoke$arity$3 = (function (this4846,java_time_temporal_TemporalField4847,long4848){
return this4846.with(java_time_temporal_TemporalField4847,long4848);
}));

(cljc.java_time.local_time.with$.cljs$core$IFn$_invoke$arity$2 = (function (this4849,java_time_temporal_TemporalAdjuster4850){
return this4849.with(java_time_temporal_TemporalAdjuster4850);
}));

(cljc.java_time.local_time.with$.cljs$lang$maxFixedArity = 3);

cljc.java_time.local_time.now = (function cljc$java_time$local_time$now(var_args){
var G__72612 = arguments.length;
switch (G__72612) {
case 0:
return cljc.java_time.local_time.now.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljc.java_time.local_time.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.local_time.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.js_invoke(java.time.LocalTime,"now");
}));

(cljc.java_time.local_time.now.cljs$core$IFn$_invoke$arity$1 = (function (G__4852){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.LocalTime,"now",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__4852], 0));
}));

(cljc.java_time.local_time.now.cljs$lang$maxFixedArity = 1);

cljc.java_time.local_time.compare_to = (function cljc$java_time$local_time$compare_to(this4853,java_time_LocalTime4854){
return this4853.compareTo(java_time_LocalTime4854);
});
cljc.java_time.local_time.to_nano_of_day = (function cljc$java_time$local_time$to_nano_of_day(this4855){
return this4855.toNanoOfDay();
});
cljc.java_time.local_time.plus_seconds = (function cljc$java_time$local_time$plus_seconds(this4856,long4857){
return this4856.plusSeconds(long4857);
});
cljc.java_time.local_time.get = (function cljc$java_time$local_time$get(this4858,java_time_temporal_TemporalField4859){
return this4858.get(java_time_temporal_TemporalField4859);
});
cljc.java_time.local_time.of_second_of_day = (function cljc$java_time$local_time$of_second_of_day(long4860){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.LocalTime,"ofSecondOfDay",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([long4860], 0));
});
cljc.java_time.local_time.equals = (function cljc$java_time$local_time$equals(this4861,java_lang_Object4862){
return this4861.equals(java_lang_Object4862);
});
cljc.java_time.local_time.format = (function cljc$java_time$local_time$format(this4863,java_time_format_DateTimeFormatter4864){
return this4863.format(java_time_format_DateTimeFormatter4864);
});

//# sourceMappingURL=cljc.java_time.local_time.js.map
