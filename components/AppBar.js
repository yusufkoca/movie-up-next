import Link from "next/link";
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
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#F3F3F3",
    display: "flex",
    width: "auto",
    padding: 8,
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1),
    // vertical padding + font size from searchIcon
    paddingRight: `calc(1em + ${theme.spacing(4)}px)`,
    width: "100%",
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Typography className={classes.title} variant="h6" noWrap>
            Movie<span className={classes.titleSpan}>UP</span>
          </Typography>
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
          <SearchInput></SearchInput>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
