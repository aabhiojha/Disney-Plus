import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const apikey = "655b211586ed45679f7fa6d84b2eb9d2";

// https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=655b211586ed45679f7fa6d84b2eb9d2

const getPopularMovies = axios.get(
  movieBaseUrl + "/movie/popular?language=en-US&page=1&api_key=" + apikey
);

const getTopRatedMovies = axios.get(
  movieBaseUrl + "/movie/top_rated?language=en-US&page=1&api_key=" + apikey
);

export default {
  getPopularMovies,
  getTopRatedMovies,
};
