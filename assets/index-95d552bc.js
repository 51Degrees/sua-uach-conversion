(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();const b=()=>{var s,e,n,l,t,o,r,h,f;for(s=document.getElementsByClassName("custom-select"),l=s.length,e=0;e<l;e++){for(o=s[e].getElementsByTagName("select")[0],t=o.length,r=document.createElement("DIV"),r.setAttribute("class","select-selected"),r.innerHTML=o.options[o.selectedIndex].innerHTML,s[e].appendChild(r),h=document.createElement("DIV"),h.setAttribute("class","select-items select-hide"),n=1;n<t;n++)f=document.createElement("DIV"),f.innerHTML=o.options[n].innerHTML,f.addEventListener("click",function(p){var d,i,c,a,m,u,v;for(a=this.parentNode.parentNode.getElementsByTagName("select")[0],u=a.length,m=this.parentNode.previousSibling,i=0;i<u;i++)if(a.options[i].innerHTML==this.innerHTML){for(a.selectedIndex=i,m.innerHTML=this.innerHTML,d=this.parentNode.getElementsByClassName("same-as-selected"),v=d.length,c=0;c<v;c++)d[c].removeAttribute("class");this.setAttribute("class","same-as-selected");break}m.click(),a.dispatchEvent(new Event("change"))}),h.appendChild(f);s[e].appendChild(h),r.addEventListener("click",function(p){p.stopPropagation(),g(this),this.nextSibling.classList.toggle("select-hide"),this.classList.toggle("select-arrow-active")})}function g(p){var d,i,c,a,m,u=[];for(d=document.getElementsByClassName("select-items"),i=document.getElementsByClassName("select-selected"),a=d.length,m=i.length,c=0;c<m;c++)p==i[c]?u.push(c):i[c].classList.remove("select-arrow-active");for(c=0;c<a;c++)u.indexOf(c)&&d[c].classList.add("select-hide")}document.addEventListener("click",g)},C=s=>{if(typeof s!="object")throw new Error("Header must be an valid header map.");if(s==null)throw new Error("Headers param cannot be empty.");if(Object.keys(s).length===0)return{};const e={},n=Object.entries(s).reduce((t,[o,r])=>(t[o.toLowerCase()]=r,t),{}),l=n["sec-ch-ua-full-version-list"].match(/"([^"]+)";v="([^"]+)"/g);return e.browsers=l.map(t=>{const[,o,r]=t.match(/"([^"]+)";v="([^"]+)"/);return{brand:o,version:r.split(".")}}),n["sec-ch-ua-platform"]&&(e.platform={brand:n["sec-ch-ua-platform"].replace(/"/g,""),version:n["sec-ch-ua-platform-version"].split(".").map(t=>t.replace(/"/g,""))}),n["sec-ch-ua-mobile"]&&(e.mobile=n["sec-ch-ua-mobile"]==="?1"?1:0),n["sec-ch-ua-arch"]&&(e.architecture=n["sec-ch-ua-arch"].replace(/"/g,"")),n["sec-ch-ua-bitness"]&&(e.bitness=n["sec-ch-ua-bitness"].replace(/"/g,"")),n["sec-ch-ua-model"]&&(e.model=n["sec-ch-ua-model"]),e},H=[{"Sec-CH-UA":'"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',"Sec-CH-UA-Full-Version-List":'"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',"Sec-CH-UA-Platform":"Android","Sec-CH-UA-Platform-Version":"12","Sec-CH-UA-Mobile":"?1","Sec-CH-UA-Arch":"arm","Sec-CH-UA-Bitness":"64","Sec-CH-UA-Model":"Pixel 6"},{"Sec-CH-UA":'"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',"Sec-CH-UA-Full-Version-List":'"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',"Sec-CH-UA-Mobile":"?1","Sec-CH-UA-Arch":"arm","Sec-CH-UA-Bitness":"64","Sec-CH-UA-Model":"Pixel 6"},{"Sec-CH-UA":'"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',"Sec-CH-UA-Full-Version-List":'"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',"Sec-CH-UA-Platform":"Android","Sec-CH-UA-Platform-Version":"12","Sec-CH-UA-Mobile":"?1","Sec-CH-UA-Model":"Pixel 6"}],y=s=>{const e=JSON.parse(s.target.value),n=C(e);S(JSON.stringify(e,null,"  ")),A(n)},E=document.getElementById("object-selector");E.addEventListener("change",y);const A=s=>{const e=document.getElementById("converted-result");e.textContent=JSON.stringify(s,null,"  ")},S=s=>{const e=document.getElementById("selected-object");e.textContent=s},L=()=>{N(),b()},N=()=>{const s=document.getElementById("object-selector");H.forEach((e,n)=>{const l=document.createElement("option");if(l.textContent=`Example ${n}`,l.value=JSON.stringify(e),n===0){l.selected=!0;const t=C(e);S(JSON.stringify(e,null,"  ")),A(t)}s.appendChild(l)})};L();
