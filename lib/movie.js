export async function getMovieWithId(id = "tt0068646") {
  const res = await fetch("http://www.omdbapi.com/?apikey=bdebd397&i=" + id);
  const movieData = await res.json();
  return movieData;
}
