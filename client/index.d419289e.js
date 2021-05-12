import{H as t,I as e,J as n}from"./client.3e05f236.js";function r(t){const e=t-1;return e*e*e+1}function a(t){return Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-10*t)+1}function o(t){return--t*t*t*t*t+1}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function i(t,{delay:e=0,duration:r=400,easing:a=n}={}){const o=+getComputedStyle(t).opacity;return{delay:e,duration:r,easing:a,css:t=>"opacity: "+t*o}}function s(n){var{fallback:a}=n,o=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n}(n,["fallback"]);const i=new Map,s=new Map;function c(n,i,s){return(c,l)=>(n.set(l.key,{rect:c.getBoundingClientRect()}),()=>{if(i.has(l.key)){const{rect:n}=i.get(l.key);return i.delete(l.key),function(n,a,i){const{delay:s=0,duration:c=(t=>30*Math.sqrt(t)),easing:l=r}=e(e({},o),i),u=a.getBoundingClientRect(),f=n.left-u.left,p=n.top-u.top,y=n.width/u.width,d=n.height/u.height,g=Math.sqrt(f*f+p*p),h=getComputedStyle(a),m="none"===h.transform?"":h.transform,b=+h.opacity;return{delay:s,duration:t(c)?c(g):c,easing:l,css:(t,e)=>`\n\t\t\t\topacity: ${t*b};\n\t\t\t\ttransform-origin: top left;\n\t\t\t\ttransform: ${m} translate(${e*f}px,${e*p}px) scale(${t+(1-t)*y}, ${t+(1-t)*d});\n\t\t\t`}}(n,c,l)}return n.delete(l.key),a&&a(c,l,s)})}return[c(s,i,!1),c(i,s,!0)]}export{r as a,s as c,a as e,i as f,o as q};
