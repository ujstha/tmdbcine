import { API_BASE_URL, API_KEY, API_LANGUAGE } from "@/constants/urls";
import { renderReleaseYear } from "@/utils";
import axios from "axios";

const client = axios.create({
  baseURL: API_BASE_URL,
  params: { api_key: process.env.TMDB_API_KEY },
  responseType: "json",
});

client.interceptors.request.use((conf) => {
  conf.params.api_key = API_KEY;
  conf.params.language = API_LANGUAGE;
  return conf;
});

export const fetchGenre = async (type) => {
  const response = await client.get(`/genre/${type}/list`);
  return response?.data;
};

export const fetchTrending = async (mediaType = "movie") => {
  const response = await client.get(`/trending/${mediaType}/week`, {
    params: {
      include_image_language: "null",
    },
  });
  const genres = await fetchGenre(mediaType);
  console.log({ results: response.data.results });
  return {
    page: response?.data?.page,
    total_pages: response?.data?.total_pages,
    results: response?.data?.results.map((item) => ({
      id: item.id,
      vote_average: item.vote_average,
      poster_path: item.poster_path || item.backdrop_path,
      media_type: item.media_type,
      release_year: renderReleaseYear(item.release_date),
      genres: genres.genres
        .filter(({ id }) => item.genre_ids.includes(id))
        .map((genre) => genre),
      title: item.title,
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
  const APPEND_FOR_MOVIE_AND_TV =
    "videos,credits,similar,recommendations,images,reviews,keywords,external_ids";

  const response = await client.get(`/${mediaType}/${id}`, {
    params: {
      append_to_response:
        mediaType === "person" ? APPEND_FOR_PERSON : APPEND_FOR_MOVIE_AND_TV,
      include_image_language: "null",
    },
  });

  return response?.data;
};
