import{a as p,S as g,i as n}from"./assets/vendor-CtnHdr7b.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const h="48893139-3f2b1b26814d6cd1a5eec55f2",w="https://pixabay.com/api/";async function b(t,s,r){try{const a=await p.get(w,{params:{key:h,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:r}});return{images:a.data.hits,totalHits:a.data.totalHits}}catch(a){throw console.error("Помилка при завантаженні зображень:",a),a}}const L=document.querySelector(".gallery");function S(t){const s=t.map(r=>`
        <a class="gallery-item" href="${r.largeImageURL}">
          <img src="${r.webformatURL}" alt="${r.tags.split(",")[0]}" loading="lazy"/>
          <ul class="info">
            <li>❤️ ${r.likes} Likes</li>
            <li>👁️ ${r.views} Views</li>
            <li>💬 ${r.comments} Comments</li>
            <li>⬇️ ${r.downloads} Downloads</li>
          </ul>
        </a>
      `).join("");L.insertAdjacentHTML("beforeend",s),new g(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}const v=document.querySelector("#search-form"),q=document.querySelector("#search-input"),d=document.querySelector("#loader"),y=document.querySelector(".gallery"),i=document.querySelector("#load-more");let u="",l=1;const f=40;i.style.display="none";v.addEventListener("submit",async t=>{if(t.preventDefault(),u=q.value.trim(),!u){n.error({title:"Помилка",message:"Введіть слово для пошуку!"});return}l=1,y.innerHTML="",await m()});i.addEventListener("click",async()=>{l++,await m()});async function m(){d.style.display="block";try{const{images:t,totalHits:s}=await b(u,l,f);if(t.length===0){n.warning({message:"No images found. Try another search."});return}S(t),l*f>=s?(i.style.display="none",n.info({message:"We're sorry, but you've reached the end of search results."})):i.style.display="block",$()}catch{n.error({title:"Error",message:"Не вдалося завантажити зображення. Спробуйте ще раз."})}finally{d.style.display="none"}}function $(){const{height:t}=y.firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
