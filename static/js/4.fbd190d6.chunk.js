(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{275:function(e,t,r){"use strict";r.d(t,"b",(function(){return m})),r.d(t,"a",(function(){return j}));var n=r(283),o=r.n(n),i=r(284),a=r.n(i),c=r(36),u=r.n(c),s=r(37),l=r.n(s),f=r(7),d=r.n(f),h=r(277),p=r(279),v=r.n(p),m=new(function(){function e(){var t=this;u()(this,e),d()(this,"requests",[]),d()(this,"subscribers",[]),d()(this,"getUsers",(function(){return t._fetch("/users")})),d()(this,"addUser",function(){var e=a()(o.a.mark((function e(r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.addRequest("POST /users"),e.next=3,Object(h.a)(2e3);case 3:return t.addRequest("OK /users"),e.abrupt("return",{name:r,id:Object(h.c)()});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d()(this,"removeUser",function(){var e=a()(o.a.mark((function e(r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.addRequest("DELETE /users/".concat(r.id)),e.next=3,Object(h.a)(2e3);case 3:t.addRequest("OK /users/".concat(r.id));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d()(this,"clearRequests",(function(){t.requests=[],t.notifySubscribers()}))}var t,r;return l()(e,[{key:"_fetch",value:(r=a()(o.a.mark((function e(t){var r,n,i,c=this,u=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:{},n=r.delayMs,i=t.replace(this.baseUrl,""),this.addRequest("GET ".concat(i)),e.abrupt("return",this._mockFetch(t).then((function(e){if(!e.ok)throw new Error("Request to ".concat(t," failed with HTTP").concat(e.status));return e})).then((function(e){return e.json()})).then(function(){var e=a()(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.a)(n||2e3);case 2:return c.addRequest("OK ".concat(i)),e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"subscribe",value:function(e){this.subscribers.push(e),e(this.reqests)}},{key:"unSubscribe",value:function(e){this.subscribers=this.subscribers.filter((function(t){return t!==e}))}},{key:"addRequest",value:function(e){this.requests.push(e),this.notifySubscribers()}},{key:"notifySubscribers",value:function(){var e=this;this.subscribers.forEach((function(t){return t(e.requests)}))}},{key:"_mockFetch",value:(t=a()(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=v.a[t],e.abrupt("return",{ok:!!r,status:r?200:404,json:function(){return new Promise((function(e){return e(r)}))}});case 2:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}]),e}()),y=r(2),b=r.n(y),g=r(0),O=r.n(g),w=r(34),E=r(17);function j(){var e=Object(g.useReducer)((function(e){return e+1}),0),t=b()(e,2)[1];Object(g.useEffect)((function(){return m.subscribe(t),function(){m.unSubscribe(t),m.clearRequests()}}),[]);var r=m.requests.length,n=r>10?r-10:0;return O.a.createElement("section",null,O.a.createElement(w.d,{onClick:m.clearRequests,style:{cursor:"pointer"}},"API requests, click to reset"),O.a.createElement(E.a,null,r>10&&O.a.createElement(E.b,null,"..."),m.requests.slice(n).map((function(e,t){return O.a.createElement(E.b,{key:t},e)}))))}},277:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"c",(function(){return i})),r.d(t,"b",(function(){return a}));var n=function(e){return new Promise((function(t){return setTimeout(t,e)}))},o=10,i=function(){return o++},a=function(){}},279:function(e,t){e.exports={"/users":[{id:1,name:"John Doe"},{id:2,name:"Jane Doe"}]}},280:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(3),o=r(4),i=n.a.div.withConfig({displayName:"Containers__FlexContainer",componentId:"osdxjy-0"})(["display:flex;& > * + *{margin-left:5rem;border-left:1px dashed ",";padding-left:2rem;}"],o.c)},281:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(2),o=r.n(n),i=r(0),a=r.n(i),c=r(16);function u(e){var t=e.initiallyMounted,r=e.children,n=Object(i.useReducer)((function(e){return!e}),!!t),u=o()(n,2),s=u[0],l=u[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.b,{onClick:l},s?"Unmount":"Mount"),s&&r)}},282:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(6),o=r.n(n),i=r(2),a=r.n(i),c=r(8),u=r.n(c),s=r(0),l=r.n(s),f=r(3).a.input.withConfig({displayName:"Input__StyledInput",componentId:"tgycnj-0"})(["margin-right:1rem;&[disabled]{text-decoration:line-through;}"]);function d(e){var t=e.children,r=e.disabled,n=u()(e,["children","disabled"]),i=Object(s.useState)(""),c=a()(i,2),d=c[0],h=c[1];return Object(s.useEffect)((function(){!r&&h("")}),[r]),l.a.createElement("div",null,l.a.createElement(f,o()({type:"text",disabled:r,value:d,onChange:function(e){return h(e.target.value)}},n)),t(d))}},283:function(e,t,r){e.exports=r(285)},284:function(e,t){function r(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function c(e){r(a,o,i,c,u,"next",e)}function u(e){r(a,o,i,c,u,"throw",e)}c(void 0)}))}}},285:function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(e,t,r,n){var o=t&&t.prototype instanceof l?t:l,i=Object.create(o.prototype),a=new E(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return x()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=g(a,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,a),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var s={};function l(){}function f(){}function d(){}var h={};h[o]=function(){return this};var p=Object.getPrototypeOf,v=p&&p(p(j([])));v&&v!==t&&r.call(v,o)&&(h=v);var m=d.prototype=l.prototype=Object.create(h);function y(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function b(e,t){var n;this._invoke=function(o,i){function a(){return new t((function(n,a){!function n(o,i,a,c){var s=u(e[o],e,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(f).then((function(e){l.value=e,a(l)}),(function(e){return n("throw",e,a,c)}))}c(s.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function g(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,g(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function E(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function j(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:x}}function x(){return{value:void 0,done:!0}}return f.prototype=m.constructor=d,d.constructor=f,d[a]=f.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,a in e||(e[a]="GeneratorFunction")),e.prototype=Object.create(m),e},e.awrap=function(e){return{__await:e}},y(b.prototype),b.prototype[i]=function(){return this},e.AsyncIterator=b,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new b(c(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},y(m),m[a]="Generator",m[o]=function(){return this},m.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,E.prototype={constructor:E,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),w(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;w(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}(e.exports);try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}},326:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return X}));var n=r(0),o=r.n(n),i=r(7),a=r.n(i),c=r(275),u=r(2),s=r.n(u),l=r(39),f=r.n(l);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p={type:"ON_LOAD"},v={type:"ON_SUCCESS"},m={type:"ON_ERROR"},y={type:"ON_ADD_START"},b={type:"ON_ADD_SUCCESS"},g={type:"ON_ADD_ERROR"},O={type:"ON_REMOVE_START"},w={type:"ON_REMOVE_SUCCESS"},E={type:"ON_REMOVE_ERROR"},j={users:[],isLoading:!1,hasLoaded:!1,error:!1,isAdding:!1,errorAdding:!1,isRemoving:!1,errorRemoving:!1};function x(e,t){switch(t.type){case p.type:return h(h({},e),{},{isLoading:!0,hasLoaded:!0});case v.type:return h(h({},e),{},{isLoading:!1,users:t.users});case m.type:return h(h({},e),{},{isLoading:!1,error:!0});case y.type:return h(h({},e),{},{isAdding:!0,errorAdding:!1});case b.type:return h(h({},e),{},{isAdding:!1,users:[].concat(f()(e.users),[t.user])});case g.type:return h(h({},e),{},{isAdding:!1,errorAdding:!0});case O.type:return h(h({},e),{},{isRemoving:!0,errorRemoving:!1});case w.type:return h(h({},e),{},{users:e.users.filter((function(e){return e.id!==t.user.id})),isRemoving:!1});case E:return h(h({},e),{},{isRemoving:!1,errorRemoving:!0});default:return e}}var L=r(277);window.UserContextChangedBits="000";var R=Object(n.createContext)({},(function(e,t){var r=((e.users!==t.users||e.isLoading!==t.isLoading||e.hasLoaded!==t.hasLoaded||e.error!==t.error)&&1)|(e.isAdding!==t.isAdding&&2)|7&((e.isAdding!==t.isAdding||e.errorAdding!==t.errorAdding||e.isRemoving!==t.isRemoving||e.errorRemoving!==t.errorRemoving)&&4),n="000"+r.toString("2"),o=n.substr(n.length-3,3);return window.UserContextChangedBits=o,r})),P=Object(n.createContext)(L.b),_=function(e){var t=e.children,r=Object(n.useReducer)(x,j),i=s()(r,2),a=i[0],c=i[1];return o.a.createElement(R.Provider,{value:a},o.a.createElement(P.Provider,{value:c},t))},k=console.error;function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function U(){var e=Object(n.useContext)(P);return{add:function(t){e(y),c.b.addUser(t).then((function(t){return e(C(C({},b),{},{user:t}))})).catch((function(){return e(g)}))},remove:function(t){e(O),c.b.removeUser(t).then((function(){return e(C(C({},w),{},{user:t}))})).catch((function(){return e(E)}))}}}console.error=function(e){if(!/useContext\(\) second argument is reserved/.test(e)){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return k.apply(void 0,[e].concat(r))}};var A=r(17),N=r(33),D=o.a.memo((function(e){var t=e.name,r=e.id;Object(N.b)("UserItem: (".concat(t,")"));var n=U().remove;return o.a.createElement(A.b,{onRemove:function(){return n({id:r})}},t)})),q=r(35);function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function F(){Object(N.b)("UserList");var e=Object(n.useContext)(P),t=Object(n.useContext)(R,1),r=t.isLoading,i=t.hasLoaded,a=t.error,u=t.users,s=!r&&!i;return Object(n.useEffect)((function(){s&&(e(p),c.b.getUsers().then((function(t){return e(T(T({},v),{},{users:t}))})).catch((function(){return e(m)})))}),[s,e]),r||!i?o.a.createElement(q.b,null):a?o.a.createElement(q.a,null):o.a.createElement(A.a,null,u.map((function(e){return o.a.createElement(D,{key:e.id,id:e.id,name:e.name})})))}var G=r(16),M=r(282);function J(){Object(N.b)("UserInput");var e=Object(n.useContext)(R,2).isAdding,t=U().add;return o.a.createElement(M.a,{disabled:e},(function(r){return o.a.createElement(G.b,{disabled:e,onClick:function(){return t(r)}},"Add user")}))}function B(){Object(N.b)("UserIndicators");var e=Object(n.useContext)(R,4),t=e.isRemoving,r=e.errorRemoving,i=e.isAdding,a=e.errorAdding;return o.a.createElement(o.a.Fragment,null,t&&o.a.createElement(q.b,null,"Removing user..."),r&&o.a.createElement(q.a,null,"Failed to remove user"),i&&o.a.createElement(q.b,null,"Adding user..."),a&&o.a.createElement(q.a,null,"Failed to add user"))}function K(){return Object(N.b)("UserListWrapper"),o.a.createElement(_,null,o.a.createElement(F,null),o.a.createElement(J,null),o.a.createElement(B,null))}var V=r(34);function W(){return Object(N.a)(100),o.a.createElement(V.c,null,"Last changed bits: ",window.UserContextChangedBits)}var Y=r(38),H=r(21),z=r(281),Q=r(280);function X(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(V.b,null,"Context with Observed bits"),o.a.createElement(G.a,null,o.a.createElement(H.a,{text:"UserContext.js",fileName:"components/context-observed-bits/UserContext.js"}),o.a.createElement(H.a,{text:"UserInput.js",fileName:"components/context-observed-bits/UserInput.js"}),o.a.createElement(H.a,{text:"UserItem.js",fileName:"components/context-observed-bits/UserItem.js"}),o.a.createElement(H.a,{text:"UserIndicators.js",fileName:"components/context-observed-bits/UserIndicators.js"}),o.a.createElement(H.a,{text:"UserList.js",fileName:"components/context-observed-bits/UserList.js"}),o.a.createElement(H.a,{text:"UsersWrapper.js",fileName:"components/context-observed-bits/UsersWrapper.js"})),o.a.createElement(z.a,null,o.a.createElement(W,null),o.a.createElement(K,null)),o.a.createElement(Q.a,null,o.a.createElement(Y.b,null),o.a.createElement(c.a,null)))}}}]);