export const selectAccessToken = () => {
  return (store) => {
    return store.session.data?.access_token;
  };
};
