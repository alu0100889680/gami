(function(t){function e(e){for(var a,r,i=e[0],l=e[1],c=e[2],d=0,p=[];d<i.length;d++)r=i[d],o[r]&&p.push(o[r][0]),o[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,i=1;i<s.length;i++){var l=s[i];0!==o[l]&&(a=!1)}a&&(n.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},o={app:0},n=[];function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var a=s("64a9"),o=s.n(a);o.a},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d");var a=s("2b0e"),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("nav",{staticClass:"navbar navbar-expand-sm bg-dark navbar-dark"},[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("Home")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/create"}},[t._v("Create Post")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/posts"}},[t._v("Posts")])],1)])]),s("br"),s("transition",{attrs:{name:"fade"}},[s("router-view")],1)],1)},n=[],r={},i=r,l=(s("034f"),s("2877")),c=Object(l["a"])(i,o,n,!1,null,null,null),u=c.exports,d=(s("ab8b"),s("8c4f")),p=s("a7fe"),v=s.n(p),f=s("bc3a"),m=s.n(f),h=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"card card-default"},[s("div",{staticClass:"card-header"},[t._v("Home Component")]),s("div",{staticClass:"card-body"},[t._v("\n                I'm the Home Component component.\n            ")])])])])}],_={},C=_,y=Object(l["a"])(C,h,b,!1,null,null,null),g=y.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v("Create A Post")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.addPost(e)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Post Title:")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.post.title,expression:"post.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.post.title},on:{input:function(e){e.target.composing||t.$set(t.post,"title",e.target.value)}}})])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Post Body:")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.post.body,expression:"post.body"}],staticClass:"form-control",attrs:{rows:"5"},domProps:{value:t.post.body},on:{input:function(e){e.target.composing||t.$set(t.post,"body",e.target.value)}}})])])]),s("br"),t._m(0)])])},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group"},[s("button",{staticClass:"btn btn-primary"},[t._v("Create")])])}],w={data:function(){return{post:{}}},methods:{addPost:function(){var t=this,e="http://localhost:4000/posts/add";this.axios.post(e,this.post).then(function(){t.$router.push({name:"posts"})})}}},$=w,k=Object(l["a"])($,x,P,!1,null,null,null),O=k.exports,j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v("Posts")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-10"}),s("div",{staticClass:"col-md-2"},[s("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"create"}}},[t._v("Create Post")])],1)]),s("br"),s("table",{staticClass:"table table-hover"},[t._m(0),s("tbody",t._l(t.posts,function(e){return s("tr",{key:e._id},[s("td",[t._v(t._s(e.title))]),s("td",[t._v(t._s(e.body))]),s("td",[s("router-link",{staticClass:"btn btn-primary",attrs:{to:{name:"edit",params:{id:e._id}}}},[t._v("Edit")])],1),s("td",[s("button",{staticClass:"btn btn-danger",on:{click:function(s){return s.preventDefault(),t.deletePost(e._id)}}},[t._v("Delete")])])])}),0)])])},E=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("Title")]),s("th",[t._v("Body")]),s("th",[t._v("Actions")])])])}],T={data:function(){return{posts:[]}},created:function(){var t=this,e="http://localhost:4000/posts";this.axios.get(e).then(function(e){t.posts=e.data})},methods:{deletePost:function(t){var e=this,s="http://localhost:4000/posts/delete/".concat(t);this.axios.delete(s).then(function(s){e.posts.splice(e.posts.indexOf(t),1)})}}},S=T,D=Object(l["a"])(S,j,E,!1,null,null,null),M=D.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("h1",[t._v("Edit Post")]),s("form",{on:{submit:function(e){return e.preventDefault(),t.updatePost(e)}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Post Title: ")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.post.title,expression:"post.title"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.post.title},on:{input:function(e){e.target.composing||t.$set(t.post,"title",e.target.value)}}})])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"form-group"},[s("label",[t._v("Post Body: ")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.post.body,expression:"post.body"}],staticClass:"form-control",attrs:{rows:"5"},domProps:{value:t.post.body},on:{input:function(e){e.target.composing||t.$set(t.post,"body",e.target.value)}}})])])]),s("br"),t._m(0)])])},B=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"form-group"},[s("button",{staticClass:"btn btn-primary"},[t._v("Update")])])}],H={data:function(){return{post:{}}},created:function(){var t=this,e="http://localhost:4000/posts/edit/".concat(this.$route.params.id);this.axios.get(e).then(function(e){t.post=e.data})},methods:{updatePost:function(){var t=this,e="http://localhost:4000/posts/update/".concat(this.$route.params.id);this.axios.post(e,this.post).then(function(){t.$router.push({name:"posts"})})}}},A=H,J=Object(l["a"])(A,N,B,!1,null,null,null),I=J.exports;a["a"].use(d["a"]),a["a"].use(v.a,m.a),a["a"].config.productionTip=!1;var U=[{name:"home",path:"/",component:g},{name:"create",path:"/create",component:O},{name:"posts",path:"/posts",component:M},{name:"edit",path:"/edit/:id",component:I}],q=new d["a"]({mode:"history",routes:U});new a["a"](a["a"].util.extend({router:q},u)).$mount("#app")},"64a9":function(t,e,s){}});
//# sourceMappingURL=app.e128f66c.js.map