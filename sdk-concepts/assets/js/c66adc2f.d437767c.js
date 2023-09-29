"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4283],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,k=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return a?n.createElement(k,s(s({ref:t},p),{},{components:a})):n.createElement(k,s({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(67294),r=a(86010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,s),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(87462),r=a(67294),o=a(86010),s=a(12466),i=a(70989),l=a(72389);const c={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function p(e){let{className:t,block:a,selectedValue:i,selectValue:l,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),m=e=>{const t=e.currentTarget,a=u.indexOf(t),n=p[a].value;n!==i&&(d(t),l(n))},k=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;t=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;t=u[a]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>u.push(e),onKeyDown:k,onClick:m},s,{className:(0,o.Z)("tabs__item",c.tabItem,s?.className,{"tabs__item--active":i===t})}),a??t)})))}function u(e){let{lazy:t,children:a,selectedValue:n}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function d(e){const t=(0,i.Y)(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",c.tabList)},r.createElement(p,(0,n.Z)({},e,t)),r.createElement(u,(0,n.Z)({},e,t)))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,n.Z)({key:String(t)},e))}},70989:(e,t,a)=>{a.d(t,{Y:()=>d});var n=a(67294),r=a(16550),o=a(91980),s=a(67392),i=a(50012);function l(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function c(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??l(a);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function p(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function u(e){let{queryString:t=!1,groupId:a}=e;const s=(0,r.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(s.location.search);t.set(i,e),s.replace({...s.location,search:t.toString()})}),[i,s])]}function d(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=c(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[d,m]=u({queryString:a,groupId:r}),[k,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,i.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),b=(()=>{const e=d??k;return p({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),m(e),h(e)}),[m,h,o]),tabValues:o}}},51828:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),o=a(65488),s=a(85162);const i={description:"Learn about MetaMask SDK.",sidebar_position:2},l="About MetaMask SDK",c={unversionedId:"concepts/sdk/index",id:"concepts/sdk/index",title:"About MetaMask SDK",description:"Learn about MetaMask SDK.",source:"@site/wallet/concepts/sdk/index.md",sourceDirName:"concepts/sdk",slug:"/concepts/sdk/",permalink:"/sdk-concepts/wallet/concepts/sdk/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/wallet/concepts/sdk/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Learn about MetaMask SDK.",sidebar_position:2},sidebar:"walletSidebar",previous:{title:"Architecture",permalink:"/sdk-concepts/wallet/concepts/architecture"},next:{title:"SDK connections",permalink:"/sdk-concepts/wallet/concepts/sdk/connections"}},p={},u=[{value:"Benefits of MetaMask SDK",id:"benefits-of-metamask-sdk",level:2},{value:"User experience",id:"user-experience",level:2}],d={toc:u},m="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"about-metamask-sdk"},"About MetaMask SDK"),(0,r.kt)("p",null,"MetaMask SDK is a library that provides a reliable, secure, and seamless connection from your dapp\nto the MetaMask browser extension and MetaMask Mobile.\nYou can install the SDK in existing dapps, and call any ",(0,r.kt)("a",{parentName:"p",href:"/sdk-concepts/wallet/concepts/apis"},"provider API")," methods from\nyour dapp."),(0,r.kt)("admonition",{title:"Get started",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"MetaMask SDK is the recommended method of integrating your dapp with MetaMask.\nYou can get started by ",(0,r.kt)("a",{parentName:"p",href:"/sdk-concepts/wallet/how-to/connect/set-up-sdk/"},"setting up the SDK"),".")),(0,r.kt)("h2",{id:"benefits-of-metamask-sdk"},"Benefits of MetaMask SDK"),(0,r.kt)("p",null,"Before MetaMask SDK, there were three ways to connect a dapp to a user's MetaMask wallet:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Connect from a web dapp in a desktop browser to the MetaMask browser extension"),(0,r.kt)("li",{parentName:"ol"},"Connect from a web dapp in MetaMask Mobile's in-app browser to MetaMask Mobile"),(0,r.kt)("li",{parentName:"ol"},"Use third-party libraries to connect a mobile dapp to MetaMask Mobile")),(0,r.kt)("p",null,"With MetaMask SDK, there are more ways to connect:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Connect from a web dapp in a desktop browser to the MetaMask browser extension or to MetaMask Mobile"),(0,r.kt)("li",{parentName:"ol"},"Connect from a web dapp in a mobile browser to MetaMask Mobile"),(0,r.kt)("li",{parentName:"ol"},"Connect from desktop, mobile, and gaming dapps to MetaMask Mobile")),(0,r.kt)("p",null,"MetaMask SDK enables your dapp to provide a seamless user experience for MetaMask users, from\nmultiple dapp platforms, without relying on third-party libraries."),(0,r.kt)("h2",{id:"user-experience"},"User experience"),(0,r.kt)("p",null,"The following are examples of how a user experiences a dapp with the SDK installed, on various platforms."),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{label:"Desktop browser",value:"tab1",mdxType:"TabItem"},(0,r.kt)("p",null,"When a user accesses your web dapp on a desktop browser that doesn't have the MetaMask extension\ninstalled, a popup appears that prompts the user to either install the MetaMask extension or connect\nto MetaMask Mobile using a QR code."),(0,r.kt)("p",{align:"center"},(0,r.kt)("video",{width:"950",controls:!0},(0,r.kt)("source",{src:"/sdk-concepts/sdk-desktop.mp4",type:"video/mp4"}))),(0,r.kt)("admonition",{title:"Get started",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Get started by ",(0,r.kt)("a",{parentName:"li",href:"/sdk-concepts/wallet/how-to/connect/set-up-sdk/javascript/"},"setting up the SDK in your web dapp"),"."),(0,r.kt)("li",{parentName:"ul"},"See the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples"},"JavaScript SDK examples"),"\nfor advanced use cases.")))),(0,r.kt)(s.Z,{label:"Mobile browser",value:"tab2",mdxType:"TabItem"},(0,r.kt)("p",null,"When a user accesses your web dapp on a mobile browser, the SDK automatically deeplinks to MetaMask\nMobile (or if the user doesn't already have it, prompts them to install it).\nAfter the user accepts the connection, they're automatically redirected back to your dapp.\nThis happens for all actions that need user approval."),(0,r.kt)("p",{align:"center"},(0,r.kt)("video",{width:"300",controls:!0},(0,r.kt)("source",{src:"/sdk-concepts/sdk-mobile-browser.mp4",type:"video/mp4"}))),(0,r.kt)("admonition",{title:"Get started",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Get started by ",(0,r.kt)("a",{parentName:"li",href:"/sdk-concepts/wallet/how-to/connect/set-up-sdk/javascript/"},"setting up the SDK in your web dapp"),"."),(0,r.kt)("li",{parentName:"ul"},"See the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples"},"JavaScript SDK examples"),"\nfor advanced use cases.")))),(0,r.kt)(s.Z,{label:"iOS",value:"tab3",mdxType:"TabItem"},(0,r.kt)("p",null,"When a user accesses your iOS dapp, the SDK automatically deeplinks to MetaMask Mobile (or if the\nuser doesn't already have it, prompts them to install it).\nAfter the user accepts the connection, they're automatically redirected back to your dapp.\nThis happens for all actions that need user approval."),(0,r.kt)("p",{align:"center"},(0,r.kt)("video",{width:"300",controls:!0},(0,r.kt)("source",{src:"/sdk-concepts/sdk-ios.mp4",type:"video/mp4"}))),(0,r.kt)("admonition",{title:"Get started",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Get started by ",(0,r.kt)("a",{parentName:"li",href:"/sdk-concepts/wallet/how-to/connect/set-up-sdk/mobile/ios"},"setting up the SDK in your iOS dapp"),"."),(0,r.kt)("li",{parentName:"ul"},"See the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-ios-sdk"},"iOS SDK example")," for advanced use cases.")))),(0,r.kt)(s.Z,{label:"Android",value:"tab4",mdxType:"TabItem"},(0,r.kt)("p",null,"When a user accesses your Android dapp, the SDK automatically deeplinks to MetaMask Mobile (or if\nthe user doesn't already have it, prompts them to install it).\nAfter the user accepts the connection, they're automatically redirected back to your dapp.\nThis happens for all actions that need user approval."),(0,r.kt)("p",{align:"center"},(0,r.kt)("video",{width:"300",controls:!0},(0,r.kt)("source",{src:"/sdk-concepts/sdk-android.mp4",type:"video/mp4"}))),(0,r.kt)("admonition",{title:"Get started",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Get started by ",(0,r.kt)("a",{parentName:"li",href:"/sdk-concepts/wallet/how-to/connect/set-up-sdk/mobile/android"},"setting up the SDK in your Android dapp"),"."),(0,r.kt)("li",{parentName:"ul"},"See the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-android-sdk/tree/main/app"},"Android SDK example")," and\n",(0,r.kt)("a",{parentName:"li",href:"/sdk-concepts/wallet/concepts/sdk/android"},"Android SDK architecture")," for more information.")))),(0,r.kt)(s.Z,{label:"Node.js",value:"tab5",mdxType:"TabItem"},(0,r.kt)("p",null,"When a user accesses your Node.js dapp, the SDK renders a QR code on the console which users can\nscan with their MetaMask Mobile app."),(0,r.kt)("p",{align:"center"},(0,r.kt)("video",{width:"625",controls:!0},(0,r.kt)("source",{src:"/sdk-concepts/sdk-nodejs.mp4",type:"video/mp4"}))),(0,r.kt)("admonition",{title:"Get started",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Get started by ",(0,r.kt)("a",{parentName:"li",href:"/sdk-concepts/wallet/how-to/connect/set-up-sdk/javascript/nodejs"},"setting up the SDK in your Node.js dapp"),"."),(0,r.kt)("li",{parentName:"ul"},"See the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/MetaMask/metamask-sdk/tree/main/packages/examples/nodejs"},"Node.js SDK example"),"\nfor advanced use cases.")))),(0,r.kt)(s.Z,{label:"Unity",value:"tab6",mdxType:"TabItem"},(0,r.kt)("p",null,"When a user accesses your Unity game, the SDK renders a QR code in the game UI using a dedicated\nprefab which players can scan with their MetaMask Mobile app.\nIt also supports deeplinking on mobile platforms, as demonstrated in the following screen recording."),(0,r.kt)("p",{align:"center"},(0,r.kt)("video",{width:"300",controls:!0},(0,r.kt)("source",{src:"/sdk-concepts/sdk-unity.mp4",type:"video/mp4"}))),(0,r.kt)("admonition",{title:"Get started",type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Get started by ",(0,r.kt)("a",{parentName:"li",href:"/sdk-concepts/wallet/how-to/connect/set-up-sdk/gaming/unity"},"setting up the SDK in your Unity game"),"."),(0,r.kt)("li",{parentName:"ul"},"See the ",(0,r.kt)("a",{parentName:"li",href:"https://assetstore.unity.com/packages/decentralization/demo-game-dragon-crasher-with-metamask-sdk-infura-and-truffle-249789"},"Unity demo game with the SDK installed"),"\nfor advanced use cases."))))),(0,r.kt)("p",null,"You can read more about the ",(0,r.kt)("a",{parentName:"p",href:"/sdk-concepts/wallet/concepts/sdk/connections"},"connection flow between the SDK and MetaMask"),"."))}k.isMDXComponent=!0}}]);