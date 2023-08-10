"use strict";(self.webpackChunkfirst_example=self.webpackChunkfirst_example||[]).push([[395],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),u=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(r),d=n,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6913:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:3},i="HistoryService SPI",s={unversionedId:"user-guide/features/history-SPI",id:"user-guide/features/history-SPI",title:"HistoryService SPI",description:"In order to follow this article, please read general SPI information before proceeding.",source:"@site/docs/user-guide/features/history-SPI.md",sourceDirName:"user-guide/features",slug:"/user-guide/features/history-SPI",permalink:"/taskana-doc/docs/user-guide/features/history-SPI",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"userSidebar",previous:{title:"List of provided SPIs",permalink:"/taskana-doc/docs/user-guide/features/provided-SPI"},next:{title:"TASKANA Jobs",permalink:"/taskana-doc/docs/user-guide/features/jobs"}},l={},u=[{value:"Use Cases for the History Service",id:"use-cases-for-the-history-service",level:2}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"historyservice-spi"},"HistoryService SPI"),(0,n.kt)("p",null,"In order to follow this article, please read ",(0,n.kt)("a",{parentName:"p",href:"/taskana-doc/docs/user-guide/features/SPI-usage"},"general SPI information")," before proceeding."),(0,n.kt)("p",null,"The HistoryService can be used for different purposes. In general, it tracks actions performed by TASKANA makes this information available for further usage. Below, you can see example business use cases for the History Service."),(0,n.kt)("h2",{id:"use-cases-for-the-history-service"},"Use Cases for the History Service"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"History of one business process: (relevant for specialists working on a Task of that process)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Who worked on it before?"),(0,n.kt)("li",{parentName:"ul"},"Who transferred it to me?"),(0,n.kt)("li",{parentName:"ul"},"What happened in the process before it got assigned to the user?"))),(0,n.kt)("li",{parentName:"ul"},"Auditing:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Is everything completed?"),(0,n.kt)("li",{parentName:"ul"},"What happend to a specific document / process?"),(0,n.kt)("li",{parentName:"ul"},"Who aprroved what?"),(0,n.kt)("li",{parentName:"ul"},"Who changed something?"))),(0,n.kt)("li",{parentName:"ul"},"Reporting: (SLA/KPI)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"How long did a process/Task take in average?"),(0,n.kt)("li",{parentName:"ul"},"How long did it take until a new message from a customer is assigned to a specialist?"),(0,n.kt)("li",{parentName:"ul"},"How often was is required to change the classification of the Task/document?"))),(0,n.kt)("li",{parentName:"ul"},"Reporting:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"How many tasks of what classification did we receive this day/week/month?"),(0,n.kt)("li",{parentName:"ul"},"How many tasks have been completed by team/location/etc.?")))),(0,n.kt)("p",null,"Additionaly to the SPI, TASKANA already provides an implementation for the HistoryService at pro.taskana.simplehistory.impl.SimpleHistoryServiceImpl"))}p.isMDXComponent=!0}}]);