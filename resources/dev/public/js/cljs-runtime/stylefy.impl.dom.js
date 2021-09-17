goog.provide('stylefy.impl.dom');
stylefy.impl.dom.stylefy_node_id = "#_stylefy-styles_";
stylefy.impl.dom.stylefy_constant_node_id = "#_stylefy-constant-styles_";
stylefy.impl.dom.stylefy_base_node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
stylefy.impl.dom.stylefy_instance_id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
stylefy.impl.dom.uninitialised_styles = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"font-face","font-face",-504453235),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"tag","tag",-1290361223),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.PersistentVector.EMPTY], null));
stylefy.impl.dom.init_multi_instance = (function stylefy$impl$dom$init_multi_instance(p__71621){
var map__71622 = p__71621;
var map__71622__$1 = cljs.core.__destructure_map(map__71622);
var _options = map__71622__$1;
var multi_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__71622__$1,new cljs.core.Keyword(null,"multi-instance","multi-instance",-1525956512));
var base_node = new cljs.core.Keyword(null,"base-node","base-node",-275497090).cljs$core$IFn$_invoke$arity$1(multi_instance);
var instance_id = new cljs.core.Keyword(null,"instance-id","instance-id",951361263).cljs$core$IFn$_invoke$arity$1(multi_instance);
if((((instance_id == null)) || (typeof instance_id === 'string'))){
} else {
throw (new Error(["Assert failed: ",["instance-id must be string. Got: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([base_node,instance_id], 0))].join(''),"\n","(or (nil? instance-id) (string? instance-id))"].join('')));
}

cljs.core.reset_BANG_(stylefy.impl.dom.stylefy_base_node,base_node);

return cljs.core.reset_BANG_(stylefy.impl.dom.stylefy_instance_id,instance_id);
});
stylefy.impl.dom.get_stylefy_node = (function stylefy$impl$dom$get_stylefy_node(node_id,base_node,instance_id){
var final_id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_id),(cljs.core.truth_(instance_id)?cljs.core.str.cljs$core$IFn$_invoke$arity$1(instance_id):null)].join('');
if((base_node == null)){
return document.querySelector(dommy.core.selector(final_id));
} else {
return base_node.querySelector(dommy.core.selector(final_id));
}
});

/**
 * @interface
 */
stylefy.impl.dom.Dom = function(){};

var stylefy$impl$dom$Dom$load_uninitialised_styles$dyn_72131 = (function (this$,uninitialised_styles){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (stylefy.impl.dom.load_uninitialised_styles[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,uninitialised_styles) : m__4510__auto__.call(null,this$,uninitialised_styles));
} else {
var m__4508__auto__ = (stylefy.impl.dom.load_uninitialised_styles["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,uninitialised_styles) : m__4508__auto__.call(null,this$,uninitialised_styles));
} else {
throw cljs.core.missing_protocol("Dom.load-uninitialised-styles",this$);
}
}
});
stylefy.impl.dom.load_uninitialised_styles = (function stylefy$impl$dom$load_uninitialised_styles(this$,uninitialised_styles){
if((((!((this$ == null)))) && ((!((this$.stylefy$impl$dom$Dom$load_uninitialised_styles$arity$2 == null)))))){
return this$.stylefy$impl$dom$Dom$load_uninitialised_styles$arity$2(this$,uninitialised_styles);
} else {
return stylefy$impl$dom$Dom$load_uninitialised_styles$dyn_72131(this$,uninitialised_styles);
}
});

var stylefy$impl$dom$Dom$load_cache$dyn_72132 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (stylefy.impl.dom.load_cache[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (stylefy.impl.dom.load_cache["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Dom.load-cache",this$);
}
}
});
stylefy.impl.dom.load_cache = (function stylefy$impl$dom$load_cache(this$){
if((((!((this$ == null)))) && ((!((this$.stylefy$impl$dom$Dom$load_cache$arity$1 == null)))))){
return this$.stylefy$impl$dom$Dom$load_cache$arity$1(this$);
} else {
return stylefy$impl$dom$Dom$load_cache$dyn_72132(this$);
}
});

