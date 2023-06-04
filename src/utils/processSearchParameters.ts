const processSearchParameters = <T extends object>(obj: T): URLSearchParams => {
  const urlParameters = new URLSearchParams();

  Object.entries(obj).forEach(([key, value]) => {
    if (value) {
      if (Array.isArray(value)) {
        value.forEach((item) => urlParameters.append(key, String(item)));
      } else {
        urlParameters.append(key, String(value));
      }
    }
  });

  return urlParameters;
};

export default processSearchParameters;
