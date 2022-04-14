import React from "react";
import { useSelector } from "react-redux";
import { MovieModel } from "models";

import FavoriteMovieItem from "./favorite-movie-item/favorite-movie-item";

import { Wrapper } from "./favorite-movies.page.styles";

const FavoriteMoviesPage = () => {
  const favoriteMoviesState = useSelector((state: any) => state.favoriteMovies);

  return (
    <Wrapper>
      {favoriteMoviesState.length !== 0 ? (
        favoriteMoviesState.map((movie: MovieModel) => {
          return <FavoriteMovieItem key={movie.id} movie={movie} />;
        })
      ) : (
        <p>add your first movie</p>
      )}
    </Wrapper>
  );
};

export default FavoriteMoviesPage;
