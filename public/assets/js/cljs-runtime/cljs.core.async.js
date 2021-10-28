goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__47216 = arguments.length;
switch (G__47216) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47217 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47217 = (function (f,blockable,meta47218){
this.f = f;
this.blockable = blockable;
this.meta47218 = meta47218;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47217.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47219,meta47218__$1){
var self__ = this;
var _47219__$1 = this;
return (new cljs.core.async.t_cljs$core$async47217(self__.f,self__.blockable,meta47218__$1));
}));

(cljs.core.async.t_cljs$core$async47217.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47219){
var self__ = this;
var _47219__$1 = this;
return self__.meta47218;
}));

(cljs.core.async.t_cljs$core$async47217.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47217.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47217.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async47217.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async47217.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta47218","meta47218",-945454690,null)], null);
}));

(cljs.core.async.t_cljs$core$async47217.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47217.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47217");

(cljs.core.async.t_cljs$core$async47217.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async47217");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47217.
 */
cljs.core.async.__GT_t_cljs$core$async47217 = (function cljs$core$async$__GT_t_cljs$core$async47217(f__$1,blockable__$1,meta47218){
return (new cljs.core.async.t_cljs$core$async47217(f__$1,blockable__$1,meta47218));
});

}

return (new cljs.core.async.t_cljs$core$async47217(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__47229 = arguments.length;
switch (G__47229) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__47235 = arguments.length;
switch (G__47235) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__47237 = arguments.length;
switch (G__47237) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_48665 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48665) : fn1.call(null,val_48665));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_48665) : fn1.call(null,val_48665));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__47239 = arguments.length;
switch (G__47239) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4695__auto___48669 = n;
var x_48670 = (0);
while(true){
if((x_48670 < n__4695__auto___48669)){
(a[x_48670] = x_48670);

var G__48671 = (x_48670 + (1));
x_48670 = G__48671;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47240 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47240 = (function (flag,meta47241){
this.flag = flag;
this.meta47241 = meta47241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47242,meta47241__$1){
var self__ = this;
var _47242__$1 = this;
return (new cljs.core.async.t_cljs$core$async47240(self__.flag,meta47241__$1));
}));

(cljs.core.async.t_cljs$core$async47240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47242){
var self__ = this;
var _47242__$1 = this;
return self__.meta47241;
}));

(cljs.core.async.t_cljs$core$async47240.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47240.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47240.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47240.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async47240.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta47241","meta47241",2124486724,null)], null);
}));

(cljs.core.async.t_cljs$core$async47240.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47240.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47240");

(cljs.core.async.t_cljs$core$async47240.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async47240");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47240.
 */
cljs.core.async.__GT_t_cljs$core$async47240 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async47240(flag__$1,meta47241){
return (new cljs.core.async.t_cljs$core$async47240(flag__$1,meta47241));
});

}

return (new cljs.core.async.t_cljs$core$async47240(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47243 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47243 = (function (flag,cb,meta47244){
this.flag = flag;
this.cb = cb;
this.meta47244 = meta47244;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47245,meta47244__$1){
var self__ = this;
var _47245__$1 = this;
return (new cljs.core.async.t_cljs$core$async47243(self__.flag,self__.cb,meta47244__$1));
}));

(cljs.core.async.t_cljs$core$async47243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47245){
var self__ = this;
var _47245__$1 = this;
return self__.meta47244;
}));

(cljs.core.async.t_cljs$core$async47243.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47243.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async47243.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47243.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async47243.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta47244","meta47244",1343604110,null)], null);
}));

(cljs.core.async.t_cljs$core$async47243.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47243.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47243");

(cljs.core.async.t_cljs$core$async47243.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async47243");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47243.
 */
cljs.core.async.__GT_t_cljs$core$async47243 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async47243(flag__$1,cb__$1,meta47244){
return (new cljs.core.async.t_cljs$core$async47243(flag__$1,cb__$1,meta47244));
});

}

