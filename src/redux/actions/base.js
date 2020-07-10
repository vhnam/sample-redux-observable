export const getRequestType = (type) => {
  return (status) => `${type}_${status}`;
};
