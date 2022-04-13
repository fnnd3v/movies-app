import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { BASE_URL } from "config";

const BASE_QUERY_PARAMS = {
  api_key: "5fd6d1ff3424ace0b8fe52aa5b9834fd",
};

export const moviesApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getTopRatedMovies: builder.query<any, number>({
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
    getSearchingMovie: builder.query<any, string>({
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
    getMovieDetails: builder.query<any, string>({
      query: (movieId: string | null) => {
        return {
          url: `/movie/${movieId}`,
          params: BASE_QUERY_PARAMS,
        };
      },
    }),
    getSimilarVideos: builder.query<any, string>({
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
