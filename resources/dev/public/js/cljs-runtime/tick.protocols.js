goog.provide('tick.protocols');

/**
 * @interface
 */
tick.protocols.ITimeReify = function(){};

var tick$protocols$ITimeReify$on$dyn_72574 = (function (time,date){
var x__4509__auto__ = (((time == null))?null:time);
var m__4510__auto__ = (tick.protocols.on[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(time,date) : m__4510__auto__.call(null,time,date));
} else {
var m__4508__auto__ = (tick.protocols.on["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(time,date) : m__4508__auto__.call(null,time,date));
} else {
throw cljs.core.missing_protocol("ITimeReify.on",time);
}
}
});
/**
 * Set time be ON a date
 */
tick.protocols.on = (function tick$protocols$on(time,date){
if((((!((time == null)))) && ((!((time.tick$protocols$ITimeReify$on$arity$2 == null)))))){
return time.tick$protocols$ITimeReify$on$arity$2(time,date);
} else {
return tick$protocols$ITimeReify$on$dyn_72574(time,date);
}
});

var tick$protocols$ITimeReify$at$dyn_72575 = (function (date,time){
var x__4509__auto__ = (((date == null))?null:date);
var m__4510__auto__ = (tick.protocols.at[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(date,time) : m__4510__auto__.call(null,date,time));
} else {
var m__4508__auto__ = (tick.protocols.at["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(date,time) : m__4508__auto__.call(null,date,time));
} else {
throw cljs.core.missing_protocol("ITimeReify.at",date);
}
}
});
/**
 * Set date to be AT a time
 */
tick.protocols.at = (function tick$protocols$at(date,time){
if((((!((date == null)))) && ((!((date.tick$protocols$ITimeReify$at$arity$2 == null)))))){
return date.tick$protocols$ITimeReify$at$arity$2(date,time);
} else {
return tick$protocols$ITimeReify$at$dyn_72575(date,time);
}
});

var tick$protocols$ITimeReify$in$dyn_72577 = (function (dt,zone){
var x__4509__auto__ = (((dt == null))?null:dt);
var m__4510__auto__ = (tick.protocols.in$[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(dt,zone) : m__4510__auto__.call(null,dt,zone));
} else {
var m__4508__auto__ = (tick.protocols.in$["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(dt,zone) : m__4508__auto__.call(null,dt,zone));
} else {
throw cljs.core.missing_protocol("ITimeReify.in",dt);
}
}
});
/**
 * Set a date-time to be in a time-zone
 */
tick.protocols.in$ = (function tick$protocols$in(dt,zone){
if((((!((dt == null)))) && ((!((dt.tick$protocols$ITimeReify$in$arity$2 == null)))))){
return dt.tick$protocols$ITimeReify$in$arity$2(dt,zone);
} else {
return tick$protocols$ITimeReify$in$dyn_72577(dt,zone);
}
});

var tick$protocols$ITimeReify$offset_by$dyn_72578 = (function (dt,amount){
var x__4509__auto__ = (((dt == null))?null:dt);
var m__4510__auto__ = (tick.protocols.offset_by[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(dt,amount) : m__4510__auto__.call(null,dt,amount));
} else {
var m__4508__auto__ = (tick.protocols.offset_by["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(dt,amount) : m__4508__auto__.call(null,dt,amount));
} else {
throw cljs.core.missing_protocol("ITimeReify.offset-by",dt);
}
}
});
/**
 * Set a date-time to be offset by an amount
 */
tick.protocols.offset_by = (function tick$protocols$offset_by(dt,amount){
if((((!((dt == null)))) && ((!((dt.tick$protocols$ITimeReify$offset_by$arity$2 == null)))))){
return dt.tick$protocols$ITimeReify$offset_by$arity$2(dt,amount);
} else {
return tick$protocols$ITimeReify$offset_by$dyn_72578(dt,amount);
}
});


/**
 * @interface
 */
tick.protocols.IParseable = function(){};

var tick$protocols$IParseable$parse$dyn_72579 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.parse[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.parse["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IParseable.parse",_);
}
}
});
/**
 * Parse to most applicable instance.
 */
tick.protocols.parse = (function tick$protocols$parse(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IParseable$parse$arity$1 == null)))))){
return _.tick$protocols$IParseable$parse$arity$1(_);
} else {
return tick$protocols$IParseable$parse$dyn_72579(_);
}
});


/**
 * @interface
 */
tick.protocols.ITimeShift = function(){};

var tick$protocols$ITimeShift$forward_number$dyn_72582 = (function (_,n){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.forward_number[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(_,n) : m__4510__auto__.call(null,_,n));
} else {
var m__4508__auto__ = (tick.protocols.forward_number["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(_,n) : m__4508__auto__.call(null,_,n));
} else {
throw cljs.core.missing_protocol("ITimeShift.forward-number",_);
}
}
});
/**
 * Increment time
 */
