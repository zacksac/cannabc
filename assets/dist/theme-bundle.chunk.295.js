"use strict";(self.webpackChunkbigcommerce_hera=self.webpackChunkbigcommerce_hera||[]).push([[295],{96295:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var i=r(91238),a=r(41582),n=r(67722),c=r(61579),o=r(71779),f=r(96609),u=r(59076),m=r(33977),l=r(33270);function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}var d=function(e){function t(t){var r;(r=e.call(this,t)||this).validationDictionary=(0,o.i)(t);var i=l("#gift-certificate-balance"),n=l("#gift-certificate-form"),p=n.find('input[name="certificate_amount"]'),d=(0,a.A)({submit:'#gift-certificate-form input[type="submit"]',delay:300,tap:f.dN});if(p.length){var s=n.find('input[name="certificate_amount"]'),g=s.data("min"),v=s.data("minFormatted"),h=s.data("max"),_=s.data("maxFormatted");d.add({selector:'#gift-certificate-form input[name="certificate_amount"]',validate:function(e,t){var r=Number(t);r||e(!1),e(r>=g&&r<=h)},errorMessage:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];var a=e;return["[MIN]","[MAX]"].forEach((function(e,t){a=a.includes(e)?a.replace(e,r[t]):a})),a}(r.validationDictionary.certificate_amount_range,v,_)})}if(d.add([{selector:'#gift-certificate-form input[name="to_name"]',validate:function(e,t){e(function(e){return e.length}(t))},errorMessage:r.context.toName},{selector:'#gift-certificate-form input[name="to_email"]',validate:function(e,t){e(function(){return c.A.email.apply(c.A,arguments)}(t))},errorMessage:r.context.toEmail},{selector:'#gift-certificate-form input[name="from_name"]',validate:function(e,t){e(function(e){return e.length}(t))},errorMessage:r.context.fromName},{selector:'#gift-certificate-form input[name="from_email"]',validate:function(e,t){e(function(){return c.A.email.apply(c.A,arguments)}(t))},errorMessage:r.context.fromEmail},{selector:'#gift-certificate-form input[name="certificate_theme"]:first-of-type',triggeredBy:'#gift-certificate-form input[name="certificate_theme"]',validate:function(e){e("string"==typeof n.find('input[name="certificate_theme"]:checked').val())},errorMessage:r.context.certTheme},{selector:'#gift-certificate-form input[name="agree"]',validate:function(e){e(n.find('input[name="agree"]').get(0).checked)},errorMessage:r.context.agreeToTerms},{selector:'#gift-certificate-form input[name="agree2"]',validate:function(e){e(n.find('input[name="agree2"]').get(0).checked)},errorMessage:r.context.agreeToTerms}]),i.length){var y=r.checkCertBalanceValidator(i);i.on("submit",(function(){if(y.performCheck(),!y.areAll("valid"))return!1}))}return n.on("submit",(function(e){if(d.performCheck(),!d.areAll("valid"))return e.preventDefault()})),l("#gift-certificate-preview").click((function(e){if(e.preventDefault(),d.performCheck(),d.areAll("valid")){var t=(0,m.PM)(),i=l(e.currentTarget).data("previewUrl")+"&"+n.serialize();t.open(),u.FH.getPage(i,{},(function(e,i){if(e)return t.updateContent(r.context.previewError);t.updateContent(i,{wrap:!0})}))}})),r}var r,i;return i=e,(r=t).prototype=Object.create(i.prototype),r.prototype.constructor=r,p(r,i),t.prototype.checkCertBalanceValidator=function(e){var t=(0,a.A)({submit:e.find('input[type="submit"]'),tap:f.dN});return t.add({selector:e.find('input[name="giftcertificatecode"]'),validate:function(e,t){e((0,n.A)(t))},errorMessage:this.validationDictionary.invalid_gift_certificate}),t},t}(i.A)}}]);
//# sourceMappingURL=theme-bundle.chunk.295.js.map