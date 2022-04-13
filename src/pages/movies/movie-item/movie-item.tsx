import React from "react";

import { getImagePoster } from "utils";
import { MovieItemProps } from "./movie-item.types";

import { MovieDetails, Rating, StyledMovieItem } from "./movies-item.styles";

import StarIcon from "assets/icons/star_icon.svg";

const MovieItem: React.FC<MovieItemProps> = ({ movie }) => {
  const {
    poster_path: posterPath,
    title,
    release_date: releaseDate,
    vote_average: voteAverage,
    vote_count: voteCount,
    popularity,
  } = movie;

  return (
    <StyledMovieItem>
      <img src={getImagePoster(posterPath)} alt="movie poster" />
      <MovieDetails>
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
            <span>votes</span>
          </p>
        </Rating>
        <p>
          <span>popularity: </span>
          {popularity}
        </p>
      </MovieDetails>
    </StyledMovieItem>
  );
};

export default MovieItem;
