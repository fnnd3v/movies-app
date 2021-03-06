import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

import { moviesApi } from "./api/movies";

import { MovieModel } from "models";

const initialState: MovieModel[] = [];

const favoriteMoviesSlice = createSlice({
  name: "favoriteMovies",
  initialState: initialState,
  reducers: {
    addMovieToFavorite(state, action: PayloadAction<MovieModel>) {
      state.push(action.payload);
    },
    removeMovieFromFavorite(state, action: PayloadAction<number>) {
      return state.filter((movie) => movie.id !== action.payload);
    },
  },
});

export const { addMovieToFavorite, removeMovieFromFavorite } =
  favoriteMoviesSlice.actions;

export const store = configureStore({
  reducer: {
    favoriteMovies: favoriteMoviesSlice.reducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});

export * from "./api/movies";
