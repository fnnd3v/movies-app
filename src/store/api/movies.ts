import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL } from "config";
import { MovieModel } from "models";
import { MovieResponse } from "./movies.types";

const BASE_QUERY_PARAMS = {
  api_key: "5fd6d1ff3424ace0b8fe52aa5b9834fd",
};

export const moviesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getTopRatedMovies: builder.query<MovieResponse, number>({
      query: (page) => {
        return {
          url: `movie/top_rated`,
          params: {
            ...BASE_QUERY_PARAMS,
            page,
          },
        };
      },
    }),
    getSearchingMovie: builder.query<MovieResponse, string>({
      query: (movie) => {
        return {
          url: `/search/movie`,
          params: {
            ...BASE_QUERY_PARAMS,
            query: movie,
            page: 1,
            include_adult: false,
          },
        };
      },
    }),
    getMovieDetails: builder.query<MovieModel, string>({
      query: (movieId: string | null) => {
        return {
          url: `/movie/${movieId}`,
          params: BASE_QUERY_PARAMS,
        };
      },
    }),
    getSimilarVideos: builder.query<MovieResponse, string>({
      query: (movieId: string | null) => {
        return {
          url: `/movie/${movieId}/similar`,
          params: BASE_QUERY_PARAMS,
        };
      },
    }),
  }),
});

export const {
  useGetTopRatedMoviesQuery,
  useGetSearchingMovieQuery,
  useGetMovieDetailsQuery,
  useGetSimilarVideosQuery,
} = moviesApi;
