goog.provide('cljc.java_time.clock');
cljc.java_time.clock.tick = (function cljc$java_time$clock$tick(java_time_Clock5490,java_time_Duration5491){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Clock,"tick",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_Clock5490,java_time_Duration5491], 0));
});
cljc.java_time.clock.offset = (function cljc$java_time$clock$offset(java_time_Clock5492,java_time_Duration5493){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Clock,"offset",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_Clock5492,java_time_Duration5493], 0));
});
cljc.java_time.clock.system_utc = (function cljc$java_time$clock$system_utc(){
return cljs.core.js_invoke(java.time.Clock,"systemUTC");
});
cljc.java_time.clock.system_default_zone = (function cljc$java_time$clock$system_default_zone(){
return cljs.core.js_invoke(java.time.Clock,"systemDefaultZone");
});
cljc.java_time.clock.fixed = (function cljc$java_time$clock$fixed(java_time_Instant5494,java_time_ZoneId5495){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Clock,"fixed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_Instant5494,java_time_ZoneId5495], 0));
});
cljc.java_time.clock.tick_minutes = (function cljc$java_time$clock$tick_minutes(java_time_ZoneId5496){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Clock,"tickMinutes",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_ZoneId5496], 0));
});
cljc.java_time.clock.tick_seconds = (function cljc$java_time$clock$tick_seconds(java_time_ZoneId5497){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Clock,"tickSeconds",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_ZoneId5497], 0));
});
cljc.java_time.clock.millis = (function cljc$java_time$clock$millis(this5498){
return this5498.millis();
});
cljc.java_time.clock.with_zone = (function cljc$java_time$clock$with_zone(this5499,java_time_ZoneId5500){
return this5499.withZone(java_time_ZoneId5500);
});
cljc.java_time.clock.get_zone = (function cljc$java_time$clock$get_zone(this5501){
return this5501.zone();
});
cljc.java_time.clock.hash_code = (function cljc$java_time$clock$hash_code(this5502){
return this5502.hashCode();
});
cljc.java_time.clock.system = (function cljc$java_time$clock$system(java_time_ZoneId5503){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(java.time.Clock,"system",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([java_time_ZoneId5503], 0));
});
cljc.java_time.clock.instant = (function cljc$java_time$clock$instant(this5504){
return this5504.instant();
});
cljc.java_time.clock.equals = (function cljc$java_time$clock$equals(this5505,java_lang_Object5506){
return this5505.equals(java_lang_Object5506);
});

//# sourceMappingURL=cljc.java_time.clock.js.map
