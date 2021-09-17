goog.provide('cljc.java_time.format.date_time_formatter');
cljc.java_time.format.date_time_formatter.iso_local_time = goog.object.get(java.time.format.DateTimeFormatter,"ISO_LOCAL_TIME");
cljc.java_time.format.date_time_formatter.iso_ordinal_date = goog.object.get(java.time.format.DateTimeFormatter,"ISO_ORDINAL_DATE");
cljc.java_time.format.date_time_formatter.iso_offset_date = goog.object.get(java.time.format.DateTimeFormatter,"ISO_OFFSET_DATE");
cljc.java_time.format.date_time_formatter.iso_time = goog.object.get(java.time.format.DateTimeFormatter,"ISO_TIME");
cljc.java_time.format.date_time_formatter.iso_local_date_time = goog.object.get(java.time.format.DateTimeFormatter,"ISO_LOCAL_DATE_TIME");
cljc.java_time.format.date_time_formatter.iso_instant = goog.object.get(java.time.format.DateTimeFormatter,"ISO_INSTANT");
cljc.java_time.format.date_time_formatter.rfc_1123_date_time = goog.object.get(java.time.format.DateTimeFormatter,"RFC_1123_DATE_TIME");
cljc.java_time.format.date_time_formatter.iso_date = goog.object.get(java.time.format.DateTimeFormatter,"ISO_DATE");
cljc.java_time.format.date_time_formatter.iso_week_date = goog.object.get(java.time.format.DateTimeFormatter,"ISO_WEEK_DATE");
cljc.java_time.format.date_time_formatter.iso_offset_time = goog.object.get(java.time.format.DateTimeFormatter,"ISO_OFFSET_TIME");
cljc.java_time.format.date_time_formatter.iso_local_date = goog.object.get(java.time.format.DateTimeFormatter,"ISO_LOCAL_DATE");
cljc.java_time.format.date_time_formatter.iso_zoned_date_time = goog.object.get(java.time.format.DateTimeFormatter,"ISO_ZONED_DATE_TIME");
cljc.java_time.format.date_time_formatter.iso_offset_date_time = goog.object.get(java.time.format.DateTimeFormatter,"ISO_OFFSET_DATE_TIME");
cljc.java_time.format.date_time_formatter.iso_date_time = goog.object.get(java.time.format.DateTimeFormatter,"ISO_DATE_TIME");
cljc.java_time.format.date_time_formatter.basic_iso_date = goog.object.get(java.time.format.DateTimeFormatter,"BASIC_ISO_DATE");
cljc.java_time.format.date_time_formatter.of_pattern = (function cljc$java_time$format$date_time_formatter$of_pattern(var_args){
var G__73016 = arguments.length;
switch (G__73016) {
case 1:
return cljc.java_time.format.date_time_formatter.of_pattern.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.format.date_time_formatter.of_pattern.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.format.date_time_formatter.of_pattern.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_String5995){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.format.DateTimeFormatter,"ofPattern",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_String5995], 0));
}));

(cljc.java_time.format.date_time_formatter.of_pattern.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_String5996,java_util_Locale5997){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.format.DateTimeFormatter,"ofPattern",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_String5996,java_util_Locale5997], 0));
}));

(cljc.java_time.format.date_time_formatter.of_pattern.cljs$lang$maxFixedArity = 2);

