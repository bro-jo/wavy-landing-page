(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{"3niX":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.flush=function(){var e=u.cssRules();return u.flush(),e},t.default=void 0;var n,i=r("q1tI");function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=new(((n=r("SevZ"))&&n.__esModule?n:{default:n}).default),d=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=o(this,l(t).call(this,e))).prevProps={},r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,i.Component),r=t,a=[{key:"dynamic",value:function(e){return e.map(function(e){var t=e[0],r=e[1];return u.computeId(t,r)}).join(" ")}}],(n=[{key:"shouldComponentUpdate",value:function(e){return this.props.id!==e.id||String(this.props.dynamic)!==String(e.dynamic)}},{key:"componentWillUnmount",value:function(){u.remove(this.props)}},{key:"render",value:function(){return this.shouldComponentUpdate(this.prevProps)&&(this.prevProps.id&&u.remove(this.prevProps),u.add(this.props),this.prevProps=this.props),null}}])&&s(r.prototype,n),a&&s(r,a),t}();t.default=d},"8oxB":function(e,t){var r,n,i=e.exports={};function a(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function o(e){if(r===setTimeout)return setTimeout(e,0);if((r===a||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:a}catch(e){r=a}try{n="function"==typeof clearTimeout?clearTimeout:s}catch(e){n=s}}();var l,c=[],u=!1,d=-1;function h(){u&&l&&(u=!1,l.length?c=l.concat(c):d=-1,c.length&&p())}function p(){if(!u){var e=o(h);u=!0;for(var t=c.length;t;){for(l=c,c=[];++d<t;)l&&l[d].run();d=-1,t=c.length}l=null,u=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===s||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function f(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];c.push(new m(e,t)),1!==c.length||u||o(p)},m.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=f,i.addListener=f,i.once=f,i.off=f,i.removeListener=f,i.removeAllListeners=f,i.emit=f,i.prependListener=f,i.prependOnceListener=f,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},"9kyW":function(e,t,r){"use strict";e.exports=function(e){for(var t=5381,r=e.length;r;)t=33*t^e.charCodeAt(--r);return t>>>0}},H0SL:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=r("cMU6");return{page:e.default||e}}])},MX0m:function(e,t,r){e.exports=r("3niX")},SevZ:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r("9kyW")),i=a(r("bVZc"));function a(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.styleSheet,n=void 0===r?null:r,a=t.optimizeForSpeed,s=void 0!==a&&a,o=t.isBrowser,l=void 0===o?"undefined"!=typeof window:o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._sheet=n||new i.default({name:"styled-jsx",optimizeForSpeed:s}),this._sheet.inject(),n&&"boolean"==typeof s&&(this._sheet.setOptimizeForSpeed(s),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser=l,this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}var t,r,a;return t=e,(r=[{key:"add",value:function(e){var t=this;void 0===this._optimizeForSpeed&&(this._optimizeForSpeed=Array.isArray(e.children),this._sheet.setOptimizeForSpeed(this._optimizeForSpeed),this._optimizeForSpeed=this._sheet.isOptimizeForSpeed()),this._isBrowser&&!this._fromServer&&(this._fromServer=this.selectFromServer(),this._instancesCounts=Object.keys(this._fromServer).reduce(function(e,t){return e[t]=0,e},{}));var r=this.getIdAndRules(e),n=r.styleId,i=r.rules;if(n in this._instancesCounts)this._instancesCounts[n]+=1;else{var a=i.map(function(e){return t._sheet.insertRule(e)}).filter(function(e){return-1!==e});this._indices[n]=a,this._instancesCounts[n]=1}}},{key:"remove",value:function(e){var t=this,r=this.getIdAndRules(e).styleId;if(function(e,t){if(!e)throw new Error("StyleSheetRegistry: ".concat(t,"."))}(r in this._instancesCounts,"styleId: `".concat(r,"` not found")),this._instancesCounts[r]-=1,this._instancesCounts[r]<1){var n=this._fromServer&&this._fromServer[r];n?(n.parentNode.removeChild(n),delete this._fromServer[r]):(this._indices[r].forEach(function(e){return t._sheet.deleteRule(e)}),delete this._indices[r]),delete this._instancesCounts[r]}}},{key:"update",value:function(e,t){this.add(t),this.remove(e)}},{key:"flush",value:function(){this._sheet.flush(),this._sheet.inject(),this._fromServer=void 0,this._indices={},this._instancesCounts={},this.computeId=this.createComputeId(),this.computeSelector=this.createComputeSelector()}},{key:"cssRules",value:function(){var e=this,t=this._fromServer?Object.keys(this._fromServer).map(function(t){return[t,e._fromServer[t]]}):[],r=this._sheet.cssRules();return t.concat(Object.keys(this._indices).map(function(t){return[t,e._indices[t].map(function(e){return r[e].cssText}).join(e._optimizeForSpeed?"":"\n")]}).filter(function(e){return Boolean(e[1])}))}},{key:"createComputeId",value:function(){var e={};return function(t,r){if(!r)return"jsx-".concat(t);var i=String(r),a=t+i;return e[a]||(e[a]="jsx-".concat((0,n.default)("".concat(t,"-").concat(i)))),e[a]}}},{key:"createComputeSelector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:/__jsx-style-dynamic-selector/g,t={};return function(r,n){this._isBrowser||(n=n.replace(/\/style/gi,"\\/style"));var i=r+n;return t[i]||(t[i]=n.replace(e,r)),t[i]}}},{key:"getIdAndRules",value:function(e){var t=this,r=e.children,n=e.dynamic,i=e.id;if(n){var a=this.computeId(i,n);return{styleId:a,rules:Array.isArray(r)?r.map(function(e){return t.computeSelector(a,e)}):[this.computeSelector(a,r)]}}return{styleId:this.computeId(i),rules:Array.isArray(r)?r:[r]}}},{key:"selectFromServer",value:function(){return Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]')).reduce(function(e,t){return e[t.id.slice(2)]=t,e},{})}}])&&s(t.prototype,r),a&&s(t,a),e}();t.default=o},bVZc:function(e,t,r){"use strict";(function(e){function r(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=e.env&&!0,i=function(e){return"[object String]"===Object.prototype.toString.call(e)},a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.name,a=void 0===r?"stylesheet":r,o=t.optimizeForSpeed,l=void 0===o?n:o,c=t.isBrowser,u=void 0===c?"undefined"!=typeof window:c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),s(i(a),"`name` must be a string"),this._name=a,this._deletedRulePlaceholder="#".concat(a,"-deleted-rule____{}"),s("boolean"==typeof l,"`optimizeForSpeed` must be a boolean"),this._optimizeForSpeed=l,this._isBrowser=u,this._serverSheet=void 0,this._tags=[],this._injected=!1,this._rulesCount=0;var d=this._isBrowser&&document.querySelector('meta[property="csp-nonce"]');this._nonce=d?d.getAttribute("content"):null}var t,a,o;return t=e,(a=[{key:"setOptimizeForSpeed",value:function(e){s("boolean"==typeof e,"`setOptimizeForSpeed` accepts a boolean"),s(0===this._rulesCount,"optimizeForSpeed cannot be when rules have already been inserted"),this.flush(),this._optimizeForSpeed=e,this.inject()}},{key:"isOptimizeForSpeed",value:function(){return this._optimizeForSpeed}},{key:"inject",value:function(){var e=this;if(s(!this._injected,"sheet already injected"),this._injected=!0,this._isBrowser&&this._optimizeForSpeed)return this._tags[0]=this.makeStyleTag(this._name),this._optimizeForSpeed="insertRule"in this.getSheet(),void(this._optimizeForSpeed||(n||console.warn("StyleSheet: optimizeForSpeed mode not supported falling back to standard mode."),this.flush(),this._injected=!0));this._serverSheet={cssRules:[],insertRule:function(t,r){return"number"==typeof r?e._serverSheet.cssRules[r]={cssText:t}:e._serverSheet.cssRules.push({cssText:t}),r},deleteRule:function(t){e._serverSheet.cssRules[t]=null}}}},{key:"getSheetForTag",value:function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}},{key:"getSheet",value:function(){return this.getSheetForTag(this._tags[this._tags.length-1])}},{key:"insertRule",value:function(e,t){if(s(i(e),"`insertRule` accepts only strings"),!this._isBrowser)return"number"!=typeof t&&(t=this._serverSheet.cssRules.length),this._serverSheet.insertRule(e,t),this._rulesCount++;if(this._optimizeForSpeed){var r=this.getSheet();"number"!=typeof t&&(t=r.cssRules.length);try{r.insertRule(e,t)}catch(o){return n||console.warn("StyleSheet: illegal rule: \n\n".concat(e,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),-1}}else{var a=this._tags[t];this._tags.push(this.makeStyleTag(this._name,e,a))}return this._rulesCount++}},{key:"replaceRule",value:function(e,t){if(this._optimizeForSpeed||!this._isBrowser){var r=this._isBrowser?this.getSheet():this._serverSheet;if(t.trim()||(t=this._deletedRulePlaceholder),!r.cssRules[e])return e;r.deleteRule(e);try{r.insertRule(t,e)}catch(a){n||console.warn("StyleSheet: illegal rule: \n\n".concat(t,"\n\nSee https://stackoverflow.com/q/20007992 for more info")),r.insertRule(this._deletedRulePlaceholder,e)}}else{var i=this._tags[e];s(i,"old rule at index `".concat(e,"` not found")),i.textContent=t}return e}},{key:"deleteRule",value:function(e){if(this._isBrowser)if(this._optimizeForSpeed)this.replaceRule(e,"");else{var t=this._tags[e];s(t,"rule at index `".concat(e,"` not found")),t.parentNode.removeChild(t),this._tags[e]=null}else this._serverSheet.deleteRule(e)}},{key:"flush",value:function(){this._injected=!1,this._rulesCount=0,this._isBrowser?(this._tags.forEach(function(e){return e&&e.parentNode.removeChild(e)}),this._tags=[]):this._serverSheet.cssRules=[]}},{key:"cssRules",value:function(){var e=this;return this._isBrowser?this._tags.reduce(function(t,r){return r?t=t.concat(e.getSheetForTag(r).cssRules.map(function(t){return t.cssText===e._deletedRulePlaceholder?null:t})):t.push(null),t},[]):this._serverSheet.cssRules}},{key:"makeStyleTag",value:function(e,t,r){t&&s(i(t),"makeStyleTag acceps only strings as second parameter");var n=document.createElement("style");this._nonce&&n.setAttribute("nonce",this._nonce),n.type="text/css",n.setAttribute("data-".concat(e),""),t&&n.appendChild(document.createTextNode(t));var a=document.head||document.getElementsByTagName("head")[0];return r?a.insertBefore(n,r):a.appendChild(n),n}},{key:"length",get:function(){return this._rulesCount}}])&&r(t.prototype,a),o&&r(t,o),e}();function s(e,t){if(!e)throw new Error("StyleSheet: ".concat(t,"."))}t.default=a}).call(this,r("8oxB"))},cMU6:function(e,t,r){"use strict";r.r(t);var n=r("MX0m"),i=r.n(n),a=r("q1tI"),s=r.n(a),o=function(){return s.a.createElement("div",{className:"jsx-626623848"},s.a.createElement("div",{className:"jsx-626623848 mainBackgroundGradient"}),s.a.createElement("div",{className:"jsx-626623848 mainBackgroundWhite"}),s.a.createElement(i.a,{id:"626623848"},[".mainBackgroundGradient.jsx-626623848{position:absolute;top:0;right:0;bottom:200px;left:0;max-height:600px;z-index:-2;background:#13547a;background:-moz-linear-gradient(45deg,#13547a 0%,#80d0c7 100%);background:-webkit-linear-gradient(45deg,#13547a 0%,#80d0c7 100%);background:linear-gradient(45deg,#13547a 0%,#80d0c7 100%);-webkit-filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#13547a',endColorstr='#80d0c7',GradientType=1 );filter:progid:DXImageTransform.Microsoft.gradient( startColorstr='#13547a',endColorstr='#80d0c7',GradientType=1 );}",".mainBackgroundWhite.jsx-626623848{position:absolute;top:-20%;width:55%;right:-15%;bottom:-20%;-webkit-transform:rotate(20deg);-ms-transform:rotate(20deg);transform:rotate(20deg);z-index:-1;background-color:white;}","@media screen and (max-width:550px){.mainBackgroundWhite.jsx-626623848{width:45%;right:-42%;max-height:650px;}.mainBackgroundGradient.jsx-626623848{max-height:400px;}}"]))},l=function(){return s.a.createElement("div",{className:"jsx-3211773036"},s.a.createElement("div",{className:"jsx-3211773036 wavySketchImage-wrapper"},s.a.createElement("div",{className:"jsx-3211773036 wavySketchImage"})),s.a.createElement(i.a,{id:"3211773036"},[".wavySketchImage-wrapper.jsx-3211773036{position:relative;width:100%;margin:0;padding:0;}",'.wavySketchImage.jsx-3211773036{position:absolute;top:20px;right:2%;bottom:20%;width:500px;height:500px;background:url("/static/wavy_sketch.png");background-size:cover;background-position:center center;z-index:0;}',"@media screen and (max-width:1400px){.wavySketchImage.jsx-3211773036{width:400px;height:400px;}}","@media screen and (max-width:1300px){.wavySketchImage.jsx-3211773036{width:370px;height:370px;}}","@media screen and (max-width:1180px){.wavySketchImage.jsx-3211773036{width:330px;height:330px;}}","@media screen and (max-width:980px){.wavySketchImage.jsx-3211773036{right:1%;width:300px;height:300px;}}","@media screen and (max-width:880px){.wavySketchImage.jsx-3211773036{right:0%;width:280px;height:280px;}}","@media screen and (max-width:720px){.wavySketchImage.jsx-3211773036{right:-4%;width:265px;height:265px;}}","@media screen and (max-width:550px){.wavySketchImage.jsx-3211773036{position:relative;margin-top:150px;margin-right:auto;margin-bottom:30px;margin-left:auto;width:300px;height:300px;}}","@media screen and (max-width:380px){.wavySketchImage.jsx-3211773036{margin-top:100px;}}"]))},c=function(){return s.a.createElement("div",{className:"jsx-2828687462"},s.a.createElement("div",{className:"jsx-2828687462 mission-wrapper"},s.a.createElement("div",{className:"jsx-2828687462 mission"},s.a.createElement("p",{className:"jsx-2828687462 productTitle"},"WAVY +"),s.a.createElement("p",{className:"jsx-2828687462 mainMessage"},"건강한 환경에서 일하세요"),s.a.createElement("p",{className:"jsx-2828687462 subMessage"},"웨이비 플러스는 전자파 등 유해 환경을 감지하여 사무 환경 개선을 돕는 IoT 기기입니다."))),s.a.createElement(i.a,{id:"2828687462"},[".mission-wrapper.jsx-2828687462{position:relative;width:45%;padding-top:70px;padding-left:70px;padding-right:80px;padding-bottom:50px;}","@media screen and (max-width:550px){.mission-wrapper.jsx-2828687462{width:95%;padding:10px;margin-bottom:50px;}}","p.jsx-2828687462{color:white;}",".productTitle.jsx-2828687462{font-size:24px;word-break:keep-all;}",".mainMessage.jsx-2828687462{font-size:42px;word-break:keep-all;font-weight:700;}",".subMessage.jsx-2828687462{padding-right:70px;font-size:16px;font-weight:300;word-break:keep-all;}"]))},u=function(){return s.a.createElement("div",{className:"jsx-889135361"},s.a.createElement("div",{className:"jsx-889135361 howWrapper"},s.a.createElement("div",{className:"jsx-889135361 item"},s.a.createElement("div",{className:"jsx-889135361 icon icon-1"}),s.a.createElement("p",{className:"jsx-889135361 title"},"측정"),s.a.createElement("p",{className:"jsx-889135361 description"},"WAVY는 다차원 센서를 활용하여 유해 환경에 얼마나 노출되어 있는지를 측정합니다.")),s.a.createElement("div",{className:"jsx-889135361 item"},s.a.createElement("div",{className:"jsx-889135361 icon icon-2"}),s.a.createElement("p",{className:"jsx-889135361 title"},"분석"),s.a.createElement("p",{className:"jsx-889135361 description"},"WAVY는 모바일 앱 및 자체 개발한 시스템과 연동하여, 특정 기간마다 얼마나 유해 환경에 있었는지를 분석합니다.")),s.a.createElement("div",{className:"jsx-889135361 item"},s.a.createElement("div",{className:"jsx-889135361 icon icon-3"}),s.a.createElement("p",{className:"jsx-889135361 title"},"관리"),s.a.createElement("p",{className:"jsx-889135361 description"},"분석 데이터를 시각화 해주고, 유해 환경 노출 정도에 따라 적절한 조치를 제안해줍니다."))),s.a.createElement(i.a,{id:"889135361"},[".howWrapper.jsx-889135361{width:60vw;margin-top:25vh;padding:10px;text-align:center;}","@media screen and (max-width:1350px){.howWrapper.jsx-889135361{width:100vw;margin-top:40vh;margin-left:0;margin-right:0;padding:0;}}","@media screen and (max-width:1180px){.howWrapper.jsx-889135361{margin-top:35vh;}}","@media screen and (max-width:850px){.howWrapper.jsx-889135361{margin-top:30vh;}}","@media screen and (max-width:550px){.howWrapper.jsx-889135361{width:100vw;margin-top:-50px;margin-left:0;padding:0;}}",".howWrapper.jsx-889135361>.item.jsx-889135361{display:inline-block;width:250px;min-height:100px;margin:10px;vertical-align:top;text-align:left;}","@media screen and (max-width:1350px){.howWrapper.jsx-889135361>.item.jsx-889135361{margin-right:45px;margin-left:45px;}}","@media screen and (max-width:1150px){.howWrapper.jsx-889135361>.item.jsx-889135361{margin-right:12px;margin-left:12px;}}","@media screen and (max-width:850px){.howWrapper.jsx-889135361>.item.jsx-889135361{display:inline-block;margin-top:20px;margin-right:105px;margin-bottom:20px;margin-left:105px;}}","@media screen and (max-width:550px){.howWrapper.jsx-889135361>.item.jsx-889135361{margin-right:15px;margin-left:15px;}}",".icon.jsx-889135361{width:32px;height:32px;background-size:cover;background-position:center center;}",'.icon-1.jsx-889135361{background-image:url("/static/magnet.png");}','.icon-2.jsx-889135361{background-image:url("/static/record.png");}','.icon-3.jsx-889135361{background-image:url("/static/action.png");}',".title.jsx-889135361{font-weight:800;color:#333333;}",".description.jsx-889135361{font-weight:300;color:#555555;}"]))},d=r("MgzW"),h=r.n(d),p=function(){return(p=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},m=function(e){for(var t=e.url,r=e.allowFullScreen,n=e.position,i=e.display,a=e.height,o=e.width,l=e.overflow,c=e.styles,u=e.onLoad,d=e.onMouseOver,m=e.onMouseOut,f=e.scrolling,g=e.id,x=e.frameBorder,v=e.ariaHidden,y=e.sandbox,w=e.allow,_=e.className,b=e.title,j=e.ariaLabel,S=e.ariaLabelledby,k=e.name,E=e.target,N=e.loading,T=e.importance,F=e.referrerpolicy,z=e.allowpaymentrequest,C=e.src,R=h()({src:C||t,target:E||null,style:{position:n||null,display:i||"block",overflow:l||null},scrolling:f||null,allowpaymentrequest:z||null,importance:T||null,sandbox:y||null,loading:N||null,styles:c||null,name:k||null,className:_||null,referrerpolicy:F||null,title:b||null,allow:w||null,id:g||null,"aria-labelledby":S||null,"aria-hidden":v||null,"aria-label":j||null,width:o||null,height:a||null,onLoad:u||null,onMouseOver:d||null,onMouseOut:m||null}),O=Object.create(null),I=0,B=Object.keys(R);I<B.length;I++){var W=B[I];null!=R[W]&&(O[W]=R[W])}for(var P=0,A=Object.keys(O.style);P<A.length;P++){var M=A[P];null==O.style[M]&&delete O.style[M]}if(r)if("allow"in O){var L=O.allow.replace("fullscreen","");O.allow=("fullscreen "+L.trim()).trim()}else O.allow="fullscreen";return x>=0&&(O.style.hasOwnProperty("border")||(O.style.border=x)),s.a.createElement("iframe",p({},O))},f=function(){return s.a.createElement("div",{className:"jsx-507136803"},s.a.createElement("div",{className:"jsx-507136803 emailFrameWrapper"},s.a.createElement("div",{className:"jsx-507136803 emailFrame"},s.a.createElement(m,{id:"iframe",url:"https://page.stibee.com/subscriptions/34474",display:"inline-block",width:280,height:390,border:0,frameBorder:0,scrolling:!1,overflow:"hidden"}))),s.a.createElement(i.a,{id:"507136803"},[".emailFrameWrapper.jsx-507136803{display:inline-block;width:100%;margin:0 auto;text-align:center;}",".emailFrameWrapper.jsx-507136803>.emailFrame.jsx-507136803{display:inline-block;margin:0 auto;height:375px;overflow:hidden;background:#fcfcfc;-webkit-box-shadow:1px 1px 8px 1px rgba(170,170,170,1);-moz-box-shadow:1px 1px 8px 1px rgba(170,170,170,1);box-shadow:1px 1px 8px 1px rgba(170,170,170,1);}",".emailFrameWrapper.jsx-507136803>.emailFrame.jsx-507136803 body.jsx-507136803{background-color:#ffffff;}"]))};t.default=function(){return s.a.createElement("div",{className:"jsx-2447317871"},s.a.createElement(o,null),s.a.createElement(c,null),s.a.createElement(l,null),s.a.createElement("div",{className:"jsx-2447317871 padding"}),s.a.createElement(u,null),s.a.createElement("div",{className:"jsx-2447317871 padding"}),s.a.createElement(f,null),s.a.createElement("div",{className:"jsx-2447317871 padding"}),s.a.createElement(i.a,{id:"2447317871"},["body.jsx-2447317871{overflow-x:hidden;}",".padding.jsx-2447317871{height:100px;}"]))}}},[["H0SL","5d41","9da1"]]]);