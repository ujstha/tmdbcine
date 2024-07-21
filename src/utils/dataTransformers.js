/* eslint-disable camelcase */
import { getTitle } from "./diffKeyValue";
import { formatFullDate, formatYear } from "./formatDate";

export const transformData = (item, genres, mediaType) => {
  const { id, vote_average, poster_path, backdrop_path, media_type } = item;
  return {
    id,
    vote_average,
    poster_path: poster_path ?? backdrop_path,
    media_type,
    release_year: formatYear(item, mediaType),
    genres: genres.genres.filter(({ id }) => item.genre_ids.includes(id)),
    title: getTitle(item, mediaType),
  };
};

export const transformMovieData = (response) => {
  const {
    adult,
    original_title,
    origin_country,
    original_language,
    popularity,
    production_companies,
    production_countries,
    spoken_languages,
    belongs_to_collection,
    external_ids,
    ...newResponse
  } = response;

  return {
    ...newResponse,
    release_date: formatFullDate(response, "movie"),
    release_year: formatYear(response, "movie"),
    title: getTitle(response, "movie"),
    imdb_id: response.external_ids?.imdb_id,
    videos: newResponse.videos?.results ?? [],
    language: response.spoken_languages[0]?.name,
  };
};

export const transformTvData = (response) => {
  const {
    adult,
    origin_country,
    original_language,
    popularity,
    production_companies,
    production_countries,
    spoken_languages,
    external_ids,
    ...newResponse
  } = response;

  return {
    ...newResponse,
    release_date: formatFullDate(response, "tv"),
    release_year: formatYear(response, "tv"),
    title: getTitle(response, "tv"),
    imdb_id: response.external_ids?.imdb_id,
    videos: newResponse.videos?.results ?? [],
  };
};

export const transformPersonData = (response) => {
  const { popularity, external_ids, ...newResponse } = response;

  return {
    ...newResponse,
    imdb_id: response.external_ids?.imdb_id,
    known_for: newResponse.known_for_department,
    birthday: formatFullDate(response, "person"),
    deathday: response.deathday
      ? formatFullDate(response.deathday, "person")
      : null,
  };
};

export const transformDataByType = (response, mediaType) => {
  switch (mediaType) {
    case "movie":
      return transformMovieData(response);
    case "tv":
      return transformTvData(response);
    case "person":
      return transformPersonData(response);
    default:
      return response;
  }
};