cljc.java_time.format.date_time_formatter.parse_best = (function cljc$java_time$format$date_time_formatter$parse_best(this5998,java_lang_CharSequence5999,java_time_temporal_TemporalQuery_array6000){
return this5998.parseBest(java_lang_CharSequence5999,java_time_temporal_TemporalQuery_array6000);
});
cljc.java_time.format.date_time_formatter.format_to = (function cljc$java_time$format$date_time_formatter$format_to(this6001,java_time_temporal_TemporalAccessor6002,java_lang_Appendable6003){
return this6001.formatTo(java_time_temporal_TemporalAccessor6002,java_lang_Appendable6003);
});
cljc.java_time.format.date_time_formatter.get_decimal_style = (function cljc$java_time$format$date_time_formatter$get_decimal_style(this6004){
return this6004.decimalStyle();
});
cljc.java_time.format.date_time_formatter.with_chronology = (function cljc$java_time$format$date_time_formatter$with_chronology(this6005,java_time_chrono_Chronology6006){
return this6005.withChronology(java_time_chrono_Chronology6006);
});
cljc.java_time.format.date_time_formatter.get_resolver_style = (function cljc$java_time$format$date_time_formatter$get_resolver_style(this6007){
return this6007.resolverStyle();
});
cljc.java_time.format.date_time_formatter.with_decimal_style = (function cljc$java_time$format$date_time_formatter$with_decimal_style(this6008,java_time_format_DecimalStyle6009){
return this6008.withDecimalStyle(java_time_format_DecimalStyle6009);
});
cljc.java_time.format.date_time_formatter.get_locale = (function cljc$java_time$format$date_time_formatter$get_locale(this6010){
return this6010.locale();
});
cljc.java_time.format.date_time_formatter.to_string = (function cljc$java_time$format$date_time_formatter$to_string(this6011){
return this6011.toString();
});
cljc.java_time.format.date_time_formatter.parsed_leap_second = (function cljc$java_time$format$date_time_formatter$parsed_leap_second(){
return cljs.core.js_invoke(java.time.format.DateTimeFormatter,"parsedLeapSecond");
});
cljc.java_time.format.date_time_formatter.with_zone = (function cljc$java_time$format$date_time_formatter$with_zone(this6012,java_time_ZoneId6013){
return this6012.withZone(java_time_ZoneId6013);
});
cljc.java_time.format.date_time_formatter.parsed_excess_days = (function cljc$java_time$format$date_time_formatter$parsed_excess_days(){
return cljs.core.js_invoke(java.time.format.DateTimeFormatter,"parsedExcessDays");
});
cljc.java_time.format.date_time_formatter.get_zone = (function cljc$java_time$format$date_time_formatter$get_zone(this6014){
return this6014.zone();
});
cljc.java_time.format.date_time_formatter.of_localized_date_time = (function cljc$java_time$format$date_time_formatter$of_localized_date_time(var_args){
var G__73054 = arguments.length;
switch (G__73054) {
case 1:
return cljc.java_time.format.date_time_formatter.of_localized_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.format.date_time_formatter.of_localized_date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.format.date_time_formatter.of_localized_date_time.cljs$core$IFn$_invoke$arity$1 = (function (java_time_format_FormatStyle6015){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.format.DateTimeFormatter,"ofLocalizedDateTime",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_format_FormatStyle6015], 0));
}));

(cljc.java_time.format.date_time_formatter.of_localized_date_time.cljs$core$IFn$_invoke$arity$2 = (function (java_time_format_FormatStyle6016,java_time_format_FormatStyle6017){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.format.DateTimeFormatter,"ofLocalizedDateTime",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_format_FormatStyle6016,java_time_format_FormatStyle6017], 0));
}));

(cljc.java_time.format.date_time_formatter.of_localized_date_time.cljs$lang$maxFixedArity = 2);

