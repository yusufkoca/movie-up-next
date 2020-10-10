import Head from "next/head";
import PageLayout, { siteTitle } from "../components/PageLayout";
import WelcomeSection from "../components/WelcomeSection";
import SearchBar from "../components/SearchBar";
import PopularMoviesSection from "../components/PopularMoviesSection";

export default function Home() {
  return (
    <PageLayout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <WelcomeSection></WelcomeSection>
      <SearchBar onTop={true}></SearchBar>
      <PopularMoviesSection></PopularMoviesSection>
    </PageLayout>
  );
}
