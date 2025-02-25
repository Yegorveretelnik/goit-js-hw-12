import { fetchImages } from "./js/pixabay-api.js";
import { renderImages } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector("#search-form");
const input = document.querySelector("#search-input");
const loader = document.querySelector("#loader");
const gallery = document.querySelector(".gallery");
const loadMoreBtn = document.querySelector("#load-more");

let currentQuery = "";
let page = 1;
const perPage = 40;
loadMoreBtn.style.display = "none";

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  currentQuery = input.value.trim();
  if (!currentQuery) {
    iziToast.error({ title: "Помилка", message: "Введіть слово для пошуку!" });
    return;
  }
  
  page = 1;
  gallery.innerHTML = "";
  await loadImages();
});

loadMoreBtn.addEventListener("click", async () => {
  page++;
  await loadImages();
});

async function loadImages() {
  loader.style.display = "block";
  try {
    const { images, totalHits } = await fetchImages(currentQuery, page, perPage);
    if (images.length === 0) {
      iziToast.warning({ message: "No images found. Try another search." });
      return;
    }
    renderImages(images);

    if (page * perPage >= totalHits) {
      loadMoreBtn.style.display = "none";
      iziToast.info({ message: "We're sorry, but you've reached the end of search results." });
    } else {
      loadMoreBtn.style.display = "block";
    }
    
    smoothScroll();
  } catch (error) {
    iziToast.error({ title: "Error", message: "Не вдалося завантажити зображення. Спробуйте ще раз." });
  } finally {
    loader.style.display = "none"
  }
}

function smoothScroll() {
  const { height } = gallery.firstElementChild.getBoundingClientRect();
  window.scrollBy({ top: height * 2, behavior: "smooth" });
}