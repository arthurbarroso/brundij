goog.provide('tick.alpha.api');
tick.alpha.api.new_time = tick.core.new_time;
tick.alpha.api.new_date = tick.core.new_date;
tick.alpha.api.new_year_month = tick.core.new_year_month;
tick.alpha.api.unit_map = tick.core.unit_map;
tick.alpha.api.now = (function tick$alpha$api$now(){
return tick.core.now();
});
tick.alpha.api.today = (function tick$alpha$api$today(){
return tick.core.today();
});
tick.alpha.api.tomorrow = (function tick$alpha$api$tomorrow(){
return tick.core.tomorrow();
});
tick.alpha.api.yesterday = (function tick$alpha$api$yesterday(){
return tick.core.yesterday();
});
tick.alpha.api.time = (function tick$alpha$api$time(var_args){
var G__77307 = arguments.length;
switch (G__77307) {
case 0:
return tick.alpha.api.time.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.time(tick.alpha.api.now());
}));

(tick.alpha.api.time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.time(v);
}));

(tick.alpha.api.time.cljs$lang$maxFixedArity = 1);

tick.alpha.api.date = (function tick$alpha$api$date(var_args){
var G__77309 = arguments.length;
switch (G__77309) {
case 0:
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.date.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.alpha.api.today();
}));

(tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.date(v);
}));

(tick.alpha.api.date.cljs$lang$maxFixedArity = 1);

tick.alpha.api.inst = (function tick$alpha$api$inst(var_args){
var G__77311 = arguments.length;
switch (G__77311) {
case 0:
return tick.alpha.api.inst.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.inst.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.inst.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.inst(tick.alpha.api.now());
}));

(tick.alpha.api.inst.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.inst(v);
}));

(tick.alpha.api.inst.cljs$lang$maxFixedArity = 1);

tick.alpha.api.instant = (function tick$alpha$api$instant(var_args){
var G__77313 = arguments.length;
switch (G__77313) {
case 0:
return tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.instant(tick.alpha.api.now());
}));

(tick.alpha.api.instant.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.instant(v);
}));

(tick.alpha.api.instant.cljs$lang$maxFixedArity = 1);

tick.alpha.api.date_time = (function tick$alpha$api$date_time(var_args){
var G__77315 = arguments.length;
switch (G__77315) {
case 0:
return tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.date_time(tick.alpha.api.now());
}));

(tick.alpha.api.date_time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.date_time(v);
}));

(tick.alpha.api.date_time.cljs$lang$maxFixedArity = 1);

tick.alpha.api.offset_date_time = (function tick$alpha$api$offset_date_time(var_args){
var G__77317 = arguments.length;
switch (G__77317) {
case 0:
return tick.alpha.api.offset_date_time.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.offset_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.offset_date_time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.offset_date_time(tick.alpha.api.now());
}));

(tick.alpha.api.offset_date_time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.offset_date_time(v);
}));

(tick.alpha.api.offset_date_time.cljs$lang$maxFixedArity = 1);

tick.alpha.api.zoned_date_time = (function tick$alpha$api$zoned_date_time(var_args){
var G__77319 = arguments.length;
switch (G__77319) {
case 0:
return tick.alpha.api.zoned_date_time.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.zoned_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.zoned_date_time.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.zoned_date_time(tick.alpha.api.now());
}));

(tick.alpha.api.zoned_date_time.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.zoned_date_time(v);
}));

(tick.alpha.api.zoned_date_time.cljs$lang$maxFixedArity = 1);

tick.alpha.api.nanosecond = (function tick$alpha$api$nanosecond(t){
return tick.protocols.nanosecond(t);
});
tick.alpha.api.microsecond = (function tick$alpha$api$microsecond(t){
return tick.protocols.microsecond(t);
});
tick.alpha.api.millisecond = (function tick$alpha$api$millisecond(t){
return tick.protocols.millisecond(t);
});
tick.alpha.api.second = (function tick$alpha$api$second(t){
return tick.protocols.second(t);
});
tick.alpha.api.minute = (function tick$alpha$api$minute(t){
return tick.protocols.minute(t);
});
tick.alpha.api.hour = (function tick$alpha$api$hour(t){
return tick.protocols.hour(t);
});
tick.alpha.api.day_of_week = (function tick$alpha$api$day_of_week(var_args){
var G__77321 = arguments.length;
switch (G__77321) {
case 0:
return tick.alpha.api.day_of_week.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.day_of_week.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.day_of_week.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.day_of_week(tick.alpha.api.today());
}));

