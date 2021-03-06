import Head from "next/head";
import PageLayout from "../../components/PageLayout";
import MovieDetail from "../../components/MovieDetail";
import { getMovieWithId } from "../../lib/movie";
import Container from "@material-ui/core/Container";
import BreadCrumbsSection from "../../components/BreadCrumbsSection";
import RelatedMoviesSection from "../../components/RelatedMoviesSection";

export default function Movie({ movieData }) {
  return (
    <PageLayout>
      <Head>
        <title>{movieData.Title}</title>
      </Head>
      <BreadCrumbsSection></BreadCrumbsSection>
      <section>
        <Container maxWidth="lg">
          <MovieDetail movie={movieData}></MovieDetail>
        </Container>
      </section>
      <RelatedMoviesSection></RelatedMoviesSection>
    </PageLayout>
  );
}

export async function getServerSideProps({ params }) {
  const movieData = await getMovieWithId(params.id);
  return {
    props: {
      movieData,
    },
  };
}
