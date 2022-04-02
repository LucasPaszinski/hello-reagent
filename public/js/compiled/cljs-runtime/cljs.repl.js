goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36117){
var map__36119 = p__36117;
var map__36119__$1 = cljs.core.__destructure_map(map__36119);
var m = map__36119__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36119__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36119__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36126_36579 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36127_36580 = null;
var count__36128_36581 = (0);
var i__36129_36582 = (0);
while(true){
if((i__36129_36582 < count__36128_36581)){
var f_36583 = chunk__36127_36580.cljs$core$IIndexed$_nth$arity$2(null,i__36129_36582);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36583], 0));


var G__36584 = seq__36126_36579;
var G__36585 = chunk__36127_36580;
var G__36586 = count__36128_36581;
var G__36587 = (i__36129_36582 + (1));
seq__36126_36579 = G__36584;
chunk__36127_36580 = G__36585;
count__36128_36581 = G__36586;
i__36129_36582 = G__36587;
continue;
} else {
var temp__5753__auto___36588 = cljs.core.seq(seq__36126_36579);
if(temp__5753__auto___36588){
var seq__36126_36589__$1 = temp__5753__auto___36588;
if(cljs.core.chunked_seq_QMARK_(seq__36126_36589__$1)){
var c__4679__auto___36590 = cljs.core.chunk_first(seq__36126_36589__$1);
var G__36591 = cljs.core.chunk_rest(seq__36126_36589__$1);
var G__36592 = c__4679__auto___36590;
var G__36593 = cljs.core.count(c__4679__auto___36590);
var G__36594 = (0);
seq__36126_36579 = G__36591;
chunk__36127_36580 = G__36592;
count__36128_36581 = G__36593;
i__36129_36582 = G__36594;
continue;
} else {
var f_36595 = cljs.core.first(seq__36126_36589__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36595], 0));


var G__36596 = cljs.core.next(seq__36126_36589__$1);
var G__36597 = null;
var G__36598 = (0);
var G__36599 = (0);
seq__36126_36579 = G__36596;
chunk__36127_36580 = G__36597;
count__36128_36581 = G__36598;
i__36129_36582 = G__36599;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36602 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36602], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36602)))?cljs.core.second(arglists_36602):arglists_36602)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36180_36603 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36181_36604 = null;
var count__36182_36605 = (0);
var i__36183_36606 = (0);
while(true){
if((i__36183_36606 < count__36182_36605)){
var vec__36197_36607 = chunk__36181_36604.cljs$core$IIndexed$_nth$arity$2(null,i__36183_36606);
var name_36608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36197_36607,(0),null);
var map__36200_36609 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36197_36607,(1),null);
var map__36200_36610__$1 = cljs.core.__destructure_map(map__36200_36609);
var doc_36611 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36200_36610__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36200_36610__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36608], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36612], 0));

if(cljs.core.truth_(doc_36611)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36611], 0));
} else {
}


var G__36613 = seq__36180_36603;
var G__36614 = chunk__36181_36604;
var G__36615 = count__36182_36605;
var G__36616 = (i__36183_36606 + (1));
seq__36180_36603 = G__36613;
chunk__36181_36604 = G__36614;
count__36182_36605 = G__36615;
i__36183_36606 = G__36616;
continue;
} else {
var temp__5753__auto___36621 = cljs.core.seq(seq__36180_36603);
if(temp__5753__auto___36621){
var seq__36180_36622__$1 = temp__5753__auto___36621;
if(cljs.core.chunked_seq_QMARK_(seq__36180_36622__$1)){
var c__4679__auto___36623 = cljs.core.chunk_first(seq__36180_36622__$1);
var G__36627 = cljs.core.chunk_rest(seq__36180_36622__$1);
var G__36628 = c__4679__auto___36623;
var G__36629 = cljs.core.count(c__4679__auto___36623);
var G__36630 = (0);
seq__36180_36603 = G__36627;
chunk__36181_36604 = G__36628;
count__36182_36605 = G__36629;
i__36183_36606 = G__36630;
continue;
} else {
var vec__36207_36631 = cljs.core.first(seq__36180_36622__$1);
var name_36632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36207_36631,(0),null);
var map__36210_36633 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36207_36631,(1),null);
var map__36210_36634__$1 = cljs.core.__destructure_map(map__36210_36633);
var doc_36635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36210_36634__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36210_36634__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36632], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36636], 0));

if(cljs.core.truth_(doc_36635)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36635], 0));
} else {
}


var G__36645 = cljs.core.next(seq__36180_36622__$1);
var G__36646 = null;
var G__36647 = (0);
var G__36648 = (0);
seq__36180_36603 = G__36645;
chunk__36181_36604 = G__36646;
count__36182_36605 = G__36647;
i__36183_36606 = G__36648;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36255 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36256 = null;
var count__36257 = (0);
var i__36258 = (0);
while(true){
if((i__36258 < count__36257)){
var role = chunk__36256.cljs$core$IIndexed$_nth$arity$2(null,i__36258);
var temp__5753__auto___36659__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___36659__$1)){
var spec_36660 = temp__5753__auto___36659__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36660)], 0));
} else {
}


