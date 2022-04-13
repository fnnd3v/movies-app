import React from "react";
import { useGetSimilarVideosQuery } from "store";
import { useNavigate } from "react-router-dom";

import { StyledItem, StyledList, Wrapper } from "./similar-videos.styles";
import { Loader } from "components";
import { SimilarVIdeosProps } from "./similar-videos.types";

const SimilarVideos: React.FC<SimilarVIdeosProps> = ({ movieId }) => {
  const {
    data: similarVideos,
    isSuccess,
    isLoading,
    isFetching,
    isError,
  } = useGetSimilarVideosQuery(movieId);

  const navigate = useNavigate();

  const fetchPoster = (poster: string, width: number = 300) => {
    if (poster) return `http://image.tmdb.org/t/p/w${width}/${poster}`;
  };

  const handleChangeRoute = (id: number) => {
    navigate(`/movies/${id}`);
  };

  return (
    <Wrapper>
      <h4>check similar videos</h4>
      <StyledList>
        {isLoading && isFetching && <Loader />}
        {isError && <p>unfortunately, something went wrong</p>}
        {isSuccess &&
          similarVideos.results.map((movie: any) => {
            return (
              <StyledItem
                key={movie.id}
                onClick={() => handleChangeRoute(movie.id)}
              >
                <img src={fetchPoster(movie.poster_path)} alt="movie poster" />
                <p>{movie.title}</p>
              </StyledItem>
            );
          })}
      </StyledList>
    </Wrapper>
  );
};

export default SimilarVideos;
