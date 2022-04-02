goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32952 = arguments.length;
switch (G__32952) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32956 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32956 = (function (f,blockable,meta32957){
this.f = f;
this.blockable = blockable;
this.meta32957 = meta32957;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32958,meta32957__$1){
var self__ = this;
var _32958__$1 = this;
return (new cljs.core.async.t_cljs$core$async32956(self__.f,self__.blockable,meta32957__$1));
}));

(cljs.core.async.t_cljs$core$async32956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32958){
var self__ = this;
var _32958__$1 = this;
return self__.meta32957;
}));

(cljs.core.async.t_cljs$core$async32956.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32956.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32956.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async32956.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async32956.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32957","meta32957",454072229,null)], null);
}));

(cljs.core.async.t_cljs$core$async32956.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32956.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32956");

(cljs.core.async.t_cljs$core$async32956.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32956");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32956.
 */
cljs.core.async.__GT_t_cljs$core$async32956 = (function cljs$core$async$__GT_t_cljs$core$async32956(f__$1,blockable__$1,meta32957){
return (new cljs.core.async.t_cljs$core$async32956(f__$1,blockable__$1,meta32957));
});

}

return (new cljs.core.async.t_cljs$core$async32956(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__32964 = arguments.length;
switch (G__32964) {
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
var G__32966 = arguments.length;
switch (G__32966) {
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
var G__32972 = arguments.length;
switch (G__32972) {
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
var val_35109 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35109) : fn1.call(null,val_35109));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35109) : fn1.call(null,val_35109));
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
var G__32974 = arguments.length;
switch (G__32974) {
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
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
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
var n__4741__auto___35127 = n;
var x_35128 = (0);
while(true){
if((x_35128 < n__4741__auto___35127)){
(a[x_35128] = x_35128);

var G__35135 = (x_35128 + (1));
x_35128 = G__35135;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32975 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32975 = (function (flag,meta32976){
this.flag = flag;
this.meta32976 = meta32976;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32975.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32977,meta32976__$1){
var self__ = this;
var _32977__$1 = this;
return (new cljs.core.async.t_cljs$core$async32975(self__.flag,meta32976__$1));
}));

(cljs.core.async.t_cljs$core$async32975.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32977){
var self__ = this;
var _32977__$1 = this;
return self__.meta32976;
}));

(cljs.core.async.t_cljs$core$async32975.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32975.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32975.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32975.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async32975.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32976","meta32976",-925448084,null)], null);
}));

(cljs.core.async.t_cljs$core$async32975.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32975.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32975");

(cljs.core.async.t_cljs$core$async32975.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32975");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32975.
 */
cljs.core.async.__GT_t_cljs$core$async32975 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32975(flag__$1,meta32976){
return (new cljs.core.async.t_cljs$core$async32975(flag__$1,meta32976));
});

}

return (new cljs.core.async.t_cljs$core$async32975(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32978 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32978 = (function (flag,cb,meta32979){
this.flag = flag;
this.cb = cb;
this.meta32979 = meta32979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32980,meta32979__$1){
var self__ = this;
var _32980__$1 = this;
return (new cljs.core.async.t_cljs$core$async32978(self__.flag,self__.cb,meta32979__$1));
}));

(cljs.core.async.t_cljs$core$async32978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32980){
var self__ = this;
var _32980__$1 = this;
return self__.meta32979;
}));

(cljs.core.async.t_cljs$core$async32978.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32978.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async32978.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async32978.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async32978.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32979","meta32979",-1582179173,null)], null);
}));

(cljs.core.async.t_cljs$core$async32978.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32978");

(cljs.core.async.t_cljs$core$async32978.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async32978");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32978.
 */
cljs.core.async.__GT_t_cljs$core$async32978 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32978(flag__$1,cb__$1,meta32979){
return (new cljs.core.async.t_cljs$core$async32978(flag__$1,cb__$1,meta32979));
});

}

