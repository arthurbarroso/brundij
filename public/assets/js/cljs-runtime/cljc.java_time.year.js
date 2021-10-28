goog.provide('cljc.java_time.year');
cljc.java_time.year.min_value = goog.object.get(java.time.Year,"MIN_VALUE");
cljc.java_time.year.max_value = goog.object.get(java.time.Year,"MAX_VALUE");
cljc.java_time.year.range = (function cljc$java_time$year$range(this5262,java_time_temporal_TemporalField5263){
return this5262.range(java_time_temporal_TemporalField5263);
});
cljc.java_time.year.of = (function cljc$java_time$year$of(int5264){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Year,"of",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([int5264], 0));
});
cljc.java_time.year.at_day = (function cljc$java_time$year$at_day(this5265,int5266){
return this5265.atDay(int5266);
});
cljc.java_time.year.plus = (function cljc$java_time$year$plus(var_args){
var G__54834 = arguments.length;
switch (G__54834) {
case 2:
return cljc.java_time.year.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.year.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.year.plus.cljs$core$IFn$_invoke$arity$2 = (function (this5267,java_time_temporal_TemporalAmount5268){
return this5267.plus(java_time_temporal_TemporalAmount5268);
}));

(cljc.java_time.year.plus.cljs$core$IFn$_invoke$arity$3 = (function (this5269,long5270,java_time_temporal_TemporalUnit5271){
return this5269.plus(long5270,java_time_temporal_TemporalUnit5271);
}));

(cljc.java_time.year.plus.cljs$lang$maxFixedArity = 3);

cljc.java_time.year.is_valid_month_day = (function cljc$java_time$year$is_valid_month_day(this5272,java_time_MonthDay5273){
return this5272.isValidMonthDay(java_time_MonthDay5273);
});
cljc.java_time.year.query = (function cljc$java_time$year$query(this5274,java_time_temporal_TemporalQuery5275){
return this5274.query(java_time_temporal_TemporalQuery5275);
});
cljc.java_time.year.is_leap = (function cljc$java_time$year$is_leap(long57050){
return java.time.Year.isLeap(long57050);
});
cljc.java_time.year.to_string = (function cljc$java_time$year$to_string(this5276){
return this5276.toString();
});
cljc.java_time.year.is_before = (function cljc$java_time$year$is_before(this5277,java_time_Year5278){
return this5277.isBefore(java_time_Year5278);
});
cljc.java_time.year.minus = (function cljc$java_time$year$minus(var_args){
var G__54836 = arguments.length;
switch (G__54836) {
case 2:
return cljc.java_time.year.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.year.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.year.minus.cljs$core$IFn$_invoke$arity$2 = (function (this5279,java_time_temporal_TemporalAmount5280){
return this5279.minus(java_time_temporal_TemporalAmount5280);
}));

(cljc.java_time.year.minus.cljs$core$IFn$_invoke$arity$3 = (function (this5281,long5282,java_time_temporal_TemporalUnit5283){
return this5281.minus(long5282,java_time_temporal_TemporalUnit5283);
}));

(cljc.java_time.year.minus.cljs$lang$maxFixedArity = 3);

cljc.java_time.year.at_month_day = (function cljc$java_time$year$at_month_day(this5284,java_time_MonthDay5285){
return this5284.atMonthDay(java_time_MonthDay5285);
});
cljc.java_time.year.get_value = (function cljc$java_time$year$get_value(this5286){
return this5286.value();
});
cljc.java_time.year.get_long = (function cljc$java_time$year$get_long(this5287,java_time_temporal_TemporalField5288){
return this5287.getLong(java_time_temporal_TemporalField5288);
});
cljc.java_time.year.at_month = (function cljc$java_time$year$at_month(this5289,G__5290){
return this5289.atMonth(G__5290);
});
cljc.java_time.year.until = (function cljc$java_time$year$until(this5291,java_time_temporal_Temporal5292,java_time_temporal_TemporalUnit5293){
return this5291.until(java_time_temporal_Temporal5292,java_time_temporal_TemporalUnit5293);
});
cljc.java_time.year.length = (function cljc$java_time$year$length(this5294){
return this5294.length();
});
cljc.java_time.year.from = (function cljc$java_time$year$from(java_time_temporal_TemporalAccessor5295){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Year,"from",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_temporal_TemporalAccessor5295], 0));
});
cljc.java_time.year.is_after = (function cljc$java_time$year$is_after(this5296,java_time_Year5297){
return this5296.isAfter(java_time_Year5297);
});
cljc.java_time.year.is_supported = (function cljc$java_time$year$is_supported(this5298,G__5299){
return this5298.isSupported(G__5299);
});
cljc.java_time.year.minus_years = (function cljc$java_time$year$minus_years(this5300,long5301){
return this5300.minusYears(long5301);
});
cljc.java_time.year.parse = (function cljc$java_time$year$parse(var_args){
var G__54841 = arguments.length;
switch (G__54841) {
case 2:
return cljc.java_time.year.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljc.java_time.year.parse.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.year.parse.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_CharSequence5302,java_time_format_DateTimeFormatter5303){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Year,"parse",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_CharSequence5302,java_time_format_DateTimeFormatter5303], 0));
}));

