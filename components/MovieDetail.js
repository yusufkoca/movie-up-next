import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NotFavoriteIcon from "@material-ui/icons/FavoriteBorder";
import { useFavorites } from "../providers/FavoritesProvider";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    textAlign: "left",
    backgroundColor: "#FAFAFA",
    boxShadow: "none",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
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
    height: "50vh",
    margin: theme.spacing(2),
    borderRadius: 20,
    [theme.breakpoints.down("xs")]: {
      height: "30vh",
    },
    [theme.breakpoints.up("md")]: {
      width: "25%",
    },
    [theme.breakpoints.up("sm")]: {
      width: "50%",
    },
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

export default function MovieDetail({
  movie = { Poster: null, Title: "", Genre: "", Plot: "" },
}) {
  const classes = useStyles();
  const {
    state: { imdbIDs },
    addToFavorites,
    removeFromFavorites,
  } = useFavorites();
  const genres = movie.Genre.split(", ");
  const isFavorite = imdbIDs.includes(movie.imdbID);

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
            isFavorite ? (
              <Button
                variant="contained"
                color="secondary"
                style={{ color: "#fff" }}
                className={classes.button}
                onClick={() => {
                  removeFromFavorites(movie.imdbID);
                }}
              >
                <FavoriteIcon></FavoriteIcon>
                Remove from favorites
              </Button>
            ) : (
              <Button
                variant="contained"
                color="secondary"
                style={{ color: "#fff" }}
                className={classes.button}
                onClick={() => {
                  addToFavorites(movie);
                }}
              >
                <NotFavoriteIcon></NotFavoriteIcon>
                Add to favorites
              </Button>
            )
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
          {genres &&
            genres.map((genre, index) => (
              <Button
                key={index}
                variant="contained"
                color="secondary"
                className={classes.button}
              >
                {genre}
              </Button>
            ))}
        </div>
      </div>
    </Card>
  );
}
