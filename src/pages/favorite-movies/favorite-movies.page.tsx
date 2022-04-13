import { MOVIE_DETAILS_PAGE } from "constants/routes.constants";
import { MovieModel } from "models";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getImagePoster } from "utils";

const Wrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  width: 90%;
  height: 250px;
  margin: 20px 0;
  color: white;
  background-color: ${({ theme }) => theme.colors.mainDarker};
  display: flex;

  align-items: center;

  img {
    height: 100%;
  }

  p {
    padding: 10px;
  }
`;

const FavoriteMoviesPage = () => {
  const favoriteMoviesState = useSelector((state: any) => state.favoriteMovies);

  const moviePath = (id: number) =>
    MOVIE_DETAILS_PAGE.path.replace(":id", id.toString());

  return (
    <Wrapper>
      {favoriteMoviesState
        ? favoriteMoviesState.map((movie: MovieModel) => {
            return (
              <StyledLink to={moviePath(movie.id)} key={movie.id}>
                <img
                  src={getImagePoster(movie.poster_path, 200)}
                  alt="movie poster"
                />
                <p>{movie.title}</p>
              </StyledLink>
            );
          })
        : null}
    </Wrapper>
  );
};

export default FavoriteMoviesPage;