var stylefy$impl$dom$Dom$add_style$dyn_72133 = (function (this$,style){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (stylefy.impl.dom.add_style[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,style) : m__4510__auto__.call(null,this$,style));
} else {
var m__4508__auto__ = (stylefy.impl.dom.add_style["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,style) : m__4508__auto__.call(null,this$,style));
} else {
throw cljs.core.missing_protocol("Dom.add-style",this$);
}
}
});
stylefy.impl.dom.add_style = (function stylefy$impl$dom$add_style(this$,style){
if((((!((this$ == null)))) && ((!((this$.stylefy$impl$dom$Dom$add_style$arity$2 == null)))))){
return this$.stylefy$impl$dom$Dom$add_style$arity$2(this$,style);
} else {
return stylefy$impl$dom$Dom$add_style$dyn_72133(this$,style);
}
});

var stylefy$impl$dom$Dom$add_class$dyn_72134 = (function (this$,class_as_css){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (stylefy.impl.dom.add_class[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,class_as_css) : m__4510__auto__.call(null,this$,class_as_css));
} else {
var m__4508__auto__ = (stylefy.impl.dom.add_class["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,class_as_css) : m__4508__auto__.call(null,this$,class_as_css));
} else {
throw cljs.core.missing_protocol("Dom.add-class",this$);
}
}
});
stylefy.impl.dom.add_class = (function stylefy$impl$dom$add_class(this$,class_as_css){
if((((!((this$ == null)))) && ((!((this$.stylefy$impl$dom$Dom$add_class$arity$2 == null)))))){
return this$.stylefy$impl$dom$Dom$add_class$arity$2(this$,class_as_css);
} else {
return stylefy$impl$dom$Dom$add_class$dyn_72134(this$,class_as_css);
}
});

var stylefy$impl$dom$Dom$add_tag$dyn_72135 = (function (this$,tag_as_css){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (stylefy.impl.dom.add_tag[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,tag_as_css) : m__4510__auto__.call(null,this$,tag_as_css));
} else {
var m__4508__auto__ = (stylefy.impl.dom.add_tag["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,tag_as_css) : m__4508__auto__.call(null,this$,tag_as_css));
} else {
throw cljs.core.missing_protocol("Dom.add-tag",this$);
}
}
});
stylefy.impl.dom.add_tag = (function stylefy$impl$dom$add_tag(this$,tag_as_css){
if((((!((this$ == null)))) && ((!((this$.stylefy$impl$dom$Dom$add_tag$arity$2 == null)))))){
return this$.stylefy$impl$dom$Dom$add_tag$arity$2(this$,tag_as_css);
} else {
return stylefy$impl$dom$Dom$add_tag$dyn_72135(this$,tag_as_css);
}
});

var stylefy$impl$dom$Dom$add_font_face$dyn_72136 = (function (this$,font_face_as_css){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (stylefy.impl.dom.add_font_face[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,font_face_as_css) : m__4510__auto__.call(null,this$,font_face_as_css));
} else {
var m__4508__auto__ = (stylefy.impl.dom.add_font_face["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,font_face_as_css) : m__4508__auto__.call(null,this$,font_face_as_css));
} else {
throw cljs.core.missing_protocol("Dom.add-font-face",this$);
}
}
});
stylefy.impl.dom.add_font_face = (function stylefy$impl$dom$add_font_face(this$,font_face_as_css){
if((((!((this$ == null)))) && ((!((this$.stylefy$impl$dom$Dom$add_font_face$arity$2 == null)))))){
return this$.stylefy$impl$dom$Dom$add_font_face$arity$2(this$,font_face_as_css);
} else {
return stylefy$impl$dom$Dom$add_font_face$dyn_72136(this$,font_face_as_css);
}
});

var stylefy$impl$dom$Dom$add_keyframes$dyn_72139 = (function (this$,identifier,keyframes_as_css){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (stylefy.impl.dom.add_keyframes[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(this$,identifier,keyframes_as_css) : m__4510__auto__.call(null,this$,identifier,keyframes_as_css));
} else {
var m__4508__auto__ = (stylefy.impl.dom.add_keyframes["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(this$,identifier,keyframes_as_css) : m__4508__auto__.call(null,this$,identifier,keyframes_as_css));
} else {
throw cljs.core.missing_protocol("Dom.add-keyframes",this$);
}
}
});
stylefy.impl.dom.add_keyframes = (function stylefy$impl$dom$add_keyframes(this$,identifier,keyframes_as_css){
if((((!((this$ == null)))) && ((!((this$.stylefy$impl$dom$Dom$add_keyframes$arity$3 == null)))))){
return this$.stylefy$impl$dom$Dom$add_keyframes$arity$3(this$,identifier,keyframes_as_css);
} else {
return stylefy$impl$dom$Dom$add_keyframes$dyn_72139(this$,identifier,keyframes_as_css);
}
});

var stylefy$impl$dom$Dom$update_dom$dyn_72145 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (stylefy.impl.dom.update_dom[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (stylefy.impl.dom.update_dom["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Dom.update-dom",this$);
}
}
});
stylefy.impl.dom.update_dom = (function stylefy$impl$dom$update_dom(this$){
if((((!((this$ == null)))) && ((!((this$.stylefy$impl$dom$Dom$update_dom$arity$1 == null)))))){
return this$.stylefy$impl$dom$Dom$update_dom$arity$1(this$);
} else {
return stylefy$impl$dom$Dom$update_dom$dyn_72145(this$);
}
});

