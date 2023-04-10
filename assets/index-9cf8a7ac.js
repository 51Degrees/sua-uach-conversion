(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=t(n);fetch(n.href,o)}})();const A=()=>{var r,e,t,s,n,o,c,d,m;for(r=document.getElementsByClassName("custom-select"),s=r.length,e=0;e<s;e++){for(o=r[e].getElementsByTagName("select")[0],n=o.length,c=document.createElement("DIV"),c.setAttribute("class","select-selected"),c.innerHTML=o.options[o.selectedIndex].innerHTML,r[e].appendChild(c),d=document.createElement("DIV"),d.setAttribute("class","select-items select-hide"),t=1;t<n;t++)m=document.createElement("DIV"),m.innerHTML=o.options[t].innerHTML,m.addEventListener("click",function(v){var u,a,i,l,f,p,C;for(l=this.parentNode.parentNode.getElementsByTagName("select")[0],p=l.length,f=this.parentNode.previousSibling,a=0;a<p;a++)if(l.options[a].innerHTML==this.innerHTML){for(l.selectedIndex=a,f.innerHTML=this.innerHTML,u=this.parentNode.getElementsByClassName("same-as-selected"),C=u.length,i=0;i<C;i++)u[i].removeAttribute("class");this.setAttribute("class","same-as-selected");break}f.click(),l.dispatchEvent(new Event("change"))}),d.appendChild(m);r[e].appendChild(d),c.addEventListener("click",function(v){v.stopPropagation(),h(this),this.nextSibling.classList.toggle("select-hide"),this.classList.toggle("select-arrow-active")})}function h(v){var u,a,i,l,f,p=[];for(u=document.getElementsByClassName("select-items"),a=document.getElementsByClassName("select-selected"),l=u.length,f=a.length,i=0;i<f;i++)v==a[i]?p.push(i):a[i].classList.remove("select-arrow-active");for(i=0;i<l;i++)p.indexOf(i)&&u[i].classList.add("select-hide")}document.addEventListener("click",h)},H=r=>{if(typeof r!="object")throw new Error("Header must be an valid header map.");if(r==null)throw new Error("Headers param cannot be empty.");if(Object.keys(r).length===0)return{};const e={},t=Object.entries(r).reduce((s,[n,o])=>(s[n.toLowerCase()]=o,s),{});if(t["sec-ch-ua-full-version-list"]){const s=t["sec-ch-ua-full-version-list"].match(/"([^"]+)";v="([^"]+)"/g);s&&(e.browsers=s.map(n=>{const[,o,c]=n.match(/"([^"]+)";v="([^"]+)"/);return{brand:o,version:c.split(".")}}))}return t["sec-ch-ua-platform"]&&(e.platform={brand:t["sec-ch-ua-platform"].replace(/"/g,""),version:t["sec-ch-ua-platform-version"].split(".").map(s=>s.replace(/"/g,""))}),t["sec-ch-ua-mobile"]&&(e.mobile=t["sec-ch-ua-mobile"]==="?1"?1:0),t["sec-ch-ua-arch"]&&(e.architecture=t["sec-ch-ua-arch"].replace(/"/g,"")),t["sec-ch-ua-bitness"]&&(e.bitness=t["sec-ch-ua-bitness"].replace(/"/g,"")),t["sec-ch-ua-model"]&&(e.model=t["sec-ch-ua-model"]),e},S=r=>{if(typeof r!="object")throw new Error("Parameter must be an valid object.");if(r==null)throw new Error("Headers param cannot be empty.");if(Object.keys(r).length===0)return{};const e={},{browsers:t,platform:s,mobile:n,architecture:o,bitness:c,model:d}=r;if(t&&t.length>0){const m=t.map(h=>`"${h.brand}";v="${h.version.join(".")}"`).join(", ");e["Sec-CH-UA"]=m,e["Sec-CH-UA-Full-Version-List"]=m}return s&&(e["Sec-CH-UA-Platform"]=`"${s.brand}"`,e["Sec-CH-UA-Platform-Version"]=`"${s.version.join(".")}"`),e["Sec-CH-UA-Mobile"]=n?"?1":"?0",o&&(e["Sec-CH-UA-Arch"]=`"${o}"`),c&&(e["Sec-CH-UA-Bitness"]=`"${c}"`),d&&(e["Sec-CH-UA-Model"]=`"${d}"`),e},y=[{"Sec-CH-UA":'"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',"Sec-CH-UA-Full-Version-List":'"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',"Sec-CH-UA-Platform":"Android","Sec-CH-UA-Platform-Version":'"12"',"Sec-CH-UA-Mobile":"?1","Sec-CH-UA-Arch":'"arm"',"Sec-CH-UA-Bitness":'"64"',"Sec-CH-UA-Model":'"Pixel 6"'},{"Sec-CH-UA":'"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',"Sec-CH-UA-Full-Version-List":'"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',"Sec-CH-UA-Arch":'"arm"',"Sec-CH-UA-Bitness":'"64"',"Sec-CH-UA-Model":'"Pixel 6"'},{"Sec-CH-UA-Platform":"Android","Sec-CH-UA-Platform-Version":'"12"',"Sec-CH-UA-Mobile":"?1","Sec-CH-UA-Arch":'"arm"'}],E=[{browsers:[{brand:"Not A;Brand",version:["99","0","0","0"]},{brand:"Chromium",version:["99","0","4844","88"]},{brand:"Google Chrome",version:["99","0","4844","88"]}],platform:{brand:"Android",version:["12"]},mobile:"1",architecture:"arm",bitness:"64"},{browsers:[{brand:"Not A;Brand",version:["99","0","0","0"]},{brand:"Chromium",version:["99","0","4844","88"]},{brand:"Google Chrome",version:["99","0","4844","88"]}],platform:{brand:"Android",version:["12"]}},{browsers:[{brand:"Not A;Brand",version:["99","0","0","0"]},{brand:"Chromium",version:["99","0","4844","88"]},{brand:"Google Chrome",version:["99","0","4844","88"]}],mobile:"1",architecture:"arm",bitness:"64"}],L=()=>{Array.from(document.getElementsByClassName("example-select")).forEach(e=>{const t=e.dataset.type;U(e,t==="sua-to-uach"?E:y),e.addEventListener("change",n=>N(n,t))})},U=(r,e)=>{e.forEach((t,s)=>{w(r,t,s)})},w=(r,e,t)=>{const s=r.dataset.type,n=document.createElement("option");n.textContent=`Example ${t+1}`,n.value=JSON.stringify(e),t===0&&(n.selected=!0,g(e,s)),r.appendChild(n)};window.onload=()=>{L(),A()};const N=(r,e)=>{const t=JSON.parse(r.target.value);g(t,e)},g=(r,e)=>{const t=B(r,e),s=JSON.stringify(r,null,"  "),n=JSON.stringify(t,null,"  "),o=`${e}-selected-object`,c=`${e}-converted-result`;b(s,o),b(n,c)},b=(r,e)=>{const t=document.getElementById(e);if(!t)throw new Error(`Container width ID ${e} does not exist`);t.textContent=r},B=(r,e)=>e==="sua-to-uach"?S(r):H(r);