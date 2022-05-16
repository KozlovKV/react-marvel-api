"use strict";(self.webpackChunkmarvel_universe=self.webpackChunkmarvel_universe||[]).push([[682],{3957:function(t,n,e){e.d(n,{Z:function(){return i}});var r=e.p+"static/media/Avengers.4065c8f9c94e3d8b039a.png",a=e.p+"static/media/Avengers_logo.9eaf219344d83362e830.png",c=e(184);function i(t){return(0,c.jsxs)("div",{className:"app__banner",children:[(0,c.jsx)("img",{src:r,alt:"Avengers"}),(0,c.jsxs)("div",{className:"app__banner-text",children:["New comics every week!",(0,c.jsx)("br",{}),"Stay tuned!"]}),(0,c.jsx)("img",{src:a,alt:"Avengers logo"})]})}},9613:function(t,n,e){e.d(n,{Z:function(){return c}});var r=e.p+"static/media/error.42292aa12b6bc303ce99.gif",a=e(184);function c(){return(0,a.jsx)("img",{src:r,alt:"Error gif"})}},1748:function(t,n,e){e.r(n),e.d(n,{default:function(){return m}});var r=e(4270),a=e(2982),c=e(885),i=e(2791),s=e(3504),u=e(4304),o=e(725),l=e(184),f=(0,o.Z)();function p(t){var n=(0,i.useState)([]),e=(0,c.Z)(n,2),r=e[0],o=e[1],p=(0,u.ZP)(),d=p.processState,m=p.setProcessState,h=p.getComics,v=function(t){o((function(n){return[].concat((0,a.Z)(n),(0,a.Z)(t))}))},g=function(){var t=r.length;h(t,8).then(v).then((function(){return m("success")}))},x=function(){return r.length<u.lX-u.zZ},b=function(){x()&&g()};return(0,i.useEffect)(g,[]),(0,l.jsxs)("div",{className:"comics__list",children:[(0,l.jsx)(f,{state:d,children:(0,l.jsx)("ul",{className:"comics__grid",children:r.map((function(t,n){var e=t.id,r=t.thumbnail,a=t.title,c=t.price;return(0,l.jsx)("li",{className:"comics__item",children:(0,l.jsxs)(s.rU,{to:"/comics/".concat(e),children:[(0,l.jsx)("img",{src:r.url,alt:a,className:"comics__item-img",style:r.style}),(0,l.jsx)("div",{className:"comics__item-name",children:a}),(0,l.jsxs)("div",{className:"comics__item-price",children:[c,"$"]})]})},e)}))})}),function(){var t=x();return(0,l.jsx)("button",{className:"button button__main button__long",onClick:b,disabled:!t,tabIndex:"0",children:(0,l.jsx)("div",{className:"inner",children:t?"load more":"All comics loaded"})})}()]})}var d=e(3957);function m(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.Z,{children:[(0,l.jsx)("meta",{name:"description",content:"All Marvel's comics"}),(0,l.jsx)("title",{children:"Comics list"})]}),(0,l.jsx)(d.Z,{}),(0,l.jsx)(p,{})]})}},725:function(t,n,e){e.d(n,{Z:function(){return o}});var r=e(4925),a=e(8683),c=e(3394),i=e(9613),s=e(184),u=["state"];function o(t){var n=(0,a.Z)({waiting:function(){},loading:function(){return(0,s.jsx)(c.Z,{})},error:function(){return(0,s.jsx)(i.Z,{})},fetched:function(){},success:function(t){var n=t.children;return(0,s.jsx)(s.Fragment,{children:n})}},t);return function(t){var e=t.state,a=(0,r.Z)(t,u);return n[e](a)}}},4304:function(t,n,e){e.d(n,{TL:function(){return l},Ke:function(){return f},zZ:function(){return d},lX:function(){return m},ZP:function(){return u}});var r=e(5861),a=e(7757),c=e.n(a),i=e(885),s=e(2791);function u(){var t="https://gateway.marvel.com:443/v1/public",n="apikey=d840bc106aeea955689856e89bb25220",e=function(){var t=(0,s.useState)(!1),n=(0,i.Z)(t,2),e=n[0],a=n[1],u=(0,s.useState)(!1),o=(0,i.Z)(u,2),l=o[0],f=o[1],p=(0,s.useState)("waiting"),d=(0,i.Z)(p,2),m=d[0],h=d[1],v=(0,s.useCallback)(function(){var t=(0,r.Z)(c().mark((function t(n){var e,r,i,s,u,o=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=o.length>1&&void 0!==o[1]?o[1]:"GET",r=o.length>2&&void 0!==o[2]?o[2]:null,i=o.length>3&&void 0!==o[3]?o[3]:{"Content-Type":"application/json"},a(!0),f(!1),h("loading"),t.next=8,fetch(n,{method:e,body:r,headers:i});case 8:if((s=t.sent).ok){t.next=14;break}throw a(!1),f(!0),h("error"),new Error("Can't fetch url ".concat(n,", error ").concat(s.status,": ").concat(s.statusText));case 14:return t.next=16,s.json();case 16:return u=t.sent,a(!1),f(!1),h("fetched"),t.abrupt("return",u);case 21:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),[]);return{loading:e,error:l,processState:m,setProcessState:h,request:v}}(),a=e.loading,u=e.error,v=e.processState,x=e.setProcessState,b=e.request;function y(t,n){return j.apply(this,arguments)}function j(){return(j=(0,r.Z)(c().mark((function e(r,a){var i,s,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(s in i=[n],a)i.push("".concat(s,"=").concat(a[s]));return u="".concat(t,"/").concat(r,"?").concat(i.join("&")),e.abrupt("return",b(u));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(){return Z=(0,r.Z)(c().mark((function t(n){var e,r,a,i=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=(e=i.length>1&&void 0!==i[1]?i[1]:9)<=o?e:o,r=(r=l+n)<=f?r:f,t.next=6,y("characters",{limit:e,offset:r});case 6:return a=t.sent,t.abrupt("return",a.data.results.map(k));case 8:case"end":return t.stop()}}),t)}))),Z.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y("characters",{nameStartsWith:n,limit:100});case 2:return e=t.sent,t.abrupt("return",e.data.results.map(k));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function _(){return(_=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y("characters/".concat(n));case 2:return e=t.sent,t.abrupt("return",k(e.data.results[0]));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function k(t){var n=t.id,e=t.name,r=t.urls,a=t.comics,c=g(t.thumbnail),i=r[0].url,s=r[1].url,u=t.description?t.description:"Description not found";return{id:n,name:e,description:u,thumbnail:c,homepageUrl:i,wikiUrl:s,shortedDescription:h(u),comics:a.items}}function S(){return S=(0,r.Z)(c().mark((function t(n){var e,r,a,i=arguments;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=(e=i.length>1&&void 0!==i[1]?i[1]:8)<=p?e:p,r=(r=d+n)<=m?r:m,t.next=6,y("comics",{limit:e,offset:r});case 6:return a=t.sent,t.abrupt("return",a.data.results.map(N));case 8:case"end":return t.stop()}}),t)}))),S.apply(this,arguments)}function C(){return(C=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y("comics/".concat(n));case 2:return e=t.sent,t.abrupt("return",N(e.data.results[0]));case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function N(t){var n=t.id,e=t.title,r=t.pageCount,a=g(t.thumbnail),c=t.prices[0].price,i=t.description?t.description:"Description not found";return{id:n,title:e,pageCount:r,price:c,description:i,thumbnail:a,shortedDescription:h(i),language:t.textObjects.language||"en-us"}}return{loading:a,error:u,processState:v,setProcessState:x,getCharacter:function(t){return _.apply(this,arguments)},getCharacters:function(t){return Z.apply(this,arguments)},getCharactersByNamePart:function(t){return w.apply(this,arguments)},getComic:function(t){return C.apply(this,arguments)},getComics:function(t){return S.apply(this,arguments)}}}var o=100,l=210,f=1561,p=100,d=0,m=1561;function h(t){if(t.length<=190)return t;var n=t.split(" "),e=0,r=0;return n.forEach((function(t,n){e+t.length<=190&&n-r<=1&&(e+=t.length,r=n)})),n.slice(0,r).join(" ")+"\u2026"}var v=["4c002e0305708","image_not_available"];function g(t){var n={url:t.path+"."+t.extension,style:{}};return v.some((function(n){return t.path.indexOf(n)>-1}))&&(n.style.objectFit="contain"),n}},2982:function(t,n,e){e.d(n,{Z:function(){return c}});var r=e(907);var a=e(181);function c(t){return function(t){if(Array.isArray(t))return(0,r.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,a.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=682.9147dbb2.chunk.js.map