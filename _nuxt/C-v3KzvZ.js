const l=/\d/,C=["-","_","/","."];function h(e=""){if(!l.test(e))return e!==e.toLowerCase()}function c(e,o){const t=C,r=[];if(!e||typeof e!="string")return r;let n="",i,u;for(const s of e){const p=t.includes(s);if(p===!0){r.push(n),n="",i=void 0;continue}const a=h(s);if(u===!1){if(i===!1&&a===!0){r.push(n),n=s,i=a;continue}if(i===!0&&a===!1&&n.length>1){const f=n.at(-1);r.push(n.slice(0,Math.max(0,n.length-1))),n=f+s,i=a;continue}}n+=s,i=a,u=p}return r.push(n),r}function y(e){return e?e[0].toUpperCase()+e.slice(1):""}function A(e,o){return e?(Array.isArray(e)?e:c(e)).map(t=>y(o!=null&&o.normalize?t.toLowerCase():t)).join(""):""}function R(e,o){return e?(Array.isArray(e)?e:c(e)).map(t=>t.toLowerCase()).join("-"):""}export{R as k,A as p};