(tick.alpha.api.day_of_week.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.day_of_week(v);
}));

(tick.alpha.api.day_of_week.cljs$lang$maxFixedArity = 1);

tick.alpha.api.day_of_month = (function tick$alpha$api$day_of_month(var_args){
var G__77323 = arguments.length;
switch (G__77323) {
case 0:
return tick.alpha.api.day_of_month.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.day_of_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.day_of_month.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.day_of_month(tick.alpha.api.today());
}));

(tick.alpha.api.day_of_month.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.day_of_month(v);
}));

(tick.alpha.api.day_of_month.cljs$lang$maxFixedArity = 1);

tick.alpha.api.month = (function tick$alpha$api$month(var_args){
var G__77325 = arguments.length;
switch (G__77325) {
case 0:
return tick.alpha.api.month.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.month.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.month(tick.alpha.api.today());
}));

(tick.alpha.api.month.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.month(v);
}));

(tick.alpha.api.month.cljs$lang$maxFixedArity = 1);

tick.alpha.api.year = (function tick$alpha$api$year(var_args){
var G__77327 = arguments.length;
switch (G__77327) {
case 0:
return tick.alpha.api.year.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.year.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.year.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.year(tick.alpha.api.today());
}));

(tick.alpha.api.year.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.year(v);
}));

(tick.alpha.api.year.cljs$lang$maxFixedArity = 1);

tick.alpha.api.year_month = (function tick$alpha$api$year_month(var_args){
var G__77329 = arguments.length;
switch (G__77329) {
case 0:
return tick.alpha.api.year_month.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.year_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.year_month.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.protocols.year_month(tick.alpha.api.today());
}));

(tick.alpha.api.year_month.cljs$core$IFn$_invoke$arity$1 = (function (v){
return tick.protocols.year_month(v);
}));

(tick.alpha.api.year_month.cljs$lang$maxFixedArity = 1);

tick.alpha.api.zone = (function tick$alpha$api$zone(var_args){
var G__77331 = arguments.length;
switch (G__77331) {
case 0:
return tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.current_zone();
}));

(tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$1 = (function (z){
return tick.protocols.zone(z);
}));

(tick.alpha.api.zone.cljs$lang$maxFixedArity = 1);

tick.alpha.api.zone_offset = (function tick$alpha$api$zone_offset(var_args){
var G__77333 = arguments.length;
switch (G__77333) {
case 1:
return tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$1 = (function (offset){
return tick.protocols.zone_offset(offset);
}));

(tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
return cljc.java_time.zone_offset.of_hours_minutes(hours,minutes);
}));

(tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$3 = (function (hours,minutes,seconds){
return cljc.java_time.zone_offset.of_hours_minutes_seconds(hours,minutes,seconds);
}));

(tick.alpha.api.zone_offset.cljs$lang$maxFixedArity = 3);

