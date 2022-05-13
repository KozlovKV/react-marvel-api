"use strict";(self.webpackChunkmarvel_universe=self.webpackChunkmarvel_universe||[]).push([[972],{4323:function(e,n,r){r.d(n,{Z:function(){return c}});var t=r(8683),a=r(532),s=r(184);function c(e){return(0,s.jsx)(a.Z,(0,t.Z)((0,t.Z)({},e),{},{timeout:300,classNames:"appearance",children:(0,s.jsx)(s.Fragment,{children:e.children})}))}},9613:function(e,n,r){r.d(n,{Z:function(){return s}});var t=r.p+"static/media/error.42292aa12b6bc303ce99.gif",a=r(184);function s(){return(0,a.jsx)("img",{src:t,alt:"Error gif"})}},8335:function(e,n,r){r.r(n),r.d(n,{default:function(){return S}});var t=r(885),a=r(2791),s=r(3394),c=r(9613),i=r(4323),l=r(4304),o=r.p+"static/media/mjolnir.61f31e1809f12183a524.png",u=r(184);function h(){var e=(0,a.useState)({}),n=(0,t.Z)(e,2),r=n[0],h=n[1],m=(0,l.ZP)(),f=m.loading,p=m.error,x=m.getCharacter,j=function(e){h(e)},_=function(){var e=Math.floor(400*Math.random()+1011e3);x(e).then(j)};(0,a.useEffect)(_,[]);var v=f?(0,u.jsx)(s.Z,{width:"250px"}):null,g=p?(0,u.jsx)(c.Z,{}):null,b=f||p||!r.id?null:(0,u.jsx)(d,{char:r});return(0,u.jsxs)("div",{className:"randomchar",children:[(0,u.jsx)(i.Z,{in:f,children:v}),(0,u.jsxs)(i.Z,{in:!f,children:[b,g]}),(0,u.jsxs)("div",{className:"randomchar__static",children:[(0,u.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",(0,u.jsx)("br",{}),"Do you want to get to know him better?"]}),(0,u.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),(0,u.jsx)("button",{className:"button button__main",onClick:_,children:(0,u.jsx)("div",{className:"inner",children:"try it"})}),(0,u.jsx)("img",{src:o,alt:"mjolnir",className:"randomchar__decoration"})]})]})}function d(e){var n=e.char,r=n.thumbnail,t=n.name,a=n.homepageUrl,s=n.wikiUrl,c=n.shortedDescription;return(0,u.jsxs)("div",{className:"randomchar__block",children:[(0,u.jsx)("img",{src:r.url,alt:t,className:"randomchar__img",style:r.style}),(0,u.jsxs)("div",{className:"randomchar__info",children:[(0,u.jsx)("p",{className:"randomchar__name",children:t}),(0,u.jsx)("p",{className:"randomchar__descr",children:c}),(0,u.jsxs)("div",{className:"randomchar__btns",children:[(0,u.jsx)("a",{href:a,className:"button button__main",children:(0,u.jsx)("div",{className:"inner",children:"homepage"})}),(0,u.jsx)("a",{href:s,className:"button button__secondary",children:(0,u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})}var m=r(2982);function f(e){var n=(0,a.useState)([]),r=(0,t.Z)(n,2),o=r[0],h=r[1],d=(0,l.ZP)(),f=d.loading,p=d.error,x=d.getCharacters,j=function(e){h((function(n){return[].concat((0,m.Z)(n),(0,m.Z)(e))}))},_=function(){var e=o.length;x(e,9).then(j)},v=function(){return o.length<l.Ke-l.TL},g=function(){v()&&_()};(0,a.useEffect)(_,[]);var b=f?(0,u.jsx)(s.Z,{width:"250px"}):null,N=p?(0,u.jsx)(c.Z,{}):null,Z=f?null:function(){var e=v();return(0,u.jsx)("button",{className:"button button__main button__long",onClick:g,disabled:!e,tabIndex:"0",children:(0,u.jsx)("div",{className:"inner",children:e?"load more":"All characters loaded"})})}();return(0,u.jsxs)("div",{className:"char__list",children:[(0,u.jsxs)(i.Z,{in:!f,unmountOnExit:!0,children:[(0,u.jsx)("ul",{className:"char__grid",children:o.map((function(n,r){var t=n.thumbnail,a=n.name,s=n.id,c=e.selectedCharId,i=e.onCharSelected,l="char__item ".concat(c===s?"char__item_selected":"");return(0,u.jsxs)("li",{className:l,tabIndex:"0",role:"treeitem",onFocus:function(){return i(s)},"data-id":s,children:[(0,u.jsx)("img",{src:t.url,alt:a,style:t.style}),(0,u.jsx)("div",{className:"char__name",children:a})]},r)}))}),N,Z]}),(0,u.jsx)(i.Z,{in:f,mountOnEnter:!0,children:b})]})}function p(){return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),(0,u.jsxs)("div",{className:"skeleton",children:[(0,u.jsxs)("div",{className:"pulse skeleton__header",children:[(0,u.jsx)("div",{className:"pulse skeleton__circle"}),(0,u.jsx)("div",{className:"pulse skeleton__mini"})]}),(0,u.jsx)("div",{className:"pulse skeleton__block"}),(0,u.jsx)("div",{className:"pulse skeleton__block"}),(0,u.jsx)("div",{className:"pulse skeleton__block"})]})]})}function x(e){var n=(0,a.useState)(null),r=(0,t.Z)(n,2),o=r[0],h=r[1],d=(0,l.ZP)(),m=d.loading,f=d.error,x=d.getCharacter,_=function(e){h(e)};(0,a.useEffect)((function(){var n=e.selectedCharId;n&&x(n).then(_)}),[e.selectedCharId]);var v=o||m||f?null:(0,u.jsx)(p,{}),g=m?(0,u.jsx)(s.Z,{}):null,b=f?(0,u.jsx)(c.Z,{}):null,N=m||f||!o?null:(0,u.jsx)(j,{char:o});return(0,u.jsxs)("div",{className:"char__info",children:[v,(0,u.jsx)(i.Z,{in:m,children:g}),(0,u.jsxs)(i.Z,{in:!m,children:[b,N]})]})}var j=function(e){var n=e.char,r=n.thumbnail,t=n.name,a=n.homepageUrl,s=n.wikiUrl,c=n.description,i=n.comics.map((function(e){return(0,u.jsx)("li",{className:"char__comics-item",children:e.name},e.name)}));return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:"char__basics",children:[(0,u.jsx)("img",{src:r.url,alt:t,style:r.style}),(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:"char__info-name",children:t}),(0,u.jsxs)("div",{className:"char__btns",children:[(0,u.jsx)("a",{href:a,className:"button button__main",children:(0,u.jsx)("div",{className:"inner",children:"homepage"})}),(0,u.jsx)("a",{href:s,className:"button button__secondary",children:(0,u.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),(0,u.jsx)("div",{className:"char__descr",children:c}),(0,u.jsx)("div",{className:"char__comics",children:"Comics:"}),(0,u.jsx)("ul",{className:"char__comics-list",children:i.length>0?i.slice(0,10):"No comics with this character"})]})},_=r(3504),v=r(5705),g=r(132);function b(e){var n=(0,l.ZP)(),r=n.loading,c=n.getCharactersByNamePart,i=(0,a.useState)([]),o=(0,t.Z)(i,2),h=o[0],d=o[1];return(0,u.jsxs)("div",{className:"char__find",children:[(0,u.jsx)("h3",{children:"Or find a characters by name:"}),(0,u.jsx)(v.J9,{initialValues:{name:""},validationSchema:g.Ry({name:g.Z_().required("Name is required").min(2,"2 symbols minimum")}),onSubmit:function(e){var n=e.name;c(n).then(d)},children:(0,u.jsxs)(v.l0,{className:"char__find__form row",children:[(0,u.jsx)(v.gN,{name:"name",placeholder:"Enter name"}),(0,u.jsx)("button",{type:"submit",className:"button button__main",children:(0,u.jsx)("div",{className:"inner",children:"find"})}),(0,u.jsx)(v.Bc,{name:"name",className:"error",component:"h3"})]})}),r?(0,u.jsx)(s.Z,{width:"150px"}):h.length?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("h3",{className:"success",children:["Founded ",h.length," char",h.length>1?"s":""]}),(0,u.jsx)("ul",{className:"char__find__results-list",children:h.map((function(e){return(0,u.jsxs)("li",{className:"row char__find__results-item",children:[(0,u.jsx)("h4",{children:e.name}),(0,u.jsx)(_.rU,{to:"/chars/".concat(e.id),className:"button button__secondary",children:(0,u.jsx)("div",{className:"inner",children:"char page"})})]},e.id)}))})]}):null]})}var N=r(5671),Z=r(3144),y=r(136),k=r(3668),w=function(e){(0,y.Z)(r,e);var n=(0,k.Z)(r);function r(){var e;(0,N.Z)(this,r);for(var t=arguments.length,a=new Array(t),s=0;s<t;s++)a[s]=arguments[s];return(e=n.call.apply(n,[this].concat(a))).state={error:!1},e}return(0,Z.Z)(r,[{key:"componentDidCatch",value:function(e,n){console.log(e,n),this.setState({error:!0})}},{key:"render",value:function(){var e=this.state.error,n=this.props.children;return(0,u.jsx)(u.Fragment,{children:e?(0,u.jsx)(c.Z,{}):n})}}]),r}(a.Component),C=r.p+"static/media/vision.067d4ae1936d64a577ce.png";function S(){var e=(0,a.useState)(0),n=(0,t.Z)(e,2),r=n[0],s=n[1];return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(w,{children:(0,u.jsx)(h,{})}),(0,u.jsxs)("div",{className:"char__content",children:[(0,u.jsx)(w,{children:(0,u.jsx)(f,{selectedCharId:r,onCharSelected:function(e){return s(e)}})}),(0,u.jsxs)("div",{children:[(0,u.jsx)(w,{children:(0,u.jsx)(x,{selectedCharId:r})}),(0,u.jsx)(w,{children:(0,u.jsx)(b,{})})]})]}),(0,u.jsx)("img",{className:"bg-decoration",src:C,alt:"vision"})]})}},4304:function(e,n,r){r.d(n,{TL:function(){return u},Ke:function(){return h},zZ:function(){return m},lX:function(){return f},ZP:function(){return l}});var t=r(5861),a=r(7757),s=r.n(a),c=r(885),i=r(2791);function l(){var e="https://gateway.marvel.com:443/v1/public",n="apikey=d840bc106aeea955689856e89bb25220",r=function(){var e=(0,i.useState)(!1),n=(0,c.Z)(e,2),r=n[0],a=n[1],l=(0,i.useState)(!1),o=(0,c.Z)(l,2),u=o[0],h=o[1],d=(0,i.useCallback)(function(){var e=(0,t.Z)(s().mark((function e(n){var r,t,c,i,l,o=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:"GET",t=o.length>2&&void 0!==o[2]?o[2]:null,c=o.length>3&&void 0!==o[3]?o[3]:{"Content-Type":"application/json"},a(!0),h(!1),e.next=7,fetch(n,{method:r,body:t,headers:c});case 7:if((i=e.sent).ok){e.next=12;break}throw a(!1),h(!0),new Error("Can't fetch url ".concat(n,", error ").concat(i.status,": ").concat(i.statusText));case 12:return e.next=14,i.json();case 14:return l=e.sent,a(!1),h(!1),e.abrupt("return",l);case 18:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[]);return{loading:r,error:u,request:d}}(),a=r.loading,l=r.error,x=r.request;function _(e,n){return v.apply(this,arguments)}function v(){return(v=(0,t.Z)(s().mark((function r(t,a){var c,i,l;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:for(i in c=[n],a)c.push("".concat(i,"=").concat(a[i]));return l="".concat(e,"/").concat(t,"?").concat(c.join("&")),r.abrupt("return",x(l));case 4:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function g(){return g=(0,t.Z)(s().mark((function e(n){var r,t,a,c=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(r=c.length>1&&void 0!==c[1]?c[1]:9)<=o?r:o,t=(t=u+n)<=h?t:h,e.next=6,_("characters",{limit:r,offset:t});case 6:return a=e.sent,e.abrupt("return",a.data.results.map(Z));case 8:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function b(){return(b=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_("characters",{nameStartsWith:n,limit:100});case 2:return r=e.sent,e.abrupt("return",r.data.results.map(Z));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function N(){return(N=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_("characters/".concat(n));case 2:return r=e.sent,e.abrupt("return",Z(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Z(e){var n=e.id,r=e.name,t=e.urls,a=e.comics,s=j(e.thumbnail),c=t[0].url,i=t[1].url,l=e.description?e.description:"Description not found";return{id:n,name:r,description:l,thumbnail:s,homepageUrl:c,wikiUrl:i,shortedDescription:p(l),comics:a.items}}function y(){return y=(0,t.Z)(s().mark((function e(n){var r,t,a,c=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(r=c.length>1&&void 0!==c[1]?c[1]:8)<=d?r:d,t=(t=m+n)<=f?t:f,e.next=6,_("comics",{limit:r,offset:t});case 6:return a=e.sent,e.abrupt("return",a.data.results.map(w));case 8:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}function k(){return(k=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_("comics/".concat(n));case 2:return r=e.sent,e.abrupt("return",w(r.data.results[0]));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){var n=e.id,r=e.title,t=e.pageCount,a=j(e.thumbnail),s=e.prices[0].price,c=e.description?e.description:"Description not found";return{id:n,title:r,pageCount:t,price:s,description:c,thumbnail:a,shortedDescription:p(c),language:e.textObjects.language||"en-us"}}return{loading:a,error:l,getCharacter:function(e){return N.apply(this,arguments)},getCharacters:function(e){return g.apply(this,arguments)},getCharactersByNamePart:function(e){return b.apply(this,arguments)},getComic:function(e){return k.apply(this,arguments)},getComics:function(e){return y.apply(this,arguments)}}}var o=100,u=210,h=1561,d=100,m=0,f=1561;function p(e){if(e.length<=190)return e;var n=e.split(" "),r=0,t=0;return n.forEach((function(e,n){r+e.length<=190&&n-t<=1&&(r+=e.length,t=n)})),n.slice(0,t).join(" ")+"\u2026"}var x=["4c002e0305708","image_not_available"];function j(e){var n={url:e.path+"."+e.extension,style:{}};return x.some((function(n){return e.path.indexOf(n)>-1}))&&(n.style.objectFit="contain"),n}}}]);
//# sourceMappingURL=972.65a6e93b.chunk.js.map