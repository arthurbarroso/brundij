goog.provide('cljc.java_time.year_month');
cljc.java_time.year_month.length_of_year = (function cljc$java_time$year_month$length_of_year(this5399){
return this5399.lengthOfYear();
});
cljc.java_time.year_month.range = (function cljc$java_time$year_month$range(this5400,java_time_temporal_TemporalField5401){
return this5400.range(java_time_temporal_TemporalField5401);
});
cljc.java_time.year_month.is_valid_day = (function cljc$java_time$year_month$is_valid_day(this5402,int5403){
return this5402.isValidDay(int5403);
});
cljc.java_time.year_month.of = (function cljc$java_time$year_month$of(G__5405,G__5406){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.YearMonth,"of",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__5405,G__5406], 0));
});
cljc.java_time.year_month.with_month = (function cljc$java_time$year_month$with_month(this5407,int5408){
return this5407.withMonth(int5408);
});
cljc.java_time.year_month.at_day = (function cljc$java_time$year_month$at_day(this5409,int5410){
return this5409.atDay(int5410);
});
cljc.java_time.year_month.get_year = (function cljc$java_time$year_month$get_year(this5411){
return this5411.year();
});
cljc.java_time.year_month.plus = (function cljc$java_time$year_month$plus(var_args){
var G__72705 = arguments.length;
switch (G__72705) {
case 2:
return cljc.java_time.year_month.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.year_month.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.year_month.plus.cljs$core$IFn$_invoke$arity$2 = (function (this5412,java_time_temporal_TemporalAmount5413){
return this5412.plus(java_time_temporal_TemporalAmount5413);
}));

(cljc.java_time.year_month.plus.cljs$core$IFn$_invoke$arity$3 = (function (this5414,long5415,java_time_temporal_TemporalUnit5416){
return this5414.plus(long5415,java_time_temporal_TemporalUnit5416);
}));

(cljc.java_time.year_month.plus.cljs$lang$maxFixedArity = 3);

cljc.java_time.year_month.is_leap_year = (function cljc$java_time$year_month$is_leap_year(this5417){
return this5417.isLeapYear();
});
cljc.java_time.year_month.query = (function cljc$java_time$year_month$query(this5418,java_time_temporal_TemporalQuery5419){
return this5418.query(java_time_temporal_TemporalQuery5419);
});
cljc.java_time.year_month.to_string = (function cljc$java_time$year_month$to_string(this5420){
return this5420.toString();
});
cljc.java_time.year_month.plus_months = (function cljc$java_time$year_month$plus_months(this5421,long5422){
return this5421.plusMonths(long5422);
});
cljc.java_time.year_month.is_before = (function cljc$java_time$year_month$is_before(this5423,java_time_YearMonth5424){
return this5423.isBefore(java_time_YearMonth5424);
});
cljc.java_time.year_month.minus_months = (function cljc$java_time$year_month$minus_months(this5425,long5426){
return this5425.minusMonths(long5426);
});
cljc.java_time.year_month.minus = (function cljc$java_time$year_month$minus(var_args){
var G__72709 = arguments.length;
switch (G__72709) {
case 3:
return cljc.java_time.year_month.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.year_month.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.year_month.minus.cljs$core$IFn$_invoke$arity$3 = (function (this5427,long5428,java_time_temporal_TemporalUnit5429){
return this5427.minus(long5428,java_time_temporal_TemporalUnit5429);
}));

(cljc.java_time.year_month.minus.cljs$core$IFn$_invoke$arity$2 = (function (this5430,java_time_temporal_TemporalAmount5431){
return this5430.minus(java_time_temporal_TemporalAmount5431);
}));

(cljc.java_time.year_month.minus.cljs$lang$maxFixedArity = 3);

cljc.java_time.year_month.get_long = (function cljc$java_time$year_month$get_long(this5432,java_time_temporal_TemporalField5433){
return this5432.getLong(java_time_temporal_TemporalField5433);
});
cljc.java_time.year_month.with_year = (function cljc$java_time$year_month$with_year(this5434,int5435){
return this5434.withYear(int5435);
});
cljc.java_time.year_month.at_end_of_month = (function cljc$java_time$year_month$at_end_of_month(this5436){
return this5436.atEndOfMonth();
});
cljc.java_time.year_month.length_of_month = (function cljc$java_time$year_month$length_of_month(this5437){
return this5437.lengthOfMonth();
});
cljc.java_time.year_month.until = (function cljc$java_time$year_month$until(this5438,java_time_temporal_Temporal5439,java_time_temporal_TemporalUnit5440){
return this5438.until(java_time_temporal_Temporal5439,java_time_temporal_TemporalUnit5440);
});
cljc.java_time.year_month.from = (function cljc$java_time$year_month$from(java_time_temporal_TemporalAccessor5441){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.YearMonth,"from",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_temporal_TemporalAccessor5441], 0));
});
cljc.java_time.year_month.is_after = (function cljc$java_time$year_month$is_after(this5442,java_time_YearMonth5443){
return this5442.isAfter(java_time_YearMonth5443);
});
cljc.java_time.year_month.is_supported = (function cljc$java_time$year_month$is_supported(this5444,G__5445){
return this5444.isSupported(G__5445);
});
cljc.java_time.year_month.minus_years = (function cljc$java_time$year_month$minus_years(this5446,long5447){
return this5446.minusYears(long5447);
});
cljc.java_time.year_month.parse = (function cljc$java_time$year_month$parse(var_args){
var G__72730 = arguments.length;
switch (G__72730) {
case 1:
return cljc.java_time.year_month.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.year_month.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.year_month.parse.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_CharSequence5448){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.YearMonth,"parse",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_CharSequence5448], 0));
}));

