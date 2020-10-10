import { useEffect, useRef } from "react";

const initialState = {
  imdbIDs: [],
  movies: [],
};

const FavoritesContext = React.createContext();

function favoritesReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_FAVORITES": {
      return {
        ...state,
        imdbIDs: [...state.imdbIDs, action.payload.imdbID],
        movies: [...state.movies, action.payload.movie],
      };
    }
    case "REMOVE_FROM_FAVORITES": {
      return {
        ...state,
        imdbIDs: state.imdbIDs.filter((imdbID) => imdbID !== action.payload),
        movies: state.movies.filter((movie) => movie.imdbID !== action.payload),
      };
    }
    case "SET_STATE_FROM_LOCAL_STORAGE": {
      return action.payload;
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`);
    }
  }
}

function FavoritesProvider(props) {
  const [state, dispatch] = React.useReducer(favoritesReducer, initialState);
  const value = React.useMemo(() => [state, dispatch], [state]);

  useEffect(() => {
    const stateFromLocalStorage = localStorage.getItem("favoritesState");
    if (stateFromLocalStorage) {
      try {
        dispatch({
          type: "SET_STATE_FROM_LOCAL_STORAGE",
          payload: JSON.parse(stateFromLocalStorage),
        });
      } catch (e) {
        console.log(e);
        //TODO toast error
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favoritesState", JSON.stringify(state));
  }, [state]);

  return <FavoritesContext.Provider value={value} {...props} />;
}

function useFavorites() {
  const context = React.useContext(FavoritesContext);
  if (!context) {
    throw new Error(`useFavorites must be used within a FavoritesProvider`);
  }
  const [state, dispatch] = context;

  const addToFavorites = (movie) =>
    dispatch({
      type: "ADD_TO_FAVORITES",
      payload: { imdbID: movie.imdbID, movie },
    });

  const removeFromFavorites = (imdbID) =>
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: imdbID });

  return {
    state,
    dispatch,
    addToFavorites,
    removeFromFavorites,
  };
}

export { FavoritesProvider, useFavorites };
