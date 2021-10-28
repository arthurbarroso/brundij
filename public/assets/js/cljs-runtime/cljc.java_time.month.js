goog.provide('cljc.java_time.month');
cljc.java_time.month.may = goog.object.get(java.time.Month,"MAY");
cljc.java_time.month.december = goog.object.get(java.time.Month,"DECEMBER");
cljc.java_time.month.june = goog.object.get(java.time.Month,"JUNE");
cljc.java_time.month.september = goog.object.get(java.time.Month,"SEPTEMBER");
cljc.java_time.month.february = goog.object.get(java.time.Month,"FEBRUARY");
cljc.java_time.month.january = goog.object.get(java.time.Month,"JANUARY");
cljc.java_time.month.november = goog.object.get(java.time.Month,"NOVEMBER");
cljc.java_time.month.august = goog.object.get(java.time.Month,"AUGUST");
cljc.java_time.month.july = goog.object.get(java.time.Month,"JULY");
cljc.java_time.month.march = goog.object.get(java.time.Month,"MARCH");
cljc.java_time.month.october = goog.object.get(java.time.Month,"OCTOBER");
cljc.java_time.month.april = goog.object.get(java.time.Month,"APRIL");
cljc.java_time.month.range = (function cljc$java_time$month$range(this4906,java_time_temporal_TemporalField4907){
return this4906.range(java_time_temporal_TemporalField4907);
});
cljc.java_time.month.values = (function cljc$java_time$month$values(){
return cljs.core.js_invoke(java.time.Month,"values");
});
cljc.java_time.month.value_of = (function cljc$java_time$month$value_of(var_args){
var G__54830 = arguments.length;
switch (G__54830) {
case 1:
return cljc.java_time.month.value_of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.month.value_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.month.value_of.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_String4908){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Month,"valueOf",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_String4908], 0));
}));

(cljc.java_time.month.value_of.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_Class4909,java_lang_String4910){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Month,"valueOf",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_Class4909,java_lang_String4910], 0));
}));

(cljc.java_time.month.value_of.cljs$lang$maxFixedArity = 2);

cljc.java_time.month.of = (function cljc$java_time$month$of(int4911){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Month,"of",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([int4911], 0));
});
cljc.java_time.month.ordinal = (function cljc$java_time$month$ordinal(this4912){
return this4912.ordinal();
});
cljc.java_time.month.first_month_of_quarter = (function cljc$java_time$month$first_month_of_quarter(this4913){
return this4913.firstMonthOfQuarter();
});
cljc.java_time.month.min_length = (function cljc$java_time$month$min_length(this4914){
return this4914.minLength();
});
cljc.java_time.month.plus = (function cljc$java_time$month$plus(this4915,long4916){
return this4915.plus(long4916);
});
cljc.java_time.month.query = (function cljc$java_time$month$query(this4917,java_time_temporal_TemporalQuery4918){
return this4917.query(java_time_temporal_TemporalQuery4918);
});
cljc.java_time.month.to_string = (function cljc$java_time$month$to_string(this4919){
return this4919.toString();
});
cljc.java_time.month.first_day_of_year = (function cljc$java_time$month$first_day_of_year(this4920,boolean4921){
return this4920.firstDayOfYear(boolean4921);
});
cljc.java_time.month.minus = (function cljc$java_time$month$minus(this4922,long4923){
return this4922.minus(long4923);
});
cljc.java_time.month.get_display_name = (function cljc$java_time$month$get_display_name(this4924,java_time_format_TextStyle4925,java_util_Locale4926){
return this4924.displayName(java_time_format_TextStyle4925,java_util_Locale4926);
});
cljc.java_time.month.get_value = (function cljc$java_time$month$get_value(this4927){
return this4927.value();
});
cljc.java_time.month.max_length = (function cljc$java_time$month$max_length(this4928){
return this4928.maxLength();
});
cljc.java_time.month.name = (function cljc$java_time$month$name(this4929){
return this4929.name();
});
cljc.java_time.month.get_long = (function cljc$java_time$month$get_long(this4930,java_time_temporal_TemporalField4931){
return this4930.getLong(java_time_temporal_TemporalField4931);
});
cljc.java_time.month.length = (function cljc$java_time$month$length(this4932,boolean4933){
return this4932.length(boolean4933);
});
cljc.java_time.month.get_declaring_class = (function cljc$java_time$month$get_declaring_class(this4934){
return this4934.declaringClass();
});
cljc.java_time.month.from = (function cljc$java_time$month$from(java_time_temporal_TemporalAccessor4935){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Month,"from",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_temporal_TemporalAccessor4935], 0));
});
cljc.java_time.month.is_supported = (function cljc$java_time$month$is_supported(this4936,java_time_temporal_TemporalField4937){
return this4936.isSupported(java_time_temporal_TemporalField4937);
});
cljc.java_time.month.hash_code = (function cljc$java_time$month$hash_code(this4938){
return this4938.hashCode();
});
cljc.java_time.month.adjust_into = (function cljc$java_time$month$adjust_into(this4939,java_time_temporal_Temporal4940){
return this4939.adjustInto(java_time_temporal_Temporal4940);
});
cljc.java_time.month.compare_to = (function cljc$java_time$month$compare_to(this4941,java_lang_Enum4942){
return this4941.compareTo(java_lang_Enum4942);
});
cljc.java_time.month.get = (function cljc$java_time$month$get(this4943,java_time_temporal_TemporalField4944){
return this4943.get(java_time_temporal_TemporalField4944);
});
cljc.java_time.month.equals = (function cljc$java_time$month$equals(this4945,java_lang_Object4946){
return this4945.equals(java_lang_Object4946);
});

//# sourceMappingURL=cljc.java_time.month.js.map
