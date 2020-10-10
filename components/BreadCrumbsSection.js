import { useRouter } from "next/router";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Container } from "@material-ui/core";

export default function BreadCrumbsSection() {
  const router = useRouter();
  const breadcrumbs = router.asPath.split("/");
  let url = "/";
  return (
    <section
      style={{
        background:
          "linear-gradient(90deg, rgba(245, 197, 24, 0.26) 22.24%, rgba(251, 247, 252, 0) 100%)",
      }}
    >
      <Container maxWidth="md">
        <Breadcrumbs aria-label="breadcrumb" color="secondary">
          <Link href={url}>
            <Typography>Home</Typography>
          </Link>
          {breadcrumbs.map((section) => {
            if (section) {
              url += section;
              if (router.asPath === url) {
                return <Typography color="textPrimary"> {section}</Typography>;
              } else {
                url += "/";
                return (
                  <Link href={url}>
                    <Typography>{section}</Typography>
                  </Link>
                );
              }
            }
          })}
        </Breadcrumbs>
      </Container>
    </section>
  );
}