tick.protocols.forward_number = (function tick$protocols$forward_number(_,n){
if((((!((_ == null)))) && ((!((_.tick$protocols$ITimeShift$forward_number$arity$2 == null)))))){
return _.tick$protocols$ITimeShift$forward_number$arity$2(_,n);
} else {
return tick$protocols$ITimeShift$forward_number$dyn_72582(_,n);
}
});

var tick$protocols$ITimeShift$forward_duration$dyn_72585 = (function (_,d){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.forward_duration[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(_,d) : m__4510__auto__.call(null,_,d));
} else {
var m__4508__auto__ = (tick.protocols.forward_duration["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(_,d) : m__4508__auto__.call(null,_,d));
} else {
throw cljs.core.missing_protocol("ITimeShift.forward-duration",_);
}
}
});
/**
 * Increment time
 */
tick.protocols.forward_duration = (function tick$protocols$forward_duration(_,d){
if((((!((_ == null)))) && ((!((_.tick$protocols$ITimeShift$forward_duration$arity$2 == null)))))){
return _.tick$protocols$ITimeShift$forward_duration$arity$2(_,d);
} else {
return tick$protocols$ITimeShift$forward_duration$dyn_72585(_,d);
}
});

var tick$protocols$ITimeShift$backward_number$dyn_72586 = (function (_,n){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.backward_number[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(_,n) : m__4510__auto__.call(null,_,n));
} else {
var m__4508__auto__ = (tick.protocols.backward_number["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(_,n) : m__4508__auto__.call(null,_,n));
} else {
throw cljs.core.missing_protocol("ITimeShift.backward-number",_);
}
}
});
/**
 * Decrement time
 */
tick.protocols.backward_number = (function tick$protocols$backward_number(_,n){
if((((!((_ == null)))) && ((!((_.tick$protocols$ITimeShift$backward_number$arity$2 == null)))))){
return _.tick$protocols$ITimeShift$backward_number$arity$2(_,n);
} else {
return tick$protocols$ITimeShift$backward_number$dyn_72586(_,n);
}
});

var tick$protocols$ITimeShift$backward_duration$dyn_72587 = (function (_,d){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.backward_duration[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(_,d) : m__4510__auto__.call(null,_,d));
} else {
var m__4508__auto__ = (tick.protocols.backward_duration["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(_,d) : m__4508__auto__.call(null,_,d));
} else {
throw cljs.core.missing_protocol("ITimeShift.backward-duration",_);
}
}
});
/**
 * Decrement time
 */
tick.protocols.backward_duration = (function tick$protocols$backward_duration(_,d){
if((((!((_ == null)))) && ((!((_.tick$protocols$ITimeShift$backward_duration$arity$2 == null)))))){
return _.tick$protocols$ITimeShift$backward_duration$arity$2(_,d);
} else {
return tick$protocols$ITimeShift$backward_duration$dyn_72587(_,d);
}
});


/**
 * @interface
 */
tick.protocols.ITimeRangeable = function(){};

