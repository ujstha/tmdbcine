/* eslint-disable camelcase */
import { getTitle } from "./diffKeyValue";
import { formatFullDate, formatYear } from "./formatDate";

export const transformMovieData = (response) => {
  const {
    adult,
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
    first_air_date: formatFullDate(response, "tv"),
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

export const transformDataByType = (response, type) => {
  switch (type) {
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
