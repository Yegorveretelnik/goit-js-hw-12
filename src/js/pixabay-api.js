import axios from "axios";

const API_KEY = "48893139-3f2b1b26814d6cd1a5eec55f2";
const BASE_URL = "https://pixabay.com/api/";

export async function fetchImages(query, page, perPage) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
        page: page,
        per_page: perPage,
      },
    });

    return {
      images: response.data.hits,
      totalHits: response.data.totalHits,
    };
  } catch (error) {
    console.error("Помилка при завантаженні зображень:", error);
    throw error;
  }
}