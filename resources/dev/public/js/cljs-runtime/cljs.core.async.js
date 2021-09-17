goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__56858 = arguments.length;
switch (G__56858) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56859 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56859 = (function (f,blockable,meta56860){
this.f = f;
this.blockable = blockable;
this.meta56860 = meta56860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56861,meta56860__$1){
var self__ = this;
var _56861__$1 = this;
return (new cljs.core.async.t_cljs$core$async56859(self__.f,self__.blockable,meta56860__$1));
}));

(cljs.core.async.t_cljs$core$async56859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56861){
var self__ = this;
var _56861__$1 = this;
return self__.meta56860;
}));

(cljs.core.async.t_cljs$core$async56859.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56859.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56859.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async56859.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async56859.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta56860","meta56860",129519262,null)], null);
}));

(cljs.core.async.t_cljs$core$async56859.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56859.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56859");

(cljs.core.async.t_cljs$core$async56859.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async56859");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56859.
 */
cljs.core.async.__GT_t_cljs$core$async56859 = (function cljs$core$async$__GT_t_cljs$core$async56859(f__$1,blockable__$1,meta56860){
return (new cljs.core.async.t_cljs$core$async56859(f__$1,blockable__$1,meta56860));
});

}

return (new cljs.core.async.t_cljs$core$async56859(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__56864 = arguments.length;
switch (G__56864) {
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
var G__56866 = arguments.length;
switch (G__56866) {
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
var G__56868 = arguments.length;
switch (G__56868) {
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
var val_58302 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_58302) : fn1.call(null,val_58302));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_58302) : fn1.call(null,val_58302));
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
var G__56870 = arguments.length;
switch (G__56870) {
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
var n__4695__auto___58304 = n;
var x_58305 = (0);
while(true){
if((x_58305 < n__4695__auto___58304)){
(a[x_58305] = x_58305);

var G__58306 = (x_58305 + (1));
x_58305 = G__58306;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56871 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56871 = (function (flag,meta56872){
this.flag = flag;
this.meta56872 = meta56872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56873,meta56872__$1){
var self__ = this;
var _56873__$1 = this;
return (new cljs.core.async.t_cljs$core$async56871(self__.flag,meta56872__$1));
}));

(cljs.core.async.t_cljs$core$async56871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56873){
var self__ = this;
var _56873__$1 = this;
return self__.meta56872;
}));

(cljs.core.async.t_cljs$core$async56871.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56871.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async56871.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56871.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async56871.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta56872","meta56872",-1280529581,null)], null);
}));

(cljs.core.async.t_cljs$core$async56871.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56871.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56871");

(cljs.core.async.t_cljs$core$async56871.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async56871");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56871.
 */
cljs.core.async.__GT_t_cljs$core$async56871 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async56871(flag__$1,meta56872){
return (new cljs.core.async.t_cljs$core$async56871(flag__$1,meta56872));
});

}

return (new cljs.core.async.t_cljs$core$async56871(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async56874 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async56874 = (function (flag,cb,meta56875){
this.flag = flag;
this.cb = cb;
this.meta56875 = meta56875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async56874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56876,meta56875__$1){
var self__ = this;
var _56876__$1 = this;
return (new cljs.core.async.t_cljs$core$async56874(self__.flag,self__.cb,meta56875__$1));
}));

(cljs.core.async.t_cljs$core$async56874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56876){
var self__ = this;
var _56876__$1 = this;
return self__.meta56875;
}));

(cljs.core.async.t_cljs$core$async56874.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async56874.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async56874.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async56874.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async56874.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta56875","meta56875",-952249423,null)], null);
}));

(cljs.core.async.t_cljs$core$async56874.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async56874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async56874");

(cljs.core.async.t_cljs$core$async56874.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async56874");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async56874.
 */
cljs.core.async.__GT_t_cljs$core$async56874 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async56874(flag__$1,cb__$1,meta56875){
return (new cljs.core.async.t_cljs$core$async56874(flag__$1,cb__$1,meta56875));
});

}

