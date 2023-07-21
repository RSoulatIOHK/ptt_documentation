"use strict";(self.webpackChunkptt_doc=self.webpackChunkptt_doc||[]).push([[183],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,g=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return n?o.createElement(g,a(a({ref:t},u),{},{components:n})):o.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8347:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},a="Signing-up for the tool",l={unversionedId:"frontend/signing-up",id:"frontend/signing-up",title:"Signing-up for the tool",description:"Your access to the tool is linked to a Cardano wallet.",source:"@site/docs/frontend/signing-up.md",sourceDirName:"frontend",slug:"/frontend/signing-up",permalink:"/docs/frontend/signing-up",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/frontend/introduction"},next:{title:"Filling up the user-profile",permalink:"/docs/frontend/user-profile"}},c={},s=[],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"signing-up-for-the-tool"},"Signing-up for the tool"),(0,r.kt)("p",null,"Your access to the tool is linked to a Cardano wallet.\nSigning up for the tool requires having a Nami, Yoroi, or Lace wallet.\nFirst, you need to ensure that you are connected to your wallet. "),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Note: An account is linked to a specific wallet. "),(0,r.kt)("p",{parentName:"admonition"},"Losing access to the wallet will lose access to your account, subscription, testing history, certificate history.")),(0,r.kt)("p",null,"Login into your wallet using the Connect button as shown below\n","[SCREENSHOT]"),(0,r.kt)("p",null,"Clicking on Connect Wallet, you will be presented with the wallets installed within your browser that can be connected to our tool. Click on the appropriate wallet card to continue to the tool. "),(0,r.kt)("p",null,"At this point, you will see a popup within the wallet extension asking you to Sign a message with a timestamp for an additional layer of security over the connected wallet. You will have to Sign this within a 60 seconds timeout, which once expired have to Connect to the wallet again.\n","[SCREENSHOT]"))}d.isMDXComponent=!0}}]);