(()=>{var e={184:(e,t)=>{var a;!function(){"use strict";var n={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)){if(a.length){var o=l.apply(null,a);o&&e.push(o)}}else if("object"===r){if(a.toString!==Object.prototype.toString&&!a.toString.toString().includes("[native code]")){e.push(a.toString());continue}for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(a=function(){return l}.apply(t,[]))||(e.exports=a)}()}},t={};function a(n){var l=t[n];if(void 0!==l)return l.exports;var r=t[n]={exports:{}};return e[n](r,r.exports,a),r.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.blocks,t=window.wp.element,n=window.wp.primitives,l=(0,t.createElement)(n.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,t.createElement)(n.Path,{d:"M15.5 9.5a1 1 0 100-2 1 1 0 000 2zm0 1.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zm-2.25 6v-2a2.75 2.75 0 00-2.75-2.75h-4A2.75 2.75 0 003.75 15v2h1.5v-2c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2h1.5zm7-2v2h-1.5v-2c0-.69-.56-1.25-1.25-1.25H15v-1.5h2.5A2.75 2.75 0 0120.25 15zM9.5 8.5a1 1 0 11-2 0 1 1 0 012 0zm1.5 0a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",fillRule:"evenodd"}));function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}const o=window.wp.components,i=window.wp.blockEditor,c=window.wp.i18n,s=window.React,p=window.wp.apiFetch;var u=a.n(p);const v=window.wp.url;var m=a(184),b=a.n(m);function w(e){let{active:a,children:n,page:l,pageClick:r,className:o}=e;const i=b()("wp-block activitypub-pager",o,{current:a});return(0,t.createElement)("a",{className:i,onClick:e=>{e.preventDefault(),!a&&r(l)}},n)}const d={outlined:"outlined",minimal:"minimal"};function f(e){let{compact:a,nextLabel:n,page:l,pageClick:r,perPage:o,prevLabel:i,total:c,variant:s=d.outlined}=e;const p=((e,t)=>{let a=[1,e-2,e-1,e,e+1,e+2,t];a.sort(((e,t)=>e-t)),a=a.filter(((e,a,n)=>e>=1&&e<=t&&n.lastIndexOf(e)===a));for(let e=a.length-2;e>=0;e--)a[e]===a[e+1]&&a.splice(e+1,1);return a})(l,Math.ceil(c/o)),u=b()("alignwide wp-block-query-pagination is-content-justification-space-between is-layout-flex wp-block-query-pagination-is-layout-flex",`is-${s}`,{"is-compact":a});return(0,t.createElement)("nav",{className:u},i&&(0,t.createElement)(w,{key:"prev",page:l-1,pageClick:r,active:1===l,"aria-label":i,className:"wp-block-query-pagination-previous block-editor-block-list__block"},i),!a&&(0,t.createElement)("div",{className:"block-editor-block-list__block wp-block wp-block-query-pagination-numbers"},p.map((e=>(0,t.createElement)(w,{key:e,page:e,pageClick:r,active:e===l,className:"page-numbers"},e)))),n&&(0,t.createElement)(w,{key:"next",page:l+1,pageClick:r,active:l===Math.ceil(c/o),"aria-label":n,className:"wp-block-query-pagination-next block-editor-block-list__block"},n))}const{namespace:g}=window._activityPubOptions;function y(e){let{selectedUser:a,per_page:n,order:l,title:o,page:i,setPage:p,className:m="",followLinks:b=!0,followerData:w=!1}=e;const d="site"===a?0:a,[y,k]=(0,s.useState)([]),[E,_]=(0,s.useState)(0),[x,C]=(0,s.useState)(0),[S,O]=function(){const[e,t]=(0,s.useState)(1);return[e,t]}(),N=i||S,P=p||O,L=(0,t.createInterpolateElement)(/* translators: arrow for previous followers link */
(0,c.__)("<span>←</span> Less","activitypub"),{span:(0,t.createElement)("span",{class:"wp-block-query-pagination-previous-arrow is-arrow-arrow","aria-hidden":"true"})}),j=(0,t.createInterpolateElement)(/* translators: arrow for next followers link */
(0,c.__)("More <span>→</span>","activitypub"),{span:(0,t.createElement)("span",{class:"wp-block-query-pagination-next-arrow is-arrow-arrow","aria-hidden":"true"})}),M=(e,t)=>{k(e),C(t),_(Math.ceil(t/n))};return(0,s.useEffect)((()=>{if(w&&1===N)return M(w.followers,w.total);const e=function(e,t,a,n){const l=`/${g}/users/${e}/followers`,r={per_page:t,order:a,page:n,context:"full"};return(0,v.addQueryArgs)(l,r)}(d,n,l,N);u()({path:e}).then((e=>M(e.orderedItems,e.totalItems))).catch((()=>{}))}),[d,n,l,N,w]),(0,t.createElement)("div",{className:"activitypub-follower-block "+m},(0,t.createElement)("h3",null,o),(0,t.createElement)("ul",null,y&&y.map((e=>(0,t.createElement)("li",{key:e.url},(0,t.createElement)(h,r({},e,{followLinks:b})))))),E>1&&(0,t.createElement)(f,{page:N,perPage:n,total:x,pageClick:P,nextLabel:j,prevLabel:L,compact:"is-style-compact"===m}))}function h(e){let{name:a,icon:n,url:l,preferredUsername:i,followLinks:c=!0}=e;const s=`@${i}`,p={};return c||(p.onClick=e=>e.preventDefault()),(0,t.createElement)(o.ExternalLink,r({className:"activitypub-link",href:l,title:s},p),(0,t.createElement)("img",{width:"40",height:"40",src:n.url,class:"avatar activitypub-avatar"}),(0,t.createElement)("span",{class:"activitypub-actor"},(0,t.createElement)("strong",{className:"activitypub-name"},a),(0,t.createElement)("span",{class:"sep"},"/"),(0,t.createElement)("span",{class:"activitypub-handle"},s)))}const k=window.wp.data,E=window._activityPubOptions?.enabled;(0,e.registerBlockType)("activitypub/followers",{edit:function(e){let{attributes:a,setAttributes:n}=e;const{order:l,per_page:s,selectedUser:p,title:u}=a,v=(0,i.useBlockProps)(),[m,b]=(0,t.useState)(1),w=[{label:(0,c.__)("New to old","activitypub"),value:"desc"},{label:(0,c.__)("Old to new","activitypub"),value:"asc"}],d=function(){const e=E?.users?(0,k.useSelect)((e=>e("core").getUsers({who:"authors"}))):[];return(0,t.useMemo)((()=>{if(!e)return[];const t=E?.site?[{label:(0,c.__)("Whole Site","activitypub"),value:"site"}]:[];return e.reduce(((e,t)=>(e.push({label:t.name,value:`${t.id}`}),e)),t)}),[e])}(),f=e=>t=>{b(1),n({[e]:t})};return(0,t.useEffect)((()=>{d.length&&(d.find((e=>{let{value:t}=e;return t===p}))||n({selectedUser:d[0].value}))}),[p,d]),(0,t.createElement)("div",v,(0,t.createElement)(i.InspectorControls,{key:"setting"},(0,t.createElement)(o.PanelBody,{title:(0,c.__)("Followers Options","activitypub")},(0,t.createElement)(o.TextControl,{label:(0,c.__)("Title","activitypub"),help:(0,c.__)("Title to display above the list of followers. Blank for none.","activitypub"),value:u,onChange:e=>n({title:e})}),d.length>1&&(0,t.createElement)(o.SelectControl,{label:(0,c.__)("Select User","activitypub"),value:p,options:d,onChange:f("selectedUser")}),(0,t.createElement)(o.SelectControl,{label:(0,c.__)("Sort","activitypub"),value:l,options:w,onChange:f("order")}),(0,t.createElement)(o.RangeControl,{label:(0,c.__)("Number of Followers","activitypub"),value:s,onChange:f("per_page"),min:1,max:10}))),(0,t.createElement)(y,r({},a,{page:m,setPage:b,followLinks:!1})))},save:()=>null,icon:l})})()})();