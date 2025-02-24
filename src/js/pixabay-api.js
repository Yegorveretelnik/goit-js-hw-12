import axios from "axios";

const API_KEY = "48893139-3f2b1b26814d6cd1a5eec55f2";
const BASE_URL = "https://pixabay.com/api/";

export function fetchImages(query) {
  return axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: "photo",
      orientation: "horizontal",
      safesearch: true,
    },
  })
  .then(response => {
    return response.data.hits;  
  })
  .catch(error => {
    console.error("Помилка при завантаженні зображень:", error);
    throw error;  
  });
}