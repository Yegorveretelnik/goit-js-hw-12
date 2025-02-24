import{a as l,S as u,i as a}from"./assets/vendor-BWiIACaD.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const d="48893139-3f2b1b26814d6cd1a5eec55f2",f="https://pixabay.com/api/";function p(o){return l.get(f,{params:{key:d,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>e.data.hits).catch(e=>{throw console.error("Помилка при завантаженні зображень:",e),e})}const m=document.querySelector(".gallery");function y(o){m.innerHTML=o.map(e=>`
        <a class="gallery-item" href="${e.largeImageURL}">
          <img src="${e.webformatURL}" alt="${e.tags.split(",")[0]}" loading="lazy"/>
          <div class="info">
            <p>❤️ ${e.likes} Likes</p>
            <p>👁️ ${e.views} Views</p>
            <p>💬 ${e.comments} Comments</p>
            <p>⬇️ ${e.downloads} Downloads</p>
          </div>
        </a>
      `).join(""),new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}const h=document.querySelector("#search-form"),g=document.querySelector("#search-input"),c=document.querySelector("#loader"),L=document.querySelector(".gallery");h.addEventListener("submit",o=>{o.preventDefault();const e=g.value.trim();if(!e){a.error({title:"Помилка",message:"Введіть слово для пошуку!"});return}L.innerHTML="",c.style.display="block",p(e).then(s=>{s.length===0?a.warning({title:"",message:"Sorry, there are no images matching your search query. Please try again!"}):y(s)}).catch(s=>{a.error({title:"Помилка",message:"Не вдалося завантажити зображення. Спробуйте ще раз."})}).finally(()=>{c.style.display="none"})});
//# sourceMappingURL=index.js.map
