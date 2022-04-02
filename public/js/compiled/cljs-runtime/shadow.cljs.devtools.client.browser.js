goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___38214 = arguments.length;
var i__4865__auto___38215 = (0);
while(true){
if((i__4865__auto___38215 < len__4864__auto___38214)){
args__4870__auto__.push((arguments[i__4865__auto___38215]));

var G__38216 = (i__4865__auto___38215 + (1));
i__4865__auto___38215 = G__38216;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37828){
var G__37829 = cljs.core.first(seq37828);
var seq37828__$1 = cljs.core.next(seq37828);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37829,seq37828__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37836 = cljs.core.seq(sources);
var chunk__37837 = null;
var count__37838 = (0);
var i__37839 = (0);
while(true){
if((i__37839 < count__37838)){
var map__37846 = chunk__37837.cljs$core$IIndexed$_nth$arity$2(null,i__37839);
var map__37846__$1 = cljs.core.__destructure_map(map__37846);
var src = map__37846__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37846__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37846__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37846__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37846__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37848){var e_38221 = e37848;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38221);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38221.message)].join('')));
}

var G__38222 = seq__37836;
var G__38223 = chunk__37837;
var G__38224 = count__37838;
var G__38225 = (i__37839 + (1));
seq__37836 = G__38222;
chunk__37837 = G__38223;
count__37838 = G__38224;
i__37839 = G__38225;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37836);
if(temp__5753__auto__){
var seq__37836__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37836__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37836__$1);
var G__38226 = cljs.core.chunk_rest(seq__37836__$1);
var G__38227 = c__4679__auto__;
var G__38228 = cljs.core.count(c__4679__auto__);
var G__38229 = (0);
seq__37836 = G__38226;
chunk__37837 = G__38227;
count__37838 = G__38228;
i__37839 = G__38229;
continue;
} else {
var map__37850 = cljs.core.first(seq__37836__$1);
var map__37850__$1 = cljs.core.__destructure_map(map__37850);
var src = map__37850__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37850__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37850__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37850__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37850__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37851){var e_38230 = e37851;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38230);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38230.message)].join('')));
}

var G__38231 = cljs.core.next(seq__37836__$1);
var G__38232 = null;
var G__38233 = (0);
var G__38234 = (0);
seq__37836 = G__38231;
chunk__37837 = G__38232;
count__37838 = G__38233;
i__37839 = G__38234;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37852 = cljs.core.seq(js_requires);
var chunk__37853 = null;
var count__37854 = (0);
var i__37855 = (0);
while(true){
if((i__37855 < count__37854)){
var js_ns = chunk__37853.cljs$core$IIndexed$_nth$arity$2(null,i__37855);
var require_str_38236 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38236);


var G__38237 = seq__37852;
var G__38238 = chunk__37853;
var G__38239 = count__37854;
var G__38240 = (i__37855 + (1));
seq__37852 = G__38237;
chunk__37853 = G__38238;
count__37854 = G__38239;
i__37855 = G__38240;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37852);
if(temp__5753__auto__){
var seq__37852__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37852__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37852__$1);
var G__38241 = cljs.core.chunk_rest(seq__37852__$1);
var G__38242 = c__4679__auto__;
var G__38243 = cljs.core.count(c__4679__auto__);
var G__38244 = (0);
seq__37852 = G__38241;
chunk__37853 = G__38242;
count__37854 = G__38243;
i__37855 = G__38244;
continue;
} else {
var js_ns = cljs.core.first(seq__37852__$1);
var require_str_38245 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38245);


