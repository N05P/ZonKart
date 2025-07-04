export const filterData = (value, api) => {
  const filter = api.filter((item) => {
    return item.name.toLowerCase() === value.toLowerCase();
  });
  return filter;
};
