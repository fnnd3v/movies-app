import { RouteConfig } from "models";

type Route = Omit<RouteConfig, "component">;

export const MOVIES_PAGE: Route = {
  path: "*",
  name: "Movies",
  showNavigation: true,
};

export const MOVIE_DETAILS_PAGE: Route = {
  path: "/movies/:id",
  name: "Movie details",
  showNavigation: true,
};

export const FAVORITE_MOVIES_PAGE: Route = {
  path: "/favorite-movies",
  name: "Favorite movies",
  showNavigation: true,
};

export const MOST_POPULAR_MOVIES_PAGE: Route = {
  path: "/most-popular-movies",
  name: "Most popular movies",
  showNavigation: true,
};

export const DEFAULT_PAGE: Route = {
  path: "*",
  name: "default",
  showNavigation: true,
};
