import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const gallery = document.querySelector(".gallery");

export function renderImages(images) {
  
  const markup = images
    .map(
      (img) => `
        <a class="gallery-item" href="${img.largeImageURL}">
          <img src="${img.webformatURL}" alt="${img.tags.split(',')[0]}" loading="lazy"/>
          <div class="image-info">
            <p>Likes ${img.likes}</p>
            <p>Views ${img.views}</p>
            <p>Comments ${img.comments}</p>
            <p>Downloads ${img.downloads}</p>
          </div>
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