"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[191],{2191:function(e,n,r){r.r(n),r.d(n,{default:function(){return $}});var a=r(4087),i=r(5232),t=r(5946),l=r(9434),s=r(6351),o=r(1634),d=r(8208),c=r(5442),u=r(184);function m(){var e=(0,l.I0)(),n=(0,l.v9)(s.AD);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(d.l,{children:"Find contact by name"}),(0,u.jsx)(c.I,{type:"text",onChange:function(n){var r=n.target;e((0,o.T)(r.value))},placeholder:"Enter name",value:n})]})}var h=r(9439),v=r(176),f=r(3204),x=r(3433),g=r(4799),p=r(1413),b=r(4925),j=(0,r(9886).k)({name:"AvatarStylesContext",hookName:"useAvatarStyles",providerName:"<Avatar/>"}),y=(0,h.Z)(j,2),Z=y[0],I=y[1],k=r(8161),C=["name","getInitials"];function N(e){var n,r,a=e.split(" "),i=null!=(n=a.at(0))?n:"",t=null!=(r=a.at(-1))?r:"";return i&&t?"".concat(i.charAt(0)).concat(t.charAt(0)):i.charAt(0)}function F(e){var n=e.name,r=e.getInitials,a=(0,b.Z)(e,C),i=I();return(0,u.jsx)(k.m.div,(0,p.Z)((0,p.Z)({role:"img","aria-label":n},a),{},{__css:i.label,children:n?null==r?void 0:r(n):null}))}F.displayName="AvatarName";var R=function(e){return(0,u.jsxs)(k.m.svg,(0,p.Z)((0,p.Z)({viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%",className:"chakra-avatar__svg"},e),{},{children:[(0,u.jsx)("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),(0,u.jsx)("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})]}))},_=r(9205),w=r(2791);function q(e){var n=e.src,r=e.srcSet,a=e.onError,i=e.onLoad,t=e.getInitials,l=e.name,s=e.borderRadius,o=e.loading,d=e.iconLabel,c=e.icon,m=void 0===c?(0,u.jsx)(R,{}):c,v=e.ignoreFallback,f=e.referrerPolicy,x=e.crossOrigin,g=function(e){var n=e.loading,r=e.src,a=e.srcSet,i=e.onLoad,t=e.onError,l=e.crossOrigin,s=e.sizes,o=e.ignoreFallback,d=(0,w.useState)("pending"),c=(0,h.Z)(d,2),u=c[0],m=c[1];(0,w.useEffect)((function(){m(r?"loading":"pending")}),[r]);var v=(0,w.useRef)(),f=(0,w.useCallback)((function(){if(r){x();var e=new Image;e.src=r,l&&(e.crossOrigin=l),a&&(e.srcset=a),s&&(e.sizes=s),n&&(e.loading=n),e.onload=function(e){x(),m("loaded"),null==i||i(e)},e.onerror=function(e){x(),m("failed"),null==t||t(e)},v.current=e}}),[r,l,a,s,i,t,n]),x=function(){v.current&&(v.current.onload=null,v.current.onerror=null,v.current=null)};return(0,_.G)((function(){if(!o)return"loading"===u&&f(),function(){x()}}),[u,f,o]),o?"loaded":u}({src:n,onError:a,crossOrigin:x,ignoreFallback:v});return!n||!("loaded"===g)?l?(0,u.jsx)(F,{className:"chakra-avatar__initials",getInitials:t,name:l}):(0,w.cloneElement)(m,{role:"img","aria-label":d}):(0,u.jsx)(k.m.img,{src:n,srcSet:r,alt:l,onLoad:i,referrerPolicy:f,crossOrigin:null!=x?x:void 0,className:"chakra-avatar__img",loading:o,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:s}})}q.displayName="AvatarImage";var A=r(7872),S=r(9219),L=r(2996),P=r(6992),D=["src","srcSet","name","showBorder","borderRadius","onError","onLoad","getInitials","icon","iconLabel","loading","children","borderColor","ignoreFallback","crossOrigin"],O={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},z=(0,A.G)((function(e,n){var r=(0,S.jC)("Avatar",e),a=(0,w.useState)(!1),i=(0,h.Z)(a,2),t=i[0],l=i[1],s=(0,L.Lr)(e),o=s.src,d=s.srcSet,c=s.name,m=s.showBorder,v=s.borderRadius,f=void 0===v?"full":v,x=s.onError,g=s.onLoad,j=s.getInitials,y=void 0===j?N:j,I=s.icon,C=void 0===I?(0,u.jsx)(R,{}):I,F=s.iconLabel,_=void 0===F?" avatar":F,A=s.loading,z=s.children,T=s.borderColor,B=s.ignoreFallback,E=s.crossOrigin,K=(0,b.Z)(s,D),G=(0,p.Z)((0,p.Z)({borderRadius:f,borderWidth:m?"2px":void 0},O),r.container);return T&&(G.borderColor=T),(0,u.jsx)(k.m.span,(0,p.Z)((0,p.Z)({ref:n},K),{},{className:(0,P.cx)("chakra-avatar",e.className),"data-loaded":(0,P.PB)(t),__css:G,children:(0,u.jsxs)(Z,{value:r,children:[(0,u.jsx)(q,{src:o,srcSet:d,loading:A,onLoad:(0,P.v0)(g,(function(){l(!0)})),onError:x,getInitials:y,name:c,borderRadius:f,icon:C,iconLabel:_,ignoreFallback:B,crossOrigin:E}),z]})}))}));z.displayName="Avatar";var T=r(9229),B=r(7885),E=r(3917),K=r(3634);function G(e){var n=e.contact,r=e.contactsIdToDelete,a=e.setContactsIdToDelete,t=(0,l.v9)(s.xU)[E.uG],o=(0,l.I0)(),d=t&&r.find((function(e){return e===n.id}));return(0,u.jsxs)(v.k,{mt:6,align:"center",justify:"space-between",children:[(0,u.jsxs)(v.k,{children:[(0,u.jsx)(z,{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg",alt:"Author",mr:4}),(0,u.jsxs)(i.K,{direction:"column",spacing:0,fontSize:"sm",children:[(0,u.jsx)(T.x,{fontWeight:600,children:n.name}),(0,u.jsx)(T.x,{color:"gray.500",children:n.number})]})]}),(0,u.jsx)(B.h,{size:"sm","aria-label":"Delete contact",onClick:function(){a((function(e){return[].concat((0,x.Z)(e),[n.id])})),o((0,K.GK)(n.id))},isDisabled:d,icon:(0,u.jsx)(g.T,{})})]})}function H(){var e=(0,w.useState)([]),n=(0,h.Z)(e,2),r=n[0],i=n[1],o=(0,l.v9)(s.xU),d=(0,l.v9)(s.zh),c=(0,l.v9)(s.Af),m=(0,l.v9)(s.AD);return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(v.k,{direction:"column",alignItems:"center",children:o[E.KK]?(0,u.jsx)(f.$,{mt:8,thickness:"4px",speed:"0.9s",emptyColor:"gray.200",color:"gray.400",size:"xl"}):d?(0,u.jsx)(t.X,{h:360,size:"md",mt:8,children:"Oops, something went wrong :( "}):0===c.length?(0,u.jsx)(t.X,{size:"md",h:360,mt:8,children:"You don't have contacts yet. Add one! "}):(0,u.jsx)(a.xu,{h:360,w:"100%",overflowY:"auto",pr:4,children:(0,u.jsx)("ul",{children:function(){var e=c.filter((function(e){return e.name.toLowerCase().includes(m.toLowerCase())}));return""===m?c:e}().map((function(e){return(0,u.jsx)(G,{contactsIdToDelete:r,setContactsIdToDelete:i,contact:e},e.id)}))})})})})}function J(){return(0,u.jsxs)(a.xu,{w:"100%",py:12,px:{base:0,md:6},children:[(0,u.jsx)(t.X,{fontSize:"3xl",textAlign:"center",mb:8,children:"Phonebook"}),(0,u.jsx)(m,{}),(0,u.jsx)(H,{})]})}var M=r(1252),W=r(2392),X=r(4224),Q=r(1686);function U(){var e=(0,w.useState)(""),n=(0,h.Z)(e,2),r=n[0],o=n[1],m=(0,w.useState)(""),v=(0,h.Z)(m,2),x=v[0],g=v[1],p=(0,l.I0)(),b=(0,l.v9)(s.Af),j=(0,l.v9)(s.xU)[E.km],y=function(e){var n=e.target;switch(n.name){case"name":o(n.value);break;case"number":g(n.value)}};return(0,u.jsx)("form",{onSubmit:function(e){e.preventDefault(),b.find((function(e){return e.name===r}))?Q.Notify.failure("".concat(r," is already in contacts.")):b.find((function(e){return e.number===x}))?Q.Notify.failure("Contact with number ".concat(x," already exists.")):(p((0,K.uK)({name:r,number:x})),o(""),g(""))},children:(0,u.jsxs)(i.K,{mx:"auto",spacing:8,maxW:"lg",py:12,pb:{base:0,md:12},px:{base:0,md:6},minW:"35vw",children:[(0,u.jsx)(i.K,{align:"center",children:(0,u.jsx)(t.X,{fontSize:"3xl",textAlign:"center",children:"New contact"})}),(0,u.jsx)(a.xu,{rounded:"lg",bg:(0,M.ff)("white","gray.700"),boxShadow:"lg",p:8,children:(0,u.jsxs)(i.K,{spacing:4,children:[(0,u.jsxs)(W.NI,{id:"name",isRequired:!0,children:[(0,u.jsx)(d.l,{children:"Contact name"}),(0,u.jsx)(c.I,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,value:r,placeholder:"James Douglas",onChange:y})]}),(0,u.jsxs)(W.NI,{id:"number",isRequired:!0,children:[(0,u.jsx)(d.l,{children:"Phone number"}),(0,u.jsx)(c.I,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",placeholder:"308-666-4813",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,value:x,onChange:y})]}),(0,u.jsx)(i.K,{spacing:10,pt:2,children:(0,u.jsx)(X.z,{size:"lg",bg:"green.400",color:"white",_hover:{bg:"green.500"},isDisabled:j,type:"submit",children:j?(0,u.jsxs)(u.Fragment,{children:["Adding",(0,u.jsx)(f.$,{speed:"0.9s",size:"sm",ml:4})]}):"Add contact"})})]})})]})})}function $(){var e=(0,l.I0)();return(0,w.useEffect)((function(){e((0,K.yF)())}),[e]),(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)(a.xu,{display:{base:"block",md:"flex"},children:[(0,u.jsx)(i.K,{display:{base:"flex",md:"block"},justify:"center",mr:{base:"auto",md:12},children:(0,u.jsx)(U,{})}),(0,u.jsx)(i.K,{flexGrow:1,children:(0,u.jsx)(J,{})})]})})}},2392:function(e,n,r){r.d(n,{NI:function(){return C},NJ:function(){return k},e:function(){return j}});var a=r(1413),i=r(4925),t=r(9439),l=r(9886),s=r(4591),o=r(7872),d=r(9219),c=r(2996),u=r(8161),m=r(6992),h=r(2791),v=r(184),f=["id","isRequired","isInvalid","isDisabled","isReadOnly"],x=["getRootProps","htmlProps"],g=(0,l.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),p=(0,t.Z)(g,2),b=p[0],j=p[1],y=(0,l.k)({strict:!1,name:"FormControlContext"}),Z=(0,t.Z)(y,2),I=Z[0],k=Z[1];var C=(0,o.G)((function(e,n){var r=(0,d.jC)("Form",e),l=function(e){var n=e.id,r=e.isRequired,l=e.isInvalid,o=e.isDisabled,d=e.isReadOnly,c=(0,i.Z)(e,f),u=(0,h.useId)(),v=n||"field-".concat(u),x="".concat(v,"-label"),g="".concat(v,"-feedback"),p="".concat(v,"-helptext"),b=(0,h.useState)(!1),j=(0,t.Z)(b,2),y=j[0],Z=j[1],I=(0,h.useState)(!1),k=(0,t.Z)(I,2),C=k[0],N=k[1],F=(0,h.useState)(!1),R=(0,t.Z)(F,2),_=R[0],w=R[1],q=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({id:p},e),{},{ref:(0,s.lq)(n,(function(e){e&&N(!0)}))})}),[p]),A=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({},e),{},{ref:n,"data-focus":(0,m.PB)(_),"data-disabled":(0,m.PB)(o),"data-invalid":(0,m.PB)(l),"data-readonly":(0,m.PB)(d),id:void 0!==e.id?e.id:x,htmlFor:void 0!==e.htmlFor?e.htmlFor:v})}),[v,o,_,l,d,x]),S=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({id:g},e),{},{ref:(0,s.lq)(n,(function(e){e&&Z(!0)})),"aria-live":"polite"})}),[g]),L=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)((0,a.Z)({},e),c),{},{ref:n,role:"group"})}),[c]),P=(0,h.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,a.Z)((0,a.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!r,isInvalid:!!l,isReadOnly:!!d,isDisabled:!!o,isFocused:!!_,onFocus:function(){return w(!0)},onBlur:function(){return w(!1)},hasFeedbackText:y,setHasFeedbackText:Z,hasHelpText:C,setHasHelpText:N,id:v,labelId:x,feedbackId:g,helpTextId:p,htmlProps:c,getHelpTextProps:q,getErrorMessageProps:S,getRootProps:L,getLabelProps:A,getRequiredIndicatorProps:P}}((0,c.Lr)(e)),o=l.getRootProps,g=(l.htmlProps,(0,i.Z)(l,x)),p=(0,m.cx)("chakra-form-control",e.className);return(0,v.jsx)(I,{value:g,children:(0,v.jsx)(b,{value:r,children:(0,v.jsx)(u.m.div,(0,a.Z)((0,a.Z)({},o({},n)),{},{className:p,__css:r.container}))})})}));C.displayName="FormControl",(0,o.G)((function(e,n){var r=k(),i=j(),t=(0,m.cx)("chakra-form__helper-text",e.className);return(0,v.jsx)(u.m.div,(0,a.Z)((0,a.Z)({},null==r?void 0:r.getHelpTextProps(e,n)),{},{__css:i.helperText,className:t}))})).displayName="FormHelperText"},8208:function(e,n,r){r.d(n,{l:function(){return h}});var a=r(1413),i=r(4925),t=r(2392),l=r(7872),s=r(9219),o=r(2996),d=r(8161),c=r(6992),u=r(184),m=["className","children","requiredIndicator","optionalIndicator"],h=(0,l.G)((function(e,n){var r,l=(0,s.mq)("FormLabel",e),h=(0,o.Lr)(e),f=(h.className,h.children),x=h.requiredIndicator,g=void 0===x?(0,u.jsx)(v,{}):x,p=h.optionalIndicator,b=void 0===p?null:p,j=(0,i.Z)(h,m),y=(0,t.NJ)(),Z=null!=(r=null==y?void 0:y.getLabelProps(j,n))?r:(0,a.Z)({ref:n},j);return(0,u.jsxs)(d.m.label,(0,a.Z)((0,a.Z)({},Z),{},{className:(0,c.cx)("chakra-form__label",h.className),__css:(0,a.Z)({display:"block",textAlign:"start"},l),children:[f,(null==y?void 0:y.isRequired)?g:b]}))}));h.displayName="FormLabel";var v=(0,l.G)((function(e,n){var r=(0,t.NJ)(),i=(0,t.e)();if(!(null==r?void 0:r.isRequired))return null;var l=(0,c.cx)("chakra-form__required-indicator",e.className);return(0,u.jsx)(d.m.span,(0,a.Z)((0,a.Z)({},null==r?void 0:r.getRequiredIndicatorProps(e,n)),{},{__css:i.requiredIndicator,className:l}))}));v.displayName="RequiredIndicator"},5442:function(e,n,r){r.d(n,{I:function(){return x}});var a=r(1413),i=r(4925),t=r(2392),l=r(6992),s=["isDisabled","isInvalid","isReadOnly","isRequired"],o=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function d(e){var n=function(e){var n,r,s,d=(0,t.NJ)(),c=e.id,u=e.disabled,m=e.readOnly,h=e.required,v=e.isRequired,f=e.isInvalid,x=e.isReadOnly,g=e.isDisabled,p=e.onFocus,b=e.onBlur,j=(0,i.Z)(e,o),y=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==d?void 0:d.hasFeedbackText)&&(null==d?void 0:d.isInvalid)&&y.push(d.feedbackId);(null==d?void 0:d.hasHelpText)&&y.push(d.helpTextId);return(0,a.Z)((0,a.Z)({},j),{},{"aria-describedby":y.join(" ")||void 0,id:null!=c?c:null==d?void 0:d.id,isDisabled:null!=(n=null!=u?u:g)?n:null==d?void 0:d.isDisabled,isReadOnly:null!=(r=null!=m?m:x)?r:null==d?void 0:d.isReadOnly,isRequired:null!=(s=null!=h?h:v)?s:null==d?void 0:d.isRequired,isInvalid:null!=f?f:null==d?void 0:d.isInvalid,onFocus:(0,l.v0)(null==d?void 0:d.onFocus,p),onBlur:(0,l.v0)(null==d?void 0:d.onBlur,b)})}(e),r=n.isDisabled,d=n.isInvalid,c=n.isReadOnly,u=n.isRequired,m=(0,i.Z)(n,s);return(0,a.Z)((0,a.Z)({},m),{},{disabled:r,readOnly:c,required:u,"aria-invalid":(0,l.Qm)(d),"aria-required":(0,l.Qm)(u),"aria-readonly":(0,l.Qm)(c)})}var c=r(7872),u=r(9219),m=r(2996),h=r(8161),v=r(184),f=["htmlSize"],x=(0,c.G)((function(e,n){var r=e.htmlSize,t=(0,i.Z)(e,f),s=(0,u.jC)("Input",t),o=d((0,m.Lr)(t)),c=(0,l.cx)("chakra-input",e.className);return(0,v.jsx)(h.m.input,(0,a.Z)((0,a.Z)({size:r},o),{},{__css:s.field,ref:n,className:c}))}));x.displayName="Input",x.id="Input"}}]);
//# sourceMappingURL=191.fb931a8c.chunk.js.map