import Grid from "@material-ui/core/Grid";
import MovieCardPortrait from "../components/MovieCardPortrait";
import { useFavorites } from "../providers/FavoritesProvider";

export default function MoviesGrid({ movies }) {
  const {
    state: { imdbIDs },
    addToFavorites,
    removeFromFavorites,
  } = useFavorites();

  return (
    <Grid container spacing={2} style={{ marginTop: 8, marginBottom: 8 }}>
      {movies &&
        movies.map((movie) => (
          <Grid item xs={12} md={4} key={movie.imdbID}>
            <MovieCardPortrait
              movie={movie}
              isFavorite={imdbIDs.includes(movie.imdbID)}
              onFavButtonClick={(event, movie) => {
                addToFavorites(movie);
              }}
              onUnFavButtonClick={(event, id) => {
                removeFromFavorites(id);
              }}
            ></MovieCardPortrait>
          </Grid>
        ))}
    </Grid>
  );
}
