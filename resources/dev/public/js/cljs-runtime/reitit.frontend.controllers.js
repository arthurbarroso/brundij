goog.provide('reitit.frontend.controllers');
reitit.frontend.controllers.pad_same_length = (function reitit$frontend$controllers$pad_same_length(a,b){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(a,cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(b) - cljs.core.count(a)),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(null)));
});
reitit.frontend.controllers.params_warning = (new cljs.core.Delay((function (){
return console.warn("Reitit-frontend controller :params is deprecated. Replace with :identity or :parameters option.");
}),null));
/**
 * Get controller identity given controller and match.
 * 
 *   To select interesting properties from Match :parameters option can be set.
 *   Value should be param-type => [param-key]
 *   Resulting value is map of param-type => param-key => value.
 * 
 *   For other uses, :identity option can be used to provide function from
 *   Match to identity.
 * 
 *   Default value is nil, i.e. controller identity doesn't depend on Match.
 */
reitit.frontend.controllers.get_identity = (function reitit$frontend$controllers$get_identity(p__67012,match){
var map__67013 = p__67012;
var map__67013__$1 = cljs.core.__destructure_map(map__67013);
var identity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67013__$1,new cljs.core.Keyword(null,"identity","identity",1647396035));
var parameters = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67013__$1,new cljs.core.Keyword(null,"parameters","parameters",-1229919748));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67013__$1,new cljs.core.Keyword(null,"params","params",710516235));
if(cljs.core.not((function (){var and__4210__auto__ = identity;
if(cljs.core.truth_(and__4210__auto__)){
return parameters;
} else {
return and__4210__auto__;
}
})())){
} else {
throw (new Error(["Assert failed: ","Use either :identity or :parameters for controller, not both.","\n","(not (and identity parameters))"].join('')));
}

if(cljs.core.truth_(params)){
cljs.core.deref(reitit.frontend.controllers.params_warning);
} else {
}

if(cljs.core.truth_(parameters)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4611__auto__ = (function reitit$frontend$controllers$get_identity_$_iter__67017(s__67018){
return (new cljs.core.LazySeq(null,(function (){
var s__67018__$1 = s__67018;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__67018__$1);
if(temp__5735__auto__){
var s__67018__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__67018__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__67018__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__67020 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__67019 = (0);
while(true){
if((i__67019 < size__4610__auto__)){
var vec__67025 = cljs.core._nth(c__4609__auto__,i__67019);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67025,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67025,(1),null);
cljs.core.chunk_append(b__67020,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null));

var G__67084 = (i__67019 + (1));
i__67019 = G__67084;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__67020),reitit$frontend$controllers$get_identity_$_iter__67017(cljs.core.chunk_rest(s__67018__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__67020),null);
}
} else {
var vec__67028 = cljs.core.first(s__67018__$2);
var param_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67028,(0),null);
var ks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67028,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_type,cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parameters","parameters",-1229919748).cljs$core$IFn$_invoke$arity$1(match),param_type),ks)], null),reitit$frontend$controllers$get_identity_$_iter__67017(cljs.core.rest(s__67018__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4611__auto__(parameters);
})());
} else {
if(cljs.core.truth_(identity)){
return (identity.cljs$core$IFn$_invoke$arity$1 ? identity.cljs$core$IFn$_invoke$arity$1(match) : identity.call(null,match));
} else {
if(cljs.core.truth_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(match) : params.call(null,match));
} else {
return null;

}
}
}
});
/**
 * Run side-effects (:start or :stop) for controller.
 *   The side-effect function is called with controller identity value.
 */
reitit.frontend.controllers.apply_controller = (function reitit$frontend$controllers$apply_controller(controller,method){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(controller,method);
if(cljs.core.truth_(temp__5735__auto__)){
var f = temp__5735__auto__;
var G__67034 = new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693).cljs$core$IFn$_invoke$arity$1(controller);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__67034) : f.call(null,G__67034));
} else {
return null;
}
});
/**
 * Applies changes between current controllers and
 *   those previously enabled. Reinitializes controllers whose
 *   identity has changed.
 */
