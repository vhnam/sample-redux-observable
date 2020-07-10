const config = {
  apis: {
    signIn: {
      url: 'https://accounts.spotify.com/authorize',
      method: 'GET',
    },
  },
  env: {
    client_id: process.env.REACT_APP_CLIENT_ID,
    redirect_uri: process.env.REACT_APP_REDIRECT_URI,
  },
};

export default config;
