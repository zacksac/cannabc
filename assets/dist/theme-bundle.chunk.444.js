"use strict";(self.webpackChunkbigcommerce_hera=self.webpackChunkbigcommerce_hera||[]).push([[444],{70444:(e,t,r)=>{r.r(t),r.d(t,{default:()=>d});var i=r(49230),a=r(40097),n=r(66755),c=r(73609),o=r(99706),f=r(67313),u=r(42066),m=r(44505),l=r(55825);function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}var d=function(e){var t,r;function i(t){var r;(r=e.call(this,t)||this).validationDictionary=(0,o.M)(t);var i=l("#gift-certificate-balance"),n=l("#gift-certificate-form"),p=n.find('input[name="certificate_amount"]'),d=(0,a.Z)({submit:'#gift-certificate-form input[type="submit"]',delay:300,tap:f.kk});if(p.length){var s=n.find('input[name="certificate_amount"]'),g=s.data("min"),v=s.data("minFormatted"),h=s.data("max"),_=s.data("maxFormatted");d.add({selector:'#gift-certificate-form input[name="certificate_amount"]',validate:function(e,t){var r=Number(t);r||e(!1),e(r>=g&&r<=h)},errorMessage:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),i=1;i<t;i++)r[i-1]=arguments[i];var a=e;return["[MIN]","[MAX]"].forEach((function(e,t){a=a.includes(e)?a.replace(e,r[t]):a})),a}(r.validationDictionary.certificate_amount_range,v,_)})}if(d.add([{selector:'#gift-certificate-form input[name="to_name"]',validate:function(e,t){e(function(e){return e.length}(t))},errorMessage:r.context.toName},{selector:'#gift-certificate-form input[name="to_email"]',validate:function(e,t){e(function(){return c.Z.email.apply(c.Z,arguments)}(t))},errorMessage:r.context.toEmail},{selector:'#gift-certificate-form input[name="from_name"]',validate:function(e,t){e(function(e){return e.length}(t))},errorMessage:r.context.fromName},{selector:'#gift-certificate-form input[name="from_email"]',validate:function(e,t){e(function(){return c.Z.email.apply(c.Z,arguments)}(t))},errorMessage:r.context.fromEmail},{selector:'#gift-certificate-form input[name="certificate_theme"]:first-of-type',triggeredBy:'#gift-certificate-form input[name="certificate_theme"]',validate:function(e){e("string"==typeof n.find('input[name="certificate_theme"]:checked').val())},errorMessage:r.context.certTheme},{selector:'#gift-certificate-form input[name="agree"]',validate:function(e){e(n.find('input[name="agree"]').get(0).checked)},errorMessage:r.context.agreeToTerms},{selector:'#gift-certificate-form input[name="agree2"]',validate:function(e){e(n.find('input[name="agree2"]').get(0).checked)},errorMessage:r.context.agreeToTerms}]),i.length){var y=r.checkCertBalanceValidator(i);i.on("submit",(function(){if(y.performCheck(),!y.areAll("valid"))return!1}))}return n.on("submit",(function(e){if(d.performCheck(),!d.areAll("valid"))return e.preventDefault()})),l("#gift-certificate-preview").click((function(e){if(e.preventDefault(),d.performCheck(),d.areAll("valid")){var t=(0,m._Z)(),i=l(e.currentTarget).data("previewUrl")+"&"+n.serialize();t.open(),u.hi.getPage(i,{},(function(e,i){if(e)return t.updateContent(r.context.previewError);t.updateContent(i,{wrap:!0})}))}})),r}return r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,p(t,r),i.prototype.checkCertBalanceValidator=function(e){var t=(0,a.Z)({submit:e.find('input[type="submit"]'),tap:f.kk});return t.add({selector:e.find('input[name="giftcertificatecode"]'),validate:function(e,t){e((0,n.Z)(t))},errorMessage:this.validationDictionary.invalid_gift_certificate}),t},i}(i.Z)}}]);
//# sourceMappingURL=theme-bundle.chunk.444.js.map
