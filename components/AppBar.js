import Link from "next/link";
import { useRouter } from "next/router";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import SearchInput from "../components/SearchInput";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  titleSpan: {
    color: theme.palette.secondary.main,
  },
  breadcrumbs: {
    flexGrow: 1,
    padding: theme.spacing(1),
    marginLeft: theme.spacing(4),
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const router = useRouter();
  const [title, setTitle] = React.useState("");
  console.log(router);
  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Link href="/">
            <a>
              <Typography className={classes.title} variant="h6" noWrap>
                Movie<span className={classes.titleSpan}>UP</span>
              </Typography>
            </a>
          </Link>
          <div className={classes.breadcrumbs}>
            <nav>
              <Link href="/">
                <a>
                  <Button variant="text">Home</Button>
                </a>
              </Link>
              <Link href="/favorites">
                <a>
                  <Button variant="text" color="secondary">
                    Favorites
                  </Button>
                </a>
              </Link>
            </nav>
          </div>
          <SearchInput
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
            onKeyPress={(ev) => {
              console.log(`Pressed keyCode ${ev.key}`);
              if (ev.key === "Enter") {
                router.push(`/search?title=${title}&page=1`);
              }
            }}
          ></SearchInput>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
