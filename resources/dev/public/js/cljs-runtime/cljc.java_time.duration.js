goog.provide('cljc.java_time.duration');
cljc.java_time.duration.zero = goog.object.get(java.time.Duration,"ZERO");
cljc.java_time.duration.minus_minutes = (function cljc$java_time$duration$minus_minutes(this5119,long5120){
return this5119.minusMinutes(long5120);
});
cljc.java_time.duration.to_nanos = (function cljc$java_time$duration$to_nanos(this5121){
return this5121.toNanos();
});
cljc.java_time.duration.minus_millis = (function cljc$java_time$duration$minus_millis(this5122,long5123){
return this5122.minusMillis(long5123);
});
cljc.java_time.duration.minus_hours = (function cljc$java_time$duration$minus_hours(this5124,long5125){
return this5124.minusHours(long5125);
});
cljc.java_time.duration.of_days = (function cljc$java_time$duration$of_days(long5126){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Duration,"ofDays",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([long5126], 0));
});
cljc.java_time.duration.is_negative = (function cljc$java_time$duration$is_negative(this5127){
return this5127.isNegative();
});
cljc.java_time.duration.of = (function cljc$java_time$duration$of(long5128,java_time_temporal_TemporalUnit5129){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Duration,"of",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([long5128,java_time_temporal_TemporalUnit5129], 0));
});
cljc.java_time.duration.is_zero = (function cljc$java_time$duration$is_zero(this5130){
return this5130.isZero();
});
cljc.java_time.duration.multiplied_by = (function cljc$java_time$duration$multiplied_by(this5131,long5132){
return this5131.multipliedBy(long5132);
});
cljc.java_time.duration.with_nanos = (function cljc$java_time$duration$with_nanos(this5133,int5134){
return this5133.withNanos(int5134);
});
cljc.java_time.duration.get_units = (function cljc$java_time$duration$get_units(this5135){
return this5135.units();
});
cljc.java_time.duration.get_nano = (function cljc$java_time$duration$get_nano(this5136){
return this5136.nano();
});
cljc.java_time.duration.plus_millis = (function cljc$java_time$duration$plus_millis(this5137,long5138){
return this5137.plusMillis(long5138);
});
cljc.java_time.duration.to_minutes = (function cljc$java_time$duration$to_minutes(this5139){
return this5139.toMinutes();
});
cljc.java_time.duration.minus_seconds = (function cljc$java_time$duration$minus_seconds(this5140,long5141){
return this5140.minusSeconds(long5141);
});
cljc.java_time.duration.plus_nanos = (function cljc$java_time$duration$plus_nanos(this5142,long5143){
return this5142.plusNanos(long5143);
});
cljc.java_time.duration.plus = (function cljc$java_time$duration$plus(var_args){
var G__72772 = arguments.length;
switch (G__72772) {
case 3:
return cljc.java_time.duration.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.duration.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.duration.plus.cljs$core$IFn$_invoke$arity$3 = (function (this5144,long5145,java_time_temporal_TemporalUnit5146){
return this5144.plus(long5145,java_time_temporal_TemporalUnit5146);
}));

(cljc.java_time.duration.plus.cljs$core$IFn$_invoke$arity$2 = (function (this5147,java_time_Duration5148){
return this5147.plus(java_time_Duration5148);
}));

(cljc.java_time.duration.plus.cljs$lang$maxFixedArity = 3);

cljc.java_time.duration.divided_by = (function cljc$java_time$duration$divided_by(this5149,long5150){
return this5149.dividedBy(long5150);
});
cljc.java_time.duration.plus_minutes = (function cljc$java_time$duration$plus_minutes(this5151,long5152){
return this5151.plusMinutes(long5152);
});
cljc.java_time.duration.to_string = (function cljc$java_time$duration$to_string(this5153){
return this5153.toString();
});
cljc.java_time.duration.minus = (function cljc$java_time$duration$minus(var_args){
var G__72774 = arguments.length;
switch (G__72774) {
case 2:
return cljc.java_time.duration.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.duration.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.duration.minus.cljs$core$IFn$_invoke$arity$2 = (function (this5154,java_time_Duration5155){
return this5154.minus(java_time_Duration5155);
}));

(cljc.java_time.duration.minus.cljs$core$IFn$_invoke$arity$3 = (function (this5156,long5157,java_time_temporal_TemporalUnit5158){
return this5156.minus(long5157,java_time_temporal_TemporalUnit5158);
}));

(cljc.java_time.duration.minus.cljs$lang$maxFixedArity = 3);

cljc.java_time.duration.add_to = (function cljc$java_time$duration$add_to(this5159,java_time_temporal_Temporal5160){
return this5159.addTo(java_time_temporal_Temporal5160);
});
cljc.java_time.duration.plus_hours = (function cljc$java_time$duration$plus_hours(this5161,long5162){
return this5161.plusHours(long5162);
});
cljc.java_time.duration.plus_days = (function cljc$java_time$duration$plus_days(this5163,long5164){
return this5163.plusDays(long5164);
});
cljc.java_time.duration.of_hours = (function cljc$java_time$duration$of_hours(long5165){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Duration,"ofHours",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([long5165], 0));
});
cljc.java_time.duration.to_millis = (function cljc$java_time$duration$to_millis(this5166){
return this5166.toMillis();
});
cljc.java_time.duration.to_hours = (function cljc$java_time$duration$to_hours(this5167){
return this5167.toHours();
});
cljc.java_time.duration.of_nanos = (function cljc$java_time$duration$of_nanos(long5168){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Duration,"ofNanos",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([long5168], 0));
});
cljc.java_time.duration.of_millis = (function cljc$java_time$duration$of_millis(long5169){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Duration,"ofMillis",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([long5169], 0));
});
cljc.java_time.duration.negated = (function cljc$java_time$duration$negated(this5170){
return this5170.negated();
});
cljc.java_time.duration.abs = (function cljc$java_time$duration$abs(this5171){
return this5171.abs();
});
cljc.java_time.duration.between = (function cljc$java_time$duration$between(java_time_temporal_Temporal5172,java_time_temporal_Temporal5173){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Duration,"between",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_temporal_Temporal5172,java_time_temporal_Temporal5173], 0));
});
cljc.java_time.duration.get_seconds = (function cljc$java_time$duration$get_seconds(this5174){
return this5174.seconds();
});
cljc.java_time.duration.from = (function cljc$java_time$duration$from(java_time_temporal_TemporalAmount5175){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Duration,"from",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_temporal_TemporalAmount5175], 0));
});
cljc.java_time.duration.minus_nanos = (function cljc$java_time$duration$minus_nanos(this5176,long5177){
return this5176.minusNanos(long5177);
});
cljc.java_time.duration.parse = (function cljc$java_time$duration$parse(java_lang_CharSequence5178){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Duration,"parse",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_CharSequence5178], 0));
});
cljc.java_time.duration.hash_code = (function cljc$java_time$duration$hash_code(this5179){
return this5179.hashCode();
});
cljc.java_time.duration.with_seconds = (function cljc$java_time$duration$with_seconds(this5180,long5181){
return this5180.withSeconds(long5181);
});
cljc.java_time.duration.of_minutes = (function cljc$java_time$duration$of_minutes(long5182){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Duration,"ofMinutes",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([long5182], 0));
});
cljc.java_time.duration.subtract_from = (function cljc$java_time$duration$subtract_from(this5183,java_time_temporal_Temporal5184){
return this5183.subtractFrom(java_time_temporal_Temporal5184);
});
cljc.java_time.duration.compare_to = (function cljc$java_time$duration$compare_to(this5185,java_time_Duration5186){
return this5185.compareTo(java_time_Duration5186);
});
cljc.java_time.duration.plus_seconds = (function cljc$java_time$duration$plus_seconds(this5187,long5188){
return this5187.plusSeconds(long5188);
});
cljc.java_time.duration.get = (function cljc$java_time$duration$get(this5189,java_time_temporal_TemporalUnit5190){
return this5189.get(java_time_temporal_TemporalUnit5190);
});
cljc.java_time.duration.equals = (function cljc$java_time$duration$equals(this5191,java_lang_Object5192){
return this5191.equals(java_lang_Object5192);
});
cljc.java_time.duration.of_seconds = (function cljc$java_time$duration$of_seconds(var_args){
var G__72776 = arguments.length;
switch (G__72776) {
case 1:
return cljc.java_time.duration.of_seconds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.duration.of_seconds.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.duration.of_seconds.cljs$core$IFn$_invoke$arity$1 = (function (long5193){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Duration,"ofSeconds",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([long5193], 0));
}));

(cljc.java_time.duration.of_seconds.cljs$core$IFn$_invoke$arity$2 = (function (long5194,long5195){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Duration,"ofSeconds",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([long5194,long5195], 0));
}));

(cljc.java_time.duration.of_seconds.cljs$lang$maxFixedArity = 2);

cljc.java_time.duration.minus_days = (function cljc$java_time$duration$minus_days(this5196,long5197){
return this5196.minusDays(long5197);
});
cljc.java_time.duration.to_days = (function cljc$java_time$duration$to_days(this5198){
return this5198.toDays();
});

//# sourceMappingURL=cljc.java_time.duration.js.map