var tick$protocols$ITimeRangeable$range$dyn_72588 = (function() {
var G__72589 = null;
var G__72589__1 = (function (from){
var x__4509__auto__ = (((from == null))?null:from);
var m__4510__auto__ = (tick.protocols.range[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(from) : m__4510__auto__.call(null,from));
} else {
var m__4508__auto__ = (tick.protocols.range["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(from) : m__4508__auto__.call(null,from));
} else {
throw cljs.core.missing_protocol("ITimeRangeable.range",from);
}
}
});
var G__72589__2 = (function (from,to){
var x__4509__auto__ = (((from == null))?null:from);
var m__4510__auto__ = (tick.protocols.range[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(from,to) : m__4510__auto__.call(null,from,to));
} else {
var m__4508__auto__ = (tick.protocols.range["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(from,to) : m__4508__auto__.call(null,from,to));
} else {
throw cljs.core.missing_protocol("ITimeRangeable.range",from);
}
}
});
var G__72589__3 = (function (from,to,step){
var x__4509__auto__ = (((from == null))?null:from);
var m__4510__auto__ = (tick.protocols.range[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(from,to,step) : m__4510__auto__.call(null,from,to,step));
} else {
var m__4508__auto__ = (tick.protocols.range["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(from,to,step) : m__4508__auto__.call(null,from,to,step));
} else {
throw cljs.core.missing_protocol("ITimeRangeable.range",from);
}
}
});
G__72589 = function(from,to,step){
switch(arguments.length){
case 1:
return G__72589__1.call(this,from);
case 2:
return G__72589__2.call(this,from,to);
case 3:
return G__72589__3.call(this,from,to,step);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__72589.cljs$core$IFn$_invoke$arity$1 = G__72589__1;
G__72589.cljs$core$IFn$_invoke$arity$2 = G__72589__2;
G__72589.cljs$core$IFn$_invoke$arity$3 = G__72589__3;
return G__72589;
})()
;
/**
 * Returns a lazy seq of times from start (inclusive) to end (exclusive, nil means forever), by step, where start defaults to 0, step to 1, and end to infinity.
 */
tick.protocols.range = (function tick$protocols$range(var_args){
var G__72461 = arguments.length;
switch (G__72461) {
case 1:
return tick.protocols.range.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.protocols.range.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return tick.protocols.range.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(tick.protocols.range.cljs$core$IFn$_invoke$arity$1 = (function (from){
if((((!((from == null)))) && ((!((from.tick$protocols$ITimeRangeable$range$arity$1 == null)))))){
return from.tick$protocols$ITimeRangeable$range$arity$1(from);
} else {
return tick$protocols$ITimeRangeable$range$dyn_72588(from);
}
}));

(tick.protocols.range.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
if((((!((from == null)))) && ((!((from.tick$protocols$ITimeRangeable$range$arity$2 == null)))))){
return from.tick$protocols$ITimeRangeable$range$arity$2(from,to);
} else {
return tick$protocols$ITimeRangeable$range$dyn_72588(from,to);
}
}));

(tick.protocols.range.cljs$core$IFn$_invoke$arity$3 = (function (from,to,step){
if((((!((from == null)))) && ((!((from.tick$protocols$ITimeRangeable$range$arity$3 == null)))))){
return from.tick$protocols$ITimeRangeable$range$arity$3(from,to,step);
} else {
return tick$protocols$ITimeRangeable$range$dyn_72588(from,to,step);
}
}));

(tick.protocols.range.cljs$lang$maxFixedArity = 3);



/**
 * @interface
 */
tick.protocols.IDivisible = function(){};

var tick$protocols$IDivisible$divide$dyn_72591 = (function (t,divisor){
var x__4509__auto__ = (((t == null))?null:t);
var m__4510__auto__ = (tick.protocols.divide[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(t,divisor) : m__4510__auto__.call(null,t,divisor));
} else {
var m__4508__auto__ = (tick.protocols.divide["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(t,divisor) : m__4508__auto__.call(null,t,divisor));
} else {
throw cljs.core.missing_protocol("IDivisible.divide",t);
}
}
});
/**
 * Divide time
 */
tick.protocols.divide = (function tick$protocols$divide(t,divisor){
if((((!((t == null)))) && ((!((t.tick$protocols$IDivisible$divide$arity$2 == null)))))){
return t.tick$protocols$IDivisible$divide$arity$2(t,divisor);
} else {
return tick$protocols$IDivisible$divide$dyn_72591(t,divisor);
}
});


/**
 * @interface
 */
tick.protocols.IDivisibleDuration = function(){};

var tick$protocols$IDivisibleDuration$divide_duration$dyn_72592 = (function (divisor,duration){
var x__4509__auto__ = (((divisor == null))?null:divisor);
var m__4510__auto__ = (tick.protocols.divide_duration[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(divisor,duration) : m__4510__auto__.call(null,divisor,duration));
} else {
var m__4508__auto__ = (tick.protocols.divide_duration["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(divisor,duration) : m__4508__auto__.call(null,divisor,duration));
} else {
throw cljs.core.missing_protocol("IDivisibleDuration.divide-duration",divisor);
}
}
});
/**
 * Divide a duration
 */
tick.protocols.divide_duration = (function tick$protocols$divide_duration(divisor,duration){
if((((!((divisor == null)))) && ((!((divisor.tick$protocols$IDivisibleDuration$divide_duration$arity$2 == null)))))){
return divisor.tick$protocols$IDivisibleDuration$divide_duration$arity$2(divisor,duration);
} else {
return tick$protocols$IDivisibleDuration$divide_duration$dyn_72592(divisor,duration);
}
});


/**
 * @interface
 */
tick.protocols.ITimeSpan = function(){};

var tick$protocols$ITimeSpan$beginning$dyn_72593 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.beginning[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.beginning["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeSpan.beginning",_);
}
}
});
/**
 * Return the beginning of a span of time
 */
tick.protocols.beginning = (function tick$protocols$beginning(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$ITimeSpan$beginning$arity$1 == null)))))){
return _.tick$protocols$ITimeSpan$beginning$arity$1(_);
} else {
return tick$protocols$ITimeSpan$beginning$dyn_72593(_);
}
});

var tick$protocols$ITimeSpan$end$dyn_72594 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.end[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.end["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeSpan.end",_);
}
}
});
/**
 * Return the end of a span of time
 */
tick.protocols.end = (function tick$protocols$end(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$ITimeSpan$end$arity$1 == null)))))){
return _.tick$protocols$ITimeSpan$end$arity$1(_);
} else {
return tick$protocols$ITimeSpan$end$dyn_72594(_);
}
});