var G__38246 = cljs.core.next(seq__37852__$1);
var G__38247 = null;
var G__38248 = (0);
var G__38249 = (0);
seq__37852 = G__38246;
chunk__37853 = G__38247;
count__37854 = G__38248;
i__37855 = G__38249;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37859){
var map__37860 = p__37859;
var map__37860__$1 = cljs.core.__destructure_map(map__37860);
var msg = map__37860__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37860__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37860__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37861(s__37862){
return (new cljs.core.LazySeq(null,(function (){
var s__37862__$1 = s__37862;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__37862__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__37867 = cljs.core.first(xs__6308__auto__);
var map__37867__$1 = cljs.core.__destructure_map(map__37867);
var src = map__37867__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37867__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37867__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__37862__$1,map__37867,map__37867__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37860,map__37860__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37861_$_iter__37863(s__37864){
return (new cljs.core.LazySeq(null,((function (s__37862__$1,map__37867,map__37867__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37860,map__37860__$1,msg,info,reload_info){
return (function (){
var s__37864__$1 = s__37864;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__37864__$1);
if(temp__5753__auto____$1){
var s__37864__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37864__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__37864__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__37866 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__37865 = (0);
while(true){
if((i__37865 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__37865);
cljs.core.chunk_append(b__37866,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38253 = (i__37865 + (1));
i__37865 = G__38253;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37866),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37861_$_iter__37863(cljs.core.chunk_rest(s__37864__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37866),null);
}
} else {
var warning = cljs.core.first(s__37864__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37861_$_iter__37863(cljs.core.rest(s__37864__$2)));
}
} else {
return null;
}
break;
}
});})(s__37862__$1,map__37867,map__37867__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37860,map__37860__$1,msg,info,reload_info))
,null,null));
});})(s__37862__$1,map__37867,map__37867__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__37860,map__37860__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37861(cljs.core.rest(s__37862__$1)));
} else {
var G__38257 = cljs.core.rest(s__37862__$1);
s__37862__$1 = G__38257;
continue;
}
} else {
var G__38258 = cljs.core.rest(s__37862__$1);
s__37862__$1 = G__38258;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37868_38259 = cljs.core.seq(warnings);
var chunk__37869_38260 = null;
var count__37870_38261 = (0);
var i__37871_38262 = (0);
while(true){
if((i__37871_38262 < count__37870_38261)){
var map__37874_38263 = chunk__37869_38260.cljs$core$IIndexed$_nth$arity$2(null,i__37871_38262);
var map__37874_38264__$1 = cljs.core.__destructure_map(map__37874_38263);
var w_38265 = map__37874_38264__$1;
var msg_38266__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37874_38264__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37874_38264__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38268 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37874_38264__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38269 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37874_38264__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38269)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38267),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38268),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38266__$1)].join(''));


var G__38270 = seq__37868_38259;
var G__38271 = chunk__37869_38260;
var G__38272 = count__37870_38261;
var G__38273 = (i__37871_38262 + (1));
seq__37868_38259 = G__38270;
chunk__37869_38260 = G__38271;
count__37870_38261 = G__38272;
i__37871_38262 = G__38273;
continue;
} else {
var temp__5753__auto___38274 = cljs.core.seq(seq__37868_38259);
if(temp__5753__auto___38274){
var seq__37868_38275__$1 = temp__5753__auto___38274;
if(cljs.core.chunked_seq_QMARK_(seq__37868_38275__$1)){
var c__4679__auto___38276 = cljs.core.chunk_first(seq__37868_38275__$1);
var G__38277 = cljs.core.chunk_rest(seq__37868_38275__$1);
var G__38278 = c__4679__auto___38276;
var G__38279 = cljs.core.count(c__4679__auto___38276);
var G__38280 = (0);
seq__37868_38259 = G__38277;
chunk__37869_38260 = G__38278;
count__37870_38261 = G__38279;
i__37871_38262 = G__38280;
continue;
} else {
var map__37875_38281 = cljs.core.first(seq__37868_38275__$1);
var map__37875_38282__$1 = cljs.core.__destructure_map(map__37875_38281);
var w_38283 = map__37875_38282__$1;
var msg_38284__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37875_38282__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37875_38282__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38286 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37875_38282__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38287 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37875_38282__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38287)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38285),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38286),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38284__$1)].join(''));


