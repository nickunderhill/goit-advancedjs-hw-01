import"./assets/styles-b291ab8d.js";import{t as l}from"./assets/vendor-1e54b975.js";const e=document.querySelector(".feedback-form"),a=e.elements.email,o=e.elements.message,s="feedback-form-state",r=l(()=>{localStorage.setItem(s,JSON.stringify({email:a.value,message:o.value}))},500),c=()=>{const t=localStorage.getItem(s);if(t){const{email:n,message:m}=JSON.parse(t);a.value=n,o.value=m}},d=t=>{t.preventDefault(),console.log({email:a.value,message:o.value}),localStorage.removeItem(s),e.reset()};document.addEventListener("DOMContentLoaded",c);e.addEventListener("input",r);e.addEventListener("submit",d);
//# sourceMappingURL=commonHelpers3.js.map