/**
 * @interface
 */
tick.protocols.IConversion = function(){};

var tick$protocols$IConversion$inst$dyn_72595 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.inst[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.inst["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IConversion.inst",_);
}
}
});
/**
 * Make a java.util.Date instance.
 */
tick.protocols.inst = (function tick$protocols$inst(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IConversion$inst$arity$1 == null)))))){
return _.tick$protocols$IConversion$inst$arity$1(_);
} else {
return tick$protocols$IConversion$inst$dyn_72595(_);
}
});

var tick$protocols$IConversion$instant$dyn_72596 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.instant[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.instant["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IConversion.instant",_);
}
}
});
/**
 * Make a java.time.Instant instance.
 */
tick.protocols.instant = (function tick$protocols$instant(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IConversion$instant$arity$1 == null)))))){
return _.tick$protocols$IConversion$instant$arity$1(_);
} else {
return tick$protocols$IConversion$instant$dyn_72596(_);
}
});

var tick$protocols$IConversion$offset_date_time$dyn_72597 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.offset_date_time[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.offset_date_time["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IConversion.offset-date-time",_);
}
}
});
/**
 * Make a java.time.OffsetDateTime instance.
 */
tick.protocols.offset_date_time = (function tick$protocols$offset_date_time(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IConversion$offset_date_time$arity$1 == null)))))){
return _.tick$protocols$IConversion$offset_date_time$arity$1(_);
} else {
return tick$protocols$IConversion$offset_date_time$dyn_72597(_);
}
});

var tick$protocols$IConversion$zoned_date_time$dyn_72598 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.zoned_date_time[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.zoned_date_time["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IConversion.zoned-date-time",_);
}
}
});
/**
 * Make a java.time.ZonedDateTime instance.
 */
tick.protocols.zoned_date_time = (function tick$protocols$zoned_date_time(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IConversion$zoned_date_time$arity$1 == null)))))){
return _.tick$protocols$IConversion$zoned_date_time$arity$1(_);
} else {
return tick$protocols$IConversion$zoned_date_time$dyn_72598(_);
}
});


/**
 * @interface
 */
tick.protocols.ITimeComparison = function(){};

var tick$protocols$ITimeComparison$_LT_$dyn_72599 = (function (x,y){
var x__4509__auto__ = (((x == null))?null:x);
var m__4510__auto__ = (tick.protocols._LT_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__4510__auto__.call(null,x,y));
} else {
var m__4508__auto__ = (tick.protocols._LT_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__4508__auto__.call(null,x,y));
} else {
throw cljs.core.missing_protocol("ITimeComparison.<",x);
}
}
});
/**
 * Is x before y?
 */
tick.protocols._LT_ = (function tick$protocols$_LT_(x,y){
if((((!((x == null)))) && ((!((x.tick$protocols$ITimeComparison$_LT_$arity$2 == null)))))){
return x.tick$protocols$ITimeComparison$_LT_$arity$2(x,y);
} else {
return tick$protocols$ITimeComparison$_LT_$dyn_72599(x,y);
}
});

var tick$protocols$ITimeComparison$_LT__EQ_$dyn_72600 = (function (x,y){
var x__4509__auto__ = (((x == null))?null:x);
var m__4510__auto__ = (tick.protocols._LT__EQ_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__4510__auto__.call(null,x,y));
} else {
var m__4508__auto__ = (tick.protocols._LT__EQ_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__4508__auto__.call(null,x,y));
} else {
throw cljs.core.missing_protocol("ITimeComparison.<=",x);
}
}
});
/**
 * Is x before or at the same time as y?
 */
tick.protocols._LT__EQ_ = (function tick$protocols$_LT__EQ_(x,y){
if((((!((x == null)))) && ((!((x.tick$protocols$ITimeComparison$_LT__EQ_$arity$2 == null)))))){
return x.tick$protocols$ITimeComparison$_LT__EQ_$arity$2(x,y);
} else {
return tick$protocols$ITimeComparison$_LT__EQ_$dyn_72600(x,y);
}
});

var tick$protocols$ITimeComparison$_GT_$dyn_72601 = (function (x,y){
var x__4509__auto__ = (((x == null))?null:x);
var m__4510__auto__ = (tick.protocols._GT_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__4510__auto__.call(null,x,y));
} else {
var m__4508__auto__ = (tick.protocols._GT_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__4508__auto__.call(null,x,y));
} else {
throw cljs.core.missing_protocol("ITimeComparison.>",x);
}
}
});
/**
 * Is x after y?
 */
