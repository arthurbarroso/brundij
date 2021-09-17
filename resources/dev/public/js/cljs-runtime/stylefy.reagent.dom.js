goog.provide('stylefy.reagent.dom');
stylefy.reagent.dom.styles_in_dom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
stylefy.reagent.dom.dom_update_requested_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
stylefy.reagent.dom.styles_as_css = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
stylefy.reagent.dom.keyframes_in_use = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
stylefy.reagent.dom.font_faces_in_use = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
stylefy.reagent.dom.custom_tags_in_use = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
stylefy.reagent.dom.custom_classes_in_use = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
stylefy.reagent.dom.style_by_hash = (function stylefy$reagent$dom$style_by_hash(style_hash){
if(cljs.core.truth_(style_hash)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.reagent.dom.styles_as_css),style_hash);
} else {
return null;
}
});
stylefy.reagent.dom.update_style_tags_BANG_ = (function stylefy$reagent$dom$update_style_tags_BANG_(node_stylefy,node_stylefy_constant){
var styles_in_css = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"css","css",1135045163),stylefy.reagent.dom.style_by_hash),cljs.core.keys(cljs.core.deref(stylefy.reagent.dom.styles_as_css)));
var keyframes_in_css = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"css","css",1135045163),cljs.core.vals(cljs.core.deref(stylefy.reagent.dom.keyframes_in_use)));
var font_faces_in_use = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"css","css",1135045163),cljs.core.deref(stylefy.reagent.dom.font_faces_in_use));
var custom_tags_in_use = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"css","css",1135045163),cljs.core.deref(stylefy.reagent.dom.custom_tags_in_use));
var custom_classes_in_use = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"css","css",1135045163),cljs.core.deref(stylefy.reagent.dom.custom_classes_in_use));
var new_style_constant_css = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(font_faces_in_use,keyframes_in_css,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([custom_tags_in_use,custom_classes_in_use], 0)));
var new_style_css = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,styles_in_css);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dommy.core.text(node_stylefy_constant),new_style_constant_css)){
} else {
dommy.core.set_text_BANG_(node_stylefy_constant,new_style_constant_css);
}

return dommy.core.set_text_BANG_(node_stylefy,new_style_css);
});
stylefy.reagent.dom.mark_all_styles_added_in_dom_BANG_ = (function stylefy$reagent$dom$mark_all_styles_added_in_dom_BANG_(){
var seq__72222 = cljs.core.seq(cljs.core.keys(cljs.core.deref(stylefy.reagent.dom.styles_in_dom)));
var chunk__72223 = null;
var count__72224 = (0);
var i__72225 = (0);
while(true){
if((i__72225 < count__72224)){
var style_hash = chunk__72223.cljs$core$IIndexed$_nth$arity$2(null,i__72225);
cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.reagent.dom.styles_in_dom),style_hash),true);


var G__72300 = seq__72222;
var G__72301 = chunk__72223;
var G__72302 = count__72224;
var G__72303 = (i__72225 + (1));
seq__72222 = G__72300;
chunk__72223 = G__72301;
count__72224 = G__72302;
i__72225 = G__72303;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__72222);
if(temp__5735__auto__){
var seq__72222__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72222__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__72222__$1);
var G__72304 = cljs.core.chunk_rest(seq__72222__$1);
var G__72305 = c__4638__auto__;
var G__72306 = cljs.core.count(c__4638__auto__);
var G__72307 = (0);
seq__72222 = G__72304;
chunk__72223 = G__72305;
count__72224 = G__72306;
i__72225 = G__72307;
continue;
} else {
var style_hash = cljs.core.first(seq__72222__$1);
cljs.core.reset_BANG_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.reagent.dom.styles_in_dom),style_hash),true);


