"use strict";(self.webpackChunkmatdomabaem_blog=self.webpackChunkmatdomabaem_blog||[]).push([[4670],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=i(r),f=o,g=m["".concat(p,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},49514:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return s}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),l=["components"],c={title:"PostgreSQL \uc784\uc2dc \ud568\uc218 \uc120\uc5b8",tags:["sql","postgre-sql"]},p=void 0,i={permalink:"/blog/2021/12/11/PostgreSQL-\uc784\uc2dc-\ud568\uc218-\uc120\uc5b8",source:"@site/blog\\2021-12-11-PostgreSQL-\uc784\uc2dc-\ud568\uc218-\uc120\uc5b8\\index.md",title:"PostgreSQL \uc784\uc2dc \ud568\uc218 \uc120\uc5b8",description:"PostgreSQL\uc5d0\uc11c \uc784\uc2dc \ud568\uc218\ub294 \uc784\uc2dc \uc2a4\ud0a4\ub9c8(pg_temp)\uc5d0 \ud568\uc218\ub97c \uc120\uc5b8\ud558\ub294 \uac83\uc73c\ub85c \ub9cc\ub4e4 \uc218 \uc788\ub2e4.",date:"2021-12-11T00:00:00.000Z",formattedDate:"December 11, 2021",tags:[{label:"sql",permalink:"/blog/tags/sql"},{label:"postgre-sql",permalink:"/blog/tags/postgre-sql"}],readingTime:.61,truncated:!1,authors:[],frontMatter:{title:"PostgreSQL \uc784\uc2dc \ud568\uc218 \uc120\uc5b8",tags:["sql","postgre-sql"]},prevItem:{title:"\ucef4\ud30c\uc77c\ub7ec\uc758 \uacbd\uace0 \uc5b5\uc81c\uc5d0 \uad00\ud558\uc5ec",permalink:"/blog/2021/12/26/\ucef4\ud30c\uc77c\ub7ec\uc758-\uacbd\uace0-\uc5b5\uc81c\uc5d0-\uad00\ud558\uc5ec"},nextItem:{title:"Apache POI \ub798\ud551 \ub300\uc791\uc804",permalink:"/blog/2021/12/06/Apache-POI-\ub798\ud551-\ub300\uc791\uc804"}},u={authorsImageUrls:[]},s=[],m={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"PostgreSQL\uc5d0\uc11c \uc784\uc2dc \ud568\uc218\ub294 \uc784\uc2dc \uc2a4\ud0a4\ub9c8(",(0,a.kt)("em",{parentName:"p"},"pg_temp"),")\uc5d0 \ud568\uc218\ub97c \uc120\uc5b8\ud558\ub294 \uac83\uc73c\ub85c \ub9cc\ub4e4 \uc218 \uc788\ub2e4."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE OR REPLACE FUNCTION pg_temp.calculate_age_from_birth_date(timestamp)\n  RETURNS numeric AS 'SELECT substring(extract(year from age(CURRENT_DATE, $1)) || '''', 1, 2)::numeric' LANGUAGE SQL IMMUTABLE;\n")),(0,a.kt)("p",null,"\ub9cc\uc57d \ubd80\uc218 \ud6a8\uacfc\uac00 \uc5c6\ub294 \uc21c\uc218 \ud568\uc218\ub77c\uba74 ",(0,a.kt)("inlineCode",{parentName:"p"},"IMMUTABLE")," \uc635\uc158\uc744 \uc8fc\ub294 \uac83\uc744 \uc78a\uc9c0 \ub9d0\uc790.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"IMMUTABLE")," \uc635\uc158\uc740 \ud55c \uc785\ub825 \uac12\uc5d0 \ub300\ud574 \ud56d\uc0c1 \uac19\uc740 \uac12\uc744 \ubc18\ud658\ud558\ub294 \ud568\uc218\uc784\uc744 \ucd5c\uc801\ud654\uae30\uc5d0\uac8c \uc54c\ub824\uc8fc\ub294 \uc5ed\ud560\uc744 \ud55c\ub2e4."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://postgresql.kr/docs/13/sql-createfunction.html"},"PostgreSQL.kr: CREATE FUNCTION"))))}f.isMDXComponent=!0}}]);