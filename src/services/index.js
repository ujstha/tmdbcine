/* eslint-disable camelcase */
import { transformData, transformDataByType } from "@/utils";
import { fetcher } from "./fetcher";

const genreCache = {
  movie: null,
  tv: null,
};

export const fetchGenres = async (mediaType) => {
  if (genreCache[mediaType]) {
    return genreCache[mediaType];
  }

  const data = await fetcher(`/genre/${mediaType}/list`);
  genreCache[mediaType] = data;
  return data;
};

export const fetchDataWithGenres = async (endpoint, mediaType) => {
  try {
    const response = await fetcher(endpoint);
    const genres = mediaType ? await fetchGenres(mediaType) : null;

    return {
      page: response?.page,
      total_pages: response?.total_pages,
      results: response?.results.map((item) =>
        transformData(item, genres, mediaType)
      ),
    };
  } catch (error) {
    console.error(`Failed to fetch data from ${endpoint}:`, error);
    return {
      page: 0,
      total_pages: 0,
      results: [],
    };
  }
};

export const fetchTrending = async (mediaType = "movie") => {
  const endpoint = `/trending/${mediaType}/week`;
  return fetchDataWithGenres(endpoint, mediaType);
};

export const fetchTopRated = async (mediaType = "movie") => {
  const endpoint = `/${mediaType}/top_rated`;
  return fetchDataWithGenres(endpoint, mediaType);
};

export const fetchUpcoming = async (mediaType = "movie") => {
  const endpoint = `/${mediaType}/upcoming`;
  return fetchDataWithGenres(endpoint, mediaType);
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

  return transformDataByType(response, mediaType);
};
