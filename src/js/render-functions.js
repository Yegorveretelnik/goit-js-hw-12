import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

export function renderImages(images) {
  gallery.innerHTML = images
    .map(
      (img) => `
        <a class="gallery-item" href="${img.largeImageURL}">
          <img src="${img.webformatURL}" alt="${img.tags.split(',')[0]}" loading="lazy"/>
          <div class="info">
            <p>❤️ ${img.likes} Likes</p>
            <p>👁️ ${img.views} Views</p>
            <p>💬 ${img.comments} Comments</p>
            <p>⬇️ ${img.downloads} Downloads</p>
          </div>
        </a>
      `
    )
    .join("");

    new SimpleLightbox('.gallery a', {
      captions: true,  
      captionsData: 'alt',  
      captionDelay: 250  
    }).refresh();
  }