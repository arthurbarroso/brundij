goog.provide('cljc.java_time.instant');
cljc.java_time.instant.min = goog.object.get(java.time.Instant,"MIN");
cljc.java_time.instant.epoch = goog.object.get(java.time.Instant,"EPOCH");
cljc.java_time.instant.max = goog.object.get(java.time.Instant,"MAX");
cljc.java_time.instant.truncated_to = (function cljc$java_time$instant$truncated_to(this4225,java_time_temporal_TemporalUnit4226){
return this4225.truncatedTo(java_time_temporal_TemporalUnit4226);
});
cljc.java_time.instant.range = (function cljc$java_time$instant$range(this4227,java_time_temporal_TemporalField4228){
try{return this4227.range(java_time_temporal_TemporalField4228);
}catch (e54710){if((e54710 instanceof Error)){
var e__54569__auto__ = e54710;
throw (new Error(["Hi there! - It looks like you might be trying to do something with a java.time.Instant that would require it to be 'calendar-aware',\n   but in fact Instant has no facility with working with years, months, days etc. Think of it as just \n   a milli/nanosecond offset from the UNIX epoch.\n   \n   To get around this, consider converting the Instant to a \n   ZonedDateTime first or for formatting/parsing specifically, you might add a zone to your formatter.\n    see https://stackoverflow.com/a/27483371/1700930. \n    \n    You can disable these custom exceptions by setting -Dcljc.java-time.disable-helpful-exception-messages=true","\n original message ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(e__54569__auto__,"message")),"\n cause of exception: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(e__54569__auto__,"stack"))].join('')));
} else {
throw e54710;

}
}});
cljc.java_time.instant.of_epoch_second = (function cljc$java_time$instant$of_epoch_second(var_args){
var G__54712 = arguments.length;
switch (G__54712) {
case 2:
return cljc.java_time.instant.of_epoch_second.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljc.java_time.instant.of_epoch_second.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.instant.of_epoch_second.cljs$core$IFn$_invoke$arity$2 = (function (long4229,long4230){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Instant,"ofEpochSecond",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([long4229,long4230], 0));
}));

(cljc.java_time.instant.of_epoch_second.cljs$core$IFn$_invoke$arity$1 = (function (long4231){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Instant,"ofEpochSecond",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([long4231], 0));
}));

(cljc.java_time.instant.of_epoch_second.cljs$lang$maxFixedArity = 2);

cljc.java_time.instant.at_offset = (function cljc$java_time$instant$at_offset(this4232,java_time_ZoneOffset4233){
return this4232.atOffset(java_time_ZoneOffset4233);
});
cljc.java_time.instant.minus_millis = (function cljc$java_time$instant$minus_millis(this4234,long4235){
return this4234.minusMillis(long4235);
});
cljc.java_time.instant.get_nano = (function cljc$java_time$instant$get_nano(this4236){
return this4236.nano();
});
cljc.java_time.instant.plus_millis = (function cljc$java_time$instant$plus_millis(this4237,long4238){
return this4237.plusMillis(long4238);
});
cljc.java_time.instant.minus_seconds = (function cljc$java_time$instant$minus_seconds(this4239,long4240){
return this4239.minusSeconds(long4240);
});
cljc.java_time.instant.plus_nanos = (function cljc$java_time$instant$plus_nanos(this4241,long4242){
return this4241.plusNanos(long4242);
});
cljc.java_time.instant.plus = (function cljc$java_time$instant$plus(var_args){
var G__54715 = arguments.length;
switch (G__54715) {
case 2:
return cljc.java_time.instant.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.instant.plus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.instant.plus.cljs$core$IFn$_invoke$arity$2 = (function (this4243,java_time_temporal_TemporalAmount4244){
try{return this4243.plus(java_time_temporal_TemporalAmount4244);
}catch (e54716){if((e54716 instanceof Error)){
var e__54569__auto__ = e54716;
throw (new Error(["Hi there! - It looks like you might be trying to do something with a java.time.Instant that would require it to be 'calendar-aware',\n   but in fact Instant has no facility with working with years, months, days etc. Think of it as just \n   a milli/nanosecond offset from the UNIX epoch.\n   \n   To get around this, consider converting the Instant to a \n   ZonedDateTime first or for formatting/parsing specifically, you might add a zone to your formatter.\n    see https://stackoverflow.com/a/27483371/1700930. \n    \n    You can disable these custom exceptions by setting -Dcljc.java-time.disable-helpful-exception-messages=true","\n original message ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(e__54569__auto__,"message")),"\n cause of exception: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(e__54569__auto__,"stack"))].join('')));
} else {
throw e54716;

}
}}));

(cljc.java_time.instant.plus.cljs$core$IFn$_invoke$arity$3 = (function (this4245,long4246,java_time_temporal_TemporalUnit4247){
try{return this4245.plus(long4246,java_time_temporal_TemporalUnit4247);
}catch (e54717){if((e54717 instanceof Error)){
var e__54569__auto__ = e54717;
throw (new Error(["Hi there! - It looks like you might be trying to do something with a java.time.Instant that would require it to be 'calendar-aware',\n   but in fact Instant has no facility with working with years, months, days etc. Think of it as just \n   a milli/nanosecond offset from the UNIX epoch.\n   \n   To get around this, consider converting the Instant to a \n   ZonedDateTime first or for formatting/parsing specifically, you might add a zone to your formatter.\n    see https://stackoverflow.com/a/27483371/1700930. \n    \n    You can disable these custom exceptions by setting -Dcljc.java-time.disable-helpful-exception-messages=true","\n original message ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(e__54569__auto__,"message")),"\n cause of exception: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(e__54569__auto__,"stack"))].join('')));
} else {
throw e54717;

}
}}));

