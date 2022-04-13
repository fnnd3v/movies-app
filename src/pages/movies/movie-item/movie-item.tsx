import React from "react";

import { getImagePoster } from "utils";
import { MovieItemProps } from "./movie-item.types";

import {
  AboutInfo,
  Rating,
  StyledLink,
  StyledPoster,
} from "./movies-item.styles";

import StarIcon from "assets/icons/star_icon.svg";
import { MOVIE_DETAILS_PAGE } from "constants/routes.constants";

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  const {
    poster_path: posterPath,
    title,
    release_date: releaseDate,
    vote_average: voteAverage,
    vote_count: voteCount,
    popularity,
    overview,
  } = movie;

  const moviePath = MOVIE_DETAILS_PAGE.path.replace(":id", movie.id.toString());

  return (
    <StyledLink to={moviePath}>
      <StyledPoster>
        <img src={getImagePoster(posterPath, 300)} alt="movie poster" />
        <p>{overview}</p>
      </StyledPoster>
      <AboutInfo>
        <h4>{title}</h4>
        <span>{releaseDate}</span>

        <Rating>
          <div>
            <img src={StarIcon} alt="star" />
            <p>{voteAverage}</p>
          </div>
          <p>
            {voteCount}
            <br />
            <span>vostes</span>
          </p>
        </Rating>
        <p>
          <span>popularity: </span>
          {popularity}
        </p>
      </AboutInfo>
    </StyledLink>
  );
};

export default MovieItem;