tick.protocols._GT_ = (function tick$protocols$_GT_(x,y){
if((((!((x == null)))) && ((!((x.tick$protocols$ITimeComparison$_GT_$arity$2 == null)))))){
return x.tick$protocols$ITimeComparison$_GT_$arity$2(x,y);
} else {
return tick$protocols$ITimeComparison$_GT_$dyn_72601(x,y);
}
});

var tick$protocols$ITimeComparison$_GT__EQ_$dyn_72602 = (function (x,y){
var x__4509__auto__ = (((x == null))?null:x);
var m__4510__auto__ = (tick.protocols._GT__EQ_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__4510__auto__.call(null,x,y));
} else {
var m__4508__auto__ = (tick.protocols._GT__EQ_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(x,y) : m__4508__auto__.call(null,x,y));
} else {
throw cljs.core.missing_protocol("ITimeComparison.>=",x);
}
}
});
/**
 * Is x after or at the same time as y?
 */
tick.protocols._GT__EQ_ = (function tick$protocols$_GT__EQ_(x,y){
if((((!((x == null)))) && ((!((x.tick$protocols$ITimeComparison$_GT__EQ_$arity$2 == null)))))){
return x.tick$protocols$ITimeComparison$_GT__EQ_$arity$2(x,y);
} else {
return tick$protocols$ITimeComparison$_GT__EQ_$dyn_72602(x,y);
}
});


/**
 * @interface
 */
tick.protocols.MinMax = function(){};

var tick$protocols$MinMax$min_of_type$dyn_72603 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.min_of_type[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.min_of_type["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("MinMax.min-of-type",_);
}
}
});
/**
 * Return the min
 */
tick.protocols.min_of_type = (function tick$protocols$min_of_type(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$MinMax$min_of_type$arity$1 == null)))))){
return _.tick$protocols$MinMax$min_of_type$arity$1(_);
} else {
return tick$protocols$MinMax$min_of_type$dyn_72603(_);
}
});

var tick$protocols$MinMax$max_of_type$dyn_72604 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.max_of_type[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.max_of_type["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("MinMax.max-of-type",_);
}
}
});
/**
 * Return the max
 */
tick.protocols.max_of_type = (function tick$protocols$max_of_type(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$MinMax$max_of_type$arity$1 == null)))))){
return _.tick$protocols$MinMax$max_of_type$arity$1(_);
} else {
return tick$protocols$MinMax$max_of_type$dyn_72604(_);
}
});


/**
 * @interface
 */
tick.protocols.ITimeArithmetic = function(){};

var tick$protocols$ITimeArithmetic$_PLUS_$dyn_72605 = (function (t,d){
var x__4509__auto__ = (((t == null))?null:t);
var m__4510__auto__ = (tick.protocols._PLUS_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(t,d) : m__4510__auto__.call(null,t,d));
} else {
var m__4508__auto__ = (tick.protocols._PLUS_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(t,d) : m__4508__auto__.call(null,t,d));
} else {
throw cljs.core.missing_protocol("ITimeArithmetic.+",t);
}
}
});
/**
 * Sum amounts of time
 */
tick.protocols._PLUS_ = (function tick$protocols$_PLUS_(t,d){
if((((!((t == null)))) && ((!((t.tick$protocols$ITimeArithmetic$_PLUS_$arity$2 == null)))))){
return t.tick$protocols$ITimeArithmetic$_PLUS_$arity$2(t,d);
} else {
return tick$protocols$ITimeArithmetic$_PLUS_$dyn_72605(t,d);
}
});

var tick$protocols$ITimeArithmetic$_$dyn_72607 = (function (t,d){
var x__4509__auto__ = (((t == null))?null:t);
var m__4510__auto__ = (tick.protocols._[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(t,d) : m__4510__auto__.call(null,t,d));
} else {
var m__4508__auto__ = (tick.protocols._["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(t,d) : m__4508__auto__.call(null,t,d));
} else {
throw cljs.core.missing_protocol("ITimeArithmetic.-",t);
}
}
});
/**
 * Subtract from amount of time, or negate
 */
tick.protocols._ = (function tick$protocols$_(t,d){
if((((!((t == null)))) && ((!((t.tick$protocols$ITimeArithmetic$_$arity$2 == null)))))){
return t.tick$protocols$ITimeArithmetic$_$arity$2(t,d);
} else {
return tick$protocols$ITimeArithmetic$_$dyn_72607(t,d);
}
});


/**
 * @interface
 */
tick.protocols.IBetween = function(){};

var tick$protocols$IBetween$between$dyn_72608 = (function (v1,v2){
var x__4509__auto__ = (((v1 == null))?null:v1);
var m__4510__auto__ = (tick.protocols.between[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(v1,v2) : m__4510__auto__.call(null,v1,v2));
} else {
var m__4508__auto__ = (tick.protocols.between["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(v1,v2) : m__4508__auto__.call(null,v1,v2));
} else {
throw cljs.core.missing_protocol("IBetween.between",v1);
}
}
});
/**
 * Return the duration (or period) between two times
 */
tick.protocols.between = (function tick$protocols$between(v1,v2){
if((((!((v1 == null)))) && ((!((v1.tick$protocols$IBetween$between$arity$2 == null)))))){
return v1.tick$protocols$IBetween$between$arity$2(v1,v2);
} else {
return tick$protocols$IBetween$between$dyn_72608(v1,v2);
}
});


/**
 * @interface
 */
tick.protocols.ILocalTime = function(){};

var tick$protocols$ILocalTime$local_QMARK_$dyn_72609 = (function (t){
var x__4509__auto__ = (((t == null))?null:t);
var m__4510__auto__ = (tick.protocols.local_QMARK_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(t) : m__4510__auto__.call(null,t));
} else {
var m__4508__auto__ = (tick.protocols.local_QMARK_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(t) : m__4508__auto__.call(null,t));
} else {
throw cljs.core.missing_protocol("ILocalTime.local?",t);
}
}
});
/**
 * Is the time a java.time.LocalTime or java.time.LocalDateTime?
 */
