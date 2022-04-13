/* omit bierze całość RouteConfig i wywala property component */
type Route = Omit<any, "component">;

export const MOVIES_PAGE: Route = {
  path: "/movies",
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