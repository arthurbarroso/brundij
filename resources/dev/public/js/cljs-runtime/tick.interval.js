goog.provide('tick.interval');
tick.interval.make_interval = (function tick$interval$make_interval(beginning,end){
if(cljs.core.truth_(tick.protocols._LT_(beginning,end))){
} else {
throw (new Error("Assert failed: (p/< beginning end)"));
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),beginning,new cljs.core.Keyword("tick","end","tick/end",-269896517),end], null);
});

/**
 * @interface
 */
tick.interval.ITimeSpanable = function(){};

var tick$interval$ITimeSpanable$temporal_value$dyn_73402 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (tick.interval.temporal_value[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (tick.interval.temporal_value["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeSpanable.temporal-value",_);
}
}
});
/**
 * Return a value of a type that satisfies p/ITimeSpan
 */
tick.interval.temporal_value = (function tick$interval$temporal_value(_){
if((((!((_ == null)))) && ((!((_.tick$interval$ITimeSpanable$temporal_value$arity$1 == null)))))){
return _.tick$interval$ITimeSpanable$temporal_value$arity$1(_);
} else {
return tick$interval$ITimeSpanable$temporal_value$dyn_73402(_);
}
});

(java.time.YearMonth.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.YearMonth.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (ym){
var ym__$1 = this;
return ym__$1;
}));

(java.time.Year.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Year.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (y){
var y__$1 = this;
return y__$1;
}));

(java.time.ZonedDateTime.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZonedDateTime.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (zdt){
var zdt__$1 = this;
return zdt__$1;
}));

(java.time.Instant.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Instant.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (i){
var i__$1 = this;
return i__$1;
}));

(Date.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (d){
var d__$1 = this;
return tick.protocols.instant(d__$1);
}));

(java.time.LocalDate.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDate.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (d){
var d__$1 = this;
return d__$1;
}));

goog.object.set(tick.interval.ITimeSpanable,"string",true);

goog.object.set(tick.interval.temporal_value,"string",(function (s){
return tick.interval.temporal_value(tick.protocols.parse(s));
}));

goog.object.set(tick.interval.ITimeSpanable,"function",true);

goog.object.set(tick.interval.temporal_value,"function",(function (f){
return tick.interval.temporal_value((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}));

(java.time.LocalTime.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalTime.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (t){
var t__$1 = this;
return t__$1;
}));

(java.time.OffsetDateTime.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.OffsetDateTime.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (odt){
var odt__$1 = this;
return odt__$1;
}));

(java.time.LocalDateTime.prototype.tick$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDateTime.prototype.tick$interval$ITimeSpanable$temporal_value$arity$1 = (function (ldt){
var ldt__$1 = this;
return ldt__$1;
}));
tick.interval.new_interval = (function tick$interval$new_interval(v1,v2){
var t1 = tick.protocols.beginning(tick.interval.temporal_value(v1));
var t2 = tick.protocols.end(tick.interval.temporal_value(v2));
if(cljs.core.truth_(tick.protocols._LT_(t1,t2))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),t1,new cljs.core.Keyword("tick","end","tick/end",-269896517),t2], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Interval must span between two times, the first must be before the second",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),v1,new cljs.core.Keyword("tick","end","tick/end",-269896517),v2], null));
}
});
tick.interval.extend = (function tick$interval$extend(ival,dur){
return tick.interval.make_interval(tick.protocols.beginning(ival),tick.protocols.forward_duration(tick.protocols.end(ival),dur));
});
tick.interval.scale = (function tick$interval$scale(ival,factor){
return tick.interval.make_interval(tick.protocols.beginning(ival),tick.protocols.forward_duration(tick.protocols.beginning(ival),cljc.java_time.duration.multiplied_by(tick.core.duration(ival),factor)));
});
(cljs.core.PersistentArrayMap.prototype.tick$protocols$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.tick$protocols$ITimeShift$forward_duration$arity$2 = (function (ival,d){
var ival__$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ival__$1,new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),(function (p1__73205_SHARP_){
return tick.protocols.forward_duration(p1__73205_SHARP_,d);
})),new cljs.core.Keyword("tick","end","tick/end",-269896517),(function (p1__73206_SHARP_){
return tick.protocols.forward_duration(p1__73206_SHARP_,d);
}));
}));

(cljs.core.PersistentArrayMap.prototype.tick$protocols$ITimeShift$backward_duration$arity$2 = (function (ival,d){
var ival__$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ival__$1,new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),(function (p1__73207_SHARP_){
return tick.protocols.backward_duration(p1__73207_SHARP_,d);
})),new cljs.core.Keyword("tick","end","tick/end",-269896517),(function (p1__73208_SHARP_){
return tick.protocols.backward_duration(p1__73208_SHARP_,d);
}));
}));
(cljs.core.PersistentArrayMap.prototype.tick$protocols$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.tick$protocols$ITimeReify$on$arity$2 = (function (i,date){
var i__$1 = this;
return tick.interval.new_interval(tick.protocols.on(tick.protocols.beginning(i__$1),date),tick.protocols.on(tick.protocols.end(i__$1),date));
}));

(cljs.core.PersistentArrayMap.prototype.tick$protocols$ITimeReify$in$arity$2 = (function (i,zone){
var i__$1 = this;
return tick.interval.new_interval(tick.protocols.in$(tick.protocols.beginning(i__$1),zone),tick.protocols.in$(tick.protocols.end(i__$1),zone));
}));
tick.interval.bounds = (function tick$interval$bounds(var_args){
var args__4824__auto__ = [];
var len__4818__auto___73409 = arguments.length;
var i__4819__auto___73410 = (0);
while(true){
if((i__4819__auto___73410 < len__4818__auto___73409)){
args__4824__auto__.push((arguments[i__4819__auto___73410]));

var G__73411 = (i__4819__auto___73410 + (1));
i__4819__auto___73410 = G__73411;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return tick.interval.bounds.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(tick.interval.bounds.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return tick.interval.make_interval(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(tick.protocols.beginning,args)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(tick.protocols.end,args)));
}));

(tick.interval.bounds.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tick.interval.bounds.cljs$lang$applyTo = (function (seq73209){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73209));
}));

tick.interval.am = (function tick$interval$am(date){
return tick.interval.new_interval(tick.protocols.beginning(date),tick.core.noon.cljs$core$IFn$_invoke$arity$1(date));
});
tick.interval.pm = (function tick$interval$pm(date){
return tick.interval.new_interval(tick.core.noon.cljs$core$IFn$_invoke$arity$1(date),tick.protocols.end(date));
});
tick.interval.precedes_QMARK_ = (function tick$interval$precedes_QMARK_(x,y){
return tick.protocols._LT_(tick.protocols.end(x),tick.protocols.beginning(y));
});
tick.interval.equals_QMARK_ = (function tick$interval$equals_QMARK_(x,y){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tick.protocols.beginning(x),tick.protocols.beginning(y))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tick.protocols.end(x),tick.protocols.end(y))));
});
tick.interval.meets_QMARK_ = (function tick$interval$meets_QMARK_(x,y){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tick.protocols.end(x),tick.protocols.beginning(y));
});
tick.interval.overlaps_QMARK_ = (function tick$interval$overlaps_QMARK_(x,y){
var and__4210__auto__ = tick.protocols._LT_(tick.protocols.beginning(x),tick.protocols.beginning(y));
if(cljs.core.truth_(and__4210__auto__)){
var and__4210__auto____$1 = tick.protocols._GT_(tick.protocols.end(x),tick.protocols.beginning(y));
if(cljs.core.truth_(and__4210__auto____$1)){
return tick.protocols._LT_(tick.protocols.end(x),tick.protocols.end(y));
} else {
return and__4210__auto____$1;
}
} else {
return and__4210__auto__;
}
});
tick.interval.during_QMARK_ = (function tick$interval$during_QMARK_(x,y){
var and__4210__auto__ = tick.protocols._GT_(tick.protocols.beginning(x),tick.protocols.beginning(y));
if(cljs.core.truth_(and__4210__auto__)){
return tick.protocols._LT_(tick.protocols.end(x),tick.protocols.end(y));
} else {
return and__4210__auto__;
}
});
tick.interval.starts_QMARK_ = (function tick$interval$starts_QMARK_(x,y){
var and__4210__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tick.protocols.beginning(x),tick.protocols.beginning(y));
if(and__4210__auto__){
return tick.protocols._LT_(tick.protocols.end(x),tick.protocols.end(y));
} else {
return and__4210__auto__;
}
});
tick.interval.finishes_QMARK_ = (function tick$interval$finishes_QMARK_(x,y){
var and__4210__auto__ = tick.protocols._GT_(tick.protocols.beginning(x),tick.protocols.beginning(y));
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tick.protocols.end(x),tick.protocols.end(y));
} else {
return and__4210__auto__;
}
});
/**
 * The converse of a basic relation.
 */