tick.alpha.api.on = (function tick$alpha$api$on(t,d){
return tick.protocols.on(t,tick.alpha.api.date.cljs$core$IFn$_invoke$arity$1(d));
});
tick.alpha.api.at = (function tick$alpha$api$at(d,t){
return tick.protocols.at(d,tick.alpha.api.time.cljs$core$IFn$_invoke$arity$1(t));
});
tick.alpha.api.in$ = (function tick$alpha$api$in(ldt,z){
return tick.protocols.in$(ldt,tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$1(z));
});
tick.alpha.api.offset_by = (function tick$alpha$api$offset_by(ldt,offset){
return tick.protocols.offset_by(ldt,tick.alpha.api.zone_offset.cljs$core$IFn$_invoke$arity$1(offset));
});
tick.alpha.api.MONDAY = cljc.java_time.day_of_week.monday;
tick.alpha.api.TUESDAY = cljc.java_time.day_of_week.tuesday;
tick.alpha.api.WEDNESDAY = cljc.java_time.day_of_week.wednesday;
tick.alpha.api.THURSDAY = cljc.java_time.day_of_week.thursday;
tick.alpha.api.FRIDAY = cljc.java_time.day_of_week.friday;
tick.alpha.api.SATURDAY = cljc.java_time.day_of_week.saturday;
tick.alpha.api.SUNDAY = cljc.java_time.day_of_week.sunday;
tick.alpha.api.JANUARY = cljc.java_time.month.january;
tick.alpha.api.FEBRUARY = cljc.java_time.month.february;
tick.alpha.api.MARCH = cljc.java_time.month.march;
tick.alpha.api.APRIL = cljc.java_time.month.april;
tick.alpha.api.MAY = cljc.java_time.month.may;
tick.alpha.api.JUNE = cljc.java_time.month.june;
tick.alpha.api.JULY = cljc.java_time.month.july;
tick.alpha.api.AUGUST = cljc.java_time.month.august;
tick.alpha.api.SEPTEMBER = cljc.java_time.month.september;
tick.alpha.api.OCTOBER = cljc.java_time.month.october;
tick.alpha.api.NOVEMBER = cljc.java_time.month.november;
tick.alpha.api.DECEMBER = cljc.java_time.month.december;
tick.alpha.api.beginning = (function tick$alpha$api$beginning(v){
return tick.protocols.beginning(v);
});
tick.alpha.api.end = (function tick$alpha$api$end(v){
return tick.protocols.end(v);
});
tick.alpha.api.duration = (function tick$alpha$api$duration(v){
return tick.core.duration(v);
});
tick.alpha.api.coincident_QMARK_ = tick.core.coincident_QMARK_;
tick.alpha.api.noon = tick.core.noon;
tick.alpha.api.midnight = tick.core.midnight;
tick.alpha.api.midnight_QMARK_ = tick.core.midnight_QMARK_;
tick.alpha.api.epoch = tick.core.epoch;
tick.alpha.api.fields = tick.core.fields;
tick.alpha.api.with$ = tick.core.with$;
tick.alpha.api.ago = tick.core.ago;
tick.alpha.api.hence = tick.core.hence;
tick.alpha.api.UTC = tick.alpha.api.zone.cljs$core$IFn$_invoke$arity$1("UTC");
/**
 * Do not use this function if you know the expected format of the string
 * that you want to parse. This is partly because for example t/instant, t/date etc  will
 * be much faster, but also because if the string you pass it is not in the format you
 * expect, this function may still convert it into some entity that you weren't expecting.
 * 
 * If you have a string in a non-standard format, use a formatter and the parse fn of they entity you want.
 * 
 * For example:
 * 
 * (cljc.java-time.local-date/parse "20200202" (t/formatter "yyyyMMdd"))
 */
tick.alpha.api.parse = tick.protocols.parse;
tick.alpha.api.inc = (function tick$alpha$api$inc(t){
return tick.core.inc(t);
});
tick.alpha.api.dec = (function tick$alpha$api$dec(t){
return tick.core.dec(t);
});
tick.alpha.api._GT__GT_ = (function tick$alpha$api$_GT__GT_(t,amt){
return tick.core._GT__GT_(t,amt);
});
tick.alpha.api._LT__LT_ = (function tick$alpha$api$_LT__LT_(t,amt){
return tick.core._LT__LT_(t,amt);
});
/**
 * Sum amounts of time.
 * 
 *   Prefer >> for moving forward a date/time
 */
tick.alpha.api._PLUS_ = (function tick$alpha$api$_PLUS_(var_args){
var G__77337 = arguments.length;
switch (G__77337) {
case 0:
return tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___77392 = arguments.length;
var i__4819__auto___77393 = (0);
while(true){
if((i__4819__auto___77393 < len__4818__auto___77392)){
args_arr__4839__auto__.push((arguments[i__4819__auto___77393]));

var G__77394 = (i__4819__auto___77393 + (1));
i__4819__auto___77393 = G__77394;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((1)),(0),null));
return tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4840__auto__);

}
});

(tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.duration.zero;
}));

(tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$1 = (function (arg){
return arg;
}));

(tick.alpha.api._PLUS_.cljs$core$IFn$_invoke$arity$variadic = (function (arg,args){
if(((tick.core.duration_QMARK_(arg)) || (tick.core.period_QMARK_(arg)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.protocols._PLUS_,arg,args);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args))){
} else {
throw (new Error("Assert failed: (= 1 (count args))"));
}

return tick.alpha.api._GT__GT_(arg,cljs.core.first(args));
}
}));

