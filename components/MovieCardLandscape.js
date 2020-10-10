import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FavoriteIcon from "@material-ui/icons/Favorite";
import NotFavoriteIcon from "@material-ui/icons/FavoriteBorderOutlined";

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
  movie = { Poster: null, Title: "", Genre: "", Plot: "" },
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
      />
      <div className={classes.details}>
        <CardHeader
          avatar={<img src="/images/imdb-icon.png" alt="imdb icon"></img>}
          action={
            <>
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
            </>
          }
          title={movie.imdbRating}
        />
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {movie.Title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {movie.Plot.substring(0, 120)}...
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          {isFavorite ? (
            <Button
              variant="contained"
              color="secondary"
              style={{ color: "#fff" }}
              className={classes.button}
              onClick={(event) => onUnFavButtonClick(event, movie.imdbID)}
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
              onClick={(event) => onFavButtonClick(event, movie)}
            >
              <NotFavoriteIcon></NotFavoriteIcon>
              Add to favorites
            </Button>
          )}

          <Link href={"/movies/" + movie.imdbID}>
            <a>
              <Button
                variant="text"
                color="secondary"
                className={classes.button}
              >
                View Details
              </Button>
            </a>
          </Link>
        </div>
      </div>
    </Card>
  );
}
