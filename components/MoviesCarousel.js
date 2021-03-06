import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import MovieCardLandscape from "./MovieCardLandscape";
import MovieCardPortrait from "./MovieCardPortrait";
import { IconButton } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { useFavorites } from "../providers/FavoritesProvider";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const MovieDisplayComponents = {
  portrait: MovieCardPortrait,
  landscape: MovieCardLandscape,
};

const arrowStyles = {
  position: "absolute",
  zIndex: 2,
  top: "calc(50% - 15px)",
  width: 57,
  height: 57,
  cursor: "pointer",
  backgroundColor: "#fff",
  boxShadow: "0px 14px 26px rgba(39, 13, 48, 0.25)",
};

const indicatorStyles = {
  background: "rgba(245, 197, 24, 0.2)",
  width: 29,
  height: 6,
  borderRadius: 4,
  display: "inline-block",
  margin: "0 8px",
};

export default function MoviesCarousel({ movies }) {
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const MovieDisplayComponent =
    MovieDisplayComponents[isMobileScreen ? "portrait" : "landscape"];
  const {
    state: { imdbIDs },
    addToFavorites,
    removeFromFavorites,
  } = useFavorites();

  return (
    <Carousel
      showStatus={false}
      showThumbs={false}
      autoPlay={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <IconButton
            color="secondary"
            style={{ ...arrowStyles, left: 15 }}
            onClick={onClickHandler}
          >
            <ArrowBackIcon />
          </IconButton>
        )
      }
      renderArrowNext={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <IconButton
            color="secondary"
            style={{ ...arrowStyles, right: 15 }}
            onClick={onClickHandler}
          >
            <ArrowForwardIcon />
          </IconButton>
        )
      }
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <li
              style={{ ...indicatorStyles, background: "#F5C518", width: 48 }}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          );
        }
        return (
          <li
            style={indicatorStyles}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        );
      }}
    >
      {movies.map((movie, index) => (
        <MovieDisplayComponent
          key={index}
          movie={movie}
          isFavorite={imdbIDs.includes(movie.imdbID)}
          onFavButtonClick={(event, movie) => {
            addToFavorites(movie);
          }}
          onUnFavButtonClick={(event, id) => {
            removeFromFavorites(id);
          }}
        ></MovieDisplayComponent>
      ))}
    </Carousel>
  );
}
