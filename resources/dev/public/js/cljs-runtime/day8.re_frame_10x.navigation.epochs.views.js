goog.provide('day8.re_frame_10x.navigation.epochs.views');
day8.re_frame_10x.navigation.epochs.views.epoch_style_factory$ = (function day8$re_frame_10x$navigation$epochs$views$epoch_style_factory$(style_name50678,params50679,ambiance,active_QMARK_){
var base_style50684 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),((cljs.core.not(active_QMARK_))?new cljs.core.Keyword(null,"pointer","pointer",85071187):new cljs.core.Keyword(null,"default","default",-1987822328))], null)], null);
var key__49812__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.first(base_style50684)));
var name50683 = (function (){var fexpr__50686 = new cljs.core.Var(function(){return day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.util.build_style_name;},new cljs.core.Symbol("day8.re-frame-10x.inlined-deps.spade.v1v1v0.spade.util","build-style-name","day8.re-frame-10x.inlined-deps.spade.v1v1v0.spade.util/build-style-name",1924410658,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"day8.re-frame-10x.inlined-deps.spade.v1v1v0.spade.util","day8.re-frame-10x.inlined-deps.spade.v1v1v0.spade.util",1310758620,null),new cljs.core.Symbol(null,"build-style-name","build-style-name",-1171118707,null),"day8/re_frame_10x/inlined_deps/spade/v1v1v0/spade/util.cljc",23,1,36,36,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"style-key","style-key",1072873135,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.util.build_style_name)?day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.util.build_style_name.cljs$lang$test:null)]));
return (fexpr__50686.cljs$core$IFn$_invoke$arity$3 ? fexpr__50686.cljs$core$IFn$_invoke$arity$3(style_name50678,key__49812__auto__,params50679) : fexpr__50686.call(null,style_name50678,key__49812__auto__,params50679));
})();
var style50682 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name50683)].join('')], null),base_style50684);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime.compile_css(style50682),new cljs.core.Keyword(null,"name","name",1843675177),name50683], null);
});

var factory_name50680_50774 = day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.util.factory__GT_name(day8.re_frame_10x.navigation.epochs.views.epoch_style_factory$);
day8.re_frame_10x.navigation.epochs.views.epoch_style = (function day8$re_frame_10x$navigation$epochs$views$epoch_style(ambiance,active_QMARK_){
return day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),factory_name50680_50774,day8.re_frame_10x.navigation.epochs.views.epoch_style_factory$,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ambiance,active_QMARK_], null));
});
day8.re_frame_10x.navigation.epochs.views.epoch_chevron_style_factory$ = (function day8$re_frame_10x$navigation$epochs$views$epoch_chevron_style_factory$(style_name50688,params50689,ambiance,active_QMARK_,hover_QMARK_){
var base_style50693 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),(cljs.core.truth_((function (){var or__4212__auto__ = active_QMARK_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return hover_QMARK_;
}
})())?day8.re_frame_10x.styles.nord13:null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_((function (){var or__4212__auto__ = active_QMARK_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return hover_QMARK_;
}
})())?new cljs.core.Keyword(null,"#fff","#fff",461169500):day8.re_frame_10x.styles.nord4)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),(cljs.core.truth_((function (){var or__4212__auto__ = active_QMARK_;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return hover_QMARK_;
}
})())?new cljs.core.Keyword(null,"#fff","#fff",461169500):new cljs.core.Keyword(null,"#fff","#fff",461169500))], null)], null)], null)], null);
var key__49812__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.first(base_style50693)));
var name50692 = (function (){var fexpr__50695 = new cljs.core.Var(function(){return day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.util.build_style_name;},new cljs.core.Symbol("day8.re-frame-10x.inlined-deps.spade.v1v1v0.spade.util","build-style-name","day8.re-frame-10x.inlined-deps.spade.v1v1v0.spade.util/build-style-name",1924410658,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"day8.re-frame-10x.inlined-deps.spade.v1v1v0.spade.util","day8.re-frame-10x.inlined-deps.spade.v1v1v0.spade.util",1310758620,null),new cljs.core.Symbol(null,"build-style-name","build-style-name",-1171118707,null),"day8/re_frame_10x/inlined_deps/spade/v1v1v0/spade/util.cljc",23,1,36,36,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"style-key","style-key",1072873135,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.util.build_style_name)?day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.util.build_style_name.cljs$lang$test:null)]));
return (fexpr__50695.cljs$core$IFn$_invoke$arity$3 ? fexpr__50695.cljs$core$IFn$_invoke$arity$3(style_name50688,key__49812__auto__,params50689) : fexpr__50695.call(null,style_name50688,key__49812__auto__,params50689));
})();
var style50691 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name50692)].join('')], null),base_style50693);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime.compile_css(style50691),new cljs.core.Keyword(null,"name","name",1843675177),name50692], null);
});