var G__38288 = cljs.core.next(seq__37868_38275__$1);
var G__38289 = null;
var G__38290 = (0);
var G__38291 = (0);
seq__37868_38259 = G__38288;
chunk__37869_38260 = G__38289;
count__37870_38261 = G__38290;
i__37871_38262 = G__38291;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37858_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37858_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__37878){
var map__37879 = p__37878;
var map__37879__$1 = cljs.core.__destructure_map(map__37879);
var msg = map__37879__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37879__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37879__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__37880 = cljs.core.seq(updates);
var chunk__37882 = null;
var count__37883 = (0);
var i__37884 = (0);
while(true){
if((i__37884 < count__37883)){
var path = chunk__37882.cljs$core$IIndexed$_nth$arity$2(null,i__37884);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38046_38292 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38050_38293 = null;
var count__38051_38294 = (0);
var i__38052_38295 = (0);
while(true){
if((i__38052_38295 < count__38051_38294)){
var node_38296 = chunk__38050_38293.cljs$core$IIndexed$_nth$arity$2(null,i__38052_38295);
if(cljs.core.not(node_38296.shadow$old)){
var path_match_38297 = shadow.cljs.devtools.client.browser.match_paths(node_38296.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38297)){
var new_link_38298 = (function (){var G__38082 = node_38296.cloneNode(true);
G__38082.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38297),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38082;
})();
(node_38296.shadow$old = true);

(new_link_38298.onload = ((function (seq__38046_38292,chunk__38050_38293,count__38051_38294,i__38052_38295,seq__37880,chunk__37882,count__37883,i__37884,new_link_38298,path_match_38297,node_38296,path,map__37879,map__37879__$1,msg,updates,reload_info){
return (function (e){
var seq__38083_38299 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38085_38300 = null;
var count__38086_38301 = (0);
var i__38087_38302 = (0);
while(true){
if((i__38087_38302 < count__38086_38301)){
var map__38093_38303 = chunk__38085_38300.cljs$core$IIndexed$_nth$arity$2(null,i__38087_38302);
var map__38093_38304__$1 = cljs.core.__destructure_map(map__38093_38303);
var task_38305 = map__38093_38304__$1;
var fn_str_38306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38093_38304__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38093_38304__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38308 = goog.getObjectByName(fn_str_38306,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38307)].join(''));

(fn_obj_38308.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38308.cljs$core$IFn$_invoke$arity$2(path,new_link_38298) : fn_obj_38308.call(null,path,new_link_38298));


var G__38309 = seq__38083_38299;
var G__38310 = chunk__38085_38300;
var G__38311 = count__38086_38301;
var G__38312 = (i__38087_38302 + (1));
seq__38083_38299 = G__38309;
chunk__38085_38300 = G__38310;
count__38086_38301 = G__38311;
i__38087_38302 = G__38312;
continue;
} else {
var temp__5753__auto___38313 = cljs.core.seq(seq__38083_38299);
if(temp__5753__auto___38313){
var seq__38083_38314__$1 = temp__5753__auto___38313;
if(cljs.core.chunked_seq_QMARK_(seq__38083_38314__$1)){
var c__4679__auto___38315 = cljs.core.chunk_first(seq__38083_38314__$1);
var G__38316 = cljs.core.chunk_rest(seq__38083_38314__$1);
var G__38317 = c__4679__auto___38315;
var G__38318 = cljs.core.count(c__4679__auto___38315);
var G__38319 = (0);
seq__38083_38299 = G__38316;
chunk__38085_38300 = G__38317;
count__38086_38301 = G__38318;
i__38087_38302 = G__38319;
continue;
} else {
var map__38094_38320 = cljs.core.first(seq__38083_38314__$1);
var map__38094_38321__$1 = cljs.core.__destructure_map(map__38094_38320);
var task_38322 = map__38094_38321__$1;
var fn_str_38323 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38094_38321__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38324 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38094_38321__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38325 = goog.getObjectByName(fn_str_38323,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38324)].join(''));

(fn_obj_38325.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38325.cljs$core$IFn$_invoke$arity$2(path,new_link_38298) : fn_obj_38325.call(null,path,new_link_38298));


var G__38326 = cljs.core.next(seq__38083_38314__$1);
var G__38327 = null;
var G__38328 = (0);
var G__38329 = (0);
seq__38083_38299 = G__38326;
chunk__38085_38300 = G__38327;
count__38086_38301 = G__38328;
i__38087_38302 = G__38329;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38296);
});})(seq__38046_38292,chunk__38050_38293,count__38051_38294,i__38052_38295,seq__37880,chunk__37882,count__37883,i__37884,new_link_38298,path_match_38297,node_38296,path,map__37879,map__37879__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38297], 0));

goog.dom.insertSiblingAfter(new_link_38298,node_38296);


var G__38330 = seq__38046_38292;
var G__38331 = chunk__38050_38293;
var G__38332 = count__38051_38294;
var G__38333 = (i__38052_38295 + (1));
seq__38046_38292 = G__38330;
chunk__38050_38293 = G__38331;
count__38051_38294 = G__38332;
i__38052_38295 = G__38333;
continue;
} else {
var G__38334 = seq__38046_38292;
var G__38335 = chunk__38050_38293;
var G__38336 = count__38051_38294;
var G__38337 = (i__38052_38295 + (1));
seq__38046_38292 = G__38334;
chunk__38050_38293 = G__38335;
count__38051_38294 = G__38336;
i__38052_38295 = G__38337;
continue;
}
} else {
var G__38340 = seq__38046_38292;
var G__38341 = chunk__38050_38293;
var G__38342 = count__38051_38294;
var G__38343 = (i__38052_38295 + (1));
seq__38046_38292 = G__38340;
chunk__38050_38293 = G__38341;
count__38051_38294 = G__38342;
i__38052_38295 = G__38343;
continue;
}
} else {
var temp__5753__auto___38344 = cljs.core.seq(seq__38046_38292);
if(temp__5753__auto___38344){
var seq__38046_38345__$1 = temp__5753__auto___38344;
if(cljs.core.chunked_seq_QMARK_(seq__38046_38345__$1)){
var c__4679__auto___38346 = cljs.core.chunk_first(seq__38046_38345__$1);
var G__38347 = cljs.core.chunk_rest(seq__38046_38345__$1);
var G__38348 = c__4679__auto___38346;
var G__38349 = cljs.core.count(c__4679__auto___38346);
var G__38350 = (0);
seq__38046_38292 = G__38347;
chunk__38050_38293 = G__38348;
count__38051_38294 = G__38349;
i__38052_38295 = G__38350;
continue;
} else {
var node_38351 = cljs.core.first(seq__38046_38345__$1);
if(cljs.core.not(node_38351.shadow$old)){
var path_match_38352 = shadow.cljs.devtools.client.browser.match_paths(node_38351.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38352)){
var new_link_38353 = (function (){var G__38098 = node_38351.cloneNode(true);
G__38098.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38352),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38098;
})();
(node_38351.shadow$old = true);

(new_link_38353.onload = ((function (seq__38046_38292,chunk__38050_38293,count__38051_38294,i__38052_38295,seq__37880,chunk__37882,count__37883,i__37884,new_link_38353,path_match_38352,node_38351,seq__38046_38345__$1,temp__5753__auto___38344,path,map__37879,map__37879__$1,msg,updates,reload_info){
return (function (e){
var seq__38099_38354 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38101_38355 = null;
var count__38102_38356 = (0);
var i__38103_38357 = (0);
while(true){
if((i__38103_38357 < count__38102_38356)){
var map__38107_38358 = chunk__38101_38355.cljs$core$IIndexed$_nth$arity$2(null,i__38103_38357);
var map__38107_38359__$1 = cljs.core.__destructure_map(map__38107_38358);
var task_38360 = map__38107_38359__$1;
var fn_str_38361 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38107_38359__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38362 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38107_38359__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38365 = goog.getObjectByName(fn_str_38361,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38362)].join(''));

(fn_obj_38365.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38365.cljs$core$IFn$_invoke$arity$2(path,new_link_38353) : fn_obj_38365.call(null,path,new_link_38353));


var G__38366 = seq__38099_38354;
var G__38367 = chunk__38101_38355;
var G__38368 = count__38102_38356;
var G__38369 = (i__38103_38357 + (1));
seq__38099_38354 = G__38366;
chunk__38101_38355 = G__38367;
count__38102_38356 = G__38368;
i__38103_38357 = G__38369;
continue;
} else {
var temp__5753__auto___38370__$1 = cljs.core.seq(seq__38099_38354);
if(temp__5753__auto___38370__$1){
var seq__38099_38371__$1 = temp__5753__auto___38370__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38099_38371__$1)){
var c__4679__auto___38372 = cljs.core.chunk_first(seq__38099_38371__$1);
var G__38373 = cljs.core.chunk_rest(seq__38099_38371__$1);
var G__38374 = c__4679__auto___38372;
var G__38375 = cljs.core.count(c__4679__auto___38372);
var G__38376 = (0);
seq__38099_38354 = G__38373;
chunk__38101_38355 = G__38374;
count__38102_38356 = G__38375;
i__38103_38357 = G__38376;
continue;
} else {
var map__38108_38377 = cljs.core.first(seq__38099_38371__$1);
var map__38108_38378__$1 = cljs.core.__destructure_map(map__38108_38377);
var task_38379 = map__38108_38378__$1;
var fn_str_38380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38108_38378__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38108_38378__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38382 = goog.getObjectByName(fn_str_38380,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38381)].join(''));

(fn_obj_38382.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38382.cljs$core$IFn$_invoke$arity$2(path,new_link_38353) : fn_obj_38382.call(null,path,new_link_38353));


var G__38383 = cljs.core.next(seq__38099_38371__$1);
var G__38384 = null;
var G__38385 = (0);
var G__38386 = (0);
seq__38099_38354 = G__38383;
chunk__38101_38355 = G__38384;
count__38102_38356 = G__38385;
i__38103_38357 = G__38386;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38351);
});})(seq__38046_38292,chunk__38050_38293,count__38051_38294,i__38052_38295,seq__37880,chunk__37882,count__37883,i__37884,new_link_38353,path_match_38352,node_38351,seq__38046_38345__$1,temp__5753__auto___38344,path,map__37879,map__37879__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38352], 0));

goog.dom.insertSiblingAfter(new_link_38353,node_38351);


var G__38387 = cljs.core.next(seq__38046_38345__$1);
var G__38388 = null;
var G__38389 = (0);
var G__38390 = (0);
seq__38046_38292 = G__38387;
chunk__38050_38293 = G__38388;
count__38051_38294 = G__38389;
i__38052_38295 = G__38390;
continue;
} else {
var G__38391 = cljs.core.next(seq__38046_38345__$1);
var G__38392 = null;
var G__38393 = (0);
var G__38394 = (0);
seq__38046_38292 = G__38391;
chunk__38050_38293 = G__38392;
count__38051_38294 = G__38393;
i__38052_38295 = G__38394;
continue;
}
} else {
var G__38395 = cljs.core.next(seq__38046_38345__$1);
var G__38396 = null;
var G__38397 = (0);
var G__38398 = (0);
seq__38046_38292 = G__38395;
chunk__38050_38293 = G__38396;
count__38051_38294 = G__38397;
i__38052_38295 = G__38398;
continue;
}
}
} else {
}
}
break;
}


