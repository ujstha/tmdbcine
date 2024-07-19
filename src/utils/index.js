export * from "./cn";
export * from "./formatDate";

export const toSlug = (str, separator = "-") => {
  return str
    ?.toString()
    .normalize("NFD") // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, "") // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, "") // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/\s+/g, separator);
};

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

const getItemWithKey = (item, keys) => {
  for (const key of keys) {
    if (item[key]) return item[key];
  }
  return null;
};

export const getTitle = (item, type) => {
  const keys = titleKeys[type] || [];
  return getItemWithKey(item, keys);
};

export const getDate = (item, type) => {
  const keys = dateKeys[type] || [];
  return getItemWithKey(item, keys);
};

export const hexToRgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};
