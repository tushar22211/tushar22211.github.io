(this.webpackJsonpDevZone=this.webpackJsonpDevZone||[]).push([[0],{267:function(e,n,t){},268:function(e,n,t){},269:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(41),i=t.n(o),c=t(10),l=t(42),u="NjNkYTM0NTc1MzYxNGI5YjQ2ZDhmMzlkMmNhYTEzOTc3ZmI5Y2NmMQ==",s="tushar22211",m="blog-api",d="A Developers Zone",f={backgroundColor:"#f1f6f8",titleColor:"#ff5252",subtitleColor:"#37474f"},p=t(18),v=new p.a({uri:"https://api.github.com/graphql",request:function(e){e.setContext({headers:{authorization:"Bearer ".concat(atob(u))}})}}),b=t(22),g=t(17),h=t(20),E=t(4),x=t(21),w=(t(69),t(5)),j=t(47),O=t.n(j);function y(){var e=Object(E.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  img {\n    height: 128px;\n  }\n"]);return y=function(){return e},e}var k=w.a.span(y()),N=function(){return r.a.createElement(k,null,r.a.createElement("img",{src:O.a,alt:"Loading..."}))};function M(){var e=Object(E.a)(["\n  width: 90%;\n  margin: 2rem auto 0;\n  padding: 20px 10px;\n"]);return M=function(){return e},e}var A=w.a.div(M());function D(){var e=Object(E.a)(["\n  cursor: pointer;\n  border-radius: 10px,\n  transition: 0.2s;\n  position: relative;\n"]);return D=function(){return e},e}var Y=w.a.div(D());function z(){var e=Object(E.a)(['\n  display: inline-block;\n  border: 1px solid;\n  border-color: rgba(3, 168, 124, 1);\n  border-radius: 5px;\n  padding: 0px 2px;\n  font-size: 10px;\n  text-transform: capitalize;\n  color: rgba(2, 158, 116, 1);\n  font-weight: 600;\n  line-height: 15px;\n  font-family: "Quicksand";\n  margin-right: 10px;\n']);return z=function(){return e},e}var S=w.a.div(z()),C=function(e){var n=e.value;return r.a.createElement(S,{key:n.id},n.name)};function W(){var e=Object(E.a)(["\n  font-size: 18px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  -webkit-box-orient: vertical;\n"]);return W=function(){return e},e}var Z=w.a.h2(W()),T=t(29),B=t.n(T),I=(t(72),function(e){var n=e.blog,t=Object(a.useState)([]),o=Object(h.a)(t,2),i=o[0],c=o[1],l=Object(g.f)();return Object(a.useEffect)((function(){var e=n.labels.nodes.filter((function(e){return"blog"!==e.name}));c(e)}),[n.labels.nodes]),r.a.createElement(Y,null,r.a.createElement("div",{onClick:function(){return e=n.title,t=n.number,void l.push("/".concat(e,"/").concat(t));var e,t}},r.a.createElement("img",{className:"featuredImage",alt:"",src:void 0===n.title.split("#")[1]||""===n.title.split("#")[1]?"https://user-images.githubusercontent.com/16516879/80256421-51959880-869c-11ea-8618-c83fd8e25deb.jpg":n.title.split("#")[1]}),r.a.createElement("div",{className:"blogMeta"},r.a.createElement(Z,null,n.title.split("#")[0],r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement("div",{className:"author"},r.a.createElement("div",{className:"authorName"},r.a.createElement(r.a.Fragment,null,i.map((function(e,n){return r.a.createElement(C,{value:e,key:n})})))),r.a.createElement("div",{className:"blogDate"},B()(n.updatedAt).format("DD MMM YYYY"))))))});function U(){var e=Object(E.a)(['\n{\n  repository(owner: "','", name: "','") {\n    issues(first: 10, states: OPEN, filterBy: { labels: "blog" }) {\n      nodes {\n        title\n        number\n        labels(first: 5) {\n          nodes {\n            name\n          }\n        }\n        author {\n          avatarUrl\n          login\n        }\n        updatedAt\n      }\n    }\n  }\n}\n']);return U=function(){return e},e}var F=Object(p.b)(U(),s,m),H=function(){var e=Object(a.useState)([]),n=Object(h.a)(e,2),t=n[0],o=n[1],i=Object(x.a)(F),c=i.loading,l=i.error,u=i.data;return Object(a.useEffect)((function(){var e,n;c||(l&&console.error(l),u&&o(null===u||void 0===u?void 0:null===(e=u.repository)||void 0===e?void 0:null===(n=e.issues)||void 0===n?void 0:n.nodes))}),[c,l,u]),r.a.createElement(r.a.Fragment,null,r.a.createElement(A,null,r.a.createElement("div",{className:"repo-cards-div-main"},c?r.a.createElement(N,null):t.map((function(e,n){return r.a.createElement("div",{className:"repo-card-div"},r.a.createElement(I,{blog:e,key:n}))})))))},L=t(30),P=t(51),R=t(53),Q=t.n(R),q=t(274),J=t(273);t(75);function G(){var e=Object(E.a)(["\n  margin: 2rem auto 0;\n  width: 90%;\n  max-width: 900px;\n  padding: 20px 10px;\n  position: relative;\n"]);return G=function(){return e},e}var $=w.a.div(G());function _(){var e=Object(E.a)(["\n  @media only screen and (max-width: 768px) {\n    font-size: 30px;\n  }\n"]);return _=function(){return e},e}var K=w.a.h1(_());function V(){var e=Object(E.a)(["\n  color: rgba(0, 0, 0, 0.54);\n  font-weight: 400;\n  font-size: 14px;\n  margin-bottom: 0px;\n  margin-top: 0px;\n"]);return V=function(){return e},e}var X=w.a.p(V());function ee(){var e=Object(E.a)(["\n  margin-top: 30px;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n"]);return ee=function(){return e},e}var ne=w.a.div(ee());function te(){var e=Object(E.a)(["\n  width: 50px;\n  height: 50px;\n  border-radius: 40px;\n  margin: 10px;\n  margin-left: 0px;\n"]);return te=function(){return e},e}var ae=w.a.img(te());function re(){var e=Object(E.a)(["\n  margin-bottom: 0px;\n  margin-top: 0px;\n  font-size: 16px;\n  color: rgba(0, 0, 0, 0.84);\n"]);return re=function(){return e},e}var oe=w.a.p(re());function ie(){var e=Object(E.a)(['{\n    repository(owner: "','", name: "','") {\n      issue(number: ',") {\n        title\n        body\n        bodyHTML\n        number\n        author {\n          avatarUrl\n          login\n        }\n        updatedAt\n      }\n    }\n  }\n  "]);return ie=function(){return e},e}function ce(){var e=parseInt(window.location.href.split("/").pop()),n=Object(p.b)(ie(),s,m,e),t=Object(a.useState)([]),o=Object(h.a)(t,2),i=o[0],c=o[1],l=Object(x.a)(n),u=l.loading,d=l.error,f=l.data;return Object(a.useEffect)((function(){if(!u&&f){var e=f.repository.issue;c(e)}}),[u,d,f]),u?r.a.createElement(N,null):r.a.createElement(r.a.Fragment,null,i.title&&r.a.createElement($,null,r.a.createElement(K,null,i.title),r.a.createElement("div",null,r.a.createElement(ne,null,r.a.createElement(ae,{src:"https://user-images.githubusercontent.com/16516879/80270058-9f2cf800-86d2-11ea-8ad2-4da3db6d3bba.png",alt:i.author.login}),r.a.createElement("div",null,r.a.createElement(oe,null,"tushar22211"===i.author.login||"geekytushar"===i.author.login?"Tushar Patil":i.author.login),r.a.createElement(X,null,B()(i.updatedAt).format("DD MMM YYYY"),"    ","(",Math.round(Q()(i.body).minutes)," Min Read)")))),r.a.createElement(P.a,{options:{overrides:{a:{component:function(e){var n=e.children,t=Object(L.a)(e,["children"]);return r.a.createElement("a",{href:t.href,target:"_blank",rel:"noopener noreferrer",className:"blog-post-anchor"},n,r.a.createElement("style",{jsx:"true"},"\n          a {\n            color: #484848;\n            font-weight: 400;\n          }\n        "))}},pre:{component:function(e){var n=e.children;return r.a.createElement(q.a,{language:"javascript",style:J.a},n.props.children)}},p:{component:function(e){var n=e.children,t=Object(L.a)(e,["children"]);return r.a.createElement("p",t,n)},props:{className:"disable-select"}},img:{component:function(e){var n=e.children,t=Object(L.a)(e,["children"]);return r.a.createElement("img",Object.assign({alt:""},t),n)},props:{className:"blog-image"}}}}},i.body)))}t(267);var le=function(e){return r.a.createElement("header",{className:"header"},r.a.createElement("nav",{className:"headerMenu"},r.a.createElement(b.b,{to:"/"},r.a.createElement("h1",{style:{fontSize:"30px",fontWeight:"bold",color:"black",lineHeight:0}},"DevZone")),r.a.createElement("br",null),r.a.createElement("h2",{style:{fontSize:"12px",textAlign:"center",margin:"0px"}},"A Developers Zone")))},ue=(0,t(13).createBrowserHistory)(),se=function(){return r.a.createElement(b.a,{history:ue},r.a.createElement(le,null),r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/",component:H}),r.a.createElement(g.a,{exact:!0,path:"/:title/:issueNumber",component:ce})))},me=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.Helmet,null,r.a.createElement("title",null,"DevZone - A Developers Zone"),r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("meta",{name:"description",content:d}),r.a.createElement("meta",{name:"theme-color",content:f.backgroundColor})),r.a.createElement(c.a,{client:v},r.a.createElement(se,null)))},de=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function fe(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}t(268);i.a.render(r.a.createElement(me,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");de?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var a=t.headers.get("content-type");404===t.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):fe(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):fe(n,e)}))}}()},47:function(e,n,t){e.exports=t.p+"static/media/loader.bcdf0a41.svg"},57:function(e,n,t){e.exports=t(269)},69:function(e,n,t){},72:function(e,n,t){},75:function(e,n,t){}},[[57,1,2]]]);
//# sourceMappingURL=main.93965c37.chunk.js.map