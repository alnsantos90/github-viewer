(this["webpackJsonpjust-for-you"]=this["webpackJsonpjust-for-you"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,a,t){e.exports=t.p+"static/media/folha2.33773290.png"},function(e,a,t){e.exports=t.p+"static/media/folha4.e7afb0f6.png"},,function(e,a,t){e.exports=t.p+"static/media/folha1.c4badf75.png"},function(e,a,t){e.exports=t.p+"static/media/folha3.7a788c08.png"},,,,,,,,,,,,,,,function(e,a,t){e.exports=t(81)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},,,,,,,,,,,,,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(31),l=t.n(c),s=t(1),o=t(7),m=Object(n.createContext)();function i(){var e=Object(n.useContext)(m);return{users:e.users,setUsers:e.setUsers}}function u(e){var a=e.children,t=Object(n.useState)({id:null,login:"",avatar_url:"",html_url:"",repos_url:"",name:"",company:"",blog:"",location:"",bio:"",repos:[]}),c=Object(o.a)(t,2),l=c[0],s=c[1];return r.a.createElement(m.Provider,{value:{users:l,setUsers:s}},a)}var p=Object(n.createContext)();function E(){var e=Object(n.useContext)(p);return{carregando:e.carregando,setCarregando:e.setCarregando}}function f(e){var a=e.children,t=Object(n.useState)(!1),c=Object(o.a)(t,2),l=c[0],s=c[1];return r.a.createElement(p.Provider,{value:{carregando:l,setCarregando:s}},a)}var d=Object(n.createContext)();function h(){var e=Object(n.useContext)(d);return{err:e.err,setErr:e.setErr}}function g(e){var a=e.children,t=Object(n.useState)(!1),c=Object(o.a)(t,2),l=c[0],s=c[1];return r.a.createElement(d.Provider,{value:{err:l,setErr:s}},a)}t(38);var N=function(e){return r.a.createElement("div",{className:"box-title"},r.a.createElement("h1",{className:"title"},e.title),r.a.createElement("p",{className:"description"},e.description))},v=(t(39),function(e){return r.a.createElement("div",{className:e.cssName},r.a.createElement("img",{src:e.img,width:e.largura,height:e.altura,alt:""}))}),b=t(17),x=t.n(b),O=t(14),j=t.n(O),_=t(18),C=t.n(_),y=t(15),R=t.n(y),k=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{cssName:"folha1",img:x.a,largura:"60px"}),r.a.createElement(v,{cssName:"folha2",img:j.a,largura:"60px"}),r.a.createElement(v,{cssName:"folha3",img:C.a,largura:"80px"}),r.a.createElement(v,{cssName:"folha4",img:R.a,largura:"60px"}),r.a.createElement(v,{cssName:"folha5",img:x.a,largura:"60px"}),r.a.createElement(v,{cssName:"folha6",img:R.a,largura:"60px"}),r.a.createElement(v,{cssName:"folha7",img:j.a,largura:"60px"}),r.a.createElement(v,{cssName:"folha8",img:j.a,largura:"80px"}),r.a.createElement(v,{cssName:"folha10",img:R.a,largura:"80px"}),r.a.createElement(v,{cssName:"folha11",img:C.a,largura:"60px"}))},w=(t(40),function(){return r.a.createElement("div",{className:"aside-box"},r.a.createElement(k,null),r.a.createElement(N,{title:"Github Viewer",description:"Encontre usu\xe1rios, reposit\xf3rios e conhe\xe7a de perto o trabalho dos desenvolvedores no github"}))}),S=t(11),U=(t(41),function(e){var a=i().setUsers,t=Object(n.useState)(""),c=Object(o.a)(t,2),l=c[0],s=c[1];return r.a.createElement("div",{className:"box-search"},r.a.createElement("h2",{className:"title-search"},e.title),r.a.createElement("input",{className:"search-input",type:"text",onChange:function(e){var a=e.target.value;s(a),console.log(l)},placeholder:e.placeholder}),r.a.createElement("div",{className:"button-box"},r.a.createElement(S.b,{to:"/user/",className:"button-search",onClick:function(){a({login:l})}},"PESQUISAR USU\xc1RIO")))}),A=(t(47),function(e){return r.a.createElement("div",{className:"logo-footer"})}),I=(t(48),function(){return r.a.createElement("main",{className:"home-page"},r.a.createElement(U,{title:"ENCONTRE NO GITHUB",placeholder:"Ex: alnsantos90"}),r.a.createElement(A,{largura:"165px",altura:"55px"}))}),P=(t(49),function(e){return r.a.createElement("div",{className:"home-container"},r.a.createElement(w,null),r.a.createElement(I,null))}),T=t(9),B=t.n(T),F=t(13),G=t(10),M=t.n(G),V=(t(68),function(e){return r.a.createElement("h1",{className:"find-user-title"},e.title)}),q=(t(69),function(e){var a=i().setUsers,t=E().setCarregando,c=h(),l=(c.err,c.setErr),s=Object(n.useState)(),m=Object(o.a)(s,2),u=m[0],p=m[1];function f(){return(f=Object(F.a)(B.a.mark((function e(n){var r,c,s,o,m,i,u,p,E,f,d,h,g;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(!0),l(!1),e.prev=2,e.next=5,M.a.get("https://api.github.com/users/".concat(n));case 5:return r=e.sent,e.next=8,M.a.get("https://api.github.com/users/".concat(n,"/repos"));case 8:c=e.sent,s=r.data,o=s.id,m=s.login,i=s.avatar_url,u=s.html_url,p=s.repos_url,E=s.name,f=s.company,d=s.blog,h=s.location,g=s.bio,l(!1),t(!1),a({id:o,login:m,avatar_url:i,html_url:u,repos_url:p,name:E,company:f,blog:d,location:h,bio:g,repos:c.data}),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),t(!1),l(!0);case 19:case"end":return e.stop()}}),e,null,[[2,15]])})))).apply(this,arguments)}function d(e){a({login:e}),function(e){f.apply(this,arguments)}(e)}return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{className:"search-user",type:"text",placeholder:e.placeholder,onChange:function(e){var a=e.target.value;p(a)}}),r.a.createElement("button",{className:"orange",onClick:function(){return d(u)}},"Pesquisar"))}),H=(t(70),function(e){return r.a.createElement("div",{className:"box-user"},r.a.createElement("div",{className:"left-content"},r.a.createElement(V,{title:"Github Viewer"})),r.a.createElement("div",{className:"right-content"},r.a.createElement(q,{placeholder:"Ex: alnsantos90"})))}),J=(t(71),function(e){var a=i().users;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"box-avatar"},r.a.createElement("img",{src:a.avatar_url,width:"100%",alt:""}),r.a.createElement("a",{href:a.html_url,className:"visit-github"},"Visit on GitHub.com")))}),z=(t(72),function(e){return r.a.createElement("div",{className:"item-user-box"},e.children)}),D=(t(73),function(e){var a=i().users;return r.a.createElement("div",{className:"box-dados-user"},r.a.createElement(z,null,r.a.createElement("p",{className:"item-name"},"NAME"),r.a.createElement("p",{className:"item-title"},a.name)),r.a.createElement(z,null,r.a.createElement("p",{className:"item-name"},"USER"),r.a.createElement("p",{className:"item-user"},a.login)),r.a.createElement(z,null,r.a.createElement("p",{className:"item-name"},"BIO"),r.a.createElement("p",{className:"item-description"},a.bio)),r.a.createElement(z,null,r.a.createElement("p",{className:"item-name"},"COMPANY"),r.a.createElement("p",{className:"item-description"},a.company)),r.a.createElement(z,null,r.a.createElement("p",{className:"item-name"},"LOCATION"),r.a.createElement("p",{className:"item-description"},a.location)),r.a.createElement(z,null,r.a.createElement("p",{className:"item-name"},"WEBSITE"),r.a.createElement("p",{className:"item-description"},a.blog)))}),L=(t(74),function(e){return r.a.createElement("div",{className:"repos-item-box"},r.a.createElement("div",{className:"name-box-repos"},r.a.createElement("p",{className:"title-repo"},e.titleRepo),r.a.createElement("a",{href:e.link},r.a.createElement("p",{className:"name-repo"},e.nameRepo))),r.a.createElement("div",{className:"desc-box-repos"},r.a.createElement("p",{className:"desc-title-repo"},e.descTitle),r.a.createElement("p",{className:"desc-repo"},e.descRepo)))}),Q=(t(75),function(e){var a=i().users;return r.a.createElement("div",{className:"box-repos"},r.a.createElement("h2",{className:"repos-title"},"Repositorys"),a.repos.map((function(e){return e.description?r.a.createElement(L,{key:e.id,titleRepo:"NAME",nameRepo:e.full_name,descTitle:"DESC",descRepo:e.description,link:e.html_url}):r.a.createElement(L,{key:e.id,titleRepo:"NAME",nameRepo:e.full_name})})))}),W=(t(76),function(e){return r.a.createElement("main",{className:"user-page"},r.a.createElement(J,null),r.a.createElement(D,null),r.a.createElement(Q,null))}),Y=(t(77),function(){return r.a.createElement("main",{className:"error-page"},r.a.createElement("div",{className:"container-error"},r.a.createElement("div",{className:"box-error"},r.a.createElement("h1",{className:"title-error"},"Error"),r.a.createElement("h4",{className:"sub-error"},"N\xe3o conseguimos localizar o usu\xe1rio informado, verifique o campo de busca e tente novamente."))))}),K=function(){return r.a.createElement("main",{className:"error-page"},r.a.createElement("div",{className:"container-error"},r.a.createElement("div",{className:"box-error"},r.a.createElement("h1",{className:"sub-error"},"Buscando usu\xe1rio..."))))},X=(t(78),function(e){return r.a.createElement("footer",null)}),Z=(t(79),function(e){var a=i(),t=a.users,c=a.setUsers,l=E(),s=l.carregando,o=l.setCarregando,m=h(),u=m.err,p=m.setErr;function f(){return(f=Object(F.a)(B.a.mark((function e(a){var t,n,r,l,s,m,i,u,E,f,d,h,g;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o(!0),p(!1),e.prev=2,e.next=5,M.a.get("https://api.github.com/users/".concat(a));case 5:return t=e.sent,e.next=8,M.a.get("https://api.github.com/users/".concat(a,"/repos"));case 8:n=e.sent,r=t.data,l=r.id,s=r.login,m=r.avatar_url,i=r.html_url,u=r.repos_url,E=r.name,f=r.company,d=r.blog,h=r.location,g=r.bio,o(!1),c({id:l,login:s,avatar_url:m,html_url:i,repos_url:u,name:E,company:f,blog:d,location:h,bio:g,repos:n.data}),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(2),o(!1),p(!0);case 18:case"end":return e.stop()}}),e,null,[[2,14]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(e){f.apply(this,arguments)}(t.login)}),[c]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"main-container"},r.a.createElement("header",{className:"header-user"},r.a.createElement(H,null)),r.a.createElement("div",{className:"line-user"}),s&&r.a.createElement(K,null),!s&&t.id&&r.a.createElement(W,null),!s&&!t.id&&u&&r.a.createElement(Y,null)),r.a.createElement(X,null))});t(80);var $=function(){return r.a.createElement(u,null,r.a.createElement(f,null,r.a.createElement(g,null,r.a.createElement("div",{className:"App"},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",exact:!0,component:P}),r.a.createElement(s.a,{path:"/user/:user",component:Z}),r.a.createElement(s.a,{path:"/user/",component:Z}))))))};l.a.render(r.a.createElement(S.a,{basename:"/github-viewer"},r.a.createElement($,null)),document.getElementById("root"))}],[[33,1,2]]]);
//# sourceMappingURL=main.7f216cb1.chunk.js.map