tick.interval.conv = (function tick$interval$conv(f){
return (function (x,y){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(y,x) : f.call(null,y,x));
});
});
tick.interval.preceded_by_QMARK_ = (function tick$interval$preceded_by_QMARK_(x,y){
return tick.interval.conv(tick.interval.precedes_QMARK_)(x,y);
});
tick.interval.met_by_QMARK_ = (function tick$interval$met_by_QMARK_(x,y){
return tick.interval.conv(tick.interval.meets_QMARK_)(x,y);
});
tick.interval.overlapped_by_QMARK_ = (function tick$interval$overlapped_by_QMARK_(x,y){
return tick.interval.conv(tick.interval.overlaps_QMARK_)(x,y);
});
tick.interval.finished_by_QMARK_ = (function tick$interval$finished_by_QMARK_(x,y){
return tick.interval.conv(tick.interval.finishes_QMARK_)(x,y);
});
tick.interval.contains_QMARK_ = (function tick$interval$contains_QMARK_(x,y){
return tick.interval.conv(tick.interval.during_QMARK_)(x,y);
});
tick.interval.started_by_QMARK_ = (function tick$interval$started_by_QMARK_(x,y){
return tick.interval.conv(tick.interval.starts_QMARK_)(x,y);
});
tick.interval.relation__GT_kw = cljs.core.PersistentHashMap.fromArrays([tick.interval.contains_QMARK_,tick.interval.starts_QMARK_,tick.interval.started_by_QMARK_,tick.interval.overlaps_QMARK_,tick.interval.equals_QMARK_,tick.interval.meets_QMARK_,tick.interval.met_by_QMARK_,tick.interval.finished_by_QMARK_,tick.interval.preceded_by_QMARK_,tick.interval.precedes_QMARK_,tick.interval.during_QMARK_,tick.interval.overlapped_by_QMARK_,tick.interval.finishes_QMARK_],[new cljs.core.Keyword(null,"contains","contains",676899812),new cljs.core.Keyword(null,"starts","starts",-1501572425),new cljs.core.Keyword(null,"started-by","started-by",1211835163),new cljs.core.Keyword(null,"overlaps","overlaps",1398230580),new cljs.core.Keyword(null,"equals","equals",-463033970),new cljs.core.Keyword(null,"meets","meets",-1936224493),new cljs.core.Keyword(null,"met-by","met-by",-2020460159),new cljs.core.Keyword(null,"finished-by","finished-by",-1361081637),new cljs.core.Keyword(null,"preceded-by","preceded-by",1381560976),new cljs.core.Keyword(null,"precedes","precedes",-1540274203),new cljs.core.Keyword(null,"during","during",351301349),new cljs.core.Keyword(null,"overlapped-by","overlapped-by",1890442040),new cljs.core.Keyword(null,"finishes","finishes",-431359586)]);
tick.interval.basic_relations = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.interval.precedes_QMARK_,tick.interval.meets_QMARK_,tick.interval.overlaps_QMARK_,tick.interval.finished_by_QMARK_,tick.interval.contains_QMARK_,tick.interval.starts_QMARK_,tick.interval.equals_QMARK_,tick.interval.started_by_QMARK_,tick.interval.during_QMARK_,tick.interval.finishes_QMARK_,tick.interval.overlapped_by_QMARK_,tick.interval.met_by_QMARK_,tick.interval.preceded_by_QMARK_], null);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tick.interval.GeneralRelation = (function (relations,__meta,__extmap,__hash){
this.relations = relations;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(tick.interval.GeneralRelation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(tick.interval.GeneralRelation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k73216,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__73227 = k73216;
var G__73227__$1 = (((G__73227 instanceof cljs.core.Keyword))?G__73227.fqn:null);
switch (G__73227__$1) {
case "relations":
return self__.relations;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k73216,else__4464__auto__);

}
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__73230){
var vec__73231 = p__73230;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73231,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73231,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#tick.interval.GeneralRelation{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relations","relations",-427124442),self__.relations],null))], null),self__.__extmap));
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__73215){
var self__ = this;
var G__73215__$1 = this;
return (new cljs.core.RecordIter((0),G__73215__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relations","relations",-427124442)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(tick.interval.GeneralRelation.prototype.call = (function (unused__10818__auto__){
var self__ = this;
var self__ = this;
var G__73235 = (arguments.length - (1));
switch (G__73235) {
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(tick.interval.GeneralRelation.prototype.apply = (function (self__,args73223){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args73223)));
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var self__ = this;
var _ = this;
return cljs.core.some((function (f){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null,x,y)))){
return f;
} else {
return null;
}
}),self__.relations);
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(tick.interval.GeneralRelation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new tick.interval.GeneralRelation(self__.relations,self__.__meta,self__.__extmap,self__.__hash));
}));

(tick.interval.GeneralRelation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-248703908 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this73217,other73218){
var self__ = this;
var this73217__$1 = this;
return (((!((other73218 == null)))) && ((((this73217__$1.constructor === other73218.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this73217__$1.relations,other73218.relations)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this73217__$1.__extmap,other73218.__extmap)))))));
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"relations","relations",-427124442),null], null), null),k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new tick.interval.GeneralRelation(self__.relations,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k73216){
var self__ = this;
var this__4468__auto____$1 = this;
var G__73239 = k73216;
var G__73239__$1 = (((G__73239 instanceof cljs.core.Keyword))?G__73239.fqn:null);
switch (G__73239__$1) {
case "relations":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k73216);

}
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__73215){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__73240 = cljs.core.keyword_identical_QMARK_;
var expr__73241 = k__4470__auto__;
if(cljs.core.truth_((pred__73240.cljs$core$IFn$_invoke$arity$2 ? pred__73240.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"relations","relations",-427124442),expr__73241) : pred__73240.call(null,new cljs.core.Keyword(null,"relations","relations",-427124442),expr__73241)))){
return (new tick.interval.GeneralRelation(G__73215,self__.__meta,self__.__extmap,null));
} else {
return (new tick.interval.GeneralRelation(self__.relations,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__73215),null));
}
}));

(tick.interval.GeneralRelation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"relations","relations",-427124442),self__.relations,null))], null),self__.__extmap));
}));

(tick.interval.GeneralRelation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__73215){
var self__ = this;
var this__4460__auto____$1 = this;
return (new tick.interval.GeneralRelation(self__.relations,G__73215,self__.__extmap,self__.__hash));
}));

(tick.interval.GeneralRelation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(tick.interval.GeneralRelation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"relations","relations",1213407085,null)], null);
}));

(tick.interval.GeneralRelation.cljs$lang$type = true);

(tick.interval.GeneralRelation.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"tick.interval/GeneralRelation",null,(1),null));
}));

(tick.interval.GeneralRelation.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"tick.interval/GeneralRelation");
}));

/**
 * Positional factory function for tick.interval/GeneralRelation.
 */
tick.interval.__GT_GeneralRelation = (function tick$interval$__GT_GeneralRelation(relations){
return (new tick.interval.GeneralRelation(relations,null,null,null));
});

/**
 * Factory function for tick.interval/GeneralRelation, taking a map of keywords to field values.
 */
tick.interval.map__GT_GeneralRelation = (function tick$interval$map__GT_GeneralRelation(G__73220){
var extmap__4501__auto__ = (function (){var G__73246 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__73220,new cljs.core.Keyword(null,"relations","relations",-427124442));
if(cljs.core.record_QMARK_(G__73220)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__73246);
} else {
return G__73246;
}
})();
return (new tick.interval.GeneralRelation(new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(G__73220),null,cljs.core.not_empty(extmap__4501__auto__),null));
});

tick.interval.new_relation = (function tick$interval$new_relation(var_args){
var args__4824__auto__ = [];
var len__4818__auto___73421 = arguments.length;
var i__4819__auto___73422 = (0);
while(true){
if((i__4819__auto___73422 < len__4818__auto___73421)){
args__4824__auto__.push((arguments[i__4819__auto___73422]));

var G__73423 = (i__4819__auto___73422 + (1));
i__4819__auto___73422 = G__73423;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return tick.interval.new_relation.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(tick.interval.new_relation.cljs$core$IFn$_invoke$arity$variadic = (function (basic_relations){
return tick.interval.__GT_GeneralRelation(basic_relations);
}));

(tick.interval.new_relation.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tick.interval.new_relation.cljs$lang$applyTo = (function (seq73247){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73247));
}));

/**
 * A function to determine the (basic) relation between two intervals.
 */
tick.interval.basic_relation = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.interval.new_relation,tick.interval.basic_relations);
tick.interval.relation = (function tick$interval$relation(x,y){
var G__73249 = (tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2 ? tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2(x,y) : tick.interval.basic_relation.call(null,x,y));
return (tick.interval.relation__GT_kw.cljs$core$IFn$_invoke$arity$1 ? tick.interval.relation__GT_kw.cljs$core$IFn$_invoke$arity$1(G__73249) : tick.interval.relation__GT_kw.call(null,G__73249));
});
/**
 * Return the complement of the general relation. The complement ~r of
 *   a relation r is the relation consisting of all basic relations not
 *   in r.
 */
tick.interval.complement_r = (function tick$interval$complement_r(r){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,new cljs.core.Keyword(null,"relations","relations",-427124442),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(r)),tick.interval.basic_relations));
});
tick.interval.not_yet_implemented = (function tick$interval$not_yet_implemented(){
return (new Error("Not yet implemented"));
});
/**
 * Return the composition of r and s
 */