var G__72308 = cljs.core.next(seq__72222__$1);
var G__72309 = null;
var G__72310 = (0);
var G__72311 = (0);
seq__72222 = G__72308;
chunk__72223 = G__72309;
count__72224 = G__72310;
i__72225 = G__72311;
continue;
}
} else {
return null;
}
}
break;
}
});
stylefy.reagent.dom.update_dom = (function stylefy$reagent$dom$update_dom(){
var node_stylefy = stylefy.impl.dom.get_stylefy_node(stylefy.impl.dom.stylefy_node_id,cljs.core.deref(stylefy.impl.dom.stylefy_base_node),cljs.core.deref(stylefy.impl.dom.stylefy_instance_id));
var node_stylefy_constant = stylefy.impl.dom.get_stylefy_node(stylefy.impl.dom.stylefy_constant_node_id,cljs.core.deref(stylefy.impl.dom.stylefy_base_node),cljs.core.deref(stylefy.impl.dom.stylefy_instance_id));
if(cljs.core.truth_((function (){var and__4210__auto__ = node_stylefy;
if(cljs.core.truth_(and__4210__auto__)){
return node_stylefy_constant;
} else {
return and__4210__auto__;
}
})())){
stylefy.reagent.dom.update_style_tags_BANG_(node_stylefy,node_stylefy_constant);

cljs.core.reset_BANG_(stylefy.reagent.dom.dom_update_requested_QMARK_,false);

try{stylefy.impl.cache.cache_styles.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.reagent.dom.styles_as_css),cljs.core.deref(stylefy.impl.dom.stylefy_instance_id));
}catch (e72228){var e_72312 = e72228;
stylefy.impl.log.warn(["Unable to cache styles, error: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_72312)].join(''));

stylefy.impl.cache.clear_styles.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(stylefy.impl.dom.stylefy_instance_id));

}
return stylefy.reagent.dom.mark_all_styles_added_in_dom_BANG_();
} else {
return stylefy.impl.log.error("stylefy is unable to find the required <style> tags!");
}
});
stylefy.reagent.dom.update_dom_if_requested = (function stylefy$reagent$dom$update_dom_if_requested(){
if(cljs.core.truth_(cljs.core.deref(stylefy.reagent.dom.dom_update_requested_QMARK_))){
return stylefy.reagent.dom.update_dom();
} else {
return null;
}
});
stylefy.reagent.dom.request_asynchronous_dom_update = (function stylefy$reagent$dom$request_asynchronous_dom_update(){
if(cljs.core.truth_(cljs.core.deref(stylefy.impl.state.stylefy_initialised_QMARK_))){
if(cljs.core.truth_(cljs.core.deref(stylefy.reagent.dom.dom_update_requested_QMARK_))){
return null;
} else {
cljs.core.reset_BANG_(stylefy.reagent.dom.dom_update_requested_QMARK_,true);

var c__56789__auto___72313 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56790__auto__ = (function (){var switch__56661__auto__ = (function (state_72233){
var state_val_72234 = (state_72233[(1)]);
if((state_val_72234 === (1))){
var inst_72231 = stylefy.reagent.dom.update_dom();
var state_72233__$1 = state_72233;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72233__$1,inst_72231);
} else {
return null;
}
});
return (function() {
var stylefy$reagent$dom$request_asynchronous_dom_update_$_state_machine__56662__auto__ = null;
var stylefy$reagent$dom$request_asynchronous_dom_update_$_state_machine__56662__auto____0 = (function (){
var statearr_72235 = [null,null,null,null,null,null,null];
(statearr_72235[(0)] = stylefy$reagent$dom$request_asynchronous_dom_update_$_state_machine__56662__auto__);

(statearr_72235[(1)] = (1));

return statearr_72235;
});
var stylefy$reagent$dom$request_asynchronous_dom_update_$_state_machine__56662__auto____1 = (function (state_72233){
while(true){
var ret_value__56663__auto__ = (function (){try{while(true){
var result__56664__auto__ = switch__56661__auto__(state_72233);
if(cljs.core.keyword_identical_QMARK_(result__56664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56664__auto__;
}
break;
}
}catch (e72236){var ex__56665__auto__ = e72236;
var statearr_72237_72314 = state_72233;
(statearr_72237_72314[(2)] = ex__56665__auto__);


if(cljs.core.seq((state_72233[(4)]))){
var statearr_72238_72315 = state_72233;
(statearr_72238_72315[(1)] = cljs.core.first((state_72233[(4)])));

} else {
throw ex__56665__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72316 = state_72233;
state_72233 = G__72316;
continue;
} else {
return ret_value__56663__auto__;
}
break;
}
});
stylefy$reagent$dom$request_asynchronous_dom_update_$_state_machine__56662__auto__ = function(state_72233){
switch(arguments.length){
case 0:
return stylefy$reagent$dom$request_asynchronous_dom_update_$_state_machine__56662__auto____0.call(this);
case 1:
return stylefy$reagent$dom$request_asynchronous_dom_update_$_state_machine__56662__auto____1.call(this,state_72233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stylefy$reagent$dom$request_asynchronous_dom_update_$_state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$0 = stylefy$reagent$dom$request_asynchronous_dom_update_$_state_machine__56662__auto____0;
stylefy$reagent$dom$request_asynchronous_dom_update_$_state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$1 = stylefy$reagent$dom$request_asynchronous_dom_update_$_state_machine__56662__auto____1;
return stylefy$reagent$dom$request_asynchronous_dom_update_$_state_machine__56662__auto__;
})()
})();
var state__56791__auto__ = (function (){var statearr_72241 = f__56790__auto__();
(statearr_72241[(6)] = c__56789__auto___72313);

return statearr_72241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56791__auto__);
}));


return null;
}
} else {
return null;
}
});
stylefy.reagent.dom.load_cache = (function stylefy$reagent$dom$load_cache(){
var temp__5735__auto__ = stylefy.impl.cache.read_cache_value(stylefy.impl.cache.cache_key_styles(cljs.core.deref(stylefy.impl.dom.stylefy_instance_id)));
if(cljs.core.truth_(temp__5735__auto__)){
var cached_styles = temp__5735__auto__;
cljs.core.reset_BANG_(stylefy.reagent.dom.styles_as_css,(function (){var or__4212__auto__ = cached_styles;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());

return cljs.core.reset_BANG_(stylefy.reagent.dom.styles_in_dom,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72242_SHARP_){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([p1__72242_SHARP_,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false)]);
}),cljs.core.keys(cached_styles))));
} else {
return null;
}
});
/**
 * Stores the style in an atom. The style is going to be added into the DOM soon.
 */
stylefy.reagent.dom.add_style = (function stylefy$reagent$dom$add_style(p__72243){
var map__72244 = p__72243;
var map__72244__$1 = cljs.core.__destructure_map(map__72244);
var _style = map__72244__$1;
var css = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72244__$1,new cljs.core.Keyword(null,"css","css",1135045163));
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72244__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
if(cljs.core.truth_(css)){
} else {
throw (new Error(["Assert failed: ","Unable to save empty style!","\n","css"].join('')));
}

if(cljs.core.truth_(hash)){
} else {
throw (new Error(["Assert failed: ","Unable to save style without hash!","\n","hash"].join('')));
}

var style_to_be_saved = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),css], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(stylefy.reagent.dom.styles_as_css,cljs.core.assoc,hash,style_to_be_saved);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(stylefy.reagent.dom.styles_in_dom,cljs.core.assoc,hash,reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false));

