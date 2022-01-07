(this["webpackJsonpmap-app"]=this["webpackJsonpmap-app"]||[]).push([[0],{13:function(n,e,t){n.exports={info:"Info_info__dlHDJ",title:"Info_title__23vvG",main:"Info_main__C8X_K"}},17:function(n,e,t){n.exports={loading:"Loader_loading__hpWF4","lds-dual-ring":"Loader_lds-dual-ring__13xfL"}},19:function(n,e,t){n.exports={marker:"Marker_marker__1CI2s"}},20:function(n,e,t){n.exports={notification:"Notification_notification__3E-Ct"}},28:function(n,e,t){},29:function(n,e,t){},35:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),c=t(5),i=t.n(c),o=(t(28),t(29),t(11)),s=t(21),u=t(3),l=t(12),d=Object(l.b)({name:"country",initialState:{items:[],infoIsShown:!1,chosenCountry:null,filteredItems:null,menuIsShown:!1,loading:!1,error:null},reducers:{addDataToRedux:function(n,e){n.items=e.payload},showInfo:function(n){n.infoIsShown=!0},hideInfo:function(n){n.infoIsShown=!1},setChosenCountry:function(n,e){n.chosenCountry=e.payload},clearChosenCountry:function(n,e){n.chosenCountry=null},filterByQuantity:function(n,e){n.filteredItems=n.items.filter((function(n){return n.population>e.payload}))},filterByLanguage:function(n,e){n.filteredItems=n.items&&n.items.filter((function(n){var t=n.languages&&Object.values(n.languages);return t&&t.includes(e.payload)}))},toggleMenu:function(n){n.menuIsShown=!n.menuIsShown},setLoading:function(n,e){n.loading=e.payload},setError:function(n,e){n.error=e.payload}}}),j=d.actions,f=d.reducer,h=t(7),b=t.n(h),m=t(10),v=t(19),p=t.n(v),O=t(1),g=function(n){var e=Object(u.b)(),t=function(n){e(j.showInfo()),e(function(n){return function(){var e=Object(m.a)(b.a.mark((function e(t){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=function(){var e=Object(m.a)(b.a.mark((function e(){var r,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.com/v3.1/name/".concat(n));case 2:if((r=e.sent).ok){e.next=5;break}throw new Error("\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u0432\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435.");case 5:return e.next=7,r.json();case 7:a=e.sent,t(j.setChosenCountry(a));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=1,e.next=4,r();case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),t(j.setError(e.t0.message));case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(n){return e.apply(this,arguments)}}()}(n))};return Object(O.jsx)("div",{className:p.a.marker,onClick:function(){return t(n.name)},children:Object(O.jsx)("i",{className:"fas fa-map-pin",style:{color:"yellow",padding:"10px"}})})},x=function(){var n=Object(u.c)((function(n){return n.country.items})),e=Object(u.c)((function(n){return n.country.filteredItems})),t=n.map((function(n){return Object(o.a)(Object(o.a)({},n),{},{id:Math.random()})})),r=n.map((function(n){return Object(o.a)(Object(o.a)({},n),{},{id:Math.random()})})),a=t.map((function(n){return Object(O.jsx)(g,{lat:n.latlng[0],lng:n.latlng[1],name:n.name.common,flag:n.flags.svg},n.id)})),c=e&&r.map((function(n){return Object(O.jsx)(g,{lat:n.latlng[0],lng:n.latlng[1],name:n.name.common,flag:n.flags.svg},n.id)}));return Object(O.jsx)("div",{style:{height:"100vh",width:"100%"},children:Object(O.jsx)(s.a,{bootstrapURLKeys:{key:""},defaultCenter:{lat:59.95,lng:30.33},defaultZoom:3,children:e?c:a})})},_=t(22),y=t(9),w=t.n(y),k=function(){var n=Object(u.c)((function(n){return n.country.items})),e=Object(u.c)((function(n){return n.country.menuIsShown})),t=Object(u.b)(),r=function(n){var e,t=[],r=Object(_.a)(n);try{for(r.s();!(e=r.n()).done;){var a=e.value;t.includes(a)||void 0===a||t.push(a)}}catch(c){r.e(c)}finally{r.f()}return t}(n&&n.map((function(n){var e=n.languages,t=e&&Object.values(e).slice(0,1);return t&&t[0]}))).sort((function(n,e){return n>e?1:-1})).map((function(n){return{language:n,id:Math.random()}}));return Object(O.jsxs)("div",{className:w.a.header,children:[Object(O.jsx)("h2",{children:"\u0423\u0437\u043d\u0430\u0439 \u043e\u0441\u043d\u043e\u0432\u043d\u044b\u0435 \u0444\u0430\u043a\u0442\u044b \u043e \u0441\u0442\u0440\u0430\u043d\u0435 (\u0432\u0441\u0435\u0433\u043e \u043e\u0434\u043d\u0438\u043c \u043a\u043b\u0438\u043a\u043e\u043c!)"}),Object(O.jsx)("div",{className:w.a.hamb__button,onClick:function(){t(j.toggleMenu())}}),Object(O.jsxs)("div",{className:"".concat(w.a.navbar," ").concat(e&&w.a.navbar__isShown),children:[Object(O.jsxs)("div",{className:w.a.navbar__item,children:[Object(O.jsx)("label",{htmlFor:"population",children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043d\u0430 \u043a\u0430\u0440\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u044b \u0441 \u0447\u0438\u0441\u043b\u0435\u043d\u043d\u043e\u0441\u0442\u044c\u044e \u043d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u044f:"}),Object(O.jsxs)("select",{name:"population",id:"population",onChange:function(n){return e=n.target.value,t(j.filterByQuantity(e)),void t(j.toggleMenu());var e},children:[Object(O.jsx)("option",{value:0,children:"\u0412\u0441\u0435 \u0441\u0442\u0440\u0430\u043d\u044b"}),Object(O.jsx)("option",{value:1e7,children:"\u0411\u043e\u043b\u0435\u0435 10\u043c\u043b\u043d \u0447\u0435\u043b\u043e\u0432\u0435\u043a"}),Object(O.jsx)("option",{value:3e7,children:"\u0411\u043e\u043b\u0435\u0435 30\u043c\u043b\u043d \u0447\u0435\u043b\u043e\u0432\u0435\u043a"}),Object(O.jsx)("option",{value:5e7,children:"\u0411\u043e\u043b\u0435\u0435 50\u043c\u043b\u043d \u0447\u0435\u043b\u043e\u0432\u0435\u043a"}),Object(O.jsx)("option",{value:7e7,children:"\u0411\u043e\u043b\u0435\u0435 70\u043c\u043b\u043d \u0447\u0435\u043b\u043e\u0432\u0435\u043a"}),Object(O.jsx)("option",{value:1e8,children:"\u0411\u043e\u043b\u0435\u0435 100\u043c\u043b\u043d \u0447\u0435\u043b\u043e\u0432\u0435\u043a"})]})]}),Object(O.jsxs)("div",{className:w.a.navbar__item,children:[Object(O.jsx)("label",{htmlFor:"language",children:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u043d\u0430 \u043a\u0430\u0440\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u044b, \u0432 \u043a\u043e\u0442\u043e\u0440\u044b\u0445 \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0439 \u043d\u0438\u0436\u0435 \u044f\u0437\u044b\u043a, \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u043c:"}),Object(O.jsxs)("select",{name:"language",id:"language",onChange:function(n){return e=n.target.value,t(j.filterByLanguage(e)),void t(j.toggleMenu());var e},children:[Object(O.jsx)("option",{children:"\u0412\u0441\u0435 \u044f\u0437\u044b\u043a\u0438"}),r&&r.map((function(n){return Object(O.jsx)("option",{value:n.language,children:n.language},n.id)}))]})]})]})]})},C=t(17),I=t.n(C),S=function(){return Object(O.jsxs)("div",{className:I.a.loading,children:[Object(O.jsx)("div",{className:I.a["lds-dual-ring"],children:" "}),Object(O.jsx)("h2",{children:"\u041f\u043e\u0434\u043e\u0436\u0434\u0438\u0442\u0435, \u0438\u0434\u0435\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})]})},N=t(37),E=t(13),L=t.n(E),M=function(){var n,e,t,a=Object(u.b)(),c=Object(u.c)((function(n){return n.country.chosenCountry})),i=function(n){return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")};return c&&(n=i(c[0].population),t=i(c[0].area),e="right"===c[0].car.side?"\u041f\u0440\u0430\u0432\u043e\u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0435\u0435":"\u041b\u0435\u0432\u043e\u0441\u0442\u043e\u0440\u043e\u043d\u043d\u0435\u0435"),Object(O.jsx)(r.Fragment,{children:c&&Object(O.jsxs)(N.a.div,{initial:{y:"-100vh"},animate:{y:0},className:L.a.info,children:[Object(O.jsxs)("div",{className:L.a.title,children:[Object(O.jsx)("div",{children:c[0].name.common})," ",Object(O.jsx)("br",{}),Object(O.jsx)("img",{src:c[0].flags.svg,alt:"Flag"})]}),Object(O.jsxs)("div",{className:L.a.main,children:[Object(O.jsxs)("div",{children:["\u0421\u0442\u043e\u043b\u0438\u0446\u0430: ",c[0].capital]}),Object(O.jsxs)("div",{children:["\u041d\u0430\u0441\u0435\u043b\u0435\u043d\u0438\u0435: ",n," \u0447\u0435\u043b."]}),Object(O.jsxs)("div",{children:["\u041f\u043b\u043e\u0449\u0430\u0434\u044c: ","-1"===t?"\u041d\u0435\u0442 \u0434\u0430\u043d\u043d\u044b\u0445":t+" \u043a\u043c2"]}),Object(O.jsxs)("div",{children:["\u0414\u0432\u0438\u0436\u0435\u043d\u0438\u0435: ",e]}),Object(O.jsxs)("div",{children:["\u041e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u044f\u0437\u044b\u043a\u0438 \u0432 \u0441\u0442\u0440\u0430\u043d\u0435: ",Object.values(c[0].languages).map((function(n,e,t){return e!==t.length-1?Object(O.jsxs)("span",{children:[n,", "]},e):Object(O.jsx)("span",{children:n},e)}))]}),Object(O.jsxs)("div",{children:["\u0412\u0430\u043b\u044e\u0442\u0430: ",Object.values(c[0].currencies).map((function(n,e){return Object(O.jsxs)("span",{children:[n.name,"(",n.symbol,")"]},e)}))]})]}),Object(O.jsx)("button",{onClick:function(){a(j.hideInfo()),a(j.clearChosenCountry())},children:"\u0421\u043a\u0440\u044b\u0442\u044c"})]})})},B=t(20),H=t.n(B),F=function(n){return Object(O.jsx)(N.a.div,{initial:{y:"-100vh"},animate:{y:0},className:H.a.notification,children:n.error})};var W=function(){var n=Object(u.c)((function(n){return n.country.infoIsShown})),e=Object(u.c)((function(n){return n.country.loading})),t=Object(u.c)((function(n){return n.country.error})),a=Object(u.b)();return Object(r.useEffect)((function(){a(function(){var n=Object(m.a)(b.a.mark((function n(e){var t;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=function(){var n=Object(m.a)(b.a.mark((function n(){var t,r;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e(j.setLoading(!0)),n.next=3,fetch("https://restcountries.com/v3.1/all");case 3:if((t=n.sent).ok){n.next=6;break}throw new Error("\u0418\u0437\u0432\u0438\u043d\u0438\u0442\u0435, \u0432\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u0435\u0440\u0435\u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435.");case 6:return n.next=8,t.json();case 8:r=n.sent,e(j.addDataToRedux(r));case 10:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),n.prev=1,n.next=4,t();case 4:n.next=10;break;case 6:n.prev=6,n.t0=n.catch(1),e(j.setError(n.t0.message)),setTimeout((function(){e(j.setError(null))}),5e3);case 10:e(j.setLoading(!1));case 11:case"end":return n.stop()}}),n,null,[[1,6]])})));return function(e){return n.apply(this,arguments)}}())}),[a]),Object(O.jsxs)("div",{className:"app",children:[Object(O.jsx)(k,{}),e&&Object(O.jsx)(S,{}),Object(O.jsx)(x,{}),n&&Object(O.jsx)(M,{}),t&&Object(O.jsx)(F,{error:t})]})},D=Object(l.a)({reducer:{country:f}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(u.a,{store:D,children:Object(O.jsx)(W,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))},9:function(n,e,t){n.exports={header:"Header_header__5Z_4S",hamb__button:"Header_hamb__button__3SNrE",navbar:"Header_navbar__27yZA",navbar__item:"Header_navbar__item__uK6p3",navbar__isShown:"Header_navbar__isShown__1WSrX"}}},[[35,1,2]]]);
//# sourceMappingURL=main.f5e2d638.chunk.js.map