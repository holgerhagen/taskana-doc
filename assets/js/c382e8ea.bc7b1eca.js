"use strict";(self.webpackChunkfirst_example=self.webpackChunkfirst_example||[]).push([[299],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,k=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return a?r.createElement(k,o(o({ref:t},p),{},{components:a})):r.createElement(k,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},9918:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const i={sidebar_position:2},o="Security",s={unversionedId:"user-guide/configuration/security-configuration",id:"user-guide/configuration/security-configuration",title:"Security",description:"Users",source:"@site/docs/user-guide/configuration/security-configuration.md",sourceDirName:"user-guide/configuration",slug:"/user-guide/configuration/security-configuration",permalink:"/taskana-doc/docs/user-guide/configuration/security-configuration",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"userSidebar",previous:{title:"Database",permalink:"/taskana-doc/docs/user-guide/configuration/database-configuration"},next:{title:"LDAP",permalink:"/taskana-doc/docs/user-guide/configuration/ldap-configuration"}},l={},u=[{value:"Users",id:"users",level:2},{value:"Roles Mapping",id:"roles-mapping",level:3},{value:"REST Service Security",id:"rest-service-security",level:2}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"security"},"Security"),(0,n.kt)("h2",{id:"users"},"Users"),(0,n.kt)("p",null,"The configuration of the user-related parameters is in the file ",(0,n.kt)("inlineCode",{parentName:"p"},"taskana.properties"),". Some parameters allow multiple values specified as a list. In this case, individual values are separated by a configurable separator. Use the ",(0,n.kt)("em",{parentName:"p"},"propertiesSeparator"),' parameter to specify it. If none is provided, the default is "|". If you specify a propertiesSeparator, no list item in the properties file can contain any character from the propertiesSeparator.'),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Sample Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"EXTERNAL ","|"," manual ","|"," autoMAtic ","|"," Process"),(0,n.kt)("td",{parentName:"tr",align:null}),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"taskana.user.minimalPermissionsToAssignDomains"),(0,n.kt)("td",{parentName:"tr",align:null},"The  list of minimal Workbasket permissions of a user needed to belong to  the domain. Needed to determine the domains of a user, which are  aggregated in the getUser() method of the UserService. Values have to match the Enum values of WorkbasketPermission. If this property is not defined the dynamic computation of the domain attribute will not be executed."),(0,n.kt)("td",{parentName:"tr",align:null},"READ ","|"," OPEN")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"taskana.addAdditionalUserInfo"),(0,n.kt)("td",{parentName:"tr",align:null},"Add attributes of the user from the USER_INFO table, for example during a Task request or Task Query, the default value is false"),(0,n.kt)("td",{parentName:"tr",align:null},"true")))),(0,n.kt)("h3",{id:"roles-mapping"},"Roles Mapping"),(0,n.kt)("p",null,"TASKANA Roles and their meaning can be looked up ",(0,n.kt)("a",{parentName:"p",href:"../core-concepts/security-permissions#security-roles-in-taskana"},"here"),". For each role, a list of access ids that refer to users or groups can be specified using following keywords:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Role"),(0,n.kt)("th",{parentName:"tr",align:null},"Keyword"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"user"),(0,n.kt)("td",{parentName:"tr",align:null},"taskana.roles.user")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"business_admin"),(0,n.kt)("td",{parentName:"tr",align:null},"taskana.roles.business_admin")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"task_admin"),(0,n.kt)("td",{parentName:"tr",align:null},"taskana.roles.task_admin")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"admin"),(0,n.kt)("td",{parentName:"tr",align:null},"taskana.roles.admin")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"monitor"),(0,n.kt)("td",{parentName:"tr",align:null},"taskana.roles.monitor")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"task_router"),(0,n.kt)("td",{parentName:"tr",align:null},"taskana.roles.task_router")))),(0,n.kt)("p",null,'The access ids are separated by a configurable separator. If none is provided, the default is "|". The assignment of roles to users or groups can look like this:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"taskana.roles.user=cn=ksc-users,cn=groups,OU=Test,O=TASKANA | teamlead-1 | teamlead-2 | user-1-1 | user-1-2 | user-2-1 | user-2-2 | user-b-1 | user-b-2\ntaskana.roles.admin=admin | uid=admin,cn=users,OU=Test,O=TASKANA\ntaskana.roles.business_admin=businessadmin | cn=business-admins,cn=groups,OU=Test,O=TASKANA\ntaskana.roles.monitor=monitor | cn=monitor-users,cn=groups,OU=Test,O=TASKANA\ntaskana.roles.task_admin=taskadmin\n")),(0,n.kt)("h2",{id:"rest-service-security"},"REST Service Security"),(0,n.kt)("p",null,"As described in ",(0,n.kt)("a",{parentName:"p",href:"/taskana-doc/docs/user-guide/core-concepts/security-permissions"},"security"),", taskana-core uses JAAS Subjects for authentication. However, when using the REST service of TASKANA, you need to provide a mapping to the JAAS Subjects. TASKANA shows how to do that in the class BootWebSecurityConfigurer in the ",(0,n.kt)("inlineCode",{parentName:"p"},"taskana-rest-spring-example-boot")," module using LDAP. There, you can also lookup additional configuration of TASKANA on REST level. This way, TASKANA provides LDAP support for its REST Service. You can read more about LDAP Configuration ",(0,n.kt)("a",{parentName:"p",href:"/taskana-doc/docs/user-guide/configuration/ldap-configuration"},"here"),". "),(0,n.kt)("p",null,"Following additional security parameters can be configured in the ",(0,n.kt)("inlineCode",{parentName:"p"},"application.properties"),":"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Sample Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Optional"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"devMode"),(0,n.kt)("td",{parentName:"tr",align:null},"When using frontend with devMode set to true and enablCsrf to false, you will be automatically logged in as admin. The default value is false."),(0,n.kt)("td",{parentName:"tr",align:null},"false"),(0,n.kt)("td",{parentName:"tr",align:null},"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"enableCsrf"),(0,n.kt)("td",{parentName:"tr",align:null},"This property enables the support of CSRF tokens. This will not work together with devMode. You need to set it to false in order to use Basic Auth, for example in Postman.The default value is false."),(0,n.kt)("td",{parentName:"tr",align:null},"true"),(0,n.kt)("td",{parentName:"tr",align:null},"true")))))}d.isMDXComponent=!0}}]);