return stylefy.reagent.dom.request_asynchronous_dom_update();
});
stylefy.reagent.dom.style_in_dom_QMARK_ = (function stylefy$reagent$dom$style_in_dom_QMARK_(style_hash){
return cljs.core.boolean$(cljs.core.deref(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(stylefy.reagent.dom.styles_in_dom),style_hash)));
});
stylefy.reagent.dom.add_keyframes = (function stylefy$reagent$dom$add_keyframes(identifier,keyframes_as_css){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(stylefy.reagent.dom.keyframes_in_use,cljs.core.assoc,identifier,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),keyframes_as_css], null));

stylefy.reagent.dom.request_asynchronous_dom_update();

return null;
});
stylefy.reagent.dom.add_font_face = (function stylefy$reagent$dom$add_font_face(font_faces_as_css){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylefy.reagent.dom.font_faces_in_use,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),font_faces_as_css], null));

stylefy.reagent.dom.request_asynchronous_dom_update();

return null;
});
stylefy.reagent.dom.add_tag = (function stylefy$reagent$dom$add_tag(tag_css){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylefy.reagent.dom.custom_tags_in_use,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),tag_css], null));

stylefy.reagent.dom.request_asynchronous_dom_update();

return null;
});
stylefy.reagent.dom.add_class = (function stylefy$reagent$dom$add_class(class_as_css){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(stylefy.reagent.dom.custom_classes_in_use,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"css","css",1135045163),class_as_css], null));

