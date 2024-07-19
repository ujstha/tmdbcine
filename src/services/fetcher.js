/* eslint-disable camelcase */
import { API_BASE_URL } from "@/constants";

export const fetcher = async (endpoint, params = {}) => {
  const api_key = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  if (!api_key) {
    throw new Error(
      "TMDb API key is missing. Please add it to your environment variables."
    );
  }
  const defaultParams = { api_key, ...params };

  const queryParams = new URLSearchParams(defaultParams).toString();
  const response = await fetch(`${API_BASE_URL}${endpoint}?${queryParams}`);

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};
