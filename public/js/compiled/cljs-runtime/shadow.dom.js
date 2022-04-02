goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_36115 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_36115(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_36116 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_36116(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35111 = coll;
var G__35112 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35111,G__35112) : shadow.dom.lazy_native_coll_seq.call(null,G__35111,G__35112));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__35165 = arguments.length;
switch (G__35165) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__35173 = arguments.length;
switch (G__35173) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__35182 = arguments.length;
switch (G__35182) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35193 = arguments.length;
switch (G__35193) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35198 = arguments.length;
switch (G__35198) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35213 = arguments.length;
switch (G__35213) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35232){if((e35232 instanceof Object)){
var e = e35232;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35232;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35247 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35248 = null;
var count__35249 = (0);
var i__35250 = (0);
while(true){
if((i__35250 < count__35249)){
var el = chunk__35248.cljs$core$IIndexed$_nth$arity$2(null,i__35250);
var handler_36135__$1 = ((function (seq__35247,chunk__35248,count__35249,i__35250,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35247,chunk__35248,count__35249,i__35250,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36135__$1);


var G__36136 = seq__35247;
var G__36137 = chunk__35248;
var G__36138 = count__35249;
var G__36139 = (i__35250 + (1));
seq__35247 = G__36136;
chunk__35248 = G__36137;
count__35249 = G__36138;
i__35250 = G__36139;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35247);
if(temp__5753__auto__){
var seq__35247__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35247__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35247__$1);
var G__36140 = cljs.core.chunk_rest(seq__35247__$1);
var G__36141 = c__4679__auto__;
var G__36142 = cljs.core.count(c__4679__auto__);
var G__36143 = (0);
seq__35247 = G__36140;
chunk__35248 = G__36141;
count__35249 = G__36142;
i__35250 = G__36143;
continue;
} else {
var el = cljs.core.first(seq__35247__$1);
var handler_36144__$1 = ((function (seq__35247,chunk__35248,count__35249,i__35250,el,seq__35247__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35247,chunk__35248,count__35249,i__35250,el,seq__35247__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36144__$1);


var G__36146 = cljs.core.next(seq__35247__$1);
var G__36147 = null;
var G__36148 = (0);
var G__36149 = (0);
seq__35247 = G__36146;
chunk__35248 = G__36147;
count__35249 = G__36148;
i__35250 = G__36149;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35274 = arguments.length;
switch (G__35274) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35283 = cljs.core.seq(events);
var chunk__35285 = null;
var count__35286 = (0);
var i__35287 = (0);
while(true){
if((i__35287 < count__35286)){
var vec__35304 = chunk__35285.cljs$core$IIndexed$_nth$arity$2(null,i__35287);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35304,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35304,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36151 = seq__35283;
var G__36152 = chunk__35285;
var G__36153 = count__35286;
var G__36154 = (i__35287 + (1));
seq__35283 = G__36151;
chunk__35285 = G__36152;
count__35286 = G__36153;
i__35287 = G__36154;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35283);
if(temp__5753__auto__){
var seq__35283__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35283__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35283__$1);
var G__36155 = cljs.core.chunk_rest(seq__35283__$1);
var G__36156 = c__4679__auto__;
var G__36157 = cljs.core.count(c__4679__auto__);
var G__36158 = (0);
seq__35283 = G__36155;
chunk__35285 = G__36156;
count__35286 = G__36157;
i__35287 = G__36158;
continue;
} else {
var vec__35314 = cljs.core.first(seq__35283__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35314,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35314,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36159 = cljs.core.next(seq__35283__$1);
var G__36160 = null;
var G__36161 = (0);
var G__36162 = (0);
seq__35283 = G__36159;
chunk__35285 = G__36160;
count__35286 = G__36161;
i__35287 = G__36162;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35324 = cljs.core.seq(styles);
var chunk__35325 = null;
var count__35326 = (0);
var i__35327 = (0);
while(true){
if((i__35327 < count__35326)){
var vec__35347 = chunk__35325.cljs$core$IIndexed$_nth$arity$2(null,i__35327);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35347,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35347,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36163 = seq__35324;
var G__36164 = chunk__35325;
var G__36165 = count__35326;
var G__36166 = (i__35327 + (1));
seq__35324 = G__36163;
chunk__35325 = G__36164;
count__35326 = G__36165;
i__35327 = G__36166;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35324);
if(temp__5753__auto__){
var seq__35324__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35324__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35324__$1);
var G__36167 = cljs.core.chunk_rest(seq__35324__$1);
var G__36168 = c__4679__auto__;
var G__36169 = cljs.core.count(c__4679__auto__);
var G__36170 = (0);
seq__35324 = G__36167;
chunk__35325 = G__36168;
count__35326 = G__36169;
i__35327 = G__36170;
continue;
} else {
var vec__35353 = cljs.core.first(seq__35324__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35353,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35353,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36173 = cljs.core.next(seq__35324__$1);
var G__36174 = null;
var G__36175 = (0);
var G__36176 = (0);
seq__35324 = G__36173;
chunk__35325 = G__36174;
count__35326 = G__36175;
i__35327 = G__36176;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35376_36177 = key;
var G__35376_36178__$1 = (((G__35376_36177 instanceof cljs.core.Keyword))?G__35376_36177.fqn:null);
switch (G__35376_36178__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_36189 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_36189,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_36189,"aria-");
}
})())){
el.setAttribute(ks_36189,value);
} else {
(el[ks_36189] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35425){
var map__35426 = p__35425;
var map__35426__$1 = cljs.core.__destructure_map(map__35426);
var props = map__35426__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35426__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35427 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35427,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35427,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35427,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35430 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35430,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35430;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35436 = arguments.length;
switch (G__35436) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35449){
var vec__35452 = p__35449;
var seq__35453 = cljs.core.seq(vec__35452);
var first__35454 = cljs.core.first(seq__35453);
var seq__35453__$1 = cljs.core.next(seq__35453);
var nn = first__35454;
var first__35454__$1 = cljs.core.first(seq__35453__$1);
var seq__35453__$2 = cljs.core.next(seq__35453__$1);
var np = first__35454__$1;
var nc = seq__35453__$2;
var node = vec__35452;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35458 = nn;
var G__35459 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35458,G__35459) : create_fn.call(null,G__35458,G__35459));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35461 = nn;
var G__35462 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35461,G__35462) : create_fn.call(null,G__35461,G__35462));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35468 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35468,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35468,(1),null);
var seq__35472_36203 = cljs.core.seq(node_children);
var chunk__35473_36204 = null;
var count__35474_36205 = (0);
var i__35475_36206 = (0);
while(true){
if((i__35475_36206 < count__35474_36205)){
var child_struct_36211 = chunk__35473_36204.cljs$core$IIndexed$_nth$arity$2(null,i__35475_36206);
var children_36212 = shadow.dom.dom_node(child_struct_36211);
if(cljs.core.seq_QMARK_(children_36212)){
var seq__35531_36213 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36212));
var chunk__35533_36214 = null;
var count__35534_36215 = (0);
var i__35535_36216 = (0);
while(true){
if((i__35535_36216 < count__35534_36215)){
var child_36217 = chunk__35533_36214.cljs$core$IIndexed$_nth$arity$2(null,i__35535_36216);
if(cljs.core.truth_(child_36217)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36217);


var G__36218 = seq__35531_36213;
var G__36219 = chunk__35533_36214;
var G__36220 = count__35534_36215;
var G__36221 = (i__35535_36216 + (1));
seq__35531_36213 = G__36218;
chunk__35533_36214 = G__36219;
count__35534_36215 = G__36220;
i__35535_36216 = G__36221;
continue;
} else {
var G__36222 = seq__35531_36213;
var G__36223 = chunk__35533_36214;
var G__36224 = count__35534_36215;
var G__36225 = (i__35535_36216 + (1));
seq__35531_36213 = G__36222;
chunk__35533_36214 = G__36223;
count__35534_36215 = G__36224;
i__35535_36216 = G__36225;
continue;
}
} else {
var temp__5753__auto___36226 = cljs.core.seq(seq__35531_36213);
if(temp__5753__auto___36226){
var seq__35531_36227__$1 = temp__5753__auto___36226;
if(cljs.core.chunked_seq_QMARK_(seq__35531_36227__$1)){
var c__4679__auto___36228 = cljs.core.chunk_first(seq__35531_36227__$1);
var G__36230 = cljs.core.chunk_rest(seq__35531_36227__$1);
var G__36231 = c__4679__auto___36228;
var G__36232 = cljs.core.count(c__4679__auto___36228);
var G__36233 = (0);
seq__35531_36213 = G__36230;
chunk__35533_36214 = G__36231;
count__35534_36215 = G__36232;
i__35535_36216 = G__36233;
continue;
} else {
var child_36234 = cljs.core.first(seq__35531_36227__$1);
if(cljs.core.truth_(child_36234)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36234);


var G__36235 = cljs.core.next(seq__35531_36227__$1);
var G__36236 = null;
var G__36237 = (0);
var G__36238 = (0);
seq__35531_36213 = G__36235;
chunk__35533_36214 = G__36236;
count__35534_36215 = G__36237;
i__35535_36216 = G__36238;
continue;
} else {
var G__36239 = cljs.core.next(seq__35531_36227__$1);
var G__36240 = null;
var G__36241 = (0);
var G__36242 = (0);
seq__35531_36213 = G__36239;
chunk__35533_36214 = G__36240;
count__35534_36215 = G__36241;
i__35535_36216 = G__36242;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36212);
}


var G__36243 = seq__35472_36203;
var G__36244 = chunk__35473_36204;
var G__36245 = count__35474_36205;
var G__36246 = (i__35475_36206 + (1));
seq__35472_36203 = G__36243;
chunk__35473_36204 = G__36244;
count__35474_36205 = G__36245;
i__35475_36206 = G__36246;
continue;
} else {
var temp__5753__auto___36247 = cljs.core.seq(seq__35472_36203);
if(temp__5753__auto___36247){
var seq__35472_36248__$1 = temp__5753__auto___36247;
if(cljs.core.chunked_seq_QMARK_(seq__35472_36248__$1)){
var c__4679__auto___36249 = cljs.core.chunk_first(seq__35472_36248__$1);
var G__36250 = cljs.core.chunk_rest(seq__35472_36248__$1);
var G__36251 = c__4679__auto___36249;
var G__36252 = cljs.core.count(c__4679__auto___36249);
var G__36253 = (0);
seq__35472_36203 = G__36250;
chunk__35473_36204 = G__36251;
count__35474_36205 = G__36252;
i__35475_36206 = G__36253;
continue;
} else {
var child_struct_36254 = cljs.core.first(seq__35472_36248__$1);
var children_36259 = shadow.dom.dom_node(child_struct_36254);
if(cljs.core.seq_QMARK_(children_36259)){
var seq__35546_36260 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36259));
var chunk__35548_36261 = null;
var count__35549_36262 = (0);
var i__35550_36263 = (0);
while(true){
if((i__35550_36263 < count__35549_36262)){
var child_36264 = chunk__35548_36261.cljs$core$IIndexed$_nth$arity$2(null,i__35550_36263);
if(cljs.core.truth_(child_36264)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36264);


var G__36265 = seq__35546_36260;
var G__36266 = chunk__35548_36261;
var G__36267 = count__35549_36262;
var G__36268 = (i__35550_36263 + (1));
seq__35546_36260 = G__36265;
chunk__35548_36261 = G__36266;
count__35549_36262 = G__36267;
i__35550_36263 = G__36268;
continue;
} else {
var G__36269 = seq__35546_36260;
var G__36270 = chunk__35548_36261;
var G__36271 = count__35549_36262;
var G__36272 = (i__35550_36263 + (1));
seq__35546_36260 = G__36269;
chunk__35548_36261 = G__36270;
count__35549_36262 = G__36271;
i__35550_36263 = G__36272;
continue;
}
} else {
var temp__5753__auto___36273__$1 = cljs.core.seq(seq__35546_36260);
if(temp__5753__auto___36273__$1){
var seq__35546_36274__$1 = temp__5753__auto___36273__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35546_36274__$1)){
var c__4679__auto___36275 = cljs.core.chunk_first(seq__35546_36274__$1);
var G__36276 = cljs.core.chunk_rest(seq__35546_36274__$1);
var G__36277 = c__4679__auto___36275;
var G__36278 = cljs.core.count(c__4679__auto___36275);
var G__36279 = (0);
seq__35546_36260 = G__36276;
chunk__35548_36261 = G__36277;
count__35549_36262 = G__36278;
i__35550_36263 = G__36279;
continue;
} else {
var child_36280 = cljs.core.first(seq__35546_36274__$1);
if(cljs.core.truth_(child_36280)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36280);


var G__36281 = cljs.core.next(seq__35546_36274__$1);
var G__36282 = null;
var G__36283 = (0);
var G__36284 = (0);
seq__35546_36260 = G__36281;
chunk__35548_36261 = G__36282;
count__35549_36262 = G__36283;
i__35550_36263 = G__36284;
continue;
} else {
var G__36285 = cljs.core.next(seq__35546_36274__$1);
var G__36286 = null;
var G__36287 = (0);
var G__36288 = (0);
seq__35546_36260 = G__36285;
chunk__35548_36261 = G__36286;
count__35549_36262 = G__36287;
i__35550_36263 = G__36288;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36259);
}


var G__36289 = cljs.core.next(seq__35472_36248__$1);
var G__36290 = null;
var G__36291 = (0);
var G__36292 = (0);
seq__35472_36203 = G__36289;
chunk__35473_36204 = G__36290;
count__35474_36205 = G__36291;
i__35475_36206 = G__36292;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35571 = cljs.core.seq(node);
var chunk__35572 = null;
var count__35573 = (0);
var i__35574 = (0);
while(true){
if((i__35574 < count__35573)){
var n = chunk__35572.cljs$core$IIndexed$_nth$arity$2(null,i__35574);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36295 = seq__35571;
var G__36296 = chunk__35572;
var G__36297 = count__35573;
var G__36298 = (i__35574 + (1));
seq__35571 = G__36295;
chunk__35572 = G__36296;
count__35573 = G__36297;
i__35574 = G__36298;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35571);
if(temp__5753__auto__){
var seq__35571__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35571__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35571__$1);
var G__36299 = cljs.core.chunk_rest(seq__35571__$1);
var G__36300 = c__4679__auto__;
var G__36301 = cljs.core.count(c__4679__auto__);
var G__36302 = (0);
seq__35571 = G__36299;
chunk__35572 = G__36300;
count__35573 = G__36301;
i__35574 = G__36302;
continue;
} else {
var n = cljs.core.first(seq__35571__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36303 = cljs.core.next(seq__35571__$1);
var G__36304 = null;
var G__36305 = (0);
var G__36306 = (0);
seq__35571 = G__36303;
chunk__35572 = G__36304;
count__35573 = G__36305;
i__35574 = G__36306;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35589 = arguments.length;
switch (G__35589) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35604 = arguments.length;
switch (G__35604) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35641 = arguments.length;
switch (G__35641) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36334 = arguments.length;
var i__4865__auto___36335 = (0);
while(true){
if((i__4865__auto___36335 < len__4864__auto___36334)){
args__4870__auto__.push((arguments[i__4865__auto___36335]));

var G__36336 = (i__4865__auto___36335 + (1));
i__4865__auto___36335 = G__36336;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35666_36337 = cljs.core.seq(nodes);
var chunk__35667_36338 = null;
var count__35668_36339 = (0);
var i__35669_36340 = (0);
while(true){
if((i__35669_36340 < count__35668_36339)){
var node_36342 = chunk__35667_36338.cljs$core$IIndexed$_nth$arity$2(null,i__35669_36340);
fragment.appendChild(shadow.dom._to_dom(node_36342));


var G__36343 = seq__35666_36337;
var G__36344 = chunk__35667_36338;
var G__36345 = count__35668_36339;
var G__36346 = (i__35669_36340 + (1));
seq__35666_36337 = G__36343;
chunk__35667_36338 = G__36344;
count__35668_36339 = G__36345;
i__35669_36340 = G__36346;
continue;
} else {
var temp__5753__auto___36347 = cljs.core.seq(seq__35666_36337);
if(temp__5753__auto___36347){
var seq__35666_36348__$1 = temp__5753__auto___36347;
if(cljs.core.chunked_seq_QMARK_(seq__35666_36348__$1)){
var c__4679__auto___36349 = cljs.core.chunk_first(seq__35666_36348__$1);
var G__36350 = cljs.core.chunk_rest(seq__35666_36348__$1);
var G__36351 = c__4679__auto___36349;
var G__36352 = cljs.core.count(c__4679__auto___36349);
var G__36353 = (0);
seq__35666_36337 = G__36350;
chunk__35667_36338 = G__36351;
count__35668_36339 = G__36352;
i__35669_36340 = G__36353;
continue;
} else {
var node_36354 = cljs.core.first(seq__35666_36348__$1);
fragment.appendChild(shadow.dom._to_dom(node_36354));


var G__36355 = cljs.core.next(seq__35666_36348__$1);
var G__36356 = null;
var G__36357 = (0);
var G__36358 = (0);
seq__35666_36337 = G__36355;
chunk__35667_36338 = G__36356;
count__35668_36339 = G__36357;
i__35669_36340 = G__36358;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35660){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35660));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35682_36365 = cljs.core.seq(scripts);
var chunk__35683_36366 = null;
var count__35684_36367 = (0);
var i__35685_36368 = (0);
while(true){
if((i__35685_36368 < count__35684_36367)){
var vec__35702_36370 = chunk__35683_36366.cljs$core$IIndexed$_nth$arity$2(null,i__35685_36368);
var script_tag_36371 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35702_36370,(0),null);
var script_body_36372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35702_36370,(1),null);
eval(script_body_36372);


var G__36377 = seq__35682_36365;
var G__36378 = chunk__35683_36366;
var G__36379 = count__35684_36367;
var G__36380 = (i__35685_36368 + (1));
seq__35682_36365 = G__36377;
chunk__35683_36366 = G__36378;
count__35684_36367 = G__36379;
i__35685_36368 = G__36380;
continue;
} else {
var temp__5753__auto___36385 = cljs.core.seq(seq__35682_36365);
if(temp__5753__auto___36385){
var seq__35682_36387__$1 = temp__5753__auto___36385;
if(cljs.core.chunked_seq_QMARK_(seq__35682_36387__$1)){
var c__4679__auto___36389 = cljs.core.chunk_first(seq__35682_36387__$1);
var G__36390 = cljs.core.chunk_rest(seq__35682_36387__$1);
var G__36391 = c__4679__auto___36389;
var G__36392 = cljs.core.count(c__4679__auto___36389);
var G__36393 = (0);
seq__35682_36365 = G__36390;
chunk__35683_36366 = G__36391;
count__35684_36367 = G__36392;
i__35685_36368 = G__36393;
continue;
} else {
var vec__35710_36395 = cljs.core.first(seq__35682_36387__$1);
var script_tag_36396 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35710_36395,(0),null);
var script_body_36397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35710_36395,(1),null);
eval(script_body_36397);


var G__36398 = cljs.core.next(seq__35682_36387__$1);
var G__36399 = null;
var G__36400 = (0);
var G__36401 = (0);
seq__35682_36365 = G__36398;
chunk__35683_36366 = G__36399;
count__35684_36367 = G__36400;
i__35685_36368 = G__36401;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35716){
var vec__35717 = p__35716;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35717,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35717,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35731 = arguments.length;
switch (G__35731) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35753 = cljs.core.seq(style_keys);
var chunk__35754 = null;
var count__35755 = (0);
var i__35756 = (0);
while(true){
if((i__35756 < count__35755)){
var it = chunk__35754.cljs$core$IIndexed$_nth$arity$2(null,i__35756);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36440 = seq__35753;
var G__36441 = chunk__35754;
var G__36442 = count__35755;
var G__36443 = (i__35756 + (1));
seq__35753 = G__36440;
chunk__35754 = G__36441;
count__35755 = G__36442;
i__35756 = G__36443;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__35753);
if(temp__5753__auto__){
var seq__35753__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35753__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__35753__$1);
var G__36445 = cljs.core.chunk_rest(seq__35753__$1);
var G__36446 = c__4679__auto__;
var G__36447 = cljs.core.count(c__4679__auto__);
var G__36448 = (0);
seq__35753 = G__36445;
chunk__35754 = G__36446;
count__35755 = G__36447;
i__35756 = G__36448;
continue;
} else {
var it = cljs.core.first(seq__35753__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36452 = cljs.core.next(seq__35753__$1);
var G__36453 = null;
var G__36454 = (0);
var G__36455 = (0);
seq__35753 = G__36452;
chunk__35754 = G__36453;
count__35755 = G__36454;
i__35756 = G__36455;
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
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k35772,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__35795 = k35772;
var G__35795__$1 = (((G__35795 instanceof cljs.core.Keyword))?G__35795.fqn:null);
switch (G__35795__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35772,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__35798){
var vec__35800 = p__35798;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35800,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35800,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35771){
var self__ = this;
var G__35771__$1 = this;
return (new cljs.core.RecordIter((0),G__35771__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35773,other35774){
var self__ = this;
var this35773__$1 = this;
return (((!((other35774 == null)))) && ((((this35773__$1.constructor === other35774.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35773__$1.x,other35774.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35773__$1.y,other35774.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35773__$1.__extmap,other35774.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k35772){
var self__ = this;
var this__4509__auto____$1 = this;
var G__35833 = k35772;
var G__35833__$1 = (((G__35833 instanceof cljs.core.Keyword))?G__35833.fqn:null);
switch (G__35833__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35772);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__35771){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__35840 = cljs.core.keyword_identical_QMARK_;
var expr__35841 = k__4511__auto__;
if(cljs.core.truth_((pred__35840.cljs$core$IFn$_invoke$arity$2 ? pred__35840.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35841) : pred__35840.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35841)))){
return (new shadow.dom.Coordinate(G__35771,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35840.cljs$core$IFn$_invoke$arity$2 ? pred__35840.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35841) : pred__35840.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35841)))){
return (new shadow.dom.Coordinate(self__.x,G__35771,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__35771),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__35771){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35771,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35784){
var extmap__4542__auto__ = (function (){var G__35856 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35784,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35784)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35856);
} else {
return G__35856;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35784),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35784),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
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
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k35877,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__35881 = k35877;
var G__35881__$1 = (((G__35881 instanceof cljs.core.Keyword))?G__35881.fqn:null);
switch (G__35881__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35877,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__35885){
var vec__35886 = p__35885;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35886,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35886,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35876){
var self__ = this;
var G__35876__$1 = this;
return (new cljs.core.RecordIter((0),G__35876__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35878,other35879){
var self__ = this;
var this35878__$1 = this;
return (((!((other35879 == null)))) && ((((this35878__$1.constructor === other35879.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35878__$1.w,other35879.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35878__$1.h,other35879.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35878__$1.__extmap,other35879.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k35877){
var self__ = this;
var this__4509__auto____$1 = this;
var G__35893 = k35877;
var G__35893__$1 = (((G__35893 instanceof cljs.core.Keyword))?G__35893.fqn:null);
switch (G__35893__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k35877);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__35876){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__35898 = cljs.core.keyword_identical_QMARK_;
var expr__35899 = k__4511__auto__;
if(cljs.core.truth_((pred__35898.cljs$core$IFn$_invoke$arity$2 ? pred__35898.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35899) : pred__35898.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35899)))){
return (new shadow.dom.Size(G__35876,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35898.cljs$core$IFn$_invoke$arity$2 ? pred__35898.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35899) : pred__35898.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35899)))){
return (new shadow.dom.Size(self__.w,G__35876,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__35876),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__35876){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35876,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35880){
var extmap__4542__auto__ = (function (){var G__35910 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35880,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35880)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35910);
} else {
return G__35910;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35880),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35880),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__36568 = (i + (1));
var G__36569 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36568;
ret = G__36569;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35942){
var vec__35944 = p__35942;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35944,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35944,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35951 = arguments.length;
switch (G__35951) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36600 = ps;
var G__36601 = (i + (1));
el__$1 = G__36600;
i = G__36601;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35986 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35986,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35986,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35986,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35993_36617 = cljs.core.seq(props);
var chunk__35994_36618 = null;
var count__35995_36619 = (0);
var i__35996_36620 = (0);
while(true){
if((i__35996_36620 < count__35995_36619)){
var vec__36009_36624 = chunk__35994_36618.cljs$core$IIndexed$_nth$arity$2(null,i__35996_36620);
var k_36625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36009_36624,(0),null);
var v_36626 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36009_36624,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_36625);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36625),v_36626);


var G__36639 = seq__35993_36617;
var G__36640 = chunk__35994_36618;
var G__36641 = count__35995_36619;
var G__36642 = (i__35996_36620 + (1));
seq__35993_36617 = G__36639;
chunk__35994_36618 = G__36640;
count__35995_36619 = G__36641;
i__35996_36620 = G__36642;
continue;
} else {
var temp__5753__auto___36643 = cljs.core.seq(seq__35993_36617);
if(temp__5753__auto___36643){
var seq__35993_36644__$1 = temp__5753__auto___36643;
if(cljs.core.chunked_seq_QMARK_(seq__35993_36644__$1)){
var c__4679__auto___36649 = cljs.core.chunk_first(seq__35993_36644__$1);
var G__36650 = cljs.core.chunk_rest(seq__35993_36644__$1);
var G__36651 = c__4679__auto___36649;
var G__36652 = cljs.core.count(c__4679__auto___36649);
var G__36653 = (0);
seq__35993_36617 = G__36650;
chunk__35994_36618 = G__36651;
count__35995_36619 = G__36652;
i__35996_36620 = G__36653;
continue;
} else {
var vec__36015_36654 = cljs.core.first(seq__35993_36644__$1);
var k_36655 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36015_36654,(0),null);
var v_36656 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36015_36654,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_36655);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36655),v_36656);


var G__36661 = cljs.core.next(seq__35993_36644__$1);
var G__36662 = null;
var G__36663 = (0);
var G__36664 = (0);
seq__35993_36617 = G__36661;
chunk__35994_36618 = G__36662;
count__35995_36619 = G__36663;
i__35996_36620 = G__36664;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__36031 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36031,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36031,(1),null);
var seq__36035_36679 = cljs.core.seq(node_children);
var chunk__36037_36680 = null;
var count__36038_36681 = (0);
var i__36039_36682 = (0);
while(true){
if((i__36039_36682 < count__36038_36681)){
var child_struct_36684 = chunk__36037_36680.cljs$core$IIndexed$_nth$arity$2(null,i__36039_36682);
if((!((child_struct_36684 == null)))){
if(typeof child_struct_36684 === 'string'){
var text_36689 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36689),child_struct_36684].join(''));
} else {
var children_36690 = shadow.dom.svg_node(child_struct_36684);
if(cljs.core.seq_QMARK_(children_36690)){
var seq__36073_36692 = cljs.core.seq(children_36690);
var chunk__36075_36693 = null;
var count__36076_36694 = (0);
var i__36077_36695 = (0);
while(true){
if((i__36077_36695 < count__36076_36694)){
var child_36696 = chunk__36075_36693.cljs$core$IIndexed$_nth$arity$2(null,i__36077_36695);
if(cljs.core.truth_(child_36696)){
node.appendChild(child_36696);


var G__36697 = seq__36073_36692;
var G__36698 = chunk__36075_36693;
var G__36699 = count__36076_36694;
var G__36700 = (i__36077_36695 + (1));
seq__36073_36692 = G__36697;
chunk__36075_36693 = G__36698;
count__36076_36694 = G__36699;
i__36077_36695 = G__36700;
continue;
} else {
var G__36701 = seq__36073_36692;
var G__36702 = chunk__36075_36693;
var G__36703 = count__36076_36694;
var G__36704 = (i__36077_36695 + (1));
seq__36073_36692 = G__36701;
chunk__36075_36693 = G__36702;
count__36076_36694 = G__36703;
i__36077_36695 = G__36704;
continue;
}
} else {
var temp__5753__auto___36705 = cljs.core.seq(seq__36073_36692);
if(temp__5753__auto___36705){
var seq__36073_36706__$1 = temp__5753__auto___36705;
if(cljs.core.chunked_seq_QMARK_(seq__36073_36706__$1)){
var c__4679__auto___36709 = cljs.core.chunk_first(seq__36073_36706__$1);
var G__36710 = cljs.core.chunk_rest(seq__36073_36706__$1);
var G__36711 = c__4679__auto___36709;
var G__36712 = cljs.core.count(c__4679__auto___36709);
var G__36713 = (0);
seq__36073_36692 = G__36710;
chunk__36075_36693 = G__36711;
count__36076_36694 = G__36712;
i__36077_36695 = G__36713;
continue;
} else {
var child_36714 = cljs.core.first(seq__36073_36706__$1);
if(cljs.core.truth_(child_36714)){
node.appendChild(child_36714);


var G__36715 = cljs.core.next(seq__36073_36706__$1);
var G__36716 = null;
var G__36717 = (0);
var G__36718 = (0);
seq__36073_36692 = G__36715;
chunk__36075_36693 = G__36716;
count__36076_36694 = G__36717;
i__36077_36695 = G__36718;
continue;
} else {
var G__36719 = cljs.core.next(seq__36073_36706__$1);
var G__36720 = null;
var G__36721 = (0);
var G__36722 = (0);
seq__36073_36692 = G__36719;
chunk__36075_36693 = G__36720;
count__36076_36694 = G__36721;
i__36077_36695 = G__36722;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36690);
}
}


var G__36723 = seq__36035_36679;
var G__36724 = chunk__36037_36680;
var G__36725 = count__36038_36681;
var G__36726 = (i__36039_36682 + (1));
seq__36035_36679 = G__36723;
chunk__36037_36680 = G__36724;
count__36038_36681 = G__36725;
i__36039_36682 = G__36726;
continue;
} else {
var G__36727 = seq__36035_36679;
var G__36728 = chunk__36037_36680;
var G__36729 = count__36038_36681;
var G__36730 = (i__36039_36682 + (1));
seq__36035_36679 = G__36727;
chunk__36037_36680 = G__36728;
count__36038_36681 = G__36729;
i__36039_36682 = G__36730;
continue;
}
} else {
var temp__5753__auto___36731 = cljs.core.seq(seq__36035_36679);
if(temp__5753__auto___36731){
var seq__36035_36732__$1 = temp__5753__auto___36731;
if(cljs.core.chunked_seq_QMARK_(seq__36035_36732__$1)){
var c__4679__auto___36733 = cljs.core.chunk_first(seq__36035_36732__$1);
var G__36734 = cljs.core.chunk_rest(seq__36035_36732__$1);
var G__36735 = c__4679__auto___36733;
var G__36736 = cljs.core.count(c__4679__auto___36733);
var G__36737 = (0);
seq__36035_36679 = G__36734;
chunk__36037_36680 = G__36735;
count__36038_36681 = G__36736;
i__36039_36682 = G__36737;
continue;
} else {
var child_struct_36738 = cljs.core.first(seq__36035_36732__$1);
if((!((child_struct_36738 == null)))){
if(typeof child_struct_36738 === 'string'){
var text_36739 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36739),child_struct_36738].join(''));
} else {
var children_36740 = shadow.dom.svg_node(child_struct_36738);
if(cljs.core.seq_QMARK_(children_36740)){
var seq__36082_36741 = cljs.core.seq(children_36740);
var chunk__36084_36742 = null;
var count__36085_36743 = (0);
var i__36086_36744 = (0);
while(true){
if((i__36086_36744 < count__36085_36743)){
var child_36745 = chunk__36084_36742.cljs$core$IIndexed$_nth$arity$2(null,i__36086_36744);
if(cljs.core.truth_(child_36745)){
node.appendChild(child_36745);


var G__36747 = seq__36082_36741;
var G__36748 = chunk__36084_36742;
var G__36749 = count__36085_36743;
var G__36750 = (i__36086_36744 + (1));
seq__36082_36741 = G__36747;
chunk__36084_36742 = G__36748;
count__36085_36743 = G__36749;
i__36086_36744 = G__36750;
continue;
} else {
var G__36751 = seq__36082_36741;
var G__36752 = chunk__36084_36742;
var G__36753 = count__36085_36743;
var G__36754 = (i__36086_36744 + (1));
seq__36082_36741 = G__36751;
chunk__36084_36742 = G__36752;
count__36085_36743 = G__36753;
i__36086_36744 = G__36754;
continue;
}
} else {
var temp__5753__auto___36755__$1 = cljs.core.seq(seq__36082_36741);
if(temp__5753__auto___36755__$1){
var seq__36082_36756__$1 = temp__5753__auto___36755__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36082_36756__$1)){
var c__4679__auto___36757 = cljs.core.chunk_first(seq__36082_36756__$1);
var G__36758 = cljs.core.chunk_rest(seq__36082_36756__$1);
var G__36759 = c__4679__auto___36757;
var G__36760 = cljs.core.count(c__4679__auto___36757);
var G__36761 = (0);
seq__36082_36741 = G__36758;
chunk__36084_36742 = G__36759;
count__36085_36743 = G__36760;
i__36086_36744 = G__36761;
continue;
} else {
var child_36762 = cljs.core.first(seq__36082_36756__$1);
if(cljs.core.truth_(child_36762)){
node.appendChild(child_36762);


var G__36764 = cljs.core.next(seq__36082_36756__$1);
var G__36765 = null;
var G__36766 = (0);
var G__36767 = (0);
seq__36082_36741 = G__36764;
chunk__36084_36742 = G__36765;
count__36085_36743 = G__36766;
i__36086_36744 = G__36767;
continue;
} else {
var G__36768 = cljs.core.next(seq__36082_36756__$1);
var G__36769 = null;
var G__36770 = (0);
var G__36771 = (0);
seq__36082_36741 = G__36768;
chunk__36084_36742 = G__36769;
count__36085_36743 = G__36770;
i__36086_36744 = G__36771;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36740);
}
}


var G__36772 = cljs.core.next(seq__36035_36732__$1);
var G__36773 = null;
var G__36774 = (0);
var G__36775 = (0);
seq__36035_36679 = G__36772;
chunk__36037_36680 = G__36773;
count__36038_36681 = G__36774;
i__36039_36682 = G__36775;
continue;
} else {
var G__36780 = cljs.core.next(seq__36035_36732__$1);
var G__36781 = null;
var G__36782 = (0);
var G__36783 = (0);
seq__36035_36679 = G__36780;
chunk__36037_36680 = G__36781;
count__36038_36681 = G__36782;
i__36039_36682 = G__36783;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___36791 = arguments.length;
var i__4865__auto___36792 = (0);
while(true){
if((i__4865__auto___36792 < len__4864__auto___36791)){
args__4870__auto__.push((arguments[i__4865__auto___36792]));

var G__36793 = (i__4865__auto___36792 + (1));
i__4865__auto___36792 = G__36793;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq36091){
var G__36092 = cljs.core.first(seq36091);
var seq36091__$1 = cljs.core.next(seq36091);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36092,seq36091__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__36094 = arguments.length;
switch (G__36094) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__32867__auto___36796 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__32868__auto__ = (function (){var switch__32679__auto__ = (function (state_36099){
var state_val_36100 = (state_36099[(1)]);
if((state_val_36100 === (1))){
var state_36099__$1 = state_36099;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36099__$1,(2),once_or_cleanup);
} else {
if((state_val_36100 === (2))){
var inst_36096 = (state_36099[(2)]);
var inst_36097 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36099__$1 = (function (){var statearr_36105 = state_36099;
(statearr_36105[(7)] = inst_36096);

return statearr_36105;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36099__$1,inst_36097);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32680__auto__ = null;
var shadow$dom$state_machine__32680__auto____0 = (function (){
var statearr_36107 = [null,null,null,null,null,null,null,null];
(statearr_36107[(0)] = shadow$dom$state_machine__32680__auto__);

(statearr_36107[(1)] = (1));

return statearr_36107;
});
var shadow$dom$state_machine__32680__auto____1 = (function (state_36099){
while(true){
var ret_value__32681__auto__ = (function (){try{while(true){
var result__32682__auto__ = switch__32679__auto__(state_36099);
if(cljs.core.keyword_identical_QMARK_(result__32682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32682__auto__;
}
break;
}
}catch (e36111){var ex__32683__auto__ = e36111;
var statearr_36112_36800 = state_36099;
(statearr_36112_36800[(2)] = ex__32683__auto__);


if(cljs.core.seq((state_36099[(4)]))){
var statearr_36113_36801 = state_36099;
(statearr_36113_36801[(1)] = cljs.core.first((state_36099[(4)])));

} else {
throw ex__32683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36802 = state_36099;
state_36099 = G__36802;
continue;
} else {
return ret_value__32681__auto__;
}
break;
}
});
shadow$dom$state_machine__32680__auto__ = function(state_36099){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32680__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32680__auto____1.call(this,state_36099);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32680__auto____0;
shadow$dom$state_machine__32680__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32680__auto____1;
return shadow$dom$state_machine__32680__auto__;
})()
})();
var state__32869__auto__ = (function (){var statearr_36114 = f__32868__auto__();
(statearr_36114[(6)] = c__32867__auto___36796);

return statearr_36114;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__32869__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