tick.interval.compose_r = (function tick$interval$compose_r(_r,_s){
throw tick.interval.not_yet_implemented();
});
/**
 * Return the converse of the given general relation. The converse !r
 *   of a relation r is the relation consisting of the converses of all
 *   basic relations in r.
 */
tick.interval.converse_r = (function tick$interval$converse_r(r){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,new cljs.core.Keyword(null,"relations","relations",-427124442),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tick.interval.conv,new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(r)));
});
/**
 * Return the intersection of the r with s
 */
tick.interval.intersection_r = (function tick$interval$intersection_r(r,_s){
if((r instanceof tick.interval.GeneralRelation)){
} else {
throw (new Error("Assert failed: (instance? GeneralRelation r)"));
}

tick.interval.__GT_GeneralRelation(clojure.set.intersection.cljs$core$IFn$_invoke$arity$1(cljs.core.set(new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(r))));

throw tick.interval.not_yet_implemented();
});
tick.interval.disjoint_QMARK_ = tick.interval.new_relation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.interval.precedes_QMARK_,tick.interval.preceded_by_QMARK_,tick.interval.meets_QMARK_,tick.interval.met_by_QMARK_], 0));
tick.interval.concur_QMARK_ = tick.interval.complement_r(tick.interval.disjoint_QMARK_);
tick.interval.precedes_or_meets_QMARK_ = tick.interval.new_relation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.interval.precedes_QMARK_,tick.interval.meets_QMARK_], 0));

/**
 * @interface
 */
tick.interval.IIntervalOps = function(){};

var tick$interval$IIntervalOps$slice$dyn_73429 = (function (this$,beginning,end){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (tick.interval.slice[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(this$,beginning,end) : m__4510__auto__.call(null,this$,beginning,end));
} else {
var m__4508__auto__ = (tick.interval.slice["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(this$,beginning,end) : m__4508__auto__.call(null,this$,beginning,end));
} else {
throw cljs.core.missing_protocol("IIntervalOps.slice",this$);
}
}
});
/**
 * Fit the interval between beginning and end, slicing off one or both ends as necessary
 */
tick.interval.slice = (function tick$interval$slice(this$,beginning,end){
if((((!((this$ == null)))) && ((!((this$.tick$interval$IIntervalOps$slice$arity$3 == null)))))){
return this$.tick$interval$IIntervalOps$slice$arity$3(this$,beginning,end);
} else {
return tick$interval$IIntervalOps$slice$dyn_73429(this$,beginning,end);
}
});

var tick$interval$IIntervalOps$splice$dyn_73431 = (function (this$,ival){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (tick.interval.splice[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,ival) : m__4510__auto__.call(null,this$,ival));
} else {
var m__4508__auto__ = (tick.interval.splice["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,ival) : m__4508__auto__.call(null,this$,ival));
} else {
throw cljs.core.missing_protocol("IIntervalOps.splice",this$);
}
}
});
/**
 * Splice another interval on to this one
 */
tick.interval.splice = (function tick$interval$splice(this$,ival){
if((((!((this$ == null)))) && ((!((this$.tick$interval$IIntervalOps$splice$arity$2 == null)))))){
return this$.tick$interval$IIntervalOps$splice$arity$2(this$,ival);
} else {
return tick$interval$IIntervalOps$splice$dyn_73431(this$,ival);
}
});

var tick$interval$IIntervalOps$split$dyn_73432 = (function (this$,t){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (tick.interval.split[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,t) : m__4510__auto__.call(null,this$,t));
} else {
var m__4508__auto__ = (tick.interval.split["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,t) : m__4508__auto__.call(null,this$,t));
} else {
throw cljs.core.missing_protocol("IIntervalOps.split",this$);
}
}
});
/**
 * Split ival into 2 intervals at t, returned as a 2-element vector
 */
tick.interval.split = (function tick$interval$split(this$,t){
if((((!((this$ == null)))) && ((!((this$.tick$interval$IIntervalOps$split$arity$2 == null)))))){
return this$.tick$interval$IIntervalOps$split$arity$2(this$,t);
} else {
return tick$interval$IIntervalOps$split$dyn_73432(this$,t);
}
});

tick.interval.split_with_assert = (function tick$interval$split_with_assert(ival,t){
if(cljs.core.truth_((function (){var and__4210__auto__ = tick.protocols._LT_(tick.protocols.beginning(ival),t);
if(cljs.core.truth_(and__4210__auto__)){
return tick.protocols._LT_(t,tick.protocols.end(ival));
} else {
return and__4210__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (and (p/< (p/beginning ival) t) (p/< t (p/end ival)))"));
}

return tick.interval.split(ival,t);
});
tick.interval.slice_interval = (function tick$interval$slice_interval(ival,beginning,end){
var beginning__$1 = tick.core.max.cljs$core$IFn$_invoke$arity$variadic(tick.protocols.beginning(ival),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([beginning], 0));
var end__$1 = tick.core.min.cljs$core$IFn$_invoke$arity$variadic(tick.protocols.end(ival),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([end], 0));
if(cljs.core.truth_(tick.protocols._LT_(beginning__$1,end__$1))){
if(cljs.core.associative_QMARK_(ival)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ival,new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),beginning__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tick","end","tick/end",-269896517),end__$1], 0));
} else {
return tick.interval.make_interval(beginning__$1,end__$1);
}
} else {
return null;
}
});
tick.interval.split_interval = (function tick$interval$split_interval(ival,t){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.interval.slice_interval(ival,tick.protocols.beginning(ival),t),tick.interval.slice_interval(ival,t,tick.protocols.end(ival))], null);
});
tick.interval.flatten = (function tick$interval$flatten(s){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (x){
var temp__5733__auto__ = new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__5733__auto__)){
var ivals = temp__5733__auto__;
return ivals;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));
});
(cljs.core.PersistentArrayMap.prototype.tick$interval$IIntervalOps$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.tick$interval$IIntervalOps$slice$arity$3 = (function (this$,beginning,end){
var this$__$1 = this;
var temp__5733__auto__ = new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314).cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var intervals = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__73263_SHARP_){
return tick.interval.slice(p1__73263_SHARP_,beginning,end);
}),intervals)));
} else {
return tick.interval.slice_interval(this$__$1,beginning,end);
}
}));

(cljs.core.PersistentArrayMap.prototype.tick$interval$IIntervalOps$splice$arity$2 = (function (this$,other){
var this$__$1 = this;
var this_intervals = new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314).cljs$core$IFn$_invoke$arity$1(this$__$1);
var other_intervals = new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314).cljs$core$IFn$_invoke$arity$1(other);
if(cljs.core.truth_((function (){var and__4210__auto__ = this_intervals;
if(cljs.core.truth_(and__4210__auto__)){
return other_intervals;
} else {
return and__4210__auto__;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(this$__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),cljs.core.concat,other_intervals);
} else {
if(cljs.core.truth_(this_intervals)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(this$__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),cljs.core.conj,other);
} else {
if(cljs.core.truth_(other_intervals)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(other,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),cljs.core.conj,this$__$1);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1,other], null)], null);

}
}
}
}));

(cljs.core.PersistentArrayMap.prototype.tick$interval$IIntervalOps$split$arity$2 = (function (this$,t){
var this$__$1 = this;
var temp__5733__auto__ = new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314).cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var intervals = temp__5733__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__73264_SHARP_){
return tick.interval.slice(p1__73264_SHARP_,tick.protocols.beginning(this$__$1),t);
}),intervals))),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__73265_SHARP_){
return tick.interval.slice(p1__73265_SHARP_,t,tick.protocols.end(this$__$1));
}),intervals)))], null);
} else {
return tick.interval.split_interval(this$__$1,t);
}
}));

(java.time.LocalDate.prototype.tick$interval$IIntervalOps$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDate.prototype.tick$interval$IIntervalOps$slice$arity$3 = (function (this$,beginning,end){
var this$__$1 = this;
return tick.interval.slice_interval(this$__$1,beginning,end);
}));

(java.time.LocalDate.prototype.tick$interval$IIntervalOps$splice$arity$2 = (function (this$,ival){
var this$__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("splice not implemented",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"this","this",-611633625),this$__$1,new cljs.core.Keyword(null,"interval","interval",1708495417),ival], null));
}));

(java.time.LocalDate.prototype.tick$interval$IIntervalOps$split$arity$2 = (function (this$,t){
var this$__$1 = this;
return tick.interval.split_interval(this$__$1,t);
}));