var factory_name50690_50775 = day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.util.factory__GT_name(day8.re_frame_10x.navigation.epochs.views.epoch_chevron_style_factory$);
day8.re_frame_10x.navigation.epochs.views.epoch_chevron_style = (function day8$re_frame_10x$navigation$epochs$views$epoch_chevron_style(ambiance,active_QMARK_,hover_QMARK_){
return day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),factory_name50690_50775,day8.re_frame_10x.navigation.epochs.views.epoch_chevron_style_factory$,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ambiance,active_QMARK_,hover_QMARK_], null));
});
day8.re_frame_10x.navigation.epochs.views.epoch_data_style_factory$ = (function day8$re_frame_10x$navigation$epochs$views$epoch_data_style_factory$(style_name50696,params50697,ambiance){
var base_style50701 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ambiance,new cljs.core.Keyword(null,"bright","bright",-1876684577)))?new cljs.core.Keyword(null,"#fff","#fff",461169500):day8.re_frame_10x.styles.nord0)], null)], null);
var key__49812__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.first(base_style50701)));
var name50700 = (function (){var fexpr__50702 = new cljs.core.Var(function(){return day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.util.build_style_name;},new cljs.core.Symbol("day8.re-frame-10x.inlined-deps.spade.v1v1v0.spade.util","build-style-name","day8.re-frame-10x.inlined-deps.spade.v1v1v0.spade.util/build-style-name",1924410658,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"day8.re-frame-10x.inlined-deps.spade.v1v1v0.spade.util","day8.re-frame-10x.inlined-deps.spade.v1v1v0.spade.util",1310758620,null),new cljs.core.Symbol(null,"build-style-name","build-style-name",-1171118707,null),"day8/re_frame_10x/inlined_deps/spade/v1v1v0/spade/util.cljc",23,1,36,36,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"style-key","style-key",1072873135,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.util.build_style_name)?day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.util.build_style_name.cljs$lang$test:null)]));
return (fexpr__50702.cljs$core$IFn$_invoke$arity$3 ? fexpr__50702.cljs$core$IFn$_invoke$arity$3(style_name50696,key__49812__auto__,params50697) : fexpr__50702.call(null,style_name50696,key__49812__auto__,params50697));
})();
var style50699 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name50700)].join('')], null),base_style50701);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime.compile_css(style50699),new cljs.core.Keyword(null,"name","name",1843675177),name50700], null);
});