return (new cljs.core.async.t_cljs$core$async32978(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32983_SHARP_){
var G__32985 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32983_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32985) : fret.call(null,G__32985));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32984_SHARP_){
var G__32986 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32984_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__32986) : fret.call(null,G__32986));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35159 = (i + (1));
i = G__35159;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
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
var args__4870__auto__ = [];
var len__4864__auto___35161 = arguments.length;
var i__4865__auto___35162 = (0);
while(true){
if((i__4865__auto___35162 < len__4864__auto___35161)){
args__4870__auto__.push((arguments[i__4865__auto___35162]));

var G__35163 = (i__4865__auto___35162 + (1));
i__4865__auto___35162 = G__35163;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32989){
var map__32990 = p__32989;
var map__32990__$1 = cljs.core.__destructure_map(map__32990);
var opts = map__32990__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32987){
var G__32988 = cljs.core.first(seq32987);
var seq32987__$1 = cljs.core.next(seq32987);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32988,seq32987__$1);
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
var G__32996 = arguments.length;
switch (G__32996) {
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
var c__32867__auto___35167 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32868__auto__ = (function (){var switch__32679__auto__ = (function (state_33032){
var state_val_33033 = (state_33032[(1)]);
if((state_val_33033 === (7))){
var inst_33028 = (state_33032[(2)]);
var state_33032__$1 = state_33032;
var statearr_33038_35172 = state_33032__$1;
(statearr_33038_35172[(2)] = inst_33028);

(statearr_33038_35172[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33033 === (1))){
var state_33032__$1 = state_33032;
var statearr_33039_35174 = state_33032__$1;
(statearr_33039_35174[(2)] = null);

(statearr_33039_35174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33033 === (4))){
var inst_33009 = (state_33032[(7)]);
var inst_33009__$1 = (state_33032[(2)]);
var inst_33011 = (inst_33009__$1 == null);
var state_33032__$1 = (function (){var statearr_33040 = state_33032;
(statearr_33040[(7)] = inst_33009__$1);

return statearr_33040;
})();
if(cljs.core.truth_(inst_33011)){
var statearr_33041_35175 = state_33032__$1;
(statearr_33041_35175[(1)] = (5));

} else {
var statearr_33042_35176 = state_33032__$1;
(statearr_33042_35176[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33033 === (13))){
var state_33032__$1 = state_33032;
var statearr_33043_35177 = state_33032__$1;
(statearr_33043_35177[(2)] = null);

(statearr_33043_35177[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33033 === (6))){
var inst_33009 = (state_33032[(7)]);
var state_33032__$1 = state_33032;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33032__$1,(11),to,inst_33009);
} else {
if((state_val_33033 === (3))){
var inst_33030 = (state_33032[(2)]);
var state_33032__$1 = state_33032;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33032__$1,inst_33030);
} else {
if((state_val_33033 === (12))){
var state_33032__$1 = state_33032;
var statearr_33044_35178 = state_33032__$1;
(statearr_33044_35178[(2)] = null);

(statearr_33044_35178[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33033 === (2))){
var state_33032__$1 = state_33032;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33032__$1,(4),from);
} else {
if((state_val_33033 === (11))){
var inst_33021 = (state_33032[(2)]);
var state_33032__$1 = state_33032;
if(cljs.core.truth_(inst_33021)){
var statearr_33045_35180 = state_33032__$1;
(statearr_33045_35180[(1)] = (12));

} else {
var statearr_33046_35181 = state_33032__$1;
(statearr_33046_35181[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33033 === (9))){
var state_33032__$1 = state_33032;
var statearr_33047_35183 = state_33032__$1;
(statearr_33047_35183[(2)] = null);

(statearr_33047_35183[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33033 === (5))){
var state_33032__$1 = state_33032;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33048_35184 = state_33032__$1;
(statearr_33048_35184[(1)] = (8));

} else {
var statearr_33049_35185 = state_33032__$1;
(statearr_33049_35185[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33033 === (14))){
var inst_33026 = (state_33032[(2)]);
var state_33032__$1 = state_33032;
var statearr_33050_35186 = state_33032__$1;
(statearr_33050_35186[(2)] = inst_33026);

(statearr_33050_35186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33033 === (10))){
var inst_33018 = (state_33032[(2)]);
var state_33032__$1 = state_33032;
var statearr_33051_35187 = state_33032__$1;
(statearr_33051_35187[(2)] = inst_33018);

(statearr_33051_35187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33033 === (8))){
var inst_33015 = cljs.core.async.close_BANG_(to);
var state_33032__$1 = state_33032;
var statearr_33052_35188 = state_33032__$1;
(statearr_33052_35188[(2)] = inst_33015);

(statearr_33052_35188[(1)] = (10));


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
var cljs$core$async$state_machine__32680__auto__ = null;
var cljs$core$async$state_machine__32680__auto____0 = (function (){
var statearr_33053 = [null,null,null,null,null,null,null,null];
(statearr_33053[(0)] = cljs$core$async$state_machine__32680__auto__);

(statearr_33053[(1)] = (1));

return statearr_33053;
});
var cljs$core$async$state_machine__32680__auto____1 = (function (state_33032){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_33032);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e33054){var ex__32683__auto__ = e33054;
var statearr_33055_35189 = state_33032;
(statearr_33055_35189[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_33032[(4)]))){
var statearr_33056_35191 = state_33032;
(statearr_33056_35191[(1)] = cljs.core.first((state_33032[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35192 = state_33032;
state_33032 = G__35192;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$state_machine__32680__auto__ = function(state_33032){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32680__auto____1.call(this,state_33032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32680__auto____0;
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32680__auto____1;
return cljs$core$async$state_machine__32680__auto__;
})()
})();
var state__32869__auto__ = (function (){var statearr_33057 = f__32868__auto__();
(statearr_33057[(6)] = c__32867__auto___35167);

return statearr_33057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32869__auto__);
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
var process = (function (p__33058){
var vec__33060 = p__33058;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33060,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33060,(1),null);
var job = vec__33060;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__32867__auto___35194 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32868__auto__ = (function (){var switch__32679__auto__ = (function (state_33068){
var state_val_33069 = (state_33068[(1)]);
if((state_val_33069 === (1))){
var state_33068__$1 = state_33068;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33068__$1,(2),res,v);
} else {
if((state_val_33069 === (2))){
var inst_33065 = (state_33068[(2)]);
var inst_33066 = cljs.core.async.close_BANG_(res);
var state_33068__$1 = (function (){var statearr_33070 = state_33068;
(statearr_33070[(7)] = inst_33065);

return statearr_33070;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33068__$1,inst_33066);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____0 = (function (){
var statearr_33071 = [null,null,null,null,null,null,null,null];
(statearr_33071[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__);

(statearr_33071[(1)] = (1));

return statearr_33071;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____1 = (function (state_33068){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_33068);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e33073){var ex__32683__auto__ = e33073;
var statearr_33075_35195 = state_33068;
(statearr_33075_35195[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_33068[(4)]))){
var statearr_33076_35197 = state_33068;
(statearr_33076_35197[(1)] = cljs.core.first((state_33068[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35199 = state_33068;
state_33068 = G__35199;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__ = function(state_33068){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____1.call(this,state_33068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__;
})()
})();
var state__32869__auto__ = (function (){var statearr_33084 = f__32868__auto__();
(statearr_33084[(6)] = c__32867__auto___35194);

return statearr_33084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32869__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33088){
var vec__33089 = p__33088;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33089,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33089,(1),null);
var job = vec__33089;
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
var n__4741__auto___35200 = n;
var __35201 = (0);
while(true){
if((__35201 < n__4741__auto___35200)){
var G__33095_35202 = type;
var G__33095_35203__$1 = (((G__33095_35202 instanceof cljs.core.Keyword))?G__33095_35202.fqn:null);
switch (G__33095_35203__$1) {
case "compute":
var c__32867__auto___35205 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35201,c__32867__auto___35205,G__33095_35202,G__33095_35203__$1,n__4741__auto___35200,jobs,results,process,async){
return (function (){
var f__32868__auto__ = (function (){var switch__32679__auto__ = ((function (__35201,c__32867__auto___35205,G__33095_35202,G__33095_35203__$1,n__4741__auto___35200,jobs,results,process,async){
return (function (state_33111){
var state_val_33112 = (state_33111[(1)]);
if((state_val_33112 === (1))){
var state_33111__$1 = state_33111;
var statearr_33113_35206 = state_33111__$1;
(statearr_33113_35206[(2)] = null);

(statearr_33113_35206[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (2))){
var state_33111__$1 = state_33111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33111__$1,(4),jobs);
} else {
if((state_val_33112 === (3))){
var inst_33109 = (state_33111[(2)]);
var state_33111__$1 = state_33111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33111__$1,inst_33109);
} else {
if((state_val_33112 === (4))){
var inst_33098 = (state_33111[(2)]);
var inst_33099 = process(inst_33098);
var state_33111__$1 = state_33111;
if(cljs.core.truth_(inst_33099)){
var statearr_33114_35207 = state_33111__$1;
(statearr_33114_35207[(1)] = (5));

} else {
var statearr_33115_35208 = state_33111__$1;
(statearr_33115_35208[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (5))){
var state_33111__$1 = state_33111;
var statearr_33116_35209 = state_33111__$1;
(statearr_33116_35209[(2)] = null);

(statearr_33116_35209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (6))){
var state_33111__$1 = state_33111;
var statearr_33118_35210 = state_33111__$1;
(statearr_33118_35210[(2)] = null);

(statearr_33118_35210[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33112 === (7))){
var inst_33107 = (state_33111[(2)]);
var state_33111__$1 = state_33111;
var statearr_33120_35211 = state_33111__$1;
(statearr_33120_35211[(2)] = inst_33107);

(statearr_33120_35211[(1)] = (3));


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
});})(__35201,c__32867__auto___35205,G__33095_35202,G__33095_35203__$1,n__4741__auto___35200,jobs,results,process,async))
;
return ((function (__35201,switch__32679__auto__,c__32867__auto___35205,G__33095_35202,G__33095_35203__$1,n__4741__auto___35200,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____0 = (function (){
var statearr_33121 = [null,null,null,null,null,null,null];
(statearr_33121[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__);

(statearr_33121[(1)] = (1));

return statearr_33121;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____1 = (function (state_33111){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_33111);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e33122){var ex__32683__auto__ = e33122;
var statearr_33123_35214 = state_33111;
(statearr_33123_35214[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_33111[(4)]))){
var statearr_33127_35215 = state_33111;
(statearr_33127_35215[(1)] = cljs.core.first((state_33111[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35216 = state_33111;
state_33111 = G__35216;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__ = function(state_33111){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____1.call(this,state_33111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__;
})()
;})(__35201,switch__32679__auto__,c__32867__auto___35205,G__33095_35202,G__33095_35203__$1,n__4741__auto___35200,jobs,results,process,async))
})();
var state__32869__auto__ = (function (){var statearr_33128 = f__32868__auto__();
(statearr_33128[(6)] = c__32867__auto___35205);

return statearr_33128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32869__auto__);
});})(__35201,c__32867__auto___35205,G__33095_35202,G__33095_35203__$1,n__4741__auto___35200,jobs,results,process,async))
);


break;
case "async":
var c__32867__auto___35217 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35201,c__32867__auto___35217,G__33095_35202,G__33095_35203__$1,n__4741__auto___35200,jobs,results,process,async){
return (function (){
var f__32868__auto__ = (function (){var switch__32679__auto__ = ((function (__35201,c__32867__auto___35217,G__33095_35202,G__33095_35203__$1,n__4741__auto___35200,jobs,results,process,async){
return (function (state_33141){
var state_val_33142 = (state_33141[(1)]);
if((state_val_33142 === (1))){
var state_33141__$1 = state_33141;
var statearr_33143_35218 = state_33141__$1;
(statearr_33143_35218[(2)] = null);

(statearr_33143_35218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33142 === (2))){
var state_33141__$1 = state_33141;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33141__$1,(4),jobs);
} else {
if((state_val_33142 === (3))){
var inst_33139 = (state_33141[(2)]);
var state_33141__$1 = state_33141;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33141__$1,inst_33139);
} else {
if((state_val_33142 === (4))){
var inst_33131 = (state_33141[(2)]);
var inst_33132 = async(inst_33131);
var state_33141__$1 = state_33141;
if(cljs.core.truth_(inst_33132)){
var statearr_33144_35219 = state_33141__$1;
(statearr_33144_35219[(1)] = (5));

} else {
var statearr_33145_35220 = state_33141__$1;
(statearr_33145_35220[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33142 === (5))){
var state_33141__$1 = state_33141;
var statearr_33146_35221 = state_33141__$1;
(statearr_33146_35221[(2)] = null);

(statearr_33146_35221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33142 === (6))){
var state_33141__$1 = state_33141;
var statearr_33147_35222 = state_33141__$1;
(statearr_33147_35222[(2)] = null);

(statearr_33147_35222[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33142 === (7))){
var inst_33137 = (state_33141[(2)]);
var state_33141__$1 = state_33141;
var statearr_33148_35223 = state_33141__$1;
(statearr_33148_35223[(2)] = inst_33137);

(statearr_33148_35223[(1)] = (3));


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
});})(__35201,c__32867__auto___35217,G__33095_35202,G__33095_35203__$1,n__4741__auto___35200,jobs,results,process,async))
;
return ((function (__35201,switch__32679__auto__,c__32867__auto___35217,G__33095_35202,G__33095_35203__$1,n__4741__auto___35200,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____0 = (function (){
var statearr_33149 = [null,null,null,null,null,null,null];
(statearr_33149[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__);

(statearr_33149[(1)] = (1));

return statearr_33149;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____1 = (function (state_33141){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_33141);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e33150){var ex__32683__auto__ = e33150;
var statearr_33151_35224 = state_33141;
(statearr_33151_35224[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_33141[(4)]))){
var statearr_33152_35225 = state_33141;
(statearr_33152_35225[(1)] = cljs.core.first((state_33141[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35228 = state_33141;
state_33141 = G__35228;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__ = function(state_33141){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____1.call(this,state_33141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__;
})()
;})(__35201,switch__32679__auto__,c__32867__auto___35217,G__33095_35202,G__33095_35203__$1,n__4741__auto___35200,jobs,results,process,async))
})();
var state__32869__auto__ = (function (){var statearr_33154 = f__32868__auto__();
(statearr_33154[(6)] = c__32867__auto___35217);

return statearr_33154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32869__auto__);
});})(__35201,c__32867__auto___35217,G__33095_35202,G__33095_35203__$1,n__4741__auto___35200,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33095_35203__$1)].join('')));

}

var G__35236 = (__35201 + (1));
__35201 = G__35236;
continue;
} else {
}
break;
}

var c__32867__auto___35237 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32868__auto__ = (function (){var switch__32679__auto__ = (function (state_33177){
var state_val_33178 = (state_33177[(1)]);
if((state_val_33178 === (7))){
var inst_33173 = (state_33177[(2)]);
var state_33177__$1 = state_33177;
var statearr_33180_35241 = state_33177__$1;
(statearr_33180_35241[(2)] = inst_33173);

(statearr_33180_35241[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (1))){
var state_33177__$1 = state_33177;
var statearr_33181_35242 = state_33177__$1;
(statearr_33181_35242[(2)] = null);

(statearr_33181_35242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (4))){
var inst_33158 = (state_33177[(7)]);
var inst_33158__$1 = (state_33177[(2)]);
var inst_33159 = (inst_33158__$1 == null);
var state_33177__$1 = (function (){var statearr_33182 = state_33177;
(statearr_33182[(7)] = inst_33158__$1);

return statearr_33182;
})();
if(cljs.core.truth_(inst_33159)){
var statearr_33183_35243 = state_33177__$1;
(statearr_33183_35243[(1)] = (5));

} else {
var statearr_33184_35244 = state_33177__$1;
(statearr_33184_35244[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (6))){
var inst_33158 = (state_33177[(7)]);
var inst_33163 = (state_33177[(8)]);
var inst_33163__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33164 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33165 = [inst_33158,inst_33163__$1];
var inst_33166 = (new cljs.core.PersistentVector(null,2,(5),inst_33164,inst_33165,null));
var state_33177__$1 = (function (){var statearr_33186 = state_33177;
(statearr_33186[(8)] = inst_33163__$1);

return statearr_33186;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33177__$1,(8),jobs,inst_33166);
} else {
if((state_val_33178 === (3))){
var inst_33175 = (state_33177[(2)]);
var state_33177__$1 = state_33177;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33177__$1,inst_33175);
} else {
if((state_val_33178 === (2))){
var state_33177__$1 = state_33177;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33177__$1,(4),from);
} else {
if((state_val_33178 === (9))){
var inst_33170 = (state_33177[(2)]);
var state_33177__$1 = (function (){var statearr_33210 = state_33177;
(statearr_33210[(9)] = inst_33170);

return statearr_33210;
})();
var statearr_33211_35245 = state_33177__$1;
(statearr_33211_35245[(2)] = null);

(statearr_33211_35245[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (5))){
var inst_33161 = cljs.core.async.close_BANG_(jobs);
var state_33177__$1 = state_33177;
var statearr_33212_35246 = state_33177__$1;
(statearr_33212_35246[(2)] = inst_33161);

(statearr_33212_35246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (8))){
var inst_33163 = (state_33177[(8)]);
var inst_33168 = (state_33177[(2)]);
var state_33177__$1 = (function (){var statearr_33213 = state_33177;
(statearr_33213[(10)] = inst_33168);

return statearr_33213;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33177__$1,(9),results,inst_33163);
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
var cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____0 = (function (){
var statearr_33215 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33215[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__);

(statearr_33215[(1)] = (1));

return statearr_33215;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____1 = (function (state_33177){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_33177);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e33218){var ex__32683__auto__ = e33218;
var statearr_33219_35251 = state_33177;
(statearr_33219_35251[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_33177[(4)]))){
var statearr_33220_35252 = state_33177;
(statearr_33220_35252[(1)] = cljs.core.first((state_33177[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35253 = state_33177;
state_33177 = G__35253;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__ = function(state_33177){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____1.call(this,state_33177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__;
})()
})();
var state__32869__auto__ = (function (){var statearr_33221 = f__32868__auto__();
(statearr_33221[(6)] = c__32867__auto___35237);

return statearr_33221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32869__auto__);
}));


var c__32867__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32868__auto__ = (function (){var switch__32679__auto__ = (function (state_33280){
var state_val_33281 = (state_33280[(1)]);
if((state_val_33281 === (7))){
var inst_33276 = (state_33280[(2)]);
var state_33280__$1 = state_33280;
var statearr_33303_35254 = state_33280__$1;
(statearr_33303_35254[(2)] = inst_33276);

(statearr_33303_35254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (20))){
var state_33280__$1 = state_33280;
var statearr_33304_35255 = state_33280__$1;
(statearr_33304_35255[(2)] = null);

(statearr_33304_35255[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (1))){
var state_33280__$1 = state_33280;
var statearr_33314_35256 = state_33280__$1;
(statearr_33314_35256[(2)] = null);

(statearr_33314_35256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (4))){
var inst_33224 = (state_33280[(7)]);
var inst_33224__$1 = (state_33280[(2)]);
var inst_33229 = (inst_33224__$1 == null);
var state_33280__$1 = (function (){var statearr_33327 = state_33280;
(statearr_33327[(7)] = inst_33224__$1);

return statearr_33327;
})();
if(cljs.core.truth_(inst_33229)){
var statearr_33328_35257 = state_33280__$1;
(statearr_33328_35257[(1)] = (5));

} else {
var statearr_33329_35258 = state_33280__$1;
(statearr_33329_35258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (15))){
var inst_33258 = (state_33280[(8)]);
var state_33280__$1 = state_33280;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33280__$1,(18),to,inst_33258);
} else {
if((state_val_33281 === (21))){
var inst_33271 = (state_33280[(2)]);
var state_33280__$1 = state_33280;
var statearr_33331_35259 = state_33280__$1;
(statearr_33331_35259[(2)] = inst_33271);

(statearr_33331_35259[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (13))){
var inst_33273 = (state_33280[(2)]);
var state_33280__$1 = (function (){var statearr_33332 = state_33280;
(statearr_33332[(9)] = inst_33273);

return statearr_33332;
})();
var statearr_33333_35260 = state_33280__$1;
(statearr_33333_35260[(2)] = null);

(statearr_33333_35260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (6))){
var inst_33224 = (state_33280[(7)]);
var state_33280__$1 = state_33280;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33280__$1,(11),inst_33224);
} else {
if((state_val_33281 === (17))){
var inst_33266 = (state_33280[(2)]);
var state_33280__$1 = state_33280;
if(cljs.core.truth_(inst_33266)){
var statearr_33334_35261 = state_33280__$1;
(statearr_33334_35261[(1)] = (19));

} else {
var statearr_33335_35262 = state_33280__$1;
(statearr_33335_35262[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (3))){
var inst_33278 = (state_33280[(2)]);
var state_33280__$1 = state_33280;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33280__$1,inst_33278);
} else {
if((state_val_33281 === (12))){
var inst_33246 = (state_33280[(10)]);
var state_33280__$1 = state_33280;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33280__$1,(14),inst_33246);
} else {
if((state_val_33281 === (2))){
var state_33280__$1 = state_33280;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33280__$1,(4),results);
} else {
if((state_val_33281 === (19))){
var state_33280__$1 = state_33280;
var statearr_33349_35263 = state_33280__$1;
(statearr_33349_35263[(2)] = null);

(statearr_33349_35263[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (11))){
var inst_33246 = (state_33280[(2)]);
var state_33280__$1 = (function (){var statearr_33350 = state_33280;
(statearr_33350[(10)] = inst_33246);

return statearr_33350;
})();
var statearr_33351_35264 = state_33280__$1;
(statearr_33351_35264[(2)] = null);

(statearr_33351_35264[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (9))){
var state_33280__$1 = state_33280;
var statearr_33353_35265 = state_33280__$1;
(statearr_33353_35265[(2)] = null);

(statearr_33353_35265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (5))){
var state_33280__$1 = state_33280;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33354_35266 = state_33280__$1;
(statearr_33354_35266[(1)] = (8));

} else {
var statearr_33355_35267 = state_33280__$1;
(statearr_33355_35267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (14))){
var inst_33258 = (state_33280[(8)]);
var inst_33260 = (state_33280[(11)]);
var inst_33258__$1 = (state_33280[(2)]);
var inst_33259 = (inst_33258__$1 == null);
var inst_33260__$1 = cljs.core.not(inst_33259);
var state_33280__$1 = (function (){var statearr_33356 = state_33280;
(statearr_33356[(8)] = inst_33258__$1);

(statearr_33356[(11)] = inst_33260__$1);

return statearr_33356;
})();
if(inst_33260__$1){
var statearr_33357_35268 = state_33280__$1;
(statearr_33357_35268[(1)] = (15));

} else {
var statearr_33358_35269 = state_33280__$1;
(statearr_33358_35269[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (16))){
var inst_33260 = (state_33280[(11)]);
var state_33280__$1 = state_33280;
var statearr_33359_35270 = state_33280__$1;
(statearr_33359_35270[(2)] = inst_33260);

(statearr_33359_35270[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (10))){
var inst_33241 = (state_33280[(2)]);
var state_33280__$1 = state_33280;
var statearr_33360_35271 = state_33280__$1;
(statearr_33360_35271[(2)] = inst_33241);

(statearr_33360_35271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (18))){
var inst_33263 = (state_33280[(2)]);
var state_33280__$1 = state_33280;
var statearr_33361_35273 = state_33280__$1;
(statearr_33361_35273[(2)] = inst_33263);

(statearr_33361_35273[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33281 === (8))){
var inst_33237 = cljs.core.async.close_BANG_(to);
var state_33280__$1 = state_33280;
var statearr_33362_35275 = state_33280__$1;
(statearr_33362_35275[(2)] = inst_33237);

(statearr_33362_35275[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____0 = (function (){
var statearr_33363 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33363[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__);

(statearr_33363[(1)] = (1));

return statearr_33363;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____1 = (function (state_33280){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_33280);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e33364){var ex__32683__auto__ = e33364;
var statearr_33365_35276 = state_33280;
(statearr_33365_35276[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_33280[(4)]))){
var statearr_33366_35277 = state_33280;
(statearr_33366_35277[(1)] = cljs.core.first((state_33280[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35279 = state_33280;
state_33280 = G__35279;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__ = function(state_33280){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____1.call(this,state_33280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32680__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32680__auto__;
})()
})();
var state__32869__auto__ = (function (){var statearr_33367 = f__32868__auto__();
(statearr_33367[(6)] = c__32867__auto__);

return statearr_33367;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32869__auto__);
}));

return c__32867__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33369 = arguments.length;
switch (G__33369) {
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
var G__33371 = arguments.length;
switch (G__33371) {
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
var G__33378 = arguments.length;
switch (G__33378) {
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
var c__32867__auto___35293 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32868__auto__ = (function (){var switch__32679__auto__ = (function (state_33411){
var state_val_33412 = (state_33411[(1)]);
if((state_val_33412 === (7))){
var inst_33406 = (state_33411[(2)]);
var state_33411__$1 = state_33411;
var statearr_33421_35298 = state_33411__$1;
(statearr_33421_35298[(2)] = inst_33406);

(statearr_33421_35298[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33412 === (1))){
var state_33411__$1 = state_33411;
var statearr_33422_35300 = state_33411__$1;
(statearr_33422_35300[(2)] = null);

(statearr_33422_35300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33412 === (4))){
var inst_33386 = (state_33411[(7)]);
var inst_33386__$1 = (state_33411[(2)]);
var inst_33387 = (inst_33386__$1 == null);
var state_33411__$1 = (function (){var statearr_33423 = state_33411;
(statearr_33423[(7)] = inst_33386__$1);

return statearr_33423;
})();
if(cljs.core.truth_(inst_33387)){
var statearr_33424_35301 = state_33411__$1;
(statearr_33424_35301[(1)] = (5));

} else {
var statearr_33425_35302 = state_33411__$1;
(statearr_33425_35302[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33412 === (13))){
var state_33411__$1 = state_33411;
var statearr_33426_35303 = state_33411__$1;
(statearr_33426_35303[(2)] = null);

(statearr_33426_35303[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33412 === (6))){
var inst_33386 = (state_33411[(7)]);
var inst_33392 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33386) : p.call(null,inst_33386));
var state_33411__$1 = state_33411;
if(cljs.core.truth_(inst_33392)){
var statearr_33427_35307 = state_33411__$1;
(statearr_33427_35307[(1)] = (9));

} else {
var statearr_33428_35308 = state_33411__$1;
(statearr_33428_35308[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33412 === (3))){
var inst_33409 = (state_33411[(2)]);
var state_33411__$1 = state_33411;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33411__$1,inst_33409);
} else {
if((state_val_33412 === (12))){
var state_33411__$1 = state_33411;
var statearr_33429_35311 = state_33411__$1;
(statearr_33429_35311[(2)] = null);

(statearr_33429_35311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33412 === (2))){
var state_33411__$1 = state_33411;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33411__$1,(4),ch);
} else {
if((state_val_33412 === (11))){
var inst_33386 = (state_33411[(7)]);
var inst_33396 = (state_33411[(2)]);
var state_33411__$1 = state_33411;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33411__$1,(8),inst_33396,inst_33386);
} else {
if((state_val_33412 === (9))){
var state_33411__$1 = state_33411;
var statearr_33430_35312 = state_33411__$1;
(statearr_33430_35312[(2)] = tc);

(statearr_33430_35312[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33412 === (5))){
var inst_33389 = cljs.core.async.close_BANG_(tc);
var inst_33390 = cljs.core.async.close_BANG_(fc);
var state_33411__$1 = (function (){var statearr_33431 = state_33411;
(statearr_33431[(8)] = inst_33389);

return statearr_33431;
})();
var statearr_33432_35313 = state_33411__$1;
(statearr_33432_35313[(2)] = inst_33390);

(statearr_33432_35313[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33412 === (14))){
var inst_33404 = (state_33411[(2)]);
var state_33411__$1 = state_33411;
var statearr_33433_35317 = state_33411__$1;
(statearr_33433_35317[(2)] = inst_33404);

(statearr_33433_35317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33412 === (10))){
var state_33411__$1 = state_33411;
var statearr_33434_35318 = state_33411__$1;
(statearr_33434_35318[(2)] = fc);

(statearr_33434_35318[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33412 === (8))){
var inst_33398 = (state_33411[(2)]);
var state_33411__$1 = state_33411;
if(cljs.core.truth_(inst_33398)){
var statearr_33435_35319 = state_33411__$1;
(statearr_33435_35319[(1)] = (12));

} else {
var statearr_33436_35320 = state_33411__$1;
(statearr_33436_35320[(1)] = (13));

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
var cljs$core$async$state_machine__32680__auto__ = null;
var cljs$core$async$state_machine__32680__auto____0 = (function (){
var statearr_33437 = [null,null,null,null,null,null,null,null,null];
(statearr_33437[(0)] = cljs$core$async$state_machine__32680__auto__);

(statearr_33437[(1)] = (1));

return statearr_33437;
});
var cljs$core$async$state_machine__32680__auto____1 = (function (state_33411){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_33411);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e33438){var ex__32683__auto__ = e33438;
var statearr_33439_35321 = state_33411;
(statearr_33439_35321[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_33411[(4)]))){
var statearr_33440_35322 = state_33411;
(statearr_33440_35322[(1)] = cljs.core.first((state_33411[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35323 = state_33411;
state_33411 = G__35323;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$state_machine__32680__auto__ = function(state_33411){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32680__auto____1.call(this,state_33411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32680__auto____0;
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32680__auto____1;
return cljs$core$async$state_machine__32680__auto__;
})()
})();
var state__32869__auto__ = (function (){var statearr_33441 = f__32868__auto__();
(statearr_33441[(6)] = c__32867__auto___35293);

return statearr_33441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32869__auto__);
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
var c__32867__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32868__auto__ = (function (){var switch__32679__auto__ = (function (state_33469){
var state_val_33470 = (state_33469[(1)]);
if((state_val_33470 === (7))){
var inst_33465 = (state_33469[(2)]);
var state_33469__$1 = state_33469;
var statearr_33471_35331 = state_33469__$1;
(statearr_33471_35331[(2)] = inst_33465);

(statearr_33471_35331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33470 === (1))){
var inst_33446 = init;
var inst_33448 = inst_33446;
var state_33469__$1 = (function (){var statearr_33472 = state_33469;
(statearr_33472[(7)] = inst_33448);

return statearr_33472;
})();
var statearr_33473_35332 = state_33469__$1;
(statearr_33473_35332[(2)] = null);

(statearr_33473_35332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33470 === (4))){
var inst_33452 = (state_33469[(8)]);
var inst_33452__$1 = (state_33469[(2)]);
var inst_33453 = (inst_33452__$1 == null);
var state_33469__$1 = (function (){var statearr_33476 = state_33469;
(statearr_33476[(8)] = inst_33452__$1);

return statearr_33476;
})();
if(cljs.core.truth_(inst_33453)){
var statearr_33477_35333 = state_33469__$1;
(statearr_33477_35333[(1)] = (5));

} else {
var statearr_33478_35334 = state_33469__$1;
(statearr_33478_35334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33470 === (6))){
var inst_33448 = (state_33469[(7)]);
var inst_33456 = (state_33469[(9)]);
var inst_33452 = (state_33469[(8)]);
var inst_33456__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33448,inst_33452) : f.call(null,inst_33448,inst_33452));
var inst_33457 = cljs.core.reduced_QMARK_(inst_33456__$1);
var state_33469__$1 = (function (){var statearr_33479 = state_33469;
(statearr_33479[(9)] = inst_33456__$1);

return statearr_33479;
})();
if(inst_33457){
var statearr_33480_35335 = state_33469__$1;
(statearr_33480_35335[(1)] = (8));

} else {
var statearr_33481_35336 = state_33469__$1;
(statearr_33481_35336[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33470 === (3))){
var inst_33467 = (state_33469[(2)]);
var state_33469__$1 = state_33469;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33469__$1,inst_33467);
} else {
if((state_val_33470 === (2))){
var state_33469__$1 = state_33469;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33469__$1,(4),ch);
} else {
if((state_val_33470 === (9))){
var inst_33456 = (state_33469[(9)]);
var inst_33448 = inst_33456;
var state_33469__$1 = (function (){var statearr_33484 = state_33469;
(statearr_33484[(7)] = inst_33448);

return statearr_33484;
})();
var statearr_33485_35340 = state_33469__$1;
(statearr_33485_35340[(2)] = null);

(statearr_33485_35340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33470 === (5))){
var inst_33448 = (state_33469[(7)]);
var state_33469__$1 = state_33469;
var statearr_33486_35341 = state_33469__$1;
(statearr_33486_35341[(2)] = inst_33448);

(statearr_33486_35341[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33470 === (10))){
var inst_33463 = (state_33469[(2)]);
var state_33469__$1 = state_33469;
var statearr_33487_35342 = state_33469__$1;
(statearr_33487_35342[(2)] = inst_33463);

(statearr_33487_35342[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33470 === (8))){
var inst_33456 = (state_33469[(9)]);
var inst_33459 = cljs.core.deref(inst_33456);
var state_33469__$1 = state_33469;
var statearr_33488_35346 = state_33469__$1;
(statearr_33488_35346[(2)] = inst_33459);

(statearr_33488_35346[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__32680__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32680__auto____0 = (function (){
var statearr_33489 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33489[(0)] = cljs$core$async$reduce_$_state_machine__32680__auto__);

(statearr_33489[(1)] = (1));

return statearr_33489;
});
var cljs$core$async$reduce_$_state_machine__32680__auto____1 = (function (state_33469){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_33469);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e33490){var ex__32683__auto__ = e33490;
var statearr_33491_35350 = state_33469;
(statearr_33491_35350[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_33469[(4)]))){
var statearr_33492_35351 = state_33469;
(statearr_33492_35351[(1)] = cljs.core.first((state_33469[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35352 = state_33469;
state_33469 = G__35352;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32680__auto__ = function(state_33469){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32680__auto____1.call(this,state_33469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32680__auto____0;
cljs$core$async$reduce_$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32680__auto____1;
return cljs$core$async$reduce_$_state_machine__32680__auto__;
})()
})();
var state__32869__auto__ = (function (){var statearr_33493 = f__32868__auto__();
(statearr_33493[(6)] = c__32867__auto__);

return statearr_33493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32869__auto__);
}));

return c__32867__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__32867__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32868__auto__ = (function (){var switch__32679__auto__ = (function (state_33503){
var state_val_33504 = (state_33503[(1)]);
if((state_val_33504 === (1))){
var inst_33498 = cljs.core.async.reduce(f__$1,init,ch);
var state_33503__$1 = state_33503;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33503__$1,(2),inst_33498);
} else {
if((state_val_33504 === (2))){
var inst_33500 = (state_33503[(2)]);
var inst_33501 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33500) : f__$1.call(null,inst_33500));
var state_33503__$1 = state_33503;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33503__$1,inst_33501);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32680__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32680__auto____0 = (function (){
var statearr_33505 = [null,null,null,null,null,null,null];
(statearr_33505[(0)] = cljs$core$async$transduce_$_state_machine__32680__auto__);

(statearr_33505[(1)] = (1));

return statearr_33505;
});
var cljs$core$async$transduce_$_state_machine__32680__auto____1 = (function (state_33503){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_33503);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e33506){var ex__32683__auto__ = e33506;
var statearr_33507_35356 = state_33503;
(statearr_33507_35356[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_33503[(4)]))){
var statearr_33508_35357 = state_33503;
(statearr_33508_35357[(1)] = cljs.core.first((state_33503[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35358 = state_33503;
state_33503 = G__35358;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32680__auto__ = function(state_33503){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32680__auto____1.call(this,state_33503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32680__auto____0;
cljs$core$async$transduce_$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32680__auto____1;
return cljs$core$async$transduce_$_state_machine__32680__auto__;
})()
})();
var state__32869__auto__ = (function (){var statearr_33510 = f__32868__auto__();
(statearr_33510[(6)] = c__32867__auto__);

return statearr_33510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32869__auto__);
}));

return c__32867__auto__;
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
var G__33518 = arguments.length;
switch (G__33518) {
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
var c__32867__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32868__auto__ = (function (){var switch__32679__auto__ = (function (state_33543){
var state_val_33544 = (state_33543[(1)]);
if((state_val_33544 === (7))){
var inst_33525 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
var statearr_33545_35373 = state_33543__$1;
(statearr_33545_35373[(2)] = inst_33525);

(statearr_33545_35373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (1))){
var inst_33519 = cljs.core.seq(coll);
var inst_33520 = inst_33519;
var state_33543__$1 = (function (){var statearr_33546 = state_33543;
(statearr_33546[(7)] = inst_33520);

return statearr_33546;
})();
var statearr_33547_35374 = state_33543__$1;
(statearr_33547_35374[(2)] = null);

(statearr_33547_35374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (4))){
var inst_33520 = (state_33543[(7)]);
var inst_33523 = cljs.core.first(inst_33520);
var state_33543__$1 = state_33543;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33543__$1,(7),ch,inst_33523);
} else {
if((state_val_33544 === (13))){
var inst_33537 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
var statearr_33550_35375 = state_33543__$1;
(statearr_33550_35375[(2)] = inst_33537);

(statearr_33550_35375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (6))){
var inst_33528 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
if(cljs.core.truth_(inst_33528)){
var statearr_33553_35377 = state_33543__$1;
(statearr_33553_35377[(1)] = (8));

} else {
var statearr_33554_35378 = state_33543__$1;
(statearr_33554_35378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (3))){
var inst_33541 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33543__$1,inst_33541);
} else {
if((state_val_33544 === (12))){
var state_33543__$1 = state_33543;
var statearr_33555_35379 = state_33543__$1;
(statearr_33555_35379[(2)] = null);

(statearr_33555_35379[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (2))){
var inst_33520 = (state_33543[(7)]);
var state_33543__$1 = state_33543;
if(cljs.core.truth_(inst_33520)){
var statearr_33560_35384 = state_33543__$1;
(statearr_33560_35384[(1)] = (4));

} else {
var statearr_33561_35388 = state_33543__$1;
(statearr_33561_35388[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (11))){
var inst_33534 = cljs.core.async.close_BANG_(ch);
var state_33543__$1 = state_33543;
var statearr_33562_35389 = state_33543__$1;
(statearr_33562_35389[(2)] = inst_33534);

(statearr_33562_35389[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (9))){
var state_33543__$1 = state_33543;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33563_35390 = state_33543__$1;
(statearr_33563_35390[(1)] = (11));

} else {
var statearr_33564_35391 = state_33543__$1;
(statearr_33564_35391[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (5))){
var inst_33520 = (state_33543[(7)]);
var state_33543__$1 = state_33543;
var statearr_33565_35395 = state_33543__$1;
(statearr_33565_35395[(2)] = inst_33520);

(statearr_33565_35395[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (10))){
var inst_33539 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
var statearr_33566_35396 = state_33543__$1;
(statearr_33566_35396[(2)] = inst_33539);

(statearr_33566_35396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (8))){
var inst_33520 = (state_33543[(7)]);
var inst_33530 = cljs.core.next(inst_33520);
var inst_33520__$1 = inst_33530;
var state_33543__$1 = (function (){var statearr_33567 = state_33543;
(statearr_33567[(7)] = inst_33520__$1);

return statearr_33567;
})();
var statearr_33568_35397 = state_33543__$1;
(statearr_33568_35397[(2)] = null);

(statearr_33568_35397[(1)] = (2));


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
var cljs$core$async$state_machine__32680__auto__ = null;
var cljs$core$async$state_machine__32680__auto____0 = (function (){
var statearr_33569 = [null,null,null,null,null,null,null,null];
(statearr_33569[(0)] = cljs$core$async$state_machine__32680__auto__);

(statearr_33569[(1)] = (1));

return statearr_33569;
});
var cljs$core$async$state_machine__32680__auto____1 = (function (state_33543){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_33543);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e33576){var ex__32683__auto__ = e33576;
var statearr_33577_35398 = state_33543;
(statearr_33577_35398[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_33543[(4)]))){
var statearr_33578_35399 = state_33543;
(statearr_33578_35399[(1)] = cljs.core.first((state_33543[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35400 = state_33543;
state_33543 = G__35400;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$state_machine__32680__auto__ = function(state_33543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32680__auto____1.call(this,state_33543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32680__auto____0;
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32680__auto____1;
return cljs$core$async$state_machine__32680__auto__;
})()
})();
var state__32869__auto__ = (function (){var statearr_33580 = f__32868__auto__();
(statearr_33580[(6)] = c__32867__auto__);

return statearr_33580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32869__auto__);
}));

return c__32867__auto__;
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
var G__33583 = arguments.length;
switch (G__33583) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_35412 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35412(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35416 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35416(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35421 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35421(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35422 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35422(m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33612 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33612 = (function (ch,cs,meta33613){
this.ch = ch;
this.cs = cs;
this.meta33613 = meta33613;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33614,meta33613__$1){
var self__ = this;
var _33614__$1 = this;
return (new cljs.core.async.t_cljs$core$async33612(self__.ch,self__.cs,meta33613__$1));
}));

(cljs.core.async.t_cljs$core$async33612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33614){
var self__ = this;
var _33614__$1 = this;
return self__.meta33613;
}));

(cljs.core.async.t_cljs$core$async33612.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33612.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33612.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33612.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33612.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33612.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33612.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33613","meta33613",-1189378806,null)], null);
}));

(cljs.core.async.t_cljs$core$async33612.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33612.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33612");

(cljs.core.async.t_cljs$core$async33612.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33612");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33612.
 */
cljs.core.async.__GT_t_cljs$core$async33612 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33612(ch__$1,cs__$1,meta33613){
return (new cljs.core.async.t_cljs$core$async33612(ch__$1,cs__$1,meta33613));
});

}

return (new cljs.core.async.t_cljs$core$async33612(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__32867__auto___35431 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32868__auto__ = (function (){var switch__32679__auto__ = (function (state_33772){
var state_val_33773 = (state_33772[(1)]);
if((state_val_33773 === (7))){
var inst_33768 = (state_33772[(2)]);
var state_33772__$1 = state_33772;
var statearr_33774_35432 = state_33772__$1;
(statearr_33774_35432[(2)] = inst_33768);

(statearr_33774_35432[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (20))){
var inst_33671 = (state_33772[(7)]);
var inst_33684 = cljs.core.first(inst_33671);
var inst_33685 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33684,(0),null);
var inst_33686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33684,(1),null);
var state_33772__$1 = (function (){var statearr_33775 = state_33772;
(statearr_33775[(8)] = inst_33685);

return statearr_33775;
})();
if(cljs.core.truth_(inst_33686)){
var statearr_33777_35434 = state_33772__$1;
(statearr_33777_35434[(1)] = (22));

} else {
var statearr_33778_35435 = state_33772__$1;
(statearr_33778_35435[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (27))){
var inst_33716 = (state_33772[(9)]);
var inst_33714 = (state_33772[(10)]);
var inst_33721 = (state_33772[(11)]);
var inst_33639 = (state_33772[(12)]);
var inst_33721__$1 = cljs.core._nth(inst_33714,inst_33716);
var inst_33722 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33721__$1,inst_33639,done);
var state_33772__$1 = (function (){var statearr_33779 = state_33772;
(statearr_33779[(11)] = inst_33721__$1);

return statearr_33779;
})();
if(cljs.core.truth_(inst_33722)){
var statearr_33780_35437 = state_33772__$1;
(statearr_33780_35437[(1)] = (30));

} else {
var statearr_33781_35438 = state_33772__$1;
(statearr_33781_35438[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (1))){
var state_33772__$1 = state_33772;
var statearr_33782_35439 = state_33772__$1;
(statearr_33782_35439[(2)] = null);

(statearr_33782_35439[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (24))){
var inst_33671 = (state_33772[(7)]);
var inst_33691 = (state_33772[(2)]);
var inst_33692 = cljs.core.next(inst_33671);
var inst_33649 = inst_33692;
var inst_33650 = null;
var inst_33651 = (0);
var inst_33652 = (0);
var state_33772__$1 = (function (){var statearr_33783 = state_33772;
(statearr_33783[(13)] = inst_33691);

(statearr_33783[(14)] = inst_33649);

(statearr_33783[(15)] = inst_33652);

(statearr_33783[(16)] = inst_33650);

(statearr_33783[(17)] = inst_33651);

return statearr_33783;
})();
var statearr_33784_35440 = state_33772__$1;
(statearr_33784_35440[(2)] = null);

(statearr_33784_35440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (39))){
var state_33772__$1 = state_33772;
var statearr_33792_35441 = state_33772__$1;
(statearr_33792_35441[(2)] = null);

(statearr_33792_35441[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (4))){
var inst_33639 = (state_33772[(12)]);
var inst_33639__$1 = (state_33772[(2)]);
var inst_33640 = (inst_33639__$1 == null);
var state_33772__$1 = (function (){var statearr_33793 = state_33772;
(statearr_33793[(12)] = inst_33639__$1);

return statearr_33793;
})();
if(cljs.core.truth_(inst_33640)){
var statearr_33794_35442 = state_33772__$1;
(statearr_33794_35442[(1)] = (5));

} else {
var statearr_33795_35443 = state_33772__$1;
(statearr_33795_35443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (15))){
var inst_33649 = (state_33772[(14)]);
var inst_33652 = (state_33772[(15)]);
var inst_33650 = (state_33772[(16)]);
var inst_33651 = (state_33772[(17)]);
var inst_33667 = (state_33772[(2)]);
var inst_33668 = (inst_33652 + (1));
var tmp33788 = inst_33649;
var tmp33789 = inst_33650;
var tmp33790 = inst_33651;
var inst_33649__$1 = tmp33788;
var inst_33650__$1 = tmp33789;
var inst_33651__$1 = tmp33790;
var inst_33652__$1 = inst_33668;
var state_33772__$1 = (function (){var statearr_33796 = state_33772;
(statearr_33796[(18)] = inst_33667);

(statearr_33796[(14)] = inst_33649__$1);

(statearr_33796[(15)] = inst_33652__$1);

(statearr_33796[(16)] = inst_33650__$1);

(statearr_33796[(17)] = inst_33651__$1);

return statearr_33796;
})();
var statearr_33798_35444 = state_33772__$1;
(statearr_33798_35444[(2)] = null);

(statearr_33798_35444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (21))){
var inst_33695 = (state_33772[(2)]);
var state_33772__$1 = state_33772;
var statearr_33802_35445 = state_33772__$1;
(statearr_33802_35445[(2)] = inst_33695);

(statearr_33802_35445[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (31))){
var inst_33721 = (state_33772[(11)]);
var inst_33725 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33721);
var state_33772__$1 = state_33772;
var statearr_33803_35446 = state_33772__$1;
(statearr_33803_35446[(2)] = inst_33725);

(statearr_33803_35446[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (32))){
var inst_33715 = (state_33772[(19)]);
var inst_33716 = (state_33772[(9)]);
var inst_33714 = (state_33772[(10)]);
var inst_33713 = (state_33772[(20)]);
var inst_33727 = (state_33772[(2)]);
var inst_33728 = (inst_33716 + (1));
var tmp33799 = inst_33715;
var tmp33800 = inst_33714;
var tmp33801 = inst_33713;
var inst_33713__$1 = tmp33801;
var inst_33714__$1 = tmp33800;
var inst_33715__$1 = tmp33799;
var inst_33716__$1 = inst_33728;
var state_33772__$1 = (function (){var statearr_33805 = state_33772;
(statearr_33805[(19)] = inst_33715__$1);

(statearr_33805[(21)] = inst_33727);

(statearr_33805[(9)] = inst_33716__$1);

(statearr_33805[(10)] = inst_33714__$1);

(statearr_33805[(20)] = inst_33713__$1);

return statearr_33805;
})();
var statearr_33806_35447 = state_33772__$1;
(statearr_33806_35447[(2)] = null);

(statearr_33806_35447[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (40))){
var inst_33741 = (state_33772[(22)]);
var inst_33745 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33741);
var state_33772__$1 = state_33772;
var statearr_33807_35448 = state_33772__$1;
(statearr_33807_35448[(2)] = inst_33745);

(statearr_33807_35448[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (33))){
var inst_33731 = (state_33772[(23)]);
var inst_33734 = cljs.core.chunked_seq_QMARK_(inst_33731);
var state_33772__$1 = state_33772;
if(inst_33734){
var statearr_33809_35450 = state_33772__$1;
(statearr_33809_35450[(1)] = (36));

} else {
var statearr_33810_35451 = state_33772__$1;
(statearr_33810_35451[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (13))){
var inst_33661 = (state_33772[(24)]);
var inst_33664 = cljs.core.async.close_BANG_(inst_33661);
var state_33772__$1 = state_33772;
var statearr_33811_35455 = state_33772__$1;
(statearr_33811_35455[(2)] = inst_33664);

(statearr_33811_35455[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (22))){
var inst_33685 = (state_33772[(8)]);
var inst_33688 = cljs.core.async.close_BANG_(inst_33685);
var state_33772__$1 = state_33772;
var statearr_33812_35456 = state_33772__$1;
(statearr_33812_35456[(2)] = inst_33688);

(statearr_33812_35456[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (36))){
var inst_33731 = (state_33772[(23)]);
var inst_33736 = cljs.core.chunk_first(inst_33731);
var inst_33737 = cljs.core.chunk_rest(inst_33731);
var inst_33738 = cljs.core.count(inst_33736);
var inst_33713 = inst_33737;
var inst_33714 = inst_33736;
var inst_33715 = inst_33738;
var inst_33716 = (0);
var state_33772__$1 = (function (){var statearr_33814 = state_33772;
(statearr_33814[(19)] = inst_33715);

(statearr_33814[(9)] = inst_33716);

(statearr_33814[(10)] = inst_33714);

(statearr_33814[(20)] = inst_33713);

return statearr_33814;
})();
var statearr_33815_35457 = state_33772__$1;
(statearr_33815_35457[(2)] = null);

(statearr_33815_35457[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (41))){
var inst_33731 = (state_33772[(23)]);
var inst_33747 = (state_33772[(2)]);
var inst_33748 = cljs.core.next(inst_33731);
var inst_33713 = inst_33748;
var inst_33714 = null;
var inst_33715 = (0);
var inst_33716 = (0);
var state_33772__$1 = (function (){var statearr_33816 = state_33772;
(statearr_33816[(19)] = inst_33715);

(statearr_33816[(9)] = inst_33716);

(statearr_33816[(10)] = inst_33714);

(statearr_33816[(20)] = inst_33713);

(statearr_33816[(25)] = inst_33747);

return statearr_33816;
})();
var statearr_33817_35460 = state_33772__$1;
(statearr_33817_35460[(2)] = null);

(statearr_33817_35460[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (43))){
var state_33772__$1 = state_33772;
var statearr_33818_35465 = state_33772__$1;
(statearr_33818_35465[(2)] = null);

(statearr_33818_35465[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (29))){
var inst_33756 = (state_33772[(2)]);
var state_33772__$1 = state_33772;
var statearr_33819_35466 = state_33772__$1;
(statearr_33819_35466[(2)] = inst_33756);

(statearr_33819_35466[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (44))){
var inst_33765 = (state_33772[(2)]);
var state_33772__$1 = (function (){var statearr_33820 = state_33772;
(statearr_33820[(26)] = inst_33765);

return statearr_33820;
})();
var statearr_33821_35467 = state_33772__$1;
(statearr_33821_35467[(2)] = null);

(statearr_33821_35467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (6))){
var inst_33705 = (state_33772[(27)]);
var inst_33704 = cljs.core.deref(cs);
var inst_33705__$1 = cljs.core.keys(inst_33704);
var inst_33706 = cljs.core.count(inst_33705__$1);
var inst_33707 = cljs.core.reset_BANG_(dctr,inst_33706);
var inst_33712 = cljs.core.seq(inst_33705__$1);
var inst_33713 = inst_33712;
var inst_33714 = null;
var inst_33715 = (0);
var inst_33716 = (0);
var state_33772__$1 = (function (){var statearr_33823 = state_33772;
(statearr_33823[(19)] = inst_33715);

(statearr_33823[(9)] = inst_33716);

(statearr_33823[(10)] = inst_33714);

(statearr_33823[(27)] = inst_33705__$1);

(statearr_33823[(20)] = inst_33713);

(statearr_33823[(28)] = inst_33707);

return statearr_33823;
})();
var statearr_33824_35471 = state_33772__$1;
(statearr_33824_35471[(2)] = null);

(statearr_33824_35471[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (28))){
var inst_33713 = (state_33772[(20)]);
var inst_33731 = (state_33772[(23)]);
var inst_33731__$1 = cljs.core.seq(inst_33713);
var state_33772__$1 = (function (){var statearr_33825 = state_33772;
(statearr_33825[(23)] = inst_33731__$1);

return statearr_33825;
})();
if(inst_33731__$1){
var statearr_33826_35476 = state_33772__$1;
(statearr_33826_35476[(1)] = (33));

} else {
var statearr_33827_35478 = state_33772__$1;
(statearr_33827_35478[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (25))){
var inst_33715 = (state_33772[(19)]);
var inst_33716 = (state_33772[(9)]);
var inst_33718 = (inst_33716 < inst_33715);
var inst_33719 = inst_33718;
var state_33772__$1 = state_33772;
if(cljs.core.truth_(inst_33719)){
var statearr_33828_35489 = state_33772__$1;
(statearr_33828_35489[(1)] = (27));

} else {
var statearr_33829_35490 = state_33772__$1;
(statearr_33829_35490[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (34))){
var state_33772__$1 = state_33772;
var statearr_33830_35497 = state_33772__$1;
(statearr_33830_35497[(2)] = null);

(statearr_33830_35497[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (17))){
var state_33772__$1 = state_33772;
var statearr_33831_35498 = state_33772__$1;
(statearr_33831_35498[(2)] = null);

(statearr_33831_35498[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (3))){
var inst_33770 = (state_33772[(2)]);
var state_33772__$1 = state_33772;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33772__$1,inst_33770);
} else {
if((state_val_33773 === (12))){
var inst_33700 = (state_33772[(2)]);
var state_33772__$1 = state_33772;
var statearr_33832_35499 = state_33772__$1;
(statearr_33832_35499[(2)] = inst_33700);

(statearr_33832_35499[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (2))){
var state_33772__$1 = state_33772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33772__$1,(4),ch);
} else {
if((state_val_33773 === (23))){
var state_33772__$1 = state_33772;
var statearr_33833_35500 = state_33772__$1;
(statearr_33833_35500[(2)] = null);

(statearr_33833_35500[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (35))){
var inst_33754 = (state_33772[(2)]);
var state_33772__$1 = state_33772;
var statearr_33835_35502 = state_33772__$1;
(statearr_33835_35502[(2)] = inst_33754);

(statearr_33835_35502[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (19))){
var inst_33671 = (state_33772[(7)]);
var inst_33676 = cljs.core.chunk_first(inst_33671);
var inst_33677 = cljs.core.chunk_rest(inst_33671);
var inst_33678 = cljs.core.count(inst_33676);
var inst_33649 = inst_33677;
var inst_33650 = inst_33676;
var inst_33651 = inst_33678;
var inst_33652 = (0);
var state_33772__$1 = (function (){var statearr_33836 = state_33772;
(statearr_33836[(14)] = inst_33649);

(statearr_33836[(15)] = inst_33652);

(statearr_33836[(16)] = inst_33650);

(statearr_33836[(17)] = inst_33651);

return statearr_33836;
})();
var statearr_33837_35503 = state_33772__$1;
(statearr_33837_35503[(2)] = null);

(statearr_33837_35503[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (11))){
var inst_33671 = (state_33772[(7)]);
var inst_33649 = (state_33772[(14)]);
var inst_33671__$1 = cljs.core.seq(inst_33649);
var state_33772__$1 = (function (){var statearr_33838 = state_33772;
(statearr_33838[(7)] = inst_33671__$1);

return statearr_33838;
})();
if(inst_33671__$1){
var statearr_33839_35505 = state_33772__$1;
(statearr_33839_35505[(1)] = (16));

} else {
var statearr_33840_35506 = state_33772__$1;
(statearr_33840_35506[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (9))){
var inst_33702 = (state_33772[(2)]);
var state_33772__$1 = state_33772;
var statearr_33841_35507 = state_33772__$1;
(statearr_33841_35507[(2)] = inst_33702);

(statearr_33841_35507[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (5))){
var inst_33647 = cljs.core.deref(cs);
var inst_33648 = cljs.core.seq(inst_33647);
var inst_33649 = inst_33648;
var inst_33650 = null;
var inst_33651 = (0);
var inst_33652 = (0);
var state_33772__$1 = (function (){var statearr_33842 = state_33772;
(statearr_33842[(14)] = inst_33649);

(statearr_33842[(15)] = inst_33652);

(statearr_33842[(16)] = inst_33650);

(statearr_33842[(17)] = inst_33651);

return statearr_33842;
})();
var statearr_33843_35508 = state_33772__$1;
(statearr_33843_35508[(2)] = null);

(statearr_33843_35508[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (14))){
var state_33772__$1 = state_33772;
var statearr_33844_35509 = state_33772__$1;
(statearr_33844_35509[(2)] = null);

(statearr_33844_35509[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (45))){
var inst_33762 = (state_33772[(2)]);
var state_33772__$1 = state_33772;
var statearr_33845_35510 = state_33772__$1;
(statearr_33845_35510[(2)] = inst_33762);

(statearr_33845_35510[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (26))){
var inst_33705 = (state_33772[(27)]);
var inst_33758 = (state_33772[(2)]);
var inst_33759 = cljs.core.seq(inst_33705);
var state_33772__$1 = (function (){var statearr_33847 = state_33772;
(statearr_33847[(29)] = inst_33758);

return statearr_33847;
})();
if(inst_33759){
var statearr_33848_35511 = state_33772__$1;
(statearr_33848_35511[(1)] = (42));

} else {
var statearr_33849_35512 = state_33772__$1;
(statearr_33849_35512[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (16))){
var inst_33671 = (state_33772[(7)]);
var inst_33674 = cljs.core.chunked_seq_QMARK_(inst_33671);
var state_33772__$1 = state_33772;
if(inst_33674){
var statearr_33850_35519 = state_33772__$1;
(statearr_33850_35519[(1)] = (19));

} else {
var statearr_33851_35520 = state_33772__$1;
(statearr_33851_35520[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (38))){
var inst_33751 = (state_33772[(2)]);
var state_33772__$1 = state_33772;
var statearr_33852_35521 = state_33772__$1;
(statearr_33852_35521[(2)] = inst_33751);

(statearr_33852_35521[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (30))){
var state_33772__$1 = state_33772;
var statearr_33853_35522 = state_33772__$1;
(statearr_33853_35522[(2)] = null);

(statearr_33853_35522[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (10))){
var inst_33652 = (state_33772[(15)]);
var inst_33650 = (state_33772[(16)]);
var inst_33660 = cljs.core._nth(inst_33650,inst_33652);
var inst_33661 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33660,(0),null);
var inst_33662 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33660,(1),null);
var state_33772__$1 = (function (){var statearr_33854 = state_33772;
(statearr_33854[(24)] = inst_33661);

return statearr_33854;
})();
if(cljs.core.truth_(inst_33662)){
var statearr_33855_35523 = state_33772__$1;
(statearr_33855_35523[(1)] = (13));

} else {
var statearr_33856_35524 = state_33772__$1;
(statearr_33856_35524[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (18))){
var inst_33698 = (state_33772[(2)]);
var state_33772__$1 = state_33772;
var statearr_33857_35525 = state_33772__$1;
(statearr_33857_35525[(2)] = inst_33698);

(statearr_33857_35525[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (42))){
var state_33772__$1 = state_33772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33772__$1,(45),dchan);
} else {
if((state_val_33773 === (37))){
var inst_33741 = (state_33772[(22)]);
var inst_33731 = (state_33772[(23)]);
var inst_33639 = (state_33772[(12)]);
var inst_33741__$1 = cljs.core.first(inst_33731);
var inst_33742 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33741__$1,inst_33639,done);
var state_33772__$1 = (function (){var statearr_33859 = state_33772;
(statearr_33859[(22)] = inst_33741__$1);

return statearr_33859;
})();
if(cljs.core.truth_(inst_33742)){
var statearr_33860_35526 = state_33772__$1;
(statearr_33860_35526[(1)] = (39));

} else {
var statearr_33861_35527 = state_33772__$1;
(statearr_33861_35527[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33773 === (8))){
var inst_33652 = (state_33772[(15)]);
var inst_33651 = (state_33772[(17)]);
var inst_33654 = (inst_33652 < inst_33651);
var inst_33655 = inst_33654;
var state_33772__$1 = state_33772;
if(cljs.core.truth_(inst_33655)){
var statearr_33862_35528 = state_33772__$1;
(statearr_33862_35528[(1)] = (10));

} else {
var statearr_33863_35529 = state_33772__$1;
(statearr_33863_35529[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__32680__auto__ = null;
var cljs$core$async$mult_$_state_machine__32680__auto____0 = (function (){
var statearr_33864 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33864[(0)] = cljs$core$async$mult_$_state_machine__32680__auto__);

(statearr_33864[(1)] = (1));

return statearr_33864;
});
var cljs$core$async$mult_$_state_machine__32680__auto____1 = (function (state_33772){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_33772);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e33865){var ex__32683__auto__ = e33865;
var statearr_33866_35530 = state_33772;
(statearr_33866_35530[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_33772[(4)]))){
var statearr_33867_35537 = state_33772;
(statearr_33867_35537[(1)] = cljs.core.first((state_33772[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35538 = state_33772;
state_33772 = G__35538;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32680__auto__ = function(state_33772){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32680__auto____1.call(this,state_33772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32680__auto____0;
cljs$core$async$mult_$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32680__auto____1;
return cljs$core$async$mult_$_state_machine__32680__auto__;
})()
})();
var state__32869__auto__ = (function (){var statearr_33869 = f__32868__auto__();
(statearr_33869[(6)] = c__32867__auto___35431);

return statearr_33869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32869__auto__);
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
var G__33871 = arguments.length;
switch (G__33871) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_35542 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35542(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35544 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35544(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35545 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35545(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35552 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35552(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35553 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35553(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___35563 = arguments.length;
var i__4865__auto___35564 = (0);
while(true){
if((i__4865__auto___35564 < len__4864__auto___35563)){
args__4870__auto__.push((arguments[i__4865__auto___35564]));

var G__35565 = (i__4865__auto___35564 + (1));
i__4865__auto___35564 = G__35565;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33881){
var map__33882 = p__33881;
var map__33882__$1 = cljs.core.__destructure_map(map__33882);
var opts = map__33882__$1;
var statearr_33883_35566 = state;
(statearr_33883_35566[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_33885_35568 = state;
(statearr_33885_35568[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_33886_35569 = state;
(statearr_33886_35569[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33877){
var G__33878 = cljs.core.first(seq33877);
var seq33877__$1 = cljs.core.next(seq33877);
var G__33879 = cljs.core.first(seq33877__$1);
var seq33877__$2 = cljs.core.next(seq33877__$1);
var G__33880 = cljs.core.first(seq33877__$2);
var seq33877__$3 = cljs.core.next(seq33877__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33878,G__33879,G__33880,seq33877__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33889 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33889 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33890){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33890 = meta33890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33891,meta33890__$1){
var self__ = this;
var _33891__$1 = this;
return (new cljs.core.async.t_cljs$core$async33889(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33890__$1));
}));

(cljs.core.async.t_cljs$core$async33889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33891){
var self__ = this;
var _33891__$1 = this;
return self__.meta33890;
}));

(cljs.core.async.t_cljs$core$async33889.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33889.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async33889.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33889.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33889.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33889.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33889.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33889.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async33889.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33890","meta33890",1862490438,null)], null);
}));

(cljs.core.async.t_cljs$core$async33889.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33889");

(cljs.core.async.t_cljs$core$async33889.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async33889");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33889.
 */
cljs.core.async.__GT_t_cljs$core$async33889 = (function cljs$core$async$mix_$___GT_t_cljs$core$async33889(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33890){
return (new cljs.core.async.t_cljs$core$async33889(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33890));
});

}

return (new cljs.core.async.t_cljs$core$async33889(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32867__auto___35577 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32868__auto__ = (function (){var switch__32679__auto__ = (function (state_33963){
var state_val_33964 = (state_33963[(1)]);
if((state_val_33964 === (7))){
var inst_33922 = (state_33963[(2)]);
var state_33963__$1 = state_33963;
if(cljs.core.truth_(inst_33922)){
var statearr_33965_35578 = state_33963__$1;
(statearr_33965_35578[(1)] = (8));

} else {
var statearr_33966_35579 = state_33963__$1;
(statearr_33966_35579[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33964 === (20))){
var inst_33915 = (state_33963[(7)]);
var state_33963__$1 = state_33963;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33963__$1,(23),out,inst_33915);
} else {
if((state_val_33964 === (1))){
var inst_33897 = calc_state();
var inst_33898 = cljs.core.__destructure_map(inst_33897);
var inst_33899 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33898,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33898,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33898,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33903 = inst_33897;
var state_33963__$1 = (function (){var statearr_33968 = state_33963;
(statearr_33968[(8)] = inst_33901);

(statearr_33968[(9)] = inst_33899);

(statearr_33968[(10)] = inst_33902);

(statearr_33968[(11)] = inst_33903);

return statearr_33968;
})();
var statearr_33969_35581 = state_33963__$1;
(statearr_33969_35581[(2)] = null);

(statearr_33969_35581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33964 === (24))){
var inst_33906 = (state_33963[(12)]);
var inst_33903 = inst_33906;
var state_33963__$1 = (function (){var statearr_33970 = state_33963;
(statearr_33970[(11)] = inst_33903);

return statearr_33970;
})();
var statearr_33971_35583 = state_33963__$1;
(statearr_33971_35583[(2)] = null);

(statearr_33971_35583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33964 === (4))){
var inst_33917 = (state_33963[(13)]);
var inst_33915 = (state_33963[(7)]);
var inst_33914 = (state_33963[(2)]);
var inst_33915__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33914,(0),null);
var inst_33916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33914,(1),null);
var inst_33917__$1 = (inst_33915__$1 == null);
var state_33963__$1 = (function (){var statearr_33972 = state_33963;
(statearr_33972[(13)] = inst_33917__$1);

(statearr_33972[(14)] = inst_33916);

(statearr_33972[(7)] = inst_33915__$1);

return statearr_33972;
})();
if(cljs.core.truth_(inst_33917__$1)){
var statearr_33973_35584 = state_33963__$1;
(statearr_33973_35584[(1)] = (5));

} else {
var statearr_33974_35585 = state_33963__$1;
(statearr_33974_35585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33964 === (15))){
var inst_33907 = (state_33963[(15)]);
var inst_33936 = (state_33963[(16)]);
var inst_33936__$1 = cljs.core.empty_QMARK_(inst_33907);
var state_33963__$1 = (function (){var statearr_33976 = state_33963;
(statearr_33976[(16)] = inst_33936__$1);

return statearr_33976;
})();
if(inst_33936__$1){
var statearr_33977_35587 = state_33963__$1;
(statearr_33977_35587[(1)] = (17));

} else {
var statearr_33978_35588 = state_33963__$1;
(statearr_33978_35588[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33964 === (21))){
var inst_33906 = (state_33963[(12)]);
var inst_33903 = inst_33906;
var state_33963__$1 = (function (){var statearr_33979 = state_33963;
(statearr_33979[(11)] = inst_33903);

return statearr_33979;
})();
var statearr_33980_35590 = state_33963__$1;
(statearr_33980_35590[(2)] = null);

(statearr_33980_35590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33964 === (13))){
var inst_33929 = (state_33963[(2)]);
var inst_33930 = calc_state();
var inst_33903 = inst_33930;
var state_33963__$1 = (function (){var statearr_33981 = state_33963;
(statearr_33981[(17)] = inst_33929);

(statearr_33981[(11)] = inst_33903);

return statearr_33981;
})();
var statearr_33982_35591 = state_33963__$1;
(statearr_33982_35591[(2)] = null);

(statearr_33982_35591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33964 === (22))){
var inst_33957 = (state_33963[(2)]);
var state_33963__$1 = state_33963;
var statearr_33983_35592 = state_33963__$1;
(statearr_33983_35592[(2)] = inst_33957);

(statearr_33983_35592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33964 === (6))){
var inst_33916 = (state_33963[(14)]);
var inst_33920 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33916,change);
var state_33963__$1 = state_33963;
var statearr_33984_35593 = state_33963__$1;
(statearr_33984_35593[(2)] = inst_33920);

(statearr_33984_35593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33964 === (25))){
var state_33963__$1 = state_33963;
var statearr_33986_35601 = state_33963__$1;
(statearr_33986_35601[(2)] = null);

(statearr_33986_35601[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33964 === (17))){
var inst_33908 = (state_33963[(18)]);
var inst_33916 = (state_33963[(14)]);
var inst_33938 = (inst_33908.cljs$core$IFn$_invoke$arity$1 ? inst_33908.cljs$core$IFn$_invoke$arity$1(inst_33916) : inst_33908.call(null,inst_33916));
var inst_33939 = cljs.core.not(inst_33938);
var state_33963__$1 = state_33963;
var statearr_33987_35603 = state_33963__$1;
(statearr_33987_35603[(2)] = inst_33939);

(statearr_33987_35603[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33964 === (3))){
var inst_33961 = (state_33963[(2)]);
var state_33963__$1 = state_33963;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33963__$1,inst_33961);
} else {
if((state_val_33964 === (12))){
var state_33963__$1 = state_33963;
var statearr_33988_35606 = state_33963__$1;
(statearr_33988_35606[(2)] = null);

(statearr_33988_35606[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33964 === (2))){
var inst_33906 = (state_33963[(12)]);
var inst_33903 = (state_33963[(11)]);
var inst_33906__$1 = cljs.core.__destructure_map(inst_33903);
var inst_33907 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33906__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33908 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33906__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33909 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33906__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33963__$1 = (function (){var statearr_33989 = state_33963;
(statearr_33989[(15)] = inst_33907);

(statearr_33989[(18)] = inst_33908);

(statearr_33989[(12)] = inst_33906__$1);

return statearr_33989;
})();
return cljs.core.async.ioc_alts_BANG_(state_33963__$1,(4),inst_33909);
} else {
if((state_val_33964 === (23))){
var inst_33947 = (state_33963[(2)]);
var state_33963__$1 = state_33963;
if(cljs.core.truth_(inst_33947)){
var statearr_33991_35607 = state_33963__$1;
(statearr_33991_35607[(1)] = (24));

} else {
var statearr_33992_35608 = state_33963__$1;
(statearr_33992_35608[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33964 === (19))){
var inst_33942 = (state_33963[(2)]);
var state_33963__$1 = state_33963;
var statearr_33993_35618 = state_33963__$1;
(statearr_33993_35618[(2)] = inst_33942);

(statearr_33993_35618[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33964 === (11))){
var inst_33916 = (state_33963[(14)]);
var inst_33926 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33916);
var state_33963__$1 = state_33963;
var statearr_33994_35619 = state_33963__$1;
(statearr_33994_35619[(2)] = inst_33926);

(statearr_33994_35619[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33964 === (9))){
var inst_33907 = (state_33963[(15)]);
var inst_33916 = (state_33963[(14)]);
var inst_33933 = (state_33963[(19)]);
var inst_33933__$1 = (inst_33907.cljs$core$IFn$_invoke$arity$1 ? inst_33907.cljs$core$IFn$_invoke$arity$1(inst_33916) : inst_33907.call(null,inst_33916));
var state_33963__$1 = (function (){var statearr_33995 = state_33963;
(statearr_33995[(19)] = inst_33933__$1);

return statearr_33995;
})();
if(cljs.core.truth_(inst_33933__$1)){
var statearr_33996_35620 = state_33963__$1;
(statearr_33996_35620[(1)] = (14));

} else {
var statearr_33997_35621 = state_33963__$1;
(statearr_33997_35621[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33964 === (5))){
var inst_33917 = (state_33963[(13)]);
var state_33963__$1 = state_33963;
var statearr_33998_35624 = state_33963__$1;
(statearr_33998_35624[(2)] = inst_33917);

(statearr_33998_35624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33964 === (14))){
var inst_33933 = (state_33963[(19)]);
var state_33963__$1 = state_33963;
var statearr_34000_35627 = state_33963__$1;
(statearr_34000_35627[(2)] = inst_33933);

(statearr_34000_35627[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33964 === (26))){
var inst_33953 = (state_33963[(2)]);
var state_33963__$1 = state_33963;
var statearr_34001_35628 = state_33963__$1;
(statearr_34001_35628[(2)] = inst_33953);

(statearr_34001_35628[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33964 === (16))){
var inst_33944 = (state_33963[(2)]);
var state_33963__$1 = state_33963;
if(cljs.core.truth_(inst_33944)){
var statearr_34002_35629 = state_33963__$1;
(statearr_34002_35629[(1)] = (20));

} else {
var statearr_34003_35630 = state_33963__$1;
(statearr_34003_35630[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33964 === (10))){
var inst_33959 = (state_33963[(2)]);
var state_33963__$1 = state_33963;
var statearr_34004_35632 = state_33963__$1;
(statearr_34004_35632[(2)] = inst_33959);

(statearr_34004_35632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33964 === (18))){
var inst_33936 = (state_33963[(16)]);
var state_33963__$1 = state_33963;
var statearr_34005_35640 = state_33963__$1;
(statearr_34005_35640[(2)] = inst_33936);

(statearr_34005_35640[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33964 === (8))){
var inst_33915 = (state_33963[(7)]);
var inst_33924 = (inst_33915 == null);
var state_33963__$1 = state_33963;
if(cljs.core.truth_(inst_33924)){
var statearr_34006_35642 = state_33963__$1;
(statearr_34006_35642[(1)] = (11));

} else {
var statearr_34007_35643 = state_33963__$1;
(statearr_34007_35643[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__32680__auto__ = null;
var cljs$core$async$mix_$_state_machine__32680__auto____0 = (function (){
var statearr_34009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34009[(0)] = cljs$core$async$mix_$_state_machine__32680__auto__);

(statearr_34009[(1)] = (1));

return statearr_34009;
});
var cljs$core$async$mix_$_state_machine__32680__auto____1 = (function (state_33963){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_33963);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e34010){var ex__32683__auto__ = e34010;
var statearr_34011_35645 = state_33963;
(statearr_34011_35645[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_33963[(4)]))){
var statearr_34012_35646 = state_33963;
(statearr_34012_35646[(1)] = cljs.core.first((state_33963[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35647 = state_33963;
state_33963 = G__35647;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32680__auto__ = function(state_33963){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32680__auto____1.call(this,state_33963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32680__auto____0;
cljs$core$async$mix_$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32680__auto____1;
return cljs$core$async$mix_$_state_machine__32680__auto__;
})()
})();
var state__32869__auto__ = (function (){var statearr_34013 = f__32868__auto__();
(statearr_34013[(6)] = c__32867__auto___35577);

return statearr_34013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32869__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_35650 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35650(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35656 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35656(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35657 = (function() {
var G__35658 = null;
var G__35658__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35658__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35658 = function(p,v){
switch(arguments.length){
case 1:
return G__35658__1.call(this,p);
case 2:
return G__35658__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35658.cljs$core$IFn$_invoke$arity$1 = G__35658__1;
G__35658.cljs$core$IFn$_invoke$arity$2 = G__35658__2;
return G__35658;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34019 = arguments.length;
switch (G__34019) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35657(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35657(p,v);
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
var G__34024 = arguments.length;
switch (G__34024) {
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
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34021_SHARP_){
if(cljs.core.truth_((p1__34021_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34021_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34021_SHARP_.call(null,topic)))){
return p1__34021_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34021_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34026 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34026 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34027){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34027 = meta34027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34028,meta34027__$1){
var self__ = this;
var _34028__$1 = this;
return (new cljs.core.async.t_cljs$core$async34026(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34027__$1));
}));

(cljs.core.async.t_cljs$core$async34026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34028){
var self__ = this;
var _34028__$1 = this;
return self__.meta34027;
}));

(cljs.core.async.t_cljs$core$async34026.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34026.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34026.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34026.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34026.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34026.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34026.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34026.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34027","meta34027",1923035978,null)], null);
}));

(cljs.core.async.t_cljs$core$async34026.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34026.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34026");

(cljs.core.async.t_cljs$core$async34026.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34026");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34026.
 */
cljs.core.async.__GT_t_cljs$core$async34026 = (function cljs$core$async$__GT_t_cljs$core$async34026(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34027){
return (new cljs.core.async.t_cljs$core$async34026(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34027));
});

}

return (new cljs.core.async.t_cljs$core$async34026(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32867__auto___35679 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32868__auto__ = (function (){var switch__32679__auto__ = (function (state_34105){
var state_val_34106 = (state_34105[(1)]);
if((state_val_34106 === (7))){
var inst_34101 = (state_34105[(2)]);
var state_34105__$1 = state_34105;
var statearr_34107_35681 = state_34105__$1;
(statearr_34107_35681[(2)] = inst_34101);

(statearr_34107_35681[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (20))){
var state_34105__$1 = state_34105;
var statearr_34108_35686 = state_34105__$1;
(statearr_34108_35686[(2)] = null);

(statearr_34108_35686[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (1))){
var state_34105__$1 = state_34105;
var statearr_34109_35690 = state_34105__$1;
(statearr_34109_35690[(2)] = null);

(statearr_34109_35690[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (24))){
var inst_34084 = (state_34105[(7)]);
var inst_34093 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34084);
var state_34105__$1 = state_34105;
var statearr_34110_35691 = state_34105__$1;
(statearr_34110_35691[(2)] = inst_34093);

(statearr_34110_35691[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (4))){
var inst_34034 = (state_34105[(8)]);
var inst_34034__$1 = (state_34105[(2)]);
var inst_34035 = (inst_34034__$1 == null);
var state_34105__$1 = (function (){var statearr_34111 = state_34105;
(statearr_34111[(8)] = inst_34034__$1);

return statearr_34111;
})();
if(cljs.core.truth_(inst_34035)){
var statearr_34112_35692 = state_34105__$1;
(statearr_34112_35692[(1)] = (5));

} else {
var statearr_34113_35693 = state_34105__$1;
(statearr_34113_35693[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (15))){
var inst_34078 = (state_34105[(2)]);
var state_34105__$1 = state_34105;
var statearr_34115_35697 = state_34105__$1;
(statearr_34115_35697[(2)] = inst_34078);

(statearr_34115_35697[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (21))){
var inst_34098 = (state_34105[(2)]);
var state_34105__$1 = (function (){var statearr_34117 = state_34105;
(statearr_34117[(9)] = inst_34098);

return statearr_34117;
})();
var statearr_34118_35700 = state_34105__$1;
(statearr_34118_35700[(2)] = null);

(statearr_34118_35700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (13))){
var inst_34058 = (state_34105[(10)]);
var inst_34060 = cljs.core.chunked_seq_QMARK_(inst_34058);
var state_34105__$1 = state_34105;
if(inst_34060){
var statearr_34119_35701 = state_34105__$1;
(statearr_34119_35701[(1)] = (16));

} else {
var statearr_34120_35705 = state_34105__$1;
(statearr_34120_35705[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (22))){
var inst_34090 = (state_34105[(2)]);
var state_34105__$1 = state_34105;
if(cljs.core.truth_(inst_34090)){
var statearr_34121_35706 = state_34105__$1;
(statearr_34121_35706[(1)] = (23));

} else {
var statearr_34122_35708 = state_34105__$1;
(statearr_34122_35708[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (6))){
var inst_34084 = (state_34105[(7)]);
var inst_34086 = (state_34105[(11)]);
var inst_34034 = (state_34105[(8)]);
var inst_34084__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34034) : topic_fn.call(null,inst_34034));
var inst_34085 = cljs.core.deref(mults);
var inst_34086__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34085,inst_34084__$1);
var state_34105__$1 = (function (){var statearr_34123 = state_34105;
(statearr_34123[(7)] = inst_34084__$1);

(statearr_34123[(11)] = inst_34086__$1);

return statearr_34123;
})();
if(cljs.core.truth_(inst_34086__$1)){
var statearr_34124_35713 = state_34105__$1;
(statearr_34124_35713[(1)] = (19));

} else {
var statearr_34125_35714 = state_34105__$1;
(statearr_34125_35714[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (25))){
var inst_34095 = (state_34105[(2)]);
var state_34105__$1 = state_34105;
var statearr_34126_35715 = state_34105__$1;
(statearr_34126_35715[(2)] = inst_34095);

(statearr_34126_35715[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (17))){
var inst_34058 = (state_34105[(10)]);
var inst_34069 = cljs.core.first(inst_34058);
var inst_34070 = cljs.core.async.muxch_STAR_(inst_34069);
var inst_34071 = cljs.core.async.close_BANG_(inst_34070);
var inst_34072 = cljs.core.next(inst_34058);
var inst_34044 = inst_34072;
var inst_34045 = null;
var inst_34046 = (0);
var inst_34047 = (0);
var state_34105__$1 = (function (){var statearr_34127 = state_34105;
(statearr_34127[(12)] = inst_34071);

(statearr_34127[(13)] = inst_34047);

(statearr_34127[(14)] = inst_34045);

(statearr_34127[(15)] = inst_34046);

(statearr_34127[(16)] = inst_34044);

return statearr_34127;
})();
var statearr_34128_35721 = state_34105__$1;
(statearr_34128_35721[(2)] = null);

(statearr_34128_35721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (3))){
var inst_34103 = (state_34105[(2)]);
var state_34105__$1 = state_34105;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34105__$1,inst_34103);
} else {
if((state_val_34106 === (12))){
var inst_34080 = (state_34105[(2)]);
var state_34105__$1 = state_34105;
var statearr_34129_35722 = state_34105__$1;
(statearr_34129_35722[(2)] = inst_34080);

(statearr_34129_35722[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (2))){
var state_34105__$1 = state_34105;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34105__$1,(4),ch);
} else {
if((state_val_34106 === (23))){
var state_34105__$1 = state_34105;
var statearr_34130_35724 = state_34105__$1;
(statearr_34130_35724[(2)] = null);

(statearr_34130_35724[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (19))){
var inst_34086 = (state_34105[(11)]);
var inst_34034 = (state_34105[(8)]);
var inst_34088 = cljs.core.async.muxch_STAR_(inst_34086);
var state_34105__$1 = state_34105;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34105__$1,(22),inst_34088,inst_34034);
} else {
if((state_val_34106 === (11))){
var inst_34044 = (state_34105[(16)]);
var inst_34058 = (state_34105[(10)]);
var inst_34058__$1 = cljs.core.seq(inst_34044);
var state_34105__$1 = (function (){var statearr_34131 = state_34105;
(statearr_34131[(10)] = inst_34058__$1);

return statearr_34131;
})();
if(inst_34058__$1){
var statearr_34132_35725 = state_34105__$1;
(statearr_34132_35725[(1)] = (13));

} else {
var statearr_34133_35726 = state_34105__$1;
(statearr_34133_35726[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (9))){
var inst_34082 = (state_34105[(2)]);
var state_34105__$1 = state_34105;
var statearr_34134_35727 = state_34105__$1;
(statearr_34134_35727[(2)] = inst_34082);

(statearr_34134_35727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (5))){
var inst_34041 = cljs.core.deref(mults);
var inst_34042 = cljs.core.vals(inst_34041);
var inst_34043 = cljs.core.seq(inst_34042);
var inst_34044 = inst_34043;
var inst_34045 = null;
var inst_34046 = (0);
var inst_34047 = (0);
var state_34105__$1 = (function (){var statearr_34135 = state_34105;
(statearr_34135[(13)] = inst_34047);

(statearr_34135[(14)] = inst_34045);

(statearr_34135[(15)] = inst_34046);

(statearr_34135[(16)] = inst_34044);

return statearr_34135;
})();
var statearr_34139_35729 = state_34105__$1;
(statearr_34139_35729[(2)] = null);

(statearr_34139_35729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (14))){
var state_34105__$1 = state_34105;
var statearr_34143_35730 = state_34105__$1;
(statearr_34143_35730[(2)] = null);

(statearr_34143_35730[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (16))){
var inst_34058 = (state_34105[(10)]);
var inst_34062 = cljs.core.chunk_first(inst_34058);
var inst_34065 = cljs.core.chunk_rest(inst_34058);
var inst_34066 = cljs.core.count(inst_34062);
var inst_34044 = inst_34065;
var inst_34045 = inst_34062;
var inst_34046 = inst_34066;
var inst_34047 = (0);
var state_34105__$1 = (function (){var statearr_34146 = state_34105;
(statearr_34146[(13)] = inst_34047);

(statearr_34146[(14)] = inst_34045);

(statearr_34146[(15)] = inst_34046);

(statearr_34146[(16)] = inst_34044);

return statearr_34146;
})();
var statearr_34148_35732 = state_34105__$1;
(statearr_34148_35732[(2)] = null);

(statearr_34148_35732[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (10))){
var inst_34047 = (state_34105[(13)]);
var inst_34045 = (state_34105[(14)]);
var inst_34046 = (state_34105[(15)]);
var inst_34044 = (state_34105[(16)]);
var inst_34052 = cljs.core._nth(inst_34045,inst_34047);
var inst_34053 = cljs.core.async.muxch_STAR_(inst_34052);
var inst_34054 = cljs.core.async.close_BANG_(inst_34053);
var inst_34055 = (inst_34047 + (1));
var tmp34140 = inst_34045;
var tmp34141 = inst_34046;
var tmp34142 = inst_34044;
var inst_34044__$1 = tmp34142;
var inst_34045__$1 = tmp34140;
var inst_34046__$1 = tmp34141;
var inst_34047__$1 = inst_34055;
var state_34105__$1 = (function (){var statearr_34152 = state_34105;
(statearr_34152[(13)] = inst_34047__$1);

(statearr_34152[(17)] = inst_34054);

(statearr_34152[(14)] = inst_34045__$1);

(statearr_34152[(15)] = inst_34046__$1);

(statearr_34152[(16)] = inst_34044__$1);

return statearr_34152;
})();
var statearr_34153_35733 = state_34105__$1;
(statearr_34153_35733[(2)] = null);

(statearr_34153_35733[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (18))){
var inst_34075 = (state_34105[(2)]);
var state_34105__$1 = state_34105;
var statearr_34154_35734 = state_34105__$1;
(statearr_34154_35734[(2)] = inst_34075);

(statearr_34154_35734[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (8))){
var inst_34047 = (state_34105[(13)]);
var inst_34046 = (state_34105[(15)]);
var inst_34049 = (inst_34047 < inst_34046);
var inst_34050 = inst_34049;
var state_34105__$1 = state_34105;
if(cljs.core.truth_(inst_34050)){
var statearr_34155_35735 = state_34105__$1;
(statearr_34155_35735[(1)] = (10));

} else {
var statearr_34156_35736 = state_34105__$1;
(statearr_34156_35736[(1)] = (11));

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
var cljs$core$async$state_machine__32680__auto__ = null;
var cljs$core$async$state_machine__32680__auto____0 = (function (){
var statearr_34161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34161[(0)] = cljs$core$async$state_machine__32680__auto__);

(statearr_34161[(1)] = (1));

return statearr_34161;
});
var cljs$core$async$state_machine__32680__auto____1 = (function (state_34105){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_34105);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e34162){var ex__32683__auto__ = e34162;
var statearr_34163_35741 = state_34105;
(statearr_34163_35741[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_34105[(4)]))){
var statearr_34165_35742 = state_34105;
(statearr_34165_35742[(1)] = cljs.core.first((state_34105[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35743 = state_34105;
state_34105 = G__35743;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$state_machine__32680__auto__ = function(state_34105){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32680__auto____1.call(this,state_34105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32680__auto____0;
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32680__auto____1;
return cljs$core$async$state_machine__32680__auto__;
})()
})();
var state__32869__auto__ = (function (){var statearr_34169 = f__32868__auto__();
(statearr_34169[(6)] = c__32867__auto___35679);

return statearr_34169;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32869__auto__);
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
var G__34175 = arguments.length;
switch (G__34175) {
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
var G__34188 = arguments.length;
switch (G__34188) {
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
var G__34198 = arguments.length;
switch (G__34198) {
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
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__32867__auto___35762 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32868__auto__ = (function (){var switch__32679__auto__ = (function (state_34255){
var state_val_34256 = (state_34255[(1)]);
if((state_val_34256 === (7))){
var state_34255__$1 = state_34255;
var statearr_34260_35766 = state_34255__$1;
(statearr_34260_35766[(2)] = null);

(statearr_34260_35766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (1))){
var state_34255__$1 = state_34255;
var statearr_34262_35767 = state_34255__$1;
(statearr_34262_35767[(2)] = null);

(statearr_34262_35767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (4))){
var inst_34207 = (state_34255[(7)]);
var inst_34208 = (state_34255[(8)]);
var inst_34212 = (inst_34208 < inst_34207);
var state_34255__$1 = state_34255;
if(cljs.core.truth_(inst_34212)){
var statearr_34263_35768 = state_34255__$1;
(statearr_34263_35768[(1)] = (6));

} else {
var statearr_34264_35769 = state_34255__$1;
(statearr_34264_35769[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (15))){
var inst_34240 = (state_34255[(9)]);
var inst_34246 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34240);
var state_34255__$1 = state_34255;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34255__$1,(17),out,inst_34246);
} else {
if((state_val_34256 === (13))){
var inst_34240 = (state_34255[(9)]);
var inst_34240__$1 = (state_34255[(2)]);
var inst_34241 = cljs.core.some(cljs.core.nil_QMARK_,inst_34240__$1);
var state_34255__$1 = (function (){var statearr_34268 = state_34255;
(statearr_34268[(9)] = inst_34240__$1);

return statearr_34268;
})();
if(cljs.core.truth_(inst_34241)){
var statearr_34270_35770 = state_34255__$1;
(statearr_34270_35770[(1)] = (14));

} else {
var statearr_34271_35775 = state_34255__$1;
(statearr_34271_35775[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (6))){
var state_34255__$1 = state_34255;
var statearr_34272_35782 = state_34255__$1;
(statearr_34272_35782[(2)] = null);

(statearr_34272_35782[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (17))){
var inst_34248 = (state_34255[(2)]);
var state_34255__$1 = (function (){var statearr_34282 = state_34255;
(statearr_34282[(10)] = inst_34248);

return statearr_34282;
})();
var statearr_34283_35783 = state_34255__$1;
(statearr_34283_35783[(2)] = null);

(statearr_34283_35783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (3))){
var inst_34253 = (state_34255[(2)]);
var state_34255__$1 = state_34255;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34255__$1,inst_34253);
} else {
if((state_val_34256 === (12))){
var _ = (function (){var statearr_34285 = state_34255;
(statearr_34285[(4)] = cljs.core.rest((state_34255[(4)])));

return statearr_34285;
})();
var state_34255__$1 = state_34255;
var ex34280 = (state_34255__$1[(2)]);
var statearr_34288_35785 = state_34255__$1;
(statearr_34288_35785[(5)] = ex34280);


if((ex34280 instanceof Object)){
var statearr_34290_35786 = state_34255__$1;
(statearr_34290_35786[(1)] = (11));

(statearr_34290_35786[(5)] = null);

} else {
throw ex34280;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (2))){
var inst_34206 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34207 = cnt;
var inst_34208 = (0);
var state_34255__$1 = (function (){var statearr_34296 = state_34255;
(statearr_34296[(7)] = inst_34207);

(statearr_34296[(11)] = inst_34206);

(statearr_34296[(8)] = inst_34208);

return statearr_34296;
})();
var statearr_34298_35793 = state_34255__$1;
(statearr_34298_35793[(2)] = null);

(statearr_34298_35793[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (11))){
var inst_34218 = (state_34255[(2)]);
var inst_34219 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34255__$1 = (function (){var statearr_34302 = state_34255;
(statearr_34302[(12)] = inst_34218);

return statearr_34302;
})();
var statearr_34304_35794 = state_34255__$1;
(statearr_34304_35794[(2)] = inst_34219);

(statearr_34304_35794[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (9))){
var inst_34208 = (state_34255[(8)]);
var _ = (function (){var statearr_34305 = state_34255;
(statearr_34305[(4)] = cljs.core.cons((12),(state_34255[(4)])));

return statearr_34305;
})();
var inst_34226 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34208) : chs__$1.call(null,inst_34208));
var inst_34227 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34208) : done.call(null,inst_34208));
var inst_34228 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34226,inst_34227);
var ___$1 = (function (){var statearr_34307 = state_34255;
(statearr_34307[(4)] = cljs.core.rest((state_34255[(4)])));

return statearr_34307;
})();
var state_34255__$1 = state_34255;
var statearr_34308_35796 = state_34255__$1;
(statearr_34308_35796[(2)] = inst_34228);

(statearr_34308_35796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (5))){
var inst_34238 = (state_34255[(2)]);
var state_34255__$1 = (function (){var statearr_34312 = state_34255;
(statearr_34312[(13)] = inst_34238);

return statearr_34312;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34255__$1,(13),dchan);
} else {
if((state_val_34256 === (14))){
var inst_34243 = cljs.core.async.close_BANG_(out);
var state_34255__$1 = state_34255;
var statearr_34314_35799 = state_34255__$1;
(statearr_34314_35799[(2)] = inst_34243);

(statearr_34314_35799[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (16))){
var inst_34251 = (state_34255[(2)]);
var state_34255__$1 = state_34255;
var statearr_34316_35803 = state_34255__$1;
(statearr_34316_35803[(2)] = inst_34251);

(statearr_34316_35803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (10))){
var inst_34208 = (state_34255[(8)]);
var inst_34231 = (state_34255[(2)]);
var inst_34232 = (inst_34208 + (1));
var inst_34208__$1 = inst_34232;
var state_34255__$1 = (function (){var statearr_34319 = state_34255;
(statearr_34319[(8)] = inst_34208__$1);

(statearr_34319[(14)] = inst_34231);

return statearr_34319;
})();
var statearr_34320_35804 = state_34255__$1;
(statearr_34320_35804[(2)] = null);

(statearr_34320_35804[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34256 === (8))){
var inst_34236 = (state_34255[(2)]);
var state_34255__$1 = state_34255;
var statearr_34322_35806 = state_34255__$1;
(statearr_34322_35806[(2)] = inst_34236);

(statearr_34322_35806[(1)] = (5));


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
var cljs$core$async$state_machine__32680__auto__ = null;
var cljs$core$async$state_machine__32680__auto____0 = (function (){
var statearr_34326 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34326[(0)] = cljs$core$async$state_machine__32680__auto__);

(statearr_34326[(1)] = (1));

return statearr_34326;
});
var cljs$core$async$state_machine__32680__auto____1 = (function (state_34255){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_34255);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e34329){var ex__32683__auto__ = e34329;
var statearr_34330_35807 = state_34255;
(statearr_34330_35807[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_34255[(4)]))){
var statearr_34332_35808 = state_34255;
(statearr_34332_35808[(1)] = cljs.core.first((state_34255[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35809 = state_34255;
state_34255 = G__35809;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$state_machine__32680__auto__ = function(state_34255){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32680__auto____1.call(this,state_34255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32680__auto____0;
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32680__auto____1;
return cljs$core$async$state_machine__32680__auto__;
})()
})();
var state__32869__auto__ = (function (){var statearr_34336 = f__32868__auto__();
(statearr_34336[(6)] = c__32867__auto___35762);

return statearr_34336;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32869__auto__);
}));

}

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
var G__34346 = arguments.length;
switch (G__34346) {
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
var c__32867__auto___35816 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32868__auto__ = (function (){var switch__32679__auto__ = (function (state_34392){
var state_val_34393 = (state_34392[(1)]);
if((state_val_34393 === (7))){
var inst_34364 = (state_34392[(7)]);
var inst_34366 = (state_34392[(8)]);
var inst_34364__$1 = (state_34392[(2)]);
var inst_34366__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34364__$1,(0),null);
var inst_34368 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34364__$1,(1),null);
var inst_34369 = (inst_34366__$1 == null);
var state_34392__$1 = (function (){var statearr_34398 = state_34392;
(statearr_34398[(7)] = inst_34364__$1);

(statearr_34398[(9)] = inst_34368);

(statearr_34398[(8)] = inst_34366__$1);

return statearr_34398;
})();
if(cljs.core.truth_(inst_34369)){
var statearr_34401_35822 = state_34392__$1;
(statearr_34401_35822[(1)] = (8));

} else {
var statearr_34403_35823 = state_34392__$1;
(statearr_34403_35823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34393 === (1))){
var inst_34353 = cljs.core.vec(chs);
var inst_34354 = inst_34353;
var state_34392__$1 = (function (){var statearr_34404 = state_34392;
(statearr_34404[(10)] = inst_34354);

return statearr_34404;
})();
var statearr_34406_35824 = state_34392__$1;
(statearr_34406_35824[(2)] = null);

(statearr_34406_35824[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34393 === (4))){
var inst_34354 = (state_34392[(10)]);
var state_34392__$1 = state_34392;
return cljs.core.async.ioc_alts_BANG_(state_34392__$1,(7),inst_34354);
} else {
if((state_val_34393 === (6))){
var inst_34387 = (state_34392[(2)]);
var state_34392__$1 = state_34392;
var statearr_34410_35825 = state_34392__$1;
(statearr_34410_35825[(2)] = inst_34387);

(statearr_34410_35825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34393 === (3))){
var inst_34389 = (state_34392[(2)]);
var state_34392__$1 = state_34392;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34392__$1,inst_34389);
} else {
if((state_val_34393 === (2))){
var inst_34354 = (state_34392[(10)]);
var inst_34357 = cljs.core.count(inst_34354);
var inst_34358 = (inst_34357 > (0));
var state_34392__$1 = state_34392;
if(cljs.core.truth_(inst_34358)){
var statearr_34414_35826 = state_34392__$1;
(statearr_34414_35826[(1)] = (4));

} else {
var statearr_34417_35827 = state_34392__$1;
(statearr_34417_35827[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34393 === (11))){
var inst_34354 = (state_34392[(10)]);
var inst_34380 = (state_34392[(2)]);
var tmp34411 = inst_34354;
var inst_34354__$1 = tmp34411;
var state_34392__$1 = (function (){var statearr_34418 = state_34392;
(statearr_34418[(11)] = inst_34380);

(statearr_34418[(10)] = inst_34354__$1);

return statearr_34418;
})();
var statearr_34420_35829 = state_34392__$1;
(statearr_34420_35829[(2)] = null);

(statearr_34420_35829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34393 === (9))){
var inst_34366 = (state_34392[(8)]);
var state_34392__$1 = state_34392;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34392__$1,(11),out,inst_34366);
} else {
if((state_val_34393 === (5))){
var inst_34385 = cljs.core.async.close_BANG_(out);
var state_34392__$1 = state_34392;
var statearr_34428_35830 = state_34392__$1;
(statearr_34428_35830[(2)] = inst_34385);

(statearr_34428_35830[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34393 === (10))){
var inst_34383 = (state_34392[(2)]);
var state_34392__$1 = state_34392;
var statearr_34429_35831 = state_34392__$1;
(statearr_34429_35831[(2)] = inst_34383);

(statearr_34429_35831[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34393 === (8))){
var inst_34364 = (state_34392[(7)]);
var inst_34354 = (state_34392[(10)]);
var inst_34368 = (state_34392[(9)]);
var inst_34366 = (state_34392[(8)]);
var inst_34373 = (function (){var cs = inst_34354;
var vec__34360 = inst_34364;
var v = inst_34366;
var c = inst_34368;
return (function (p1__34343_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34343_SHARP_);
});
})();
var inst_34375 = cljs.core.filterv(inst_34373,inst_34354);
var inst_34354__$1 = inst_34375;
var state_34392__$1 = (function (){var statearr_34436 = state_34392;
(statearr_34436[(10)] = inst_34354__$1);

return statearr_34436;
})();
var statearr_34437_35834 = state_34392__$1;
(statearr_34437_35834[(2)] = null);

(statearr_34437_35834[(1)] = (2));


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
var cljs$core$async$state_machine__32680__auto__ = null;
var cljs$core$async$state_machine__32680__auto____0 = (function (){
var statearr_34439 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34439[(0)] = cljs$core$async$state_machine__32680__auto__);

(statearr_34439[(1)] = (1));

return statearr_34439;
});
var cljs$core$async$state_machine__32680__auto____1 = (function (state_34392){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_34392);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e34443){var ex__32683__auto__ = e34443;
var statearr_34444_35843 = state_34392;
(statearr_34444_35843[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_34392[(4)]))){
var statearr_34445_35844 = state_34392;
(statearr_34445_35844[(1)] = cljs.core.first((state_34392[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35845 = state_34392;
state_34392 = G__35845;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$state_machine__32680__auto__ = function(state_34392){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32680__auto____1.call(this,state_34392);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32680__auto____0;
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32680__auto____1;
return cljs$core$async$state_machine__32680__auto__;
})()
})();
var state__32869__auto__ = (function (){var statearr_34450 = f__32868__auto__();
(statearr_34450[(6)] = c__32867__auto___35816);

return statearr_34450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32869__auto__);
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
var G__34458 = arguments.length;
switch (G__34458) {
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
var c__32867__auto___35847 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32868__auto__ = (function (){var switch__32679__auto__ = (function (state_34492){
var state_val_34493 = (state_34492[(1)]);
if((state_val_34493 === (7))){
var inst_34471 = (state_34492[(7)]);
var inst_34471__$1 = (state_34492[(2)]);
var inst_34472 = (inst_34471__$1 == null);
var inst_34473 = cljs.core.not(inst_34472);
var state_34492__$1 = (function (){var statearr_34502 = state_34492;
(statearr_34502[(7)] = inst_34471__$1);

return statearr_34502;
})();
if(inst_34473){
var statearr_34503_35848 = state_34492__$1;
(statearr_34503_35848[(1)] = (8));

} else {
var statearr_34506_35849 = state_34492__$1;
(statearr_34506_35849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (1))){
var inst_34465 = (0);
var state_34492__$1 = (function (){var statearr_34508 = state_34492;
(statearr_34508[(8)] = inst_34465);

return statearr_34508;
})();
var statearr_34509_35850 = state_34492__$1;
(statearr_34509_35850[(2)] = null);

(statearr_34509_35850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (4))){
var state_34492__$1 = state_34492;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34492__$1,(7),ch);
} else {
if((state_val_34493 === (6))){
var inst_34486 = (state_34492[(2)]);
var state_34492__$1 = state_34492;
var statearr_34512_35851 = state_34492__$1;
(statearr_34512_35851[(2)] = inst_34486);

(statearr_34512_35851[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (3))){
var inst_34488 = (state_34492[(2)]);
var inst_34489 = cljs.core.async.close_BANG_(out);
var state_34492__$1 = (function (){var statearr_34513 = state_34492;
(statearr_34513[(9)] = inst_34488);

return statearr_34513;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34492__$1,inst_34489);
} else {
if((state_val_34493 === (2))){
var inst_34465 = (state_34492[(8)]);
var inst_34467 = (inst_34465 < n);
var state_34492__$1 = state_34492;
if(cljs.core.truth_(inst_34467)){
var statearr_34522_35857 = state_34492__$1;
(statearr_34522_35857[(1)] = (4));

} else {
var statearr_34523_35858 = state_34492__$1;
(statearr_34523_35858[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (11))){
var inst_34465 = (state_34492[(8)]);
var inst_34476 = (state_34492[(2)]);
var inst_34477 = (inst_34465 + (1));
var inst_34465__$1 = inst_34477;
var state_34492__$1 = (function (){var statearr_34525 = state_34492;
(statearr_34525[(10)] = inst_34476);

(statearr_34525[(8)] = inst_34465__$1);

return statearr_34525;
})();
var statearr_34526_35859 = state_34492__$1;
(statearr_34526_35859[(2)] = null);

(statearr_34526_35859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (9))){
var state_34492__$1 = state_34492;
var statearr_34527_35860 = state_34492__$1;
(statearr_34527_35860[(2)] = null);

(statearr_34527_35860[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (5))){
var state_34492__$1 = state_34492;
var statearr_34532_35861 = state_34492__$1;
(statearr_34532_35861[(2)] = null);

(statearr_34532_35861[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (10))){
var inst_34482 = (state_34492[(2)]);
var state_34492__$1 = state_34492;
var statearr_34536_35862 = state_34492__$1;
(statearr_34536_35862[(2)] = inst_34482);

(statearr_34536_35862[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34493 === (8))){
var inst_34471 = (state_34492[(7)]);
var state_34492__$1 = state_34492;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34492__$1,(11),out,inst_34471);
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
var cljs$core$async$state_machine__32680__auto__ = null;
var cljs$core$async$state_machine__32680__auto____0 = (function (){
var statearr_34542 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34542[(0)] = cljs$core$async$state_machine__32680__auto__);

(statearr_34542[(1)] = (1));

return statearr_34542;
});
var cljs$core$async$state_machine__32680__auto____1 = (function (state_34492){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_34492);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e34543){var ex__32683__auto__ = e34543;
var statearr_34544_35867 = state_34492;
(statearr_34544_35867[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_34492[(4)]))){
var statearr_34549_35868 = state_34492;
(statearr_34549_35868[(1)] = cljs.core.first((state_34492[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35872 = state_34492;
state_34492 = G__35872;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$state_machine__32680__auto__ = function(state_34492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32680__auto____1.call(this,state_34492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32680__auto____0;
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32680__auto____1;
return cljs$core$async$state_machine__32680__auto__;
})()
})();
var state__32869__auto__ = (function (){var statearr_34553 = f__32868__auto__();
(statearr_34553[(6)] = c__32867__auto___35847);

return statearr_34553;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32869__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34557 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34557 = (function (f,ch,meta34558){
this.f = f;
this.ch = ch;
this.meta34558 = meta34558;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34559,meta34558__$1){
var self__ = this;
var _34559__$1 = this;
return (new cljs.core.async.t_cljs$core$async34557(self__.f,self__.ch,meta34558__$1));
}));

(cljs.core.async.t_cljs$core$async34557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34559){
var self__ = this;
var _34559__$1 = this;
return self__.meta34558;
}));

(cljs.core.async.t_cljs$core$async34557.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34557.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34557.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34557.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34557.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34572 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34572 = (function (f,ch,meta34558,_,fn1,meta34573){
this.f = f;
this.ch = ch;
this.meta34558 = meta34558;
this._ = _;
this.fn1 = fn1;
this.meta34573 = meta34573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34574,meta34573__$1){
var self__ = this;
var _34574__$1 = this;
return (new cljs.core.async.t_cljs$core$async34572(self__.f,self__.ch,self__.meta34558,self__._,self__.fn1,meta34573__$1));
}));

(cljs.core.async.t_cljs$core$async34572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34574){
var self__ = this;
var _34574__$1 = this;
return self__.meta34573;
}));

(cljs.core.async.t_cljs$core$async34572.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34572.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34572.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34572.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34555_SHARP_){
var G__34579 = (((p1__34555_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34555_SHARP_) : self__.f.call(null,p1__34555_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34579) : f1.call(null,G__34579));
});
}));

(cljs.core.async.t_cljs$core$async34572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34558","meta34558",-1903815146,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34557","cljs.core.async/t_cljs$core$async34557",-956035248,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34573","meta34573",-1240170293,null)], null);
}));

(cljs.core.async.t_cljs$core$async34572.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34572.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34572");

(cljs.core.async.t_cljs$core$async34572.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34572");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34572.
 */
cljs.core.async.__GT_t_cljs$core$async34572 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34572(f__$1,ch__$1,meta34558__$1,___$2,fn1__$1,meta34573){
return (new cljs.core.async.t_cljs$core$async34572(f__$1,ch__$1,meta34558__$1,___$2,fn1__$1,meta34573));
});

}

return (new cljs.core.async.t_cljs$core$async34572(self__.f,self__.ch,self__.meta34558,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34585 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34585) : self__.f.call(null,G__34585));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34557.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34557.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34557.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34558","meta34558",-1903815146,null)], null);
}));

(cljs.core.async.t_cljs$core$async34557.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34557.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34557");

(cljs.core.async.t_cljs$core$async34557.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34557");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34557.
 */
cljs.core.async.__GT_t_cljs$core$async34557 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34557(f__$1,ch__$1,meta34558){
return (new cljs.core.async.t_cljs$core$async34557(f__$1,ch__$1,meta34558));
});

}

return (new cljs.core.async.t_cljs$core$async34557(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34590 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34590 = (function (f,ch,meta34591){
this.f = f;
this.ch = ch;
this.meta34591 = meta34591;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34592,meta34591__$1){
var self__ = this;
var _34592__$1 = this;
return (new cljs.core.async.t_cljs$core$async34590(self__.f,self__.ch,meta34591__$1));
}));

(cljs.core.async.t_cljs$core$async34590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34592){
var self__ = this;
var _34592__$1 = this;
return self__.meta34591;
}));

(cljs.core.async.t_cljs$core$async34590.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34590.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34590.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34590.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34590.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34590.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34590.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34591","meta34591",43488414,null)], null);
}));

(cljs.core.async.t_cljs$core$async34590.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34590.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34590");

(cljs.core.async.t_cljs$core$async34590.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34590");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34590.
 */
cljs.core.async.__GT_t_cljs$core$async34590 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34590(f__$1,ch__$1,meta34591){
return (new cljs.core.async.t_cljs$core$async34590(f__$1,ch__$1,meta34591));
});

}

return (new cljs.core.async.t_cljs$core$async34590(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34605 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34605 = (function (p,ch,meta34606){
this.p = p;
this.ch = ch;
this.meta34606 = meta34606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34607,meta34606__$1){
var self__ = this;
var _34607__$1 = this;
return (new cljs.core.async.t_cljs$core$async34605(self__.p,self__.ch,meta34606__$1));
}));

(cljs.core.async.t_cljs$core$async34605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34607){
var self__ = this;
var _34607__$1 = this;
return self__.meta34606;
}));

(cljs.core.async.t_cljs$core$async34605.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34605.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34605.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34605.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34605.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34605.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34605.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34606","meta34606",-2025580824,null)], null);
}));

(cljs.core.async.t_cljs$core$async34605.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34605");

(cljs.core.async.t_cljs$core$async34605.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async34605");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34605.
 */
cljs.core.async.__GT_t_cljs$core$async34605 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34605(p__$1,ch__$1,meta34606){
return (new cljs.core.async.t_cljs$core$async34605(p__$1,ch__$1,meta34606));
});

}

return (new cljs.core.async.t_cljs$core$async34605(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34622 = arguments.length;
switch (G__34622) {
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
var c__32867__auto___35890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32868__auto__ = (function (){var switch__32679__auto__ = (function (state_34651){
var state_val_34652 = (state_34651[(1)]);
if((state_val_34652 === (7))){
var inst_34647 = (state_34651[(2)]);
var state_34651__$1 = state_34651;
var statearr_34657_35891 = state_34651__$1;
(statearr_34657_35891[(2)] = inst_34647);

(statearr_34657_35891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (1))){
var state_34651__$1 = state_34651;
var statearr_34658_35892 = state_34651__$1;
(statearr_34658_35892[(2)] = null);

(statearr_34658_35892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (4))){
var inst_34629 = (state_34651[(7)]);
var inst_34629__$1 = (state_34651[(2)]);
var inst_34633 = (inst_34629__$1 == null);
var state_34651__$1 = (function (){var statearr_34659 = state_34651;
(statearr_34659[(7)] = inst_34629__$1);

return statearr_34659;
})();
if(cljs.core.truth_(inst_34633)){
var statearr_34660_35894 = state_34651__$1;
(statearr_34660_35894[(1)] = (5));

} else {
var statearr_34661_35895 = state_34651__$1;
(statearr_34661_35895[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (6))){
var inst_34629 = (state_34651[(7)]);
var inst_34637 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34629) : p.call(null,inst_34629));
var state_34651__$1 = state_34651;
if(cljs.core.truth_(inst_34637)){
var statearr_34662_35896 = state_34651__$1;
(statearr_34662_35896[(1)] = (8));

} else {
var statearr_34663_35897 = state_34651__$1;
(statearr_34663_35897[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (3))){
var inst_34649 = (state_34651[(2)]);
var state_34651__$1 = state_34651;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34651__$1,inst_34649);
} else {
if((state_val_34652 === (2))){
var state_34651__$1 = state_34651;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34651__$1,(4),ch);
} else {
if((state_val_34652 === (11))){
var inst_34641 = (state_34651[(2)]);
var state_34651__$1 = state_34651;
var statearr_34664_35901 = state_34651__$1;
(statearr_34664_35901[(2)] = inst_34641);

(statearr_34664_35901[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (9))){
var state_34651__$1 = state_34651;
var statearr_34669_35902 = state_34651__$1;
(statearr_34669_35902[(2)] = null);

(statearr_34669_35902[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (5))){
var inst_34635 = cljs.core.async.close_BANG_(out);
var state_34651__$1 = state_34651;
var statearr_34670_35903 = state_34651__$1;
(statearr_34670_35903[(2)] = inst_34635);

(statearr_34670_35903[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (10))){
var inst_34644 = (state_34651[(2)]);
var state_34651__$1 = (function (){var statearr_34672 = state_34651;
(statearr_34672[(8)] = inst_34644);

return statearr_34672;
})();
var statearr_34673_35904 = state_34651__$1;
(statearr_34673_35904[(2)] = null);

(statearr_34673_35904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34652 === (8))){
var inst_34629 = (state_34651[(7)]);
var state_34651__$1 = state_34651;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34651__$1,(11),out,inst_34629);
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
var cljs$core$async$state_machine__32680__auto__ = null;
var cljs$core$async$state_machine__32680__auto____0 = (function (){
var statearr_34674 = [null,null,null,null,null,null,null,null,null];
(statearr_34674[(0)] = cljs$core$async$state_machine__32680__auto__);

(statearr_34674[(1)] = (1));

return statearr_34674;
});
var cljs$core$async$state_machine__32680__auto____1 = (function (state_34651){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_34651);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e34675){var ex__32683__auto__ = e34675;
var statearr_34676_35905 = state_34651;
(statearr_34676_35905[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_34651[(4)]))){
var statearr_34677_35906 = state_34651;
(statearr_34677_35906[(1)] = cljs.core.first((state_34651[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35908 = state_34651;
state_34651 = G__35908;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$state_machine__32680__auto__ = function(state_34651){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32680__auto____1.call(this,state_34651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32680__auto____0;
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32680__auto____1;
return cljs$core$async$state_machine__32680__auto__;
})()
})();
var state__32869__auto__ = (function (){var statearr_34679 = f__32868__auto__();
(statearr_34679[(6)] = c__32867__auto___35890);

return statearr_34679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32869__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34682 = arguments.length;
switch (G__34682) {
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
var c__32867__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32868__auto__ = (function (){var switch__32679__auto__ = (function (state_34744){
var state_val_34745 = (state_34744[(1)]);
if((state_val_34745 === (7))){
var inst_34740 = (state_34744[(2)]);
var state_34744__$1 = state_34744;
var statearr_34746_35914 = state_34744__$1;
(statearr_34746_35914[(2)] = inst_34740);

(statearr_34746_35914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34745 === (20))){
var inst_34710 = (state_34744[(7)]);
var inst_34721 = (state_34744[(2)]);
var inst_34722 = cljs.core.next(inst_34710);
var inst_34696 = inst_34722;
var inst_34697 = null;
var inst_34698 = (0);
var inst_34699 = (0);
var state_34744__$1 = (function (){var statearr_34748 = state_34744;
(statearr_34748[(8)] = inst_34698);

(statearr_34748[(9)] = inst_34721);

(statearr_34748[(10)] = inst_34696);

(statearr_34748[(11)] = inst_34699);

(statearr_34748[(12)] = inst_34697);

return statearr_34748;
})();
var statearr_34750_35915 = state_34744__$1;
(statearr_34750_35915[(2)] = null);

(statearr_34750_35915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34745 === (1))){
var state_34744__$1 = state_34744;
var statearr_34751_35916 = state_34744__$1;
(statearr_34751_35916[(2)] = null);

(statearr_34751_35916[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34745 === (4))){
var inst_34685 = (state_34744[(13)]);
var inst_34685__$1 = (state_34744[(2)]);
var inst_34686 = (inst_34685__$1 == null);
var state_34744__$1 = (function (){var statearr_34752 = state_34744;
(statearr_34752[(13)] = inst_34685__$1);

return statearr_34752;
})();
if(cljs.core.truth_(inst_34686)){
var statearr_34753_35917 = state_34744__$1;
(statearr_34753_35917[(1)] = (5));

} else {
var statearr_34754_35918 = state_34744__$1;
(statearr_34754_35918[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34745 === (15))){
var state_34744__$1 = state_34744;
var statearr_34758_35919 = state_34744__$1;
(statearr_34758_35919[(2)] = null);

(statearr_34758_35919[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34745 === (21))){
var state_34744__$1 = state_34744;
var statearr_34759_35920 = state_34744__$1;
(statearr_34759_35920[(2)] = null);

(statearr_34759_35920[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34745 === (13))){
var inst_34698 = (state_34744[(8)]);
var inst_34696 = (state_34744[(10)]);
var inst_34699 = (state_34744[(11)]);
var inst_34697 = (state_34744[(12)]);
var inst_34706 = (state_34744[(2)]);
var inst_34707 = (inst_34699 + (1));
var tmp34755 = inst_34698;
var tmp34756 = inst_34696;
var tmp34757 = inst_34697;
var inst_34696__$1 = tmp34756;
var inst_34697__$1 = tmp34757;
var inst_34698__$1 = tmp34755;
var inst_34699__$1 = inst_34707;
var state_34744__$1 = (function (){var statearr_34760 = state_34744;
(statearr_34760[(8)] = inst_34698__$1);

(statearr_34760[(10)] = inst_34696__$1);

(statearr_34760[(14)] = inst_34706);

(statearr_34760[(11)] = inst_34699__$1);

(statearr_34760[(12)] = inst_34697__$1);

return statearr_34760;
})();
var statearr_34762_35924 = state_34744__$1;
(statearr_34762_35924[(2)] = null);

(statearr_34762_35924[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34745 === (22))){
var state_34744__$1 = state_34744;
var statearr_34763_35925 = state_34744__$1;
(statearr_34763_35925[(2)] = null);

(statearr_34763_35925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34745 === (6))){
var inst_34685 = (state_34744[(13)]);
var inst_34694 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34685) : f.call(null,inst_34685));
var inst_34695 = cljs.core.seq(inst_34694);
var inst_34696 = inst_34695;
var inst_34697 = null;
var inst_34698 = (0);
var inst_34699 = (0);
var state_34744__$1 = (function (){var statearr_34765 = state_34744;
(statearr_34765[(8)] = inst_34698);

(statearr_34765[(10)] = inst_34696);

(statearr_34765[(11)] = inst_34699);

(statearr_34765[(12)] = inst_34697);

return statearr_34765;
})();
var statearr_34766_35926 = state_34744__$1;
(statearr_34766_35926[(2)] = null);

(statearr_34766_35926[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34745 === (17))){
var inst_34710 = (state_34744[(7)]);
var inst_34714 = cljs.core.chunk_first(inst_34710);
var inst_34715 = cljs.core.chunk_rest(inst_34710);
var inst_34716 = cljs.core.count(inst_34714);
var inst_34696 = inst_34715;
var inst_34697 = inst_34714;
var inst_34698 = inst_34716;
var inst_34699 = (0);
var state_34744__$1 = (function (){var statearr_34767 = state_34744;
(statearr_34767[(8)] = inst_34698);

(statearr_34767[(10)] = inst_34696);

(statearr_34767[(11)] = inst_34699);

(statearr_34767[(12)] = inst_34697);

return statearr_34767;
})();
var statearr_34770_35927 = state_34744__$1;
(statearr_34770_35927[(2)] = null);

(statearr_34770_35927[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34745 === (3))){
var inst_34742 = (state_34744[(2)]);
var state_34744__$1 = state_34744;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34744__$1,inst_34742);
} else {
if((state_val_34745 === (12))){
var inst_34730 = (state_34744[(2)]);
var state_34744__$1 = state_34744;
var statearr_34771_35928 = state_34744__$1;
(statearr_34771_35928[(2)] = inst_34730);

(statearr_34771_35928[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34745 === (2))){
var state_34744__$1 = state_34744;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34744__$1,(4),in$);
} else {
if((state_val_34745 === (23))){
var inst_34738 = (state_34744[(2)]);
var state_34744__$1 = state_34744;
var statearr_34772_35929 = state_34744__$1;
(statearr_34772_35929[(2)] = inst_34738);

(statearr_34772_35929[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34745 === (19))){
var inst_34725 = (state_34744[(2)]);
var state_34744__$1 = state_34744;
var statearr_34773_35930 = state_34744__$1;
(statearr_34773_35930[(2)] = inst_34725);

(statearr_34773_35930[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34745 === (11))){
var inst_34696 = (state_34744[(10)]);
var inst_34710 = (state_34744[(7)]);
var inst_34710__$1 = cljs.core.seq(inst_34696);
var state_34744__$1 = (function (){var statearr_34774 = state_34744;
(statearr_34774[(7)] = inst_34710__$1);

return statearr_34774;
})();
if(inst_34710__$1){
var statearr_34775_35931 = state_34744__$1;
(statearr_34775_35931[(1)] = (14));

} else {
var statearr_34776_35932 = state_34744__$1;
(statearr_34776_35932[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34745 === (9))){
var inst_34732 = (state_34744[(2)]);
var inst_34733 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34744__$1 = (function (){var statearr_34777 = state_34744;
(statearr_34777[(15)] = inst_34732);

return statearr_34777;
})();
if(cljs.core.truth_(inst_34733)){
var statearr_34778_35937 = state_34744__$1;
(statearr_34778_35937[(1)] = (21));

} else {
var statearr_34780_35938 = state_34744__$1;
(statearr_34780_35938[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34745 === (5))){
var inst_34688 = cljs.core.async.close_BANG_(out);
var state_34744__$1 = state_34744;
var statearr_34782_35939 = state_34744__$1;
(statearr_34782_35939[(2)] = inst_34688);

(statearr_34782_35939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34745 === (14))){
var inst_34710 = (state_34744[(7)]);
var inst_34712 = cljs.core.chunked_seq_QMARK_(inst_34710);
var state_34744__$1 = state_34744;
if(inst_34712){
var statearr_34783_35940 = state_34744__$1;
(statearr_34783_35940[(1)] = (17));

} else {
var statearr_34784_35941 = state_34744__$1;
(statearr_34784_35941[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34745 === (16))){
var inst_34728 = (state_34744[(2)]);
var state_34744__$1 = state_34744;
var statearr_34785_35947 = state_34744__$1;
(statearr_34785_35947[(2)] = inst_34728);

(statearr_34785_35947[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34745 === (10))){
var inst_34699 = (state_34744[(11)]);
var inst_34697 = (state_34744[(12)]);
var inst_34704 = cljs.core._nth(inst_34697,inst_34699);
var state_34744__$1 = state_34744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34744__$1,(13),out,inst_34704);
} else {
if((state_val_34745 === (18))){
var inst_34710 = (state_34744[(7)]);
var inst_34719 = cljs.core.first(inst_34710);
var state_34744__$1 = state_34744;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34744__$1,(20),out,inst_34719);
} else {
if((state_val_34745 === (8))){
var inst_34698 = (state_34744[(8)]);
var inst_34699 = (state_34744[(11)]);
var inst_34701 = (inst_34699 < inst_34698);
var inst_34702 = inst_34701;
var state_34744__$1 = state_34744;
if(cljs.core.truth_(inst_34702)){
var statearr_34790_35948 = state_34744__$1;
(statearr_34790_35948[(1)] = (10));

} else {
var statearr_34791_35950 = state_34744__$1;
(statearr_34791_35950[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__32680__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32680__auto____0 = (function (){
var statearr_34793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34793[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32680__auto__);

(statearr_34793[(1)] = (1));

return statearr_34793;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32680__auto____1 = (function (state_34744){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_34744);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e34794){var ex__32683__auto__ = e34794;
var statearr_34795_35952 = state_34744;
(statearr_34795_35952[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_34744[(4)]))){
var statearr_34797_35953 = state_34744;
(statearr_34797_35953[(1)] = cljs.core.first((state_34744[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35954 = state_34744;
state_34744 = G__35954;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32680__auto__ = function(state_34744){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32680__auto____1.call(this,state_34744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32680__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32680__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32680__auto__;
})()
})();
var state__32869__auto__ = (function (){var statearr_34799 = f__32868__auto__();
(statearr_34799[(6)] = c__32867__auto__);

return statearr_34799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32869__auto__);
}));

return c__32867__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34803 = arguments.length;
switch (G__34803) {
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
var G__34808 = arguments.length;
switch (G__34808) {
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
var G__34823 = arguments.length;
switch (G__34823) {
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
var c__32867__auto___35966 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32868__auto__ = (function (){var switch__32679__auto__ = (function (state_34866){
var state_val_34867 = (state_34866[(1)]);
if((state_val_34867 === (7))){
var inst_34858 = (state_34866[(2)]);
var state_34866__$1 = state_34866;
var statearr_34868_35967 = state_34866__$1;
(statearr_34868_35967[(2)] = inst_34858);

(statearr_34868_35967[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34867 === (1))){
var inst_34837 = null;
var state_34866__$1 = (function (){var statearr_34869 = state_34866;
(statearr_34869[(7)] = inst_34837);

return statearr_34869;
})();
var statearr_34870_35968 = state_34866__$1;
(statearr_34870_35968[(2)] = null);

(statearr_34870_35968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34867 === (4))){
var inst_34843 = (state_34866[(8)]);
var inst_34843__$1 = (state_34866[(2)]);
var inst_34844 = (inst_34843__$1 == null);
var inst_34845 = cljs.core.not(inst_34844);
var state_34866__$1 = (function (){var statearr_34875 = state_34866;
(statearr_34875[(8)] = inst_34843__$1);

return statearr_34875;
})();
if(inst_34845){
var statearr_34876_35969 = state_34866__$1;
(statearr_34876_35969[(1)] = (5));

} else {
var statearr_34877_35970 = state_34866__$1;
(statearr_34877_35970[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34867 === (6))){
var state_34866__$1 = state_34866;
var statearr_34878_35971 = state_34866__$1;
(statearr_34878_35971[(2)] = null);

(statearr_34878_35971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34867 === (3))){
var inst_34860 = (state_34866[(2)]);
var inst_34861 = cljs.core.async.close_BANG_(out);
var state_34866__$1 = (function (){var statearr_34879 = state_34866;
(statearr_34879[(9)] = inst_34860);

return statearr_34879;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34866__$1,inst_34861);
} else {
if((state_val_34867 === (2))){
var state_34866__$1 = state_34866;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34866__$1,(4),ch);
} else {
if((state_val_34867 === (11))){
var inst_34843 = (state_34866[(8)]);
var inst_34852 = (state_34866[(2)]);
var inst_34837 = inst_34843;
var state_34866__$1 = (function (){var statearr_34880 = state_34866;
(statearr_34880[(10)] = inst_34852);

(statearr_34880[(7)] = inst_34837);

return statearr_34880;
})();
var statearr_34881_35972 = state_34866__$1;
(statearr_34881_35972[(2)] = null);

(statearr_34881_35972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34867 === (9))){
var inst_34843 = (state_34866[(8)]);
var state_34866__$1 = state_34866;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34866__$1,(11),out,inst_34843);
} else {
if((state_val_34867 === (5))){
var inst_34843 = (state_34866[(8)]);
var inst_34837 = (state_34866[(7)]);
var inst_34847 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34843,inst_34837);
var state_34866__$1 = state_34866;
if(inst_34847){
var statearr_34887_35974 = state_34866__$1;
(statearr_34887_35974[(1)] = (8));

} else {
var statearr_34890_35976 = state_34866__$1;
(statearr_34890_35976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34867 === (10))){
var inst_34855 = (state_34866[(2)]);
var state_34866__$1 = state_34866;
var statearr_34891_35977 = state_34866__$1;
(statearr_34891_35977[(2)] = inst_34855);

(statearr_34891_35977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34867 === (8))){
var inst_34837 = (state_34866[(7)]);
var tmp34886 = inst_34837;
var inst_34837__$1 = tmp34886;
var state_34866__$1 = (function (){var statearr_34893 = state_34866;
(statearr_34893[(7)] = inst_34837__$1);

return statearr_34893;
})();
var statearr_34894_35978 = state_34866__$1;
(statearr_34894_35978[(2)] = null);

(statearr_34894_35978[(1)] = (2));


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
var cljs$core$async$state_machine__32680__auto__ = null;
var cljs$core$async$state_machine__32680__auto____0 = (function (){
var statearr_34896 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34896[(0)] = cljs$core$async$state_machine__32680__auto__);

(statearr_34896[(1)] = (1));

return statearr_34896;
});
var cljs$core$async$state_machine__32680__auto____1 = (function (state_34866){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_34866);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e34897){var ex__32683__auto__ = e34897;
var statearr_34898_35979 = state_34866;
(statearr_34898_35979[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_34866[(4)]))){
var statearr_34899_35980 = state_34866;
(statearr_34899_35980[(1)] = cljs.core.first((state_34866[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35981 = state_34866;
state_34866 = G__35981;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$state_machine__32680__auto__ = function(state_34866){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32680__auto____1.call(this,state_34866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32680__auto____0;
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32680__auto____1;
return cljs$core$async$state_machine__32680__auto__;
})()
})();
var state__32869__auto__ = (function (){var statearr_34900 = f__32868__auto__();
(statearr_34900[(6)] = c__32867__auto___35966);

return statearr_34900;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32869__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34904 = arguments.length;
switch (G__34904) {
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
var c__32867__auto___35983 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32868__auto__ = (function (){var switch__32679__auto__ = (function (state_34947){
var state_val_34948 = (state_34947[(1)]);
if((state_val_34948 === (7))){
var inst_34943 = (state_34947[(2)]);
var state_34947__$1 = state_34947;
var statearr_34949_35984 = state_34947__$1;
(statearr_34949_35984[(2)] = inst_34943);

(statearr_34949_35984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (1))){
var inst_34906 = (new Array(n));
var inst_34908 = inst_34906;
var inst_34909 = (0);
var state_34947__$1 = (function (){var statearr_34950 = state_34947;
(statearr_34950[(7)] = inst_34909);

(statearr_34950[(8)] = inst_34908);

return statearr_34950;
})();
var statearr_34951_35985 = state_34947__$1;
(statearr_34951_35985[(2)] = null);

(statearr_34951_35985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (4))){
var inst_34912 = (state_34947[(9)]);
var inst_34912__$1 = (state_34947[(2)]);
var inst_34916 = (inst_34912__$1 == null);
var inst_34917 = cljs.core.not(inst_34916);
var state_34947__$1 = (function (){var statearr_34952 = state_34947;
(statearr_34952[(9)] = inst_34912__$1);

return statearr_34952;
})();
if(inst_34917){
var statearr_34953_35989 = state_34947__$1;
(statearr_34953_35989[(1)] = (5));

} else {
var statearr_34954_35990 = state_34947__$1;
(statearr_34954_35990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (15))){
var inst_34937 = (state_34947[(2)]);
var state_34947__$1 = state_34947;
var statearr_34955_35991 = state_34947__$1;
(statearr_34955_35991[(2)] = inst_34937);

(statearr_34955_35991[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (13))){
var state_34947__$1 = state_34947;
var statearr_34956_35992 = state_34947__$1;
(statearr_34956_35992[(2)] = null);

(statearr_34956_35992[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (6))){
var inst_34909 = (state_34947[(7)]);
var inst_34933 = (inst_34909 > (0));
var state_34947__$1 = state_34947;
if(cljs.core.truth_(inst_34933)){
var statearr_34957_35997 = state_34947__$1;
(statearr_34957_35997[(1)] = (12));

} else {
var statearr_34958_35998 = state_34947__$1;
(statearr_34958_35998[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (3))){
var inst_34945 = (state_34947[(2)]);
var state_34947__$1 = state_34947;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34947__$1,inst_34945);
} else {
if((state_val_34948 === (12))){
var inst_34908 = (state_34947[(8)]);
var inst_34935 = cljs.core.vec(inst_34908);
var state_34947__$1 = state_34947;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34947__$1,(15),out,inst_34935);
} else {
if((state_val_34948 === (2))){
var state_34947__$1 = state_34947;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34947__$1,(4),ch);
} else {
if((state_val_34948 === (11))){
var inst_34927 = (state_34947[(2)]);
var inst_34928 = (new Array(n));
var inst_34908 = inst_34928;
var inst_34909 = (0);
var state_34947__$1 = (function (){var statearr_34959 = state_34947;
(statearr_34959[(10)] = inst_34927);

(statearr_34959[(7)] = inst_34909);

(statearr_34959[(8)] = inst_34908);

return statearr_34959;
})();
var statearr_34960_36002 = state_34947__$1;
(statearr_34960_36002[(2)] = null);

(statearr_34960_36002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (9))){
var inst_34908 = (state_34947[(8)]);
var inst_34925 = cljs.core.vec(inst_34908);
var state_34947__$1 = state_34947;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34947__$1,(11),out,inst_34925);
} else {
if((state_val_34948 === (5))){
var inst_34909 = (state_34947[(7)]);
var inst_34920 = (state_34947[(11)]);
var inst_34912 = (state_34947[(9)]);
var inst_34908 = (state_34947[(8)]);
var inst_34919 = (inst_34908[inst_34909] = inst_34912);
var inst_34920__$1 = (inst_34909 + (1));
var inst_34921 = (inst_34920__$1 < n);
var state_34947__$1 = (function (){var statearr_34965 = state_34947;
(statearr_34965[(12)] = inst_34919);

(statearr_34965[(11)] = inst_34920__$1);

return statearr_34965;
})();
if(cljs.core.truth_(inst_34921)){
var statearr_34966_36006 = state_34947__$1;
(statearr_34966_36006[(1)] = (8));

} else {
var statearr_34968_36007 = state_34947__$1;
(statearr_34968_36007[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (14))){
var inst_34940 = (state_34947[(2)]);
var inst_34941 = cljs.core.async.close_BANG_(out);
var state_34947__$1 = (function (){var statearr_34970 = state_34947;
(statearr_34970[(13)] = inst_34940);

return statearr_34970;
})();
var statearr_34971_36008 = state_34947__$1;
(statearr_34971_36008[(2)] = inst_34941);

(statearr_34971_36008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (10))){
var inst_34931 = (state_34947[(2)]);
var state_34947__$1 = state_34947;
var statearr_34973_36012 = state_34947__$1;
(statearr_34973_36012[(2)] = inst_34931);

(statearr_34973_36012[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34948 === (8))){
var inst_34920 = (state_34947[(11)]);
var inst_34908 = (state_34947[(8)]);
var tmp34969 = inst_34908;
var inst_34908__$1 = tmp34969;
var inst_34909 = inst_34920;
var state_34947__$1 = (function (){var statearr_34975 = state_34947;
(statearr_34975[(7)] = inst_34909);

(statearr_34975[(8)] = inst_34908__$1);

return statearr_34975;
})();
var statearr_34976_36013 = state_34947__$1;
(statearr_34976_36013[(2)] = null);

(statearr_34976_36013[(1)] = (2));


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
var cljs$core$async$state_machine__32680__auto__ = null;
var cljs$core$async$state_machine__32680__auto____0 = (function (){
var statearr_34977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34977[(0)] = cljs$core$async$state_machine__32680__auto__);

(statearr_34977[(1)] = (1));

return statearr_34977;
});
var cljs$core$async$state_machine__32680__auto____1 = (function (state_34947){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_34947);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e34978){var ex__32683__auto__ = e34978;
var statearr_34979_36014 = state_34947;
(statearr_34979_36014[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_34947[(4)]))){
var statearr_34981_36018 = state_34947;
(statearr_34981_36018[(1)] = cljs.core.first((state_34947[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36019 = state_34947;
state_34947 = G__36019;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$state_machine__32680__auto__ = function(state_34947){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32680__auto____1.call(this,state_34947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32680__auto____0;
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32680__auto____1;
return cljs$core$async$state_machine__32680__auto__;
})()
})();
var state__32869__auto__ = (function (){var statearr_34983 = f__32868__auto__();
(statearr_34983[(6)] = c__32867__auto___35983);

return statearr_34983;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32869__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34988 = arguments.length;
switch (G__34988) {
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
var c__32867__auto___36021 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32868__auto__ = (function (){var switch__32679__auto__ = (function (state_35037){
var state_val_35038 = (state_35037[(1)]);
if((state_val_35038 === (7))){
var inst_35033 = (state_35037[(2)]);
var state_35037__$1 = state_35037;
var statearr_35043_36023 = state_35037__$1;
(statearr_35043_36023[(2)] = inst_35033);

(statearr_35043_36023[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35038 === (1))){
var inst_34989 = [];
var inst_34990 = inst_34989;
var inst_34991 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35037__$1 = (function (){var statearr_35044 = state_35037;
(statearr_35044[(7)] = inst_34990);

(statearr_35044[(8)] = inst_34991);

return statearr_35044;
})();
var statearr_35045_36028 = state_35037__$1;
(statearr_35045_36028[(2)] = null);

(statearr_35045_36028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35038 === (4))){
var inst_34994 = (state_35037[(9)]);
var inst_34994__$1 = (state_35037[(2)]);
var inst_34995 = (inst_34994__$1 == null);
var inst_34996 = cljs.core.not(inst_34995);
var state_35037__$1 = (function (){var statearr_35046 = state_35037;
(statearr_35046[(9)] = inst_34994__$1);

return statearr_35046;
})();
if(inst_34996){
var statearr_35047_36029 = state_35037__$1;
(statearr_35047_36029[(1)] = (5));

} else {
var statearr_35048_36030 = state_35037__$1;
(statearr_35048_36030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35038 === (15))){
var inst_34990 = (state_35037[(7)]);
var inst_35025 = cljs.core.vec(inst_34990);
var state_35037__$1 = state_35037;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35037__$1,(18),out,inst_35025);
} else {
if((state_val_35038 === (13))){
var inst_35020 = (state_35037[(2)]);
var state_35037__$1 = state_35037;
var statearr_35049_36034 = state_35037__$1;
(statearr_35049_36034[(2)] = inst_35020);

(statearr_35049_36034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35038 === (6))){
var inst_34990 = (state_35037[(7)]);
var inst_35022 = inst_34990.length;
var inst_35023 = (inst_35022 > (0));
var state_35037__$1 = state_35037;
if(cljs.core.truth_(inst_35023)){
var statearr_35050_36041 = state_35037__$1;
(statearr_35050_36041[(1)] = (15));

} else {
var statearr_35051_36042 = state_35037__$1;
(statearr_35051_36042[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35038 === (17))){
var inst_35030 = (state_35037[(2)]);
var inst_35031 = cljs.core.async.close_BANG_(out);
var state_35037__$1 = (function (){var statearr_35053 = state_35037;
(statearr_35053[(10)] = inst_35030);

return statearr_35053;
})();
var statearr_35054_36046 = state_35037__$1;
(statearr_35054_36046[(2)] = inst_35031);

(statearr_35054_36046[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35038 === (3))){
var inst_35035 = (state_35037[(2)]);
var state_35037__$1 = state_35037;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35037__$1,inst_35035);
} else {
if((state_val_35038 === (12))){
var inst_34990 = (state_35037[(7)]);
var inst_35010 = cljs.core.vec(inst_34990);
var state_35037__$1 = state_35037;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35037__$1,(14),out,inst_35010);
} else {
if((state_val_35038 === (2))){
var state_35037__$1 = state_35037;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35037__$1,(4),ch);
} else {
if((state_val_35038 === (11))){
var inst_34990 = (state_35037[(7)]);
var inst_34994 = (state_35037[(9)]);
var inst_34998 = (state_35037[(11)]);
var inst_35006 = inst_34990.push(inst_34994);
var tmp35056 = inst_34990;
var inst_34990__$1 = tmp35056;
var inst_34991 = inst_34998;
var state_35037__$1 = (function (){var statearr_35057 = state_35037;
(statearr_35057[(7)] = inst_34990__$1);

(statearr_35057[(8)] = inst_34991);

(statearr_35057[(12)] = inst_35006);

return statearr_35057;
})();
var statearr_35061_36053 = state_35037__$1;
(statearr_35061_36053[(2)] = null);

(statearr_35061_36053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35038 === (9))){
var inst_34991 = (state_35037[(8)]);
var inst_35002 = cljs.core.keyword_identical_QMARK_(inst_34991,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35037__$1 = state_35037;
var statearr_35062_36054 = state_35037__$1;
(statearr_35062_36054[(2)] = inst_35002);

(statearr_35062_36054[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35038 === (5))){
var inst_34999 = (state_35037[(13)]);
var inst_34991 = (state_35037[(8)]);
var inst_34994 = (state_35037[(9)]);
var inst_34998 = (state_35037[(11)]);
var inst_34998__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34994) : f.call(null,inst_34994));
var inst_34999__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34998__$1,inst_34991);
var state_35037__$1 = (function (){var statearr_35063 = state_35037;
(statearr_35063[(13)] = inst_34999__$1);

(statearr_35063[(11)] = inst_34998__$1);

return statearr_35063;
})();
if(inst_34999__$1){
var statearr_35064_36055 = state_35037__$1;
(statearr_35064_36055[(1)] = (8));

} else {
var statearr_35065_36056 = state_35037__$1;
(statearr_35065_36056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35038 === (14))){
var inst_34994 = (state_35037[(9)]);
var inst_34998 = (state_35037[(11)]);
var inst_35012 = (state_35037[(2)]);
var inst_35016 = [];
var inst_35017 = inst_35016.push(inst_34994);
var inst_34990 = inst_35016;
var inst_34991 = inst_34998;
var state_35037__$1 = (function (){var statearr_35066 = state_35037;
(statearr_35066[(7)] = inst_34990);

(statearr_35066[(14)] = inst_35017);

(statearr_35066[(8)] = inst_34991);

(statearr_35066[(15)] = inst_35012);

return statearr_35066;
})();
var statearr_35067_36057 = state_35037__$1;
(statearr_35067_36057[(2)] = null);

(statearr_35067_36057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35038 === (16))){
var state_35037__$1 = state_35037;
var statearr_35068_36058 = state_35037__$1;
(statearr_35068_36058[(2)] = null);

(statearr_35068_36058[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35038 === (10))){
var inst_35004 = (state_35037[(2)]);
var state_35037__$1 = state_35037;
if(cljs.core.truth_(inst_35004)){
var statearr_35069_36059 = state_35037__$1;
(statearr_35069_36059[(1)] = (11));

} else {
var statearr_35070_36060 = state_35037__$1;
(statearr_35070_36060[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35038 === (18))){
var inst_35027 = (state_35037[(2)]);
var state_35037__$1 = state_35037;
var statearr_35071_36061 = state_35037__$1;
(statearr_35071_36061[(2)] = inst_35027);

(statearr_35071_36061[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35038 === (8))){
var inst_34999 = (state_35037[(13)]);
var state_35037__$1 = state_35037;
var statearr_35072_36062 = state_35037__$1;
(statearr_35072_36062[(2)] = inst_34999);

(statearr_35072_36062[(1)] = (10));


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
var cljs$core$async$state_machine__32680__auto__ = null;
var cljs$core$async$state_machine__32680__auto____0 = (function (){
var statearr_35073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35073[(0)] = cljs$core$async$state_machine__32680__auto__);

(statearr_35073[(1)] = (1));

return statearr_35073;
});
var cljs$core$async$state_machine__32680__auto____1 = (function (state_35037){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_35037);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e35074){var ex__32683__auto__ = e35074;
var statearr_35075_36063 = state_35037;
(statearr_35075_36063[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_35037[(4)]))){
var statearr_35076_36070 = state_35037;
(statearr_35076_36070[(1)] = cljs.core.first((state_35037[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36072 = state_35037;
state_35037 = G__36072;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
cljs$core$async$state_machine__32680__auto__ = function(state_35037){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32680__auto____1.call(this,state_35037);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32680__auto____0;
cljs$core$async$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32680__auto____1;
return cljs$core$async$state_machine__32680__auto__;
})()
})();
var state__32869__auto__ = (function (){var statearr_35077 = f__32868__auto__();
(statearr_35077[(6)] = c__32867__auto___36021);

return statearr_35077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32869__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
