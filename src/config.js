const config = {
  app: {
    index: '/',
    homepage: '/app',
  },
  apis: {
    authorize: {
      url: 'https://accounts.spotify.com/authorize',
      method: 'GET',
    },
    token: {
      url: 'https://accounts.spotify.com/api/token',
      method: 'POST',
    },
    getProfile: {
      url: 'https://api.spotify.com/v1/me',
      method: 'GET',
    },
    getPlaylists: {
      url: (user_id) => `https://api.spotify.com/v1/users/${user_id}/playlists`,
      method: 'GET',
    },
    getTracks: {
      url: (playlist_id) =>
        `https://api.spotify.com/v1/playlists/${playlist_id}/tracks`,
      method: 'GET',
    },
  },
  env: {
    client_id: process.env.REACT_APP_CLIENT_ID,
    client_secret: process.env.REACT_APP_CLIENT_SECRET,
    redirect_uri: process.env.REACT_APP_REDIRECT_URI,
  },
};

export default config;
