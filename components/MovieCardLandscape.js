import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    textAlign: "left",
    backgroundColor: "#FAFAFA",
    boxShadow: "none",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "25%",
    margin: theme.spacing(2),
    borderRadius: 20,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  button: {
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  },
}));

export default function MovieCardLandscape({
  movie = { Poster: null, Title: "" },
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={movie.Poster}
        title={movie.Title + " Movie Poster"}
      />
      <div className={classes.details}>
        <CardHeader
          avatar={<img src="/images/imdb-icon.png" alt="imdb icon"></img>}
          action={
            <>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Action
              </Button>
              <Button
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                Biography
              </Button>
            </>
          }
          title={movie.imdbRating}
        />
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {movie.Title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {movie.Plot}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <Button
            variant="contained"
            color="secondary"
            style={{ color: "#fff" }}
            className={classes.button}
          >
            <FavoriteIcon></FavoriteIcon>
            Add to favorites
          </Button>

          <Button variant="text" color="secondary" className={classes.button}>
            View Details
          </Button>
        </div>
      </div>
    </Card>
  );
}