tick.protocols.local_QMARK_ = (function tick$protocols$local_QMARK_(t){
if((((!((t == null)))) && ((!((t.tick$protocols$ILocalTime$local_QMARK_$arity$1 == null)))))){
return t.tick$protocols$ILocalTime$local_QMARK_$arity$1(t);
} else {
return tick$protocols$ILocalTime$local_QMARK_$dyn_72609(t);
}
});


/**
 * @interface
 */
tick.protocols.IClock = function(){};

var tick$protocols$IClock$clock$dyn_72610 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.clock[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.clock["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IClock.clock",_);
}
}
});
/**
 * Make a clock
 */
tick.protocols.clock = (function tick$protocols$clock(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IClock$clock$arity$1 == null)))))){
return _.tick$protocols$IClock$clock$arity$1(_);
} else {
return tick$protocols$IClock$clock$dyn_72610(_);
}
});


/**
 * @interface
 */
tick.protocols.IExtraction = function(){};

var tick$protocols$IExtraction$time$dyn_72613 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.time[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.time["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.time",_);
}
}
});
/**
 * Make a java.time.LocalTime instance.
 */
tick.protocols.time = (function tick$protocols$time(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$time$arity$1 == null)))))){
return _.tick$protocols$IExtraction$time$arity$1(_);
} else {
return tick$protocols$IExtraction$time$dyn_72613(_);
}
});

var tick$protocols$IExtraction$date$dyn_72614 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.date[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.date["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.date",_);
}
}
});
/**
 * Make a java.time.LocalDate instance.
 */
tick.protocols.date = (function tick$protocols$date(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$date$arity$1 == null)))))){
return _.tick$protocols$IExtraction$date$arity$1(_);
} else {
return tick$protocols$IExtraction$date$dyn_72614(_);
}
});

var tick$protocols$IExtraction$date_time$dyn_72615 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.date_time[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.date_time["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.date-time",_);
}
}
});
/**
 * Make a java.time.LocalDateTime instance.
 */
tick.protocols.date_time = (function tick$protocols$date_time(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$date_time$arity$1 == null)))))){
return _.tick$protocols$IExtraction$date_time$arity$1(_);
} else {
return tick$protocols$IExtraction$date_time$dyn_72615(_);
}
});

var tick$protocols$IExtraction$nanosecond$dyn_72616 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.nanosecond[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.nanosecond["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.nanosecond",_);
}
}
});
/**
 * Return the millisecond field of the given time
 */
tick.protocols.nanosecond = (function tick$protocols$nanosecond(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$nanosecond$arity$1 == null)))))){
return _.tick$protocols$IExtraction$nanosecond$arity$1(_);
} else {
return tick$protocols$IExtraction$nanosecond$dyn_72616(_);
}
});

var tick$protocols$IExtraction$microsecond$dyn_72617 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.microsecond[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.microsecond["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.microsecond",_);
}
}
});
/**
 * Return the millisecond field of the given time
 */
tick.protocols.microsecond = (function tick$protocols$microsecond(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$microsecond$arity$1 == null)))))){
return _.tick$protocols$IExtraction$microsecond$arity$1(_);
} else {
return tick$protocols$IExtraction$microsecond$dyn_72617(_);
}
});

var tick$protocols$IExtraction$millisecond$dyn_72618 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.millisecond[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.millisecond["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.millisecond",_);
}
}
});
/**
 * Return the millisecond field of the given time
 */
tick.protocols.millisecond = (function tick$protocols$millisecond(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$millisecond$arity$1 == null)))))){
return _.tick$protocols$IExtraction$millisecond$arity$1(_);
} else {
return tick$protocols$IExtraction$millisecond$dyn_72618(_);
}
});

