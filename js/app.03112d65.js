(function(){"use strict";var e={7306:function(e,t,r){var n=r(144),s=r(998),a=r(2150),o=function(){var e=this,t=e._self._c;return t(s.Z,[t(a.Z,[t("AppHeader"),t("router-view")],1)],1)},c=[],u=r(6190),i=r(442),l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"navbar"},[t(i.lj,{staticClass:"flex-grow-1"},[t(u.Z,{attrs:{to:"/"}},[e._v("Converter ")]),t(u.Z,{attrs:{to:"/Currencies"}},[e._v("Currencies ")])],1)],1)},d=[],p={name:"app-header",data(){return{}}},m=p,f=r(1001),h=(0,f.Z)(m,l,d,!1,null,null,null),g=h.exports,v={name:"App",components:{AppHeader:g}},y=v,Z=(0,f.Z)(y,o,c,!1,null,null,null),C=Z.exports,w=r(1705);n.ZP.use(w.Z);var b=new w.Z({}),x=r(8345),_=function(){var e=this,t=e._self._c;return t("div",{staticClass:"page"},[t("ExchangeRate"),t("CurrencyConverter")],1)},P=[],j=r(9582),O=r(4886),D=r(266),S=r(1713),k=r(2648),R=function(){var e=this,t=e._self._c;return t(S.Z,{staticClass:"flex-wrap wrap"},[t(D.Z,{attrs:{cols:"12"}},[t(j.Z,{staticClass:"mx-auto"},[t(O.ZB,[t("h1",[e._v("Currency Converter")])]),t(S.Z,{staticClass:"exchange-row"},[t(D.Z,{attrs:{cols:"3"}},[t("span",[e._v(" Курс USD ")]),t(k.Z,{staticClass:"currency",attrs:{value:e.currencies.USD.Value,"auto-grow":"",outlined:"",readonly:"","row-height":"5",rows:"8",type:"number"}})],1),t(D.Z,{attrs:{cols:"3"}},[t("span",[e._v(" Курс EUR ")]),t(k.Z,{attrs:{value:e.currencies.EUR.Value,"auto-grow":"",outlined:"",readonly:"","row-height":"5",rows:"8",type:"number"}})],1),t(D.Z,{attrs:{cols:"3"}},[t("span",[e._v(" Курс RUB ")]),t(k.Z,{attrs:{value:e.currencies.GBP.Value,"auto-grow":"",outlined:"",readonly:"","row-height":"5",rows:"8",type:"number"}})],1)],1)],1)],1)],1)},U=[],B=r(629),E={name:"ExchangeRate",computed:{...(0,B.rn)({currencies:e=>e.currencies}),...(0,B.Se)(["getCountries"])},async mounted(){null===this.currencies&&await this.getCurrencies()}},V=E,N=(0,f.Z)(V,R,U,!1,null,"c7b9db10",null),L=N.exports,T=r(6067),M=function(){var e=this,t=e._self._c;return null!=e.currencies?t(S.Z,[t(S.Z,{staticClass:"flex-wrap wrap"},[t(D.Z,{attrs:{cols:"5"}},[t(j.Z,{staticClass:"mx-auto",attrs:{"max-width":"500"}},[t(O.ZB,[t(T.Z,{attrs:{items:e.getCountries,color:"gray",filled:"",label:"Select currency"},on:{change:e.convert},model:{value:e.selected[0],callback:function(t){e.$set(e.selected,0,t)},expression:"selected[0]"}}),t(k.Z,{attrs:{rules:[e.rules.onlyNumbers],"auto-grow":"",outlined:"","row-height":"15",rows:"1"},on:{input:e.convert},model:{value:e.inputed,callback:function(t){e.inputed=t},expression:"inputed"}})],1)],1)],1),t(D.Z,{staticClass:"exchange-img"},[t("img",{staticClass:"exchange",attrs:{src:r(4542),alt:"Exchange"}})]),t(D.Z,{attrs:{cols:"5"}},[t(j.Z,{staticClass:"mx-auto",attrs:{"max-width":"500"}},[t(O.ZB,[t(T.Z,{attrs:{items:e.getCountries,filled:"",label:"Select currency"},on:{change:e.convert},model:{value:e.selected[1],callback:function(t){e.$set(e.selected,1,t)},expression:"selected[1]"}}),t(k.Z,{attrs:{"auto-grow":"",outlined:"",readonly:"","row-height":"15",rows:"1",type:"number"},model:{value:e.result,callback:function(t){e.result=t},expression:"result"}})],1)],1)],1)],1)],1):e._e()},$=[],A={name:"CurrencyConverter",data(){return{selected:["RUB","USD","EUR","GBP"],inputed:"",result:null,rules:{onlyNumbers:e=>{const t=/^\d+$/.test(e);return t||(this.inputed=this.inputed.replace(/\D/g,"")),!0}}}},computed:{...(0,B.rn)({currencies:e=>e.currencies}),...(0,B.Se)(["getCountries"])},methods:{convert(){let e={Value:1,Nominal:1},t=this.currencies[this.selected[0]]??e,r=t.Value*Number(this.inputed),n=t.Nominal,s=this.currencies[this.selected[1]]??e,a=s.Value,o=s.Nominal,c=r/n/(a/o);this.result=c?Math.floor(1e4*c)/1e4:null},...(0,B.nv)(["getCurrencies"])},async mounted(){null===this.currencies&&await this.getCurrencies()}},G=A,H=(0,f.Z)(G,M,$,!1,null,"43b8e70e",null),F=H.exports,q={name:"ConverterPage",components:{ExchangeRate:L,CurrencyConverter:F}},z=q,I=(0,f.Z)(z,_,P,!1,null,"7bd4ced2",null),J=I.exports,K=r(5808),Q=r(4525),W=r(7941),X=function(){var e=this,t=e._self._c;return t("div",{staticClass:"currencies"},[e._v(" Exchange rate (1 RUB) on "+e._s(e.date.slice(0,-15))+": "),t(K.Z,{attrs:{dense:""}},[t(Q.Z,{staticClass:"list-item"},e._l(e.currencies,(function(r,n){return t(W.Z,{key:n,staticClass:"list-item-group"},[e._v(e._s(n)+" : "+e._s(r.Value)+" ")])})),1)],1)],1)},Y=[],ee={name:"CurrenciesPage",computed:{...(0,B.rn)({currencies:e=>e.currencies,date:e=>e.date})},methods:{...(0,B.nv)(["getCurrencies","getDate"])},async mounted(){null===this.currencies&&await this.getCurrencies()}},te=ee,re=(0,f.Z)(te,X,Y,!1,null,"9312f938",null),ne=re.exports;n.ZP.use(x.ZP);const se=[{path:"/",name:"Converter",component:J},{path:"/CurrencyConverter/",name:"Converter",component:J},{path:"/Currencies",name:"Currencies",component:ne}];var ae=new x.ZP({mode:"history",routes:se}),oe=r(594);n.ZP.use(B.ZP);var ce=new B.ZP.Store({state:{currencies:null,date:null,loading:!1},mutations:{setCurrencies(e,t){e.currencies=t},setDate(e,t){e.date=t},setLoading(e,t){e.loading=t}},getters:{getCountries(e){const t=["RUB"];return null===e.currencies?t:t.concat(Object.keys(e.currencies))}},actions:{async getCurrencies(e){e.commit("setLoading",!0);try{const{data:t}=await oe.Z.get("https://www.cbr-xml-daily.ru/daily_json.js");e.commit("setCurrencies",t.Valute),e.commit("setDate",t.Date)}catch(t){console.error(t)}finally{e.commit("setLoading",!1)}},async getDate(e){e.commit("setLoading",!0);try{const{data:t}=await oe.Z.get("https://www.cbr-xml-daily.ru/daily_json.js");e.commit("getDate",t.Date),e.commit("setDate",t.Date)}catch(t){console.error(t)}finally{e.commit("setLoading",!1)}}}});n.ZP.config.productionTip=!1,new n.ZP({vuetify:b,router:ae,axios:oe.Z,store:ce,render:e=>e(C)}).$mount("#app")},4542:function(e,t,r){e.exports=r.p+"/CurrencyConverter/img/exchange.29066dae.svg"}},t={};function r(n){var s=t[n];if(void 0!==s)return s.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,n,s,a){if(!n){var o=1/0;for(l=0;l<e.length;l++){n=e[l][0],s=e[l][1],a=e[l][2];for(var c=!0,u=0;u<n.length;u++)(!1&a||o>=a)&&Object.keys(r.O).every((function(e){return r.O[e](n[u])}))?n.splice(u--,1):(c=!1,a<o&&(o=a));if(c){e.splice(l--,1);var i=s();void 0!==i&&(t=i)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[n,s,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var s,a,o=n[0],c=n[1],u=n[2],i=0;if(o.some((function(t){return 0!==e[t]}))){for(s in c)r.o(c,s)&&(r.m[s]=c[s]);if(u)var l=u(r)}for(t&&t(n);i<o.length;i++)a=o[i],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(l)},n=self["webpackChunkmy_app"]=self["webpackChunkmy_app"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(7306)}));n=r.O(n)})();
//# sourceMappingURL=app.03112d65.js.map
