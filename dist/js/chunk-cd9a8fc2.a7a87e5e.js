(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd9a8fc2"],{"10a2":function(t,e,n){},"19fe":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page page-landing"},[n("div",{staticClass:"page__inner"},[n("div",{ref:"logo",staticClass:"logo"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"126.806",height:"131.066",viewBox:"0 0 126.806 131.066"}},[n("path",{attrs:{id:"Path_2427","data-name":"Path 2427",d:"M27.974-92.442v24.566h-16.9V-58.5h16.9V-34.79H8.8v9.514H133.2V-34.79H116.724V-58.5h14.342v-9.372H116.724V-92.868h11.36v-9.656H34.364a88.562,88.562,0,0,0,5.112-12.5l-9.94-1.278C25.56-104.37,18.176-94.288,7.384-85.91l6.248,8.094A77.55,77.55,0,0,0,27.974-92.442Zm9.8,57.652V-58.5H54.1V-34.79Zm26.27,0V-58.5H80.656V-34.79Zm26.412,0V-58.5h16.33V-34.79Zm16.33-33.086H90.454V-92.868h16.33Zm-26.128,0H64.042V-92.868H80.656Zm-26.554,0H37.772V-92.868H54.1ZM26.98-19.17A116.634,116.634,0,0,1,10.792,8.662l8.378,6.106a134.714,134.714,0,0,0,16.472-29.82Zm30.956,2.982-9.372,2.13a219.933,219.933,0,0,1,6.674,27.974L65.6,11.644C63.332,1.7,60.776-7.668,57.936-16.188Zm30.53-.852-9.514,2.13a160.7,160.7,0,0,1,9.372,28.258l10.224-2.272A210.305,210.305,0,0,0,88.466-17.04ZM115.3-19.88l-7.952,4.97A237.21,237.21,0,0,1,125.67,14.342l8.52-5.964A237.2,237.2,0,0,0,115.3-19.88Z",transform:"translate(-7.384 116.298)",fill:"#fff"}})])]),n("h1",{ref:"title",staticClass:"title"},[t._v("Mu Blake")]),n("div",{ref:"actions",staticClass:"actions"},[n("div",{staticClass:"language"},[n("button",{ref:"lg",staticClass:"ll fr",class:{active:t.isFr},on:{click:t.setLangFR}},[n("span",[t._v("french")])]),n("button",{ref:"lg2",staticClass:"ll en",class:{active:t.isEn},on:{click:t.setLangEN}},[n("span",[t._v("english")])])]),n("button",{ref:"button",staticClass:"button enter",on:{click:t.enter}},[n("span",[t._v("enter")])])])])])},i=[],s=n("cebc"),o=(n("f4fb"),n("1209")),c=n("2f62"),r={data:function(){return{}},mounted:function(){this.lang="fr",localStorage.setItem("lang","fr")},computed:Object(s["a"])({},Object(c["b"])(["getLang"]),{isFr:function(){return"fr"===this.getLang},isEn:function(){return"en"===this.getLang}}),methods:Object(s["a"])({},Object(c["c"])(["setLang"]),{enterAnim:function(t){window.app.next(0),Object(o["a"])({targets:this.$refs.logo,opacity:.8,loop:!1,elasticity:400,easing:"easeOutQuad",duration:800}),Object(o["a"])({targets:this.$refs.actions,opacity:1,loop:!1,elasticity:400,easing:"easeOutQuad",duration:700}),Object(o["a"])({targets:this.$refs.title,opacity:1,loop:!1,elasticity:400,easing:"easeOutQuad",delay:300,duration:1200,complete:function(e){t()}})},enter:function(){this.$router.push("/page/2")},setLangFR:function(){this.setLang("fr"),localStorage.setItem("lang","fr")},setLangEN:function(){this.setLang("en"),localStorage.setItem("lang","en")},leaveAnim:function(t){window.app.next(1),Object(o["a"])({targets:this.$refs.logo,opacity:0,loop:!1,elasticity:400,easing:"easeOutQuad",duration:800}),Object(o["a"])({targets:this.$refs.actions,opacity:0,loop:!1,elasticity:400,easing:"easeOutQuad",duration:700}),Object(o["a"])({targets:this.$refs.title,opacity:0,loop:!1,elasticity:400,easing:"easeOutQuad",delay:300,duration:500,complete:function(e){setTimeout(function(){t()},1200)}})}})},u=r,l=(n("a48c"),n("2877")),f=Object(l["a"])(u,a,i,!1,null,"12bae682",null);e["default"]=f.exports},"268f":function(t,e,n){t.exports=n("fde4")},"32a6":function(t,e,n){var a=n("241e"),i=n("c3a1");n("ce7e")("keys",function(){return function(t){return i(a(t))}})},"8aae":function(t,e,n){n("32a6"),t.exports=n("584a").Object.keys},a48c:function(t,e,n){"use strict";var a=n("10a2"),i=n.n(a);i.a},a4bb:function(t,e,n){t.exports=n("8aae")},bf90:function(t,e,n){var a=n("36c3"),i=n("bf0b").f;n("ce7e")("getOwnPropertyDescriptor",function(){return function(t,e){return i(a(t),e)}})},cebc:function(t,e,n){"use strict";var a=n("268f"),i=n.n(a),s=n("e265"),o=n.n(s),c=n("a4bb"),r=n.n(c),u=n("85f2"),l=n.n(u);function f(t,e,n){return e in t?l()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},a=r()(n);"function"===typeof o.a&&(a=a.concat(o()(n).filter(function(t){return i()(n,t).enumerable}))),a.forEach(function(e){f(t,e,n[e])})}return t}n.d(e,"a",function(){return g})},e265:function(t,e,n){t.exports=n("ed33")},ed33:function(t,e,n){n("014b"),t.exports=n("584a").Object.getOwnPropertySymbols},fde4:function(t,e,n){n("bf90");var a=n("584a").Object;t.exports=function(t,e){return a.getOwnPropertyDescriptor(t,e)}}}]);
//# sourceMappingURL=chunk-cd9a8fc2.a7a87e5e.js.map