/** @this {Function} */
(tick.alpha.api._PLUS_.cljs$lang$applyTo = (function (seq77335){
var G__77336 = cljs.core.first(seq77335);
var seq77335__$1 = cljs.core.next(seq77335);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77336,seq77335__$1);
}));

(tick.alpha.api._PLUS_.cljs$lang$maxFixedArity = (1));

/**
 * Subtract amounts of time.
 * 
 *   Prefer << for moving backward a date/time
 */
tick.alpha.api._ = (function tick$alpha$api$_(var_args){
var G__77341 = arguments.length;
switch (G__77341) {
case 0:
return tick.alpha.api._.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api._.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___77396 = arguments.length;
var i__4819__auto___77397 = (0);
while(true){
if((i__4819__auto___77397 < len__4818__auto___77396)){
args_arr__4839__auto__.push((arguments[i__4819__auto___77397]));

var G__77398 = (i__4819__auto___77397 + (1));
i__4819__auto___77397 = G__77398;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((1)),(0),null));
return tick.alpha.api._.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4840__auto__);

}
});

(tick.alpha.api._.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljc.java_time.duration.zero;
}));

(tick.alpha.api._.cljs$core$IFn$_invoke$arity$1 = (function (arg){
return tick.core.negated(arg);
}));

(tick.alpha.api._.cljs$core$IFn$_invoke$arity$variadic = (function (arg,args){
if(((tick.core.duration_QMARK_(arg)) || (tick.core.period_QMARK_(arg)))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.protocols._,arg,args);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(args))){
} else {
throw (new Error("Assert failed: (= 1 (count args))"));
}

return tick.alpha.api._LT__LT_(arg,cljs.core.first(args));
}
}));

/** @this {Function} */
(tick.alpha.api._.cljs$lang$applyTo = (function (seq77339){
var G__77340 = cljs.core.first(seq77339);
var seq77339__$1 = cljs.core.next(seq77339);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77340,seq77339__$1);
}));

(tick.alpha.api._.cljs$lang$maxFixedArity = (1));