(java.time.YearMonth.prototype.tick$interval$IIntervalOps$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.YearMonth.prototype.tick$interval$IIntervalOps$slice$arity$3 = (function (this$,beginning,end){
var this$__$1 = this;
return tick.interval.slice_interval(this$__$1,beginning,end);
}));

(java.time.YearMonth.prototype.tick$interval$IIntervalOps$splice$arity$2 = (function (this$,ival){
var this$__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("splice not implemented",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"this","this",-611633625),this$__$1,new cljs.core.Keyword(null,"interval","interval",1708495417),ival], null));
}));

(java.time.YearMonth.prototype.tick$interval$IIntervalOps$split$arity$2 = (function (this$,t){
var this$__$1 = this;
return tick.interval.split_interval(this$__$1,t);
}));

(java.time.Year.prototype.tick$interval$IIntervalOps$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Year.prototype.tick$interval$IIntervalOps$slice$arity$3 = (function (this$,beginning,end){
var this$__$1 = this;
return tick.interval.slice_interval(this$__$1,beginning,end);
}));

(java.time.Year.prototype.tick$interval$IIntervalOps$splice$arity$2 = (function (this$,ival){
var this$__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("splice not implemented",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"this","this",-611633625),this$__$1,new cljs.core.Keyword(null,"interval","interval",1708495417),ival], null));
}));

(java.time.Year.prototype.tick$interval$IIntervalOps$split$arity$2 = (function (this$,t){
var this$__$1 = this;
return tick.interval.split_interval(this$__$1,t);
}));
/**
 * Return the interval representing the interval, if there is one,
 *   representing the interval of time the given intervals are
 *   concurrent.
 */
tick.interval.concur = (function tick$interval$concur(x,y){
var G__73266 = tick.interval.relation(x,y);
var G__73266__$1 = (((G__73266 instanceof cljs.core.Keyword))?G__73266.fqn:null);
switch (G__73266__$1) {
case "overlaps":
return tick.interval.slice(x,tick.protocols.beginning(y),tick.protocols.end(x));

break;
case "overlapped-by":
return tick.interval.slice(x,tick.protocols.beginning(x),tick.protocols.end(y));

break;
case "starts":
case "finishes":
case "during":
case "equals":
return x;

break;
case "started-by":
case "finished-by":
case "contains":
return tick.interval.slice(x,tick.protocols.beginning(y),tick.protocols.end(y));

break;
default:
return null;

}
});
/**
 * Return a sequence of occurances where intervals coincide (having
 *   non-nil concur intervals).
 */
tick.interval.concurrencies = (function tick$interval$concurrencies(var_args){
var args__4824__auto__ = [];
var len__4818__auto___73463 = arguments.length;
var i__4819__auto___73464 = (0);
while(true){
if((i__4819__auto___73464 < len__4818__auto___73463)){
args__4824__auto__.push((arguments[i__4819__auto___73464]));

var G__73467 = (i__4819__auto___73464 + (1));
i__4819__auto___73464 = G__73467;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return tick.interval.concurrencies.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(tick.interval.concurrencies.cljs$core$IFn$_invoke$arity$variadic = (function (intervals){
var intervals__$1 = cljs.core.vec(intervals);
var iter__4611__auto__ = (function tick$interval$iter__73268(s__73269){
return (new cljs.core.LazySeq(null,(function (){
var s__73269__$1 = s__73269;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__73269__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var xi = cljs.core.first(xs__6292__auto__);
var iterys__4607__auto__ = ((function (s__73269__$1,xi,xs__6292__auto__,temp__5735__auto__,intervals__$1){
return (function tick$interval$iter__73268_$_iter__73270(s__73271){
return (new cljs.core.LazySeq(null,((function (s__73269__$1,xi,xs__6292__auto__,temp__5735__auto__,intervals__$1){
return (function (){
var s__73271__$1 = s__73271;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__73271__$1);
if(temp__5735__auto____$1){
var s__73271__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__73271__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__73271__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__73273 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__73272 = (0);
while(true){
if((i__73272 < size__4610__auto__)){
var yi = cljs.core._nth(c__4609__auto__,i__73272);
if((xi < yi)){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(intervals__$1,xi);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(intervals__$1,yi);
var conc = tick.interval.concur(x,y);
if(cljs.core.truth_(conc)){
cljs.core.chunk_append(b__73273,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"relation","relation",-693437925),tick.interval.relation(x,y),new cljs.core.Keyword(null,"concur","concur",4812827),conc], null));

var G__73483 = (i__73272 + (1));
i__73272 = G__73483;
continue;
} else {
var G__73484 = (i__73272 + (1));
i__73272 = G__73484;
continue;
}
} else {
var G__73486 = (i__73272 + (1));
i__73272 = G__73486;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73273),tick$interval$iter__73268_$_iter__73270(cljs.core.chunk_rest(s__73271__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73273),null);
}
} else {
var yi = cljs.core.first(s__73271__$2);
if((xi < yi)){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(intervals__$1,xi);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(intervals__$1,yi);
var conc = tick.interval.concur(x,y);
if(cljs.core.truth_(conc)){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"relation","relation",-693437925),tick.interval.relation(x,y),new cljs.core.Keyword(null,"concur","concur",4812827),conc], null),tick$interval$iter__73268_$_iter__73270(cljs.core.rest(s__73271__$2)));
} else {
var G__73494 = cljs.core.rest(s__73271__$2);
s__73271__$1 = G__73494;
continue;
}
} else {
var G__73496 = cljs.core.rest(s__73271__$2);
s__73271__$1 = G__73496;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__73269__$1,xi,xs__6292__auto__,temp__5735__auto__,intervals__$1))
,null,null));
});})(s__73269__$1,xi,xs__6292__auto__,temp__5735__auto__,intervals__$1))
;
var fs__4608__auto__ = cljs.core.seq(iterys__4607__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(intervals__$1))));
if(fs__4608__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4608__auto__,tick$interval$iter__73268(cljs.core.rest(s__73269__$1)));
} else {
var G__73499 = cljs.core.rest(s__73269__$1);
s__73269__$1 = G__73499;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(intervals__$1)));
}));

(tick.interval.concurrencies.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tick.interval.concurrencies.cljs$lang$applyTo = (function (seq73267){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73267));
}));

tick.interval.interval = (function tick$interval$interval(t){
return tick.interval.new_interval(tick.protocols.beginning(t),tick.protocols.end(t));
});
(cljs.core.PersistentArrayMap.prototype.tick$protocols$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.tick$protocols$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
var G__73275 = (tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2 ? tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2(x__$1,y) : tick.interval.basic_relation.call(null,x__$1,y));
var fexpr__73274 = cljs.core.PersistentHashSet.createAsIfByAssoc([tick.interval.meets_QMARK_,tick.interval.precedes_QMARK_]);
return (fexpr__73274.cljs$core$IFn$_invoke$arity$1 ? fexpr__73274.cljs$core$IFn$_invoke$arity$1(G__73275) : fexpr__73274.call(null,G__73275));
}));

(cljs.core.PersistentArrayMap.prototype.tick$protocols$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
var G__73277 = (tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2 ? tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2(x__$1,y) : tick.interval.basic_relation.call(null,x__$1,y));
var fexpr__73276 = cljs.core.PersistentHashSet.createAsIfByAssoc([tick.interval.starts_QMARK_,tick.interval.overlaps_QMARK_,tick.interval.equals_QMARK_,tick.interval.meets_QMARK_,tick.interval.finished_by_QMARK_,tick.interval.precedes_QMARK_]);
return (fexpr__73276.cljs$core$IFn$_invoke$arity$1 ? fexpr__73276.cljs$core$IFn$_invoke$arity$1(G__73277) : fexpr__73276.call(null,G__73277));
}));

(cljs.core.PersistentArrayMap.prototype.tick$protocols$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
var G__73279 = (tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2 ? tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2(x__$1,y) : tick.interval.basic_relation.call(null,x__$1,y));
var fexpr__73278 = cljs.core.PersistentHashSet.createAsIfByAssoc([tick.interval.met_by_QMARK_,tick.interval.preceded_by_QMARK_]);
return (fexpr__73278.cljs$core$IFn$_invoke$arity$1 ? fexpr__73278.cljs$core$IFn$_invoke$arity$1(G__73279) : fexpr__73278.call(null,G__73279));
}));

(cljs.core.PersistentArrayMap.prototype.tick$protocols$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
var G__73281 = (tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2 ? tick.interval.basic_relation.cljs$core$IFn$_invoke$arity$2(x__$1,y) : tick.interval.basic_relation.call(null,x__$1,y));
var fexpr__73280 = cljs.core.PersistentHashSet.createAsIfByAssoc([tick.interval.started_by_QMARK_,tick.interval.equals_QMARK_,tick.interval.met_by_QMARK_,tick.interval.preceded_by_QMARK_,tick.interval.overlapped_by_QMARK_,tick.interval.finishes_QMARK_]);
return (fexpr__73280.cljs$core$IFn$_invoke$arity$1 ? fexpr__73280.cljs$core$IFn$_invoke$arity$1(G__73281) : fexpr__73280.call(null,G__73281));
}));
/**
 * Are all the intervals in the given set time-ordered and
 *   disjoint? This is a useful property of a collection of
 *   intervals. The given collection must contain proper intervals (that
 *   is, intervals that have finite greater-than-zero durations).
 */
