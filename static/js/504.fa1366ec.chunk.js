(self.webpackChunkstate_mgmt_examples=self.webpackChunkstate_mgmt_examples||[]).push([[504],{7025:function(e,r,t){"use strict";t.d(r,{Tt:function(){return U},ZP:function(){return v},Rf:function(){return E}});var n=t(7757),s=t.n(n),u=t(8926),c=t.n(u),a=t(4575),i=t.n(a),o=t(3913),l=t.n(o),f=t(9713),d=t.n(f),p=t(8903),m=t(7746),g=t.n(m),h=function(){function e(){var r=this;i()(this,e),d()(this,"requests",[]),d()(this,"subscribers",[]),d()(this,"getUsers",(function(){return r._fetch("/users")})),d()(this,"addUser",function(){var e=c()(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.addRequest("POST /users"),e.next=3,(0,p.gw)(2e3);case 3:return r.addRequest("OK /users"),e.abrupt("return",{name:t,id:(0,p.EL)()});case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()),d()(this,"removeUser",function(){var e=c()(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.addRequest("DELETE /users/".concat(t.id)),e.next=3,(0,p.gw)(2e3);case 3:r.addRequest("OK /users/".concat(t.id));case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()),d()(this,"clearRequests",(function(){r.requests=[],r.notifySubscribers()}))}var r,t;return l()(e,[{key:"_fetch",value:(t=c()(s().mark((function e(r){var t,n,u,a=this,i=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.length>1&&void 0!==i[1]?i[1]:{},n=t.delayMs,u=r.replace(this.baseUrl,""),this.addRequest("GET ".concat(u)),e.abrupt("return",this._mockFetch(r).then((function(e){if(!e.ok)throw new Error("Request to ".concat(r," failed with HTTP").concat(e.status));return e})).then((function(e){return e.json()})).then(function(){var e=c()(s().mark((function e(r){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,p.gw)(n||2e3);case 2:return a.addRequest("OK ".concat(u)),e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()));case 5:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"subscribe",value:function(e){this.subscribers.push(e),e(this.reqests)}},{key:"unSubscribe",value:function(e){this.subscribers=this.subscribers.filter((function(r){return r!==e}))}},{key:"addRequest",value:function(e){this.requests.push(e),this.notifySubscribers()}},{key:"notifySubscribers",value:function(){var e=this;this.subscribers.forEach((function(r){return r(e.requests)}))}},{key:"_mockFetch",value:(r=c()(s().mark((function e(r){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=g()[r],e.abrupt("return",{ok:!!t,status:t?200:404,json:function(){return new Promise((function(e){return e(t)}))}});case 2:case"end":return e.stop()}}),e)}))),function(e){return r.apply(this,arguments)})}]),e}(),R=new h,v=R,E=R.getUsers,x=t(3038),b=t.n(x),w=t(7294),S=t(9434),y=t(5973),O=$RefreshSig$();function U(){O();var e=(0,w.useReducer)((function(e){return e+1}),0),r=b()(e,2)[1];(0,w.useEffect)((function(){return v.subscribe(r),function(){v.unSubscribe(r),v.clearRequests()}}),[]);var t=v.requests.length,n=t>10?t-10:0;return w.createElement("section",null,w.createElement(S.H3,{onClick:v.clearRequests,style:{cursor:"pointer"}},"API requests, click to reset"),w.createElement(y.a,null,t>10&&w.createElement(y.H,null,"..."),v.requests.slice(n).map((function(e,r){return w.createElement(y.H,{key:r},e)}))))}O(U,"UxqsAPbyOOo6jkpO1hjMpCydUI8="),$RefreshReg$(U,"ApiRequests")},7746:function(e){e.exports={"/users":[{id:1,name:"John Doe"},{id:2,name:"Jane Doe"}]}},3225:function(e,r,t){"use strict";t.d(r,{E:function(){return u}});var n=t(9163),s=t(9630),u=n.ZP.div.withConfig({displayName:"Containers__FlexContainer",componentId:"osdxjy-0"})(["display:flex;& > * + *{margin-left:5rem;border-left:1px dashed ",";padding-left:2rem;}"],s.A2)},6722:function(e,r,t){"use strict";t.d(r,{Z:function(){return g}});var n,s,u=t(7154),c=t.n(u),a=t(3038),i=t.n(a),o=t(6479),l=t.n(o),f=t(7294),d=t(9163),p=$RefreshSig$(),m=d.ZP.input.withConfig({displayName:"Input__StyledInput",componentId:"tgycnj-0"})(["margin-right:1rem;&[disabled]{text-decoration:line-through;}"]);function g(e){p();var r=e.children,t=e.disabled,n=l()(e,["children","disabled"]),s=(0,f.useState)(""),u=i()(s,2),a=u[0],o=u[1];return(0,f.useEffect)((function(){!t&&o("")}),[t]),f.createElement("div",null,f.createElement(m,c()({type:"text",disabled:t,value:a,onChange:function(e){return o(e.target.value)}},n)),r(a))}n=m,p(g,"aFIykL0K1j3we4veeaDstLdSuC8="),s=g,$RefreshReg$(n,"StyledInput"),$RefreshReg$(s,"Input")},448:function(e,r,t){"use strict";t.d(r,{Z:function(){return i}});var n=t(3038),s=t.n(n),u=t(7294),c=t(9693),a=$RefreshSig$();function i(e){a();var r=e.initiallyMounted,t=e.children,n=(0,u.useReducer)((function(e){return!e}),!!r),i=s()(n,2),o=i[0],l=i[1];return u.createElement(u.Fragment,null,u.createElement(c.Z,{onClick:l},o?"Unmount":"Mount"),o&&t)}a(i,"SGBRyZ8qj4KP74qoZGVxnnGCTRI="),$RefreshReg$(i,"MountToggle")},8903:function(e,r,t){"use strict";t.d(r,{gw:function(){return n},EL:function(){return u},ZT:function(){return c}});var n=function(e){return new Promise((function(r){return setTimeout(r,e)}))},s=10,u=function(){return s++},c=function(){}},7504:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return pe}});var n=t(7294),s=t(7703),u=t(4890),c=t(797),a=t(319),i=t.n(a),o=t(9713),l=t.n(o),f="ON_USERS_LOAD_START",d="ON_USERS_LOAD_SUCCESS",p="ON_USERS_LOAD_ERROR",m="ON_USER_ADD_START",g="ON_USER_ADD_SUCCESS",h="ON_USER_ADD_ERROR",R="ON_USER_REMOVE_START",v="ON_USER_REMOVE_SUCCESS",E="ON_USER_REMOVE_ERROR";function x(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function b(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?x(Object(t),!0).forEach((function(r){l()(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):x(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var w,S,y={users:[],isLoading:!1,hasLoaded:!1,error:!1,isAdding:!1,errorAdding:!1,isRemoving:!1,errorRemoving:!1},O=t(5973),U=t(4494),j=$RefreshSig$(),$=S=j(n.memo(w=j((function(e){j();var r=e.name,t=e.id;(0,U.tc)("UserItem: ".concat(r));var u=(0,s.useDispatch)();return n.createElement(O.H,{onRemove:function(){u({type:R,user:{name:r,id:t}})}},r)}),"wd+XM1IGdpP37WUxZXwNSWwTecU=",!1,(function(){return[U.tc,s.useDispatch]}))),"wd+XM1IGdpP37WUxZXwNSWwTecU=",!1,(function(){return[U.tc,s.useDispatch]}));$RefreshReg$(w,"%default%$React.memo"),$RefreshReg$(S,"%default%");var _=t(2614),k=$RefreshSig$();function A(e){k();var r=e.users,t=e.isLoading,s=e.shouldFetch,u=e.error,c=e.dispatch;return(0,U.tc)("UserList"),(0,n.useEffect)((function(){s&&c({type:f})}),[s,c]),t||s?n.createElement(_.a,null):u?n.createElement(_.j,null):n.createElement(O.a,null,r.map((function(e){return n.createElement($,{key:e.id,id:e.id,name:e.name})})))}k(A,"ovg+HIuBbNIr+BlVzWBYeOp6iiE=",!1,(function(){return[U.tc]})),I=A;var I,L=(0,s.connect)((function(e){return{users:e.users,isLoading:e.isLoading,shouldFetch:!e.isLoading&&!e.hasLoaded,error:e.error}}))(A);$RefreshReg$(I,"UserList");var q=t(9693),P=t(6722),D=$RefreshSig$();function N(){D(),(0,U.tc)("UserInput");var e=(0,s.useSelector)((function(e){return e.isAdding})),r=(0,s.useDispatch)();return n.createElement(P.Z,{disabled:e},(function(t){return n.createElement(q.Z,{disabled:e,onClick:function(){return function(e){r({type:m,user:{name:e}})}(t)}},"Add user")}))}D(N,"c4KCzwajFrp9BUdA+aO9gmLYGZI=",!1,(function(){return[U.tc,s.useSelector,s.useDispatch]})),$RefreshReg$(N,"UserInput");var Z=$RefreshSig$();function C(){Z(),(0,U.tc)("UserIndicators");var e=(0,s.useSelector)((function(e){return{isRemoving:e.isRemoving,errorRemoving:e.errorRemoving,isAdding:e.isAdding,errorAdding:e.errorAdding}})),r=e.isRemoving,t=e.errorRemoving,u=e.isAdding,c=e.errorAdding;return n.createElement(n.Fragment,null,r&&n.createElement(_.a,null,"Removing user..."),t&&n.createElement(_.j,null,"Failed to remove user"),u&&n.createElement(_.a,null,"Adding user..."),c&&n.createElement(_.j,null,"Failed to add user"))}Z(C,"IIKXq6qZZf2d0p+D7A/hlDN440s=",!1,(function(){return[U.tc,s.useSelector]})),$RefreshReg$(C,"UserIndicators");var T=t(7757),F=t.n(T),M=t(4857),z=t(7025),W=F().mark(J),G=F().mark(Y),H=F().mark(Q),K=F().mark(ee),V=F().mark(re),B=F().mark(te),X=F().mark(ne);function J(){var e;return F().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,M.RE)(z.ZP.getUsers);case 3:return e=r.sent,r.next=6,(0,M.gz)({type:d,users:e});case 6:r.next=12;break;case 8:return r.prev=8,r.t0=r.catch(0),r.next=12,(0,M.gz)({type:p});case 12:case"end":return r.stop()}}),W,null,[[0,8]])}function Y(e){var r;return F().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,M.RE)(z.ZP.addUser,e.user.name);case 3:return r=t.sent,t.next=6,(0,M.gz)({type:g,user:r});case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,(0,M.gz)({type:h});case 12:case"end":return t.stop()}}),G,null,[[0,8]])}function Q(e){return F().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,M.RE)(z.ZP.removeUser,e.user);case 3:return r.next=5,(0,M.gz)({type:v,user:e.user});case 5:r.next=11;break;case 7:return r.prev=7,r.t0=r.catch(0),r.next=11,(0,M.gz)({type:E});case 11:case"end":return r.stop()}}),H,null,[[0,7]])}function ee(){return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,M.A7)(f,J);case 2:case"end":return e.stop()}}),K)}function re(){return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,M.A7)(m,Y);case 2:case"end":return e.stop()}}),V)}function te(){return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,M.A7)(R,Q);case 2:case"end":return e.stop()}}),B)}function ne(){return F().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,M.$6)([ee(),re(),te()]);case 2:case"end":return e.stop()}}),X)}var se=$RefreshSig$(),ue=(0,c.ZP)(),ce=(0,u.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case f:return b(b({},e),{},{isLoading:!0,hasLoaded:!0});case d:return b(b({},e),{},{isLoading:!1,users:r.users});case p:return b(b({},e),{},{isLoading:!1,error:!0});case m:return b(b({},e),{},{isAdding:!0,errorAdding:!1});case g:return b(b({},e),{},{isAdding:!1,users:[].concat(i()(e.users),[r.user])});case h:return b(b({},e),{},{isAdding:!1,errorAdding:!0});case R:return b(b({},e),{},{isRemoving:!0,errorRemoving:!1});case v:return b(b({},e),{},{users:e.users.filter((function(e){return e.id!==r.user.id})),isRemoving:!1});case E:return b(b({},e),{},{isRemoving:!1,errorRemoving:!0});default:return e}}),(0,u.applyMiddleware)(ue));function ae(){return se(),(0,U.tc)("UserListWrapper"),n.createElement(s.Provider,{store:ce},n.createElement(L,null),n.createElement(N,null),n.createElement(C,null))}ue.run(ne),se(ae,"1tajz0682eLN0aQrzvJO/S9cJ4U=",!1,(function(){return[U.tc]})),$RefreshReg$(ae,"UsersWrapper");var ie=t(5376),oe=t(9434),le=t(448),fe=t(9268),de=t(3225);function pe(){return n.createElement(n.Fragment,null,n.createElement(oe.H1,null,"Redux Saga"),n.createElement(q._,null,n.createElement(fe.Ou,{text:"sagas.js",fileName:"components/redux-saga/sagas.js"}),n.createElement(fe.Ou,{text:"actions.js",fileName:"components/redux-saga/actions.js"}),n.createElement(fe.Ou,{text:"reducer.js",fileName:"components/redux-saga/reducer.js"}),n.createElement(fe.Ou,{text:"UsersWrapper.js",fileName:"components/redux-saga/UsersWrapper.js"}),n.createElement(fe.Ou,{text:"UserList.js",fileName:"components/redux-saga/UserList.js"}),n.createElement(fe.Ou,{text:"UserInput.js",fileName:"components/redux-saga/UserInput.js"}),n.createElement(fe.Ou,{text:"UserItem.js",fileName:"components/redux-saga/UserItem.js"}),n.createElement(fe.Ou,{text:"UserIndicators.js",fileName:"components/redux-saga/UserIndicators.js"})),n.createElement(le.Z,null,n.createElement(ae,null)),n.createElement(de.E,null,n.createElement(ie.Z,null),n.createElement(z.Tt,null)))}$RefreshReg$(pe,"ReduxSagaView")}}]);