stylefy.reagent.dom.request_asynchronous_dom_update();

return null;
});
stylefy.reagent.dom.load_uninitialised_styles = (function stylefy$reagent$dom$load_uninitialised_styles(uninitialised_styles){
var seq__72245_72317 = cljs.core.seq(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(uninitialised_styles));
var chunk__72246_72318 = null;
var count__72247_72319 = (0);
var i__72248_72320 = (0);
while(true){
if((i__72248_72320 < count__72247_72319)){
var tag_72321 = chunk__72246_72318.cljs$core$IIndexed$_nth$arity$2(null,i__72248_72320);
stylefy.reagent.dom.add_tag(tag_72321);


var G__72322 = seq__72245_72317;
var G__72323 = chunk__72246_72318;
var G__72324 = count__72247_72319;
var G__72325 = (i__72248_72320 + (1));
seq__72245_72317 = G__72322;
chunk__72246_72318 = G__72323;
count__72247_72319 = G__72324;
i__72248_72320 = G__72325;
continue;
} else {
var temp__5735__auto___72326 = cljs.core.seq(seq__72245_72317);
if(temp__5735__auto___72326){
var seq__72245_72327__$1 = temp__5735__auto___72326;
if(cljs.core.chunked_seq_QMARK_(seq__72245_72327__$1)){
var c__4638__auto___72328 = cljs.core.chunk_first(seq__72245_72327__$1);
var G__72329 = cljs.core.chunk_rest(seq__72245_72327__$1);
var G__72330 = c__4638__auto___72328;
var G__72331 = cljs.core.count(c__4638__auto___72328);
var G__72332 = (0);
seq__72245_72317 = G__72329;
chunk__72246_72318 = G__72330;
count__72247_72319 = G__72331;
i__72248_72320 = G__72332;
continue;
} else {
var tag_72333 = cljs.core.first(seq__72245_72327__$1);
stylefy.reagent.dom.add_tag(tag_72333);


var G__72334 = cljs.core.next(seq__72245_72327__$1);
var G__72335 = null;
var G__72336 = (0);
var G__72337 = (0);
seq__72245_72317 = G__72334;
chunk__72246_72318 = G__72335;
count__72247_72319 = G__72336;
i__72248_72320 = G__72337;
continue;
}
} else {
}
}
break;
}

var seq__72249_72338 = cljs.core.seq(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(uninitialised_styles));
var chunk__72250_72339 = null;
var count__72251_72340 = (0);
var i__72252_72341 = (0);
while(true){
if((i__72252_72341 < count__72251_72340)){
var class_72342 = chunk__72250_72339.cljs$core$IIndexed$_nth$arity$2(null,i__72252_72341);
stylefy.reagent.dom.add_class(class_72342);


var G__72343 = seq__72249_72338;
var G__72344 = chunk__72250_72339;
var G__72345 = count__72251_72340;
var G__72346 = (i__72252_72341 + (1));
seq__72249_72338 = G__72343;
chunk__72250_72339 = G__72344;
count__72251_72340 = G__72345;
i__72252_72341 = G__72346;
continue;
} else {
var temp__5735__auto___72347 = cljs.core.seq(seq__72249_72338);
if(temp__5735__auto___72347){
var seq__72249_72348__$1 = temp__5735__auto___72347;
if(cljs.core.chunked_seq_QMARK_(seq__72249_72348__$1)){
var c__4638__auto___72349 = cljs.core.chunk_first(seq__72249_72348__$1);
var G__72350 = cljs.core.chunk_rest(seq__72249_72348__$1);
var G__72351 = c__4638__auto___72349;
var G__72352 = cljs.core.count(c__4638__auto___72349);
var G__72353 = (0);
seq__72249_72338 = G__72350;
chunk__72250_72339 = G__72351;
count__72251_72340 = G__72352;
i__72252_72341 = G__72353;
continue;
} else {
var class_72354 = cljs.core.first(seq__72249_72348__$1);
stylefy.reagent.dom.add_class(class_72354);


var G__72355 = cljs.core.next(seq__72249_72348__$1);
var G__72356 = null;
var G__72357 = (0);
var G__72358 = (0);
seq__72249_72338 = G__72355;
chunk__72250_72339 = G__72356;
count__72251_72340 = G__72357;
i__72252_72341 = G__72358;
continue;
}
} else {
}
}
break;
}

var seq__72254_72359 = cljs.core.seq(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012).cljs$core$IFn$_invoke$arity$1(uninitialised_styles));
var chunk__72255_72360 = null;
var count__72256_72361 = (0);
var i__72257_72362 = (0);
while(true){
if((i__72257_72362 < count__72256_72361)){
var vec__72268_72363 = chunk__72255_72360.cljs$core$IIndexed$_nth$arity$2(null,i__72257_72362);
var identifier_72364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72268_72363,(0),null);
var keyframes_72365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72268_72363,(1),null);
stylefy.reagent.dom.add_keyframes(identifier_72364,keyframes_72365);


var G__72366 = seq__72254_72359;
var G__72367 = chunk__72255_72360;
var G__72368 = count__72256_72361;
var G__72369 = (i__72257_72362 + (1));
seq__72254_72359 = G__72366;
chunk__72255_72360 = G__72367;
count__72256_72361 = G__72368;
i__72257_72362 = G__72369;
continue;
} else {
var temp__5735__auto___72370 = cljs.core.seq(seq__72254_72359);
if(temp__5735__auto___72370){
var seq__72254_72371__$1 = temp__5735__auto___72370;
if(cljs.core.chunked_seq_QMARK_(seq__72254_72371__$1)){
var c__4638__auto___72372 = cljs.core.chunk_first(seq__72254_72371__$1);
var G__72373 = cljs.core.chunk_rest(seq__72254_72371__$1);
var G__72374 = c__4638__auto___72372;
var G__72375 = cljs.core.count(c__4638__auto___72372);
var G__72376 = (0);
seq__72254_72359 = G__72373;
chunk__72255_72360 = G__72374;
count__72256_72361 = G__72375;
i__72257_72362 = G__72376;
continue;
} else {
var vec__72272_72377 = cljs.core.first(seq__72254_72371__$1);
var identifier_72378 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72272_72377,(0),null);
var keyframes_72379 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72272_72377,(1),null);
stylefy.reagent.dom.add_keyframes(identifier_72378,keyframes_72379);


var G__72380 = cljs.core.next(seq__72254_72371__$1);
var G__72381 = null;
var G__72382 = (0);
var G__72383 = (0);
seq__72254_72359 = G__72380;
chunk__72255_72360 = G__72381;
count__72256_72361 = G__72382;
i__72257_72362 = G__72383;
continue;
}
} else {
}
}
break;
}

