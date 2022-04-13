import DefaultPoster from "assets/images/default_poster.png";

const IMAGE_API_URL_POSTER = "http://image.tmdb.org/t/p";
const IMAGE_API_URL_BACKGROUND = "http://image.tmdb.org/t/p";

export const getImagePoster = (poster: string, width: number = 500) => {
  if (poster) return `${IMAGE_API_URL_POSTER}/w${width}/${poster}`;

  return DefaultPoster;
};

export const getImageBackground = (poster: string, width: number = 500) => {
  return `${IMAGE_API_URL_BACKGROUND}/w${width}/${poster}`;
};
