export const getItemWithKey = (item, keys) => {
  for (const key of keys) {
    if (item[key]) return item[key];
  }
  return null;
};
