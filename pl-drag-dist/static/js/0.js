(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{121:function(t,e,n){},122:function(t,e,n){},123:function(t,e,n){},124:function(t,e,n){},125:function(t,e,n){},126:function(t,e,n){},127:function(t,e,n){},19:function(t,e,n){"use strict";n.d(e,"a",(function(){return m})),n.d(e,"d",(function(){return f})),n.d(e,"b",(function(){return p})),n.d(e,"c",(function(){return h}));var i=n(8),o=n.n(i),a=n(128),r=n.n(a),c=n(14),l=n.n(c),u=n(71),s=n(92),d=n(28),m=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(null===e||"object"!==(void 0===e?"undefined":l()(e)))return e;var i=n.filter((function(t){return t.original===e}))[0];if(i)return i.copy;var o=Array.isArray(e)?[]:{};return n.push({original:e,copy:o}),r()(e).forEach((function(i){o[i]=t(e[i],n)})),o},f=function(t){var e,n=Object(u.cloneDeep)(t),i=Object(u.cloneDeep)(d.b),a=o()({uuid:(e=(new Date).getTime(),window.performance&&"function"==typeof window.performance.now&&(e+=performance.now()),"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"===t?n:3&n|8).toString(16)})))},i,n,{propsValue:m(n.needProps||{})});return a.commonStyle=Object(u.merge)(a.commonStyle,n.commonStyle),delete a.needProps,a},p=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=["width","height","lineHeight","padding","top","left","paddingTop","paddingLeft","paddingRight","paddingBottom","marginTop","marginLeft","marginRight","marginBottom","borderWidth","fontSize","borderRadius","letterSpacing"],i={};if(!t)return{};for(var o in t)n.includes(o)?i[o]="string"==typeof t[o]?t[o]:t[o]*e+"px":i[o]=t[o];return i.transform="rotate("+i.rotate+"deg)",i.backgroundImage=i.backgroundImage?"url("+i.backgroundImage+")":"",i},h=function(t){var e=void 0;for(var n in s.d)if(n.toLowerCase()===Object(u.camelCase)(t).toLowerCase()){e=s.d[n];break}if(!e)return{};var i={},o=e.data?e.data():{};for(var a in o)i[a]=o[a];return i}},191:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return u}));var i=n(8),o=n.n(i),a=n(28),r={elName:"pl-container",title:"自由容器",icon:"iconfont iconrongqi",pointList:["b"],containerStyle:{marginBottom:10},allowed:!0,showTitle:!0,titleStyle:{height:50,lineHeight:50},titleBarName:"标题栏",commonStyle:{width:a.d.width,height:250,position:"relative",minHeight:50,backgroundColor:"#fff"},childNode:[]},c=[{title:"基础组件",components:[r,{elName:"pl-text",title:"文本",icon:"iconfont iconwenbenyu",pointList:[],contenteditable:!1,placeholder:"点击输入内容",commonStyle:o()({},a.a,{padding:8,fontSize:15,lineHeight:17,height:"auto",textAlign:"left",minWidth:35,width:160})},{elName:"pl-button",title:"按钮",icon:"iconfont iconanniu",pointList:["lt","rt","lb","rb","l","r","t","b"],contenteditable:!1,options:{classList:[],lineHeightChange:!0},commonStyle:o()({},a.a,{fontSize:15,lineHeight:36,height:36,textAlign:"center",minWidth:35,minHeight:36,width:80})},{elName:"cube-nav",title:"魔方导航",icon:"iconfont iconfenlei",module:!0,containerOptions:o()({},a.c,{titleBarName:"魔方导航模块"}),options:{classList:[]}},{elName:"carousel",title:"多图文轮播",icon:"iconfont iconlunbotu",module:!0,containerOptions:o()({},a.c,{titleBarName:"多图文轮播"}),options:{classList:[]}}]}],l=[].concat(c),u=l.map((function(t){return t.components.map((function(t){if(!t.module&&"pl-container"!==t.elName)return t.elName}))}))[0].filter((function(t){return t}));e.a=l},28:function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"b",(function(){return r})),n.d(e,"e",(function(){return c}));var i={width:375,height:667},o={position:"absolute",top:5,left:5},a={allowed:!1,titleBarName:"标题栏",pointList:[],commonStyle:{width:i.width,height:"auto",position:"relative",backgroundColor:"#fff"}},r={animations:[],events:[],commonStyle:{},propsValue:{}},c={name:"可视化页面编辑器",scale:1,commonStyle:{backgroundColor:"#f4f4f4"},author:"pl",pageName:"页面名称",config:{},width:i.width,height:i.height,elements:[]}},491:function(t,e,n){"use strict";var i=n(121);n.n(i).a},524:function(t,e,n){},572:function(t,e,n){"use strict";var i=n(122);n.n(i).a},573:function(t,e,n){"use strict";var i=n(123);n.n(i).a},574:function(t,e,n){"use strict";var i=n(124);n.n(i).a},575:function(t,e,n){"use strict";var i=n(125);n.n(i).a},576:function(t,e,n){"use strict";var i=n(126);n.n(i).a},577:function(t,e,n){"use strict";var i=n(127);n.n(i).a},578:function(t,e,n){},580:function(t,e,n){"use strict";n.r(e);n(262);var i,o=n(3),a=n(93),r=n.n(a),c=n(94),l=n.n(c),u=n(95),s=n.n(u),d=n(96),m=n.n(d),f=n(47),p=Object(f.a)()(i=function(t){function e(){return l()(this,e),s()(this,(e.__proto__||r()(e)).apply(this,arguments))}return m()(e,t),e}(f.c))||i,h=(n(491),n(13)),v=Object(h.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)}),[],!1,null,null,null).exports,g=n(77),x=n.n(g),b=(n(523),n(524),n(69));o.default.use(b.b);var I=new b.b.Store({state:{token:{token:123}},mutations:{},actions:{}}),C={install:function(t){t.prototype.$bus=new o.default}},y=n(260),w=n.n(y),E=n(185),O=n.n(E),_=n(186),D=n.n(_),j=n(261),N=n.n(j),S=n(128),U=n.n(S),k=n(187),T=n.n(k),L={install:function(t){t.prototype.$http=T.a,t.http=T.a}},M=n(188);o.default.use(M.a);var P=new M.a({base:"./",mode:"history",routes:[{path:"/",redirect:"/editor/index"}]}),$="";$="/erp",o.default.use(L);var V=0,B=[];o.default.http.defaults.baseURL=$,o.default.http.interceptors.request.use((function(t){var e=t.url;if("get"===t.method&&t.params){e+="?";var n=U()(t.params),i=!0,o=!1,a=void 0;try{for(var r,c=N()(n);!(i=(r=c.next()).done);i=!0){var l=r.value;t.params[l]&&(e+=l+"="+encodeURIComponent(t.params[l])+"&")}}catch(t){o=!0,a=t}finally{try{!i&&c.return&&c.return()}finally{if(o)throw a}}e=e.substring(0,e.length-1),t.params={}}return t.url=e,t.headers.Authorization=I.state.token.token,(t.data||{}).noLoading||I.commit("loading"),V++,t}),(function(t){return D.a.reject(t)})),o.default.http.interceptors.response.use((function(t){if(I.commit("loadingComplete"),V--,t.status>=200&&t.status<=300){if(t.data.code&&"0"!==t.data.code)if(B=[].concat(O()(new w.a([].concat(O()(B),[t.data.msg])))),0===V&&(B.forEach((function(t,e){g.Message.error({showClose:!0,message:t,duration:2e3,offset:20*(e+1)})})),B=[]),"NO_AUTH"===t.data.code||"NO_AUTHC"===t.data.code)I.commit("REMOVETOKEN"),P.push({path:"/login"});else if("TENANT_EXPIRE"===t.data.code)I.commit("REMOVETOKEN"),P.push({path:"/login"});else if("TENANT_FORBIDDEN_ACCOUNT"===t.data.code)I.commit("REMOVETOKEN"),P.push({path:"/login"});else if("SAAS_FORBIDDEN_ACCOUNT"===t.data.code)I.commit("REMOVETOKEN"),P.push({path:"/login"});else{if("TOKEN_EXPIRE"!==t.data.code)return t;I.commit("REMOVETOKEN"),P.push({path:"/login"})}return t}}),(function(t){return I.commit("loadingComplete"),V--,D.a.reject(t.response)})),P.beforeEach((function(t,e,n){I.state.loadingCount=0;I.state.token.token;n()}));var H,R=n(19),A=n(70),F=n(28),z={namespaced:!0,state:{projectData:Object(R.a)(F.e),parentContainerInfo:{},hoverChildUUID:"",activeElementUUID:"",activeContainerIndex:"",middlePlaceholder:""},mutations:{setParentInfo:function(t,e){t.parentContainerInfo=Object(R.a)(e||{})},setMiddlePlaceholder:function(t,e){t.middlePlaceholder=e},setActiveElementUUID:function(t,e){t.activeElementUUID=e},setHoverChildUUID:function(t,e){t.hoverChildUUID=e||null},addElement:function(t,e){var n=Object(A.e)(e);n&&t.projectData.elements.push(n)},addDesignatedLocationElement:function(t,e){var n=Object(A.e)(e.nodeData),i=parseInt(e.index);n&&i>=0&&t.projectData.elements.splice(i,0,n)},addDropNodeElement:function(t,e){var n=Object(A.e)(e.nodeData,"我是往容器里面加节点不需要被容器包裹"),i=parseInt(e.index);n&&i>=0&&t.projectData.elements[i].childNode.push(n)},deleteNodeElement:function(t,e){e&&Object(A.f)(e)&&(1===e.length?t.projectData.elements.splice(e[0],1):2===e.length&&t.projectData.elements[e[0]].childNode.splice(e[1],1))},setContainerIndex:function(t,e){t.activeContainerIndex=e}},getters:{activeElementIndex:function(t){return function(e){return function t(e,n){for(var i=0;i<e.length;i++){var o=e[i];if(o.uuid===n)return[i];if(o.childNode&&o.childNode.length>0){var a=t(o.childNode,n);if(a)return[i].concat(a)}}}(t.projectData.elements,e)}},getParentInfo:function(t){return function(e){return function t(e,n){if(e)for(var i=0;i<e.length;i++){var o=e[i];if(o.uuid===n)return o;if(o.childNode&&o.childNode.length>0&&t(o.childNode,n))return e[i]}}(t.projectData.elements,e)}}},actions:{reqDeleteNodeElement:function(t,e){var n=t.getters,i=t.commit,o=n.activeElementIndex;if(!e)return"";i("deleteNodeElement",o(e))}}},q=Object(f.a)({components:{}})(H=function(t){function e(){return l()(this,e),s()(this,(e.__proto__||r()(e)).apply(this,arguments))}return m()(e,t),e}(f.c))||H,K=(n(577),[{path:"/editor",component:Object(h.a)(q,(function(){var t=this.$createElement,e=this._self._c||t;return e("el-container",{staticClass:"avue-contail"},[e("el-header",{staticClass:"avue-haeder",staticStyle:{height:"48px"}},[e("div",{staticClass:"title"},[this._v("pl-drag-template可视化编辑器")])]),this._v(" "),e("el-main",{staticClass:"avue-main"},[e("router-view")],1)],1)}),[],!1,null,null,null).exports,name:"可视化模板",children:[{path:"index",name:"推荐有奖",component:function(){return n.e(3).then(n.bind(null,598))}}]}]);n(578);[{install:function(t,e){var n=e.store;e.router.addRoutes(K),n.registerModule("editorModule",z)}}].forEach((function(t){o.default.use(t,{store:I,router:P})})),o.default.use(x.a),o.default.use(C),o.default.config.productionTip=!1,f.a.registerHooks(["beforeRouteEnter","beforeRouteLeave","beforeRouteUpdate"]),new o.default({router:P,store:I,render:function(t){return t(v)}}).$mount("#app")},70:function(t,e,n){"use strict";n.d(e,"c",(function(){return m})),n.d(e,"d",(function(){return f})),n.d(e,"f",(function(){return p})),n.d(e,"e",(function(){return h})),n.d(e,"b",(function(){return v})),n.d(e,"a",(function(){return g})),n.d(e,"g",(function(){return x}));var i=n(8),o=n.n(i),a=n(19),r=n(191),c=n(92),l=n(28),u=n(71),s=n(77),d={t:"n",b:"s",l:"w",r:"e"},m=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d,i=e,o=i.height,a=i.width,r=/t/.test(t),c=/b/.test(t),l=/l/.test(t),u=/r/.test(t),s=0,m=0;2===t.length?(s=l?0:a,m=r?0:o):((r||c)&&(s=a/2,m=r?0:o),(l||u)&&(s=l?0:a,m=o/2));var f={marginLeft:l||u?"-5px":0,marginTop:r||c?"-4px":0,left:s+"px",top:m+"px",cursor:t.split("").reverse().map((function(t){return n[t]})).join("")+"-resize"};return f},f=function(t){return t&&t.classList?t.classList:[]},p=function(t){return"[object Array]"===Object.prototype.toString.call(t)},h=function(t,e){if(!t||!c.a.includes(Object(u.camelCase)(t.elName).toLowerCase()))return s.Message.error({message:"没有该模块!",type:"warning",duration:2e3}),null;var n,i=void 0,d=Object(a.c)(t.elName);if("pl-container"!==(i=Object(a.a)(Object(a.d)(o()({},t,{needProps:d})))).elName&&"我是往容器里面加节点不需要被容器包裹"!==e){var m=Object(a.c)("pl-container"),f=Object(a.d)(o()({},r.c,{needProps:m}));if(i.module){var p=(n=i.containerOptions,"[object Object]"===Object.prototype.toString.call(n)?i.containerOptions:l.c),h=o()({},f,p);return delete i.containerOptions,h.childNode.push(i),Object(a.a)(h)}return f.childNode.push(i),Object(a.a)(f)}return i},v=function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments[2];if(!i)return e.scrollTop=n,n;var o=20,a=i/o,r=e.scrollTop,c=(n-r)/a,l=setInterval((function(){a>0?(a--,t(e,r+=c)):clearInterval(l)}),o)},g=function(t,e){for(var n=[],i={},o=Object(a.a)(t),r=0;r<o.length;r++)i[o[r][e]]||(n.push(o[r]),i[o[r][e]]=!0);return n},x=function(t,e,n,i){return"up"===i?(t.unshift(t[e]),t.splice(e+1,1),t):"down"===i?(t.push(t[e]),t.splice(e,1),t):(t[e]=t.splice(n,1,t[e])[0],t)}},92:function(t,e,n){"use strict";n.d(e,"a",(function(){return k})),n.d(e,"c",(function(){return r})),n.d(e,"b",(function(){return E})),n.d(e,"d",(function(){return U}));var i={name:"PlEditDiv",props:{value:{type:String,default:""},placeholder:{type:String,default:""},canEdit:{type:Boolean,default:!0},nowrap:{type:Boolean,default:!1}},data:function(){return{innerText:this.value,isLocked:!1}},watch:{value:function(){this.isLocked||this.innerText||(this.innerText=this.value)}},created:function(){this.innerText=this.value},methods:{textFocus:function(){this.$emit("textFocus")},textClick:function(){this.isLocked=!0,this.$emit("textClick"),this.$nextTick((function(){this.$refs.editDiv.focus()}))},textBlur:function(){this.isLocked=!1,this.$emit("textBlur")},changeText:function(){"<br>"===this.$el.innerHTML&&(this.$el.innerHTML=""),this.$emit("input",this.$el.innerHTML)},keyDown:function(t){this.nowrap&&t.preventDefault()}}},o=(n(572),n(13)),a=Object(o.a)(i,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{ref:"editDiv",staticClass:"edit-div",attrs:{placeholder:t.placeholder,contenteditable:t.canEdit},domProps:{innerHTML:t._s(t.innerText)},on:{click:t.textClick,keydown:function(e){return e.type.indexOf("key")||13===e.keyCode?t.keyDown(e):null},focus:t.textFocus,blur:t.textBlur,input:t.changeText}})}),[],!1,null,null,null).exports;a.install=function(t){t.component(a.name,a)};var r=a,c=n(8),l=n.n(c),u=n(69),s=Object(u.a)("editorModule").mapState,d={name:"PlText",components:{plEditDiv:r},computed:l()({},s({activeElementUUID:function(t){return t.activeElementUUID}})),props:{value:{type:String,default:""},childItem:{type:Object,default:function(){return{}}}},data:function(){return{tempValue:"",editStatusFlse:!1}},created:function(){this.tempValue=this.value},methods:{handleMouseDownOnPoint:function(t){this.$emit("plTextMouseDown",t)}},watch:{value:function(t){this.tempValue=t},tempValue:function(){this.$emit("input",this.tempValue)}}},m=(n(573),Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pl-text",class:{editStatus:t.editStatusFlse}},[n("pl-edit-div",{style:{cursor:t.childItem.contenteditable?"text":"default"},attrs:{"can-edit":t.childItem.contenteditable,placeholder:t.childItem.placeholder},on:{textClick:function(e){t.childItem.contenteditable=!0},textFocus:function(e){t.editStatusFlse=!0},textBlur:function(e){t.childItem.contenteditable=!1,t.editStatusFlse=!1}},model:{value:t.tempValue,callback:function(e){t.tempValue=e},expression:"tempValue"}}),t._v(" "),t.childItem.uuid===t.activeElementUUID?n("div",{staticClass:"ui-resizable-Line",staticStyle:{right:"-4px"}},[n("div",{staticClass:"ui-resizable-icon edit-shape-point",on:{mousedown:function(e){return t.handleMouseDownOnPoint("r")}}})]):t._e(),t._v(" "),t.childItem.uuid===t.activeElementUUID?n("div",{staticClass:"ui-resizable-Line",staticStyle:{left:"-4px"}},[n("div",{staticClass:"ui-resizable-icon edit-shape-point",on:{mousedown:function(e){return t.handleMouseDownOnPoint("l")}}})]):t._e()],1)}),[],!1,null,"8aa160a0",null).exports);m.install=function(t){t.component(m.name,m)};var f=m,p={name:"PlButton",components:{plEditDiv:r},props:{value:{type:String,default:"按钮"},childItem:{type:Object,default:function(){return{}}}},data:function(){return{tempValue:""}},created:function(){this.tempValue=this.value},watch:{value:function(t){this.tempValue=t},tempValue:function(){this.$emit("input",this.tempValue)}}},h=(n(574),Object(o.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"plButton"},[n("pl-edit-div",{staticClass:"user-select",style:{cursor:t.childItem.contenteditable?"text":"default"},attrs:{nowrap:"","can-edit":t.childItem.contenteditable},on:{textClick:function(e){t.childItem.contenteditable=!0},textBlur:function(e){t.childItem.contenteditable=!1}},model:{value:t.tempValue,callback:function(e){t.tempValue=e},expression:"tempValue"}})],1)}),[],!1,null,"02886c6e",null).exports);h.install=function(t){t.component(h.name,h)};var v=h,g=n(19),x=n(70),b=Object(u.a)("editorModule"),I=b.mapMutations,C=b.mapState,y={name:"PlContainer",computed:l()({},C({activeElementUUID:function(t){return t.activeElementUUID},hoverChildUUID:function(t){return t.hoverChildUUID},middlePlaceholder:function(t){return t.middlePlaceholder},parentContainerInfo:function(t){return t.parentContainerInfo}}),{getFindIndex:function(){var t=this;return this.containerItem.childNode.findIndex((function(e){return e.uuid===t.hoverChildUUID}))}}),props:{containerIndex:{require:!0,type:Number,default:0},titleBarName:{type:String,default:""},commonStyle:{require:!0,type:Object,default:function(){return{}}},containerItem:{type:Object,default:function(){return{}}}},methods:l()({},I(["setActiveElementUUID","setParentInfo","setContainerIndex"]),{convertCommonStyle:function(t){return Object(g.b)(t)},getPointStyle:function(t){return Object(x.c)(t,this.commonStyle)},handleTopWrapperClick:function(t){this.setActiveElementUUID(t.uuid),this.setParentInfo()},handleMouseDownOnPoint:function(t){var e=this,n=event;n.stopPropagation(),n.preventDefault();var i=parseFloat(this.containerItem.commonStyle.minHeight)||0,o=l()({},this.commonStyle),a=o.height,r=o.width,c=o.top,u=o.left,s=n.clientX,d=n.clientY,m=function(n){var l=n.clientX,m=n.clientY-d,f=l-s,p=/t/.test(t),h=/b/.test(t),v=/l/.test(t),g=/r/.test(t),x=+a+(p?-m:h?m:0),b=+r+(v?-f:g?f:0);o.height=x>0?x:0,o.width=b>0?b:0,o.left=+u+(v?f:0),o.top=+c+(p?m:0),o.height>i&&e.$emit("resize",o)};document.addEventListener("mousemove",m),document.addEventListener("mouseup",(function t(){e.$emit("resize"),document.removeEventListener("mousemove",m),document.removeEventListener("mouseup",t)}))},containerMouseover:function(t,e){this.setContainerIndex(e);var n=this.$refs[t].getBoundingClientRect();this.$emit("containerMouseover",n)},containerMouseouts:function(t){t.toElement&&t.toElement.classList.contains("sm-tool-btn")||(this.setContainerIndex(null),this.$emit("containerMouseout"))}})},w=Object(o.a)(y,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"pl-container",style:t.convertCommonStyle(t.containerItem.containerStyle),attrs:{"data-uuid":t.containerItem.uuid}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.middlePlaceholder,expression:"middlePlaceholder"}],staticClass:"g_middlePlaceholder",attrs:{"data-container-index":t.containerIndex}},[t._v("放在这里")]),t._v(" "),n("div",{ref:"container"+t.containerIndex,staticClass:"module-component-wrapper",class:[{moduleActive:t.parentContainerInfo.uuid===t.containerItem.uuid},{editStatus:t.containerItem.uuid===t.activeElementUUID},{childHover:-1!==t.getFindIndex}],on:{mouseover:function(e){return t.containerMouseover("container"+t.containerIndex,t.containerIndex)},mouseout:t.containerMouseouts,click:function(e){return t.handleTopWrapperClick(t.containerItem)}}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.middlePlaceholder,expression:"middlePlaceholder"}],staticClass:"module_editor",class:{allowed:t.containerItem.allowed},attrs:{"data-container-index":t.containerIndex,"data-title-height":t.containerItem.showTitle&&t.containerItem.titleStyle?t.containerItem.titleStyle.height:0}}),t._v(" "),t.containerItem.showTitle?n("div",{staticClass:"titles",style:t.convertCommonStyle(t.containerItem.titleStyle)},[t._v("\n      "+t._s(t.titleBarName)+"\n    ")]):t._e(),t._v(" "),n("div",{staticClass:"module_bgContent_wrapper",style:t.convertCommonStyle(t.containerItem.commonStyle)},[t.containerItem.childNode.length?t._e():n("div",{staticClass:"emptyModule"},[n("div",{staticClass:"emptyModuleText"},[t._v("自由容器可添加文本、图片、按钮模块")])]),t._v(" "),t.containerItem.childNode.length?n("div",{staticClass:"packModulesContainer"},[t._t("default")],2):t._e(),t._v(" "),t._l(t.containerItem.uuid===t.activeElementUUID&&t.containerItem.pointList||[],(function(e){return n("div",{key:e,staticClass:"edit-shape-point",style:t.getPointStyle(e),on:{mousedown:function(n){return t.handleMouseDownOnPoint(e)}}})}))],2)])])}),[],!1,null,null,null).exports;w.install=function(t){t.component(w.name,w)};var E=w,O={name:"CubeNav",data:function(){return{navData:[{name:"超市便利1"},{name:"超市便利2"},{name:"超市便利3"},{name:"超市便利4"},{name:"超市便利5"}]}}},_=(n(575),Object(o.a)(O,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"magic-square-container"},[n("div",{staticClass:"magic-style-one column-1"},t._l(t.navData,(function(e,i){return n("div",{key:i,staticClass:"nav-icon"},[n("a",[t._m(0,!0),t._v(" "),n("div",{staticClass:"nav-icon-text"},[t._v(t._s(e.name))])])])})),0)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"nav-icon-bg"},[e("span",{staticClass:"iconfont iconzhanghaoxinxi"})])}],!1,null,"08ade2aa",null).exports);_.install=function(t){t.component(_.name,_)};var D=_,j={name:"Carousel",props:{childItem:{type:Object,default:function(){return{}}}},data:function(){return{carouselHeight:150}}},N=(n(576),Object(o.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"carousel"},[n("el-carousel",{attrs:{trigger:"click",height:t.carouselHeight+"px"}},t._l(4,(function(e){return n("el-carousel-item",{key:e},[n("h3",{staticClass:"small"},[t._v(t._s(e))])])})),1)],1)}),[],!1,null,null,null).exports);N.install=function(t){t.component(N.name,N)};var S=[r,f,v,E,D,N],U={},k=[];S.forEach((function(t){U[t.name]=t,t.name&&"string"==typeof t.name&&k.push(t.name.toLowerCase())}))}},[[580,1,2]]]);