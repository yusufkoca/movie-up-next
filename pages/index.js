import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import PopularMoviesCarousel from "../components/PopularMoviesCarousel";
import SectionTitle from "../components/SectionTitle";
import WelcomeSection from "../components/WelcomeSection";
import SearchBar from "../components/SearchBar";
import Container from "@material-ui/core/Container";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <WelcomeSection></WelcomeSection>
      <SearchBar onTop={true}></SearchBar>
      <section>
        <Container maxWidth="lg">
          <SectionTitle title="Popular Movies"></SectionTitle>
          <PopularMoviesCarousel></PopularMoviesCarousel>
        </Container>
      </section>
    </Layout>
  );
}
