import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/FavoriteBorderOutlined";

const useStyles = makeStyles((theme) => ({
  root: {},
  cover: {
    height: "30vh",
    display: "flex",
    flexDirection: "column-reverse",
    padding: theme.spacing(2),
  },
  actionButtonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  favButton: {
    backgroundColor: "#fff",
  },
}));

export default function MediaCard({ movie }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={movie.Poster}
        title={movie.Title + " Movie Poster"}
      >
        <div className={classes.actionButtonsContainer}>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Action
          </Button>
          <IconButton
            color="secondary"
            variant="contained"
            className={classes.favButton}
          >
            <FavoriteIcon></FavoriteIcon>
          </IconButton>
        </div>
      </CardMedia>
      <CardHeader
        avatar={<img src="/images/imdb-icon.png" alt="imdb icon"></img>}
        title={movie.imdbRating}
      />
      <CardContent className={classes.content}>
        <Typography component="h6" variant="h6" color="secondary">
          {movie.Year}
        </Typography>
        <Typography component="h5" variant="h5">
          {movie.Title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {movie.Plot}
        </Typography>
      </CardContent>
    </Card>
  );
}