tick.alpha.api.max = tick.core.max;
tick.alpha.api.min = tick.core.min;
tick.alpha.api.min_of_type = tick.protocols.min_of_type;
tick.alpha.api.max_of_type = tick.protocols.max_of_type;
tick.alpha.api.range = tick.protocols.range;
tick.alpha.api.int$ = (function tick$alpha$api$int(arg){
return tick.protocols.int$(arg);
});
tick.alpha.api.long$ = (function tick$alpha$api$long(arg){
return tick.protocols.long$(arg);
});
tick.alpha.api.nanos = (function tick$alpha$api$nanos(v){
return tick.protocols.nanos(v);
});
tick.alpha.api.micros = (function tick$alpha$api$micros(v){
return tick.protocols.micros(v);
});
tick.alpha.api.millis = (function tick$alpha$api$millis(v){
return tick.protocols.millis(v);
});
tick.alpha.api.seconds = (function tick$alpha$api$seconds(v){
return tick.protocols.seconds(v);
});
tick.alpha.api.minutes = (function tick$alpha$api$minutes(v){
return tick.protocols.minutes(v);
});
tick.alpha.api.hours = (function tick$alpha$api$hours(v){
return tick.protocols.hours(v);
});
tick.alpha.api.days = (function tick$alpha$api$days(v){
return tick.protocols.days(v);
});
tick.alpha.api.months = (function tick$alpha$api$months(v){
return tick.protocols.months(v);
});
tick.alpha.api.years = (function tick$alpha$api$years(v){
return tick.protocols.years(v);
});
tick.alpha.api.units = tick.core.units;
tick.alpha.api.truncate = tick.core.truncate;
tick.alpha.api._LT_ = (function tick$alpha$api$_LT_(var_args){
var G__77346 = arguments.length;
switch (G__77346) {
case 1:
return tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___77401 = arguments.length;
var i__4819__auto___77402 = (0);
while(true){
if((i__4819__auto___77402 < len__4818__auto___77401)){
args_arr__4839__auto__.push((arguments[i__4819__auto___77402]));

var G__77406 = (i__4819__auto___77402 + (1));
i__4819__auto___77402 = G__77406;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$1 = (function (_x){
return true;
}));

(tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return tick.protocols._LT_(x,y);
}));

(tick.alpha.api._LT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.protocols._LT_(x,y))){
if(cljs.core.next(more)){
var G__77407 = y;
var G__77408 = cljs.core.first(more);
var G__77409 = cljs.core.next(more);
x = G__77407;
y = G__77408;
more = G__77409;
continue;
} else {
return tick.protocols._LT_(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
}));

/** @this {Function} */
(tick.alpha.api._LT_.cljs$lang$applyTo = (function (seq77343){
var G__77344 = cljs.core.first(seq77343);
var seq77343__$1 = cljs.core.next(seq77343);
var G__77345 = cljs.core.first(seq77343__$1);
var seq77343__$2 = cljs.core.next(seq77343__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77344,G__77345,seq77343__$2);
}));

(tick.alpha.api._LT_.cljs$lang$maxFixedArity = (2));

tick.alpha.api._LT__EQ_ = (function tick$alpha$api$_LT__EQ_(var_args){
var G__77351 = arguments.length;
switch (G__77351) {
case 1:
return tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___77415 = arguments.length;
var i__4819__auto___77416 = (0);
while(true){
if((i__4819__auto___77416 < len__4818__auto___77415)){
args_arr__4839__auto__.push((arguments[i__4819__auto___77416]));

var G__77417 = (i__4819__auto___77416 + (1));
i__4819__auto___77416 = G__77417;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (_x){
return true;
}));

(tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return tick.protocols._LT__EQ_(x,y);
}));

(tick.alpha.api._LT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.protocols._LT__EQ_(x,y))){
if(cljs.core.next(more)){
var G__77418 = y;
var G__77419 = cljs.core.first(more);
var G__77420 = cljs.core.next(more);
x = G__77418;
y = G__77419;
more = G__77420;
continue;
} else {
return tick.protocols._LT__EQ_(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
}));

/** @this {Function} */
(tick.alpha.api._LT__EQ_.cljs$lang$applyTo = (function (seq77348){
var G__77349 = cljs.core.first(seq77348);
var seq77348__$1 = cljs.core.next(seq77348);
var G__77350 = cljs.core.first(seq77348__$1);
var seq77348__$2 = cljs.core.next(seq77348__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77349,G__77350,seq77348__$2);
}));

(tick.alpha.api._LT__EQ_.cljs$lang$maxFixedArity = (2));

tick.alpha.api._GT_ = (function tick$alpha$api$_GT_(var_args){
var G__77356 = arguments.length;
switch (G__77356) {
case 1:
return tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___77424 = arguments.length;
var i__4819__auto___77425 = (0);
while(true){
if((i__4819__auto___77425 < len__4818__auto___77424)){
args_arr__4839__auto__.push((arguments[i__4819__auto___77425]));

var G__77430 = (i__4819__auto___77425 + (1));
i__4819__auto___77425 = G__77430;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$1 = (function (_x){
return true;
}));

(tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return tick.protocols._GT_(x,y);
}));

(tick.alpha.api._GT_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.protocols._GT_(x,y))){
if(cljs.core.next(more)){
var G__77431 = y;
var G__77432 = cljs.core.first(more);
var G__77433 = cljs.core.next(more);
x = G__77431;
y = G__77432;
more = G__77433;
continue;
} else {
return tick.protocols._GT_(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
}));

/** @this {Function} */
(tick.alpha.api._GT_.cljs$lang$applyTo = (function (seq77353){
var G__77354 = cljs.core.first(seq77353);
var seq77353__$1 = cljs.core.next(seq77353);
var G__77355 = cljs.core.first(seq77353__$1);
var seq77353__$2 = cljs.core.next(seq77353__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77354,G__77355,seq77353__$2);
}));

(tick.alpha.api._GT_.cljs$lang$maxFixedArity = (2));

tick.alpha.api._GT__EQ_ = (function tick$alpha$api$_GT__EQ_(var_args){
var G__77361 = arguments.length;
switch (G__77361) {
case 1:
return tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___77435 = arguments.length;
var i__4819__auto___77438 = (0);
while(true){
if((i__4819__auto___77438 < len__4818__auto___77435)){
args_arr__4839__auto__.push((arguments[i__4819__auto___77438]));

var G__77439 = (i__4819__auto___77438 + (1));
i__4819__auto___77438 = G__77439;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$1 = (function (_x){
return true;
}));

(tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return tick.protocols._GT__EQ_(x,y);
}));

(tick.alpha.api._GT__EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
while(true){
if(cljs.core.truth_(tick.protocols._GT__EQ_(x,y))){
if(cljs.core.next(more)){
var G__77444 = y;
var G__77445 = cljs.core.first(more);
var G__77446 = cljs.core.next(more);
x = G__77444;
y = G__77445;
more = G__77446;
continue;
} else {
return tick.protocols._GT__EQ_(y,cljs.core.first(more));
}
} else {
return false;
}
break;
}
}));

/** @this {Function} */
(tick.alpha.api._GT__EQ_.cljs$lang$applyTo = (function (seq77358){
var G__77359 = cljs.core.first(seq77358);
var seq77358__$1 = cljs.core.next(seq77358);
var G__77360 = cljs.core.first(seq77358__$1);
var seq77358__$2 = cljs.core.next(seq77358__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77359,G__77360,seq77358__$2);
}));

(tick.alpha.api._GT__EQ_.cljs$lang$maxFixedArity = (2));

tick.alpha.api.clock = (function tick$alpha$api$clock(var_args){
var G__77363 = arguments.length;
switch (G__77363) {
case 0:
return tick.alpha.api.clock.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.clock.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.clock.cljs$core$IFn$_invoke$arity$0 = (function (){
return tick.core.current_clock();
}));

(tick.alpha.api.clock.cljs$core$IFn$_invoke$arity$1 = (function (i){
return tick.protocols.clock(i);
}));

(tick.alpha.api.clock.cljs$lang$maxFixedArity = 1);

tick.alpha.api.atom = tick.core.atom;
tick.alpha.api.swap_BANG_ = tick.core.swap_BANG_;
tick.alpha.api.swap_vals_BANG_ = tick.core.swap_vals_BANG_;
tick.alpha.api.compare_and_set_BANG_ = tick.core.compare_and_set_BANG_;
tick.alpha.api.reset_BANG_ = tick.core.reset_BANG_;
tick.alpha.api.reset_vals_BANG_ = tick.core.reset_vals_BANG_;
tick.alpha.api.new_interval = (function tick$alpha$api$new_interval(x,y){
return tick.interval.new_interval(x,y);
});
tick.alpha.api.extend = (function tick$alpha$api$extend(var_args){
var args__4824__auto__ = [];
var len__4818__auto___77450 = arguments.length;
var i__4819__auto___77455 = (0);
while(true){
if((i__4819__auto___77455 < len__4818__auto___77450)){
args__4824__auto__.push((arguments[i__4819__auto___77455]));

var G__77456 = (i__4819__auto___77455 + (1));
i__4819__auto___77455 = G__77456;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return tick.alpha.api.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(tick.alpha.api.extend.cljs$core$IFn$_invoke$arity$variadic = (function (ival,durations){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.interval.extend,ival,durations);
}));

(tick.alpha.api.extend.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tick.alpha.api.extend.cljs$lang$applyTo = (function (seq77364){
var G__77365 = cljs.core.first(seq77364);
var seq77364__$1 = cljs.core.next(seq77364);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77365,seq77364__$1);
}));

tick.alpha.api.scale = (function tick$alpha$api$scale(var_args){
var args__4824__auto__ = [];
var len__4818__auto___77457 = arguments.length;
var i__4819__auto___77458 = (0);
while(true){
if((i__4819__auto___77458 < len__4818__auto___77457)){
args__4824__auto__.push((arguments[i__4819__auto___77458]));

var G__77459 = (i__4819__auto___77458 + (1));
i__4819__auto___77458 = G__77459;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return tick.alpha.api.scale.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(tick.alpha.api.scale.cljs$core$IFn$_invoke$arity$variadic = (function (ival,durations){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.interval.scale,ival,durations);
}));

(tick.alpha.api.scale.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(tick.alpha.api.scale.cljs$lang$applyTo = (function (seq77366){
var G__77367 = cljs.core.first(seq77366);
var seq77366__$1 = cljs.core.next(seq77366);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77367,seq77366__$1);
}));

/**
 * Return an interval which forms the bounding-box of the given arguments.
 */
tick.alpha.api.bounds = tick.interval.bounds;
tick.alpha.api.am = (function tick$alpha$api$am(date){
return tick.interval.am(date);
});
tick.alpha.api.pm = (function tick$alpha$api$pm(date){
return tick.interval.pm(date);
});
tick.alpha.api.relation = (function tick$alpha$api$relation(i1,i2){
return tick.interval.relation(i1,i2);
});
tick.alpha.api.new_duration = (function tick$alpha$api$new_duration(n,u){
return tick.core.new_duration(n,u);
});
tick.alpha.api.new_period = (function tick$alpha$api$new_period(n,u){
return tick.core.new_period(n,u);
});
tick.alpha.api.between = (function tick$alpha$api$between(v1,v2){
return tick.protocols.between(v1,v2);
});
tick.alpha.api.concur = (function tick$alpha$api$concur(var_args){
var G__77371 = arguments.length;
switch (G__77371) {
case 0:
return tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___77467 = arguments.length;
var i__4819__auto___77468 = (0);
while(true){
if((i__4819__auto___77468 < len__4818__auto___77467)){
args_arr__4839__auto__.push((arguments[i__4819__auto___77468]));

var G__77469 = (i__4819__auto___77468 + (1));
i__4819__auto___77468 = G__77469;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((1)),(0),null));
return tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4840__auto__);

}
});

(tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(tick.alpha.api.concur.cljs$core$IFn$_invoke$arity$variadic = (function (x,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.interval.concur,x,args);
}));

/** @this {Function} */
(tick.alpha.api.concur.cljs$lang$applyTo = (function (seq77369){
var G__77370 = cljs.core.first(seq77369);
var seq77369__$1 = cljs.core.next(seq77369);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77370,seq77369__$1);
}));

(tick.alpha.api.concur.cljs$lang$maxFixedArity = (1));

tick.alpha.api.concurrencies = (function tick$alpha$api$concurrencies(var_args){
var args__4824__auto__ = [];
var len__4818__auto___77472 = arguments.length;
var i__4819__auto___77473 = (0);
while(true){
if((i__4819__auto___77473 < len__4818__auto___77472)){
args__4824__auto__.push((arguments[i__4819__auto___77473]));

var G__77478 = (i__4819__auto___77473 + (1));
i__4819__auto___77473 = G__77478;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return tick.alpha.api.concurrencies.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(tick.alpha.api.concurrencies.cljs$core$IFn$_invoke$arity$variadic = (function (intervals){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.interval.concurrencies,intervals);
}));

(tick.alpha.api.concurrencies.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tick.alpha.api.concurrencies.cljs$lang$applyTo = (function (seq77372){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq77372));
}));

tick.alpha.api.divide_by = (function tick$alpha$api$divide_by(divisor,t){
return tick.protocols.divide(t,divisor);
});
tick.alpha.api.divide = (function tick$alpha$api$divide(t,divisor){
return tick.protocols.divide(t,divisor);
});
tick.alpha.api.ordered_disjoint_intervals_QMARK_ = tick.interval.ordered_disjoint_intervals_QMARK_;
tick.alpha.api.unite = tick.interval.unite;
tick.alpha.api.normalize = tick.interval.normalize;
tick.alpha.api.union = tick.interval.union;
tick.alpha.api.conj = tick.interval.conj;
tick.alpha.api.intersection = tick.interval.intersection;
tick.alpha.api.intersects_QMARK_ = tick.interval.intersects_QMARK_;
tick.alpha.api.difference = tick.interval.difference;
tick.alpha.api.complement = tick.interval.complement;
tick.alpha.api.group_by = tick.interval.group_by;
tick.alpha.api.format = (function tick$alpha$api$format(var_args){
var G__77374 = arguments.length;
switch (G__77374) {
case 1:
return tick.alpha.api.format.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.format.cljs$core$IFn$_invoke$arity$1 = (function (o){
return tick.format.format.cljs$core$IFn$_invoke$arity$1(o);
}));

(tick.alpha.api.format.cljs$core$IFn$_invoke$arity$2 = (function (fmt,o){
return tick.format.format.cljs$core$IFn$_invoke$arity$2(fmt,o);
}));

(tick.alpha.api.format.cljs$lang$maxFixedArity = 2);

/**
 * Constructs a DateTimeFormatter out of either a
 * 
 *   * format string - "YYYY/mm/DD" "YYY HH:MM" etc.
 *   or
 *   * formatter name - :iso-instant :iso-date etc
 */
tick.alpha.api.formatter = (function tick$alpha$api$formatter(var_args){
var G__77376 = arguments.length;
switch (G__77376) {
case 1:
return tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$1 = (function (fmt){
return tick.format.formatter.cljs$core$IFn$_invoke$arity$1(fmt);
}));

(tick.alpha.api.formatter.cljs$core$IFn$_invoke$arity$2 = (function (fmt,locale){
return tick.format.formatter.cljs$core$IFn$_invoke$arity$2(fmt,locale);
}));

(tick.alpha.api.formatter.cljs$lang$maxFixedArity = 2);

/**
 * Return whether the provided value `v` is a clock
 */
tick.alpha.api.clock_QMARK_ = (function tick$alpha$api$clock_QMARK_(v){
return tick.core.clock_QMARK_(v);
});
/**
 * Return whether the provided value `v` is a day of the week
 */
tick.alpha.api.day_of_week_QMARK_ = (function tick$alpha$api$day_of_week_QMARK_(v){
return tick.core.day_of_week_QMARK_(v);
});
/**
 * Return whether the provided value `v` is a duration
 */
tick.alpha.api.duration_QMARK_ = (function tick$alpha$api$duration_QMARK_(v){
return tick.core.duration_QMARK_(v);
});
/**
 * Return whether the provided value `v` is an instant
 */
tick.alpha.api.instant_QMARK_ = (function tick$alpha$api$instant_QMARK_(v){
return tick.core.instant_QMARK_(v);
});
/**
 * Return whether the provided value `v` is a date
 */
tick.alpha.api.date_QMARK_ = (function tick$alpha$api$date_QMARK_(v){
return tick.core.date_QMARK_(v);
});
/**
 * Return whether the provided value `v` is a date time
 */
tick.alpha.api.date_time_QMARK_ = (function tick$alpha$api$date_time_QMARK_(v){
return tick.core.date_time_QMARK_(v);
});
/**
 * Return whether the provided value `v` is a time
 */
tick.alpha.api.time_QMARK_ = (function tick$alpha$api$time_QMARK_(v){
return tick.core.time_QMARK_(v);
});
/**
 * Return whether the provided value `v` is a month
 */
tick.alpha.api.month_QMARK_ = (function tick$alpha$api$month_QMARK_(v){
return tick.core.month_QMARK_(v);
});
/**
 * Return whether the provided value `v` is an offset date time
 */
tick.alpha.api.offset_date_time_QMARK_ = (function tick$alpha$api$offset_date_time_QMARK_(v){
return tick.core.offset_date_time_QMARK_(v);
});
/**
 * Return whether the provided value `v` is a period
 */
tick.alpha.api.period_QMARK_ = (function tick$alpha$api$period_QMARK_(v){
return tick.core.period_QMARK_(v);
});
/**
 * Return whether the provided value `v` is a year
 */
tick.alpha.api.year_QMARK_ = (function tick$alpha$api$year_QMARK_(v){
return tick.core.year_QMARK_(v);
});
/**
 * Return whether the provided value `v` is a year month
 */
tick.alpha.api.year_month_QMARK_ = (function tick$alpha$api$year_month_QMARK_(v){
return tick.core.year_month_QMARK_(v);
});
/**
 * Return whether the provided value `v` is a zone time zone
 */
tick.alpha.api.zone_QMARK_ = (function tick$alpha$api$zone_QMARK_(v){
return tick.core.zone_QMARK_(v);
});
/**
 * Return whether the provided value `v` is a zone offset
 */
tick.alpha.api.zone_offset_QMARK_ = (function tick$alpha$api$zone_offset_QMARK_(v){
return tick.core.zone_offset_QMARK_(v);
});
/**
 * Return whether the provided value `v` is a zoned date time
 */
tick.alpha.api.zoned_date_time_QMARK_ = (function tick$alpha$api$zoned_date_time_QMARK_(v){
return tick.core.zoned_date_time_QMARK_(v);
});
/**
 * Return whether the provided value `v` is an interval
 */
tick.alpha.api.interval_QMARK_ = (function tick$alpha$api$interval_QMARK_(v){
return tick.core.interval_QMARK_(v);
});

//# sourceMappingURL=tick.alpha.api.js.map