var factory_name50698_50776 = day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.util.factory__GT_name(day8.re_frame_10x.navigation.epochs.views.epoch_data_style_factory$);
day8.re_frame_10x.navigation.epochs.views.epoch_data_style = (function day8$re_frame_10x$navigation$epochs$views$epoch_data_style(ambiance){
return day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),factory_name50698_50776,day8.re_frame_10x.navigation.epochs.views.epoch_data_style_factory$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ambiance], null));
});
day8.re_frame_10x.navigation.epochs.views.epoch = (function day8$re_frame_10x$navigation$epochs$views$epoch(){
var hover_QMARK_ = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var active_QMARK_ = day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
if(cljs.core.truth_(cljs.core.deref(active_QMARK_))){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.dom_node(this$).scrollIntoView();
} else {
return null;
}
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),(function (this$){
if(cljs.core.truth_(cljs.core.deref(active_QMARK_))){
return day8.re_frame_10x.inlined_deps.reagent.v1v0v0.reagent.dom.dom_node(this$).scrollIntoView();
} else {
return null;
}
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (event,id){
var ambiance = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ambiance","day8.re-frame-10x.panels.settings.subs/ambiance",-230258012)], null)));
var current_id = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","selected-epoch-id","day8.re-frame-10x.navigation.epochs.subs/selected-epoch-id",279200032)], null)));
cljs.core.reset_BANG_(active_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current_id));

return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.h_box,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.navigation.epochs.views.epoch_style(ambiance,cljs.core.deref(active_QMARK_)),new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"min-height","min-height",398480837),day8.re_frame_10x.styles.gs_19s,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(cljs.core.deref(active_QMARK_))){
return null;
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","load","day8.re-frame-10x.navigation.epochs.events/load",1738587584),id], null));
}
}),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),(function (){
return cljs.core.reset_BANG_(hover_QMARK_,true);
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return cljs.core.reset_BANG_(hover_QMARK_,false);
})], null),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.navigation.epochs.views.epoch_chevron_style(ambiance,cljs.core.deref(active_QMARK_),cljs.core.deref(hover_QMARK_)),new cljs.core.Keyword(null,"height","height",1025178622),day8.re_frame_10x.styles.gs_19s,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.chevron_right,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),"17px"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),day8.re_frame_10x.styles.gs_2s], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.box,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.navigation.epochs.views.epoch_data_style(ambiance),new cljs.core.Keyword(null,"min-height","min-height",398480837),day8.re_frame_10x.styles.gs_19s,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.cljs_devtools.simple_render,event,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null)], null)], null)], null)], null);
})], null));
});
day8.re_frame_10x.navigation.epochs.views.epochs_style_factory$ = (function day8$re_frame_10x$navigation$epochs$views$epochs_style_factory$(style_name50720,params50721,ambiance){
var base_style50725 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"overflow-y","overflow-y",-1436589285),new cljs.core.Keyword(null,"auto","auto",-566279492)], null)], null);
var key__49812__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(cljs.core.first(base_style50725)));
var name50724 = (function (){var fexpr__50726 = new cljs.core.Var(function(){return day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.util.build_style_name;},new cljs.core.Symbol("day8.re-frame-10x.inlined-deps.spade.v1v1v0.spade.util","build-style-name","day8.re-frame-10x.inlined-deps.spade.v1v1v0.spade.util/build-style-name",1924410658,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"day8.re-frame-10x.inlined-deps.spade.v1v1v0.spade.util","day8.re-frame-10x.inlined-deps.spade.v1v1v0.spade.util",1310758620,null),new cljs.core.Symbol(null,"build-style-name","build-style-name",-1171118707,null),"day8/re_frame_10x/inlined_deps/spade/v1v1v0/spade/util.cljc",23,1,36,36,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"style-key","style-key",1072873135,null),new cljs.core.Symbol(null,"params","params",-1943919534,null)], null)),null,(cljs.core.truth_(day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.util.build_style_name)?day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.util.build_style_name.cljs$lang$test:null)]));
return (fexpr__50726.cljs$core$IFn$_invoke$arity$3 ? fexpr__50726.cljs$core$IFn$_invoke$arity$3(style_name50720,key__49812__auto__,params50721) : fexpr__50726.call(null,style_name50720,key__49812__auto__,params50721));
})();
var style50723 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name50724)].join('')], null),base_style50725);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"css","css",1135045163),day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime.compile_css(style50723),new cljs.core.Keyword(null,"name","name",1843675177),name50724,new cljs.core.Keyword(null,"composes","composes",-378837833),day8.re_frame_10x.styles.background(ambiance)], null);
});