var G__36665 = seq__36255;
var G__36666 = chunk__36256;
var G__36667 = count__36257;
var G__36668 = (i__36258 + (1));
seq__36255 = G__36665;
chunk__36256 = G__36666;
count__36257 = G__36667;
i__36258 = G__36668;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__36255);
if(temp__5753__auto____$1){
var seq__36255__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36255__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__36255__$1);
var G__36670 = cljs.core.chunk_rest(seq__36255__$1);
var G__36671 = c__4679__auto__;
var G__36672 = cljs.core.count(c__4679__auto__);
var G__36673 = (0);
seq__36255 = G__36670;
chunk__36256 = G__36671;
count__36257 = G__36672;
i__36258 = G__36673;
continue;
} else {
var role = cljs.core.first(seq__36255__$1);
var temp__5753__auto___36678__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___36678__$2)){
var spec_36683 = temp__5753__auto___36678__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36683)], 0));
} else {
}


var G__36685 = cljs.core.next(seq__36255__$1);
var G__36686 = null;
var G__36687 = (0);
var G__36688 = (0);
seq__36255 = G__36685;
chunk__36256 = G__36686;
count__36257 = G__36687;
i__36258 = G__36688;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36707 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36708 = cljs.core.ex_cause(t);
via = G__36707;
t = G__36708;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36402 = datafied_throwable;
var map__36402__$1 = cljs.core.__destructure_map(map__36402);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36402__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36402__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36402__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36403 = cljs.core.last(via);
var map__36403__$1 = cljs.core.__destructure_map(map__36403);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36403__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36403__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36403__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36408 = data;
var map__36408__$1 = cljs.core.__destructure_map(map__36408);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36408__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36408__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36408__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36409 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36409__$1 = cljs.core.__destructure_map(map__36409);
var top_data = map__36409__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36409__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36432 = phase;
var G__36432__$1 = (((G__36432 instanceof cljs.core.Keyword))?G__36432.fqn:null);
switch (G__36432__$1) {
case "read-source":
var map__36444 = data;
var map__36444__$1 = cljs.core.__destructure_map(map__36444);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36444__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36444__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36451 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36451__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36451,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36451);
var G__36451__$2 = (cljs.core.truth_((function (){var fexpr__36472 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36472.cljs$core$IFn$_invoke$arity$1 ? fexpr__36472.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36472.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36451__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36451__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36451__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36451__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36483 = top_data;
var G__36483__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36483,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36483);
var G__36483__$2 = (cljs.core.truth_((function (){var fexpr__36484 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36484.cljs$core$IFn$_invoke$arity$1 ? fexpr__36484.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36484.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36483__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36483__$1);
var G__36483__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36483__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36483__$2);
var G__36483__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36483__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36483__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36483__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36483__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36489 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36489,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36489,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36489,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36489,(3),null);
var G__36493 = top_data;
var G__36493__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36493,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36493);
var G__36493__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36493__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36493__$1);
var G__36493__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36493__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36493__$2);
var G__36493__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36493__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36493__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36493__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36493__$4;
}

break;
case "execution":
var vec__36499 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36499,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36499,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36499,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36499,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36388_SHARP_){
var or__4253__auto__ = (p1__36388_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__36507 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36507.cljs$core$IFn$_invoke$arity$1 ? fexpr__36507.cljs$core$IFn$_invoke$arity$1(p1__36388_SHARP_) : fexpr__36507.call(null,p1__36388_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__36509 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36509__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36509,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36509);
var G__36509__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36509__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36509__$1);
var G__36509__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36509__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36509__$2);
var G__36509__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36509__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36509__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36509__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36509__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36432__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36520){
var map__36521 = p__36520;
var map__36521__$1 = cljs.core.__destructure_map(map__36521);
var triage_data = map__36521__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36521__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36521__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36521__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36521__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36521__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36521__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36521__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36521__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36525 = phase;
var G__36525__$1 = (((G__36525 instanceof cljs.core.Keyword))?G__36525.fqn:null);
switch (G__36525__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36526 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36527 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36528 = loc;
var G__36529 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36530_36808 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36531_36809 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36532_36810 = true;
var _STAR_print_fn_STAR__temp_val__36533_36811 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36532_36810);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36533_36811);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36517_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36517_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36531_36809);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36530_36808);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36526,G__36527,G__36528,G__36529) : format.call(null,G__36526,G__36527,G__36528,G__36529));

break;
case "macroexpansion":
var G__36541 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36542 = cause_type;
var G__36543 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36544 = loc;
var G__36545 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36541,G__36542,G__36543,G__36544,G__36545) : format.call(null,G__36541,G__36542,G__36543,G__36544,G__36545));

break;
case "compile-syntax-check":
var G__36546 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36547 = cause_type;
var G__36548 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36549 = loc;
var G__36550 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36546,G__36547,G__36548,G__36549,G__36550) : format.call(null,G__36546,G__36547,G__36548,G__36549,G__36550));

break;
case "compilation":
var G__36551 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36552 = cause_type;
var G__36553 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36554 = loc;
var G__36555 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36551,G__36552,G__36553,G__36554,G__36555) : format.call(null,G__36551,G__36552,G__36553,G__36554,G__36555));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36558 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36561 = symbol;
var G__36562 = loc;
var G__36563 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36564_36820 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36565_36821 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36566_36822 = true;
var _STAR_print_fn_STAR__temp_val__36567_36823 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36566_36822);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36567_36823);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36519_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36519_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36565_36821);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36564_36820);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36558,G__36561,G__36562,G__36563) : format.call(null,G__36558,G__36561,G__36562,G__36563));
} else {
var G__36571 = "Execution error%s at %s(%s).\n%s\n";
var G__36573 = cause_type;
var G__36574 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36575 = loc;
var G__36576 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36571,G__36573,G__36574,G__36575,G__36576) : format.call(null,G__36571,G__36573,G__36574,G__36575,G__36576));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36525__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
