goog.provide('cljc.java_time.temporal.chrono_unit');
cljc.java_time.temporal.chrono_unit.millis = goog.object.get(java.time.temporal.ChronoUnit,"MILLIS");
cljc.java_time.temporal.chrono_unit.minutes = goog.object.get(java.time.temporal.ChronoUnit,"MINUTES");
cljc.java_time.temporal.chrono_unit.micros = goog.object.get(java.time.temporal.ChronoUnit,"MICROS");
cljc.java_time.temporal.chrono_unit.half_days = goog.object.get(java.time.temporal.ChronoUnit,"HALF_DAYS");
cljc.java_time.temporal.chrono_unit.millennia = goog.object.get(java.time.temporal.ChronoUnit,"MILLENNIA");
cljc.java_time.temporal.chrono_unit.years = goog.object.get(java.time.temporal.ChronoUnit,"YEARS");
cljc.java_time.temporal.chrono_unit.decades = goog.object.get(java.time.temporal.ChronoUnit,"DECADES");
cljc.java_time.temporal.chrono_unit.days = goog.object.get(java.time.temporal.ChronoUnit,"DAYS");
cljc.java_time.temporal.chrono_unit.centuries = goog.object.get(java.time.temporal.ChronoUnit,"CENTURIES");
cljc.java_time.temporal.chrono_unit.weeks = goog.object.get(java.time.temporal.ChronoUnit,"WEEKS");
cljc.java_time.temporal.chrono_unit.hours = goog.object.get(java.time.temporal.ChronoUnit,"HOURS");
cljc.java_time.temporal.chrono_unit.eras = goog.object.get(java.time.temporal.ChronoUnit,"ERAS");
cljc.java_time.temporal.chrono_unit.seconds = goog.object.get(java.time.temporal.ChronoUnit,"SECONDS");
cljc.java_time.temporal.chrono_unit.months = goog.object.get(java.time.temporal.ChronoUnit,"MONTHS");
cljc.java_time.temporal.chrono_unit.nanos = goog.object.get(java.time.temporal.ChronoUnit,"NANOS");
cljc.java_time.temporal.chrono_unit.forever = goog.object.get(java.time.temporal.ChronoUnit,"FOREVER");
cljc.java_time.temporal.chrono_unit.values = (function cljc$java_time$temporal$chrono_unit$values(){
return cljs.core.js_invoke(java.time.temporal.ChronoUnit,"values");
});
cljc.java_time.temporal.chrono_unit.value_of = (function cljc$java_time$temporal$chrono_unit$value_of(var_args){
var G__54870 = arguments.length;
switch (G__54870) {
case 1:
return cljc.java_time.temporal.chrono_unit.value_of.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljc.java_time.temporal.chrono_unit.value_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljc.java_time.temporal.chrono_unit.value_of.cljs$core$IFn$_invoke$arity$1 = (function (java_lang_String5699){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.temporal.ChronoUnit,"valueOf",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_String5699], 0));
}));

(cljc.java_time.temporal.chrono_unit.value_of.cljs$core$IFn$_invoke$arity$2 = (function (java_lang_Class5700,java_lang_String5701){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.temporal.ChronoUnit,"valueOf",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_lang_Class5700,java_lang_String5701], 0));
}));

(cljc.java_time.temporal.chrono_unit.value_of.cljs$lang$maxFixedArity = 2);

cljc.java_time.temporal.chrono_unit.ordinal = (function cljc$java_time$temporal$chrono_unit$ordinal(this5702){
return this5702.ordinal();
});
cljc.java_time.temporal.chrono_unit.is_duration_estimated = (function cljc$java_time$temporal$chrono_unit$is_duration_estimated(this5703){
return this5703.isDurationEstimated();
});
cljc.java_time.temporal.chrono_unit.to_string = (function cljc$java_time$temporal$chrono_unit$to_string(this5704){
return this5704.toString();
});
cljc.java_time.temporal.chrono_unit.is_date_based = (function cljc$java_time$temporal$chrono_unit$is_date_based(this5705){
return this5705.isDateBased();
});
cljc.java_time.temporal.chrono_unit.add_to = (function cljc$java_time$temporal$chrono_unit$add_to(this5706,java_time_temporal_Temporal5707,long5708){
return this5706.addTo(java_time_temporal_Temporal5707,long5708);
});
cljc.java_time.temporal.chrono_unit.name = (function cljc$java_time$temporal$chrono_unit$name(this5709){
return this5709.name();
});
cljc.java_time.temporal.chrono_unit.is_supported_by = (function cljc$java_time$temporal$chrono_unit$is_supported_by(this5710,java_time_temporal_Temporal5711){
return this5710.isSupportedBy(java_time_temporal_Temporal5711);
});
cljc.java_time.temporal.chrono_unit.get_declaring_class = (function cljc$java_time$temporal$chrono_unit$get_declaring_class(this5712){
return this5712.declaringClass();
});
cljc.java_time.temporal.chrono_unit.between = (function cljc$java_time$temporal$chrono_unit$between(this5713,java_time_temporal_Temporal5714,java_time_temporal_Temporal5715){
return this5713.between(java_time_temporal_Temporal5714,java_time_temporal_Temporal5715);
});
cljc.java_time.temporal.chrono_unit.hash_code = (function cljc$java_time$temporal$chrono_unit$hash_code(this5716){
return this5716.hashCode();
});
cljc.java_time.temporal.chrono_unit.compare_to = (function cljc$java_time$temporal$chrono_unit$compare_to(this5717,java_lang_Enum5718){
return this5717.compareTo(java_lang_Enum5718);
});
cljc.java_time.temporal.chrono_unit.get_duration = (function cljc$java_time$temporal$chrono_unit$get_duration(this5719){
return this5719.duration();
});
cljc.java_time.temporal.chrono_unit.equals = (function cljc$java_time$temporal$chrono_unit$equals(this5720,java_lang_Object5721){
return this5720.equals(java_lang_Object5721);
});
cljc.java_time.temporal.chrono_unit.is_time_based = (function cljc$java_time$temporal$chrono_unit$is_time_based(this5722){
return this5722.isTimeBased();
});

//# sourceMappingURL=cljc.java_time.temporal.chrono_unit.js.map
