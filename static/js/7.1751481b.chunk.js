(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{275:function(e,n,t){"use strict";t.d(n,"b",(function(){return h})),t.d(n,"a",(function(){return y}));var r=t(282),u=t.n(r),a=t(284),c=t.n(a),s=t(36),i=t.n(s),o=t(37),l=t.n(o),d=t(7),f=t.n(d),m=t(277),b=t(278),v=t.n(b),h=new(function(){function e(){var n=this;i()(this,e),f()(this,"requests",[]),f()(this,"subscribers",[]),f()(this,"getUsers",(function(){return n._fetch("/users")})),f()(this,"addUser",function(){var e=c()(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.addRequest("POST /users"),e.next=3,Object(m.a)(2e3);case 3:return n.addRequest("OK /users"),e.abrupt("return",{name:t,id:Object(m.c)()});case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),f()(this,"removeUser",function(){var e=c()(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.addRequest("DELETE /users/".concat(t.id)),e.next=3,Object(m.a)(2e3);case 3:n.addRequest("OK /users/".concat(t.id));case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),f()(this,"clearRequests",(function(){n.requests=[],n.notifySubscribers()}))}var n,t;return l()(e,[{key:"_fetch",value:(t=c()(u.a.mark((function e(n){var t,r,a,s=this,i=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:{},r=t.delayMs,a=n.replace(this.baseUrl,""),this.addRequest("GET ".concat(a)),e.abrupt("return",this._mockFetch(n).then((function(e){if(!e.ok)throw new Error("Request to ".concat(n," failed with HTTP").concat(e.status));return e})).then((function(e){return e.json()})).then(function(){var e=c()(u.a.mark((function e(n){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.a)(r||2e3);case 2:return s.addRequest("OK ".concat(a)),e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()));case 5:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"subscribe",value:function(e){this.subscribers.push(e),e(this.reqests)}},{key:"unSubscribe",value:function(e){this.subscribers=this.subscribers.filter((function(n){return n!==e}))}},{key:"addRequest",value:function(e){this.requests.push(e),this.notifySubscribers()}},{key:"notifySubscribers",value:function(){var e=this;this.subscribers.forEach((function(n){return n(e.requests)}))}},{key:"_mockFetch",value:(n=c()(u.a.mark((function e(n){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=v.a[n],e.abrupt("return",{ok:!!t,status:t?200:404,json:function(){return new Promise((function(e){return e(t)}))}});case 2:case"end":return e.stop()}}),e)}))),function(e){return n.apply(this,arguments)})}]),e}()),p=t(2),E=t.n(p),j=t(0),g=t.n(j),k=t(34),O=t(17);function y(){var e=Object(j.useReducer)((function(e){return e+1}),0),n=E()(e,2)[1];Object(j.useEffect)((function(){return h.subscribe(n),function(){h.unSubscribe(n),h.clearRequests()}}),[]);var t=h.requests.length,r=t>10?t-10:0;return g.a.createElement("section",null,g.a.createElement(k.d,{onClick:h.clearRequests,style:{cursor:"pointer"}},"API requests, click to reset"),g.a.createElement(O.a,null,t>10&&g.a.createElement(O.b,null,"..."),h.requests.slice(r).map((function(e,n){return g.a.createElement(O.b,{key:n},e)}))))}},277:function(e,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"b",(function(){return c}));var r=function(e){return new Promise((function(n){return setTimeout(n,e)}))},u=10,a=function(){return u++},c=function(){}},278:function(e,n){e.exports={"/users":[{id:1,name:"John Doe"},{id:2,name:"Jane Doe"}]}},279:function(e,n,t){"use strict";t.d(n,"a",(function(){return a}));var r=t(3),u=t(4),a=r.a.div.withConfig({displayName:"Containers__FlexContainer",componentId:"osdxjy-0"})(["display:flex;& > * + *{margin-left:5rem;border-left:1px dashed ",";padding-left:2rem;}"],u.c)},280:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t(2),u=t.n(r),a=t(0),c=t.n(a),s=t(16);function i(e){var n=e.initiallyMounted,t=e.children,r=Object(a.useReducer)((function(e){return!e}),!!n),i=u()(r,2),o=i[0],l=i[1];return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.b,{onClick:l},o?"Unmount":"Mount"),o&&t)}},281:function(e,n,t){"use strict";t.d(n,"a",(function(){return f}));var r=t(6),u=t.n(r),a=t(2),c=t.n(a),s=t(8),i=t.n(s),o=t(0),l=t.n(o),d=t(3).a.input.withConfig({displayName:"Input__StyledInput",componentId:"tgycnj-0"})(["margin-right:1rem;&[disabled]{text-decoration:line-through;}"]);function f(e){var n=e.children,t=e.disabled,r=i()(e,["children","disabled"]),a=Object(o.useState)(""),s=c()(a,2),f=s[0],m=s[1];return Object(o.useEffect)((function(){!t&&m("")}),[t]),l.a.createElement("div",null,l.a.createElement(d,u()({type:"text",disabled:t,value:f,onChange:function(e){return m(e.target.value)}},r)),n(f))}},331:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return w}));var r=t(0),u=t.n(r),a=t(294),c=t(283),s=t(275),i=Object(a.kea)({actions:function(){return{load:!0,loadSuccess:function(e){return{users:e}},loadFailure:!0,add:function(e){return{name:e}},addSuccess:function(e){return{user:e}},addFailure:!0,remove:function(e){return{user:e}},removeSuccess:function(e){return{user:e}},removeFailure:!0}},reducers:function(){return{users:[[],{loadSuccess:function(e,n){return n.users},addSuccess:function(e,n){var t=n.user;return e.concat(t)},removeSuccess:function(e,n){var t=n.user;return e.filter((function(e){return e.id!==t.id}))}}],hasLoaded:[!1,{loadSuccess:function(){return!0}}],isLoading:[!1,{load:function(){return!0},loadSuccess:function(){return!1},loadFailure:function(){return!1}}],error:[!1,{load:function(){return!1},loadFailure:function(){return!0}}],isAdding:[!1,{add:function(){return!0},addSuccess:function(){return!1},addFailure:function(){return!1}}],addingError:[!1,{add:function(){return!1},addFailure:function(){return!0}}],isRemoving:[!1,{remove:function(){return!0},removeSuccess:function(){return!1},removeFailure:function(){return!1}}],removingError:[!1,{remove:function(){return!1},removeFailure:function(){return!0}}]}},listeners:function(e){var n=e.actions;return{load:function(){return s.b.getUsers().then((function(e){return n.loadSuccess(e)})).catch((function(){return n.loadFailure()}))},add:function(e){var t=e.name;return s.b.addUser(t).then((function(e){return n.addSuccess(e)})).catch((function(){return n.addFailure()}))},remove:function(e){var t=e.user;return s.b.removeUser(t).then((function(){return n.removeSuccess(t)})).catch((function(){return n.removeFailure()}))}}}}),o=t(17),l=t(33),d=u.a.memo((function(e){var n=e.name,t=e.id;Object(l.b)("UserItem: ".concat(n));var r=Object(a.useActions)(i).remove;return u.a.createElement(o.b,{onRemove:function(){return r({name:n,id:t})}},n)})),f=t(35);function m(){Object(l.b)("UserList");var e=Object(a.useActions)(i).load,n=Object(a.useValues)(i),t=n.users,c=n.isLoading,s=n.hasLoaded,m=n.error;return Object(r.useEffect)((function(){e()}),[e]),c||!s?u.a.createElement(f.b,null):m?u.a.createElement(f.a,null):u.a.createElement(o.a,null,t.map((function(e){return u.a.createElement(d,{key:e.id,id:e.id,name:e.name})})))}var b=t(16),v=t(281);function h(){Object(l.b)("UserInput");var e=Object(a.useValues)(i).isAdding,n=Object(a.useActions)(i).add;return u.a.createElement(v.a,{disabled:e},(function(t){return u.a.createElement(b.b,{disabled:e,onClick:function(){return n(t)}},"Add user")}))}function p(){Object(l.b)("UserIndicators");var e=Object(a.useValues)(i),n=e.isRemoving,t=e.errorRemoving,r=e.isAdding,c=e.errorAdding;return u.a.createElement(u.a.Fragment,null,n&&u.a.createElement(f.b,null,"Removing user..."),t&&u.a.createElement(f.a,null,"Failed to remove user"),r&&u.a.createElement(f.b,null,"Adding user..."),c&&u.a.createElement(f.a,null,"Failed to add user"))}function E(){return u.a.createElement(c.Provider,{store:Object(a.getContext)().store},u.a.createElement(m,null),u.a.createElement(h,null),u.a.createElement(p,null))}Object(a.resetContext)();var j=t(38),g=t(34),k=t(280),O=t(21),y=t(279);function w(){return u.a.createElement(u.a.Fragment,null,u.a.createElement(g.b,null,"Kea"),u.a.createElement(b.a,null,u.a.createElement(O.a,{text:"logic.js",fileName:"components/kea/logic.js"}),u.a.createElement(O.a,{text:"UsersWrapper.js",fileName:"components/kea/UsersWrapper.js"}),u.a.createElement(O.a,{text:"UserList.js",fileName:"components/kea/UserList.js"}),u.a.createElement(O.a,{text:"UserItem.js",fileName:"components/kea/UserItem.js"}),u.a.createElement(O.a,{text:"UserInput.js",fileName:"components/kea/UserInput.js"}),u.a.createElement(O.a,{text:"UserIndicators.js",fileName:"components/kea/UserIndicators.js"})),u.a.createElement(k.a,null,u.a.createElement(E,null)),u.a.createElement(y.a,null,u.a.createElement(j.b,null),u.a.createElement(s.a,null)))}}}]);