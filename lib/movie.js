import getHostname from "../utils/getHostname";

export async function getMovieWithId(id = "tt0068646") {
  const res = await fetch("http://www.omdbapi.com/?apikey=bdebd397&i=" + id);
  const movieData = await res.json();
  return movieData;
}

export async function getPopularMovies() {
  const res = await fetch(getHostname() + "/api/popular-movies");
  const popularMovies = await res.json();
  return popularMovies.map((movie) => {
    return {
      params: {
        id: movie.imdbID,
      },
    };
  });
}
