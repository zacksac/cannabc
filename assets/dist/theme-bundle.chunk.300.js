"use strict";(self.webpackChunkbigcommerce_hera=self.webpackChunkbigcommerce_hera||[]).push([[300],{39300:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var o=n(49230),r=n(44505),a=n(54587),c=n(55825);function i(e,t){return i=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},i(e,t)}var u=function(e){var t,n;function o(){return e.apply(this,arguments)||this}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,i(t,n),o.prototype.onReady=function(){var e=this;(0,a.Z)(this.context);var t=this.context.compareRemoveMessage;c("body").on("click","[data-comparison-remove]",(function(n){e.context.comparisons.length<=2&&((0,r.ol)(t),n.preventDefault())}))},o}(o.Z)},54587:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(44505),r=n(55825);function a(e,t,n){e.length>1?(t.is("visible")||t.addClass("show"),t.attr("href",n.compare+"/"+e.join("/")),t.find("span.countPill").html(e.length)):t.removeClass("show")}function c(e){var t=e.noCompareMessage,n=e.urls,c=[],i=r("a[data-compare-nav]");r("body").on("compareReset",(function(){var e=r("body").find('input[name="products[]"]:checked');a(c=e.length?e.map((function(e,t){return t.value})).get():[],i,n)})),r("body").triggerHandler("compareReset"),r("body").on("click","[data-compare-id]",(function(e){var t,o=e.currentTarget.value,i=r("a[data-compare-nav]");e.currentTarget.checked?(t=o,c.push(t)):function(e,t){var n=e.indexOf(t);n>-1&&e.splice(n,1)}(c,o),a(c,i,n)})),r("body").on("submit","[data-product-compare]",(function(e){r(e.currentTarget).find('input[name="products[]"]:checked').length<=1&&((0,o.ol)(t),e.preventDefault())})),r("body").on("click","a[data-compare-nav]",(function(){if(r("body").find('input[name="products[]"]:checked').length<=1)return(0,o.ol)(t),!1}))}}}]);
//# sourceMappingURL=theme-bundle.chunk.300.js.map
