goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__37014,p__37015){
var map__37016 = p__37014;
var map__37016__$1 = cljs.core.__destructure_map(map__37016);
var svc = map__37016__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37016__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37016__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37016__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37017 = p__37015;
var map__37017__$1 = cljs.core.__destructure_map(map__37017);
var msg = map__37017__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37017__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37017__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37017__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37017__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__37022,p__37023){
var map__37024 = p__37022;
var map__37024__$1 = cljs.core.__destructure_map(map__37024);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37024__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__37025 = p__37023;
var map__37025__$1 = cljs.core.__destructure_map(map__37025);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37025__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__37031,p__37032){
var map__37033 = p__37031;
var map__37033__$1 = cljs.core.__destructure_map(map__37033);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37033__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37033__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37034 = p__37032;
var map__37034__$1 = cljs.core.__destructure_map(map__37034);
var msg = map__37034__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37034__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__37041,tid){
var map__37042 = p__37041;
var map__37042__$1 = cljs.core.__destructure_map(map__37042);
var svc = map__37042__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37042__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__37055 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__37056 = null;
var count__37057 = (0);
var i__37058 = (0);
while(true){
if((i__37058 < count__37057)){
var vec__37074 = chunk__37056.cljs$core$IIndexed$_nth$arity$2(null,i__37058);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37074,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37074,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37101 = seq__37055;
var G__37102 = chunk__37056;
var G__37103 = count__37057;
var G__37104 = (i__37058 + (1));
seq__37055 = G__37101;
chunk__37056 = G__37102;
count__37057 = G__37103;
i__37058 = G__37104;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37055);
if(temp__5753__auto__){
var seq__37055__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37055__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37055__$1);
var G__37105 = cljs.core.chunk_rest(seq__37055__$1);
var G__37106 = c__4679__auto__;
var G__37107 = cljs.core.count(c__4679__auto__);
var G__37108 = (0);
seq__37055 = G__37105;
chunk__37056 = G__37106;
count__37057 = G__37107;
i__37058 = G__37108;
continue;
} else {
var vec__37082 = cljs.core.first(seq__37055__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37082,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37082,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37112 = cljs.core.next(seq__37055__$1);
var G__37113 = null;
var G__37114 = (0);
var G__37115 = (0);
seq__37055 = G__37112;
chunk__37056 = G__37113;
count__37057 = G__37114;
i__37058 = G__37115;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__37047_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__37047_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__37048_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__37048_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__37049_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__37049_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__37050_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__37050_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__37090){
var map__37091 = p__37090;
var map__37091__$1 = cljs.core.__destructure_map(map__37091);
var svc = map__37091__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37091__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37091__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
