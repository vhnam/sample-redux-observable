export const selectPlaylists = () => {
  return (store) => {
    return store.playlists.data;
  };
};
