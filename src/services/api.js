import axios from "axios";

const { REACT_APP_API_BACK_URL } = process.env;
const { REACT_APP_API_KEY } = process.env;
export const apiBack = axios.create({
  baseURL: REACT_APP_API_BACK_URL,
});
const API_BASE = "https://api.themoviedb.org/3";
const basicFetch = async (endpoint) => {
  return await axios.get(`${API_BASE}${endpoint}`);
};

export const getMovieTrailer = (movieId) => {
  return new Promise((resolve, reject) => {
    basicFetch(
      `/movie/${movieId}?language=pt-BR&api_key=${REACT_APP_API_KEY}&append_to_response=videos`
    )
      .then((resp) => resolve(resp.data))
      .catch((error) => reject(error));
  });
};

export const getTrendingList = () => {
  return new Promise((resolve, reject) => {
    basicFetch(`/discover/movie?language=pt-BR&api_key=${REACT_APP_API_KEY}`)
      .then((resp) => resolve(resp.data))
      .catch((error) => reject(error));
  });
};

export const getGenreList = (genre) => {
  return new Promise((resolve, reject) => {
    switch (genre) {
      case "action":
        genre = 28;
        break;

      case "adventure":
        genre = 12;
        break;

      case "comedy":
        genre = 35;
        break;

      case "drama":
        genre = 18;
        break;

      case "horror":
        genre = 27;
        break;

      default:
        break;
    }

    basicFetch(
      `/discover/movie?with_genres=${genre}&language=pt-BR&api_key=${REACT_APP_API_KEY}`
    )
      .then((resp) => resolve(resp.data))
      .catch((error) => reject(error));
  });
};
