import React from "react";

import { getImagePoster } from "utils";
import { MOVIE_DETAILS_PAGE } from "constants/routes.constants";
import { FavoriteMovieItemProps } from "./favorite-movie-item.types";

import {
  ContentWrapper,
  Poster,
  StyledLink,
} from "./favorite-movies-item.styles";

const FavoriteMovieItem: React.FC<FavoriteMovieItemProps> = ({ movie }) => {
  const moviePath = MOVIE_DETAILS_PAGE.path.replace(":id", movie.id.toString());

  return (
    <StyledLink to={moviePath} key={movie.id}>
      <Poster src={getImagePoster(movie.poster_path, 200)} alt="movie poster" />
      <ContentWrapper>
        <h4>{movie.title}</h4>
        <p>{movie.tagline}</p>
        <p>{movie.status}</p>
      </ContentWrapper>
    </StyledLink>
  );
};

export default FavoriteMovieItem;
