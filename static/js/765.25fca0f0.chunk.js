(self.webpackChunkstate_mgmt_examples=self.webpackChunkstate_mgmt_examples||[]).push([[765],{7025:function(e,t,n){"use strict";n.d(t,{Tt:function(){return _},ZP:function(){return v},Rf:function(){return E}});var r=n(7757),u=n.n(r),s=n(8926),i=n.n(s),c=n(4575),o=n.n(c),a=n(3913),l=n.n(a),f=n(9713),d=n.n(f),m=n(8903),h=n(7746),p=n.n(h),g=function(){function e(){var t=this;o()(this,e),d()(this,"requests",[]),d()(this,"subscribers",[]),d()(this,"getUsers",(function(){return t._fetch("/users")})),d()(this,"addUser",function(){var e=i()(u().mark((function e(n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.addRequest("POST /users"),e.next=3,(0,m.gw)(2e3);case 3:return t.addRequest("OK /users"),e.abrupt("return",{name:n,id:(0,m.EL)()});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d()(this,"removeUser",function(){var e=i()(u().mark((function e(n){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.addRequest("DELETE /users/".concat(n.id)),e.next=3,(0,m.gw)(2e3);case 3:t.addRequest("OK /users/".concat(n.id));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),d()(this,"clearRequests",(function(){t.requests=[],t.notifySubscribers()}))}var t,n;return l()(e,[{key:"_fetch",value:(n=i()(u().mark((function e(t){var n,r,s,c=this,o=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:{},r=n.delayMs,s=t.replace(this.baseUrl,""),this.addRequest("GET ".concat(s)),e.abrupt("return",this._mockFetch(t).then((function(e){if(!e.ok)throw new Error("Request to ".concat(t," failed with HTTP").concat(e.status));return e})).then((function(e){return e.json()})).then(function(){var e=i()(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,m.gw)(r||2e3);case 2:return c.addRequest("OK ".concat(s)),e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 5:case"end":return e.stop()}}),e,this)}))),function(e){return n.apply(this,arguments)})},{key:"subscribe",value:function(e){this.subscribers.push(e),e(this.reqests)}},{key:"unSubscribe",value:function(e){this.subscribers=this.subscribers.filter((function(t){return t!==e}))}},{key:"addRequest",value:function(e){this.requests.push(e),this.notifySubscribers()}},{key:"notifySubscribers",value:function(){var e=this;this.subscribers.forEach((function(t){return t(e.requests)}))}},{key:"_mockFetch",value:(t=i()(u().mark((function e(t){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=p()[t],e.abrupt("return",{ok:!!n,status:n?200:404,json:function(){return new Promise((function(e){return e(n)}))}});case 2:case"end":return e.stop()}}),e)}))),function(e){return t.apply(this,arguments)})}]),e}(),R=new g,v=R,E=R.getUsers,b=n(3038),y=n.n(b),S=n(7294),O=n(9434),U=n(5973),w=$RefreshSig$();function _(){w();var e=(0,S.useReducer)((function(e){return e+1}),0),t=y()(e,2)[1];(0,S.useEffect)((function(){return v.subscribe(t),function(){v.unSubscribe(t),v.clearRequests()}}),[]);var n=v.requests.length,r=n>10?n-10:0;return S.createElement("section",null,S.createElement(O.H3,{onClick:v.clearRequests,style:{cursor:"pointer"}},"API requests, click to reset"),S.createElement(U.a,null,n>10&&S.createElement(U.H,null,"..."),v.requests.slice(r).map((function(e,t){return S.createElement(U.H,{key:t},e)}))))}w(_,"UxqsAPbyOOo6jkpO1hjMpCydUI8="),$RefreshReg$(_,"ApiRequests")},7746:function(e){e.exports={"/users":[{id:1,name:"John Doe"},{id:2,name:"Jane Doe"}]}},3225:function(e,t,n){"use strict";n.d(t,{E:function(){return s}});var r=n(9163),u=n(9630),s=r.ZP.div.withConfig({displayName:"Containers__FlexContainer",componentId:"osdxjy-0"})(["display:flex;& > * + *{margin-left:5rem;border-left:1px dashed ",";padding-left:2rem;}"],u.A2)},6722:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r,u,s=n(7154),i=n.n(s),c=n(3038),o=n.n(c),a=n(6479),l=n.n(a),f=n(7294),d=n(9163),m=$RefreshSig$(),h=d.ZP.input.withConfig({displayName:"Input__StyledInput",componentId:"tgycnj-0"})(["margin-right:1rem;&[disabled]{text-decoration:line-through;}"]);function p(e){m();var t=e.children,n=e.disabled,r=l()(e,["children","disabled"]),u=(0,f.useState)(""),s=o()(u,2),c=s[0],a=s[1];return(0,f.useEffect)((function(){!n&&a("")}),[n]),f.createElement("div",null,f.createElement(h,i()({type:"text",disabled:n,value:c,onChange:function(e){return a(e.target.value)}},r)),t(c))}r=h,m(p,"aFIykL0K1j3we4veeaDstLdSuC8="),u=p,$RefreshReg$(r,"StyledInput"),$RefreshReg$(u,"Input")},448:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(3038),u=n.n(r),s=n(7294),i=n(9693),c=$RefreshSig$();function o(e){c();var t=e.initiallyMounted,n=e.children,r=(0,s.useReducer)((function(e){return!e}),!!t),o=u()(r,2),a=o[0],l=o[1];return s.createElement(s.Fragment,null,s.createElement(i.Z,{onClick:l},a?"Unmount":"Mount"),a&&n)}c(o,"SGBRyZ8qj4KP74qoZGVxnnGCTRI="),$RefreshReg$(o,"MountToggle")},8903:function(e,t,n){"use strict";n.d(t,{gw:function(){return r},EL:function(){return s},ZT:function(){return i}});var r=function(e){return new Promise((function(t){return setTimeout(t,e)}))},u=10,s=function(){return u++},i=function(){}},765:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return X}});var r=n(7294),u=n(7703),s=n(4890),i=n(3894),c=n(319),o=n.n(c),a=n(9713),l=n.n(a),f=n(7025),d="ON_USERS_LOAD_START",m="ON_USERS_LOAD_SUCCESS",h="ON_USERS_LOAD_ERROR",p="ON_USER_ADD_START",g="ON_USER_ADD_SUCCESS",R="ON_USER_ADD_ERROR",v="ON_USER_REMOVE_START",E="ON_USER_REMOVE_SUCCESS",b="ON_USER_REMOVE_ERROR";function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O,U,w={users:[],isLoading:!1,hasLoaded:!1,error:!1,isAdding:!1,errorAdding:!1,isRemoving:!1,errorRemoving:!1},_=n(5973),$=n(4494),j=$RefreshSig$(),x=U=j(r.memo(O=j((function(e){j();var t=e.name,n=e.id;(0,$.tc)("UserItem: ".concat(t));var s=(0,u.useDispatch)();return r.createElement(_.H,{onRemove:function(){var e;s((e={name:t,id:n},function(t){t({type:v}),f.ZP.removeUser(e).then((function(){return t({type:E,user:e})})).catch((function(){return t({type:b})}))}))}},t)}),"wd+XM1IGdpP37WUxZXwNSWwTecU=",!1,(function(){return[$.tc,u.useDispatch]}))),"wd+XM1IGdpP37WUxZXwNSWwTecU=",!1,(function(){return[$.tc,u.useDispatch]}));$RefreshReg$(O,"%default%$React.memo"),$RefreshReg$(U,"%default%");var k=n(2614),A=$RefreshSig$();function I(e){A();var t=e.users,n=e.isLoading,u=e.shouldFetch,s=e.error,i=e.loadUsers;return(0,$.tc)("UserList"),(0,r.useEffect)((function(){u&&i()}),[u,i]),n||u?r.createElement(k.a,null):s?r.createElement(k.j,null):r.createElement(_.a,null,t.map((function(e){return r.createElement(x,{key:e.id,id:e.id,name:e.name})})))}A(I,"ovg+HIuBbNIr+BlVzWBYeOp6iiE=",!1,(function(){return[$.tc]})),L=I;var L,q=(0,u.connect)((function(e){return{users:e.users,isLoading:e.isLoading,shouldFetch:!e.isLoading&&!e.hasLoaded,error:e.error}}),(function(e){return{loadUsers:function(){return e((function(e){e({type:d}),f.ZP.getUsers().then((function(t){return e({type:m,users:t})})).catch((function(){return e({type:h})}))}))}}}))(I);$RefreshReg$(L,"UserList");var D=n(9693),P=n(6722),N=$RefreshSig$();function Z(){N(),(0,$.tc)("UserInput");var e=(0,u.useSelector)((function(e){return e.isAdding})),t=(0,u.useDispatch)();return r.createElement(P.Z,{disabled:e},(function(n){return r.createElement(D.Z,{disabled:e,onClick:function(){return function(e){t(function(e){return function(t){t({type:p}),f.ZP.addUser(e).then((function(e){return t({type:g,user:e})})).catch((function(){return t({type:R})}))}}(e))}(n)}},"Add user")}))}N(Z,"c4KCzwajFrp9BUdA+aO9gmLYGZI=",!1,(function(){return[$.tc,u.useSelector,u.useDispatch]})),$RefreshReg$(Z,"UserInput");var T=$RefreshSig$();function C(){T(),(0,$.tc)("UserIndicators");var e=(0,u.useSelector)((function(e){return{isRemoving:e.isRemoving,errorRemoving:e.errorRemoving,isAdding:e.isAdding,errorAdding:e.errorAdding}})),t=e.isRemoving,n=e.errorRemoving,s=e.isAdding,i=e.errorAdding;return r.createElement(r.Fragment,null,t&&r.createElement(k.a,null,"Removing user..."),n&&r.createElement(k.j,null,"Failed to remove user"),s&&r.createElement(k.a,null,"Adding user..."),i&&r.createElement(k.j,null,"Failed to add user"))}T(C,"IIKXq6qZZf2d0p+D7A/hlDN440s=",!1,(function(){return[$.tc,u.useSelector]})),$RefreshReg$(C,"UserIndicators");var F=$RefreshSig$(),M=(0,s.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return S(S({},e),{},{isLoading:!0,hasLoaded:!0});case m:return S(S({},e),{},{isLoading:!1,users:t.users});case h:return S(S({},e),{},{isLoading:!1,error:!0});case p:return S(S({},e),{},{isAdding:!0,errorAdding:!1});case g:return S(S({},e),{},{isAdding:!1,users:[].concat(o()(e.users),[t.user])});case R:return S(S({},e),{},{isAdding:!1,errorAdding:!0});case v:return S(S({},e),{},{isRemoving:!0,errorRemoving:!1});case E:return S(S({},e),{},{users:e.users.filter((function(e){return e.id!==t.user.id})),isRemoving:!1});case b:return S(S({},e),{},{isRemoving:!1,errorRemoving:!0});default:return e}}),(0,s.applyMiddleware)(i.Z));function W(){return F(),(0,$.tc)("UserListWrapper"),r.createElement(u.Provider,{store:M},r.createElement(q,null),r.createElement(Z,null),r.createElement(C,null))}F(W,"1tajz0682eLN0aQrzvJO/S9cJ4U=",!1,(function(){return[$.tc]})),$RefreshReg$(W,"UsersWrapper");var G=n(5376),H=n(9434),K=n(448),V=n(9268),B=n(3225);function X(){return r.createElement(r.Fragment,null,r.createElement(H.H1,null,"Redux Thunk"),r.createElement(D._,null,r.createElement(V.Ou,{text:"actions.js",fileName:"components/redux-thunk/actions.js"}),r.createElement(V.Ou,{text:"reducer.js",fileName:"components/redux-thunk/reducer.js"}),r.createElement(V.Ou,{text:"UsersWrapper.js",fileName:"components/redux-thunk/UsersWrapper.js"}),r.createElement(V.Ou,{text:"UserList.js",fileName:"components/redux-thunk/UserList.js"}),r.createElement(V.Ou,{text:"UserInput.js",fileName:"components/redux-thunk/UserInput.js"}),r.createElement(V.Ou,{text:"UserItem.js",fileName:"components/redux-thunk/UserItem.js"}),r.createElement(V.Ou,{text:"UserIndicators.js",fileName:"components/redux-thunk/UserIndicators.js"})),r.createElement(K.Z,null,r.createElement(W,null)),r.createElement(B.E,null,r.createElement(G.Z,null),r.createElement(f.Tt,null)))}$RefreshReg$(X,"ReduxThunkView")},3894:function(e,t){"use strict";function n(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(u){return"function"==typeof u?u(n,r,e):t(u)}}}}var r=n();r.withExtraArgument=n,t.Z=r}}]);