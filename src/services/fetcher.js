import { API_BASE_URL } from "@/constants";

export const fetcher = async (endpoint, additionalParams = {}) => {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

  if (!apiKey) {
    throw new Error(
      "TMDb API key is missing. Please add it to your environment variables."
    );
  }

  const url = new URL(`${API_BASE_URL}${endpoint}`);
  url.searchParams.append("api_key", apiKey);

  Object.keys(additionalParams).forEach((key) => {
    url.searchParams.append(key, additionalParams[key]);
  });

  try {
    const response = await fetch(url.toString());
    if (!response.ok) {
      throw new Error(`TMDb API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};