var G__38399 = seq__37880;
var G__38400 = chunk__37882;
var G__38401 = count__37883;
var G__38402 = (i__37884 + (1));
seq__37880 = G__38399;
chunk__37882 = G__38400;
count__37883 = G__38401;
i__37884 = G__38402;
continue;
} else {
var G__38403 = seq__37880;
var G__38404 = chunk__37882;
var G__38405 = count__37883;
var G__38406 = (i__37884 + (1));
seq__37880 = G__38403;
chunk__37882 = G__38404;
count__37883 = G__38405;
i__37884 = G__38406;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__37880);
if(temp__5753__auto__){
var seq__37880__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37880__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__37880__$1);
var G__38407 = cljs.core.chunk_rest(seq__37880__$1);
var G__38408 = c__4679__auto__;
var G__38409 = cljs.core.count(c__4679__auto__);
var G__38410 = (0);
seq__37880 = G__38407;
chunk__37882 = G__38408;
count__37883 = G__38409;
i__37884 = G__38410;
continue;
} else {
var path = cljs.core.first(seq__37880__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38109_38411 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38113_38412 = null;
var count__38114_38413 = (0);
var i__38115_38414 = (0);
while(true){
if((i__38115_38414 < count__38114_38413)){
var node_38415 = chunk__38113_38412.cljs$core$IIndexed$_nth$arity$2(null,i__38115_38414);
if(cljs.core.not(node_38415.shadow$old)){
var path_match_38416 = shadow.cljs.devtools.client.browser.match_paths(node_38415.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38416)){
var new_link_38417 = (function (){var G__38151 = node_38415.cloneNode(true);
G__38151.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38416),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38151;
})();
(node_38415.shadow$old = true);

(new_link_38417.onload = ((function (seq__38109_38411,chunk__38113_38412,count__38114_38413,i__38115_38414,seq__37880,chunk__37882,count__37883,i__37884,new_link_38417,path_match_38416,node_38415,path,seq__37880__$1,temp__5753__auto__,map__37879,map__37879__$1,msg,updates,reload_info){
return (function (e){
var seq__38153_38418 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38155_38419 = null;
var count__38156_38420 = (0);
var i__38157_38421 = (0);
while(true){
if((i__38157_38421 < count__38156_38420)){
var map__38166_38424 = chunk__38155_38419.cljs$core$IIndexed$_nth$arity$2(null,i__38157_38421);
var map__38166_38425__$1 = cljs.core.__destructure_map(map__38166_38424);
var task_38426 = map__38166_38425__$1;
var fn_str_38427 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38166_38425__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38428 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38166_38425__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38429 = goog.getObjectByName(fn_str_38427,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38428)].join(''));

(fn_obj_38429.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38429.cljs$core$IFn$_invoke$arity$2(path,new_link_38417) : fn_obj_38429.call(null,path,new_link_38417));


var G__38430 = seq__38153_38418;
var G__38431 = chunk__38155_38419;
var G__38432 = count__38156_38420;
var G__38433 = (i__38157_38421 + (1));
seq__38153_38418 = G__38430;
chunk__38155_38419 = G__38431;
count__38156_38420 = G__38432;
i__38157_38421 = G__38433;
continue;
} else {
var temp__5753__auto___38434__$1 = cljs.core.seq(seq__38153_38418);
if(temp__5753__auto___38434__$1){
var seq__38153_38435__$1 = temp__5753__auto___38434__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38153_38435__$1)){
var c__4679__auto___38436 = cljs.core.chunk_first(seq__38153_38435__$1);
var G__38437 = cljs.core.chunk_rest(seq__38153_38435__$1);
var G__38438 = c__4679__auto___38436;
var G__38439 = cljs.core.count(c__4679__auto___38436);
var G__38440 = (0);
seq__38153_38418 = G__38437;
chunk__38155_38419 = G__38438;
count__38156_38420 = G__38439;
i__38157_38421 = G__38440;
continue;
} else {
var map__38167_38441 = cljs.core.first(seq__38153_38435__$1);
var map__38167_38442__$1 = cljs.core.__destructure_map(map__38167_38441);
var task_38443 = map__38167_38442__$1;
var fn_str_38444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38167_38442__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38167_38442__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38446 = goog.getObjectByName(fn_str_38444,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38445)].join(''));

(fn_obj_38446.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38446.cljs$core$IFn$_invoke$arity$2(path,new_link_38417) : fn_obj_38446.call(null,path,new_link_38417));


var G__38447 = cljs.core.next(seq__38153_38435__$1);
var G__38448 = null;
var G__38449 = (0);
var G__38450 = (0);
seq__38153_38418 = G__38447;
chunk__38155_38419 = G__38448;
count__38156_38420 = G__38449;
i__38157_38421 = G__38450;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38415);
});})(seq__38109_38411,chunk__38113_38412,count__38114_38413,i__38115_38414,seq__37880,chunk__37882,count__37883,i__37884,new_link_38417,path_match_38416,node_38415,path,seq__37880__$1,temp__5753__auto__,map__37879,map__37879__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38416], 0));

goog.dom.insertSiblingAfter(new_link_38417,node_38415);


var G__38451 = seq__38109_38411;
var G__38452 = chunk__38113_38412;
var G__38453 = count__38114_38413;
var G__38454 = (i__38115_38414 + (1));
seq__38109_38411 = G__38451;
chunk__38113_38412 = G__38452;
count__38114_38413 = G__38453;
i__38115_38414 = G__38454;
continue;
} else {
var G__38455 = seq__38109_38411;
var G__38456 = chunk__38113_38412;
var G__38457 = count__38114_38413;
var G__38458 = (i__38115_38414 + (1));
seq__38109_38411 = G__38455;
chunk__38113_38412 = G__38456;
count__38114_38413 = G__38457;
i__38115_38414 = G__38458;
continue;
}
} else {
var G__38459 = seq__38109_38411;
var G__38460 = chunk__38113_38412;
var G__38461 = count__38114_38413;
var G__38462 = (i__38115_38414 + (1));
seq__38109_38411 = G__38459;
chunk__38113_38412 = G__38460;
count__38114_38413 = G__38461;
i__38115_38414 = G__38462;
continue;
}
} else {
var temp__5753__auto___38463__$1 = cljs.core.seq(seq__38109_38411);
if(temp__5753__auto___38463__$1){
var seq__38109_38464__$1 = temp__5753__auto___38463__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38109_38464__$1)){
var c__4679__auto___38465 = cljs.core.chunk_first(seq__38109_38464__$1);
var G__38466 = cljs.core.chunk_rest(seq__38109_38464__$1);
var G__38467 = c__4679__auto___38465;
var G__38468 = cljs.core.count(c__4679__auto___38465);
var G__38469 = (0);
seq__38109_38411 = G__38466;
chunk__38113_38412 = G__38467;
count__38114_38413 = G__38468;
i__38115_38414 = G__38469;
continue;
} else {
var node_38470 = cljs.core.first(seq__38109_38464__$1);
if(cljs.core.not(node_38470.shadow$old)){
var path_match_38471 = shadow.cljs.devtools.client.browser.match_paths(node_38470.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38471)){
var new_link_38472 = (function (){var G__38169 = node_38470.cloneNode(true);
G__38169.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38471),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38169;
})();
(node_38470.shadow$old = true);

(new_link_38472.onload = ((function (seq__38109_38411,chunk__38113_38412,count__38114_38413,i__38115_38414,seq__37880,chunk__37882,count__37883,i__37884,new_link_38472,path_match_38471,node_38470,seq__38109_38464__$1,temp__5753__auto___38463__$1,path,seq__37880__$1,temp__5753__auto__,map__37879,map__37879__$1,msg,updates,reload_info){
return (function (e){
var seq__38170_38473 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38172_38474 = null;
var count__38173_38475 = (0);
var i__38174_38476 = (0);
while(true){
if((i__38174_38476 < count__38173_38475)){
var map__38179_38477 = chunk__38172_38474.cljs$core$IIndexed$_nth$arity$2(null,i__38174_38476);
var map__38179_38478__$1 = cljs.core.__destructure_map(map__38179_38477);
var task_38479 = map__38179_38478__$1;
var fn_str_38480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38179_38478__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38481 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38179_38478__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38482 = goog.getObjectByName(fn_str_38480,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38481)].join(''));

(fn_obj_38482.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38482.cljs$core$IFn$_invoke$arity$2(path,new_link_38472) : fn_obj_38482.call(null,path,new_link_38472));


var G__38483 = seq__38170_38473;
var G__38484 = chunk__38172_38474;
var G__38485 = count__38173_38475;
var G__38486 = (i__38174_38476 + (1));
seq__38170_38473 = G__38483;
chunk__38172_38474 = G__38484;
count__38173_38475 = G__38485;
i__38174_38476 = G__38486;
continue;
} else {
var temp__5753__auto___38487__$2 = cljs.core.seq(seq__38170_38473);
if(temp__5753__auto___38487__$2){
var seq__38170_38488__$1 = temp__5753__auto___38487__$2;
if(cljs.core.chunked_seq_QMARK_(seq__38170_38488__$1)){
var c__4679__auto___38489 = cljs.core.chunk_first(seq__38170_38488__$1);
var G__38490 = cljs.core.chunk_rest(seq__38170_38488__$1);
var G__38491 = c__4679__auto___38489;
var G__38492 = cljs.core.count(c__4679__auto___38489);
var G__38493 = (0);
seq__38170_38473 = G__38490;
chunk__38172_38474 = G__38491;
count__38173_38475 = G__38492;
i__38174_38476 = G__38493;
continue;
} else {
var map__38180_38494 = cljs.core.first(seq__38170_38488__$1);
var map__38180_38495__$1 = cljs.core.__destructure_map(map__38180_38494);
var task_38496 = map__38180_38495__$1;
var fn_str_38497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38180_38495__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38180_38495__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38499 = goog.getObjectByName(fn_str_38497,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38498)].join(''));

(fn_obj_38499.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38499.cljs$core$IFn$_invoke$arity$2(path,new_link_38472) : fn_obj_38499.call(null,path,new_link_38472));


var G__38500 = cljs.core.next(seq__38170_38488__$1);
var G__38501 = null;
var G__38502 = (0);
var G__38503 = (0);
seq__38170_38473 = G__38500;
chunk__38172_38474 = G__38501;
count__38173_38475 = G__38502;
i__38174_38476 = G__38503;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38470);
});})(seq__38109_38411,chunk__38113_38412,count__38114_38413,i__38115_38414,seq__37880,chunk__37882,count__37883,i__37884,new_link_38472,path_match_38471,node_38470,seq__38109_38464__$1,temp__5753__auto___38463__$1,path,seq__37880__$1,temp__5753__auto__,map__37879,map__37879__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38471], 0));