tick.interval.ordered_disjoint_intervals_QMARK_ = (function tick$interval$ordered_disjoint_intervals_QMARK_(s){
var rel = tick.interval.new_relation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.interval.precedes_QMARK_,tick.interval.meets_QMARK_], 0));
return (!(((function (){var G__73285 = s;
var vec__73286 = G__73285;
var seq__73287 = cljs.core.seq(vec__73286);
var first__73288 = cljs.core.first(seq__73287);
var seq__73287__$1 = cljs.core.next(seq__73287);
var x = first__73288;
var xs = seq__73287__$1;
var G__73285__$1 = G__73285;
while(true){
var vec__73289 = G__73285__$1;
var seq__73290 = cljs.core.seq(vec__73289);
var first__73291 = cljs.core.first(seq__73290);
var seq__73290__$1 = cljs.core.next(seq__73290);
var x__$1 = first__73291;
var xs__$1 = seq__73290__$1;
if((((x__$1 == null)) || ((cljs.core.first(xs__$1) == null)))){
return true;
} else {
if(cljs.core.truth_((function (){var G__73292 = x__$1;
var G__73293 = cljs.core.first(xs__$1);
return (rel.cljs$core$IFn$_invoke$arity$2 ? rel.cljs$core$IFn$_invoke$arity$2(G__73292,G__73293) : rel.call(null,G__73292,G__73293));
})())){
var G__73516 = xs__$1;
G__73285__$1 = G__73516;
continue;
} else {
return null;
}
}
break;
}
})() == null)));
});
/**
 * Is the first interval in a sequence time-ordered and disjoint with
 *   respect to the second? Note, only compares first two in a
 *   sequence. Used by functions to ensure the head of the (possibly
 *   lazy) sequence satisfies this invariant.
 */
tick.interval.assert_proper_head = (function tick$interval$assert_proper_head(s){
var vec__73294 = s;
var initial = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73294,(0),null);
var subsequent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73294,(1),null);
if(cljs.core.truth_((function (){var and__4210__auto__ = (initial == null);
if(and__4210__auto__){
return subsequent;
} else {
return and__4210__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected nil in sequence",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nil-before","nil-before",1412757500),subsequent], null));
} else {
}

if(cljs.core.truth_(subsequent)){
if(cljs.core.truth_((tick.interval.precedes_or_meets_QMARK_.cljs$core$IFn$_invoke$arity$2 ? tick.interval.precedes_or_meets_QMARK_.cljs$core$IFn$_invoke$arity$2(initial,subsequent) : tick.interval.precedes_or_meets_QMARK_.call(null,initial,subsequent)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Intervals in sequence violate requirement that intervals are time-ordered and disjoint",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"interval1","interval1",1775723179),initial,new cljs.core.Keyword(null,"interval2","interval2",-1652593797),subsequent], null));
}
} else {
}

return s;
});
/**
 * Unite concurrent intervals. Intervals must be ordered by beginning
 *   but not necessarily disjoint (the purpose of this function is to
 *   splice together intervals that are concurrent resulting in a
 *   time-ordered sequence of disjoint intervals that is returned.
 */
tick.interval.unite = (function tick$interval$unite(intervals){
var unite = (function tick$interval$unite_$_unite(intervals__$1){
return (new cljs.core.LazySeq(null,(function (){
var vec__73301 = intervals__$1;
var seq__73302 = cljs.core.seq(vec__73301);
var first__73303 = cljs.core.first(seq__73302);
var seq__73302__$1 = cljs.core.next(seq__73302);
var ival1 = first__73303;
var first__73303__$1 = cljs.core.first(seq__73302__$1);
var seq__73302__$2 = cljs.core.next(seq__73302__$1);
var ival2 = first__73303__$1;
var r = seq__73302__$2;
if((ival2 == null)){
if(cljs.core.truth_(ival1)){
return (new cljs.core.List(null,ival1,null,(1),null));
} else {
return cljs.core.List.EMPTY;
}
} else {
var G__73304 = tick.interval.relation(ival1,ival2);
var G__73304__$1 = (((G__73304 instanceof cljs.core.Keyword))?G__73304.fqn:null);
switch (G__73304__$1) {
case "precedes":
case "meets":
return cljs.core.cons(ival1,tick$interval$unite_$_unite(cljs.core.rest(intervals__$1)));

break;
case "overlaps":
case "contains":
case "starts":
case "started-by":
case "finished-by":
return tick$interval$unite_$_unite(cljs.core.cons(tick.interval.splice(ival1,ival2),r));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Intervals in sequence violate requirement that intervals are time-ordered",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"interval1","interval1",1775723179),ival1,new cljs.core.Keyword(null,"interval2","interval2",-1652593797),ival2,new cljs.core.Keyword(null,"relation","relation",-693437925),tick.interval.relation(ival1,ival2)], null));

}

}
}),null,null));
});
return unite(intervals);
});
/**
 * Return an interval group. Interval groups are maps with
 *   a :tick/intervals entry that contain a time-ordered sequence of
 *   disjoint intervals.
 */
tick.interval.new_interval_group = (function tick$interval$new_interval_group(x){
if(cljs.core.truth_(new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314).cljs$core$IFn$_invoke$arity$1(x))){
return x;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null)], null);
}
});
/**
 * Within a time-ordered sequence of disjoint intervals, return a
 *   sequence of interval groups, splicing together meeting intervals.
 */
tick.interval.normalize = (function tick$interval$normalize(intervals){
var normalize = (function tick$interval$normalize_$_normalize(intervals__$1){
return (new cljs.core.LazySeq(null,(function (){
var vec__73309 = intervals__$1;
var seq__73310 = cljs.core.seq(vec__73309);
var first__73311 = cljs.core.first(seq__73310);
var seq__73310__$1 = cljs.core.next(seq__73310);
var ival1 = first__73311;
var first__73311__$1 = cljs.core.first(seq__73310__$1);
var seq__73310__$2 = cljs.core.next(seq__73310__$1);
var ival2 = first__73311__$1;
var r = seq__73310__$2;
if((ival2 == null)){
if(cljs.core.truth_(ival1)){
return (new cljs.core.List(null,tick.interval.new_interval_group(ival1),null,(1),null));
} else {
return cljs.core.List.EMPTY;
}
} else {
var G__73312 = tick.interval.relation(ival1,ival2);
var G__73312__$1 = (((G__73312 instanceof cljs.core.Keyword))?G__73312.fqn:null);
switch (G__73312__$1) {
case "meets":
return tick$interval$normalize_$_normalize(cljs.core.cons(tick.interval.splice(ival1,ival2),r));

break;
default:
return cljs.core.cons(tick.interval.new_interval_group(ival1),tick$interval$normalize_$_normalize(tick.interval.assert_proper_head(cljs.core.rest(intervals__$1))));

}
}
}),null,null));
});
return normalize(tick.interval.assert_proper_head(intervals));
});
/**
 * Merge multiple time-ordered sequences of disjoint intervals into a
 *   single sequence of time-ordered disjoint intervals.
 */
tick.interval.union = (function tick$interval$union(var_args){
var args__4824__auto__ = [];
var len__4818__auto___73530 = arguments.length;
var i__4819__auto___73531 = (0);
while(true){
if((i__4819__auto___73531 < len__4818__auto___73530)){
args__4824__auto__.push((arguments[i__4819__auto___73531]));

var G__73532 = (i__4819__auto___73531 + (1));
i__4819__auto___73531 = G__73532;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((0) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((0)),(0),null)):null);
return tick.interval.union.cljs$core$IFn$_invoke$arity$variadic(argseq__4825__auto__);
});

