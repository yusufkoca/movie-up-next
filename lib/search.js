export async function getSearchResults({
  movieName = "godfather",
  page = 1,
  year = null,
  type = null,
}) {
  const res = await fetch(
    `http://www.omdbapi.com/?apikey=bdebd397&s=${movieName}&y=${year}&type=${type}&page=${page}`
  );
  const searchResults = await res.json();
  if (searchResults && searchResults.Response !== "False") {
    const movieIds = searchResults.Search.map((movie) => movie.imdbID);
    const fetchArray = movieIds.map((id) =>
      fetch("http://www.omdbapi.com/?apikey=bdebd397&i=" + id)
    );

    return Promise.all(fetchArray)
      .then(function (responses) {
        return Promise.all(
          responses.map(function (response) {
            return response.json();
          })
        );
      })
      .then(function (data) {
        console.log(data);
        return { searchResults, movieDetails: data };
      })
      .catch(function (error) {
        console.log(error);
        return { error };
      });
  } else {
    return { error: searchResults.Error };
  }
}