var stylefy$impl$dom$Dom$update_dom_if_needed$dyn_72148 = (function (this$){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (stylefy.impl.dom.update_dom_if_needed[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4510__auto__.call(null,this$));
} else {
var m__4508__auto__ = (stylefy.impl.dom.update_dom_if_needed["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4508__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Dom.update-dom-if-needed",this$);
}
}
});
stylefy.impl.dom.update_dom_if_needed = (function stylefy$impl$dom$update_dom_if_needed(this$){
if((((!((this$ == null)))) && ((!((this$.stylefy$impl$dom$Dom$update_dom_if_needed$arity$1 == null)))))){
return this$.stylefy$impl$dom$Dom$update_dom_if_needed$arity$1(this$);
} else {
return stylefy$impl$dom$Dom$update_dom_if_needed$dyn_72148(this$);
}
});

var stylefy$impl$dom$Dom$style_in_dom_QMARK_$dyn_72149 = (function (this$,style_hash){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (stylefy.impl.dom.style_in_dom_QMARK_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,style_hash) : m__4510__auto__.call(null,this$,style_hash));
} else {
var m__4508__auto__ = (stylefy.impl.dom.style_in_dom_QMARK_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,style_hash) : m__4508__auto__.call(null,this$,style_hash));
} else {
throw cljs.core.missing_protocol("Dom.style-in-dom?",this$);
}
}
});
stylefy.impl.dom.style_in_dom_QMARK_ = (function stylefy$impl$dom$style_in_dom_QMARK_(this$,style_hash){
if((((!((this$ == null)))) && ((!((this$.stylefy$impl$dom$Dom$style_in_dom_QMARK_$arity$2 == null)))))){
return this$.stylefy$impl$dom$Dom$style_in_dom_QMARK_$arity$2(this$,style_hash);
} else {
return stylefy$impl$dom$Dom$style_in_dom_QMARK_$dyn_72149(this$,style_hash);
}
});

var stylefy$impl$dom$Dom$style_by_hash$dyn_72152 = (function (this$,style_hash){
var x__4509__auto__ = (((this$ == null))?null:this$);
var m__4510__auto__ = (stylefy.impl.dom.style_by_hash[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(this$,style_hash) : m__4510__auto__.call(null,this$,style_hash));
} else {
var m__4508__auto__ = (stylefy.impl.dom.style_by_hash["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(this$,style_hash) : m__4508__auto__.call(null,this$,style_hash));
} else {
throw cljs.core.missing_protocol("Dom.style-by-hash",this$);
}
}
});
stylefy.impl.dom.style_by_hash = (function stylefy$impl$dom$style_by_hash(this$,style_hash){
if((((!((this$ == null)))) && ((!((this$.stylefy$impl$dom$Dom$style_by_hash$arity$2 == null)))))){
return this$.stylefy$impl$dom$Dom$style_by_hash$arity$2(this$,style_hash);
} else {
return stylefy$impl$dom$Dom$style_by_hash$dyn_72152(this$,style_hash);
}
});

stylefy.impl.dom.save_uninitialised_style = (function stylefy$impl$dom$save_uninitialised_style(key,style_as_css){
return cljs.core.reset_BANG_(stylefy.impl.dom.uninitialised_styles,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(stylefy.impl.dom.uninitialised_styles),key,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var G__71908 = cljs.core.deref(stylefy.impl.dom.uninitialised_styles);
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__71908) : key.call(null,G__71908));
})(),style_as_css)));
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
stylefy.impl.dom.UninitialisedDom = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(stylefy.impl.dom.UninitialisedDom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4461__auto__,k__4462__auto__){
var self__ = this;
var this__4461__auto____$1 = this;
return this__4461__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4462__auto__,null);
}));

(stylefy.impl.dom.UninitialisedDom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4463__auto__,k71910,else__4464__auto__){
var self__ = this;
var this__4463__auto____$1 = this;
var G__71938 = k71910;
switch (G__71938) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k71910,else__4464__auto__);

}
}));

