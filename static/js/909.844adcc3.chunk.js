(self.webpackChunkstate_mgmt_examples=self.webpackChunkstate_mgmt_examples||[]).push([[909],{2108:function(e,t,r){"use strict";r.d(t,{Tt:function(){return x},ZP:function(){return h},Rf:function(){return y}});var n=r(7757),s=r.n(n),u=r(8926),i=r.n(u),c=r(4575),o=r.n(c),a=r(3913),l=r.n(a),d=r(9713),f=r.n(d),p=r(6967),m=r(7808),b=r.n(m),v=function(){function e(){var t=this;o()(this,e),f()(this,"requests",[]),f()(this,"subscribers",[]),f()(this,"getUsers",(function(){return t._fetch("/users")})),f()(this,"addUser",function(){var e=i()(s().mark((function e(r){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.addRequest("POST /users"),e.next=3,(0,p.gw)(2e3);case 3:return t.addRequest("OK /users"),e.abrupt("return",{name:r,id:(0,p.EL)()});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f()(this,"removeUser",function(){var e=i()(s().mark((function e(r){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.addRequest("DELETE /users/".concat(r.id)),e.next=3,(0,p.gw)(2e3);case 3:t.addRequest("OK /users/".concat(r.id));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f()(this,"clearRequests",(function(){t.requests=[],t.notifySubscribers()}))}var t,r;return l()(e,[{key:"_fetch",value:(r=i()(s().mark((function e(t){var r,n,u,c=this,o=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:{},n=r.delayMs,u=t.replace(this.baseUrl,""),this.addRequest("GET ".concat(u)),e.abrupt("return",this._mockFetch(t).then((function(e){if(!e.ok)throw new Error("Request to ".concat(t," failed with HTTP").concat(e.status));return e})).then((function(e){return e.json()})).then(function(){var e=i()(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.gw)(n||2e3);case 2:return c.addRequest("OK ".concat(u)),e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"subscribe",value:function(e){this.subscribers.push(e),e(this.reqests)}},{key:"unSubscribe",value:function(e){this.subscribers=this.subscribers.filter((function(t){return t!==e}))}},{key:"addRequest",value:function(e){this.requests.push(e),this.notifySubscribers()}},{key:"notifySubscribers",value:function(){var e=this;this.subscribers.forEach((function(t){return t(e.requests)}))}},{key:"_mockFetch",value:(t=i()(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=b()[t],e.abrupt("return",{ok:!!r,status:r?200:404,json:function(){return new Promise((function(e){return e(r)}))}});case 2:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}]),e}(),g=new v,h=g,y=g.getUsers,O=r(3038),E=r.n(O),j=r(7294),w=r(5049),R=r(3520);function x(){var e=(0,j.useReducer)((function(e){return e+1}),0),t=E()(e,2)[1];(0,j.useEffect)((function(){return h.subscribe(t),function(){h.unSubscribe(t),h.clearRequests()}}),[]);var r=h.requests.length,n=r>10?r-10:0;return j.createElement("section",null,j.createElement(w.H3,{onClick:h.clearRequests,style:{cursor:"pointer"}},"API requests, click to reset"),j.createElement(R.a,null,r>10&&j.createElement(R.H,null,"..."),h.requests.slice(n).map((function(e,t){return j.createElement(R.H,{key:t},e)}))))}},7808:function(e){e.exports={"/users":[{id:1,name:"John Doe"},{id:2,name:"Jane Doe"}]}},1830:function(e,t,r){"use strict";r.d(t,{E:function(){return u}});var n=r(9163),s=r(9848),u=n.ZP.div.withConfig({displayName:"Containers__FlexContainer",componentId:"osdxjy-0"})(["display:flex;& > * + *{margin-left:5rem;border-left:1px dashed ",";padding-left:2rem;}"],s.A2)},3242:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(7154),s=r.n(n),u=r(3038),i=r.n(u),c=r(6479),o=r.n(c),a=r(7294),l=r(9163).ZP.input.withConfig({displayName:"Input__StyledInput",componentId:"tgycnj-0"})(["margin-right:1rem;&[disabled]{text-decoration:line-through;}"]);function d(e){var t=e.children,r=e.disabled,n=o()(e,["children","disabled"]),u=(0,a.useState)(""),c=i()(u,2),d=c[0],f=c[1];return(0,a.useEffect)((function(){!r&&f("")}),[r]),a.createElement("div",null,a.createElement(l,s()({type:"text",disabled:r,value:d,onChange:function(e){return f(e.target.value)}},n)),t(d))}},1162:function(e,t,r){"use strict";r.d(t,{Z:function(){return c}});var n=r(3038),s=r.n(n),u=r(7294),i=r(5109);function c(e){var t=e.initiallyMounted,r=e.children,n=(0,u.useReducer)((function(e){return!e}),!!t),c=s()(n,2),o=c[0],a=c[1];return u.createElement(u.Fragment,null,u.createElement(i.Z,{onClick:a},o?"Unmount":"Mount"),o&&r)}},6967:function(e,t,r){"use strict";r.d(t,{gw:function(){return n},EL:function(){return u},ZT:function(){return i}});var n=function(e){return new Promise((function(t){return setTimeout(t,e)}))},s=10,u=function(){return s++},i=function(){}},909:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return Q}});var n=r(7294),s=r(9713),u=r.n(s),i=r(2108),c=r(3038),o=r.n(c),a=r(319),l=r.n(a);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p={type:"ON_LOAD"},m={type:"ON_SUCCESS"},b={type:"ON_ERROR"},v={type:"ON_ADD_START"},g={type:"ON_ADD_SUCCESS"},h={type:"ON_ADD_ERROR"},y={type:"ON_REMOVE_START"},O={type:"ON_REMOVE_SUCCESS"},E={type:"ON_REMOVE_ERROR"},j={users:[],isLoading:!1,hasLoaded:!1,error:!1,isAdding:!1,errorAdding:!1,isRemoving:!1,errorRemoving:!1};function w(e,t){switch(t.type){case p.type:return f(f({},e),{},{isLoading:!0,hasLoaded:!0});case m.type:return f(f({},e),{},{isLoading:!1,users:t.users});case b.type:return f(f({},e),{},{isLoading:!1,error:!0});case v.type:return f(f({},e),{},{isAdding:!0,errorAdding:!1});case g.type:return f(f({},e),{},{isAdding:!1,users:[].concat(l()(e.users),[t.user])});case h.type:return f(f({},e),{},{isAdding:!1,errorAdding:!0});case y.type:return f(f({},e),{},{isRemoving:!0,errorRemoving:!1});case O.type:return f(f({},e),{},{users:e.users.filter((function(e){return e.id!==t.user.id})),isRemoving:!1});case E:return f(f({},e),{},{isRemoving:!1,errorRemoving:!0});default:return e}}var R=r(6967);window.UserContextChangedBits="000";var x=(0,n.createContext)({},(function(e,t){var r=((e.users!==t.users||e.isLoading!==t.isLoading||e.hasLoaded!==t.hasLoaded||e.error!==t.error)&&1)|(e.isAdding!==t.isAdding&&2)|7&((e.isAdding!==t.isAdding||e.errorAdding!==t.errorAdding||e.isRemoving!==t.isRemoving||e.errorRemoving!==t.errorRemoving)&&4),n="000"+r.toString("2"),s=n.substr(n.length-3,3);return window.UserContextChangedBits=s,r})),P=(0,n.createContext)(R.ZT),C=function(e){var t=e.children,r=(0,n.useReducer)(w,j),s=o()(r,2),u=s[0],i=s[1];return n.createElement(x.Provider,{value:u},n.createElement(P.Provider,{value:i},t))},U=console.error;function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function A(){var e=(0,n.useContext)(P);return{add:function(t){e(v),i.ZP.addUser(t).then((function(t){return e(_(_({},g),{},{user:t}))})).catch((function(){return e(h)}))},remove:function(t){e(y),i.ZP.removeUser(t).then((function(){return e(_(_({},O),{},{user:t}))})).catch((function(){return e(E)}))}}}console.error=function(e){if(!/useContext\(\) second argument is reserved/.test(e)){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return U.apply(void 0,[e].concat(r))}};var S=r(3520),D=r(3082),L=n.memo((function(e){var t=e.name,r=e.id;(0,D.tc)("UserItem: (".concat(t,")"));var s=A().remove;return n.createElement(S.H,{onRemove:function(){return s({id:r})}},t)})),q=r(2938);function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){u()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function I(){(0,D.tc)("UserList");var e=(0,n.useContext)(P),t=(0,n.useContext)(x,1),r=t.isLoading,s=t.hasLoaded,u=t.error,c=t.users,o=!r&&!s;return(0,n.useEffect)((function(){o&&(e(p),i.ZP.getUsers().then((function(t){return e(Z(Z({},m),{},{users:t}))})).catch((function(){return e(b)})))}),[o,e]),r||!s?n.createElement(q.a,null):u?n.createElement(q.j,null):n.createElement(S.a,null,c.map((function(e){return n.createElement(L,{key:e.id,id:e.id,name:e.name})})))}var T=r(5109),F=r(3242);function H(){(0,D.tc)("UserInput");var e=(0,n.useContext)(x,2).isAdding,t=A().add;return n.createElement(F.Z,{disabled:e},(function(r){return n.createElement(T.Z,{disabled:e,onClick:function(){return t(r)}},"Add user")}))}function M(){(0,D.tc)("UserIndicators");var e=(0,n.useContext)(x,4),t=e.isRemoving,r=e.errorRemoving,s=e.isAdding,u=e.errorAdding;return n.createElement(n.Fragment,null,t&&n.createElement(q.a,null,"Removing user..."),r&&n.createElement(q.j,null,"Failed to remove user"),s&&n.createElement(q.a,null,"Adding user..."),u&&n.createElement(q.j,null,"Failed to add user"))}function B(){return(0,D.tc)("UserListWrapper"),n.createElement(C,null,n.createElement(I,null),n.createElement(H,null),n.createElement(M,null))}var K=r(5049);function V(){return(0,D.oU)(100),n.createElement(K.H2,null,"Last changed bits: ",window.UserContextChangedBits)}var W=r(6406),J=r(5943),G=r(1162),z=r(1830);function Q(){return n.createElement(n.Fragment,null,n.createElement(K.H1,null,"Context with Observed bits"),n.createElement(T._,null,n.createElement(J.Ou,{text:"UserContext.js",fileName:"components/context-observed-bits/UserContext.js"}),n.createElement(J.Ou,{text:"UserInput.js",fileName:"components/context-observed-bits/UserInput.js"}),n.createElement(J.Ou,{text:"UserItem.js",fileName:"components/context-observed-bits/UserItem.js"}),n.createElement(J.Ou,{text:"UserIndicators.js",fileName:"components/context-observed-bits/UserIndicators.js"}),n.createElement(J.Ou,{text:"UserList.js",fileName:"components/context-observed-bits/UserList.js"}),n.createElement(J.Ou,{text:"UsersWrapper.js",fileName:"components/context-observed-bits/UsersWrapper.js"})),n.createElement(G.Z,null,n.createElement(V,null),n.createElement(B,null)),n.createElement(z.E,null,n.createElement(W.Z,null),n.createElement(i.Tt,null)))}}}]);