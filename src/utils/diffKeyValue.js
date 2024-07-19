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

export const getTitle = (item, type) => {
  const keys = titleKeys[type] || [];
  return getItemWithKey(item, keys);
};

export const getDate = (item, type) => {
  const keys = dateKeys[type] || [];
  return getItemWithKey(item, keys);
};