(cljc.java_time.instant.plus.cljs$lang$maxFixedArity = 3);

cljc.java_time.instant.query = (function cljc$java_time$instant$query(this4248,java_time_temporal_TemporalQuery4249){
return this4248.query(java_time_temporal_TemporalQuery4249);
});
cljc.java_time.instant.to_string = (function cljc$java_time$instant$to_string(this4250){
return this4250.toString();
});
cljc.java_time.instant.is_before = (function cljc$java_time$instant$is_before(this4251,java_time_Instant4252){
return this4251.isBefore(java_time_Instant4252);
});
cljc.java_time.instant.minus = (function cljc$java_time$instant$minus(var_args){
var G__54724 = arguments.length;
switch (G__54724) {
case 2:
return cljc.java_time.instant.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.instant.minus.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.instant.minus.cljs$core$IFn$_invoke$arity$2 = (function (this4253,java_time_temporal_TemporalAmount4254){
try{return this4253.minus(java_time_temporal_TemporalAmount4254);
}catch (e54726){if((e54726 instanceof Error)){
var e__54569__auto__ = e54726;
throw (new Error(["Hi there! - It looks like you might be trying to do something with a java.time.Instant that would require it to be 'calendar-aware',\n   but in fact Instant has no facility with working with years, months, days etc. Think of it as just \n   a milli/nanosecond offset from the UNIX epoch.\n   \n   To get around this, consider converting the Instant to a \n   ZonedDateTime first or for formatting/parsing specifically, you might add a zone to your formatter.\n    see https://stackoverflow.com/a/27483371/1700930. \n    \n    You can disable these custom exceptions by setting -Dcljc.java-time.disable-helpful-exception-messages=true","\n original message ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(e__54569__auto__,"message")),"\n cause of exception: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(e__54569__auto__,"stack"))].join('')));
} else {
throw e54726;

}
}}));

(cljc.java_time.instant.minus.cljs$core$IFn$_invoke$arity$3 = (function (this4255,long4256,java_time_temporal_TemporalUnit4257){
try{return this4255.minus(long4256,java_time_temporal_TemporalUnit4257);
}catch (e54727){if((e54727 instanceof Error)){
var e__54569__auto__ = e54727;
throw (new Error(["Hi there! - It looks like you might be trying to do something with a java.time.Instant that would require it to be 'calendar-aware',\n   but in fact Instant has no facility with working with years, months, days etc. Think of it as just \n   a milli/nanosecond offset from the UNIX epoch.\n   \n   To get around this, consider converting the Instant to a \n   ZonedDateTime first or for formatting/parsing specifically, you might add a zone to your formatter.\n    see https://stackoverflow.com/a/27483371/1700930. \n    \n    You can disable these custom exceptions by setting -Dcljc.java-time.disable-helpful-exception-messages=true","\n original message ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(e__54569__auto__,"message")),"\n cause of exception: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(e__54569__auto__,"stack"))].join('')));
} else {
throw e54727;

}
}}));

(cljc.java_time.instant.minus.cljs$lang$maxFixedArity = 3);

