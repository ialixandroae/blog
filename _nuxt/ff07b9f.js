(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{304:function(t,e,n){var content=n(331);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("440d2412",content,!0,{sourceMap:!1})},305:function(t,e,n){var content=n(333);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(31).default)("2e2ca089",content,!0,{sourceMap:!1})},330:function(t,e,n){"use strict";n(304)},331:function(t,e,n){var o=n(30)(!1);o.push([t.i,'.prev-blog-post{font-family:"PT Serif",serif;text-decoration:none;color:#000!important}.prev-blog-post:hover{color:#167ebe!important}.next-blog-post{font-family:"PT Serif",serif;text-decoration:none;color:#000!important}.next-blog-post:hover{color:#167ebe!important}',""]),t.exports=o},332:function(t,e,n){"use strict";n(305)},333:function(t,e,n){var o=n(30)(!1);o.push([t.i,'.blog-publish-date{margin-top:.5rem}.blog-publish-date,.blog-title{font-family:Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif}.blog-title{color:#2b3d4f;font-weight:700;font-size:3rem;margin-bottom:1rem}.content{margin-left:auto;margin-right:auto;padding-left:2rem;padding-right:2rem;max-width:740px}.nuxt-content h2{font-size:2.25rem}.nuxt-content h2,.nuxt-content h3{color:#2b3d4f;font-family:Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-weight:700;margin-top:1.25rem;margin-bottom:1.25rem;padding-bottom:.75rem;border-bottom:1px solid #ebedf0;line-height:1.3}.nuxt-content h3{font-size:1.875rem}.nuxt-content h4{color:#2b3d4f;font-family:Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;font-weight:700;margin-top:1.25rem;margin-bottom:1.25rem;padding-bottom:.75rem;border-bottom:1px solid #ebedf0;font-size:1.25rem;line-height:1.3}.nuxt-content li,.nuxt-content p{line-height:1.7;font-size:16px;font-family:"PT Serif",serif}@media screen and (min-width:600px){.nuxt-content li,.nuxt-content p{font-size:18px}}.nuxt-content p{margin-bottom:1rem}.nuxt-content ul{list-style-type:disc}.nuxt-content ol,.nuxt-content ul{list-style-position:inside;margin-bottom:1rem}.nuxt-content ol{list-style-type:decimal}.nuxt-content a{color:#167ebe!important}.nuxt-content .blog-details{margin-top:30px;margin-bottom:40px}.nuxt-content .blog-time{font-size:15px;font-weight:300}.nuxt-content .nuxt-content h2 code,.nuxt-content .nuxt-content h3 code,.nuxt-content .nuxt-content p code{color:#476582;padding:.25rem .5rem;margin:0;font-size:.85em;background-color:rgba(27,31,35,.05);border-radius:3px;font-family:Consolas,Roboto Mono,monospace}[dir=ltr] .nuxt-content .nuxt-content ul{margin-left:0}[dir=ltr] .nuxt-content .nuxt-content ul,[dir=rtl] .nuxt-content .nuxt-content ul{margin-right:0}[dir=rtl] .nuxt-content .nuxt-content ul{margin-left:0}[dir=ltr] .nuxt-content .nuxt-content ul{padding-left:40px}[dir=rtl] .nuxt-content .nuxt-content ul{padding-right:40px}.nuxt-content .nuxt-content ul{font-size:16px;word-spacing:2px;line-height:32px;display:block;list-style-type:disc;margin-top:1em;margin-bottom:1em}.nuxt-content .v-application code{all:initial;all:unset}.nuxt-content .v-application a{text-decoration:none}.nuxt-content .nuxt-content-highlight{font-family:Consolas;font-size:16px;position:relative;z-index:1;border-radius:6px}.nuxt-content .nuxt-content-highlight>.filename{font-family:Roboto;right:0;top:0;position:absolute;margin-right:.8rem;font-size:.8rem;color:#cbd5e0;font-weight:300;z-index:10;margin-top:.5rem}.nuxt-content .nuxt-content pre{position:static;border-radius:6px;font-family:Consolas;font-size:16px;padding:20px}.nuxt-content code[class*=language-],.nuxt-content pre[class*=language-]{font-size:16px;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;color:#c3cee3;font-family:Consolas,Roboto Mono,monospace;font-size:1em;line-height:1.5em;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-ms-hyphens:none;hyphens:none;margin-bottom:15px;background:#1e1e1e;text-shadow:none}.nuxt-content .token.operator{background:none}',""]),t.exports=o},365:function(t,e,n){"use strict";n.r(e);var o=n(8),r=n(3),c=(n(38),n(11),n(58),n(59),n(43),n(57),{name:"ReadTime",props:["content"],computed:{readTime:function(){var t=JSON.stringify(this.content).split(" ").length;return Math.ceil(t/200)}}}),l=n(20),m=n(285),d=n.n(m),h=n(361),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("v-icon",{attrs:{size:"small"}},[t._v("mdi-clock")]),t._v(" "+t._s(t.readTime)+" min read")],1)}),[],!1,null,null,null),f=component.exports;d()(component,{VIcon:h.a});var x={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},w=(n(330),n(359)),v=n(360),_=Object(l.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",{staticClass:"mt-4"},[t.prev?n("NuxtLink",{staticClass:"prev-blog-post text-truncate",attrs:{to:t.prev.path}},[n("v-icon",[t._v("mdi-arrow-left")]),t._v("  \n      "+t._s(t.prev.title)+"\n    ")],1):n("span",[t._v(" ")])],1),t._v(" "),n("v-col",{staticClass:"mt-4"},[n("v-row",{attrs:{justify:"end"}},[t.next?n("NuxtLink",{staticClass:"next-blog-post text-truncate",attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title)+"  \n        "),n("v-icon",[t._v("mdi-arrow-right")])],1):n("span",[t._v(" ")])],1)],1)],1)}),[],!1,null,null,null),y=_.exports;d()(_,{VCol:w.a,VIcon:h.a,VRow:v.a});var C={components:{ReadTime:f,PrevNextBlog:y},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,l,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("posts/".concat(t.params.slug)).fetch();case 2:return n=e.sent,e.next=5,t.$content("posts").only(["title","slug"]).sortBy("createdAt","asc").surround(t.params.slug).fetch();case 5:return r=e.sent,c=Object(o.a)(r,2),l=c[0],m=c[1],e.abrupt("return",{post:n,prev:l,next:m});case 10:case"end":return e.stop()}}),e)})))()},data:function(){return{currentUrl:""}},head:function(){return{title:this.post.title,titleTemplate:"%s - Ionut Alixandroae",meta:[{hid:"description",name:"description",content:this.post.description},{hid:"image",name:"image",content:"https://blog.ionutalixandroae.com"+this.post.img},{hid:"og:title",property:"og:title",content:this.post.title},{hid:"og:description",property:"og:description",content:this.post.description},{hid:"og:type",property:"og:type",content:"article"},{hid:"og:image",property:"og:image",content:"https://blog.ionutalixandroae.com"+this.post.img},{hid:"og:image:secure_url",property:"og:image:secure_url",content:"https://blog.ionutalixandroae.com"+this.post.img},{hid:"og:image:alt",property:"og:image:alt",content:this.post.title},{name:"twitter:site",content:"@ialixandroae"},{name:"twitter:card",content:"summary_large_image"},{hid:"twitter:url",name:"twitter:url",content:"https://blog.ialixandroae.com"},{hid:"twitter:creator",name:"twitter:creator",content:"@ialixandroae"},{hid:"twitter:title",name:"twitter:title",content:this.post.title},{hid:"twitter:description",name:"twitter:description",content:this.post.description},{hid:"twitter:image",name:"twitter:image",content:"https://blog.ionutalixandroae.com"+this.post.img}]}},computed:{formatPublishDate:function(){return new Date(this.post.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}},mounted:function(){this.currentUrl=window.location.href},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})},tweet:function(){var t="https://twitter.com/intent/tweet?text="+document.title+"&url="+location.href.toString().replace("localhost:3000","blog.ionutalixandroae.com");window.open(t)},linkedInPost:function(){var t="https://www.linkedin.com/shareArticle/?mini=true&url="+location.href.toString().replace("localhost:3000","blog.ionutalixandroae.com");this.PopupCenter(t,500,500)},PopupCenter:function(t,e,n){var o=void 0!==window.screenLeft?window.screenLeft:screen.left,r=void 0!==window.screenTop?window.screenTop:screen.top,c=(window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width)/2-e/2+o,l=(window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height)/2-n/2+r,m=window.open(t,"_blank","scrollbars=yes, width="+e+", height="+n+", top="+l+", left="+c);window.focus&&m.focus()}}},k=(n(332),n(362)),z=n(367),S=n(307),j=n(369),P=n(368),I=Object(l.a)(C,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",[o("v-container",{staticClass:"mb-15"},[o("v-row",{attrs:{justify:"center"}},[o("v-col",{attrs:{xl:"5",lg:"7",md:"10",sm:"10"}},[o("article",{staticClass:"content"},[o("h1",{staticClass:"blog-title"},[t._v(t._s(t.post.title))]),t._v(" "),o("h4",{staticClass:"blog-description"},[t._v(t._s(t.post.description))]),t._v(" "),o("div",{staticClass:"d-flex flex-wrap blog-details"},[o("v-avatar",{staticClass:"elevation-10",attrs:{size:"55"}},[o("img",{attrs:{src:n(186),alt:"Ionut Alixandroae",width:"96",height:"96"}})]),t._v(" "),o("a",{staticClass:"twitter-follow-button",attrs:{href:"https://twitter.com/ialixandroae?ref_src=twsrc%5Etfw","data-show-count":"false"}},[t._v("Follow @ialixandroae")]),t._v(" "),o("script",{attrs:{async:"",src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}}),t._v(" "),o("div",{staticClass:"flex flex-row justify-between"},[o("div",[o("p",{staticClass:"blog-publish-date"},[t._v(t._s(t.formatPublishDate))]),t._v(" "),o("ReadTime",{staticClass:"font-light",attrs:{content:t.post}})],1),t._v(" "),o("div",[o("v-btn",{attrs:{icon:"",color:"#757575",target:"_blank"},on:{click:function(e){return t.tweet()}}},[o("v-icon",[t._v("mdi-twitter")])],1),t._v(" "),o("v-btn",{staticClass:"mx-n1",attrs:{icon:"",color:"#757575",target:"_blank"},on:{click:function(e){return t.linkedInPost()}}},[o("v-icon",[t._v("mdi-linkedin")])],1)],1)])],1),t._v(" "),o("v-card",{staticClass:"mt-3 mb-3",attrs:{elevation:"3"}},[o("v-img",{staticClass:"grey lighten-2",attrs:{src:t.post.img}})],1),t._v(" "),o("nuxt-content",{attrs:{document:t.post}}),t._v(" "),o("div",{staticClass:"flex flex-row mt-16"},[o("span",{staticClass:"mr-2"},[o("a",{staticClass:"twitter-share-button",attrs:{href:"https://twitter.com/share?ref_src=twsrc%5Etfw","data-text":"I recommend reading this blogpost from ","data-related":"@ialixandroae","data-lang":"en","data-show-count":"false"}},[t._v("Tweet")]),t._v(" "),o("script",{attrs:{async:"",src:"https://platform.twitter.com/widgets.js",charset:"utf-8"}})]),t._v(" "),o("script",{attrs:{src:"https://platform.linkedin.com/in.js",type:"text/javascript"}},[t._v("\n              lang: en_US\n            ")]),t._v(" "),o("script",t._b({attrs:{type:"IN/Share"}},"script",t._d({},[t.data-t.url,t.curentUrl])))]),t._v(" "),o("PrevNextBlog",{attrs:{prev:t.prev,next:t.next}})],1)])],1)],1)],1)}),[],!1,null,null,null);e.default=I.exports;d()(I,{VAvatar:k.a,VBtn:z.a,VCard:S.a,VCol:w.a,VContainer:j.a,VIcon:h.a,VImg:P.a,VRow:v.a})}}]);