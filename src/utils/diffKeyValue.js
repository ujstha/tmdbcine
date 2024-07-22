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
  return keys.map((key) => item[key]).find((title) => title) || null;
};

export const getDate = (item, mediaType) => {
  const keys = dateKeys[mediaType] || [];
  return keys.map((key) => item[key]).find((date) => date) || null;
};
