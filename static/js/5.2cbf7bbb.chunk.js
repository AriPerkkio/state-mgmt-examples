(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{275:function(e,t,n){e.exports=n(276)},276:function(e,t,n){var o=function(e){"use strict";var t=Object.prototype,n=t.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function i(e,t,n,o){var r=t&&t.prototype instanceof l?t:l,a=Object.create(r.prototype),s=new R(o||[]);return a._invoke=function(e,t,n){var o="suspendedStart";return function(r,a){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===r)throw a;return E()}for(n.method=r,n.arg=a;;){var s=n.delegate;if(s){var i=S(s,n);if(i){if(i===u)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===o)throw o="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o="executing";var l=c(e,t,n);if("normal"===l.type){if(o=n.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o="completed",n.method="throw",n.arg=l.arg)}}}(e,n,s),a}function c(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=i;var u={};function l(){}function d(){}function f(){}var p={};p[r]=function(){return this};var h=Object.getPrototypeOf,y=h&&h(h(T([])));y&&y!==t&&n.call(y,r)&&(p=y);var v=f.prototype=l.prototype=Object.create(p);function m(e){["next","throw","return"].forEach((function(t){e[t]=function(e){return this._invoke(t,e)}}))}function b(e,t){var o;this._invoke=function(r,a){function s(){return new t((function(o,s){!function o(r,a,s,i){var u=c(e[r],e,a);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==typeof d&&n.call(d,"__await")?t.resolve(d.__await).then((function(e){o("next",e,s,i)}),(function(e){o("throw",e,s,i)})):t.resolve(d).then((function(e){l.value=e,s(l)}),(function(e){return o("throw",e,s,i)}))}i(u.arg)}(r,a,o,s)}))}return o=o?o.then(s,s):s()}}function S(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,S(e,t),"throw"===t.method))return u;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var o=c(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,u;var r=o.arg;return r?r.done?(t[e.resultName]=r.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,u):r:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,u)}function g(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function w(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function R(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(g,this),this.reset(!0)}function T(e){if(e){var t=e[r];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function t(){for(;++o<e.length;)if(n.call(e,o))return t.value=e[o],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:E}}function E(){return{value:void 0,done:!0}}return d.prototype=v.constructor=f,f.constructor=d,f[s]=d.displayName="GeneratorFunction",e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===d||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,s in e||(e[s]="GeneratorFunction")),e.prototype=Object.create(v),e},e.awrap=function(e){return{__await:e}},m(b.prototype),b.prototype[a]=function(){return this},e.AsyncIterator=b,e.async=function(t,n,o,r,a){void 0===a&&(a=Promise);var s=new b(i(t,n,o,r),a);return e.isGeneratorFunction(n)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},m(v),v[s]="Generator",v[r]=function(){return this},v.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var o=t.pop();if(o in e)return n.value=o,n.done=!1,n}return n.done=!0,n}},e.values=T,R.prototype={constructor:R,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function o(n,o){return s.type="throw",s.arg=e,t.next=n,o&&(t.method="next",t.arg=void 0),!!o}for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r],s=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var i=n.call(a,"catchLoc"),c=n.call(a,"finallyLoc");if(i&&c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(i){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o];if(r.tryLoc<=this.prev&&n.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var a=r;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var s=a?a.completion:{};return s.type=e,s.arg=t,a?(this.method="next",this.next=a.finallyLoc,u):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),u},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),w(n),u}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var o=n.completion;if("throw"===o.type){var r=o.arg;w(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:T(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}(e.exports);try{regeneratorRuntime=o}catch(e){Function("r","regeneratorRuntime = r")(o)}},277:function(e,t){function n(e,t,n,o,r,a,s){try{var i=e[a](s),c=i.value}catch(e){return void n(e)}i.done?t(c):Promise.resolve(c).then(o,r)}e.exports=function(e){return function(){var t=this,o=arguments;return new Promise((function(r,a){var s=e.apply(t,o);function i(e){n(s,r,a,i,c,"next",e)}function c(e){n(s,r,a,i,c,"throw",e)}i(void 0)}))}}},282:function(e,t,n){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(0)),a=o(n(39)),s={setByAddingToSet:function(e,t){const n=new Set(e);return n.add(t),n},setByDeletingFromSet:function(e,t){const n=new Set(e);return n.delete(t),n},mapBySettingInMap:function(e,t,n){const o=new Map(e);return o.set(t,n),o},mapByUpdatingInMap:function(e,t,n){const o=new Map(e);return o.set(t,n(o.get(t))),o},mapByDeletingFromMap:function(e,t){const n=new Map(e);return n.delete(t),n}},i=function(e){return!!e&&"function"==typeof e.then},c=function e(t){if("object"==typeof t&&!function(e){if(null===e||"object"!=typeof e)return!0;switch(typeof e.$$typeof){case"symbol":case"number":return!0}return null!=e["@@__IMMUTABLE_ITERABLE__@@"]||null!=e["@@__IMMUTABLE_KEYED__@@"]||null!=e["@@__IMMUTABLE_INDEXED__@@"]||null!=e["@@__IMMUTABLE_ORDERED__@@"]||null!=e["@@__IMMUTABLE_RECORD__@@"]||!!function(e){var t,n;const o=null!==(n=(null!=e?null!==(t=e.ownerDocument)&&void 0!==t?t:e:document).defaultView)&&void 0!==n?n:window;return!(null==e||!("function"==typeof o.Node?e instanceof o.Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}(e)||!!i(e)}(t)){Object.freeze(t);for(const n in t)t.hasOwnProperty(n)&&e(t[n]);Object.seal(t)}},u=function(e,t){if(null!=e)return e;throw new Error(null!=t?t:"Got unexpected null or undefined")};const l={getValue(){if("hasValue"!==this.state)throw this.contents;return this.contents},toPromise(){return"hasValue"===this.state?Promise.resolve(this.contents):"hasError"===this.state?Promise.reject(this.contents):this.contents},valueMaybe(){return"hasValue"===this.state?this.contents:void 0},valueOrThrow(){if("hasValue"!==this.state)throw new Error(`Loadable expected value, but in "${this.state}" state`);return this.contents},errorMaybe(){return"hasError"===this.state?this.contents:void 0},errorOrThrow(){if("hasError"!==this.state)throw new Error(`Loadable expected error, but in "${this.state}" state`);return this.contents},promiseMaybe(){return"loading"===this.state?this.contents:void 0},promiseOrThrow(){if("loading"!==this.state)throw new Error(`Loadable expected promise, but in "${this.state}" state`);return this.contents},map(e){if("hasError"===this.state)return this;if("hasValue"===this.state)try{const t=e(this.contents);return i(t)?p(t):d(t)}catch(t){return i(t)?p(t.next(()=>e(this.contents))):f(t)}if("loading"===this.state)return p(this.contents.then(e).catch(t=>{if(i(t))return t.then(()=>e(this.contents));throw t}));throw new Error("Invalid Loadable state")}};function d(e){return Object.freeze({state:"hasValue",contents:e,...l})}function f(e){return Object.freeze({state:"hasError",contents:e,...l})}function p(e){return Object.freeze({state:"loading",contents:e,...l})}var h={loadableWithValue:d,loadableWithError:f,loadableWithPromise:p,loadableLoading:function(){return p(new Promise(()=>{}))},loadableAll:function(e){return e.every(e=>"hasValue"===e.state)?d(e.map(e=>e.contents)):e.some(e=>"hasError"===e.state)?f(u(e.find(e=>"hasError"===e.state),"Invalid loadable passed to loadableAll").contents):p(Promise.all(e.map(e=>e.contents)))}};class y{constructor(e){var t;t=void 0,"key"in this?Object.defineProperty(this,"key",{value:t,enumerable:!0,configurable:!0,writable:!0}):this.key=t,this.key=e}}var v=y,m=class extends y{},b=class extends y{},S=Object.freeze({__proto__:null,AbstractRecoilValue:v,RecoilState:m,RecoilValueReadOnly:b});class g{}const w=new g;class R extends Error{constructor(e){super(`Tried to set the value of Recoil selector ${e} using an updater function, but it is an async selector in a pending or error state; this is not supported.`)}}const T=new Map;class E extends Error{}var A={nodes:T,registerNode:function(e){return T.has(e.key)&&e.key,T.set(e.key,e),null==e.set?new S.RecoilValueReadOnly(e.key):new S.RecoilState(e.key)},getNode:function(e){const t=T.get(e);if(null==t)throw new E(`Missing definition for RecoilValue: "${e}""`);return t},NodeMissingError:E,DefaultValue:g,DEFAULT_VALUE:w,RecoilValueNotReady:R},V=function(e,t,n){return n()},L=function(e){return e};const{mapByDeletingFromMap:_,mapBySettingInMap:N,mapByUpdatingInMap:M,setByAddingToSet:k}=s,{getNode:x}=A,B=Object.freeze(new Map),U=Object.freeze(new Set);class O extends Error{}function C(e,t,n){return x(n).get(e,t)}let D=0;var j={getNodeLoadable:C,peekNodeLoadable:function(e,t,n){return C(e,t,n)[1]},setNodeValue:function(e,t,n,o){const r=x(n);if(null==r.set)throw new O("Attempt to set read-only RecoilValue: "+n);const[a,s]=r.set(e,t,o);return[a,s]},setUnvalidatedAtomValue:function(e,t,n){return{...e,atomValues:_(e.atomValues,t),nonvalidatedAtoms:N(e.nonvalidatedAtoms,t,n),dirtyAtoms:k(e.dirtyAtoms,t)}},subscribeComponentToNode:function(e,t,n){const o=D++;return[{...e,nodeToComponentSubscriptions:M(e.nodeToComponentSubscriptions,t,e=>N(null!=e?e:B,o,["TODO debug name",n]))},function(e){return{...e,nodeToComponentSubscriptions:M(e.nodeToComponentSubscriptions,t,e=>_(null!=e?e:B,o))}}]},fireNodeSubscriptions:function(e,t,n){var o;const r="enqueue"===n&&null!==(o=e.getState().nextTree)&&void 0!==o?o:e.getState().currentTree,a=function(e,t){const n=new Set,o=new Set,r=Array.from(t);for(let t=r.pop();t;t=r.pop()){var a;n.add(t),o.add(t);const s=null!==(a=e.nodeToNodeSubscriptions.get(t))&&void 0!==a?a:U;for(const e of s)o.has(e)||r.push(e)}return n}(r,t);for(const t of a){var s;(null!==(s=r.nodeToComponentSubscriptions.get(t))&&void 0!==s?s:[]).forEach(([t,o])=>{"enqueue"===n?e.getState().queuedComponentCallbacks.push(o):o(r)})}V("value became available, waking components",Array.from(t).join(", "),()=>{const t=e.getState().suspendedComponentResolvers;t.forEach(e=>e()),t.clear()})},detectCircularDependencies:function e(t,n){if(!n.length)return;const o=n[n.length-1],r=t.nodeToNodeSubscriptions.get(o);if(!(null==r?void 0:r.size))return;const a=n[0];if(r.has(a))throw new Error("Recoil selector has circular dependencies: "+[...n,a].reverse().join(" → "));for(const o of r)e(t,[...n,o])}};const{getNodeLoadable:I,peekNodeLoadable:P,setNodeValue:F,setUnvalidatedAtomValue:z,subscribeComponentToNode:G}=j,{RecoilValue:q,AbstractRecoilValue:W,RecoilValueReadOnly:$,RecoilState:Y}=S;var J={AbstractRecoilValue:W,RecoilState:Y,peekRecoilValueAsLoadable:function(e,{key:t}){const n=e.getState().currentTree;return P(e,n,t)},getRecoilValueAsLoadable:function(e,{key:t}){let n;return V("get RecoilValue",t,()=>e.replaceState(L(o=>{const[r,a]=I(e,o,t);return n=a,r}))),n},setRecoilValue:function(e,{key:t},n){V("set RecoilValue",t,()=>e.replaceState(L(o=>{const[r,a]=F(e,o,t,n);return e.fireNodeSubscriptions(a,"enqueue"),r})))},setUnvalidatedRecoilValue:function(e,{key:t},n){V("set unvalidated persisted atom",t,()=>e.replaceState(L(o=>{const r=z(o,t,n);return e.fireNodeSubscriptions(new Set([t]),"enqueue"),r})))},subscribeToRecoilValue:function(e,{key:t},n){let o,r;return V("subscribe component to RecoilValue",t,()=>e.replaceState(L(e=>([o,r]=G(e,t,n),o)))),{release:e=>e.replaceState(r)}},isRecoilValue:function(e){return e instanceof Y||e instanceof $}};const{mapByDeletingFromMap:K,mapBySettingInMap:X,setByAddingToSet:H}=s,{loadableWithValue:Q}=h,{DEFAULT_VALUE:Z,DefaultValue:ee,registerNode:te}=A,{isRecoilValue:ne}=J;var oe=function e(t){const{default:n,...o}=t;return ne(n)||i(n)?function(t){const n=e({...t,default:Z,persistence_UNSTABLE:void 0===t.persistence_UNSTABLE?void 0:{...t.persistence_UNSTABLE,validator:e=>e instanceof ee?e:u(t.persistence_UNSTABLE).validator(e,Z)}});return selector({key:t.key+"__withFallback",get:({get:e})=>{const o=e(n);return o instanceof ee?t.default:o},set:({set:e},t)=>e(n,t),dangerouslyAllowMutability:t.dangerouslyAllowMutability})}({...o,default:n}):function(e){const{key:t,persistence_UNSTABLE:n}=e;return te({key:t,options:e,get:(o,r)=>{if(r.atomValues.has(t))return[r,u(r.atomValues.get(t))];if(r.nonvalidatedAtoms.has(t)){if(null==n)return[r,Q(e.default)];const o=r.nonvalidatedAtoms.get(t),a=n.validator(o,Z);return a instanceof ee?[{...r,nonvalidatedAtoms:K(r.nonvalidatedAtoms,t)},Q(e.default)]:[{...r,atomValues:X(r.atomValues,t,Q(a)),nonvalidatedAtoms:K(r.nonvalidatedAtoms,t)},Q(a)]}return[r,Q(e.default)]},set:(n,o,r)=>(!0!==e.dangerouslyAllowMutability&&c(r),[{...o,dirtyAtoms:H(o.dirtyAtoms,t),atomValues:r instanceof ee?K(o.atomValues,t):X(o.atomValues,t,Q(r)),nonvalidatedAtoms:K(o.nonvalidatedAtoms,t)},new Set([t])])})}({...o,default:n})},re=function(e,t){t()};const{useContext:ae,useEffect:se,useRef:ie,useState:ce}=r,{fireNodeSubscriptions:ue,setNodeValue:le,setUnvalidatedAtomValue:de}=j;function fe(){throw new Error("This component must be used inside a <RecoilRoot> component.")}const pe=Object.freeze({getState:fe,replaceState:fe,subscribeToTransactions:fe,addTransactionMetadata:fe,fireNodeSubscriptions:fe});function he(e){null===e.nextTree&&(e.nextTree={...e.currentTree,dirtyAtoms:new Set,transactionMetadata:{}})}const ye=r.createContext({current:pe}),ve=()=>ae(ye);function me(e){const t=ve(),[n,o]=ce([]);return e.setNotifyBatcherOfChange(()=>o({})),se(()=>{re("Batcher",()=>{const e=t.current.getState(),{currentTree:n,nextTree:o}=e;null!==o&&(o.dirtyAtoms.size&&e.transactionSubscriptions.forEach(e=>e(t.current,n)),e.queuedComponentCallbacks.forEach(e=>e(o)),e.queuedComponentCallbacks.splice(0,e.queuedComponentCallbacks.length),e.currentTree=o,e.nextTree=null)})}),null}let be=0;var Se={useStoreRef:ve,RecoilRoot:function({initializeState:e,children:t}){let n;const o=ie(null),a={getState:()=>n.current,replaceState:e=>{const t=s.current.getState();he(t);const n=u(t.nextTree),r=e(n);r!==n&&(t.nextTree=r,u(o.current)())},subscribeToTransactions:e=>{const t=be++;return s.current.getState().transactionSubscriptions.set(t,e),{release:()=>{s.current.getState().transactionSubscriptions.delete(t)}}},addTransactionMetadata:e=>{he(s.current.getState());for(const t of Object.keys(e))u(s.current.getState().nextTree).transactionMetadata[t]=e[t]},fireNodeSubscriptions:function(e,t){ue(s.current,e,t)}},s=ie(a);return n=ie(function(e,t){const n={currentTree:{isSnapshot:!1,transactionMetadata:{},atomValues:new Map,nonvalidatedAtoms:new Map,dirtyAtoms:new Set,nodeDeps:new Map,nodeToNodeSubscriptions:new Map,nodeToComponentSubscriptions:new Map},nextTree:null,transactionSubscriptions:new Map,queuedComponentCallbacks:[],suspendedComponentResolvers:new Set};return t&&t({set:(t,o)=>{n.currentTree=le(e,n.currentTree,t.key,o)[0]},setUnvalidatedAtomValues:e=>{e.forEach((e,t)=>{n.currentTree=de(n.currentTree,t,e)})}}),n}(a,e)),r.createElement(ye.Provider,{value:s},r.createElement(me,{setNotifyBatcherOfChange:function(e){o.current=e}}),t)}},ge=function(e,...t){const n=new Set;e:for(const o of e){for(const e of t)if(e.has(o))continue e;n.add(o)}return n},we=function(e,t){const n=new Map;return e.forEach((e,o)=>{n.set(o,t(e,o))}),n};const{useCallback:Re,useEffect:Te,useMemo:Ee,useRef:Ae,useState:Ve}=r,{setByAddingToSet:Le}=s,{getNodeLoadable:_e,peekNodeLoadable:Ne,setNodeValue:Me}=j,{DEFAULT_VALUE:ke,RecoilValueNotReady:xe,getNode:Be,nodes:Ue}=A,{useStoreRef:Oe}=Se,{AbstractRecoilValue:Ce,getRecoilValueAsLoadable:De,setRecoilValue:je,setUnvalidatedRecoilValue:Ie,subscribeToRecoilValue:Pe}=J;function Fe(e,t){return{isSnapshot:t.isSnapshot,transactionMetadata:{...e.transactionMetadata},atomValues:new Map(e.atomValues),nonvalidatedAtoms:new Map(e.nonvalidatedAtoms),dirtyAtoms:new Set(e.dirtyAtoms),nodeDeps:new Map(e.nodeDeps),nodeToNodeSubscriptions:we(e.nodeToNodeSubscriptions,e=>new Set(e)),nodeToComponentSubscriptions:we(e.nodeToComponentSubscriptions,e=>new Map(e))}}function ze(e,t,n,o){if("function"==typeof o){const r=Ne(e,t,n.key);if("loading"===r.state)throw new xe(n.key);if("hasError"===r.state)throw r.contents;return o(r.contents)}return o}function Ge(){const e=Oe(),[t,n]=Ve([]),o=Ae(new Set);o.current=new Set;const r=Ae(new Set),a=Ae(new Map),s=Re(t=>{const n=a.current.get(t);n&&(n.release(e.current),a.current.delete(t))},[e,a]);return Te(()=>{const t=e.current;function i(e,t){a.current.has(t)&&n([])}ge(o.current,r.current).forEach(e=>{if(a.current.has(e))return;const n=Pe(t,new Ce(e),t=>{V("RecoilValue subscription fired",e,()=>{i(0,e)})});a.current.set(e,n),V("initial update on subscribing",e,()=>{i(t.getState(),e)})}),ge(r.current,o.current).forEach(e=>{s(e)}),r.current=o.current}),Te(()=>{const e=a.current;return()=>e.forEach((e,t)=>s(t))},[s]),Ee(()=>{function t(t){return n=>{var o;const r=e.current.getState(),a=ze(e.current,null!==(o=r.nextTree)&&void 0!==o?o:r.currentTree,t,n);je(e.current,t,a)}}function n(t){return o.current.has(t.key)||(o.current=Le(o.current,t.key)),De(e.current,t)}function r(t){return function(e,t,n){if("hasValue"===e.state)return e.contents;if("loading"===e.state)throw new Promise(e=>{n.current.getState().suspendedComponentResolvers.add(e)});throw"hasError"===e.state?e.contents:new Error(`Invalid value of loadable atom "${t.key}"`)}(n(t),t,e)}return{getRecoilValue:r,getRecoilValueLoadable:n,getRecoilState:function(e){return[r(e),t(e)]},getRecoilStateLoadable:function(e){return[n(e),t(e)]},getSetRecoilState:t,getResetRecoilState:function(t){return()=>je(e.current,t,ke)}}},[o,e])}function qe(e){const t=Oe();Te(()=>t.current.subscribeToTransactions(e).release,[e,t])}function We(e){const t=e.atomValues,n=we(function(e,t){const n=new Map;for(const[o,r]of e)t(r,o)&&n.set(o,r);return n}(t,(e,t)=>{var n;const o=null===(n=Be(t).options)||void 0===n?void 0:n.persistence_UNSTABLE;return null!=o&&"none"!==o.type&&"hasValue"===e.state}),e=>e.contents);return function(...e){const t=new Map;for(let n=0;n<e.length;n++){const o=e[n].keys();let r;for(;!(r=o.next()).done;)t.set(r.value,e[n].get(r.value))}return t}(e.nonvalidatedAtoms,n)}class $e{}const Ye=new $e;var Je={useRecoilCallback:function(e,t){const n=Oe();return Re((...t)=>{let o=Fe(n.current.getState().currentTree,{isSnapshot:!0});function r(e){let t;return[o,t]=_e(n.current,o,e.key),t}function s(e){return r(e).toPromise()}function i(e,t){const r=ze(n.current,o,e,t);je(n.current,e,r)}function c(e){je(n.current,e,ke)}let u=Ye;return a.unstable_batchedUpdates(()=>{u=e({getPromise:s,getLoadable:r,set:i,reset:c},...t)}),function(e,t){if(!e)throw new Error(t)}(!(u instanceof $e),"unstable_batchedUpdates should return immediately"),u},null!=t?[...t,n]:void 0)},useRecoilValue:function(e){return Ge().getRecoilValue(e)},useRecoilValueLoadable:function(e){return Ge().getRecoilValueLoadable(e)},useRecoilState:function(e){const t=Ge(),[n]=t.getRecoilState(e);return[n,Re(t.getSetRecoilState(e),[e])]},useRecoilStateLoadable:function(e){const t=Ge(),[n]=t.getRecoilStateLoadable(e);return[n,Re(t.getSetRecoilState(e),[e])]},useSetRecoilState:function(e){return Re(Ge().getSetRecoilState(e),[e])},useResetRecoilState:function(e){return Re(Ge().getResetRecoilState(e),[e])},useRecoilInterface:Ge,useTransactionSubscription:qe,useSnapshotWithStateChange:function(e){const t=Oe();let n=function(){const[e,t]=Ve(0);return qe(Re(()=>t(e=>e+1),[])),Fe(Oe().current.getState().currentTree,{isSnapshot:!0})}();e(({key:e},o)=>{[n]=Me(t.current,n,e,Ne(t.current,n,e).map(o))});const o=we(n.atomValues,e=>e.contents),r=function(e,...t){const n=new Set;e:for(const o of e){for(const e of t)if(!e.has(o))continue e;n.add(o)}return n}(n.dirtyAtoms,new Set(o.keys()));return{atomValues:o,updatedAtoms:r}},useTransactionObservation:function(e){qe(Re((t,n)=>{let o=t.getState().nextTree;o||(o=t.getState().currentTree);const r=We(o),a=We(n),s=we(Ue,e=>{var t,n,o,r,a,s;return{persistence_UNSTABLE:{type:null!==(t=null===(n=e.options)||void 0===n||null===(o=n.persistence_UNSTABLE)||void 0===o?void 0:o.type)&&void 0!==t?t:"none",backButton:null!==(r=null===(a=e.options)||void 0===a||null===(s=a.persistence_UNSTABLE)||void 0===s?void 0:s.backButton)&&void 0!==r&&r}}}),i=new Set(o.dirtyAtoms);e({atomValues:r,previousAtomValues:a,atomInfo:s,modifiedAtoms:i,transactionMetadata:{...o.transactionMetadata}})},[e]))},useGoToSnapshot:function(){const e=Oe();return t=>{a.unstable_batchedUpdates(()=>{t.updatedAtoms.forEach(n=>{je(e.current,new Ce(n),t.atomValues.get(n))})})}},useSetUnvalidatedAtomValues:function(){const e=Oe();return(t,n={})=>{a.unstable_batchedUpdates(()=>{e.current.addTransactionMetadata(n),t.forEach((t,n)=>Ie(e.current,new Ce(n),t))})}}};const Ke=Symbol("ArrayKeyedMap"),Xe=new Map;class He{constructor(e){if(this._base=new Map,e instanceof He)for(const[t,n]of e.entries())this.set(t,n);else if(e)for(const[t,n]of e)this.set(t,n);return this}get(e){const t=Array.isArray(e)?e:[e];let n=this._base;return t.forEach(e=>{var t;n=null!==(t=n.get(e))&&void 0!==t?t:Xe}),void 0===n?void 0:n.get(Ke)}set(e,t){const n=Array.isArray(e)?e:[e];let o=this._base,r=o;return n.forEach(e=>{r=o.get(e),r||(r=new Map,o.set(e,r)),o=r}),r.set(Ke,t),this}delete(e){const t=Array.isArray(e)?e:[e];let n=this._base,o=n;return t.forEach(e=>{o=n.get(e),o||(o=new Map,n.set(e,o)),n=o}),o.delete(Ke),this}entries(){const e=[];return function t(n,o){n.forEach((n,r)=>{r===Ke?e.push([o,n]):t(n,o.concat(r))})}(this._base,[]),e.values()}toBuiltInMap(){return new Map(this.entries())}}var Qe=He;Object.freeze(new Set);const{mapBySettingInMap:Ze,mapByUpdatingInMap:et,setByAddingToSet:tt,setByDeletingFromSet:nt}=s,{detectCircularDependencies:ot,getNodeLoadable:rt,setNodeValue:at}=j,{loadableWithError:st,loadableWithPromise:it,loadableWithValue:ct}=h,{DEFAULT_VALUE:ut,RecoilValueNotReady:lt,registerNode:dt}=A,{startPerfBlock:ft}={startPerfBlock:function(e){return()=>{}}},{isRecoilValue:pt}=J,ht=Object.freeze(new Set);function yt(e){const t=[];for(const n of Array.from(e.keys()).sort()){const o=u(e.get(n));t.push(n),t.push(o.contents)}return t}const{useRecoilCallback:vt,useRecoilState:mt,useRecoilStateLoadable:bt,useRecoilValue:St,useRecoilValueLoadable:gt,useResetRecoilState:wt,useSetRecoilState:Rt,useSetUnvalidatedAtomValues:Tt,useTransactionObservation:Et,useTransactionSubscription:At}=Je,{DefaultValue:Vt}=A,{RecoilRoot:Lt}=Se,{isRecoilValue:_t}=J;var Nt={DefaultValue:Vt,RecoilRoot:Lt,atom:oe,selector:function(e){const{key:t,get:n,cacheImplementation_UNSTABLE:o}=e,r=null!=e.set?e.set:void 0;let a=null!=o?o:new Qe;function s(o,r){var u;let l=r;const d=null!==(u=r.nodeDeps.get(t))&&void 0!==u?u:ht,f=yt(new Map(Array.from(d).sort().map(e=>{const[t,n]=rt(o,l,e);return l=t,[e,n]}))),p=a.get(f);if(null!=p)return[l,p];const[h,y,v]=function(e,o){var r;const[a,c,u]=function(e,o){const r=ft(t);let a=o;const c=new Map;function u({key:t}){let n;if([a,n]=rt(e,o,t),c.set(t,n),"hasValue"===n.state)return n.contents;throw n.contents}try{const e=n({get:u}),t=pt(e)?u(e):e,o=i(t)?it(t.finally(r)):(r(),ct(t));return[a,o,c]}catch(t){const n=i(t)?it(t.then(()=>{let t=st(new Error("Internal Recoil Selector Error"));if(e.replaceState(n=>{let o;return[o,t]=s(e,n),o}),"hasError"===t.state)throw t.contents;return t.contents}).finally(r)):(r(),st(t));return[a,n,c]}}(e,o);let l=a;const d=null!==(r=o.nodeDeps.get(t))&&void 0!==r?r:ht,f=new Set(u.keys());l=function(e,t){return e.size===t.size&&function(e,t,n){const o=e.entries();let r=o.next();for(;!r.done;){const a=r.value;if(!t.call(n,a[1],a[0],e))return!1;r=o.next()}return!0}(e,e=>t.has(e))}(d,f)?l:{...l,nodeDeps:Ze(l.nodeDeps,t,f)};const p=ge(f,d),h=ge(d,f);for(const e of p)l={...l,nodeToNodeSubscriptions:et(l.nodeToNodeSubscriptions,e,e=>tt(null!=e?e:ht,t))};for(const e of h)l={...l,nodeToNodeSubscriptions:et(l.nodeToNodeSubscriptions,e,e=>nt(null!=e?e:ht,t))};return[l,c,u]}(o,l);l=h;const m=yt(v);return function(n,o,r){"loading"!==r.state?1==!e.dangerouslyAllowMutability&&c(r.contents):r.contents.then(r=>(1==!e.dangerouslyAllowMutability&&c(r),a=a.set(o,ct(r)),n.fireNodeSubscriptions(new Set([t]),"now"),r)).catch(r=>(i(r)||(1==!e.dangerouslyAllowMutability&&c(r),a=a.set(o,st(r)),n.fireNodeSubscriptions(new Set([t]),"now")),r)),a=a.set(o,r)}(o,m,y),[l,y]}function u(e,t){return s(e,t)}return dt(null!=r?{key:t,options:e,get:u,set:function(e,t,n){let o=t;const a=new Set;function s({key:t}){const[n,r]=rt(e,o,t);if(o=n,"hasValue"===r.state)return r.contents;throw"loading"===r.state?new lt(t):r.contents}function i(t,n){const r="function"==typeof n?n(s(t)):n;let i;[o,i]=at(e,o,t.key,r),i.forEach(e=>a.add(e))}return r({set:i,get:s,reset:function(e){i(e,ut)}},n),[o,a]}}:{key:t,options:e,get:u})},useRecoilValue:St,useRecoilValueLoadable:gt,useRecoilState:mt,useRecoilStateLoadable:bt,useSetRecoilState:Rt,useResetRecoilState:wt,useRecoilCallback:vt,useTransactionObservation_UNSTABLE:Et,useTransactionSubscription_UNSTABLE:At,useSetUnvalidatedAtomValues_UNSTABLE:Tt,isRecoilValue:_t},Mt=Nt.DefaultValue,kt=Nt.RecoilRoot,xt=Nt.atom,Bt=Nt.selector,Ut=Nt.useRecoilValue,Ot=Nt.useRecoilValueLoadable,Ct=Nt.useRecoilState,Dt=Nt.useRecoilStateLoadable,jt=Nt.useSetRecoilState,It=Nt.useResetRecoilState,Pt=Nt.useRecoilCallback,Ft=Nt.useTransactionObservation_UNSTABLE,zt=Nt.useTransactionSubscription_UNSTABLE,Gt=Nt.useSetUnvalidatedAtomValues_UNSTABLE,qt=Nt.isRecoilValue;t.DefaultValue=Mt,t.RecoilRoot=kt,t.atom=xt,t.default=Nt,t.isRecoilValue=qt,t.selector=Bt,t.useRecoilCallback=Pt,t.useRecoilState=Ct,t.useRecoilStateLoadable=Dt,t.useRecoilValue=Ut,t.useRecoilValueLoadable=Ot,t.useResetRecoilState=It,t.useSetRecoilState=jt,t.useSetUnvalidatedAtomValues_UNSTABLE=Gt,t.useTransactionObservation_UNSTABLE=Ft,t.useTransactionSubscription_UNSTABLE=zt}}]);