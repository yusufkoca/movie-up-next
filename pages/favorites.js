import Head from "next/head";
import Layout from "../components/Layout";
import Container from "@material-ui/core/Container";
import Pagination from "@material-ui/lab/Pagination";
import SectionTitle from "../components/SectionTitle";
import MoviesGrid from "../components/MoviesGrid";
import BreadCrumbsSection from "../components/BreadCrumbsSection";
import { useFavorites } from "../providers/FavoritesProvider";

export default function Favorites() {
  const [page, setPage] = React.useState(1);
  const {
    state: { movies },
  } = useFavorites();

  const pageCount = Math.ceil(movies.length / 10);

  return (
    <Layout>
      <Head>
        <title>Favorites</title>
      </Head>
      <BreadCrumbsSection></BreadCrumbsSection>
      <section>
        <Container maxWidth="lg">
          <SectionTitle title="Favorites"></SectionTitle>
          <MoviesGrid
            movies={[...movies.slice((page - 1) * 10, page * 10)]}
          ></MoviesGrid>
          <Pagination
            count={pageCount}
            shape="rounded"
            variant="outlined"
            onChange={(event, value) => {
              setPage(value);
            }}
          />
        </Container>
      </section>
    </Layout>
  );
}
