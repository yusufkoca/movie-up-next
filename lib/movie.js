export async function getMovieWithId(id = "tt0068646") {
  const res = await fetch("http://www.omdbapi.com/?apikey=bdebd397&i=" + id);
  const movieData = await res.json();
  return movieData;
}

export async function getSearchedMovieIds(searchParam = "godfather") {
  const res = await fetch(
    "http://www.omdbapi.com/?apikey=bdebd397&s=" + searchParam
  );
  const searchResults = await res.json();
  return searchResults.Search.map((movie) => {
    return {
      params: {
        id: movie.imdbID,
      },
    };
  });
}
