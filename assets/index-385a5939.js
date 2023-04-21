(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const L=()=>{var n,e,t,s,o,r,c,a,l;for(n=document.getElementsByClassName("custom-select"),s=n.length,e=0;e<s;e++){for(r=n[e].getElementsByTagName("select")[0],o=r.length,c=document.createElement("DIV"),c.setAttribute("class","select-selected"),c.innerHTML=r.options[r.selectedIndex].innerHTML,n[e].appendChild(c),a=document.createElement("DIV"),a.setAttribute("class","select-items select-hide"),t=1;t<o;t++)l=document.createElement("DIV"),l.innerHTML=r.options[t].innerHTML,l.addEventListener("click",function(h){var f,u,i,m,p,v,y;for(m=this.parentNode.parentNode.getElementsByTagName("select")[0],v=m.length,p=this.parentNode.previousSibling,u=0;u<v;u++)if(m.options[u].innerHTML==this.innerHTML){for(m.selectedIndex=u,p.innerHTML=this.innerHTML,f=this.parentNode.getElementsByClassName("same-as-selected"),y=f.length,i=0;i<y;i++)f[i].removeAttribute("class");this.setAttribute("class","same-as-selected");break}p.click(),m.dispatchEvent(new Event("change"))}),a.appendChild(l);n[e].appendChild(a),c.addEventListener("click",function(h){h.stopPropagation(),d(this),this.nextSibling.classList.toggle("select-hide"),this.classList.toggle("select-arrow-active")})}function d(h){var f,u,i,m,p,v=[];for(f=document.getElementsByClassName("select-items"),u=document.getElementsByClassName("select-selected"),m=f.length,p=u.length,i=0;i<p;i++)h==u[i]?v.push(i):u[i].classList.remove("select-arrow-active");for(i=0;i<m;i++)v.indexOf(i)&&f[i].classList.add("select-hide")}document.addEventListener("click",d)},H=n=>{if(typeof n!="object")throw new Error("Header must be an valid header map.");if(n==null)throw new Error("Headers param cannot be empty.");if(Object.keys(n).length===0)return{};const e={},t=Object.entries(n).reduce((r,[c,a])=>(r[c.toLowerCase().trim()]=a,r),{}),o=(t["sec-ch-ua-full-version-list"]?t["sec-ch-ua-full-version-list"]:t["sec-ch-ua"]).match(/"([^"]+)";v="([^"]+)"/g);if(o&&(e.browsers=o.map(r=>{const[,c,a]=r.match(/"([^"]+)";v="([^"]+)"/);return{brand:c,version:a.split(".")}})),t["sec-ch-ua-platform"]){const r=t["sec-ch-ua-platform-version"]?t["sec-ch-ua-platform-version"].split(".").map(c=>c.replace(/"/g,"")):[];e.platform={brand:t["sec-ch-ua-platform"].replace(/"/g,""),version:r}}return t["sec-ch-ua-mobile"]&&(e.mobile=t["sec-ch-ua-mobile"]==="?1"?1:0),t["sec-ch-ua-arch"]&&(e.architecture=t["sec-ch-ua-arch"].replace(/"/g,"")),t["sec-ch-ua-bitness"]&&(e.bitness=t["sec-ch-ua-bitness"].replace(/"/g,"")),t["sec-ch-ua-model"]&&(e.model=t["sec-ch-ua-model"].replace(/"/g,"")),e},N=n=>{if(typeof n!="object")throw new Error("Parameter must be an valid object.");if(n==null)throw new Error("Headers param cannot be empty.");if(Object.keys(n).length===0)return{};const e={},{browsers:t,platform:s,mobile:o,architecture:r,bitness:c,model:a}=n;if(t&&t.length>0){const l=t.map(d=>`"${d.brand}";v="${d.version.join(".")}"`).join(", ");e["Sec-CH-UA"]=l,e["Sec-CH-UA-Full-Version-List"]=l}return s&&(e["Sec-CH-UA-Platform"]=`"${s.brand}"`,s.version.length>0&&(e["Sec-CH-UA-Platform-Version"]=`"${s.version.join(".")}"`)),e["Sec-CH-UA-Mobile"]=o?"?1":"?0",r&&(e["Sec-CH-UA-Arch"]=`"${r}"`),c&&(e["Sec-CH-UA-Bitness"]=`"${c}"`),a&&(e["Sec-CH-UA-Model"]=`"${a}"`),e},w=[{"Sec-CH-UA":'"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',"Sec-CH-UA-Full-Version-List":'"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',"Sec-CH-UA-Platform":'"Android"',"Sec-CH-UA-Platform-Version":'"12"',"Sec-CH-UA-Mobile":"?1","Sec-CH-UA-Arch":'"arm"',"Sec-CH-UA-Bitness":'"64"',"Sec-CH-UA-Model":'"Pixel 6"'},{"Sec-CH-UA":'"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',"Sec-CH-UA-Full-Version-List":'"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',"Sec-CH-UA-Arch":'"arm"',"Sec-CH-UA-Bitness":'"64"',"Sec-CH-UA-Model":'"Pixel 6"'},{"sec-ch-ua":'"Chromium";v="112", "Google Chrome";v="112", "Not A;Brand";v="99"',"sec-ch-ua-mobile":"?0","sec-ch-ua-platform":'"macOS"'}],B=[{browsers:[{brand:"Not A;Brand",version:["99","0","0","0"]},{brand:"Chromium",version:["99","0","4844","88"]},{brand:"Google Chrome",version:["99","0","4844","88"]}],platform:{brand:"Android",version:["12"]},mobile:"1",architecture:"arm",bitness:"64"},{browsers:[{brand:"Not A;Brand",version:["99","0","0","0"]},{brand:"Chromium",version:["99","0","4844","88"]},{brand:"Google Chrome",version:["99","0","4844","88"]}],platform:{brand:"Android",version:["12"]}},{browsers:[{brand:"Chromium",version:["112"]},{brand:"Google Chrome",version:["112"]},{brand:"Not:A-Brand",version:["99"]}],platform:{brand:"macOS",version:[]},mobile:0}],g="json",E="plain";let b=g;const U=()=>{Array.from(document.getElementsByClassName("example-select")).forEach(e=>{const t=e.dataset.type;x(e,t==="sua-to-uach"?B:w),e.addEventListener("change",o=>T(o,t))})},x=(n,e)=>{e.forEach((t,s)=>{O(n,t,s)})},O=(n,e,t)=>{const s=n.dataset.type,o=document.createElement("option");o.textContent=`Example ${t+1}`,o.value=JSON.stringify(e),t===0&&(o.selected=!0,C(e,s)),n.appendChild(o)};window.onload=()=>{U(),j(),I(),L()};const T=(n,e)=>{const t=JSON.parse(n.target.value);C(t,e)},C=(n,e)=>{const t=M(n,e);let s=[],o,r="";if(e==="sua-to-uach"){for(const[l,d]of Object.entries(t))s.push(`${l.toLowerCase()}: ${d}`);o=JSON.stringify(n,null,"  "),r=b===g?JSON.stringify(t,null,"  "):s.join(` 
`)}else{for(const[l,d]of Object.entries(n))s.push(`${l.toLowerCase()}: ${d}`);o=b===g?JSON.stringify(n,null,"  "):s.join(`
`),r=JSON.stringify(t,null,"  ")}const c=`${e}-selected-object`,a=`${e}-converted-result`;A(o,c),A(r,a)},A=(n,e)=>{const t=document.getElementById(e);if(!t)throw new Error(`Container width ID ${e} does not exist`);t.textContent=n},M=(n,e)=>e==="sua-to-uach"?N(n):H(n),P=n=>{const t=n.target.dataset.target,s=document.getElementById(t);if(!s)throw new Error(`Container width ID ${t} does not exist`);navigator.clipboard.writeText(s.textContent).then(()=>{alert("Copied to clipboard")})},j=()=>{Array.from(document.getElementsByClassName("copy-button")).forEach(e=>{e.addEventListener("click",P)})},I=()=>{Array.from(document.getElementsByClassName("convert-button")).forEach(e=>{e.addEventListener("click",$)})},$=n=>{const e=n.target.dataset.type,t=document.querySelectorAll(`code[data-type="${e}"]`)[0];if(!t)throw new Error(`Editable component not found by ID - ${e}`);let s={};e==="uach-to-sua"&&b===E?t.textContent.split(`
`).forEach(o=>{const[r,c]=o.split(":");s[r]=c.replace(" ","")}):s=JSON.parse(t.textContent),console.clear(),C(s,e)},V=Array.from(document.querySelectorAll("code[contenteditable]"));V.forEach(n=>{n.addEventListener("paste",function(e){e.preventDefault();const t=e.clipboardData.getData("text/plain");document.execCommand("insertHTML",!1,t)})});const S=document.querySelectorAll('div[data-action="type-change"]'),D={plain:"in HTTP format",json:"in JSON format"};S.forEach(n=>{n.addEventListener("click",e=>{const t=e.target.dataset.actionType,s=b;[g,E].includes(t)&&(b=t),Array.from(document.getElementsByClassName("sub-headers")).forEach(a=>{a.textContent=D[b]}),S.forEach(a=>{a.classList.add("outlined")}),n.classList.remove("outlined");const r=JSON.parse(document.getElementById("sua-to-uach-selected-object").textContent);let c={};if(s===E)document.getElementById("uach-to-sua-selected-object").textContent.split(`
`).forEach(l=>{const[d,h]=l.split(":");c[d]=h.replace(" ","")});else{let a=document.getElementById("uach-to-sua-selected-object").textContent;c=JSON.parse(a)}C(r,"sua-to-uach"),C(c,"uach-to-sua")})});