import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";
import { getSearchResults } from "../lib/search";
import SearchBar from "../components/SearchBar";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MovieCardPortrait from "../components/MovieCardPortrait";

export default function SearchResults({ movies, totalResults, movieDetails }) {
  return (
    <Layout>
      <Head>
        <title>Search Results</title>
      </Head>
      <section>breadcrumbs</section>
      <SearchBar></SearchBar>
      <section>
        <Container maxWidth="md">
          <Grid container spacing="2">
            {movieDetails &&
              movieDetails.map((movie) => (
                <Grid item xs={12} md={4} key={movie.imdbId}>
                  <MovieCardPortrait movie={movie}></MovieCardPortrait>
                </Grid>
              ))}
          </Grid>
        </Container>
      </section>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const response = await getSearchResults({
    movieName: query.title || "",
    page: query.page || 1,
  });

  const { searchResults, movieDetails, error } = response;
  if (!error) {
    return {
      props: {
        movies: searchResults.Search,
        totalResults: searchResults.totalResults,
        movieDetails: movieDetails,
      },
    };
  } else {
    return {
      props: {
        movies: [],
        totalResults: 0,
        movieDetails: [],
      },
    };
  }
}
