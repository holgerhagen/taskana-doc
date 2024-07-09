"use strict";(self.webpackChunkfirst_example=self.webpackChunkfirst_example||[]).push([[729],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1983:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:4},o="Modules",l={unversionedId:"user-guide/reference/modules",id:"user-guide/reference/modules",title:"Modules",description:"Different functionality of TASKANA can be found in different modules. In the following article, the relevant modules for external usage are explained. The modules for internal use only are left out of the article.",source:"@site/docs/user-guide/reference/modules.md",sourceDirName:"user-guide/reference",slug:"/user-guide/reference/modules",permalink:"/taskana-doc/docs/user-guide/reference/modules",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"userSidebar",previous:{title:"Data Model",permalink:"/taskana-doc/docs/user-guide/reference/dataModel"},next:{title:"Adapter",permalink:"/taskana-doc/docs/category/adapter"}},s={},u=[{value:"lib",id:"lib",level:2},{value:"rest",id:"rest",level:2},{value:"history",id:"history",level:2},{value:"routing",id:"routing",level:2},{value:"web",id:"web",level:2}],p={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"modules"},"Modules"),(0,a.kt)("p",null,"Different functionality of TASKANA can be found in different modules. In the following article, the relevant modules for external usage are explained. The modules for internal use only are left out of the article. "),(0,a.kt)("h2",{id:"lib"},"lib"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"taskana-core")," provides the main functionality of TASKANA. You can read more about taskana-core ",(0,a.kt)("a",{parentName:"li",href:"../core-concepts/javaApiUsage"},"here")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"taskana-spring")," configures Spring so that TASKANA can be easily integrated"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"taskana-spring-example")," provides an example usage of taskana-spring"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"taskana-cdi")," uses dependency injection of java(CDI) for configuring TASKANA"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"taskana-cdi-example")," provides an example usage of taskana-cdi")),(0,a.kt)("h2",{id:"rest"},"rest"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"taskana-rest-spring")," embends TASKANA in a spring-boot application. It exposes the Java API by setting up a corresponding REST-API"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"taskana-rest-spring-example-boot")," provides an example application that uses taskana-rest-spring"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"taskana-rest-spring-example-wildfly")," provides an example application that can be deployed on a Wildfly server")),(0,a.kt)("h2",{id:"history"},"history"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"taskana-loghistory-provider")," implements the history SPI (Service Provider Interface). It uses slf4j to log every event"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"taskana-simplehistory-provider"),"  implements the history SPI (Service Provider Interface). It stores every history event in the TASKANA database"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"taskana-simplehistory-rest-spring")," implements a REST service to expose the functionality of taskana-simplehistory-provider ")),(0,a.kt)("h2",{id:"routing"},"routing"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"taskana-spi-routing-dmn-router")," allows Task routing according to automated rules"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"taskana-routing-rest")," implements a REST service to expose the functionality of taskana-spi-routing-dmn-router")),(0,a.kt)("h2",{id:"web"},"web"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"frontend of TASKANA")))}c.isMDXComponent=!0}}]);