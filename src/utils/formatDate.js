export const formatDate = (dateString, format = "year") => {
  if (!dateString) return null;

  const date = new Date(dateString);
  if (isNaN(date)) return "Unknown Date";

  let options = {};
  if (format === "year") {
    options = { year: "numeric" };
  } else if (format === "full") {
    options = { day: "numeric", month: "short", year: "numeric" };
  }
  return date.toLocaleDateString("en-US", options);
};

export const formatFullDate = (dateString) => formatDate(dateString, "full");
