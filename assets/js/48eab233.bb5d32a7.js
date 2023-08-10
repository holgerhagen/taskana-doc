"use strict";(self.webpackChunkfirst_example=self.webpackChunkfirst_example||[]).push([[474],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u=r.createContext({}),l=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(a),f=n,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||o;return a?r.createElement(m,i(i({ref:t},c),{},{components:a})):r.createElement(m,i({ref:t},c))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8794:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:4},i="Monitoring",s={unversionedId:"user-guide/features/monitoring",id:"user-guide/features/monitoring",title:"Monitoring",description:"Monitoring is a real time obervation of the current state of work. It allows to view and evaluate the status of the team, thus relevant for teamlead to monitor whether all tasks are completed on time. Monitoring also provides the possibility to see what work is due in the next few days so that it can be taken into account when staffing.",source:"@site/docs/user-guide/features/monitoring.md",sourceDirName:"user-guide/features",slug:"/user-guide/features/monitoring",permalink:"/taskana-doc/docs/user-guide/features/monitoring",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"userSidebar",previous:{title:"TASKANA Jobs",permalink:"/taskana-doc/docs/user-guide/features/jobs"},next:{title:"Users",permalink:"/taskana-doc/docs/user-guide/features/users-and-groups"}},u={},l=[],c={toc:l};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"monitoring"},"Monitoring"),(0,n.kt)("p",null,"Monitoring is a real time obervation of the current state of work. It allows to view and evaluate the status of the team, thus relevant for teamlead to monitor whether all tasks are completed on time. Monitoring also provides the possibility to see what work is due in the next few days so that it can be taken into account when staffing."),(0,n.kt)("p",null,"The data shown by the monitoring includes Tasks and their attributes, like Workbaskets, status, age etc. Tasks fullfilling certain criterias are counted in order to create a statistic representing all current Tasks and their attributes. An example of this can be seen below."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Tasks by Workbasket and due date: Table",src:a(3666).Z,width:"1907",height:"550"})),(0,n.kt)("p",null,"This screenshot shows one of the representations that can be created by the Monitor. It's a table that sums up the number of Tasks by the day of due date and their Workbasket. This table is visualized in the diagram provided by TASKANA UI."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Tasks by Workbasket and due date: Diagram",src:a(8632).Z,width:"1426",height:"907"})),(0,n.kt)("p",null,"There are other options for filtering and aggregating Tasks in the TASKANA Monitor. You can see them in detail by swithing tabs in the ",(0,n.kt)("a",{parentName:"p",href:"https://taskana.mybluemix.net/taskana/#/taskana/monitor/tasks-priority"},"monitoring UI"),' as part of our demo application. The username and password for the demo application are "admin" and "admin".'),(0,n.kt)("p",null,"Some of the data is additionaly visualized. For example, you can see Tasks divided by their status in a pie chart in TASKANA UI:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Tasks by Status: Diagram",src:a(3486).Z,width:"1393",height:"845"})))}d.isMDXComponent=!0},3666:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/MonitoringByWorkbasketAndDueDate-8bcf3aa3df82d0dffd5489771421c30a.png"},8632:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/MonitoringByWorkbasketAndDueDateVisual-773d92849b85aff88badfa3743a417f7.png"},3486:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/MonitoringTasksByStatus-2357dec5ae9ab5792a7048457a1a8fe2.png"}}]);