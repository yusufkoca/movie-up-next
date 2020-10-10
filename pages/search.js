import { useRouter } from "next/router";
import Head from "next/head";
import PageLayout from "../components/PageLayout";
import { getSearchResults } from "../lib/search";
import SearchBar from "../components/SearchBar";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";
import SectionTitle from "../components/SectionTitle";
import MoviesGrid from "../components/MoviesGrid";
import BreadCrumbsSection from "../components/BreadCrumbsSection";

export default function SearchResults({ totalResults, movies, pageCount }) {
  const router = useRouter();
  const { title, year, type } = router.query;

  return (
    <PageLayout>
      <Head>
        <title>Search Results</title>
      </Head>
      <BreadCrumbsSection></BreadCrumbsSection>
      <SearchBar></SearchBar>
      <section>
        <Container maxWidth="lg">
          <SectionTitle
            title="Search results: "
            subtitle={title}
          ></SectionTitle>
          <Typography variant="body1">
            10 results shown out of {totalResults} results
          </Typography>
          <MoviesGrid movies={movies}></MoviesGrid>
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
    </PageLayout>
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
        totalResults: searchResults.totalResults,
        movies: movieDetails,
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