(cljc.java_time.year.parse.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_CharSequence5304){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Year,"parse",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_CharSequence5304], 0));
}));

(cljc.java_time.year.parse.cljs$lang$maxFixedArity = 2);

cljc.java_time.year.hash_code = (function cljc$java_time$year$hash_code(this5305){
return this5305.hashCode();
});
cljc.java_time.year.adjust_into = (function cljc$java_time$year$adjust_into(this5306,java_time_temporal_Temporal5307){
return this5306.adjustInto(java_time_temporal_Temporal5307);
});
cljc.java_time.year.with$ = (function cljc$java_time$year$with(var_args){
var G__54843 = arguments.length;
switch (G__54843) {
case 2:
return cljc.java_time.year.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.year.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.year.with$.cljs$core$IFn$_invoke$arity$2 = (function (this5308,java_time_temporal_TemporalAdjuster5309){
return this5308.with(java_time_temporal_TemporalAdjuster5309);
}));

(cljc.java_time.year.with$.cljs$core$IFn$_invoke$arity$3 = (function (this5310,java_time_temporal_TemporalField5311,long5312){
return this5310.with(java_time_temporal_TemporalField5311,long5312);
}));

(cljc.java_time.year.with$.cljs$lang$maxFixedArity = 3);

cljc.java_time.year.now = (function cljc$java_time$year$now(var_args){
var G__54845 = arguments.length;
switch (G__54845) {
case 0:
return cljc.java_time.year.now.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljc.java_time.year.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.year.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.js_invoke(java.time.Year,"now");
}));

(cljc.java_time.year.now.cljs$core$IFn$_invoke$arity$1 = (function (G__5314){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Year,"now",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([G__5314], 0));
}));

(cljc.java_time.year.now.cljs$lang$maxFixedArity = 1);

cljc.java_time.year.compare_to = (function cljc$java_time$year$compare_to(this5315,java_time_Year5316){
return this5315.compareTo(java_time_Year5316);
});
cljc.java_time.year.get = (function cljc$java_time$year$get(this5317,java_time_temporal_TemporalField5318){
return this5317.get(java_time_temporal_TemporalField5318);
});
cljc.java_time.year.equals = (function cljc$java_time$year$equals(this5319,java_lang_Object5320){
return this5319.equals(java_lang_Object5320);
});
cljc.java_time.year.format = (function cljc$java_time$year$format(this5321,java_time_format_DateTimeFormatter5322){
return this5321.format(java_time_format_DateTimeFormatter5322);
});
cljc.java_time.year.plus_years = (function cljc$java_time$year$plus_years(this5323,long5324){
return this5323.plusYears(long5324);
});

//# sourceMappingURL=cljc.java_time.year.js.map
