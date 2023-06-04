const processDate = (date: string): string =>
  new Date(date).toLocaleString("en", {
    dateStyle: "short",
  });

export default processDate;
