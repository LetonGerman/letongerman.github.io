import{S as s,i as e,s as o,e as n,t,b as r,f as a,g as l,d as c,j as i,k as h,h as d,a as g,c as m,p as u,n as f,r as $}from"./client.12c25f11.js";function p(s){let e,o;return{c(){e=n("span"),o=t("А может не надо?")},l(s){e=r(s,"SPAN",{});var n=a(e);o=l(n,"А может не надо?"),n.forEach(c)},m(s,n){i(s,e,n),h(e,o)},d(s){s&&c(e)}}}function b(s){let e,o,g,m,u;return{c(){e=n("div"),o=n("img"),m=n("span"),u=t("Мне что-то нехорошо... подождите... пока отлагаю..."),this.h()},l(s){e=r(s,"DIV",{class:!0});var n=a(e);o=r(n,"IMG",{src:!0,alt:!0}),m=r(n,"SPAN",{});var t=a(m);u=l(t,"Мне что-то нехорошо... подождите... пока отлагаю..."),t.forEach(c),n.forEach(c),this.h()},h(){o.src!==(g="waytoodank.gif")&&d(o,"src","waytoodank.gif"),d(o,"alt",""),d(e,"class","mt-10 mb-10")},m(s,n){i(s,e,n),h(e,o),h(e,m),h(m,u)},d(s){s&&c(e)}}}function T(s){let e,o,T,v,H,M,y,L,w,E,N,k=s[0]&&!s[1]&&p(),x=s[1]&&b();return{c(){e=n("h4"),o=t("Откройте консоль заранее, если хотите увидеть массив вызовов"),T=g(),v=n("button"),H=t("Попробуем сломать?"),M=g(),k&&k.c(),y=g(),x&&x.c(),L=g(),w=n("div"),this.h()},l(s){e=r(s,"H4",{class:!0});var n=a(e);o=l(n,"Откройте консоль заранее, если хотите увидеть массив вызовов"),n.forEach(c),T=m(s),v=r(s,"BUTTON",{class:!0});var t=a(v);H=l(t,"Попробуем сломать?"),t.forEach(c),M=m(s),k&&k.l(s),y=m(s),x&&x.l(s),L=m(s),w=r(s,"DIV",{id:!0}),a(w).forEach(c),this.h()},h(){d(e,"class","mb-20"),d(v,"class","bg-indigo-600 hover:bg-indigo-900 text-white font-bold py-2 px-4 rounded"),d(w,"id","console")},m(n,t){i(n,e,t),h(e,o),i(n,T,t),i(n,v,t),h(v,H),i(n,M,t),k&&k.m(n,t),i(n,y,t),x&&x.m(n,t),i(n,L,t),i(n,w,t),E||(N=[u(v,"mouseenter",s[3]),u(v,"mouseleave",s[4]),u(v,"click",s[2],{once:!0})],E=!0)},p(s,[e]){s[0]&&!s[1]?k||(k=p(),k.c(),k.m(y.parentNode,y)):k&&(k.d(1),k=null),s[1]?x||(x=b(),x.c(),x.m(L.parentNode,L)):x&&(x.d(1),x=null)},i:f,o:f,d(s){s&&c(e),s&&c(T),s&&c(v),s&&c(M),k&&k.d(s),s&&c(y),x&&x.d(s),s&&c(L),s&&c(w),E=!1,$(N)}}}function v(s,e,o){let n=!1,t=!1;return[n,t,async()=>{let s=[];const e=document.getElementById("console");o(1,t=!0),await new Promise((s=>setTimeout(s,2e3)));let n=0,r=0,a=[];const l=(e,o)=>(s.push("add"),0===o?e:(e=>(s.push("sec"),1+e))(l(e,o-1))),c=(e,o)=>(s.push("mpy"),1===o?e:l(e,c(e,o-1))),i=(e,o)=>(s.push("pwr"),0===o?1:1===o?e:c(e,i(e,o-1)));try{for(;;)s=[],a=[n,r],n>r?(r++,console.log(`${n} ** ${r} = ${i(n,r)}`),e.innerHTML+=`${n} ** ${r} = ${i(n,r)}<br>`):(n++,console.log(`${n} ** ${r} = ${i(n,r)}`),e.innerHTML+=`${n} ** ${r} = ${i(n,r)}<br>`)}catch(o){e.innerHTML+=`${o.message}<br>`,console.log(o.message);const n=s.filter((s=>"pwr"===s)).length,t=s.filter((s=>"mpy"===s)).length,r=s.filter((s=>"add"===s)).length,l=s.filter((s=>"sec"===s)).length;e.innerHTML+=`Количество возведений в степень: ${n}<br>`,console.log("Количество возведений в степень: ",n),e.innerHTML+=`Количество умножений: ${t}<br>`,console.log("Количество умножений: ",t),e.innerHTML+=`Количество сложений: ${r}<br>`,console.log("Количество сложений: ",r),e.innerHTML+=`Количество инкрементов: ${l}<br>`,console.log("Количество инкрементов: ",l),e.innerHTML+=`Последние выжившие аргументы: a = ${a[0]}, b = ${a[1]}<br>`,console.log(`Последние выжившие аргументы: a = ${a[0]}, b = ${a[1]}`),console.log(s)}},s=>o(0,n=!0),s=>o(0,n=!1)]}export default class extends s{constructor(s){super(),e(this,s,v,T,o,{})}}
