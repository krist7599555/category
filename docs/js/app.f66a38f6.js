(function(t){function e(e){for(var c,s,o=e[0],a=e[1],l=e[2],d=0,b=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&b.push(i[s][0]),i[s]=0;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(t[c]=a[c]);u&&u(e);while(b.length)b.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],c=!0,o=1;o<n.length;o++){var a=n[o];0!==i[a]&&(c=!1)}c&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var c={},i={app:0},r=[];function s(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=c,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)s.d(n,c,function(e){return t[e]}.bind(null,c));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=a;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"07da":function(t,e,n){},1850:function(t,e,n){"use strict";n("36ed")},"36ed":function(t,e,n){},a660:function(t,e,n){"use strict";n("07da")},abe2:function(t,e,n){},cd49:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function i(t,e){var n=Object(c["r"])("CategoryVue");return Object(c["k"])(),Object(c["e"])(n)}var r=Object(c["A"])("data-v-0e795d53");Object(c["m"])("data-v-0e795d53");var s={class:"hero"},o={class:"hero-body"},a={class:"title first"},l={class:"title second"},u={class:"title"},d={class:"is-inline"},b=Object(c["g"])("label",{style:{color:"white"}},"setting",-1),g={style:{padding:"0 1rem 1rem 1rem"}},p={style:{"font-size":"3rem",margin:"0 auto"}},f={style:{"text-align":"center"}};Object(c["l"])();var v=r((function(t,e){var n=Object(c["r"])("CategorySetting"),i=Object(c["r"])("Modal"),v=Object(c["r"])("FlipVue");return Object(c["k"])(),Object(c["e"])("div",{class:"bg",style:"background-image: url("+t.category.background+")"},[Object(c["g"])(i,{active:t.visible_setting,"onUpdate:active":e[1]||(e[1]=function(e){return t.visible_setting=e})},{default:r((function(){return[Object(c["g"])(n)]})),_:1},8,["active"]),Object(c["g"])(i,{active:t.visible_fucus_question,"onUpdate:active":e[2]||(e[2]=function(e){return t.visible_fucus_question=e}),width:640,scroll:"keep"},{default:r((function(){return[Object(c["g"])("div",s,[Object(c["g"])("div",o,[Object(c["g"])("div",a,"Question number "+Object(c["u"])(t.focus_idx+1),1),Object(c["g"])("div",l,Object(c["u"])(t.focus_question.message),1)])])]})),_:1},8,["active"]),Object(c["g"])("div",u,Object(c["u"])(t.category.title),1),Object(c["g"])("div",d,[Object(c["g"])("div",{class:"button is-small",onClick:e[3]||(e[3]=function(e){return t.visible_setting=!0}),style:{top:"1.5rem",position:"absolute",left:"1rem","background-color":"transparent",opacity:"0.5"}},[b])]),Object(c["g"])("div",g,[Object(c["g"])("div",{id:"category-grid",style:t.grid_style},[(Object(c["k"])(!0),Object(c["e"])(c["a"],null,Object(c["p"])(t.category.questions,(function(e,n){return Object(c["k"])(),Object(c["e"])("div",{class:"flip-wrapper",key:n+e.message},[Object(c["g"])(v,{ref:function(e){return t.pre_open_flipcard(n,e)},"active-hover":!1,"active-click":!0,width:"100%",height:"100%",transition:"1s"},{front:r((function(){return[Object(c["g"])("div",{class:"box plate",onClick:function(e){return t.flip(n,!0)}},[Object(c["g"])("h1",p,Object(c["u"])(n+1),1)],8,["onClick"])]})),back:r((function(){return[Object(c["g"])("div",{class:"box plate is-close my-flex",onClick:function(e){return t.flip(n,!1)}},[Object(c["g"])("div",f,Object(c["u"])(e.message),1)],8,["onClick"])]})),_:2},1536)])})),128))],4)])],4)})),j=(n("99af"),n("2ef0")),O=n("69ae"),h=(n("a15b"),n("d81d"),n("a9e3"),n("4d63"),n("ac1f"),n("25f0"),n("466d"),n("1276"),n("498a"),n("4dd0")),y=Object(c["n"])({get title(){return h["get"]("category-title")||"category สุดมันส์"},set title(t){h["set"]("category-title",t)},get background(){return h["get"]("category-background")||"https://images.unsplash.com/photo-1484503753579-5a70ce11a6ff?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&dl=tim-trad-190770-unsplash.jpg"},set background(t){h["set"]("category-background",t)},get nrow(){return Number(h["get"]("category-nrow"))||5},set nrow(t){h["set"]("category-nrow",t)},get ncol(){return Number(h["get"]("category-ncol"))||5},set ncol(t){h["set"]("category-ncol",t)},get questions(){return JSON.parse(h["get"]("category-questions")||"[]")},set questions(t){h["set"]("category-questions",JSON.stringify(t))}});function m(){y.questions=Object(j["range"])(y.nrow*y.ncol).map((function(){return{message:"",visible:!1}}))}function w(t,e){var n=Object(j["cloneDeep"])(y.questions);Object(j["set"])(n,[t,"visible"],e),y.questions=n}var k=Object(c["c"])((function(){return Object(j["range"])(y.nrow*y.ncol).map((function(t){return"".concat(t+1,":").concat(Object(j["get"])(y.questions,[t,"message"],""))})).join("\n")}));function _(t){var e=t.trim().split("\n"),n=!0,c=e.map((function(t,e){var c=t.match(new RegExp("^".concat(e+1,":(.*)$")));c||(n=!1);var i={message:c?c[1]:"",visible:Object(j["get"])(y.questions,[e,"visible"],!1)};return i}));return n?c:null}function q(t,e){return Object(c["k"])(),Object(c["e"])("div",{class:["flip-container",{"active-hover":t.activeHover,hover:t.hover}],style:{width:t.width,height:t.height},onClick:e[1]||(e[1]=function(){return t.handlerHover.apply(t,arguments)})},[Object(c["g"])("div",{class:"flipper",style:t.cardStyle},[Object(c["g"])("div",{class:"front",style:t.cardStyle},[Object(c["q"])(t.$slots,"front")],4),Object(c["g"])("div",{class:"back",style:t.cardStyle},[Object(c["q"])(t.$slots,"back")],4)],4)],6)}n("caad"),n("2532");var x=Object(c["h"])({name:"flip",props:{activeClick:{type:Boolean,required:!1,default:!1},activeHover:{type:Boolean,required:!1,default:!1},width:{type:String,required:!0},height:String,transition:{type:String,required:!1,default:"0.5s"}},data:function(){return{hover:!1}},computed:{cardStyle:function(){var t={};return this.height&&(t.height=this.height.includes("%")?"100%":this.height),this.width&&(t.width=this.width.includes("%")?"100%":this.width),this.transition&&(t.transition=this.transition),t}},methods:{handlerHover:function(){this.activeClick&&(this.hover=!this.hover),this.$emit("click",this.hover)}}});n("a660");x.render=q;var S=x,C={class:"modal-card",style:{margin:"auto"}},V=Object(c["g"])("div",{class:"modal-card-head"},[Object(c["g"])("p",{class:"modal-card-title"},"ตั้งค่า")],-1),P={class:"modal-card-body"},U={class:"field"},z={class:"control"},M={class:"field has-addons"},H=Object(c["g"])("p",{class:"control"},[Object(c["g"])("a",{class:"button is-static",style:{width:"140px"}},"title")],-1),J={class:"control"},N={class:"field"},T={class:"control"},$={class:"field has-addons"},A=Object(c["g"])("p",{class:"control"},[Object(c["g"])("a",{class:"button is-static",style:{width:"140px"}},"num row")],-1),B={class:"control"},E={class:"field"},F={class:"control"},D={class:"field has-addons"},I=Object(c["g"])("p",{class:"control"},[Object(c["g"])("a",{class:"button is-static",style:{width:"140px"}},"num col")],-1),Q={class:"control"},R={class:"field"},G={class:"control"},K={class:"field has-addons"},L=Object(c["g"])("p",{class:"control"},[Object(c["g"])("a",{class:"button is-static",style:{width:"140px"}},"background")],-1),W={class:"control"},X={class:"field"},Y={class:"control"},Z={class:"field"},tt={class:"control"};function et(t,e){return Object(c["k"])(),Object(c["e"])("div",C,[V,Object(c["g"])("div",P,[Object(c["g"])("section",null,[Object(c["g"])("div",U,[Object(c["g"])("div",z,[Object(c["g"])("div",M,[H,Object(c["g"])("p",J,[Object(c["z"])(Object(c["g"])("input",{class:"input",type:"text","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.state.title=e})},null,512),[[c["w"],t.state.title]])])])])]),Object(c["g"])("div",N,[Object(c["g"])("div",T,[Object(c["g"])("div",$,[A,Object(c["g"])("p",B,[Object(c["z"])(Object(c["g"])("input",{class:"input",type:"number","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.state.nrow=e})},null,512),[[c["w"],t.state.nrow]])])])])]),Object(c["g"])("div",E,[Object(c["g"])("div",F,[Object(c["g"])("div",D,[I,Object(c["g"])("p",Q,[Object(c["z"])(Object(c["g"])("input",{class:"input",type:"number","onUpdate:modelValue":e[3]||(e[3]=function(e){return t.state.ncol=e})},null,512),[[c["w"],t.state.ncol]])])])])]),Object(c["g"])("div",R,[Object(c["g"])("div",G,[Object(c["g"])("div",K,[L,Object(c["g"])("p",W,[Object(c["z"])(Object(c["g"])("input",{class:"input",type:"text","onUpdate:modelValue":e[4]||(e[4]=function(e){return t.state.background=e})},null,512),[[c["w"],t.state.background]])])])])]),Object(c["g"])("div",X,[Object(c["g"])("div",Y,[Object(c["z"])(Object(c["g"])("textarea",{class:["textarea",{"is-success":t.valid,"is-danger":!t.valid}],"onUpdate:modelValue":e[5]||(e[5]=function(e){return t.questions=e})},null,2),[[c["w"],t.questions]])])])]),Object(c["g"])("div",Z,[Object(c["g"])("div",tt,[Object(c["g"])("a",{class:"is-danger",onClick:e[6]||(e[6]=function(){return t.clear_text_questions.apply(t,arguments)})},"clear storage [ลบข้อมูล !!!]")])])])])}var nt=Object(c["h"])({setup:function(){var t=Object(c["o"])(!0);return{state:y,get questions(){return k.value},set questions(e){var n=_(e);n?(t.value=!0,y.questions=n):t.value=!1},valid:t,clear_text_questions:function(){t.value=!0,m()}}}});nt.render=et;var ct=nt,it=Object(c["h"])({components:{Modal:O["a"],FlipVue:S,CategorySetting:ct},setup:function(){Object(c["j"])((function(){Object(j["isEmpty"])(y.questions)&&m()}));var t=Object(c["o"])(-1),e=Object(c["c"])((function(){return Object(j["get"])(y.questions,t.value)||{message:"not exist",visible:!1}})),n=Object(c["o"])(!1),i=Object(c["o"])(!1),r=null;return{visible_setting:n,visible_fucus_question:i,focus_idx:t,focus_question:e,category:y,grid_style:Object(c["c"])((function(){return"\n        display: grid;\n        grid-template-columns: repeat(".concat(y.ncol,", 1fr);\n        grid-template-rows: repeat(").concat(y.nrow,", 1fr);\n        height: calc(100vh - 80px - 1rem);\n        grid-gap: 4px;\n      ")})),pre_open_flipcard:function(t,e){e&&e.hover!==Object(j["get"])(y.questions,[t,"visible"],!1)&&e.handlerHover()},flip:function(e,n){t.value=e,w(e,n),n&&(r&&(clearTimeout(r),r=null),r=window.setTimeout((function(){i.value=n,r=null}),800))}}}});n("1850");it.render=v,it.__scopeId="data-v-0e795d53";var rt=it,st=Object(c["h"])({name:"App",components:{CategoryVue:rt}});st.render=i;var ot=st;n("abe2");Object(c["d"])(ot).mount("#app")}});
//# sourceMappingURL=app.f66a38f6.js.map