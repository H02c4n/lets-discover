(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,r){t.exports=r(30)},24:function(t,e,r){},30:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n),a=r(13),i=r.n(a),c=(r(24),r(7)),u=r(8),l=r(3),s=r(1);function f(t){var e=t.itemDetails;return e.preview,o.a.createElement("div",{className:"about-text bg-white p-4 p-lg-5 my-lg-5"},o.a.createElement("div",{className:"row mb-4"},o.a.createElement("div",{className:"col-12"},o.a.createElement("img",{className:"img-fluid",src:e.preview?e.preview.source:"",alt:""}))),o.a.createElement("h1",{className:"mb-3"},e.name?e.name:""),o.a.createElement("p",null,e.wikipedia_extracts?e.wikipedia_extracts.text:""))}var h=r(33),p=r(32);function v(){v=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var s={};function f(){}function h(){}function p(){}var m={};c(m,o,function(){return this});var d=Object.getPrototypeOf,y=d&&d(d(N([])));y&&y!==e&&r.call(y,o)&&(m=y);var g=p.prototype=f.prototype=Object.create(m);function w(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var n;this._invoke=function(o,a){function i(){return new e(function(n,i){!function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){s.value=t,i(s)},function(t){return n("throw",t,i,c)})}c(u.arg)}(o,a,n,i)})}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function N(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=p,c(g,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},w(E.prototype),c(E.prototype,a,function(){return this}),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(g),c(g,i,"Generator"),c(g,o,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}var m=function(t){var e=t.places,r=t.nextFive,a=t.prevFive,i=t.offset,u=Object(n.useState)([]),l=Object(s.a)(u,2),m=l[0],d=l[1];return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement(h.a,{as:"ul"},e.map(function(t){return o.a.createElement(h.a.Item,{className:"hover",as:"li",onClick:function(){return e=t.xid,void function(){var t=Object(c.a)(v().mark(function t(e){var r,n,o;return v().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r="https://api.opentripmap.com/0.1/en/places/xid/".concat(e,"?apikey=5ae2e3f221c38a28845f05b67086197a9b692fe955df4ed765b9213a\n    "),t.next=3,fetch(r);case 3:return n=t.sent,t.next=6,n.json();case 6:o=t.sent,d(o);case 8:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()(e);var e},key:t.xid},t.name)})),e.length>0?o.a.createElement("div",{className:"d-flex justify-content-evenly mt-3"},i>=5?o.a.createElement(p.a,{onClick:a,className:"btn btn-info w-25"},"Prev"):"",5===e.length?o.a.createElement(p.a,{onClick:r,className:"btn btn-info w-25"},"Next"):""):""),o.a.createElement("div",{className:"col-md-6"},o.a.createElement(f,{itemDetails:m})))};function d(t){var e=t.city;return o.a.createElement("h1",{className:"text-center"},"Let's ",o.a.createElement("span",{className:"text-info"},"Discover")," The",o.a.createElement("span",{className:"text-info"}," ",e?e.toUpperCase():"World"," "),"Together")}function y(t){var e=t.numOfPlaces,r=t.city;return o.a.createElement(o.a.Fragment,null,r.name?o.a.createElement("div",{id:"info",className:"alert alert-primary"},o.a.createElement("p",null,r.name,", ",r.country),o.a.createElement("p",null,e," objects with description in a 1km radius")):"")}function g(){g=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",a=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(k){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,a=Object.create(o.prototype),i=new j(n||[]);return a._invoke=function(t,e,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=b(i,r);if(c){if(c===s)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}t.wrap=u;var s={};function f(){}function h(){}function p(){}var v={};c(v,o,function(){return this});var m=Object.getPrototypeOf,d=m&&m(m(N([])));d&&d!==e&&r.call(d,o)&&(v=d);var y=p.prototype=f.prototype=Object.create(v);function w(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function E(t,e){var n;this._invoke=function(o,a){function i(){return new e(function(n,i){!function n(o,a,i,c){var u=l(t[o],t,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then(function(t){n("next",t,i,c)},function(t){n("throw",t,i,c)}):e.resolve(f).then(function(t){s.value=t,i(s)},function(t){return n("throw",t,i,c)})}c(u.arg)}(o,a,n,i)})}return n=n?n.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function N(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,a=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return a.next=a}}return{next:O}}function O(){return{value:void 0,done:!0}}return h.prototype=p,c(y,"constructor",p),c(p,"constructor",h),h.displayName=c(p,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,i,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},w(E.prototype),c(E.prototype,a,function(){return this}),t.AsyncIterator=E,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new E(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then(function(t){return t.done?t.value:i.next()})},w(y),c(y,i,"Generator"),c(y,o,function(){return this}),c(y,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=N,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return i.type="throw",i.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,s):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:N(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}var w=function(){var t=o.a.useState({place:""}),e=Object(s.a)(t,2),r=e[0],n=e[1],a=o.a.useState(0),i=Object(s.a)(a,2),f=i[0],h=i[1],p=o.a.useState({lon:"",lat:""}),v=Object(s.a)(p,2),w=v[0],E=v[1],b=o.a.useState([]),x=Object(s.a)(b,2),L=x[0],j=x[1],N=o.a.useState(0),O=Object(s.a)(N,2),k=O[0],_=O[1],S=o.a.useState(""),P=Object(s.a)(S,2),F=P[0],G=P[1],T=o.a.useState({}),I=Object(s.a)(T,2),C=I[0],A=I[1],D="5ae2e3f221c38a28845f05b67086197a9b692fe955df4ed765b9213a";return o.a.useEffect(function(){var t,e;""!==r.place&&(t="geoname",e="name=".concat(r.place),new Promise(function(r,n){var o="https://api.opentripmap.com/0.1/en/places/"+t+"?apikey="+D;void 0!==e&&(o+="&"+e),fetch(o).then(function(t){return t.json()}).then(function(t){return r(t)}).catch(function(t){console.log("Fetch Error: -S",t)})})).then(function(t){var e="Name not found";"OK"===t.status&&(E(function(e){return{lon:t.lon,lat:t.lat}}),A(t),e=t.name,console.log(e,t))})},[f]),o.a.useEffect(function(){var t=function(){var t=Object(c.a)(g().mark(function t(){var e,r,n;return g().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://api.opentripmap.com/0.1/en/places/radius?apikey=".concat(D,"&rate=3&radius=1000&offset=").concat(k,"&lon=").concat(w.lon,"&lat=").concat(w.lat,"&format=count"),t.next=3,fetch(e);case 3:return r=t.sent,t.next=6,r.json();case 6:n=t.sent,G(n.count);case 8:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}(),e=function(){var t=Object(c.a)(g().mark(function t(){var e,r,n;return g().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e="https://api.opentripmap.com/0.1/en/places/radius?apikey=".concat(D,"&rate=3&radius=1000&limit=").concat(5,"&offset=").concat(k,"&lon=").concat(w.lon,"&lat=").concat(w.lat,"&format=json"),t.next=3,fetch(e);case 3:return r=t.sent,t.next=6,r.json();case 6:n=t.sent,j(n);case 8:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();""!==w.lat&&(t(),e())},[w.lat,k]),o.a.createElement("div",{className:"container"},o.a.createElement(d,{city:r.place}),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12 p-4"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement("form",{onSubmit:function(t){t.preventDefault(),_(0),h(function(t){return t+1})},id:"search",className:"input-group mt-5 mb-4 border p-1"},o.a.createElement("div",{className:"input-group-prepend border-0"},o.a.createElement("button",{className:"btn btn-link "},o.a.createElement("i",{className:"fa fa-search"}))),o.a.createElement("input",{type:"search",placeholder:"Region, city, village,  etc. (e.g. Konya)",className:"form-control bg-none border-0",value:r.place,name:"place",onChange:function(t){var e=t.target,r=e.name,o=e.value;n(function(t){return Object(l.a)({},t,Object(u.a)({},r,o))})}}))),o.a.createElement(y,{numOfPlaces:F,city:C}),o.a.createElement(m,{offset:k,pageLength:5,numOfPlaces:F,places:L,nextFive:function(){_(function(t){return t+5})},prevFive:function(){_(function(t){return t-5})}}))))};r(28);i.a.createRoot(document.getElementById("root")).render(o.a.createElement(w,null))}},[[15,2,1]]]);
//# sourceMappingURL=main.03d20456.chunk.js.map