(stylefy.impl.dom.UninitialisedDom.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4481__auto__,f__4482__auto__,init__4483__auto__){
var self__ = this;
var this__4481__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4484__auto__,p__71954){
var vec__71955 = p__71954;
var k__4485__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71955,(0),null);
var v__4486__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71955,(1),null);
return (f__4482__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4482__auto__.cljs$core$IFn$_invoke$arity$3(ret__4484__auto__,k__4485__auto__,v__4486__auto__) : f__4482__auto__.call(null,ret__4484__auto__,k__4485__auto__,v__4486__auto__));
}),init__4483__auto__,this__4481__auto____$1);
}));

(stylefy.impl.dom.UninitialisedDom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4476__auto__,writer__4477__auto__,opts__4478__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
var pr_pair__4479__auto__ = (function (keyval__4480__auto__){
return cljs.core.pr_sequential_writer(writer__4477__auto__,cljs.core.pr_writer,""," ","",opts__4478__auto__,keyval__4480__auto__);
});
return cljs.core.pr_sequential_writer(writer__4477__auto__,pr_pair__4479__auto__,"#stylefy.impl.dom.UninitialisedDom{",", ","}",opts__4478__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(stylefy.impl.dom.UninitialisedDom.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__71909){
var self__ = this;
var G__71909__$1 = this;
return (new cljs.core.RecordIter((0),G__71909__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(stylefy.impl.dom.UninitialisedDom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4459__auto__){
var self__ = this;
var this__4459__auto____$1 = this;
return self__.__meta;
}));

(stylefy.impl.dom.UninitialisedDom.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4456__auto__){
var self__ = this;
var this__4456__auto____$1 = this;
return (new stylefy.impl.dom.UninitialisedDom(self__.__meta,self__.__extmap,self__.__hash));
}));

(stylefy.impl.dom.UninitialisedDom.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4465__auto__){
var self__ = this;
var this__4465__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(stylefy.impl.dom.UninitialisedDom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4457__auto__){
var self__ = this;
var this__4457__auto____$1 = this;
var h__4319__auto__ = self__.__hash;
if((!((h__4319__auto__ == null)))){
return h__4319__auto__;
} else {
var h__4319__auto____$1 = (function (coll__4458__auto__){
return (938475527 ^ cljs.core.hash_unordered_coll(coll__4458__auto__));
})(this__4457__auto____$1);
(self__.__hash = h__4319__auto____$1);

return h__4319__auto____$1;
}
}));

(stylefy.impl.dom.UninitialisedDom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this71911,other71912){
var self__ = this;
var this71911__$1 = this;
return (((!((other71912 == null)))) && ((((this71911__$1.constructor === other71912.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this71911__$1.__extmap,other71912.__extmap)))));
}));

(stylefy.impl.dom.UninitialisedDom.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4471__auto__,k__4472__auto__){
var self__ = this;
var this__4471__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4472__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4471__auto____$1),self__.__meta),k__4472__auto__);
} else {
return (new stylefy.impl.dom.UninitialisedDom(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4472__auto__)),null));
}
}));

(stylefy.impl.dom.UninitialisedDom.prototype.stylefy$impl$dom$Dom$ = cljs.core.PROTOCOL_SENTINEL);

(stylefy.impl.dom.UninitialisedDom.prototype.stylefy$impl$dom$Dom$add_tag$arity$2 = (function (this$,tag_as_css){
var self__ = this;
var this$__$1 = this;
return stylefy.impl.dom.save_uninitialised_style(new cljs.core.Keyword(null,"tag","tag",-1290361223),tag_as_css);
}));

(stylefy.impl.dom.UninitialisedDom.prototype.stylefy$impl$dom$Dom$add_style$arity$2 = (function (this$,style){
var self__ = this;
var this$__$1 = this;
return stylefy.impl.dom.save_uninitialised_style(new cljs.core.Keyword(null,"style","style",-496642736),style);
}));

(stylefy.impl.dom.UninitialisedDom.prototype.stylefy$impl$dom$Dom$style_in_dom_QMARK_$arity$2 = (function (this$,style_hash){
var self__ = this;
var this$__$1 = this;
return false;
}));

(stylefy.impl.dom.UninitialisedDom.prototype.stylefy$impl$dom$Dom$add_font_face$arity$2 = (function (this$,font_face_as_css){
var self__ = this;
var this$__$1 = this;
return stylefy.impl.dom.save_uninitialised_style(new cljs.core.Keyword(null,"font-face","font-face",-504453235),font_face_as_css);
}));

