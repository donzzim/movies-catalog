const API_KEY = "2e7bb9783802069bcf6bda78147d3501";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopulartMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}=${encodeURIComponent(query)}`);
    const data = await response.json();
    return data.results;
}