var tick$protocols$IExtraction$second$dyn_72619 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.second[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.second["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.second",_);
}
}
});
/**
 * Return the second field of the given time
 */
tick.protocols.second = (function tick$protocols$second(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$second$arity$1 == null)))))){
return _.tick$protocols$IExtraction$second$arity$1(_);
} else {
return tick$protocols$IExtraction$second$dyn_72619(_);
}
});

var tick$protocols$IExtraction$minute$dyn_72620 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.minute[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.minute["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.minute",_);
}
}
});
/**
 * Return the minute field of the given time
 */
tick.protocols.minute = (function tick$protocols$minute(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$minute$arity$1 == null)))))){
return _.tick$protocols$IExtraction$minute$arity$1(_);
} else {
return tick$protocols$IExtraction$minute$dyn_72620(_);
}
});

var tick$protocols$IExtraction$hour$dyn_72621 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.hour[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.hour["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.hour",_);
}
}
});
/**
 * Return the hour field of the given time
 */
tick.protocols.hour = (function tick$protocols$hour(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$hour$arity$1 == null)))))){
return _.tick$protocols$IExtraction$hour$arity$1(_);
} else {
return tick$protocols$IExtraction$hour$dyn_72621(_);
}
});

var tick$protocols$IExtraction$day_of_week$dyn_72622 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.day_of_week[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.day_of_week["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.day-of-week",_);
}
}
});
/**
 * Make a java.time.DayOfWeek instance.
 */
tick.protocols.day_of_week = (function tick$protocols$day_of_week(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$day_of_week$arity$1 == null)))))){
return _.tick$protocols$IExtraction$day_of_week$arity$1(_);
} else {
return tick$protocols$IExtraction$day_of_week$dyn_72622(_);
}
});

var tick$protocols$IExtraction$day_of_month$dyn_72623 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.day_of_month[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.day_of_month["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.day-of-month",_);
}
}
});
/**
 * Return value of the day in the month as an integer.
 */
tick.protocols.day_of_month = (function tick$protocols$day_of_month(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$day_of_month$arity$1 == null)))))){
return _.tick$protocols$IExtraction$day_of_month$arity$1(_);
} else {
return tick$protocols$IExtraction$day_of_month$dyn_72623(_);
}
});

var tick$protocols$IExtraction$int$dyn_72624 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.int$[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.int$["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.int",_);
}
}
});
/**
 * Return value as integer
 */
tick.protocols.int$ = (function tick$protocols$int(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$int$arity$1 == null)))))){
return _.tick$protocols$IExtraction$int$arity$1(_);
} else {
return tick$protocols$IExtraction$int$dyn_72624(_);
}
});

var tick$protocols$IExtraction$long$dyn_72626 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.long$[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.long$["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.long",_);
}
}
});
/**
 * Return value as long
 */
tick.protocols.long$ = (function tick$protocols$long(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$long$arity$1 == null)))))){
return _.tick$protocols$IExtraction$long$arity$1(_);
} else {
return tick$protocols$IExtraction$long$dyn_72626(_);
}
});

var tick$protocols$IExtraction$month$dyn_72627 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.month[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.month["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.month",_);
}
}
});
/**
 * Make a java.time.Month instance.
 */
tick.protocols.month = (function tick$protocols$month(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$month$arity$1 == null)))))){
return _.tick$protocols$IExtraction$month$arity$1(_);
} else {
return tick$protocols$IExtraction$month$dyn_72627(_);
}
});

var tick$protocols$IExtraction$year$dyn_72628 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.year[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.year["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.year",_);
}
}
});
/**
 * Make a java.time.Year instance.
 */
tick.protocols.year = (function tick$protocols$year(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$year$arity$1 == null)))))){
return _.tick$protocols$IExtraction$year$arity$1(_);
} else {
return tick$protocols$IExtraction$year$dyn_72628(_);
}
});

var tick$protocols$IExtraction$year_month$dyn_72630 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.year_month[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.year_month["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.year-month",_);
}
}
});
/**
 * Make a java.time.YearMonth instance.
 */
tick.protocols.year_month = (function tick$protocols$year_month(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$year_month$arity$1 == null)))))){
return _.tick$protocols$IExtraction$year_month$arity$1(_);
} else {
return tick$protocols$IExtraction$year_month$dyn_72630(_);
}
});

var tick$protocols$IExtraction$zone$dyn_72631 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.zone[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.zone["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.zone",_);
}
}
});
/**
 * Make a java.time.ZoneId instance.
 */
tick.protocols.zone = (function tick$protocols$zone(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$zone$arity$1 == null)))))){
return _.tick$protocols$IExtraction$zone$arity$1(_);
} else {
return tick$protocols$IExtraction$zone$dyn_72631(_);
}
});

