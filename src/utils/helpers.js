import { API_IMAGE_BASE_URL } from "@/constants";

export const createSlug = (str, separator = "-") => {
  return str
    ?.toString()
    .normalize("NFD") // split an accented letter in the base letter and the acent
    .replace(/[\u0300-\u036f]/g, "") // remove all previously split accents
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9 ]/g, "") // remove all chars not letters, numbers and spaces (to be replaced)
    .replace(/\s+/g, separator);
};

export const hexToRgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

export const getImageUrl = (path, size = "medium") => {
  return `${API_IMAGE_BASE_URL[size]}${path}`;
};