var seq__72275_72384 = cljs.core.seq(new cljs.core.Keyword(null,"font-face","font-face",-504453235).cljs$core$IFn$_invoke$arity$1(uninitialised_styles));
var chunk__72276_72385 = null;
var count__72277_72386 = (0);
var i__72278_72387 = (0);
while(true){
if((i__72278_72387 < count__72277_72386)){
var font_face_72388 = chunk__72276_72385.cljs$core$IIndexed$_nth$arity$2(null,i__72278_72387);
stylefy.reagent.dom.add_font_face(font_face_72388);


var G__72389 = seq__72275_72384;
var G__72390 = chunk__72276_72385;
var G__72391 = count__72277_72386;
var G__72392 = (i__72278_72387 + (1));
seq__72275_72384 = G__72389;
chunk__72276_72385 = G__72390;
count__72277_72386 = G__72391;
i__72278_72387 = G__72392;
continue;
} else {
var temp__5735__auto___72393 = cljs.core.seq(seq__72275_72384);
if(temp__5735__auto___72393){
var seq__72275_72394__$1 = temp__5735__auto___72393;
if(cljs.core.chunked_seq_QMARK_(seq__72275_72394__$1)){
var c__4638__auto___72395 = cljs.core.chunk_first(seq__72275_72394__$1);
var G__72396 = cljs.core.chunk_rest(seq__72275_72394__$1);
var G__72397 = c__4638__auto___72395;
var G__72398 = cljs.core.count(c__4638__auto___72395);
var G__72399 = (0);
seq__72275_72384 = G__72396;
chunk__72276_72385 = G__72397;
count__72277_72386 = G__72398;
i__72278_72387 = G__72399;
continue;
} else {
var font_face_72400 = cljs.core.first(seq__72275_72394__$1);
stylefy.reagent.dom.add_font_face(font_face_72400);


var G__72401 = cljs.core.next(seq__72275_72394__$1);
var G__72402 = null;
var G__72403 = (0);
var G__72404 = (0);
seq__72275_72384 = G__72401;
chunk__72276_72385 = G__72402;
count__72277_72386 = G__72403;
i__72278_72387 = G__72404;
continue;
}
} else {
}
}
break;
}