cljc.java_time.instant.at_zone = (function cljc$java_time$instant$at_zone(this4258,java_time_ZoneId4259){
return this4258.atZone(java_time_ZoneId4259);
});
cljc.java_time.instant.of_epoch_milli = (function cljc$java_time$instant$of_epoch_milli(long4260){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Instant,"ofEpochMilli",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([long4260], 0));
});
cljc.java_time.instant.get_long = (function cljc$java_time$instant$get_long(this4261,java_time_temporal_TemporalField4262){
return this4261.getLong(java_time_temporal_TemporalField4262);
});
cljc.java_time.instant.until = (function cljc$java_time$instant$until(this4263,java_time_temporal_Temporal4264,java_time_temporal_TemporalUnit4265){
try{return this4263.until(java_time_temporal_Temporal4264,java_time_temporal_TemporalUnit4265);
}catch (e54734){if((e54734 instanceof Error)){
var e__54569__auto__ = e54734;
throw (new Error(["Hi there! - It looks like you might be trying to do something with a java.time.Instant that would require it to be 'calendar-aware',\n   but in fact Instant has no facility with working with years, months, days etc. Think of it as just \n   a milli/nanosecond offset from the UNIX epoch.\n   \n   To get around this, consider converting the Instant to a \n   ZonedDateTime first or for formatting/parsing specifically, you might add a zone to your formatter.\n    see https://stackoverflow.com/a/27483371/1700930. \n    \n    You can disable these custom exceptions by setting -Dcljc.java-time.disable-helpful-exception-messages=true","\n original message ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(e__54569__auto__,"message")),"\n cause of exception: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(e__54569__auto__,"stack"))].join('')));
} else {
throw e54734;

}
}});
cljc.java_time.instant.from = (function cljc$java_time$instant$from(java_time_temporal_TemporalAccessor4266){
try{return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Instant,"from",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_temporal_TemporalAccessor4266], 0));
}catch (e54735){if((e54735 instanceof Error)){
var e__54569__auto__ = e54735;
throw (new Error(["Hi there! - It looks like you might be trying to do something with a java.time.Instant that would require it to be 'calendar-aware',\n   but in fact Instant has no facility with working with years, months, days etc. Think of it as just \n   a milli/nanosecond offset from the UNIX epoch.\n   \n   To get around this, consider converting the Instant to a \n   ZonedDateTime first or for formatting/parsing specifically, you might add a zone to your formatter.\n    see https://stackoverflow.com/a/27483371/1700930. \n    \n    You can disable these custom exceptions by setting -Dcljc.java-time.disable-helpful-exception-messages=true","\n original message ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(e__54569__auto__,"message")),"\n cause of exception: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(e__54569__auto__,"stack"))].join('')));
} else {
throw e54735;

}
}});
cljc.java_time.instant.is_after = (function cljc$java_time$instant$is_after(this4267,java_time_Instant4268){
return this4267.isAfter(java_time_Instant4268);
});
cljc.java_time.instant.minus_nanos = (function cljc$java_time$instant$minus_nanos(this4269,long4270){
return this4269.minusNanos(long4270);
});
cljc.java_time.instant.is_supported = (function cljc$java_time$instant$is_supported(this4271,G__4272){
return this4271.isSupported(G__4272);
});
cljc.java_time.instant.parse = (function cljc$java_time$instant$parse(java_lang_CharSequence4273){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Instant,"parse",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_CharSequence4273], 0));
});
cljc.java_time.instant.hash_code = (function cljc$java_time$instant$hash_code(this4274){
return this4274.hashCode();
});
cljc.java_time.instant.adjust_into = (function cljc$java_time$instant$adjust_into(this4275,java_time_temporal_Temporal4276){
try{return this4275.adjustInto(java_time_temporal_Temporal4276);
}catch (e54739){if((e54739 instanceof Error)){
var e__54569__auto__ = e54739;
throw (new Error(["Hi there! - It looks like you might be trying to do something with a java.time.Instant that would require it to be 'calendar-aware',\n   but in fact Instant has no facility with working with years, months, days etc. Think of it as just \n   a milli/nanosecond offset from the UNIX epoch.\n   \n   To get around this, consider converting the Instant to a \n   ZonedDateTime first or for formatting/parsing specifically, you might add a zone to your formatter.\n    see https://stackoverflow.com/a/27483371/1700930. \n    \n    You can disable these custom exceptions by setting -Dcljc.java-time.disable-helpful-exception-messages=true","\n original message ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(e__54569__auto__,"message")),"\n cause of exception: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(e__54569__auto__,"stack"))].join('')));
} else {
throw e54739;

}
}});
cljc.java_time.instant.with$ = (function cljc$java_time$instant$with(var_args){
var G__54744 = arguments.length;
switch (G__54744) {
case 2:
return cljc.java_time.instant.with$.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljc.java_time.instant.with$.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.instant.with$.cljs$core$IFn$_invoke$arity$2 = (function (this4277,java_time_temporal_TemporalAdjuster4278){
try{return this4277.with(java_time_temporal_TemporalAdjuster4278);
}catch (e54745){if((e54745 instanceof Error)){
var e__54569__auto__ = e54745;
throw (new Error(["Hi there! - It looks like you might be trying to do something with a java.time.Instant that would require it to be 'calendar-aware',\n   but in fact Instant has no facility with working with years, months, days etc. Think of it as just \n   a milli/nanosecond offset from the UNIX epoch.\n   \n   To get around this, consider converting the Instant to a \n   ZonedDateTime first or for formatting/parsing specifically, you might add a zone to your formatter.\n    see https://stackoverflow.com/a/27483371/1700930. \n    \n    You can disable these custom exceptions by setting -Dcljc.java-time.disable-helpful-exception-messages=true","\n original message ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(e__54569__auto__,"message")),"\n cause of exception: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(e__54569__auto__,"stack"))].join('')));
} else {
throw e54745;

}
}}));

(cljc.java_time.instant.with$.cljs$core$IFn$_invoke$arity$3 = (function (this4279,java_time_temporal_TemporalField4280,long4281){
try{return this4279.with(java_time_temporal_TemporalField4280,long4281);
}catch (e54746){if((e54746 instanceof Error)){
var e__54569__auto__ = e54746;
throw (new Error(["Hi there! - It looks like you might be trying to do something with a java.time.Instant that would require it to be 'calendar-aware',\n   but in fact Instant has no facility with working with years, months, days etc. Think of it as just \n   a milli/nanosecond offset from the UNIX epoch.\n   \n   To get around this, consider converting the Instant to a \n   ZonedDateTime first or for formatting/parsing specifically, you might add a zone to your formatter.\n    see https://stackoverflow.com/a/27483371/1700930. \n    \n    You can disable these custom exceptions by setting -Dcljc.java-time.disable-helpful-exception-messages=true","\n original message ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(e__54569__auto__,"message")),"\n cause of exception: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(e__54569__auto__,"stack"))].join('')));
} else {
throw e54746;

}
}}));

