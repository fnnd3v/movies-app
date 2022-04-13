import FavoriteMoviesPage from "pages/favorite-movies/favorite-movies.page";
import MostPopularMoviesPage from "pages/most-popular-movies/most-popular-movies.page";
import MovieDetailsPage from "pages/movie-details/movie-details.page";
import MoviesPage from "pages/movies/movies.page";

import {
  DEFAULT_PAGE,
  FAVORITE_MOVIES_PAGE,
  MOST_POPULAR_MOVIES_PAGE,
  MOVIES_PAGE,
  MOVIE_DETAILS_PAGE,
} from "constants/routes.constants";

import { RouteConfig } from "models";

export const routes: RouteConfig[] = [
  { ...MOVIES_PAGE, component: MoviesPage },
  { ...MOVIE_DETAILS_PAGE, component: MovieDetailsPage },
  { ...FAVORITE_MOVIES_PAGE, component: FavoriteMoviesPage },
  { ...MOST_POPULAR_MOVIES_PAGE, component: MostPopularMoviesPage },
  { ...DEFAULT_PAGE, component: MoviesPage },
];
