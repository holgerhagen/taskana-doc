"use strict";(self.webpackChunkfirst_example=self.webpackChunkfirst_example||[]).push([[512],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),k=r,m=d["".concat(o,".").concat(k)]||d[k]||c[k]||l;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<l;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4922:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:4},s="Security and Permissions",i={unversionedId:"user-guide/core-concepts/security-permissions",id:"user-guide/core-concepts/security-permissions",title:"Security and Permissions",description:"Security Overview",source:"@site/docs/user-guide/core-concepts/security-permissions.md",sourceDirName:"user-guide/core-concepts",slug:"/user-guide/core-concepts/security-permissions",permalink:"/taskana-doc/docs/user-guide/core-concepts/security-permissions",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"userSidebar",previous:{title:"REST-API",permalink:"/taskana-doc/docs/user-guide/core-concepts/rest-api"},next:{title:"Configuration",permalink:"/taskana-doc/docs/category/configuration"}},o={},u=[{value:"Security Overview",id:"security-overview",level:2},{value:"Security Roles in TASKANA",id:"security-roles-in-taskana",level:2},{value:"Access to Workbaskets",id:"access-to-workbaskets",level:2},{value:"Example WorkbasketAccessList table",id:"example-workbasketaccesslist-table",level:3},{value:"Disable security using the <em>securityEnabled</em> parameter",id:"disable-security-using-the-securityenabled-parameter",level:2}],p={toc:u};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"security-and-permissions"},"Security and Permissions"),(0,r.kt)("h2",{id:"security-overview"},"Security Overview"),(0,r.kt)("p",null,"TASKANA Java library uses JAAS subjects for its authentication. Its security features can be used\nbased on the REST service. The authentication cannot be run without the REST service. Client side\nauthorization is required to view Tasks and Workbaskets or to make any changes. If the client side\nauthorization does not work, the unauthorized user will not be able to use TASKANA properly."),(0,r.kt)("p",null,"We provide an example (taskana-rest-spring-example) which is using LDAP. You can build a simple\nstep-by-step example with our ",(0,r.kt)("a",{parentName:"p",href:"/taskana-doc/docs/user-guide/getting-started/spring-boot-example%20copy"},"Getting Started")," as well."),(0,r.kt)("p",null,'TASKANA Java library needs its client to provide a mapping to the JAAS Subject used for users and\ngroups. The client should create a JAAS context for the Java library. The ids of users and groups,\ne.g. "user-1-1" or "admin", are then used for the internal logic in the Java library. Our REST\nService already provides LDAP support. '),(0,r.kt)("h2",{id:"security-roles-in-taskana"},"Security Roles in TASKANA"),(0,r.kt)("p",null,"Users can have one of the six different roles:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"USER"),"\nThe USER role grants access to TASKANA. USER is everybody who gets assigned to and completes\ntasks."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TASK_ADMIN"),"\nThe TASK_ADMIN role includes all permissions on tasks with the exception of deleting a task/tasks.\nIt can also READ all workbaskets in case to create/transfer tasks in/to them."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"BUSINESS_ADMINISTRATOR"),"\nThe BUSINESS_ADMINISTRATOR role allows to change the business configuration (workbaskets,\nclassifications, ...)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"ADMINISTRATOR"),"\nThe ADMINISTRATOR role includes all permissions on the system."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MONITOR"),"\nThe MONITOR role grants access to all monitoring operations and to the monitoring UI."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"TASK_ROUTER"),"\nThe TASK_ROUTER role implies access to creating Tasks in all Workbaskets without having READ\npermissions for them. This role is used for automated scripts, not for persons.")),(0,r.kt)("p",null,"You can assign roles to users or groups in the ",(0,r.kt)("inlineCode",{parentName:"p"},"taskana.properties")," file. Read more about LDAP\nconfiguration ",(0,r.kt)("a",{parentName:"p",href:"/taskana-doc/docs/user-guide/configuration/ldap-configuration"},"here")),(0,r.kt)("h2",{id:"access-to-workbaskets"},"Access to Workbaskets"),(0,r.kt)("p",null,"TASKANA Java library uses WorkbasketAccessItems for authorization. WorkbasketAccessItems are stored\nin the WorkbasketAccessList database table. Each WorkbasketAccessItems contains values for each of\nthe following permissions: ",(0,r.kt)("em",{parentName:"p"},"READ, OPEN, APPEND, TRANSFER, DISTRIBUTE and CUSTOM_1 through\nCUSTOM_12"),'. A WorkbasketAccessItem belongs to a specific Workbasket-User or Workbasket-Group pair.\nThe user or group are specified by their accessId (for example "user-1-1"). The different\npermissions have the following meaning:'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Permission"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"READ"),(0,r.kt)("td",{parentName:"tr",align:null},"Read or query Workbasket metadata.   If a user does ",(0,r.kt)("strong",{parentName:"td"},"not")," have the READ permission, he does not even know about the existence of the Workbasket.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"READTASKS"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows user to read or query metadata of Tasks without ",(0,r.kt)("strong",{parentName:"td"},"explicitly")," specifying Workbasket in the query. For this, the READ permission is also required. If a user does not have the READTASKS permission, he cannot specify this Workbasket when getting Tasks.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"OPEN"),(0,r.kt)("td",{parentName:"tr",align:null},"The user is allowed to ",(0,r.kt)("strong",{parentName:"td"},"explicitly")," query the Tasks of specific Workbaskets. To do this, READ and READTASKS permissions are also required. If a user does not have the OPEN permission, he cannot query/filter Tasks by Workbaskets.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"EDITTASKS"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows the user to update, claim or complete tasks. For editing, READ and READTASKS permissions are also required.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"APPEND"),(0,r.kt)("td",{parentName:"tr",align:null},"The user is allowed to append a Task to the Workbasket. This applies to creation of Tasks in this Workbasket as well as for transferring Tasks to this Workbasket.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TRANSFER"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows the user to transfer Tasks from this Workbasket to another one.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"DISTRIBUTE"),(0,r.kt)("td",{parentName:"tr",align:null},"The  user is allowed to distribute Tasks from this Workbasket to the  configured distribution targets. For distribution the APPEND and  TRANSFER permissions are checked also.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CUSTOM_1 .. CUSTOM_12"),(0,r.kt)("td",{parentName:"tr",align:null},"Permissions to be used in custom code to configure application specific scenarios which are not directly checked by TASKANA.")))),(0,r.kt)("h3",{id:"example-workbasketaccesslist-table"},"Example WorkbasketAccessList table"),(0,r.kt)("p",null,"Example WorkbasketAccessItems:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"ID"),(0,r.kt)("th",{parentName:"tr",align:null},"WB_ID"),(0,r.kt)("th",{parentName:"tr",align:null},",ACCESS_ID"),(0,r.kt)("th",{parentName:"tr",align:null},"ACCESS_NAME"),(0,r.kt)("th",{parentName:"tr",align:null},"READ,"),(0,r.kt)("th",{parentName:"tr",align:null},"READTSKS"),(0,r.kt)("th",{parentName:"tr",align:null},"OPN,"),(0,r.kt)("th",{parentName:"tr",align:null},"EDITTSKS"),(0,r.kt)("th",{parentName:"tr",align:null},"APPD,"),(0,r.kt)("th",{parentName:"tr",align:null},"TRSFR,"),(0,r.kt)("th",{parentName:"tr",align:null},"DISTR,"),(0,r.kt)("th",{parentName:"tr",align:null},"C1,"),(0,r.kt)("th",{parentName:"tr",align:null},"..,"),(0,r.kt)("th",{parentName:"tr",align:null},"C12)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WA01"),(0,r.kt)("td",{parentName:"tr",align:null},"WB01"),(0,r.kt)("td",{parentName:"tr",align:null},"teamlead_1"),(0,r.kt)("td",{parentName:"tr",align:null},"Dominik"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"true,...false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WA02"),(0,r.kt)("td",{parentName:"tr",align:null},"WB01"),(0,r.kt)("td",{parentName:"tr",align:null},"teamlead_2"),(0,r.kt)("td",{parentName:"tr",align:null},"Holger"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"true,...true;"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WA03"),(0,r.kt)("td",{parentName:"tr",align:null},"WB01"),(0,r.kt)("td",{parentName:"tr",align:null},"group_1"),(0,r.kt)("td",{parentName:"tr",align:null},"Schaden"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"true,...true;"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"disable-security-using-the-securityenabled-parameter"},"Disable security using the ",(0,r.kt)("em",{parentName:"h2"},"securityEnabled")," parameter"),(0,r.kt)("p",null,"The securityEnabled-flag can disable authentification for the complete TASKANA functionality if set\nto false. The default value of the flag is true. You can change the value by specifying the\n",(0,r.kt)("em",{parentName:"p"},"securityEnabled")," parameter of the constructor of TaskanaEngineConfiguration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"TaskanaEngineConfiguration(DataSource dataSource, boolean useManagedTransactions,\n        boolean securityEnabled, String propertiesFileName, String propertiesSeparator)\n")),(0,r.kt)("p",null,"In the spring boot example, you can add following bean in order to disable security:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'@Bean\npublic TaskanaEngineConfiguration taskanaEngineConfiguration(DataSource dataSource) {\n    return new SpringTaskanaEngineConfiguration(dataSource, true, false, "TASKANA");\n}\n')),(0,r.kt)("p",null,"The CONFIGURATION table has a ENFORCE_SECURITY field. If this field is already set, then\n",(0,r.kt)("em",{parentName:"p"},"securityEnabled")," should be set to the same value. If the ENFORCE_SECURITY flag in the database has\nno value, then the first TaskanaEngine connecting to the database sets its ",(0,r.kt)("em",{parentName:"p"},"securityEnabled")," as the\nvalue of ENFORCE_SECURITY."))}c.isMDXComponent=!0}}]);