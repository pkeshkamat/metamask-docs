"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[1038],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=l(n),d=i,h=c["".concat(p,".").concat(d)]||c[d]||u[d]||s;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,r=new Array(s);r[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:i,r[1]=o;for(var l=2;l<s;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var a=n(87462),i=(n(67294),n(3905));const s={description:"Create a snap that estimates gas fees.",sidebar_position:1},r="Create a gas estimation snap",o={unversionedId:"tutorials/gas-estimation",id:"tutorials/gas-estimation",title:"Create a gas estimation snap",description:"Create a snap that estimates gas fees.",source:"@site/snaps/tutorials/gas-estimation.md",sourceDirName:"tutorials",slug:"/tutorials/gas-estimation",permalink:"/update-contributing/snaps/tutorials/gas-estimation",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/tutorials/gas-estimation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Create a snap that estimates gas fees.",sidebar_position:1},sidebar:"snapsSidebar",previous:{title:"Tutorials",permalink:"/update-contributing/snaps/category/tutorials"},next:{title:"Create a transaction insights snap",permalink:"/update-contributing/snaps/tutorials/transaction-insights"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Steps",id:"steps",level:2},{value:"1. Set up the project",id:"1-set-up-the-project",level:3},{value:"2. Set a custom icon",id:"2-set-a-custom-icon",level:3},{value:"3. Enable network access",id:"3-enable-network-access",level:3},{value:"4. Fetch gas fee estimates",id:"4-fetch-gas-fee-estimates",level:3},{value:"5. Build and test the snap",id:"5-build-and-test-the-snap",level:3},{value:"6. Next steps",id:"6-next-steps",level:3}],m={toc:l},c="wrapper";function u(e){let{components:t,...s}=e;return(0,i.kt)(c,(0,a.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-a-gas-estimation-snap"},"Create a gas estimation snap"),(0,i.kt)("p",null,"This tutorial walks you through creating a snap that estimates gas fees.\nThe snap uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch")," API to request information from the internet, and displays custom\ninformation in a confirmation dialog."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/update-contributing/snaps/get-started/install-snaps"},"Snaps installed")),(0,i.kt)("li",{parentName:"ul"},"A text editor (for example, ",(0,i.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/"},"VS Code"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://yarnpkg.com/"},"Yarn")," version 3")),(0,i.kt)("h2",{id:"steps"},"Steps"),(0,i.kt)("h3",{id:"1-set-up-the-project"},"1. Set up the project"),(0,i.kt)("p",null,"Create a new snap project using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/create-snap"},(0,i.kt)("inlineCode",{parentName:"a"},"@metamask/create-snap")," CLI")," by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create @metamask/snap gas-estimation-snap\n")),(0,i.kt)("p",null,"or"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm create @metamask/snap gas-estimation-snap\n")),(0,i.kt)("p",null,"Next, ",(0,i.kt)("inlineCode",{parentName:"p"},"cd")," into the ",(0,i.kt)("inlineCode",{parentName:"p"},"gas-estimation-map")," project directory and run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn install\n")),(0,i.kt)("p",null,"This initializes your development environment with the required dependencies."),(0,i.kt)("h3",{id:"2-set-a-custom-icon"},"2. Set a custom icon"),(0,i.kt)("p",null,"Open ",(0,i.kt)("inlineCode",{parentName:"p"},"/packages/snap/snap.manifest.json")," in a text editor.\nThis file contains the main configuration details for your snap.\nEdit the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," object (within the ",(0,i.kt)("inlineCode",{parentName:"p"},"location")," object) and change the value for the ",(0,i.kt)("inlineCode",{parentName:"p"},"iconPath")," key by giving the path ",(0,i.kt)("inlineCode",{parentName:"p"},'"images/gas.svg"')," to your new icon:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"location": {\n   "npm": {\n      "filePath": "dist/bundle.js",\n      "iconPath": "images/gas.svg",\n      "packageName": "snap",\n      "registry": "https://registry.npmjs.org/"\n   }\n}\n')),(0,i.kt)("p",null,"Next, download ",(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/Montoya/gas-fee-snap/main/packages/snap/images/gas.svg"},"this ",(0,i.kt)("inlineCode",{parentName:"a"},"gas.svg")," icon file")," into the ",(0,i.kt)("inlineCode",{parentName:"p"},"/packages/snap/images")," folder.\nThis is a free icon, ",(0,i.kt)("strong",{parentName:"p"},"Gas")," by Mello from\n",(0,i.kt)("a",{parentName:"p",href:"https://thenounproject.com/browse/icons/term/gas/"},"Noun Project"),"."),(0,i.kt)("h3",{id:"3-enable-network-access"},"3. Enable network access"),(0,i.kt)("p",null,"To enable your snap to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch")," API, make a request for the\n",(0,i.kt)("a",{parentName:"p",href:"/update-contributing/snaps/reference/permissions#endowmentnetwork-access"},(0,i.kt)("inlineCode",{parentName:"a"},"endowment:network-access"))," permission by\nadding ",(0,i.kt)("inlineCode",{parentName:"p"},'"endowment:network-access": {}')," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"initialPermissions")," object in ",(0,i.kt)("inlineCode",{parentName:"p"},"snap.manifest.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="snap.manifest.json"',title:'"snap.manifest.json"'},'"initialPermissions": {\n  "snap_dialog": {},\n  "endowment:rpc": {\n    "dapps": true,\n    "snaps": false\n  }, \n  "endowment:network-access": {}\n},\n"manifestVersion": "0.1"\n...\n')),(0,i.kt)("h3",{id:"4-fetch-gas-fee-estimates"},"4. Fetch gas fee estimates"),(0,i.kt)("p",null,"Open ",(0,i.kt)("inlineCode",{parentName:"p"},"/packages/snap/src/index.ts"),".\nThis is the main code file for your snap.\nTo get a gas fee estimate, use the public API endpoint provided by\n",(0,i.kt)("a",{parentName:"p",href:"https://beaconcha.in/"},"Open Source Ethereum Explorer"),".\nAdd the following ",(0,i.kt)("inlineCode",{parentName:"p"},"getFees()")," function to the top of the file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},"import { OnRpcRequestHandler } from '@metamask/snaps-types';\nimport { panel, text } from '@metamask/snaps-ui';\n\nasync function getFees() {\n  const response = await fetch('https://beaconcha.in/api/v1/execution/gasnow'); \n  return response.text();\n}\n")),(0,i.kt)("p",null,"Next, modify the snap RPC message handler that displays the confirmation window.\nThis handler uses a switch statement to handle various request methods, but in this case there is\nonly one method, ",(0,i.kt)("inlineCode",{parentName:"p"},"hello"),".\nFor this method, the handler returns a call to MetaMask with the parameters to display a\nconfirmation window, and passes some static strings."),(0,i.kt)("p",null,"Since ",(0,i.kt)("inlineCode",{parentName:"p"},"getFees()")," returns a promise, you must use ",(0,i.kt)("inlineCode",{parentName:"p"},"then()")," to resolve it in your ",(0,i.kt)("inlineCode",{parentName:"p"},"hello")," method.\nRewrite the ",(0,i.kt)("inlineCode",{parentName:"p"},"hello")," method with the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="index.ts"',title:'"index.ts"'},"export const onRpcRequest: OnRpcRequestHandler = ({ origin, request }) => {\n  switch (request.method) {\n    case 'hello':\n      return getFees().then(fees => {\n        return snap.request({\n          method: 'snap_dialog',\n          params: {\n            type: 'alert',\n            content: panel([\n              text(`Hello, **${origin}**!`),\n              text(`Current gas fee estimates: ${fees}`),\n            ]),\n          }\n        });\n      });\n    default:\n      throw new Error('Method not found.');\n  }\n};\n")),(0,i.kt)("h3",{id:"5-build-and-test-the-snap"},"5. Build and test the snap"),(0,i.kt)("p",null,"To build and test your snap:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," in the root directory of the project, and increase the ",(0,i.kt)("inlineCode",{parentName:"p"},'"version"')," (if the ",(0,i.kt)("inlineCode",{parentName:"p"},'"version"')," is\n",(0,i.kt)("inlineCode",{parentName:"p"},"0.1.0"),", increase it to ",(0,i.kt)("inlineCode",{parentName:"p"},"0.2.0"),").")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the command line, run ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn start"),".\nIn the terminal, at the bottom of the message log, you see the browser URL:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"You can now view site in the browser.\n\n  http://localhost:8000/\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8000/"},(0,i.kt)("inlineCode",{parentName:"a"},"localhost:8000"))," in your browser (with MetaMask Flask installed).\nA page like the following displays:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Test dapp with template snap",src:n(14654).Z,width:"2854",height:"1064"})),(0,i.kt)("p",{parentName:"li"},"This is a boilerplate test dapp for installing and testing your snap.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"Connect")," to connect Flask to the dapp.\nAfter connecting, you're prompted to install the snap with the following permissions:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Allow websites to communicate directly with this snap.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Access the internet.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Display dialog windows in MetaMask.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select ",(0,i.kt)("strong",{parentName:"p"},"Approve & install"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"After installing, the ",(0,i.kt)("strong",{parentName:"p"},"Send message")," button on the page is enabled. Select this button. A dialog prompt displays with the response from the gas fee API:"))),(0,i.kt)("p",{align:"center"},(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Gas estimation dialog",src:n(63216).Z,width:"717",height:"461"}))),(0,i.kt)("p",null,"Congratulations!\nYou've integrated a public API into MetaMask and displayed real-time gas fee estimates."),(0,i.kt)("h3",{id:"6-next-steps"},"6. Next steps"),(0,i.kt)("p",null,"Next, you can try:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Parsing the JSON response from the remote API."),(0,i.kt)("li",{parentName:"ul"},"Displaying the fees in a nicely formatted way.")),(0,i.kt)("p",null,"You can also update the fields in ",(0,i.kt)("inlineCode",{parentName:"p"},"snap.manifest.json")," to match your custom snap:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"proposedName")," - The name of your snap."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description")," - The description of your snap."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"repository")," - The URL of your cloned GitHub repository."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"source")," - The ",(0,i.kt)("inlineCode",{parentName:"li"},"shasum")," is set automatically when you build from the command line.\nIf you decided to publish your snap to npm, update the ",(0,i.kt)("inlineCode",{parentName:"li"},"location")," to its published location.")),(0,i.kt)("p",null,"Similarly, you should update the ",(0,i.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"version"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"description"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"repository")," sections of\n",(0,i.kt)("inlineCode",{parentName:"p"},"/packages/snap/package.json")," even if you do not plan to publish your snap to ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},(0,i.kt)("inlineCode",{parentName:"a"},"npm")),"."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," field in ",(0,i.kt)("inlineCode",{parentName:"p"},"snap.manifest.json")," inherits the ",(0,i.kt)("inlineCode",{parentName:"p"},"version")," field from ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json"),".")),(0,i.kt)("p",null,"Lastly, you can update the content of ",(0,i.kt)("inlineCode",{parentName:"p"},"/packages/site/src/pages/index.tsx"),", such as changing the\nname of the method for showing gas fee estimates.\nIf you change the method name, make sure to change the method name in ",(0,i.kt)("inlineCode",{parentName:"p"},"/packages/snap/src/index.ts"),"\nto match."),(0,i.kt)("p",null,"After you have made all necessary changes, you can\n",(0,i.kt)("a",{parentName:"p",href:"/update-contributing/snaps/how-to/develop-a-snap#publish-your-snap"},"publish your snap to npm"),"."))}u.isMDXComponent=!0},63216:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/gas-estimation-5c6763a1d978e1b965bce4a2864855a8.png"},14654:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/template-snap-007eeb1c293f324c23db034e24560ffb.png"}}]);