reitit.frontend.controllers.apply_controllers = (function reitit$frontend$controllers$apply_controllers(old_controllers,new_match){
var new_controllers = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (controller){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword("reitit.frontend.controllers","identity","reitit.frontend.controllers/identity",-806277693),reitit.frontend.controllers.get_identity(controller,new_match));
}),new cljs.core.Keyword(null,"controllers","controllers",-1120410624).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(new_match)));
var changed_controllers = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (old,new$){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old,new$)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"old","old",-1825222690),old,new cljs.core.Keyword(null,"new","new",-2085437848),new$], null);
} else {
return null;
}
}),reitit.frontend.controllers.pad_same_length(old_controllers,new_controllers),reitit.frontend.controllers.pad_same_length(new_controllers,old_controllers))));
var seq__67040_67086 = cljs.core.seq(cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"old","old",-1825222690),changed_controllers)));
var chunk__67041_67087 = null;
var count__67042_67088 = (0);
var i__67043_67089 = (0);
while(true){
if((i__67043_67089 < count__67042_67088)){
var controller_67090 = chunk__67041_67087.cljs$core$IIndexed$_nth$arity$2(null,i__67043_67089);
reitit.frontend.controllers.apply_controller(controller_67090,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__67091 = seq__67040_67086;
var G__67092 = chunk__67041_67087;
var G__67093 = count__67042_67088;
var G__67094 = (i__67043_67089 + (1));
seq__67040_67086 = G__67091;
chunk__67041_67087 = G__67092;
count__67042_67088 = G__67093;
i__67043_67089 = G__67094;
continue;
} else {
var temp__5735__auto___67095 = cljs.core.seq(seq__67040_67086);
if(temp__5735__auto___67095){
var seq__67040_67098__$1 = temp__5735__auto___67095;
if(cljs.core.chunked_seq_QMARK_(seq__67040_67098__$1)){
var c__4638__auto___67099 = cljs.core.chunk_first(seq__67040_67098__$1);
var G__67100 = cljs.core.chunk_rest(seq__67040_67098__$1);
var G__67101 = c__4638__auto___67099;
var G__67102 = cljs.core.count(c__4638__auto___67099);
var G__67103 = (0);
seq__67040_67086 = G__67100;
chunk__67041_67087 = G__67101;
count__67042_67088 = G__67102;
i__67043_67089 = G__67103;
continue;
} else {
var controller_67104 = cljs.core.first(seq__67040_67098__$1);
reitit.frontend.controllers.apply_controller(controller_67104,new cljs.core.Keyword(null,"stop","stop",-2140911342));


var G__67105 = cljs.core.next(seq__67040_67098__$1);
var G__67106 = null;
var G__67107 = (0);
var G__67108 = (0);
seq__67040_67086 = G__67105;
chunk__67041_67087 = G__67106;
count__67042_67088 = G__67107;
i__67043_67089 = G__67108;
continue;
}
} else {
}
}
break;
}

var seq__67049_67109 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"new","new",-2085437848),changed_controllers));
var chunk__67050_67110 = null;
var count__67051_67111 = (0);
var i__67052_67112 = (0);
while(true){
if((i__67052_67112 < count__67051_67111)){
var controller_67113 = chunk__67050_67110.cljs$core$IIndexed$_nth$arity$2(null,i__67052_67112);
reitit.frontend.controllers.apply_controller(controller_67113,new cljs.core.Keyword(null,"start","start",-355208981));


var G__67114 = seq__67049_67109;
var G__67115 = chunk__67050_67110;
var G__67116 = count__67051_67111;
var G__67117 = (i__67052_67112 + (1));
seq__67049_67109 = G__67114;
chunk__67050_67110 = G__67115;
count__67051_67111 = G__67116;
i__67052_67112 = G__67117;
continue;
} else {
var temp__5735__auto___67118 = cljs.core.seq(seq__67049_67109);
if(temp__5735__auto___67118){
var seq__67049_67119__$1 = temp__5735__auto___67118;
if(cljs.core.chunked_seq_QMARK_(seq__67049_67119__$1)){
var c__4638__auto___67120 = cljs.core.chunk_first(seq__67049_67119__$1);
var G__67121 = cljs.core.chunk_rest(seq__67049_67119__$1);
var G__67122 = c__4638__auto___67120;
var G__67123 = cljs.core.count(c__4638__auto___67120);
var G__67124 = (0);
seq__67049_67109 = G__67121;
chunk__67050_67110 = G__67122;
count__67051_67111 = G__67123;
i__67052_67112 = G__67124;
continue;
} else {
var controller_67125 = cljs.core.first(seq__67049_67119__$1);
reitit.frontend.controllers.apply_controller(controller_67125,new cljs.core.Keyword(null,"start","start",-355208981));


var G__67126 = cljs.core.next(seq__67049_67119__$1);
var G__67127 = null;
var G__67128 = (0);
var G__67129 = (0);
seq__67049_67109 = G__67126;
chunk__67050_67110 = G__67127;
count__67051_67111 = G__67128;
i__67052_67112 = G__67129;
continue;
}
} else {
}
}
break;
}

return new_controllers;
});

//# sourceMappingURL=reitit.frontend.controllers.js.map
