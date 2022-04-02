goog.provide('hello_reagent.core');
if((typeof hello_reagent !== 'undefined') && (typeof hello_reagent.core !== 'undefined') && (typeof hello_reagent.core.app_state !== 'undefined')){
} else {
hello_reagent.core.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello world!"], null));
}
hello_reagent.core.hello_world = (function hello_reagent$core$hello_world(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(hello_reagent.core.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Edit this and watch it change!"], null)], null);
});
hello_reagent.core.marks = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"you fuck"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"you fede"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"you baddy"], null)], null);
hello_reagent.core.wtf = (function hello_reagent$core$wtf(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Mark zero..."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__39801){
var map__39802 = p__39801;
var map__39802__$1 = cljs.core.__destructure_map(map__39802);
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39802__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),msg], null);
}),hello_reagent.core.marks)], null)], null);
});
hello_reagent.core.start = (function hello_reagent$core$start(){
var G__39803 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [hello_reagent.core.wtf], null);
var G__39804 = document.getElementById("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__39803,G__39804) : reagent.core.render_component.call(null,G__39803,G__39804));
});
hello_reagent.core.init = (function hello_reagent$core$init(){
return hello_reagent.core.start();
});
goog.exportSymbol('hello_reagent.core.init', hello_reagent.core.init);
hello_reagent.core.stop = (function hello_reagent$core$stop(){
return console.log("stop");
});

//# sourceMappingURL=hello_reagent.core.js.map
