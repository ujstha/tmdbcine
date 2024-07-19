/* eslint-disable camelcase */
import { formatDate, getDate, getTitle } from "@/utils";
import { fetcher } from "./fetcher";

export const fetchGenre = async (type) => {
  return fetcher(`/genre/${type}/list`);
};

export const fetchTrending = async (mediaType = "movie") => {
  const response = await fetcher(`/trending/${mediaType}/week`);
  const genres = await fetchGenre(mediaType);

  console.log({ response });
  return {
    page: response?.page,
    total_pages: response?.total_pages,
    results: response?.results.map((item) => ({
      id: item.id,
      vote_average: item.vote_average,
      poster_path: item.poster_path ?? item.backdrop_path,
      media_type: item.media_type,
      release_year: formatDate(getDate(item, item.media_type)),
      genres: genres.genres
        .filter(({ id }) => item.genre_ids.includes(id))
        .map((genre) => genre),
      title: getTitle(item, item.media_type),
    })),
  };
};

export const fetchById = async (mediaType = "movie", id) => {
  const types = ["movie", "tv", "person"];
  if (!types.includes(mediaType)) {
    return null;
  }

  const APPEND_FOR_PERSON =
    "images,external_ids,combined_credits,tagged_images";
  const APPEND_FOR_MEDIA =
    "videos,credits,similar,recommendations,images,reviews,keywords,external_ids";

  const response = await fetcher(`/${mediaType}/${id}`, {
    append_to_response:
      mediaType === "person" ? APPEND_FOR_PERSON : APPEND_FOR_MEDIA,
  });

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
    release_date: formatDate(response, "full"),
    release_year: formatDate(response),
    title: response.title ?? response.original_title,
    imdb_id: response.external_ids.imdb_id,
    videos: newResponse.videos.results,
  };
};