(tick.interval.union.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
var union = (function tick$interval$union(colls__$1){
return (new cljs.core.LazySeq(null,(function (){
if((cljs.core.count(colls__$1) <= (1))){
return cljs.core.first(colls__$1);
} else {
var vec__73320 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__73313_SHARP_){
return tick.protocols.beginning(cljs.core.first(p1__73313_SHARP_));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,colls__$1));
var seq__73321 = cljs.core.seq(vec__73320);
var first__73322 = cljs.core.first(seq__73321);
var seq__73321__$1 = cljs.core.next(seq__73321);
var c1 = first__73322;
var first__73322__$1 = cljs.core.first(seq__73321__$1);
var seq__73321__$2 = cljs.core.next(seq__73321__$1);
var c2 = first__73322__$1;
var r = seq__73321__$2;
if((c2 == null)){
return c1;
} else {
if(cljs.core.truth_((function (){var G__73323 = cljs.core.first(c1);
var G__73324 = cljs.core.first(c2);
return (tick.interval.disjoint_QMARK_.cljs$core$IFn$_invoke$arity$2 ? tick.interval.disjoint_QMARK_.cljs$core$IFn$_invoke$arity$2(G__73323,G__73324) : tick.interval.disjoint_QMARK_.call(null,G__73323,G__73324));
})())){
return cljs.core.cons(cljs.core.first(c1),tick$interval$union(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.list,cljs.core.next(c1),c2,r)));
} else {
return tick$interval$union(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.list,cljs.core.cons(tick.interval.splice(cljs.core.first(c1),cljs.core.first(c2)),cljs.core.next(c1)),cljs.core.next(c2),r));
}
}
}
}),null,null));
});
return union((function (){var iter__4611__auto__ = (function tick$interval$iter__73325(s__73326){
return (new cljs.core.LazySeq(null,(function (){
var s__73326__$1 = s__73326;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__73326__$1);
if(temp__5735__auto__){
var s__73326__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__73326__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__73326__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__73328 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__73327 = (0);
while(true){
if((i__73327 < size__4610__auto__)){
var coll = cljs.core._nth(c__4609__auto__,i__73327);
if(cljs.core.truth_(coll)){
cljs.core.chunk_append(b__73328,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(tick.protocols.beginning,coll));

var G__73545 = (i__73327 + (1));
i__73327 = G__73545;
continue;
} else {
var G__73546 = (i__73327 + (1));
i__73327 = G__73546;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__73328),tick$interval$iter__73325(cljs.core.chunk_rest(s__73326__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__73328),null);
}
} else {
var coll = cljs.core.first(s__73326__$2);
if(cljs.core.truth_(coll)){
return cljs.core.cons(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(tick.protocols.beginning,coll),tick$interval$iter__73325(cljs.core.rest(s__73326__$2)));
} else {
var G__73550 = cljs.core.rest(s__73326__$2);
s__73326__$1 = G__73550;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(colls);
})());
}));

(tick.interval.union.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tick.interval.union.cljs$lang$applyTo = (function (seq73314){
var self__4806__auto__ = this;
return self__4806__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73314));
}));

tick.interval.conj = (function tick$interval$conj(coll,interval){
return tick.interval.union.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interval], null)], 0));
});
/**
 * Return a time-ordered sequence of disjoint intervals where two or
 *   more intervals of the given sequences are concurrent. Arguments must
 *   be time-ordered sequences of disjoint intervals.
 */
tick.interval.intersection = (function tick$interval$intersection(var_args){
var G__73333 = arguments.length;
switch (G__73333) {
case 1:
return tick.interval.intersection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.interval.intersection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___73552 = arguments.length;
var i__4819__auto___73553 = (0);
while(true){
if((i__4819__auto___73553 < len__4818__auto___73552)){
args_arr__4839__auto__.push((arguments[i__4819__auto___73553]));

var G__73554 = (i__4819__auto___73553 + (1));
i__4819__auto___73553 = G__73554;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return tick.interval.intersection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(tick.interval.intersection.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
}));

(tick.interval.intersection.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
var intersection = (function tick$interval$intersection(xs,ys){
return (new cljs.core.LazySeq(null,(function (){
var x = cljs.core.first(xs);
var y = cljs.core.first(ys);
if(cljs.core.truth_((function (){var and__4210__auto__ = x;
if(cljs.core.truth_(and__4210__auto__)){
return y;
} else {
return and__4210__auto__;
}
})())){
var G__73335 = tick.interval.relation(x,y);
var G__73335__$1 = (((G__73335 instanceof cljs.core.Keyword))?G__73335.fqn:null);
switch (G__73335__$1) {
case "precedes":
case "meets":
return tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.next(xs)),ys);

break;
case "preceded-by":
case "met-by":
return tick$interval$intersection(xs,tick.interval.assert_proper_head(cljs.core.next(ys)));

break;
case "started-by":
return cljs.core.cons(tick.interval.slice(x,tick.protocols.beginning(y),tick.protocols.end(y)),tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(x,tick.protocols.end(y),tick.protocols.end(x)),cljs.core.next(xs))),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "finished-by":
return cljs.core.cons(tick.interval.slice(x,tick.protocols.beginning(y),tick.protocols.end(y)),tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.next(xs)),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "overlaps":
return cljs.core.cons(tick.interval.slice(x,tick.protocols.beginning(y),tick.protocols.end(x)),tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(x,tick.protocols.beginning(y),tick.protocols.end(x)),cljs.core.next(xs))),tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(y,tick.protocols.end(x),tick.protocols.end(y)),cljs.core.next(ys)))));

break;
case "overlapped-by":
return cljs.core.cons(tick.interval.slice(x,tick.protocols.beginning(x),tick.protocols.end(y)),tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(x,tick.protocols.end(y),tick.protocols.end(x)),cljs.core.next(xs))),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "contains":
return cljs.core.cons(tick.interval.slice(x,tick.protocols.beginning(y),tick.protocols.end(y)),tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(x,tick.protocols.end(y),tick.protocols.end(x)),cljs.core.next(xs))),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "during":
return cljs.core.cons(x,tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.next(xs)),tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(y,tick.protocols.end(x),tick.protocols.end(y)),cljs.core.next(ys)))));

break;
case "equals":
return cljs.core.cons(x,tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.next(xs)),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "finishes":
return cljs.core.cons(x,tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.next(xs)),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "starts":
return cljs.core.cons(x,tick$interval$intersection(tick.interval.assert_proper_head(cljs.core.next(xs)),tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(y,tick.protocols.end(x),tick.protocols.end(y)),cljs.core.next(ys)))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73335__$1)].join('')));

}
} else {
return cljs.core.List.EMPTY;
}
}),null,null));
});
return intersection(tick.interval.assert_proper_head(s1),tick.interval.assert_proper_head(s2));
}));

(tick.interval.intersection.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.interval.intersection,s1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sets,s2));
}));

/** @this {Function} */
(tick.interval.intersection.cljs$lang$applyTo = (function (seq73330){
var G__73331 = cljs.core.first(seq73330);
var seq73330__$1 = cljs.core.next(seq73330);
var G__73332 = cljs.core.first(seq73330__$1);
var seq73330__$2 = cljs.core.next(seq73330__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73331,G__73332,seq73330__$2);
}));

(tick.interval.intersection.cljs$lang$maxFixedArity = (2));

tick.interval.intersects_QMARK_ = (function tick$interval$intersects_QMARK_(ivals,interval){
return cljs.core.not_empty(tick.interval.intersection.cljs$core$IFn$_invoke$arity$2(ivals,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interval], null)));
});
/**
 * Return an interval set that is the first set without elements of
 *   the remaining sets.
 */
tick.interval.difference = (function tick$interval$difference(var_args){
var G__73340 = arguments.length;
switch (G__73340) {
case 1:
return tick.interval.difference.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.interval.difference.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___73577 = arguments.length;
var i__4819__auto___73579 = (0);
while(true){
if((i__4819__auto___73579 < len__4818__auto___73577)){
args_arr__4839__auto__.push((arguments[i__4819__auto___73579]));

var G__73582 = (i__4819__auto___73579 + (1));
i__4819__auto___73579 = G__73582;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return tick.interval.difference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(tick.interval.difference.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
}));

(tick.interval.difference.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
var difference = (function tick$interval$difference(xs,ys){
var vec__73348 = xs;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73348,(0),null);
var vec__73351 = ys;
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73351,(0),null);
if(cljs.core.truth_(x)){
if(cljs.core.truth_(y)){
return (new cljs.core.LazySeq(null,(function (){
var G__73354 = tick.interval.relation(x,y);
var G__73354__$1 = (((G__73354 instanceof cljs.core.Keyword))?G__73354.fqn:null);
switch (G__73354__$1) {
case "precedes":
case "meets":
return cljs.core.cons(x,tick$interval$difference(tick.interval.assert_proper_head(cljs.core.next(xs)),ys));

break;
case "preceded-by":
case "met-by":
return tick$interval$difference(xs,tick.interval.assert_proper_head(cljs.core.next(ys)));

break;
case "finishes":
case "during":
case "equals":
return tick$interval$difference(tick.interval.assert_proper_head(cljs.core.next(xs)),tick.interval.assert_proper_head(ys));

break;
case "starts":
return tick$interval$difference(tick.interval.assert_proper_head(cljs.core.next(xs)),ys);

break;
case "started-by":
case "overlapped-by":
return tick$interval$difference(tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(x,tick.protocols.end(y),tick.protocols.end(x)),cljs.core.next(xs))),tick.interval.assert_proper_head(cljs.core.next(ys)));

break;
case "finished-by":
return cljs.core.cons(tick.interval.slice(x,tick.protocols.beginning(x),tick.protocols.beginning(y)),tick$interval$difference(tick.interval.assert_proper_head(cljs.core.next(xs)),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "overlaps":
return cljs.core.cons(tick.interval.slice(x,tick.protocols.beginning(x),tick.protocols.beginning(y)),tick$interval$difference(tick.interval.assert_proper_head(cljs.core.next(xs)),ys));

break;
case "contains":
return cljs.core.cons(tick.interval.slice(x,tick.protocols.beginning(x),tick.protocols.beginning(y)),tick$interval$difference(tick.interval.assert_proper_head(cljs.core.cons(tick.interval.slice(x,tick.protocols.end(y),tick.protocols.end(x)),cljs.core.next(xs))),tick.interval.assert_proper_head(cljs.core.next(ys))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73354__$1)].join('')));

}
}),null,null));
} else {
return xs;
}
} else {
return cljs.core.List.EMPTY;
}
});
tick.interval.assert_proper_head(s1);

