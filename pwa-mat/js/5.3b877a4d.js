(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"8xjP":function(t,e,n){},omNR:function(t,e,n){"use strict";var o=n("8xjP"),r=n.n(o);r.a},"xvc/":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fixed fixed-center bg-grey-1 text-white"},[n("img",{staticStyle:{"max-width":"300px","padding-top":"30px","padding-bottom":"50px"},attrs:{src:"/statics/quasar-logo.png"}})])}];o._withStripped=!0;var s=n("bDO0"),i={name:"PageLogin",beforeCreate:function(){console.log("url query",this.$route.query)},mounted:function(){var t=this;this.$route.query.hash&&this.$store.dispatch(s["b"],this.$route.query.hash).then(function(e){console.log("success front",e),t.$router.push("/")}).catch(function(t){console.log("err front",t)})}},c=i,u=(n("omNR"),n("KHd+")),a=Object(u["a"])(c,o,r,!1,null,null,null);e["default"]=a.exports}}]);