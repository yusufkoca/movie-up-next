import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import PopularMoviesCarousel from "../components/PopularMoviesCarousel";
import WelcomeSection from "../components/WelcomeSection";
import Typography from "@material-ui/core/Typography";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <WelcomeSection></WelcomeSection>
      <section>
        <Typography variant="h4">PopularMovies</Typography>
        <PopularMoviesCarousel></PopularMoviesCarousel>
      </section>
    </Layout>
  );
}