tick.interval.assert_proper_head(s2);

return difference(s1,s2);
}));

(tick.interval.difference.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.interval.difference,s1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sets,s2));
}));

/** @this {Function} */
(tick.interval.difference.cljs$lang$applyTo = (function (seq73337){
var G__73338 = cljs.core.first(seq73337);
var seq73337__$1 = cljs.core.next(seq73337);
var G__73339 = cljs.core.first(seq73337__$1);
var seq73337__$2 = cljs.core.next(seq73337__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73338,G__73339,seq73337__$2);
}));

(tick.interval.difference.cljs$lang$maxFixedArity = (2));

tick.interval.complement = (function tick$interval$complement(coll){
if(cljs.core.empty_QMARK_(coll)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.interval.new_interval(tick.protocols.min_of_type(tick.core.now()),tick.protocols.max_of_type(tick.core.now()))], null);
} else {
var r = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__73357){
var vec__73358 = p__73357;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73358,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73358,(1),null);
if(tick.interval.meets_QMARK_(x,y)){
return null;
} else {
return tick.interval.new_interval(tick.protocols.end(x),tick.protocols.beginning(y));
}
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),coll));
var G__73361 = r;
var G__73361__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tick.protocols.beginning(cljs.core.first(coll)),tick.protocols.min_of_type(tick.protocols.beginning(cljs.core.first(coll)))))?(function (p1__73355_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.interval.new_interval(tick.protocols.min_of_type(tick.protocols.beginning(cljs.core.first(coll))),tick.protocols.beginning(cljs.core.first(coll)))], null),p1__73355_SHARP_);
})(G__73361):G__73361);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tick.protocols.end(cljs.core.last(coll)),tick.protocols.max_of_type(tick.protocols.end(cljs.core.last(coll))))){
return (function (p1__73356_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__73356_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.interval.new_interval(tick.protocols.end(cljs.core.last(coll)),tick.protocols.max_of_type(tick.protocols.end(cljs.core.last(coll))))], null));
})(G__73361__$1);
} else {
return G__73361__$1;
}
}
});
/**
 * Split s1 across the grating defined by s2
 */
tick.interval.disjoin = (function tick$interval$disjoin(var_args){
var G__73366 = arguments.length;
switch (G__73366) {
case 1:
return tick.interval.disjoin.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.interval.disjoin.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4839__auto__ = [];
var len__4818__auto___73626 = arguments.length;
var i__4819__auto___73627 = (0);
while(true){
if((i__4819__auto___73627 < len__4818__auto___73626)){
args_arr__4839__auto__.push((arguments[i__4819__auto___73627]));

var G__73630 = (i__4819__auto___73627 + (1));
i__4819__auto___73627 = G__73630;
continue;
} else {
}
break;
}

var argseq__4840__auto__ = (new cljs.core.IndexedSeq(args_arr__4839__auto__.slice((2)),(0),null));
return tick.interval.disjoin.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4840__auto__);

}
});

(tick.interval.disjoin.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
}));

(tick.interval.disjoin.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
var xs = s1;
var ys = s2;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(cljs.core.not_empty(xs))){
if(cljs.core.truth_(cljs.core.not_empty(ys))){
var x = cljs.core.first(xs);
var y = cljs.core.first(ys);
var G__73368 = tick.interval.relation(x,y);
var G__73368__$1 = (((G__73368 instanceof cljs.core.Keyword))?G__73368.fqn:null);
switch (G__73368__$1) {
case "precedes":
case "meets":
var G__73638 = cljs.core.next(xs);
var G__73639 = ys;
var G__73640 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,x);
xs = G__73638;
ys = G__73639;
result = G__73640;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73368__$1)].join('')));

}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,result,xs);
}
} else {
return result;
}
break;
}
}));

(tick.interval.disjoin.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.interval.difference,s1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sets,s2));
}));

/** @this {Function} */
(tick.interval.disjoin.cljs$lang$applyTo = (function (seq73363){
var G__73364 = cljs.core.first(seq73363);
var seq73363__$1 = cljs.core.next(seq73363);
var G__73365 = cljs.core.first(seq73363__$1);
var seq73363__$2 = cljs.core.next(seq73363__$1);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73364,G__73365,seq73363__$2);
}));

(tick.interval.disjoin.cljs$lang$maxFixedArity = (2));

/**
 * Return a lazy sequence of java.time.Temporal instances over the
 *   given (local) interval.
 */
tick.interval.divide_by_apply = (function tick$interval$divide_by_apply(ival,f){
var G__73369 = tick.protocols.range((function (){var G__73370 = tick.protocols.beginning(ival);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__73370) : f.call(null,G__73370));
})(),(function (){var G__73371 = tick.protocols.end(ival);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__73371) : f.call(null,G__73371));
})());
if(cljs.core.truth_(tick.interval.concur((function (){var G__73372 = tick.protocols.end(ival);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__73372) : f.call(null,G__73372));
})(),ival))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(G__73369,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__73373 = tick.protocols.end(ival);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__73373) : f.call(null,G__73373));
})()], null));
} else {
return G__73369;
}
});
/**
 * Divide an interval by a duration, returning a sequence of
 *   intervals. If the interval cannot be wholly sub-divided by the
 *   duration divisor, the last interval will represent the 'remainder'
 *   of the division and not be as long as the other preceeding
 *   intervals.
 */
tick.interval.divide_by_duration = (function tick$interval$divide_by_duration(ival,dur){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (p1__73374_SHARP_){
return tick.core.min.cljs$core$IFn$_invoke$arity$variadic(tick.protocols.forward_duration(p1__73374_SHARP_,dur),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.protocols.end(ival)], 0));
})),tick.protocols.range(tick.protocols.beginning(ival),tick.protocols.end(ival),dur));
});
tick.interval.divide_by_period = (function tick$interval$divide_by_period(ival,period){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (p1__73375_SHARP_){
return tick.core.min.cljs$core$IFn$_invoke$arity$variadic(tick.protocols.forward_duration(p1__73375_SHARP_,period),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.protocols.end(ival)], 0));
})),tick.protocols.range(tick.protocols.beginning(ival),tick.protocols.end(ival),period));
});
tick.interval.divide_by_divisor = (function tick$interval$divide_by_divisor(ival,divisor){
return tick.interval.divide_by_duration(ival,cljc.java_time.duration.divided_by(tick.core.duration(ival),divisor));
});

/**
 * @interface
 */
tick.interval.IDivisibleInterval = function(){};

