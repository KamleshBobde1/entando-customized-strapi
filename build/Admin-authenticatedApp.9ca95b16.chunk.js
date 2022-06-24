"use strict";(self.webpackChunkstarpi_4111=self.webpackChunkstarpi_4111||[]).push([[801],{63339:(K,R,n)=>{n.r(R),n.d(R,{default:()=>_t});var e=n(67294),i=n(68547),B=n(23724),P=n(27361),Q=n.n(P);const S={i8:"4.1.11"};var W=n(32104),c=n(49656),V=n(99168),x=n(61080),C=n(78384),U=n(45697),s=n.n(U),T=n(97132),N=n(14276),v=n(80244),b=n(24824),l=n(5493),d=n(49425),E=n(9008),M=n(33957),Be=n.n(M),be=n(96026),Ne=n.n(be),Ge=n(80380);const Ue=(0,C.default)(l.Box)`
  width: ${150/16}rem;
  position: absolute;
  bottom: ${({theme:t})=>t.spaces[9]};
  left: ${({theme:t})=>t.spaces[5]};
`,te=(0,C.default)(c.NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  padding: ${({theme:t})=>`${t.spaces[2]} ${t.spaces[4]}`};
  border-radius: ${({theme:t})=>t.spaces[1]};

  &:hover {
    background: ${({theme:t,logout:a})=>a?t.colors.danger100:t.colors.primary100};
    text-decoration: none;
  }

  svg {
    path {
      fill: ${({theme:t})=>t.colors.danger600};
    }
  }
`,ne=({generalSectionLinks:t,pluginsSectionLinks:a})=>{const o=(0,e.useRef)(),[r,p]=(0,e.useState)(!1),{menuLogo:u}=(0,Ge.Z)(),[f,y]=(0,i.usePersistentState)("navbar-condensed",!1),{userDisplayName:h}=(0,i.useAppInfos)(),{formatMessage:g}=(0,T.useIntl)(),L=h.split(" ").map(m=>m.substring(0,1)).join("").substring(0,2),D=()=>p(m=>!m),j=()=>{i.auth.clearAppStorage(),D()},$=m=>{var A,I;!m.currentTarget.contains(m.relatedTarget)&&((I=(A=m.relatedTarget)==null?void 0:A.parentElement)==null?void 0:I.id)!=="main-nav-user-button"&&p(!1)},G=g({id:"app.components.LeftMenu.navbrand.title",defaultMessage:"Strapi Dashboard"});return e.createElement(v.MainNav,{condensed:f},e.createElement(v.NavBrand,{as:c.NavLink,workplace:g({id:"app.components.LeftMenu.navbrand.workplace",defaultMessage:"Workplace"}),title:G,icon:e.createElement("img",{src:u,alt:G})}),e.createElement(N.Divider,null),e.createElement(v.NavSections,null,e.createElement(v.NavLink,{as:c.NavLink,to:"/content-manager",icon:e.createElement(Be(),null)},g({id:"global.content-manager",defaultMessage:"Content manager"})),a.length>0?e.createElement(v.NavSection,{label:"Plugins"},a.map(m=>{const A=m.icon;return e.createElement(v.NavLink,{as:c.NavLink,to:m.to,key:m.to,icon:e.createElement(A,null)},g(m.intlLabel))})):null,t.length>0?e.createElement(v.NavSection,{label:"General"},t.map(m=>{const A=m.icon;return e.createElement(v.NavLink,{as:c.NavLink,badgeContent:m.notificationsCount>0&&m.notificationsCount.toString()||void 0,to:m.to,key:m.to,icon:e.createElement(A,null)},g(m.intlLabel))})):null),e.createElement(v.NavUser,{id:"main-nav-user-button",ref:o,onClick:D,initials:L},h),r&&e.createElement(Ue,{onBlur:$,padding:1,shadow:"tableShadow",background:"neutral0",hasRadius:!0},e.createElement(b.FocusTrap,{onEscape:D},e.createElement(E.Stack,{spacing:0},e.createElement(te,{tabIndex:0,onClick:D,to:"/me"},e.createElement(d.Typography,null,g({id:"global.profile",defaultMessage:"Profile"}))),e.createElement(te,{tabIndex:0,onClick:j,logout:"logout",to:"/auth/login"},e.createElement(d.Typography,{textColor:"danger600"},g({id:"app.components.LeftMenu.logout",defaultMessage:"Logout"})),e.createElement(Ne(),null))))),e.createElement(v.NavCondense,{onClick:()=>y(m=>!m)},g(f?{id:"app.components.LeftMenu.expand",defaultMessage:"Expand the navbar"}:{id:"app.components.LeftMenu.collapse",defaultMessage:"Collapse the navbar"})))};ne.propTypes={generalSectionLinks:s().array.isRequired,pluginsSectionLinks:s().array.isRequired};const Fe=ne;var O=n(67826),We=n(62031);const je=(0,C.default)(l.Box)`
  flex: 1;
`,ae=({children:t,sideNav:a})=>{const{formatMessage:o}=(0,T.useIntl)();return e.createElement(l.Box,{background:"neutral100"},e.createElement(We.SkipToContent,null,o({id:"skipToContent",defaultMessage:"Skip to content"})),e.createElement(O.Flex,{alignItems:"flex-start"},a,e.createElement(je,null,t)))};ae.propTypes={children:s().node.isRequired,sideNav:s().node.isRequired};const $e=ae;var Y=n(67814),oe=n(1200);const Ke=(0,C.default)(l.Box)`
  position: fixed;
  bottom: ${({theme:t})=>t.spaces[2]};
  right: ${({theme:t})=>t.spaces[2]};
`,Ve=C.default.button`
  width: ${({theme:t})=>t.spaces[8]};
  height: ${({theme:t})=>t.spaces[8]};
  background: ${({theme:t})=>t.colors.primary600};
  box-shadow: ${({theme:t})=>t.shadows.tableShadow};
  border-radius: 50%;
  svg {
    color: ${({theme:t})=>t.colors.buttonNeutral0};
  }
`,ze=(0,C.default)(l.Box)`
  position: absolute;
  bottom: ${({theme:t})=>`${t.spaces[9]}`};
  right: 0;
  width: ${200/16}rem;
`,ke=C.default.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: ${({theme:t})=>t.spaces[2]};
  padding-left: ${({theme:t})=>t.spaces[5]};

  svg {
    color: ${({theme:t})=>t.colors.neutral600};
    margin-right: ${({theme:t})=>t.spaces[2]};
  }

  &:hover {
    background: ${({theme:t})=>t.colors.neutral100};
    color: ${({theme:t})=>t.colors.neutral500};

    svg {
      color: ${({theme:t})=>t.colors.neutral700};
    }

    ${[d.Typography]} {
      color: ${({theme:t})=>t.colors.neutral700};
    }
  }

  ${[d.Typography]} {
    color: ${({theme:t})=>t.colors.neutral600};
  }
`,He=()=>{const[t,a]=(0,e.useState)(!1),{formatMessage:o}=(0,T.useIntl)(),{showTutorials:r}=(0,W.um)();if(!r)return null;const p=[{icon:"book",label:o({id:"global.documentation",defaultMessage:"Documentation"}),destination:"https://docs.strapi.io"},{icon:"file",label:o({id:"app.static.links.cheatsheet",defaultMessage:"CheatSheet"}),destination:"https://strapi-showcase.s3-us-west-2.amazonaws.com/CheatSheet.pdf"}],u=()=>{a(f=>!f)};return e.createElement(Ke,{as:"aside"},e.createElement(Ve,{id:"onboarding","aria-label":o({id:"app.components.Onboarding.help.button",defaultMessage:"Help button"}),onClick:u},!t&&e.createElement(Y.G,{icon:oe.faQuestion}),t&&e.createElement(Y.G,{icon:oe.faTimes})),t&&e.createElement(b.FocusTrap,{onEscape:u},e.createElement(ze,{background:"neutral0",hasRadius:!0,shadow:"tableShadow",paddingBottom:2,paddingTop:2},p.map(f=>e.createElement(ke,{key:f.label,rel:"nofollow noreferrer noopener",target:"_blank",href:f.destination},e.createElement(Y.G,{icon:f.icon}),e.createElement(d.Typography,null,f.label))))))};var se=n(58836),Ze=n(38914),re=n.n(Ze),Qe=n(76910),Ye=n(59471),Xe=n(30741),ie=n(19408),we=n(84040),Je=n.n(we);const qe=(0,C.default)(O.Flex)`
  position: fixed;
  z-index: 4;
  inset: 0;
  /* this is theme.colors.neutral800 with opacity */
  background: ${({theme:t})=>`${t.colors.neutral800}1F`};
`,le=({onClose:t,onSkip:a,children:o,hideSkip:r})=>{const{formatMessage:p}=(0,T.useIntl)();return e.createElement(Ye.Portal,null,e.createElement(qe,{onClick:t,padding:8,justifyContent:"center"},e.createElement(b.FocusTrap,{onEscape:t},e.createElement(E.Stack,{background:"neutral0",width:(0,i.pxToRem)(660),shadow:"popupShadow",hasRadius:!0,padding:4,spacing:8,role:"dialog","aria-modal":!0,onClick:u=>u.stopPropagation()},e.createElement(O.Flex,{justifyContent:"flex-end"},e.createElement(Xe.IconButton,{onClick:t,"aria-label":p({id:"app.utils.close-label",defaultMessage:"Close"}),icon:e.createElement(Je(),null)})),e.createElement(l.Box,{paddingLeft:7,paddingRight:7,paddingBottom:r?8:0},o),!r&&e.createElement(O.Flex,{justifyContent:"flex-end"},e.createElement(ie.Button,{variant:"tertiary",onClick:a},p({id:"app.components.GuidedTour.skip",defaultMessage:"Skip the tour"})))))))};le.propTypes={children:s().node.isRequired,onClose:s().func.isRequired,onSkip:s().func.isRequired,hideSkip:s().bool.isRequired};const _e=le;var de=n(8041);const ce={stepContent:null,sectionIndex:null,stepIndex:null,hasSectionAfter:!1,hasStepAfter:!1},et=(t=ce,a)=>(0,de.default)(t,o=>{switch(a.type){case"UPDATE_MODAL":{o.stepContent=a.content,o.sectionIndex=a.newSectionIndex,o.stepIndex=a.newStepIndex,o.hasSectionAfter=a.newHasSectionAfter,o.hasStepAfter=a.newHasStepAfter;break}default:return o}});var tt=n(77602),pe=n.n(tt);const nt=C.default.li`
  list-style: disc;
`,ue=({id:t,defaultMessage:a})=>{const{formatMessage:o}=(0,T.useIntl)();return e.createElement(E.Stack,{spacing:4,paddingBottom:6},o({id:t,defaultMessage:a},{documentationLink:r=>e.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest-api.html#api-parameters"},r),b:r=>e.createElement(d.Typography,{fontWeight:"semiBold"},r),p:r=>e.createElement(d.Typography,null,r),light:r=>e.createElement(d.Typography,{textColor:"neutral600"},r),ul:r=>e.createElement(l.Box,{paddingLeft:6},e.createElement("ul",null,r)),li:r=>e.createElement(nt,null,r)}))};ue.propTypes={id:s().string.isRequired,defaultMessage:s().string.isRequired};const at=ue;var X=n(66952),ot=n(71289);const w=({number:t,last:a,type:o})=>e.createElement(l.Box,{paddingTop:3,paddingBottom:a?0:3},e.createElement(ot.Z,{number:t,type:o}));w.defaultProps={number:void 0,last:!1,type:""},w.propTypes={number:s().number,last:s().bool,type:s().string};const me=w;var F=n(16289),st=Object.defineProperty,ge=Object.getOwnPropertySymbols,rt=Object.prototype.hasOwnProperty,it=Object.prototype.propertyIsEnumerable,fe=(t,a,o)=>a in t?st(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,lt=(t,a)=>{for(var o in a||(a={}))rt.call(a,o)&&fe(t,o,a[o]);if(ge)for(var o of ge(a))it.call(a,o)&&fe(t,o,a[o]);return t};const J=({title:t,content:a,cta:o,onCtaClick:r,sectionIndex:p,stepIndex:u,hasSectionAfter:f})=>{const{formatMessage:y}=(0,T.useIntl)(),h=p>0,g=u>0,L=p+1;return e.createElement(e.Fragment,null,e.createElement(O.Flex,{alignItems:"stretch"},e.createElement(O.Flex,{marginRight:8,justifyContent:"center",minWidth:(0,i.pxToRem)(30)},h&&e.createElement(X.Z,{type:F.hx,minHeight:(0,i.pxToRem)(24)})),e.createElement(d.Typography,{variant:"sigma",textColor:"primary600"},y({id:"app.components.GuidedTour.title",defaultMessage:"3 steps to get started"}))),e.createElement(O.Flex,null,e.createElement(O.Flex,{marginRight:8,minWidth:(0,i.pxToRem)(30)},e.createElement(me,{number:p+1,type:g?F.hx:F.lW})),e.createElement(d.Typography,{variant:"alpha",fontWeight:"bold",textColor:"neutral800",as:"h3",id:"title"},y(t))),e.createElement(O.Flex,{alignItems:"stretch"},e.createElement(O.Flex,{marginRight:8,direction:"column",justifyContent:"center",minWidth:(0,i.pxToRem)(30)},f&&e.createElement(e.Fragment,null,e.createElement(X.Z,{type:F.hx}),g&&e.createElement(me,{number:L+1,type:F.lW,last:!0}))),e.createElement(l.Box,null,e.createElement(at,lt({},a)),o&&(o.target?e.createElement(i.LinkButton,{endIcon:e.createElement(pe(),null),onClick:r,to:o.target},y(o.title)):e.createElement(ie.Button,{endIcon:e.createElement(pe(),null),onClick:r},y(o.title))))),g&&f&&e.createElement(l.Box,{paddingTop:3},e.createElement(O.Flex,{marginRight:8,justifyContent:"center",width:(0,i.pxToRem)(30)},e.createElement(X.Z,{type:F.hx,minHeight:(0,i.pxToRem)(24)}))))};J.defaultProps={currentStep:null,cta:void 0},J.propTypes={sectionIndex:s().number.isRequired,stepIndex:s().number.isRequired,hasSectionAfter:s().bool.isRequired,content:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired}).isRequired,cta:s().shape({target:s().string,title:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired})}),currentStep:s().string,onCtaClick:s().func.isRequired,title:s().shape({id:s().string.isRequired,defaultMessage:s().string.isRequired}).isRequired};const dt=J;var ct=Object.defineProperty,pt=Object.defineProperties,ut=Object.getOwnPropertyDescriptors,he=Object.getOwnPropertySymbols,mt=Object.prototype.hasOwnProperty,gt=Object.prototype.propertyIsEnumerable,Ee=(t,a,o)=>a in t?ct(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,ft=(t,a)=>{for(var o in a||(a={}))mt.call(a,o)&&Ee(t,o,a[o]);if(he)for(var o of he(a))gt.call(a,o)&&Ee(t,o,a[o]);return t},ht=(t,a)=>pt(t,ut(a));const Et=()=>{const{currentStep:t,guidedTourState:a,setCurrentStep:o,setStepState:r,isGuidedTourVisible:p,setSkipped:u}=(0,i.useGuidedTour)(),[f,y]=(0,e.useState)(t),[{stepContent:h,sectionIndex:g,stepIndex:L,hasSectionAfter:D,hasStepAfter:j},$]=(0,e.useReducer)(et,ce),{trackUsage:G}=(0,i.useTracking)();(0,e.useEffect)(()=>{if(!t){y(!1);return}const[I]=re()(a,t);y(!I&&p)},[t,a,p]),(0,e.useEffect)(()=>{if(t){const[I]=re()(Qe.Z,t),k=Object.keys(a),[H,De]=t.split("."),ee=k.indexOf(H),Z=Object.keys(a[H]).indexOf(De),en=ee<k.length-1,tn=Z<Object.keys(a[H]).length-1;$({type:"UPDATE_MODAL",content:I,newSectionIndex:ee,newStepIndex:Z,newHasSectionAfter:en,newHasStepAfter:tn})}},[t,a]);const m=()=>{r(t,!0),G(h.trackingEvent),o(null)},A=()=>{u(!0),o(null),G("didSkipGuidedtour")};return f&&h?e.createElement(_e,{hideSkip:!j&&!D,onSkip:A,onClose:m},e.createElement(dt,ht(ft({},h),{onCtaClick:m,currentStep:t,sectionIndex:g,stepIndex:L,hasSectionAfter:D}))):null},yt=(0,e.lazy)(()=>Promise.all([n.e(3852),n.e(7909),n.e(596),n.e(3224),n.e(9102),n.e(994)]).then(n.bind(n,50706))),vt=(0,e.lazy)(()=>Promise.all([n.e(791),n.e(3981)]).then(n.bind(n,87512))),Tt=(0,e.lazy)(()=>n.e(3677).then(n.bind(n,7235))),Pt=(0,e.lazy)(()=>Promise.all([n.e(3852),n.e(5516)]).then(n.bind(n,65560))),ye=(0,e.lazy)(()=>Promise.resolve().then(n.bind(n,92776))),Ct=(0,e.lazy)(()=>n.e(5629).then(n.bind(n,40953))),Mt=(0,e.lazy)(()=>n.e(9497).then(n.bind(n,60762))),ve=(0,e.lazy)(()=>Promise.all([n.e(3852),n.e(7909),n.e(596),n.e(2066),n.e(5895)]).then(n.bind(n,34759))),Ot=()=>{const{trackUsage:t}=(0,i.useTracking)();(0,e.useEffect)(()=>{t("didAccessAuthenticatedAdministration")},[])},Rt=()=>{Ot();const{isLoading:t,generalSectionLinks:a,pluginsSectionLinks:o}=(0,W.H9)(),{menu:r}=(0,i.useStrapiApp)(),p=(0,e.useMemo)(()=>r.filter(u=>u.Component).map(({to:u,Component:f,exact:y})=>(0,se.ot)(f,u,y)),[r]);return t?e.createElement(i.LoadingIndicatorPage,null):e.createElement(V.DndProvider,{backend:x.PD},e.createElement($e,{sideNav:e.createElement(Fe,{generalSectionLinks:a,pluginsSectionLinks:o})},e.createElement(e.Suspense,{fallback:e.createElement(i.LoadingIndicatorPage,null)},e.createElement(c.Switch,null,e.createElement(c.Route,{path:"/",component:vt,exact:!0}),e.createElement(c.Route,{path:"/me",component:Mt,exact:!0}),e.createElement(c.Route,{path:"/content-manager",component:yt}),p,e.createElement(c.Route,{path:"/settings/:settingId",component:ve}),e.createElement(c.Route,{path:"/settings",component:ve,exact:!0}),e.createElement(c.Route,{path:"/marketplace"},e.createElement(Pt,null)),e.createElement(c.Route,{path:"/list-plugins",exact:!0},e.createElement(Tt,null)),e.createElement(c.Route,{path:"/404",component:ye}),e.createElement(c.Route,{path:"/500",component:Ct}),e.createElement(c.Route,{path:"",component:ye}))),e.createElement(Et,null),e.createElement(He,null)))};var St=Object.defineProperty,Te=Object.getOwnPropertySymbols,At=Object.prototype.hasOwnProperty,It=Object.prototype.propertyIsEnumerable,Pe=(t,a,o)=>a in t?St(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,xt=(t,a)=>{for(var o in a||(a={}))At.call(a,o)&&Pe(t,o,a[o]);if(Te)for(var o of Te(a))It.call(a,o)&&Pe(t,o,a[o]);return t};const Lt=t=>({plugins:Object.keys(t).reduce((a,o)=>(a[o]=xt({},t[o]),a),{})});var Dt=n(36968),Bt=n.n(Dt);const Ce={plugins:null},bt=(t=Ce,a)=>(0,de.default)(t,o=>{switch(a.type){case"SET_PLUGIN_READY":{Bt()(o,["plugins",a.pluginId,"isReady"],!0);break}default:return o}}),Nt=()=>{const{plugins:t}=(0,i.useStrapiApp)(),[{plugins:a},o]=(0,e.useReducer)(bt,Ce,()=>Lt(t)),r=(0,e.useRef)(u=>{o({type:"SET_PLUGIN_READY",pluginId:u})});if(Object.keys(a).some(u=>a[u].isReady===!1)){const u=Object.keys(a).reduce((f,y)=>{const h=a[y].initializer;if(h){const g=a[y].pluginId;f.push(e.createElement(h,{key:g,setPlugin:r.current}))}return f},[]);return e.createElement(e.Fragment,null,u,e.createElement(i.LoadingIndicatorPage,null))}return e.createElement(Rt,null)};var Me=n(37424),Oe=n(68493);const Gt=()=>({type:Oe.l}),Ut=t=>({type:Oe.m,permissions:t}),Re=({children:t,permissions:a,refetchPermissions:o})=>{const{allPermissions:r}=(0,Me.v9)(u=>u.rbacProvider),p=(0,Me.I0)();return(0,e.useEffect)(()=>(p(Ut(a)),()=>{p(Gt())}),[a,p]),r?e.createElement(i.RBACProviderContext.Provider,{value:{allPermissions:r,refetchPermissions:o}},t):e.createElement(i.LoadingIndicatorPage,null)};Re.propTypes={children:s().element.isRequired,permissions:s().array.isRequired,refetchPermissions:s().func.isRequired};const Ft=Re;var Wt=n(9669),jt=n.n(Wt),$t=n(36625),q=n.n($t);const Se=(t,a)=>!q().valid(t)||!q().valid(a)?!1:q().lt(t,a);var _=n(63955),z=(t,a,o)=>new Promise((r,p)=>{var u=h=>{try{y(o.next(h))}catch(g){p(g)}},f=h=>{try{y(o.throw(h))}catch(g){p(g)}},y=h=>h.done?r(h.value):Promise.resolve(h.value).then(u,f);y((o=o.apply(t,a)).next())});const Ae=S.i8,Kt=!JSON.parse(localStorage.getItem("STRAPI_UPDATE_NOTIF")),Vt=t=>z(void 0,null,function*(){try{const{data:{tag_name:a}}=yield jt().get("https://api.github.com/repos/strapi/strapi/releases/latest");return Se(Ae,a)&&Kt&&t({type:"info",message:{id:"notification.version.update.message"},link:{url:`https://github.com/strapi/strapi/releases/tag/${a}`,label:{id:"global.see-more"}},blockTransition:!0,onClose:()=>localStorage.setItem("STRAPI_UPDATE_NOTIF",!0)}),a}catch(a){return Ae}}),zt=()=>z(void 0,null,function*(){try{const{data:t,headers:a}=yield _.be.get("/admin/information");if(!a["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}}),kt=()=>z(void 0,null,function*(){try{const{data:t,headers:a}=yield _.be.get("/admin/users/me/permissions");if(!a["content-type"].includes("application/json"))throw new Error("Not found");return t.data}catch(t){throw new Error(t)}}),Ht=()=>z(void 0,null,function*(){try{const{data:{data:{roles:t}}}=yield _.be.get("/admin/users/me");return t}catch(t){throw new Error(t)}});var Zt=Object.defineProperty,Qt=Object.defineProperties,Yt=Object.getOwnPropertyDescriptors,Ie=Object.getOwnPropertySymbols,Xt=Object.prototype.hasOwnProperty,wt=Object.prototype.propertyIsEnumerable,xe=(t,a,o)=>a in t?Zt(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,Jt=(t,a)=>{for(var o in a||(a={}))Xt.call(a,o)&&xe(t,o,a[o]);if(Ie)for(var o of Ie(a))wt.call(a,o)&&xe(t,o,a[o]);return t},qt=(t,a)=>Qt(t,Yt(a));const Le=S.i8,_t=()=>{const{setGuidedTourVisibility:t}=(0,i.useGuidedTour)(),a=(0,i.useNotification)(),o=(0,e.useRef)(t),r=i.auth.getUserInfo(),p=Q()(r,"username")||(0,se.Pp)(r.firstname,r.lastname),[u,f]=(0,e.useState)(p),{showReleaseNotification:y}=(0,W.um)(),[{data:h,status:g},{data:L,isLoading:D},{data:j,status:$,refetch:G,isFetched:m,isFetching:A},{data:I}]=(0,B.useQueries)([{queryKey:"app-infos",queryFn:zt},{queryKey:"strapi-release",queryFn:()=>Vt(a),enabled:y,initialData:Le},{queryKey:"admin-users-permission",queryFn:kt,initialData:[]},{queryKey:"user-roles",queryFn:Ht}]),k=(0,e.useMemo)(()=>Se(Le,L),[L]);return(0,e.useEffect)(()=>{I&&I.find(({code:Z})=>Z==="strapi-super-admin")&&o.current(!0)},[I]),D||(A&&m||g==="loading"||$==="loading")?e.createElement(i.LoadingIndicatorPage,null):g==="error"?e.createElement("div",null,"error..."):e.createElement(i.AppInfosContext.Provider,{value:qt(Jt({},h),{latestStrapiReleaseTag:L,setUserDisplayName:f,shouldUpdateStrapi:k,userDisplayName:u})},e.createElement(Ft,{permissions:j,refetchPermissions:G},e.createElement(Nt,null)))}},66952:(K,R,n)=>{n.d(R,{Z:()=>b});var e=n(67294),i=n(45697),B=n.n(i),P=n(68547),Q=n.n(P),S=n(5493),W=n.n(S),c=n(16289),V=Object.defineProperty,x=Object.getOwnPropertySymbols,C=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable,s=(l,d,E)=>d in l?V(l,d,{enumerable:!0,configurable:!0,writable:!0,value:E}):l[d]=E,T=(l,d)=>{for(var E in d||(d={}))C.call(d,E)&&s(l,E,d[E]);if(x)for(var E of x(d))U.call(d,E)&&s(l,E,d[E]);return l},N=(l,d)=>{var E={};for(var M in l)C.call(l,M)&&d.indexOf(M)<0&&(E[M]=l[M]);if(l!=null&&x)for(var M of x(l))d.indexOf(M)<0&&U.call(l,M)&&(E[M]=l[M]);return E};const v=l=>{var d=l,{type:E}=d,M=N(d,["type"]);return e.createElement(S.Box,T({width:(0,P.pxToRem)(2),height:"100%",background:E===c.VM?"neutral300":"primary500",hasRadius:!0},M))};v.defaultProps={type:c.VM},v.propTypes={type:B().oneOf([c.lW,c.hx,c.VM])};const b=v},71289:(K,R,n)=>{n.d(R,{Z:()=>v});var e=n(67294),i=n(45697),B=n.n(i),P=n(68547),Q=n.n(P),S=n(67826),W=n.n(S),c=n(49425),V=n.n(c),x=n(15804),C=n.n(x),U=n(84734),s=n.n(U),T=n(16289);const N=({type:b,number:l})=>b===T.hx?e.createElement(S.Flex,{background:"primary600",padding:2,borderRadius:"50%",width:(0,P.pxToRem)(30),height:(0,P.pxToRem)(30),justifyContent:"center"},e.createElement(x.Icon,{as:s(),"aria-hidden":!0,width:(0,P.pxToRem)(16),color:"neutral0"})):b===T.lW?e.createElement(S.Flex,{background:"primary600",padding:2,borderRadius:"50%",width:(0,P.pxToRem)(30),height:(0,P.pxToRem)(30),justifyContent:"center"},e.createElement(c.Typography,{fontWeight:"semiBold",textColor:"neutral0"},l)):e.createElement(S.Flex,{borderColor:"neutral500",borderWidth:"1px",borderStyle:"solid",padding:2,borderRadius:"50%",width:(0,P.pxToRem)(30),height:(0,P.pxToRem)(30),justifyContent:"center"},e.createElement(c.Typography,{fontWeight:"semiBold",textColor:"neutral600"},l));N.defaultProps={number:void 0,type:T.VM},N.propTypes={number:B().number,type:B().oneOf([T.lW,T.hx,T.VM])};const v=N},16289:(K,R,n)=>{n.d(R,{lW:()=>e,hx:()=>i,VM:()=>B});const e="isActive",i="isDone",B="isNotDone"},76910:(K,R,n)=>{n.d(R,{Z:()=>i});const i={contentTypeBuilder:{home:{title:{id:"app.components.GuidedTour.home.CTB.title",defaultMessage:"\u{1F9E0} Build the content structure"},cta:{title:{id:"app.components.GuidedTour.home.CTB.cta.title",defaultMessage:"Go to the Content type Builder"},type:"REDIRECT",target:"/plugins/content-type-builder"},trackingEvent:"didClickGuidedTourHomepageContentTypeBuilder"},create:{title:{id:"app.components.GuidedTour.CTB.create.title",defaultMessage:"\u{1F9E0} Create a first Collection type"},content:{id:"app.components.GuidedTour.CTB.create.content",defaultMessage:"<p>Collection types help you manage several entries, Single types are suitable to manage only one entry.</p> <p>Ex: For a Blog website, Articles would be a Collection type whereas a Homepage would be a Single type.</p>"},cta:{title:{id:"app.components.GuidedTour.CTB.create.cta.title",defaultMessage:"Build a Collection type"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep1CollectionType"},success:{title:{id:"app.components.GuidedTour.CTB.success.title",defaultMessage:"Step 1: Completed \u2705"},content:{id:"app.components.GuidedTour.CTB.success.content",defaultMessage:"<p>Good going!</p><b>\u26A1\uFE0F What would you like to share with the world?</b>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didCreateGuidedTourCollectionType"}},contentManager:{home:{title:{id:"app.components.GuidedTour.home.CM.title",defaultMessage:"\u26A1\uFE0F What would you like to share with the world?"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"REDIRECT",target:"/content-manager"},trackingEvent:"didClickGuidedTourHomepageContentManager"},create:{title:{id:"app.components.GuidedTour.CM.create.title",defaultMessage:"\u26A1\uFE0F Create content"},content:{id:"app.components.GuidedTour.CM.create.content",defaultMessage:"<p>Create and manage all the content here in the Content Manager.</p><p>Ex: Taking the Blog website example further, one can write an Article, save and publish it as they like.</p><p>\u{1F4A1} Quick tip - Don't forget to hit publish on the content you create.</p>"},cta:{title:{id:"app.components.GuidedTour.create-content",defaultMessage:"Create content"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep2ContentManager"},success:{title:{id:"app.components.GuidedTour.CM.success.title",defaultMessage:"Step 2: Completed \u2705"},content:{id:"app.components.GuidedTour.CM.success.content",defaultMessage:"<p>Awesome, one last step to go!</p><b>\u{1F680}  See content in action</b>"},cta:{title:{id:"app.components.GuidedTour.CM.success.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didCreateGuidedTourEntry"}},apiTokens:{home:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},cta:{title:{id:"app.components.GuidedTour.home.apiTokens.cta.title",defaultMessage:"Test the API"},type:"REDIRECT",target:"/settings/api-tokens"},trackingEvent:"didClickGuidedTourHomepageApiTokens"},create:{title:{id:"app.components.GuidedTour.apiTokens.create.title",defaultMessage:"\u{1F680} See content in action"},content:{id:"app.components.GuidedTour.apiTokens.create.content",defaultMessage:"<p>Generate an authentication token here and retrieve the content you just created.</p>"},cta:{title:{id:"app.components.GuidedTour.apiTokens.create.cta.title",defaultMessage:"Generate an API Token"},type:"CLOSE"},trackingEvent:"didClickGuidedTourStep3ApiTokens"},success:{title:{id:"app.components.GuidedTour.apiTokens.success.title",defaultMessage:"Step 3: Completed \u2705"},content:{id:"app.components.GuidedTour.apiTokens.success.content",defaultMessage:"<p>See content in action by making an HTTP request:</p><ul><li><p>To this URL: <light>https://'<'YOUR_DOMAIN'>'/api/'<'YOUR_CT'>'</light></p></li><li><p>With the header: <light>Authorization: bearer '<'YOUR_API_TOKEN'>'</light></p></li></ul><p>For more ways to interact with content, see the <documentationLink>documentation</documentationLink>.</p>"},trackingEvent:"didGenerateGuidedTourApiTokens"}}}}}]);
