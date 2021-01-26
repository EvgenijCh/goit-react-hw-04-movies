const apiKey = "3e22ebf54a79a7f7777ae96c41f73fcc";
const BASE_URL = "https://api.themoviedb.org/3";

async function fetchWithErrorHandling(url = "", config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error("Not found"));
}

export function fetchTrending() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/all/day?api_key=${apiKey}&language=en-US`,
  );
}

export function fetchFindMovie(query) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`,
  );
}

export function fetchMovieDetails(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}?api_key=${apiKey}&language=en-US`,
  );
}

export function fetchMovieReviews(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${apiKey}&language=en-US&page=1`,
  );
}

export function fetchMovieCast(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${apiKey}&language=en-US`,
  );
}
