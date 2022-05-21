"use strict";(self.webpackChunkmatdomabaem_blog=self.webpackChunkmatdomabaem_blog||[]).push([[1571],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(n),m=a,d=f["".concat(l,".").concat(m)]||f[m]||s[m]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},48371:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],c={title:"Step Builder Pattern \uc608\uc81c",tags:["java","design-pattern"]},l=void 0,u={permalink:"/blog/2021/10/31/Step-Builder-Pattern-\uc608\uc81c",source:"@site/blog\\2021-10-31-Step-Builder-Pattern-\uc608\uc81c\\index.md",title:"Step Builder Pattern \uc608\uc81c",description:"JDK 9\uc758 resource references\ubb38\uc744 \ud749\ub0b4\ub0b4\uace0 \uc2f6\uc5b4 \ub2e4\uc74c\uacfc \uac19\uc740 \ud074\ub798\uc2a4\ub97c \uc124\uacc4\ud558\uace0 \uc2f6\ub2e4\uace0 \uac00\uc815\ud574\ubcf4\uc790.",date:"2021-10-31T00:00:00.000Z",formattedDate:"October 31, 2021",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"design-pattern",permalink:"/blog/tags/design-pattern"}],readingTime:3.305,truncated:!0,authors:[],frontMatter:{title:"Step Builder Pattern \uc608\uc81c",tags:["java","design-pattern"]},prevItem:{title:"springdoc-openapi (swagger-ui) \uc801\uc6a9\ud558\uae30",permalink:"/blog/2021/11/06/springdoc-openapi-\uc801\uc6a9\ud558\uae30"},nextItem:{title:"\uc54c\uc544\ub450\uba74 \uc720\uc6a9\ud55c Window Function",permalink:"/blog/2021/10/29/\uc54c\uc544\ub450\uba74-\uc720\uc6a9\ud55c-Window-Function"}},p={authorsImageUrls:[]},s=[],f={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"JDK 9\uc758 ",(0,o.kt)("a",{parentName:"p",href:"https://www.baeldung.com/java-try-with-resources#java-9---effectively-finalvariables"},"resource references"),"\ubb38\uc744 \ud749\ub0b4\ub0b4\uace0 \uc2f6\uc5b4 \ub2e4\uc74c\uacfc \uac19\uc740 \ud074\ub798\uc2a4\ub97c \uc124\uacc4\ud558\uace0 \uc2f6\ub2e4\uace0 \uac00\uc815\ud574\ubcf4\uc790."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"Closeable resource = ...\nTry.with(resource)\n    .onRun(() -> {\n      ...\n    })\n    .onException(SomeException.class, () -> {\n      ...\n    })\n    .onException(AnotherException.class, () -> {\n      ...\n    })\n    .onFinish(() -> {\n      ...\n    })\n    .run();\n")))}m.isMDXComponent=!0}}]);