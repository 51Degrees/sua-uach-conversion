(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const N=()=>{var n,e,t,s,o,r,c,a,l;for(n=document.getElementsByClassName("custom-select"),s=n.length,e=0;e<s;e++){for(r=n[e].getElementsByTagName("select")[0],o=r.length,c=document.createElement("DIV"),c.setAttribute("class","select-selected"),c.innerHTML=r.options[r.selectedIndex].innerHTML,n[e].appendChild(c),a=document.createElement("DIV"),a.setAttribute("class","select-items select-hide"),t=1;t<o;t++)l=document.createElement("DIV"),l.innerHTML=r.options[t].innerHTML,l.addEventListener("click",function(p){var h,d,i,m,b,g,y;for(m=this.parentNode.parentNode.getElementsByTagName("select")[0],g=m.length,b=this.parentNode.previousSibling,d=0;d<g;d++)if(m.options[d].innerHTML==this.innerHTML){for(m.selectedIndex=d,b.innerHTML=this.innerHTML,h=this.parentNode.getElementsByClassName("same-as-selected"),y=h.length,i=0;i<y;i++)h[i].removeAttribute("class");this.setAttribute("class","same-as-selected");break}b.click(),m.dispatchEvent(new Event("change"))}),a.appendChild(l);n[e].appendChild(a),c.addEventListener("click",function(p){p.stopPropagation(),u(this),this.nextSibling.classList.toggle("select-hide"),this.classList.toggle("select-arrow-active")})}function u(p){var h,d,i,m,b,g=[];for(h=document.getElementsByClassName("select-items"),d=document.getElementsByClassName("select-selected"),m=h.length,b=d.length,i=0;i<b;i++)p==d[i]?g.push(i):d[i].classList.remove("select-arrow-active");for(i=0;i<m;i++)g.indexOf(i)&&h[i].classList.add("select-hide")}document.addEventListener("click",u)},w=n=>{const e=O(n),t=e["sec-ch-ua-full-version-list"]?e["sec-ch-ua-full-version-list"]:e["sec-ch-ua"];let s;t&&(s=t.split(", "));const o={};if(o.source=0,(e["sec-ch-ua-mobile"]||e["sec-ch-ua-platform"])&&(o.source=1),(e["sec-ch-ua-model"]||e["sec-ch-ua-platform-version"]||e["sec-ch-ua-platform-arch"]||e["sec-ch-ua-platform-bitness"])&&(o.source=2),s&&(o.browsers=s.map(r=>{const[,c,a]=r.match(/([^]+);v=([^,]+)/);return{brand:c,version:a.split(".")}})),e["sec-ch-ua-platform"]){const r=e["sec-ch-ua-platform-version"]?e["sec-ch-ua-platform-version"].split("."):[];o.platform={brand:e["sec-ch-ua-platform"],version:r}}return e["sec-ch-ua-mobile"]&&(o.mobile=e["sec-ch-ua-mobile"]==="?1"?1:0),e["sec-ch-ua-arch"]&&(o.architecture=e["sec-ch-ua-arch"]),e["sec-ch-ua-bitness"]&&(o.bitness=e["sec-ch-ua-bitness"]),e["sec-ch-ua-model"]&&(o.model=e["sec-ch-ua-model"]),o},O=n=>{if(typeof n!="object")throw new Error("Header must be an valid header map.");if(n==null)throw new Error("Headers param cannot be empty.");return Object.keys(n).length===0?{}:Object.entries(n).reduce((e,[t,s])=>(e[t.toLowerCase().trim()]=s.replace(/"/g,""),e),{})},S={bitness:"Sec-CH-UA-Bitness",architecture:"Sec-CH-UA-Arch",model:"Sec-CH-UA-Model"},U=n=>{const e=B(n),t={};for(const s in e){const o=e[s];if(s==="browsers"){const r=o.map(c=>`"${c.brand}";v="${c.version.join(".")}"`).join(", ");t["Sec-CH-UA"]=r,t["Sec-CH-UA-Full-Version-List"]=r;continue}if(s==="platform"){t["Sec-CH-UA-Platform"]=`"${o.brand}"`,o.version&&o.version.length>0&&(t["Sec-CH-UA-Platform-Version"]=`"${o.version.join(".")}"`);continue}if(s==="mobile"){t["Sec-CH-UA-Mobile"]=o;continue}if(!S[s])throw new Error(`Property - ${s} does not exist in conversion schema`);t[S[s]]=`"${o}"`}return t},B=n=>{if(typeof n!="object")throw new Error("Parameter must be an valid object.");if(n==null)throw new Error("Headers param cannot be empty.");if(Object.keys(n).length===0)return{};const e={},{browsers:t,platform:s,mobile:o,architecture:r,bitness:c,model:a}=n;return t&&t.length>0&&(e.browsers=x(t)),s&&(e.platform=T(s)),r&&r.length>0&&(e.architecture=f(r)),c&&c.length>0&&(e.bitness=f(c)),a&&a.length>0&&(e.model=f(a)),e.mobile=o?"?1":"?0",e},x=n=>n.map(e=>({brand:f(e.brand),version:e.version.map(t=>f(t))})),T=n=>{const e={};for(const t in n)e[t]=Array.isArray(n[t])?n[t].map(s=>f(s)):f(n[t]);return e},f=n=>n.replace(/"/g,""),P=[{"Sec-CH-UA":'"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',"Sec-CH-UA-Full-Version-List":'"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',"Sec-CH-UA-Platform":'"Android"',"Sec-CH-UA-Platform-Version":'"12"',"Sec-CH-UA-Mobile":"?1","Sec-CH-UA-Arch":'"arm"',"Sec-CH-UA-Bitness":'"64"',"Sec-CH-UA-Model":'"Pixel 6"'},{"Sec-CH-UA":'"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',"Sec-CH-UA-Full-Version-List":'"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',"Sec-CH-UA-Arch":'"arm"',"Sec-CH-UA-Bitness":'"64"',"Sec-CH-UA-Model":'"Pixel 6"'},{"sec-ch-ua":'"Chromium";v="112", "Google Chrome";v="112", "Not A;Brand";v="99"',"sec-ch-ua-mobile":"?0","sec-ch-ua-platform":'"macOS"'}],j=[{browsers:[{brand:"Not A;Brand",version:["99","0","0","0"]},{brand:"Chromium",version:["99","0","4844","88"]},{brand:"Google Chrome",version:["99","0","4844","88"]}],platform:{brand:"Android",version:["12"]},mobile:"1",architecture:"arm",bitness:"64"},{browsers:[{brand:"Not A;Brand",version:["99","0","0","0"]},{brand:"Chromium",version:["99","0","4844","88"]},{brand:"Google Chrome",version:["99","0","4844","88"]}],platform:{brand:"Android",version:["12"]}},{browsers:[{brand:"Chromium",version:["112"]},{brand:"Google Chrome",version:["112"]},{brand:"Not:A-Brand",version:["99"]}],platform:{brand:"macOS",version:[]},mobile:0}],A="json",E="plain",M=["sec-ch-ua","sec-ch-ua-full-version-list","sec-ch-ua-platform","sec-ch-ua-platform-version","sec-ch-ua-mobile","sec-ch-ua-arch","sec-ch-ua-bitness","sec-ch-ua-model"];let v=A;const I=()=>{Array.from(document.getElementsByClassName("example-select")).forEach(e=>{const t=e.dataset.type;V(e,t==="sua-to-uach"?j:P),e.addEventListener("change",o=>D(o,t))})},V=(n,e)=>{e.forEach((t,s)=>{$(n,t,s)})},$=(n,e,t)=>{const s=n.dataset.type,o=document.createElement("option");o.textContent=`Example ${t+1}`,o.value=JSON.stringify(e),t===0&&(o.selected=!0,C(e,s)),n.appendChild(o)};window.onload=()=>{I(),J(),_(),N()};const D=(n,e)=>{const t=JSON.parse(n.target.value);C(t,e)},C=(n,e)=>{const t=k(n,e);let s=[],o,r="";if(e==="sua-to-uach"){for(const[l,u]of Object.entries(t))s.push(`${l.toLowerCase()}: ${u}`);o=JSON.stringify(n,null,"  "),r=v===A?JSON.stringify(t,null,"  "):s.join(` 
`)}else{for(const[l,u]of Object.entries(n))s.push(`${l.toLowerCase()}: ${u}`);o=v===A?JSON.stringify(n,null,"  "):s.join(`
`),r=JSON.stringify(t,null,"  ")}const c=`${e}-selected-object`,a=`${e}-converted-result`;H(o,c),H(r,a)},H=(n,e)=>{const t=document.getElementById(e);if(!t)throw new Error(`Container width ID ${e} does not exist`);t.tagName==="TEXTAREA"?(t.value=n,t.style.height=2+t.scrollHeight+"px",t.style.maxHeight=2+t.scrollHeight+"px",t.style.minHeight=2+t.scrollHeight+"px"):t.textContent=n},k=(n,e)=>e==="sua-to-uach"?U(n):w(n),R=n=>{const t=n.target.dataset.target,s=document.getElementById(t);if(!s)throw new Error(`Container width ID ${t} does not exist`);navigator.clipboard.writeText(s.textContent).then(()=>{alert("Copied to clipboard")})},J=()=>{Array.from(document.getElementsByClassName("copy-button")).forEach(e=>{e.addEventListener("click",R)})},_=()=>{Array.from(document.getElementsByClassName("convert-button")).forEach(e=>{e.addEventListener("click",G)})},G=n=>{const e=n.target.dataset.type,t=document.querySelectorAll(`textarea[data-type="${e}"]`)[0];if(!t)throw new Error(`Editable component not found by ID - ${e}`);let s={};e==="uach-to-sua"&&v===E?t.value.split(`
`).filter(o=>o.length>0).forEach(o=>{const r=o.toLowerCase(),c=M.find(l=>r.includes(l)),[,a]=o.split(`${c}:`);s[c]=a.replace(" ","")}):s=JSON.parse(t.value),C(s,e)},F=Array.from(document.querySelectorAll("code[contenteditable]"));F.forEach(n=>{n.addEventListener("paste",function(e){e.preventDefault();const t=e.clipboardData.getData("text/plain");document.execCommand("insertHTML",!1,t)})});const L=document.querySelectorAll('div[data-action="type-change"]'),X={plain:"in HTTP format",json:"in JSON format"};L.forEach(n=>{n.addEventListener("click",e=>{const t=e.target.dataset.actionType,s=v;[A,E].includes(t)&&(v=t),Array.from(document.getElementsByClassName("sub-headers")).forEach(a=>{a.textContent=X[v]}),L.forEach(a=>{a.classList.add("outlined")}),n.classList.remove("outlined");const r=JSON.parse(document.getElementById("sua-to-uach-selected-object").value);let c={};if(s===E)document.getElementById("uach-to-sua-selected-object").value.split(`
`).filter(l=>l.length>0).forEach(l=>{const[u,p]=l.split(":");c[u]=p.replace(" ","")});else{let a=document.getElementById("uach-to-sua-selected-object").value;c=JSON.parse(a)}C(r,"sua-to-uach"),C(c,"uach-to-sua")})});