var seq__72282 = cljs.core.seq(new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(uninitialised_styles));
var chunk__72283 = null;
var count__72284 = (0);
var i__72285 = (0);
while(true){
if((i__72285 < count__72284)){
var style = chunk__72283.cljs$core$IIndexed$_nth$arity$2(null,i__72285);
stylefy.reagent.dom.add_style(style);


var G__72405 = seq__72282;
var G__72406 = chunk__72283;
var G__72407 = count__72284;
var G__72408 = (i__72285 + (1));
seq__72282 = G__72405;
chunk__72283 = G__72406;
count__72284 = G__72407;
i__72285 = G__72408;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__72282);
if(temp__5735__auto__){
var seq__72282__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72282__$1)){
var c__4638__auto__ = cljs.core.chunk_first(seq__72282__$1);
var G__72409 = cljs.core.chunk_rest(seq__72282__$1);
var G__72410 = c__4638__auto__;
var G__72411 = cljs.core.count(c__4638__auto__);
var G__72412 = (0);
seq__72282 = G__72409;
chunk__72283 = G__72410;
count__72284 = G__72411;
i__72285 = G__72412;
continue;
} else {
var style = cljs.core.first(seq__72282__$1);
stylefy.reagent.dom.add_style(style);


var G__72413 = cljs.core.next(seq__72282__$1);
var G__72414 = null;
var G__72415 = (0);
var G__72416 = (0);
seq__72282 = G__72413;
chunk__72283 = G__72414;
count__72284 = G__72415;
i__72285 = G__72416;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {stylefy.impl.dom.Dom}
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
stylefy.reagent.dom.ReagentDom = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k72287,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__72291 = k72287;
switch (G__72291) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k72287,else__4464__auto__);

}
}));

(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__72292){
var vec__72293 = p__72292;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72293,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72293,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#stylefy.reagent.dom.ReagentDom{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__72286){
var self__ = this;
var G__72286__$1 = this;
return (new cljs.core.RecordIter((0),G__72286__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new stylefy.reagent.dom.ReagentDom(self__.__meta,self__.__extmap,self__.__hash));
}));

(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (-281597602 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this72288,other72289){
var self__ = this;
var this72288__$1 = this;
return (((!((other72289 == null)))) && ((((this72288__$1.constructor === other72289.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this72288__$1.__extmap,other72289.__extmap)))));
}));

(stylefy.reagent.dom.ReagentDom.prototype.stylefy$impl$dom$Dom$ = cljs.core.PROTOCOL_SENTINEL);

(stylefy.reagent.dom.ReagentDom.prototype.stylefy$impl$dom$Dom$add_tag$arity$2 = (function (this$,tag_as_css){
var self__ = this;
var this$__$1 = this;
return stylefy.reagent.dom.add_tag(tag_as_css);
}));

(stylefy.reagent.dom.ReagentDom.prototype.stylefy$impl$dom$Dom$add_style$arity$2 = (function (this$,style){
var self__ = this;
var this$__$1 = this;
return stylefy.reagent.dom.add_style(style);
}));

