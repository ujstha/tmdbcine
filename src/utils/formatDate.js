import { getDate } from "./diffKeyValue";

export const formatDate = (dateString, format = "year") => {
  if (!dateString) return null;

  const date = new Date(dateString);
  if (isNaN(date)) return "Unknown Date";

  if (format === "full") {
    const options = { day: "numeric", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }
  return date.getFullYear();
};

export const formatFullDate = (item, mediaType) =>
  formatDate(getDate(item, mediaType), "full");

export const formatYear = (item, mediaType) =>
  formatDate(getDate(item, mediaType));
