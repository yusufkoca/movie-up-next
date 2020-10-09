import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  mainSection: {
    width: "100%",
    background:
      "linear-gradient(rgba(245, 197, 24, 0.9), rgba(245, 197, 24, 0.9)), url(/images/people-with-popcorn.png)",
    padding: theme.spacing(2),
    color: "#fff",
  },
  title: {
    fontWeight: 500,
    marginBottom: theme.spacing(2),
  },
  bold: {
    fontWeight: 800,
  },
  headerParagraph: {
    width: "50%",
  },
}));

export default function WelcomeSection() {
  const classes = useStyles();
  return (
    <section className={classes.mainSection}>
      <Typography className={classes.title} variant="h4" noWrap>
        Welcome to <br></br>
        <span className={classes.bold}>MovieUP.</span>
      </Typography>
      <Typography variant="body1" className={classes.headerParagraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris
      </Typography>
    </section>
  );
}