return (new cljs.core.async.t_cljs$core$async47243(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47246_SHARP_){
var G__47248 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47246_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47248) : fret.call(null,G__47248));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__47247_SHARP_){
var G__47249 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__47247_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__47249) : fret.call(null,G__47249));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4212__auto__ = wport;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return port;
}
})()], null));
} else {
var G__48676 = (i + (1));
i = G__48676;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4212__auto__ = ret;
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4210__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4210__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4210__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___48677 = arguments.length;
var i__4819__auto___48678 = (0);
while(true){
if((i__4819__auto___48678 < len__4818__auto___48677)){
args__4824__auto__.push((arguments[i__4819__auto___48678]));

var G__48679 = (i__4819__auto___48678 + (1));
i__4819__auto___48678 = G__48679;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__47252){
var map__47253 = p__47252;
var map__47253__$1 = cljs.core.__destructure_map(map__47253);
var opts = map__47253__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq47250){
var G__47251 = cljs.core.first(seq47250);
var seq47250__$1 = cljs.core.next(seq47250);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47251,seq47250__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__47255 = arguments.length;
switch (G__47255) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__47148__auto___48681 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47149__auto__ = (function (){var switch__47065__auto__ = (function (state_47279){
var state_val_47280 = (state_47279[(1)]);
if((state_val_47280 === (7))){
var inst_47275 = (state_47279[(2)]);
var state_47279__$1 = state_47279;
var statearr_47281_48682 = state_47279__$1;
(statearr_47281_48682[(2)] = inst_47275);

(statearr_47281_48682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47280 === (1))){
var state_47279__$1 = state_47279;
var statearr_47282_48683 = state_47279__$1;
(statearr_47282_48683[(2)] = null);

(statearr_47282_48683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47280 === (4))){
var inst_47258 = (state_47279[(7)]);
var inst_47258__$1 = (state_47279[(2)]);
var inst_47259 = (inst_47258__$1 == null);
var state_47279__$1 = (function (){var statearr_47283 = state_47279;
(statearr_47283[(7)] = inst_47258__$1);

return statearr_47283;
})();
if(cljs.core.truth_(inst_47259)){
var statearr_47284_48684 = state_47279__$1;
(statearr_47284_48684[(1)] = (5));

} else {
var statearr_47285_48685 = state_47279__$1;
(statearr_47285_48685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47280 === (13))){
var state_47279__$1 = state_47279;
var statearr_47286_48686 = state_47279__$1;
(statearr_47286_48686[(2)] = null);

(statearr_47286_48686[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47280 === (6))){
var inst_47258 = (state_47279[(7)]);
var state_47279__$1 = state_47279;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47279__$1,(11),to,inst_47258);
} else {
if((state_val_47280 === (3))){
var inst_47277 = (state_47279[(2)]);
var state_47279__$1 = state_47279;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47279__$1,inst_47277);
} else {
if((state_val_47280 === (12))){
var state_47279__$1 = state_47279;
var statearr_47287_48687 = state_47279__$1;
(statearr_47287_48687[(2)] = null);

(statearr_47287_48687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47280 === (2))){
var state_47279__$1 = state_47279;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47279__$1,(4),from);
} else {
if((state_val_47280 === (11))){
var inst_47268 = (state_47279[(2)]);
var state_47279__$1 = state_47279;
if(cljs.core.truth_(inst_47268)){
var statearr_47288_48688 = state_47279__$1;
(statearr_47288_48688[(1)] = (12));

} else {
var statearr_47289_48689 = state_47279__$1;
(statearr_47289_48689[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47280 === (9))){
var state_47279__$1 = state_47279;
var statearr_47290_48690 = state_47279__$1;
(statearr_47290_48690[(2)] = null);

(statearr_47290_48690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47280 === (5))){
var state_47279__$1 = state_47279;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47291_48691 = state_47279__$1;
(statearr_47291_48691[(1)] = (8));

} else {
var statearr_47292_48692 = state_47279__$1;
(statearr_47292_48692[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47280 === (14))){
var inst_47273 = (state_47279[(2)]);
var state_47279__$1 = state_47279;
var statearr_47293_48693 = state_47279__$1;
(statearr_47293_48693[(2)] = inst_47273);

(statearr_47293_48693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47280 === (10))){
var inst_47265 = (state_47279[(2)]);
var state_47279__$1 = state_47279;
var statearr_47294_48694 = state_47279__$1;
(statearr_47294_48694[(2)] = inst_47265);

(statearr_47294_48694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47280 === (8))){
var inst_47262 = cljs.core.async.close_BANG_(to);
var state_47279__$1 = state_47279;
var statearr_47295_48695 = state_47279__$1;
(statearr_47295_48695[(2)] = inst_47262);

(statearr_47295_48695[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47066__auto__ = null;
var cljs$core$async$state_machine__47066__auto____0 = (function (){
var statearr_47296 = [null,null,null,null,null,null,null,null];
(statearr_47296[(0)] = cljs$core$async$state_machine__47066__auto__);

(statearr_47296[(1)] = (1));

return statearr_47296;
});
var cljs$core$async$state_machine__47066__auto____1 = (function (state_47279){
while(true){
var ret_value__47067__auto__ = (function (){try{while(true){
var result__47068__auto__ = switch__47065__auto__(state_47279);
if(cljs.core.keyword_identical_QMARK_(result__47068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47068__auto__;
}
break;
}
}catch (e47297){var ex__47069__auto__ = e47297;
var statearr_47298_48696 = state_47279;
(statearr_47298_48696[(2)] = ex__47069__auto__);


if(cljs.core.seq((state_47279[(4)]))){
var statearr_47299_48697 = state_47279;
(statearr_47299_48697[(1)] = cljs.core.first((state_47279[(4)])));

} else {
throw ex__47069__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48698 = state_47279;
state_47279 = G__48698;
continue;
} else {
return ret_value__47067__auto__;
}
break;
}
});
cljs$core$async$state_machine__47066__auto__ = function(state_47279){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47066__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47066__auto____1.call(this,state_47279);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47066__auto____0;
cljs$core$async$state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47066__auto____1;
return cljs$core$async$state_machine__47066__auto__;
})()
})();
var state__47150__auto__ = (function (){var statearr_47300 = f__47149__auto__();
(statearr_47300[(6)] = c__47148__auto___48681);

return statearr_47300;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47150__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__47301){
var vec__47302 = p__47301;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47302,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47302,(1),null);
var job = vec__47302;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__47148__auto___48699 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47149__auto__ = (function (){var switch__47065__auto__ = (function (state_47309){
var state_val_47310 = (state_47309[(1)]);
if((state_val_47310 === (1))){
var state_47309__$1 = state_47309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47309__$1,(2),res,v);
} else {
if((state_val_47310 === (2))){
var inst_47306 = (state_47309[(2)]);
var inst_47307 = cljs.core.async.close_BANG_(res);
var state_47309__$1 = (function (){var statearr_47311 = state_47309;
(statearr_47311[(7)] = inst_47306);

return statearr_47311;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47309__$1,inst_47307);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47066__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47066__auto____0 = (function (){
var statearr_47312 = [null,null,null,null,null,null,null,null];
(statearr_47312[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47066__auto__);

(statearr_47312[(1)] = (1));

return statearr_47312;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47066__auto____1 = (function (state_47309){
while(true){
var ret_value__47067__auto__ = (function (){try{while(true){
var result__47068__auto__ = switch__47065__auto__(state_47309);
if(cljs.core.keyword_identical_QMARK_(result__47068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47068__auto__;
}
break;
}
}catch (e47313){var ex__47069__auto__ = e47313;
var statearr_47314_48700 = state_47309;
(statearr_47314_48700[(2)] = ex__47069__auto__);


if(cljs.core.seq((state_47309[(4)]))){
var statearr_47315_48701 = state_47309;
(statearr_47315_48701[(1)] = cljs.core.first((state_47309[(4)])));

} else {
throw ex__47069__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48702 = state_47309;
state_47309 = G__48702;
continue;
} else {
return ret_value__47067__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47066__auto__ = function(state_47309){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47066__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47066__auto____1.call(this,state_47309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47066__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47066__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47066__auto__;
})()
})();
var state__47150__auto__ = (function (){var statearr_47316 = f__47149__auto__();
(statearr_47316[(6)] = c__47148__auto___48699);

return statearr_47316;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47150__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__47317){
var vec__47318 = p__47317;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47318,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47318,(1),null);
var job = vec__47318;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4695__auto___48705 = n;
var __48706 = (0);
while(true){
if((__48706 < n__4695__auto___48705)){
var G__47321_48707 = type;
var G__47321_48708__$1 = (((G__47321_48707 instanceof cljs.core.Keyword))?G__47321_48707.fqn:null);
switch (G__47321_48708__$1) {
case "compute":
var c__47148__auto___48710 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48706,c__47148__auto___48710,G__47321_48707,G__47321_48708__$1,n__4695__auto___48705,jobs,results,process,async){
return (function (){
var f__47149__auto__ = (function (){var switch__47065__auto__ = ((function (__48706,c__47148__auto___48710,G__47321_48707,G__47321_48708__$1,n__4695__auto___48705,jobs,results,process,async){
return (function (state_47334){
var state_val_47335 = (state_47334[(1)]);
if((state_val_47335 === (1))){
var state_47334__$1 = state_47334;
var statearr_47336_48711 = state_47334__$1;
(statearr_47336_48711[(2)] = null);

(statearr_47336_48711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47335 === (2))){
var state_47334__$1 = state_47334;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47334__$1,(4),jobs);
} else {
if((state_val_47335 === (3))){
var inst_47332 = (state_47334[(2)]);
var state_47334__$1 = state_47334;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47334__$1,inst_47332);
} else {
if((state_val_47335 === (4))){
var inst_47324 = (state_47334[(2)]);
var inst_47325 = process(inst_47324);
var state_47334__$1 = state_47334;
if(cljs.core.truth_(inst_47325)){
var statearr_47337_48712 = state_47334__$1;
(statearr_47337_48712[(1)] = (5));

} else {
var statearr_47338_48713 = state_47334__$1;
(statearr_47338_48713[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47335 === (5))){
var state_47334__$1 = state_47334;
var statearr_47339_48714 = state_47334__$1;
(statearr_47339_48714[(2)] = null);

(statearr_47339_48714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47335 === (6))){
var state_47334__$1 = state_47334;
var statearr_47340_48715 = state_47334__$1;
(statearr_47340_48715[(2)] = null);

(statearr_47340_48715[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47335 === (7))){
var inst_47330 = (state_47334[(2)]);
var state_47334__$1 = state_47334;
var statearr_47341_48716 = state_47334__$1;
(statearr_47341_48716[(2)] = inst_47330);

(statearr_47341_48716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__48706,c__47148__auto___48710,G__47321_48707,G__47321_48708__$1,n__4695__auto___48705,jobs,results,process,async))
;
return ((function (__48706,switch__47065__auto__,c__47148__auto___48710,G__47321_48707,G__47321_48708__$1,n__4695__auto___48705,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47066__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47066__auto____0 = (function (){
var statearr_47342 = [null,null,null,null,null,null,null];
(statearr_47342[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47066__auto__);

(statearr_47342[(1)] = (1));

return statearr_47342;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47066__auto____1 = (function (state_47334){
while(true){
var ret_value__47067__auto__ = (function (){try{while(true){
var result__47068__auto__ = switch__47065__auto__(state_47334);
if(cljs.core.keyword_identical_QMARK_(result__47068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47068__auto__;
}
break;
}
}catch (e47343){var ex__47069__auto__ = e47343;
var statearr_47344_48717 = state_47334;
(statearr_47344_48717[(2)] = ex__47069__auto__);


if(cljs.core.seq((state_47334[(4)]))){
var statearr_47345_48718 = state_47334;
(statearr_47345_48718[(1)] = cljs.core.first((state_47334[(4)])));

} else {
throw ex__47069__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48719 = state_47334;
state_47334 = G__48719;
continue;
} else {
return ret_value__47067__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47066__auto__ = function(state_47334){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47066__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47066__auto____1.call(this,state_47334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47066__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47066__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47066__auto__;
})()
;})(__48706,switch__47065__auto__,c__47148__auto___48710,G__47321_48707,G__47321_48708__$1,n__4695__auto___48705,jobs,results,process,async))
})();
var state__47150__auto__ = (function (){var statearr_47346 = f__47149__auto__();
(statearr_47346[(6)] = c__47148__auto___48710);

return statearr_47346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47150__auto__);
});})(__48706,c__47148__auto___48710,G__47321_48707,G__47321_48708__$1,n__4695__auto___48705,jobs,results,process,async))
);


break;
case "async":
var c__47148__auto___48720 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__48706,c__47148__auto___48720,G__47321_48707,G__47321_48708__$1,n__4695__auto___48705,jobs,results,process,async){
return (function (){
var f__47149__auto__ = (function (){var switch__47065__auto__ = ((function (__48706,c__47148__auto___48720,G__47321_48707,G__47321_48708__$1,n__4695__auto___48705,jobs,results,process,async){
return (function (state_47359){
var state_val_47360 = (state_47359[(1)]);
if((state_val_47360 === (1))){
var state_47359__$1 = state_47359;
var statearr_47361_48721 = state_47359__$1;
(statearr_47361_48721[(2)] = null);

(statearr_47361_48721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47360 === (2))){
var state_47359__$1 = state_47359;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47359__$1,(4),jobs);
} else {
if((state_val_47360 === (3))){
var inst_47357 = (state_47359[(2)]);
var state_47359__$1 = state_47359;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47359__$1,inst_47357);
} else {
if((state_val_47360 === (4))){
var inst_47349 = (state_47359[(2)]);
var inst_47350 = async(inst_47349);
var state_47359__$1 = state_47359;
if(cljs.core.truth_(inst_47350)){
var statearr_47362_48722 = state_47359__$1;
(statearr_47362_48722[(1)] = (5));

} else {
var statearr_47363_48723 = state_47359__$1;
(statearr_47363_48723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47360 === (5))){
var state_47359__$1 = state_47359;
var statearr_47364_48724 = state_47359__$1;
(statearr_47364_48724[(2)] = null);

(statearr_47364_48724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47360 === (6))){
var state_47359__$1 = state_47359;
var statearr_47365_48725 = state_47359__$1;
(statearr_47365_48725[(2)] = null);

(statearr_47365_48725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47360 === (7))){
var inst_47355 = (state_47359[(2)]);
var state_47359__$1 = state_47359;
var statearr_47366_48726 = state_47359__$1;
(statearr_47366_48726[(2)] = inst_47355);

(statearr_47366_48726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__48706,c__47148__auto___48720,G__47321_48707,G__47321_48708__$1,n__4695__auto___48705,jobs,results,process,async))
;
return ((function (__48706,switch__47065__auto__,c__47148__auto___48720,G__47321_48707,G__47321_48708__$1,n__4695__auto___48705,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47066__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47066__auto____0 = (function (){
var statearr_47367 = [null,null,null,null,null,null,null];
(statearr_47367[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47066__auto__);

(statearr_47367[(1)] = (1));

return statearr_47367;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47066__auto____1 = (function (state_47359){
while(true){
var ret_value__47067__auto__ = (function (){try{while(true){
var result__47068__auto__ = switch__47065__auto__(state_47359);
if(cljs.core.keyword_identical_QMARK_(result__47068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47068__auto__;
}
break;
}
}catch (e47368){var ex__47069__auto__ = e47368;
var statearr_47369_48727 = state_47359;
(statearr_47369_48727[(2)] = ex__47069__auto__);


if(cljs.core.seq((state_47359[(4)]))){
var statearr_47370_48728 = state_47359;
(statearr_47370_48728[(1)] = cljs.core.first((state_47359[(4)])));

} else {
throw ex__47069__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48729 = state_47359;
state_47359 = G__48729;
continue;
} else {
return ret_value__47067__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47066__auto__ = function(state_47359){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47066__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47066__auto____1.call(this,state_47359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47066__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47066__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47066__auto__;
})()
;})(__48706,switch__47065__auto__,c__47148__auto___48720,G__47321_48707,G__47321_48708__$1,n__4695__auto___48705,jobs,results,process,async))
})();
var state__47150__auto__ = (function (){var statearr_47371 = f__47149__auto__();
(statearr_47371[(6)] = c__47148__auto___48720);

return statearr_47371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47150__auto__);
});})(__48706,c__47148__auto___48720,G__47321_48707,G__47321_48708__$1,n__4695__auto___48705,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__47321_48708__$1)].join('')));

}

var G__48730 = (__48706 + (1));
__48706 = G__48730;
continue;
} else {
}
break;
}

var c__47148__auto___48731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47149__auto__ = (function (){var switch__47065__auto__ = (function (state_47393){
var state_val_47394 = (state_47393[(1)]);
if((state_val_47394 === (7))){
var inst_47389 = (state_47393[(2)]);
var state_47393__$1 = state_47393;
var statearr_47395_48732 = state_47393__$1;
(statearr_47395_48732[(2)] = inst_47389);

(statearr_47395_48732[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47394 === (1))){
var state_47393__$1 = state_47393;
var statearr_47396_48733 = state_47393__$1;
(statearr_47396_48733[(2)] = null);

(statearr_47396_48733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47394 === (4))){
var inst_47374 = (state_47393[(7)]);
var inst_47374__$1 = (state_47393[(2)]);
var inst_47375 = (inst_47374__$1 == null);
var state_47393__$1 = (function (){var statearr_47397 = state_47393;
(statearr_47397[(7)] = inst_47374__$1);

return statearr_47397;
})();
if(cljs.core.truth_(inst_47375)){
var statearr_47398_48734 = state_47393__$1;
(statearr_47398_48734[(1)] = (5));

} else {
var statearr_47399_48735 = state_47393__$1;
(statearr_47399_48735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47394 === (6))){
var inst_47379 = (state_47393[(8)]);
var inst_47374 = (state_47393[(7)]);
var inst_47379__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_47380 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_47381 = [inst_47374,inst_47379__$1];
var inst_47382 = (new cljs.core.PersistentVector(null,2,(5),inst_47380,inst_47381,null));
var state_47393__$1 = (function (){var statearr_47400 = state_47393;
(statearr_47400[(8)] = inst_47379__$1);

return statearr_47400;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47393__$1,(8),jobs,inst_47382);
} else {
if((state_val_47394 === (3))){
var inst_47391 = (state_47393[(2)]);
var state_47393__$1 = state_47393;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47393__$1,inst_47391);
} else {
if((state_val_47394 === (2))){
var state_47393__$1 = state_47393;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47393__$1,(4),from);
} else {
if((state_val_47394 === (9))){
var inst_47386 = (state_47393[(2)]);
var state_47393__$1 = (function (){var statearr_47401 = state_47393;
(statearr_47401[(9)] = inst_47386);

return statearr_47401;
})();
var statearr_47402_48736 = state_47393__$1;
(statearr_47402_48736[(2)] = null);

(statearr_47402_48736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47394 === (5))){
var inst_47377 = cljs.core.async.close_BANG_(jobs);
var state_47393__$1 = state_47393;
var statearr_47403_48737 = state_47393__$1;
(statearr_47403_48737[(2)] = inst_47377);

(statearr_47403_48737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47394 === (8))){
var inst_47379 = (state_47393[(8)]);
var inst_47384 = (state_47393[(2)]);
var state_47393__$1 = (function (){var statearr_47404 = state_47393;
(statearr_47404[(10)] = inst_47384);

return statearr_47404;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47393__$1,(9),results,inst_47379);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47066__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47066__auto____0 = (function (){
var statearr_47405 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47405[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47066__auto__);

(statearr_47405[(1)] = (1));

return statearr_47405;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47066__auto____1 = (function (state_47393){
while(true){
var ret_value__47067__auto__ = (function (){try{while(true){
var result__47068__auto__ = switch__47065__auto__(state_47393);
if(cljs.core.keyword_identical_QMARK_(result__47068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47068__auto__;
}
break;
}
}catch (e47406){var ex__47069__auto__ = e47406;
var statearr_47407_48738 = state_47393;
(statearr_47407_48738[(2)] = ex__47069__auto__);


if(cljs.core.seq((state_47393[(4)]))){
var statearr_47408_48739 = state_47393;
(statearr_47408_48739[(1)] = cljs.core.first((state_47393[(4)])));

} else {
throw ex__47069__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48740 = state_47393;
state_47393 = G__48740;
continue;
} else {
return ret_value__47067__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47066__auto__ = function(state_47393){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47066__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47066__auto____1.call(this,state_47393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47066__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47066__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47066__auto__;
})()
})();
var state__47150__auto__ = (function (){var statearr_47409 = f__47149__auto__();
(statearr_47409[(6)] = c__47148__auto___48731);

return statearr_47409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47150__auto__);
}));


var c__47148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47149__auto__ = (function (){var switch__47065__auto__ = (function (state_47447){
var state_val_47448 = (state_47447[(1)]);
if((state_val_47448 === (7))){
var inst_47443 = (state_47447[(2)]);
var state_47447__$1 = state_47447;
var statearr_47449_48741 = state_47447__$1;
(statearr_47449_48741[(2)] = inst_47443);

(statearr_47449_48741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (20))){
var state_47447__$1 = state_47447;
var statearr_47450_48742 = state_47447__$1;
(statearr_47450_48742[(2)] = null);

(statearr_47450_48742[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (1))){
var state_47447__$1 = state_47447;
var statearr_47451_48743 = state_47447__$1;
(statearr_47451_48743[(2)] = null);

(statearr_47451_48743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (4))){
var inst_47412 = (state_47447[(7)]);
var inst_47412__$1 = (state_47447[(2)]);
var inst_47413 = (inst_47412__$1 == null);
var state_47447__$1 = (function (){var statearr_47452 = state_47447;
(statearr_47452[(7)] = inst_47412__$1);

return statearr_47452;
})();
if(cljs.core.truth_(inst_47413)){
var statearr_47453_48744 = state_47447__$1;
(statearr_47453_48744[(1)] = (5));

} else {
var statearr_47454_48745 = state_47447__$1;
(statearr_47454_48745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (15))){
var inst_47425 = (state_47447[(8)]);
var state_47447__$1 = state_47447;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47447__$1,(18),to,inst_47425);
} else {
if((state_val_47448 === (21))){
var inst_47438 = (state_47447[(2)]);
var state_47447__$1 = state_47447;
var statearr_47455_48746 = state_47447__$1;
(statearr_47455_48746[(2)] = inst_47438);

(statearr_47455_48746[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (13))){
var inst_47440 = (state_47447[(2)]);
var state_47447__$1 = (function (){var statearr_47456 = state_47447;
(statearr_47456[(9)] = inst_47440);

return statearr_47456;
})();
var statearr_47457_48747 = state_47447__$1;
(statearr_47457_48747[(2)] = null);

(statearr_47457_48747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (6))){
var inst_47412 = (state_47447[(7)]);
var state_47447__$1 = state_47447;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47447__$1,(11),inst_47412);
} else {
if((state_val_47448 === (17))){
var inst_47433 = (state_47447[(2)]);
var state_47447__$1 = state_47447;
if(cljs.core.truth_(inst_47433)){
var statearr_47458_48748 = state_47447__$1;
(statearr_47458_48748[(1)] = (19));

} else {
var statearr_47459_48749 = state_47447__$1;
(statearr_47459_48749[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (3))){
var inst_47445 = (state_47447[(2)]);
var state_47447__$1 = state_47447;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47447__$1,inst_47445);
} else {
if((state_val_47448 === (12))){
var inst_47422 = (state_47447[(10)]);
var state_47447__$1 = state_47447;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47447__$1,(14),inst_47422);
} else {
if((state_val_47448 === (2))){
var state_47447__$1 = state_47447;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47447__$1,(4),results);
} else {
if((state_val_47448 === (19))){
var state_47447__$1 = state_47447;
var statearr_47460_48750 = state_47447__$1;
(statearr_47460_48750[(2)] = null);

(statearr_47460_48750[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (11))){
var inst_47422 = (state_47447[(2)]);
var state_47447__$1 = (function (){var statearr_47461 = state_47447;
(statearr_47461[(10)] = inst_47422);

return statearr_47461;
})();
var statearr_47462_48751 = state_47447__$1;
(statearr_47462_48751[(2)] = null);

(statearr_47462_48751[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (9))){
var state_47447__$1 = state_47447;
var statearr_47463_48752 = state_47447__$1;
(statearr_47463_48752[(2)] = null);

(statearr_47463_48752[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (5))){
var state_47447__$1 = state_47447;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47464_48754 = state_47447__$1;
(statearr_47464_48754[(1)] = (8));

} else {
var statearr_47465_48755 = state_47447__$1;
(statearr_47465_48755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (14))){
var inst_47425 = (state_47447[(8)]);
var inst_47427 = (state_47447[(11)]);
var inst_47425__$1 = (state_47447[(2)]);
var inst_47426 = (inst_47425__$1 == null);
var inst_47427__$1 = cljs.core.not(inst_47426);
var state_47447__$1 = (function (){var statearr_47466 = state_47447;
(statearr_47466[(8)] = inst_47425__$1);

(statearr_47466[(11)] = inst_47427__$1);

return statearr_47466;
})();
if(inst_47427__$1){
var statearr_47467_48756 = state_47447__$1;
(statearr_47467_48756[(1)] = (15));

} else {
var statearr_47468_48757 = state_47447__$1;
(statearr_47468_48757[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (16))){
var inst_47427 = (state_47447[(11)]);
var state_47447__$1 = state_47447;
var statearr_47469_48758 = state_47447__$1;
(statearr_47469_48758[(2)] = inst_47427);

(statearr_47469_48758[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (10))){
var inst_47419 = (state_47447[(2)]);
var state_47447__$1 = state_47447;
var statearr_47470_48759 = state_47447__$1;
(statearr_47470_48759[(2)] = inst_47419);

(statearr_47470_48759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (18))){
var inst_47430 = (state_47447[(2)]);
var state_47447__$1 = state_47447;
var statearr_47471_48760 = state_47447__$1;
(statearr_47471_48760[(2)] = inst_47430);

(statearr_47471_48760[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47448 === (8))){
var inst_47416 = cljs.core.async.close_BANG_(to);
var state_47447__$1 = state_47447;
var statearr_47472_48761 = state_47447__$1;
(statearr_47472_48761[(2)] = inst_47416);

(statearr_47472_48761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__47066__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__47066__auto____0 = (function (){
var statearr_47473 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47473[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__47066__auto__);

(statearr_47473[(1)] = (1));

return statearr_47473;
});
var cljs$core$async$pipeline_STAR__$_state_machine__47066__auto____1 = (function (state_47447){
while(true){
var ret_value__47067__auto__ = (function (){try{while(true){
var result__47068__auto__ = switch__47065__auto__(state_47447);
if(cljs.core.keyword_identical_QMARK_(result__47068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47068__auto__;
}
break;
}
}catch (e47474){var ex__47069__auto__ = e47474;
var statearr_47475_48762 = state_47447;
(statearr_47475_48762[(2)] = ex__47069__auto__);


if(cljs.core.seq((state_47447[(4)]))){
var statearr_47476_48763 = state_47447;
(statearr_47476_48763[(1)] = cljs.core.first((state_47447[(4)])));

} else {
throw ex__47069__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48764 = state_47447;
state_47447 = G__48764;
continue;
} else {
return ret_value__47067__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__47066__auto__ = function(state_47447){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__47066__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__47066__auto____1.call(this,state_47447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__47066__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__47066__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__47066__auto__;
})()
})();
var state__47150__auto__ = (function (){var statearr_47477 = f__47149__auto__();
(statearr_47477[(6)] = c__47148__auto__);

return statearr_47477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47150__auto__);
}));

return c__47148__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__47479 = arguments.length;
switch (G__47479) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__47481 = arguments.length;
switch (G__47481) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__47483 = arguments.length;
switch (G__47483) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__47148__auto___48768 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47149__auto__ = (function (){var switch__47065__auto__ = (function (state_47509){
var state_val_47510 = (state_47509[(1)]);
if((state_val_47510 === (7))){
var inst_47505 = (state_47509[(2)]);
var state_47509__$1 = state_47509;
var statearr_47511_48769 = state_47509__$1;
(statearr_47511_48769[(2)] = inst_47505);

(statearr_47511_48769[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47510 === (1))){
var state_47509__$1 = state_47509;
var statearr_47512_48771 = state_47509__$1;
(statearr_47512_48771[(2)] = null);

(statearr_47512_48771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47510 === (4))){
var inst_47486 = (state_47509[(7)]);
var inst_47486__$1 = (state_47509[(2)]);
var inst_47487 = (inst_47486__$1 == null);
var state_47509__$1 = (function (){var statearr_47513 = state_47509;
(statearr_47513[(7)] = inst_47486__$1);

return statearr_47513;
})();
if(cljs.core.truth_(inst_47487)){
var statearr_47514_48772 = state_47509__$1;
(statearr_47514_48772[(1)] = (5));

} else {
var statearr_47515_48774 = state_47509__$1;
(statearr_47515_48774[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47510 === (13))){
var state_47509__$1 = state_47509;
var statearr_47516_48775 = state_47509__$1;
(statearr_47516_48775[(2)] = null);

(statearr_47516_48775[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47510 === (6))){
var inst_47486 = (state_47509[(7)]);
var inst_47492 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47486) : p.call(null,inst_47486));
var state_47509__$1 = state_47509;
if(cljs.core.truth_(inst_47492)){
var statearr_47517_48776 = state_47509__$1;
(statearr_47517_48776[(1)] = (9));

} else {
var statearr_47518_48777 = state_47509__$1;
(statearr_47518_48777[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47510 === (3))){
var inst_47507 = (state_47509[(2)]);
var state_47509__$1 = state_47509;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47509__$1,inst_47507);
} else {
if((state_val_47510 === (12))){
var state_47509__$1 = state_47509;
var statearr_47519_48778 = state_47509__$1;
(statearr_47519_48778[(2)] = null);

(statearr_47519_48778[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47510 === (2))){
var state_47509__$1 = state_47509;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47509__$1,(4),ch);
} else {
if((state_val_47510 === (11))){
var inst_47486 = (state_47509[(7)]);
var inst_47496 = (state_47509[(2)]);
var state_47509__$1 = state_47509;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47509__$1,(8),inst_47496,inst_47486);
} else {
if((state_val_47510 === (9))){
var state_47509__$1 = state_47509;
var statearr_47520_48779 = state_47509__$1;
(statearr_47520_48779[(2)] = tc);

(statearr_47520_48779[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47510 === (5))){
var inst_47489 = cljs.core.async.close_BANG_(tc);
var inst_47490 = cljs.core.async.close_BANG_(fc);
var state_47509__$1 = (function (){var statearr_47521 = state_47509;
(statearr_47521[(8)] = inst_47489);

return statearr_47521;
})();
var statearr_47522_48780 = state_47509__$1;
(statearr_47522_48780[(2)] = inst_47490);

(statearr_47522_48780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47510 === (14))){
var inst_47503 = (state_47509[(2)]);
var state_47509__$1 = state_47509;
var statearr_47523_48781 = state_47509__$1;
(statearr_47523_48781[(2)] = inst_47503);

(statearr_47523_48781[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47510 === (10))){
var state_47509__$1 = state_47509;
var statearr_47524_48782 = state_47509__$1;
(statearr_47524_48782[(2)] = fc);

(statearr_47524_48782[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47510 === (8))){
var inst_47498 = (state_47509[(2)]);
var state_47509__$1 = state_47509;
if(cljs.core.truth_(inst_47498)){
var statearr_47525_48783 = state_47509__$1;
(statearr_47525_48783[(1)] = (12));

} else {
var statearr_47526_48784 = state_47509__$1;
(statearr_47526_48784[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47066__auto__ = null;
var cljs$core$async$state_machine__47066__auto____0 = (function (){
var statearr_47527 = [null,null,null,null,null,null,null,null,null];
(statearr_47527[(0)] = cljs$core$async$state_machine__47066__auto__);

(statearr_47527[(1)] = (1));

return statearr_47527;
});
var cljs$core$async$state_machine__47066__auto____1 = (function (state_47509){
while(true){
var ret_value__47067__auto__ = (function (){try{while(true){
var result__47068__auto__ = switch__47065__auto__(state_47509);
if(cljs.core.keyword_identical_QMARK_(result__47068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47068__auto__;
}
break;
}
}catch (e47528){var ex__47069__auto__ = e47528;
var statearr_47529_48787 = state_47509;
(statearr_47529_48787[(2)] = ex__47069__auto__);


if(cljs.core.seq((state_47509[(4)]))){
var statearr_47530_48788 = state_47509;
(statearr_47530_48788[(1)] = cljs.core.first((state_47509[(4)])));

} else {
throw ex__47069__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48789 = state_47509;
state_47509 = G__48789;
continue;
} else {
return ret_value__47067__auto__;
}
break;
}
});
cljs$core$async$state_machine__47066__auto__ = function(state_47509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47066__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47066__auto____1.call(this,state_47509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47066__auto____0;
cljs$core$async$state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47066__auto____1;
return cljs$core$async$state_machine__47066__auto__;
})()
})();
var state__47150__auto__ = (function (){var statearr_47531 = f__47149__auto__();
(statearr_47531[(6)] = c__47148__auto___48768);

return statearr_47531;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47150__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__47148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47149__auto__ = (function (){var switch__47065__auto__ = (function (state_47553){
var state_val_47554 = (state_47553[(1)]);
if((state_val_47554 === (7))){
var inst_47549 = (state_47553[(2)]);
var state_47553__$1 = state_47553;
var statearr_47555_48790 = state_47553__$1;
(statearr_47555_48790[(2)] = inst_47549);

(statearr_47555_48790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47554 === (1))){
var inst_47532 = init;
var inst_47533 = inst_47532;
var state_47553__$1 = (function (){var statearr_47556 = state_47553;
(statearr_47556[(7)] = inst_47533);

return statearr_47556;
})();
var statearr_47557_48791 = state_47553__$1;
(statearr_47557_48791[(2)] = null);

(statearr_47557_48791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47554 === (4))){
var inst_47536 = (state_47553[(8)]);
var inst_47536__$1 = (state_47553[(2)]);
var inst_47537 = (inst_47536__$1 == null);
var state_47553__$1 = (function (){var statearr_47558 = state_47553;
(statearr_47558[(8)] = inst_47536__$1);

return statearr_47558;
})();
if(cljs.core.truth_(inst_47537)){
var statearr_47559_48792 = state_47553__$1;
(statearr_47559_48792[(1)] = (5));

} else {
var statearr_47560_48793 = state_47553__$1;
(statearr_47560_48793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47554 === (6))){
var inst_47536 = (state_47553[(8)]);
var inst_47540 = (state_47553[(9)]);
var inst_47533 = (state_47553[(7)]);
var inst_47540__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_47533,inst_47536) : f.call(null,inst_47533,inst_47536));
var inst_47541 = cljs.core.reduced_QMARK_(inst_47540__$1);
var state_47553__$1 = (function (){var statearr_47561 = state_47553;
(statearr_47561[(9)] = inst_47540__$1);

return statearr_47561;
})();
if(inst_47541){
var statearr_47562_48794 = state_47553__$1;
(statearr_47562_48794[(1)] = (8));

} else {
var statearr_47563_48796 = state_47553__$1;
(statearr_47563_48796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47554 === (3))){
var inst_47551 = (state_47553[(2)]);
var state_47553__$1 = state_47553;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47553__$1,inst_47551);
} else {
if((state_val_47554 === (2))){
var state_47553__$1 = state_47553;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47553__$1,(4),ch);
} else {
if((state_val_47554 === (9))){
var inst_47540 = (state_47553[(9)]);
var inst_47533 = inst_47540;
var state_47553__$1 = (function (){var statearr_47564 = state_47553;
(statearr_47564[(7)] = inst_47533);

return statearr_47564;
})();
var statearr_47565_48798 = state_47553__$1;
(statearr_47565_48798[(2)] = null);

(statearr_47565_48798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47554 === (5))){
var inst_47533 = (state_47553[(7)]);
var state_47553__$1 = state_47553;
var statearr_47566_48799 = state_47553__$1;
(statearr_47566_48799[(2)] = inst_47533);

(statearr_47566_48799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47554 === (10))){
var inst_47547 = (state_47553[(2)]);
var state_47553__$1 = state_47553;
var statearr_47567_48800 = state_47553__$1;
(statearr_47567_48800[(2)] = inst_47547);

(statearr_47567_48800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47554 === (8))){
var inst_47540 = (state_47553[(9)]);
var inst_47543 = cljs.core.deref(inst_47540);
var state_47553__$1 = state_47553;
var statearr_47568_48801 = state_47553__$1;
(statearr_47568_48801[(2)] = inst_47543);

(statearr_47568_48801[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__47066__auto__ = null;
var cljs$core$async$reduce_$_state_machine__47066__auto____0 = (function (){
var statearr_47569 = [null,null,null,null,null,null,null,null,null,null];
(statearr_47569[(0)] = cljs$core$async$reduce_$_state_machine__47066__auto__);

(statearr_47569[(1)] = (1));

return statearr_47569;
});
var cljs$core$async$reduce_$_state_machine__47066__auto____1 = (function (state_47553){
while(true){
var ret_value__47067__auto__ = (function (){try{while(true){
var result__47068__auto__ = switch__47065__auto__(state_47553);
if(cljs.core.keyword_identical_QMARK_(result__47068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47068__auto__;
}
break;
}
}catch (e47570){var ex__47069__auto__ = e47570;
var statearr_47571_48802 = state_47553;
(statearr_47571_48802[(2)] = ex__47069__auto__);


if(cljs.core.seq((state_47553[(4)]))){
var statearr_47572_48803 = state_47553;
(statearr_47572_48803[(1)] = cljs.core.first((state_47553[(4)])));

} else {
throw ex__47069__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48804 = state_47553;
state_47553 = G__48804;
continue;
} else {
return ret_value__47067__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__47066__auto__ = function(state_47553){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__47066__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__47066__auto____1.call(this,state_47553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__47066__auto____0;
cljs$core$async$reduce_$_state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__47066__auto____1;
return cljs$core$async$reduce_$_state_machine__47066__auto__;
})()
})();
var state__47150__auto__ = (function (){var statearr_47573 = f__47149__auto__();
(statearr_47573[(6)] = c__47148__auto__);

return statearr_47573;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47150__auto__);
}));

return c__47148__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__47148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47149__auto__ = (function (){var switch__47065__auto__ = (function (state_47579){
var state_val_47580 = (state_47579[(1)]);
if((state_val_47580 === (1))){
var inst_47574 = cljs.core.async.reduce(f__$1,init,ch);
var state_47579__$1 = state_47579;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47579__$1,(2),inst_47574);
} else {
if((state_val_47580 === (2))){
var inst_47576 = (state_47579[(2)]);
var inst_47577 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_47576) : f__$1.call(null,inst_47576));
var state_47579__$1 = state_47579;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47579__$1,inst_47577);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__47066__auto__ = null;
var cljs$core$async$transduce_$_state_machine__47066__auto____0 = (function (){
var statearr_47581 = [null,null,null,null,null,null,null];
(statearr_47581[(0)] = cljs$core$async$transduce_$_state_machine__47066__auto__);

(statearr_47581[(1)] = (1));

return statearr_47581;
});
var cljs$core$async$transduce_$_state_machine__47066__auto____1 = (function (state_47579){
while(true){
var ret_value__47067__auto__ = (function (){try{while(true){
var result__47068__auto__ = switch__47065__auto__(state_47579);
if(cljs.core.keyword_identical_QMARK_(result__47068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47068__auto__;
}
break;
}
}catch (e47582){var ex__47069__auto__ = e47582;
var statearr_47583_48805 = state_47579;
(statearr_47583_48805[(2)] = ex__47069__auto__);


if(cljs.core.seq((state_47579[(4)]))){
var statearr_47584_48806 = state_47579;
(statearr_47584_48806[(1)] = cljs.core.first((state_47579[(4)])));

} else {
throw ex__47069__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48807 = state_47579;
state_47579 = G__48807;
continue;
} else {
return ret_value__47067__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__47066__auto__ = function(state_47579){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__47066__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__47066__auto____1.call(this,state_47579);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__47066__auto____0;
cljs$core$async$transduce_$_state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__47066__auto____1;
return cljs$core$async$transduce_$_state_machine__47066__auto__;
})()
})();
var state__47150__auto__ = (function (){var statearr_47585 = f__47149__auto__();
(statearr_47585[(6)] = c__47148__auto__);

return statearr_47585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47150__auto__);
}));

return c__47148__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__47587 = arguments.length;
switch (G__47587) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__47148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47149__auto__ = (function (){var switch__47065__auto__ = (function (state_47612){
var state_val_47613 = (state_47612[(1)]);
if((state_val_47613 === (7))){
var inst_47594 = (state_47612[(2)]);
var state_47612__$1 = state_47612;
var statearr_47614_48810 = state_47612__$1;
(statearr_47614_48810[(2)] = inst_47594);

(statearr_47614_48810[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47613 === (1))){
var inst_47588 = cljs.core.seq(coll);
var inst_47589 = inst_47588;
var state_47612__$1 = (function (){var statearr_47615 = state_47612;
(statearr_47615[(7)] = inst_47589);

return statearr_47615;
})();
var statearr_47616_48811 = state_47612__$1;
(statearr_47616_48811[(2)] = null);

(statearr_47616_48811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47613 === (4))){
var inst_47589 = (state_47612[(7)]);
var inst_47592 = cljs.core.first(inst_47589);
var state_47612__$1 = state_47612;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47612__$1,(7),ch,inst_47592);
} else {
if((state_val_47613 === (13))){
var inst_47606 = (state_47612[(2)]);
var state_47612__$1 = state_47612;
var statearr_47617_48813 = state_47612__$1;
(statearr_47617_48813[(2)] = inst_47606);

(statearr_47617_48813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47613 === (6))){
var inst_47597 = (state_47612[(2)]);
var state_47612__$1 = state_47612;
if(cljs.core.truth_(inst_47597)){
var statearr_47618_48814 = state_47612__$1;
(statearr_47618_48814[(1)] = (8));

} else {
var statearr_47619_48815 = state_47612__$1;
(statearr_47619_48815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47613 === (3))){
var inst_47610 = (state_47612[(2)]);
var state_47612__$1 = state_47612;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47612__$1,inst_47610);
} else {
if((state_val_47613 === (12))){
var state_47612__$1 = state_47612;
var statearr_47620_48816 = state_47612__$1;
(statearr_47620_48816[(2)] = null);

(statearr_47620_48816[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47613 === (2))){
var inst_47589 = (state_47612[(7)]);
var state_47612__$1 = state_47612;
if(cljs.core.truth_(inst_47589)){
var statearr_47621_48817 = state_47612__$1;
(statearr_47621_48817[(1)] = (4));

} else {
var statearr_47622_48818 = state_47612__$1;
(statearr_47622_48818[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47613 === (11))){
var inst_47603 = cljs.core.async.close_BANG_(ch);
var state_47612__$1 = state_47612;
var statearr_47623_48819 = state_47612__$1;
(statearr_47623_48819[(2)] = inst_47603);

(statearr_47623_48819[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47613 === (9))){
var state_47612__$1 = state_47612;
if(cljs.core.truth_(close_QMARK_)){
var statearr_47624_48820 = state_47612__$1;
(statearr_47624_48820[(1)] = (11));

} else {
var statearr_47625_48821 = state_47612__$1;
(statearr_47625_48821[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47613 === (5))){
var inst_47589 = (state_47612[(7)]);
var state_47612__$1 = state_47612;
var statearr_47626_48822 = state_47612__$1;
(statearr_47626_48822[(2)] = inst_47589);

(statearr_47626_48822[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47613 === (10))){
var inst_47608 = (state_47612[(2)]);
var state_47612__$1 = state_47612;
var statearr_47627_48823 = state_47612__$1;
(statearr_47627_48823[(2)] = inst_47608);

(statearr_47627_48823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47613 === (8))){
var inst_47589 = (state_47612[(7)]);
var inst_47599 = cljs.core.next(inst_47589);
var inst_47589__$1 = inst_47599;
var state_47612__$1 = (function (){var statearr_47628 = state_47612;
(statearr_47628[(7)] = inst_47589__$1);

return statearr_47628;
})();
var statearr_47629_48824 = state_47612__$1;
(statearr_47629_48824[(2)] = null);

(statearr_47629_48824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47066__auto__ = null;
var cljs$core$async$state_machine__47066__auto____0 = (function (){
var statearr_47630 = [null,null,null,null,null,null,null,null];
(statearr_47630[(0)] = cljs$core$async$state_machine__47066__auto__);

(statearr_47630[(1)] = (1));

return statearr_47630;
});
var cljs$core$async$state_machine__47066__auto____1 = (function (state_47612){
while(true){
var ret_value__47067__auto__ = (function (){try{while(true){
var result__47068__auto__ = switch__47065__auto__(state_47612);
if(cljs.core.keyword_identical_QMARK_(result__47068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47068__auto__;
}
break;
}
}catch (e47631){var ex__47069__auto__ = e47631;
var statearr_47632_48825 = state_47612;
(statearr_47632_48825[(2)] = ex__47069__auto__);


if(cljs.core.seq((state_47612[(4)]))){
var statearr_47633_48826 = state_47612;
(statearr_47633_48826[(1)] = cljs.core.first((state_47612[(4)])));

} else {
throw ex__47069__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48827 = state_47612;
state_47612 = G__48827;
continue;
} else {
return ret_value__47067__auto__;
}
break;
}
});
cljs$core$async$state_machine__47066__auto__ = function(state_47612){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47066__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47066__auto____1.call(this,state_47612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47066__auto____0;
cljs$core$async$state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47066__auto____1;
return cljs$core$async$state_machine__47066__auto__;
})()
})();
var state__47150__auto__ = (function (){var statearr_47634 = f__47149__auto__();
(statearr_47634[(6)] = c__47148__auto__);

return statearr_47634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47150__auto__);
}));

return c__47148__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__47636 = arguments.length;
switch (G__47636) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_48831 = (function (_){
var x__4509__auto__ = (((_ == null))?null:_);
var m__4510__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4510__auto__.call(null,_));
} else {
var m__4508__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4508__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_48831(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_48832 = (function (m,ch,close_QMARK_){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4510__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4508__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_48832(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_48833 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_48833(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_48834 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_48834(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47637 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47637 = (function (ch,cs,meta47638){
this.ch = ch;
this.cs = cs;
this.meta47638 = meta47638;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47639,meta47638__$1){
var self__ = this;
var _47639__$1 = this;
return (new cljs.core.async.t_cljs$core$async47637(self__.ch,self__.cs,meta47638__$1));
}));

(cljs.core.async.t_cljs$core$async47637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47639){
var self__ = this;
var _47639__$1 = this;
return self__.meta47638;
}));

(cljs.core.async.t_cljs$core$async47637.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47637.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async47637.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47637.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async47637.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async47637.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async47637.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta47638","meta47638",-432025000,null)], null);
}));

(cljs.core.async.t_cljs$core$async47637.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47637.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47637");

(cljs.core.async.t_cljs$core$async47637.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async47637");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47637.
 */
cljs.core.async.__GT_t_cljs$core$async47637 = (function cljs$core$async$mult_$___GT_t_cljs$core$async47637(ch__$1,cs__$1,meta47638){
return (new cljs.core.async.t_cljs$core$async47637(ch__$1,cs__$1,meta47638));
});

}

return (new cljs.core.async.t_cljs$core$async47637(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__47148__auto___48837 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47149__auto__ = (function (){var switch__47065__auto__ = (function (state_47772){
var state_val_47773 = (state_47772[(1)]);
if((state_val_47773 === (7))){
var inst_47768 = (state_47772[(2)]);
var state_47772__$1 = state_47772;
var statearr_47774_48838 = state_47772__$1;
(statearr_47774_48838[(2)] = inst_47768);

(statearr_47774_48838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (20))){
var inst_47673 = (state_47772[(7)]);
var inst_47685 = cljs.core.first(inst_47673);
var inst_47686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47685,(0),null);
var inst_47687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47685,(1),null);
var state_47772__$1 = (function (){var statearr_47775 = state_47772;
(statearr_47775[(8)] = inst_47686);

return statearr_47775;
})();
if(cljs.core.truth_(inst_47687)){
var statearr_47776_48839 = state_47772__$1;
(statearr_47776_48839[(1)] = (22));

} else {
var statearr_47777_48840 = state_47772__$1;
(statearr_47777_48840[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (27))){
var inst_47715 = (state_47772[(9)]);
var inst_47642 = (state_47772[(10)]);
var inst_47722 = (state_47772[(11)]);
var inst_47717 = (state_47772[(12)]);
var inst_47722__$1 = cljs.core._nth(inst_47715,inst_47717);
var inst_47723 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47722__$1,inst_47642,done);
var state_47772__$1 = (function (){var statearr_47778 = state_47772;
(statearr_47778[(11)] = inst_47722__$1);

return statearr_47778;
})();
if(cljs.core.truth_(inst_47723)){
var statearr_47779_48841 = state_47772__$1;
(statearr_47779_48841[(1)] = (30));

} else {
var statearr_47780_48842 = state_47772__$1;
(statearr_47780_48842[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (1))){
var state_47772__$1 = state_47772;
var statearr_47781_48843 = state_47772__$1;
(statearr_47781_48843[(2)] = null);

(statearr_47781_48843[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (24))){
var inst_47673 = (state_47772[(7)]);
var inst_47692 = (state_47772[(2)]);
var inst_47693 = cljs.core.next(inst_47673);
var inst_47651 = inst_47693;
var inst_47652 = null;
var inst_47653 = (0);
var inst_47654 = (0);
var state_47772__$1 = (function (){var statearr_47782 = state_47772;
(statearr_47782[(13)] = inst_47651);

(statearr_47782[(14)] = inst_47692);

(statearr_47782[(15)] = inst_47652);

(statearr_47782[(16)] = inst_47654);

(statearr_47782[(17)] = inst_47653);

return statearr_47782;
})();
var statearr_47783_48844 = state_47772__$1;
(statearr_47783_48844[(2)] = null);

(statearr_47783_48844[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (39))){
var state_47772__$1 = state_47772;
var statearr_47787_48845 = state_47772__$1;
(statearr_47787_48845[(2)] = null);

(statearr_47787_48845[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (4))){
var inst_47642 = (state_47772[(10)]);
var inst_47642__$1 = (state_47772[(2)]);
var inst_47643 = (inst_47642__$1 == null);
var state_47772__$1 = (function (){var statearr_47788 = state_47772;
(statearr_47788[(10)] = inst_47642__$1);

return statearr_47788;
})();
if(cljs.core.truth_(inst_47643)){
var statearr_47789_48846 = state_47772__$1;
(statearr_47789_48846[(1)] = (5));

} else {
var statearr_47790_48847 = state_47772__$1;
(statearr_47790_48847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (15))){
var inst_47651 = (state_47772[(13)]);
var inst_47652 = (state_47772[(15)]);
var inst_47654 = (state_47772[(16)]);
var inst_47653 = (state_47772[(17)]);
var inst_47669 = (state_47772[(2)]);
var inst_47670 = (inst_47654 + (1));
var tmp47784 = inst_47651;
var tmp47785 = inst_47652;
var tmp47786 = inst_47653;
var inst_47651__$1 = tmp47784;
var inst_47652__$1 = tmp47785;
var inst_47653__$1 = tmp47786;
var inst_47654__$1 = inst_47670;
var state_47772__$1 = (function (){var statearr_47791 = state_47772;
(statearr_47791[(13)] = inst_47651__$1);

(statearr_47791[(15)] = inst_47652__$1);

(statearr_47791[(16)] = inst_47654__$1);

(statearr_47791[(18)] = inst_47669);

(statearr_47791[(17)] = inst_47653__$1);

return statearr_47791;
})();
var statearr_47792_48848 = state_47772__$1;
(statearr_47792_48848[(2)] = null);

(statearr_47792_48848[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (21))){
var inst_47696 = (state_47772[(2)]);
var state_47772__$1 = state_47772;
var statearr_47796_48849 = state_47772__$1;
(statearr_47796_48849[(2)] = inst_47696);

(statearr_47796_48849[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (31))){
var inst_47722 = (state_47772[(11)]);
var inst_47726 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47722);
var state_47772__$1 = state_47772;
var statearr_47797_48850 = state_47772__$1;
(statearr_47797_48850[(2)] = inst_47726);

(statearr_47797_48850[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (32))){
var inst_47715 = (state_47772[(9)]);
var inst_47714 = (state_47772[(19)]);
var inst_47717 = (state_47772[(12)]);
var inst_47716 = (state_47772[(20)]);
var inst_47728 = (state_47772[(2)]);
var inst_47729 = (inst_47717 + (1));
var tmp47793 = inst_47715;
var tmp47794 = inst_47714;
var tmp47795 = inst_47716;
var inst_47714__$1 = tmp47794;
var inst_47715__$1 = tmp47793;
var inst_47716__$1 = tmp47795;
var inst_47717__$1 = inst_47729;
var state_47772__$1 = (function (){var statearr_47798 = state_47772;
(statearr_47798[(9)] = inst_47715__$1);

(statearr_47798[(19)] = inst_47714__$1);

(statearr_47798[(21)] = inst_47728);

(statearr_47798[(12)] = inst_47717__$1);

(statearr_47798[(20)] = inst_47716__$1);

return statearr_47798;
})();
var statearr_47799_48851 = state_47772__$1;
(statearr_47799_48851[(2)] = null);

(statearr_47799_48851[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (40))){
var inst_47741 = (state_47772[(22)]);
var inst_47745 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_47741);
var state_47772__$1 = state_47772;
var statearr_47800_48852 = state_47772__$1;
(statearr_47800_48852[(2)] = inst_47745);

(statearr_47800_48852[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (33))){
var inst_47732 = (state_47772[(23)]);
var inst_47734 = cljs.core.chunked_seq_QMARK_(inst_47732);
var state_47772__$1 = state_47772;
if(inst_47734){
var statearr_47801_48853 = state_47772__$1;
(statearr_47801_48853[(1)] = (36));

} else {
var statearr_47802_48854 = state_47772__$1;
(statearr_47802_48854[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (13))){
var inst_47663 = (state_47772[(24)]);
var inst_47666 = cljs.core.async.close_BANG_(inst_47663);
var state_47772__$1 = state_47772;
var statearr_47803_48855 = state_47772__$1;
(statearr_47803_48855[(2)] = inst_47666);

(statearr_47803_48855[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (22))){
var inst_47686 = (state_47772[(8)]);
var inst_47689 = cljs.core.async.close_BANG_(inst_47686);
var state_47772__$1 = state_47772;
var statearr_47804_48856 = state_47772__$1;
(statearr_47804_48856[(2)] = inst_47689);

(statearr_47804_48856[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (36))){
var inst_47732 = (state_47772[(23)]);
var inst_47736 = cljs.core.chunk_first(inst_47732);
var inst_47737 = cljs.core.chunk_rest(inst_47732);
var inst_47738 = cljs.core.count(inst_47736);
var inst_47714 = inst_47737;
var inst_47715 = inst_47736;
var inst_47716 = inst_47738;
var inst_47717 = (0);
var state_47772__$1 = (function (){var statearr_47805 = state_47772;
(statearr_47805[(9)] = inst_47715);

(statearr_47805[(19)] = inst_47714);

(statearr_47805[(12)] = inst_47717);

(statearr_47805[(20)] = inst_47716);

return statearr_47805;
})();
var statearr_47806_48857 = state_47772__$1;
(statearr_47806_48857[(2)] = null);

(statearr_47806_48857[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (41))){
var inst_47732 = (state_47772[(23)]);
var inst_47747 = (state_47772[(2)]);
var inst_47748 = cljs.core.next(inst_47732);
var inst_47714 = inst_47748;
var inst_47715 = null;
var inst_47716 = (0);
var inst_47717 = (0);
var state_47772__$1 = (function (){var statearr_47807 = state_47772;
(statearr_47807[(9)] = inst_47715);

(statearr_47807[(19)] = inst_47714);

(statearr_47807[(25)] = inst_47747);

(statearr_47807[(12)] = inst_47717);

(statearr_47807[(20)] = inst_47716);

return statearr_47807;
})();
var statearr_47808_48858 = state_47772__$1;
(statearr_47808_48858[(2)] = null);

(statearr_47808_48858[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (43))){
var state_47772__$1 = state_47772;
var statearr_47809_48860 = state_47772__$1;
(statearr_47809_48860[(2)] = null);

(statearr_47809_48860[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (29))){
var inst_47756 = (state_47772[(2)]);
var state_47772__$1 = state_47772;
var statearr_47810_48861 = state_47772__$1;
(statearr_47810_48861[(2)] = inst_47756);

(statearr_47810_48861[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (44))){
var inst_47765 = (state_47772[(2)]);
var state_47772__$1 = (function (){var statearr_47811 = state_47772;
(statearr_47811[(26)] = inst_47765);

return statearr_47811;
})();
var statearr_47812_48862 = state_47772__$1;
(statearr_47812_48862[(2)] = null);

(statearr_47812_48862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (6))){
var inst_47706 = (state_47772[(27)]);
var inst_47705 = cljs.core.deref(cs);
var inst_47706__$1 = cljs.core.keys(inst_47705);
var inst_47707 = cljs.core.count(inst_47706__$1);
var inst_47708 = cljs.core.reset_BANG_(dctr,inst_47707);
var inst_47713 = cljs.core.seq(inst_47706__$1);
var inst_47714 = inst_47713;
var inst_47715 = null;
var inst_47716 = (0);
var inst_47717 = (0);
var state_47772__$1 = (function (){var statearr_47813 = state_47772;
(statearr_47813[(9)] = inst_47715);

(statearr_47813[(19)] = inst_47714);

(statearr_47813[(27)] = inst_47706__$1);

(statearr_47813[(28)] = inst_47708);

(statearr_47813[(12)] = inst_47717);

(statearr_47813[(20)] = inst_47716);

return statearr_47813;
})();
var statearr_47814_48863 = state_47772__$1;
(statearr_47814_48863[(2)] = null);

(statearr_47814_48863[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (28))){
var inst_47714 = (state_47772[(19)]);
var inst_47732 = (state_47772[(23)]);
var inst_47732__$1 = cljs.core.seq(inst_47714);
var state_47772__$1 = (function (){var statearr_47815 = state_47772;
(statearr_47815[(23)] = inst_47732__$1);

return statearr_47815;
})();
if(inst_47732__$1){
var statearr_47816_48864 = state_47772__$1;
(statearr_47816_48864[(1)] = (33));

} else {
var statearr_47817_48865 = state_47772__$1;
(statearr_47817_48865[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (25))){
var inst_47717 = (state_47772[(12)]);
var inst_47716 = (state_47772[(20)]);
var inst_47719 = (inst_47717 < inst_47716);
var inst_47720 = inst_47719;
var state_47772__$1 = state_47772;
if(cljs.core.truth_(inst_47720)){
var statearr_47818_48866 = state_47772__$1;
(statearr_47818_48866[(1)] = (27));

} else {
var statearr_47819_48867 = state_47772__$1;
(statearr_47819_48867[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (34))){
var state_47772__$1 = state_47772;
var statearr_47820_48868 = state_47772__$1;
(statearr_47820_48868[(2)] = null);

(statearr_47820_48868[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (17))){
var state_47772__$1 = state_47772;
var statearr_47821_48869 = state_47772__$1;
(statearr_47821_48869[(2)] = null);

(statearr_47821_48869[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (3))){
var inst_47770 = (state_47772[(2)]);
var state_47772__$1 = state_47772;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47772__$1,inst_47770);
} else {
if((state_val_47773 === (12))){
var inst_47701 = (state_47772[(2)]);
var state_47772__$1 = state_47772;
var statearr_47822_48870 = state_47772__$1;
(statearr_47822_48870[(2)] = inst_47701);

(statearr_47822_48870[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (2))){
var state_47772__$1 = state_47772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47772__$1,(4),ch);
} else {
if((state_val_47773 === (23))){
var state_47772__$1 = state_47772;
var statearr_47823_48871 = state_47772__$1;
(statearr_47823_48871[(2)] = null);

(statearr_47823_48871[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (35))){
var inst_47754 = (state_47772[(2)]);
var state_47772__$1 = state_47772;
var statearr_47824_48872 = state_47772__$1;
(statearr_47824_48872[(2)] = inst_47754);

(statearr_47824_48872[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (19))){
var inst_47673 = (state_47772[(7)]);
var inst_47677 = cljs.core.chunk_first(inst_47673);
var inst_47678 = cljs.core.chunk_rest(inst_47673);
var inst_47679 = cljs.core.count(inst_47677);
var inst_47651 = inst_47678;
var inst_47652 = inst_47677;
var inst_47653 = inst_47679;
var inst_47654 = (0);
var state_47772__$1 = (function (){var statearr_47825 = state_47772;
(statearr_47825[(13)] = inst_47651);

(statearr_47825[(15)] = inst_47652);

(statearr_47825[(16)] = inst_47654);

(statearr_47825[(17)] = inst_47653);

return statearr_47825;
})();
var statearr_47826_48873 = state_47772__$1;
(statearr_47826_48873[(2)] = null);

(statearr_47826_48873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (11))){
var inst_47651 = (state_47772[(13)]);
var inst_47673 = (state_47772[(7)]);
var inst_47673__$1 = cljs.core.seq(inst_47651);
var state_47772__$1 = (function (){var statearr_47827 = state_47772;
(statearr_47827[(7)] = inst_47673__$1);

return statearr_47827;
})();
if(inst_47673__$1){
var statearr_47828_48878 = state_47772__$1;
(statearr_47828_48878[(1)] = (16));

} else {
var statearr_47829_48879 = state_47772__$1;
(statearr_47829_48879[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (9))){
var inst_47703 = (state_47772[(2)]);
var state_47772__$1 = state_47772;
var statearr_47830_48880 = state_47772__$1;
(statearr_47830_48880[(2)] = inst_47703);

(statearr_47830_48880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (5))){
var inst_47649 = cljs.core.deref(cs);
var inst_47650 = cljs.core.seq(inst_47649);
var inst_47651 = inst_47650;
var inst_47652 = null;
var inst_47653 = (0);
var inst_47654 = (0);
var state_47772__$1 = (function (){var statearr_47831 = state_47772;
(statearr_47831[(13)] = inst_47651);

(statearr_47831[(15)] = inst_47652);

(statearr_47831[(16)] = inst_47654);

(statearr_47831[(17)] = inst_47653);

return statearr_47831;
})();
var statearr_47832_48881 = state_47772__$1;
(statearr_47832_48881[(2)] = null);

(statearr_47832_48881[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (14))){
var state_47772__$1 = state_47772;
var statearr_47833_48882 = state_47772__$1;
(statearr_47833_48882[(2)] = null);

(statearr_47833_48882[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (45))){
var inst_47762 = (state_47772[(2)]);
var state_47772__$1 = state_47772;
var statearr_47834_48883 = state_47772__$1;
(statearr_47834_48883[(2)] = inst_47762);

(statearr_47834_48883[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (26))){
var inst_47706 = (state_47772[(27)]);
var inst_47758 = (state_47772[(2)]);
var inst_47759 = cljs.core.seq(inst_47706);
var state_47772__$1 = (function (){var statearr_47835 = state_47772;
(statearr_47835[(29)] = inst_47758);

return statearr_47835;
})();
if(inst_47759){
var statearr_47836_48884 = state_47772__$1;
(statearr_47836_48884[(1)] = (42));

} else {
var statearr_47837_48885 = state_47772__$1;
(statearr_47837_48885[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (16))){
var inst_47673 = (state_47772[(7)]);
var inst_47675 = cljs.core.chunked_seq_QMARK_(inst_47673);
var state_47772__$1 = state_47772;
if(inst_47675){
var statearr_47838_48886 = state_47772__$1;
(statearr_47838_48886[(1)] = (19));

} else {
var statearr_47839_48887 = state_47772__$1;
(statearr_47839_48887[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (38))){
var inst_47751 = (state_47772[(2)]);
var state_47772__$1 = state_47772;
var statearr_47840_48888 = state_47772__$1;
(statearr_47840_48888[(2)] = inst_47751);

(statearr_47840_48888[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (30))){
var state_47772__$1 = state_47772;
var statearr_47841_48889 = state_47772__$1;
(statearr_47841_48889[(2)] = null);

(statearr_47841_48889[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (10))){
var inst_47652 = (state_47772[(15)]);
var inst_47654 = (state_47772[(16)]);
var inst_47662 = cljs.core._nth(inst_47652,inst_47654);
var inst_47663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47662,(0),null);
var inst_47664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47662,(1),null);
var state_47772__$1 = (function (){var statearr_47842 = state_47772;
(statearr_47842[(24)] = inst_47663);

return statearr_47842;
})();
if(cljs.core.truth_(inst_47664)){
var statearr_47843_48890 = state_47772__$1;
(statearr_47843_48890[(1)] = (13));

} else {
var statearr_47844_48891 = state_47772__$1;
(statearr_47844_48891[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (18))){
var inst_47699 = (state_47772[(2)]);
var state_47772__$1 = state_47772;
var statearr_47845_48892 = state_47772__$1;
(statearr_47845_48892[(2)] = inst_47699);

(statearr_47845_48892[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (42))){
var state_47772__$1 = state_47772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47772__$1,(45),dchan);
} else {
if((state_val_47773 === (37))){
var inst_47642 = (state_47772[(10)]);
var inst_47741 = (state_47772[(22)]);
var inst_47732 = (state_47772[(23)]);
var inst_47741__$1 = cljs.core.first(inst_47732);
var inst_47742 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_47741__$1,inst_47642,done);
var state_47772__$1 = (function (){var statearr_47846 = state_47772;
(statearr_47846[(22)] = inst_47741__$1);

return statearr_47846;
})();
if(cljs.core.truth_(inst_47742)){
var statearr_47847_48893 = state_47772__$1;
(statearr_47847_48893[(1)] = (39));

} else {
var statearr_47848_48894 = state_47772__$1;
(statearr_47848_48894[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47773 === (8))){
var inst_47654 = (state_47772[(16)]);
var inst_47653 = (state_47772[(17)]);
var inst_47656 = (inst_47654 < inst_47653);
var inst_47657 = inst_47656;
var state_47772__$1 = state_47772;
if(cljs.core.truth_(inst_47657)){
var statearr_47849_48895 = state_47772__$1;
(statearr_47849_48895[(1)] = (10));

} else {
var statearr_47850_48896 = state_47772__$1;
(statearr_47850_48896[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__47066__auto__ = null;
var cljs$core$async$mult_$_state_machine__47066__auto____0 = (function (){
var statearr_47851 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47851[(0)] = cljs$core$async$mult_$_state_machine__47066__auto__);

(statearr_47851[(1)] = (1));

return statearr_47851;
});
var cljs$core$async$mult_$_state_machine__47066__auto____1 = (function (state_47772){
while(true){
var ret_value__47067__auto__ = (function (){try{while(true){
var result__47068__auto__ = switch__47065__auto__(state_47772);
if(cljs.core.keyword_identical_QMARK_(result__47068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47068__auto__;
}
break;
}
}catch (e47852){var ex__47069__auto__ = e47852;
var statearr_47853_48897 = state_47772;
(statearr_47853_48897[(2)] = ex__47069__auto__);


if(cljs.core.seq((state_47772[(4)]))){
var statearr_47854_48898 = state_47772;
(statearr_47854_48898[(1)] = cljs.core.first((state_47772[(4)])));

} else {
throw ex__47069__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48899 = state_47772;
state_47772 = G__48899;
continue;
} else {
return ret_value__47067__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__47066__auto__ = function(state_47772){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__47066__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__47066__auto____1.call(this,state_47772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__47066__auto____0;
cljs$core$async$mult_$_state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__47066__auto____1;
return cljs$core$async$mult_$_state_machine__47066__auto__;
})()
})();
var state__47150__auto__ = (function (){var statearr_47855 = f__47149__auto__();
(statearr_47855[(6)] = c__47148__auto___48837);

return statearr_47855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47150__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__47857 = arguments.length;
switch (G__47857) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_48903 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_48903(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_48904 = (function (m,ch){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4510__auto__.call(null,m,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4508__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_48904(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_48905 = (function (m){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4510__auto__.call(null,m));
} else {
var m__4508__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4508__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_48905(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_48906 = (function (m,state_map){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4510__auto__.call(null,m,state_map));
} else {
var m__4508__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4508__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_48906(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_48907 = (function (m,mode){
var x__4509__auto__ = (((m == null))?null:m);
var m__4510__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4510__auto__.call(null,m,mode));
} else {
var m__4508__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4508__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_48907(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___48908 = arguments.length;
var i__4819__auto___48909 = (0);
while(true){
if((i__4819__auto___48909 < len__4818__auto___48908)){
args__4824__auto__.push((arguments[i__4819__auto___48909]));

var G__48910 = (i__4819__auto___48909 + (1));
i__4819__auto___48909 = G__48910;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__47862){
var map__47863 = p__47862;
var map__47863__$1 = cljs.core.__destructure_map(map__47863);
var opts = map__47863__$1;
var statearr_47864_48911 = state;
(statearr_47864_48911[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_47865_48912 = state;
(statearr_47865_48912[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_47866_48913 = state;
(statearr_47866_48913[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq47858){
var G__47859 = cljs.core.first(seq47858);
var seq47858__$1 = cljs.core.next(seq47858);
var G__47860 = cljs.core.first(seq47858__$1);
var seq47858__$2 = cljs.core.next(seq47858__$1);
var G__47861 = cljs.core.first(seq47858__$2);
var seq47858__$3 = cljs.core.next(seq47858__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47859,G__47860,G__47861,seq47858__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47867 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47867 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta47868){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta47868 = meta47868;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47869,meta47868__$1){
var self__ = this;
var _47869__$1 = this;
return (new cljs.core.async.t_cljs$core$async47867(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta47868__$1));
}));

(cljs.core.async.t_cljs$core$async47867.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47869){
var self__ = this;
var _47869__$1 = this;
return self__.meta47868;
}));

(cljs.core.async.t_cljs$core$async47867.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47867.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async47867.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47867.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47867.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47867.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47867.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47867.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async47867.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta47868","meta47868",1850383471,null)], null);
}));

(cljs.core.async.t_cljs$core$async47867.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47867.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47867");

(cljs.core.async.t_cljs$core$async47867.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async47867");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47867.
 */
cljs.core.async.__GT_t_cljs$core$async47867 = (function cljs$core$async$mix_$___GT_t_cljs$core$async47867(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47868){
return (new cljs.core.async.t_cljs$core$async47867(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta47868));
});

}

return (new cljs.core.async.t_cljs$core$async47867(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47148__auto___48914 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47149__auto__ = (function (){var switch__47065__auto__ = (function (state_47937){
var state_val_47938 = (state_47937[(1)]);
if((state_val_47938 === (7))){
var inst_47897 = (state_47937[(2)]);
var state_47937__$1 = state_47937;
if(cljs.core.truth_(inst_47897)){
var statearr_47939_48931 = state_47937__$1;
(statearr_47939_48931[(1)] = (8));

} else {
var statearr_47940_48932 = state_47937__$1;
(statearr_47940_48932[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47938 === (20))){
var inst_47890 = (state_47937[(7)]);
var state_47937__$1 = state_47937;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47937__$1,(23),out,inst_47890);
} else {
if((state_val_47938 === (1))){
var inst_47873 = calc_state();
var inst_47874 = cljs.core.__destructure_map(inst_47873);
var inst_47875 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47874,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47874,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47874,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_47878 = inst_47873;
var state_47937__$1 = (function (){var statearr_47941 = state_47937;
(statearr_47941[(8)] = inst_47877);

(statearr_47941[(9)] = inst_47878);

(statearr_47941[(10)] = inst_47875);

(statearr_47941[(11)] = inst_47876);

return statearr_47941;
})();
var statearr_47942_48933 = state_47937__$1;
(statearr_47942_48933[(2)] = null);

(statearr_47942_48933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47938 === (24))){
var inst_47881 = (state_47937[(12)]);
var inst_47878 = inst_47881;
var state_47937__$1 = (function (){var statearr_47943 = state_47937;
(statearr_47943[(9)] = inst_47878);

return statearr_47943;
})();
var statearr_47944_48934 = state_47937__$1;
(statearr_47944_48934[(2)] = null);

(statearr_47944_48934[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47938 === (4))){
var inst_47892 = (state_47937[(13)]);
var inst_47890 = (state_47937[(7)]);
var inst_47889 = (state_47937[(2)]);
var inst_47890__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47889,(0),null);
var inst_47891 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47889,(1),null);
var inst_47892__$1 = (inst_47890__$1 == null);
var state_47937__$1 = (function (){var statearr_47945 = state_47937;
(statearr_47945[(13)] = inst_47892__$1);

(statearr_47945[(7)] = inst_47890__$1);

(statearr_47945[(14)] = inst_47891);

return statearr_47945;
})();
if(cljs.core.truth_(inst_47892__$1)){
var statearr_47946_48935 = state_47937__$1;
(statearr_47946_48935[(1)] = (5));

} else {
var statearr_47947_48936 = state_47937__$1;
(statearr_47947_48936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47938 === (15))){
var inst_47911 = (state_47937[(15)]);
var inst_47882 = (state_47937[(16)]);
var inst_47911__$1 = cljs.core.empty_QMARK_(inst_47882);
var state_47937__$1 = (function (){var statearr_47948 = state_47937;
(statearr_47948[(15)] = inst_47911__$1);

return statearr_47948;
})();
if(inst_47911__$1){
var statearr_47949_48937 = state_47937__$1;
(statearr_47949_48937[(1)] = (17));

} else {
var statearr_47950_48938 = state_47937__$1;
(statearr_47950_48938[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47938 === (21))){
var inst_47881 = (state_47937[(12)]);
var inst_47878 = inst_47881;
var state_47937__$1 = (function (){var statearr_47951 = state_47937;
(statearr_47951[(9)] = inst_47878);

return statearr_47951;
})();
var statearr_47952_48939 = state_47937__$1;
(statearr_47952_48939[(2)] = null);

(statearr_47952_48939[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47938 === (13))){
var inst_47904 = (state_47937[(2)]);
var inst_47905 = calc_state();
var inst_47878 = inst_47905;
var state_47937__$1 = (function (){var statearr_47953 = state_47937;
(statearr_47953[(17)] = inst_47904);

(statearr_47953[(9)] = inst_47878);

return statearr_47953;
})();
var statearr_47954_48940 = state_47937__$1;
(statearr_47954_48940[(2)] = null);

(statearr_47954_48940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47938 === (22))){
var inst_47931 = (state_47937[(2)]);
var state_47937__$1 = state_47937;
var statearr_47955_48941 = state_47937__$1;
(statearr_47955_48941[(2)] = inst_47931);

(statearr_47955_48941[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47938 === (6))){
var inst_47891 = (state_47937[(14)]);
var inst_47895 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47891,change);
var state_47937__$1 = state_47937;
var statearr_47956_48942 = state_47937__$1;
(statearr_47956_48942[(2)] = inst_47895);

(statearr_47956_48942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47938 === (25))){
var state_47937__$1 = state_47937;
var statearr_47957_48943 = state_47937__$1;
(statearr_47957_48943[(2)] = null);

(statearr_47957_48943[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47938 === (17))){
var inst_47891 = (state_47937[(14)]);
var inst_47883 = (state_47937[(18)]);
var inst_47913 = (inst_47883.cljs$core$IFn$_invoke$arity$1 ? inst_47883.cljs$core$IFn$_invoke$arity$1(inst_47891) : inst_47883.call(null,inst_47891));
var inst_47914 = cljs.core.not(inst_47913);
var state_47937__$1 = state_47937;
var statearr_47958_48944 = state_47937__$1;
(statearr_47958_48944[(2)] = inst_47914);

(statearr_47958_48944[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47938 === (3))){
var inst_47935 = (state_47937[(2)]);
var state_47937__$1 = state_47937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47937__$1,inst_47935);
} else {
if((state_val_47938 === (12))){
var state_47937__$1 = state_47937;
var statearr_47959_48945 = state_47937__$1;
(statearr_47959_48945[(2)] = null);

(statearr_47959_48945[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47938 === (2))){
var inst_47881 = (state_47937[(12)]);
var inst_47878 = (state_47937[(9)]);
var inst_47881__$1 = cljs.core.__destructure_map(inst_47878);
var inst_47882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47881__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_47883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47881__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_47884 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47881__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_47937__$1 = (function (){var statearr_47960 = state_47937;
(statearr_47960[(12)] = inst_47881__$1);

(statearr_47960[(18)] = inst_47883);

(statearr_47960[(16)] = inst_47882);

return statearr_47960;
})();
return cljs.core.async.ioc_alts_BANG_(state_47937__$1,(4),inst_47884);
} else {
if((state_val_47938 === (23))){
var inst_47922 = (state_47937[(2)]);
var state_47937__$1 = state_47937;
if(cljs.core.truth_(inst_47922)){
var statearr_47961_48946 = state_47937__$1;
(statearr_47961_48946[(1)] = (24));

} else {
var statearr_47962_48947 = state_47937__$1;
(statearr_47962_48947[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47938 === (19))){
var inst_47917 = (state_47937[(2)]);
var state_47937__$1 = state_47937;
var statearr_47963_48948 = state_47937__$1;
(statearr_47963_48948[(2)] = inst_47917);

(statearr_47963_48948[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47938 === (11))){
var inst_47891 = (state_47937[(14)]);
var inst_47901 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_47891);
var state_47937__$1 = state_47937;
var statearr_47964_48949 = state_47937__$1;
(statearr_47964_48949[(2)] = inst_47901);

(statearr_47964_48949[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47938 === (9))){
var inst_47908 = (state_47937[(19)]);
var inst_47891 = (state_47937[(14)]);
var inst_47882 = (state_47937[(16)]);
var inst_47908__$1 = (inst_47882.cljs$core$IFn$_invoke$arity$1 ? inst_47882.cljs$core$IFn$_invoke$arity$1(inst_47891) : inst_47882.call(null,inst_47891));
var state_47937__$1 = (function (){var statearr_47965 = state_47937;
(statearr_47965[(19)] = inst_47908__$1);

return statearr_47965;
})();
if(cljs.core.truth_(inst_47908__$1)){
var statearr_47966_48950 = state_47937__$1;
(statearr_47966_48950[(1)] = (14));

} else {
var statearr_47967_48951 = state_47937__$1;
(statearr_47967_48951[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47938 === (5))){
var inst_47892 = (state_47937[(13)]);
var state_47937__$1 = state_47937;
var statearr_47968_48952 = state_47937__$1;
(statearr_47968_48952[(2)] = inst_47892);

(statearr_47968_48952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47938 === (14))){
var inst_47908 = (state_47937[(19)]);
var state_47937__$1 = state_47937;
var statearr_47969_48953 = state_47937__$1;
(statearr_47969_48953[(2)] = inst_47908);

(statearr_47969_48953[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47938 === (26))){
var inst_47927 = (state_47937[(2)]);
var state_47937__$1 = state_47937;
var statearr_47970_48954 = state_47937__$1;
(statearr_47970_48954[(2)] = inst_47927);

(statearr_47970_48954[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47938 === (16))){
var inst_47919 = (state_47937[(2)]);
var state_47937__$1 = state_47937;
if(cljs.core.truth_(inst_47919)){
var statearr_47971_48955 = state_47937__$1;
(statearr_47971_48955[(1)] = (20));

} else {
var statearr_47972_48956 = state_47937__$1;
(statearr_47972_48956[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47938 === (10))){
var inst_47933 = (state_47937[(2)]);
var state_47937__$1 = state_47937;
var statearr_47973_48957 = state_47937__$1;
(statearr_47973_48957[(2)] = inst_47933);

(statearr_47973_48957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47938 === (18))){
var inst_47911 = (state_47937[(15)]);
var state_47937__$1 = state_47937;
var statearr_47974_48958 = state_47937__$1;
(statearr_47974_48958[(2)] = inst_47911);

(statearr_47974_48958[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47938 === (8))){
var inst_47890 = (state_47937[(7)]);
var inst_47899 = (inst_47890 == null);
var state_47937__$1 = state_47937;
if(cljs.core.truth_(inst_47899)){
var statearr_47975_48959 = state_47937__$1;
(statearr_47975_48959[(1)] = (11));

} else {
var statearr_47976_48960 = state_47937__$1;
(statearr_47976_48960[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__47066__auto__ = null;
var cljs$core$async$mix_$_state_machine__47066__auto____0 = (function (){
var statearr_47977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47977[(0)] = cljs$core$async$mix_$_state_machine__47066__auto__);

(statearr_47977[(1)] = (1));

return statearr_47977;
});
var cljs$core$async$mix_$_state_machine__47066__auto____1 = (function (state_47937){
while(true){
var ret_value__47067__auto__ = (function (){try{while(true){
var result__47068__auto__ = switch__47065__auto__(state_47937);
if(cljs.core.keyword_identical_QMARK_(result__47068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47068__auto__;
}
break;
}
}catch (e47978){var ex__47069__auto__ = e47978;
var statearr_47979_48961 = state_47937;
(statearr_47979_48961[(2)] = ex__47069__auto__);


if(cljs.core.seq((state_47937[(4)]))){
var statearr_47980_48962 = state_47937;
(statearr_47980_48962[(1)] = cljs.core.first((state_47937[(4)])));

} else {
throw ex__47069__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48963 = state_47937;
state_47937 = G__48963;
continue;
} else {
return ret_value__47067__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__47066__auto__ = function(state_47937){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__47066__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__47066__auto____1.call(this,state_47937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__47066__auto____0;
cljs$core$async$mix_$_state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__47066__auto____1;
return cljs$core$async$mix_$_state_machine__47066__auto__;
})()
})();
var state__47150__auto__ = (function (){var statearr_47981 = f__47149__auto__();
(statearr_47981[(6)] = c__47148__auto___48914);

return statearr_47981;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47150__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_48964 = (function (p,v,ch,close_QMARK_){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4510__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4508__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4508__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_48964(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_48965 = (function (p,v,ch){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4510__auto__.call(null,p,v,ch));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4508__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_48965(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_48973 = (function() {
var G__48974 = null;
var G__48974__1 = (function (p){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4510__auto__.call(null,p));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4508__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__48974__2 = (function (p,v){
var x__4509__auto__ = (((p == null))?null:p);
var m__4510__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4509__auto__)]);
if((!((m__4510__auto__ == null)))){
return (m__4510__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4510__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4510__auto__.call(null,p,v));
} else {
var m__4508__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4508__auto__ == null)))){
return (m__4508__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4508__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4508__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__48974 = function(p,v){
switch(arguments.length){
case 1:
return G__48974__1.call(this,p);
case 2:
return G__48974__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__48974.cljs$core$IFn$_invoke$arity$1 = G__48974__1;
G__48974.cljs$core$IFn$_invoke$arity$2 = G__48974__2;
return G__48974;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__47983 = arguments.length;
switch (G__47983) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48973(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_48973(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__47986 = arguments.length;
switch (G__47986) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4212__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4212__auto__)){
return or__4212__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__47984_SHARP_){
if(cljs.core.truth_((p1__47984_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__47984_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__47984_SHARP_.call(null,topic)))){
return p1__47984_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__47984_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47987 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47987 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta47988){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta47988 = meta47988;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47989,meta47988__$1){
var self__ = this;
var _47989__$1 = this;
return (new cljs.core.async.t_cljs$core$async47987(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta47988__$1));
}));

(cljs.core.async.t_cljs$core$async47987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47989){
var self__ = this;
var _47989__$1 = this;
return self__.meta47988;
}));

(cljs.core.async.t_cljs$core$async47987.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47987.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async47987.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47987.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async47987.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async47987.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async47987.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async47987.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta47988","meta47988",-1042990092,null)], null);
}));

(cljs.core.async.t_cljs$core$async47987.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47987.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47987");

(cljs.core.async.t_cljs$core$async47987.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async47987");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47987.
 */
cljs.core.async.__GT_t_cljs$core$async47987 = (function cljs$core$async$__GT_t_cljs$core$async47987(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47988){
return (new cljs.core.async.t_cljs$core$async47987(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta47988));
});

}

return (new cljs.core.async.t_cljs$core$async47987(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__47148__auto___48983 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47149__auto__ = (function (){var switch__47065__auto__ = (function (state_48061){
var state_val_48062 = (state_48061[(1)]);
if((state_val_48062 === (7))){
var inst_48057 = (state_48061[(2)]);
var state_48061__$1 = state_48061;
var statearr_48063_48987 = state_48061__$1;
(statearr_48063_48987[(2)] = inst_48057);

(statearr_48063_48987[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (20))){
var state_48061__$1 = state_48061;
var statearr_48064_48988 = state_48061__$1;
(statearr_48064_48988[(2)] = null);

(statearr_48064_48988[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (1))){
var state_48061__$1 = state_48061;
var statearr_48065_48989 = state_48061__$1;
(statearr_48065_48989[(2)] = null);

(statearr_48065_48989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (24))){
var inst_48040 = (state_48061[(7)]);
var inst_48049 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_48040);
var state_48061__$1 = state_48061;
var statearr_48066_48990 = state_48061__$1;
(statearr_48066_48990[(2)] = inst_48049);

(statearr_48066_48990[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (4))){
var inst_47992 = (state_48061[(8)]);
var inst_47992__$1 = (state_48061[(2)]);
var inst_47993 = (inst_47992__$1 == null);
var state_48061__$1 = (function (){var statearr_48067 = state_48061;
(statearr_48067[(8)] = inst_47992__$1);

return statearr_48067;
})();
if(cljs.core.truth_(inst_47993)){
var statearr_48068_48991 = state_48061__$1;
(statearr_48068_48991[(1)] = (5));

} else {
var statearr_48069_48993 = state_48061__$1;
(statearr_48069_48993[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (15))){
var inst_48034 = (state_48061[(2)]);
var state_48061__$1 = state_48061;
var statearr_48070_48994 = state_48061__$1;
(statearr_48070_48994[(2)] = inst_48034);

(statearr_48070_48994[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (21))){
var inst_48054 = (state_48061[(2)]);
var state_48061__$1 = (function (){var statearr_48071 = state_48061;
(statearr_48071[(9)] = inst_48054);

return statearr_48071;
})();
var statearr_48072_48995 = state_48061__$1;
(statearr_48072_48995[(2)] = null);

(statearr_48072_48995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (13))){
var inst_48016 = (state_48061[(10)]);
var inst_48018 = cljs.core.chunked_seq_QMARK_(inst_48016);
var state_48061__$1 = state_48061;
if(inst_48018){
var statearr_48073_48996 = state_48061__$1;
(statearr_48073_48996[(1)] = (16));

} else {
var statearr_48074_48997 = state_48061__$1;
(statearr_48074_48997[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (22))){
var inst_48046 = (state_48061[(2)]);
var state_48061__$1 = state_48061;
if(cljs.core.truth_(inst_48046)){
var statearr_48075_48998 = state_48061__$1;
(statearr_48075_48998[(1)] = (23));

} else {
var statearr_48076_48999 = state_48061__$1;
(statearr_48076_48999[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (6))){
var inst_48042 = (state_48061[(11)]);
var inst_48040 = (state_48061[(7)]);
var inst_47992 = (state_48061[(8)]);
var inst_48040__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_47992) : topic_fn.call(null,inst_47992));
var inst_48041 = cljs.core.deref(mults);
var inst_48042__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_48041,inst_48040__$1);
var state_48061__$1 = (function (){var statearr_48077 = state_48061;
(statearr_48077[(11)] = inst_48042__$1);

(statearr_48077[(7)] = inst_48040__$1);

return statearr_48077;
})();
if(cljs.core.truth_(inst_48042__$1)){
var statearr_48078_49000 = state_48061__$1;
(statearr_48078_49000[(1)] = (19));

} else {
var statearr_48079_49001 = state_48061__$1;
(statearr_48079_49001[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (25))){
var inst_48051 = (state_48061[(2)]);
var state_48061__$1 = state_48061;
var statearr_48080_49002 = state_48061__$1;
(statearr_48080_49002[(2)] = inst_48051);

(statearr_48080_49002[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (17))){
var inst_48016 = (state_48061[(10)]);
var inst_48025 = cljs.core.first(inst_48016);
var inst_48026 = cljs.core.async.muxch_STAR_(inst_48025);
var inst_48027 = cljs.core.async.close_BANG_(inst_48026);
var inst_48028 = cljs.core.next(inst_48016);
var inst_48002 = inst_48028;
var inst_48003 = null;
var inst_48004 = (0);
var inst_48005 = (0);
var state_48061__$1 = (function (){var statearr_48081 = state_48061;
(statearr_48081[(12)] = inst_48005);

(statearr_48081[(13)] = inst_48027);

(statearr_48081[(14)] = inst_48003);

(statearr_48081[(15)] = inst_48004);

(statearr_48081[(16)] = inst_48002);

return statearr_48081;
})();
var statearr_48082_49003 = state_48061__$1;
(statearr_48082_49003[(2)] = null);

(statearr_48082_49003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (3))){
var inst_48059 = (state_48061[(2)]);
var state_48061__$1 = state_48061;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48061__$1,inst_48059);
} else {
if((state_val_48062 === (12))){
var inst_48036 = (state_48061[(2)]);
var state_48061__$1 = state_48061;
var statearr_48083_49004 = state_48061__$1;
(statearr_48083_49004[(2)] = inst_48036);

(statearr_48083_49004[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (2))){
var state_48061__$1 = state_48061;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48061__$1,(4),ch);
} else {
if((state_val_48062 === (23))){
var state_48061__$1 = state_48061;
var statearr_48084_49005 = state_48061__$1;
(statearr_48084_49005[(2)] = null);

(statearr_48084_49005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (19))){
var inst_48042 = (state_48061[(11)]);
var inst_47992 = (state_48061[(8)]);
var inst_48044 = cljs.core.async.muxch_STAR_(inst_48042);
var state_48061__$1 = state_48061;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48061__$1,(22),inst_48044,inst_47992);
} else {
if((state_val_48062 === (11))){
var inst_48016 = (state_48061[(10)]);
var inst_48002 = (state_48061[(16)]);
var inst_48016__$1 = cljs.core.seq(inst_48002);
var state_48061__$1 = (function (){var statearr_48085 = state_48061;
(statearr_48085[(10)] = inst_48016__$1);

return statearr_48085;
})();
if(inst_48016__$1){
var statearr_48086_49006 = state_48061__$1;
(statearr_48086_49006[(1)] = (13));

} else {
var statearr_48087_49007 = state_48061__$1;
(statearr_48087_49007[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (9))){
var inst_48038 = (state_48061[(2)]);
var state_48061__$1 = state_48061;
var statearr_48088_49008 = state_48061__$1;
(statearr_48088_49008[(2)] = inst_48038);

(statearr_48088_49008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (5))){
var inst_47999 = cljs.core.deref(mults);
var inst_48000 = cljs.core.vals(inst_47999);
var inst_48001 = cljs.core.seq(inst_48000);
var inst_48002 = inst_48001;
var inst_48003 = null;
var inst_48004 = (0);
var inst_48005 = (0);
var state_48061__$1 = (function (){var statearr_48089 = state_48061;
(statearr_48089[(12)] = inst_48005);

(statearr_48089[(14)] = inst_48003);

(statearr_48089[(15)] = inst_48004);

(statearr_48089[(16)] = inst_48002);

return statearr_48089;
})();
var statearr_48090_49009 = state_48061__$1;
(statearr_48090_49009[(2)] = null);

(statearr_48090_49009[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (14))){
var state_48061__$1 = state_48061;
var statearr_48094_49010 = state_48061__$1;
(statearr_48094_49010[(2)] = null);

(statearr_48094_49010[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (16))){
var inst_48016 = (state_48061[(10)]);
var inst_48020 = cljs.core.chunk_first(inst_48016);
var inst_48021 = cljs.core.chunk_rest(inst_48016);
var inst_48022 = cljs.core.count(inst_48020);
var inst_48002 = inst_48021;
var inst_48003 = inst_48020;
var inst_48004 = inst_48022;
var inst_48005 = (0);
var state_48061__$1 = (function (){var statearr_48095 = state_48061;
(statearr_48095[(12)] = inst_48005);

(statearr_48095[(14)] = inst_48003);

(statearr_48095[(15)] = inst_48004);

(statearr_48095[(16)] = inst_48002);

return statearr_48095;
})();
var statearr_48096_49011 = state_48061__$1;
(statearr_48096_49011[(2)] = null);

(statearr_48096_49011[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (10))){
var inst_48005 = (state_48061[(12)]);
var inst_48003 = (state_48061[(14)]);
var inst_48004 = (state_48061[(15)]);
var inst_48002 = (state_48061[(16)]);
var inst_48010 = cljs.core._nth(inst_48003,inst_48005);
var inst_48011 = cljs.core.async.muxch_STAR_(inst_48010);
var inst_48012 = cljs.core.async.close_BANG_(inst_48011);
var inst_48013 = (inst_48005 + (1));
var tmp48091 = inst_48003;
var tmp48092 = inst_48004;
var tmp48093 = inst_48002;
var inst_48002__$1 = tmp48093;
var inst_48003__$1 = tmp48091;
var inst_48004__$1 = tmp48092;
var inst_48005__$1 = inst_48013;
var state_48061__$1 = (function (){var statearr_48097 = state_48061;
(statearr_48097[(17)] = inst_48012);

(statearr_48097[(12)] = inst_48005__$1);

(statearr_48097[(14)] = inst_48003__$1);

(statearr_48097[(15)] = inst_48004__$1);

(statearr_48097[(16)] = inst_48002__$1);

return statearr_48097;
})();
var statearr_48098_49012 = state_48061__$1;
(statearr_48098_49012[(2)] = null);

(statearr_48098_49012[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (18))){
var inst_48031 = (state_48061[(2)]);
var state_48061__$1 = state_48061;
var statearr_48099_49013 = state_48061__$1;
(statearr_48099_49013[(2)] = inst_48031);

(statearr_48099_49013[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48062 === (8))){
var inst_48005 = (state_48061[(12)]);
var inst_48004 = (state_48061[(15)]);
var inst_48007 = (inst_48005 < inst_48004);
var inst_48008 = inst_48007;
var state_48061__$1 = state_48061;
if(cljs.core.truth_(inst_48008)){
var statearr_48100_49014 = state_48061__$1;
(statearr_48100_49014[(1)] = (10));

} else {
var statearr_48101_49015 = state_48061__$1;
(statearr_48101_49015[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47066__auto__ = null;
var cljs$core$async$state_machine__47066__auto____0 = (function (){
var statearr_48102 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48102[(0)] = cljs$core$async$state_machine__47066__auto__);

(statearr_48102[(1)] = (1));

return statearr_48102;
});
var cljs$core$async$state_machine__47066__auto____1 = (function (state_48061){
while(true){
var ret_value__47067__auto__ = (function (){try{while(true){
var result__47068__auto__ = switch__47065__auto__(state_48061);
if(cljs.core.keyword_identical_QMARK_(result__47068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47068__auto__;
}
break;
}
}catch (e48103){var ex__47069__auto__ = e48103;
var statearr_48104_49016 = state_48061;
(statearr_48104_49016[(2)] = ex__47069__auto__);


if(cljs.core.seq((state_48061[(4)]))){
var statearr_48105_49017 = state_48061;
(statearr_48105_49017[(1)] = cljs.core.first((state_48061[(4)])));

} else {
throw ex__47069__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49019 = state_48061;
state_48061 = G__49019;
continue;
} else {
return ret_value__47067__auto__;
}
break;
}
});
cljs$core$async$state_machine__47066__auto__ = function(state_48061){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47066__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47066__auto____1.call(this,state_48061);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47066__auto____0;
cljs$core$async$state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47066__auto____1;
return cljs$core$async$state_machine__47066__auto__;
})()
})();
var state__47150__auto__ = (function (){var statearr_48106 = f__47149__auto__();
(statearr_48106[(6)] = c__47148__auto___48983);

return statearr_48106;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47150__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__48108 = arguments.length;
switch (G__48108) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__48110 = arguments.length;
switch (G__48110) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__48112 = arguments.length;
switch (G__48112) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__47148__auto___49030 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47149__auto__ = (function (){var switch__47065__auto__ = (function (state_48155){
var state_val_48156 = (state_48155[(1)]);
if((state_val_48156 === (7))){
var state_48155__$1 = state_48155;
var statearr_48157_49031 = state_48155__$1;
(statearr_48157_49031[(2)] = null);

(statearr_48157_49031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48156 === (1))){
var state_48155__$1 = state_48155;
var statearr_48158_49032 = state_48155__$1;
(statearr_48158_49032[(2)] = null);

(statearr_48158_49032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48156 === (4))){
var inst_48115 = (state_48155[(7)]);
var inst_48116 = (state_48155[(8)]);
var inst_48118 = (inst_48116 < inst_48115);
var state_48155__$1 = state_48155;
if(cljs.core.truth_(inst_48118)){
var statearr_48159_49033 = state_48155__$1;
(statearr_48159_49033[(1)] = (6));

} else {
var statearr_48160_49034 = state_48155__$1;
(statearr_48160_49034[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48156 === (15))){
var inst_48141 = (state_48155[(9)]);
var inst_48146 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_48141);
var state_48155__$1 = state_48155;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48155__$1,(17),out,inst_48146);
} else {
if((state_val_48156 === (13))){
var inst_48141 = (state_48155[(9)]);
var inst_48141__$1 = (state_48155[(2)]);
var inst_48142 = cljs.core.some(cljs.core.nil_QMARK_,inst_48141__$1);
var state_48155__$1 = (function (){var statearr_48161 = state_48155;
(statearr_48161[(9)] = inst_48141__$1);

return statearr_48161;
})();
if(cljs.core.truth_(inst_48142)){
var statearr_48162_49035 = state_48155__$1;
(statearr_48162_49035[(1)] = (14));

} else {
var statearr_48163_49036 = state_48155__$1;
(statearr_48163_49036[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48156 === (6))){
var state_48155__$1 = state_48155;
var statearr_48164_49037 = state_48155__$1;
(statearr_48164_49037[(2)] = null);

(statearr_48164_49037[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48156 === (17))){
var inst_48148 = (state_48155[(2)]);
var state_48155__$1 = (function (){var statearr_48166 = state_48155;
(statearr_48166[(10)] = inst_48148);

return statearr_48166;
})();
var statearr_48167_49038 = state_48155__$1;
(statearr_48167_49038[(2)] = null);

(statearr_48167_49038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48156 === (3))){
var inst_48153 = (state_48155[(2)]);
var state_48155__$1 = state_48155;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48155__$1,inst_48153);
} else {
if((state_val_48156 === (12))){
var _ = (function (){var statearr_48168 = state_48155;
(statearr_48168[(4)] = cljs.core.rest((state_48155[(4)])));

return statearr_48168;
})();
var state_48155__$1 = state_48155;
var ex48165 = (state_48155__$1[(2)]);
var statearr_48169_49039 = state_48155__$1;
(statearr_48169_49039[(5)] = ex48165);


if((ex48165 instanceof Object)){
var statearr_48170_49040 = state_48155__$1;
(statearr_48170_49040[(1)] = (11));

(statearr_48170_49040[(5)] = null);

} else {
throw ex48165;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48156 === (2))){
var inst_48114 = cljs.core.reset_BANG_(dctr,cnt);
var inst_48115 = cnt;
var inst_48116 = (0);
var state_48155__$1 = (function (){var statearr_48171 = state_48155;
(statearr_48171[(7)] = inst_48115);

(statearr_48171[(8)] = inst_48116);

(statearr_48171[(11)] = inst_48114);

return statearr_48171;
})();
var statearr_48172_49041 = state_48155__$1;
(statearr_48172_49041[(2)] = null);

(statearr_48172_49041[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48156 === (11))){
var inst_48120 = (state_48155[(2)]);
var inst_48121 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_48155__$1 = (function (){var statearr_48173 = state_48155;
(statearr_48173[(12)] = inst_48120);

return statearr_48173;
})();
var statearr_48174_49042 = state_48155__$1;
(statearr_48174_49042[(2)] = inst_48121);

(statearr_48174_49042[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48156 === (9))){
var inst_48116 = (state_48155[(8)]);
var _ = (function (){var statearr_48175 = state_48155;
(statearr_48175[(4)] = cljs.core.cons((12),(state_48155[(4)])));

return statearr_48175;
})();
var inst_48127 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_48116) : chs__$1.call(null,inst_48116));
var inst_48128 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_48116) : done.call(null,inst_48116));
var inst_48129 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_48127,inst_48128);
var ___$1 = (function (){var statearr_48176 = state_48155;
(statearr_48176[(4)] = cljs.core.rest((state_48155[(4)])));

return statearr_48176;
})();
var state_48155__$1 = state_48155;
var statearr_48177_49043 = state_48155__$1;
(statearr_48177_49043[(2)] = inst_48129);

(statearr_48177_49043[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48156 === (5))){
var inst_48139 = (state_48155[(2)]);
var state_48155__$1 = (function (){var statearr_48178 = state_48155;
(statearr_48178[(13)] = inst_48139);

return statearr_48178;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48155__$1,(13),dchan);
} else {
if((state_val_48156 === (14))){
var inst_48144 = cljs.core.async.close_BANG_(out);
var state_48155__$1 = state_48155;
var statearr_48179_49044 = state_48155__$1;
(statearr_48179_49044[(2)] = inst_48144);

(statearr_48179_49044[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48156 === (16))){
var inst_48151 = (state_48155[(2)]);
var state_48155__$1 = state_48155;
var statearr_48180_49045 = state_48155__$1;
(statearr_48180_49045[(2)] = inst_48151);

(statearr_48180_49045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48156 === (10))){
var inst_48116 = (state_48155[(8)]);
var inst_48132 = (state_48155[(2)]);
var inst_48133 = (inst_48116 + (1));
var inst_48116__$1 = inst_48133;
var state_48155__$1 = (function (){var statearr_48181 = state_48155;
(statearr_48181[(14)] = inst_48132);

(statearr_48181[(8)] = inst_48116__$1);

return statearr_48181;
})();
var statearr_48182_49046 = state_48155__$1;
(statearr_48182_49046[(2)] = null);

(statearr_48182_49046[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48156 === (8))){
var inst_48137 = (state_48155[(2)]);
var state_48155__$1 = state_48155;
var statearr_48183_49047 = state_48155__$1;
(statearr_48183_49047[(2)] = inst_48137);

(statearr_48183_49047[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47066__auto__ = null;
var cljs$core$async$state_machine__47066__auto____0 = (function (){
var statearr_48184 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48184[(0)] = cljs$core$async$state_machine__47066__auto__);

(statearr_48184[(1)] = (1));

return statearr_48184;
});
var cljs$core$async$state_machine__47066__auto____1 = (function (state_48155){
while(true){
var ret_value__47067__auto__ = (function (){try{while(true){
var result__47068__auto__ = switch__47065__auto__(state_48155);
if(cljs.core.keyword_identical_QMARK_(result__47068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47068__auto__;
}
break;
}
}catch (e48185){var ex__47069__auto__ = e48185;
var statearr_48186_49048 = state_48155;
(statearr_48186_49048[(2)] = ex__47069__auto__);


if(cljs.core.seq((state_48155[(4)]))){
var statearr_48187_49049 = state_48155;
(statearr_48187_49049[(1)] = cljs.core.first((state_48155[(4)])));

} else {
throw ex__47069__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49050 = state_48155;
state_48155 = G__49050;
continue;
} else {
return ret_value__47067__auto__;
}
break;
}
});
cljs$core$async$state_machine__47066__auto__ = function(state_48155){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47066__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47066__auto____1.call(this,state_48155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47066__auto____0;
cljs$core$async$state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47066__auto____1;
return cljs$core$async$state_machine__47066__auto__;
})()
})();
var state__47150__auto__ = (function (){var statearr_48188 = f__47149__auto__();
(statearr_48188[(6)] = c__47148__auto___49030);

return statearr_48188;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47150__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__48191 = arguments.length;
switch (G__48191) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47148__auto___49052 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47149__auto__ = (function (){var switch__47065__auto__ = (function (state_48223){
var state_val_48224 = (state_48223[(1)]);
if((state_val_48224 === (7))){
var inst_48203 = (state_48223[(7)]);
var inst_48202 = (state_48223[(8)]);
var inst_48202__$1 = (state_48223[(2)]);
var inst_48203__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48202__$1,(0),null);
var inst_48204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_48202__$1,(1),null);
var inst_48205 = (inst_48203__$1 == null);
var state_48223__$1 = (function (){var statearr_48225 = state_48223;
(statearr_48225[(9)] = inst_48204);

(statearr_48225[(7)] = inst_48203__$1);

(statearr_48225[(8)] = inst_48202__$1);

return statearr_48225;
})();
if(cljs.core.truth_(inst_48205)){
var statearr_48226_49053 = state_48223__$1;
(statearr_48226_49053[(1)] = (8));

} else {
var statearr_48227_49054 = state_48223__$1;
(statearr_48227_49054[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48224 === (1))){
var inst_48192 = cljs.core.vec(chs);
var inst_48193 = inst_48192;
var state_48223__$1 = (function (){var statearr_48228 = state_48223;
(statearr_48228[(10)] = inst_48193);

return statearr_48228;
})();
var statearr_48229_49055 = state_48223__$1;
(statearr_48229_49055[(2)] = null);

(statearr_48229_49055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48224 === (4))){
var inst_48193 = (state_48223[(10)]);
var state_48223__$1 = state_48223;
return cljs.core.async.ioc_alts_BANG_(state_48223__$1,(7),inst_48193);
} else {
if((state_val_48224 === (6))){
var inst_48219 = (state_48223[(2)]);
var state_48223__$1 = state_48223;
var statearr_48230_49056 = state_48223__$1;
(statearr_48230_49056[(2)] = inst_48219);

(statearr_48230_49056[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48224 === (3))){
var inst_48221 = (state_48223[(2)]);
var state_48223__$1 = state_48223;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48223__$1,inst_48221);
} else {
if((state_val_48224 === (2))){
var inst_48193 = (state_48223[(10)]);
var inst_48195 = cljs.core.count(inst_48193);
var inst_48196 = (inst_48195 > (0));
var state_48223__$1 = state_48223;
if(cljs.core.truth_(inst_48196)){
var statearr_48232_49057 = state_48223__$1;
(statearr_48232_49057[(1)] = (4));

} else {
var statearr_48233_49058 = state_48223__$1;
(statearr_48233_49058[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48224 === (11))){
var inst_48193 = (state_48223[(10)]);
var inst_48212 = (state_48223[(2)]);
var tmp48231 = inst_48193;
var inst_48193__$1 = tmp48231;
var state_48223__$1 = (function (){var statearr_48234 = state_48223;
(statearr_48234[(11)] = inst_48212);

(statearr_48234[(10)] = inst_48193__$1);

return statearr_48234;
})();
var statearr_48235_49059 = state_48223__$1;
(statearr_48235_49059[(2)] = null);

(statearr_48235_49059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48224 === (9))){
var inst_48203 = (state_48223[(7)]);
var state_48223__$1 = state_48223;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48223__$1,(11),out,inst_48203);
} else {
if((state_val_48224 === (5))){
var inst_48217 = cljs.core.async.close_BANG_(out);
var state_48223__$1 = state_48223;
var statearr_48236_49060 = state_48223__$1;
(statearr_48236_49060[(2)] = inst_48217);

(statearr_48236_49060[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48224 === (10))){
var inst_48215 = (state_48223[(2)]);
var state_48223__$1 = state_48223;
var statearr_48237_49061 = state_48223__$1;
(statearr_48237_49061[(2)] = inst_48215);

(statearr_48237_49061[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48224 === (8))){
var inst_48204 = (state_48223[(9)]);
var inst_48203 = (state_48223[(7)]);
var inst_48202 = (state_48223[(8)]);
var inst_48193 = (state_48223[(10)]);
var inst_48207 = (function (){var cs = inst_48193;
var vec__48198 = inst_48202;
var v = inst_48203;
var c = inst_48204;
return (function (p1__48189_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__48189_SHARP_);
});
})();
var inst_48208 = cljs.core.filterv(inst_48207,inst_48193);
var inst_48193__$1 = inst_48208;
var state_48223__$1 = (function (){var statearr_48238 = state_48223;
(statearr_48238[(10)] = inst_48193__$1);

return statearr_48238;
})();
var statearr_48239_49063 = state_48223__$1;
(statearr_48239_49063[(2)] = null);

(statearr_48239_49063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47066__auto__ = null;
var cljs$core$async$state_machine__47066__auto____0 = (function (){
var statearr_48240 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48240[(0)] = cljs$core$async$state_machine__47066__auto__);

(statearr_48240[(1)] = (1));

return statearr_48240;
});
var cljs$core$async$state_machine__47066__auto____1 = (function (state_48223){
while(true){
var ret_value__47067__auto__ = (function (){try{while(true){
var result__47068__auto__ = switch__47065__auto__(state_48223);
if(cljs.core.keyword_identical_QMARK_(result__47068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47068__auto__;
}
break;
}
}catch (e48241){var ex__47069__auto__ = e48241;
var statearr_48242_49067 = state_48223;
(statearr_48242_49067[(2)] = ex__47069__auto__);


if(cljs.core.seq((state_48223[(4)]))){
var statearr_48243_49068 = state_48223;
(statearr_48243_49068[(1)] = cljs.core.first((state_48223[(4)])));

} else {
throw ex__47069__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49069 = state_48223;
state_48223 = G__49069;
continue;
} else {
return ret_value__47067__auto__;
}
break;
}
});
cljs$core$async$state_machine__47066__auto__ = function(state_48223){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47066__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47066__auto____1.call(this,state_48223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47066__auto____0;
cljs$core$async$state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47066__auto____1;
return cljs$core$async$state_machine__47066__auto__;
})()
})();
var state__47150__auto__ = (function (){var statearr_48244 = f__47149__auto__();
(statearr_48244[(6)] = c__47148__auto___49052);

return statearr_48244;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47150__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__48246 = arguments.length;
switch (G__48246) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47148__auto___49075 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47149__auto__ = (function (){var switch__47065__auto__ = (function (state_48270){
var state_val_48271 = (state_48270[(1)]);
if((state_val_48271 === (7))){
var inst_48252 = (state_48270[(7)]);
var inst_48252__$1 = (state_48270[(2)]);
var inst_48253 = (inst_48252__$1 == null);
var inst_48254 = cljs.core.not(inst_48253);
var state_48270__$1 = (function (){var statearr_48272 = state_48270;
(statearr_48272[(7)] = inst_48252__$1);

return statearr_48272;
})();
if(inst_48254){
var statearr_48273_49076 = state_48270__$1;
(statearr_48273_49076[(1)] = (8));

} else {
var statearr_48274_49077 = state_48270__$1;
(statearr_48274_49077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48271 === (1))){
var inst_48247 = (0);
var state_48270__$1 = (function (){var statearr_48275 = state_48270;
(statearr_48275[(8)] = inst_48247);

return statearr_48275;
})();
var statearr_48276_49078 = state_48270__$1;
(statearr_48276_49078[(2)] = null);

(statearr_48276_49078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48271 === (4))){
var state_48270__$1 = state_48270;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48270__$1,(7),ch);
} else {
if((state_val_48271 === (6))){
var inst_48265 = (state_48270[(2)]);
var state_48270__$1 = state_48270;
var statearr_48277_49079 = state_48270__$1;
(statearr_48277_49079[(2)] = inst_48265);

(statearr_48277_49079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48271 === (3))){
var inst_48267 = (state_48270[(2)]);
var inst_48268 = cljs.core.async.close_BANG_(out);
var state_48270__$1 = (function (){var statearr_48278 = state_48270;
(statearr_48278[(9)] = inst_48267);

return statearr_48278;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48270__$1,inst_48268);
} else {
if((state_val_48271 === (2))){
var inst_48247 = (state_48270[(8)]);
var inst_48249 = (inst_48247 < n);
var state_48270__$1 = state_48270;
if(cljs.core.truth_(inst_48249)){
var statearr_48279_49083 = state_48270__$1;
(statearr_48279_49083[(1)] = (4));

} else {
var statearr_48280_49084 = state_48270__$1;
(statearr_48280_49084[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48271 === (11))){
var inst_48247 = (state_48270[(8)]);
var inst_48257 = (state_48270[(2)]);
var inst_48258 = (inst_48247 + (1));
var inst_48247__$1 = inst_48258;
var state_48270__$1 = (function (){var statearr_48281 = state_48270;
(statearr_48281[(8)] = inst_48247__$1);

(statearr_48281[(10)] = inst_48257);

return statearr_48281;
})();
var statearr_48282_49089 = state_48270__$1;
(statearr_48282_49089[(2)] = null);

(statearr_48282_49089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48271 === (9))){
var state_48270__$1 = state_48270;
var statearr_48283_49090 = state_48270__$1;
(statearr_48283_49090[(2)] = null);

(statearr_48283_49090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48271 === (5))){
var state_48270__$1 = state_48270;
var statearr_48284_49091 = state_48270__$1;
(statearr_48284_49091[(2)] = null);

(statearr_48284_49091[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48271 === (10))){
var inst_48262 = (state_48270[(2)]);
var state_48270__$1 = state_48270;
var statearr_48285_49092 = state_48270__$1;
(statearr_48285_49092[(2)] = inst_48262);

(statearr_48285_49092[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48271 === (8))){
var inst_48252 = (state_48270[(7)]);
var state_48270__$1 = state_48270;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48270__$1,(11),out,inst_48252);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47066__auto__ = null;
var cljs$core$async$state_machine__47066__auto____0 = (function (){
var statearr_48286 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48286[(0)] = cljs$core$async$state_machine__47066__auto__);

(statearr_48286[(1)] = (1));

return statearr_48286;
});
var cljs$core$async$state_machine__47066__auto____1 = (function (state_48270){
while(true){
var ret_value__47067__auto__ = (function (){try{while(true){
var result__47068__auto__ = switch__47065__auto__(state_48270);
if(cljs.core.keyword_identical_QMARK_(result__47068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47068__auto__;
}
break;
}
}catch (e48287){var ex__47069__auto__ = e48287;
var statearr_48288_49093 = state_48270;
(statearr_48288_49093[(2)] = ex__47069__auto__);


if(cljs.core.seq((state_48270[(4)]))){
var statearr_48289_49094 = state_48270;
(statearr_48289_49094[(1)] = cljs.core.first((state_48270[(4)])));

} else {
throw ex__47069__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49095 = state_48270;
state_48270 = G__49095;
continue;
} else {
return ret_value__47067__auto__;
}
break;
}
});
cljs$core$async$state_machine__47066__auto__ = function(state_48270){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47066__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47066__auto____1.call(this,state_48270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47066__auto____0;
cljs$core$async$state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47066__auto____1;
return cljs$core$async$state_machine__47066__auto__;
})()
})();
var state__47150__auto__ = (function (){var statearr_48290 = f__47149__auto__();
(statearr_48290[(6)] = c__47148__auto___49075);

return statearr_48290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47150__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48292 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48292 = (function (f,ch,meta48293){
this.f = f;
this.ch = ch;
this.meta48293 = meta48293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48294,meta48293__$1){
var self__ = this;
var _48294__$1 = this;
return (new cljs.core.async.t_cljs$core$async48292(self__.f,self__.ch,meta48293__$1));
}));

(cljs.core.async.t_cljs$core$async48292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48294){
var self__ = this;
var _48294__$1 = this;
return self__.meta48293;
}));

(cljs.core.async.t_cljs$core$async48292.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48292.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48292.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48292.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48292.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48295 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48295 = (function (f,ch,meta48293,_,fn1,meta48296){
this.f = f;
this.ch = ch;
this.meta48293 = meta48293;
this._ = _;
this.fn1 = fn1;
this.meta48296 = meta48296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48297,meta48296__$1){
var self__ = this;
var _48297__$1 = this;
return (new cljs.core.async.t_cljs$core$async48295(self__.f,self__.ch,self__.meta48293,self__._,self__.fn1,meta48296__$1));
}));

(cljs.core.async.t_cljs$core$async48295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48297){
var self__ = this;
var _48297__$1 = this;
return self__.meta48296;
}));

(cljs.core.async.t_cljs$core$async48295.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48295.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async48295.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async48295.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__48291_SHARP_){
var G__48298 = (((p1__48291_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__48291_SHARP_) : self__.f.call(null,p1__48291_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__48298) : f1.call(null,G__48298));
});
}));

(cljs.core.async.t_cljs$core$async48295.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48293","meta48293",496613915,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async48292","cljs.core.async/t_cljs$core$async48292",-1782182748,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta48296","meta48296",1457494218,null)], null);
}));

(cljs.core.async.t_cljs$core$async48295.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48295.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48295");

(cljs.core.async.t_cljs$core$async48295.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async48295");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48295.
 */
cljs.core.async.__GT_t_cljs$core$async48295 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48295(f__$1,ch__$1,meta48293__$1,___$2,fn1__$1,meta48296){
return (new cljs.core.async.t_cljs$core$async48295(f__$1,ch__$1,meta48293__$1,___$2,fn1__$1,meta48296));
});

}

return (new cljs.core.async.t_cljs$core$async48295(self__.f,self__.ch,self__.meta48293,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__48299 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__48299) : self__.f.call(null,G__48299));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async48292.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48292.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async48292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48293","meta48293",496613915,null)], null);
}));

(cljs.core.async.t_cljs$core$async48292.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48292");

(cljs.core.async.t_cljs$core$async48292.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async48292");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48292.
 */
cljs.core.async.__GT_t_cljs$core$async48292 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async48292(f__$1,ch__$1,meta48293){
return (new cljs.core.async.t_cljs$core$async48292(f__$1,ch__$1,meta48293));
});

}

return (new cljs.core.async.t_cljs$core$async48292(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48300 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48300 = (function (f,ch,meta48301){
this.f = f;
this.ch = ch;
this.meta48301 = meta48301;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48302,meta48301__$1){
var self__ = this;
var _48302__$1 = this;
return (new cljs.core.async.t_cljs$core$async48300(self__.f,self__.ch,meta48301__$1));
}));

(cljs.core.async.t_cljs$core$async48300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48302){
var self__ = this;
var _48302__$1 = this;
return self__.meta48301;
}));

(cljs.core.async.t_cljs$core$async48300.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48300.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48300.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48300.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48300.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48300.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async48300.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48301","meta48301",1588216227,null)], null);
}));

(cljs.core.async.t_cljs$core$async48300.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48300.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48300");

(cljs.core.async.t_cljs$core$async48300.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async48300");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48300.
 */
cljs.core.async.__GT_t_cljs$core$async48300 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async48300(f__$1,ch__$1,meta48301){
return (new cljs.core.async.t_cljs$core$async48300(f__$1,ch__$1,meta48301));
});

}

return (new cljs.core.async.t_cljs$core$async48300(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async48303 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async48303 = (function (p,ch,meta48304){
this.p = p;
this.ch = ch;
this.meta48304 = meta48304;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async48303.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48305,meta48304__$1){
var self__ = this;
var _48305__$1 = this;
return (new cljs.core.async.t_cljs$core$async48303(self__.p,self__.ch,meta48304__$1));
}));

(cljs.core.async.t_cljs$core$async48303.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48305){
var self__ = this;
var _48305__$1 = this;
return self__.meta48304;
}));

(cljs.core.async.t_cljs$core$async48303.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48303.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48303.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async48303.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48303.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async48303.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async48303.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async48303.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta48304","meta48304",-1794797093,null)], null);
}));

(cljs.core.async.t_cljs$core$async48303.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async48303.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async48303");

(cljs.core.async.t_cljs$core$async48303.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async48303");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async48303.
 */
cljs.core.async.__GT_t_cljs$core$async48303 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async48303(p__$1,ch__$1,meta48304){
return (new cljs.core.async.t_cljs$core$async48303(p__$1,ch__$1,meta48304));
});

}

return (new cljs.core.async.t_cljs$core$async48303(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__48307 = arguments.length;
switch (G__48307) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47148__auto___49109 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47149__auto__ = (function (){var switch__47065__auto__ = (function (state_48328){
var state_val_48329 = (state_48328[(1)]);
if((state_val_48329 === (7))){
var inst_48324 = (state_48328[(2)]);
var state_48328__$1 = state_48328;
var statearr_48330_49110 = state_48328__$1;
(statearr_48330_49110[(2)] = inst_48324);

(statearr_48330_49110[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48329 === (1))){
var state_48328__$1 = state_48328;
var statearr_48331_49111 = state_48328__$1;
(statearr_48331_49111[(2)] = null);

(statearr_48331_49111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48329 === (4))){
var inst_48310 = (state_48328[(7)]);
var inst_48310__$1 = (state_48328[(2)]);
var inst_48311 = (inst_48310__$1 == null);
var state_48328__$1 = (function (){var statearr_48332 = state_48328;
(statearr_48332[(7)] = inst_48310__$1);

return statearr_48332;
})();
if(cljs.core.truth_(inst_48311)){
var statearr_48333_49112 = state_48328__$1;
(statearr_48333_49112[(1)] = (5));

} else {
var statearr_48334_49113 = state_48328__$1;
(statearr_48334_49113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48329 === (6))){
var inst_48310 = (state_48328[(7)]);
var inst_48315 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_48310) : p.call(null,inst_48310));
var state_48328__$1 = state_48328;
if(cljs.core.truth_(inst_48315)){
var statearr_48335_49114 = state_48328__$1;
(statearr_48335_49114[(1)] = (8));

} else {
var statearr_48336_49115 = state_48328__$1;
(statearr_48336_49115[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48329 === (3))){
var inst_48326 = (state_48328[(2)]);
var state_48328__$1 = state_48328;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48328__$1,inst_48326);
} else {
if((state_val_48329 === (2))){
var state_48328__$1 = state_48328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48328__$1,(4),ch);
} else {
if((state_val_48329 === (11))){
var inst_48318 = (state_48328[(2)]);
var state_48328__$1 = state_48328;
var statearr_48337_49116 = state_48328__$1;
(statearr_48337_49116[(2)] = inst_48318);

(statearr_48337_49116[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48329 === (9))){
var state_48328__$1 = state_48328;
var statearr_48338_49117 = state_48328__$1;
(statearr_48338_49117[(2)] = null);

(statearr_48338_49117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48329 === (5))){
var inst_48313 = cljs.core.async.close_BANG_(out);
var state_48328__$1 = state_48328;
var statearr_48339_49118 = state_48328__$1;
(statearr_48339_49118[(2)] = inst_48313);

(statearr_48339_49118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48329 === (10))){
var inst_48321 = (state_48328[(2)]);
var state_48328__$1 = (function (){var statearr_48340 = state_48328;
(statearr_48340[(8)] = inst_48321);

return statearr_48340;
})();
var statearr_48341_49119 = state_48328__$1;
(statearr_48341_49119[(2)] = null);

(statearr_48341_49119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48329 === (8))){
var inst_48310 = (state_48328[(7)]);
var state_48328__$1 = state_48328;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48328__$1,(11),out,inst_48310);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47066__auto__ = null;
var cljs$core$async$state_machine__47066__auto____0 = (function (){
var statearr_48342 = [null,null,null,null,null,null,null,null,null];
(statearr_48342[(0)] = cljs$core$async$state_machine__47066__auto__);

(statearr_48342[(1)] = (1));

return statearr_48342;
});
var cljs$core$async$state_machine__47066__auto____1 = (function (state_48328){
while(true){
var ret_value__47067__auto__ = (function (){try{while(true){
var result__47068__auto__ = switch__47065__auto__(state_48328);
if(cljs.core.keyword_identical_QMARK_(result__47068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47068__auto__;
}
break;
}
}catch (e48343){var ex__47069__auto__ = e48343;
var statearr_48344_49120 = state_48328;
(statearr_48344_49120[(2)] = ex__47069__auto__);


if(cljs.core.seq((state_48328[(4)]))){
var statearr_48345_49121 = state_48328;
(statearr_48345_49121[(1)] = cljs.core.first((state_48328[(4)])));

} else {
throw ex__47069__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49122 = state_48328;
state_48328 = G__49122;
continue;
} else {
return ret_value__47067__auto__;
}
break;
}
});
cljs$core$async$state_machine__47066__auto__ = function(state_48328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47066__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47066__auto____1.call(this,state_48328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47066__auto____0;
cljs$core$async$state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47066__auto____1;
return cljs$core$async$state_machine__47066__auto__;
})()
})();
var state__47150__auto__ = (function (){var statearr_48346 = f__47149__auto__();
(statearr_48346[(6)] = c__47148__auto___49109);

return statearr_48346;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47150__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__48348 = arguments.length;
switch (G__48348) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__47148__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47149__auto__ = (function (){var switch__47065__auto__ = (function (state_48410){
var state_val_48411 = (state_48410[(1)]);
if((state_val_48411 === (7))){
var inst_48406 = (state_48410[(2)]);
var state_48410__$1 = state_48410;
var statearr_48412_49124 = state_48410__$1;
(statearr_48412_49124[(2)] = inst_48406);

(statearr_48412_49124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48411 === (20))){
var inst_48376 = (state_48410[(7)]);
var inst_48387 = (state_48410[(2)]);
var inst_48388 = cljs.core.next(inst_48376);
var inst_48362 = inst_48388;
var inst_48363 = null;
var inst_48364 = (0);
var inst_48365 = (0);
var state_48410__$1 = (function (){var statearr_48413 = state_48410;
(statearr_48413[(8)] = inst_48365);

(statearr_48413[(9)] = inst_48387);

(statearr_48413[(10)] = inst_48362);

(statearr_48413[(11)] = inst_48364);

(statearr_48413[(12)] = inst_48363);

return statearr_48413;
})();
var statearr_48414_49125 = state_48410__$1;
(statearr_48414_49125[(2)] = null);

(statearr_48414_49125[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48411 === (1))){
var state_48410__$1 = state_48410;
var statearr_48415_49126 = state_48410__$1;
(statearr_48415_49126[(2)] = null);

(statearr_48415_49126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48411 === (4))){
var inst_48351 = (state_48410[(13)]);
var inst_48351__$1 = (state_48410[(2)]);
var inst_48352 = (inst_48351__$1 == null);
var state_48410__$1 = (function (){var statearr_48416 = state_48410;
(statearr_48416[(13)] = inst_48351__$1);

return statearr_48416;
})();
if(cljs.core.truth_(inst_48352)){
var statearr_48417_49127 = state_48410__$1;
(statearr_48417_49127[(1)] = (5));

} else {
var statearr_48418_49128 = state_48410__$1;
(statearr_48418_49128[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48411 === (15))){
var state_48410__$1 = state_48410;
var statearr_48422_49129 = state_48410__$1;
(statearr_48422_49129[(2)] = null);

(statearr_48422_49129[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48411 === (21))){
var state_48410__$1 = state_48410;
var statearr_48423_49130 = state_48410__$1;
(statearr_48423_49130[(2)] = null);

(statearr_48423_49130[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48411 === (13))){
var inst_48365 = (state_48410[(8)]);
var inst_48362 = (state_48410[(10)]);
var inst_48364 = (state_48410[(11)]);
var inst_48363 = (state_48410[(12)]);
var inst_48372 = (state_48410[(2)]);
var inst_48373 = (inst_48365 + (1));
var tmp48419 = inst_48362;
var tmp48420 = inst_48364;
var tmp48421 = inst_48363;
var inst_48362__$1 = tmp48419;
var inst_48363__$1 = tmp48421;
var inst_48364__$1 = tmp48420;
var inst_48365__$1 = inst_48373;
var state_48410__$1 = (function (){var statearr_48424 = state_48410;
(statearr_48424[(8)] = inst_48365__$1);

(statearr_48424[(14)] = inst_48372);

(statearr_48424[(10)] = inst_48362__$1);

(statearr_48424[(11)] = inst_48364__$1);

(statearr_48424[(12)] = inst_48363__$1);

return statearr_48424;
})();
var statearr_48425_49137 = state_48410__$1;
(statearr_48425_49137[(2)] = null);

(statearr_48425_49137[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48411 === (22))){
var state_48410__$1 = state_48410;
var statearr_48426_49138 = state_48410__$1;
(statearr_48426_49138[(2)] = null);

(statearr_48426_49138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48411 === (6))){
var inst_48351 = (state_48410[(13)]);
var inst_48360 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48351) : f.call(null,inst_48351));
var inst_48361 = cljs.core.seq(inst_48360);
var inst_48362 = inst_48361;
var inst_48363 = null;
var inst_48364 = (0);
var inst_48365 = (0);
var state_48410__$1 = (function (){var statearr_48427 = state_48410;
(statearr_48427[(8)] = inst_48365);

(statearr_48427[(10)] = inst_48362);

(statearr_48427[(11)] = inst_48364);

(statearr_48427[(12)] = inst_48363);

return statearr_48427;
})();
var statearr_48428_49139 = state_48410__$1;
(statearr_48428_49139[(2)] = null);

(statearr_48428_49139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48411 === (17))){
var inst_48376 = (state_48410[(7)]);
var inst_48380 = cljs.core.chunk_first(inst_48376);
var inst_48381 = cljs.core.chunk_rest(inst_48376);
var inst_48382 = cljs.core.count(inst_48380);
var inst_48362 = inst_48381;
var inst_48363 = inst_48380;
var inst_48364 = inst_48382;
var inst_48365 = (0);
var state_48410__$1 = (function (){var statearr_48429 = state_48410;
(statearr_48429[(8)] = inst_48365);

(statearr_48429[(10)] = inst_48362);

(statearr_48429[(11)] = inst_48364);

(statearr_48429[(12)] = inst_48363);

return statearr_48429;
})();
var statearr_48430_49140 = state_48410__$1;
(statearr_48430_49140[(2)] = null);

(statearr_48430_49140[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48411 === (3))){
var inst_48408 = (state_48410[(2)]);
var state_48410__$1 = state_48410;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48410__$1,inst_48408);
} else {
if((state_val_48411 === (12))){
var inst_48396 = (state_48410[(2)]);
var state_48410__$1 = state_48410;
var statearr_48431_49141 = state_48410__$1;
(statearr_48431_49141[(2)] = inst_48396);

(statearr_48431_49141[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48411 === (2))){
var state_48410__$1 = state_48410;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48410__$1,(4),in$);
} else {
if((state_val_48411 === (23))){
var inst_48404 = (state_48410[(2)]);
var state_48410__$1 = state_48410;
var statearr_48432_49142 = state_48410__$1;
(statearr_48432_49142[(2)] = inst_48404);

(statearr_48432_49142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48411 === (19))){
var inst_48391 = (state_48410[(2)]);
var state_48410__$1 = state_48410;
var statearr_48433_49143 = state_48410__$1;
(statearr_48433_49143[(2)] = inst_48391);

(statearr_48433_49143[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48411 === (11))){
var inst_48362 = (state_48410[(10)]);
var inst_48376 = (state_48410[(7)]);
var inst_48376__$1 = cljs.core.seq(inst_48362);
var state_48410__$1 = (function (){var statearr_48434 = state_48410;
(statearr_48434[(7)] = inst_48376__$1);

return statearr_48434;
})();
if(inst_48376__$1){
var statearr_48435_49144 = state_48410__$1;
(statearr_48435_49144[(1)] = (14));

} else {
var statearr_48436_49145 = state_48410__$1;
(statearr_48436_49145[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48411 === (9))){
var inst_48398 = (state_48410[(2)]);
var inst_48399 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_48410__$1 = (function (){var statearr_48437 = state_48410;
(statearr_48437[(15)] = inst_48398);

return statearr_48437;
})();
if(cljs.core.truth_(inst_48399)){
var statearr_48438_49146 = state_48410__$1;
(statearr_48438_49146[(1)] = (21));

} else {
var statearr_48439_49147 = state_48410__$1;
(statearr_48439_49147[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48411 === (5))){
var inst_48354 = cljs.core.async.close_BANG_(out);
var state_48410__$1 = state_48410;
var statearr_48440_49148 = state_48410__$1;
(statearr_48440_49148[(2)] = inst_48354);

(statearr_48440_49148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48411 === (14))){
var inst_48376 = (state_48410[(7)]);
var inst_48378 = cljs.core.chunked_seq_QMARK_(inst_48376);
var state_48410__$1 = state_48410;
if(inst_48378){
var statearr_48441_49149 = state_48410__$1;
(statearr_48441_49149[(1)] = (17));

} else {
var statearr_48442_49150 = state_48410__$1;
(statearr_48442_49150[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48411 === (16))){
var inst_48394 = (state_48410[(2)]);
var state_48410__$1 = state_48410;
var statearr_48443_49151 = state_48410__$1;
(statearr_48443_49151[(2)] = inst_48394);

(statearr_48443_49151[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48411 === (10))){
var inst_48365 = (state_48410[(8)]);
var inst_48363 = (state_48410[(12)]);
var inst_48370 = cljs.core._nth(inst_48363,inst_48365);
var state_48410__$1 = state_48410;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48410__$1,(13),out,inst_48370);
} else {
if((state_val_48411 === (18))){
var inst_48376 = (state_48410[(7)]);
var inst_48385 = cljs.core.first(inst_48376);
var state_48410__$1 = state_48410;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48410__$1,(20),out,inst_48385);
} else {
if((state_val_48411 === (8))){
var inst_48365 = (state_48410[(8)]);
var inst_48364 = (state_48410[(11)]);
var inst_48367 = (inst_48365 < inst_48364);
var inst_48368 = inst_48367;
var state_48410__$1 = state_48410;
if(cljs.core.truth_(inst_48368)){
var statearr_48444_49152 = state_48410__$1;
(statearr_48444_49152[(1)] = (10));

} else {
var statearr_48445_49153 = state_48410__$1;
(statearr_48445_49153[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__47066__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__47066__auto____0 = (function (){
var statearr_48446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48446[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__47066__auto__);

(statearr_48446[(1)] = (1));

return statearr_48446;
});
var cljs$core$async$mapcat_STAR__$_state_machine__47066__auto____1 = (function (state_48410){
while(true){
var ret_value__47067__auto__ = (function (){try{while(true){
var result__47068__auto__ = switch__47065__auto__(state_48410);
if(cljs.core.keyword_identical_QMARK_(result__47068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47068__auto__;
}
break;
}
}catch (e48447){var ex__47069__auto__ = e48447;
var statearr_48448_49154 = state_48410;
(statearr_48448_49154[(2)] = ex__47069__auto__);


if(cljs.core.seq((state_48410[(4)]))){
var statearr_48449_49155 = state_48410;
(statearr_48449_49155[(1)] = cljs.core.first((state_48410[(4)])));

} else {
throw ex__47069__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49156 = state_48410;
state_48410 = G__49156;
continue;
} else {
return ret_value__47067__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__47066__auto__ = function(state_48410){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__47066__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__47066__auto____1.call(this,state_48410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__47066__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__47066__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__47066__auto__;
})()
})();
var state__47150__auto__ = (function (){var statearr_48450 = f__47149__auto__();
(statearr_48450[(6)] = c__47148__auto__);

return statearr_48450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47150__auto__);
}));

return c__47148__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__48452 = arguments.length;
switch (G__48452) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__48454 = arguments.length;
switch (G__48454) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__48456 = arguments.length;
switch (G__48456) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47148__auto___49160 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47149__auto__ = (function (){var switch__47065__auto__ = (function (state_48480){
var state_val_48481 = (state_48480[(1)]);
if((state_val_48481 === (7))){
var inst_48475 = (state_48480[(2)]);
var state_48480__$1 = state_48480;
var statearr_48482_49161 = state_48480__$1;
(statearr_48482_49161[(2)] = inst_48475);

(statearr_48482_49161[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48481 === (1))){
var inst_48457 = null;
var state_48480__$1 = (function (){var statearr_48483 = state_48480;
(statearr_48483[(7)] = inst_48457);

return statearr_48483;
})();
var statearr_48484_49162 = state_48480__$1;
(statearr_48484_49162[(2)] = null);

(statearr_48484_49162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48481 === (4))){
var inst_48460 = (state_48480[(8)]);
var inst_48460__$1 = (state_48480[(2)]);
var inst_48461 = (inst_48460__$1 == null);
var inst_48462 = cljs.core.not(inst_48461);
var state_48480__$1 = (function (){var statearr_48485 = state_48480;
(statearr_48485[(8)] = inst_48460__$1);

return statearr_48485;
})();
if(inst_48462){
var statearr_48486_49163 = state_48480__$1;
(statearr_48486_49163[(1)] = (5));

} else {
var statearr_48487_49164 = state_48480__$1;
(statearr_48487_49164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48481 === (6))){
var state_48480__$1 = state_48480;
var statearr_48488_49165 = state_48480__$1;
(statearr_48488_49165[(2)] = null);

(statearr_48488_49165[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48481 === (3))){
var inst_48477 = (state_48480[(2)]);
var inst_48478 = cljs.core.async.close_BANG_(out);
var state_48480__$1 = (function (){var statearr_48489 = state_48480;
(statearr_48489[(9)] = inst_48477);

return statearr_48489;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48480__$1,inst_48478);
} else {
if((state_val_48481 === (2))){
var state_48480__$1 = state_48480;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48480__$1,(4),ch);
} else {
if((state_val_48481 === (11))){
var inst_48460 = (state_48480[(8)]);
var inst_48469 = (state_48480[(2)]);
var inst_48457 = inst_48460;
var state_48480__$1 = (function (){var statearr_48490 = state_48480;
(statearr_48490[(7)] = inst_48457);

(statearr_48490[(10)] = inst_48469);

return statearr_48490;
})();
var statearr_48491_49166 = state_48480__$1;
(statearr_48491_49166[(2)] = null);

(statearr_48491_49166[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48481 === (9))){
var inst_48460 = (state_48480[(8)]);
var state_48480__$1 = state_48480;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48480__$1,(11),out,inst_48460);
} else {
if((state_val_48481 === (5))){
var inst_48457 = (state_48480[(7)]);
var inst_48460 = (state_48480[(8)]);
var inst_48464 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48460,inst_48457);
var state_48480__$1 = state_48480;
if(inst_48464){
var statearr_48493_49167 = state_48480__$1;
(statearr_48493_49167[(1)] = (8));

} else {
var statearr_48494_49168 = state_48480__$1;
(statearr_48494_49168[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48481 === (10))){
var inst_48472 = (state_48480[(2)]);
var state_48480__$1 = state_48480;
var statearr_48495_49175 = state_48480__$1;
(statearr_48495_49175[(2)] = inst_48472);

(statearr_48495_49175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48481 === (8))){
var inst_48457 = (state_48480[(7)]);
var tmp48492 = inst_48457;
var inst_48457__$1 = tmp48492;
var state_48480__$1 = (function (){var statearr_48496 = state_48480;
(statearr_48496[(7)] = inst_48457__$1);

return statearr_48496;
})();
var statearr_48497_49176 = state_48480__$1;
(statearr_48497_49176[(2)] = null);

(statearr_48497_49176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47066__auto__ = null;
var cljs$core$async$state_machine__47066__auto____0 = (function (){
var statearr_48498 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_48498[(0)] = cljs$core$async$state_machine__47066__auto__);

(statearr_48498[(1)] = (1));

return statearr_48498;
});
var cljs$core$async$state_machine__47066__auto____1 = (function (state_48480){
while(true){
var ret_value__47067__auto__ = (function (){try{while(true){
var result__47068__auto__ = switch__47065__auto__(state_48480);
if(cljs.core.keyword_identical_QMARK_(result__47068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47068__auto__;
}
break;
}
}catch (e48499){var ex__47069__auto__ = e48499;
var statearr_48500_49177 = state_48480;
(statearr_48500_49177[(2)] = ex__47069__auto__);


if(cljs.core.seq((state_48480[(4)]))){
var statearr_48501_49178 = state_48480;
(statearr_48501_49178[(1)] = cljs.core.first((state_48480[(4)])));

} else {
throw ex__47069__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49179 = state_48480;
state_48480 = G__49179;
continue;
} else {
return ret_value__47067__auto__;
}
break;
}
});
cljs$core$async$state_machine__47066__auto__ = function(state_48480){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47066__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47066__auto____1.call(this,state_48480);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47066__auto____0;
cljs$core$async$state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47066__auto____1;
return cljs$core$async$state_machine__47066__auto__;
})()
})();
var state__47150__auto__ = (function (){var statearr_48502 = f__47149__auto__();
(statearr_48502[(6)] = c__47148__auto___49160);

return statearr_48502;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47150__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__48504 = arguments.length;
switch (G__48504) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47148__auto___49181 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47149__auto__ = (function (){var switch__47065__auto__ = (function (state_48542){
var state_val_48543 = (state_48542[(1)]);
if((state_val_48543 === (7))){
var inst_48538 = (state_48542[(2)]);
var state_48542__$1 = state_48542;
var statearr_48544_49182 = state_48542__$1;
(statearr_48544_49182[(2)] = inst_48538);

(statearr_48544_49182[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (1))){
var inst_48505 = (new Array(n));
var inst_48506 = inst_48505;
var inst_48507 = (0);
var state_48542__$1 = (function (){var statearr_48545 = state_48542;
(statearr_48545[(7)] = inst_48507);

(statearr_48545[(8)] = inst_48506);

return statearr_48545;
})();
var statearr_48546_49183 = state_48542__$1;
(statearr_48546_49183[(2)] = null);

(statearr_48546_49183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (4))){
var inst_48510 = (state_48542[(9)]);
var inst_48510__$1 = (state_48542[(2)]);
var inst_48511 = (inst_48510__$1 == null);
var inst_48512 = cljs.core.not(inst_48511);
var state_48542__$1 = (function (){var statearr_48547 = state_48542;
(statearr_48547[(9)] = inst_48510__$1);

return statearr_48547;
})();
if(inst_48512){
var statearr_48548_49184 = state_48542__$1;
(statearr_48548_49184[(1)] = (5));

} else {
var statearr_48549_49185 = state_48542__$1;
(statearr_48549_49185[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (15))){
var inst_48532 = (state_48542[(2)]);
var state_48542__$1 = state_48542;
var statearr_48550_49186 = state_48542__$1;
(statearr_48550_49186[(2)] = inst_48532);

(statearr_48550_49186[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (13))){
var state_48542__$1 = state_48542;
var statearr_48551_49187 = state_48542__$1;
(statearr_48551_49187[(2)] = null);

(statearr_48551_49187[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (6))){
var inst_48507 = (state_48542[(7)]);
var inst_48528 = (inst_48507 > (0));
var state_48542__$1 = state_48542;
if(cljs.core.truth_(inst_48528)){
var statearr_48552_49188 = state_48542__$1;
(statearr_48552_49188[(1)] = (12));

} else {
var statearr_48553_49189 = state_48542__$1;
(statearr_48553_49189[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (3))){
var inst_48540 = (state_48542[(2)]);
var state_48542__$1 = state_48542;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48542__$1,inst_48540);
} else {
if((state_val_48543 === (12))){
var inst_48506 = (state_48542[(8)]);
var inst_48530 = cljs.core.vec(inst_48506);
var state_48542__$1 = state_48542;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48542__$1,(15),out,inst_48530);
} else {
if((state_val_48543 === (2))){
var state_48542__$1 = state_48542;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48542__$1,(4),ch);
} else {
if((state_val_48543 === (11))){
var inst_48522 = (state_48542[(2)]);
var inst_48523 = (new Array(n));
var inst_48506 = inst_48523;
var inst_48507 = (0);
var state_48542__$1 = (function (){var statearr_48554 = state_48542;
(statearr_48554[(7)] = inst_48507);

(statearr_48554[(10)] = inst_48522);

(statearr_48554[(8)] = inst_48506);

return statearr_48554;
})();
var statearr_48555_49190 = state_48542__$1;
(statearr_48555_49190[(2)] = null);

(statearr_48555_49190[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (9))){
var inst_48506 = (state_48542[(8)]);
var inst_48520 = cljs.core.vec(inst_48506);
var state_48542__$1 = state_48542;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48542__$1,(11),out,inst_48520);
} else {
if((state_val_48543 === (5))){
var inst_48507 = (state_48542[(7)]);
var inst_48510 = (state_48542[(9)]);
var inst_48506 = (state_48542[(8)]);
var inst_48515 = (state_48542[(11)]);
var inst_48514 = (inst_48506[inst_48507] = inst_48510);
var inst_48515__$1 = (inst_48507 + (1));
var inst_48516 = (inst_48515__$1 < n);
var state_48542__$1 = (function (){var statearr_48556 = state_48542;
(statearr_48556[(12)] = inst_48514);

(statearr_48556[(11)] = inst_48515__$1);

return statearr_48556;
})();
if(cljs.core.truth_(inst_48516)){
var statearr_48557_49191 = state_48542__$1;
(statearr_48557_49191[(1)] = (8));

} else {
var statearr_48558_49192 = state_48542__$1;
(statearr_48558_49192[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (14))){
var inst_48535 = (state_48542[(2)]);
var inst_48536 = cljs.core.async.close_BANG_(out);
var state_48542__$1 = (function (){var statearr_48560 = state_48542;
(statearr_48560[(13)] = inst_48535);

return statearr_48560;
})();
var statearr_48561_49193 = state_48542__$1;
(statearr_48561_49193[(2)] = inst_48536);

(statearr_48561_49193[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (10))){
var inst_48526 = (state_48542[(2)]);
var state_48542__$1 = state_48542;
var statearr_48562_49194 = state_48542__$1;
(statearr_48562_49194[(2)] = inst_48526);

(statearr_48562_49194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48543 === (8))){
var inst_48506 = (state_48542[(8)]);
var inst_48515 = (state_48542[(11)]);
var tmp48559 = inst_48506;
var inst_48506__$1 = tmp48559;
var inst_48507 = inst_48515;
var state_48542__$1 = (function (){var statearr_48563 = state_48542;
(statearr_48563[(7)] = inst_48507);

(statearr_48563[(8)] = inst_48506__$1);

return statearr_48563;
})();
var statearr_48564_49195 = state_48542__$1;
(statearr_48564_49195[(2)] = null);

(statearr_48564_49195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47066__auto__ = null;
var cljs$core$async$state_machine__47066__auto____0 = (function (){
var statearr_48565 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48565[(0)] = cljs$core$async$state_machine__47066__auto__);

(statearr_48565[(1)] = (1));

return statearr_48565;
});
var cljs$core$async$state_machine__47066__auto____1 = (function (state_48542){
while(true){
var ret_value__47067__auto__ = (function (){try{while(true){
var result__47068__auto__ = switch__47065__auto__(state_48542);
if(cljs.core.keyword_identical_QMARK_(result__47068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47068__auto__;
}
break;
}
}catch (e48566){var ex__47069__auto__ = e48566;
var statearr_48567_49196 = state_48542;
(statearr_48567_49196[(2)] = ex__47069__auto__);


if(cljs.core.seq((state_48542[(4)]))){
var statearr_48568_49197 = state_48542;
(statearr_48568_49197[(1)] = cljs.core.first((state_48542[(4)])));

} else {
throw ex__47069__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49198 = state_48542;
state_48542 = G__49198;
continue;
} else {
return ret_value__47067__auto__;
}
break;
}
});
cljs$core$async$state_machine__47066__auto__ = function(state_48542){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47066__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47066__auto____1.call(this,state_48542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47066__auto____0;
cljs$core$async$state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47066__auto____1;
return cljs$core$async$state_machine__47066__auto__;
})()
})();
var state__47150__auto__ = (function (){var statearr_48569 = f__47149__auto__();
(statearr_48569[(6)] = c__47148__auto___49181);

return statearr_48569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47150__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__48571 = arguments.length;
switch (G__48571) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__47148__auto___49200 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__47149__auto__ = (function (){var switch__47065__auto__ = (function (state_48616){
var state_val_48617 = (state_48616[(1)]);
if((state_val_48617 === (7))){
var inst_48612 = (state_48616[(2)]);
var state_48616__$1 = state_48616;
var statearr_48618_49201 = state_48616__$1;
(statearr_48618_49201[(2)] = inst_48612);

(statearr_48618_49201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48617 === (1))){
var inst_48572 = [];
var inst_48573 = inst_48572;
var inst_48574 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_48616__$1 = (function (){var statearr_48619 = state_48616;
(statearr_48619[(7)] = inst_48573);

(statearr_48619[(8)] = inst_48574);

return statearr_48619;
})();
var statearr_48620_49202 = state_48616__$1;
(statearr_48620_49202[(2)] = null);

(statearr_48620_49202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48617 === (4))){
var inst_48577 = (state_48616[(9)]);
var inst_48577__$1 = (state_48616[(2)]);
var inst_48578 = (inst_48577__$1 == null);
var inst_48579 = cljs.core.not(inst_48578);
var state_48616__$1 = (function (){var statearr_48621 = state_48616;
(statearr_48621[(9)] = inst_48577__$1);

return statearr_48621;
})();
if(inst_48579){
var statearr_48622_49203 = state_48616__$1;
(statearr_48622_49203[(1)] = (5));

} else {
var statearr_48623_49204 = state_48616__$1;
(statearr_48623_49204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48617 === (15))){
var inst_48573 = (state_48616[(7)]);
var inst_48604 = cljs.core.vec(inst_48573);
var state_48616__$1 = state_48616;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48616__$1,(18),out,inst_48604);
} else {
if((state_val_48617 === (13))){
var inst_48599 = (state_48616[(2)]);
var state_48616__$1 = state_48616;
var statearr_48624_49205 = state_48616__$1;
(statearr_48624_49205[(2)] = inst_48599);

(statearr_48624_49205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48617 === (6))){
var inst_48573 = (state_48616[(7)]);
var inst_48601 = inst_48573.length;
var inst_48602 = (inst_48601 > (0));
var state_48616__$1 = state_48616;
if(cljs.core.truth_(inst_48602)){
var statearr_48625_49206 = state_48616__$1;
(statearr_48625_49206[(1)] = (15));

} else {
var statearr_48626_49207 = state_48616__$1;
(statearr_48626_49207[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48617 === (17))){
var inst_48609 = (state_48616[(2)]);
var inst_48610 = cljs.core.async.close_BANG_(out);
var state_48616__$1 = (function (){var statearr_48627 = state_48616;
(statearr_48627[(10)] = inst_48609);

return statearr_48627;
})();
var statearr_48628_49208 = state_48616__$1;
(statearr_48628_49208[(2)] = inst_48610);

(statearr_48628_49208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48617 === (3))){
var inst_48614 = (state_48616[(2)]);
var state_48616__$1 = state_48616;
return cljs.core.async.impl.ioc_helpers.return_chan(state_48616__$1,inst_48614);
} else {
if((state_val_48617 === (12))){
var inst_48573 = (state_48616[(7)]);
var inst_48592 = cljs.core.vec(inst_48573);
var state_48616__$1 = state_48616;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_48616__$1,(14),out,inst_48592);
} else {
if((state_val_48617 === (2))){
var state_48616__$1 = state_48616;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48616__$1,(4),ch);
} else {
if((state_val_48617 === (11))){
var inst_48573 = (state_48616[(7)]);
var inst_48581 = (state_48616[(11)]);
var inst_48577 = (state_48616[(9)]);
var inst_48589 = inst_48573.push(inst_48577);
var tmp48629 = inst_48573;
var inst_48573__$1 = tmp48629;
var inst_48574 = inst_48581;
var state_48616__$1 = (function (){var statearr_48630 = state_48616;
(statearr_48630[(7)] = inst_48573__$1);

(statearr_48630[(12)] = inst_48589);

(statearr_48630[(8)] = inst_48574);

return statearr_48630;
})();
var statearr_48631_49209 = state_48616__$1;
(statearr_48631_49209[(2)] = null);

(statearr_48631_49209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48617 === (9))){
var inst_48574 = (state_48616[(8)]);
var inst_48585 = cljs.core.keyword_identical_QMARK_(inst_48574,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_48616__$1 = state_48616;
var statearr_48632_49210 = state_48616__$1;
(statearr_48632_49210[(2)] = inst_48585);

(statearr_48632_49210[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48617 === (5))){
var inst_48574 = (state_48616[(8)]);
var inst_48581 = (state_48616[(11)]);
var inst_48577 = (state_48616[(9)]);
var inst_48582 = (state_48616[(13)]);
var inst_48581__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_48577) : f.call(null,inst_48577));
var inst_48582__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_48581__$1,inst_48574);
var state_48616__$1 = (function (){var statearr_48633 = state_48616;
(statearr_48633[(11)] = inst_48581__$1);

(statearr_48633[(13)] = inst_48582__$1);

return statearr_48633;
})();
if(inst_48582__$1){
var statearr_48634_49211 = state_48616__$1;
(statearr_48634_49211[(1)] = (8));

} else {
var statearr_48635_49212 = state_48616__$1;
(statearr_48635_49212[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48617 === (14))){
var inst_48581 = (state_48616[(11)]);
var inst_48577 = (state_48616[(9)]);
var inst_48594 = (state_48616[(2)]);
var inst_48595 = [];
var inst_48596 = inst_48595.push(inst_48577);
var inst_48573 = inst_48595;
var inst_48574 = inst_48581;
var state_48616__$1 = (function (){var statearr_48636 = state_48616;
(statearr_48636[(7)] = inst_48573);

(statearr_48636[(8)] = inst_48574);

(statearr_48636[(14)] = inst_48594);

(statearr_48636[(15)] = inst_48596);

return statearr_48636;
})();
var statearr_48637_49213 = state_48616__$1;
(statearr_48637_49213[(2)] = null);

(statearr_48637_49213[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48617 === (16))){
var state_48616__$1 = state_48616;
var statearr_48638_49214 = state_48616__$1;
(statearr_48638_49214[(2)] = null);

(statearr_48638_49214[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48617 === (10))){
var inst_48587 = (state_48616[(2)]);
var state_48616__$1 = state_48616;
if(cljs.core.truth_(inst_48587)){
var statearr_48639_49215 = state_48616__$1;
(statearr_48639_49215[(1)] = (11));

} else {
var statearr_48640_49216 = state_48616__$1;
(statearr_48640_49216[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48617 === (18))){
var inst_48606 = (state_48616[(2)]);
var state_48616__$1 = state_48616;
var statearr_48641_49217 = state_48616__$1;
(statearr_48641_49217[(2)] = inst_48606);

(statearr_48641_49217[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48617 === (8))){
var inst_48582 = (state_48616[(13)]);
var state_48616__$1 = state_48616;
var statearr_48642_49218 = state_48616__$1;
(statearr_48642_49218[(2)] = inst_48582);

(statearr_48642_49218[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__47066__auto__ = null;
var cljs$core$async$state_machine__47066__auto____0 = (function (){
var statearr_48643 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48643[(0)] = cljs$core$async$state_machine__47066__auto__);

(statearr_48643[(1)] = (1));

return statearr_48643;
});
var cljs$core$async$state_machine__47066__auto____1 = (function (state_48616){
while(true){
var ret_value__47067__auto__ = (function (){try{while(true){
var result__47068__auto__ = switch__47065__auto__(state_48616);
if(cljs.core.keyword_identical_QMARK_(result__47068__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47068__auto__;
}
break;
}
}catch (e48644){var ex__47069__auto__ = e48644;
var statearr_48645_49219 = state_48616;
(statearr_48645_49219[(2)] = ex__47069__auto__);


if(cljs.core.seq((state_48616[(4)]))){
var statearr_48646_49220 = state_48616;
(statearr_48646_49220[(1)] = cljs.core.first((state_48616[(4)])));

} else {
throw ex__47069__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__47067__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49221 = state_48616;
state_48616 = G__49221;
continue;
} else {
return ret_value__47067__auto__;
}
break;
}
});
cljs$core$async$state_machine__47066__auto__ = function(state_48616){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__47066__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__47066__auto____1.call(this,state_48616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__47066__auto____0;
cljs$core$async$state_machine__47066__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__47066__auto____1;
return cljs$core$async$state_machine__47066__auto__;
})()
})();
var state__47150__auto__ = (function (){var statearr_48647 = f__47149__auto__();
(statearr_48647[(6)] = c__47148__auto___49200);

return statearr_48647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__47150__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
