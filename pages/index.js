import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import WelcomeSection from "../components/WelcomeSection";
import SearchBar from "../components/SearchBar";
import PopularMoviesSection from "../components/PopularMoviesSection";

export default function Home({ popularMovies }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <WelcomeSection></WelcomeSection>
      <SearchBar onTop={true}></SearchBar>
      <PopularMoviesSection></PopularMoviesSection>
    </Layout>
  );
}
