import { API_BASE_URL, API_KEY, API_LANGUAGE } from "@/constants/urls";
import axios from "axios";

const client = axios.create({
  baseURL: API_BASE_URL,
  params: { api_key: API_KEY },
  responseType: "json",
});

client.interceptors.request.use((conf) => {
  conf.params.api_key = API_KEY;
  conf.params.language = API_LANGUAGE;
  return conf;
});

export const fetchTrending = async () => {
  const response = await client.get("/trending/movie/week", {
    params: {
      include_image_language: "null",
    },
  });
  return response;
};

export const fetchById = async (type = "", id) => {
  const types = ["movie", "tv", "person"];
  if (!types.includes(type)) {
    return null;
  }

  const APPEND_FOR_PERSON =
    "images,external_ids,combined_credits,tagged_images";
  const APPEND_FOR_MOVIE_AND_TV =
    "videos,credits,similar,recommendations,images,reviews,keywords,external_ids";

  const response = await client.get(`/${type}/${id}`, {
    params: {
      append_to_response:
        type === "person" ? APPEND_FOR_PERSON : APPEND_FOR_MOVIE_AND_TV,
      include_image_language: "null",
    },
  });
  return response;
};

export const fetchGenre = async (type) => {
  const response = await client.get(`/genre/${type}/list`);
  return response;
};