(cljc.java_time.year_month.parse.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_CharSequence5449,java_time_format_DateTimeFormatter5450){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.YearMonth,"parse",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_CharSequence5449,java_time_format_DateTimeFormatter5450], 0));
}));

(cljc.java_time.year_month.parse.cljs$lang$maxFixedArity = 2);

cljc.java_time.year_month.hash_code = (function cljc$java_time$year_month$hash_code(this5451){
return this5451.hashCode();
});
cljc.java_time.year_month.adjust_into = (function cljc$java_time$year_month$adjust_into(this5452,java_time_temporal_Temporal5453){
return this5452.adjustInto(java_time_temporal_Temporal5453);
});
cljc.java_time.year_month.with$ = (function cljc$java_time$year_month$with(var_args){
var G__72733 = arguments.length;
switch (G__72733) {
case 3:
return cljc.java_time.year_month.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljc.java_time.year_month.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.year_month.with$.cljs$core$IFn$_invoke$arity$3 = (function (this5454,java_time_temporal_TemporalField5455,long5456){
return this5454.with(java_time_temporal_TemporalField5455,long5456);
}));

(cljc.java_time.year_month.with$.cljs$core$IFn$_invoke$arity$2 = (function (this5457,java_time_temporal_TemporalAdjuster5458){
return this5457.with(java_time_temporal_TemporalAdjuster5458);
}));

(cljc.java_time.year_month.with$.cljs$lang$maxFixedArity = 3);

cljc.java_time.year_month.now = (function cljc$java_time$year_month$now(var_args){
var G__72735 = arguments.length;
switch (G__72735) {
case 1:
return cljc.java_time.year_month.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return cljc.java_time.year_month.now.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.year_month.now.cljs$core$IFn$_invoke$arity$1 = (function (G__5460){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.YearMonth,"now",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__5460], 0));
}));

(cljc.java_time.year_month.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.js_invoke(java.time.YearMonth,"now");
}));

(cljc.java_time.year_month.now.cljs$lang$maxFixedArity = 1);

cljc.java_time.year_month.get_month_value = (function cljc$java_time$year_month$get_month_value(this5461){
return this5461.monthValue();
});
cljc.java_time.year_month.compare_to = (function cljc$java_time$year_month$compare_to(this5462,java_time_YearMonth5463){
return this5462.compareTo(java_time_YearMonth5463);
});
cljc.java_time.year_month.get_month = (function cljc$java_time$year_month$get_month(this5464){
return this5464.month();
});
cljc.java_time.year_month.get = (function cljc$java_time$year_month$get(this5465,java_time_temporal_TemporalField5466){
return this5465.get(java_time_temporal_TemporalField5466);
});
cljc.java_time.year_month.equals = (function cljc$java_time$year_month$equals(this5467,java_lang_Object5468){
return this5467.equals(java_lang_Object5468);
});
cljc.java_time.year_month.format = (function cljc$java_time$year_month$format(this5469,java_time_format_DateTimeFormatter5470){
return this5469.format(java_time_format_DateTimeFormatter5470);
});
cljc.java_time.year_month.plus_years = (function cljc$java_time$year_month$plus_years(this5471,long5472){
return this5471.plusYears(long5472);
});

//# sourceMappingURL=cljc.java_time.year_month.js.map
