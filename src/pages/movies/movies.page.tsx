import React, { useState } from "react";
import { TextField } from "@mui/material";
import { skipToken } from "@reduxjs/toolkit/dist/query";

import { useGetSearchingMovieQuery } from "store";
import MovieItem from "./movie-item/movie-item";

import { ContentWrapper, Wrapper } from "./movies.styles";

const MoviesPage = () => {
  const [searchingMovies, setSearchingMovies] = useState<string | null>(null);

  const {
    data: movies,
    isSuccess,
    isFetching,
    isLoading,
    isError,
  } = useGetSearchingMovieQuery(searchingMovies ? searchingMovies : skipToken);

  const handleChangeSearchingMovie = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setSearchingMovies(e.target.value);
  };

  return (
    <Wrapper>
      <TextField
        onChange={handleChangeSearchingMovie}
        id="filled-basic"
        label="find your favorite movie"
        placeholder="find your favorite movie"
        variant="filled"
        fullWidth
        autoComplete="off"
        sx={{
          input: { color: "#FFF" },
          label: { color: "#fff" },
          border: "#ccc",
        }}
      />

      <ContentWrapper>
        {isError && <p>unfortunately, something went wrong</p>}
        {isSuccess &&
          movies.results.map((movie: any) => {
            return <MovieItem key={movie.id} movie={movie} />;
          })}
      </ContentWrapper>
    </Wrapper>
  );
};

export default MoviesPage;
