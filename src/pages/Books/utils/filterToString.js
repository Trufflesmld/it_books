export const filterToString = (filter) => {
  return Object.values(filter)
    .reduce((res, value) => `${res} ${value}`, "")
    .trim();
};
