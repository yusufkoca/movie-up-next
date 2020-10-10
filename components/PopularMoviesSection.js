import MoviesCarousel from "./MoviesCarousel";
import SectionTitle from "../components/SectionTitle";
import Container from "@material-ui/core/Container";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function PopularMoviesSection() {
  const { data, error } = useSWR("/api/popular-movies", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <section>
      <Container maxWidth="lg">
        <SectionTitle title="Popular Movies"></SectionTitle>
        <MoviesCarousel movies={data}></MoviesCarousel>
      </Container>
    </section>
  );
}
