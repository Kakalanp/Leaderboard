(()=>{"use strict";const e=document.querySelector(".display-screen"),t=async()=>{(async t=>{e.innerHTML="",Array.from(await t).forEach((t=>{const n=document.createElement("div");n.classList.add("score"),n.innerHTML=`<h4>${t.user}</h4> <p>${t.score}</p>`,e.appendChild(n)}))})((async()=>{const e=await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FtbSsyyRO5eDxJO72kQu/scores/");return(await e.json()).result.sort(((e,t)=>t.score-e.score))})())},n=document.getElementById("submit"),s=document.getElementById("refresh"),c=document.getElementById("input-name"),a=document.getElementById("input-score");n.addEventListener("click",(async()=>{await(async(e,t)=>{await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FtbSsyyRO5eDxJO72kQu/scores/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({user:e,score:t})})})(c.value,a.value),t(),c.value="",a.value="",c.focus()})),s.addEventListener("click",(()=>{t()})),window.addEventListener("DOMContentLoaded",(()=>{t()}))})();