(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{275:function(e,t,n){"use strict";n.d(t,"b",(function(){return b})),n.d(t,"a",(function(){return S}));var r=n(282),u=n.n(r),s=n(284),a=n.n(s),c=n(36),i=n.n(c),o=n(37),l=n.n(o),d=n(7),f=n.n(d),m=n(277),p=n(278),E=n.n(p),b=new(function(){function e(){var t=this;i()(this,e),f()(this,"requests",[]),f()(this,"subscribers",[]),f()(this,"getUsers",(function(){return t._fetch("/users")})),f()(this,"addUser",function(){var e=a()(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.addRequest("POST /users"),e.next=3,Object(m.a)(2e3);case 3:return t.addRequest("OK /users"),e.abrupt("return",{name:n,id:Object(m.c)()});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f()(this,"removeUser",function(){var e=a()(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.addRequest("DELETE /users/".concat(n.id)),e.next=3,Object(m.a)(2e3);case 3:t.addRequest("OK /users/".concat(n.id));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),f()(this,"clearRequests",(function(){t.requests=[],t.notifySubscribers()}))}var t,n;return l()(e,[{key:"_fetch",value:(n=a()(u.a.mark((function e(t){var n,r,s,c=this,i=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=i.length>1&&void 0!==i[1]?i[1]:{},r=n.delayMs,s=t.replace(this.baseUrl,""),this.addRequest("GET ".concat(s)),e.abrupt("return",this._mockFetch(t).then((function(e){if(!e.ok)throw new Error("Request to ".concat(t," failed with HTTP").concat(e.status));return e})).then((function(e){return e.json()})).then(function(){var e=a()(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)(r||2e3);case 2:return c.addRequest("OK ".concat(s)),e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"subscribe",value:function(e){this.subscribers.push(e),e(this.reqests)}},{key:"unSubscribe",value:function(e){this.subscribers=this.subscribers.filter((function(t){return t!==e}))}},{key:"addRequest",value:function(e){this.requests.push(e),this.notifySubscribers()}},{key:"notifySubscribers",value:function(){var e=this;this.subscribers.forEach((function(t){return t(e.requests)}))}},{key:"_mockFetch",value:(t=a()(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=E.a[t],e.abrupt("return",{ok:!!n,status:n?200:404,json:function(){return new Promise((function(e){return e(n)}))}});case 2:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}]),e}()),h=n(2),O=n.n(h),R=n(0),v=n.n(R),g=n(34),_=n(17);function S(){var e=Object(R.useReducer)((function(e){return e+1}),0),t=O()(e,2)[1];Object(R.useEffect)((function(){return b.subscribe(t),function(){b.unSubscribe(t),b.clearRequests()}}),[]);var n=b.requests.length,r=n>10?n-10:0;return v.a.createElement("section",null,v.a.createElement(g.d,{onClick:b.clearRequests,style:{cursor:"pointer"}},"API requests, click to reset"),v.a.createElement(_.a,null,n>10&&v.a.createElement(_.b,null,"..."),b.requests.slice(r).map((function(e,t){return v.a.createElement(_.b,{key:t},e)}))))}},277:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return a}));var r=function(e){return new Promise((function(t){return setTimeout(t,e)}))},u=10,s=function(){return u++},a=function(){}},278:function(e,t){e.exports={"/users":[{id:1,name:"John Doe"},{id:2,name:"Jane Doe"}]}},279:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(3),u=n(4),s=r.a.div.withConfig({displayName:"Containers__FlexContainer",componentId:"osdxjy-0"})(["display:flex;& > * + *{margin-left:5rem;border-left:1px dashed ",";padding-left:2rem;}"],u.c)},280:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(2),u=n.n(r),s=n(0),a=n.n(s),c=n(16);function i(e){var t=e.initiallyMounted,n=e.children,r=Object(s.useReducer)((function(e){return!e}),!!t),i=u()(r,2),o=i[0],l=i[1];return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.b,{onClick:l},o?"Unmount":"Mount"),o&&n)}},281:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var r=n(6),u=n.n(r),s=n(2),a=n.n(s),c=n(8),i=n.n(c),o=n(0),l=n.n(o),d=n(3).a.input.withConfig({displayName:"Input__StyledInput",componentId:"tgycnj-0"})(["margin-right:1rem;&[disabled]{text-decoration:line-through;}"]);function f(e){var t=e.children,n=e.disabled,r=i()(e,["children","disabled"]),s=Object(o.useState)(""),c=a()(s,2),f=c[0],m=c[1];return Object(o.useEffect)((function(){!n&&m("")}),[n]),l.a.createElement("div",null,l.a.createElement(d,u()({type:"text",disabled:n,value:f,onChange:function(e){return m(e.target.value)}},r)),t(f))}},330:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return N}));var r=n(0),u=n.n(r),s=n(283),a=n(293),c=n(39),i=n.n(c),o=n(7),l=n.n(o);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m={users:[],isLoading:!1,hasLoaded:!1,error:!1,isAdding:!1,errorAdding:!1,isRemoving:!1,errorRemoving:!1};var p=n(17),E=n(33),b=n(275),h=u.a.memo((function(e){var t=e.name,n=e.id;Object(E.b)("UserItem: ".concat(t));var r=Object(s.useDispatch)();return u.a.createElement(p.b,{onRemove:function(){r({type:"ON_USER_REMOVE_START"}),b.b.removeUser({name:t,id:n}).then((function(){return r({type:"ON_USER_REMOVE_SUCCESS",user:{name:t,id:n}})})).catch((function(){return r({type:"ON_USER_REMOVE_ERROR"})}))}},t)})),O=n(35);var R=Object(s.connect)((function(e){return{users:e.users,isLoading:e.isLoading,shouldFetch:!e.isLoading&&!e.hasLoaded,error:e.error}}),(function(e){return{setLoading:function(){return e({type:"ON_USERS_LOAD_START"})},setUsers:function(t){return e(function(e){return{type:"ON_USERS_LOAD_SUCCESS",users:e}}(t))},setUsersError:function(){return e({type:"ON_USERS_LOAD_ERROR"})}}}))((function(e){var t=e.users,n=e.isLoading,s=e.shouldFetch,a=e.error,c=e.setLoading,i=e.setUsers,o=e.setUsersError;return Object(E.b)("UserList"),Object(r.useEffect)((function(){s&&(c(),b.b.getUsers().then((function(e){return i(e)})).catch((function(){return o()})))}),[s,c,i,o]),n||s?u.a.createElement(O.b,null):a?u.a.createElement(O.a,null):u.a.createElement(p.a,null,t.map((function(e){return u.a.createElement(h,{key:e.id,id:e.id,name:e.name})})))})),v=n(16),g=n(281);function _(){Object(E.b)("UserInput");var e=Object(s.useSelector)((function(e){return e.isAdding})),t=Object(s.useDispatch)();return u.a.createElement(g.a,{disabled:e},(function(n){return u.a.createElement(v.b,{disabled:e,onClick:function(){return function(e){t({type:"ON_USER_ADD_START"}),b.b.addUser(e).then((function(e){return t(function(e){return{type:"ON_USER_ADD_SUCCESS",user:e}}(e))})).catch((function(){return t({type:"ON_USER_ADD_ERROR"})}))}(n)}},"Add user")}))}function S(){Object(E.b)("UserIndicators");var e=Object(s.useSelector)((function(e){return{isRemoving:e.isRemoving,errorRemoving:e.errorRemoving,isAdding:e.isAdding,errorAdding:e.errorAdding}})),t=e.isRemoving,n=e.errorRemoving,r=e.isAdding,a=e.errorAdding;return u.a.createElement(u.a.Fragment,null,t&&u.a.createElement(O.b,null,"Removing user..."),n&&u.a.createElement(O.a,null,"Failed to remove user"),r&&u.a.createElement(O.b,null,"Adding user..."),a&&u.a.createElement(O.a,null,"Failed to add user"))}var U=Object(a.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ON_USERS_LOAD_START":return f(f({},e),{},{isLoading:!0,hasLoaded:!0});case"ON_USERS_LOAD_SUCCESS":return f(f({},e),{},{isLoading:!1,users:t.users});case"ON_USERS_LOAD_ERROR":return f(f({},e),{},{isLoading:!1,error:!0});case"ON_USER_ADD_START":return f(f({},e),{},{isAdding:!0,errorAdding:!1});case"ON_USER_ADD_SUCCESS":return f(f({},e),{},{isAdding:!1,users:[].concat(i()(e.users),[t.user])});case"ON_USER_ADD_ERROR":return f(f({},e),{},{isAdding:!1,errorAdding:!0});case"ON_USER_REMOVE_START":return f(f({},e),{},{isRemoving:!0,errorRemoving:!1});case"ON_USER_REMOVE_SUCCESS":return f(f({},e),{},{users:e.users.filter((function(e){return e.id!==t.user.id})),isRemoving:!1});case"ON_USER_REMOVE_ERROR":return f(f({},e),{},{isRemoving:!1,errorRemoving:!0});default:return e}}));function j(){return Object(E.b)("UserListWrapper"),u.a.createElement(s.Provider,{store:U},u.a.createElement(R,null),u.a.createElement(_,null),u.a.createElement(S,null))}var y=n(38),A=n(34),w=n(280),x=n(21),D=n(279);function N(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(A.b,null,"Redux"),u.a.createElement(v.a,null,u.a.createElement(x.a,{text:"actions.js",fileName:"components/redux/actions.js"}),u.a.createElement(x.a,{text:"reducer.js",fileName:"components/redux/reducer.js"}),u.a.createElement(x.a,{text:"UsersWrapper.js",fileName:"components/redux/UsersWrapper.js"}),u.a.createElement(x.a,{text:"UserList.js",fileName:"components/redux/UserList.js"}),u.a.createElement(x.a,{text:"UserInput.js",fileName:"components/redux/UserInput.js"}),u.a.createElement(x.a,{text:"UserItem.js",fileName:"components/redux/UserItem.js"}),u.a.createElement(x.a,{text:"UserIndicators.js",fileName:"components/redux/UserIndicators.js"})),u.a.createElement(w.a,null,u.a.createElement(j,null)),u.a.createElement(D.a,null,u.a.createElement(y.b,null),u.a.createElement(b.a,null)))}}}]);