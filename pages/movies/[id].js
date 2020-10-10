import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layout";
import MovieDetail from "../../components/MovieDetail";
import { getMovieWithId } from "../../lib/movie";
import Container from "@material-ui/core/Container";
import BreadCrumbsSection from "../../components/BreadCrumbsSection";

export default function Movie({ movieData }) {
  return (
    <Layout>
      <Head>
        <title>{movieData.Title}</title>
      </Head>
      <BreadCrumbsSection></BreadCrumbsSection>
      <section>
        <Container maxWidth="md">
          <MovieDetail movie={movieData}></MovieDetail>
        </Container>
      </section>
    </Layout>
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
