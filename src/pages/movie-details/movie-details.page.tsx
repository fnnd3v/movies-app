import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { useGetMovieDetailsQuery } from "store";

import {
  Backdrop,
  ContentWrapper,
  Details,
  Overview,
  Rating,
  ReleaseDate,
  StyledDetails,
  Wrapper,
} from "pages/movie-details/movie-details.styles";

import StarIcon from "assets/icons/star_icon.svg";
import { getImageBackground, getImagePoster } from "utils";
import SimilarVideos from "./similar-videos/similar-vidoes.page";

const MovieDetailsPage = () => {
  const { id } = useParams();

  const [movieId, setMovieId] = useState<string>(id || "");

  useEffect(() => {
    if (id) setMovieId(id);
  }, [id]);

  const {
    data: movie,
    isFetching,
    isLoading,
    isError,
    isSuccess,
  } = useGetMovieDetailsQuery(movieId);

  return (
    <Wrapper>
      <SimilarVideos movieId={movieId} />
      {isError && <p>error</p>}
      {isSuccess && movie && (
        <ContentWrapper>
          <Backdrop>
            <img
              src={getImageBackground(movie.backdrop_path)}
              alt="movie poster"
            />
            <h3>{movie.title}</h3>
            <Rating>
              <div>
                <img src={StarIcon} alt="star" />
                <p>{movie.vote_average}</p>
              </div>
              <p>
                {movie.vote_count}
                <br />
                <span>votes</span>
              </p>
            </Rating>
          </Backdrop>
          <Overview>
            <img src={getImagePoster(movie.poster_path)} alt="poster" />
            <p>{movie.overview}</p>
          </Overview>
          <Details>
            <StyledDetails>
              <span>genres</span>
              <div>
                {movie.genres.map((genre: { id: number; name: string }) => {
                  return <p key={genre.name}>{genre.name}</p>;
                })}
              </div>
            </StyledDetails>
            <StyledDetails>
              <span>country</span>
              <div>
                {movie.production_countries.map(
                  (country: { iso_3166_1: string; name: string }) => {
                    return <p key={country.name}>{country.name}</p>;
                  }
                )}
              </div>
            </StyledDetails>
            <ReleaseDate>
              <span>release date</span>
              <p>{movie.release_date}</p>
            </ReleaseDate>
          </Details>
        </ContentWrapper>
      )}
    </Wrapper>
  );
};

export default MovieDetailsPage;
