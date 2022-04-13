import React from "react";

import { getImagePoster } from "utils";
import { MovieItemProps } from "./movie-item.types";

import {
  AboutInfo,
  MovieDetails,
  Rating,
  StyledMovieItem,
  StyledPoster,
} from "./movies-item.styles";

import StarIcon from "assets/icons/star_icon.svg";

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

  return (
    <StyledMovieItem>
      <StyledPoster>
        <img src={getImagePoster(posterPath, 500)} alt="movie poster" />
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
    </StyledMovieItem>
  );
};

export default MovieItem;
