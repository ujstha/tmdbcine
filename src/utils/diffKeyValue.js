import { getItemWithKey } from "./helpers";

const titleKeys = {
  movie: ["title", "original_title"],
  tv: ["name", "original_name"],
  person: ["name", "original_name"],
};

const dateKeys = {
  movie: ["release_date"],
  tv: ["first_air_date", "air_date"],
  person: ["birthday"],
};

export const getTitle = (item, mediaType) => {
  const keys = titleKeys[mediaType] || [];
  return getItemWithKey(item, keys);
};

export const getDate = (item, mediaType) => {
  const keys = dateKeys[mediaType] || [];
  return getItemWithKey(item, keys);
};
