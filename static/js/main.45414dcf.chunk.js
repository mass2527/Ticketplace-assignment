(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],[,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(5),s=n.n(a),i=(n(11),n(4)),o=n.n(i),j=n(6),u=n(2),l=(n(13),n(0)),p=function(e){var t=e.appTitle;return Object(l.jsx)("header",{children:Object(l.jsx)("h1",{children:t})})},b=(n(15),function(e){var t=e.searchMovie,n=Object(c.useState)(""),r=Object(u.a)(n,2),a=r[0],s=r[1];return Object(l.jsxs)("form",{children:[Object(l.jsx)("input",{value:a,onChange:function(e){return s(e.target.value)},type:"text"}),Object(l.jsx)("button",{disabled:!a,onClick:function(e){e.preventDefault(),t(a),s("")},children:"Search"})]})}),h=n.p+"static/media/default_img.7c957867.png",d=(n(16),function(e){var t=e.movieInfo,n=t.Title,c=t.Poster,r=t.Type,a=t.Year;return Object(l.jsxs)("section",{children:[Object(l.jsx)("div",{className:"title-wrapper",children:Object(l.jsx)("h3",{children:n})}),Object(l.jsx)("div",{className:"poster-wrapper",children:Object(l.jsx)("img",{src:"N/A"===c?h:c,alt:n})}),Object(l.jsxs)("ul",{className:"poster-detail",children:[Object(l.jsx)("li",{children:r}),Object(l.jsx)("li",{children:"|"}),Object(l.jsx)("li",{children:a})]})]})}),O="ac5e5e4";var f=function(){var e=Object(c.useState)(!1),t=Object(u.a)(e,2),n=t[0],r=t[1],a=Object(c.useState)(""),s=Object(u.a)(a,2),i=s[0],h=s[1],f=Object(c.useState)([]),x=Object(u.a)(f,2),v=x[0],m=x[1];function g(e){return w.apply(this,arguments)}function w(){return(w=Object(j.a)(o.a.mark((function e(t){var n,c,a,s,i,j;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),h(""),m([]),e.prev=3,e.next=6,fetch("https://www.omdbapi.com/?s=".concat(t,"&apikey=").concat(O));case 6:return n=e.sent,e.next=9,n.json();case 9:c=e.sent,a=c.Response,s=c.Search,i=c.Error,e.t0=a,e.next="True"===e.t0?16:"False"===e.t0?18:20;break;case 16:return m(s),e.abrupt("break",22);case 18:return h(i),e.abrupt("break",22);case 20:j=a,console.error("Invalid response ".concat(j));case 22:e.next=27;break;case 24:throw e.prev=24,e.t1=e.catch(3),new Error(e.t1.mesage);case 27:return e.prev=27,r(!1),e.finish(27);case 30:case"end":return e.stop()}}),e,null,[[3,24,27,30]])})))).apply(this,arguments)}return Object(c.useEffect)((function(){g("parasite")}),[]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(p,{appTitle:"Ticketplace"}),Object(l.jsxs)("main",{children:[Object(l.jsx)(b,{searchMovie:g}),n&&Object(l.jsx)("strong",{children:"loading..."}),i&&Object(l.jsx)("strong",{children:i}),0!==v.length&&v.map((function(e){return Object(l.jsx)(d,{movieInfo:e},e.imdbID)}))]})]})},x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),x()}],[[17,1,2]]]);
//# sourceMappingURL=main.45414dcf.chunk.js.map