return (new cljs.core.async.t_cljs$core$async56874(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__56877_SHARP_){
var G__56879 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56877_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__56879) : fret.call(null,G__56879));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__56878_SHARP_){
var G__56880 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__56878_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__56880) : fret.call(null,G__56880));
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
var G__58309 = (i + (1));
i = G__58309;
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
var len__4818__auto___58310 = arguments.length;
var i__4819__auto___58311 = (0);
while(true){
if((i__4819__auto___58311 < len__4818__auto___58310)){
args__4824__auto__.push((arguments[i__4819__auto___58311]));

var G__58312 = (i__4819__auto___58311 + (1));
i__4819__auto___58311 = G__58312;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((1) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4825__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__56883){
var map__56884 = p__56883;
var map__56884__$1 = cljs.core.__destructure_map(map__56884);
var opts = map__56884__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq56881){
var G__56882 = cljs.core.first(seq56881);
var seq56881__$1 = cljs.core.next(seq56881);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56882,seq56881__$1);
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
var G__56886 = arguments.length;
switch (G__56886) {
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
var c__56789__auto___58314 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56790__auto__ = (function (){var switch__56661__auto__ = (function (state_56910){
var state_val_56911 = (state_56910[(1)]);
if((state_val_56911 === (7))){
var inst_56906 = (state_56910[(2)]);
var state_56910__$1 = state_56910;
var statearr_56912_58315 = state_56910__$1;
(statearr_56912_58315[(2)] = inst_56906);

(statearr_56912_58315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56911 === (1))){
var state_56910__$1 = state_56910;
var statearr_56913_58316 = state_56910__$1;
(statearr_56913_58316[(2)] = null);

(statearr_56913_58316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56911 === (4))){
var inst_56889 = (state_56910[(7)]);
var inst_56889__$1 = (state_56910[(2)]);
var inst_56890 = (inst_56889__$1 == null);
var state_56910__$1 = (function (){var statearr_56914 = state_56910;
(statearr_56914[(7)] = inst_56889__$1);

return statearr_56914;
})();
if(cljs.core.truth_(inst_56890)){
var statearr_56915_58317 = state_56910__$1;
(statearr_56915_58317[(1)] = (5));

} else {
var statearr_56916_58318 = state_56910__$1;
(statearr_56916_58318[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56911 === (13))){
var state_56910__$1 = state_56910;
var statearr_56917_58319 = state_56910__$1;
(statearr_56917_58319[(2)] = null);

(statearr_56917_58319[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56911 === (6))){
var inst_56889 = (state_56910[(7)]);
var state_56910__$1 = state_56910;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56910__$1,(11),to,inst_56889);
} else {
if((state_val_56911 === (3))){
var inst_56908 = (state_56910[(2)]);
var state_56910__$1 = state_56910;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56910__$1,inst_56908);
} else {
if((state_val_56911 === (12))){
var state_56910__$1 = state_56910;
var statearr_56918_58320 = state_56910__$1;
(statearr_56918_58320[(2)] = null);

(statearr_56918_58320[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56911 === (2))){
var state_56910__$1 = state_56910;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56910__$1,(4),from);
} else {
if((state_val_56911 === (11))){
var inst_56899 = (state_56910[(2)]);
var state_56910__$1 = state_56910;
if(cljs.core.truth_(inst_56899)){
var statearr_56919_58321 = state_56910__$1;
(statearr_56919_58321[(1)] = (12));

} else {
var statearr_56920_58322 = state_56910__$1;
(statearr_56920_58322[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56911 === (9))){
var state_56910__$1 = state_56910;
var statearr_56921_58323 = state_56910__$1;
(statearr_56921_58323[(2)] = null);

(statearr_56921_58323[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56911 === (5))){
var state_56910__$1 = state_56910;
if(cljs.core.truth_(close_QMARK_)){
var statearr_56922_58324 = state_56910__$1;
(statearr_56922_58324[(1)] = (8));

} else {
var statearr_56923_58325 = state_56910__$1;
(statearr_56923_58325[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56911 === (14))){
var inst_56904 = (state_56910[(2)]);
var state_56910__$1 = state_56910;
var statearr_56924_58326 = state_56910__$1;
(statearr_56924_58326[(2)] = inst_56904);

(statearr_56924_58326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56911 === (10))){
var inst_56896 = (state_56910[(2)]);
var state_56910__$1 = state_56910;
var statearr_56925_58327 = state_56910__$1;
(statearr_56925_58327[(2)] = inst_56896);

(statearr_56925_58327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56911 === (8))){
var inst_56893 = cljs.core.async.close_BANG_(to);
var state_56910__$1 = state_56910;
var statearr_56926_58328 = state_56910__$1;
(statearr_56926_58328[(2)] = inst_56893);

(statearr_56926_58328[(1)] = (10));


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
var cljs$core$async$state_machine__56662__auto__ = null;
var cljs$core$async$state_machine__56662__auto____0 = (function (){
var statearr_56927 = [null,null,null,null,null,null,null,null];
(statearr_56927[(0)] = cljs$core$async$state_machine__56662__auto__);

(statearr_56927[(1)] = (1));

return statearr_56927;
});
var cljs$core$async$state_machine__56662__auto____1 = (function (state_56910){
while(true){
var ret_value__56663__auto__ = (function (){try{while(true){
var result__56664__auto__ = switch__56661__auto__(state_56910);
if(cljs.core.keyword_identical_QMARK_(result__56664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56664__auto__;
}
break;
}
}catch (e56928){var ex__56665__auto__ = e56928;
var statearr_56929_58330 = state_56910;
(statearr_56929_58330[(2)] = ex__56665__auto__);


if(cljs.core.seq((state_56910[(4)]))){
var statearr_56930_58331 = state_56910;
(statearr_56930_58331[(1)] = cljs.core.first((state_56910[(4)])));

} else {
throw ex__56665__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58332 = state_56910;
state_56910 = G__58332;
continue;
} else {
return ret_value__56663__auto__;
}
break;
}
});
cljs$core$async$state_machine__56662__auto__ = function(state_56910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56662__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56662__auto____1.call(this,state_56910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56662__auto____0;
cljs$core$async$state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56662__auto____1;
return cljs$core$async$state_machine__56662__auto__;
})()
})();
var state__56791__auto__ = (function (){var statearr_56931 = f__56790__auto__();
(statearr_56931[(6)] = c__56789__auto___58314);

return statearr_56931;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56791__auto__);
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
var process = (function (p__56932){
var vec__56933 = p__56932;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56933,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56933,(1),null);
var job = vec__56933;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__56789__auto___58334 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56790__auto__ = (function (){var switch__56661__auto__ = (function (state_56940){
var state_val_56941 = (state_56940[(1)]);
if((state_val_56941 === (1))){
var state_56940__$1 = state_56940;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_56940__$1,(2),res,v);
} else {
if((state_val_56941 === (2))){
var inst_56937 = (state_56940[(2)]);
var inst_56938 = cljs.core.async.close_BANG_(res);
var state_56940__$1 = (function (){var statearr_56942 = state_56940;
(statearr_56942[(7)] = inst_56937);

return statearr_56942;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_56940__$1,inst_56938);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56662__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56662__auto____0 = (function (){
var statearr_56943 = [null,null,null,null,null,null,null,null];
(statearr_56943[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56662__auto__);

(statearr_56943[(1)] = (1));

return statearr_56943;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56662__auto____1 = (function (state_56940){
while(true){
var ret_value__56663__auto__ = (function (){try{while(true){
var result__56664__auto__ = switch__56661__auto__(state_56940);
if(cljs.core.keyword_identical_QMARK_(result__56664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56664__auto__;
}
break;
}
}catch (e56944){var ex__56665__auto__ = e56944;
var statearr_56945_58336 = state_56940;
(statearr_56945_58336[(2)] = ex__56665__auto__);


if(cljs.core.seq((state_56940[(4)]))){
var statearr_56946_58337 = state_56940;
(statearr_56946_58337[(1)] = cljs.core.first((state_56940[(4)])));

} else {
throw ex__56665__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58338 = state_56940;
state_56940 = G__58338;
continue;
} else {
return ret_value__56663__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56662__auto__ = function(state_56940){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56662__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56662__auto____1.call(this,state_56940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56662__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56662__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56662__auto__;
})()
})();
var state__56791__auto__ = (function (){var statearr_56947 = f__56790__auto__();
(statearr_56947[(6)] = c__56789__auto___58334);

return statearr_56947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56791__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__56948){
var vec__56949 = p__56948;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56949,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56949,(1),null);
var job = vec__56949;
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
var n__4695__auto___58340 = n;
var __58341 = (0);
while(true){
if((__58341 < n__4695__auto___58340)){
var G__56952_58342 = type;
var G__56952_58343__$1 = (((G__56952_58342 instanceof cljs.core.Keyword))?G__56952_58342.fqn:null);
switch (G__56952_58343__$1) {
case "compute":
var c__56789__auto___58346 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__58341,c__56789__auto___58346,G__56952_58342,G__56952_58343__$1,n__4695__auto___58340,jobs,results,process,async){
return (function (){
var f__56790__auto__ = (function (){var switch__56661__auto__ = ((function (__58341,c__56789__auto___58346,G__56952_58342,G__56952_58343__$1,n__4695__auto___58340,jobs,results,process,async){
return (function (state_56965){
var state_val_56966 = (state_56965[(1)]);
if((state_val_56966 === (1))){
var state_56965__$1 = state_56965;
var statearr_56967_58347 = state_56965__$1;
(statearr_56967_58347[(2)] = null);

(statearr_56967_58347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56966 === (2))){
var state_56965__$1 = state_56965;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56965__$1,(4),jobs);
} else {
if((state_val_56966 === (3))){
var inst_56963 = (state_56965[(2)]);
var state_56965__$1 = state_56965;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56965__$1,inst_56963);
} else {
if((state_val_56966 === (4))){
var inst_56955 = (state_56965[(2)]);
var inst_56956 = process(inst_56955);
var state_56965__$1 = state_56965;
if(cljs.core.truth_(inst_56956)){
var statearr_56968_58348 = state_56965__$1;
(statearr_56968_58348[(1)] = (5));

} else {
var statearr_56969_58349 = state_56965__$1;
(statearr_56969_58349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56966 === (5))){
var state_56965__$1 = state_56965;
var statearr_56970_58350 = state_56965__$1;
(statearr_56970_58350[(2)] = null);

(statearr_56970_58350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56966 === (6))){
var state_56965__$1 = state_56965;
var statearr_56971_58351 = state_56965__$1;
(statearr_56971_58351[(2)] = null);

(statearr_56971_58351[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56966 === (7))){
var inst_56961 = (state_56965[(2)]);
var state_56965__$1 = state_56965;
var statearr_56972_58352 = state_56965__$1;
(statearr_56972_58352[(2)] = inst_56961);

(statearr_56972_58352[(1)] = (3));


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
});})(__58341,c__56789__auto___58346,G__56952_58342,G__56952_58343__$1,n__4695__auto___58340,jobs,results,process,async))
;
return ((function (__58341,switch__56661__auto__,c__56789__auto___58346,G__56952_58342,G__56952_58343__$1,n__4695__auto___58340,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56662__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56662__auto____0 = (function (){
var statearr_56973 = [null,null,null,null,null,null,null];
(statearr_56973[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56662__auto__);

(statearr_56973[(1)] = (1));

return statearr_56973;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56662__auto____1 = (function (state_56965){
while(true){
var ret_value__56663__auto__ = (function (){try{while(true){
var result__56664__auto__ = switch__56661__auto__(state_56965);
if(cljs.core.keyword_identical_QMARK_(result__56664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56664__auto__;
}
break;
}
}catch (e56974){var ex__56665__auto__ = e56974;
var statearr_56975_58354 = state_56965;
(statearr_56975_58354[(2)] = ex__56665__auto__);


if(cljs.core.seq((state_56965[(4)]))){
var statearr_56976_58356 = state_56965;
(statearr_56976_58356[(1)] = cljs.core.first((state_56965[(4)])));

} else {
throw ex__56665__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58357 = state_56965;
state_56965 = G__58357;
continue;
} else {
return ret_value__56663__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56662__auto__ = function(state_56965){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56662__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56662__auto____1.call(this,state_56965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56662__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56662__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56662__auto__;
})()
;})(__58341,switch__56661__auto__,c__56789__auto___58346,G__56952_58342,G__56952_58343__$1,n__4695__auto___58340,jobs,results,process,async))
})();
var state__56791__auto__ = (function (){var statearr_56977 = f__56790__auto__();
(statearr_56977[(6)] = c__56789__auto___58346);

return statearr_56977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56791__auto__);
});})(__58341,c__56789__auto___58346,G__56952_58342,G__56952_58343__$1,n__4695__auto___58340,jobs,results,process,async))
);


break;
case "async":
var c__56789__auto___58358 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__58341,c__56789__auto___58358,G__56952_58342,G__56952_58343__$1,n__4695__auto___58340,jobs,results,process,async){
return (function (){
var f__56790__auto__ = (function (){var switch__56661__auto__ = ((function (__58341,c__56789__auto___58358,G__56952_58342,G__56952_58343__$1,n__4695__auto___58340,jobs,results,process,async){
return (function (state_56990){
var state_val_56991 = (state_56990[(1)]);
if((state_val_56991 === (1))){
var state_56990__$1 = state_56990;
var statearr_56992_58359 = state_56990__$1;
(statearr_56992_58359[(2)] = null);

(statearr_56992_58359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56991 === (2))){
var state_56990__$1 = state_56990;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_56990__$1,(4),jobs);
} else {
if((state_val_56991 === (3))){
var inst_56988 = (state_56990[(2)]);
var state_56990__$1 = state_56990;
return cljs.core.async.impl.ioc_helpers.return_chan(state_56990__$1,inst_56988);
} else {
if((state_val_56991 === (4))){
var inst_56980 = (state_56990[(2)]);
var inst_56981 = async(inst_56980);
var state_56990__$1 = state_56990;
if(cljs.core.truth_(inst_56981)){
var statearr_56993_58360 = state_56990__$1;
(statearr_56993_58360[(1)] = (5));

} else {
var statearr_56994_58361 = state_56990__$1;
(statearr_56994_58361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56991 === (5))){
var state_56990__$1 = state_56990;
var statearr_56995_58362 = state_56990__$1;
(statearr_56995_58362[(2)] = null);

(statearr_56995_58362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56991 === (6))){
var state_56990__$1 = state_56990;
var statearr_56996_58363 = state_56990__$1;
(statearr_56996_58363[(2)] = null);

(statearr_56996_58363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56991 === (7))){
var inst_56986 = (state_56990[(2)]);
var state_56990__$1 = state_56990;
var statearr_56997_58364 = state_56990__$1;
(statearr_56997_58364[(2)] = inst_56986);

(statearr_56997_58364[(1)] = (3));


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
});})(__58341,c__56789__auto___58358,G__56952_58342,G__56952_58343__$1,n__4695__auto___58340,jobs,results,process,async))
;
return ((function (__58341,switch__56661__auto__,c__56789__auto___58358,G__56952_58342,G__56952_58343__$1,n__4695__auto___58340,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__56662__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56662__auto____0 = (function (){
var statearr_56998 = [null,null,null,null,null,null,null];
(statearr_56998[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56662__auto__);

(statearr_56998[(1)] = (1));

return statearr_56998;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56662__auto____1 = (function (state_56990){
while(true){
var ret_value__56663__auto__ = (function (){try{while(true){
var result__56664__auto__ = switch__56661__auto__(state_56990);
if(cljs.core.keyword_identical_QMARK_(result__56664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56664__auto__;
}
break;
}
}catch (e56999){var ex__56665__auto__ = e56999;
var statearr_57000_58367 = state_56990;
(statearr_57000_58367[(2)] = ex__56665__auto__);


if(cljs.core.seq((state_56990[(4)]))){
var statearr_57001_58368 = state_56990;
(statearr_57001_58368[(1)] = cljs.core.first((state_56990[(4)])));

} else {
throw ex__56665__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58369 = state_56990;
state_56990 = G__58369;
continue;
} else {
return ret_value__56663__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56662__auto__ = function(state_56990){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56662__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56662__auto____1.call(this,state_56990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56662__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56662__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56662__auto__;
})()
;})(__58341,switch__56661__auto__,c__56789__auto___58358,G__56952_58342,G__56952_58343__$1,n__4695__auto___58340,jobs,results,process,async))
})();
var state__56791__auto__ = (function (){var statearr_57002 = f__56790__auto__();
(statearr_57002[(6)] = c__56789__auto___58358);

return statearr_57002;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56791__auto__);
});})(__58341,c__56789__auto___58358,G__56952_58342,G__56952_58343__$1,n__4695__auto___58340,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56952_58343__$1)].join('')));

}

var G__58370 = (__58341 + (1));
__58341 = G__58370;
continue;
} else {
}
break;
}

var c__56789__auto___58371 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56790__auto__ = (function (){var switch__56661__auto__ = (function (state_57024){
var state_val_57025 = (state_57024[(1)]);
if((state_val_57025 === (7))){
var inst_57020 = (state_57024[(2)]);
var state_57024__$1 = state_57024;
var statearr_57026_58372 = state_57024__$1;
(statearr_57026_58372[(2)] = inst_57020);

(statearr_57026_58372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57025 === (1))){
var state_57024__$1 = state_57024;
var statearr_57027_58373 = state_57024__$1;
(statearr_57027_58373[(2)] = null);

(statearr_57027_58373[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57025 === (4))){
var inst_57005 = (state_57024[(7)]);
var inst_57005__$1 = (state_57024[(2)]);
var inst_57006 = (inst_57005__$1 == null);
var state_57024__$1 = (function (){var statearr_57028 = state_57024;
(statearr_57028[(7)] = inst_57005__$1);

return statearr_57028;
})();
if(cljs.core.truth_(inst_57006)){
var statearr_57029_58374 = state_57024__$1;
(statearr_57029_58374[(1)] = (5));

} else {
var statearr_57030_58375 = state_57024__$1;
(statearr_57030_58375[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57025 === (6))){
var inst_57010 = (state_57024[(8)]);
var inst_57005 = (state_57024[(7)]);
var inst_57010__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_57011 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57012 = [inst_57005,inst_57010__$1];
var inst_57013 = (new cljs.core.PersistentVector(null,2,(5),inst_57011,inst_57012,null));
var state_57024__$1 = (function (){var statearr_57031 = state_57024;
(statearr_57031[(8)] = inst_57010__$1);

return statearr_57031;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57024__$1,(8),jobs,inst_57013);
} else {
if((state_val_57025 === (3))){
var inst_57022 = (state_57024[(2)]);
var state_57024__$1 = state_57024;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57024__$1,inst_57022);
} else {
if((state_val_57025 === (2))){
var state_57024__$1 = state_57024;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57024__$1,(4),from);
} else {
if((state_val_57025 === (9))){
var inst_57017 = (state_57024[(2)]);
var state_57024__$1 = (function (){var statearr_57032 = state_57024;
(statearr_57032[(9)] = inst_57017);

return statearr_57032;
})();
var statearr_57033_58376 = state_57024__$1;
(statearr_57033_58376[(2)] = null);

(statearr_57033_58376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57025 === (5))){
var inst_57008 = cljs.core.async.close_BANG_(jobs);
var state_57024__$1 = state_57024;
var statearr_57034_58377 = state_57024__$1;
(statearr_57034_58377[(2)] = inst_57008);

(statearr_57034_58377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57025 === (8))){
var inst_57010 = (state_57024[(8)]);
var inst_57015 = (state_57024[(2)]);
var state_57024__$1 = (function (){var statearr_57035 = state_57024;
(statearr_57035[(10)] = inst_57015);

return statearr_57035;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57024__$1,(9),results,inst_57010);
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
var cljs$core$async$pipeline_STAR__$_state_machine__56662__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56662__auto____0 = (function (){
var statearr_57036 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57036[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56662__auto__);

(statearr_57036[(1)] = (1));

return statearr_57036;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56662__auto____1 = (function (state_57024){
while(true){
var ret_value__56663__auto__ = (function (){try{while(true){
var result__56664__auto__ = switch__56661__auto__(state_57024);
if(cljs.core.keyword_identical_QMARK_(result__56664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56664__auto__;
}
break;
}
}catch (e57037){var ex__56665__auto__ = e57037;
var statearr_57038_58380 = state_57024;
(statearr_57038_58380[(2)] = ex__56665__auto__);


if(cljs.core.seq((state_57024[(4)]))){
var statearr_57039_58381 = state_57024;
(statearr_57039_58381[(1)] = cljs.core.first((state_57024[(4)])));

} else {
throw ex__56665__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58382 = state_57024;
state_57024 = G__58382;
continue;
} else {
return ret_value__56663__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56662__auto__ = function(state_57024){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56662__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56662__auto____1.call(this,state_57024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56662__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56662__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56662__auto__;
})()
})();
var state__56791__auto__ = (function (){var statearr_57040 = f__56790__auto__();
(statearr_57040[(6)] = c__56789__auto___58371);

return statearr_57040;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56791__auto__);
}));


var c__56789__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56790__auto__ = (function (){var switch__56661__auto__ = (function (state_57078){
var state_val_57079 = (state_57078[(1)]);
if((state_val_57079 === (7))){
var inst_57074 = (state_57078[(2)]);
var state_57078__$1 = state_57078;
var statearr_57080_58383 = state_57078__$1;
(statearr_57080_58383[(2)] = inst_57074);

(statearr_57080_58383[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57079 === (20))){
var state_57078__$1 = state_57078;
var statearr_57081_58384 = state_57078__$1;
(statearr_57081_58384[(2)] = null);

(statearr_57081_58384[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57079 === (1))){
var state_57078__$1 = state_57078;
var statearr_57082_58385 = state_57078__$1;
(statearr_57082_58385[(2)] = null);

(statearr_57082_58385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57079 === (4))){
var inst_57043 = (state_57078[(7)]);
var inst_57043__$1 = (state_57078[(2)]);
var inst_57044 = (inst_57043__$1 == null);
var state_57078__$1 = (function (){var statearr_57083 = state_57078;
(statearr_57083[(7)] = inst_57043__$1);

return statearr_57083;
})();
if(cljs.core.truth_(inst_57044)){
var statearr_57084_58386 = state_57078__$1;
(statearr_57084_58386[(1)] = (5));

} else {
var statearr_57085_58387 = state_57078__$1;
(statearr_57085_58387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57079 === (15))){
var inst_57056 = (state_57078[(8)]);
var state_57078__$1 = state_57078;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57078__$1,(18),to,inst_57056);
} else {
if((state_val_57079 === (21))){
var inst_57069 = (state_57078[(2)]);
var state_57078__$1 = state_57078;
var statearr_57086_58388 = state_57078__$1;
(statearr_57086_58388[(2)] = inst_57069);

(statearr_57086_58388[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57079 === (13))){
var inst_57071 = (state_57078[(2)]);
var state_57078__$1 = (function (){var statearr_57087 = state_57078;
(statearr_57087[(9)] = inst_57071);

return statearr_57087;
})();
var statearr_57088_58389 = state_57078__$1;
(statearr_57088_58389[(2)] = null);

(statearr_57088_58389[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57079 === (6))){
var inst_57043 = (state_57078[(7)]);
var state_57078__$1 = state_57078;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57078__$1,(11),inst_57043);
} else {
if((state_val_57079 === (17))){
var inst_57064 = (state_57078[(2)]);
var state_57078__$1 = state_57078;
if(cljs.core.truth_(inst_57064)){
var statearr_57089_58390 = state_57078__$1;
(statearr_57089_58390[(1)] = (19));

} else {
var statearr_57090_58391 = state_57078__$1;
(statearr_57090_58391[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57079 === (3))){
var inst_57076 = (state_57078[(2)]);
var state_57078__$1 = state_57078;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57078__$1,inst_57076);
} else {
if((state_val_57079 === (12))){
var inst_57053 = (state_57078[(10)]);
var state_57078__$1 = state_57078;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57078__$1,(14),inst_57053);
} else {
if((state_val_57079 === (2))){
var state_57078__$1 = state_57078;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57078__$1,(4),results);
} else {
if((state_val_57079 === (19))){
var state_57078__$1 = state_57078;
var statearr_57091_58392 = state_57078__$1;
(statearr_57091_58392[(2)] = null);

(statearr_57091_58392[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57079 === (11))){
var inst_57053 = (state_57078[(2)]);
var state_57078__$1 = (function (){var statearr_57092 = state_57078;
(statearr_57092[(10)] = inst_57053);

return statearr_57092;
})();
var statearr_57093_58393 = state_57078__$1;
(statearr_57093_58393[(2)] = null);

(statearr_57093_58393[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57079 === (9))){
var state_57078__$1 = state_57078;
var statearr_57094_58394 = state_57078__$1;
(statearr_57094_58394[(2)] = null);

(statearr_57094_58394[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57079 === (5))){
var state_57078__$1 = state_57078;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57095_58396 = state_57078__$1;
(statearr_57095_58396[(1)] = (8));

} else {
var statearr_57096_58397 = state_57078__$1;
(statearr_57096_58397[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57079 === (14))){
var inst_57056 = (state_57078[(8)]);
var inst_57058 = (state_57078[(11)]);
var inst_57056__$1 = (state_57078[(2)]);
var inst_57057 = (inst_57056__$1 == null);
var inst_57058__$1 = cljs.core.not(inst_57057);
var state_57078__$1 = (function (){var statearr_57097 = state_57078;
(statearr_57097[(8)] = inst_57056__$1);

(statearr_57097[(11)] = inst_57058__$1);

return statearr_57097;
})();
if(inst_57058__$1){
var statearr_57098_58399 = state_57078__$1;
(statearr_57098_58399[(1)] = (15));

} else {
var statearr_57099_58400 = state_57078__$1;
(statearr_57099_58400[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57079 === (16))){
var inst_57058 = (state_57078[(11)]);
var state_57078__$1 = state_57078;
var statearr_57100_58401 = state_57078__$1;
(statearr_57100_58401[(2)] = inst_57058);

(statearr_57100_58401[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57079 === (10))){
var inst_57050 = (state_57078[(2)]);
var state_57078__$1 = state_57078;
var statearr_57101_58402 = state_57078__$1;
(statearr_57101_58402[(2)] = inst_57050);

(statearr_57101_58402[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57079 === (18))){
var inst_57061 = (state_57078[(2)]);
var state_57078__$1 = state_57078;
var statearr_57102_58403 = state_57078__$1;
(statearr_57102_58403[(2)] = inst_57061);

(statearr_57102_58403[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57079 === (8))){
var inst_57047 = cljs.core.async.close_BANG_(to);
var state_57078__$1 = state_57078;
var statearr_57103_58404 = state_57078__$1;
(statearr_57103_58404[(2)] = inst_57047);

(statearr_57103_58404[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__56662__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__56662__auto____0 = (function (){
var statearr_57104 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57104[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__56662__auto__);

(statearr_57104[(1)] = (1));

return statearr_57104;
});
var cljs$core$async$pipeline_STAR__$_state_machine__56662__auto____1 = (function (state_57078){
while(true){
var ret_value__56663__auto__ = (function (){try{while(true){
var result__56664__auto__ = switch__56661__auto__(state_57078);
if(cljs.core.keyword_identical_QMARK_(result__56664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56664__auto__;
}
break;
}
}catch (e57105){var ex__56665__auto__ = e57105;
var statearr_57106_58405 = state_57078;
(statearr_57106_58405[(2)] = ex__56665__auto__);


if(cljs.core.seq((state_57078[(4)]))){
var statearr_57107_58406 = state_57078;
(statearr_57107_58406[(1)] = cljs.core.first((state_57078[(4)])));

} else {
throw ex__56665__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58407 = state_57078;
state_57078 = G__58407;
continue;
} else {
return ret_value__56663__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__56662__auto__ = function(state_57078){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__56662__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__56662__auto____1.call(this,state_57078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__56662__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__56662__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__56662__auto__;
})()
})();
var state__56791__auto__ = (function (){var statearr_57108 = f__56790__auto__();
(statearr_57108[(6)] = c__56789__auto__);

return statearr_57108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56791__auto__);
}));

return c__56789__auto__;
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
var G__57110 = arguments.length;
switch (G__57110) {
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
var G__57112 = arguments.length;
switch (G__57112) {
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
var G__57114 = arguments.length;
switch (G__57114) {
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
var c__56789__auto___58412 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56790__auto__ = (function (){var switch__56661__auto__ = (function (state_57140){
var state_val_57141 = (state_57140[(1)]);
if((state_val_57141 === (7))){
var inst_57136 = (state_57140[(2)]);
var state_57140__$1 = state_57140;
var statearr_57142_58413 = state_57140__$1;
(statearr_57142_58413[(2)] = inst_57136);

(statearr_57142_58413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57141 === (1))){
var state_57140__$1 = state_57140;
var statearr_57143_58414 = state_57140__$1;
(statearr_57143_58414[(2)] = null);

(statearr_57143_58414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57141 === (4))){
var inst_57117 = (state_57140[(7)]);
var inst_57117__$1 = (state_57140[(2)]);
var inst_57118 = (inst_57117__$1 == null);
var state_57140__$1 = (function (){var statearr_57144 = state_57140;
(statearr_57144[(7)] = inst_57117__$1);

return statearr_57144;
})();
if(cljs.core.truth_(inst_57118)){
var statearr_57145_58415 = state_57140__$1;
(statearr_57145_58415[(1)] = (5));

} else {
var statearr_57146_58416 = state_57140__$1;
(statearr_57146_58416[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57141 === (13))){
var state_57140__$1 = state_57140;
var statearr_57147_58417 = state_57140__$1;
(statearr_57147_58417[(2)] = null);

(statearr_57147_58417[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57141 === (6))){
var inst_57117 = (state_57140[(7)]);
var inst_57123 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_57117) : p.call(null,inst_57117));
var state_57140__$1 = state_57140;
if(cljs.core.truth_(inst_57123)){
var statearr_57148_58418 = state_57140__$1;
(statearr_57148_58418[(1)] = (9));

} else {
var statearr_57149_58419 = state_57140__$1;
(statearr_57149_58419[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57141 === (3))){
var inst_57138 = (state_57140[(2)]);
var state_57140__$1 = state_57140;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57140__$1,inst_57138);
} else {
if((state_val_57141 === (12))){
var state_57140__$1 = state_57140;
var statearr_57150_58424 = state_57140__$1;
(statearr_57150_58424[(2)] = null);

(statearr_57150_58424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57141 === (2))){
var state_57140__$1 = state_57140;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57140__$1,(4),ch);
} else {
if((state_val_57141 === (11))){
var inst_57117 = (state_57140[(7)]);
var inst_57127 = (state_57140[(2)]);
var state_57140__$1 = state_57140;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57140__$1,(8),inst_57127,inst_57117);
} else {
if((state_val_57141 === (9))){
var state_57140__$1 = state_57140;
var statearr_57151_58425 = state_57140__$1;
(statearr_57151_58425[(2)] = tc);

(statearr_57151_58425[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57141 === (5))){
var inst_57120 = cljs.core.async.close_BANG_(tc);
var inst_57121 = cljs.core.async.close_BANG_(fc);
var state_57140__$1 = (function (){var statearr_57152 = state_57140;
(statearr_57152[(8)] = inst_57120);

return statearr_57152;
})();
var statearr_57153_58426 = state_57140__$1;
(statearr_57153_58426[(2)] = inst_57121);

(statearr_57153_58426[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57141 === (14))){
var inst_57134 = (state_57140[(2)]);
var state_57140__$1 = state_57140;
var statearr_57154_58427 = state_57140__$1;
(statearr_57154_58427[(2)] = inst_57134);

(statearr_57154_58427[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57141 === (10))){
var state_57140__$1 = state_57140;
var statearr_57155_58428 = state_57140__$1;
(statearr_57155_58428[(2)] = fc);

(statearr_57155_58428[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57141 === (8))){
var inst_57129 = (state_57140[(2)]);
var state_57140__$1 = state_57140;
if(cljs.core.truth_(inst_57129)){
var statearr_57156_58429 = state_57140__$1;
(statearr_57156_58429[(1)] = (12));

} else {
var statearr_57157_58430 = state_57140__$1;
(statearr_57157_58430[(1)] = (13));

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
var cljs$core$async$state_machine__56662__auto__ = null;
var cljs$core$async$state_machine__56662__auto____0 = (function (){
var statearr_57158 = [null,null,null,null,null,null,null,null,null];
(statearr_57158[(0)] = cljs$core$async$state_machine__56662__auto__);

(statearr_57158[(1)] = (1));

return statearr_57158;
});
var cljs$core$async$state_machine__56662__auto____1 = (function (state_57140){
while(true){
var ret_value__56663__auto__ = (function (){try{while(true){
var result__56664__auto__ = switch__56661__auto__(state_57140);
if(cljs.core.keyword_identical_QMARK_(result__56664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56664__auto__;
}
break;
}
}catch (e57159){var ex__56665__auto__ = e57159;
var statearr_57160_58431 = state_57140;
(statearr_57160_58431[(2)] = ex__56665__auto__);


if(cljs.core.seq((state_57140[(4)]))){
var statearr_57161_58432 = state_57140;
(statearr_57161_58432[(1)] = cljs.core.first((state_57140[(4)])));

} else {
throw ex__56665__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58433 = state_57140;
state_57140 = G__58433;
continue;
} else {
return ret_value__56663__auto__;
}
break;
}
});
cljs$core$async$state_machine__56662__auto__ = function(state_57140){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56662__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56662__auto____1.call(this,state_57140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56662__auto____0;
cljs$core$async$state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56662__auto____1;
return cljs$core$async$state_machine__56662__auto__;
})()
})();
var state__56791__auto__ = (function (){var statearr_57162 = f__56790__auto__();
(statearr_57162[(6)] = c__56789__auto___58412);

return statearr_57162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56791__auto__);
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
var c__56789__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56790__auto__ = (function (){var switch__56661__auto__ = (function (state_57184){
var state_val_57185 = (state_57184[(1)]);
if((state_val_57185 === (7))){
var inst_57180 = (state_57184[(2)]);
var state_57184__$1 = state_57184;
var statearr_57186_58434 = state_57184__$1;
(statearr_57186_58434[(2)] = inst_57180);

(statearr_57186_58434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57185 === (1))){
var inst_57163 = init;
var inst_57164 = inst_57163;
var state_57184__$1 = (function (){var statearr_57187 = state_57184;
(statearr_57187[(7)] = inst_57164);

return statearr_57187;
})();
var statearr_57188_58435 = state_57184__$1;
(statearr_57188_58435[(2)] = null);

(statearr_57188_58435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57185 === (4))){
var inst_57167 = (state_57184[(8)]);
var inst_57167__$1 = (state_57184[(2)]);
var inst_57168 = (inst_57167__$1 == null);
var state_57184__$1 = (function (){var statearr_57189 = state_57184;
(statearr_57189[(8)] = inst_57167__$1);

return statearr_57189;
})();
if(cljs.core.truth_(inst_57168)){
var statearr_57190_58436 = state_57184__$1;
(statearr_57190_58436[(1)] = (5));

} else {
var statearr_57191_58437 = state_57184__$1;
(statearr_57191_58437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57185 === (6))){
var inst_57171 = (state_57184[(9)]);
var inst_57167 = (state_57184[(8)]);
var inst_57164 = (state_57184[(7)]);
var inst_57171__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_57164,inst_57167) : f.call(null,inst_57164,inst_57167));
var inst_57172 = cljs.core.reduced_QMARK_(inst_57171__$1);
var state_57184__$1 = (function (){var statearr_57192 = state_57184;
(statearr_57192[(9)] = inst_57171__$1);

return statearr_57192;
})();
if(inst_57172){
var statearr_57193_58438 = state_57184__$1;
(statearr_57193_58438[(1)] = (8));

} else {
var statearr_57194_58439 = state_57184__$1;
(statearr_57194_58439[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57185 === (3))){
var inst_57182 = (state_57184[(2)]);
var state_57184__$1 = state_57184;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57184__$1,inst_57182);
} else {
if((state_val_57185 === (2))){
var state_57184__$1 = state_57184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57184__$1,(4),ch);
} else {
if((state_val_57185 === (9))){
var inst_57171 = (state_57184[(9)]);
var inst_57164 = inst_57171;
var state_57184__$1 = (function (){var statearr_57195 = state_57184;
(statearr_57195[(7)] = inst_57164);

return statearr_57195;
})();
var statearr_57196_58440 = state_57184__$1;
(statearr_57196_58440[(2)] = null);

(statearr_57196_58440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57185 === (5))){
var inst_57164 = (state_57184[(7)]);
var state_57184__$1 = state_57184;
var statearr_57197_58441 = state_57184__$1;
(statearr_57197_58441[(2)] = inst_57164);

(statearr_57197_58441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57185 === (10))){
var inst_57178 = (state_57184[(2)]);
var state_57184__$1 = state_57184;
var statearr_57198_58442 = state_57184__$1;
(statearr_57198_58442[(2)] = inst_57178);

(statearr_57198_58442[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57185 === (8))){
var inst_57171 = (state_57184[(9)]);
var inst_57174 = cljs.core.deref(inst_57171);
var state_57184__$1 = state_57184;
var statearr_57199_58443 = state_57184__$1;
(statearr_57199_58443[(2)] = inst_57174);

(statearr_57199_58443[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__56662__auto__ = null;
var cljs$core$async$reduce_$_state_machine__56662__auto____0 = (function (){
var statearr_57200 = [null,null,null,null,null,null,null,null,null,null];
(statearr_57200[(0)] = cljs$core$async$reduce_$_state_machine__56662__auto__);

(statearr_57200[(1)] = (1));

return statearr_57200;
});
var cljs$core$async$reduce_$_state_machine__56662__auto____1 = (function (state_57184){
while(true){
var ret_value__56663__auto__ = (function (){try{while(true){
var result__56664__auto__ = switch__56661__auto__(state_57184);
if(cljs.core.keyword_identical_QMARK_(result__56664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56664__auto__;
}
break;
}
}catch (e57201){var ex__56665__auto__ = e57201;
var statearr_57202_58445 = state_57184;
(statearr_57202_58445[(2)] = ex__56665__auto__);


if(cljs.core.seq((state_57184[(4)]))){
var statearr_57203_58446 = state_57184;
(statearr_57203_58446[(1)] = cljs.core.first((state_57184[(4)])));

} else {
throw ex__56665__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58448 = state_57184;
state_57184 = G__58448;
continue;
} else {
return ret_value__56663__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__56662__auto__ = function(state_57184){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__56662__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__56662__auto____1.call(this,state_57184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__56662__auto____0;
cljs$core$async$reduce_$_state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__56662__auto____1;
return cljs$core$async$reduce_$_state_machine__56662__auto__;
})()
})();
var state__56791__auto__ = (function (){var statearr_57204 = f__56790__auto__();
(statearr_57204[(6)] = c__56789__auto__);

return statearr_57204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56791__auto__);
}));

return c__56789__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__56789__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56790__auto__ = (function (){var switch__56661__auto__ = (function (state_57210){
var state_val_57211 = (state_57210[(1)]);
if((state_val_57211 === (1))){
var inst_57205 = cljs.core.async.reduce(f__$1,init,ch);
var state_57210__$1 = state_57210;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57210__$1,(2),inst_57205);
} else {
if((state_val_57211 === (2))){
var inst_57207 = (state_57210[(2)]);
var inst_57208 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_57207) : f__$1.call(null,inst_57207));
var state_57210__$1 = state_57210;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57210__$1,inst_57208);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__56662__auto__ = null;
var cljs$core$async$transduce_$_state_machine__56662__auto____0 = (function (){
var statearr_57212 = [null,null,null,null,null,null,null];
(statearr_57212[(0)] = cljs$core$async$transduce_$_state_machine__56662__auto__);

(statearr_57212[(1)] = (1));

return statearr_57212;
});
var cljs$core$async$transduce_$_state_machine__56662__auto____1 = (function (state_57210){
while(true){
var ret_value__56663__auto__ = (function (){try{while(true){
var result__56664__auto__ = switch__56661__auto__(state_57210);
if(cljs.core.keyword_identical_QMARK_(result__56664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56664__auto__;
}
break;
}
}catch (e57213){var ex__56665__auto__ = e57213;
var statearr_57214_58449 = state_57210;
(statearr_57214_58449[(2)] = ex__56665__auto__);


if(cljs.core.seq((state_57210[(4)]))){
var statearr_57215_58450 = state_57210;
(statearr_57215_58450[(1)] = cljs.core.first((state_57210[(4)])));

} else {
throw ex__56665__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58451 = state_57210;
state_57210 = G__58451;
continue;
} else {
return ret_value__56663__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__56662__auto__ = function(state_57210){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__56662__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__56662__auto____1.call(this,state_57210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__56662__auto____0;
cljs$core$async$transduce_$_state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__56662__auto____1;
return cljs$core$async$transduce_$_state_machine__56662__auto__;
})()
})();
var state__56791__auto__ = (function (){var statearr_57216 = f__56790__auto__();
(statearr_57216[(6)] = c__56789__auto__);

return statearr_57216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56791__auto__);
}));

return c__56789__auto__;
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
var G__57218 = arguments.length;
switch (G__57218) {
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
var c__56789__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56790__auto__ = (function (){var switch__56661__auto__ = (function (state_57243){
var state_val_57244 = (state_57243[(1)]);
if((state_val_57244 === (7))){
var inst_57225 = (state_57243[(2)]);
var state_57243__$1 = state_57243;
var statearr_57245_58453 = state_57243__$1;
(statearr_57245_58453[(2)] = inst_57225);

(statearr_57245_58453[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57244 === (1))){
var inst_57219 = cljs.core.seq(coll);
var inst_57220 = inst_57219;
var state_57243__$1 = (function (){var statearr_57246 = state_57243;
(statearr_57246[(7)] = inst_57220);

return statearr_57246;
})();
var statearr_57247_58454 = state_57243__$1;
(statearr_57247_58454[(2)] = null);

(statearr_57247_58454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57244 === (4))){
var inst_57220 = (state_57243[(7)]);
var inst_57223 = cljs.core.first(inst_57220);
var state_57243__$1 = state_57243;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57243__$1,(7),ch,inst_57223);
} else {
if((state_val_57244 === (13))){
var inst_57237 = (state_57243[(2)]);
var state_57243__$1 = state_57243;
var statearr_57248_58455 = state_57243__$1;
(statearr_57248_58455[(2)] = inst_57237);

(statearr_57248_58455[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57244 === (6))){
var inst_57228 = (state_57243[(2)]);
var state_57243__$1 = state_57243;
if(cljs.core.truth_(inst_57228)){
var statearr_57249_58456 = state_57243__$1;
(statearr_57249_58456[(1)] = (8));

} else {
var statearr_57250_58457 = state_57243__$1;
(statearr_57250_58457[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57244 === (3))){
var inst_57241 = (state_57243[(2)]);
var state_57243__$1 = state_57243;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57243__$1,inst_57241);
} else {
if((state_val_57244 === (12))){
var state_57243__$1 = state_57243;
var statearr_57251_58462 = state_57243__$1;
(statearr_57251_58462[(2)] = null);

(statearr_57251_58462[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57244 === (2))){
var inst_57220 = (state_57243[(7)]);
var state_57243__$1 = state_57243;
if(cljs.core.truth_(inst_57220)){
var statearr_57252_58463 = state_57243__$1;
(statearr_57252_58463[(1)] = (4));

} else {
var statearr_57253_58467 = state_57243__$1;
(statearr_57253_58467[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57244 === (11))){
var inst_57234 = cljs.core.async.close_BANG_(ch);
var state_57243__$1 = state_57243;
var statearr_57254_58468 = state_57243__$1;
(statearr_57254_58468[(2)] = inst_57234);

(statearr_57254_58468[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57244 === (9))){
var state_57243__$1 = state_57243;
if(cljs.core.truth_(close_QMARK_)){
var statearr_57255_58469 = state_57243__$1;
(statearr_57255_58469[(1)] = (11));

} else {
var statearr_57256_58470 = state_57243__$1;
(statearr_57256_58470[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57244 === (5))){
var inst_57220 = (state_57243[(7)]);
var state_57243__$1 = state_57243;
var statearr_57257_58471 = state_57243__$1;
(statearr_57257_58471[(2)] = inst_57220);

(statearr_57257_58471[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57244 === (10))){
var inst_57239 = (state_57243[(2)]);
var state_57243__$1 = state_57243;
var statearr_57258_58472 = state_57243__$1;
(statearr_57258_58472[(2)] = inst_57239);

(statearr_57258_58472[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57244 === (8))){
var inst_57220 = (state_57243[(7)]);
var inst_57230 = cljs.core.next(inst_57220);
var inst_57220__$1 = inst_57230;
var state_57243__$1 = (function (){var statearr_57259 = state_57243;
(statearr_57259[(7)] = inst_57220__$1);

return statearr_57259;
})();
var statearr_57260_58473 = state_57243__$1;
(statearr_57260_58473[(2)] = null);

(statearr_57260_58473[(1)] = (2));


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
var cljs$core$async$state_machine__56662__auto__ = null;
var cljs$core$async$state_machine__56662__auto____0 = (function (){
var statearr_57261 = [null,null,null,null,null,null,null,null];
(statearr_57261[(0)] = cljs$core$async$state_machine__56662__auto__);

(statearr_57261[(1)] = (1));

return statearr_57261;
});
var cljs$core$async$state_machine__56662__auto____1 = (function (state_57243){
while(true){
var ret_value__56663__auto__ = (function (){try{while(true){
var result__56664__auto__ = switch__56661__auto__(state_57243);
if(cljs.core.keyword_identical_QMARK_(result__56664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56664__auto__;
}
break;
}
}catch (e57262){var ex__56665__auto__ = e57262;
var statearr_57263_58477 = state_57243;
(statearr_57263_58477[(2)] = ex__56665__auto__);


if(cljs.core.seq((state_57243[(4)]))){
var statearr_57264_58478 = state_57243;
(statearr_57264_58478[(1)] = cljs.core.first((state_57243[(4)])));

} else {
throw ex__56665__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58482 = state_57243;
state_57243 = G__58482;
continue;
} else {
return ret_value__56663__auto__;
}
break;
}
});
cljs$core$async$state_machine__56662__auto__ = function(state_57243){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56662__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56662__auto____1.call(this,state_57243);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56662__auto____0;
cljs$core$async$state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56662__auto____1;
return cljs$core$async$state_machine__56662__auto__;
})()
})();
var state__56791__auto__ = (function (){var statearr_57265 = f__56790__auto__();
(statearr_57265[(6)] = c__56789__auto__);

return statearr_57265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56791__auto__);
}));

return c__56789__auto__;
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
var G__57267 = arguments.length;
switch (G__57267) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_58487 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_58487(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_58488 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_58488(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_58496 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_58496(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_58497 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_58497(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57268 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57268 = (function (ch,cs,meta57269){
this.ch = ch;
this.cs = cs;
this.meta57269 = meta57269;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57270,meta57269__$1){
var self__ = this;
var _57270__$1 = this;
return (new cljs.core.async.t_cljs$core$async57268(self__.ch,self__.cs,meta57269__$1));
}));

(cljs.core.async.t_cljs$core$async57268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57270){
var self__ = this;
var _57270__$1 = this;
return self__.meta57269;
}));

(cljs.core.async.t_cljs$core$async57268.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57268.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async57268.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57268.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async57268.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async57268.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async57268.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta57269","meta57269",1658796824,null)], null);
}));

(cljs.core.async.t_cljs$core$async57268.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57268.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57268");

(cljs.core.async.t_cljs$core$async57268.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async57268");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57268.
 */
cljs.core.async.__GT_t_cljs$core$async57268 = (function cljs$core$async$mult_$___GT_t_cljs$core$async57268(ch__$1,cs__$1,meta57269){
return (new cljs.core.async.t_cljs$core$async57268(ch__$1,cs__$1,meta57269));
});

}

return (new cljs.core.async.t_cljs$core$async57268(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__56789__auto___58504 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56790__auto__ = (function (){var switch__56661__auto__ = (function (state_57403){
var state_val_57404 = (state_57403[(1)]);
if((state_val_57404 === (7))){
var inst_57399 = (state_57403[(2)]);
var state_57403__$1 = state_57403;
var statearr_57405_58508 = state_57403__$1;
(statearr_57405_58508[(2)] = inst_57399);

(statearr_57405_58508[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (20))){
var inst_57304 = (state_57403[(7)]);
var inst_57316 = cljs.core.first(inst_57304);
var inst_57317 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57316,(0),null);
var inst_57318 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57316,(1),null);
var state_57403__$1 = (function (){var statearr_57406 = state_57403;
(statearr_57406[(8)] = inst_57317);

return statearr_57406;
})();
if(cljs.core.truth_(inst_57318)){
var statearr_57407_58509 = state_57403__$1;
(statearr_57407_58509[(1)] = (22));

} else {
var statearr_57408_58510 = state_57403__$1;
(statearr_57408_58510[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (27))){
var inst_57348 = (state_57403[(9)]);
var inst_57273 = (state_57403[(10)]);
var inst_57353 = (state_57403[(11)]);
var inst_57346 = (state_57403[(12)]);
var inst_57353__$1 = cljs.core._nth(inst_57346,inst_57348);
var inst_57354 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_57353__$1,inst_57273,done);
var state_57403__$1 = (function (){var statearr_57409 = state_57403;
(statearr_57409[(11)] = inst_57353__$1);

return statearr_57409;
})();
if(cljs.core.truth_(inst_57354)){
var statearr_57410_58511 = state_57403__$1;
(statearr_57410_58511[(1)] = (30));

} else {
var statearr_57411_58512 = state_57403__$1;
(statearr_57411_58512[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (1))){
var state_57403__$1 = state_57403;
var statearr_57412_58513 = state_57403__$1;
(statearr_57412_58513[(2)] = null);

(statearr_57412_58513[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (24))){
var inst_57304 = (state_57403[(7)]);
var inst_57323 = (state_57403[(2)]);
var inst_57324 = cljs.core.next(inst_57304);
var inst_57282 = inst_57324;
var inst_57283 = null;
var inst_57284 = (0);
var inst_57285 = (0);
var state_57403__$1 = (function (){var statearr_57413 = state_57403;
(statearr_57413[(13)] = inst_57284);

(statearr_57413[(14)] = inst_57282);

(statearr_57413[(15)] = inst_57285);

(statearr_57413[(16)] = inst_57283);

(statearr_57413[(17)] = inst_57323);

return statearr_57413;
})();
var statearr_57414_58514 = state_57403__$1;
(statearr_57414_58514[(2)] = null);

(statearr_57414_58514[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (39))){
var state_57403__$1 = state_57403;
var statearr_57418_58516 = state_57403__$1;
(statearr_57418_58516[(2)] = null);

(statearr_57418_58516[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (4))){
var inst_57273 = (state_57403[(10)]);
var inst_57273__$1 = (state_57403[(2)]);
var inst_57274 = (inst_57273__$1 == null);
var state_57403__$1 = (function (){var statearr_57419 = state_57403;
(statearr_57419[(10)] = inst_57273__$1);

return statearr_57419;
})();
if(cljs.core.truth_(inst_57274)){
var statearr_57420_58517 = state_57403__$1;
(statearr_57420_58517[(1)] = (5));

} else {
var statearr_57421_58518 = state_57403__$1;
(statearr_57421_58518[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (15))){
var inst_57284 = (state_57403[(13)]);
var inst_57282 = (state_57403[(14)]);
var inst_57285 = (state_57403[(15)]);
var inst_57283 = (state_57403[(16)]);
var inst_57300 = (state_57403[(2)]);
var inst_57301 = (inst_57285 + (1));
var tmp57415 = inst_57284;
var tmp57416 = inst_57282;
var tmp57417 = inst_57283;
var inst_57282__$1 = tmp57416;
var inst_57283__$1 = tmp57417;
var inst_57284__$1 = tmp57415;
var inst_57285__$1 = inst_57301;
var state_57403__$1 = (function (){var statearr_57422 = state_57403;
(statearr_57422[(18)] = inst_57300);

(statearr_57422[(13)] = inst_57284__$1);

(statearr_57422[(14)] = inst_57282__$1);

(statearr_57422[(15)] = inst_57285__$1);

(statearr_57422[(16)] = inst_57283__$1);

return statearr_57422;
})();
var statearr_57423_58519 = state_57403__$1;
(statearr_57423_58519[(2)] = null);

(statearr_57423_58519[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (21))){
var inst_57327 = (state_57403[(2)]);
var state_57403__$1 = state_57403;
var statearr_57427_58520 = state_57403__$1;
(statearr_57427_58520[(2)] = inst_57327);

(statearr_57427_58520[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (31))){
var inst_57353 = (state_57403[(11)]);
var inst_57357 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_57353);
var state_57403__$1 = state_57403;
var statearr_57428_58521 = state_57403__$1;
(statearr_57428_58521[(2)] = inst_57357);

(statearr_57428_58521[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (32))){
var inst_57348 = (state_57403[(9)]);
var inst_57345 = (state_57403[(19)]);
var inst_57346 = (state_57403[(12)]);
var inst_57347 = (state_57403[(20)]);
var inst_57359 = (state_57403[(2)]);
var inst_57360 = (inst_57348 + (1));
var tmp57424 = inst_57345;
var tmp57425 = inst_57346;
var tmp57426 = inst_57347;
var inst_57345__$1 = tmp57424;
var inst_57346__$1 = tmp57425;
var inst_57347__$1 = tmp57426;
var inst_57348__$1 = inst_57360;
var state_57403__$1 = (function (){var statearr_57429 = state_57403;
(statearr_57429[(9)] = inst_57348__$1);

(statearr_57429[(21)] = inst_57359);

(statearr_57429[(19)] = inst_57345__$1);

(statearr_57429[(12)] = inst_57346__$1);

(statearr_57429[(20)] = inst_57347__$1);

return statearr_57429;
})();
var statearr_57430_58522 = state_57403__$1;
(statearr_57430_58522[(2)] = null);

(statearr_57430_58522[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (40))){
var inst_57372 = (state_57403[(22)]);
var inst_57376 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_57372);
var state_57403__$1 = state_57403;
var statearr_57431_58523 = state_57403__$1;
(statearr_57431_58523[(2)] = inst_57376);

(statearr_57431_58523[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (33))){
var inst_57363 = (state_57403[(23)]);
var inst_57365 = cljs.core.chunked_seq_QMARK_(inst_57363);
var state_57403__$1 = state_57403;
if(inst_57365){
var statearr_57432_58524 = state_57403__$1;
(statearr_57432_58524[(1)] = (36));

} else {
var statearr_57433_58525 = state_57403__$1;
(statearr_57433_58525[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (13))){
var inst_57294 = (state_57403[(24)]);
var inst_57297 = cljs.core.async.close_BANG_(inst_57294);
var state_57403__$1 = state_57403;
var statearr_57434_58526 = state_57403__$1;
(statearr_57434_58526[(2)] = inst_57297);

(statearr_57434_58526[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (22))){
var inst_57317 = (state_57403[(8)]);
var inst_57320 = cljs.core.async.close_BANG_(inst_57317);
var state_57403__$1 = state_57403;
var statearr_57435_58527 = state_57403__$1;
(statearr_57435_58527[(2)] = inst_57320);

(statearr_57435_58527[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (36))){
var inst_57363 = (state_57403[(23)]);
var inst_57367 = cljs.core.chunk_first(inst_57363);
var inst_57368 = cljs.core.chunk_rest(inst_57363);
var inst_57369 = cljs.core.count(inst_57367);
var inst_57345 = inst_57368;
var inst_57346 = inst_57367;
var inst_57347 = inst_57369;
var inst_57348 = (0);
var state_57403__$1 = (function (){var statearr_57436 = state_57403;
(statearr_57436[(9)] = inst_57348);

(statearr_57436[(19)] = inst_57345);

(statearr_57436[(12)] = inst_57346);

(statearr_57436[(20)] = inst_57347);

return statearr_57436;
})();
var statearr_57437_58528 = state_57403__$1;
(statearr_57437_58528[(2)] = null);

(statearr_57437_58528[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (41))){
var inst_57363 = (state_57403[(23)]);
var inst_57378 = (state_57403[(2)]);
var inst_57379 = cljs.core.next(inst_57363);
var inst_57345 = inst_57379;
var inst_57346 = null;
var inst_57347 = (0);
var inst_57348 = (0);
var state_57403__$1 = (function (){var statearr_57438 = state_57403;
(statearr_57438[(9)] = inst_57348);

(statearr_57438[(19)] = inst_57345);

(statearr_57438[(25)] = inst_57378);

(statearr_57438[(12)] = inst_57346);

(statearr_57438[(20)] = inst_57347);

return statearr_57438;
})();
var statearr_57439_58529 = state_57403__$1;
(statearr_57439_58529[(2)] = null);

(statearr_57439_58529[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (43))){
var state_57403__$1 = state_57403;
var statearr_57440_58530 = state_57403__$1;
(statearr_57440_58530[(2)] = null);

(statearr_57440_58530[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (29))){
var inst_57387 = (state_57403[(2)]);
var state_57403__$1 = state_57403;
var statearr_57441_58531 = state_57403__$1;
(statearr_57441_58531[(2)] = inst_57387);

(statearr_57441_58531[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (44))){
var inst_57396 = (state_57403[(2)]);
var state_57403__$1 = (function (){var statearr_57442 = state_57403;
(statearr_57442[(26)] = inst_57396);

return statearr_57442;
})();
var statearr_57443_58532 = state_57403__$1;
(statearr_57443_58532[(2)] = null);

(statearr_57443_58532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (6))){
var inst_57337 = (state_57403[(27)]);
var inst_57336 = cljs.core.deref(cs);
var inst_57337__$1 = cljs.core.keys(inst_57336);
var inst_57338 = cljs.core.count(inst_57337__$1);
var inst_57339 = cljs.core.reset_BANG_(dctr,inst_57338);
var inst_57344 = cljs.core.seq(inst_57337__$1);
var inst_57345 = inst_57344;
var inst_57346 = null;
var inst_57347 = (0);
var inst_57348 = (0);
var state_57403__$1 = (function (){var statearr_57444 = state_57403;
(statearr_57444[(9)] = inst_57348);

(statearr_57444[(27)] = inst_57337__$1);

(statearr_57444[(19)] = inst_57345);

(statearr_57444[(28)] = inst_57339);

(statearr_57444[(12)] = inst_57346);

(statearr_57444[(20)] = inst_57347);

return statearr_57444;
})();
var statearr_57445_58533 = state_57403__$1;
(statearr_57445_58533[(2)] = null);

(statearr_57445_58533[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (28))){
var inst_57345 = (state_57403[(19)]);
var inst_57363 = (state_57403[(23)]);
var inst_57363__$1 = cljs.core.seq(inst_57345);
var state_57403__$1 = (function (){var statearr_57446 = state_57403;
(statearr_57446[(23)] = inst_57363__$1);

return statearr_57446;
})();
if(inst_57363__$1){
var statearr_57447_58534 = state_57403__$1;
(statearr_57447_58534[(1)] = (33));

} else {
var statearr_57448_58535 = state_57403__$1;
(statearr_57448_58535[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (25))){
var inst_57348 = (state_57403[(9)]);
var inst_57347 = (state_57403[(20)]);
var inst_57350 = (inst_57348 < inst_57347);
var inst_57351 = inst_57350;
var state_57403__$1 = state_57403;
if(cljs.core.truth_(inst_57351)){
var statearr_57449_58536 = state_57403__$1;
(statearr_57449_58536[(1)] = (27));

} else {
var statearr_57450_58537 = state_57403__$1;
(statearr_57450_58537[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (34))){
var state_57403__$1 = state_57403;
var statearr_57451_58538 = state_57403__$1;
(statearr_57451_58538[(2)] = null);

(statearr_57451_58538[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (17))){
var state_57403__$1 = state_57403;
var statearr_57452_58539 = state_57403__$1;
(statearr_57452_58539[(2)] = null);

(statearr_57452_58539[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (3))){
var inst_57401 = (state_57403[(2)]);
var state_57403__$1 = state_57403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57403__$1,inst_57401);
} else {
if((state_val_57404 === (12))){
var inst_57332 = (state_57403[(2)]);
var state_57403__$1 = state_57403;
var statearr_57453_58540 = state_57403__$1;
(statearr_57453_58540[(2)] = inst_57332);

(statearr_57453_58540[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (2))){
var state_57403__$1 = state_57403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57403__$1,(4),ch);
} else {
if((state_val_57404 === (23))){
var state_57403__$1 = state_57403;
var statearr_57454_58541 = state_57403__$1;
(statearr_57454_58541[(2)] = null);

(statearr_57454_58541[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (35))){
var inst_57385 = (state_57403[(2)]);
var state_57403__$1 = state_57403;
var statearr_57455_58542 = state_57403__$1;
(statearr_57455_58542[(2)] = inst_57385);

(statearr_57455_58542[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (19))){
var inst_57304 = (state_57403[(7)]);
var inst_57308 = cljs.core.chunk_first(inst_57304);
var inst_57309 = cljs.core.chunk_rest(inst_57304);
var inst_57310 = cljs.core.count(inst_57308);
var inst_57282 = inst_57309;
var inst_57283 = inst_57308;
var inst_57284 = inst_57310;
var inst_57285 = (0);
var state_57403__$1 = (function (){var statearr_57456 = state_57403;
(statearr_57456[(13)] = inst_57284);

(statearr_57456[(14)] = inst_57282);

(statearr_57456[(15)] = inst_57285);

(statearr_57456[(16)] = inst_57283);

return statearr_57456;
})();
var statearr_57457_58543 = state_57403__$1;
(statearr_57457_58543[(2)] = null);

(statearr_57457_58543[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (11))){
var inst_57304 = (state_57403[(7)]);
var inst_57282 = (state_57403[(14)]);
var inst_57304__$1 = cljs.core.seq(inst_57282);
var state_57403__$1 = (function (){var statearr_57458 = state_57403;
(statearr_57458[(7)] = inst_57304__$1);

return statearr_57458;
})();
if(inst_57304__$1){
var statearr_57459_58544 = state_57403__$1;
(statearr_57459_58544[(1)] = (16));

} else {
var statearr_57460_58545 = state_57403__$1;
(statearr_57460_58545[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (9))){
var inst_57334 = (state_57403[(2)]);
var state_57403__$1 = state_57403;
var statearr_57461_58546 = state_57403__$1;
(statearr_57461_58546[(2)] = inst_57334);

(statearr_57461_58546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (5))){
var inst_57280 = cljs.core.deref(cs);
var inst_57281 = cljs.core.seq(inst_57280);
var inst_57282 = inst_57281;
var inst_57283 = null;
var inst_57284 = (0);
var inst_57285 = (0);
var state_57403__$1 = (function (){var statearr_57462 = state_57403;
(statearr_57462[(13)] = inst_57284);

(statearr_57462[(14)] = inst_57282);

(statearr_57462[(15)] = inst_57285);

(statearr_57462[(16)] = inst_57283);

return statearr_57462;
})();
var statearr_57463_58548 = state_57403__$1;
(statearr_57463_58548[(2)] = null);

(statearr_57463_58548[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (14))){
var state_57403__$1 = state_57403;
var statearr_57464_58550 = state_57403__$1;
(statearr_57464_58550[(2)] = null);

(statearr_57464_58550[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (45))){
var inst_57393 = (state_57403[(2)]);
var state_57403__$1 = state_57403;
var statearr_57465_58551 = state_57403__$1;
(statearr_57465_58551[(2)] = inst_57393);

(statearr_57465_58551[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (26))){
var inst_57337 = (state_57403[(27)]);
var inst_57389 = (state_57403[(2)]);
var inst_57390 = cljs.core.seq(inst_57337);
var state_57403__$1 = (function (){var statearr_57466 = state_57403;
(statearr_57466[(29)] = inst_57389);

return statearr_57466;
})();
if(inst_57390){
var statearr_57467_58555 = state_57403__$1;
(statearr_57467_58555[(1)] = (42));

} else {
var statearr_57468_58556 = state_57403__$1;
(statearr_57468_58556[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (16))){
var inst_57304 = (state_57403[(7)]);
var inst_57306 = cljs.core.chunked_seq_QMARK_(inst_57304);
var state_57403__$1 = state_57403;
if(inst_57306){
var statearr_57469_58557 = state_57403__$1;
(statearr_57469_58557[(1)] = (19));

} else {
var statearr_57470_58558 = state_57403__$1;
(statearr_57470_58558[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (38))){
var inst_57382 = (state_57403[(2)]);
var state_57403__$1 = state_57403;
var statearr_57471_58560 = state_57403__$1;
(statearr_57471_58560[(2)] = inst_57382);

(statearr_57471_58560[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (30))){
var state_57403__$1 = state_57403;
var statearr_57472_58561 = state_57403__$1;
(statearr_57472_58561[(2)] = null);

(statearr_57472_58561[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (10))){
var inst_57285 = (state_57403[(15)]);
var inst_57283 = (state_57403[(16)]);
var inst_57293 = cljs.core._nth(inst_57283,inst_57285);
var inst_57294 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57293,(0),null);
var inst_57295 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57293,(1),null);
var state_57403__$1 = (function (){var statearr_57473 = state_57403;
(statearr_57473[(24)] = inst_57294);

return statearr_57473;
})();
if(cljs.core.truth_(inst_57295)){
var statearr_57474_58562 = state_57403__$1;
(statearr_57474_58562[(1)] = (13));

} else {
var statearr_57475_58563 = state_57403__$1;
(statearr_57475_58563[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (18))){
var inst_57330 = (state_57403[(2)]);
var state_57403__$1 = state_57403;
var statearr_57476_58565 = state_57403__$1;
(statearr_57476_58565[(2)] = inst_57330);

(statearr_57476_58565[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (42))){
var state_57403__$1 = state_57403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57403__$1,(45),dchan);
} else {
if((state_val_57404 === (37))){
var inst_57273 = (state_57403[(10)]);
var inst_57372 = (state_57403[(22)]);
var inst_57363 = (state_57403[(23)]);
var inst_57372__$1 = cljs.core.first(inst_57363);
var inst_57373 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_57372__$1,inst_57273,done);
var state_57403__$1 = (function (){var statearr_57477 = state_57403;
(statearr_57477[(22)] = inst_57372__$1);

return statearr_57477;
})();
if(cljs.core.truth_(inst_57373)){
var statearr_57478_58567 = state_57403__$1;
(statearr_57478_58567[(1)] = (39));

} else {
var statearr_57479_58568 = state_57403__$1;
(statearr_57479_58568[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57404 === (8))){
var inst_57284 = (state_57403[(13)]);
var inst_57285 = (state_57403[(15)]);
var inst_57287 = (inst_57285 < inst_57284);
var inst_57288 = inst_57287;
var state_57403__$1 = state_57403;
if(cljs.core.truth_(inst_57288)){
var statearr_57480_58569 = state_57403__$1;
(statearr_57480_58569[(1)] = (10));

} else {
var statearr_57481_58570 = state_57403__$1;
(statearr_57481_58570[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__56662__auto__ = null;
var cljs$core$async$mult_$_state_machine__56662__auto____0 = (function (){
var statearr_57482 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57482[(0)] = cljs$core$async$mult_$_state_machine__56662__auto__);

(statearr_57482[(1)] = (1));

return statearr_57482;
});
var cljs$core$async$mult_$_state_machine__56662__auto____1 = (function (state_57403){
while(true){
var ret_value__56663__auto__ = (function (){try{while(true){
var result__56664__auto__ = switch__56661__auto__(state_57403);
if(cljs.core.keyword_identical_QMARK_(result__56664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56664__auto__;
}
break;
}
}catch (e57483){var ex__56665__auto__ = e57483;
var statearr_57484_58571 = state_57403;
(statearr_57484_58571[(2)] = ex__56665__auto__);


if(cljs.core.seq((state_57403[(4)]))){
var statearr_57485_58572 = state_57403;
(statearr_57485_58572[(1)] = cljs.core.first((state_57403[(4)])));

} else {
throw ex__56665__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58573 = state_57403;
state_57403 = G__58573;
continue;
} else {
return ret_value__56663__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__56662__auto__ = function(state_57403){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__56662__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__56662__auto____1.call(this,state_57403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__56662__auto____0;
cljs$core$async$mult_$_state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__56662__auto____1;
return cljs$core$async$mult_$_state_machine__56662__auto__;
})()
})();
var state__56791__auto__ = (function (){var statearr_57486 = f__56790__auto__();
(statearr_57486[(6)] = c__56789__auto___58504);

return statearr_57486;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56791__auto__);
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
var G__57488 = arguments.length;
switch (G__57488) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_58575 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_58575(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_58580 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_58580(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_58583 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_58583(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_58586 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_58586(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_58587 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_58587(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4824__auto__ = [];
var len__4818__auto___58595 = arguments.length;
var i__4819__auto___58596 = (0);
while(true){
if((i__4819__auto___58596 < len__4818__auto___58595)){
args__4824__auto__.push((arguments[i__4819__auto___58596]));

var G__58597 = (i__4819__auto___58596 + (1));
i__4819__auto___58596 = G__58597;
continue;
} else {
}
break;
}

var argseq__4825__auto__ = ((((3) < args__4824__auto__.length))?(new cljs.core.IndexedSeq(args__4824__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4825__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__57493){
var map__57494 = p__57493;
var map__57494__$1 = cljs.core.__destructure_map(map__57494);
var opts = map__57494__$1;
var statearr_57495_58604 = state;
(statearr_57495_58604[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_57496_58605 = state;
(statearr_57496_58605[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_57497_58606 = state;
(statearr_57497_58606[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq57489){
var G__57490 = cljs.core.first(seq57489);
var seq57489__$1 = cljs.core.next(seq57489);
var G__57491 = cljs.core.first(seq57489__$1);
var seq57489__$2 = cljs.core.next(seq57489__$1);
var G__57492 = cljs.core.first(seq57489__$2);
var seq57489__$3 = cljs.core.next(seq57489__$2);
var self__4805__auto__ = this;
return self__4805__auto__.cljs$core$IFn$_invoke$arity$variadic(G__57490,G__57491,G__57492,seq57489__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57498 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57498 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta57499){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta57499 = meta57499;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57500,meta57499__$1){
var self__ = this;
var _57500__$1 = this;
return (new cljs.core.async.t_cljs$core$async57498(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta57499__$1));
}));

(cljs.core.async.t_cljs$core$async57498.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57500){
var self__ = this;
var _57500__$1 = this;
return self__.meta57499;
}));

(cljs.core.async.t_cljs$core$async57498.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57498.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async57498.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57498.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57498.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57498.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57498.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57498.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async57498.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta57499","meta57499",996681176,null)], null);
}));

(cljs.core.async.t_cljs$core$async57498.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57498.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57498");

(cljs.core.async.t_cljs$core$async57498.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async57498");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57498.
 */
cljs.core.async.__GT_t_cljs$core$async57498 = (function cljs$core$async$mix_$___GT_t_cljs$core$async57498(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta57499){
return (new cljs.core.async.t_cljs$core$async57498(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta57499));
});

}

return (new cljs.core.async.t_cljs$core$async57498(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__56789__auto___58613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56790__auto__ = (function (){var switch__56661__auto__ = (function (state_57568){
var state_val_57569 = (state_57568[(1)]);
if((state_val_57569 === (7))){
var inst_57528 = (state_57568[(2)]);
var state_57568__$1 = state_57568;
if(cljs.core.truth_(inst_57528)){
var statearr_57570_58614 = state_57568__$1;
(statearr_57570_58614[(1)] = (8));

} else {
var statearr_57571_58615 = state_57568__$1;
(statearr_57571_58615[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57569 === (20))){
var inst_57521 = (state_57568[(7)]);
var state_57568__$1 = state_57568;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57568__$1,(23),out,inst_57521);
} else {
if((state_val_57569 === (1))){
var inst_57504 = calc_state();
var inst_57505 = cljs.core.__destructure_map(inst_57504);
var inst_57506 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57505,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_57507 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57505,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_57508 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57505,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_57509 = inst_57504;
var state_57568__$1 = (function (){var statearr_57572 = state_57568;
(statearr_57572[(8)] = inst_57506);

(statearr_57572[(9)] = inst_57509);

(statearr_57572[(10)] = inst_57507);

(statearr_57572[(11)] = inst_57508);

return statearr_57572;
})();
var statearr_57573_58616 = state_57568__$1;
(statearr_57573_58616[(2)] = null);

(statearr_57573_58616[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57569 === (24))){
var inst_57512 = (state_57568[(12)]);
var inst_57509 = inst_57512;
var state_57568__$1 = (function (){var statearr_57574 = state_57568;
(statearr_57574[(9)] = inst_57509);

return statearr_57574;
})();
var statearr_57575_58617 = state_57568__$1;
(statearr_57575_58617[(2)] = null);

(statearr_57575_58617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57569 === (4))){
var inst_57523 = (state_57568[(13)]);
var inst_57521 = (state_57568[(7)]);
var inst_57520 = (state_57568[(2)]);
var inst_57521__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57520,(0),null);
var inst_57522 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57520,(1),null);
var inst_57523__$1 = (inst_57521__$1 == null);
var state_57568__$1 = (function (){var statearr_57576 = state_57568;
(statearr_57576[(13)] = inst_57523__$1);

(statearr_57576[(14)] = inst_57522);

(statearr_57576[(7)] = inst_57521__$1);

return statearr_57576;
})();
if(cljs.core.truth_(inst_57523__$1)){
var statearr_57577_58618 = state_57568__$1;
(statearr_57577_58618[(1)] = (5));

} else {
var statearr_57578_58619 = state_57568__$1;
(statearr_57578_58619[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57569 === (15))){
var inst_57513 = (state_57568[(15)]);
var inst_57542 = (state_57568[(16)]);
var inst_57542__$1 = cljs.core.empty_QMARK_(inst_57513);
var state_57568__$1 = (function (){var statearr_57579 = state_57568;
(statearr_57579[(16)] = inst_57542__$1);

return statearr_57579;
})();
if(inst_57542__$1){
var statearr_57580_58620 = state_57568__$1;
(statearr_57580_58620[(1)] = (17));

} else {
var statearr_57581_58621 = state_57568__$1;
(statearr_57581_58621[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57569 === (21))){
var inst_57512 = (state_57568[(12)]);
var inst_57509 = inst_57512;
var state_57568__$1 = (function (){var statearr_57582 = state_57568;
(statearr_57582[(9)] = inst_57509);

return statearr_57582;
})();
var statearr_57583_58622 = state_57568__$1;
(statearr_57583_58622[(2)] = null);

(statearr_57583_58622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57569 === (13))){
var inst_57535 = (state_57568[(2)]);
var inst_57536 = calc_state();
var inst_57509 = inst_57536;
var state_57568__$1 = (function (){var statearr_57584 = state_57568;
(statearr_57584[(9)] = inst_57509);

(statearr_57584[(17)] = inst_57535);

return statearr_57584;
})();
var statearr_57585_58629 = state_57568__$1;
(statearr_57585_58629[(2)] = null);

(statearr_57585_58629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57569 === (22))){
var inst_57562 = (state_57568[(2)]);
var state_57568__$1 = state_57568;
var statearr_57586_58630 = state_57568__$1;
(statearr_57586_58630[(2)] = inst_57562);

(statearr_57586_58630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57569 === (6))){
var inst_57522 = (state_57568[(14)]);
var inst_57526 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_57522,change);
var state_57568__$1 = state_57568;
var statearr_57587_58631 = state_57568__$1;
(statearr_57587_58631[(2)] = inst_57526);

(statearr_57587_58631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57569 === (25))){
var state_57568__$1 = state_57568;
var statearr_57588_58632 = state_57568__$1;
(statearr_57588_58632[(2)] = null);

(statearr_57588_58632[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57569 === (17))){
var inst_57522 = (state_57568[(14)]);
var inst_57514 = (state_57568[(18)]);
var inst_57544 = (inst_57514.cljs$core$IFn$_invoke$arity$1 ? inst_57514.cljs$core$IFn$_invoke$arity$1(inst_57522) : inst_57514.call(null,inst_57522));
var inst_57545 = cljs.core.not(inst_57544);
var state_57568__$1 = state_57568;
var statearr_57589_58633 = state_57568__$1;
(statearr_57589_58633[(2)] = inst_57545);

(statearr_57589_58633[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57569 === (3))){
var inst_57566 = (state_57568[(2)]);
var state_57568__$1 = state_57568;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57568__$1,inst_57566);
} else {
if((state_val_57569 === (12))){
var state_57568__$1 = state_57568;
var statearr_57590_58634 = state_57568__$1;
(statearr_57590_58634[(2)] = null);

(statearr_57590_58634[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57569 === (2))){
var inst_57509 = (state_57568[(9)]);
var inst_57512 = (state_57568[(12)]);
var inst_57512__$1 = cljs.core.__destructure_map(inst_57509);
var inst_57513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57512__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_57514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57512__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_57515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57512__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_57568__$1 = (function (){var statearr_57591 = state_57568;
(statearr_57591[(15)] = inst_57513);

(statearr_57591[(18)] = inst_57514);

(statearr_57591[(12)] = inst_57512__$1);

return statearr_57591;
})();
return cljs.core.async.ioc_alts_BANG_(state_57568__$1,(4),inst_57515);
} else {
if((state_val_57569 === (23))){
var inst_57553 = (state_57568[(2)]);
var state_57568__$1 = state_57568;
if(cljs.core.truth_(inst_57553)){
var statearr_57592_58635 = state_57568__$1;
(statearr_57592_58635[(1)] = (24));

} else {
var statearr_57593_58636 = state_57568__$1;
(statearr_57593_58636[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57569 === (19))){
var inst_57548 = (state_57568[(2)]);
var state_57568__$1 = state_57568;
var statearr_57594_58637 = state_57568__$1;
(statearr_57594_58637[(2)] = inst_57548);

(statearr_57594_58637[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57569 === (11))){
var inst_57522 = (state_57568[(14)]);
var inst_57532 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_57522);
var state_57568__$1 = state_57568;
var statearr_57595_58638 = state_57568__$1;
(statearr_57595_58638[(2)] = inst_57532);

(statearr_57595_58638[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57569 === (9))){
var inst_57513 = (state_57568[(15)]);
var inst_57539 = (state_57568[(19)]);
var inst_57522 = (state_57568[(14)]);
var inst_57539__$1 = (inst_57513.cljs$core$IFn$_invoke$arity$1 ? inst_57513.cljs$core$IFn$_invoke$arity$1(inst_57522) : inst_57513.call(null,inst_57522));
var state_57568__$1 = (function (){var statearr_57596 = state_57568;
(statearr_57596[(19)] = inst_57539__$1);

return statearr_57596;
})();
if(cljs.core.truth_(inst_57539__$1)){
var statearr_57597_58639 = state_57568__$1;
(statearr_57597_58639[(1)] = (14));

} else {
var statearr_57598_58640 = state_57568__$1;
(statearr_57598_58640[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57569 === (5))){
var inst_57523 = (state_57568[(13)]);
var state_57568__$1 = state_57568;
var statearr_57599_58641 = state_57568__$1;
(statearr_57599_58641[(2)] = inst_57523);

(statearr_57599_58641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57569 === (14))){
var inst_57539 = (state_57568[(19)]);
var state_57568__$1 = state_57568;
var statearr_57600_58642 = state_57568__$1;
(statearr_57600_58642[(2)] = inst_57539);

(statearr_57600_58642[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57569 === (26))){
var inst_57558 = (state_57568[(2)]);
var state_57568__$1 = state_57568;
var statearr_57601_58643 = state_57568__$1;
(statearr_57601_58643[(2)] = inst_57558);

(statearr_57601_58643[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57569 === (16))){
var inst_57550 = (state_57568[(2)]);
var state_57568__$1 = state_57568;
if(cljs.core.truth_(inst_57550)){
var statearr_57602_58644 = state_57568__$1;
(statearr_57602_58644[(1)] = (20));

} else {
var statearr_57603_58645 = state_57568__$1;
(statearr_57603_58645[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57569 === (10))){
var inst_57564 = (state_57568[(2)]);
var state_57568__$1 = state_57568;
var statearr_57604_58646 = state_57568__$1;
(statearr_57604_58646[(2)] = inst_57564);

(statearr_57604_58646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57569 === (18))){
var inst_57542 = (state_57568[(16)]);
var state_57568__$1 = state_57568;
var statearr_57605_58647 = state_57568__$1;
(statearr_57605_58647[(2)] = inst_57542);

(statearr_57605_58647[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57569 === (8))){
var inst_57521 = (state_57568[(7)]);
var inst_57530 = (inst_57521 == null);
var state_57568__$1 = state_57568;
if(cljs.core.truth_(inst_57530)){
var statearr_57606_58648 = state_57568__$1;
(statearr_57606_58648[(1)] = (11));

} else {
var statearr_57607_58650 = state_57568__$1;
(statearr_57607_58650[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__56662__auto__ = null;
var cljs$core$async$mix_$_state_machine__56662__auto____0 = (function (){
var statearr_57608 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57608[(0)] = cljs$core$async$mix_$_state_machine__56662__auto__);

(statearr_57608[(1)] = (1));

return statearr_57608;
});
var cljs$core$async$mix_$_state_machine__56662__auto____1 = (function (state_57568){
while(true){
var ret_value__56663__auto__ = (function (){try{while(true){
var result__56664__auto__ = switch__56661__auto__(state_57568);
if(cljs.core.keyword_identical_QMARK_(result__56664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56664__auto__;
}
break;
}
}catch (e57609){var ex__56665__auto__ = e57609;
var statearr_57610_58656 = state_57568;
(statearr_57610_58656[(2)] = ex__56665__auto__);


if(cljs.core.seq((state_57568[(4)]))){
var statearr_57611_58657 = state_57568;
(statearr_57611_58657[(1)] = cljs.core.first((state_57568[(4)])));

} else {
throw ex__56665__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58658 = state_57568;
state_57568 = G__58658;
continue;
} else {
return ret_value__56663__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__56662__auto__ = function(state_57568){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__56662__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__56662__auto____1.call(this,state_57568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__56662__auto____0;
cljs$core$async$mix_$_state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__56662__auto____1;
return cljs$core$async$mix_$_state_machine__56662__auto__;
})()
})();
var state__56791__auto__ = (function (){var statearr_57612 = f__56790__auto__();
(statearr_57612[(6)] = c__56789__auto___58613);

return statearr_57612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56791__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_58659 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_58659(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_58660 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_58660(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_58661 = (function() {
var G__58662 = null;
var G__58662__1 = (function (p){
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
var G__58662__2 = (function (p,v){
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
G__58662 = function(p,v){
switch(arguments.length){
case 1:
return G__58662__1.call(this,p);
case 2:
return G__58662__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__58662.cljs$core$IFn$_invoke$arity$1 = G__58662__1;
G__58662.cljs$core$IFn$_invoke$arity$2 = G__58662__2;
return G__58662;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__57614 = arguments.length;
switch (G__57614) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_58661(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_58661(p,v);
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
var G__57617 = arguments.length;
switch (G__57617) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__57615_SHARP_){
if(cljs.core.truth_((p1__57615_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__57615_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__57615_SHARP_.call(null,topic)))){
return p1__57615_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__57615_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57618 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57618 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta57619){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta57619 = meta57619;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57620,meta57619__$1){
var self__ = this;
var _57620__$1 = this;
return (new cljs.core.async.t_cljs$core$async57618(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta57619__$1));
}));

(cljs.core.async.t_cljs$core$async57618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57620){
var self__ = this;
var _57620__$1 = this;
return self__.meta57619;
}));

(cljs.core.async.t_cljs$core$async57618.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57618.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async57618.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57618.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async57618.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async57618.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async57618.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async57618.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta57619","meta57619",-1249635966,null)], null);
}));

(cljs.core.async.t_cljs$core$async57618.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57618.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57618");

(cljs.core.async.t_cljs$core$async57618.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async57618");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57618.
 */
cljs.core.async.__GT_t_cljs$core$async57618 = (function cljs$core$async$__GT_t_cljs$core$async57618(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta57619){
return (new cljs.core.async.t_cljs$core$async57618(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta57619));
});

}

return (new cljs.core.async.t_cljs$core$async57618(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__56789__auto___58665 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56790__auto__ = (function (){var switch__56661__auto__ = (function (state_57692){
var state_val_57693 = (state_57692[(1)]);
if((state_val_57693 === (7))){
var inst_57688 = (state_57692[(2)]);
var state_57692__$1 = state_57692;
var statearr_57694_58667 = state_57692__$1;
(statearr_57694_58667[(2)] = inst_57688);

(statearr_57694_58667[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (20))){
var state_57692__$1 = state_57692;
var statearr_57695_58668 = state_57692__$1;
(statearr_57695_58668[(2)] = null);

(statearr_57695_58668[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (1))){
var state_57692__$1 = state_57692;
var statearr_57696_58669 = state_57692__$1;
(statearr_57696_58669[(2)] = null);

(statearr_57696_58669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (24))){
var inst_57671 = (state_57692[(7)]);
var inst_57680 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_57671);
var state_57692__$1 = state_57692;
var statearr_57697_58671 = state_57692__$1;
(statearr_57697_58671[(2)] = inst_57680);

(statearr_57697_58671[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (4))){
var inst_57623 = (state_57692[(8)]);
var inst_57623__$1 = (state_57692[(2)]);
var inst_57624 = (inst_57623__$1 == null);
var state_57692__$1 = (function (){var statearr_57698 = state_57692;
(statearr_57698[(8)] = inst_57623__$1);

return statearr_57698;
})();
if(cljs.core.truth_(inst_57624)){
var statearr_57699_58675 = state_57692__$1;
(statearr_57699_58675[(1)] = (5));

} else {
var statearr_57700_58676 = state_57692__$1;
(statearr_57700_58676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (15))){
var inst_57665 = (state_57692[(2)]);
var state_57692__$1 = state_57692;
var statearr_57701_58677 = state_57692__$1;
(statearr_57701_58677[(2)] = inst_57665);

(statearr_57701_58677[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (21))){
var inst_57685 = (state_57692[(2)]);
var state_57692__$1 = (function (){var statearr_57702 = state_57692;
(statearr_57702[(9)] = inst_57685);

return statearr_57702;
})();
var statearr_57703_58678 = state_57692__$1;
(statearr_57703_58678[(2)] = null);

(statearr_57703_58678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (13))){
var inst_57647 = (state_57692[(10)]);
var inst_57649 = cljs.core.chunked_seq_QMARK_(inst_57647);
var state_57692__$1 = state_57692;
if(inst_57649){
var statearr_57704_58679 = state_57692__$1;
(statearr_57704_58679[(1)] = (16));

} else {
var statearr_57705_58680 = state_57692__$1;
(statearr_57705_58680[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (22))){
var inst_57677 = (state_57692[(2)]);
var state_57692__$1 = state_57692;
if(cljs.core.truth_(inst_57677)){
var statearr_57706_58681 = state_57692__$1;
(statearr_57706_58681[(1)] = (23));

} else {
var statearr_57707_58682 = state_57692__$1;
(statearr_57707_58682[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (6))){
var inst_57673 = (state_57692[(11)]);
var inst_57671 = (state_57692[(7)]);
var inst_57623 = (state_57692[(8)]);
var inst_57671__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_57623) : topic_fn.call(null,inst_57623));
var inst_57672 = cljs.core.deref(mults);
var inst_57673__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_57672,inst_57671__$1);
var state_57692__$1 = (function (){var statearr_57708 = state_57692;
(statearr_57708[(11)] = inst_57673__$1);

(statearr_57708[(7)] = inst_57671__$1);

return statearr_57708;
})();
if(cljs.core.truth_(inst_57673__$1)){
var statearr_57709_58683 = state_57692__$1;
(statearr_57709_58683[(1)] = (19));

} else {
var statearr_57710_58684 = state_57692__$1;
(statearr_57710_58684[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (25))){
var inst_57682 = (state_57692[(2)]);
var state_57692__$1 = state_57692;
var statearr_57711_58685 = state_57692__$1;
(statearr_57711_58685[(2)] = inst_57682);

(statearr_57711_58685[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (17))){
var inst_57647 = (state_57692[(10)]);
var inst_57656 = cljs.core.first(inst_57647);
var inst_57657 = cljs.core.async.muxch_STAR_(inst_57656);
var inst_57658 = cljs.core.async.close_BANG_(inst_57657);
var inst_57659 = cljs.core.next(inst_57647);
var inst_57633 = inst_57659;
var inst_57634 = null;
var inst_57635 = (0);
var inst_57636 = (0);
var state_57692__$1 = (function (){var statearr_57712 = state_57692;
(statearr_57712[(12)] = inst_57633);

(statearr_57712[(13)] = inst_57634);

(statearr_57712[(14)] = inst_57635);

(statearr_57712[(15)] = inst_57636);

(statearr_57712[(16)] = inst_57658);

return statearr_57712;
})();
var statearr_57713_58686 = state_57692__$1;
(statearr_57713_58686[(2)] = null);

(statearr_57713_58686[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (3))){
var inst_57690 = (state_57692[(2)]);
var state_57692__$1 = state_57692;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57692__$1,inst_57690);
} else {
if((state_val_57693 === (12))){
var inst_57667 = (state_57692[(2)]);
var state_57692__$1 = state_57692;
var statearr_57714_58687 = state_57692__$1;
(statearr_57714_58687[(2)] = inst_57667);

(statearr_57714_58687[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (2))){
var state_57692__$1 = state_57692;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57692__$1,(4),ch);
} else {
if((state_val_57693 === (23))){
var state_57692__$1 = state_57692;
var statearr_57715_58688 = state_57692__$1;
(statearr_57715_58688[(2)] = null);

(statearr_57715_58688[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (19))){
var inst_57673 = (state_57692[(11)]);
var inst_57623 = (state_57692[(8)]);
var inst_57675 = cljs.core.async.muxch_STAR_(inst_57673);
var state_57692__$1 = state_57692;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57692__$1,(22),inst_57675,inst_57623);
} else {
if((state_val_57693 === (11))){
var inst_57633 = (state_57692[(12)]);
var inst_57647 = (state_57692[(10)]);
var inst_57647__$1 = cljs.core.seq(inst_57633);
var state_57692__$1 = (function (){var statearr_57716 = state_57692;
(statearr_57716[(10)] = inst_57647__$1);

return statearr_57716;
})();
if(inst_57647__$1){
var statearr_57717_58689 = state_57692__$1;
(statearr_57717_58689[(1)] = (13));

} else {
var statearr_57718_58690 = state_57692__$1;
(statearr_57718_58690[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (9))){
var inst_57669 = (state_57692[(2)]);
var state_57692__$1 = state_57692;
var statearr_57719_58691 = state_57692__$1;
(statearr_57719_58691[(2)] = inst_57669);

(statearr_57719_58691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (5))){
var inst_57630 = cljs.core.deref(mults);
var inst_57631 = cljs.core.vals(inst_57630);
var inst_57632 = cljs.core.seq(inst_57631);
var inst_57633 = inst_57632;
var inst_57634 = null;
var inst_57635 = (0);
var inst_57636 = (0);
var state_57692__$1 = (function (){var statearr_57720 = state_57692;
(statearr_57720[(12)] = inst_57633);

(statearr_57720[(13)] = inst_57634);

(statearr_57720[(14)] = inst_57635);

(statearr_57720[(15)] = inst_57636);

return statearr_57720;
})();
var statearr_57721_58693 = state_57692__$1;
(statearr_57721_58693[(2)] = null);

(statearr_57721_58693[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (14))){
var state_57692__$1 = state_57692;
var statearr_57725_58695 = state_57692__$1;
(statearr_57725_58695[(2)] = null);

(statearr_57725_58695[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (16))){
var inst_57647 = (state_57692[(10)]);
var inst_57651 = cljs.core.chunk_first(inst_57647);
var inst_57652 = cljs.core.chunk_rest(inst_57647);
var inst_57653 = cljs.core.count(inst_57651);
var inst_57633 = inst_57652;
var inst_57634 = inst_57651;
var inst_57635 = inst_57653;
var inst_57636 = (0);
var state_57692__$1 = (function (){var statearr_57726 = state_57692;
(statearr_57726[(12)] = inst_57633);

(statearr_57726[(13)] = inst_57634);

(statearr_57726[(14)] = inst_57635);

(statearr_57726[(15)] = inst_57636);

return statearr_57726;
})();
var statearr_57727_58696 = state_57692__$1;
(statearr_57727_58696[(2)] = null);

(statearr_57727_58696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (10))){
var inst_57633 = (state_57692[(12)]);
var inst_57634 = (state_57692[(13)]);
var inst_57635 = (state_57692[(14)]);
var inst_57636 = (state_57692[(15)]);
var inst_57641 = cljs.core._nth(inst_57634,inst_57636);
var inst_57642 = cljs.core.async.muxch_STAR_(inst_57641);
var inst_57643 = cljs.core.async.close_BANG_(inst_57642);
var inst_57644 = (inst_57636 + (1));
var tmp57722 = inst_57633;
var tmp57723 = inst_57634;
var tmp57724 = inst_57635;
var inst_57633__$1 = tmp57722;
var inst_57634__$1 = tmp57723;
var inst_57635__$1 = tmp57724;
var inst_57636__$1 = inst_57644;
var state_57692__$1 = (function (){var statearr_57728 = state_57692;
(statearr_57728[(12)] = inst_57633__$1);

(statearr_57728[(13)] = inst_57634__$1);

(statearr_57728[(14)] = inst_57635__$1);

(statearr_57728[(17)] = inst_57643);

(statearr_57728[(15)] = inst_57636__$1);

return statearr_57728;
})();
var statearr_57729_58697 = state_57692__$1;
(statearr_57729_58697[(2)] = null);

(statearr_57729_58697[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (18))){
var inst_57662 = (state_57692[(2)]);
var state_57692__$1 = state_57692;
var statearr_57730_58698 = state_57692__$1;
(statearr_57730_58698[(2)] = inst_57662);

(statearr_57730_58698[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57693 === (8))){
var inst_57635 = (state_57692[(14)]);
var inst_57636 = (state_57692[(15)]);
var inst_57638 = (inst_57636 < inst_57635);
var inst_57639 = inst_57638;
var state_57692__$1 = state_57692;
if(cljs.core.truth_(inst_57639)){
var statearr_57731_58699 = state_57692__$1;
(statearr_57731_58699[(1)] = (10));

} else {
var statearr_57732_58701 = state_57692__$1;
(statearr_57732_58701[(1)] = (11));

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
var cljs$core$async$state_machine__56662__auto__ = null;
var cljs$core$async$state_machine__56662__auto____0 = (function (){
var statearr_57733 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57733[(0)] = cljs$core$async$state_machine__56662__auto__);

(statearr_57733[(1)] = (1));

return statearr_57733;
});
var cljs$core$async$state_machine__56662__auto____1 = (function (state_57692){
while(true){
var ret_value__56663__auto__ = (function (){try{while(true){
var result__56664__auto__ = switch__56661__auto__(state_57692);
if(cljs.core.keyword_identical_QMARK_(result__56664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56664__auto__;
}
break;
}
}catch (e57734){var ex__56665__auto__ = e57734;
var statearr_57735_58703 = state_57692;
(statearr_57735_58703[(2)] = ex__56665__auto__);


if(cljs.core.seq((state_57692[(4)]))){
var statearr_57736_58704 = state_57692;
(statearr_57736_58704[(1)] = cljs.core.first((state_57692[(4)])));

} else {
throw ex__56665__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58705 = state_57692;
state_57692 = G__58705;
continue;
} else {
return ret_value__56663__auto__;
}
break;
}
});
cljs$core$async$state_machine__56662__auto__ = function(state_57692){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56662__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56662__auto____1.call(this,state_57692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56662__auto____0;
cljs$core$async$state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56662__auto____1;
return cljs$core$async$state_machine__56662__auto__;
})()
})();
var state__56791__auto__ = (function (){var statearr_57737 = f__56790__auto__();
(statearr_57737[(6)] = c__56789__auto___58665);

return statearr_57737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56791__auto__);
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
var G__57739 = arguments.length;
switch (G__57739) {
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
var G__57741 = arguments.length;
switch (G__57741) {
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
var G__57743 = arguments.length;
switch (G__57743) {
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
var c__56789__auto___58709 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56790__auto__ = (function (){var switch__56661__auto__ = (function (state_57786){
var state_val_57787 = (state_57786[(1)]);
if((state_val_57787 === (7))){
var state_57786__$1 = state_57786;
var statearr_57788_58710 = state_57786__$1;
(statearr_57788_58710[(2)] = null);

(statearr_57788_58710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57787 === (1))){
var state_57786__$1 = state_57786;
var statearr_57789_58711 = state_57786__$1;
(statearr_57789_58711[(2)] = null);

(statearr_57789_58711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57787 === (4))){
var inst_57746 = (state_57786[(7)]);
var inst_57747 = (state_57786[(8)]);
var inst_57749 = (inst_57747 < inst_57746);
var state_57786__$1 = state_57786;
if(cljs.core.truth_(inst_57749)){
var statearr_57790_58712 = state_57786__$1;
(statearr_57790_58712[(1)] = (6));

} else {
var statearr_57791_58713 = state_57786__$1;
(statearr_57791_58713[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57787 === (15))){
var inst_57772 = (state_57786[(9)]);
var inst_57777 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_57772);
var state_57786__$1 = state_57786;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57786__$1,(17),out,inst_57777);
} else {
if((state_val_57787 === (13))){
var inst_57772 = (state_57786[(9)]);
var inst_57772__$1 = (state_57786[(2)]);
var inst_57773 = cljs.core.some(cljs.core.nil_QMARK_,inst_57772__$1);
var state_57786__$1 = (function (){var statearr_57792 = state_57786;
(statearr_57792[(9)] = inst_57772__$1);

return statearr_57792;
})();
if(cljs.core.truth_(inst_57773)){
var statearr_57793_58715 = state_57786__$1;
(statearr_57793_58715[(1)] = (14));

} else {
var statearr_57794_58716 = state_57786__$1;
(statearr_57794_58716[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57787 === (6))){
var state_57786__$1 = state_57786;
var statearr_57795_58717 = state_57786__$1;
(statearr_57795_58717[(2)] = null);

(statearr_57795_58717[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57787 === (17))){
var inst_57779 = (state_57786[(2)]);
var state_57786__$1 = (function (){var statearr_57797 = state_57786;
(statearr_57797[(10)] = inst_57779);

return statearr_57797;
})();
var statearr_57798_58719 = state_57786__$1;
(statearr_57798_58719[(2)] = null);

(statearr_57798_58719[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57787 === (3))){
var inst_57784 = (state_57786[(2)]);
var state_57786__$1 = state_57786;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57786__$1,inst_57784);
} else {
if((state_val_57787 === (12))){
var _ = (function (){var statearr_57799 = state_57786;
(statearr_57799[(4)] = cljs.core.rest((state_57786[(4)])));

return statearr_57799;
})();
var state_57786__$1 = state_57786;
var ex57796 = (state_57786__$1[(2)]);
var statearr_57800_58720 = state_57786__$1;
(statearr_57800_58720[(5)] = ex57796);


if((ex57796 instanceof Object)){
var statearr_57801_58721 = state_57786__$1;
(statearr_57801_58721[(1)] = (11));

(statearr_57801_58721[(5)] = null);

} else {
throw ex57796;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57787 === (2))){
var inst_57745 = cljs.core.reset_BANG_(dctr,cnt);
var inst_57746 = cnt;
var inst_57747 = (0);
var state_57786__$1 = (function (){var statearr_57802 = state_57786;
(statearr_57802[(7)] = inst_57746);

(statearr_57802[(8)] = inst_57747);

(statearr_57802[(11)] = inst_57745);

return statearr_57802;
})();
var statearr_57803_58722 = state_57786__$1;
(statearr_57803_58722[(2)] = null);

(statearr_57803_58722[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57787 === (11))){
var inst_57751 = (state_57786[(2)]);
var inst_57752 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_57786__$1 = (function (){var statearr_57804 = state_57786;
(statearr_57804[(12)] = inst_57751);

return statearr_57804;
})();
var statearr_57805_58723 = state_57786__$1;
(statearr_57805_58723[(2)] = inst_57752);

(statearr_57805_58723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57787 === (9))){
var inst_57747 = (state_57786[(8)]);
var _ = (function (){var statearr_57806 = state_57786;
(statearr_57806[(4)] = cljs.core.cons((12),(state_57786[(4)])));

return statearr_57806;
})();
var inst_57758 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_57747) : chs__$1.call(null,inst_57747));
var inst_57759 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_57747) : done.call(null,inst_57747));
var inst_57760 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_57758,inst_57759);
var ___$1 = (function (){var statearr_57807 = state_57786;
(statearr_57807[(4)] = cljs.core.rest((state_57786[(4)])));

return statearr_57807;
})();
var state_57786__$1 = state_57786;
var statearr_57808_58724 = state_57786__$1;
(statearr_57808_58724[(2)] = inst_57760);

(statearr_57808_58724[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57787 === (5))){
var inst_57770 = (state_57786[(2)]);
var state_57786__$1 = (function (){var statearr_57809 = state_57786;
(statearr_57809[(13)] = inst_57770);

return statearr_57809;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57786__$1,(13),dchan);
} else {
if((state_val_57787 === (14))){
var inst_57775 = cljs.core.async.close_BANG_(out);
var state_57786__$1 = state_57786;
var statearr_57810_58725 = state_57786__$1;
(statearr_57810_58725[(2)] = inst_57775);

(statearr_57810_58725[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57787 === (16))){
var inst_57782 = (state_57786[(2)]);
var state_57786__$1 = state_57786;
var statearr_57811_58726 = state_57786__$1;
(statearr_57811_58726[(2)] = inst_57782);

(statearr_57811_58726[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57787 === (10))){
var inst_57747 = (state_57786[(8)]);
var inst_57763 = (state_57786[(2)]);
var inst_57764 = (inst_57747 + (1));
var inst_57747__$1 = inst_57764;
var state_57786__$1 = (function (){var statearr_57812 = state_57786;
(statearr_57812[(14)] = inst_57763);

(statearr_57812[(8)] = inst_57747__$1);

return statearr_57812;
})();
var statearr_57813_58727 = state_57786__$1;
(statearr_57813_58727[(2)] = null);

(statearr_57813_58727[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57787 === (8))){
var inst_57768 = (state_57786[(2)]);
var state_57786__$1 = state_57786;
var statearr_57814_58728 = state_57786__$1;
(statearr_57814_58728[(2)] = inst_57768);

(statearr_57814_58728[(1)] = (5));


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
var cljs$core$async$state_machine__56662__auto__ = null;
var cljs$core$async$state_machine__56662__auto____0 = (function (){
var statearr_57815 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57815[(0)] = cljs$core$async$state_machine__56662__auto__);

(statearr_57815[(1)] = (1));

return statearr_57815;
});
var cljs$core$async$state_machine__56662__auto____1 = (function (state_57786){
while(true){
var ret_value__56663__auto__ = (function (){try{while(true){
var result__56664__auto__ = switch__56661__auto__(state_57786);
if(cljs.core.keyword_identical_QMARK_(result__56664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56664__auto__;
}
break;
}
}catch (e57816){var ex__56665__auto__ = e57816;
var statearr_57817_58729 = state_57786;
(statearr_57817_58729[(2)] = ex__56665__auto__);


if(cljs.core.seq((state_57786[(4)]))){
var statearr_57818_58730 = state_57786;
(statearr_57818_58730[(1)] = cljs.core.first((state_57786[(4)])));

} else {
throw ex__56665__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58731 = state_57786;
state_57786 = G__58731;
continue;
} else {
return ret_value__56663__auto__;
}
break;
}
});
cljs$core$async$state_machine__56662__auto__ = function(state_57786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56662__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56662__auto____1.call(this,state_57786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56662__auto____0;
cljs$core$async$state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56662__auto____1;
return cljs$core$async$state_machine__56662__auto__;
})()
})();
var state__56791__auto__ = (function (){var statearr_57819 = f__56790__auto__();
(statearr_57819[(6)] = c__56789__auto___58709);

return statearr_57819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56791__auto__);
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
var G__57822 = arguments.length;
switch (G__57822) {
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
var c__56789__auto___58733 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56790__auto__ = (function (){var switch__56661__auto__ = (function (state_57854){
var state_val_57855 = (state_57854[(1)]);
if((state_val_57855 === (7))){
var inst_57833 = (state_57854[(7)]);
var inst_57834 = (state_57854[(8)]);
var inst_57833__$1 = (state_57854[(2)]);
var inst_57834__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57833__$1,(0),null);
var inst_57835 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_57833__$1,(1),null);
var inst_57836 = (inst_57834__$1 == null);
var state_57854__$1 = (function (){var statearr_57856 = state_57854;
(statearr_57856[(9)] = inst_57835);

(statearr_57856[(7)] = inst_57833__$1);

(statearr_57856[(8)] = inst_57834__$1);

return statearr_57856;
})();
if(cljs.core.truth_(inst_57836)){
var statearr_57857_58734 = state_57854__$1;
(statearr_57857_58734[(1)] = (8));

} else {
var statearr_57858_58735 = state_57854__$1;
(statearr_57858_58735[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57855 === (1))){
var inst_57823 = cljs.core.vec(chs);
var inst_57824 = inst_57823;
var state_57854__$1 = (function (){var statearr_57859 = state_57854;
(statearr_57859[(10)] = inst_57824);

return statearr_57859;
})();
var statearr_57860_58736 = state_57854__$1;
(statearr_57860_58736[(2)] = null);

(statearr_57860_58736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57855 === (4))){
var inst_57824 = (state_57854[(10)]);
var state_57854__$1 = state_57854;
return cljs.core.async.ioc_alts_BANG_(state_57854__$1,(7),inst_57824);
} else {
if((state_val_57855 === (6))){
var inst_57850 = (state_57854[(2)]);
var state_57854__$1 = state_57854;
var statearr_57861_58737 = state_57854__$1;
(statearr_57861_58737[(2)] = inst_57850);

(statearr_57861_58737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57855 === (3))){
var inst_57852 = (state_57854[(2)]);
var state_57854__$1 = state_57854;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57854__$1,inst_57852);
} else {
if((state_val_57855 === (2))){
var inst_57824 = (state_57854[(10)]);
var inst_57826 = cljs.core.count(inst_57824);
var inst_57827 = (inst_57826 > (0));
var state_57854__$1 = state_57854;
if(cljs.core.truth_(inst_57827)){
var statearr_57863_58739 = state_57854__$1;
(statearr_57863_58739[(1)] = (4));

} else {
var statearr_57864_58740 = state_57854__$1;
(statearr_57864_58740[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57855 === (11))){
var inst_57824 = (state_57854[(10)]);
var inst_57843 = (state_57854[(2)]);
var tmp57862 = inst_57824;
var inst_57824__$1 = tmp57862;
var state_57854__$1 = (function (){var statearr_57865 = state_57854;
(statearr_57865[(11)] = inst_57843);

(statearr_57865[(10)] = inst_57824__$1);

return statearr_57865;
})();
var statearr_57866_58741 = state_57854__$1;
(statearr_57866_58741[(2)] = null);

(statearr_57866_58741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57855 === (9))){
var inst_57834 = (state_57854[(8)]);
var state_57854__$1 = state_57854;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57854__$1,(11),out,inst_57834);
} else {
if((state_val_57855 === (5))){
var inst_57848 = cljs.core.async.close_BANG_(out);
var state_57854__$1 = state_57854;
var statearr_57867_58742 = state_57854__$1;
(statearr_57867_58742[(2)] = inst_57848);

(statearr_57867_58742[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57855 === (10))){
var inst_57846 = (state_57854[(2)]);
var state_57854__$1 = state_57854;
var statearr_57868_58743 = state_57854__$1;
(statearr_57868_58743[(2)] = inst_57846);

(statearr_57868_58743[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57855 === (8))){
var inst_57835 = (state_57854[(9)]);
var inst_57833 = (state_57854[(7)]);
var inst_57834 = (state_57854[(8)]);
var inst_57824 = (state_57854[(10)]);
var inst_57838 = (function (){var cs = inst_57824;
var vec__57829 = inst_57833;
var v = inst_57834;
var c = inst_57835;
return (function (p1__57820_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__57820_SHARP_);
});
})();
var inst_57839 = cljs.core.filterv(inst_57838,inst_57824);
var inst_57824__$1 = inst_57839;
var state_57854__$1 = (function (){var statearr_57869 = state_57854;
(statearr_57869[(10)] = inst_57824__$1);

return statearr_57869;
})();
var statearr_57870_58748 = state_57854__$1;
(statearr_57870_58748[(2)] = null);

(statearr_57870_58748[(1)] = (2));


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
var cljs$core$async$state_machine__56662__auto__ = null;
var cljs$core$async$state_machine__56662__auto____0 = (function (){
var statearr_57871 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57871[(0)] = cljs$core$async$state_machine__56662__auto__);

(statearr_57871[(1)] = (1));

return statearr_57871;
});
var cljs$core$async$state_machine__56662__auto____1 = (function (state_57854){
while(true){
var ret_value__56663__auto__ = (function (){try{while(true){
var result__56664__auto__ = switch__56661__auto__(state_57854);
if(cljs.core.keyword_identical_QMARK_(result__56664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56664__auto__;
}
break;
}
}catch (e57872){var ex__56665__auto__ = e57872;
var statearr_57873_58749 = state_57854;
(statearr_57873_58749[(2)] = ex__56665__auto__);


if(cljs.core.seq((state_57854[(4)]))){
var statearr_57874_58750 = state_57854;
(statearr_57874_58750[(1)] = cljs.core.first((state_57854[(4)])));

} else {
throw ex__56665__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58751 = state_57854;
state_57854 = G__58751;
continue;
} else {
return ret_value__56663__auto__;
}
break;
}
});
cljs$core$async$state_machine__56662__auto__ = function(state_57854){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56662__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56662__auto____1.call(this,state_57854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56662__auto____0;
cljs$core$async$state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56662__auto____1;
return cljs$core$async$state_machine__56662__auto__;
})()
})();
var state__56791__auto__ = (function (){var statearr_57875 = f__56790__auto__();
(statearr_57875[(6)] = c__56789__auto___58733);

return statearr_57875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56791__auto__);
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
var G__57877 = arguments.length;
switch (G__57877) {
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
var c__56789__auto___58753 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56790__auto__ = (function (){var switch__56661__auto__ = (function (state_57901){
var state_val_57902 = (state_57901[(1)]);
if((state_val_57902 === (7))){
var inst_57883 = (state_57901[(7)]);
var inst_57883__$1 = (state_57901[(2)]);
var inst_57884 = (inst_57883__$1 == null);
var inst_57885 = cljs.core.not(inst_57884);
var state_57901__$1 = (function (){var statearr_57903 = state_57901;
(statearr_57903[(7)] = inst_57883__$1);

return statearr_57903;
})();
if(inst_57885){
var statearr_57904_58754 = state_57901__$1;
(statearr_57904_58754[(1)] = (8));

} else {
var statearr_57905_58755 = state_57901__$1;
(statearr_57905_58755[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57902 === (1))){
var inst_57878 = (0);
var state_57901__$1 = (function (){var statearr_57906 = state_57901;
(statearr_57906[(8)] = inst_57878);

return statearr_57906;
})();
var statearr_57907_58756 = state_57901__$1;
(statearr_57907_58756[(2)] = null);

(statearr_57907_58756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57902 === (4))){
var state_57901__$1 = state_57901;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57901__$1,(7),ch);
} else {
if((state_val_57902 === (6))){
var inst_57896 = (state_57901[(2)]);
var state_57901__$1 = state_57901;
var statearr_57908_58757 = state_57901__$1;
(statearr_57908_58757[(2)] = inst_57896);

(statearr_57908_58757[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57902 === (3))){
var inst_57898 = (state_57901[(2)]);
var inst_57899 = cljs.core.async.close_BANG_(out);
var state_57901__$1 = (function (){var statearr_57909 = state_57901;
(statearr_57909[(9)] = inst_57898);

return statearr_57909;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_57901__$1,inst_57899);
} else {
if((state_val_57902 === (2))){
var inst_57878 = (state_57901[(8)]);
var inst_57880 = (inst_57878 < n);
var state_57901__$1 = state_57901;
if(cljs.core.truth_(inst_57880)){
var statearr_57910_58758 = state_57901__$1;
(statearr_57910_58758[(1)] = (4));

} else {
var statearr_57911_58759 = state_57901__$1;
(statearr_57911_58759[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57902 === (11))){
var inst_57878 = (state_57901[(8)]);
var inst_57888 = (state_57901[(2)]);
var inst_57889 = (inst_57878 + (1));
var inst_57878__$1 = inst_57889;
var state_57901__$1 = (function (){var statearr_57912 = state_57901;
(statearr_57912[(10)] = inst_57888);

(statearr_57912[(8)] = inst_57878__$1);

return statearr_57912;
})();
var statearr_57913_58760 = state_57901__$1;
(statearr_57913_58760[(2)] = null);

(statearr_57913_58760[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57902 === (9))){
var state_57901__$1 = state_57901;
var statearr_57914_58761 = state_57901__$1;
(statearr_57914_58761[(2)] = null);

(statearr_57914_58761[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57902 === (5))){
var state_57901__$1 = state_57901;
var statearr_57915_58762 = state_57901__$1;
(statearr_57915_58762[(2)] = null);

(statearr_57915_58762[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57902 === (10))){
var inst_57893 = (state_57901[(2)]);
var state_57901__$1 = state_57901;
var statearr_57916_58767 = state_57901__$1;
(statearr_57916_58767[(2)] = inst_57893);

(statearr_57916_58767[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57902 === (8))){
var inst_57883 = (state_57901[(7)]);
var state_57901__$1 = state_57901;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57901__$1,(11),out,inst_57883);
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
var cljs$core$async$state_machine__56662__auto__ = null;
var cljs$core$async$state_machine__56662__auto____0 = (function (){
var statearr_57917 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_57917[(0)] = cljs$core$async$state_machine__56662__auto__);

(statearr_57917[(1)] = (1));

return statearr_57917;
});
var cljs$core$async$state_machine__56662__auto____1 = (function (state_57901){
while(true){
var ret_value__56663__auto__ = (function (){try{while(true){
var result__56664__auto__ = switch__56661__auto__(state_57901);
if(cljs.core.keyword_identical_QMARK_(result__56664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56664__auto__;
}
break;
}
}catch (e57918){var ex__56665__auto__ = e57918;
var statearr_57919_58771 = state_57901;
(statearr_57919_58771[(2)] = ex__56665__auto__);


if(cljs.core.seq((state_57901[(4)]))){
var statearr_57920_58772 = state_57901;
(statearr_57920_58772[(1)] = cljs.core.first((state_57901[(4)])));

} else {
throw ex__56665__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58773 = state_57901;
state_57901 = G__58773;
continue;
} else {
return ret_value__56663__auto__;
}
break;
}
});
cljs$core$async$state_machine__56662__auto__ = function(state_57901){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56662__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56662__auto____1.call(this,state_57901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56662__auto____0;
cljs$core$async$state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56662__auto____1;
return cljs$core$async$state_machine__56662__auto__;
})()
})();
var state__56791__auto__ = (function (){var statearr_57921 = f__56790__auto__();
(statearr_57921[(6)] = c__56789__auto___58753);

return statearr_57921;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56791__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57923 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57923 = (function (f,ch,meta57924){
this.f = f;
this.ch = ch;
this.meta57924 = meta57924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57925,meta57924__$1){
var self__ = this;
var _57925__$1 = this;
return (new cljs.core.async.t_cljs$core$async57923(self__.f,self__.ch,meta57924__$1));
}));

(cljs.core.async.t_cljs$core$async57923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57925){
var self__ = this;
var _57925__$1 = this;
return self__.meta57924;
}));

(cljs.core.async.t_cljs$core$async57923.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57923.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57923.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57923.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57923.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57926 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57926 = (function (f,ch,meta57924,_,fn1,meta57927){
this.f = f;
this.ch = ch;
this.meta57924 = meta57924;
this._ = _;
this.fn1 = fn1;
this.meta57927 = meta57927;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57928,meta57927__$1){
var self__ = this;
var _57928__$1 = this;
return (new cljs.core.async.t_cljs$core$async57926(self__.f,self__.ch,self__.meta57924,self__._,self__.fn1,meta57927__$1));
}));

(cljs.core.async.t_cljs$core$async57926.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57928){
var self__ = this;
var _57928__$1 = this;
return self__.meta57927;
}));

(cljs.core.async.t_cljs$core$async57926.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57926.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async57926.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async57926.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__57922_SHARP_){
var G__57929 = (((p1__57922_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__57922_SHARP_) : self__.f.call(null,p1__57922_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__57929) : f1.call(null,G__57929));
});
}));

(cljs.core.async.t_cljs$core$async57926.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57924","meta57924",-536288535,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async57923","cljs.core.async/t_cljs$core$async57923",-1661179376,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta57927","meta57927",-1980005502,null)], null);
}));

(cljs.core.async.t_cljs$core$async57926.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57926.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57926");

(cljs.core.async.t_cljs$core$async57926.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async57926");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57926.
 */
cljs.core.async.__GT_t_cljs$core$async57926 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async57926(f__$1,ch__$1,meta57924__$1,___$2,fn1__$1,meta57927){
return (new cljs.core.async.t_cljs$core$async57926(f__$1,ch__$1,meta57924__$1,___$2,fn1__$1,meta57927));
});

}

return (new cljs.core.async.t_cljs$core$async57926(self__.f,self__.ch,self__.meta57924,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4210__auto__ = ret;
if(cljs.core.truth_(and__4210__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4210__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__57930 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__57930) : self__.f.call(null,G__57930));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async57923.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57923.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async57923.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57924","meta57924",-536288535,null)], null);
}));

(cljs.core.async.t_cljs$core$async57923.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57923");

(cljs.core.async.t_cljs$core$async57923.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async57923");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57923.
 */
cljs.core.async.__GT_t_cljs$core$async57923 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async57923(f__$1,ch__$1,meta57924){
return (new cljs.core.async.t_cljs$core$async57923(f__$1,ch__$1,meta57924));
});

}

return (new cljs.core.async.t_cljs$core$async57923(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57931 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57931 = (function (f,ch,meta57932){
this.f = f;
this.ch = ch;
this.meta57932 = meta57932;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57931.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57933,meta57932__$1){
var self__ = this;
var _57933__$1 = this;
return (new cljs.core.async.t_cljs$core$async57931(self__.f,self__.ch,meta57932__$1));
}));

(cljs.core.async.t_cljs$core$async57931.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57933){
var self__ = this;
var _57933__$1 = this;
return self__.meta57932;
}));

(cljs.core.async.t_cljs$core$async57931.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57931.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57931.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57931.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async57931.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57931.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async57931.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57932","meta57932",149247312,null)], null);
}));

(cljs.core.async.t_cljs$core$async57931.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57931.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57931");

(cljs.core.async.t_cljs$core$async57931.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async57931");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57931.
 */
cljs.core.async.__GT_t_cljs$core$async57931 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async57931(f__$1,ch__$1,meta57932){
return (new cljs.core.async.t_cljs$core$async57931(f__$1,ch__$1,meta57932));
});

}

return (new cljs.core.async.t_cljs$core$async57931(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async57934 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async57934 = (function (p,ch,meta57935){
this.p = p;
this.ch = ch;
this.meta57935 = meta57935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async57934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_57936,meta57935__$1){
var self__ = this;
var _57936__$1 = this;
return (new cljs.core.async.t_cljs$core$async57934(self__.p,self__.ch,meta57935__$1));
}));

(cljs.core.async.t_cljs$core$async57934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_57936){
var self__ = this;
var _57936__$1 = this;
return self__.meta57935;
}));

(cljs.core.async.t_cljs$core$async57934.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57934.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57934.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async57934.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57934.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async57934.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async57934.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async57934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta57935","meta57935",-90984865,null)], null);
}));

(cljs.core.async.t_cljs$core$async57934.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async57934.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async57934");

(cljs.core.async.t_cljs$core$async57934.cljs$lang$ctorPrWriter = (function (this__4450__auto__,writer__4451__auto__,opt__4452__auto__){
return cljs.core._write(writer__4451__auto__,"cljs.core.async/t_cljs$core$async57934");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async57934.
 */
cljs.core.async.__GT_t_cljs$core$async57934 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async57934(p__$1,ch__$1,meta57935){
return (new cljs.core.async.t_cljs$core$async57934(p__$1,ch__$1,meta57935));
});

}

return (new cljs.core.async.t_cljs$core$async57934(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__57938 = arguments.length;
switch (G__57938) {
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
var c__56789__auto___58790 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56790__auto__ = (function (){var switch__56661__auto__ = (function (state_57959){
var state_val_57960 = (state_57959[(1)]);
if((state_val_57960 === (7))){
var inst_57955 = (state_57959[(2)]);
var state_57959__$1 = state_57959;
var statearr_57961_58791 = state_57959__$1;
(statearr_57961_58791[(2)] = inst_57955);

(statearr_57961_58791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57960 === (1))){
var state_57959__$1 = state_57959;
var statearr_57962_58792 = state_57959__$1;
(statearr_57962_58792[(2)] = null);

(statearr_57962_58792[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57960 === (4))){
var inst_57941 = (state_57959[(7)]);
var inst_57941__$1 = (state_57959[(2)]);
var inst_57942 = (inst_57941__$1 == null);
var state_57959__$1 = (function (){var statearr_57963 = state_57959;
(statearr_57963[(7)] = inst_57941__$1);

return statearr_57963;
})();
if(cljs.core.truth_(inst_57942)){
var statearr_57964_58793 = state_57959__$1;
(statearr_57964_58793[(1)] = (5));

} else {
var statearr_57965_58794 = state_57959__$1;
(statearr_57965_58794[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57960 === (6))){
var inst_57941 = (state_57959[(7)]);
var inst_57946 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_57941) : p.call(null,inst_57941));
var state_57959__$1 = state_57959;
if(cljs.core.truth_(inst_57946)){
var statearr_57966_58795 = state_57959__$1;
(statearr_57966_58795[(1)] = (8));

} else {
var statearr_57967_58796 = state_57959__$1;
(statearr_57967_58796[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57960 === (3))){
var inst_57957 = (state_57959[(2)]);
var state_57959__$1 = state_57959;
return cljs.core.async.impl.ioc_helpers.return_chan(state_57959__$1,inst_57957);
} else {
if((state_val_57960 === (2))){
var state_57959__$1 = state_57959;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_57959__$1,(4),ch);
} else {
if((state_val_57960 === (11))){
var inst_57949 = (state_57959[(2)]);
var state_57959__$1 = state_57959;
var statearr_57968_58797 = state_57959__$1;
(statearr_57968_58797[(2)] = inst_57949);

(statearr_57968_58797[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57960 === (9))){
var state_57959__$1 = state_57959;
var statearr_57969_58798 = state_57959__$1;
(statearr_57969_58798[(2)] = null);

(statearr_57969_58798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57960 === (5))){
var inst_57944 = cljs.core.async.close_BANG_(out);
var state_57959__$1 = state_57959;
var statearr_57970_58799 = state_57959__$1;
(statearr_57970_58799[(2)] = inst_57944);

(statearr_57970_58799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57960 === (10))){
var inst_57952 = (state_57959[(2)]);
var state_57959__$1 = (function (){var statearr_57971 = state_57959;
(statearr_57971[(8)] = inst_57952);

return statearr_57971;
})();
var statearr_57972_58800 = state_57959__$1;
(statearr_57972_58800[(2)] = null);

(statearr_57972_58800[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57960 === (8))){
var inst_57941 = (state_57959[(7)]);
var state_57959__$1 = state_57959;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_57959__$1,(11),out,inst_57941);
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
var cljs$core$async$state_machine__56662__auto__ = null;
var cljs$core$async$state_machine__56662__auto____0 = (function (){
var statearr_57973 = [null,null,null,null,null,null,null,null,null];
(statearr_57973[(0)] = cljs$core$async$state_machine__56662__auto__);

(statearr_57973[(1)] = (1));

return statearr_57973;
});
var cljs$core$async$state_machine__56662__auto____1 = (function (state_57959){
while(true){
var ret_value__56663__auto__ = (function (){try{while(true){
var result__56664__auto__ = switch__56661__auto__(state_57959);
if(cljs.core.keyword_identical_QMARK_(result__56664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56664__auto__;
}
break;
}
}catch (e57974){var ex__56665__auto__ = e57974;
var statearr_57975_58801 = state_57959;
(statearr_57975_58801[(2)] = ex__56665__auto__);


if(cljs.core.seq((state_57959[(4)]))){
var statearr_57976_58802 = state_57959;
(statearr_57976_58802[(1)] = cljs.core.first((state_57959[(4)])));

} else {
throw ex__56665__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58803 = state_57959;
state_57959 = G__58803;
continue;
} else {
return ret_value__56663__auto__;
}
break;
}
});
cljs$core$async$state_machine__56662__auto__ = function(state_57959){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56662__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56662__auto____1.call(this,state_57959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56662__auto____0;
cljs$core$async$state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56662__auto____1;
return cljs$core$async$state_machine__56662__auto__;
})()
})();
var state__56791__auto__ = (function (){var statearr_57977 = f__56790__auto__();
(statearr_57977[(6)] = c__56789__auto___58790);

return statearr_57977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56791__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__57979 = arguments.length;
switch (G__57979) {
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
var c__56789__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56790__auto__ = (function (){var switch__56661__auto__ = (function (state_58041){
var state_val_58042 = (state_58041[(1)]);
if((state_val_58042 === (7))){
var inst_58037 = (state_58041[(2)]);
var state_58041__$1 = state_58041;
var statearr_58043_58805 = state_58041__$1;
(statearr_58043_58805[(2)] = inst_58037);

(statearr_58043_58805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58042 === (20))){
var inst_58007 = (state_58041[(7)]);
var inst_58018 = (state_58041[(2)]);
var inst_58019 = cljs.core.next(inst_58007);
var inst_57993 = inst_58019;
var inst_57994 = null;
var inst_57995 = (0);
var inst_57996 = (0);
var state_58041__$1 = (function (){var statearr_58044 = state_58041;
(statearr_58044[(8)] = inst_57994);

(statearr_58044[(9)] = inst_57996);

(statearr_58044[(10)] = inst_58018);

(statearr_58044[(11)] = inst_57995);

(statearr_58044[(12)] = inst_57993);

return statearr_58044;
})();
var statearr_58045_58810 = state_58041__$1;
(statearr_58045_58810[(2)] = null);

(statearr_58045_58810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58042 === (1))){
var state_58041__$1 = state_58041;
var statearr_58046_58811 = state_58041__$1;
(statearr_58046_58811[(2)] = null);

(statearr_58046_58811[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58042 === (4))){
var inst_57982 = (state_58041[(13)]);
var inst_57982__$1 = (state_58041[(2)]);
var inst_57983 = (inst_57982__$1 == null);
var state_58041__$1 = (function (){var statearr_58047 = state_58041;
(statearr_58047[(13)] = inst_57982__$1);

return statearr_58047;
})();
if(cljs.core.truth_(inst_57983)){
var statearr_58048_58812 = state_58041__$1;
(statearr_58048_58812[(1)] = (5));

} else {
var statearr_58049_58813 = state_58041__$1;
(statearr_58049_58813[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58042 === (15))){
var state_58041__$1 = state_58041;
var statearr_58053_58814 = state_58041__$1;
(statearr_58053_58814[(2)] = null);

(statearr_58053_58814[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58042 === (21))){
var state_58041__$1 = state_58041;
var statearr_58054_58815 = state_58041__$1;
(statearr_58054_58815[(2)] = null);

(statearr_58054_58815[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58042 === (13))){
var inst_57994 = (state_58041[(8)]);
var inst_57996 = (state_58041[(9)]);
var inst_57995 = (state_58041[(11)]);
var inst_57993 = (state_58041[(12)]);
var inst_58003 = (state_58041[(2)]);
var inst_58004 = (inst_57996 + (1));
var tmp58050 = inst_57994;
var tmp58051 = inst_57995;
var tmp58052 = inst_57993;
var inst_57993__$1 = tmp58052;
var inst_57994__$1 = tmp58050;
var inst_57995__$1 = tmp58051;
var inst_57996__$1 = inst_58004;
var state_58041__$1 = (function (){var statearr_58055 = state_58041;
(statearr_58055[(8)] = inst_57994__$1);

(statearr_58055[(9)] = inst_57996__$1);

(statearr_58055[(14)] = inst_58003);

(statearr_58055[(11)] = inst_57995__$1);

(statearr_58055[(12)] = inst_57993__$1);

return statearr_58055;
})();
var statearr_58056_58816 = state_58041__$1;
(statearr_58056_58816[(2)] = null);

(statearr_58056_58816[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58042 === (22))){
var state_58041__$1 = state_58041;
var statearr_58057_58817 = state_58041__$1;
(statearr_58057_58817[(2)] = null);

(statearr_58057_58817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58042 === (6))){
var inst_57982 = (state_58041[(13)]);
var inst_57991 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_57982) : f.call(null,inst_57982));
var inst_57992 = cljs.core.seq(inst_57991);
var inst_57993 = inst_57992;
var inst_57994 = null;
var inst_57995 = (0);
var inst_57996 = (0);
var state_58041__$1 = (function (){var statearr_58058 = state_58041;
(statearr_58058[(8)] = inst_57994);

(statearr_58058[(9)] = inst_57996);

(statearr_58058[(11)] = inst_57995);

(statearr_58058[(12)] = inst_57993);

return statearr_58058;
})();
var statearr_58059_58818 = state_58041__$1;
(statearr_58059_58818[(2)] = null);

(statearr_58059_58818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58042 === (17))){
var inst_58007 = (state_58041[(7)]);
var inst_58011 = cljs.core.chunk_first(inst_58007);
var inst_58012 = cljs.core.chunk_rest(inst_58007);
var inst_58013 = cljs.core.count(inst_58011);
var inst_57993 = inst_58012;
var inst_57994 = inst_58011;
var inst_57995 = inst_58013;
var inst_57996 = (0);
var state_58041__$1 = (function (){var statearr_58060 = state_58041;
(statearr_58060[(8)] = inst_57994);

(statearr_58060[(9)] = inst_57996);

(statearr_58060[(11)] = inst_57995);

(statearr_58060[(12)] = inst_57993);

return statearr_58060;
})();
var statearr_58061_58819 = state_58041__$1;
(statearr_58061_58819[(2)] = null);

(statearr_58061_58819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58042 === (3))){
var inst_58039 = (state_58041[(2)]);
var state_58041__$1 = state_58041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58041__$1,inst_58039);
} else {
if((state_val_58042 === (12))){
var inst_58027 = (state_58041[(2)]);
var state_58041__$1 = state_58041;
var statearr_58062_58824 = state_58041__$1;
(statearr_58062_58824[(2)] = inst_58027);

(statearr_58062_58824[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58042 === (2))){
var state_58041__$1 = state_58041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58041__$1,(4),in$);
} else {
if((state_val_58042 === (23))){
var inst_58035 = (state_58041[(2)]);
var state_58041__$1 = state_58041;
var statearr_58063_58825 = state_58041__$1;
(statearr_58063_58825[(2)] = inst_58035);

(statearr_58063_58825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58042 === (19))){
var inst_58022 = (state_58041[(2)]);
var state_58041__$1 = state_58041;
var statearr_58064_58826 = state_58041__$1;
(statearr_58064_58826[(2)] = inst_58022);

(statearr_58064_58826[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58042 === (11))){
var inst_58007 = (state_58041[(7)]);
var inst_57993 = (state_58041[(12)]);
var inst_58007__$1 = cljs.core.seq(inst_57993);
var state_58041__$1 = (function (){var statearr_58065 = state_58041;
(statearr_58065[(7)] = inst_58007__$1);

return statearr_58065;
})();
if(inst_58007__$1){
var statearr_58066_58828 = state_58041__$1;
(statearr_58066_58828[(1)] = (14));

} else {
var statearr_58067_58829 = state_58041__$1;
(statearr_58067_58829[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58042 === (9))){
var inst_58029 = (state_58041[(2)]);
var inst_58030 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_58041__$1 = (function (){var statearr_58068 = state_58041;
(statearr_58068[(15)] = inst_58029);

return statearr_58068;
})();
if(cljs.core.truth_(inst_58030)){
var statearr_58069_58830 = state_58041__$1;
(statearr_58069_58830[(1)] = (21));

} else {
var statearr_58070_58831 = state_58041__$1;
(statearr_58070_58831[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58042 === (5))){
var inst_57985 = cljs.core.async.close_BANG_(out);
var state_58041__$1 = state_58041;
var statearr_58071_58832 = state_58041__$1;
(statearr_58071_58832[(2)] = inst_57985);

(statearr_58071_58832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58042 === (14))){
var inst_58007 = (state_58041[(7)]);
var inst_58009 = cljs.core.chunked_seq_QMARK_(inst_58007);
var state_58041__$1 = state_58041;
if(inst_58009){
var statearr_58072_58833 = state_58041__$1;
(statearr_58072_58833[(1)] = (17));

} else {
var statearr_58073_58834 = state_58041__$1;
(statearr_58073_58834[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58042 === (16))){
var inst_58025 = (state_58041[(2)]);
var state_58041__$1 = state_58041;
var statearr_58074_58835 = state_58041__$1;
(statearr_58074_58835[(2)] = inst_58025);

(statearr_58074_58835[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58042 === (10))){
var inst_57994 = (state_58041[(8)]);
var inst_57996 = (state_58041[(9)]);
var inst_58001 = cljs.core._nth(inst_57994,inst_57996);
var state_58041__$1 = state_58041;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58041__$1,(13),out,inst_58001);
} else {
if((state_val_58042 === (18))){
var inst_58007 = (state_58041[(7)]);
var inst_58016 = cljs.core.first(inst_58007);
var state_58041__$1 = state_58041;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58041__$1,(20),out,inst_58016);
} else {
if((state_val_58042 === (8))){
var inst_57996 = (state_58041[(9)]);
var inst_57995 = (state_58041[(11)]);
var inst_57998 = (inst_57996 < inst_57995);
var inst_57999 = inst_57998;
var state_58041__$1 = state_58041;
if(cljs.core.truth_(inst_57999)){
var statearr_58075_58836 = state_58041__$1;
(statearr_58075_58836[(1)] = (10));

} else {
var statearr_58076_58838 = state_58041__$1;
(statearr_58076_58838[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__56662__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__56662__auto____0 = (function (){
var statearr_58077 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58077[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__56662__auto__);

(statearr_58077[(1)] = (1));

return statearr_58077;
});
var cljs$core$async$mapcat_STAR__$_state_machine__56662__auto____1 = (function (state_58041){
while(true){
var ret_value__56663__auto__ = (function (){try{while(true){
var result__56664__auto__ = switch__56661__auto__(state_58041);
if(cljs.core.keyword_identical_QMARK_(result__56664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56664__auto__;
}
break;
}
}catch (e58078){var ex__56665__auto__ = e58078;
var statearr_58079_58839 = state_58041;
(statearr_58079_58839[(2)] = ex__56665__auto__);


if(cljs.core.seq((state_58041[(4)]))){
var statearr_58080_58840 = state_58041;
(statearr_58080_58840[(1)] = cljs.core.first((state_58041[(4)])));

} else {
throw ex__56665__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58841 = state_58041;
state_58041 = G__58841;
continue;
} else {
return ret_value__56663__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__56662__auto__ = function(state_58041){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__56662__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__56662__auto____1.call(this,state_58041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__56662__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__56662__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__56662__auto__;
})()
})();
var state__56791__auto__ = (function (){var statearr_58081 = f__56790__auto__();
(statearr_58081[(6)] = c__56789__auto__);

return statearr_58081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56791__auto__);
}));

return c__56789__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__58083 = arguments.length;
switch (G__58083) {
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
var G__58085 = arguments.length;
switch (G__58085) {
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
var G__58087 = arguments.length;
switch (G__58087) {
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
var c__56789__auto___58849 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56790__auto__ = (function (){var switch__56661__auto__ = (function (state_58111){
var state_val_58112 = (state_58111[(1)]);
if((state_val_58112 === (7))){
var inst_58106 = (state_58111[(2)]);
var state_58111__$1 = state_58111;
var statearr_58113_58850 = state_58111__$1;
(statearr_58113_58850[(2)] = inst_58106);

(statearr_58113_58850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58112 === (1))){
var inst_58088 = null;
var state_58111__$1 = (function (){var statearr_58114 = state_58111;
(statearr_58114[(7)] = inst_58088);

return statearr_58114;
})();
var statearr_58115_58851 = state_58111__$1;
(statearr_58115_58851[(2)] = null);

(statearr_58115_58851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58112 === (4))){
var inst_58091 = (state_58111[(8)]);
var inst_58091__$1 = (state_58111[(2)]);
var inst_58092 = (inst_58091__$1 == null);
var inst_58093 = cljs.core.not(inst_58092);
var state_58111__$1 = (function (){var statearr_58116 = state_58111;
(statearr_58116[(8)] = inst_58091__$1);

return statearr_58116;
})();
if(inst_58093){
var statearr_58117_58852 = state_58111__$1;
(statearr_58117_58852[(1)] = (5));

} else {
var statearr_58118_58853 = state_58111__$1;
(statearr_58118_58853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58112 === (6))){
var state_58111__$1 = state_58111;
var statearr_58119_58854 = state_58111__$1;
(statearr_58119_58854[(2)] = null);

(statearr_58119_58854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58112 === (3))){
var inst_58108 = (state_58111[(2)]);
var inst_58109 = cljs.core.async.close_BANG_(out);
var state_58111__$1 = (function (){var statearr_58120 = state_58111;
(statearr_58120[(9)] = inst_58108);

return statearr_58120;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_58111__$1,inst_58109);
} else {
if((state_val_58112 === (2))){
var state_58111__$1 = state_58111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58111__$1,(4),ch);
} else {
if((state_val_58112 === (11))){
var inst_58091 = (state_58111[(8)]);
var inst_58100 = (state_58111[(2)]);
var inst_58088 = inst_58091;
var state_58111__$1 = (function (){var statearr_58121 = state_58111;
(statearr_58121[(10)] = inst_58100);

(statearr_58121[(7)] = inst_58088);

return statearr_58121;
})();
var statearr_58122_58855 = state_58111__$1;
(statearr_58122_58855[(2)] = null);

(statearr_58122_58855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58112 === (9))){
var inst_58091 = (state_58111[(8)]);
var state_58111__$1 = state_58111;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58111__$1,(11),out,inst_58091);
} else {
if((state_val_58112 === (5))){
var inst_58091 = (state_58111[(8)]);
var inst_58088 = (state_58111[(7)]);
var inst_58095 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_58091,inst_58088);
var state_58111__$1 = state_58111;
if(inst_58095){
var statearr_58124_58856 = state_58111__$1;
(statearr_58124_58856[(1)] = (8));

} else {
var statearr_58125_58857 = state_58111__$1;
(statearr_58125_58857[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58112 === (10))){
var inst_58103 = (state_58111[(2)]);
var state_58111__$1 = state_58111;
var statearr_58126_58858 = state_58111__$1;
(statearr_58126_58858[(2)] = inst_58103);

(statearr_58126_58858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58112 === (8))){
var inst_58088 = (state_58111[(7)]);
var tmp58123 = inst_58088;
var inst_58088__$1 = tmp58123;
var state_58111__$1 = (function (){var statearr_58127 = state_58111;
(statearr_58127[(7)] = inst_58088__$1);

return statearr_58127;
})();
var statearr_58128_58859 = state_58111__$1;
(statearr_58128_58859[(2)] = null);

(statearr_58128_58859[(1)] = (2));


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
var cljs$core$async$state_machine__56662__auto__ = null;
var cljs$core$async$state_machine__56662__auto____0 = (function (){
var statearr_58129 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_58129[(0)] = cljs$core$async$state_machine__56662__auto__);

(statearr_58129[(1)] = (1));

return statearr_58129;
});
var cljs$core$async$state_machine__56662__auto____1 = (function (state_58111){
while(true){
var ret_value__56663__auto__ = (function (){try{while(true){
var result__56664__auto__ = switch__56661__auto__(state_58111);
if(cljs.core.keyword_identical_QMARK_(result__56664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56664__auto__;
}
break;
}
}catch (e58130){var ex__56665__auto__ = e58130;
var statearr_58131_58860 = state_58111;
(statearr_58131_58860[(2)] = ex__56665__auto__);


if(cljs.core.seq((state_58111[(4)]))){
var statearr_58132_58861 = state_58111;
(statearr_58132_58861[(1)] = cljs.core.first((state_58111[(4)])));

} else {
throw ex__56665__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58862 = state_58111;
state_58111 = G__58862;
continue;
} else {
return ret_value__56663__auto__;
}
break;
}
});
cljs$core$async$state_machine__56662__auto__ = function(state_58111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56662__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56662__auto____1.call(this,state_58111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56662__auto____0;
cljs$core$async$state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56662__auto____1;
return cljs$core$async$state_machine__56662__auto__;
})()
})();
var state__56791__auto__ = (function (){var statearr_58133 = f__56790__auto__();
(statearr_58133[(6)] = c__56789__auto___58849);

return statearr_58133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56791__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__58135 = arguments.length;
switch (G__58135) {
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
var c__56789__auto___58864 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56790__auto__ = (function (){var switch__56661__auto__ = (function (state_58173){
var state_val_58174 = (state_58173[(1)]);
if((state_val_58174 === (7))){
var inst_58169 = (state_58173[(2)]);
var state_58173__$1 = state_58173;
var statearr_58175_58865 = state_58173__$1;
(statearr_58175_58865[(2)] = inst_58169);

(statearr_58175_58865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58174 === (1))){
var inst_58136 = (new Array(n));
var inst_58137 = inst_58136;
var inst_58138 = (0);
var state_58173__$1 = (function (){var statearr_58176 = state_58173;
(statearr_58176[(7)] = inst_58138);

(statearr_58176[(8)] = inst_58137);

return statearr_58176;
})();
var statearr_58177_58866 = state_58173__$1;
(statearr_58177_58866[(2)] = null);

(statearr_58177_58866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58174 === (4))){
var inst_58141 = (state_58173[(9)]);
var inst_58141__$1 = (state_58173[(2)]);
var inst_58142 = (inst_58141__$1 == null);
var inst_58143 = cljs.core.not(inst_58142);
var state_58173__$1 = (function (){var statearr_58178 = state_58173;
(statearr_58178[(9)] = inst_58141__$1);

return statearr_58178;
})();
if(inst_58143){
var statearr_58179_58868 = state_58173__$1;
(statearr_58179_58868[(1)] = (5));

} else {
var statearr_58180_58869 = state_58173__$1;
(statearr_58180_58869[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58174 === (15))){
var inst_58163 = (state_58173[(2)]);
var state_58173__$1 = state_58173;
var statearr_58181_58870 = state_58173__$1;
(statearr_58181_58870[(2)] = inst_58163);

(statearr_58181_58870[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58174 === (13))){
var state_58173__$1 = state_58173;
var statearr_58182_58871 = state_58173__$1;
(statearr_58182_58871[(2)] = null);

(statearr_58182_58871[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58174 === (6))){
var inst_58138 = (state_58173[(7)]);
var inst_58159 = (inst_58138 > (0));
var state_58173__$1 = state_58173;
if(cljs.core.truth_(inst_58159)){
var statearr_58183_58875 = state_58173__$1;
(statearr_58183_58875[(1)] = (12));

} else {
var statearr_58184_58876 = state_58173__$1;
(statearr_58184_58876[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58174 === (3))){
var inst_58171 = (state_58173[(2)]);
var state_58173__$1 = state_58173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58173__$1,inst_58171);
} else {
if((state_val_58174 === (12))){
var inst_58137 = (state_58173[(8)]);
var inst_58161 = cljs.core.vec(inst_58137);
var state_58173__$1 = state_58173;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58173__$1,(15),out,inst_58161);
} else {
if((state_val_58174 === (2))){
var state_58173__$1 = state_58173;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58173__$1,(4),ch);
} else {
if((state_val_58174 === (11))){
var inst_58153 = (state_58173[(2)]);
var inst_58154 = (new Array(n));
var inst_58137 = inst_58154;
var inst_58138 = (0);
var state_58173__$1 = (function (){var statearr_58185 = state_58173;
(statearr_58185[(10)] = inst_58153);

(statearr_58185[(7)] = inst_58138);

(statearr_58185[(8)] = inst_58137);

return statearr_58185;
})();
var statearr_58186_58877 = state_58173__$1;
(statearr_58186_58877[(2)] = null);

(statearr_58186_58877[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58174 === (9))){
var inst_58137 = (state_58173[(8)]);
var inst_58151 = cljs.core.vec(inst_58137);
var state_58173__$1 = state_58173;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58173__$1,(11),out,inst_58151);
} else {
if((state_val_58174 === (5))){
var inst_58141 = (state_58173[(9)]);
var inst_58138 = (state_58173[(7)]);
var inst_58146 = (state_58173[(11)]);
var inst_58137 = (state_58173[(8)]);
var inst_58145 = (inst_58137[inst_58138] = inst_58141);
var inst_58146__$1 = (inst_58138 + (1));
var inst_58147 = (inst_58146__$1 < n);
var state_58173__$1 = (function (){var statearr_58187 = state_58173;
(statearr_58187[(11)] = inst_58146__$1);

(statearr_58187[(12)] = inst_58145);

return statearr_58187;
})();
if(cljs.core.truth_(inst_58147)){
var statearr_58188_58878 = state_58173__$1;
(statearr_58188_58878[(1)] = (8));

} else {
var statearr_58189_58879 = state_58173__$1;
(statearr_58189_58879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58174 === (14))){
var inst_58166 = (state_58173[(2)]);
var inst_58167 = cljs.core.async.close_BANG_(out);
var state_58173__$1 = (function (){var statearr_58191 = state_58173;
(statearr_58191[(13)] = inst_58166);

return statearr_58191;
})();
var statearr_58192_58880 = state_58173__$1;
(statearr_58192_58880[(2)] = inst_58167);

(statearr_58192_58880[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58174 === (10))){
var inst_58157 = (state_58173[(2)]);
var state_58173__$1 = state_58173;
var statearr_58193_58881 = state_58173__$1;
(statearr_58193_58881[(2)] = inst_58157);

(statearr_58193_58881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58174 === (8))){
var inst_58146 = (state_58173[(11)]);
var inst_58137 = (state_58173[(8)]);
var tmp58190 = inst_58137;
var inst_58137__$1 = tmp58190;
var inst_58138 = inst_58146;
var state_58173__$1 = (function (){var statearr_58194 = state_58173;
(statearr_58194[(7)] = inst_58138);

(statearr_58194[(8)] = inst_58137__$1);

return statearr_58194;
})();
var statearr_58195_58882 = state_58173__$1;
(statearr_58195_58882[(2)] = null);

(statearr_58195_58882[(1)] = (2));


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
var cljs$core$async$state_machine__56662__auto__ = null;
var cljs$core$async$state_machine__56662__auto____0 = (function (){
var statearr_58196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58196[(0)] = cljs$core$async$state_machine__56662__auto__);

(statearr_58196[(1)] = (1));

return statearr_58196;
});
var cljs$core$async$state_machine__56662__auto____1 = (function (state_58173){
while(true){
var ret_value__56663__auto__ = (function (){try{while(true){
var result__56664__auto__ = switch__56661__auto__(state_58173);
if(cljs.core.keyword_identical_QMARK_(result__56664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56664__auto__;
}
break;
}
}catch (e58197){var ex__56665__auto__ = e58197;
var statearr_58198_58883 = state_58173;
(statearr_58198_58883[(2)] = ex__56665__auto__);


if(cljs.core.seq((state_58173[(4)]))){
var statearr_58199_58884 = state_58173;
(statearr_58199_58884[(1)] = cljs.core.first((state_58173[(4)])));

} else {
throw ex__56665__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58885 = state_58173;
state_58173 = G__58885;
continue;
} else {
return ret_value__56663__auto__;
}
break;
}
});
cljs$core$async$state_machine__56662__auto__ = function(state_58173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56662__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56662__auto____1.call(this,state_58173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56662__auto____0;
cljs$core$async$state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56662__auto____1;
return cljs$core$async$state_machine__56662__auto__;
})()
})();
var state__56791__auto__ = (function (){var statearr_58200 = f__56790__auto__();
(statearr_58200[(6)] = c__56789__auto___58864);

return statearr_58200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56791__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__58202 = arguments.length;
switch (G__58202) {
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
var c__56789__auto___58887 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__56790__auto__ = (function (){var switch__56661__auto__ = (function (state_58247){
var state_val_58248 = (state_58247[(1)]);
if((state_val_58248 === (7))){
var inst_58243 = (state_58247[(2)]);
var state_58247__$1 = state_58247;
var statearr_58249_58889 = state_58247__$1;
(statearr_58249_58889[(2)] = inst_58243);

(statearr_58249_58889[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58248 === (1))){
var inst_58203 = [];
var inst_58204 = inst_58203;
var inst_58205 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_58247__$1 = (function (){var statearr_58250 = state_58247;
(statearr_58250[(7)] = inst_58204);

(statearr_58250[(8)] = inst_58205);

return statearr_58250;
})();
var statearr_58251_58890 = state_58247__$1;
(statearr_58251_58890[(2)] = null);

(statearr_58251_58890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58248 === (4))){
var inst_58208 = (state_58247[(9)]);
var inst_58208__$1 = (state_58247[(2)]);
var inst_58209 = (inst_58208__$1 == null);
var inst_58210 = cljs.core.not(inst_58209);
var state_58247__$1 = (function (){var statearr_58252 = state_58247;
(statearr_58252[(9)] = inst_58208__$1);

return statearr_58252;
})();
if(inst_58210){
var statearr_58253_58891 = state_58247__$1;
(statearr_58253_58891[(1)] = (5));

} else {
var statearr_58254_58892 = state_58247__$1;
(statearr_58254_58892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58248 === (15))){
var inst_58204 = (state_58247[(7)]);
var inst_58235 = cljs.core.vec(inst_58204);
var state_58247__$1 = state_58247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58247__$1,(18),out,inst_58235);
} else {
if((state_val_58248 === (13))){
var inst_58230 = (state_58247[(2)]);
var state_58247__$1 = state_58247;
var statearr_58255_58893 = state_58247__$1;
(statearr_58255_58893[(2)] = inst_58230);

(statearr_58255_58893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58248 === (6))){
var inst_58204 = (state_58247[(7)]);
var inst_58232 = inst_58204.length;
var inst_58233 = (inst_58232 > (0));
var state_58247__$1 = state_58247;
if(cljs.core.truth_(inst_58233)){
var statearr_58256_58894 = state_58247__$1;
(statearr_58256_58894[(1)] = (15));

} else {
var statearr_58257_58895 = state_58247__$1;
(statearr_58257_58895[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58248 === (17))){
var inst_58240 = (state_58247[(2)]);
var inst_58241 = cljs.core.async.close_BANG_(out);
var state_58247__$1 = (function (){var statearr_58258 = state_58247;
(statearr_58258[(10)] = inst_58240);

return statearr_58258;
})();
var statearr_58259_58896 = state_58247__$1;
(statearr_58259_58896[(2)] = inst_58241);

(statearr_58259_58896[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58248 === (3))){
var inst_58245 = (state_58247[(2)]);
var state_58247__$1 = state_58247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_58247__$1,inst_58245);
} else {
if((state_val_58248 === (12))){
var inst_58204 = (state_58247[(7)]);
var inst_58223 = cljs.core.vec(inst_58204);
var state_58247__$1 = state_58247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_58247__$1,(14),out,inst_58223);
} else {
if((state_val_58248 === (2))){
var state_58247__$1 = state_58247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_58247__$1,(4),ch);
} else {
if((state_val_58248 === (11))){
var inst_58208 = (state_58247[(9)]);
var inst_58212 = (state_58247[(11)]);
var inst_58204 = (state_58247[(7)]);
var inst_58220 = inst_58204.push(inst_58208);
var tmp58260 = inst_58204;
var inst_58204__$1 = tmp58260;
var inst_58205 = inst_58212;
var state_58247__$1 = (function (){var statearr_58261 = state_58247;
(statearr_58261[(7)] = inst_58204__$1);

(statearr_58261[(8)] = inst_58205);

(statearr_58261[(12)] = inst_58220);

return statearr_58261;
})();
var statearr_58262_58897 = state_58247__$1;
(statearr_58262_58897[(2)] = null);

(statearr_58262_58897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58248 === (9))){
var inst_58205 = (state_58247[(8)]);
var inst_58216 = cljs.core.keyword_identical_QMARK_(inst_58205,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_58247__$1 = state_58247;
var statearr_58263_58898 = state_58247__$1;
(statearr_58263_58898[(2)] = inst_58216);

(statearr_58263_58898[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58248 === (5))){
var inst_58208 = (state_58247[(9)]);
var inst_58212 = (state_58247[(11)]);
var inst_58213 = (state_58247[(13)]);
var inst_58205 = (state_58247[(8)]);
var inst_58212__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_58208) : f.call(null,inst_58208));
var inst_58213__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_58212__$1,inst_58205);
var state_58247__$1 = (function (){var statearr_58264 = state_58247;
(statearr_58264[(11)] = inst_58212__$1);

(statearr_58264[(13)] = inst_58213__$1);

return statearr_58264;
})();
if(inst_58213__$1){
var statearr_58265_58903 = state_58247__$1;
(statearr_58265_58903[(1)] = (8));

} else {
var statearr_58266_58904 = state_58247__$1;
(statearr_58266_58904[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58248 === (14))){
var inst_58208 = (state_58247[(9)]);
var inst_58212 = (state_58247[(11)]);
var inst_58225 = (state_58247[(2)]);
var inst_58226 = [];
var inst_58227 = inst_58226.push(inst_58208);
var inst_58204 = inst_58226;
var inst_58205 = inst_58212;
var state_58247__$1 = (function (){var statearr_58267 = state_58247;
(statearr_58267[(14)] = inst_58227);

(statearr_58267[(15)] = inst_58225);

(statearr_58267[(7)] = inst_58204);

(statearr_58267[(8)] = inst_58205);

return statearr_58267;
})();
var statearr_58268_58905 = state_58247__$1;
(statearr_58268_58905[(2)] = null);

(statearr_58268_58905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58248 === (16))){
var state_58247__$1 = state_58247;
var statearr_58269_58907 = state_58247__$1;
(statearr_58269_58907[(2)] = null);

(statearr_58269_58907[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58248 === (10))){
var inst_58218 = (state_58247[(2)]);
var state_58247__$1 = state_58247;
if(cljs.core.truth_(inst_58218)){
var statearr_58270_58908 = state_58247__$1;
(statearr_58270_58908[(1)] = (11));

} else {
var statearr_58271_58909 = state_58247__$1;
(statearr_58271_58909[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58248 === (18))){
var inst_58237 = (state_58247[(2)]);
var state_58247__$1 = state_58247;
var statearr_58272_58910 = state_58247__$1;
(statearr_58272_58910[(2)] = inst_58237);

(statearr_58272_58910[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58248 === (8))){
var inst_58213 = (state_58247[(13)]);
var state_58247__$1 = state_58247;
var statearr_58273_58911 = state_58247__$1;
(statearr_58273_58911[(2)] = inst_58213);

(statearr_58273_58911[(1)] = (10));


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
var cljs$core$async$state_machine__56662__auto__ = null;
var cljs$core$async$state_machine__56662__auto____0 = (function (){
var statearr_58274 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58274[(0)] = cljs$core$async$state_machine__56662__auto__);

(statearr_58274[(1)] = (1));

return statearr_58274;
});
var cljs$core$async$state_machine__56662__auto____1 = (function (state_58247){
while(true){
var ret_value__56663__auto__ = (function (){try{while(true){
var result__56664__auto__ = switch__56661__auto__(state_58247);
if(cljs.core.keyword_identical_QMARK_(result__56664__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__56664__auto__;
}
break;
}
}catch (e58275){var ex__56665__auto__ = e58275;
var statearr_58276_58912 = state_58247;
(statearr_58276_58912[(2)] = ex__56665__auto__);


if(cljs.core.seq((state_58247[(4)]))){
var statearr_58277_58913 = state_58247;
(statearr_58277_58913[(1)] = cljs.core.first((state_58247[(4)])));

} else {
throw ex__56665__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__56663__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58914 = state_58247;
state_58247 = G__58914;
continue;
} else {
return ret_value__56663__auto__;
}
break;
}
});
cljs$core$async$state_machine__56662__auto__ = function(state_58247){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__56662__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__56662__auto____1.call(this,state_58247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__56662__auto____0;
cljs$core$async$state_machine__56662__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__56662__auto____1;
return cljs$core$async$state_machine__56662__auto__;
})()
})();
var state__56791__auto__ = (function (){var statearr_58278 = f__56790__auto__();
(statearr_58278[(6)] = c__56789__auto___58887);

return statearr_58278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__56791__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