cljc.java_time.format.date_time_formatter.get_resolver_fields = (function cljc$java_time$format$date_time_formatter$get_resolver_fields(this6018){
return this6018.resolverFields();
});
cljc.java_time.format.date_time_formatter.get_chronology = (function cljc$java_time$format$date_time_formatter$get_chronology(this6019){
return this6019.chronology();
});
cljc.java_time.format.date_time_formatter.parse = (function cljc$java_time$format$date_time_formatter$parse(var_args){
var G__73062 = arguments.length;
switch (G__73062) {
case 2:
return cljc.java_time.format.date_time_formatter.parse.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.format.date_time_formatter.parse.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.format.date_time_formatter.parse.cljs$core$IFn$_invoke$arity$2 = (function (this6020,java_lang_CharSequence6021){
return this6020.parse(java_lang_CharSequence6021);
}));

(cljc.java_time.format.date_time_formatter.parse.cljs$core$IFn$_invoke$arity$3 = (function (this6022,G__6023,G__6024){
return this6022.parse(G__6023,G__6024);
}));

(cljc.java_time.format.date_time_formatter.parse.cljs$lang$maxFixedArity = 3);

cljc.java_time.format.date_time_formatter.with_locale = (function cljc$java_time$format$date_time_formatter$with_locale(this6025,java_util_Locale6026){
return this6025.withLocale(java_util_Locale6026);
});
cljc.java_time.format.date_time_formatter.with_resolver_fields = (function cljc$java_time$format$date_time_formatter$with_resolver_fields(this6027,G__6028){
return this6027.withResolverFields(G__6028);
});
cljc.java_time.format.date_time_formatter.parse_unresolved = (function cljc$java_time$format$date_time_formatter$parse_unresolved(this6029,java_lang_CharSequence6030,java_text_ParsePosition6031){
return this6029.parseUnresolved(java_lang_CharSequence6030,java_text_ParsePosition6031);
});
cljc.java_time.format.date_time_formatter.of_localized_time = (function cljc$java_time$format$date_time_formatter$of_localized_time(java_time_format_FormatStyle6032){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.format.DateTimeFormatter,"ofLocalizedTime",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_format_FormatStyle6032], 0));
});
cljc.java_time.format.date_time_formatter.of_localized_date = (function cljc$java_time$format$date_time_formatter$of_localized_date(java_time_format_FormatStyle6033){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.format.DateTimeFormatter,"ofLocalizedDate",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_format_FormatStyle6033], 0));
});
cljc.java_time.format.date_time_formatter.format = (function cljc$java_time$format$date_time_formatter$format(this6034,java_time_temporal_TemporalAccessor6035){
try{return this6034.format(java_time_temporal_TemporalAccessor6035);
}catch (e73067){if((e73067 instanceof Error)){
var e__72495__auto__ = e73067;
throw (new Error(["Hi there! - It looks like you might be trying to do something with a java.time.Instant that would require it to be 'calendar-aware',\n   but in fact Instant has no facility with working with years, months, days etc. Think of it as just \n   a milli/nanosecond offset from the UNIX epoch.\n   \n   To get around this, consider converting the Instant to a \n   ZonedDateTime first or for formatting/parsing specifically, you might add a zone to your formatter.\n    see https://stackoverflow.com/a/27483371/1700930. \n    \n    You can disable these custom exceptions by setting -Dcljc.java-time.disable-helpful-exception-messages=true","\n original message ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(e__72495__auto__,"message")),"\n cause of exception: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(e__72495__auto__,"stack"))].join('')));
} else {
throw e73067;

}
}});
cljc.java_time.format.date_time_formatter.to_format = (function cljc$java_time$format$date_time_formatter$to_format(var_args){
var G__73071 = arguments.length;
switch (G__73071) {
case 2:
return cljc.java_time.format.date_time_formatter.to_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljc.java_time.format.date_time_formatter.to_format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.format.date_time_formatter.to_format.cljs$core$IFn$_invoke$arity$2 = (function (this6036,java_time_temporal_TemporalQuery6037){
return this6036.toFormat(java_time_temporal_TemporalQuery6037);
}));

(cljc.java_time.format.date_time_formatter.to_format.cljs$core$IFn$_invoke$arity$1 = (function (this6038){
return this6038.toFormat();
}));

(cljc.java_time.format.date_time_formatter.to_format.cljs$lang$maxFixedArity = 2);

cljc.java_time.format.date_time_formatter.with_resolver_style = (function cljc$java_time$format$date_time_formatter$with_resolver_style(this6039,java_time_format_ResolverStyle6040){
return this6039.withResolverStyle(java_time_format_ResolverStyle6040);
});

//# sourceMappingURL=cljc.java_time.format.date_time_formatter.js.map
