import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

export function renderImages(images) {
  
  const markup = images
    .map(
      (img) => `
        <a class="gallery-item" href="${img.largeImageURL}">
          <img src="${img.webformatURL}" alt="${img.tags.split(',')[0]}" loading="lazy"/>
          <ul class="info">
            <li>❤️ ${img.likes} Likes</li>
            <li>👁️ ${img.views} Views</li>
            <li>💬 ${img.comments} Comments</li>
            <li>⬇️ ${img.downloads} Downloads</li>
          </ul>
        </a>
      `
    )
    .join("");

  gallery.insertAdjacentHTML("beforeend", markup);

    new SimpleLightbox('.gallery a', {
      captions: true,  
      captionsData: 'alt',  
      captionDelay: 250  
    }).refresh();
  }