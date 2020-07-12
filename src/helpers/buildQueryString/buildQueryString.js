const buildQueryString = (query) => {
  if (!query || !Object.keys(query).length) {
    return '';
  }

  return Object.keys(query).reduce((result, key) => {
    if (query[key]) {
      return (
        result + `${result ? '&' : '?'}${key}=${encodeURIComponent(query[key])}`
      );
    }

    return result;
  }, '');
};

export default buildQueryString;