(stylefy.impl.dom.UninitialisedDom.prototype.stylefy$impl$dom$Dom$load_cache$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
}));

(stylefy.impl.dom.UninitialisedDom.prototype.stylefy$impl$dom$Dom$add_keyframes$arity$3 = (function (this$,identifier,keyframes_as_css){
var self__ = this;
var this$__$1 = this;
return stylefy.impl.dom.save_uninitialised_style(new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [identifier,keyframes_as_css], null));
}));

(stylefy.impl.dom.UninitialisedDom.prototype.stylefy$impl$dom$Dom$update_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
}));

(stylefy.impl.dom.UninitialisedDom.prototype.stylefy$impl$dom$Dom$update_dom_if_needed$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return null;
}));

(stylefy.impl.dom.UninitialisedDom.prototype.stylefy$impl$dom$Dom$load_uninitialised_styles$arity$2 = (function (this$,uninitialised_styles){
var self__ = this;
var this$__$1 = this;
return null;
}));

(stylefy.impl.dom.UninitialisedDom.prototype.stylefy$impl$dom$Dom$style_by_hash$arity$2 = (function (this$,style_hash){
var self__ = this;
var this$__$1 = this;
return null;
}));

(stylefy.impl.dom.UninitialisedDom.prototype.stylefy$impl$dom$Dom$add_class$arity$2 = (function (this$,class_as_css){
var self__ = this;
var this$__$1 = this;
return stylefy.impl.dom.save_uninitialised_style(new cljs.core.Keyword(null,"class","class",-2030961996),class_as_css);
}));

(stylefy.impl.dom.UninitialisedDom.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4468__auto__,k71910){
var self__ = this;
var this__4468__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k71910);
}));

(stylefy.impl.dom.UninitialisedDom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4469__auto__,k__4470__auto__,G__71909){
var self__ = this;
var this__4469__auto____$1 = this;
var pred__72127 = cljs.core.keyword_identical_QMARK_;
var expr__72128 = k__4470__auto__;
return (new stylefy.impl.dom.UninitialisedDom(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4470__auto__,G__71909),null));
}));

(stylefy.impl.dom.UninitialisedDom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4474__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(stylefy.impl.dom.UninitialisedDom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4460__auto__,G__71909){
var self__ = this;
var this__4460__auto____$1 = this;
return (new stylefy.impl.dom.UninitialisedDom(G__71909,self__.__extmap,self__.__hash));
}));

(stylefy.impl.dom.UninitialisedDom.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4466__auto__,entry__4467__auto__){
var self__ = this;
var this__4466__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4467__auto__)){
return this__4466__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4467__auto__,(0)),cljs.core._nth(entry__4467__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4466__auto____$1,entry__4467__auto__);
}
}));

(stylefy.impl.dom.UninitialisedDom.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(stylefy.impl.dom.UninitialisedDom.cljs$lang$type = true);

(stylefy.impl.dom.UninitialisedDom.cljs$lang$ctorPrSeq = (function (this__4505__auto__){
return (new cljs.core.List(null,"stylefy.impl.dom/UninitialisedDom",null,(1),null));
}));

(stylefy.impl.dom.UninitialisedDom.cljs$lang$ctorPrWriter = (function (this__4505__auto__,writer__4506__auto__){
return cljs.core._write(writer__4506__auto__,"stylefy.impl.dom/UninitialisedDom");
}));

/**
 * Positional factory function for stylefy.impl.dom/UninitialisedDom.
 */
stylefy.impl.dom.__GT_UninitialisedDom = (function stylefy$impl$dom$__GT_UninitialisedDom(){
return (new stylefy.impl.dom.UninitialisedDom(null,null,null));
});

/**
 * Factory function for stylefy.impl.dom/UninitialisedDom, taking a map of keywords to field values.
 */
stylefy.impl.dom.map__GT_UninitialisedDom = (function stylefy$impl$dom$map__GT_UninitialisedDom(G__71916){
var extmap__4501__auto__ = (function (){var G__72130 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__71916);
if(cljs.core.record_QMARK_(G__71916)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__72130);
} else {
return G__72130;
}
})();
return (new stylefy.impl.dom.UninitialisedDom(null,cljs.core.not_empty(extmap__4501__auto__),null));
});

stylefy.impl.dom.dom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(stylefy.impl.dom.__GT_UninitialisedDom());

//# sourceMappingURL=stylefy.impl.dom.js.map
