"use strict";(self.webpackChunkfirst_example=self.webpackChunkfirst_example||[]).push([[813],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>f});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=a.createContext({}),p=function(e){var r=a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},d=function(e){var r=p(e.components);return a.createElement(u.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},l=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=p(t),f=n,k=l["".concat(u,".").concat(f)]||l[f]||c[f]||o;return t?a.createElement(k,s(s({ref:r},d),{},{components:t})):a.createElement(k,s({ref:r},d))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=l;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},6644:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(7462),n=(t(7294),t(3905));const o={sidebar_position:2},s="List of provided SPIs",i={unversionedId:"user-guide/features/provided-SPI",id:"user-guide/features/provided-SPI",title:"List of provided SPIs",description:"Please read general SPI information in order to understand SPIs in TASKANA in general.",source:"@site/docs/user-guide/features/provided-SPI.md",sourceDirName:"user-guide/features",slug:"/user-guide/features/provided-SPI",permalink:"/taskana-doc/docs/user-guide/features/provided-SPI",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"userSidebar",previous:{title:"How to use Service Provider Interfaces (SPIs)",permalink:"/taskana-doc/docs/user-guide/features/SPI-usage"},next:{title:"HistoryService SPI",permalink:"/taskana-doc/docs/user-guide/features/history-SPI"}},u={},p=[],d={toc:p};function c(e){let{components:r,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"list-of-provided-spis"},"List of provided SPIs"),(0,n.kt)("p",null,"Please read ",(0,n.kt)("a",{parentName:"p",href:"/taskana-doc/docs/user-guide/features/SPI-usage"},"general SPI information")," in order to understand SPIs in TASKANA in general. "),(0,n.kt)("p",null,"Currently, TASKANA provides the following SPIs:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"pro.taskana.spi.history.api.TaskanaHistory")," : Look up the history of TASKANA. You can read more use cases for HistoryService ",(0,n.kt)("a",{parentName:"li",href:"/taskana-doc/docs/user-guide/features/history-SPI"},"here"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"pro.taskana.spi.priority.api.PriorityServiceProvider")," : Add rules for the calculation of Task priority."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"pro.taskana.spi.routing.api.TaskRoutingProvider")," : Add rules for automated Workbasket assignment for some of the new Tasks."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"pro.taskana.spi.task.api.AfterRequestChangesProvider")," : Add actions on Task that are executed after changes on reviewed Task have been requested (See more about Task Lifecycle ",(0,n.kt)("a",{target:"_blank",href:t(6136).Z},"here"),")."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"pro.taskana.spi.task.api.AfterRequestReviewProvider")," : Add actions on Task that are executed after a review on a claimed Task has been requested (See more about Task Lifecycle ",(0,n.kt)("a",{target:"_blank",href:t(6136).Z},"here"),")."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"pro.taskana.spi.task.api.BeforeRequestChangesProvider")," : Add actions on Task that are executed before changes on a reviewd Task have been requested (See more about Task Lifecycle ",(0,n.kt)("a",{target:"_blank",href:t(6136).Z},"here"),")."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"pro.taskana.spi.task.api.BeforeRequestReviewProvider")," : Add actions on Task that are executed before a review on a claimed Task has been requested (See more about Task Lifecycle ",(0,n.kt)("a",{target:"_blank",href:t(6136).Z},"here"),")."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"pro.taskana.spi.task.api.CreateTaskPreprocessor")," : Add actions on Task that are executed before a new is created."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"pro.taskana.spi.task.api.ReviewRequiredProvider")," : Add actions on Task that are executed after changes on reviewed Task have been requested (See more about Task Lifecycle ",(0,n.kt)("a",{target:"_blank",href:t(6136).Z},"here"),")."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"pro.taskana.spi.user.api.RefreshUserPostprocessor")," : Add actions on User that are executed each time after the User is refreshed.")))}c.isMDXComponent=!0},6136:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/files/lifecycle-91fc4d069c16351c03b5995ac0edd7d5.drawio"}}]);