import { fetchImages } from "./js/pixabay-api.js";
import { renderImages } from "./js/render-functions.js";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector("#search-form");
const input = document.querySelector("#search-input");
const loader = document.querySelector("#loader");
const gallery = document.querySelector(".gallery");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = input.value.trim();

  if (!query) {
    iziToast.error({
      title: "Помилка",
      message: "Введіть слово для пошуку!",
    });
    return;
  }

  gallery.innerHTML = "";
  loader.style.display = "block";

  fetchImages(query)
    .then(images => {
      if (images.length === 0) {
        iziToast.warning({
          title: "",
          message: "Sorry, there are no images matching your search query. Please try again!",
        });
      } else {
        renderImages(images);  
      }
    })
    .catch(error => {
      iziToast.error({
        title: "Помилка",
        message: "Не вдалося завантажити зображення. Спробуйте ще раз.",
      });
    })
    .finally(() => {
      loader.style.display = "none";  
    });
});