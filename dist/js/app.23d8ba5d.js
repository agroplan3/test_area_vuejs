(function(t){function a(a){for(var i,r,o=a[0],l=a[1],u=a[2],d=0,p=[];d<o.length;d++)r=o[d],s[r]&&p.push(s[r][0]),s[r]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i]);c&&c(a);while(p.length)p.shift()();return n.push.apply(n,u||[]),e()}function e(){for(var t,a=0;a<n.length;a++){for(var e=n[a],i=!0,o=1;o<e.length;o++){var l=e[o];0!==s[l]&&(i=!1)}i&&(n.splice(a--,1),t=r(r.s=e[0]))}return t}var i={},s={app:0},n=[];function r(a){if(i[a])return i[a].exports;var e=i[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=i,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)r.d(e,i,function(a){return t[a]}.bind(null,i));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var u=0;u<o.length;u++)a(o[u]);var c=l;n.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"2be9":function(t,a,e){var i=e("e5e2");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=e("499e").default;s("2f3da507",i,!0,{})},"56d7":function(t,a,e){"use strict";e.r(a);var i=e("2b0e"),s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[t._m(0),t._v(" "),e("router-view")],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"uk-card uk-card-primary"},[e("div",{attrs:{id:"Header"}},[t._v("VJS APP")])])}],r=e("2455");function o(t){e("e7be")}var l=null,u=!1,c=o,d=null,p=null,v=Object(r["a"])(l,s,n,u,c,d,p),k=v.exports,m=e("6d68"),h=e("8c4f"),f={name:"app",methods:{customFunc:function(){alert("Yes, this is working!")}},data:function(){return{msg:"Test Vue Uikit App"}}},g=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"uk-container uk-container-center uk-text-center",attrs:{id:"home"}},[e("h1",{staticClass:"uk-animation-slide-top uk-text-danger"},[t._v(t._s(t.msg))]),t._v(" "),e("ul",{staticClass:"uk-subnav uk-flex-center"},[e("div",{staticClass:"uk-margin-small"},[e("div",{staticClass:"uk-button-group"},[e("router-link",{attrs:{to:{name:"login"}}},[e("button",{staticClass:"uk-button uk-button-primary uk-animation-slide-top",attrs:{id:"goToLogin_btn"}},[t._v("Login")])]),t._v(" "),e("router-link",{attrs:{to:{name:"signUp"}}},[e("button",{staticClass:"uk-button uk-button-primary uk-animation-slide-top uk-margin-small-left",attrs:{id:"goToSignUp_btn"}},[t._v("SignUp")])])],1)])]),t._v(" "),e("button",{staticClass:"uk-button uk-button-secondary uk-animation-slide-top",staticStyle:{padding:"0px"},on:{click:t.customFunc}},[t._v("Uikit Button")])])},_=[],b=!1,x=null,w=null,y=null,C=Object(r["a"])(f,g,_,b,x,w,y),S=C.exports,j={name:"login",data:function(){return{}},methods:{customFunc:function(){alert("Yes, this is working!")}}},E=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"login"},[e("div",{staticClass:"uk-container-expand uk-position-center",staticStyle:{width:"600px"}},[e("div",{staticClass:"uk-card-secondary uk-animation-slide-top",attrs:{id:"windowLogin"}},[e("h1",{staticClass:"uk-text-danger",staticStyle:{"background-color":"rgb(40,40,40)"}},[t._v("Login")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),e("button",{staticClass:"uk-button-primary",attrs:{type:"button"}},[t._v("LOGIN")]),t._v(" "),e("h2",{staticStyle:{"font-size":"15px",color:"white",margin:"20px"}},[t._v("Don't have account ? "),e("router-link",{staticStyle:{color:"yellow"},attrs:{to:"signUp"}},[t._v("Sign Up")])],1),t._v(" "),e("router-link",{attrs:{to:{name:"home"}}},[e("button",{staticClass:"uk-button-danger uk-margin-remove uk-padding-remove",attrs:{type:"button"}},[t._v("CLOSE")])])],1)])])},O=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"uk-inline",staticStyle:{width:"100%"}},[e("span",{staticClass:" uk-form-icon",attrs:{"uk-icon":"icon: user"}}),t._v(" "),e("input",{staticClass:"uk-input",staticStyle:{"text-align":"left"},attrs:{type:"text",placeholder:"Login"}}),e("br")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"uk-inline",staticStyle:{width:"100%"}},[e("span",{staticClass:"uk-form-icon",attrs:{"uk-icon":"icon: lock"}}),t._v(" "),e("input",{staticClass:"uk-input",staticStyle:{"text-align":"left"},attrs:{type:"password",placeholder:"Password"}}),e("br")])}];function U(t){e("2be9")}var L=!1,$=U,P="data-v-635d58bb",H=null,z=Object(r["a"])(j,E,O,L,$,P,H),B=z.exports,T={name:"signUp",data:function(){return{}},methods:{}},A=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"signUp"},[e("div",{staticClass:"uk-container-large uk-position-center",staticStyle:{width:"600px"}},[e("div",{staticClass:"uk-card-secondary uk-animation-slide-top",attrs:{id:"windowSignUp"}},[e("h1",{staticClass:"uk-text-primary",staticStyle:{"background-color":"rgb(40,40,40)"}},[t._v("Sign Up")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),e("button",{staticClass:"uk-button-primary"},[t._v("SIGN UP")]),t._v(" "),e("h2",{staticStyle:{"font-size":"15px",color:"white",margin:"20px"}},[t._v("Have account ? "),e("router-link",{staticStyle:{color:"yellow"},attrs:{to:"login"}},[t._v("Login")])],1),t._v(" "),e("router-link",{attrs:{to:{name:"home"}}},[e("button",{staticClass:"uk-button-danger uk-margin-remove uk-padding-remove",attrs:{type:"button"}},[t._v("CLOSE")])])],1)])])},M=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"uk-inline",staticStyle:{width:"100%"}},[e("span",{staticClass:"uk-form-icon",attrs:{"uk-icon":"icon: user"}}),t._v(" "),e("input",{staticClass:"uk-input",staticStyle:{"text-align":"left"},attrs:{type:"text",placeholder:"Login"}}),e("br")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"uk-inline",staticStyle:{width:"100%"}},[e("span",{staticClass:"uk-form-icon",attrs:{"uk-icon":"icon: mail"}}),t._v(" "),e("input",{staticClass:"uk-input",staticStyle:{"text-align":"left"},attrs:{type:"text",placeholder:"Email"}}),e("br")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"uk-inline",staticStyle:{width:"100%"}},[e("span",{staticClass:"uk-form-icon",attrs:{"uk-icon":"icon: lock"}}),t._v(" "),e("input",{staticClass:"uk-input",staticStyle:{"text-align":"left"},attrs:{type:"password",placeholder:"Password"}}),e("br")])}];function F(t){e("8218")}var G=!1,I=F,J="data-v-331ccd2a",V=null,N=Object(r["a"])(T,A,M,G,I,J,V),Y=N.exports,D={name:"slider",data:function(){return{}},methods:{}},X=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"slider"},[e("div",{staticClass:"uk-margin js-slideshow-animation uk-slideshow",attrs:{"uk-slideshow":"ratio: false"}},[e("div",{staticClass:"uk-position-relative uk-visible-toggle uk-light",attrs:{tabindex:"-1"}},[t._m(0),t._v(" "),e("a",{staticClass:"uk-slidenav-large uk-position-center-left uk-position-small uk-hidden-hover uk-slidenav-previous uk-icon uk-slidenav",attrs:{href:"#","uk-slidenav-previous":"","uk-slideshow-item":"previous"}},[e("svg",{attrs:{width:"25",height:"40",viewBox:"0 0 25 40",xmlns:"http://www.w3.org/2000/svg","data-svg":"slidenav-previous-large"}},[e("polyline",{attrs:{fill:"none",stroke:"#000","stroke-width":"2",points:"20.527,1.5 2,20.024 20.525,38.547 "}})])]),t._v(" "),e("a",{staticClass:"uk-slidenav-large uk-position-center-right uk-position-small uk-hidden-hover uk-slidenav-next uk-icon uk-slidenav",attrs:{href:"#","uk-slidenav-next":"","uk-slideshow-item":"next"}},[e("svg",{attrs:{width:"25",height:"40",viewBox:"0 0 25 40",xmlns:"http://www.w3.org/2000/svg","data-svg":"slidenav-next-large"}},[e("polyline",{attrs:{fill:"none",stroke:"#000","stroke-width":"2",points:"4.002,38.547 22.527,20.024 4,1.5 "}})])]),t._v(" "),t._m(1)])]),t._v(" "),t._m(2)])},q=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ul",{staticClass:"uk-slideshow-items",staticStyle:{"min-height":"calc(100vh)"},attrs:{"uk-height-viewport":"min-height: 300"}},[e("li",{staticClass:"uk-active uk-transition-active",staticStyle:{transform:"translateX(0px)"}},[e("img",{staticClass:"uk-cover",staticStyle:{height:"1380px",width:"2070px"},attrs:{src:"images/photo.jpg",alt:"","uk-cover":""}}),t._v(" "),e("div",{staticClass:"uk-position-center uk-position-medium uk-text-center"},[e("h1",{staticClass:"uk-heading-hero",staticStyle:{transform:"translate3d(0px, 0px, 0px)"},attrs:{"uk-slideshow-parallax":"x: 200,-200"}},[t._v("Heading")]),t._v(" "),e("p",{staticClass:"uk-h1",staticStyle:{transform:"translate3d(0px, 0px, 0px)"},attrs:{"uk-slideshow-parallax":"x: 400,-400"}},[t._v("Lorem ipsum dolor sit amet.")])])]),t._v(" "),e("li",[e("img",{staticClass:"uk-cover",attrs:{src:"images/dark.jpg",alt:"","uk-cover":""}}),t._v(" "),e("div",{staticClass:"uk-position-center uk-position-medium uk-text-center"},[e("h1",{staticClass:"uk-heading-hero",attrs:{"uk-slideshow-parallax":"x: 200,-200"}},[t._v("Heading")]),t._v(" "),e("p",{staticClass:"uk-h1",attrs:{"uk-slideshow-parallax":"x: 400,-400"}},[t._v("Lorem ipsum dolor sit amet.")])])]),t._v(" "),e("li",[e("img",{staticClass:"uk-cover",attrs:{src:"images/light.jpg",alt:"","uk-cover":""}}),t._v(" "),e("div",{staticClass:"uk-position-center uk-position-medium uk-text-center"},[e("h1",{staticClass:"uk-heading-hero",attrs:{"uk-slideshow-parallax":"y: -100,0,0; opacity: 1,1,0"}},[t._v("Heading")]),t._v(" "),e("p",{staticClass:"uk-h1",attrs:{"uk-slideshow-parallax":"y: 100,0,0; opacity: 1,1,0"}},[t._v("Lorem ipsum dolor sit amet.")])])]),t._v(" "),e("li",[e("img",{staticClass:"uk-cover",attrs:{src:"images/photo2.jpg",alt:"","uk-cover":""}}),t._v(" "),e("div",{staticClass:"uk-position-center uk-position-medium uk-text-center"},[e("h1",{staticClass:"uk-heading-hero",attrs:{"uk-slideshow-parallax":"x: 200,-200"}},[t._v("Heading")]),t._v(" "),e("p",{staticClass:"uk-h1",attrs:{"uk-slideshow-parallax":"x: 400,-400"}},[t._v("Lorem ipsum dolor sit amet.")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"uk-position-bottom-center uk-position-medium"},[e("ul",{staticClass:"uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"},[e("li",{staticClass:"uk-active",attrs:{"uk-slideshow-item":"0"}},[e("a",{attrs:{href:"#"}})]),t._v(" "),e("li",{attrs:{"uk-slideshow-item":"1"}},[e("a",{attrs:{href:"#"}})]),t._v(" "),e("li",{attrs:{"uk-slideshow-item":"2"}},[e("a",{attrs:{href:"#"}})]),t._v(" "),e("li",{attrs:{"uk-slideshow-item":"3"}},[e("a",{attrs:{href:"#"}})])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"uk-child-width-expand@s uk-text-center",attrs:{"uk-grid":""}},[e("button",{staticClass:"uk-button uk-button-secondary"},[t._v("Button")]),t._v(" "),e("button",{staticClass:"uk-button uk-button-secondary"},[t._v("Button")]),t._v(" "),e("button",{staticClass:"uk-button uk-button-secondary"},[t._v("Button")])])}];function K(t){e("af0b")}var Q=!1,R=K,W="data-v-f48b5c8a",Z=null,tt=Object(r["a"])(D,X,q,Q,R,W,Z),at=tt.exports;i["a"].use(h["a"]);var et=new h["a"]({routes:[{path:"/home",name:"home",component:S},{path:"/login",name:"login",component:B},{path:"/signUp",name:"signUp",component:Y},{path:"/slider",name:"slider",component:at}]});i["a"].use(m["a"]),new i["a"]({router:et,render:function(t){return t(k)}}).$mount("#app")},8218:function(t,a,e){var i=e("9941");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=e("499e").default;s("3c1ae012",i,!0,{})},"98b9":function(t,a,e){a=t.exports=e("2350")(),a.push([t.i,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center}#nav{padding:30px}#nav a{font-weight:700;color:#2c3e50}#nav a.router-link-exact-active{color:#42b983}#Header{color:#fff;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;font-weight:100}",""])},9941:function(t,a,e){a=t.exports=e("2350")(),a.push([t.i,".login[data-v-331ccd2a]{margin-top:40px}input[data-v-331ccd2a]{margin:10px 0;width:100%;padding-top:10px;padding-bottom:10px;text-align:center;font-size:25px;border:0}button[data-v-331ccd2a]{margin-top:20px;padding:10px;font-size:25px;width:100%;cursor:pointer}#windowSignUp[data-v-331ccd2a]{padding:1px;border:1px;border-style:solid;border-color:#fff}",""])},af0b:function(t,a,e){var i=e("b48c");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=e("499e").default;s("7f91ab1f",i,!0,{})},b48c:function(t,a,e){a=t.exports=e("2350")(),a.push([t.i,"",""])},e5e2:function(t,a,e){a=t.exports=e("2350")(),a.push([t.i,".login[data-v-635d58bb]{margin-top:40px}input[data-v-635d58bb]{margin:10px 0;width:100%;padding-top:10px;padding-bottom:10px;text-align:center;font-size:25px;border:0}button[data-v-635d58bb]{margin-top:20px;padding:10px;font-size:25px;width:100%;cursor:pointer}#windowLogin[data-v-635d58bb]{padding:1px;border:1px;border-style:solid;border-color:#fff}",""])},e7be:function(t,a,e){var i=e("98b9");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=e("499e").default;s("474b47a6",i,!0,{})}});
//# sourceMappingURL=app.23d8ba5d.js.map