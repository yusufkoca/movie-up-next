import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";

const movie = JSON.parse(
  '{"Title":"The Godfather","Year":"1972","Rated":"R","Released":"24 Mar 1972","Runtime":"175 min","Genre":"Crime, Drama","Director":"Francis Ford Coppola","Writer":"Mario Puzo (screenplay by), Francis Ford Coppola (screenplay by), Mario Puzo (based on the novel by)","Actors":"Marlon Brando, Al Pacino, James Caan, Richard S. Castellano","Plot":"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.","Language":"English, Italian, Latin","Country":"USA","Awards":"Won 3 Oscars. Another 26 wins & 30 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"9.2/10"},{"Source":"Rotten Tomatoes","Value":"98%"},{"Source":"Metacritic","Value":"100/100"}],"Metascore":"100","imdbRating":"9.2","imdbVotes":"1,580,895","imdbID":"tt0068646","Type":"movie","DVD":"N/A","BoxOffice":"N/A","Production":"Paramount Pictures","Website":"N/A","Response":"True"}'
);

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

export default function MediaControlCard() {
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
