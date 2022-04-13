export interface MovieModel {
  adult: boolean;
  backdrop_path: string;
  genres: any[];
  production_countries: any[];
  genre_ids: [];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: string;
  vote_count: string;
  isFavorite?: boolean;
}