(stylefy.reagent.dom.ReagentDom.prototype.stylefy$impl$dom$Dom$style_in_dom_QMARK_$arity$2 = (function (this$,style_hash){
var self__ = this;
var this$__$1 = this;
return stylefy.reagent.dom.style_in_dom_QMARK_(style_hash);
}));

(stylefy.reagent.dom.ReagentDom.prototype.stylefy$impl$dom$Dom$add_font_face$arity$2 = (function (this$,font_face_as_css){
var self__ = this;
var this$__$1 = this;
return stylefy.reagent.dom.add_font_face(font_face_as_css);
}));

(stylefy.reagent.dom.ReagentDom.prototype.stylefy$impl$dom$Dom$load_cache$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return stylefy.reagent.dom.load_cache();
}));

(stylefy.reagent.dom.ReagentDom.prototype.stylefy$impl$dom$Dom$add_keyframes$arity$3 = (function (this$,identifier,keyframes_as_css){
var self__ = this;
var this$__$1 = this;
return stylefy.reagent.dom.add_keyframes(identifier,keyframes_as_css);
}));

(stylefy.reagent.dom.ReagentDom.prototype.stylefy$impl$dom$Dom$update_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return stylefy.reagent.dom.update_dom();
}));

(stylefy.reagent.dom.ReagentDom.prototype.stylefy$impl$dom$Dom$update_dom_if_needed$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return stylefy.reagent.dom.update_dom_if_requested();
}));

(stylefy.reagent.dom.ReagentDom.prototype.stylefy$impl$dom$Dom$load_uninitialised_styles$arity$2 = (function (this$,uninitialised_styles){
var self__ = this;
var this$__$1 = this;
return stylefy.reagent.dom.load_uninitialised_styles(uninitialised_styles);
}));

(stylefy.reagent.dom.ReagentDom.prototype.stylefy$impl$dom$Dom$style_by_hash$arity$2 = (function (this$,style_hash){
var self__ = this;
var this$__$1 = this;
return stylefy.reagent.dom.style_by_hash(style_hash);
}));

(stylefy.reagent.dom.ReagentDom.prototype.stylefy$impl$dom$Dom$add_class$arity$2 = (function (this$,class_as_css){
var self__ = this;
var this$__$1 = this;
return stylefy.reagent.dom.add_class(class_as_css);
}));

(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new stylefy.reagent.dom.ReagentDom(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k72287){
var self__ = this;
var this__4468__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k72287);
}));

(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__72286){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__72296 = cljs.core.keyword_identical_QMARK_;
var expr__72297 = k__4470__auto__;
return (new stylefy.reagent.dom.ReagentDom(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__72286),null));
}));

(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__72286){
var self__ = this;
var this__4460__auto____$1 = this;
return (new stylefy.reagent.dom.ReagentDom(G__72286,self__.__extmap,self__.__hash));
}));

(stylefy.reagent.dom.ReagentDom.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(stylefy.reagent.dom.ReagentDom.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(stylefy.reagent.dom.ReagentDom.cljs$lang$type = true);

(stylefy.reagent.dom.ReagentDom.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"stylefy.reagent.dom/ReagentDom",null,(1),null));
}));

(stylefy.reagent.dom.ReagentDom.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"stylefy.reagent.dom/ReagentDom");
}));

/**
 * Positional factory function for stylefy.reagent.dom/ReagentDom.
 */
stylefy.reagent.dom.__GT_ReagentDom = (function stylefy$reagent$dom$__GT_ReagentDom(){
return (new stylefy.reagent.dom.ReagentDom(null,null,null));
});

/**
 * Factory function for stylefy.reagent.dom/ReagentDom, taking a map of keywords to field values.
 */
stylefy.reagent.dom.map__GT_ReagentDom = (function stylefy$reagent$dom$map__GT_ReagentDom(G__72290){
var extmap__4501__auto__ = (function (){var G__72299 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__72290);
if(cljs.core.record_QMARK_(G__72290)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__72299);
} else {
return G__72299;
}
})();
return (new stylefy.reagent.dom.ReagentDom(null,cljs.core.not_empty(extmap__4501__auto__),null));
});


//# sourceMappingURL=stylefy.reagent.dom.js.map