var tick$interval$IDivisibleInterval$divide_interval$dyn_73644 = (function (divisor,ival){
var x__4509__auto__ = (((divisor == null))?null:divisor);
var m__4510__auto__ = (tick.interval.divide_interval[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(divisor,ival) : m__4510__auto__.call(null,divisor,ival));
} else {
var m__4508__auto__ = (tick.interval.divide_interval["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(divisor,ival) : m__4508__auto__.call(null,divisor,ival));
} else {
throw cljs.core.missing_protocol("IDivisibleInterval.divide-interval",divisor);
}
}
});
/**
 * Divide an interval by a given divisor
 */
tick.interval.divide_interval = (function tick$interval$divide_interval(divisor,ival){
if((((!((divisor == null)))) && ((!((divisor.tick$interval$IDivisibleInterval$divide_interval$arity$2 == null)))))){
return divisor.tick$interval$IDivisibleInterval$divide_interval$arity$2(divisor,ival);
} else {
return tick$interval$IDivisibleInterval$divide_interval$dyn_73644(divisor,ival);
}
});

goog.object.set(tick.interval.IDivisibleInterval,"function",true);

goog.object.set(tick.interval.divide_interval,"function",(function (f,ival){
return tick.interval.divide_by_apply(ival,f);
}));

(java.time.Duration.prototype.tick$interval$IDivisibleInterval$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Duration.prototype.tick$interval$IDivisibleInterval$divide_interval$arity$2 = (function (dur,ival){
var dur__$1 = this;
return tick.interval.divide_by_duration(ival,dur__$1);
}));

(java.time.Period.prototype.tick$interval$IDivisibleInterval$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Period.prototype.tick$interval$IDivisibleInterval$divide_interval$arity$2 = (function (period,ival){
var period__$1 = this;
return tick.interval.divide_by_period(ival,period__$1);
}));

goog.object.set(tick.interval.IDivisibleInterval,"number",true);

goog.object.set(tick.interval.divide_interval,"number",(function (divisor,ival){
return tick.interval.divide_by_divisor(ival,divisor);
}));
(java.time.LocalDate.prototype.tick$protocols$IDivisible$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDate.prototype.tick$protocols$IDivisible$divide$arity$2 = (function (ld,d){
var ld__$1 = this;
return tick.interval.divide_interval(d,ld__$1);
}));

(java.time.Year.prototype.tick$protocols$IDivisible$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Year.prototype.tick$protocols$IDivisible$divide$arity$2 = (function (n,d){
var n__$1 = this;
return tick.interval.divide_interval(d,n__$1);
}));

(java.time.YearMonth.prototype.tick$protocols$IDivisible$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.YearMonth.prototype.tick$protocols$IDivisible$divide$arity$2 = (function (n,d){
var n__$1 = this;
return tick.interval.divide_interval(d,n__$1);
}));

(cljs.core.PersistentArrayMap.prototype.tick$protocols$IDivisible$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.tick$protocols$IDivisible$divide$arity$2 = (function (ival,o){
var ival__$1 = this;
return tick.interval.divide_interval(o,ival__$1);
}));
/**
 * Divide intervals in s1 by (disjoint ordered) intervals in s2,
 *   splitting if necessary, grouping by s2. Complexity is O(n) rather
 *   than O(n^2)
 */
tick.interval.group_by_intervals = (function tick$interval$group_by_intervals(intervals_to_group_by,ivals){
if(tick.interval.ordered_disjoint_intervals_QMARK_(intervals_to_group_by)){
} else {
throw (new Error("Assert failed: (ordered-disjoint-intervals? intervals-to-group-by)"));
}

if(tick.interval.ordered_disjoint_intervals_QMARK_(ivals)){
} else {
throw (new Error("Assert failed: (ordered-disjoint-intervals? ivals)"));
}

var intervals = ivals;
var groups = intervals_to_group_by;
var result = cljs.core.PersistentArrayMap.EMPTY;
var current_intervals = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(cljs.core.not_empty(intervals))){
if(cljs.core.truth_(cljs.core.not_empty(groups))){
var ival = cljs.core.first(intervals);
var group = cljs.core.first(groups);
var G__73388 = tick.interval.relation(ival,group);
var G__73388__$1 = (((G__73388 instanceof cljs.core.Keyword))?G__73388.fqn:null);
switch (G__73388__$1) {
case "precedes":
case "meets":
var G__73656 = cljs.core.next(intervals);
var G__73657 = groups;
var G__73658 = result;
var G__73659 = current_intervals;
intervals = G__73656;
groups = G__73657;
result = G__73658;
current_intervals = G__73659;
continue;

break;
case "preceded-by":
case "met-by":
var G__73661 = intervals;
var G__73662 = cljs.core.next(groups);
var G__73663 = (function (){var G__73389 = result;
if(cljs.core.truth_(cljs.core.not_empty(current_intervals))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73389,group,current_intervals);
} else {
return G__73389;
}
})();
var G__73664 = cljs.core.PersistentVector.EMPTY;
intervals = G__73661;
groups = G__73662;
result = G__73663;
current_intervals = G__73664;
continue;

break;
case "finishes":
var G__73665 = cljs.core.next(intervals);
var G__73666 = cljs.core.next(groups);
var G__73667 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,group,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,ival));
var G__73668 = cljs.core.PersistentVector.EMPTY;
intervals = G__73665;
groups = G__73666;
result = G__73667;
current_intervals = G__73668;
continue;

break;
case "equals":
var G__73669 = cljs.core.next(intervals);
var G__73670 = cljs.core.next(groups);
var G__73671 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,group,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,ival));
var G__73672 = cljs.core.PersistentVector.EMPTY;
intervals = G__73669;
groups = G__73670;
result = G__73671;
current_intervals = G__73672;
continue;

break;
case "finished-by":
var vec__73390 = tick.interval.split_with_assert(ival,tick.protocols.beginning(group));
var _seg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73390,(0),null);
var seg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73390,(1),null);
var G__73674 = cljs.core.next(intervals);
var G__73675 = cljs.core.next(groups);
var G__73676 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,group,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,seg2));
var G__73677 = cljs.core.PersistentVector.EMPTY;
intervals = G__73674;
groups = G__73675;
result = G__73676;
current_intervals = G__73677;
continue;

break;
case "started-by":
var vec__73393 = tick.interval.split_with_assert(ival,tick.protocols.end(group));
var seg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73393,(0),null);
var seg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73393,(1),null);
var G__73685 = cljs.core.cons(seg2,cljs.core.next(intervals));
var G__73686 = cljs.core.next(groups);
var G__73687 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,group,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,seg1));
var G__73688 = cljs.core.PersistentVector.EMPTY;
intervals = G__73685;
groups = G__73686;
result = G__73687;
current_intervals = G__73688;
continue;

break;
case "overlapped-by":
var vec__73396 = tick.interval.split_with_assert(ival,tick.protocols.end(group));
var seg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73396,(0),null);
var seg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73396,(1),null);
var G__73690 = cljs.core.cons(seg2,cljs.core.next(intervals));
var G__73691 = cljs.core.next(groups);
var G__73692 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,group,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,seg1));
var G__73693 = cljs.core.PersistentVector.EMPTY;
intervals = G__73690;
groups = G__73691;
result = G__73692;
current_intervals = G__73693;
continue;

break;
case "starts":
case "during":
var G__73695 = cljs.core.next(intervals);
var G__73696 = groups;
var G__73697 = result;
var G__73698 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,ival);
intervals = G__73695;
groups = G__73696;
result = G__73697;
current_intervals = G__73698;
continue;

break;
case "contains":
var G__73705 = cljs.core.next(intervals);
var G__73706 = cljs.core.next(groups);
var G__73707 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,group,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.interval.slice(ival,tick.protocols.beginning(group),tick.protocols.end(group))], null));
var G__73708 = cljs.core.PersistentVector.EMPTY;
intervals = G__73705;
groups = G__73706;
result = G__73707;
current_intervals = G__73708;
continue;

break;
case "overlaps":
var G__73709 = cljs.core.next(intervals);
var G__73710 = groups;
var G__73711 = result;
var G__73712 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,tick.interval.slice(ival,tick.protocols.beginning(group),tick.protocols.end(ival)));
intervals = G__73709;
groups = G__73710;
result = G__73711;
current_intervals = G__73712;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__73388__$1)].join('')));

}
} else {
return result;
}
} else {
var G__73399 = result;
if(cljs.core.truth_((function (){var and__4210__auto__ = cljs.core.first(groups);
if(cljs.core.truth_(and__4210__auto__)){
return cljs.core.not_empty(current_intervals);
} else {
return and__4210__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73399,cljs.core.first(groups),current_intervals);
} else {
return G__73399;
}
}
break;
}
});

/**
 * @interface
 */
tick.interval.IGroupable = function(){};

var tick$interval$IGroupable$group_by$dyn_73714 = (function (grouping,ivals){
var x__4509__auto__ = (((grouping == null))?null:grouping);
var m__4510__auto__ = (tick.interval.group_by[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(grouping,ivals) : m__4510__auto__.call(null,grouping,ivals));
} else {
var m__4508__auto__ = (tick.interval.group_by["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(grouping,ivals) : m__4508__auto__.call(null,grouping,ivals));
} else {
throw cljs.core.missing_protocol("IGroupable.group-by",grouping);
}
}
});
tick.interval.group_by = (function tick$interval$group_by(grouping,ivals){
if((((!((grouping == null)))) && ((!((grouping.tick$interval$IGroupable$group_by$arity$2 == null)))))){
return grouping.tick$interval$IGroupable$group_by$arity$2(grouping,ivals);
} else {
return tick$interval$IGroupable$group_by$dyn_73714(grouping,ivals);
}
});

goog.object.set(tick.interval.IGroupable,"function",true);

goog.object.set(tick.interval.group_by,"function",(function (f,ivals){
if(cljs.core.empty_QMARK_(ivals)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.interval.bounds,ivals);
var b = (function (){var G__73400 = tick.protocols.beginning(r);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__73400) : f.call(null,G__73400));
})();
var e = (function (){var G__73401 = tick.protocols.end(r);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__73401) : f.call(null,G__73401));
})();
var groups = tick.protocols.range(b,tick.core.inc(e));
return tick.interval.group_by(groups,ivals);
}
}));

(cljs.core.LazySeq.prototype.tick$interval$IGroupable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.tick$interval$IGroupable$group_by$arity$2 = (function (groups,ivals){
var groups__$1 = this;
return tick.interval.group_by_intervals(groups__$1,ivals);
}));

(cljs.core.PersistentVector.prototype.tick$interval$IGroupable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.tick$interval$IGroupable$group_by$arity$2 = (function (groups,ivals){
var groups__$1 = this;
return tick.interval.group_by_intervals(groups__$1,ivals);
}));

//# sourceMappingURL=tick.interval.js.map
