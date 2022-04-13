import FavoriteMoviesPage from "pages/favorite-movies/favorite-movies.page";
import MostPopularMoviesPage from "pages/most-popular-movies/most-popular-movies.page";
import MovieDetailsPage from "pages/movie-details/movie-details.page";
import MoviesPage from "pages/movies/movies-page";

import {
  FAVORITE_MOVIES_PAGE,
  MOST_POPULAR_MOVIES_PAGE,
  MOVIES_PAGE,
  MOVIE_DETAILS_PAGE,
} from "constants/routes.constants";

export const routes: any = [
  { ...MOVIES_PAGE, component: MoviesPage },
  { ...MOVIE_DETAILS_PAGE, component: MovieDetailsPage },
  { ...FAVORITE_MOVIES_PAGE, component: FavoriteMoviesPage },
  { ...MOST_POPULAR_MOVIES_PAGE, component: MostPopularMoviesPage },
];
