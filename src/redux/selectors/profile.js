export const selectProfile = () => {
  return (store) => {
    return store.profile.data;
  };
};
