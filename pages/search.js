import { useRouter } from "next/router";
import Head from "next/head";
import Layout from "../components/Layout";
import { getSearchResults } from "../lib/search";
import SearchBar from "../components/SearchBar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";
import MovieCardPortrait from "../components/MovieCardPortrait";
import { useFavorites } from "../providers/FavoritesProvider";

export default function SearchResults({
  movies,
  totalResults,
  movieDetails,
  pageCount,
}) {
  const router = useRouter();
  const { title, year, type } = router.query;
  const {
    state: { imdbIDs },
    addToFavorites,
    removeFromFavorites,
  } = useFavorites();

  return (
    <Layout>
      <Head>
        <title>Search Results</title>
      </Head>
      <section>breadcrumbs</section>
      <SearchBar></SearchBar>
      <section>
        <Container maxWidth="md">
          <Typography variant="body1">
            10 results shown out of {totalResults} results
          </Typography>
          <Grid container spacing="2">
            {movieDetails &&
              movieDetails.map((movie) => (
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
          <Pagination
            count={pageCount}
            shape="rounded"
            variant="outlined"
            onChange={(event, value) => {
              router.push(
                `/search?title=${title}&year=${year}&type=${type}&page=${value}`
              );
            }}
          />
        </Container>
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const response = await getSearchResults({
    movieName: query.title || "",
    page: query.page || 1,
    year: query.year || null,
    type: query.type || null,
  });

  const { searchResults, movieDetails, error } = response;
  if (!error) {
    return {
      props: {
        movies: searchResults.Search,
        totalResults: searchResults.totalResults,
        movieDetails: movieDetails,
        pageCount: Math.ceil(searchResults.totalResults / 10),
      },
    };
  } else {
    return {
      props: {
        movies: [],
        totalResults: 0,
        movieDetails: [],
        pageCount: 0,
      },
    };
  }
}
