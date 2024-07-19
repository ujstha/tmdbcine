export const getItemWithKey = (item, keys) => {
  for (const key of keys) {
    if (item[key]) return item[key];
  }
  return null;
};

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
