(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-45f96011"],{"044b":function(e,t){function n(e){return!!e.constructor&&"function"===typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}function r(e){return"function"===typeof e.readFloatLE&&"function"===typeof e.slice&&n(e.slice(0,0))}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
e.exports=function(e){return null!=e&&(n(e)||r(e)||!!e._isBuffer)}},"0a06":function(e,t,n){"use strict";var r=n("2444"),o=n("c532"),i=n("f6b4"),a=n("5270");function s(e){this.defaults=e,this.interceptors={request:new i,response:new i}}s.prototype.request=function(e){"string"===typeof e&&(e=o.merge({url:arguments[0]},arguments[1])),e=o.merge(r,{method:"get"},this.defaults,e),e.method=e.method.toLowerCase();var t=[a,void 0],n=Promise.resolve(e);this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});while(t.length)n=n.then(t.shift(),t.shift());return n},o.forEach(["delete","get","head","options"],function(e){s.prototype[e]=function(t,n){return this.request(o.merge(n||{},{method:e,url:t}))}}),o.forEach(["post","put","patch"],function(e){s.prototype[e]=function(t,n,r){return this.request(o.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=s},"0df6":function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},"1d2b":function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},2444:function(e,t,n){"use strict";(function(t){var r=n("c532"),o=n("c8af"),i={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}function s(){var e;return"undefined"!==typeof XMLHttpRequest?e=n("b50d"):"undefined"!==typeof t&&(e=n("b50d")),e}var c={adapter:s(),transformRequest:[function(e,t){return o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(a(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"===typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],function(e){c.headers[e]={}}),r.forEach(["post","put","patch"],function(e){c.headers[e]=r.merge(i)}),e.exports=c}).call(this,n("4362"))},"268f":function(e,t,n){e.exports=n("fde4")},"2d83":function(e,t,n){"use strict";var r=n("387f");e.exports=function(e,t,n,o,i){var a=new Error(e);return r(a,t,n,o,i)}},"2e67":function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},"30b5":function(e,t,n){"use strict";var r=n("c532");function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var a=[];r.forEach(t,function(e,t){null!==e&&"undefined"!==typeof e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),a.push(o(t)+"="+o(e))}))}),i=a.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},"32a6":function(e,t,n){var r=n("241e"),o=n("c3a1");n("ce7e")("keys",function(){return function(e){return o(r(e))}})},"387f":function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e}},3934:function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return function(){return!0}}()},"467f":function(e,t,n){"use strict";var r=n("2d83");e.exports=function(e,t,n){var o=n.config.validateStatus;n.status&&o&&!o(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},5270:function(e,t,n){"use strict";var r=n("c532"),o=n("c401"),i=n("2e67"),a=n("2444"),s=n("d925"),c=n("e683");function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){u(e),e.baseURL&&!s(e.url)&&(e.url=c(e.baseURL,e.url)),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]});var t=e.adapter||a.adapter;return t(e).then(function(t){return u(e),t.data=o(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},"6c78":function(e,t,n){"use strict";t["a"]={kurosawas_grave:{title:"KUROSAWA'S GRAVE",url:"/kurosawas_grave",cover:{backgroundImage:"/img/01.jpg",cornerImage:"",islandModel:"2"},next:"/nyx"},nyx:{title:"Nyx",url:"/nyx",cover:{backgroundImage:"/img/texture1.png",cornerImage:"",islandModel:"2"},next:"/nyx"},gif:{title:"GIF",url:"/gif",cover:{backgroundImage:"/img/texture1.png",cornerImage:"",islandModel:"2"},next:"/nyx"}}},"765e":function(e,t,n){},"7a775":function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},"7aac":function(e,t,n){"use strict";var r=n("c532");e.exports=r.isStandardBrowserEnv()?function(){return{write:function(e,t,n,o,i,a){var s=[];s.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(o)&&s.push("path="+o),r.isString(i)&&s.push("domain="+i),!0===a&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"8aae":function(e,t,n){n("32a6"),e.exports=n("584a").Object.keys},"8df4":function(e,t,n){"use strict";var r=n("7a775");function o(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e,t=new o(function(t){e=t});return{token:t,cancel:e}},e.exports=o},"9fa6":function(e,t,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(){this.message="String contains an invalid character"}function i(e){for(var t,n,i=String(e),a="",s=0,c=r;i.charAt(0|s)||(c="=",s%1);a+=c.charAt(63&t>>8-s%1*8)){if(n=i.charCodeAt(s+=.75),n>255)throw new o;t=t<<8|n}return a}o.prototype=new Error,o.prototype.code=5,o.prototype.name="InvalidCharacterError",e.exports=i},a3ed:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-project-content",[n("div",{staticClass:"content",domProps:{innerHTML:e._s(e.html)}})]),n("div",{staticClass:"left"},[n("v-island",{key:"nyx",staticClass:"island",attrs:{project:e.project,delay:"0"}})],1)],1)},o=[],i=n("cebc"),a=n("6c78"),s=n("bc3a"),c=n.n(s),u=n("2f62"),f={components:{"v-project-content":function(){return n.e("chunk-b233cfec").then(n.bind(null,"b5e6"))},"v-island":function(){return Promise.all([n.e("chunk-c9f46c6e"),n.e("chunk-2f866ef3")]).then(n.bind(null,"8b72"))}},data:function(){return{projects:a["a"],html:"estt",id:this.$route.params.id}},computed:Object(i["a"])({},Object(u["b"])(["getLang"]),{project:function(){return a["a"][this.id]},url:function(){var e=this.$route.params.id,t="/content/".concat(e),n=this.getLang;return{fr:"".concat(t,"/").concat(n,".html"),en:"".concat(t,"/").concat(n,".html")}}}),methods:{fetchContent:function(){var e=this;c.a.get(this.url.fr).then(function(t){e.html=t.data,e.$refs.render.innerHTML=e.html}).catch(function(e){}).then(function(){})},enterAnim:function(e){e()},leaveAnim:function(e){e()}},mounted:function(){this.fetchContent()}},p=f,d=(n("e486"),n("2877")),l=Object(d["a"])(p,r,o,!1,null,"7936b4ac",null);t["default"]=l.exports},a4bb:function(e,t,n){e.exports=n("8aae")},b50d:function(e,t,n){"use strict";var r=n("c532"),o=n("467f"),i=n("30b5"),a=n("c345"),s=n("3934"),c=n("2d83"),u="undefined"!==typeof window&&window.btoa&&window.btoa.bind(window)||n("9fa6");e.exports=function(e){return new Promise(function(t,f){var p=e.data,d=e.headers;r.isFormData(p)&&delete d["Content-Type"];var l=new XMLHttpRequest,h="onreadystatechange",m=!1;if("undefined"===typeof window||!window.XDomainRequest||"withCredentials"in l||s(e.url)||(l=new window.XDomainRequest,h="onload",m=!0,l.onprogress=function(){},l.ontimeout=function(){}),e.auth){var g=e.auth.username||"",y=e.auth.password||"";d.Authorization="Basic "+u(g+":"+y)}if(l.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),l.timeout=e.timeout,l[h]=function(){if(l&&(4===l.readyState||m)&&(0!==l.status||l.responseURL&&0===l.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in l?a(l.getAllResponseHeaders()):null,r=e.responseType&&"text"!==e.responseType?l.response:l.responseText,i={data:r,status:1223===l.status?204:l.status,statusText:1223===l.status?"No Content":l.statusText,headers:n,config:e,request:l};o(t,f,i),l=null}},l.onerror=function(){f(c("Network Error",e,null,l)),l=null},l.ontimeout=function(){f(c("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",l)),l=null},r.isStandardBrowserEnv()){var v=n("7aac"),w=(e.withCredentials||s(e.url))&&e.xsrfCookieName?v.read(e.xsrfCookieName):void 0;w&&(d[e.xsrfHeaderName]=w)}if("setRequestHeader"in l&&r.forEach(d,function(e,t){"undefined"===typeof p&&"content-type"===t.toLowerCase()?delete d[t]:l.setRequestHeader(t,e)}),e.withCredentials&&(l.withCredentials=!0),e.responseType)try{l.responseType=e.responseType}catch(b){if("json"!==e.responseType)throw b}"function"===typeof e.onDownloadProgress&&l.addEventListener("progress",e.onDownloadProgress),"function"===typeof e.onUploadProgress&&l.upload&&l.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){l&&(l.abort(),f(e),l=null)}),void 0===p&&(p=null),l.send(p)})}},bc3a:function(e,t,n){e.exports=n("cee4")},bf90:function(e,t,n){var r=n("36c3"),o=n("bf0b").f;n("ce7e")("getOwnPropertyDescriptor",function(){return function(e,t){return o(r(e),t)}})},c345:function(e,t,n){"use strict";var r=n("c532"),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,a={};return e?(r.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(a[t]&&o.indexOf(t)>=0)return;a[t]="set-cookie"===t?(a[t]?a[t]:[]).concat([n]):a[t]?a[t]+", "+n:n}}),a):a}},c401:function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},c532:function(e,t,n){"use strict";var r=n("1d2b"),o=n("044b"),i=Object.prototype.toString;function a(e){return"[object Array]"===i.call(e)}function s(e){return"[object ArrayBuffer]"===i.call(e)}function c(e){return"undefined"!==typeof FormData&&e instanceof FormData}function u(e){var t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer,t}function f(e){return"string"===typeof e}function p(e){return"number"===typeof e}function d(e){return"undefined"===typeof e}function l(e){return null!==e&&"object"===typeof e}function h(e){return"[object Date]"===i.call(e)}function m(e){return"[object File]"===i.call(e)}function g(e){return"[object Blob]"===i.call(e)}function y(e){return"[object Function]"===i.call(e)}function v(e){return l(e)&&y(e.pipe)}function w(e){return"undefined"!==typeof URLSearchParams&&e instanceof URLSearchParams}function b(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function x(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function C(e,t){if(null!==e&&"undefined"!==typeof e)if("object"!==typeof e&&(e=[e]),a(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}function E(){var e={};function t(t,n){"object"===typeof e[n]&&"object"===typeof t?e[n]=E(e[n],t):e[n]=t}for(var n=0,r=arguments.length;n<r;n++)C(arguments[n],t);return e}function j(e,t,n){return C(t,function(t,o){e[o]=n&&"function"===typeof t?r(t,n):t}),e}e.exports={isArray:a,isArrayBuffer:s,isBuffer:o,isFormData:c,isArrayBufferView:u,isString:f,isNumber:p,isObject:l,isUndefined:d,isDate:h,isFile:m,isBlob:g,isFunction:y,isStream:v,isURLSearchParams:w,isStandardBrowserEnv:x,forEach:C,merge:E,extend:j,trim:b}},c8af:function(e,t,n){"use strict";var r=n("c532");e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},cebc:function(e,t,n){"use strict";var r=n("268f"),o=n.n(r),i=n("e265"),a=n.n(i),s=n("a4bb"),c=n.n(s),u=n("85f2"),f=n.n(u);function p(e,t,n){return t in e?f()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=c()(n);"function"===typeof a.a&&(r=r.concat(a()(n).filter(function(e){return o()(n,e).enumerable}))),r.forEach(function(t){p(e,t,n[t])})}return e}n.d(t,"a",function(){return d})},cee4:function(e,t,n){"use strict";var r=n("c532"),o=n("1d2b"),i=n("0a06"),a=n("2444");function s(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var c=s(a);c.Axios=i,c.create=function(e){return s(r.merge(a,e))},c.Cancel=n("7a775"),c.CancelToken=n("8df4"),c.isCancel=n("2e67"),c.all=function(e){return Promise.all(e)},c.spread=n("0df6"),e.exports=c,e.exports.default=c},d925:function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},e265:function(e,t,n){e.exports=n("ed33")},e486:function(e,t,n){"use strict";var r=n("765e"),o=n.n(r);o.a},e683:function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},ed33:function(e,t,n){n("014b"),e.exports=n("584a").Object.getOwnPropertySymbols},f6b4:function(e,t,n){"use strict";var r=n("c532");function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=o},fde4:function(e,t,n){n("bf90");var r=n("584a").Object;e.exports=function(e,t){return r.getOwnPropertyDescriptor(e,t)}}}]);
//# sourceMappingURL=chunk-45f96011.18693aaa.js.map