goog.dom.insertSiblingAfter(new_link_38472,node_38470);


var G__38504 = cljs.core.next(seq__38109_38464__$1);
var G__38505 = null;
var G__38506 = (0);
var G__38507 = (0);
seq__38109_38411 = G__38504;
chunk__38113_38412 = G__38505;
count__38114_38413 = G__38506;
i__38115_38414 = G__38507;
continue;
} else {
var G__38508 = cljs.core.next(seq__38109_38464__$1);
var G__38509 = null;
var G__38510 = (0);
var G__38511 = (0);
seq__38109_38411 = G__38508;
chunk__38113_38412 = G__38509;
count__38114_38413 = G__38510;
i__38115_38414 = G__38511;
continue;
}
} else {
var G__38512 = cljs.core.next(seq__38109_38464__$1);
var G__38513 = null;
var G__38514 = (0);
var G__38515 = (0);
seq__38109_38411 = G__38512;
chunk__38113_38412 = G__38513;
count__38114_38413 = G__38514;
i__38115_38414 = G__38515;
continue;
}
}
} else {
}
}
break;
}


var G__38516 = cljs.core.next(seq__37880__$1);
var G__38517 = null;
var G__38518 = (0);
var G__38519 = (0);
seq__37880 = G__38516;
chunk__37882 = G__38517;
count__37883 = G__38518;
i__37884 = G__38519;
continue;
} else {
var G__38520 = cljs.core.next(seq__37880__$1);
var G__38521 = null;
var G__38522 = (0);
var G__38523 = (0);
seq__37880 = G__38520;
chunk__37882 = G__38521;
count__37883 = G__38522;
i__37884 = G__38523;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__38181){
var map__38182 = p__38181;
var map__38182__$1 = cljs.core.__destructure_map(map__38182);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38182__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__38183){
var map__38184 = p__38183;
var map__38184__$1 = cljs.core.__destructure_map(map__38184);
var _ = map__38184__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38184__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__38185,done,error){
var map__38186 = p__38185;
var map__38186__$1 = cljs.core.__destructure_map(map__38186);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38186__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__38189,done,error){
var map__38190 = p__38189;
var map__38190__$1 = cljs.core.__destructure_map(map__38190);
var msg = map__38190__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38190__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38190__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38190__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38191){
var map__38192 = p__38191;
var map__38192__$1 = cljs.core.__destructure_map(map__38192);
var src = map__38192__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38192__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__38197 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__38197) : done.call(null,G__38197));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__38198){
var map__38199 = p__38198;
var map__38199__$1 = cljs.core.__destructure_map(map__38199);
var msg__$1 = map__38199__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38199__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e38200){var ex = e38200;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__38201){
var map__38202 = p__38201;
var map__38202__$1 = cljs.core.__destructure_map(map__38202);
var env = map__38202__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38202__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__38207){
var map__38208 = p__38207;
var map__38208__$1 = cljs.core.__destructure_map(map__38208);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38208__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38208__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__38210){
var map__38211 = p__38210;
var map__38211__$1 = cljs.core.__destructure_map(map__38211);
var svc = map__38211__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38211__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