var factory_name50722_50777 = day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.util.factory__GT_name(day8.re_frame_10x.navigation.epochs.views.epochs_style_factory$);
day8.re_frame_10x.navigation.epochs.views.epochs_style = (function day8$re_frame_10x$navigation$epochs$views$epochs_style(ambiance){
return day8.re_frame_10x.inlined_deps.spade.v1v1v0.spade.runtime.ensure_style_BANG_(new cljs.core.Keyword(null,"class","class",-2030961996),factory_name50722_50777,day8.re_frame_10x.navigation.epochs.views.epochs_style_factory$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ambiance], null));
});
day8.re_frame_10x.navigation.epochs.views.epochs = (function day8$re_frame_10x$navigation$epochs$views$epochs(){
var ambiance = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ambiance","day8.re-frame-10x.panels.settings.subs/ambiance",-230258012)], null)));
var all_events = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","events-by-id","day8.re-frame-10x.navigation.epochs.subs/events-by-id",-1071313616)], null)));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),day8.re_frame_10x.navigation.epochs.views.epochs_style(ambiance),new cljs.core.Keyword(null,"height","height",1025178622),day8.re_frame_10x.styles.gs_131s,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),day8.re_frame_10x.styles.gs_2s], null)], null),(function (){var iter__4611__auto__ = (function day8$re_frame_10x$navigation$epochs$views$epochs_$_iter__50740(s__50741){
return (new cljs.core.LazySeq(null,(function (){
var s__50741__$1 = s__50741;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__50741__$1);
if(temp__5735__auto__){
var s__50741__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__50741__$2)){
var c__4609__auto__ = cljs.core.chunk_first(s__50741__$2);
var size__4610__auto__ = cljs.core.count(c__4609__auto__);
var b__50743 = cljs.core.chunk_buffer(size__4610__auto__);
if((function (){var i__50742 = (0);
while(true){
if((i__50742 < size__4610__auto__)){
var vec__50746 = cljs.core._nth(c__4609__auto__,i__50742);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50746,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50746,(1),null);
if(cljs.core.truth_(cljs.core.not_empty(event))){
cljs.core.chunk_append(b__50743,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.navigation.epochs.views.epoch,event,id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),day8.re_frame_10x.styles.gs_2s], null)], null));

var G__50782 = (i__50742 + (1));
i__50742 = G__50782;
continue;
} else {
var G__50783 = (i__50742 + (1));
i__50742 = G__50783;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__50743),day8$re_frame_10x$navigation$epochs$views$epochs_$_iter__50740(cljs.core.chunk_rest(s__50741__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__50743),null);
}
} else {
var vec__50752 = cljs.core.first(s__50741__$2);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50752,(0),null);
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50752,(1),null);
if(cljs.core.truth_(cljs.core.not_empty(event))){
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.navigation.epochs.views.epoch,event,id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.gap_f,new cljs.core.Keyword(null,"size","size",1098693007),day8.re_frame_10x.styles.gs_2s], null)], null),day8$re_frame_10x$navigation$epochs$views$epochs_$_iter__50740(cljs.core.rest(s__50741__$2)));
} else {
var G__50784 = cljs.core.rest(s__50741__$2);
s__50741__$1 = G__50784;
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
return iter__4611__auto__(cljs.core.reverse(all_events));
})())], null);
});
day8.re_frame_10x.navigation.epochs.views.prev_button = (function day8$re_frame_10x$navigation$epochs$views$prev_button(){
var older_epochs_available_QMARK_ = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","older-epochs-available?","day8.re-frame-10x.navigation.epochs.subs/older-epochs-available?",1764549111)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.buttons.icon,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.arrow_left], null),new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(older_epochs_available_QMARK_)?"Previous epoch":"There are no previous epochs"),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core.not(older_epochs_available_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","previous","day8.re-frame-10x.navigation.epochs.events/previous",2061328788)], null));
})], null)], null);
});
day8.re_frame_10x.navigation.epochs.views.next_button = (function day8$re_frame_10x$navigation$epochs$views$next_button(){
var newer_epochs_available_QMARK_ = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","newer-epochs-available?","day8.re-frame-10x.navigation.epochs.subs/newer-epochs-available?",214739263)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.buttons.icon,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.arrow_right], null),new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(newer_epochs_available_QMARK_)?"Next epoch":"There are no later epochs"),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core.not(newer_epochs_available_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","next","day8.re-frame-10x.navigation.epochs.events/next",1388476595)], null));
})], null)], null);
});
day8.re_frame_10x.navigation.epochs.views.latest_button = (function day8$re_frame_10x$navigation$epochs$views$latest_button(){
var newer_epochs_available_QMARK_ = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.subs","newer-epochs-available?","day8.re-frame-10x.navigation.epochs.subs/newer-epochs-available?",214739263)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.buttons.icon,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.skip_next], null),new cljs.core.Keyword(null,"title","title",636505583),(cljs.core.truth_(newer_epochs_available_QMARK_)?"Skip to latest epoch":"Already showig latest epoch"),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),cljs.core.not(newer_epochs_available_QMARK_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.navigation.epochs.events","most-recent","day8.re-frame-10x.navigation.epochs.events/most-recent",-1146993774)], null));
})], null)], null);
});
day8.re_frame_10x.navigation.epochs.views.left_buttons = (function day8$re_frame_10x$navigation$epochs$views$left_buttons(){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.re_com.h_box,new cljs.core.Keyword(null,"size","size",1098693007),"1",new cljs.core.Keyword(null,"gap","gap",80255254),day8.re_frame_10x.styles.gs_12s,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.navigation.epochs.views.prev_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.navigation.epochs.views.next_button], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.navigation.epochs.views.latest_button], null)], null)], null);
});
day8.re_frame_10x.navigation.epochs.views.ambiance_button = (function day8$re_frame_10x$navigation$epochs$views$ambiance_button(){
var ambiance = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.subs","ambiance","day8.re-frame-10x.panels.settings.subs/ambiance",-230258012)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.components.buttons.icon,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ambiance,new cljs.core.Keyword(null,"bright","bright",-1876684577)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.light_mode], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.material.dark_mode], null)),new cljs.core.Keyword(null,"title","title",636505583),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ambiance,new cljs.core.Keyword(null,"bright","bright",-1876684577)))?"Dark ambiance":"Bright ambiance"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return day8.re_frame_10x.inlined_deps.re_frame.v1v1v2.re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("day8.re-frame-10x.panels.settings.events","set-ambiance","day8.re-frame-10x.panels.settings.events/set-ambiance",1852620827),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ambiance,new cljs.core.Keyword(null,"bright","bright",-1876684577)))?new cljs.core.Keyword(null,"dark","dark",1818973999):new cljs.core.Keyword(null,"bright","bright",-1876684577))], null));
})], null)], null);
});

//# sourceMappingURL=day8.re_frame_10x.navigation.epochs.views.js.map