var tick$protocols$IExtraction$zone_offset$dyn_72633 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.zone_offset[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.zone_offset["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IExtraction.zone-offset",_);
}
}
});
/**
 * Make a java.time.ZoneOffset instance.
 */
tick.protocols.zone_offset = (function tick$protocols$zone_offset(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$IExtraction$zone_offset$arity$1 == null)))))){
return _.tick$protocols$IExtraction$zone_offset$arity$1(_);
} else {
return tick$protocols$IExtraction$zone_offset$dyn_72633(_);
}
});


/**
 * @interface
 */
tick.protocols.ITimeLength = function(){};

var tick$protocols$ITimeLength$nanos$dyn_72634 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.nanos[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.nanos["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.nanos",_);
}
}
});
/**
 * Return the given quantity in nanoseconds.
 */
tick.protocols.nanos = (function tick$protocols$nanos(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$ITimeLength$nanos$arity$1 == null)))))){
return _.tick$protocols$ITimeLength$nanos$arity$1(_);
} else {
return tick$protocols$ITimeLength$nanos$dyn_72634(_);
}
});

var tick$protocols$ITimeLength$micros$dyn_72635 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.micros[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.micros["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.micros",_);
}
}
});
/**
 * Return the given quantity in microseconds.
 */
tick.protocols.micros = (function tick$protocols$micros(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$ITimeLength$micros$arity$1 == null)))))){
return _.tick$protocols$ITimeLength$micros$arity$1(_);
} else {
return tick$protocols$ITimeLength$micros$dyn_72635(_);
}
});

var tick$protocols$ITimeLength$millis$dyn_72637 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.millis[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.millis["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.millis",_);
}
}
});
/**
 * Return the given quantity in milliseconds.
 */
tick.protocols.millis = (function tick$protocols$millis(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$ITimeLength$millis$arity$1 == null)))))){
return _.tick$protocols$ITimeLength$millis$arity$1(_);
} else {
return tick$protocols$ITimeLength$millis$dyn_72637(_);
}
});

var tick$protocols$ITimeLength$seconds$dyn_72639 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.seconds[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.seconds["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.seconds",_);
}
}
});
/**
 * Return the given quantity in seconds.
 */
tick.protocols.seconds = (function tick$protocols$seconds(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$ITimeLength$seconds$arity$1 == null)))))){
return _.tick$protocols$ITimeLength$seconds$arity$1(_);
} else {
return tick$protocols$ITimeLength$seconds$dyn_72639(_);
}
});

var tick$protocols$ITimeLength$minutes$dyn_72641 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.minutes[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.minutes["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.minutes",_);
}
}
});
/**
 * Return the given quantity in minutes.
 */
tick.protocols.minutes = (function tick$protocols$minutes(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$ITimeLength$minutes$arity$1 == null)))))){
return _.tick$protocols$ITimeLength$minutes$arity$1(_);
} else {
return tick$protocols$ITimeLength$minutes$dyn_72641(_);
}
});

var tick$protocols$ITimeLength$hours$dyn_72642 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.hours[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.hours["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.hours",_);
}
}
});
/**
 * Return the given quantity in hours.
 */
tick.protocols.hours = (function tick$protocols$hours(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$ITimeLength$hours$arity$1 == null)))))){
return _.tick$protocols$ITimeLength$hours$arity$1(_);
} else {
return tick$protocols$ITimeLength$hours$dyn_72642(_);
}
});

var tick$protocols$ITimeLength$days$dyn_72643 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.days[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.days["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.days",_);
}
}
});
/**
 * Return the given quantity in days.
 */
tick.protocols.days = (function tick$protocols$days(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$ITimeLength$days$arity$1 == null)))))){
return _.tick$protocols$ITimeLength$days$arity$1(_);
} else {
return tick$protocols$ITimeLength$days$dyn_72643(_);
}
});

var tick$protocols$ITimeLength$months$dyn_72645 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.months[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.months["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.months",_);
}
}
});
/**
 * Return the given quantity in months.
 */
tick.protocols.months = (function tick$protocols$months(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$ITimeLength$months$arity$1 == null)))))){
return _.tick$protocols$ITimeLength$months$arity$1(_);
} else {
return tick$protocols$ITimeLength$months$dyn_72645(_);
}
});

var tick$protocols$ITimeLength$years$dyn_72646 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.protocols.years[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.protocols.years["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeLength.years",_);
}
}
});
/**
 * Return the given quantity in years.
 */
tick.protocols.years = (function tick$protocols$years(_){
if((((!((_ == null)))) && ((!((_.tick$protocols$ITimeLength$years$arity$1 == null)))))){
return _.tick$protocols$ITimeLength$years$arity$1(_);
} else {
return tick$protocols$ITimeLength$years$dyn_72646(_);
}
});


//# sourceMappingURL=tick.protocols.js.map
