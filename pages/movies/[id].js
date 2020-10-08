import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/Layout";
import { getMovieWithId, getSearchedMovieIds } from "../../lib/movie";

export default function Movie({ movieData }) {
  return (
    <Layout>
      <Head>
        <title>Browser Tab Title</title>
      </Head>
      <h1>{movieData.Title}</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getSearchedMovieIds("godfather");
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const movieData = await getMovieWithId(params.id);
  return {
    props: {
      movieData,
    },
  };
}
