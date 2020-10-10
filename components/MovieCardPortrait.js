import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NotFavoriteIcon from "@material-ui/icons/FavoriteBorderOutlined";

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

export default function MediaCard({
  movie,
  isFavorite,
  onFavButtonClick,
  onUnFavButtonClick,
}) {
  const classes = useStyles();
  const genres = movie.Genre.split(", ");
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={movie.Poster}
        title={movie.Title + " Movie Poster"}
      >
        <div className={classes.actionButtonsContainer}>
          {genres.length > 0 && (
            <Button
              variant="contained"
              color="secondary"
              className={classes.button}
            >
              {genres[0]}
            </Button>
          )}
          {isFavorite ? (
            <IconButton
              color="secondary"
              variant="contained"
              className={classes.favButton}
              onClick={(event) => onUnFavButtonClick(event, movie.imdbID)}
            >
              <FavoriteIcon></FavoriteIcon>
            </IconButton>
          ) : (
            <IconButton
              color="secondary"
              variant="contained"
              className={classes.favButton}
              onClick={(event) => onFavButtonClick(event, movie)}
            >
              <NotFavoriteIcon></NotFavoriteIcon>
            </IconButton>
          )}
        </div>
      </CardMedia>
      <Link href={"/movies/" + movie.imdbID}>
        <a>
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
              {movie.Plot.substring(0, 120)}...
            </Typography>
          </CardContent>
        </a>
      </Link>
    </Card>
  );
}
