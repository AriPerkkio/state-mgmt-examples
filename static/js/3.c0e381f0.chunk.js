(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{275:function(e,t,r){"use strict";r.d(t,"b",(function(){return v})),r.d(t,"a",(function(){return j}));var n=r(283),o=r.n(n),i=r(284),a=r.n(i),c=r(36),u=r.n(c),s=r(37),l=r.n(s),f=r(7),p=r.n(f),d=r(277),h=r(279),m=r.n(h),v=new(function(){function e(){var t=this;u()(this,e),p()(this,"requests",[]),p()(this,"subscribers",[]),p()(this,"getUsers",(function(){return t._fetch("/users")})),p()(this,"addUser",function(){var e=a()(o.a.mark((function e(r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.addRequest("POST /users"),e.next=3,Object(d.a)(2e3);case 3:return t.addRequest("OK /users"),e.abrupt("return",{name:r,id:Object(d.c)()});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p()(this,"removeUser",function(){var e=a()(o.a.mark((function e(r){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.addRequest("DELETE /users/".concat(r.id)),e.next=3,Object(d.a)(2e3);case 3:t.addRequest("OK /users/".concat(r.id));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),p()(this,"clearRequests",(function(){t.requests=[],t.notifySubscribers()}))}var t,r;return l()(e,[{key:"_fetch",value:(r=a()(o.a.mark((function e(t){var r,n,i,c=this,u=arguments;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=u.length>1&&void 0!==u[1]?u[1]:{},n=r.delayMs,i=t.replace(this.baseUrl,""),this.addRequest("GET ".concat(i)),e.abrupt("return",this._mockFetch(t).then((function(e){if(!e.ok)throw new Error("Request to ".concat(t," failed with HTTP").concat(e.status));return e})).then((function(e){return e.json()})).then(function(){var e=a()(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(d.a)(n||2e3);case 2:return c.addRequest("OK ".concat(i)),e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:case"end":return e.stop()}}),e,this)}))),function(e){return r.apply(this,arguments)})},{key:"subscribe",value:function(e){this.subscribers.push(e),e(this.reqests)}},{key:"unSubscribe",value:function(e){this.subscribers=this.subscribers.filter((function(t){return t!==e}))}},{key:"addRequest",value:function(e){this.requests.push(e),this.notifySubscribers()}},{key:"notifySubscribers",value:function(){var e=this;this.subscribers.forEach((function(t){return t(e.requests)}))}},{key:"_mockFetch",value:(t=a()(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=m.a[t],e.abrupt("return",{ok:!!r,status:r?200:404,json:function(){return new Promise((function(e){return e(r)}))}});case 2:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}]),e}()),y=r(2),b=r.n(y),g=r(0),O=r.n(g),E=r(34),w=r(17);function j(){var e=Object(g.useReducer)((function(e){return e+1}),0),t=b()(e,2)[1];Object(g.useEffect)((function(){return v.subscribe(t),function(){v.unSubscribe(t),v.clearRequests()}}),[]);var r=v.requests.length,n=r>10?r-10:0;return O.a.createElement("section",null,O.a.createElement(E.d,{onClick:v.clearRequests,style:{cursor:"pointer"}},"API requests, click to reset"),O.a.createElement(w.a,null,r>10&&O.a.createElement(w.b,null,"..."),v.requests.slice(n).map((function(e,t){return O.a.createElement(w.b,{key:t},e)}))))}},277:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"c",(function(){return i})),r.d(t,"b",(function(){return a}));var n=function(e){return new Promise((function(t){return setTimeout(t,e)}))},o=10,i=function(){return o++},a=function(){}},279:function(e,t){e.exports={"/users":[{id:1,name:"John Doe"},{id:2,name:"Jane Doe"}]}},280:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r(3),o=r(4),i=n.a.div.withConfig({displayName:"Containers__FlexContainer",componentId:"osdxjy-0"})(["display:flex;& > * + *{margin-left:5rem;border-left:1px dashed ",";padding-left:2rem;}"],o.c)},281:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(2),o=r.n(n),i=r(0),a=r.n(i),c=r(16);function u(e){var t=e.initiallyMounted,r=e.children,n=Object(i.useReducer)((function(e){return!e}),!!t),u=o()(n,2),s=u[0],l=u[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.b,{onClick:l},s?"Unmount":"Mount"),s&&r)}},282:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r(6),o=r.n(n),i=r(2),a=r.n(i),c=r(8),u=r.n(c),s=r(0),l=r.n(s),f=r(3).a.input.withConfig({displayName:"Input__StyledInput",componentId:"tgycnj-0"})(["margin-right:1rem;&[disabled]{text-decoration:line-through;}"]);function p(e){var t=e.children,r=e.disabled,n=u()(e,["children","disabled"]),i=Object(s.useState)(""),c=a()(i,2),p=c[0],d=c[1];return Object(s.useEffect)((function(){!r&&d("")}),[r]),l.a.createElement("div",null,l.a.createElement(f,o()({type:"text",disabled:r,value:p,onChange:function(e){return d(e.target.value)}},n)),t(p))}},283:function(e,t,r){e.exports=r(285)},284:function(e,t){function r(e,t,r,n,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise((function(o,i){var a=e.apply(t,n);function c(e){r(a,o,i,c,u,"next",e)}function u(e){r(a,o,i,c,u,"throw",e)}c(void 0)}))}}},285:function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(e,t,r,n){var o=t&&t.prototype instanceof l?t:l,i=Object.create(o.prototype),a=new w(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return x()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=g(a,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var l=u(e,t,r);if("normal"===l.type){if(n=r.done?"completed":"suspendedYield",l.arg===s)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(n="completed",r.method="throw",r.arg=l.arg)}}}(e,r,a),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var s={};function l(){}function f(){}function p(){}var d={};d[o]=function(){return this};var h=Object.getPrototypeOf,m=h&&h(h(j([])));m&&m!==t&&r.call(m,o)&&(d=m);var v=p.prototype=l.prototype=Object.create(d);function y(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function b(e,t){var n;this._invoke=function(o,i){function a(){return new t((function(n,a){!function n(o,i,a,c){var s=u(e[o],e,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(f).then((function(e){l.value=e,a(l)}),(function(e){return n("throw",e,a,c)}))}c(s.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function g(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,g(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var o=n.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function w(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function j(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:x}}function x(){return{value:void 0,done:!0}}return f.prototype=v.constructor=p,p.constructor=f,p[a]=f.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,p):(e.__proto__=p,a in e||(e[a]="GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},y(b.prototype),b.prototype[i]=function(){return this},e.AsyncIterator=b,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new b(c(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},y(v),v[a]="Generator",v[o]=function(){return this},v.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,w.prototype={constructor:w,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return a.type="throw",a.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:j(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}(e.exports);try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}},325:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return Q}));var n=r(0),o=r.n(n),i=r(7),a=r.n(i),c=r(275),u=r(2),s=r.n(u),l=r(39),f=r.n(l);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h={type:"ON_LOAD"},m={type:"ON_SUCCESS"},v={type:"ON_ERROR"},y={type:"ON_ADD_START"},b={type:"ON_ADD_SUCCESS"},g={type:"ON_ADD_ERROR"},O={type:"ON_REMOVE_START"},E={type:"ON_REMOVE_SUCCESS"},w={type:"ON_REMOVE_ERROR"},j={users:[],isLoading:!1,hasLoaded:!1,error:!1,isAdding:!1,errorAdding:!1,isRemoving:!1,errorRemoving:!1};function x(e,t){switch(t.type){case h.type:return d(d({},e),{},{isLoading:!0,hasLoaded:!0});case m.type:return d(d({},e),{},{isLoading:!1,users:t.users});case v.type:return d(d({},e),{},{isLoading:!1,error:!0});case y.type:return d(d({},e),{},{isAdding:!0,errorAdding:!1});case b.type:return d(d({},e),{},{isAdding:!1,users:[].concat(f()(e.users),[t.user])});case g.type:return d(d({},e),{},{isAdding:!1,errorAdding:!0});case O.type:return d(d({},e),{},{isRemoving:!0,errorRemoving:!1});case E.type:return d(d({},e),{},{users:e.users.filter((function(e){return e.id!==t.user.id})),isRemoving:!1});case w:return d(d({},e),{},{isRemoving:!1,errorRemoving:!0});default:return e}}var L=r(277),R=Object(n.createContext)({}),P=Object(n.createContext)(L.b),_=function(e){var t=e.children,r=Object(n.useReducer)(x,j),i=s()(r,2),a=i[0],c=i[1];return o.a.createElement(R.Provider,{value:a},o.a.createElement(P.Provider,{value:c},t))};function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function U(){var e=Object(n.useContext)(P);return{add:function(t){e(y),c.b.addUser(t).then((function(t){return e(S(S({},b),{},{user:t}))})).catch((function(){return e(g)}))},remove:function(t){e(O),c.b.removeUser(t).then((function(){return e(S(S({},E),{},{user:t}))})).catch((function(){return e(w)}))}}}var N=r(17),C=r(33),D=o.a.memo((function(e){var t=e.name,r=e.id;Object(C.b)("UserItem: ".concat(t));var n=U().remove;return o.a.createElement(N.b,{onRemove:function(){return n({id:r})}},t)}));function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function I(e){var t=Object(n.useContext)(R),r=Object(n.useContext)(P),o=e&&!t.isLoading&&!t.hasLoaded;return Object(n.useEffect)((function(){o&&(r(h),c.b.getUsers().then((function(e){return r(q(q({},m),{},{users:e}))})).catch((function(){return r(v)})))}),[o,r]),t}var T=r(35);function F(){Object(C.b)("UserList");var e=I(!0),t=e.users,r=e.isLoading,n=e.hasLoaded,i=e.error;return r||!n?o.a.createElement(T.b,null):i?o.a.createElement(T.a,null):o.a.createElement(N.a,null,t.map((function(e){return o.a.createElement(D,{key:e.id,id:e.id,name:e.name})})))}var G=r(16),M=r(282);function J(){Object(C.b)("UserInput");var e=I().isAdding,t=U().add;return o.a.createElement(M.a,{disabled:e},(function(r){return o.a.createElement(G.b,{disabled:e,onClick:function(){return t(r)}},"Add user")}))}function K(){Object(C.b)("UserIndicators");var e=I(),t=e.isRemoving,r=e.errorRemoving,n=e.isAdding,i=e.errorAdding;return o.a.createElement(o.a.Fragment,null,t&&o.a.createElement(T.b,null,"Removing user..."),r&&o.a.createElement(T.a,null,"Failed to remove user"),n&&o.a.createElement(T.b,null,"Adding user..."),i&&o.a.createElement(T.a,null,"Failed to add user"))}function V(){return Object(C.b)("UserListWrapper"),o.a.createElement(_,null,o.a.createElement(F,null),o.a.createElement(J,null),o.a.createElement(K,null))}var W=r(34),Y=r(21),H=r(38),z=r(281),B=r(280);function Q(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(W.b,null,"Context"),o.a.createElement(G.a,null,o.a.createElement(Y.a,{text:"UserContext.js",fileName:"components/context/UserContext.js"}),o.a.createElement(Y.a,{text:"useUsers.js",fileName:"components/context/useUsers.js"}),o.a.createElement(Y.a,{text:"useUserMethods.js",fileName:"components/context/useUserMethods.js"}),o.a.createElement(Y.a,{text:"reducer.js",fileName:"components/context/reducer.js"}),o.a.createElement(Y.a,{text:"UserInput.js",fileName:"components/context/UserInput.js"}),o.a.createElement(Y.a,{text:"UserItem.js",fileName:"components/context/UserItem.js"}),o.a.createElement(Y.a,{text:"UserIndicators.js",fileName:"components/context/UserIndicators.js"}),o.a.createElement(Y.a,{text:"UserList.js",fileName:"components/context/UserList.js"}),o.a.createElement(Y.a,{text:"UsersWrapper.js",fileName:"components/context/UsersWrapper.js"})),o.a.createElement("br",null),o.a.createElement(z.a,null,o.a.createElement(V,null)),o.a.createElement(B.a,null,o.a.createElement(H.b,null),o.a.createElement(c.a,null)))}}}]);