(cljc.java_time.instant.with$.cljs$lang$maxFixedArity = 3);

cljc.java_time.instant.now = (function cljc$java_time$instant$now(var_args){
var G__54748 = arguments.length;
switch (G__54748) {
case 0:
return cljc.java_time.instant.now.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljc.java_time.instant.now.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.instant.now.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.js_invoke(java.time.Instant,"now");
}));

(cljc.java_time.instant.now.cljs$core$IFn$_invoke$arity$1 = (function (java_time_Clock4282){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Instant,"now",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_Clock4282], 0));
}));

(cljc.java_time.instant.now.cljs$lang$maxFixedArity = 1);

cljc.java_time.instant.to_epoch_milli = (function cljc$java_time$instant$to_epoch_milli(this4283){
return this4283.toEpochMilli();
});
cljc.java_time.instant.get_epoch_second = (function cljc$java_time$instant$get_epoch_second(this4284){
return this4284.epochSecond();
});
cljc.java_time.instant.compare_to = (function cljc$java_time$instant$compare_to(this4285,java_time_Instant4286){
return this4285.compareTo(java_time_Instant4286);
});
cljc.java_time.instant.plus_seconds = (function cljc$java_time$instant$plus_seconds(this4287,long4288){
return this4287.plusSeconds(long4288);
});
cljc.java_time.instant.get = (function cljc$java_time$instant$get(this4289,java_time_temporal_TemporalField4290){
try{return this4289.get(java_time_temporal_TemporalField4290);
}catch (e54749){if((e54749 instanceof Error)){
var e__54569__auto__ = e54749;
throw (new Error(["Hi there! - It looks like you might be trying to do something with a java.time.Instant that would require it to be 'calendar-aware',\n   but in fact Instant has no facility with working with years, months, days etc. Think of it as just \n   a milli/nanosecond offset from the UNIX epoch.\n   \n   To get around this, consider converting the Instant to a \n   ZonedDateTime first or for formatting/parsing specifically, you might add a zone to your formatter.\n    see https://stackoverflow.com/a/27483371/1700930. \n    \n    You can disable these custom exceptions by setting -Dcljc.java-time.disable-helpful-exception-messages=true","\n original message ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(e__54569__auto__,"message")),"\n cause of exception: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.object.get(e__54569__auto__,"stack"))].join('')));
} else {
throw e54749;

}
}});
cljc.java_time.instant.equals = (function cljc$java_time$instant$equals(this4291,java_lang_Object4292){
return this4291.equals(java_lang_Object4292);
});

//# sourceMappingURL=cljc.java_time.instant.js.map
