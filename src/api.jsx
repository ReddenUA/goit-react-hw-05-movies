import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = 'b04567fcf9c5c71297b26528eddc4422';

// const perPage = 12;

export const fetchTrandingMovies = async () => {
  const response = await axios.get(`trending/movie/day?api_key=${KEY}`);
  return response.data;
};

export const fetchQueryMovies = async query => {
  const response = await axios.get(
    `search/movie?api_key=${KEY}&query=${query}`
  );
  return response.data;
};

export const fetchMovieById = async movieId => {
  const response = await axios.get(`movie/${movieId}?api_key=${KEY}`);
  return response.data;
};

export const fetchMovieCredits = async movieId => {
  const response = await axios.get(`movie/${movieId}/credits?api_key=${KEY}`);
  return response.data;
};

export const fetchMovieReviews = async movieId => {
  const responce = await axios.get(`movie/${movieId}/reviews?api_key=${KEY}`);

  return responce.data;
};
