"use strict";(self["webpackChunkhotheads_front"]=self["webpackChunkhotheads_front"]||[]).push([[726],{22726:(e,t,n)=>{n.r(t),n.d(t,{default:()=>oe});var a=n(59835);const s=e=>((0,a.dD)("data-v-6f4f86d8"),e=e(),(0,a.Cn)(),e),o=s((()=>(0,a._)("div",{class:"text-lg font-semibold"},"Connect wallet",-1))),l=s((()=>(0,a._)("div",null,"Hot Heads is unable to provide services to USA, Canada and China users.",-1))),i=(0,a.Uk)("I'm not not a citizen of USA, Canada or China");function c(e,t,n,s,c,d){const r=(0,a.up)("q-checkbox"),p=(0,a.up)("q-inner-loading"),m=(0,a.up)("q-card-section"),u=(0,a.up)("q-card"),f=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(f,{padding:"",class:"flex flex-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(u,{class:"bg rounded-base text-center text-xs shadow-none",flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{class:"px-6 py-7 flex flex-col gap-4 w-72"},{default:(0,a.w5)((()=>[o,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(s.providers,((e,n)=>((0,a.wg)(),(0,a.j4)((0,a.LL)(e),{key:n,connecting:s.connecting,"onUpdate:connecting":t[0]||(t[0]=e=>s.connecting=e),notUsa:s.notUsa},null,40,["connecting","notUsa"])))),128)),l,(0,a.Wm)(r,{modelValue:s.notUsa,"onUpdate:modelValue":t[1]||(t[1]=e=>s.notUsa=e),dense:""},{default:(0,a.w5)((()=>[i])),_:1},8,["modelValue"]),(0,a.Wm)(p,{showing:s.connecting},null,8,["showing"])])),_:1})])),_:1})])),_:1})}var d=n(65457),r=n(60499),p=n(86970),m=n(61957);const u={class:"flex flex-nowrap gap-3 text-xs"},f=(0,a._)("img",{src:"images/metamask-logo.png",class:"w-10 h-10 shrink-0"},null,-1),g={class:"text-left"},w=(0,a._)("div",{class:"text-sm font-semibold"},"MetaMask",-1),b={key:0,class:"opacity-60"},h={key:1,class:"opacity-60"},k=(0,a._)("img",{src:"images/metamask-logo.png",class:"w-10 h-10 shrink-0"},null,-1),v=(0,a._)("div",{class:"text-left"},[(0,a._)("div",{class:"text-sm font-semibold"},"MetaMask"),(0,a._)("div",{class:"opacity-60"},"Desktop / DApp in app"),(0,a._)("div",{class:"my-3"},"You do not have browser extension installed. ")],-1),_=(0,a.Uk)(" You can try metamask"),x=(0,a._)("br",null,null,-1),y=(0,a._)("a",{href:"https://metamask.io/download/",class:"link"},"http://metamask.io/",-1);function C(e,t,n,s,o,l){const i=(0,a.up)("q-btn"),c=(0,a.up)("q-card-section"),d=(0,a.up)("q-card");return s.metamaskInstalled||s.isMobile?((0,a.wg)(),(0,a.iD)("div",{key:0,class:(0,p.C_)([{"opacity-50":s.disabled},"transition-opacity"])},[(0,a.Wm)(i,{class:"rounded-base p-2 bg-card-semilight w-full",flat:"","no-caps":"",align:"left",href:s.deeplink,disable:s.disabled,onClick:(0,m.iM)(s.connect,["prevent"])},{default:(0,a.w5)((()=>[(0,a._)("div",u,[f,(0,a._)("div",g,[w,s.metamaskInstalled?((0,a.wg)(),(0,a.iD)("div",b,"Desktop / DApp in app")):((0,a.wg)(),(0,a.iD)("div",h,"Switch to metamask browser"))])])])),_:1},8,["href","disable","onClick"])],2)):((0,a.wg)(),(0,a.j4)(d,{key:1,class:"rounded-base w-60",flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{class:"p-2 bg-card-semilight flex flex-nowrap gap-3"},{default:(0,a.w5)((()=>[k,v])),_:1}),(0,a.Wm)(c,{class:"p-5 bg-card-superlight"},{default:(0,a.w5)((()=>[_,x,y])),_:1})])),_:1}))}n(18964);var U=n(19302),Z=n(18910),M=n(41341),W=n(75253),D=n(62600);const B={props:{notUsa:Boolean,connecting:Boolean},emits:["update:connecting"],setup(e,{emit:t}){const n=(0,a.Fl)((()=>!e.notUsa)),s=(0,U.Z)(),o=(0,W.F)(),l=(0,Z.tv)(),i=s.platform.is.mobile,c=(0,Z.tv)();let d;if(s.sessionStorage.has("ref")){const e=s.sessionStorage.getItem("ref");d=c.resolve({name:"ref",params:{ref:e}})}else d=c.resolve({name:"connect-wallet"});const{href:r}=d,p=`https://metamask.app.link/dapp/${window.location.host}/${r}`;async function m(){if(M.UQ)try{t("update:connecting",!0),await o.connect(),l.replace({name:"login"})}catch(e){(0,D.cB)(e)}finally{t("update:connecting",!1)}else window.location=p}return{metamaskInstalled:M.UQ,deeplink:p,connect:m,disabled:n,isMobile:i}}};var Q=n(11639),q=n(24455),I=n(44458),S=n(63190),H=n(69984),A=n.n(H);const F=(0,Q.Z)(B,[["render",C]]),$=F;A()(B,"components",{QBtn:q.Z,QCard:I.Z,QCardSection:S.Z});const j={class:"flex flex-nowrap gap-3 text-xs"},L=(0,a._)("img",{src:"images/trust-wallet-logo.png",class:"w-10 h-10 shrink-0"},null,-1),T={class:"text-left"},V=(0,a._)("div",{class:"text-sm font-semibold"},"Trust wallet",-1),Y={key:0,class:"opacity-60"},z={key:1,class:"opacity-60"};function E(e,t,n,s,o,l){const i=(0,a.up)("q-btn");return(0,a.wg)(),(0,a.iD)("div",{class:(0,p.C_)([{"opacity-50":s.disabled},"transition-opacity"])},[(0,a.Wm)(i,{class:"rounded-base p-2 bg-card-semilight w-full",flat:"","no-caps":"",align:"left",href:s.deeplink,onClick:(0,m.iM)(s.connect,["prevent"]),disable:s.disabled},{default:(0,a.w5)((()=>[(0,a._)("div",j,[L,(0,a._)("div",T,[V,s.isMobile&&!s.notMetamaskInstalled?((0,a.wg)(),(0,a.iD)("div",Y,"Switch to trustwallet browser")):((0,a.wg)(),(0,a.iD)("div",z,"DApp in app"))])])])),_:1},8,["href","onClick","disable"])],2)}const K={props:{notUsa:Boolean,connecting:Boolean},emits:["update:connecting"],setup(e,{emit:t}){const n=(0,U.Z)(),s=(0,W.F)(),o=(0,Z.tv)(),l=(0,Z.tv)(),i=n.platform.is.mobile,c=(0,a.Fl)((()=>!(!M.h7&&e.notUsa&&i)));async function d(){if(M.h7)try{t("update:connecting",!0),await s.connect(),o.replace({name:"login"})}catch(e){(0,D.cB)(e)}finally{t("update:connecting",!1)}else window.location=u}let r;if(n.sessionStorage.has("ref")){const e=n.sessionStorage.getItem("ref");r=l.resolve({name:"ref",params:{ref:e}})}else r=l.resolve({name:"connect-wallet"});const{href:p}=r,m=9006,u=`https://link.trustwallet.com/open_url?coin_id=${m}&url=${window.location.origin}/${p}`;return{deeplink:u,disabled:c,isMobile:i,notMetamaskInstalled:M.h7,connect:d}}},P=(0,Q.Z)(K,[["render",E]]),G=P;A()(K,"components",{QBtn:q.Z});const J=(0,a._)("div",{class:"flex flex-nowrap gap-3 text-xs"},[(0,a._)("img",{src:"images/walletconnect-logo.png",class:"w-10 h-10 shrink-0"}),(0,a._)("div",{class:"text-left"},[(0,a._)("div",{class:"text-sm font-semibold"},"WalletConnect"),(0,a._)("div",{class:"opacity-60"},"Any wallet and browser")])],-1);function N(e,t,n,s,o,l){const i=(0,a.up)("q-btn");return(0,a.wg)(),(0,a.iD)("div",{class:(0,p.C_)([{"opacity-50":s.disabled},"transition-opacity"])},[(0,a.Wm)(i,{class:"rounded-base p-2 bg-card-semilight w-full",flat:"","no-caps":"",align:"left",disable:s.disabled,onClick:s.connect},{default:(0,a.w5)((()=>[J])),_:1},8,["disable","onClick"])],2)}n(6822);const O={props:{notUsa:Boolean,connecting:Boolean},emits:["update:connecting"],setup(e,{emit:t}){const n=(0,a.Fl)((()=>!e.notUsa));async function s(){try{throw t("update:connecting",!0),new Error("Will be available soon")}catch(e){(0,D.cB)(e)}finally{t("update:connecting",!1)}}return{disabled:n,connect:s}}},R=(0,Q.Z)(O,[["render",N]]),X=R;A()(O,"components",{QBtn:q.Z});const ee={components:{TrustWallet:G,Metamask:$,WalletConnect:X},setup(){(0,d.Z)({title:"Connect Metamask - Hot Heads"});const e=(0,r.iH)(!1),t=(0,r.iH)(!1),n=["TrustWallet","Metamask","WalletConnect"];return{connecting:e,providers:n,notUsa:t}}};var te=n(69885),ne=n(11221),ae=n(60854);const se=(0,Q.Z)(ee,[["render",c],["__scopeId","data-v-6f4f86d8"]]),oe=se;A()(ee,"components",{QPage:te.Z,QCard:I.Z,QCardSection:S.Z,QCheckbox:ne.Z,QInnerLoading:ae.Z})}}]);