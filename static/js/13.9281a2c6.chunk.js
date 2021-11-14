(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{275:function(e,n,t){"use strict";t.d(n,"b",(function(){return p})),t.d(n,"a",(function(){return k}));var r=t(283),s=t.n(r),u=t(284),i=t.n(u),a=t(36),c=t.n(a),o=t(37),d=t.n(o),l=t(7),f=t.n(l),m=t(277),b=t(279),h=t.n(b),p=new(function(){function e(){var n=this;c()(this,e),f()(this,"requests",[]),f()(this,"subscribers",[]),f()(this,"getUsers",(function(){return n._fetch("/users")})),f()(this,"addUser",function(){var e=i()(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.addRequest("POST /users"),e.next=3,Object(m.a)(2e3);case 3:return n.addRequest("OK /users"),e.abrupt("return",{name:t,id:Object(m.c)()});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),f()(this,"removeUser",function(){var e=i()(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.addRequest("DELETE /users/".concat(t.id)),e.next=3,Object(m.a)(2e3);case 3:n.addRequest("OK /users/".concat(t.id));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),f()(this,"clearRequests",(function(){n.requests=[],n.notifySubscribers()}))}var n,t;return d()(e,[{key:"_fetch",value:(t=i()(s.a.mark((function e(n){var t,r,u,a=this,c=arguments;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:{},r=t.delayMs,u=n.replace(this.baseUrl,""),this.addRequest("GET ".concat(u)),e.abrupt("return",this._mockFetch(n).then((function(e){if(!e.ok)throw new Error("Request to ".concat(n," failed with HTTP").concat(e.status));return e})).then((function(e){return e.json()})).then(function(){var e=i()(s.a.mark((function e(n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)(r||2e3);case 2:return a.addRequest("OK ".concat(u)),e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 5:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"subscribe",value:function(e){this.subscribers.push(e),e(this.reqests)}},{key:"unSubscribe",value:function(e){this.subscribers=this.subscribers.filter((function(n){return n!==e}))}},{key:"addRequest",value:function(e){this.requests.push(e),this.notifySubscribers()}},{key:"notifySubscribers",value:function(){var e=this;this.subscribers.forEach((function(n){return n(e.requests)}))}},{key:"_mockFetch",value:(n=i()(s.a.mark((function e(n){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=h.a[n],e.abrupt("return",{ok:!!t,status:t?200:404,json:function(){return new Promise((function(e){return e(t)}))}});case 2:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)})}]),e}()),v=t(2),g=t.n(v),E=t(0),j=t.n(E),R=t(34),U=t(17);function k(){var e=Object(E.useReducer)((function(e){return e+1}),0),n=g()(e,2)[1];Object(E.useEffect)((function(){return p.subscribe(n),function(){p.unSubscribe(n),p.clearRequests()}}),[]);var t=p.requests.length,r=t>10?t-10:0;return j.a.createElement("section",null,j.a.createElement(R.d,{onClick:p.clearRequests,style:{cursor:"pointer"}},"API requests, click to reset"),j.a.createElement(U.a,null,t>10&&j.a.createElement(U.b,null,"..."),p.requests.slice(r).map((function(e,n){return j.a.createElement(U.b,{key:n},e)}))))}},277:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"c",(function(){return u})),t.d(n,"b",(function(){return i}));var r=function(e){return new Promise((function(n){return setTimeout(n,e)}))},s=10,u=function(){return s++},i=function(){}},279:function(e,n){e.exports={"/users":[{id:1,name:"John Doe"},{id:2,name:"Jane Doe"}]}},280:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var r=t(3),s=t(4),u=r.a.div.withConfig({displayName:"Containers__FlexContainer",componentId:"osdxjy-0"})(["display:flex;& > * + *{margin-left:5rem;border-left:1px dashed ",";padding-left:2rem;}"],s.c)},281:function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var r=t(2),s=t.n(r),u=t(0),i=t.n(u),a=t(16);function c(e){var n=e.initiallyMounted,t=e.children,r=Object(u.useReducer)((function(e){return!e}),!!n),c=s()(r,2),o=c[0],d=c[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(a.b,{onClick:d},o?"Unmount":"Mount"),o&&t)}},282:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var r=t(6),s=t.n(r),u=t(2),i=t.n(u),a=t(8),c=t.n(a),o=t(0),d=t.n(o),l=t(3).a.input.withConfig({displayName:"Input__StyledInput",componentId:"tgycnj-0"})(["margin-right:1rem;&[disabled]{text-decoration:line-through;}"]);function f(e){var n=e.children,t=e.disabled,r=c()(e,["children","disabled"]),u=Object(o.useState)(""),a=i()(u,2),f=a[0],m=a[1];return Object(o.useEffect)((function(){!t&&m("")}),[t]),d.a.createElement("div",null,d.a.createElement(l,s()({type:"text",disabled:t,value:f,onChange:function(e){return m(e.target.value)}},r)),n(f))}},332:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return T}));var r=t(0),s=t.n(r),u=t(278),i=t(311),a=t(275),c=Object(i.b)({name:"users",initialState:{users:[],isLoading:!1,hasLoaded:!1,error:!1,isAdding:!1,errorAdding:!1,isRemoving:!1,errorRemoving:!1},reducers:{setLoading:function(e){e.isLoading=!0,e.error=!1},setUsers:function(e,n){e.isLoading=!1,e.hasLoaded=!0,e.users=n.payload},setError:function(e){e.isLoading=!1,e.hasLoaded=!0,e.error=!0},setAdding:function(e){e.isAdding=!0,e.errorAdding=!1},addUser:function(e,n){e.isAdding=!1,e.users.push(n.payload)},setAddingError:function(e){e.isAdding=!1,e.errorAdding=!0},setRemoving:function(e){e.isRemoving=!0,e.errorRemoving=!1},removeUser:function(e,n){e.isRemoving=!1,e.users=e.users.filter((function(e){return e.id!==n.payload.id}))},setRemovingError:function(e){e.isRemoving=!1,e.errorRemoving=!0}}}),o=c.actions,d=o.setLoading,l=o.setUsers,f=o.setError,m=o.setAdding,b=o.addUser,h=o.setAddingError,p=o.setRemoving,v=o.removeUser,g=o.setRemovingError,E=c.reducer,j=t(17),R=t(33),U=s.a.memo((function(e){var n=e.name,t=e.id;Object(R.b)("UserItem: ".concat(n));var r=Object(u.useDispatch)();return s.a.createElement(j.b,{onRemove:function(){return r((e={name:n,id:t},function(n){n(p()),a.b.removeUser(e).then((function(){return n(v(e))})).catch((function(){return n(g())}))}));var e}},n)})),k=t(35);var y={loadUsers:function(){return function(e){e(d()),a.b.getUsers().then((function(n){return e(l(n))})).catch((function(){return e(f())}))}}},x=Object(u.connect)((function(e){return{users:e.users,isLoading:e.isLoading,shouldFetch:!e.isLoading&&!e.hasLoaded,error:e.error}}),y)((function(e){var n=e.users,t=e.isLoading,u=e.shouldFetch,i=e.error,a=e.loadUsers;return Object(R.b)("UserList"),Object(r.useEffect)((function(){u&&a()}),[u,a]),t||u?s.a.createElement(k.b,null):i?s.a.createElement(k.a,null):s.a.createElement(j.a,null,n.map((function(e){return s.a.createElement(U,{key:e.id,id:e.id,name:e.name})})))})),O=t(16),w=t(282);function A(){Object(R.b)("UserInput");var e=Object(u.useSelector)((function(e){return e.isAdding})),n=Object(u.useDispatch)(),t=function(e){return n(function(e){return function(n){n(m()),a.b.addUser(e).then((function(e){return n(b(e))})).catch((function(){return n(h())}))}}(e))};return s.a.createElement(w.a,{disabled:e},(function(n){return s.a.createElement(O.b,{disabled:e,onClick:function(){return t(n)}},"Add user")}))}function q(){Object(R.b)("UserIndicators");var e=Object(u.useSelector)((function(e){return{isRemoving:e.isRemoving,errorRemoving:e.errorRemoving,isAdding:e.isAdding,errorAdding:e.errorAdding}})),n=e.isRemoving,t=e.errorRemoving,r=e.isAdding,i=e.errorAdding;return s.a.createElement(s.a.Fragment,null,n&&s.a.createElement(k.b,null,"Removing user..."),t&&s.a.createElement(k.a,null,"Failed to remove user"),r&&s.a.createElement(k.b,null,"Adding user..."),i&&s.a.createElement(k.a,null,"Failed to add user"))}var L=Object(i.a)({reducer:E});function I(){return Object(R.b)("UserListWrapper"),s.a.createElement(u.Provider,{store:L},s.a.createElement(x,null),s.a.createElement(A,null),s.a.createElement(q,null))}var S=t(38),F=t(34),C=t(281),N=t(21),_=t(280);function T(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(F.b,null,"Redux Toolkit"),s.a.createElement(O.a,null,s.a.createElement(N.a,{text:"UsersSlice.js",fileName:"components/redux-toolkit/UsersSlice.js"}),s.a.createElement(N.a,{text:"UsersWrapper.js",fileName:"components/redux-toolkit/UsersWrapper.js"}),s.a.createElement(N.a,{text:"UserList.js",fileName:"components/redux-toolkit/UserList.js"}),s.a.createElement(N.a,{text:"UserItem.js",fileName:"components/redux-toolkit/UserItem.js"}),s.a.createElement(N.a,{text:"UserInput.js",fileName:"components/redux-toolkit/UserInput.js"}),s.a.createElement(N.a,{text:"UserIndicators.js",fileName:"components/redux-toolkit/UserIndicators.js"})),s.a.createElement(C.a,null,s.a.createElement(I,null)),s.a.createElement(_.a,null,s.a.createElement(S.b,null),s.a.createElement(a.a,null)))}}}]);