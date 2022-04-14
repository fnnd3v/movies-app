import { useDispatch, useSelector } from "react-redux";
import { addMovieToFavorite, removeMovieFromFavorite } from "store";
import { MovieModel } from "models";

export const useFavoriteMovies = () => {
  const favoriteMoviesState = useSelector((state: any) => state.favoriteMovies);
  const dispatch = useDispatch();

  const toggleFavoriteMovie = (movie: any) => {
    const index = favoriteMoviesState.findIndex(
      (favoriteMovie: MovieModel) => favoriteMovie.id === movie.id
    );

    if (index === -1) {
      return dispatch(addMovieToFavorite(movie));
    } else {
      return dispatch(removeMovieFromFavorite(movie.id));
    }
  };

  const checkIsFavorite = (
    movie: MovieModel,
    setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (favoriteMoviesState.length === 0) return setIsFavorite(false);
    const index = favoriteMoviesState.findIndex(
      (favoriteMovie: MovieModel) => favoriteMovie.id === movie.id
    );
    if (index === -1) return setIsFavorite(false);
    setIsFavorite(true);
  };

  return {
    toggleFavoriteMovie,
    checkIsFavorite,
  };
};
