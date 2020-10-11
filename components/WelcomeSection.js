import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainSection: {
    width: "100%",
    background:
      "linear-gradient(rgba(245, 197, 24, 0.9), rgba(245, 197, 24, 0.9)), url(/images/people-with-popcorn.png)",
    padding: theme.spacing(2),
    color: "#fff",
    height: "70vh",
    [theme.breakpoints.down("sm")]: {
      height: "40vh",
    },
  },
  content: {
    [theme.breakpoints.up("md")]: {
      width: "50%",
      marginTop: "15vh",
    },
  },
  title: {
    fontWeight: 500,
    marginBottom: theme.spacing(2),
  },
  bold: {
    fontWeight: 800,
  },
}));

export default function WelcomeSection() {
  const classes = useStyles();
  return (
    <section className={classes.mainSection}>
      <Container maxWidth="lg">
        <div className={classes.content}>
          <Typography className={classes.title} variant="h4" noWrap>
            Welcome to <br></br>
            <span className={classes.bold}>MovieUP.</span>
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris
          </Typography>
        </div>
      </Container>
    </section>
  );
}
